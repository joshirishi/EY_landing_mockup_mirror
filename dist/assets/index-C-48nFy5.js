function ih(i,o){for(var s=0;s<o.length;s++){const p=o[s];if(typeof p!="string"&&!Array.isArray(p)){for(const c in p)if(c!=="default"&&!(c in i)){const f=Object.getOwnPropertyDescriptor(p,c);f&&Object.defineProperty(i,c,f.get?f:{enumerable:!0,get:()=>p[c]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))p(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&p(g)}).observe(document,{childList:!0,subtree:!0});function s(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function p(c){if(c.ep)return;c.ep=!0;const f=s(c);fetch(c.href,f)}})();function ah(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ss={exports:{}},ta={},As={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function oh(){if(Mu)return Ae;Mu=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),b=Symbol.iterator;function S(A){return A===null||typeof A!="object"?null:(A=b&&A[b]||A["@@iterator"],typeof A=="function"?A:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,B={};function P(A,D,fe){this.props=A,this.context=D,this.refs=B,this.updater=fe||I}P.prototype.isReactComponent={},P.prototype.setState=function(A,D){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,D,"setState")},P.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=P.prototype;function U(A,D,fe){this.props=A,this.context=D,this.refs=B,this.updater=fe||I}var K=U.prototype=new X;K.constructor=U,_(K,P.prototype),K.isPureReactComponent=!0;var ye=Array.isArray,me=Object.prototype.hasOwnProperty,Ee={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function de(A,D,fe){var ge,he={},ke=null,Be=null;if(D!=null)for(ge in D.ref!==void 0&&(Be=D.ref),D.key!==void 0&&(ke=""+D.key),D)me.call(D,ge)&&!R.hasOwnProperty(ge)&&(he[ge]=D[ge]);var ze=arguments.length-2;if(ze===1)he.children=fe;else if(1<ze){for(var We=Array(ze),bt=0;bt<ze;bt++)We[bt]=arguments[bt+2];he.children=We}if(A&&A.defaultProps)for(ge in ze=A.defaultProps,ze)he[ge]===void 0&&(he[ge]=ze[ge]);return{$$typeof:i,type:A,key:ke,ref:Be,props:he,_owner:Ee.current}}function xe(A,D){return{$$typeof:i,type:A.type,key:D,ref:A.ref,props:A.props,_owner:A._owner}}function Se(A){return typeof A=="object"&&A!==null&&A.$$typeof===i}function Te(A){var D={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(fe){return D[fe]})}var Pe=/\/+/g;function Ve(A,D){return typeof A=="object"&&A!==null&&A.key!=null?Te(""+A.key):D.toString(36)}function Re(A,D,fe,ge,he){var ke=typeof A;(ke==="undefined"||ke==="boolean")&&(A=null);var Be=!1;if(A===null)Be=!0;else switch(ke){case"string":case"number":Be=!0;break;case"object":switch(A.$$typeof){case i:case o:Be=!0}}if(Be)return Be=A,he=he(Be),A=ge===""?"."+Ve(Be,0):ge,ye(he)?(fe="",A!=null&&(fe=A.replace(Pe,"$&/")+"/"),Re(he,D,fe,"",function(bt){return bt})):he!=null&&(Se(he)&&(he=xe(he,fe+(!he.key||Be&&Be.key===he.key?"":(""+he.key).replace(Pe,"$&/")+"/")+A)),D.push(he)),1;if(Be=0,ge=ge===""?".":ge+":",ye(A))for(var ze=0;ze<A.length;ze++){ke=A[ze];var We=ge+Ve(ke,ze);Be+=Re(ke,D,fe,We,he)}else if(We=S(A),typeof We=="function")for(A=We.call(A),ze=0;!(ke=A.next()).done;)ke=ke.value,We=ge+Ve(ke,ze++),Be+=Re(ke,D,fe,We,he);else if(ke==="object")throw D=String(A),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return Be}function Ge(A,D,fe){if(A==null)return A;var ge=[],he=0;return Re(A,ge,"","",function(ke){return D.call(fe,ke,he++)}),ge}function je(A){if(A._status===-1){var D=A._result;D=D(),D.then(function(fe){(A._status===0||A._status===-1)&&(A._status=1,A._result=fe)},function(fe){(A._status===0||A._status===-1)&&(A._status=2,A._result=fe)}),A._status===-1&&(A._status=0,A._result=D)}if(A._status===1)return A._result.default;throw A._result}var we={current:null},$={transition:null},te={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:$,ReactCurrentOwner:Ee};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Ge,forEach:function(A,D,fe){Ge(A,function(){D.apply(this,arguments)},fe)},count:function(A){var D=0;return Ge(A,function(){D++}),D},toArray:function(A){return Ge(A,function(D){return D})||[]},only:function(A){if(!Se(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ae.Component=P,Ae.Fragment=s,Ae.Profiler=c,Ae.PureComponent=U,Ae.StrictMode=p,Ae.Suspense=m,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Ae.act=Z,Ae.cloneElement=function(A,D,fe){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var ge=_({},A.props),he=A.key,ke=A.ref,Be=A._owner;if(D!=null){if(D.ref!==void 0&&(ke=D.ref,Be=Ee.current),D.key!==void 0&&(he=""+D.key),A.type&&A.type.defaultProps)var ze=A.type.defaultProps;for(We in D)me.call(D,We)&&!R.hasOwnProperty(We)&&(ge[We]=D[We]===void 0&&ze!==void 0?ze[We]:D[We])}var We=arguments.length-2;if(We===1)ge.children=fe;else if(1<We){ze=Array(We);for(var bt=0;bt<We;bt++)ze[bt]=arguments[bt+2];ge.children=ze}return{$$typeof:i,type:A.type,key:he,ref:ke,props:ge,_owner:Be}},Ae.createContext=function(A){return A={$$typeof:g,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:f,_context:A},A.Consumer=A},Ae.createElement=de,Ae.createFactory=function(A){var D=de.bind(null,A);return D.type=A,D},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(A){return{$$typeof:x,render:A}},Ae.isValidElement=Se,Ae.lazy=function(A){return{$$typeof:k,_payload:{_status:-1,_result:A},_init:je}},Ae.memo=function(A,D){return{$$typeof:v,type:A,compare:D===void 0?null:D}},Ae.startTransition=function(A){var D=$.transition;$.transition={};try{A()}finally{$.transition=D}},Ae.unstable_act=Z,Ae.useCallback=function(A,D){return we.current.useCallback(A,D)},Ae.useContext=function(A){return we.current.useContext(A)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(A){return we.current.useDeferredValue(A)},Ae.useEffect=function(A,D){return we.current.useEffect(A,D)},Ae.useId=function(){return we.current.useId()},Ae.useImperativeHandle=function(A,D,fe){return we.current.useImperativeHandle(A,D,fe)},Ae.useInsertionEffect=function(A,D){return we.current.useInsertionEffect(A,D)},Ae.useLayoutEffect=function(A,D){return we.current.useLayoutEffect(A,D)},Ae.useMemo=function(A,D){return we.current.useMemo(A,D)},Ae.useReducer=function(A,D,fe){return we.current.useReducer(A,D,fe)},Ae.useRef=function(A){return we.current.useRef(A)},Ae.useState=function(A){return we.current.useState(A)},Ae.useSyncExternalStore=function(A,D,fe){return we.current.useSyncExternalStore(A,D,fe)},Ae.useTransition=function(){return we.current.useTransition()},Ae.version="18.3.1",Ae}var Ru;function qs(){return Ru||(Ru=1,As.exports=oh()),As.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function lh(){if(Bu)return ta;Bu=1;var i=qs(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function g(x,m,v){var k,b={},S=null,I=null;v!==void 0&&(S=""+v),m.key!==void 0&&(S=""+m.key),m.ref!==void 0&&(I=m.ref);for(k in m)p.call(m,k)&&!f.hasOwnProperty(k)&&(b[k]=m[k]);if(x&&x.defaultProps)for(k in m=x.defaultProps,m)b[k]===void 0&&(b[k]=m[k]);return{$$typeof:o,type:x,key:S,ref:I,props:b,_owner:c.current}}return ta.Fragment=s,ta.jsx=g,ta.jsxs=g,ta}var Du;function sh(){return Du||(Du=1,Ss.exports=lh()),Ss.exports}var r=sh(),zo={},Fs={exports:{}},Tt={},zs={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function dh(){return Pu||(Pu=1,(function(i){function o($,te){var Z=$.length;$.push(te);e:for(;0<Z;){var A=Z-1>>>1,D=$[A];if(0<c(D,te))$[A]=te,$[Z]=D,Z=A;else break e}}function s($){return $.length===0?null:$[0]}function p($){if($.length===0)return null;var te=$[0],Z=$.pop();if(Z!==te){$[0]=Z;e:for(var A=0,D=$.length,fe=D>>>1;A<fe;){var ge=2*(A+1)-1,he=$[ge],ke=ge+1,Be=$[ke];if(0>c(he,Z))ke<D&&0>c(Be,he)?($[A]=Be,$[ke]=Z,A=ke):($[A]=he,$[ge]=Z,A=ge);else if(ke<D&&0>c(Be,Z))$[A]=Be,$[ke]=Z,A=ke;else break e}}return te}function c($,te){var Z=$.sortIndex-te.sortIndex;return Z!==0?Z:$.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var g=Date,x=g.now();i.unstable_now=function(){return g.now()-x}}var m=[],v=[],k=1,b=null,S=3,I=!1,_=!1,B=!1,P=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K($){for(var te=s(v);te!==null;){if(te.callback===null)p(v);else if(te.startTime<=$)p(v),te.sortIndex=te.expirationTime,o(m,te);else break;te=s(v)}}function ye($){if(B=!1,K($),!_)if(s(m)!==null)_=!0,je(me);else{var te=s(v);te!==null&&we(ye,te.startTime-$)}}function me($,te){_=!1,B&&(B=!1,X(de),de=-1),I=!0;var Z=S;try{for(K(te),b=s(m);b!==null&&(!(b.expirationTime>te)||$&&!Te());){var A=b.callback;if(typeof A=="function"){b.callback=null,S=b.priorityLevel;var D=A(b.expirationTime<=te);te=i.unstable_now(),typeof D=="function"?b.callback=D:b===s(m)&&p(m),K(te)}else p(m);b=s(m)}if(b!==null)var fe=!0;else{var ge=s(v);ge!==null&&we(ye,ge.startTime-te),fe=!1}return fe}finally{b=null,S=Z,I=!1}}var Ee=!1,R=null,de=-1,xe=5,Se=-1;function Te(){return!(i.unstable_now()-Se<xe)}function Pe(){if(R!==null){var $=i.unstable_now();Se=$;var te=!0;try{te=R(!0,$)}finally{te?Ve():(Ee=!1,R=null)}}else Ee=!1}var Ve;if(typeof U=="function")Ve=function(){U(Pe)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Ge=Re.port2;Re.port1.onmessage=Pe,Ve=function(){Ge.postMessage(null)}}else Ve=function(){P(Pe,0)};function je($){R=$,Ee||(Ee=!0,Ve())}function we($,te){de=P(function(){$(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){_||I||(_=!0,je(me))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_getFirstCallbackNode=function(){return s(m)},i.unstable_next=function($){switch(S){case 1:case 2:case 3:var te=3;break;default:te=S}var Z=S;S=te;try{return $()}finally{S=Z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,te){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=S;S=$;try{return te()}finally{S=Z}},i.unstable_scheduleCallback=function($,te,Z){var A=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?A+Z:A):Z=A,$){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Z+D,$={id:k++,callback:te,priorityLevel:$,startTime:Z,expirationTime:D,sortIndex:-1},Z>A?($.sortIndex=Z,o(v,$),s(m)===null&&$===s(v)&&(B?(X(de),de=-1):B=!0,we(ye,Z-A))):($.sortIndex=D,o(m,$),_||I||(_=!0,je(me))),$},i.unstable_shouldYield=Te,i.unstable_wrapCallback=function($){var te=S;return function(){var Z=S;S=te;try{return $.apply(this,arguments)}finally{S=Z}}}})(Is)),Is}var Hu;function ch(){return Hu||(Hu=1,zs.exports=dh()),zs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function uh(){if(_u)return Tt;_u=1;var i=qs(),o=ch();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,c={};function f(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(c[e]=t,e=0;e<t.length;e++)p.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},b={};function S(e){return m.call(b,e)?!0:m.call(k,e)?!1:v.test(e)?b[e]=!0:(k[e]=!0,!1)}function I(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,n,a){if(t===null||typeof t>"u"||I(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,n,a,l,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var X=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(X,U);P[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(X,U);P[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(X,U);P[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,t,n,a){var l=P.hasOwnProperty(t)?P[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,n,l,a)&&(n=null),a||l===null?S(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,a=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var ye=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),Te=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),$=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,A;function D(e){if(A===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var fe=!1;function ge(e,t){if(!e||fe)return"";fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var a=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){a=M}e.call(t.prototype)}else{try{throw Error()}catch(M){a=M}e()}}catch(M){if(M&&a&&typeof M.stack=="string"){for(var l=M.stack.split(`
`),d=a.stack.split(`
`),h=l.length-1,y=d.length-1;1<=h&&0<=y&&l[h]!==d[y];)y--;for(;1<=h&&0<=y;h--,y--)if(l[h]!==d[y]){if(h!==1||y!==1)do if(h--,y--,0>y||l[h]!==d[y]){var j=`
`+l[h].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=h&&0<=y);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function he(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case Ee:return"Portal";case xe:return"Profiler";case de:return"StrictMode";case Ve:return"Suspense";case Re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case Se:return(e._context.displayName||"Context")+".Provider";case Pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ge:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function Be(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ze(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function We(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bt(e){var t=We(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){a=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rr(e){e._valueTracker||(e._valueTracker=bt(e))}function at(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=We(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Br(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=ze(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dn(e,t){t=t.checked,t!=null&&K(e,"checked",t,!1)}function hi(e,t){dn(e,t);var n=ze(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dr(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dr(e,t.type,ze(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dr(e,t,n){(t!=="number"||tn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function Mn(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ze(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ka(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(ur(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ze(n)}}function cn(e,t){var n=ze(t.value),a=ze(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Rn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Et,$t=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Et=Et||document.createElement("div"),Et.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Et.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xi=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){xi.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fr[t]=fr[e]})});function Ca(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fr.hasOwnProperty(e)&&fr[e]?(""+t).trim():t+"px"}function Vt(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=Ca(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,l):e[n]=l}}var ja=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pr(e,t){if(t){if(ja[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Hr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function _r(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,bn=null,un=null;function Ea(e){if(e=_i(e)){if(typeof Dn!="function")throw Error(s(280));var t=e.stateNode;t&&(t=$a(t),Dn(e.stateNode,e.type,t))}}function yi(e){bn?un?un.push(e):un=[e]:bn=e}function Sa(){if(bn){var e=bn,t=un;if(un=bn=null,Ea(e),t)for(e=0;e<t.length;e++)Ea(t[e])}}function bi(e,t){return e(t)}function hr(){}var Pn=!1;function wi(e,t,n){if(Pn)return e(t,n);Pn=!0;try{return bi(e,t,n)}finally{Pn=!1,(bn!==null||un!==null)&&(hr(),Sa())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var a=$a(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ki=!1;if(x)try{var w={};Object.defineProperty(w,"passive",{get:function(){ki=!0}}),window.addEventListener("test",w,w),window.removeEventListener("test",w,w)}catch{ki=!1}function F(e,t,n,a,l,d,h,y,j){var M=Array.prototype.slice.call(arguments,3);try{t.apply(n,M)}catch(W){this.onError(W)}}var N=!1,O=null,G=!1,oe=null,ce={onError:function(e){N=!0,O=e}};function J(e,t,n,a,l,d,h,y,j){N=!1,O=null,F.apply(ce,arguments)}function ne(e,t,n,a,l,d,h,y,j){if(J.apply(this,arguments),N){if(N){var M=O;N=!1,O=null}else throw Error(s(198));G||(G=!0,oe=M)}}function ie(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function be(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function se(e){if(ie(e)!==e)throw Error(s(188))}function Ce(e){var t=e.alternate;if(!t){if(t=ie(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var d=l.alternate;if(d===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===n)return se(l),e;if(d===a)return se(l),t;d=d.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=d;else{for(var h=!1,y=l.child;y;){if(y===n){h=!0,n=l,a=d;break}if(y===a){h=!0,a=l,n=d;break}y=y.sibling}if(!h){for(y=d.child;y;){if(y===n){h=!0,n=d,a=l;break}if(y===a){h=!0,a=d,n=l;break}y=y.sibling}if(!h)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Ie(e){return e=Ce(e),e!==null?nt(e):null}function nt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nt(e);if(t!==null)return t;e=e.sibling}return null}var et=o.unstable_scheduleCallback,st=o.unstable_cancelCallback,De=o.unstable_shouldYield,St=o.unstable_requestPaint,He=o.unstable_now,mr=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,Bt=o.unstable_UserBlockingPriority,Hn=o.unstable_NormalPriority,xr=o.unstable_LowPriority,pn=o.unstable_IdlePriority,wn=null,wt=null;function Le(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(wn,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:qe,_n=Math.log,kn=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(_n(e)/kn|0)|0}var Cn=64,vr=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,d=e.pingedLanes,h=n&268435455;if(h!==0){var y=h&~l;y!==0?a=yr(y):(d&=h,d!==0&&(a=yr(d)))}else h=n&~l,h!==0?a=yr(h):d!==0&&(a=yr(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Oe(t),l=1<<n,a|=e[n],t&=~l;return a}function Cf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Oe(d),y=1<<h,j=l[h];j===-1?((y&n)===0||(y&a)!==0)&&(l[h]=Cf(y,t)):j<=t&&(e.expiredLanes|=y),d&=~y}}function Go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ud(){var e=Cn;return Cn<<=1,(Cn&4194240)===0&&(Cn=64),e}function qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Ef(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),d=1<<l;t[l]=0,a[l]=-1,e[l]=-1,n&=~d}}function Zo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Oe(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}var _e=0;function pd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fd,Ko,hd,gd,md,Qo=!1,Fa=[],On=null,Wn=null,$n=null,ji=new Map,Ei=new Map,Vn=[],Sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Si(e,t,n,a,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:d,targetContainers:[l]},t!==null&&(t=_i(t),t!==null&&Ko(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Af(e,t,n,a,l){switch(t){case"focusin":return On=Si(On,e,t,n,a,l),!0;case"dragenter":return Wn=Si(Wn,e,t,n,a,l),!0;case"mouseover":return $n=Si($n,e,t,n,a,l),!0;case"pointerover":var d=l.pointerId;return ji.set(d,Si(ji.get(d)||null,e,t,n,a,l)),!0;case"gotpointercapture":return d=l.pointerId,Ei.set(d,Si(Ei.get(d)||null,e,t,n,a,l)),!0}return!1}function vd(e){var t=br(e.target);if(t!==null){var n=ie(t);if(n!==null){if(t=n.tag,t===13){if(t=be(n),t!==null){e.blockedOn=t,md(e.priority,function(){hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);vi=a,n.target.dispatchEvent(a),vi=null}else return t=_i(n),t!==null&&Ko(t),e.blockedOn=n,!1;t.shift()}return!0}function yd(e,t,n){za(e)&&n.delete(t)}function Ff(){Qo=!1,On!==null&&za(On)&&(On=null),Wn!==null&&za(Wn)&&(Wn=null),$n!==null&&za($n)&&($n=null),ji.forEach(yd),Ei.forEach(yd)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ff)))}function Fi(e){function t(l){return Ai(l,e)}if(0<Fa.length){Ai(Fa[0],e);for(var n=1;n<Fa.length;n++){var a=Fa[n];a.blockedOn===e&&(a.blockedOn=null)}}for(On!==null&&Ai(On,e),Wn!==null&&Ai(Wn,e),$n!==null&&Ai($n,e),ji.forEach(t),Ei.forEach(t),n=0;n<Vn.length;n++)a=Vn[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)vd(n),n.blockedOn===null&&Vn.shift()}var Or=ye.ReactCurrentBatchConfig,Ia=!0;function zf(e,t,n,a){var l=_e,d=Or.transition;Or.transition=null;try{_e=1,Xo(e,t,n,a)}finally{_e=l,Or.transition=d}}function If(e,t,n,a){var l=_e,d=Or.transition;Or.transition=null;try{_e=4,Xo(e,t,n,a)}finally{_e=l,Or.transition=d}}function Xo(e,t,n,a){if(Ia){var l=Jo(e,t,n,a);if(l===null)ml(e,t,a,La,n),xd(e,a);else if(Af(l,e,t,n,a))a.stopPropagation();else if(xd(e,a),t&4&&-1<Sf.indexOf(e)){for(;l!==null;){var d=_i(l);if(d!==null&&fd(d),d=Jo(e,t,n,a),d===null&&ml(e,t,a,La,n),d===l)break;l=d}l!==null&&a.stopPropagation()}else ml(e,t,a,null,n)}}var La=null;function Jo(e,t,n,a){if(La=null,e=_r(a),e=br(e),e!==null)if(t=ie(e),t===null)e=null;else if(n=t.tag,n===13){if(e=be(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return La=e,null}function bd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mr()){case Ut:return 1;case Bt:return 4;case Hn:case xr:return 16;case pn:return 536870912;default:return 16}default:return 16}}var Un=null,el=null,Ta=null;function wd(){if(Ta)return Ta;var e,t=el,n=t.length,a,l="value"in Un?Un.value:Un.textContent,d=l.length;for(e=0;e<n&&t[e]===l[e];e++);var h=n-e;for(a=1;a<=h&&t[n-a]===l[d-a];a++);return Ta=l.slice(e,1<a?1-a:void 0)}function Na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ma(){return!0}function kd(){return!1}function Dt(e){function t(n,a,l,d,h){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ma:kd,this.isPropagationStopped=kd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Dt(Wr),zi=Z({},Wr,{view:0,detail:0}),Lf=Dt(zi),nl,rl,Ii,Ra=Z({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(nl=e.screenX-Ii.screenX,rl=e.screenY-Ii.screenY):rl=nl=0,Ii=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),Cd=Dt(Ra),Tf=Z({},Ra,{dataTransfer:0}),Nf=Dt(Tf),Mf=Z({},zi,{relatedTarget:0}),il=Dt(Mf),Rf=Z({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bf=Dt(Rf),Df=Z({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Dt(Df),Hf=Z({},Wr,{data:0}),jd=Dt(Hf),_f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wf[e])?!!t[e]:!1}function al(){return $f}var Vf=Z({},zi,{key:function(e){if(e.key){var t=_f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Of[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?Na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uf=Dt(Vf),Yf=Z({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=Dt(Yf),Gf=Z({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),qf=Dt(Gf),Zf=Z({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kf=Dt(Zf),Qf=Z({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xf=Dt(Qf),Jf=[9,13,27,32],ol=x&&"CompositionEvent"in window,Li=null;x&&"documentMode"in document&&(Li=document.documentMode);var e0=x&&"TextEvent"in window&&!Li,Sd=x&&(!ol||Li&&8<Li&&11>=Li),Ad=" ",Fd=!1;function zd(e,t){switch(e){case"keyup":return Jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function t0(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(Fd=!0,Ad);case"textInput":return e=t.data,e===Ad&&Fd?null:e;default:return null}}function n0(e,t){if($r)return e==="compositionend"||!ol&&zd(e,t)?(e=wd(),Ta=el=Un=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sd&&t.locale!=="ko"?null:t.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r0[e.type]:t==="textarea"}function Td(e,t,n,a){yi(a),t=_a(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ti=null,Ni=null;function i0(e){Kd(e,0)}function Ba(e){var t=qr(e);if(at(t))return e}function a0(e,t){if(e==="change")return t}var Nd=!1;if(x){var ll;if(x){var sl="oninput"in document;if(!sl){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),sl=typeof Md.oninput=="function"}ll=sl}else ll=!1;Nd=ll&&(!document.documentMode||9<document.documentMode)}function Rd(){Ti&&(Ti.detachEvent("onpropertychange",Bd),Ni=Ti=null)}function Bd(e){if(e.propertyName==="value"&&Ba(Ni)){var t=[];Td(t,Ni,e,_r(e)),wi(i0,t)}}function o0(e,t,n){e==="focusin"?(Rd(),Ti=t,Ni=n,Ti.attachEvent("onpropertychange",Bd)):e==="focusout"&&Rd()}function l0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(Ni)}function s0(e,t){if(e==="click")return Ba(t)}function d0(e,t){if(e==="input"||e==="change")return Ba(t)}function c0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:c0;function Mi(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!m.call(t,l)||!nn(e[l],t[l]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pd(e,t){var n=Dd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dd(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _d(){for(var e=window,t=tn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tn(e.document)}return t}function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function u0(e){var t=_d(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hd(n.ownerDocument.documentElement,n)){if(a!==null&&dl(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,d=Math.min(a.start,l);a=a.end===void 0?d:Math.min(a.end,l),!e.extend&&d>a&&(l=a,a=d,d=l),l=Pd(n,d);var h=Pd(n,a);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p0=x&&"documentMode"in document&&11>=document.documentMode,Vr=null,cl=null,Ri=null,ul=!1;function Od(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||Vr==null||Vr!==tn(a)||(a=Vr,"selectionStart"in a&&dl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ri&&Mi(Ri,a)||(Ri=a,a=_a(cl,"onSelect"),0<a.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Vr)))}function Da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ur={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},pl={},Wd={};x&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Pa(e){if(pl[e])return pl[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wd)return pl[e]=t[n];return e}var $d=Pa("animationend"),Vd=Pa("animationiteration"),Ud=Pa("animationstart"),Yd=Pa("transitionend"),Gd=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){Gd.set(e,t),f(t,[e])}for(var fl=0;fl<qd.length;fl++){var hl=qd[fl],f0=hl.toLowerCase(),h0=hl[0].toUpperCase()+hl.slice(1);Yn(f0,"on"+h0)}Yn($d,"onAnimationEnd"),Yn(Vd,"onAnimationIteration"),Yn(Ud,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn(Yd,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function Zd(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,ne(a,t,void 0,e),e.currentTarget=null}function Kd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var h=a.length-1;0<=h;h--){var y=a[h],j=y.instance,M=y.currentTarget;if(y=y.listener,j!==d&&l.isPropagationStopped())break e;Zd(l,y,M),d=j}else for(h=0;h<a.length;h++){if(y=a[h],j=y.instance,M=y.currentTarget,y=y.listener,j!==d&&l.isPropagationStopped())break e;Zd(l,y,M),d=j}}}if(G)throw e=oe,G=!1,oe=null,e}function Ue(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var a=e+"__bubble";n.has(a)||(Qd(t,e,2,!1),n.add(a))}function gl(e,t,n){var a=0;t&&(a|=4),Qd(n,e,a,t)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[Ha]){e[Ha]=!0,p.forEach(function(n){n!=="selectionchange"&&(g0.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ha]||(t[Ha]=!0,gl("selectionchange",!1,t))}}function Qd(e,t,n,a){switch(bd(t)){case 1:var l=zf;break;case 4:l=If;break;default:l=Xo}n=l.bind(null,t,n,e),l=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ml(e,t,n,a,l){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var y=a.stateNode.containerInfo;if(y===l||y.nodeType===8&&y.parentNode===l)break;if(h===4)for(h=a.return;h!==null;){var j=h.tag;if((j===3||j===4)&&(j=h.stateNode.containerInfo,j===l||j.nodeType===8&&j.parentNode===l))return;h=h.return}for(;y!==null;){if(h=br(y),h===null)return;if(j=h.tag,j===5||j===6){a=d=h;continue e}y=y.parentNode}}a=a.return}wi(function(){var M=d,W=_r(n),V=[];e:{var H=Gd.get(e);if(H!==void 0){var Q=tl,re=e;switch(e){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":Q=Uf;break;case"focusin":re="focus",Q=il;break;case"focusout":re="blur",Q=il;break;case"beforeblur":case"afterblur":Q=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=qf;break;case $d:case Vd:case Ud:Q=Bf;break;case Yd:Q=Kf;break;case"scroll":Q=Lf;break;case"wheel":Q=Xf;break;case"copy":case"cut":case"paste":Q=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Ed}var ae=(t&4)!==0,tt=!ae&&e==="scroll",L=ae?H!==null?H+"Capture":null:H;ae=[];for(var E=M,T;E!==null;){T=E;var Y=T.stateNode;if(T.tag===5&&Y!==null&&(T=Y,L!==null&&(Y=gr(E,L),Y!=null&&ae.push(Pi(E,Y,T)))),tt)break;E=E.return}0<ae.length&&(H=new Q(H,re,null,n,W),V.push({event:H,listeners:ae}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",H&&n!==vi&&(re=n.relatedTarget||n.fromElement)&&(br(re)||re[jn]))break e;if((Q||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,Q?(re=n.relatedTarget||n.toElement,Q=M,re=re?br(re):null,re!==null&&(tt=ie(re),re!==tt||re.tag!==5&&re.tag!==6)&&(re=null)):(Q=null,re=M),Q!==re)){if(ae=Cd,Y="onMouseLeave",L="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Ed,Y="onPointerLeave",L="onPointerEnter",E="pointer"),tt=Q==null?H:qr(Q),T=re==null?H:qr(re),H=new ae(Y,E+"leave",Q,n,W),H.target=tt,H.relatedTarget=T,Y=null,br(W)===M&&(ae=new ae(L,E+"enter",re,n,W),ae.target=T,ae.relatedTarget=tt,Y=ae),tt=Y,Q&&re)t:{for(ae=Q,L=re,E=0,T=ae;T;T=Yr(T))E++;for(T=0,Y=L;Y;Y=Yr(Y))T++;for(;0<E-T;)ae=Yr(ae),E--;for(;0<T-E;)L=Yr(L),T--;for(;E--;){if(ae===L||L!==null&&ae===L.alternate)break t;ae=Yr(ae),L=Yr(L)}ae=null}else ae=null;Q!==null&&Xd(V,H,Q,ae,!1),re!==null&&tt!==null&&Xd(V,tt,re,ae,!0)}}e:{if(H=M?qr(M):window,Q=H.nodeName&&H.nodeName.toLowerCase(),Q==="select"||Q==="input"&&H.type==="file")var le=a0;else if(Ld(H))if(Nd)le=d0;else{le=l0;var ue=o0}else(Q=H.nodeName)&&Q.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(le=s0);if(le&&(le=le(e,M))){Td(V,le,n,W);break e}ue&&ue(e,H,M),e==="focusout"&&(ue=H._wrapperState)&&ue.controlled&&H.type==="number"&&Dr(H,"number",H.value)}switch(ue=M?qr(M):window,e){case"focusin":(Ld(ue)||ue.contentEditable==="true")&&(Vr=ue,cl=M,Ri=null);break;case"focusout":Ri=cl=Vr=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Od(V,n,W);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":Od(V,n,W)}var pe;if(ol)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else $r?zd(e,n)&&(ve="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ve="onCompositionStart");ve&&(Sd&&n.locale!=="ko"&&($r||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&$r&&(pe=wd()):(Un=W,el="value"in Un?Un.value:Un.textContent,$r=!0)),ue=_a(M,ve),0<ue.length&&(ve=new jd(ve,e,null,n,W),V.push({event:ve,listeners:ue}),pe?ve.data=pe:(pe=Id(n),pe!==null&&(ve.data=pe)))),(pe=e0?t0(e,n):n0(e,n))&&(M=_a(M,"onBeforeInput"),0<M.length&&(W=new jd("onBeforeInput","beforeinput",null,n,W),V.push({event:W,listeners:M}),W.data=pe))}Kd(V,t)})}function Pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _a(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=gr(e,n),d!=null&&a.unshift(Pi(e,d,l)),d=gr(e,t),d!=null&&a.push(Pi(e,d,l))),e=e.return}return a}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xd(e,t,n,a,l){for(var d=t._reactName,h=[];n!==null&&n!==a;){var y=n,j=y.alternate,M=y.stateNode;if(j!==null&&j===a)break;y.tag===5&&M!==null&&(y=M,l?(j=gr(n,d),j!=null&&h.unshift(Pi(n,j,y))):l||(j=gr(n,d),j!=null&&h.push(Pi(n,j,y)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var m0=/\r\n?/g,x0=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(m0,`
`).replace(x0,"")}function Oa(e,t,n){if(t=Jd(t),Jd(e)!==t&&n)throw Error(s(425))}function Wa(){}var xl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(b0)}:bl;function b0(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),Fi(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);Fi(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),fn="__reactFiber$"+Gr,Hi="__reactProps$"+Gr,jn="__reactContainer$"+Gr,kl="__reactEvents$"+Gr,w0="__reactListeners$"+Gr,k0="__reactHandles$"+Gr;function br(e){var t=e[fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jn]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tc(e);e!==null;){if(n=e[fn])return n;e=tc(e)}return t}e=n,n=e.parentNode}return null}function _i(e){return e=e[fn]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function $a(e){return e[Hi]||null}var Cl=[],Zr=-1;function qn(e){return{current:e}}function Ye(e){0>Zr||(e.current=Cl[Zr],Cl[Zr]=null,Zr--)}function $e(e,t){Zr++,Cl[Zr]=e.current,e.current=t}var Zn={},gt=qn(Zn),At=qn(!1),wr=Zn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return Zn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in n)l[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ft(e){return e=e.childContextTypes,e!=null}function Va(){Ye(At),Ye(gt)}function nc(e,t,n){if(gt.current!==Zn)throw Error(s(168));$e(gt,t),$e(At,n)}function rc(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(s(108,Be(e)||"Unknown",l));return Z({},n,a)}function Ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,wr=gt.current,$e(gt,e),$e(At,At.current),!0}function ic(e,t,n){var a=e.stateNode;if(!a)throw Error(s(169));n?(e=rc(e,t,wr),a.__reactInternalMemoizedMergedChildContext=e,Ye(At),Ye(gt),$e(gt,e)):Ye(At),$e(At,n)}var En=null,Ya=!1,jl=!1;function ac(e){En===null?En=[e]:En.push(e)}function C0(e){Ya=!0,ac(e)}function Kn(){if(!jl&&En!==null){jl=!0;var e=0,t=_e;try{var n=En;for(_e=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}En=null,Ya=!1}catch(l){throw En!==null&&(En=En.slice(e+1)),et(Ut,Kn),l}finally{_e=t,jl=!1}}return null}var Qr=[],Xr=0,Ga=null,qa=0,Yt=[],Gt=0,kr=null,Sn=1,An="";function Cr(e,t){Qr[Xr++]=qa,Qr[Xr++]=Ga,Ga=e,qa=t}function oc(e,t,n){Yt[Gt++]=Sn,Yt[Gt++]=An,Yt[Gt++]=kr,kr=e;var a=Sn;e=An;var l=32-Oe(a)-1;a&=~(1<<l),n+=1;var d=32-Oe(t)+l;if(30<d){var h=l-l%5;d=(a&(1<<h)-1).toString(32),a>>=h,l-=h,Sn=1<<32-Oe(t)+l|n<<l|a,An=d+e}else Sn=1<<d|n<<l|a,An=e}function El(e){e.return!==null&&(Cr(e,1),oc(e,1,0))}function Sl(e){for(;e===Ga;)Ga=Qr[--Xr],Qr[Xr]=null,qa=Qr[--Xr],Qr[Xr]=null;for(;e===kr;)kr=Yt[--Gt],Yt[Gt]=null,An=Yt[--Gt],Yt[Gt]=null,Sn=Yt[--Gt],Yt[Gt]=null}var Pt=null,Ht=null,Ze=!1,rn=null;function lc(e,t){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,Ht=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,Ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kr!==null?{id:Sn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pt=e,Ht=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(Ze){var t=Ht;if(t){var n=t;if(!sc(e,t)){if(Al(e))throw Error(s(418));t=Gn(n.nextSibling);var a=Pt;t&&sc(e,t)?lc(a,n):(e.flags=e.flags&-4097|2,Ze=!1,Pt=e)}}else{if(Al(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ze=!1,Pt=e}}}function dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function Za(e){if(e!==Pt)return!1;if(!Ze)return dc(e),Ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=Ht)){if(Al(e))throw cc(),Error(s(418));for(;t;)lc(e,t),t=Gn(t.nextSibling)}if(dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ht=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ht=null}}else Ht=Pt?Gn(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=Ht;e;)e=Gn(e.nextSibling)}function Jr(){Ht=Pt=null,Ze=!1}function zl(e){rn===null?rn=[e]:rn.push(e)}var j0=ye.ReactCurrentBatchConfig;function Oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var a=n.stateNode}if(!a)throw Error(s(147,e));var l=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var y=l.refs;h===null?delete y[d]:y[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Ka(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function pc(e){function t(L,E){if(e){var T=L.deletions;T===null?(L.deletions=[E],L.flags|=16):T.push(E)}}function n(L,E){if(!e)return null;for(;E!==null;)t(L,E),E=E.sibling;return null}function a(L,E){for(L=new Map;E!==null;)E.key!==null?L.set(E.key,E):L.set(E.index,E),E=E.sibling;return L}function l(L,E){return L=ir(L,E),L.index=0,L.sibling=null,L}function d(L,E,T){return L.index=T,e?(T=L.alternate,T!==null?(T=T.index,T<E?(L.flags|=2,E):T):(L.flags|=2,E)):(L.flags|=1048576,E)}function h(L){return e&&L.alternate===null&&(L.flags|=2),L}function y(L,E,T,Y){return E===null||E.tag!==6?(E=bs(T,L.mode,Y),E.return=L,E):(E=l(E,T),E.return=L,E)}function j(L,E,T,Y){var le=T.type;return le===R?W(L,E,T.props.children,Y,T.key):E!==null&&(E.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===je&&uc(le)===E.type)?(Y=l(E,T.props),Y.ref=Oi(L,E,T),Y.return=L,Y):(Y=wo(T.type,T.key,T.props,null,L.mode,Y),Y.ref=Oi(L,E,T),Y.return=L,Y)}function M(L,E,T,Y){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=ws(T,L.mode,Y),E.return=L,E):(E=l(E,T.children||[]),E.return=L,E)}function W(L,E,T,Y,le){return E===null||E.tag!==7?(E=Lr(T,L.mode,Y,le),E.return=L,E):(E=l(E,T),E.return=L,E)}function V(L,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=bs(""+E,L.mode,T),E.return=L,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case me:return T=wo(E.type,E.key,E.props,null,L.mode,T),T.ref=Oi(L,null,E),T.return=L,T;case Ee:return E=ws(E,L.mode,T),E.return=L,E;case je:var Y=E._init;return V(L,Y(E._payload),T)}if(ur(E)||te(E))return E=Lr(E,L.mode,T,null),E.return=L,E;Ka(L,E)}return null}function H(L,E,T,Y){var le=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return le!==null?null:y(L,E,""+T,Y);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case me:return T.key===le?j(L,E,T,Y):null;case Ee:return T.key===le?M(L,E,T,Y):null;case je:return le=T._init,H(L,E,le(T._payload),Y)}if(ur(T)||te(T))return le!==null?null:W(L,E,T,Y,null);Ka(L,T)}return null}function Q(L,E,T,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(T)||null,y(E,L,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case me:return L=L.get(Y.key===null?T:Y.key)||null,j(E,L,Y,le);case Ee:return L=L.get(Y.key===null?T:Y.key)||null,M(E,L,Y,le);case je:var ue=Y._init;return Q(L,E,T,ue(Y._payload),le)}if(ur(Y)||te(Y))return L=L.get(T)||null,W(E,L,Y,le,null);Ka(E,Y)}return null}function re(L,E,T,Y){for(var le=null,ue=null,pe=E,ve=E=0,ut=null;pe!==null&&ve<T.length;ve++){pe.index>ve?(ut=pe,pe=null):ut=pe.sibling;var Me=H(L,pe,T[ve],Y);if(Me===null){pe===null&&(pe=ut);break}e&&pe&&Me.alternate===null&&t(L,pe),E=d(Me,E,ve),ue===null?le=Me:ue.sibling=Me,ue=Me,pe=ut}if(ve===T.length)return n(L,pe),Ze&&Cr(L,ve),le;if(pe===null){for(;ve<T.length;ve++)pe=V(L,T[ve],Y),pe!==null&&(E=d(pe,E,ve),ue===null?le=pe:ue.sibling=pe,ue=pe);return Ze&&Cr(L,ve),le}for(pe=a(L,pe);ve<T.length;ve++)ut=Q(pe,L,ve,T[ve],Y),ut!==null&&(e&&ut.alternate!==null&&pe.delete(ut.key===null?ve:ut.key),E=d(ut,E,ve),ue===null?le=ut:ue.sibling=ut,ue=ut);return e&&pe.forEach(function(ar){return t(L,ar)}),Ze&&Cr(L,ve),le}function ae(L,E,T,Y){var le=te(T);if(typeof le!="function")throw Error(s(150));if(T=le.call(T),T==null)throw Error(s(151));for(var ue=le=null,pe=E,ve=E=0,ut=null,Me=T.next();pe!==null&&!Me.done;ve++,Me=T.next()){pe.index>ve?(ut=pe,pe=null):ut=pe.sibling;var ar=H(L,pe,Me.value,Y);if(ar===null){pe===null&&(pe=ut);break}e&&pe&&ar.alternate===null&&t(L,pe),E=d(ar,E,ve),ue===null?le=ar:ue.sibling=ar,ue=ar,pe=ut}if(Me.done)return n(L,pe),Ze&&Cr(L,ve),le;if(pe===null){for(;!Me.done;ve++,Me=T.next())Me=V(L,Me.value,Y),Me!==null&&(E=d(Me,E,ve),ue===null?le=Me:ue.sibling=Me,ue=Me);return Ze&&Cr(L,ve),le}for(pe=a(L,pe);!Me.done;ve++,Me=T.next())Me=Q(pe,L,ve,Me.value,Y),Me!==null&&(e&&Me.alternate!==null&&pe.delete(Me.key===null?ve:Me.key),E=d(Me,E,ve),ue===null?le=Me:ue.sibling=Me,ue=Me);return e&&pe.forEach(function(rh){return t(L,rh)}),Ze&&Cr(L,ve),le}function tt(L,E,T,Y){if(typeof T=="object"&&T!==null&&T.type===R&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case me:e:{for(var le=T.key,ue=E;ue!==null;){if(ue.key===le){if(le=T.type,le===R){if(ue.tag===7){n(L,ue.sibling),E=l(ue,T.props.children),E.return=L,L=E;break e}}else if(ue.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===je&&uc(le)===ue.type){n(L,ue.sibling),E=l(ue,T.props),E.ref=Oi(L,ue,T),E.return=L,L=E;break e}n(L,ue);break}else t(L,ue);ue=ue.sibling}T.type===R?(E=Lr(T.props.children,L.mode,Y,T.key),E.return=L,L=E):(Y=wo(T.type,T.key,T.props,null,L.mode,Y),Y.ref=Oi(L,E,T),Y.return=L,L=Y)}return h(L);case Ee:e:{for(ue=T.key;E!==null;){if(E.key===ue)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){n(L,E.sibling),E=l(E,T.children||[]),E.return=L,L=E;break e}else{n(L,E);break}else t(L,E);E=E.sibling}E=ws(T,L.mode,Y),E.return=L,L=E}return h(L);case je:return ue=T._init,tt(L,E,ue(T._payload),Y)}if(ur(T))return re(L,E,T,Y);if(te(T))return ae(L,E,T,Y);Ka(L,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(n(L,E.sibling),E=l(E,T),E.return=L,L=E):(n(L,E),E=bs(T,L.mode,Y),E.return=L,L=E),h(L)):n(L,E)}return tt}var ei=pc(!0),fc=pc(!1),Qa=qn(null),Xa=null,ti=null,Il=null;function Ll(){Il=ti=Xa=null}function Tl(e){var t=Qa.current;Ye(Qa),e._currentValue=t}function Nl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ni(e,t){Xa=e,Il=ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(zt=!0),e.firstContext=null)}function qt(e){var t=e._currentValue;if(Il!==e)if(e={context:e,memoizedValue:t,next:null},ti===null){if(Xa===null)throw Error(s(308));ti=e,Xa.dependencies={lanes:0,firstContext:e}}else ti=ti.next=e;return t}var jr=null;function Ml(e){jr===null?jr=[e]:jr.push(e)}function hc(e,t,n,a){var l=t.interleaved;return l===null?(n.next=n,Ml(t)):(n.next=l.next,l.next=n),t.interleaved=n,Fn(e,a)}function Fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ne&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Fn(e,n)}return l=a.interleaved,l===null?(t.next=t,Ml(a)):(t.next=l.next,l.next=t),a.interleaved=t,Fn(e,n)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Zo(e,n)}}function mc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var h={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};d===null?l=d=h:d=d.next=h,n=n.next}while(n!==null);d===null?l=d=t:d=d.next=t}else l=d=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,a){var l=e.updateQueue;Qn=!1;var d=l.firstBaseUpdate,h=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var j=y,M=j.next;j.next=null,h===null?d=M:h.next=M,h=j;var W=e.alternate;W!==null&&(W=W.updateQueue,y=W.lastBaseUpdate,y!==h&&(y===null?W.firstBaseUpdate=M:y.next=M,W.lastBaseUpdate=j))}if(d!==null){var V=l.baseState;h=0,W=M=j=null,y=d;do{var H=y.lane,Q=y.eventTime;if((a&H)===H){W!==null&&(W=W.next={eventTime:Q,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var re=e,ae=y;switch(H=t,Q=n,ae.tag){case 1:if(re=ae.payload,typeof re=="function"){V=re.call(Q,V,H);break e}V=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ae.payload,H=typeof re=="function"?re.call(Q,V,H):re,H==null)break e;V=Z({},V,H);break e;case 2:Qn=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,H=l.effects,H===null?l.effects=[y]:H.push(y))}else Q={eventTime:Q,lane:H,tag:y.tag,payload:y.payload,callback:y.callback,next:null},W===null?(M=W=Q,j=V):W=W.next=Q,h|=H;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;H=y,y=H.next,H.next=null,l.lastBaseUpdate=H,l.shared.pending=null}}while(!0);if(W===null&&(j=V),l.baseState=j,l.firstBaseUpdate=M,l.lastBaseUpdate=W,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);Ar|=h,e.lanes=h,e.memoizedState=V}}function xc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(s(191,l));l.call(a)}}}var Wi={},hn=qn(Wi),$i=qn(Wi),Vi=qn(Wi);function Er(e){if(e===Wi)throw Error(s(174));return e}function Bl(e,t){switch($e(Vi,t),$e($i,e),$e(hn,Wi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pr(t,e)}Ye(hn),$e(hn,t)}function ri(){Ye(hn),Ye($i),Ye(Vi)}function vc(e){Er(Vi.current);var t=Er(hn.current),n=pr(t,e.type);t!==n&&($e($i,e),$e(hn,n))}function Dl(e){$i.current===e&&(Ye(hn),Ye($i))}var Qe=qn(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pl=[];function Hl(){for(var e=0;e<Pl.length;e++)Pl[e]._workInProgressVersionPrimary=null;Pl.length=0}var no=ye.ReactCurrentDispatcher,_l=ye.ReactCurrentBatchConfig,Sr=0,Xe=null,ot=null,dt=null,ro=!1,Ui=!1,Yi=0,E0=0;function mt(){throw Error(s(321))}function Ol(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function Wl(e,t,n,a,l,d){if(Sr=d,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=e===null||e.memoizedState===null?z0:I0,e=n(a,l),Ui){d=0;do{if(Ui=!1,Yi=0,25<=d)throw Error(s(301));d+=1,dt=ot=null,t.updateQueue=null,no.current=L0,e=n(a,l)}while(Ui)}if(no.current=oo,t=ot!==null&&ot.next!==null,Sr=0,dt=ot=Xe=null,ro=!1,t)throw Error(s(300));return e}function $l(){var e=Yi!==0;return Yi=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Xe.memoizedState=dt=e:dt=dt.next=e,dt}function Zt(){if(ot===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var t=dt===null?Xe.memoizedState:dt.next;if(t!==null)dt=t,ot=e;else{if(e===null)throw Error(s(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?Xe.memoizedState=dt=e:dt=dt.next=e}return dt}function Gi(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Zt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=ot,l=a.baseQueue,d=n.pending;if(d!==null){if(l!==null){var h=l.next;l.next=d.next,d.next=h}a.baseQueue=l=d,n.pending=null}if(l!==null){d=l.next,a=a.baseState;var y=h=null,j=null,M=d;do{var W=M.lane;if((Sr&W)===W)j!==null&&(j=j.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),a=M.hasEagerState?M.eagerState:e(a,M.action);else{var V={lane:W,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};j===null?(y=j=V,h=a):j=j.next=V,Xe.lanes|=W,Ar|=W}M=M.next}while(M!==null&&M!==d);j===null?h=a:j.next=y,nn(a,t.memoizedState)||(zt=!0),t.memoizedState=a,t.baseState=h,t.baseQueue=j,n.lastRenderedState=a}if(e=n.interleaved,e!==null){l=e;do d=l.lane,Xe.lanes|=d,Ar|=d,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ul(e){var t=Zt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,d=t.memoizedState;if(l!==null){n.pending=null;var h=l=l.next;do d=e(d,h.action),h=h.next;while(h!==l);nn(d,t.memoizedState)||(zt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,a]}function yc(){}function bc(e,t){var n=Xe,a=Zt(),l=t(),d=!nn(a.memoizedState,l);if(d&&(a.memoizedState=l,zt=!0),a=a.queue,Yl(Cc.bind(null,n,a,e),[e]),a.getSnapshot!==t||d||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,qi(9,kc.bind(null,n,a,l,t),void 0,null),ct===null)throw Error(s(349));(Sr&30)!==0||wc(n,t,l)}return l}function wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kc(e,t,n,a){t.value=n,t.getSnapshot=a,jc(t)&&Ec(e)}function Cc(e,t,n){return n(function(){jc(t)&&Ec(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function Ec(e){var t=Fn(e,1);t!==null&&sn(t,e,1,-1)}function Sc(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=F0.bind(null,Xe,e),[t.memoizedState,e]}function qi(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Ac(){return Zt().memoizedState}function io(e,t,n,a){var l=gn();Xe.flags|=e,l.memoizedState=qi(1|t,n,void 0,a===void 0?null:a)}function ao(e,t,n,a){var l=Zt();a=a===void 0?null:a;var d=void 0;if(ot!==null){var h=ot.memoizedState;if(d=h.destroy,a!==null&&Ol(a,h.deps)){l.memoizedState=qi(t,n,d,a);return}}Xe.flags|=e,l.memoizedState=qi(1|t,n,d,a)}function Fc(e,t){return io(8390656,8,e,t)}function Yl(e,t){return ao(2048,8,e,t)}function zc(e,t){return ao(4,2,e,t)}function Ic(e,t){return ao(4,4,e,t)}function Lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tc(e,t,n){return n=n!=null?n.concat([e]):null,ao(4,4,Lc.bind(null,t,e),n)}function Gl(){}function Nc(e,t){var n=Zt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ol(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Mc(e,t){var n=Zt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ol(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Rc(e,t,n){return(Sr&21)===0?(e.baseState&&(e.baseState=!1,zt=!0),e.memoizedState=n):(nn(n,t)||(n=ud(),Xe.lanes|=n,Ar|=n,e.baseState=!0),t)}function S0(e,t){var n=_e;_e=n!==0&&4>n?n:4,e(!0);var a=_l.transition;_l.transition={};try{e(!1),t()}finally{_e=n,_l.transition=a}}function Bc(){return Zt().memoizedState}function A0(e,t,n){var a=nr(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Dc(e))Pc(t,n);else if(n=hc(e,t,n,a),n!==null){var l=Ct();sn(n,e,a,l),Hc(n,t,a)}}function F0(e,t,n){var a=nr(e),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dc(e))Pc(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,y=d(h,n);if(l.hasEagerState=!0,l.eagerState=y,nn(y,h)){var j=t.interleaved;j===null?(l.next=l,Ml(t)):(l.next=j.next,j.next=l),t.interleaved=l;return}}catch{}finally{}n=hc(e,t,l,a),n!==null&&(l=Ct(),sn(n,e,a,l),Hc(n,t,a))}}function Dc(e){var t=e.alternate;return e===Xe||t!==null&&t===Xe}function Pc(e,t){Ui=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hc(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Zo(e,n)}}var oo={readContext:qt,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},z0={readContext:qt,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:qt,useEffect:Fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,Lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=gn();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=A0.bind(null,Xe,e),[a.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Sc,useDebugValue:Gl,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Sc(!1),t=e[0];return e=S0.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Xe,l=gn();if(Ze){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),ct===null)throw Error(s(349));(Sr&30)!==0||wc(a,t,n)}l.memoizedState=n;var d={value:n,getSnapshot:t};return l.queue=d,Fc(Cc.bind(null,a,d,e),[e]),a.flags|=2048,qi(9,kc.bind(null,a,d,n,t),void 0,null),n},useId:function(){var e=gn(),t=ct.identifierPrefix;if(Ze){var n=An,a=Sn;n=(a&~(1<<32-Oe(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=E0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},I0={readContext:qt,useCallback:Nc,useContext:qt,useEffect:Yl,useImperativeHandle:Tc,useInsertionEffect:zc,useLayoutEffect:Ic,useMemo:Mc,useReducer:Vl,useRef:Ac,useState:function(){return Vl(Gi)},useDebugValue:Gl,useDeferredValue:function(e){var t=Zt();return Rc(t,ot.memoizedState,e)},useTransition:function(){var e=Vl(Gi)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:bc,useId:Bc,unstable_isNewReconciler:!1},L0={readContext:qt,useCallback:Nc,useContext:qt,useEffect:Yl,useImperativeHandle:Tc,useInsertionEffect:zc,useLayoutEffect:Ic,useMemo:Mc,useReducer:Ul,useRef:Ac,useState:function(){return Ul(Gi)},useDebugValue:Gl,useDeferredValue:function(e){var t=Zt();return ot===null?t.memoizedState=e:Rc(t,ot.memoizedState,e)},useTransition:function(){var e=Ul(Gi)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:bc,useId:Bc,unstable_isNewReconciler:!1};function an(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ql(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lo={isMounted:function(e){return(e=e._reactInternals)?ie(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ct(),l=nr(e),d=zn(a,l);d.payload=t,n!=null&&(d.callback=n),t=Xn(e,d,l),t!==null&&(sn(t,e,l,a),Ja(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ct(),l=nr(e),d=zn(a,l);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=Xn(e,d,l),t!==null&&(sn(t,e,l,a),Ja(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),a=nr(e),l=zn(n,a);l.tag=2,t!=null&&(l.callback=t),t=Xn(e,l,a),t!==null&&(sn(t,e,a,n),Ja(t,e,a))}};function _c(e,t,n,a,l,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,h):t.prototype&&t.prototype.isPureReactComponent?!Mi(n,a)||!Mi(l,d):!0}function Oc(e,t,n){var a=!1,l=Zn,d=t.contextType;return typeof d=="object"&&d!==null?d=qt(d):(l=Ft(t)?wr:gt.current,a=t.contextTypes,d=(a=a!=null)?Kr(e,l):Zn),t=new t(n,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lo,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function Wc(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&lo.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,a){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Rl(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=qt(d):(d=Ft(t)?wr:gt.current,l.context=Kr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(ql(e,t,d,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&lo.enqueueReplaceState(l,l.state,null),eo(e,n,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ii(e,t){try{var n="",a=t;do n+=he(a),a=a.return;while(a);var l=n}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function $c(e,t,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){go||(go=!0,ps=a),Ql(e,t)},n}function Vc(e,t,n){n=zn(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;n.payload=function(){return a(l)},n.callback=function(){Ql(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof a!="function"&&(er===null?er=new Set([this]):er.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),n}function Uc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new T0;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(l.add(n),e=Y0.bind(null,e,t,n),t.then(e,e))}function Yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,n,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zn(-1,1),t.tag=2,Xn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var N0=ye.ReactCurrentOwner,zt=!1;function kt(e,t,n,a){t.child=e===null?fc(t,null,n,a):ei(t,e.child,n,a)}function qc(e,t,n,a,l){n=n.render;var d=t.ref;return ni(t,l),a=Wl(e,t,n,a,d,l),n=$l(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,In(e,t,l)):(Ze&&n&&El(t),t.flags|=1,kt(e,t,a,l),t.child)}function Zc(e,t,n,a,l){if(e===null){var d=n.type;return typeof d=="function"&&!ys(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=d,Kc(e,t,d,a,l)):(e=wo(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var h=d.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(h,a)&&e.ref===t.ref)return In(e,t,l)}return t.flags|=1,e=ir(d,a),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,n,a,l){if(e!==null){var d=e.memoizedProps;if(Mi(d,a)&&e.ref===t.ref)if(zt=!1,t.pendingProps=a=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(zt=!0);else return t.lanes=e.lanes,In(e,t,l)}return Xl(e,t,n,a,l)}function Qc(e,t,n){var a=t.pendingProps,l=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(oi,_t),_t|=n;else{if((n&1073741824)===0)return e=d!==null?d.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(oi,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:n,$e(oi,_t),_t|=a}else d!==null?(a=d.baseLanes|n,t.memoizedState=null):a=n,$e(oi,_t),_t|=a;return kt(e,t,l,n),t.child}function Xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,n,a,l){var d=Ft(n)?wr:gt.current;return d=Kr(t,d),ni(t,l),n=Wl(e,t,n,a,d,l),a=$l(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,In(e,t,l)):(Ze&&a&&El(t),t.flags|=1,kt(e,t,n,l),t.child)}function Jc(e,t,n,a,l){if(Ft(n)){var d=!0;Ua(t)}else d=!1;if(ni(t,l),t.stateNode===null)co(e,t),Oc(t,n,a),Zl(t,n,a,l),a=!0;else if(e===null){var h=t.stateNode,y=t.memoizedProps;h.props=y;var j=h.context,M=n.contextType;typeof M=="object"&&M!==null?M=qt(M):(M=Ft(n)?wr:gt.current,M=Kr(t,M));var W=n.getDerivedStateFromProps,V=typeof W=="function"||typeof h.getSnapshotBeforeUpdate=="function";V||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==a||j!==M)&&Wc(t,h,a,M),Qn=!1;var H=t.memoizedState;h.state=H,eo(t,a,h,l),j=t.memoizedState,y!==a||H!==j||At.current||Qn?(typeof W=="function"&&(ql(t,n,W,a),j=t.memoizedState),(y=Qn||_c(t,n,y,a,H,j,M))?(V||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=j),h.props=a,h.state=j,h.context=M,a=y):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{h=t.stateNode,gc(e,t),y=t.memoizedProps,M=t.type===t.elementType?y:an(t.type,y),h.props=M,V=t.pendingProps,H=h.context,j=n.contextType,typeof j=="object"&&j!==null?j=qt(j):(j=Ft(n)?wr:gt.current,j=Kr(t,j));var Q=n.getDerivedStateFromProps;(W=typeof Q=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==V||H!==j)&&Wc(t,h,a,j),Qn=!1,H=t.memoizedState,h.state=H,eo(t,a,h,l);var re=t.memoizedState;y!==V||H!==re||At.current||Qn?(typeof Q=="function"&&(ql(t,n,Q,a),re=t.memoizedState),(M=Qn||_c(t,n,M,a,H,re,j)||!1)?(W||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(a,re,j),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(a,re,j)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=re),h.props=a,h.state=re,h.context=j,a=M):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),a=!1)}return Jl(e,t,n,a,d,l)}function Jl(e,t,n,a,l,d){Xc(e,t);var h=(t.flags&128)!==0;if(!a&&!h)return l&&ic(t,n,!1),In(e,t,d);a=t.stateNode,N0.current=t;var y=h&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&h?(t.child=ei(t,e.child,null,d),t.child=ei(t,null,y,d)):kt(e,t,y,d),t.memoizedState=a.state,l&&ic(t,n,!0),t.child}function eu(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),Bl(e,t.containerInfo)}function tu(e,t,n,a,l){return Jr(),zl(l),t.flags|=256,kt(e,t,n,a),t.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function nu(e,t,n){var a=t.pendingProps,l=Qe.current,d=!1,h=(t.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(l&2)!==0),y?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$e(Qe,l&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=a.children,e=a.fallback,d?(a=t.mode,d=t.child,h={mode:"hidden",children:h},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=ko(h,a,0,null),e=Lr(e,a,n,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=ts(n),t.memoizedState=es,e):ns(t,h));if(l=e.memoizedState,l!==null&&(y=l.dehydrated,y!==null))return M0(e,t,h,a,y,l,n);if(d){d=a.fallback,h=t.mode,l=e.child,y=l.sibling;var j={mode:"hidden",children:a.children};return(h&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=j,t.deletions=null):(a=ir(l,j),a.subtreeFlags=l.subtreeFlags&14680064),y!==null?d=ir(y,d):(d=Lr(d,h,n,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,h=e.child.memoizedState,h=h===null?ts(n):{baseLanes:h.baseLanes|n,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~n,t.memoizedState=es,a}return d=e.child,e=d.sibling,a=ir(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function ns(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function so(e,t,n,a){return a!==null&&zl(a),ei(t,e.child,null,n),e=ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M0(e,t,n,a,l,d,h){if(n)return t.flags&256?(t.flags&=-257,a=Kl(Error(s(422))),so(e,t,h,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,l=t.mode,a=ko({mode:"visible",children:a.children},l,0,null),d=Lr(d,l,h,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&ei(t,e.child,null,h),t.child.memoizedState=ts(h),t.memoizedState=es,d);if((t.mode&1)===0)return so(e,t,h,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var y=a.dgst;return a=y,d=Error(s(419)),a=Kl(d,a,void 0),so(e,t,h,a)}if(y=(h&e.childLanes)!==0,zt||y){if(a=ct,a!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|h))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,Fn(e,l),sn(a,e,l,-1))}return vs(),a=Kl(Error(s(421))),so(e,t,h,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=G0.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,Ht=Gn(l.nextSibling),Pt=t,Ze=!0,rn=null,e!==null&&(Yt[Gt++]=Sn,Yt[Gt++]=An,Yt[Gt++]=kr,Sn=e.id,An=e.overflow,kr=t),t=ns(t,a.children),t.flags|=4096,t)}function ru(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Nl(e.return,t,n)}function rs(e,t,n,a,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=l)}function iu(e,t,n){var a=t.pendingProps,l=a.revealOrder,d=a.tail;if(kt(e,t,a.children,n),a=Qe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,n,t);else if(e.tag===19)ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if($e(Qe,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),rs(t,!1,l,n,d);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&to(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}rs(t,!0,n,null,d);break;case"together":rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function co(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ar|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=ir(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ir(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function R0(e,t,n){switch(t.tag){case 3:eu(t),Jr();break;case 5:vc(t);break;case 1:Ft(t.type)&&Ua(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;$e(Qa,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?($e(Qe,Qe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?nu(e,t,n):($e(Qe,Qe.current&1),e=In(e,t,n),e!==null?e.sibling:null);$e(Qe,Qe.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return iu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$e(Qe,Qe.current),a)break;return null;case 22:case 23:return t.lanes=0,Qc(e,t,n)}return In(e,t,n)}var au,is,ou,lu;au=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},is=function(){},ou=function(e,t,n,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Er(hn.current);var d=null;switch(n){case"input":l=Br(e,l),a=Br(e,a),d=[];break;case"select":l=Z({},l,{value:void 0}),a=Z({},a,{value:void 0}),d=[];break;case"textarea":l=gi(e,l),a=gi(e,a),d=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Wa)}Pr(n,a);var h;n=null;for(M in l)if(!a.hasOwnProperty(M)&&l.hasOwnProperty(M)&&l[M]!=null)if(M==="style"){var y=l[M];for(h in y)y.hasOwnProperty(h)&&(n||(n={}),n[h]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(c.hasOwnProperty(M)?d||(d=[]):(d=d||[]).push(M,null));for(M in a){var j=a[M];if(y=l!=null?l[M]:void 0,a.hasOwnProperty(M)&&j!==y&&(j!=null||y!=null))if(M==="style")if(y){for(h in y)!y.hasOwnProperty(h)||j&&j.hasOwnProperty(h)||(n||(n={}),n[h]="");for(h in j)j.hasOwnProperty(h)&&y[h]!==j[h]&&(n||(n={}),n[h]=j[h])}else n||(d||(d=[]),d.push(M,n)),n=j;else M==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,y=y?y.__html:void 0,j!=null&&y!==j&&(d=d||[]).push(M,j)):M==="children"?typeof j!="string"&&typeof j!="number"||(d=d||[]).push(M,""+j):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(c.hasOwnProperty(M)?(j!=null&&M==="onScroll"&&Ue("scroll",e),d||y===j||(d=[])):(d=d||[]).push(M,j))}n&&(d=d||[]).push("style",n);var M=d;(t.updateQueue=M)&&(t.flags|=4)}},lu=function(e,t,n,a){n!==a&&(t.flags|=4)};function Zi(e,t){if(!Ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function xt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function B0(e,t,n){var a=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(t),null;case 1:return Ft(t.type)&&Va(),xt(t),null;case 3:return a=t.stateNode,ri(),Ye(At),Ye(gt),Hl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rn!==null&&(gs(rn),rn=null))),is(e,t),xt(t),null;case 5:Dl(t);var l=Er(Vi.current);if(n=t.type,e!==null&&t.stateNode!=null)ou(e,t,n,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(s(166));return xt(t),null}if(e=Er(hn.current),Za(t)){a=t.stateNode,n=t.type;var d=t.memoizedProps;switch(a[fn]=t,a[Hi]=d,e=(t.mode&1)!==0,n){case"dialog":Ue("cancel",a),Ue("close",a);break;case"iframe":case"object":case"embed":Ue("load",a);break;case"video":case"audio":for(l=0;l<Bi.length;l++)Ue(Bi[l],a);break;case"source":Ue("error",a);break;case"img":case"image":case"link":Ue("error",a),Ue("load",a);break;case"details":Ue("toggle",a);break;case"input":ba(a,d),Ue("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Ue("invalid",a);break;case"textarea":ka(a,d),Ue("invalid",a)}Pr(n,d),l=null;for(var h in d)if(d.hasOwnProperty(h)){var y=d[h];h==="children"?typeof y=="string"?a.textContent!==y&&(d.suppressHydrationWarning!==!0&&Oa(a.textContent,y,e),l=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(d.suppressHydrationWarning!==!0&&Oa(a.textContent,y,e),l=["children",""+y]):c.hasOwnProperty(h)&&y!=null&&h==="onScroll"&&Ue("scroll",a)}switch(n){case"input":Rr(a),wa(a,d,!0);break;case"textarea":Rr(a),Rn(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=Wa)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=h.createElement(n,{is:a.is}):(e=h.createElement(n),n==="select"&&(h=e,a.multiple?h.multiple=!0:a.size&&(h.size=a.size))):e=h.createElementNS(e,n),e[fn]=t,e[Hi]=a,au(e,t,!1,!1),t.stateNode=e;e:{switch(h=Hr(n,a),n){case"dialog":Ue("cancel",e),Ue("close",e),l=a;break;case"iframe":case"object":case"embed":Ue("load",e),l=a;break;case"video":case"audio":for(l=0;l<Bi.length;l++)Ue(Bi[l],e);l=a;break;case"source":Ue("error",e),l=a;break;case"img":case"image":case"link":Ue("error",e),Ue("load",e),l=a;break;case"details":Ue("toggle",e),l=a;break;case"input":ba(e,a),l=Br(e,a),Ue("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=Z({},a,{value:void 0}),Ue("invalid",e);break;case"textarea":ka(e,a),l=gi(e,a),Ue("invalid",e);break;default:l=a}Pr(n,l),y=l;for(d in y)if(y.hasOwnProperty(d)){var j=y[d];d==="style"?Vt(e,j):d==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&$t(e,j)):d==="children"?typeof j=="string"?(n!=="textarea"||j!=="")&&Bn(e,j):typeof j=="number"&&Bn(e,""+j):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(c.hasOwnProperty(d)?j!=null&&d==="onScroll"&&Ue("scroll",e):j!=null&&K(e,d,j,h))}switch(n){case"input":Rr(e),wa(e,a,!1);break;case"textarea":Rr(e),Rn(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ze(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?Mn(e,!!a.multiple,d,!1):a.defaultValue!=null&&Mn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xt(t),null;case 6:if(e&&t.stateNode!=null)lu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(n=Er(Vi.current),Er(hn.current),Za(t)){if(a=t.stateNode,n=t.memoizedProps,a[fn]=t,(d=a.nodeValue!==n)&&(e=Pt,e!==null))switch(e.tag){case 3:Oa(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oa(a.nodeValue,n,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[fn]=t,t.stateNode=a}return xt(t),null;case 13:if(Ye(Qe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ze&&Ht!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cc(),Jr(),t.flags|=98560,d=!1;else if(d=Za(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(s(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[fn]=t}else Jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xt(t),d=!1}else rn!==null&&(gs(rn),rn=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Qe.current&1)!==0?lt===0&&(lt=3):vs())),t.updateQueue!==null&&(t.flags|=4),xt(t),null);case 4:return ri(),is(e,t),e===null&&Di(t.stateNode.containerInfo),xt(t),null;case 10:return Tl(t.type._context),xt(t),null;case 17:return Ft(t.type)&&Va(),xt(t),null;case 19:if(Ye(Qe),d=t.memoizedState,d===null)return xt(t),null;if(a=(t.flags&128)!==0,h=d.rendering,h===null)if(a)Zi(d,!1);else{if(lt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=to(e),h!==null){for(t.flags|=128,Zi(d,!1),a=h.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)d=n,e=a,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $e(Qe,Qe.current&1|2),t.child}e=e.sibling}d.tail!==null&&He()>li&&(t.flags|=128,a=!0,Zi(d,!1),t.lanes=4194304)}else{if(!a)if(e=to(h),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!Ze)return xt(t),null}else 2*He()-d.renderingStartTime>li&&n!==1073741824&&(t.flags|=128,a=!0,Zi(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(n=d.last,n!==null?n.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=He(),t.sibling=null,n=Qe.current,$e(Qe,a?n&1|2:n&1),t):(xt(t),null);case 22:case 23:return xs(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(_t&1073741824)!==0&&(xt(t),t.subtreeFlags&6&&(t.flags|=8192)):xt(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function D0(e,t){switch(Sl(t),t.tag){case 1:return Ft(t.type)&&Va(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ri(),Ye(At),Ye(gt),Hl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Dl(t),null;case 13:if(Ye(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(Qe),null;case 4:return ri(),null;case 10:return Tl(t.type._context),null;case 22:case 23:return xs(),null;case 24:return null;default:return null}}var uo=!1,vt=!1,P0=typeof WeakSet=="function"?WeakSet:Set,ee=null;function ai(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Je(e,t,a)}else n.current=null}function as(e,t,n){try{n()}catch(a){Je(e,t,a)}}var su=!1;function H0(e,t){if(xl=Ia,e=_d(),dl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var h=0,y=-1,j=-1,M=0,W=0,V=e,H=null;t:for(;;){for(var Q;V!==n||l!==0&&V.nodeType!==3||(y=h+l),V!==d||a!==0&&V.nodeType!==3||(j=h+a),V.nodeType===3&&(h+=V.nodeValue.length),(Q=V.firstChild)!==null;)H=V,V=Q;for(;;){if(V===e)break t;if(H===n&&++M===l&&(y=h),H===d&&++W===a&&(j=h),(Q=V.nextSibling)!==null)break;V=H,H=V.parentNode}V=Q}n=y===-1||j===-1?null:{start:y,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},Ia=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var re=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ae=re.memoizedProps,tt=re.memoizedState,L=t.stateNode,E=L.getSnapshotBeforeUpdate(t.elementType===t.type?ae:an(t.type,ae),tt);L.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(Y){Je(t,t.return,Y)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return re=su,su=!1,re}function Ki(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&as(t,n,d)}l=l.next}while(l!==a)}}function po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function du(e){var t=e.alternate;t!==null&&(e.alternate=null,du(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[fn],delete t[Hi],delete t[kl],delete t[w0],delete t[k0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cu(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ls(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wa));else if(a!==4&&(e=e.child,e!==null))for(ls(e,t,n),e=e.sibling;e!==null;)ls(e,t,n),e=e.sibling}function ss(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}var pt=null,on=!1;function Jn(e,t,n){for(n=n.child;n!==null;)pu(e,t,n),n=n.sibling}function pu(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(wn,n)}catch{}switch(n.tag){case 5:vt||ai(n,t);case 6:var a=pt,l=on;pt=null,Jn(e,t,n),pt=a,on=l,pt!==null&&(on?(e=pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(on?(e=pt,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Fi(e)):wl(pt,n.stateNode));break;case 4:a=pt,l=on,pt=n.stateNode.containerInfo,on=!0,Jn(e,t,n),pt=a,on=l;break;case 0:case 11:case 14:case 15:if(!vt&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var d=l,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&as(n,t,h),l=l.next}while(l!==a)}Jn(e,t,n);break;case 1:if(!vt&&(ai(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(y){Je(n,t,y)}Jn(e,t,n);break;case 21:Jn(e,t,n);break;case 22:n.mode&1?(vt=(a=vt)||n.memoizedState!==null,Jn(e,t,n),vt=a):Jn(e,t,n);break;default:Jn(e,t,n)}}function fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new P0),t.forEach(function(a){var l=q0.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}}function ln(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var d=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 5:pt=y.stateNode,on=!1;break e;case 3:pt=y.stateNode.containerInfo,on=!0;break e;case 4:pt=y.stateNode.containerInfo,on=!0;break e}y=y.return}if(pt===null)throw Error(s(160));pu(d,h,l),pt=null,on=!1;var j=l.alternate;j!==null&&(j.return=null),l.return=null}catch(M){Je(l,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hu(t,e),t=t.sibling}function hu(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(t,e),mn(e),a&4){try{Ki(3,e,e.return),po(3,e)}catch(ae){Je(e,e.return,ae)}try{Ki(5,e,e.return)}catch(ae){Je(e,e.return,ae)}}break;case 1:ln(t,e),mn(e),a&512&&n!==null&&ai(n,n.return);break;case 5:if(ln(t,e),mn(e),a&512&&n!==null&&ai(n,n.return),e.flags&32){var l=e.stateNode;try{Bn(l,"")}catch(ae){Je(e,e.return,ae)}}if(a&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,h=n!==null?n.memoizedProps:d,y=e.type,j=e.updateQueue;if(e.updateQueue=null,j!==null)try{y==="input"&&d.type==="radio"&&d.name!=null&&dn(l,d),Hr(y,h);var M=Hr(y,d);for(h=0;h<j.length;h+=2){var W=j[h],V=j[h+1];W==="style"?Vt(l,V):W==="dangerouslySetInnerHTML"?$t(l,V):W==="children"?Bn(l,V):K(l,W,V,M)}switch(y){case"input":hi(l,d);break;case"textarea":cn(l,d);break;case"select":var H=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var Q=d.value;Q!=null?Mn(l,!!d.multiple,Q,!1):H!==!!d.multiple&&(d.defaultValue!=null?Mn(l,!!d.multiple,d.defaultValue,!0):Mn(l,!!d.multiple,d.multiple?[]:"",!1))}l[Hi]=d}catch(ae){Je(e,e.return,ae)}}break;case 6:if(ln(t,e),mn(e),a&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(ae){Je(e,e.return,ae)}}break;case 3:if(ln(t,e),mn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch(ae){Je(e,e.return,ae)}break;case 4:ln(t,e),mn(e);break;case 13:ln(t,e),mn(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(us=He())),a&4&&fu(e);break;case 22:if(W=n!==null&&n.memoizedState!==null,e.mode&1?(vt=(M=vt)||W,ln(t,e),vt=M):ln(t,e),mn(e),a&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!W&&(e.mode&1)!==0)for(ee=e,W=e.child;W!==null;){for(V=ee=W;ee!==null;){switch(H=ee,Q=H.child,H.tag){case 0:case 11:case 14:case 15:Ki(4,H,H.return);break;case 1:ai(H,H.return);var re=H.stateNode;if(typeof re.componentWillUnmount=="function"){a=H,n=H.return;try{t=a,re.props=t.memoizedProps,re.state=t.memoizedState,re.componentWillUnmount()}catch(ae){Je(a,n,ae)}}break;case 5:ai(H,H.return);break;case 22:if(H.memoizedState!==null){xu(V);continue}}Q!==null?(Q.return=H,ee=Q):xu(V)}W=W.sibling}e:for(W=null,V=e;;){if(V.tag===5){if(W===null){W=V;try{l=V.stateNode,M?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(y=V.stateNode,j=V.memoizedProps.style,h=j!=null&&j.hasOwnProperty("display")?j.display:null,y.style.display=Ca("display",h))}catch(ae){Je(e,e.return,ae)}}}else if(V.tag===6){if(W===null)try{V.stateNode.nodeValue=M?"":V.memoizedProps}catch(ae){Je(e,e.return,ae)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;W===V&&(W=null),V=V.return}W===V&&(W=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:ln(t,e),mn(e),a&4&&fu(e);break;case 21:break;default:ln(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cu(n)){var a=n;break e}n=n.return}throw Error(s(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Bn(l,""),a.flags&=-33);var d=uu(e);ss(e,d,l);break;case 3:case 4:var h=a.stateNode.containerInfo,y=uu(e);ls(e,y,h);break;default:throw Error(s(161))}}catch(j){Je(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _0(e,t,n){ee=e,gu(e)}function gu(e,t,n){for(var a=(e.mode&1)!==0;ee!==null;){var l=ee,d=l.child;if(l.tag===22&&a){var h=l.memoizedState!==null||uo;if(!h){var y=l.alternate,j=y!==null&&y.memoizedState!==null||vt;y=uo;var M=vt;if(uo=h,(vt=j)&&!M)for(ee=l;ee!==null;)h=ee,j=h.child,h.tag===22&&h.memoizedState!==null?vu(l):j!==null?(j.return=h,ee=j):vu(l);for(;d!==null;)ee=d,gu(d),d=d.sibling;ee=l,uo=y,vt=M}mu(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,ee=d):mu(e)}}function mu(e){for(;ee!==null;){var t=ee;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:vt||po(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!vt)if(n===null)a.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:an(t.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&xc(t,d,a);break;case 3:var h=t.updateQueue;if(h!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xc(t,h,n)}break;case 5:var y=t.stateNode;if(n===null&&t.flags&4){n=y;var j=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&n.focus();break;case"img":j.src&&(n.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var W=M.memoizedState;if(W!==null){var V=W.dehydrated;V!==null&&Fi(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}vt||t.flags&512&&os(t)}catch(H){Je(t,t.return,H)}}if(t===e){ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,ee=n;break}ee=t.return}}function xu(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ee=n;break}ee=t.return}}function vu(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{po(4,t)}catch(j){Je(t,n,j)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(j){Je(t,l,j)}}var d=t.return;try{os(t)}catch(j){Je(t,d,j)}break;case 5:var h=t.return;try{os(t)}catch(j){Je(t,h,j)}}}catch(j){Je(t,t.return,j)}if(t===e){ee=null;break}var y=t.sibling;if(y!==null){y.return=t.return,ee=y;break}ee=t.return}}var O0=Math.ceil,fo=ye.ReactCurrentDispatcher,ds=ye.ReactCurrentOwner,Kt=ye.ReactCurrentBatchConfig,Ne=0,ct=null,rt=null,ft=0,_t=0,oi=qn(0),lt=0,Qi=null,Ar=0,ho=0,cs=0,Xi=null,It=null,us=0,li=1/0,Ln=null,go=!1,ps=null,er=null,mo=!1,tr=null,xo=0,Ji=0,fs=null,vo=-1,yo=0;function Ct(){return(Ne&6)!==0?He():vo!==-1?vo:vo=He()}function nr(e){return(e.mode&1)===0?1:(Ne&2)!==0&&ft!==0?ft&-ft:j0.transition!==null?(yo===0&&(yo=ud()),yo):(e=_e,e!==0||(e=window.event,e=e===void 0?16:bd(e.type)),e)}function sn(e,t,n,a){if(50<Ji)throw Ji=0,fs=null,Error(s(185));Ci(e,n,a),((Ne&2)===0||e!==ct)&&(e===ct&&((Ne&2)===0&&(ho|=n),lt===4&&rr(e,ft)),Lt(e,a),n===1&&Ne===0&&(t.mode&1)===0&&(li=He()+500,Ya&&Kn()))}function Lt(e,t){var n=e.callbackNode;jf(e,t);var a=Aa(e,e===ct?ft:0);if(a===0)n!==null&&st(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&st(n),t===1)e.tag===0?C0(bu.bind(null,e)):ac(bu.bind(null,e)),y0(function(){(Ne&6)===0&&Kn()}),n=null;else{switch(pd(a)){case 1:n=Ut;break;case 4:n=Bt;break;case 16:n=Hn;break;case 536870912:n=pn;break;default:n=Hn}n=Fu(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(vo=-1,yo=0,(Ne&6)!==0)throw Error(s(327));var n=e.callbackNode;if(si()&&e.callbackNode!==n)return null;var a=Aa(e,e===ct?ft:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=bo(e,a);else{t=a;var l=Ne;Ne|=2;var d=ku();(ct!==e||ft!==t)&&(Ln=null,li=He()+500,zr(e,t));do try{V0();break}catch(y){wu(e,y)}while(!0);Ll(),fo.current=d,Ne=l,rt!==null?t=0:(ct=null,ft=0,t=lt)}if(t!==0){if(t===2&&(l=Go(e),l!==0&&(a=l,t=hs(e,l))),t===1)throw n=Qi,zr(e,0),rr(e,a),Lt(e,He()),n;if(t===6)rr(e,a);else{if(l=e.current.alternate,(a&30)===0&&!W0(l)&&(t=bo(e,a),t===2&&(d=Go(e),d!==0&&(a=d,t=hs(e,d))),t===1))throw n=Qi,zr(e,0),rr(e,a),Lt(e,He()),n;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(s(345));case 2:Ir(e,It,Ln);break;case 3:if(rr(e,a),(a&130023424)===a&&(t=us+500-He(),10<t)){if(Aa(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){Ct(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=bl(Ir.bind(null,e,It,Ln),t);break}Ir(e,It,Ln);break;case 4:if(rr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var h=31-Oe(a);d=1<<h,h=t[h],h>l&&(l=h),a&=~d}if(a=l,a=He()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*O0(a/1960))-a,10<a){e.timeoutHandle=bl(Ir.bind(null,e,It,Ln),a);break}Ir(e,It,Ln);break;case 5:Ir(e,It,Ln);break;default:throw Error(s(329))}}}return Lt(e,He()),e.callbackNode===n?yu.bind(null,e):null}function hs(e,t){var n=Xi;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=bo(e,t),e!==2&&(t=It,It=n,t!==null&&gs(t)),e}function gs(e){It===null?It=e:It.push.apply(It,e)}function W0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],d=l.getSnapshot;l=l.value;try{if(!nn(d(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t){for(t&=~cs,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),a=1<<n;e[n]=-1,t&=~a}}function bu(e){if((Ne&6)!==0)throw Error(s(327));si();var t=Aa(e,0);if((t&1)===0)return Lt(e,He()),null;var n=bo(e,t);if(e.tag!==0&&n===2){var a=Go(e);a!==0&&(t=a,n=hs(e,a))}if(n===1)throw n=Qi,zr(e,0),rr(e,t),Lt(e,He()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,It,Ln),Lt(e,He()),null}function ms(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(li=He()+500,Ya&&Kn())}}function Fr(e){tr!==null&&tr.tag===0&&(Ne&6)===0&&si();var t=Ne;Ne|=1;var n=Kt.transition,a=_e;try{if(Kt.transition=null,_e=1,e)return e()}finally{_e=a,Kt.transition=n,Ne=t,(Ne&6)===0&&Kn()}}function xs(){_t=oi.current,Ye(oi)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,v0(n)),rt!==null)for(n=rt.return;n!==null;){var a=n;switch(Sl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Va();break;case 3:ri(),Ye(At),Ye(gt),Hl();break;case 5:Dl(a);break;case 4:ri();break;case 13:Ye(Qe);break;case 19:Ye(Qe);break;case 10:Tl(a.type._context);break;case 22:case 23:xs()}n=n.return}if(ct=e,rt=e=ir(e.current,null),ft=_t=t,lt=0,Qi=null,cs=ho=Ar=0,It=Xi=null,jr!==null){for(t=0;t<jr.length;t++)if(n=jr[t],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,d=n.pending;if(d!==null){var h=d.next;d.next=l,a.next=h}n.pending=a}jr=null}return e}function wu(e,t){do{var n=rt;try{if(Ll(),no.current=oo,ro){for(var a=Xe.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}ro=!1}if(Sr=0,dt=ot=Xe=null,Ui=!1,Yi=0,ds.current=null,n===null||n.return===null){lt=1,Qi=t,rt=null;break}e:{var d=e,h=n.return,y=n,j=t;if(t=ft,y.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var M=j,W=y,V=W.tag;if((W.mode&1)===0&&(V===0||V===11||V===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var Q=Yc(h);if(Q!==null){Q.flags&=-257,Gc(Q,h,y,d,t),Q.mode&1&&Uc(d,M,t),t=Q,j=M;var re=t.updateQueue;if(re===null){var ae=new Set;ae.add(j),t.updateQueue=ae}else re.add(j);break e}else{if((t&1)===0){Uc(d,M,t),vs();break e}j=Error(s(426))}}else if(Ze&&y.mode&1){var tt=Yc(h);if(tt!==null){(tt.flags&65536)===0&&(tt.flags|=256),Gc(tt,h,y,d,t),zl(ii(j,y));break e}}d=j=ii(j,y),lt!==4&&(lt=2),Xi===null?Xi=[d]:Xi.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var L=$c(d,j,t);mc(d,L);break e;case 1:y=j;var E=d.type,T=d.stateNode;if((d.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(er===null||!er.has(T)))){d.flags|=65536,t&=-t,d.lanes|=t;var Y=Vc(d,y,t);mc(d,Y);break e}}d=d.return}while(d!==null)}ju(n)}catch(le){t=le,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function ku(){var e=fo.current;return fo.current=oo,e===null?oo:e}function vs(){(lt===0||lt===3||lt===2)&&(lt=4),ct===null||(Ar&268435455)===0&&(ho&268435455)===0||rr(ct,ft)}function bo(e,t){var n=Ne;Ne|=2;var a=ku();(ct!==e||ft!==t)&&(Ln=null,zr(e,t));do try{$0();break}catch(l){wu(e,l)}while(!0);if(Ll(),Ne=n,fo.current=a,rt!==null)throw Error(s(261));return ct=null,ft=0,lt}function $0(){for(;rt!==null;)Cu(rt)}function V0(){for(;rt!==null&&!De();)Cu(rt)}function Cu(e){var t=Au(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?ju(e):rt=t,ds.current=null}function ju(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=B0(n,t,_t),n!==null){rt=n;return}}else{if(n=D0(n,t),n!==null){n.flags&=32767,rt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,rt=null;return}}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);lt===0&&(lt=5)}function Ir(e,t,n){var a=_e,l=Kt.transition;try{Kt.transition=null,_e=1,U0(e,t,n,a)}finally{Kt.transition=l,_e=a}return null}function U0(e,t,n,a){do si();while(tr!==null);if((Ne&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var d=n.lanes|n.childLanes;if(Ef(e,d),e===ct&&(rt=ct=null,ft=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||mo||(mo=!0,Fu(Hn,function(){return si(),null})),d=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||d){d=Kt.transition,Kt.transition=null;var h=_e;_e=1;var y=Ne;Ne|=4,ds.current=null,H0(e,n),hu(n,e),u0(vl),Ia=!!xl,vl=xl=null,e.current=n,_0(n),St(),Ne=y,_e=h,Kt.transition=d}else e.current=n;if(mo&&(mo=!1,tr=e,xo=l),d=e.pendingLanes,d===0&&(er=null),Le(n.stateNode),Lt(e,He()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(go)throw go=!1,e=ps,ps=null,e;return(xo&1)!==0&&e.tag!==0&&si(),d=e.pendingLanes,(d&1)!==0?e===fs?Ji++:(Ji=0,fs=e):Ji=0,Kn(),null}function si(){if(tr!==null){var e=pd(xo),t=Kt.transition,n=_e;try{if(Kt.transition=null,_e=16>e?16:e,tr===null)var a=!1;else{if(e=tr,tr=null,xo=0,(Ne&6)!==0)throw Error(s(331));var l=Ne;for(Ne|=4,ee=e.current;ee!==null;){var d=ee,h=d.child;if((ee.flags&16)!==0){var y=d.deletions;if(y!==null){for(var j=0;j<y.length;j++){var M=y[j];for(ee=M;ee!==null;){var W=ee;switch(W.tag){case 0:case 11:case 15:Ki(8,W,d)}var V=W.child;if(V!==null)V.return=W,ee=V;else for(;ee!==null;){W=ee;var H=W.sibling,Q=W.return;if(du(W),W===M){ee=null;break}if(H!==null){H.return=Q,ee=H;break}ee=Q}}}var re=d.alternate;if(re!==null){var ae=re.child;if(ae!==null){re.child=null;do{var tt=ae.sibling;ae.sibling=null,ae=tt}while(ae!==null)}}ee=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,ee=h;else e:for(;ee!==null;){if(d=ee,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Ki(9,d,d.return)}var L=d.sibling;if(L!==null){L.return=d.return,ee=L;break e}ee=d.return}}var E=e.current;for(ee=E;ee!==null;){h=ee;var T=h.child;if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,ee=T;else e:for(h=E;ee!==null;){if(y=ee,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:po(9,y)}}catch(le){Je(y,y.return,le)}if(y===h){ee=null;break e}var Y=y.sibling;if(Y!==null){Y.return=y.return,ee=Y;break e}ee=y.return}}if(Ne=l,Kn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(wn,e)}catch{}a=!0}return a}finally{_e=n,Kt.transition=t}}return!1}function Eu(e,t,n){t=ii(n,t),t=$c(e,t,1),e=Xn(e,t,1),t=Ct(),e!==null&&(Ci(e,1,t),Lt(e,t))}function Je(e,t,n){if(e.tag===3)Eu(e,e,n);else for(;t!==null;){if(t.tag===3){Eu(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(er===null||!er.has(a))){e=ii(n,e),e=Vc(t,e,1),t=Xn(t,e,1),e=Ct(),t!==null&&(Ci(t,1,e),Lt(t,e));break}}t=t.return}}function Y0(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&n,ct===e&&(ft&n)===n&&(lt===4||lt===3&&(ft&130023424)===ft&&500>He()-us?zr(e,0):cs|=n),Lt(e,t)}function Su(e,t){t===0&&((e.mode&1)===0?t=1:(t=vr,vr<<=1,(vr&130023424)===0&&(vr=4194304)));var n=Ct();e=Fn(e,t),e!==null&&(Ci(e,t,n),Lt(e,n))}function G0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Su(e,n)}function q0(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(t),Su(e,n)}var Au;Au=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||At.current)zt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return zt=!1,R0(e,t,n);zt=(e.flags&131072)!==0}else zt=!1,Ze&&(t.flags&1048576)!==0&&oc(t,qa,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;co(e,t),e=t.pendingProps;var l=Kr(t,gt.current);ni(t,n),l=Wl(null,t,a,e,l,n);var d=$l();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ft(a)?(d=!0,Ua(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Rl(t),l.updater=lo,t.stateNode=l,l._reactInternals=t,Zl(t,a,e,n),t=Jl(null,t,a,!0,d,n)):(t.tag=0,Ze&&d&&El(t),kt(null,t,l,n),t=t.child),t;case 16:a=t.elementType;e:{switch(co(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=K0(a),e=an(a,e),l){case 0:t=Xl(null,t,a,e,n);break e;case 1:t=Jc(null,t,a,e,n);break e;case 11:t=qc(null,t,a,e,n);break e;case 14:t=Zc(null,t,a,an(a.type,e),n);break e}throw Error(s(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:an(a,l),Xl(e,t,a,l,n);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:an(a,l),Jc(e,t,a,l,n);case 3:e:{if(eu(t),e===null)throw Error(s(387));a=t.pendingProps,d=t.memoizedState,l=d.element,gc(e,t),eo(t,a,null,n);var h=t.memoizedState;if(a=h.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=ii(Error(s(423)),t),t=tu(e,t,a,n,l);break e}else if(a!==l){l=ii(Error(s(424)),t),t=tu(e,t,a,n,l);break e}else for(Ht=Gn(t.stateNode.containerInfo.firstChild),Pt=t,Ze=!0,rn=null,n=fc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),a===l){t=In(e,t,n);break e}kt(e,t,a,n)}t=t.child}return t;case 5:return vc(t),e===null&&Fl(t),a=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,h=l.children,yl(a,l)?h=null:d!==null&&yl(a,d)&&(t.flags|=32),Xc(e,t),kt(e,t,h,n),t.child;case 6:return e===null&&Fl(t),null;case 13:return nu(e,t,n);case 4:return Bl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ei(t,null,a,n):kt(e,t,a,n),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:an(a,l),qc(e,t,a,l,n);case 7:return kt(e,t,t.pendingProps,n),t.child;case 8:return kt(e,t,t.pendingProps.children,n),t.child;case 12:return kt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,d=t.memoizedProps,h=l.value,$e(Qa,a._currentValue),a._currentValue=h,d!==null)if(nn(d.value,h)){if(d.children===l.children&&!At.current){t=In(e,t,n);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var y=d.dependencies;if(y!==null){h=d.child;for(var j=y.firstContext;j!==null;){if(j.context===a){if(d.tag===1){j=zn(-1,n&-n),j.tag=2;var M=d.updateQueue;if(M!==null){M=M.shared;var W=M.pending;W===null?j.next=j:(j.next=W.next,W.next=j),M.pending=j}}d.lanes|=n,j=d.alternate,j!==null&&(j.lanes|=n),Nl(d.return,n,t),y.lanes|=n;break}j=j.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(s(341));h.lanes|=n,y=h.alternate,y!==null&&(y.lanes|=n),Nl(h,n,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}kt(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,ni(t,n),l=qt(l),a=a(l),t.flags|=1,kt(e,t,a,n),t.child;case 14:return a=t.type,l=an(a,t.pendingProps),l=an(a.type,l),Zc(e,t,a,l,n);case 15:return Kc(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:an(a,l),co(e,t),t.tag=1,Ft(a)?(e=!0,Ua(t)):e=!1,ni(t,n),Oc(t,a,l),Zl(t,a,l,n),Jl(null,t,a,!0,e,n);case 19:return iu(e,t,n);case 22:return Qc(e,t,n)}throw Error(s(156,t.tag))};function Fu(e,t){return et(e,t)}function Z0(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,n,a){return new Z0(e,t,n,a)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function K0(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===Ge)return 14}return 2}function ir(e,t){var n=e.alternate;return n===null?(n=Qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wo(e,t,n,a,l,d){var h=2;if(a=e,typeof e=="function")ys(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case R:return Lr(n.children,l,d,t);case de:h=8,l|=8;break;case xe:return e=Qt(12,n,t,l|2),e.elementType=xe,e.lanes=d,e;case Ve:return e=Qt(13,n,t,l),e.elementType=Ve,e.lanes=d,e;case Re:return e=Qt(19,n,t,l),e.elementType=Re,e.lanes=d,e;case we:return ko(n,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:h=10;break e;case Te:h=9;break e;case Pe:h=11;break e;case Ge:h=14;break e;case je:h=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Qt(h,n,t,l),t.elementType=e,t.type=a,t.lanes=d,t}function Lr(e,t,n,a){return e=Qt(7,e,a,t),e.lanes=n,e}function ko(e,t,n,a){return e=Qt(22,e,a,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function bs(e,t,n){return e=Qt(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Q0(e,t,n,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ks(e,t,n,a,l,d,h,y,j){return e=new Q0(e,t,n,y,j),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Qt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(d),e}function X0(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function zu(e){if(!e)return Zn;e=e._reactInternals;e:{if(ie(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(Ft(n))return rc(e,n,t)}return t}function Iu(e,t,n,a,l,d,h,y,j){return e=ks(n,a,!0,e,l,d,h,y,j),e.context=zu(null),n=e.current,a=Ct(),l=nr(n),d=zn(a,l),d.callback=t??null,Xn(n,d,l),e.current.lanes=l,Ci(e,l,a),Lt(e,a),e}function Co(e,t,n,a){var l=t.current,d=Ct(),h=nr(l);return n=zu(n),t.context===null?t.context=n:t.pendingContext=n,t=zn(d,h),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Xn(l,t,h),e!==null&&(sn(e,l,h,d),Ja(e,l,h)),h}function jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cs(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function J0(){return null}var Tu=typeof reportError=="function"?reportError:function(e){console.error(e)};function js(e){this._internalRoot=e}Eo.prototype.render=js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Co(e,t,null,null)},Eo.prototype.unmount=js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fr(function(){Co(null,e,null,null)}),t[jn]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vn.length&&t!==0&&t<Vn[n].priority;n++);Vn.splice(n,0,e),n===0&&vd(e)}};function Es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function eh(e,t,n,a,l){if(l){if(typeof a=="function"){var d=a;a=function(){var M=jo(h);d.call(M)}}var h=Iu(t,a,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=h,e[jn]=h.current,Di(e.nodeType===8?e.parentNode:e),Fr(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var y=a;a=function(){var M=jo(j);y.call(M)}}var j=ks(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=j,e[jn]=j.current,Di(e.nodeType===8?e.parentNode:e),Fr(function(){Co(t,j,n,a)}),j}function Ao(e,t,n,a,l){var d=n._reactRootContainer;if(d){var h=d;if(typeof l=="function"){var y=l;l=function(){var j=jo(h);y.call(j)}}Co(t,h,e,l)}else h=eh(n,t,e,l,a);return jo(h)}fd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(Zo(t,n|1),Lt(t,He()),(Ne&6)===0&&(li=He()+500,Kn()))}break;case 13:Fr(function(){var a=Fn(e,1);if(a!==null){var l=Ct();sn(a,e,1,l)}}),Cs(e,1)}},Ko=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var n=Ct();sn(t,e,134217728,n)}Cs(e,134217728)}},hd=function(e){if(e.tag===13){var t=nr(e),n=Fn(e,t);if(n!==null){var a=Ct();sn(n,e,t,a)}Cs(e,t)}},gd=function(){return _e},md=function(e,t){var n=_e;try{return _e=e,t()}finally{_e=n}},Dn=function(e,t,n){switch(t){case"input":if(hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=$a(a);if(!l)throw Error(s(90));at(a),hi(a,l)}}}break;case"textarea":cn(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}},bi=ms,hr=Fr;var th={usingClientEntryPoint:!1,Events:[_i,qr,$a,yi,Sa,ms]},ea={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nh={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ie(e),e===null?null:e.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{wn=Fo.inject(nh),wt=Fo}catch{}}return Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th,Tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Es(t))throw Error(s(200));return X0(e,t,null,n)},Tt.createRoot=function(e,t){if(!Es(e))throw Error(s(299));var n=!1,a="",l=Tu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ks(e,1,!1,null,null,n,!1,a,l),e[jn]=t.current,Di(e.nodeType===8?e.parentNode:e),new js(t)},Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ie(t),e=e===null?null:e.stateNode,e},Tt.flushSync=function(e){return Fr(e)},Tt.hydrate=function(e,t,n){if(!So(t))throw Error(s(200));return Ao(null,e,t,!0,n)},Tt.hydrateRoot=function(e,t,n){if(!Es(e))throw Error(s(405));var a=n!=null&&n.hydratedSources||null,l=!1,d="",h=Tu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),t=Iu(t,null,e,1,n??null,l,!1,d,h),e[jn]=t.current,Di(e),a)for(e=0;e<a.length;e++)n=a[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Eo(t)},Tt.render=function(e,t,n){if(!So(t))throw Error(s(200));return Ao(null,e,t,!1,n)},Tt.unmountComponentAtNode=function(e){if(!So(e))throw Error(s(40));return e._reactRootContainer?(Fr(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1},Tt.unstable_batchedUpdates=ms,Tt.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!So(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ao(e,t,n,!1,a)},Tt.version="18.3.1-next-f1338f8080-20240426",Tt}var Ou;function ph(){if(Ou)return Fs.exports;Ou=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Fs.exports=uh(),Fs.exports}var Wu;function fh(){if(Wu)return zo;Wu=1;var i=ph();return zo.createRoot=i.createRoot,zo.hydrateRoot=i.hydrateRoot,zo}var hh=fh(),z=qs();const gh=ah(z),mh=ih({__proto__:null,default:gh},[z]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zp=i=>{throw TypeError(i)},xh=(i,o,s)=>o.has(i)||zp("Cannot "+s),Ls=(i,o,s)=>(xh(i,o,"read from private field"),s?s.call(i):o.get(i)),vh=(i,o,s)=>o.has(i)?zp("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(i):o.set(i,s),$u="popstate";function yh(i={}){function o(p,c){let{pathname:f,search:g,hash:x}=p.location;return da("",{pathname:f,search:g,hash:x},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(p,c){return typeof c=="string"?c:vn(c)}return wh(o,s,null,i)}function Fe(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function it(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function bh(){return Math.random().toString(36).substring(2,10)}function Vu(i,o){return{usr:i.state,key:i.key,idx:o}}function da(i,o,s=null,p){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?cr(o):o,state:s,key:o&&o.key||p||bh()}}function vn({pathname:i="/",search:o="",hash:s=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function cr(i){let o={};if(i){let s=i.indexOf("#");s>=0&&(o.hash=i.substring(s),i=i.substring(0,s));let p=i.indexOf("?");p>=0&&(o.search=i.substring(p),i=i.substring(0,p)),i&&(o.pathname=i)}return o}function wh(i,o,s,p={}){let{window:c=document.defaultView,v5Compat:f=!1}=p,g=c.history,x="POP",m=null,v=k();v==null&&(v=0,g.replaceState({...g.state,idx:v},""));function k(){return(g.state||{idx:null}).idx}function b(){x="POP";let P=k(),X=P==null?null:P-v;v=P,m&&m({action:x,location:B.location,delta:X})}function S(P,X){x="PUSH";let U=da(B.location,P,X);v=k()+1;let K=Vu(U,v),ye=B.createHref(U);try{g.pushState(K,"",ye)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;c.location.assign(ye)}f&&m&&m({action:x,location:B.location,delta:1})}function I(P,X){x="REPLACE";let U=da(B.location,P,X);v=k();let K=Vu(U,v),ye=B.createHref(U);g.replaceState(K,"",ye),f&&m&&m({action:x,location:B.location,delta:0})}function _(P){return Ip(P)}let B={get action(){return x},get location(){return i(c,g)},listen(P){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener($u,b),m=P,()=>{c.removeEventListener($u,b),m=null}},createHref(P){return o(c,P)},createURL:_,encodeLocation(P){let X=_(P);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:S,replace:I,go(P){return g.go(P)}};return B}function Ip(i,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(s,"No window.location.(origin|href) available to create URL");let p=typeof i=="string"?i:vn(i);return p=p.replace(/ $/,"%20"),!o&&p.startsWith("//")&&(p=s+p),new URL(p,s)}var oa,Uu=class{constructor(i){if(vh(this,oa,new Map),i)for(let[o,s]of i)this.set(o,s)}get(i){if(Ls(this,oa).has(i))return Ls(this,oa).get(i);if(i.defaultValue!==void 0)return i.defaultValue;throw new Error("No value found for context")}set(i,o){Ls(this,oa).set(i,o)}};oa=new WeakMap;var kh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Ch(i){return kh.has(i)}var jh=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Eh(i){return jh.has(i)}function Sh(i){return i.index===!0}function ca(i,o,s=[],p={},c=!1){return i.map((f,g)=>{let x=[...s,String(g)],m=typeof f.id=="string"?f.id:x.join("-");if(Fe(f.index!==!0||!f.children,"Cannot specify children on an index route"),Fe(c||!p[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),Sh(f)){let v={...f,id:m};return p[m]=Yu(v,o(v)),v}else{let v={...f,id:m,children:void 0};return p[m]=Yu(v,o(v)),f.children&&(v.children=ca(f.children,o,x,p,c)),v}})}function Yu(i,o){return Object.assign(i,{...o,...typeof o.lazy=="object"&&o.lazy!=null?{lazy:{...i.lazy,...o.lazy}}:{}})}function or(i,o,s="/"){return la(i,o,s,!1)}function la(i,o,s,p){let c=typeof o=="string"?cr(o):o,f=Jt(c.pathname||"/",s);if(f==null)return null;let g=Lp(i);Fh(g);let x=null;for(let m=0;x==null&&m<g.length;++m){let v=Hh(f);x=Dh(g[m],v,p)}return x}function Ah(i,o){let{route:s,pathname:p,params:c}=i;return{id:s.id,pathname:p,params:c,data:o[s.id],loaderData:o[s.id],handle:s.handle}}function Lp(i,o=[],s=[],p="",c=!1){let f=(g,x,m=c,v)=>{let k={relativePath:v===void 0?g.path||"":v,caseSensitive:g.caseSensitive===!0,childrenIndex:x,route:g};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(p)&&m)return;Fe(k.relativePath.startsWith(p),`Absolute route path "${k.relativePath}" nested under path "${p}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(p.length)}let b=xn([p,k.relativePath]),S=s.concat(k);g.children&&g.children.length>0&&(Fe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Lp(g.children,o,S,b,m)),!(g.path==null&&!g.index)&&o.push({path:b,score:Rh(b,g.index),routesMeta:S})};return i.forEach((g,x)=>{var m;if(g.path===""||!((m=g.path)!=null&&m.includes("?")))f(g,x);else for(let v of Tp(g.path))f(g,x,!0,v)}),o}function Tp(i){let o=i.split("/");if(o.length===0)return[];let[s,...p]=o,c=s.endsWith("?"),f=s.replace(/\?$/,"");if(p.length===0)return c?[f,""]:[f];let g=Tp(p.join("/")),x=[];return x.push(...g.map(m=>m===""?f:[f,m].join("/"))),c&&x.push(...g),x.map(m=>i.startsWith("/")&&m===""?"/":m)}function Fh(i){i.sort((o,s)=>o.score!==s.score?s.score-o.score:Bh(o.routesMeta.map(p=>p.childrenIndex),s.routesMeta.map(p=>p.childrenIndex)))}var zh=/^:[\w-]+$/,Ih=3,Lh=2,Th=1,Nh=10,Mh=-2,Gu=i=>i==="*";function Rh(i,o){let s=i.split("/"),p=s.length;return s.some(Gu)&&(p+=Mh),o&&(p+=Lh),s.filter(c=>!Gu(c)).reduce((c,f)=>c+(zh.test(f)?Ih:f===""?Th:Nh),p)}function Bh(i,o){return i.length===o.length&&i.slice(0,-1).every((p,c)=>p===o[c])?i[i.length-1]-o[o.length-1]:0}function Dh(i,o,s=!1){let{routesMeta:p}=i,c={},f="/",g=[];for(let x=0;x<p.length;++x){let m=p[x],v=x===p.length-1,k=f==="/"?o:o.slice(f.length)||"/",b=_o({path:m.relativePath,caseSensitive:m.caseSensitive,end:v},k),S=m.route;if(!b&&v&&s&&!p[p.length-1].route.index&&(b=_o({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},k)),!b)return null;Object.assign(c,b.params),g.push({params:c,pathname:xn([f,b.pathname]),pathnameBase:Wh(xn([f,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(f=xn([f,b.pathnameBase]))}return g}function _o(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,p]=Ph(i.path,i.caseSensitive,i.end),c=o.match(s);if(!c)return null;let f=c[0],g=f.replace(/(.)\/+$/,"$1"),x=c.slice(1);return{params:p.reduce((v,{paramName:k,isOptional:b},S)=>{if(k==="*"){let _=x[S]||"";g=f.slice(0,f.length-_.length).replace(/(.)\/+$/,"$1")}const I=x[S];return b&&!I?v[k]=void 0:v[k]=(I||"").replace(/%2F/g,"/"),v},{}),pathname:f,pathnameBase:g,pattern:i}}function Ph(i,o=!1,s=!0){it(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let p=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,x,m)=>(p.push({paramName:x,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(p.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),p]}function Hh(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return it(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function Jt(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,p=i.charAt(s);return p&&p!=="/"?null:i.slice(s)||"/"}function _h({basename:i,pathname:o}){return o==="/"?i:xn([i,o])}var Np=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zs=i=>Np.test(i);function Oh(i,o="/"){let{pathname:s,search:p="",hash:c=""}=typeof i=="string"?cr(i):i,f;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?f=qu(s.substring(1),"/"):f=qu(s,o)):f=o,{pathname:f,search:$h(p),hash:Vh(c)}}function qu(i,o){let s=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Ts(i,o,s,p){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(p)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mp(i){return i.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Ks(i){let o=Mp(i);return o.map((s,p)=>p===o.length-1?s.pathname:s.pathnameBase)}function Qs(i,o,s,p=!1){let c;typeof i=="string"?c=cr(i):(c={...i},Fe(!c.pathname||!c.pathname.includes("?"),Ts("?","pathname","search",c)),Fe(!c.pathname||!c.pathname.includes("#"),Ts("#","pathname","hash",c)),Fe(!c.search||!c.search.includes("#"),Ts("#","search","hash",c)));let f=i===""||c.pathname==="",g=f?"/":c.pathname,x;if(g==null)x=s;else{let b=o.length-1;if(!p&&g.startsWith("..")){let S=g.split("/");for(;S[0]==="..";)S.shift(),b-=1;c.pathname=S.join("/")}x=b>=0?o[b]:"/"}let m=Oh(c,x),v=g&&g!=="/"&&g.endsWith("/"),k=(f||g===".")&&s.endsWith("/");return!m.pathname.endsWith("/")&&(v||k)&&(m.pathname+="/"),m}var xn=i=>i.join("/").replace(/\/\/+/g,"/"),Wh=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),$h=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Vh=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,ga=class{constructor(i,o,s,p=!1){this.status=i,this.statusText=o||"",this.internal=p,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function ua(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function ma(i){return i.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bp(i,o){let s=i;if(typeof s!="string"||!Np.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let p=s,c=!1;if(Rp)try{let f=new URL(window.location.href),g=s.startsWith("//")?new URL(f.protocol+s):new URL(s),x=Jt(g.pathname,o);g.origin===f.origin&&x!=null?s=x+g.search+g.hash:c=!0}catch{it(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:p,isExternal:c,to:s}}var sr=Symbol("Uninstrumented");function Uh(i,o){let s={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};i.forEach(c=>c({id:o.id,index:o.index,path:o.path,instrument(f){let g=Object.keys(s);for(let x of g)f[x]&&s[x].push(f[x])}}));let p={};if(typeof o.lazy=="function"&&s.lazy.length>0){let c=ui(s.lazy,o.lazy,()=>{});c&&(p.lazy=c)}if(typeof o.lazy=="object"){let c=o.lazy;["middleware","loader","action"].forEach(f=>{let g=c[f],x=s[`lazy.${f}`];if(typeof g=="function"&&x.length>0){let m=ui(x,g,()=>{});m&&(p.lazy=Object.assign(p.lazy||{},{[f]:m}))}})}return["loader","action"].forEach(c=>{let f=o[c];if(typeof f=="function"&&s[c].length>0){let g=f[sr]??f,x=ui(s[c],g,(...m)=>Zu(m[0]));x&&(c==="loader"&&g.hydrate===!0&&(x.hydrate=!0),x[sr]=g,p[c]=x)}}),o.middleware&&o.middleware.length>0&&s.middleware.length>0&&(p.middleware=o.middleware.map(c=>{let f=c[sr]??c,g=ui(s.middleware,f,(...x)=>Zu(x[0]));return g?(g[sr]=f,g):c})),p}function Yh(i,o){let s={navigate:[],fetch:[]};if(o.forEach(p=>p({instrument(c){let f=Object.keys(c);for(let g of f)c[g]&&s[g].push(c[g])}})),s.navigate.length>0){let p=i.navigate[sr]??i.navigate,c=ui(s.navigate,p,(...f)=>{let[g,x]=f;return{to:typeof g=="number"||typeof g=="string"?g:g?vn(g):".",...Ku(i,x??{})}});c&&(c[sr]=p,i.navigate=c)}if(s.fetch.length>0){let p=i.fetch[sr]??i.fetch,c=ui(s.fetch,p,(...f)=>{let[g,,x,m]=f;return{href:x??".",fetcherKey:g,...Ku(i,m??{})}});c&&(c[sr]=p,i.fetch=c)}return i}function ui(i,o,s){return i.length===0?null:async(...p)=>{let c=await Dp(i,s(...p),()=>o(...p),i.length-1);if(c.type==="error")throw c.value;return c.value}}async function Dp(i,o,s,p){let c=i[p],f;if(c){let g,x=async()=>(g?console.error("You cannot call instrumented handlers more than once"):g=Dp(i,o,s,p-1),f=await g,Fe(f,"Expected a result"),f.type==="error"&&f.value instanceof Error?{status:"error",error:f.value}:{status:"success",error:void 0});try{await c(x,o)}catch(m){console.error("An instrumentation function threw an error:",m)}g||await x(),await g}else try{f={type:"success",value:await s()}}catch(g){f={type:"error",value:g}}return f||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Zu(i){let{request:o,context:s,params:p,unstable_pattern:c}=i;return{request:Gh(o),params:{...p},unstable_pattern:c,context:qh(s)}}function Ku(i,o){return{currentUrl:vn(i.state.location),..."formMethod"in o?{formMethod:o.formMethod}:{},..."formEncType"in o?{formEncType:o.formEncType}:{},..."formData"in o?{formData:o.formData}:{},..."body"in o?{body:o.body}:{}}}function Gh(i){return{method:i.method,url:i.url,headers:{get:(...o)=>i.headers.get(...o)}}}function qh(i){if(Kh(i)){let o={...i};return Object.freeze(o),o}else return{get:o=>i.get(o)}}var Zh=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kh(i){if(i===null||typeof i!="object")return!1;const o=Object.getPrototypeOf(i);return o===Object.prototype||o===null||Object.getOwnPropertyNames(o).sort().join("\0")===Zh}var Pp=["POST","PUT","PATCH","DELETE"],Qh=new Set(Pp),Xh=["GET",...Pp],Jh=new Set(Xh),Hp=new Set([301,302,303,307,308]),eg=new Set([307,308]),Ns={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},tg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},na={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ng=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),_p="remix-router-transitions",Op=Symbol("ResetLoaderData");function rg(i){const o=i.window?i.window:typeof window<"u"?window:void 0,s=typeof o<"u"&&typeof o.document<"u"&&typeof o.document.createElement<"u";Fe(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let p=i.hydrationRouteProperties||[],c=i.mapRouteProperties||ng,f=c;if(i.unstable_instrumentations){let w=i.unstable_instrumentations;f=F=>({...c(F),...Uh(w.map(N=>N.route).filter(Boolean),F)})}let g={},x=ca(i.routes,f,void 0,g),m,v=i.basename||"/";v.startsWith("/")||(v=`/${v}`);let k=i.dataStrategy||sg,b={...i.future},S=null,I=new Set,_=null,B=null,P=null,X=i.hydrationData!=null,U=or(x,i.history.location,v),K=!1,ye=null,me;if(U==null&&!i.patchRoutesOnNavigation){let w=Xt(404,{pathname:i.history.location.pathname}),{matches:F,route:N}=Io(x);me=!0,U=F,ye={[N.id]:w}}else if(U&&!i.hydrationData&&hr(U,x,i.history.location.pathname).active&&(U=null),U)if(U.some(w=>w.route.lazy))me=!1;else if(!U.some(w=>Xs(w.route)))me=!0;else{let w=i.hydrationData?i.hydrationData.loaderData:null,F=i.hydrationData?i.hydrationData.errors:null;if(F){let N=U.findIndex(O=>F[O.route.id]!==void 0);me=U.slice(0,N+1).every(O=>!$s(O.route,w,F))}else me=U.every(N=>!$s(N.route,w,F))}else{me=!1,U=[];let w=hr(null,x,i.history.location.pathname);w.active&&w.matches&&(K=!0,U=w.matches)}let Ee,R={historyAction:i.history.action,location:i.history.location,matches:U,initialized:me,navigation:Ns,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||ye,fetchers:new Map,blockers:new Map},de="POP",xe=null,Se=!1,Te,Pe=!1,Ve=new Map,Re=null,Ge=!1,je=!1,we=new Set,$=new Map,te=0,Z=-1,A=new Map,D=new Set,fe=new Map,ge=new Map,he=new Set,ke=new Map,Be,ze=null;function We(){if(S=i.history.listen(({action:w,location:F,delta:N})=>{if(Be){Be(),Be=void 0;return}it(ke.size===0||N!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let O=bn({currentLocation:R.location,nextLocation:F,historyAction:w});if(O&&N!=null){let G=new Promise(oe=>{Be=oe});i.history.go(N*-1),Dn(O,{state:"blocked",location:F,proceed(){Dn(O,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),G.then(()=>i.history.go(N))},reset(){let oe=new Map(R.blockers);oe.set(O,na),at({blockers:oe})}}),xe==null||xe.resolve(),xe=null;return}return dn(w,F)}),s){Sg(o,Ve);let w=()=>Ag(o,Ve);o.addEventListener("pagehide",w),Re=()=>o.removeEventListener("pagehide",w)}return R.initialized||dn("POP",R.location,{initialHydration:!0}),Ee}function bt(){S&&S(),Re&&Re(),I.clear(),Te&&Te.abort(),R.fetchers.forEach((w,F)=>xi(F)),R.blockers.forEach((w,F)=>_r(F))}function Rr(w){return I.add(w),()=>I.delete(w)}function at(w,F={}){w.matches&&(w.matches=w.matches.map(G=>{let oe=g[G.route.id],ce=G.route;return ce.element!==oe.element||ce.errorElement!==oe.errorElement||ce.hydrateFallbackElement!==oe.hydrateFallbackElement?{...G,route:oe}:G})),R={...R,...w};let N=[],O=[];R.fetchers.forEach((G,oe)=>{G.state==="idle"&&(he.has(oe)?N.push(oe):O.push(oe))}),he.forEach(G=>{!R.fetchers.has(G)&&!$.has(G)&&N.push(G)}),[...I].forEach(G=>G(R,{deletedFetchers:N,newErrors:w.errors??null,viewTransitionOpts:F.viewTransitionOpts,flushSync:F.flushSync===!0})),N.forEach(G=>xi(G)),O.forEach(G=>R.fetchers.delete(G))}function tn(w,F,{flushSync:N}={}){var be,se;let O=R.actionData!=null&&R.navigation.formMethod!=null&&yt(R.navigation.formMethod)&&R.navigation.state==="loading"&&((be=w.state)==null?void 0:be._isRedirect)!==!0,G;F.actionData?Object.keys(F.actionData).length>0?G=F.actionData:G=null:O?G=R.actionData:G=null;let oe=F.loaderData?op(R.loaderData,F.loaderData,F.matches||[],F.errors):R.loaderData,ce=R.blockers;ce.size>0&&(ce=new Map(ce),ce.forEach((Ce,Ie)=>ce.set(Ie,na)));let J=Ge?!1:bi(w,F.matches||R.matches),ne=Se===!0||R.navigation.formMethod!=null&&yt(R.navigation.formMethod)&&((se=w.state)==null?void 0:se._isRedirect)!==!0;m&&(x=m,m=void 0),Ge||de==="POP"||(de==="PUSH"?i.history.push(w,w.state):de==="REPLACE"&&i.history.replace(w,w.state));let ie;if(de==="POP"){let Ce=Ve.get(R.location.pathname);Ce&&Ce.has(w.pathname)?ie={currentLocation:R.location,nextLocation:w}:Ve.has(w.pathname)&&(ie={currentLocation:w,nextLocation:R.location})}else if(Pe){let Ce=Ve.get(R.location.pathname);Ce?Ce.add(w.pathname):(Ce=new Set([w.pathname]),Ve.set(R.location.pathname,Ce)),ie={currentLocation:R.location,nextLocation:w}}at({...F,actionData:G,loaderData:oe,historyAction:de,location:w,initialized:!0,navigation:Ns,revalidation:"idle",restoreScrollPosition:J,preventScrollReset:ne,blockers:ce},{viewTransitionOpts:ie,flushSync:N===!0}),de="POP",Se=!1,Pe=!1,Ge=!1,je=!1,xe==null||xe.resolve(),xe=null,ze==null||ze.resolve(),ze=null}async function Br(w,F){if(xe==null||xe.resolve(),xe=null,typeof w=="number"){xe||(xe=cp());let Ie=xe.promise;return i.history.go(w),Ie}let N=Ws(R.location,R.matches,v,w,F==null?void 0:F.fromRouteId,F==null?void 0:F.relative),{path:O,submission:G,error:oe}=Qu(!1,N,F),ce=R.location,J=da(R.location,O,F&&F.state);J={...J,...i.history.encodeLocation(J)};let ne=F&&F.replace!=null?F.replace:void 0,ie="PUSH";ne===!0?ie="REPLACE":ne===!1||G!=null&&yt(G.formMethod)&&G.formAction===R.location.pathname+R.location.search&&(ie="REPLACE");let be=F&&"preventScrollReset"in F?F.preventScrollReset===!0:void 0,se=(F&&F.flushSync)===!0,Ce=bn({currentLocation:ce,nextLocation:J,historyAction:ie});if(Ce){Dn(Ce,{state:"blocked",location:J,proceed(){Dn(Ce,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),Br(w,F)},reset(){let Ie=new Map(R.blockers);Ie.set(Ce,na),at({blockers:Ie})}});return}await dn(ie,J,{submission:G,pendingError:oe,preventScrollReset:be,replace:F&&F.replace,enableViewTransition:F&&F.viewTransition,flushSync:se,callSiteDefaultShouldRevalidate:F&&F.unstable_defaultShouldRevalidate})}function ba(){ze||(ze=cp()),pr(),at({revalidation:"loading"});let w=ze.promise;return R.navigation.state==="submitting"?w:R.navigation.state==="idle"?(dn(R.historyAction,R.location,{startUninterruptedRevalidation:!0}),w):(dn(de||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation,enableViewTransition:Pe===!0}),w)}async function dn(w,F,N){Te&&Te.abort(),Te=null,de=w,Ge=(N&&N.startUninterruptedRevalidation)===!0,Sa(R.location,R.matches),Se=(N&&N.preventScrollReset)===!0,Pe=(N&&N.enableViewTransition)===!0;let O=m||x,G=N&&N.overrideNavigation,oe=N!=null&&N.initialHydration&&R.matches&&R.matches.length>0&&!K?R.matches:or(O,F,v),ce=(N&&N.flushSync)===!0;if(oe&&R.initialized&&!je&&mg(R.location,F)&&!(N&&N.submission&&yt(N.submission.formMethod))){tn(F,{matches:oe},{flushSync:ce});return}let J=hr(oe,O,F.pathname);if(J.active&&J.matches&&(oe=J.matches),!oe){let{error:et,notFoundMatches:st,route:De}=un(F.pathname);tn(F,{matches:st,loaderData:{},errors:{[De.id]:et}},{flushSync:ce});return}Te=new AbortController;let ne=ci(i.history,F,Te.signal,N&&N.submission),ie=i.getContext?await i.getContext():new Uu,be;if(N&&N.pendingError)be=[lr(oe).route.id,{type:"error",error:N.pendingError}];else if(N&&N.submission&&yt(N.submission.formMethod)){let et=await hi(ne,F,N.submission,oe,ie,J.active,N&&N.initialHydration===!0,{replace:N.replace,flushSync:ce});if(et.shortCircuited)return;if(et.pendingActionResult){let[st,De]=et.pendingActionResult;if(Wt(De)&&ua(De.error)&&De.error.status===404){Te=null,tn(F,{matches:et.matches,loaderData:{},errors:{[st]:De.error}});return}}oe=et.matches||oe,be=et.pendingActionResult,G=Ms(F,N.submission),ce=!1,J.active=!1,ne=ci(i.history,ne.url,ne.signal)}let{shortCircuited:se,matches:Ce,loaderData:Ie,errors:nt}=await wa(ne,F,oe,ie,J.active,G,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,N&&N.initialHydration===!0,ce,be,N&&N.callSiteDefaultShouldRevalidate);se||(Te=null,tn(F,{matches:Ce||oe,...lp(be),loaderData:Ie,errors:nt}))}async function hi(w,F,N,O,G,oe,ce,J={}){pr();let ne=jg(F,N);if(at({navigation:ne},{flushSync:J.flushSync===!0}),oe){let se=await Pn(O,F.pathname,w.signal);if(se.type==="aborted")return{shortCircuited:!0};if(se.type==="error"){if(se.partialMatches.length===0){let{matches:Ie,route:nt}=Io(x);return{matches:Ie,pendingActionResult:[nt.id,{type:"error",error:se.error}]}}let Ce=lr(se.partialMatches).route.id;return{matches:se.partialMatches,pendingActionResult:[Ce,{type:"error",error:se.error}]}}else if(se.matches)O=se.matches;else{let{notFoundMatches:Ce,error:Ie,route:nt}=un(F.pathname);return{matches:Ce,pendingActionResult:[nt.id,{type:"error",error:Ie}]}}}let ie,be=Bo(O,F);if(!be.route.action&&!be.route.lazy)ie={type:"error",error:Xt(405,{method:w.method,pathname:F.pathname,routeId:be.route.id})};else{let se=pi(f,g,w,O,be,ce?[]:p,G),Ce=await Rn(w,se,G,null);if(ie=Ce[be.route.id],!ie){for(let Ie of O)if(Ce[Ie.route.id]){ie=Ce[Ie.route.id];break}}if(w.signal.aborted)return{shortCircuited:!0}}if(Tr(ie)){let se;return J&&J.replace!=null?se=J.replace:se=rp(ie.response.headers.get("Location"),new URL(w.url),v,i.history)===R.location.pathname+R.location.search,await cn(w,ie,!0,{submission:N,replace:se}),{shortCircuited:!0}}if(Wt(ie)){let se=lr(O,be.route.id);return(J&&J.replace)!==!0&&(de="PUSH"),{matches:O,pendingActionResult:[se.route.id,ie,be.route.id]}}return{matches:O,pendingActionResult:[be.route.id,ie]}}async function wa(w,F,N,O,G,oe,ce,J,ne,ie,be,se,Ce){let Ie=oe||Ms(F,ce),nt=ce||J||dp(Ie),et=!Ge&&!ie;if(G){if(et){let Oe=Dr(se);at({navigation:Ie,...Oe!==void 0?{actionData:Oe}:{}},{flushSync:be})}let Le=await Pn(N,F.pathname,w.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){if(Le.partialMatches.length===0){let{matches:_n,route:kn}=Io(x);return{matches:_n,loaderData:{},errors:{[kn.id]:Le.error}}}let Oe=lr(Le.partialMatches).route.id;return{matches:Le.partialMatches,loaderData:{},errors:{[Oe]:Le.error}}}else if(Le.matches)N=Le.matches;else{let{error:Oe,notFoundMatches:_n,route:kn}=un(F.pathname);return{matches:_n,loaderData:{},errors:{[kn.id]:Oe}}}}let st=m||x,{dsMatches:De,revalidatingFetchers:St}=Xu(w,O,f,g,i.history,R,N,nt,F,ie?[]:p,ie===!0,je,we,he,fe,D,st,v,i.patchRoutesOnNavigation!=null,se,Ce);if(Z=++te,!i.dataStrategy&&!De.some(Le=>Le.shouldLoad)&&!De.some(Le=>Le.route.middleware&&Le.route.middleware.length>0)&&St.length===0){let Le=Pr();return tn(F,{matches:N,loaderData:{},errors:se&&Wt(se[1])?{[se[0]]:se[1].error}:null,...lp(se),...Le?{fetchers:new Map(R.fetchers)}:{}},{flushSync:be}),{shortCircuited:!0}}if(et){let Le={};if(!G){Le.navigation=Ie;let Oe=Dr(se);Oe!==void 0&&(Le.actionData=Oe)}St.length>0&&(Le.fetchers=ur(St)),at(Le,{flushSync:be})}St.forEach(Le=>{Vt(Le.key),Le.controller&&$.set(Le.key,Le.controller)});let He=()=>St.forEach(Le=>Vt(Le.key));Te&&Te.signal.addEventListener("abort",He);let{loaderResults:mr,fetcherResults:Ut}=await mi(De,St,w,O);if(w.signal.aborted)return{shortCircuited:!0};Te&&Te.signal.removeEventListener("abort",He),St.forEach(Le=>$.delete(Le.key));let Bt=Lo(mr);if(Bt)return await cn(w,Bt.result,!0,{replace:ne}),{shortCircuited:!0};if(Bt=Lo(Ut),Bt)return D.add(Bt.key),await cn(w,Bt.result,!0,{replace:ne}),{shortCircuited:!0};let{loaderData:Hn,errors:xr}=ap(R,N,mr,se,St,Ut);ie&&R.errors&&(xr={...R.errors,...xr});let pn=Pr(),wn=Hr(Z),wt=pn||wn||St.length>0;return{matches:N,loaderData:Hn,errors:xr,...wt?{fetchers:new Map(R.fetchers)}:{}}}function Dr(w){if(w&&!Wt(w[1]))return{[w[0]]:w[1].data};if(R.actionData)return Object.keys(R.actionData).length===0?null:R.actionData}function ur(w){return w.forEach(F=>{let N=R.fetchers.get(F.key),O=ra(void 0,N?N.data:void 0);R.fetchers.set(F.key,O)}),new Map(R.fetchers)}async function Mn(w,F,N,O){Vt(w);let G=(O&&O.flushSync)===!0,oe=m||x,ce=Ws(R.location,R.matches,v,N,F,O==null?void 0:O.relative),J=or(oe,ce,v),ne=hr(J,oe,ce);if(ne.active&&ne.matches&&(J=ne.matches),!J){$t(w,F,Xt(404,{pathname:ce}),{flushSync:G});return}let{path:ie,submission:be,error:se}=Qu(!0,ce,O);if(se){$t(w,F,se,{flushSync:G});return}let Ce=i.getContext?await i.getContext():new Uu,Ie=(O&&O.preventScrollReset)===!0;if(be&&yt(be.formMethod)){await gi(w,F,ie,J,Ce,ne.active,G,Ie,be,O&&O.unstable_defaultShouldRevalidate);return}fe.set(w,{routeId:F,path:ie}),await ka(w,F,ie,J,Ce,ne.active,G,Ie,be)}async function gi(w,F,N,O,G,oe,ce,J,ne,ie){pr(),fe.delete(w);let be=R.fetchers.get(w);Et(w,Eg(ne,be),{flushSync:ce});let se=new AbortController,Ce=ci(i.history,N,se.signal,ne);if(oe){let qe=await Pn(O,new URL(Ce.url).pathname,Ce.signal,w);if(qe.type==="aborted")return;if(qe.type==="error"){$t(w,F,qe.error,{flushSync:ce});return}else if(qe.matches)O=qe.matches;else{$t(w,F,Xt(404,{pathname:N}),{flushSync:ce});return}}let Ie=Bo(O,N);if(!Ie.route.action&&!Ie.route.lazy){let qe=Xt(405,{method:ne.formMethod,pathname:N,routeId:F});$t(w,F,qe,{flushSync:ce});return}$.set(w,se);let nt=te,et=pi(f,g,Ce,O,Ie,p,G),st=await Rn(Ce,et,G,w),De=st[Ie.route.id];if(!De){for(let qe of et)if(st[qe.route.id]){De=st[qe.route.id];break}}if(Ce.signal.aborted){$.get(w)===se&&$.delete(w);return}if(he.has(w)){if(Tr(De)||Wt(De)){Et(w,Tn(void 0));return}}else{if(Tr(De))if($.delete(w),Z>nt){Et(w,Tn(void 0));return}else return D.add(w),Et(w,ra(ne)),cn(Ce,De,!1,{fetcherSubmission:ne,preventScrollReset:J});if(Wt(De)){$t(w,F,De.error);return}}let St=R.navigation.location||R.location,He=ci(i.history,St,se.signal),mr=m||x,Ut=R.navigation.state!=="idle"?or(mr,R.navigation.location,v):R.matches;Fe(Ut,"Didn't find any matches after fetcher action");let Bt=++te;A.set(w,Bt);let Hn=ra(ne,De.data);R.fetchers.set(w,Hn);let{dsMatches:xr,revalidatingFetchers:pn}=Xu(He,G,f,g,i.history,R,Ut,ne,St,p,!1,je,we,he,fe,D,mr,v,i.patchRoutesOnNavigation!=null,[Ie.route.id,De],ie);pn.filter(qe=>qe.key!==w).forEach(qe=>{let Cn=qe.key,vr=R.fetchers.get(Cn),yr=ra(void 0,vr?vr.data:void 0);R.fetchers.set(Cn,yr),Vt(Cn),qe.controller&&$.set(Cn,qe.controller)}),at({fetchers:new Map(R.fetchers)});let wn=()=>pn.forEach(qe=>Vt(qe.key));se.signal.addEventListener("abort",wn);let{loaderResults:wt,fetcherResults:Le}=await mi(xr,pn,He,G);if(se.signal.aborted)return;if(se.signal.removeEventListener("abort",wn),A.delete(w),$.delete(w),pn.forEach(qe=>$.delete(qe.key)),R.fetchers.has(w)){let qe=Tn(De.data);R.fetchers.set(w,qe)}let Oe=Lo(wt);if(Oe)return cn(He,Oe.result,!1,{preventScrollReset:J});if(Oe=Lo(Le),Oe)return D.add(Oe.key),cn(He,Oe.result,!1,{preventScrollReset:J});let{loaderData:_n,errors:kn}=ap(R,Ut,wt,void 0,pn,Le);Hr(Bt),R.navigation.state==="loading"&&Bt>Z?(Fe(de,"Expected pending action"),Te&&Te.abort(),tn(R.navigation.location,{matches:Ut,loaderData:_n,errors:kn,fetchers:new Map(R.fetchers)})):(at({errors:kn,loaderData:op(R.loaderData,_n,Ut,kn),fetchers:new Map(R.fetchers)}),je=!1)}async function ka(w,F,N,O,G,oe,ce,J,ne){let ie=R.fetchers.get(w);Et(w,ra(ne,ie?ie.data:void 0),{flushSync:ce});let be=new AbortController,se=ci(i.history,N,be.signal);if(oe){let De=await Pn(O,new URL(se.url).pathname,se.signal,w);if(De.type==="aborted")return;if(De.type==="error"){$t(w,F,De.error,{flushSync:ce});return}else if(De.matches)O=De.matches;else{$t(w,F,Xt(404,{pathname:N}),{flushSync:ce});return}}let Ce=Bo(O,N);$.set(w,be);let Ie=te,nt=pi(f,g,se,O,Ce,p,G),st=(await Rn(se,nt,G,w))[Ce.route.id];if($.get(w)===be&&$.delete(w),!se.signal.aborted){if(he.has(w)){Et(w,Tn(void 0));return}if(Tr(st))if(Z>Ie){Et(w,Tn(void 0));return}else{D.add(w),await cn(se,st,!1,{preventScrollReset:J});return}if(Wt(st)){$t(w,F,st.error);return}Et(w,Tn(st.data))}}async function cn(w,F,N,{submission:O,fetcherSubmission:G,preventScrollReset:oe,replace:ce}={}){N||(xe==null||xe.resolve(),xe=null),F.response.headers.has("X-Remix-Revalidate")&&(je=!0);let J=F.response.headers.get("Location");Fe(J,"Expected a Location header on the redirect Response"),J=rp(J,new URL(w.url),v,i.history);let ne=da(R.location,J,{_isRedirect:!0});if(s){let nt=!1;if(F.response.headers.has("X-Remix-Reload-Document"))nt=!0;else if(Zs(J)){const et=Ip(J,!0);nt=et.origin!==o.location.origin||Jt(et.pathname,v)==null}if(nt){ce?o.location.replace(J):o.location.assign(J);return}}Te=null;let ie=ce===!0||F.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:be,formAction:se,formEncType:Ce}=R.navigation;!O&&!G&&be&&se&&Ce&&(O=dp(R.navigation));let Ie=O||G;if(eg.has(F.response.status)&&Ie&&yt(Ie.formMethod))await dn(ie,ne,{submission:{...Ie,formAction:J},preventScrollReset:oe||Se,enableViewTransition:N?Pe:void 0});else{let nt=Ms(ne,O);await dn(ie,ne,{overrideNavigation:nt,fetcherSubmission:G,preventScrollReset:oe||Se,enableViewTransition:N?Pe:void 0})}}async function Rn(w,F,N,O){var ce;let G,oe={};try{G=await cg(k,w,F,O,N,!1)}catch(J){return F.filter(ne=>ne.shouldLoad).forEach(ne=>{oe[ne.route.id]={type:"error",error:J}}),oe}if(w.signal.aborted)return oe;if(!yt(w.method))for(let J of F){if(((ce=G[J.route.id])==null?void 0:ce.type)==="error")break;!G.hasOwnProperty(J.route.id)&&!R.loaderData.hasOwnProperty(J.route.id)&&(!R.errors||!R.errors.hasOwnProperty(J.route.id))&&J.shouldCallHandler()&&(G[J.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${J.route.id}`)})}for(let[J,ne]of Object.entries(G))if(bg(ne)){let ie=ne.result;oe[J]={type:"redirect",response:hg(ie,w,J,F,v)}}else oe[J]=await fg(ne);return oe}async function mi(w,F,N,O){let G=Rn(N,w,O,null),oe=Promise.all(F.map(async ne=>{if(ne.matches&&ne.match&&ne.request&&ne.controller){let be=(await Rn(ne.request,ne.matches,O,ne.key))[ne.match.route.id];return{[ne.key]:be}}else return Promise.resolve({[ne.key]:{type:"error",error:Xt(404,{pathname:ne.path})}})})),ce=await G,J=(await oe).reduce((ne,ie)=>Object.assign(ne,ie),{});return{loaderResults:ce,fetcherResults:J}}function pr(){je=!0,fe.forEach((w,F)=>{$.has(F)&&we.add(F),Vt(F)})}function Et(w,F,N={}){R.fetchers.set(w,F),at({fetchers:new Map(R.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function $t(w,F,N,O={}){let G=lr(R.matches,F);xi(w),at({errors:{[G.route.id]:N},fetchers:new Map(R.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Bn(w){return ge.set(w,(ge.get(w)||0)+1),he.has(w)&&he.delete(w),R.fetchers.get(w)||tg}function fr(w,F){Vt(w,F==null?void 0:F.reason),Et(w,Tn(null))}function xi(w){let F=R.fetchers.get(w);$.has(w)&&!(F&&F.state==="loading"&&A.has(w))&&Vt(w),fe.delete(w),A.delete(w),D.delete(w),he.delete(w),we.delete(w),R.fetchers.delete(w)}function Ca(w){let F=(ge.get(w)||0)-1;F<=0?(ge.delete(w),he.add(w)):ge.set(w,F),at({fetchers:new Map(R.fetchers)})}function Vt(w,F){let N=$.get(w);N&&(N.abort(F),$.delete(w))}function ja(w){for(let F of w){let N=Bn(F),O=Tn(N.data);R.fetchers.set(F,O)}}function Pr(){let w=[],F=!1;for(let N of D){let O=R.fetchers.get(N);Fe(O,`Expected fetcher: ${N}`),O.state==="loading"&&(D.delete(N),w.push(N),F=!0)}return ja(w),F}function Hr(w){let F=[];for(let[N,O]of A)if(O<w){let G=R.fetchers.get(N);Fe(G,`Expected fetcher: ${N}`),G.state==="loading"&&(Vt(N),A.delete(N),F.push(N))}return ja(F),F.length>0}function vi(w,F){let N=R.blockers.get(w)||na;return ke.get(w)!==F&&ke.set(w,F),N}function _r(w){R.blockers.delete(w),ke.delete(w)}function Dn(w,F){let N=R.blockers.get(w)||na;Fe(N.state==="unblocked"&&F.state==="blocked"||N.state==="blocked"&&F.state==="blocked"||N.state==="blocked"&&F.state==="proceeding"||N.state==="blocked"&&F.state==="unblocked"||N.state==="proceeding"&&F.state==="unblocked",`Invalid blocker state transition: ${N.state} -> ${F.state}`);let O=new Map(R.blockers);O.set(w,F),at({blockers:O})}function bn({currentLocation:w,nextLocation:F,historyAction:N}){if(ke.size===0)return;ke.size>1&&it(!1,"A router only supports one blocker at a time");let O=Array.from(ke.entries()),[G,oe]=O[O.length-1],ce=R.blockers.get(G);if(!(ce&&ce.state==="proceeding")&&oe({currentLocation:w,nextLocation:F,historyAction:N}))return G}function un(w){let F=Xt(404,{pathname:w}),N=m||x,{matches:O,route:G}=Io(N);return{notFoundMatches:O,route:G,error:F}}function Ea(w,F,N){if(_=w,P=F,B=N||null,!X&&R.navigation===Ns){X=!0;let O=bi(R.location,R.matches);O!=null&&at({restoreScrollPosition:O})}return()=>{_=null,P=null,B=null}}function yi(w,F){return B&&B(w,F.map(O=>Ah(O,R.loaderData)))||w.key}function Sa(w,F){if(_&&P){let N=yi(w,F);_[N]=P()}}function bi(w,F){if(_){let N=yi(w,F),O=_[N];if(typeof O=="number")return O}return null}function hr(w,F,N){if(i.patchRoutesOnNavigation)if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:la(F,N,v,!0)}}else return{active:!0,matches:la(F,N,v,!0)||[]};return{active:!1,matches:null}}async function Pn(w,F,N,O){if(!i.patchRoutesOnNavigation)return{type:"success",matches:w};let G=w;for(;;){let oe=m==null,ce=m||x,J=g;try{await i.patchRoutesOnNavigation({signal:N,path:F,matches:G,fetcherKey:O,patch:(be,se)=>{N.aborted||Ju(be,se,ce,J,f,!1)}})}catch(be){return{type:"error",error:be,partialMatches:G}}finally{oe&&!N.aborted&&(x=[...x])}if(N.aborted)return{type:"aborted"};let ne=or(ce,F,v),ie=null;if(ne){if(Object.keys(ne[0].params).length===0)return{type:"success",matches:ne};if(ie=la(ce,F,v,!0),!(ie&&G.length<ie.length&&wi(G,ie.slice(0,G.length))))return{type:"success",matches:ne}}if(ie||(ie=la(ce,F,v,!0)),!ie||wi(G,ie))return{type:"success",matches:null};G=ie}}function wi(w,F){return w.length===F.length&&w.every((N,O)=>N.route.id===F[O].route.id)}function gr(w){g={},m=ca(w,f,void 0,g)}function ki(w,F,N=!1){let O=m==null;Ju(w,F,m||x,g,f,N),O&&(x=[...x],at({}))}return Ee={get basename(){return v},get future(){return b},get state(){return R},get routes(){return x},get window(){return o},initialize:We,subscribe:Rr,enableScrollRestoration:Ea,navigate:Br,fetch:Mn,revalidate:ba,createHref:w=>i.history.createHref(w),encodeLocation:w=>i.history.encodeLocation(w),getFetcher:Bn,resetFetcher:fr,deleteFetcher:Ca,dispose:bt,getBlocker:vi,deleteBlocker:_r,patchRoutes:ki,_internalFetchControllers:$,_internalSetRoutes:gr,_internalSetStateDoNotUseOrYouWillBreakYourApp(w){at(w)}},i.unstable_instrumentations&&(Ee=Yh(Ee,i.unstable_instrumentations.map(w=>w.router).filter(Boolean))),Ee}function ig(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function Ws(i,o,s,p,c,f){let g,x;if(c){g=[];for(let v of o)if(g.push(v),v.route.id===c){x=v;break}}else g=o,x=o[o.length-1];let m=Qs(p||".",Ks(g),Jt(i.pathname,s)||i.pathname,f==="path");if(p==null&&(m.search=i.search,m.hash=i.hash),(p==null||p===""||p===".")&&x){let v=ed(m.search);if(x.route.index&&!v)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!x.route.index&&v){let k=new URLSearchParams(m.search),b=k.getAll("index");k.delete("index"),b.filter(I=>I).forEach(I=>k.append("index",I));let S=k.toString();m.search=S?`?${S}`:""}}return s!=="/"&&(m.pathname=_h({basename:s,pathname:m.pathname})),vn(m)}function Qu(i,o,s){if(!s||!ig(s))return{path:o};if(s.formMethod&&!Cg(s.formMethod))return{path:o,error:Xt(405,{method:s.formMethod})};let p=()=>({path:o,error:Xt(400,{type:"invalid-body"})}),f=(s.formMethod||"get").toUpperCase(),g=Gp(o);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!yt(f))return p();let b=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((S,[I,_])=>`${S}${I}=${_}
`,""):String(s.body);return{path:o,submission:{formMethod:f,formAction:g,formEncType:s.formEncType,formData:void 0,json:void 0,text:b}}}else if(s.formEncType==="application/json"){if(!yt(f))return p();try{let b=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:o,submission:{formMethod:f,formAction:g,formEncType:s.formEncType,formData:void 0,json:b,text:void 0}}}catch{return p()}}}Fe(typeof FormData=="function","FormData is not available in this environment");let x,m;if(s.formData)x=Us(s.formData),m=s.formData;else if(s.body instanceof FormData)x=Us(s.body),m=s.body;else if(s.body instanceof URLSearchParams)x=s.body,m=ip(x);else if(s.body==null)x=new URLSearchParams,m=new FormData;else try{x=new URLSearchParams(s.body),m=ip(x)}catch{return p()}let v={formMethod:f,formAction:g,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(yt(v.formMethod))return{path:o,submission:v};let k=cr(o);return i&&k.search&&ed(k.search)&&x.append("index",""),k.search=`?${x}`,{path:vn(k),submission:v}}function Xu(i,o,s,p,c,f,g,x,m,v,k,b,S,I,_,B,P,X,U,K,ye){var Ge;let me=K?Wt(K[1])?K[1].error:K[1].data:void 0,Ee=c.createURL(f.location),R=c.createURL(m),de;if(k&&f.errors){let je=Object.keys(f.errors)[0];de=g.findIndex(we=>we.route.id===je)}else if(K&&Wt(K[1])){let je=K[0];de=g.findIndex(we=>we.route.id===je)-1}let xe=K?K[1].statusCode:void 0,Se=xe&&xe>=400,Te={currentUrl:Ee,currentParams:((Ge=f.matches[0])==null?void 0:Ge.params)||{},nextUrl:R,nextParams:g[0].params,...x,actionResult:me,actionStatus:xe},Pe=ma(g),Ve=g.map((je,we)=>{let{route:$}=je,te=null;if(de!=null&&we>de?te=!1:$.lazy?te=!0:Xs($)?k?te=$s($,f.loaderData,f.errors):ag(f.loaderData,f.matches[we],je)&&(te=!0):te=!1,te!==null)return Vs(s,p,i,Pe,je,v,o,te);let Z=!1;typeof ye=="boolean"?Z=ye:Se?Z=!1:(b||Ee.pathname+Ee.search===R.pathname+R.search||Ee.search!==R.search||og(f.matches[we],je))&&(Z=!0);let A={...Te,defaultShouldRevalidate:Z},D=sa(je,A);return Vs(s,p,i,Pe,je,v,o,D,A,ye)}),Re=[];return _.forEach((je,we)=>{if(k||!g.some(he=>he.route.id===je.routeId)||I.has(we))return;let $=f.fetchers.get(we),te=$&&$.state!=="idle"&&$.data===void 0,Z=or(P,je.path,X);if(!Z){if(U&&te)return;Re.push({key:we,routeId:je.routeId,path:je.path,matches:null,match:null,request:null,controller:null});return}if(B.has(we))return;let A=Bo(Z,je.path),D=new AbortController,fe=ci(c,je.path,D.signal),ge=null;if(S.has(we))S.delete(we),ge=pi(s,p,fe,Z,A,v,o);else if(te)b&&(ge=pi(s,p,fe,Z,A,v,o));else{let he;typeof ye=="boolean"?he=ye:Se?he=!1:he=b;let ke={...Te,defaultShouldRevalidate:he};sa(A,ke)&&(ge=pi(s,p,fe,Z,A,v,o,ke))}ge&&Re.push({key:we,routeId:je.routeId,path:je.path,matches:ge,match:A,request:fe,controller:D})}),{dsMatches:Ve,revalidatingFetchers:Re}}function Xs(i){return i.loader!=null||i.middleware!=null&&i.middleware.length>0}function $s(i,o,s){if(i.lazy)return!0;if(!Xs(i))return!1;let p=o!=null&&i.id in o,c=s!=null&&s[i.id]!==void 0;return!p&&c?!1:typeof i.loader=="function"&&i.loader.hydrate===!0?!0:!p&&!c}function ag(i,o,s){let p=!o||s.route.id!==o.route.id,c=!i.hasOwnProperty(s.route.id);return p||c}function og(i,o){let s=i.route.path;return i.pathname!==o.pathname||s!=null&&s.endsWith("*")&&i.params["*"]!==o.params["*"]}function sa(i,o){if(i.route.shouldRevalidate){let s=i.route.shouldRevalidate(o);if(typeof s=="boolean")return s}return o.defaultShouldRevalidate}function Ju(i,o,s,p,c,f){let g;if(i){let v=p[i];Fe(v,`No route found to patch children into: routeId = ${i}`),v.children||(v.children=[]),g=v.children}else g=s;let x=[],m=[];if(o.forEach(v=>{let k=g.find(b=>Wp(v,b));k?m.push({existingRoute:k,newRoute:v}):x.push(v)}),x.length>0){let v=ca(x,c,[i||"_","patch",String((g==null?void 0:g.length)||"0")],p);g.push(...v)}if(f&&m.length>0)for(let v=0;v<m.length;v++){let{existingRoute:k,newRoute:b}=m[v],S=k,[I]=ca([b],c,[],{},!0);Object.assign(S,{element:I.element?I.element:S.element,errorElement:I.errorElement?I.errorElement:S.errorElement,hydrateFallbackElement:I.hydrateFallbackElement?I.hydrateFallbackElement:S.hydrateFallbackElement})}}function Wp(i,o){return"id"in i&&"id"in o&&i.id===o.id?!0:i.index===o.index&&i.path===o.path&&i.caseSensitive===o.caseSensitive?(!i.children||i.children.length===0)&&(!o.children||o.children.length===0)?!0:i.children.every((s,p)=>{var c;return(c=o.children)==null?void 0:c.some(f=>Wp(s,f))}):!1}var ep=new WeakMap,$p=({key:i,route:o,manifest:s,mapRouteProperties:p})=>{let c=s[o.id];if(Fe(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let f=c.lazy[i];if(!f)return;let g=ep.get(c);g||(g={},ep.set(c,g));let x=g[i];if(x)return x;let m=(async()=>{let v=Ch(i),b=c[i]!==void 0&&i!=="hasErrorBoundary";if(v)it(!v,"Route property "+i+" is not a supported lazy route property. This property will be ignored."),g[i]=Promise.resolve();else if(b)it(!1,`Route "${c.id}" has a static property "${i}" defined. The lazy property will be ignored.`);else{let S=await f();S!=null&&(Object.assign(c,{[i]:S}),Object.assign(c,p(c)))}typeof c.lazy=="object"&&(c.lazy[i]=void 0,Object.values(c.lazy).every(S=>S===void 0)&&(c.lazy=void 0))})();return g[i]=m,m},tp=new WeakMap;function lg(i,o,s,p,c){let f=s[i.id];if(Fe(f,"No route found in manifest"),!i.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof i.lazy=="function"){let k=tp.get(f);if(k)return{lazyRoutePromise:k,lazyHandlerPromise:k};let b=(async()=>{Fe(typeof i.lazy=="function","No lazy route function found");let S=await i.lazy(),I={};for(let _ in S){let B=S[_];if(B===void 0)continue;let P=Eh(_),U=f[_]!==void 0&&_!=="hasErrorBoundary";P?it(!P,"Route property "+_+" is not a supported property to be returned from a lazy route function. This property will be ignored."):U?it(!U,`Route "${f.id}" has a static property "${_}" defined but its lazy function is also returning a value for this property. The lazy route property "${_}" will be ignored.`):I[_]=B}Object.assign(f,I),Object.assign(f,{...p(f),lazy:void 0})})();return tp.set(f,b),b.catch(()=>{}),{lazyRoutePromise:b,lazyHandlerPromise:b}}let g=Object.keys(i.lazy),x=[],m;for(let k of g){if(c&&c.includes(k))continue;let b=$p({key:k,route:i,manifest:s,mapRouteProperties:p});b&&(x.push(b),k===o&&(m=b))}let v=x.length>0?Promise.all(x).then(()=>{}):void 0;return v==null||v.catch(()=>{}),m==null||m.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:m}}async function np(i){let o=i.matches.filter(c=>c.shouldLoad),s={};return(await Promise.all(o.map(c=>c.resolve()))).forEach((c,f)=>{s[o[f].route.id]=c}),s}async function sg(i){return i.matches.some(o=>o.route.middleware)?Vp(i,()=>np(i)):np(i)}function Vp(i,o){return dg(i,o,p=>{if(kg(p))throw p;return p},vg,s);function s(p,c,f){if(f)return Promise.resolve(Object.assign(f.value,{[c]:{type:"error",result:p}}));{let{matches:g}=i,x=Math.min(Math.max(g.findIndex(v=>v.route.id===c),0),Math.max(g.findIndex(v=>v.shouldCallHandler()),0)),m=lr(g,g[x].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:p}})}}}async function dg(i,o,s,p,c){let{matches:f,request:g,params:x,context:m,unstable_pattern:v}=i,k=f.flatMap(S=>S.route.middleware?S.route.middleware.map(I=>[S.route.id,I]):[]);return await Up({request:g,params:x,context:m,unstable_pattern:v},k,o,s,p,c)}async function Up(i,o,s,p,c,f,g=0){let{request:x}=i;if(x.signal.aborted)throw x.signal.reason??new Error(`Request aborted: ${x.method} ${x.url}`);let m=o[g];if(!m)return await s();let[v,k]=m,b,S=async()=>{if(b)throw new Error("You may only call `next()` once per middleware");try{return b={value:await Up(i,o,s,p,c,f,g+1)},b.value}catch(I){return b={value:await f(I,v,b)},b.value}};try{let I=await k(i,S),_=I!=null?p(I):void 0;return c(_)?_:b?_??b.value:(b={value:await S()},b.value)}catch(I){return await f(I,v,b)}}function Yp(i,o,s,p,c){let f=$p({key:"middleware",route:p.route,manifest:o,mapRouteProperties:i}),g=lg(p.route,yt(s.method)?"action":"loader",o,i,c);return{middleware:f,route:g.lazyRoutePromise,handler:g.lazyHandlerPromise}}function Vs(i,o,s,p,c,f,g,x,m=null,v){let k=!1,b=Yp(i,o,s,c,f);return{...c,_lazyPromises:b,shouldLoad:x,shouldRevalidateArgs:m,shouldCallHandler(S){return k=!0,m?typeof v=="boolean"?sa(c,{...m,defaultShouldRevalidate:v}):typeof S=="boolean"?sa(c,{...m,defaultShouldRevalidate:S}):sa(c,m):x},resolve(S){let{lazy:I,loader:_,middleware:B}=c.route,P=k||x||S&&!yt(s.method)&&(I||_),X=B&&B.length>0&&!_&&!I;return P&&(yt(s.method)||!X)?ug({request:s,unstable_pattern:p,match:c,lazyHandlerPromise:b==null?void 0:b.handler,lazyRoutePromise:b==null?void 0:b.route,handlerOverride:S,scopedContext:g}):Promise.resolve({type:"data",result:void 0})}}}function pi(i,o,s,p,c,f,g,x=null){return p.map(m=>m.route.id!==c.route.id?{...m,shouldLoad:!1,shouldRevalidateArgs:x,shouldCallHandler:()=>!1,_lazyPromises:Yp(i,o,s,m,f),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Vs(i,o,s,ma(p),m,f,g,!0,x))}async function cg(i,o,s,p,c,f){s.some(v=>{var k;return(k=v._lazyPromises)==null?void 0:k.middleware})&&await Promise.all(s.map(v=>{var k;return(k=v._lazyPromises)==null?void 0:k.middleware}));let g={request:o,unstable_pattern:ma(s),params:s[0].params,context:c,matches:s},m=await i({...g,fetcherKey:p,runClientMiddleware:v=>{let k=g;return Vp(k,()=>v({...k,fetcherKey:p,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(s.flatMap(v=>{var k,b;return[(k=v._lazyPromises)==null?void 0:k.handler,(b=v._lazyPromises)==null?void 0:b.route]}))}catch{}return m}async function ug({request:i,unstable_pattern:o,match:s,lazyHandlerPromise:p,lazyRoutePromise:c,handlerOverride:f,scopedContext:g}){let x,m,v=yt(i.method),k=v?"action":"loader",b=S=>{let I,_=new Promise((X,U)=>I=U);m=()=>I(),i.signal.addEventListener("abort",m);let B=X=>typeof S!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${k}" [routeId: ${s.route.id}]`)):S({request:i,unstable_pattern:o,params:s.params,context:g},...X!==void 0?[X]:[]),P=(async()=>{try{return{type:"data",result:await(f?f(U=>B(U)):B())}}catch(X){return{type:"error",result:X}}})();return Promise.race([P,_])};try{let S=v?s.route.action:s.route.loader;if(p||c)if(S){let I,[_]=await Promise.all([b(S).catch(B=>{I=B}),p,c]);if(I!==void 0)throw I;x=_}else{await p;let I=v?s.route.action:s.route.loader;if(I)[x]=await Promise.all([b(I),c]);else if(k==="action"){let _=new URL(i.url),B=_.pathname+_.search;throw Xt(405,{method:i.method,pathname:B,routeId:s.route.id})}else return{type:"data",result:void 0}}else if(S)x=await b(S);else{let I=new URL(i.url),_=I.pathname+I.search;throw Xt(404,{pathname:_})}}catch(S){return{type:"error",result:S}}finally{m&&i.signal.removeEventListener("abort",m)}return x}async function pg(i){let o=i.headers.get("Content-Type");return o&&/\bapplication\/json\b/.test(o)?i.body==null?null:i.json():i.text()}async function fg(i){var p,c,f,g,x;let{result:o,type:s}=i;if(Js(o)){let m;try{m=await pg(o)}catch(v){return{type:"error",error:v}}return s==="error"?{type:"error",error:new ga(o.status,o.statusText,m),statusCode:o.status,headers:o.headers}:{type:"data",data:m,statusCode:o.status,headers:o.headers}}return s==="error"?sp(o)?o.data instanceof Error?{type:"error",error:o.data,statusCode:(p=o.init)==null?void 0:p.status,headers:(c=o.init)!=null&&c.headers?new Headers(o.init.headers):void 0}:{type:"error",error:xg(o),statusCode:ua(o)?o.status:void 0,headers:(f=o.init)!=null&&f.headers?new Headers(o.init.headers):void 0}:{type:"error",error:o,statusCode:ua(o)?o.status:void 0}:sp(o)?{type:"data",data:o.data,statusCode:(g=o.init)==null?void 0:g.status,headers:(x=o.init)!=null&&x.headers?new Headers(o.init.headers):void 0}:{type:"data",data:o}}function hg(i,o,s,p,c){let f=i.headers.get("Location");if(Fe(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!Zs(f)){let g=p.slice(0,p.findIndex(x=>x.route.id===s)+1);f=Ws(new URL(o.url),g,c,f),i.headers.set("Location",f)}return i}function rp(i,o,s,p){let c=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Zs(i)){let f=i,g=f.startsWith("//")?new URL(o.protocol+f):new URL(f);if(c.includes(g.protocol))throw new Error("Invalid redirect location");let x=Jt(g.pathname,s)!=null;if(g.origin===o.origin&&x)return g.pathname+g.search+g.hash}try{let f=p.createURL(i);if(c.includes(f.protocol))throw new Error("Invalid redirect location")}catch{}return i}function ci(i,o,s,p){let c=i.createURL(Gp(o)).toString(),f={signal:s};if(p&&yt(p.formMethod)){let{formMethod:g,formEncType:x}=p;f.method=g.toUpperCase(),x==="application/json"?(f.headers=new Headers({"Content-Type":x}),f.body=JSON.stringify(p.json)):x==="text/plain"?f.body=p.text:x==="application/x-www-form-urlencoded"&&p.formData?f.body=Us(p.formData):f.body=p.formData}return new Request(c,f)}function Us(i){let o=new URLSearchParams;for(let[s,p]of i.entries())o.append(s,typeof p=="string"?p:p.name);return o}function ip(i){let o=new FormData;for(let[s,p]of i.entries())o.append(s,p);return o}function gg(i,o,s,p=!1,c=!1){let f={},g=null,x,m=!1,v={},k=s&&Wt(s[1])?s[1].error:void 0;return i.forEach(b=>{if(!(b.route.id in o))return;let S=b.route.id,I=o[S];if(Fe(!Tr(I),"Cannot handle redirect results in processLoaderData"),Wt(I)){let _=I.error;if(k!==void 0&&(_=k,k=void 0),g=g||{},c)g[S]=_;else{let B=lr(i,S);g[B.route.id]==null&&(g[B.route.id]=_)}p||(f[S]=Op),m||(m=!0,x=ua(I.error)?I.error.status:500),I.headers&&(v[S]=I.headers)}else f[S]=I.data,I.statusCode&&I.statusCode!==200&&!m&&(x=I.statusCode),I.headers&&(v[S]=I.headers)}),k!==void 0&&s&&(g={[s[0]]:k},s[2]&&(f[s[2]]=void 0)),{loaderData:f,errors:g,statusCode:x||200,loaderHeaders:v}}function ap(i,o,s,p,c,f){let{loaderData:g,errors:x}=gg(o,s,p);return c.filter(m=>!m.matches||m.matches.some(v=>v.shouldLoad)).forEach(m=>{let{key:v,match:k,controller:b}=m;if(b&&b.signal.aborted)return;let S=f[v];if(Fe(S,"Did not find corresponding fetcher result"),Wt(S)){let I=lr(i.matches,k==null?void 0:k.route.id);x&&x[I.route.id]||(x={...x,[I.route.id]:S.error}),i.fetchers.delete(v)}else if(Tr(S))Fe(!1,"Unhandled fetcher revalidation redirect");else{let I=Tn(S.data);i.fetchers.set(v,I)}}),{loaderData:g,errors:x}}function op(i,o,s,p){let c=Object.entries(o).filter(([,f])=>f!==Op).reduce((f,[g,x])=>(f[g]=x,f),{});for(let f of s){let g=f.route.id;if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&f.route.loader&&(c[g]=i[g]),p&&p.hasOwnProperty(g))break}return c}function lp(i){return i?Wt(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function lr(i,o){return(o?i.slice(0,i.findIndex(p=>p.route.id===o)+1):[...i]).reverse().find(p=>p.route.hasErrorBoundary===!0)||i[0]}function Io(i){let o=i.length===1?i[0]:i.find(s=>s.index||!s.path||s.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:o}],route:o}}function Xt(i,{pathname:o,routeId:s,method:p,type:c,message:f}={}){let g="Unknown Server Error",x="Unknown @remix-run/router error";return i===400?(g="Bad Request",p&&o&&s?x=`You made a ${p} request to "${o}" but did not provide a \`loader\` for route "${s}", so there is no way to handle the request.`:c==="invalid-body"&&(x="Unable to encode submission body")):i===403?(g="Forbidden",x=`Route "${s}" does not match URL "${o}"`):i===404?(g="Not Found",x=`No route matches URL "${o}"`):i===405&&(g="Method Not Allowed",p&&o&&s?x=`You made a ${p.toUpperCase()} request to "${o}" but did not provide an \`action\` for route "${s}", so there is no way to handle the request.`:p&&(x=`Invalid request method "${p.toUpperCase()}"`)),new ga(i||500,g,new Error(x),!0)}function Lo(i){let o=Object.entries(i);for(let s=o.length-1;s>=0;s--){let[p,c]=o[s];if(Tr(c))return{key:p,result:c}}}function Gp(i){let o=typeof i=="string"?cr(i):i;return vn({...o,hash:""})}function mg(i,o){return i.pathname!==o.pathname||i.search!==o.search?!1:i.hash===""?o.hash!=="":i.hash===o.hash?!0:o.hash!==""}function xg(i){var o,s;return new ga(((o=i.init)==null?void 0:o.status)??500,((s=i.init)==null?void 0:s.statusText)??"Internal Server Error",i.data)}function vg(i){return i!=null&&typeof i=="object"&&Object.entries(i).every(([o,s])=>typeof o=="string"&&yg(s))}function yg(i){return i!=null&&typeof i=="object"&&"type"in i&&"result"in i&&(i.type==="data"||i.type==="error")}function bg(i){return Js(i.result)&&Hp.has(i.result.status)}function Wt(i){return i.type==="error"}function Tr(i){return(i&&i.type)==="redirect"}function sp(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function Js(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function wg(i){return Hp.has(i)}function kg(i){return Js(i)&&wg(i.status)&&i.headers.has("Location")}function Cg(i){return Jh.has(i.toUpperCase())}function yt(i){return Qh.has(i.toUpperCase())}function ed(i){return new URLSearchParams(i).getAll("index").some(o=>o==="")}function Bo(i,o){let s=typeof o=="string"?cr(o).search:o.search;if(i[i.length-1].route.index&&ed(s||""))return i[i.length-1];let p=Mp(i);return p[p.length-1]}function dp(i){let{formMethod:o,formAction:s,formEncType:p,text:c,formData:f,json:g}=i;if(!(!o||!s||!p)){if(c!=null)return{formMethod:o,formAction:s,formEncType:p,formData:void 0,json:void 0,text:c};if(f!=null)return{formMethod:o,formAction:s,formEncType:p,formData:f,json:void 0,text:void 0};if(g!==void 0)return{formMethod:o,formAction:s,formEncType:p,formData:void 0,json:g,text:void 0}}}function Ms(i,o){return o?{state:"loading",location:i,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function jg(i,o){return{state:"submitting",location:i,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}}function ra(i,o){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:o}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:o}}function Eg(i,o){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:o?o.data:void 0}}function Tn(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function Sg(i,o){try{let s=i.sessionStorage.getItem(_p);if(s){let p=JSON.parse(s);for(let[c,f]of Object.entries(p||{}))f&&Array.isArray(f)&&o.set(c,new Set(f||[]))}}catch{}}function Ag(i,o){if(o.size>0){let s={};for(let[p,c]of o)s[p]=[...c];try{i.sessionStorage.setItem(_p,JSON.stringify(s))}catch(p){it(!1,`Failed to save applied view transitions in sessionStorage (${p}).`)}}}function cp(){let i,o,s=new Promise((p,c)=>{i=async f=>{p(f);try{await s}catch{}},o=async f=>{c(f);try{await s}catch{}}});return{promise:s,resolve:i,reject:o}}var Nr=z.createContext(null);Nr.displayName="DataRouter";var xa=z.createContext(null);xa.displayName="DataRouterState";var qp=z.createContext(!1);function Fg(){return z.useContext(qp)}var td=z.createContext({isTransitioning:!1});td.displayName="ViewTransition";var Zp=z.createContext(new Map);Zp.displayName="Fetchers";var zg=z.createContext(null);zg.displayName="Await";var en=z.createContext(null);en.displayName="Navigation";var $o=z.createContext(null);$o.displayName="Location";var yn=z.createContext({outlet:null,matches:[],isDataRoute:!1});yn.displayName="Route";var nd=z.createContext(null);nd.displayName="RouteError";var Kp="REACT_ROUTER_ERROR",Ig="REDIRECT",Lg="ROUTE_ERROR_RESPONSE";function Tg(i){if(i.startsWith(`${Kp}:${Ig}:{`))try{let o=JSON.parse(i.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Ng(i){if(i.startsWith(`${Kp}:${Lg}:{`))try{let o=JSON.parse(i.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new ga(o.status,o.statusText,o.data)}catch{}}function Mg(i,{relative:o}={}){Fe(va(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:p}=z.useContext(en),{hash:c,pathname:f,search:g}=ya(i,{relative:o}),x=f;return s!=="/"&&(x=f==="/"?s:xn([s,f])),p.createHref({pathname:x,search:g,hash:c})}function va(){return z.useContext($o)!=null}function Mr(){return Fe(va(),"useLocation() may be used only in the context of a <Router> component."),z.useContext($o).location}var Qp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xp(i){z.useContext(en).static||z.useLayoutEffect(i)}function Nn(){let{isDataRoute:i}=z.useContext(yn);return i?Zg():Rg()}function Rg(){Fe(va(),"useNavigate() may be used only in the context of a <Router> component.");let i=z.useContext(Nr),{basename:o,navigator:s}=z.useContext(en),{matches:p}=z.useContext(yn),{pathname:c}=Mr(),f=JSON.stringify(Ks(p)),g=z.useRef(!1);return Xp(()=>{g.current=!0}),z.useCallback((m,v={})=>{if(it(g.current,Qp),!g.current)return;if(typeof m=="number"){s.go(m);return}let k=Qs(m,JSON.parse(f),c,v.relative==="path");i==null&&o!=="/"&&(k.pathname=k.pathname==="/"?o:xn([o,k.pathname])),(v.replace?s.replace:s.push)(k,v.state,v)},[o,s,f,c,i])}var Bg=z.createContext(null);function Dg(i){let o=z.useContext(yn).outlet;return z.useMemo(()=>o&&z.createElement(Bg.Provider,{value:i},o),[o,i])}function ya(i,{relative:o}={}){let{matches:s}=z.useContext(yn),{pathname:p}=Mr(),c=JSON.stringify(Ks(s));return z.useMemo(()=>Qs(i,JSON.parse(c),p,o==="path"),[i,c,p,o])}function Pg(i,o,s,p,c){Fe(va(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=z.useContext(en),{matches:g}=z.useContext(yn),x=g[g.length-1],m=x?x.params:{},v=x?x.pathname:"/",k=x?x.pathnameBase:"/",b=x&&x.route;{let U=b&&b.path||"";ef(v,!b||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let S=Mr(),I;I=S;let _=I.pathname||"/",B=_;if(k!=="/"){let U=k.replace(/^\//,"").split("/");B="/"+_.replace(/^\//,"").split("/").slice(U.length).join("/")}let P=or(i,{pathname:B});return it(b||P!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),it(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),$g(P&&P.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:xn([k,f.encodeLocation?f.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?k:xn([k,f.encodeLocation?f.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),g,s,p,c)}function Hg(){let i=qg(),o=ua(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,p="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:p},f={padding:"2px 4px",backgroundColor:p},g=null;return console.error("Error handled by React Router default ErrorBoundary:",i),g=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:f},"ErrorBoundary")," or"," ",z.createElement("code",{style:f},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},o),s?z.createElement("pre",{style:c},s):null,g)}var _g=z.createElement(Hg,null),Jp=class extends z.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){this.props.onError?this.props.onError(i,o):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const s=Ng(i.digest);s&&(i=s)}let o=i!==void 0?z.createElement(yn.Provider,{value:this.props.routeContext},z.createElement(nd.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?z.createElement(Og,{error:i},o):o}};Jp.contextType=qp;var Rs=new WeakMap;function Og({children:i,error:o}){let{basename:s}=z.useContext(en);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let p=Tg(o.digest);if(p){let c=Rs.get(o);if(c)throw c;let f=Bp(p.location,s);if(Rp&&!Rs.get(o))if(f.isExternal||p.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:p.replace}));throw Rs.set(o,g),g}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return i}function Wg({routeContext:i,match:o,children:s}){let p=z.useContext(Nr);return p&&p.static&&p.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=o.route.id),z.createElement(yn.Provider,{value:i},s)}function $g(i,o=[],s=null,p=null,c=null){if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let f=i,g=s==null?void 0:s.errors;if(g!=null){let k=f.findIndex(b=>b.route.id&&(g==null?void 0:g[b.route.id])!==void 0);Fe(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),f=f.slice(0,Math.min(f.length,k+1))}let x=!1,m=-1;if(s)for(let k=0;k<f.length;k++){let b=f[k];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=k),b.route.id){let{loaderData:S,errors:I}=s,_=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!I||I[b.route.id]===void 0);if(b.route.lazy||_){x=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}let v=s&&p?(k,b)=>{var S,I;p(k,{location:s.location,params:((I=(S=s.matches)==null?void 0:S[0])==null?void 0:I.params)??{},unstable_pattern:ma(s.matches),errorInfo:b})}:void 0;return f.reduceRight((k,b,S)=>{let I,_=!1,B=null,P=null;s&&(I=g&&b.route.id?g[b.route.id]:void 0,B=b.route.errorElement||_g,x&&(m<0&&S===0?(ef("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,P=null):m===S&&(_=!0,P=b.route.hydrateFallbackElement||null)));let X=o.concat(f.slice(0,S+1)),U=()=>{let K;return I?K=B:_?K=P:b.route.Component?K=z.createElement(b.route.Component,null):b.route.element?K=b.route.element:K=k,z.createElement(Wg,{match:b,routeContext:{outlet:k,matches:X,isDataRoute:s!=null},children:K})};return s&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?z.createElement(Jp,{location:s.location,revalidation:s.revalidation,component:B,error:I,children:U(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:v}):U()},null)}function rd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vg(i){let o=z.useContext(Nr);return Fe(o,rd(i)),o}function Ug(i){let o=z.useContext(xa);return Fe(o,rd(i)),o}function Yg(i){let o=z.useContext(yn);return Fe(o,rd(i)),o}function id(i){let o=Yg(i),s=o.matches[o.matches.length-1];return Fe(s.route.id,`${i} can only be used on routes that contain a unique "id"`),s.route.id}function Gg(){return id("useRouteId")}function qg(){var p;let i=z.useContext(nd),o=Ug("useRouteError"),s=id("useRouteError");return i!==void 0?i:(p=o.errors)==null?void 0:p[s]}function Zg(){let{router:i}=Vg("useNavigate"),o=id("useNavigate"),s=z.useRef(!1);return Xp(()=>{s.current=!0}),z.useCallback(async(c,f={})=>{it(s.current,Qp),s.current&&(typeof c=="number"?await i.navigate(c):await i.navigate(c,{fromRouteId:o,...f}))},[i,o])}var up={};function ef(i,o,s){!o&&!up[i]&&(up[i]=!0,it(!1,s))}var pp={};function fp(i,o){!i&&!pp[o]&&(pp[o]=!0,console.warn(o))}var Kg="useOptimistic",hp=mh[Kg],Qg=()=>{};function Xg(i){return hp?hp(i):[i,Qg]}function Jg(i){let o={hasErrorBoundary:i.hasErrorBoundary||i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&(i.element&&it(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(o,{element:z.createElement(i.Component),Component:void 0})),i.HydrateFallback&&(i.hydrateFallbackElement&&it(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(o,{hydrateFallbackElement:z.createElement(i.HydrateFallback),HydrateFallback:void 0})),i.ErrorBoundary&&(i.errorElement&&it(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(o,{errorElement:z.createElement(i.ErrorBoundary),ErrorBoundary:void 0})),o}var e2=["HydrateFallback","hydrateFallbackElement"],t2=class{constructor(){this.status="pending",this.promise=new Promise((i,o)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",i(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",o(s))}})}};function n2({router:i,flushSync:o,onError:s,unstable_useTransitions:p}){p=Fg()||p;let[f,g]=z.useState(i.state),[x,m]=Xg(f),[v,k]=z.useState(),[b,S]=z.useState({isTransitioning:!1}),[I,_]=z.useState(),[B,P]=z.useState(),[X,U]=z.useState(),K=z.useRef(new Map),ye=z.useCallback((de,{deletedFetchers:xe,newErrors:Se,flushSync:Te,viewTransitionOpts:Pe})=>{Se&&s&&Object.values(Se).forEach(Re=>{var Ge;return s(Re,{location:de.location,params:((Ge=de.matches[0])==null?void 0:Ge.params)??{},unstable_pattern:ma(de.matches)})}),de.fetchers.forEach((Re,Ge)=>{Re.data!==void 0&&K.current.set(Ge,Re.data)}),xe.forEach(Re=>K.current.delete(Re)),fp(Te===!1||o!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ve=i.window!=null&&i.window.document!=null&&typeof i.window.document.startViewTransition=="function";if(fp(Pe==null||Ve,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Pe||!Ve){o&&Te?o(()=>g(de)):p===!1?g(de):z.startTransition(()=>{p===!0&&m(Re=>gp(Re,de)),g(de)});return}if(o&&Te){o(()=>{B&&(I==null||I.resolve(),B.skipTransition()),S({isTransitioning:!0,flushSync:!0,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation})});let Re=i.window.document.startViewTransition(()=>{o(()=>g(de))});Re.finished.finally(()=>{o(()=>{_(void 0),P(void 0),k(void 0),S({isTransitioning:!1})})}),o(()=>P(Re));return}B?(I==null||I.resolve(),B.skipTransition(),U({state:de,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation})):(k(de),S({isTransitioning:!0,flushSync:!1,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation}))},[i.window,o,B,I,p,m,s]);z.useLayoutEffect(()=>i.subscribe(ye),[i,ye]),z.useEffect(()=>{b.isTransitioning&&!b.flushSync&&_(new t2)},[b]),z.useEffect(()=>{if(I&&v&&i.window){let de=v,xe=I.promise,Se=i.window.document.startViewTransition(async()=>{p===!1?g(de):z.startTransition(()=>{p===!0&&m(Te=>gp(Te,de)),g(de)}),await xe});Se.finished.finally(()=>{_(void 0),P(void 0),k(void 0),S({isTransitioning:!1})}),P(Se)}},[v,I,i.window,p,m]),z.useEffect(()=>{I&&v&&x.location.key===v.location.key&&I.resolve()},[I,B,x.location,v]),z.useEffect(()=>{!b.isTransitioning&&X&&(k(X.state),S({isTransitioning:!0,flushSync:!1,currentLocation:X.currentLocation,nextLocation:X.nextLocation}),U(void 0))},[b.isTransitioning,X]);let me=z.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:de=>i.navigate(de),push:(de,xe,Se)=>i.navigate(de,{state:xe,preventScrollReset:Se==null?void 0:Se.preventScrollReset}),replace:(de,xe,Se)=>i.navigate(de,{replace:!0,state:xe,preventScrollReset:Se==null?void 0:Se.preventScrollReset})}),[i]),Ee=i.basename||"/",R=z.useMemo(()=>({router:i,navigator:me,static:!1,basename:Ee,onError:s}),[i,me,Ee,s]);return z.createElement(z.Fragment,null,z.createElement(Nr.Provider,{value:R},z.createElement(xa.Provider,{value:x},z.createElement(Zp.Provider,{value:K.current},z.createElement(td.Provider,{value:b},z.createElement(o2,{basename:Ee,location:x.location,navigationType:x.historyAction,navigator:me,unstable_useTransitions:p},z.createElement(r2,{routes:i.routes,future:i.future,state:x,onError:s})))))),null)}function gp(i,o){return{...i,navigation:o.navigation.state!=="idle"?o.navigation:i.navigation,revalidation:o.revalidation!=="idle"?o.revalidation:i.revalidation,actionData:o.navigation.state!=="submitting"?o.actionData:i.actionData,fetchers:o.fetchers}}var r2=z.memo(i2);function i2({routes:i,future:o,state:s,onError:p}){return Pg(i,void 0,s,p,o)}function a2(i){return Dg(i.context)}function o2({basename:i="/",children:o=null,location:s,navigationType:p="POP",navigator:c,static:f=!1,unstable_useTransitions:g}){Fe(!va(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=i.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:x,navigator:c,static:f,unstable_useTransitions:g,future:{}}),[x,c,f,g]);typeof s=="string"&&(s=cr(s));let{pathname:v="/",search:k="",hash:b="",state:S=null,key:I="default"}=s,_=z.useMemo(()=>{let B=Jt(v,x);return B==null?null:{location:{pathname:B,search:k,hash:b,state:S,key:I},navigationType:p}},[x,v,k,b,S,I,p]);return it(_!=null,`<Router basename="${x}"> is not able to match the URL "${v}${k}${b}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:z.createElement(en.Provider,{value:m},z.createElement($o.Provider,{children:o,value:_}))}var Do="get",Po="application/x-www-form-urlencoded";function Vo(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function l2(i){return Vo(i)&&i.tagName.toLowerCase()==="button"}function s2(i){return Vo(i)&&i.tagName.toLowerCase()==="form"}function d2(i){return Vo(i)&&i.tagName.toLowerCase()==="input"}function c2(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function u2(i,o){return i.button===0&&(!o||o==="_self")&&!c2(i)}var To=null;function p2(){if(To===null)try{new FormData(document.createElement("form"),0),To=!1}catch{To=!0}return To}var f2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bs(i){return i!=null&&!f2.has(i)?(it(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Po}"`),null):i}function h2(i,o){let s,p,c,f,g;if(s2(i)){let x=i.getAttribute("action");p=x?Jt(x,o):null,s=i.getAttribute("method")||Do,c=Bs(i.getAttribute("enctype"))||Po,f=new FormData(i)}else if(l2(i)||d2(i)&&(i.type==="submit"||i.type==="image")){let x=i.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=i.getAttribute("formaction")||x.getAttribute("action");if(p=m?Jt(m,o):null,s=i.getAttribute("formmethod")||x.getAttribute("method")||Do,c=Bs(i.getAttribute("formenctype"))||Bs(x.getAttribute("enctype"))||Po,f=new FormData(x,i),!p2()){let{name:v,type:k,value:b}=i;if(k==="image"){let S=v?`${v}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else v&&f.append(v,b)}}else{if(Vo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Do,p=null,c=Po,g=i}return f&&c==="text/plain"&&(g=f,f=void 0),{action:p,method:s.toLowerCase(),encType:c,formData:f,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ad(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function g2(i,o,s,p){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${p}`:c.pathname=`${c.pathname}.${p}`:c.pathname==="/"?c.pathname=`_root.${p}`:o&&Jt(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${p}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${p}`,c}async function m2(i,o){if(i.id in o)return o[i.id];try{let s=await import(i.module);return o[i.id]=s,s}catch(s){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function x2(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function v2(i,o,s){let p=await Promise.all(i.map(async c=>{let f=o.routes[c.route.id];if(f){let g=await m2(f,s);return g.links?g.links():[]}return[]}));return k2(p.flat(1).filter(x2).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function mp(i,o,s,p,c,f){let g=(m,v)=>s[v]?m.route.id!==s[v].route.id:!0,x=(m,v)=>{var k;return s[v].pathname!==m.pathname||((k=s[v].route.path)==null?void 0:k.endsWith("*"))&&s[v].params["*"]!==m.params["*"]};return f==="assets"?o.filter((m,v)=>g(m,v)||x(m,v)):f==="data"?o.filter((m,v)=>{var b;let k=p.routes[m.route.id];if(!k||!k.hasLoader)return!1;if(g(m,v)||x(m,v))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((b=s[0])==null?void 0:b.params)||{},nextUrl:new URL(i,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function y2(i,o,{includeHydrateFallback:s}={}){return b2(i.map(p=>{let c=o.routes[p.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function b2(i){return[...new Set(i)]}function w2(i){let o={},s=Object.keys(i).sort();for(let p of s)o[p]=i[p];return o}function k2(i,o){let s=new Set;return new Set(o),i.reduce((p,c)=>{let f=JSON.stringify(w2(c));return s.has(f)||(s.add(f),p.push({key:f,link:c})),p},[])}function tf(){let i=z.useContext(Nr);return ad(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function C2(){let i=z.useContext(xa);return ad(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var od=z.createContext(void 0);od.displayName="FrameworkContext";function nf(){let i=z.useContext(od);return ad(i,"You must render this element inside a <HydratedRouter> element"),i}function j2(i,o){let s=z.useContext(od),[p,c]=z.useState(!1),[f,g]=z.useState(!1),{onFocus:x,onBlur:m,onMouseEnter:v,onMouseLeave:k,onTouchStart:b}=o,S=z.useRef(null);z.useEffect(()=>{if(i==="render"&&g(!0),i==="viewport"){let B=X=>{X.forEach(U=>{g(U.isIntersecting)})},P=new IntersectionObserver(B,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[i]),z.useEffect(()=>{if(p){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[p]);let I=()=>{c(!0)},_=()=>{c(!1),g(!1)};return s?i!=="intent"?[f,S,{}]:[f,S,{onFocus:ia(x,I),onBlur:ia(m,_),onMouseEnter:ia(v,I),onMouseLeave:ia(k,_),onTouchStart:ia(b,I)}]:[!1,S,{}]}function ia(i,o){return s=>{i&&i(s),s.defaultPrevented||o(s)}}function E2({page:i,...o}){let{router:s}=tf(),p=z.useMemo(()=>or(s.routes,i,s.basename),[s.routes,i,s.basename]);return p?z.createElement(A2,{page:i,matches:p,...o}):null}function S2(i){let{manifest:o,routeModules:s}=nf(),[p,c]=z.useState([]);return z.useEffect(()=>{let f=!1;return v2(i,o,s).then(g=>{f||c(g)}),()=>{f=!0}},[i,o,s]),p}function A2({page:i,matches:o,...s}){let p=Mr(),{future:c,manifest:f,routeModules:g}=nf(),{basename:x}=tf(),{loaderData:m,matches:v}=C2(),k=z.useMemo(()=>mp(i,o,v,f,p,"data"),[i,o,v,f,p]),b=z.useMemo(()=>mp(i,o,v,f,p,"assets"),[i,o,v,f,p]),S=z.useMemo(()=>{if(i===p.pathname+p.search+p.hash)return[];let B=new Set,P=!1;if(o.forEach(U=>{var ye;let K=f.routes[U.route.id];!K||!K.hasLoader||(!k.some(me=>me.route.id===U.route.id)&&U.route.id in m&&((ye=g[U.route.id])!=null&&ye.shouldRevalidate)||K.hasClientLoader?P=!0:B.add(U.route.id))}),B.size===0)return[];let X=g2(i,x,c.unstable_trailingSlashAwareDataRequests,"data");return P&&B.size>0&&X.searchParams.set("_routes",o.filter(U=>B.has(U.route.id)).map(U=>U.route.id).join(",")),[X.pathname+X.search]},[x,c.unstable_trailingSlashAwareDataRequests,m,p,f,k,o,i,g]),I=z.useMemo(()=>y2(b,f),[b,f]),_=S2(b);return z.createElement(z.Fragment,null,S.map(B=>z.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...s})),I.map(B=>z.createElement("link",{key:B,rel:"modulepreload",href:B,...s})),_.map(({key:B,link:P})=>z.createElement("link",{key:B,nonce:s.nonce,...P,crossOrigin:P.crossOrigin??s.crossOrigin})))}function F2(...i){return o=>{i.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var z2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{z2&&(window.__reactRouterVersion="7.13.0")}catch{}function I2(i,o){return rg({basename:o==null?void 0:o.basename,getContext:o==null?void 0:o.getContext,future:o==null?void 0:o.future,history:yh({window:o==null?void 0:o.window}),hydrationData:L2(),routes:i,mapRouteProperties:Jg,hydrationRouteProperties:e2,dataStrategy:o==null?void 0:o.dataStrategy,patchRoutesOnNavigation:o==null?void 0:o.patchRoutesOnNavigation,window:o==null?void 0:o.window,unstable_instrumentations:o==null?void 0:o.unstable_instrumentations}).initialize()}function L2(){let i=window==null?void 0:window.__staticRouterHydrationData;return i&&i.errors&&(i={...i,errors:T2(i.errors)}),i}function T2(i){if(!i)return null;let o=Object.entries(i),s={};for(let[p,c]of o)if(c&&c.__type==="RouteErrorResponse")s[p]=new ga(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let f=window[c.__subType];if(typeof f=="function")try{let g=new f(c.message);g.stack="",s[p]=g}catch{}}if(s[p]==null){let f=new Error(c.message);f.stack="",s[p]=f}}else s[p]=c;return s}var rf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,af=z.forwardRef(function({onClick:o,discover:s="render",prefetch:p="none",relative:c,reloadDocument:f,replace:g,state:x,target:m,to:v,preventScrollReset:k,viewTransition:b,unstable_defaultShouldRevalidate:S,...I},_){let{basename:B,unstable_useTransitions:P}=z.useContext(en),X=typeof v=="string"&&rf.test(v),U=Bp(v,B);v=U.to;let K=Mg(v,{relative:c}),[ye,me,Ee]=j2(p,I),R=B2(v,{replace:g,state:x,target:m,preventScrollReset:k,relative:c,viewTransition:b,unstable_defaultShouldRevalidate:S,unstable_useTransitions:P});function de(Se){o&&o(Se),Se.defaultPrevented||R(Se)}let xe=z.createElement("a",{...I,...Ee,href:U.absoluteURL||K,onClick:U.isExternal||f?o:de,ref:F2(_,me),target:m,"data-discover":!X&&s==="render"?"true":void 0});return ye&&!X?z.createElement(z.Fragment,null,xe,z.createElement(E2,{page:K})):xe});af.displayName="Link";var N2=z.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:p="",end:c=!1,style:f,to:g,viewTransition:x,children:m,...v},k){let b=ya(g,{relative:v.relative}),S=Mr(),I=z.useContext(xa),{navigator:_,basename:B}=z.useContext(en),P=I!=null&&O2(b)&&x===!0,X=_.encodeLocation?_.encodeLocation(b).pathname:b.pathname,U=S.pathname,K=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;s||(U=U.toLowerCase(),K=K?K.toLowerCase():null,X=X.toLowerCase()),K&&B&&(K=Jt(K,B)||K);const ye=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let me=U===X||!c&&U.startsWith(X)&&U.charAt(ye)==="/",Ee=K!=null&&(K===X||!c&&K.startsWith(X)&&K.charAt(X.length)==="/"),R={isActive:me,isPending:Ee,isTransitioning:P},de=me?o:void 0,xe;typeof p=="function"?xe=p(R):xe=[p,me?"active":null,Ee?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let Se=typeof f=="function"?f(R):f;return z.createElement(af,{...v,"aria-current":de,className:xe,ref:k,style:Se,to:g,viewTransition:x},typeof m=="function"?m(R):m)});N2.displayName="NavLink";var M2=z.forwardRef(({discover:i="render",fetcherKey:o,navigate:s,reloadDocument:p,replace:c,state:f,method:g=Do,action:x,onSubmit:m,relative:v,preventScrollReset:k,viewTransition:b,unstable_defaultShouldRevalidate:S,...I},_)=>{let{unstable_useTransitions:B}=z.useContext(en),P=H2(),X=_2(x,{relative:v}),U=g.toLowerCase()==="get"?"get":"post",K=typeof x=="string"&&rf.test(x),ye=me=>{if(m&&m(me),me.defaultPrevented)return;me.preventDefault();let Ee=me.nativeEvent.submitter,R=(Ee==null?void 0:Ee.getAttribute("formmethod"))||g,de=()=>P(Ee||me.currentTarget,{fetcherKey:o,method:R,navigate:s,replace:c,state:f,relative:v,preventScrollReset:k,viewTransition:b,unstable_defaultShouldRevalidate:S});B&&s!==!1?z.startTransition(()=>de()):de()};return z.createElement("form",{ref:_,method:U,action:X,onSubmit:p?m:ye,...I,"data-discover":!K&&i==="render"?"true":void 0})});M2.displayName="Form";function R2(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function of(i){let o=z.useContext(Nr);return Fe(o,R2(i)),o}function B2(i,{target:o,replace:s,state:p,preventScrollReset:c,relative:f,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:m}={}){let v=Nn(),k=Mr(),b=ya(i,{relative:f});return z.useCallback(S=>{if(u2(S,o)){S.preventDefault();let I=s!==void 0?s:vn(k)===vn(b),_=()=>v(i,{replace:I,state:p,preventScrollReset:c,relative:f,viewTransition:g,unstable_defaultShouldRevalidate:x});m?z.startTransition(()=>_()):_()}},[k,v,b,s,p,o,i,c,f,g,x,m])}var D2=0,P2=()=>`__${String(++D2)}__`;function H2(){let{router:i}=of("useSubmit"),{basename:o}=z.useContext(en),s=Gg(),p=i.fetch,c=i.navigate;return z.useCallback(async(f,g={})=>{let{action:x,method:m,encType:v,formData:k,body:b}=h2(f,o);if(g.navigate===!1){let S=g.fetcherKey||P2();await p(S,s,g.action||x,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:k,body:b,formMethod:g.method||m,formEncType:g.encType||v,flushSync:g.flushSync})}else await c(g.action||x,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:k,body:b,formMethod:g.method||m,formEncType:g.encType||v,replace:g.replace,state:g.state,fromRouteId:s,flushSync:g.flushSync,viewTransition:g.viewTransition})},[p,c,o,s])}function _2(i,{relative:o}={}){let{basename:s}=z.useContext(en),p=z.useContext(yn);Fe(p,"useFormAction must be used inside a RouteContext");let[c]=p.matches.slice(-1),f={...ya(i||".",{relative:o})},g=Mr();if(i==null){f.search=g.search;let x=new URLSearchParams(f.search),m=x.getAll("index");if(m.some(k=>k==="")){x.delete("index"),m.filter(b=>b).forEach(b=>x.append("index",b));let k=x.toString();f.search=k?`?${k}`:""}}return(!i||i===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:xn([s,f.pathname])),vn(f)}function O2(i,{relative:o}={}){let s=z.useContext(td);Fe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:p}=of("useViewTransitionState"),c=ya(i,{relative:o});if(!s.isTransitioning)return!1;let f=Jt(s.currentLocation.pathname,p)||s.currentLocation.pathname,g=Jt(s.nextLocation.pathname,p)||s.nextLocation.pathname;return _o(c.pathname,g)!=null||_o(c.pathname,f)!=null}const u={yellow:"#FFE600",white:"#FFFFFF",offWhite:"#F6F6FA",gray02:"#C4C4CD",gray01:"#747480",offBlack:"#2E2E38",confidentBlack:"#1A1A24",frameOrange:"#FF7D1E",frameRed:"#FF3C00",frameMagenta:"#FF32FF",framePurple:"#B400FF",frameLime:"#B4FF00",frameGreen:"#00C864",frameTeal:"#32FFFF",frameBlue:"#4696FF",eyebrowGold:"#B89B00",success:"#00C864",destructive:"#FF4136",info:"#4696FF",accentOrange:"#FF7D1E",eyBgCard:"#2E2E38",onDark:"#FFFFFF",onDarkMuted:"rgba(255, 255, 255, 0.72)",onDarkSubtle:"rgba(255, 255, 255, 0.55)",surfaceOnDark:"rgba(255, 255, 255, 0.06)",borderOnDark:"rgba(255, 255, 255, 0.12)",yellowAlpha10:"rgba(255, 230, 0, 0.10)",yellowAlpha12:"rgba(255, 230, 0, 0.12)"},W2=[[u.yellow,u.frameOrange,u.frameMagenta],[u.yellow,u.frameMagenta,u.frameRed],[u.yellow,u.frameMagenta,u.frameTeal],[u.yellow,u.framePurple,u.frameBlue],[u.yellow,u.frameLime,u.frameTeal],[u.yellow,u.frameGreen,u.frameBlue],[u.yellow,u.frameOrange,u.frameTeal]];function $2(i,o="90deg"){const[s,p,c]=W2[Math.max(0,Math.min(i-1,6))];return`linear-gradient(${o}, ${s}, ${p}, ${c})`}const C={bold:"'EYInterstate:Bold', Arial, 'Helvetica Neue', sans-serif",regular:"'EYInterstate:Regular', Arial, 'Helvetica Neue', sans-serif",light:"'EYInterstate:Light', Arial, 'Helvetica Neue', sans-serif"},Uo={contentWidth:"80%"},Rt={width:Uo.contentWidth,maxWidth:"100%",marginLeft:"auto",marginRight:"auto"},Oo=`calc((100% - ${Uo.contentWidth}) / 2)`,Mt={sectionPaddingY:"72px",cardPadding:"18px"};function No({height:i,letterColor:o}){return r.jsxs("svg",{viewBox:"0 -18 217.599 217.599",style:{height:i,width:"auto",display:"block",flexShrink:0},xmlns:"http://www.w3.org/2000/svg","aria-label":"EY logo",children:[r.jsx("path",{fill:u.yellow,d:"M0 79.4L217.599 0v41z"}),r.jsx("path",{fill:o,d:"M24.9 150.6h28.5v-16.5H24.9v-13h31.5L46 103H1.4v78.6h62.8v-18.1H24.9zM106.1 103l-13.3 25.7L79.4 103h-26l27.4 47.6v31h23.5v-31l27.5-47.6z"})]})}function Ds({fontSize:i,color:o}){return r.jsxs("span",{style:{fontFamily:"'EYInterstate:Bold', Arial, sans-serif",fontWeight:700,fontSize:i,lineHeight:1.2,color:o,whiteSpace:"nowrap"},children:["Shape the future",r.jsx("br",{}),"with confidence"]})}function lf({variant:i="stacked",theme:o="dark",className:s,onClick:p}){const c=o==="dark"?u.white:u.offBlack,f=o==="dark"?u.white:u.offBlack,g={display:"inline-flex",alignItems:"flex-start",cursor:p?"pointer":"default",userSelect:"none"};return i==="mark-only"?r.jsx("div",{style:g,className:s,onClick:p,"aria-label":"EY",children:r.jsx(No,{height:44,letterColor:c})}):i==="stacked"?r.jsxs("div",{style:{...g,flexDirection:"column",gap:12,alignItems:"flex-start"},className:s,onClick:p,"aria-label":"EY — Shape the future with confidence",children:[r.jsx(No,{height:100,letterColor:c}),r.jsx(Ds,{fontSize:18,color:f})]}):i==="horizontal-sm"?r.jsxs("div",{style:{...g,flexDirection:"row",gap:14,alignItems:"center"},className:s,onClick:p,"aria-label":"EY — Shape the future with confidence",children:[r.jsx(No,{height:40,letterColor:c}),r.jsx(Ds,{fontSize:12,color:f})]}):r.jsxs("div",{style:{...g,flexDirection:"row",gap:18,alignItems:"center"},className:s,onClick:p,"aria-label":"EY — Shape the future with confidence",children:[r.jsx(No,{height:56,letterColor:c}),r.jsx(Ds,{fontSize:15,color:f})]})}const V2="Phase 1: Foundational Training Workshops",U2="/phase1",Ps=1,Y2=4,sf="EY.ai Tax Labs",ld=[{id:"foundational",title:"Foundational Concepts of AI",path:"/foundational",order:1,estimatedTime:"~45 min",supportsInPageNav:!0,subModules:[{id:"act-now",label:"Act Now",group:"learn"},{id:"rise-of-ai",label:"Understanding AI",group:"learn"},{id:"evolution",label:"Evolution",group:"learn"},{id:"terminology",label:"Key Terms",group:"learn"},{id:"cheatsheet",label:"Cheat Sheet",group:"apply"},{id:"genai-vs-agents",label:"GenAI vs Agents",group:"learn"},{id:"quiz",label:"Quiz",group:"apply"}]},{id:"ai-tax-prompting",title:"AI Tax Prompting",path:"/ai-tax-prompting",order:2,estimatedTime:"~30 min",supportsInPageNav:!0,subModules:[{id:"pipeline",label:"Prompt Basics",group:"learn"},{id:"team-briefing",label:"Team Briefing",group:"learn"},{id:"elements",label:"7 Elements",group:"learn"},{id:"lazy-vs-pro",label:"Weak vs Strong",group:"learn"},{id:"stack-builder",label:"Stack Builder",group:"learn"},{id:"advanced",label:"Techniques",group:"learn"},{id:"match-activity",label:"Activity",group:"apply"},{id:"dos-donts",label:"Do's & Don'ts",group:"apply"},{id:"recap",label:"Cheat Sheet",group:"apply"}]},{id:"copilot-hub",title:"M365 Copilot Dashboard",path:"/copilot-hub",order:3,estimatedTime:"~60 min",supportsInPageNav:!0,subModules:[{id:"prompt-repository",label:"M365 Apps",group:"learn"},{id:"useful-links",label:"Useful Links",group:"apply"},{id:"security",label:"Security & Governance",group:"apply"}]}];function df(i){const o=ld.find(s=>s.id===i);if(!o)throw new Error(`Unknown module id: ${i}`);return o}const G2=ld.length;function q2(i){const{subModules:o}=df(i);return{learn:o.filter(s=>s.group==="learn"),apply:o.filter(s=>s.group==="apply")}}const Z2=`2px solid ${u.yellow}`;function sd(i){i.currentTarget.style.outline=Z2,i.currentTarget.style.outlineOffset="2px"}function dd(i){i.currentTarget.style.outline="none"}function fi({variant:i="hub",activeSection:o="tax-labs",onNavigate:s,rightSlot:p,skipLinkTarget:c}){return r.jsxs("header",{children:[c&&r.jsx("a",{href:c,style:{position:"absolute",left:-9999,top:"auto",width:1,height:1,overflow:"hidden",zIndex:1e4,background:u.yellow,color:u.confidentBlack,padding:"10px 16px",fontFamily:C.bold,fontSize:13},onFocus:f=>{Object.assign(f.currentTarget.style,{left:16,top:8,width:"auto",height:"auto"})},onBlur:f=>{Object.assign(f.currentTarget.style,{left:-9999,width:1,height:1})},children:"Skip to content"}),i==="learning"?r.jsx(K2,{onNavigate:s}):r.jsx(Q2,{onNavigate:s,activeSection:o,rightSlot:p})]})}function K2({onNavigate:i}){return r.jsxs("div",{className:"flex items-center justify-between gap-3 w-full px-4 sm:px-6 md:px-10 py-3 md:py-4",style:{background:u.confidentBlack,borderBottom:"1px solid #2E2E38"},children:[r.jsxs("button",{onClick:()=>i("/phased"),className:"flex items-center gap-3 md:gap-4 min-w-0",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4},"aria-label":`${sf} — back to Tax Labs overview`,onFocus:sd,onBlur:dd,children:[r.jsx("div",{style:{background:u.offBlack,width:40,height:40,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{transform:"scale(0.68)",transformOrigin:"center"},children:r.jsx(lf,{variant:"mark-only",theme:"dark"})})}),r.jsxs("div",{className:"flex flex-col gap-0.5 items-start min-w-0",children:[r.jsxs("span",{className:"text-[16px] md:text-[20px] truncate",style:{color:"#FFFFFF",fontFamily:C.bold,lineHeight:1.2},children:["EY.ai ",r.jsx("span",{style:{fontFamily:C.regular},children:"Tax Labs"})]}),r.jsx("span",{className:"text-[9px] md:text-[10px]",style:{color:u.yellow,fontFamily:C.bold,letterSpacing:"0.04em",textTransform:"uppercase",whiteSpace:"nowrap"},children:"India Tax Hub"})]})]}),r.jsx("div",{className:"hidden sm:block shrink-0",children:r.jsx(X2,{})})]})}function Q2({onNavigate:i,activeSection:o,rightSlot:s}){return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{background:u.yellow,height:3,width:"100%"}}),r.jsxs("div",{style:{background:u.offBlack,height:64,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"},children:[r.jsxs("button",{onClick:()=>i("/"),style:{background:"none",border:"none",cursor:"pointer",padding:4,borderRadius:4,display:"flex",alignItems:"center",gap:12,minWidth:0},"aria-label":`${sf} — go to home`,onFocus:sd,onBlur:dd,children:[r.jsx(lf,{variant:"mark-only",theme:"dark"}),r.jsx("span",{style:{color:"#FFFFFF",fontFamily:C.regular,fontSize:13,borderLeft:"1px solid rgba(255,255,255,0.3)",paddingLeft:12,whiteSpace:"nowrap"},children:"India AI Tax Hub"})]}),s]}),r.jsxs("nav",{"aria-label":"Site sections",style:{background:"#2E2E38",display:"flex",alignItems:"center",padding:"0 16px",overflowX:"auto"},children:[r.jsx(xp,{label:"About EY India AI Tax Hub",isActive:o==="home",onClick:()=>i("/")}),r.jsx(xp,{label:"EY.ai Tax Labs",isActive:o==="tax-labs",onClick:()=>i("/phased")})]})]})}function X2(){return r.jsx("span",{style:{color:u.yellow,fontFamily:C.bold,fontSize:12,textTransform:"uppercase",letterSpacing:"0.04em",whiteSpace:"nowrap"},children:"Platform Mode: Active Learning"})}function xp({label:i,isActive:o,onClick:s}){return r.jsx("button",{onClick:o?void 0:s,"aria-current":o?"page":void 0,style:{background:"none",border:"none",cursor:o?"default":"pointer",padding:"10px 14px",fontFamily:C.regular,fontSize:13,color:o?u.yellow:u.gray02,whiteSpace:"nowrap",transition:"color 0.15s"},onMouseEnter:p=>{o||(p.currentTarget.style.color="#FFFFFF")},onMouseLeave:p=>{o||(p.currentTarget.style.color=u.gray02)},onFocus:sd,onBlur:dd,children:i})}const dr={p110f3b80:"M26.25 3.75V15C26.2497 15.629 26.4077 16.248 26.7094 16.8L37.0406 35.7C37.3531 36.2711 37.5115 36.9138 37.5003 37.5647C37.4891 38.2157 37.3086 38.8525 36.9765 39.4125C36.6445 39.9725 36.1724 40.4364 35.6066 40.7586C35.0409 41.0808 34.401 41.2502 33.75 41.25H11.25C10.599 41.2502 9.95909 41.0808 9.39336 40.7586C8.82762 40.4364 8.35551 39.9725 8.02348 39.4125C7.69145 38.8525 7.51093 38.2157 7.49969 37.5647C7.48845 36.9138 7.64687 36.2711 7.95937 35.7L18.2906 16.8C18.5923 16.248 18.7503 15.629 18.75 15V3.75",p17d3fb80:"M20.8125 41.25H11.25C10.2554 41.25 9.30161 40.8549 8.59835 40.1517C7.89509 39.4484 7.5 38.4946 7.5 37.5V7.5C7.5 6.50544 7.89509 5.55161 8.59835 4.84835C9.30161 4.14509 10.2554 3.75 11.25 3.75H26.25C26.8442 3.74854 27.4327 3.86477 27.9818 4.09197C28.5308 4.31917 29.0294 4.65285 29.4488 5.07375L36.1781 11.8013C36.5987 12.2208 36.932 12.7194 37.1589 13.2685C37.3858 13.8175 37.5017 14.406 37.5 15V21.0938",p1b4fc880:"M26.25 3.75V13.125C26.25 13.6223 26.4475 14.0992 26.7992 14.4508C27.1508 14.8025 27.6277 15 28.125 15H37.5",p26318a80:"M30 37.5C33.1066 37.5 35.625 34.9816 35.625 31.875C35.625 28.7684 33.1066 26.25 30 26.25C26.8934 26.25 24.375 28.7684 24.375 31.875C24.375 34.9816 26.8934 37.5 30 37.5Z",p2dd93a80:"M5.625 13.125L9.375 16.875L16.875 9.375",p3955b500:"M80.5276 0L19.8341 22.1511L80.5276 11.4305V0Z",p3eb8a400:"M5.625 31.875L9.375 35.625L16.875 28.125",pf788bc0:"M29.572 49.9334H40.673V43.4875H29.572V38.4211H41.8524L37.7779 31.3598H20.3641V62.0601H44.9238V54.9988H29.5711L29.572 49.9334ZM61.2704 31.3607L56.0551 41.3795L50.8528 31.3607H40.673L51.3993 49.9343V62.0611H60.5788V49.9343L71.3197 31.3607H61.2704ZM71.519 96.4482C71.519 96.664 71.5043 96.9368 71.4905 97.0379H67.3784C67.4501 97.9867 68.0976 98.3752 68.8306 98.3752C69.2623 98.3752 69.6646 98.2457 70.0099 97.9003L71.2177 98.9208C70.5849 99.7116 69.6214 99.9991 68.7589 99.9991C66.775 99.9991 65.6388 98.4753 65.6388 96.4767C65.6388 94.3054 66.9761 92.9249 68.6441 92.9249C70.4269 92.9249 71.5199 94.4918 71.5199 96.4473L71.519 96.4482ZM67.4069 95.7153H69.8225C69.7647 94.9529 69.276 94.4358 68.5862 94.4358C67.7669 94.4358 67.4501 95.155 67.4069 95.7153ZM91.85 96.4482C91.85 96.664 91.8353 96.9368 91.8215 97.0379H87.7094C87.781 97.9867 88.4286 98.3752 89.1616 98.3752C89.5932 98.3752 89.9956 98.2457 90.3409 97.9003L91.5487 98.9208C90.9159 99.7116 89.9524 99.9991 89.0899 99.9991C87.106 99.9991 85.9698 98.4753 85.9698 96.4767C85.9698 94.3054 87.3071 92.9249 88.9751 92.9249C90.7579 92.9249 91.8509 94.4918 91.8509 96.4473L91.85 96.4482ZM87.7379 95.7153H90.1535C90.0957 94.9529 89.607 94.4358 88.9172 94.4358C88.0979 94.4358 87.781 95.155 87.7379 95.7153ZM84.3155 97.4402L85.437 98.5038C84.8621 99.2367 84.0712 99.9991 82.7339 99.9991C80.8794 99.9991 79.5127 98.5185 79.5127 96.4767C79.5127 94.6076 80.6489 92.9249 82.7624 92.9249C83.9702 92.9249 84.8042 93.4714 85.4223 94.3917L84.2724 95.5564C83.8701 95.0246 83.4384 94.6076 82.7486 94.6076C81.8136 94.6076 81.3249 95.3984 81.3249 96.4482C81.3249 97.4255 81.7566 98.3026 82.7624 98.3026C83.3805 98.3026 83.8985 97.972 84.3155 97.4402ZM68.6717 86.1676H67.0037V85.6928C66.6298 86.1097 66.0264 86.3109 65.422 86.3109C63.6677 86.3109 63.0063 85.0452 63.0063 83.2193V79.38H64.7028V83.0751C64.7028 83.9954 64.8902 84.6852 65.839 84.6852C66.7878 84.6852 66.9752 83.966 66.9752 83.132V79.3791H68.6717V86.1658V86.1676ZM73.9631 84.1837L73.7188 85.9095C73.3735 86.1823 72.7415 86.3118 72.3245 86.3118C71.2894 86.3118 70.4839 85.5357 70.4839 84.2985V81.0057H69.5066V79.3809H70.4839V77.6128L72.1803 76.7504V79.3818H73.7905V81.0066H72.1803V83.8539C72.1803 84.4436 72.4246 84.6595 72.8416 84.6595C73.2586 84.6595 73.6903 84.4427 73.9631 84.1837ZM48.1965 86.1676H46.5V82.4725C46.5 81.5522 46.2988 80.8762 45.35 80.8762C44.4012 80.8762 44.1854 81.4944 44.1854 82.4294V86.1676H42.4889V77.6128L44.1854 76.7504V79.8558C44.5592 79.482 45.0194 79.2376 45.7817 79.2376C47.5792 79.2376 48.1974 80.6181 48.1974 82.343L48.1965 86.1676ZM78.4776 99.8558H76.7232V96.1607C76.7232 95.2119 76.5074 94.5791 75.5586 94.5791C74.6667 94.5791 74.3792 95.1109 74.3792 96.1175V99.8558H72.6249V93.0691H74.3792V93.5293C74.7383 93.1701 75.2711 92.9258 76.0325 92.9258C77.8732 92.9258 78.4766 94.3495 78.4766 96.0174V99.8567L78.4776 99.8558ZM56.5364 92.4804C57.0976 92.4804 57.5431 92.0349 57.5431 91.4737C57.5431 90.9125 57.0976 90.467 56.5364 90.467C55.9752 90.467 55.5298 90.9125 55.5298 91.4737C55.5298 92.0349 55.9752 92.4804 56.5364 92.4804ZM11.7044 92.4804C12.2656 92.4804 12.7111 92.0349 12.7111 91.4737C12.7111 90.9125 12.2656 90.467 11.7044 90.467C11.1432 90.467 10.6978 90.9125 10.6978 91.4737C10.6978 92.0349 11.1432 92.4804 11.7044 92.4804ZM91.85 82.76C91.85 82.9759 91.8353 83.2487 91.8215 83.3497H87.7094C87.781 84.2985 88.4286 84.687 89.1616 84.687C89.5932 84.687 89.9956 84.5575 90.3409 84.2122L91.5487 85.2326C90.9159 86.0234 89.9524 86.3109 89.0899 86.3109C87.106 86.3109 85.9698 84.7871 85.9698 82.7885C85.9698 80.6172 87.3071 79.2367 88.9751 79.2367C90.7579 79.2367 91.8509 80.8037 91.8509 82.7591L91.85 82.76ZM87.7379 82.0271H90.1535C90.0957 81.2647 89.607 80.7476 88.9172 80.7476C88.0979 80.7476 87.781 81.4668 87.7379 82.0271ZM80.4193 86.1676H78.7513V85.6928C78.3774 86.1097 77.774 86.3109 77.1696 86.3109C75.4153 86.3109 74.754 85.0452 74.754 83.2193V79.38H76.4504V83.0751C76.4504 83.9954 76.6378 84.6852 77.5866 84.6852C78.5354 84.6852 78.7228 83.966 78.7228 83.132V79.3791H80.4193V86.1658V86.1676ZM54.9401 82.76C54.9401 82.9759 54.9254 83.2487 54.9116 83.3497H50.7995C50.8711 84.2985 51.5187 84.687 52.2516 84.687C52.6833 84.687 53.0856 84.5575 53.431 84.2122L54.6388 85.2326C54.006 86.0234 53.0425 86.3109 52.18 86.3109C50.196 86.3109 49.0598 84.7871 49.0598 82.7885C49.0598 80.6172 50.3972 79.2367 52.0652 79.2367C53.848 79.2367 54.941 80.8037 54.941 82.7591L54.9401 82.76ZM50.828 82.0271H53.2436C53.1857 81.2647 52.6971 80.7476 52.0073 80.7476C51.188 80.7476 50.8711 81.4668 50.828 82.0271ZM64.588 99.8558H62.8337V99.4103C62.2587 99.8273 61.9133 100 61.2952 100C59.3397 100 58.5057 98.3035 58.5057 96.405C58.5057 94.3485 59.483 92.9258 61.252 92.9258C61.8417 92.9258 62.402 93.0838 62.8337 93.4723V91.301L64.588 90.4239V99.8558ZM62.8346 97.757V95.1688C62.4608 94.7665 62.1016 94.5791 61.6121 94.5791C60.5916 94.5791 60.3464 95.3846 60.3464 96.3472C60.3464 97.4402 60.6623 98.3458 61.6552 98.3458C62.1439 98.3458 62.4892 98.1308 62.8346 97.757ZM55.6446 93.0691V99.8558H57.3989V93.0691H55.6446ZM54.6241 90.6544V92.0634C54.3651 91.977 54.0207 91.9339 53.7616 91.9339C53.2583 91.9339 53.0287 92.0918 53.0287 92.5235V93.07H54.4808V94.7095H53.0287V99.8567H51.2743V94.7095H50.3255V93.07H51.2743V92.2507C51.2743 90.9851 52.0652 90.468 53.3446 90.468C53.7185 90.468 54.265 90.5102 54.6241 90.6544ZM49.4621 99.8558H47.7078V96.1607C47.7078 95.2119 47.492 94.5791 46.5432 94.5791C45.6513 94.5791 45.3638 95.1109 45.3638 96.1175V99.8558H43.6095V93.0691H45.3638V93.5293C45.7229 93.1701 46.2557 92.9258 47.0171 92.9258C48.8578 92.9258 49.4612 94.3495 49.4612 96.0174V99.8567L49.4621 99.8558ZM39.3825 92.9258C37.427 92.9258 36.2045 94.4643 36.2045 96.4629C36.2045 98.5626 37.5419 100 39.3825 100C41.2232 100 42.5605 98.5626 42.5605 96.4629C42.5605 94.3632 41.338 92.9258 39.3825 92.9258ZM39.3825 98.3035C38.261 98.3035 38.0167 97.2252 38.0167 96.4629C38.0167 95.4131 38.4484 94.6085 39.3825 94.6085C40.3166 94.6085 40.7483 95.414 40.7483 96.4629C40.7483 97.2252 40.504 98.3035 39.3825 98.3035ZM34.508 97.4402L35.6295 98.5038C35.0546 99.2367 34.2637 99.9991 32.9264 99.9991C31.0719 99.9991 29.7052 98.5185 29.7052 96.4767C29.7052 94.6076 30.8414 92.9249 32.9549 92.9249C34.1627 92.9249 34.9967 93.4714 35.6148 94.3917L34.4649 95.5564C34.0626 95.0246 33.6309 94.6076 32.9411 94.6076C32.0061 94.6076 31.5174 95.3984 31.5174 96.4482C31.5174 97.4255 31.9491 98.3026 32.9549 98.3026C33.573 98.3026 34.091 97.972 34.508 97.4402ZM25.436 99.8558H23.6817V96.1607C23.6817 95.2119 23.4658 94.5791 22.517 94.5791C21.6252 94.5791 21.3239 95.1109 21.3239 96.1175V99.8558H19.5696V91.301L21.3239 90.4239V93.5293C21.6546 93.127 22.3444 92.9258 23.0204 92.9258C24.8032 92.9258 25.436 94.3348 25.436 96.0174V99.8558ZM18.4903 97.814L18.2313 99.5821C17.8722 99.8696 17.0088 99.9991 16.5486 99.9991C15.485 99.9991 14.7226 99.1504 14.7226 97.972V94.7077H13.5433V93.0682H14.7226V91.3001L16.477 90.4229V93.0682H18.4609V94.7077H16.477V97.4971C16.477 98.1153 16.7066 98.3164 17.1236 98.3164C17.5406 98.3164 18.1872 98.1006 18.4894 97.8131L18.4903 97.814ZM10.8273 93.0691V99.8558H12.5816V93.0691H10.8273ZM9.90694 93.0691L7.765 99.8558H6.15487L5.00491 95.729L3.84025 99.8558H2.23012L0.101035 93.0691H2.05652L3.07698 97.0085L4.22694 93.0691H5.82329L6.97325 97.0085L8.0084 93.0691H9.90694ZM62.5756 76.98V78.3743C62.187 78.2732 61.9289 78.2301 61.6984 78.2301C61.0949 78.2301 60.9654 78.4459 60.9654 78.7913V79.3809H62.1154V81.0204H60.9654V86.1676H59.269V81.0204H58.435V79.3809H59.269V78.5616C59.269 77.3823 59.8871 76.7789 61.3255 76.7789C61.7857 76.7789 62.1586 76.8652 62.5756 76.98ZM41.7118 84.1837L41.4675 85.9095C41.1222 86.1823 40.5187 86.3118 40.1017 86.3118C39.0666 86.3118 38.261 85.5357 38.261 84.2985V81.0057H37.0817V79.3809H38.261V77.6128L39.9575 76.7504V79.3818H41.5392V81.0066H39.9575V83.8539C39.9575 84.4436 40.2018 84.6595 40.6188 84.6595C41.0358 84.6595 41.4381 84.4427 41.7118 84.1837ZM33.8183 82.76C33.8183 82.9759 33.8036 83.2487 33.7898 83.3497H29.8209C29.8926 84.2985 30.5539 84.687 31.2878 84.687C31.7195 84.687 32.1071 84.5575 32.4524 84.2122L33.6603 85.2326C33.0991 85.9802 32.0786 86.3109 31.173 86.3109C29.2322 86.3109 28.0813 84.7871 28.0813 82.8023C28.0813 80.8174 29.3323 79.2367 31.1004 79.2367C32.998 79.2367 33.8183 80.9635 33.8183 82.76ZM29.8494 82.0271H32.2651C32.1934 81.2647 31.747 80.7476 31.0141 80.7476C30.2379 80.7476 29.8926 81.4668 29.8494 82.0271ZM27.2758 82.7894C27.2758 84.529 26.5566 86.3118 24.6305 86.3118C23.8828 86.3118 23.4227 86.039 23.1205 85.7506V87.8209L21.424 88.6696V79.3809H23.1205V79.8411C23.566 79.4388 24.0261 79.2376 24.659 79.2376C26.4849 79.2376 27.2758 80.9635 27.2758 82.7894ZM25.5214 82.8748C25.5214 81.8829 25.2624 80.8762 24.242 80.8762C23.7671 80.8762 23.3933 81.0921 23.1205 81.4797V84.068C23.3933 84.4565 23.8534 84.6861 24.343 84.6861C25.2918 84.6861 25.5214 83.8236 25.5214 82.8748ZM20.2447 86.1676H18.5482V85.6928C18.1459 86.095 17.6279 86.3109 16.9665 86.3109C15.6292 86.3109 14.5794 85.4484 14.5794 83.9531C14.5794 82.4578 15.5998 81.667 17.2246 81.667C17.6563 81.667 18.1018 81.7249 18.5473 81.9398V81.5807C18.5473 80.9479 18.1303 80.6888 17.3826 80.6888C16.8508 80.6888 16.3475 80.8184 15.8157 81.1343L15.1396 79.9265C15.8726 79.4663 16.5771 79.2367 17.4836 79.2367C19.1948 79.2367 20.2447 80.0707 20.2447 81.6092V86.1676ZM18.5482 84.1837V83.3212C18.2028 83.1054 17.7574 83.0337 17.412 83.0337C16.6643 83.0337 16.3052 83.3644 16.3052 83.9109C16.3052 84.4289 16.6359 84.8459 17.2687 84.8459C17.5994 84.8459 18.1744 84.7302 18.5482 84.1837ZM13.6452 86.1676H11.9488V82.4725C11.9488 81.5522 11.7476 80.8762 10.7988 80.8762C9.84999 80.8762 9.63415 81.4944 9.63415 82.4294V86.1676H7.93768V77.6128L9.63415 76.7504V79.8558C10.008 79.482 10.4681 79.2376 11.2305 79.2376C13.028 79.2376 13.6462 80.6181 13.6462 82.343V86.1676H13.6452ZM7.00264 83.4507C7.00264 85.4925 5.44946 86.3118 3.60971 86.3118C2.28615 86.3118 0.819302 85.8948 0 84.687L1.26569 83.5655C1.85537 84.27 2.70315 84.6007 3.56654 84.6007C4.58699 84.6007 5.17667 84.1405 5.17667 83.4939C5.17667 83.2349 5.07563 82.9759 4.64485 82.7609C4.32889 82.603 3.94037 82.5019 3.17801 82.3155C2.70315 82.2007 1.72586 81.9701 1.12149 81.4815C0.518034 80.9929 0.345356 80.2884 0.345356 79.6702C0.345356 77.758 1.98488 76.9818 3.59501 76.9818C4.98929 76.9818 5.99597 77.5568 6.80149 78.3761L5.5358 79.6124C4.94612 79.0227 4.37114 78.6921 3.47928 78.6921C2.71692 78.6921 2.15664 78.9364 2.15664 79.5692C2.15664 79.842 2.25767 80.0294 2.53047 80.1874C2.84643 80.36 3.29282 80.4895 3.98262 80.6622C4.80192 80.8781 5.56427 81.0645 6.18242 81.5678C6.72893 82.0133 7.00173 82.603 7.00173 83.4517L7.00264 83.4507ZM86.0414 79.6978L85.3489 81.3942C85.0898 81.1499 84.7877 80.9773 84.3716 80.9773C83.5661 80.9773 83.3667 81.6533 83.3667 82.4725V86.1676H81.6703V79.3809H83.3667V79.8558C83.7553 79.4673 84.2439 79.2376 84.7904 79.2376C85.2653 79.2376 85.6823 79.3818 86.0414 79.6978Z"},J2="/assets/cf830df8acc30d2ebe5a2c08149d39333d1079bd-BeLjyhso.png",e1="/assets/c47d9607a0edbab8c4595b79a2b7a480058303f1-jP8oLYOB.png",t1="/assets/3ade42659624abadce59b0790baf7f1d24194a8a-DJmztXD1.png",n1="/assets/f68a98c7299f7f60dd06bf1faca4b1c636e4b255-By-7Ebtn.png",r1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2091.85%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22clip0_1_2%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M91.85%200H0V100H91.85V0Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",i1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_facebook.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1096)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M29.5615%2013.5H14.4385C13.92%2013.5%2013.5%2013.92%2013.5%2014.4385V29.5622C13.5%2030.08%2013.92%2030.5%2014.4385%2030.5H22.5808V23.9167H20.3652V21.3512H22.5808V19.4592C22.5808%2017.2634%2023.9217%2016.0677%2025.881%2016.0677C26.8195%2016.0677%2027.6256%2016.1378%2027.8607%2016.169V18.464L26.5022%2018.4647C25.4368%2018.4647%2025.2307%2018.9712%2025.2307%2019.7135V21.3519H27.7715L27.4407%2023.9175H25.2307V30.5H29.5629C30.08%2030.5%2030.5%2030.08%2030.5%2029.5615V14.4385C30.5%2013.92%2030.08%2013.5%2029.5615%2013.5Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1096%22%3E%0A%3Crect%20width%3D%2217%22%20height%3D%2217%22%20fill%3D%22white%22%20transform%3D%22translate(13.5%2013.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",a1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_twitter.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M23.7821%2020.4474L30.7554%2012.3415H29.1029L23.048%2019.3797L18.212%2012.3415H12.6342L19.9472%2022.9845L12.6342%2031.4848H14.2867L20.6809%2024.0522L25.7881%2031.4848H31.3659L23.7821%2020.4474ZM21.5187%2023.0783L20.7777%2022.0185L14.8821%2013.5855H17.4203L22.1781%2020.3912L22.9191%2021.451L29.1037%2030.2974H26.5655L21.5187%2023.0783Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",o1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_linkedin.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1091)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M17.1036%2016.0713C17.1036%2017.0345%2016.3293%2017.815%2015.3738%2017.815C14.4182%2017.815%2013.644%2017.0345%2013.644%2016.0713C13.644%2015.1087%2014.4182%2014.3275%2015.3738%2014.3275C16.3293%2014.3275%2017.1036%2015.1087%2017.1036%2016.0713ZM17.1175%2019.21H13.63V30.37H17.1175V19.21ZM22.6849%2019.21H19.2198V30.37H22.6856V24.5117C22.6856%2021.2544%2026.8909%2020.9879%2026.8909%2024.5117V30.37H30.37V23.3036C30.37%2017.8073%2024.1469%2018.0075%2022.6849%2020.7131V19.21Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1091%22%3E%0A%3Crect%20width%3D%2216.74%22%20height%3D%2216.74%22%20fill%3D%22white%22%20transform%3D%22translate(13.63%2013.63)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",l1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_youtube.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1081)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cg%20id%3D%22Group_2%22%3E%0A%3Cg%20id%3D%22Group_3%22%3E%0A%3Cg%20id%3D%22Group_4%22%3E%0A%3Cg%20id%3D%22Group_5%22%3E%0A%3Cpath%20id%3D%22Vector%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M32.5402%2016.8423C33%2018.5133%2033%2022%2033%2022C33%2022%2033%2025.4865%2032.5402%2027.1578C32.2872%2028.0797%2031.5419%2028.8058%2030.5951%2029.0523C28.8796%2029.5%2022%2029.5%2022%2029.5C22%2029.5%2015.1204%2029.5%2013.4047%2029.0523C12.4581%2028.8058%2011.7126%2028.0797%2011.4596%2027.1578C11%2025.4865%2011%2022%2011%2022C11%2022%2011%2018.5133%2011.4596%2016.8423C11.7126%2015.9203%2012.4581%2015.1942%2013.4047%2014.9478C15.1204%2014.5%2022%2014.5%2022%2014.5C22%2014.5%2028.8796%2014.5%2030.5951%2014.9478C31.5419%2015.1942%2032.2872%2015.9203%2032.5402%2016.8423ZM19.75%2025.1656L25.5%2022.0001L19.75%2018.8344V25.1656Z%22%20fill%3D%22var(--fill-0%2C%20%232E2E38)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1081%22%3E%0A%3Crect%20width%3D%2222%22%20height%3D%2215%22%20fill%3D%22white%22%20transform%3D%22translate(11%2014.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A";function s1(){return r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#2e2e38] to-[rgba(0,0,0,0)] via-[62.981%] via-[rgba(46,46,56,0.7)] w-full","data-name":"Container",children:r.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"IndianTaxLady 1",children:r.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[r.jsx("img",{alt:"",className:"absolute max-w-none object-cover object-[70%_center] size-full",src:J2}),r.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.25)] inset-0"})]})})})}function d1(){return r.jsxs("section",{className:"relative shrink-0 w-full min-h-[420px] md:min-h-[560px] lg:min-h-[632px] overflow-hidden","data-name":"section",children:[r.jsx(s1,{}),r.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[4px] bg-[#ffe600]"}),r.jsxs("div",{className:"relative z-[1] flex flex-col gap-5 md:gap-6 max-w-[640px] px-5 sm:px-8 md:px-10 pt-24 pb-16 md:pt-32 md:pb-20",children:[r.jsx("h1",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.1] not-italic text-[#ffe600] text-[36px] sm:text-[48px] md:text-[58px] tracking-[-0.02em] m-0",children:"EY India AI Tax Hub"}),r.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.45] not-italic m-0 text-[16px] sm:text-[18px] md:text-[20px] text-[rgba(255,255,255,0.85)]",children:"A program offering suite of AI Agents for deep research, compliance, litigation and AI led bespoke tax function transformation capabilities. It is backed by trusted tax databases and sharpest tax minds in India."}),r.jsx("button",{type:"button",className:"bg-[#ffe600] border-0 cursor-pointer font-['EYInterstate:Regular',sans-serif] text-[#2e2e38] text-[16px] px-6 py-3 w-fit",children:"Know More"})]})]})}function c1(){return r.jsxs("div",{className:"relative shrink-0 w-full flex flex-col gap-2 items-center text-center px-2","data-name":"Container",children:[r.jsx("h2",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.25] not-italic m-0 text-[#2e2e38] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.02em]",children:"Discover what's happening on the Hub"}),r.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[1.5] not-italic m-0 text-[#747480] text-[15px] md:text-[16px] max-w-[720px]",children:"The three foundational pillars of the EY India AI Tax Hub, designed to revolutionize your end-to-end tax operations."})]})}function u1(){return r.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:r.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"Research & Litigation"})})}function p1(){return r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[71px]","data-name":"file-search-corner 4",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:r.jsxs("g",{id:"file-search-corner 4",children:[r.jsx("path",{d:dr.p17d3fb80,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:dr.p1b4fc880,id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:"M39.375 41.25L33.975 35.85",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:dr.p26318a80,id:"Vector_4",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function f1(){return r.jsxs("div",{className:"absolute bg-gradient-to-t from-[61.538%] from-[rgba(46,46,56,0)] h-[192px] left-0 to-[rgba(0,0,0,0)] top-[0.41px] w-full","data-name":"Container",children:[r.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"ResearchLitigation 1",children:r.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[r.jsx("img",{alt:"",className:"absolute max-w-none object-cover size-full",src:e1}),r.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),r.jsx(p1,{})]})}function h1(){return r.jsx("div",{className:"absolute h-[27px] left-[16px] top-[149px] w-full max-w-full","data-name":"h3"})}function g1(){return r.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:r.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:r.jsxs("div",{className:"content-stretch flex items-start justify-between p-[10px] relative size-full",children:[r.jsx(f1,{}),r.jsx(h1,{})]})})})}function m1(){return r.jsx("div",{className:"h-[67.195px] relative shrink-0 w-full","data-name":"p",children:r.jsx("p",{className:"[word-break:break-word] absolute font-['EYInterstate:Bold',sans-serif] leading-[23.996px] left-0 not-italic text-[#747480] text-[16.002px] top-[0.5px] w-full",children:"Platform for research and litigation with deeply embedded agentic capabilities."})})}function x1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:r.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0","data-name":"Link",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#747480] border-solid inset-0 pointer-events-none"}),r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] whitespace-nowrap",children:"Know more"})]})})}function v1(){return r.jsxs("div",{className:"bg-white flex-[1_0_0] min-h-px relative rounded-[5px] w-full","data-name":"Container",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[5px]"}),r.jsx("div",{className:"flex flex-col justify-center size-full",children:r.jsxs("div",{className:"content-stretch flex flex-col items-start justify-between p-[20px] relative size-full",children:[r.jsx(m1,{}),r.jsx(x1,{})]})})]})}function y1(){return r.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[r.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:r.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[r.jsx(g1,{}),r.jsx(v1,{})]})}),r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function b1(){return r.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px]",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),r.jsx(u1,{}),r.jsx(y1,{})]})}function w1(){return r.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:r.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"Compliance"})})}function k1(){return r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[73.41px]","data-name":"list-checks 1",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:r.jsxs("g",{id:"list-checks 1",children:[r.jsx("path",{d:"M24.375 9.375H39.375",id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:"M24.375 22.5H39.375",id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:"M24.375 35.625H39.375",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:dr.p3eb8a400,id:"Vector_4",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:dr.p2dd93a80,id:"Vector_5",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function C1(){return r.jsxs("div",{className:"absolute bg-[#2e2e38] h-[192px] left-0 top-0 w-full","data-name":"Container",children:[r.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"Compliance 1",children:r.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[r.jsx("img",{alt:"",className:"absolute max-w-none object-cover size-full",src:t1}),r.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),r.jsx(k1,{})]})}function j1(){return r.jsx("div",{className:"absolute h-[27px] left-[16px] top-[149px] w-full max-w-full","data-name":"h3"})}function E1(){return r.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:r.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:r.jsxs("div",{className:"content-stretch flex items-start justify-between p-[10px] relative size-full",children:[r.jsx(C1,{}),r.jsx(j1,{})]})})})}function S1(){return r.jsx("div",{className:"content-stretch flex items-center justify-center py-px relative shrink-0","data-name":"p",children:r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[23.996px] not-italic relative shrink-0 text-[#747480] text-[16.002px] w-full",children:"Platforms for multiple tax compliances powered by AI agents"})})}function A1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:r.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0","data-name":"Link",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#747480] border-solid inset-0 pointer-events-none"}),r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] whitespace-nowrap",children:"Know more"})]})})}function F1(){return r.jsx("div",{className:"bg-white relative rounded-[5px] shrink-0 w-full","data-name":"Container",children:r.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full",children:[r.jsx(S1,{}),r.jsx(A1,{})]})})}function z1(){return r.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[r.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:r.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[r.jsx(E1,{}),r.jsx(F1,{})]})}),r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function I1(){return r.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px]",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),r.jsx(w1,{}),r.jsx(z1,{})]})}function L1(){return r.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:r.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"EY.ai Tax Labs"})})}function T1(){return r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[73.41px]","data-name":"flask-conical (1) 1",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:r.jsxs("g",{id:"flask-conical (1) 1",children:[r.jsx("path",{d:dr.p110f3b80,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:"M12.0994 28.125H32.9006",id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),r.jsx("path",{d:"M15.9375 3.75H29.0625",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function N1(){return r.jsxs("div",{className:"absolute bg-gradient-to-t from-1/2 from-[rgba(46,46,56,0.6)] h-[192px] left-0 to-[rgba(0,0,0,0)] top-0 w-full","data-name":"Container",children:[r.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"Tax lab 1",children:r.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[r.jsx("div",{className:"absolute inset-0 overflow-hidden",children:r.jsx("img",{alt:"",className:"absolute h-[150.96%] left-[-30.48%] max-w-none top-[-32.57%] w-[153.51%]",src:n1})}),r.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),r.jsx(T1,{})]})}function M1(){return r.jsx("div",{className:"h-[27px] relative shrink-0 w-full max-w-full","data-name":"h3"})}function R1(){return r.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:r.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:r.jsxs("div",{className:"content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full",children:[r.jsx(N1,{}),r.jsx(M1,{})]})})})}function B1(){return r.jsx("div",{className:"content-stretch flex items-center justify-center relative shrink-0","data-name":"p",children:r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[23.996px] not-italic relative shrink-0 text-[#747480] text-[16.002px] w-full",children:"Your space to build the tax function of the future"})})}function D1({onOpenTaxLabs:i}){return r.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:r.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),i==null||i()},className:"bg-[#ffe600] border-0 content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0 cursor-pointer","data-name":"Get started",children:r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2e2e38] text-[14px] whitespace-nowrap",children:"Get Started"})})})}function P1({onOpenTaxLabs:i}){return r.jsx("div",{className:"bg-white flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:r.jsx("div",{className:"flex flex-col justify-center size-full",children:r.jsxs("div",{className:"content-stretch flex flex-col items-start justify-between p-[20px] relative size-full",children:[r.jsx(B1,{}),r.jsx(D1,{onOpenTaxLabs:i})]})})})}function H1({onOpenTaxLabs:i}){return r.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[r.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:r.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[r.jsx(R1,{}),r.jsx(P1,{onOpenTaxLabs:i})]})}),r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function _1({onOpenTaxLabs:i}){return r.jsxs("div",{onClick:i,title:"Explore EY.ai Tax Labs",className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px] bg-transparent border-0 p-0 cursor-pointer text-left",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),r.jsx(L1,{}),r.jsx(H1,{onOpenTaxLabs:i})]})}function O1({onOpenTaxLabs:i}){return r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 relative shrink-0 w-full min-w-0",children:[r.jsx(b1,{}),r.jsx(I1,{}),r.jsx(_1,{onOpenTaxLabs:i})]})}function W1({onOpenTaxLabs:i}){return r.jsx("div",{className:"bg-white relative shrink-0 w-full","data-name":"Section",children:r.jsxs("div",{className:"content-stretch flex flex-col gap-8 items-stretch p-5 sm:p-8 md:p-10 relative size-full",children:[r.jsx(c1,{}),r.jsx(O1,{onOpenTaxLabs:i})]})})}function $1(){return r.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function V1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-10 md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:r.jsx($1,{})})}function U1(){return r.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${r1}")`},"data-name":"Group",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:r.jsxs("g",{id:"Group",children:[r.jsx("path",{d:dr.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),r.jsx("path",{d:dr.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function Y1(){return r.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:r.jsx(U1,{})})}function G1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:r.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:r.jsx(Y1,{})})})}function q1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:r.jsx(G1,{})})}function Z1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:r.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function K1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:r.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function Q1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:r.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function X1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:r.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function J1(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:r.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function em(){return r.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[r.jsx(Z1,{}),r.jsx(K1,{}),r.jsx(Q1,{}),r.jsx(X1,{}),r.jsx(J1,{})]})}function tm(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:r.jsx(em,{})})}function nm(){return r.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[r.jsx(q1,{}),r.jsx(tm,{})]})}function rm(){return r.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:r.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function im(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${i1}")`},"data-name":"Background"})})}function am(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(im,{})]})})}function om(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${a1}")`},"data-name":"Background"})})}function lm(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(om,{})]})})}function sm(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${o1}")`},"data-name":"Background"})})}function dm(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(sm,{})]})})}function cm(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${l1}")`},"data-name":"Background"})})}function um(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(cm,{})]})})}function pm(){return r.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[r.jsx(am,{}),r.jsx(lm,{}),r.jsx(dm,{}),r.jsx(um,{})]})}function fm(){return r.jsxs("div",{className:"content-stretch flex flex-col sm:flex-row sm:items-center gap-4 relative shrink-0 w-full min-w-0",children:[r.jsx(rm,{}),r.jsx(pm,{})]})}function hm(){return r.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Container",children:r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-0 sm:px-[8px] relative w-full",children:r.jsx(fm,{})})})}function gm(){return r.jsxs("div",{className:"content-stretch flex flex-col gap-8 md:gap-[36px] items-stretch relative shrink-0 w-full min-w-0",children:[r.jsx(nm,{}),r.jsx(hm,{})]})}function mm(){return r.jsx("div",{className:"content-stretch flex flex-col items-center relative shrink-0 w-full",children:r.jsx(gm,{})})}function xm({onOpenTaxLabs:i}){return r.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:[r.jsx(d1,{}),r.jsx(W1,{onOpenTaxLabs:i}),r.jsxs("div",{className:"bg-white content-stretch flex flex-col items-stretch justify-center px-4 sm:px-8 md:px-[64px] py-10 md:py-14 relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:[r.jsx(V1,{}),r.jsx(mm,{})]})]})}function vm({onOpenTaxLabs:i}){return r.jsx("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full min-w-0","data-name":"Body",children:r.jsx(xm,{onOpenTaxLabs:i})})}function ym(){const i=Nn();return r.jsxs("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden bg-white","data-name":"HOME 2",children:[r.jsx("div",{className:"sticky top-0 z-[300] w-full",children:r.jsx(fi,{variant:"hub",activeSection:"home",onNavigate:i,skipLinkTarget:"#home-content"})}),r.jsx("div",{id:"home-content",className:"w-full min-w-0",children:r.jsx(vm,{onOpenTaxLabs:()=>i("/phased")})})]})}const pa={p3955b500:"M80.5276 0L19.8341 22.1511L80.5276 11.4305V0Z",p3bfa7a00:"M3.3328 8H12.6672M8 12.6672L12.6672 8L8 3.3328",pf788bc0:"M29.572 49.9334H40.673V43.4875H29.572V38.4211H41.8524L37.7779 31.3598H20.3641V62.0601H44.9238V54.9988H29.5711L29.572 49.9334ZM61.2704 31.3607L56.0551 41.3795L50.8528 31.3607H40.673L51.3993 49.9343V62.0611H60.5788V49.9343L71.3197 31.3607H61.2704ZM71.519 96.4482C71.519 96.664 71.5043 96.9368 71.4905 97.0379H67.3784C67.4501 97.9867 68.0976 98.3752 68.8306 98.3752C69.2623 98.3752 69.6646 98.2457 70.0099 97.9003L71.2177 98.9208C70.5849 99.7116 69.6214 99.9991 68.7589 99.9991C66.775 99.9991 65.6388 98.4753 65.6388 96.4767C65.6388 94.3054 66.9761 92.9249 68.6441 92.9249C70.4269 92.9249 71.5199 94.4918 71.5199 96.4473L71.519 96.4482ZM67.4069 95.7153H69.8225C69.7647 94.9529 69.276 94.4358 68.5862 94.4358C67.7669 94.4358 67.4501 95.155 67.4069 95.7153ZM91.85 96.4482C91.85 96.664 91.8353 96.9368 91.8215 97.0379H87.7094C87.781 97.9867 88.4286 98.3752 89.1616 98.3752C89.5932 98.3752 89.9956 98.2457 90.3409 97.9003L91.5487 98.9208C90.9159 99.7116 89.9524 99.9991 89.0899 99.9991C87.106 99.9991 85.9698 98.4753 85.9698 96.4767C85.9698 94.3054 87.3071 92.9249 88.9751 92.9249C90.7579 92.9249 91.8509 94.4918 91.8509 96.4473L91.85 96.4482ZM87.7379 95.7153H90.1535C90.0957 94.9529 89.607 94.4358 88.9172 94.4358C88.0979 94.4358 87.781 95.155 87.7379 95.7153ZM84.3155 97.4402L85.437 98.5038C84.8621 99.2367 84.0712 99.9991 82.7339 99.9991C80.8794 99.9991 79.5127 98.5185 79.5127 96.4767C79.5127 94.6076 80.6489 92.9249 82.7624 92.9249C83.9702 92.9249 84.8042 93.4714 85.4223 94.3917L84.2724 95.5564C83.8701 95.0246 83.4384 94.6076 82.7486 94.6076C81.8136 94.6076 81.3249 95.3984 81.3249 96.4482C81.3249 97.4255 81.7566 98.3026 82.7624 98.3026C83.3805 98.3026 83.8985 97.972 84.3155 97.4402ZM68.6717 86.1676H67.0037V85.6928C66.6298 86.1097 66.0264 86.3109 65.422 86.3109C63.6677 86.3109 63.0063 85.0452 63.0063 83.2193V79.38H64.7028V83.0751C64.7028 83.9954 64.8902 84.6852 65.839 84.6852C66.7878 84.6852 66.9752 83.966 66.9752 83.132V79.3791H68.6717V86.1658V86.1676ZM73.9631 84.1837L73.7188 85.9095C73.3735 86.1823 72.7415 86.3118 72.3245 86.3118C71.2894 86.3118 70.4839 85.5357 70.4839 84.2985V81.0057H69.5066V79.3809H70.4839V77.6128L72.1803 76.7504V79.3818H73.7905V81.0066H72.1803V83.8539C72.1803 84.4436 72.4246 84.6595 72.8416 84.6595C73.2586 84.6595 73.6903 84.4427 73.9631 84.1837ZM48.1965 86.1676H46.5V82.4725C46.5 81.5522 46.2988 80.8762 45.35 80.8762C44.4012 80.8762 44.1854 81.4944 44.1854 82.4294V86.1676H42.4889V77.6128L44.1854 76.7504V79.8558C44.5592 79.482 45.0194 79.2376 45.7817 79.2376C47.5792 79.2376 48.1974 80.6181 48.1974 82.343L48.1965 86.1676ZM78.4776 99.8558H76.7232V96.1607C76.7232 95.2119 76.5074 94.5791 75.5586 94.5791C74.6667 94.5791 74.3792 95.1109 74.3792 96.1175V99.8558H72.6249V93.0691H74.3792V93.5293C74.7383 93.1701 75.2711 92.9258 76.0325 92.9258C77.8732 92.9258 78.4766 94.3495 78.4766 96.0174V99.8567L78.4776 99.8558ZM56.5364 92.4804C57.0976 92.4804 57.5431 92.0349 57.5431 91.4737C57.5431 90.9125 57.0976 90.467 56.5364 90.467C55.9752 90.467 55.5298 90.9125 55.5298 91.4737C55.5298 92.0349 55.9752 92.4804 56.5364 92.4804ZM11.7044 92.4804C12.2656 92.4804 12.7111 92.0349 12.7111 91.4737C12.7111 90.9125 12.2656 90.467 11.7044 90.467C11.1432 90.467 10.6978 90.9125 10.6978 91.4737C10.6978 92.0349 11.1432 92.4804 11.7044 92.4804ZM91.85 82.76C91.85 82.9759 91.8353 83.2487 91.8215 83.3497H87.7094C87.781 84.2985 88.4286 84.687 89.1616 84.687C89.5932 84.687 89.9956 84.5575 90.3409 84.2122L91.5487 85.2326C90.9159 86.0234 89.9524 86.3109 89.0899 86.3109C87.106 86.3109 85.9698 84.7871 85.9698 82.7885C85.9698 80.6172 87.3071 79.2367 88.9751 79.2367C90.7579 79.2367 91.8509 80.8037 91.8509 82.7591L91.85 82.76ZM87.7379 82.0271H90.1535C90.0957 81.2647 89.607 80.7476 88.9172 80.7476C88.0979 80.7476 87.781 81.4668 87.7379 82.0271ZM80.4193 86.1676H78.7513V85.6928C78.3774 86.1097 77.774 86.3109 77.1696 86.3109C75.4153 86.3109 74.754 85.0452 74.754 83.2193V79.38H76.4504V83.0751C76.4504 83.9954 76.6378 84.6852 77.5866 84.6852C78.5354 84.6852 78.7228 83.966 78.7228 83.132V79.3791H80.4193V86.1658V86.1676ZM54.9401 82.76C54.9401 82.9759 54.9254 83.2487 54.9116 83.3497H50.7995C50.8711 84.2985 51.5187 84.687 52.2516 84.687C52.6833 84.687 53.0856 84.5575 53.431 84.2122L54.6388 85.2326C54.006 86.0234 53.0425 86.3109 52.18 86.3109C50.196 86.3109 49.0598 84.7871 49.0598 82.7885C49.0598 80.6172 50.3972 79.2367 52.0652 79.2367C53.848 79.2367 54.941 80.8037 54.941 82.7591L54.9401 82.76ZM50.828 82.0271H53.2436C53.1857 81.2647 52.6971 80.7476 52.0073 80.7476C51.188 80.7476 50.8711 81.4668 50.828 82.0271ZM64.588 99.8558H62.8337V99.4103C62.2587 99.8273 61.9133 100 61.2952 100C59.3397 100 58.5057 98.3035 58.5057 96.405C58.5057 94.3485 59.483 92.9258 61.252 92.9258C61.8417 92.9258 62.402 93.0838 62.8337 93.4723V91.301L64.588 90.4239V99.8558ZM62.8346 97.757V95.1688C62.4608 94.7665 62.1016 94.5791 61.6121 94.5791C60.5916 94.5791 60.3464 95.3846 60.3464 96.3472C60.3464 97.4402 60.6623 98.3458 61.6552 98.3458C62.1439 98.3458 62.4892 98.1308 62.8346 97.757ZM55.6446 93.0691V99.8558H57.3989V93.0691H55.6446ZM54.6241 90.6544V92.0634C54.3651 91.977 54.0207 91.9339 53.7616 91.9339C53.2583 91.9339 53.0287 92.0918 53.0287 92.5235V93.07H54.4808V94.7095H53.0287V99.8567H51.2743V94.7095H50.3255V93.07H51.2743V92.2507C51.2743 90.9851 52.0652 90.468 53.3446 90.468C53.7185 90.468 54.265 90.5102 54.6241 90.6544ZM49.4621 99.8558H47.7078V96.1607C47.7078 95.2119 47.492 94.5791 46.5432 94.5791C45.6513 94.5791 45.3638 95.1109 45.3638 96.1175V99.8558H43.6095V93.0691H45.3638V93.5293C45.7229 93.1701 46.2557 92.9258 47.0171 92.9258C48.8578 92.9258 49.4612 94.3495 49.4612 96.0174V99.8567L49.4621 99.8558ZM39.3825 92.9258C37.427 92.9258 36.2045 94.4643 36.2045 96.4629C36.2045 98.5626 37.5419 100 39.3825 100C41.2232 100 42.5605 98.5626 42.5605 96.4629C42.5605 94.3632 41.338 92.9258 39.3825 92.9258ZM39.3825 98.3035C38.261 98.3035 38.0167 97.2252 38.0167 96.4629C38.0167 95.4131 38.4484 94.6085 39.3825 94.6085C40.3166 94.6085 40.7483 95.414 40.7483 96.4629C40.7483 97.2252 40.504 98.3035 39.3825 98.3035ZM34.508 97.4402L35.6295 98.5038C35.0546 99.2367 34.2637 99.9991 32.9264 99.9991C31.0719 99.9991 29.7052 98.5185 29.7052 96.4767C29.7052 94.6076 30.8414 92.9249 32.9549 92.9249C34.1627 92.9249 34.9967 93.4714 35.6148 94.3917L34.4649 95.5564C34.0626 95.0246 33.6309 94.6076 32.9411 94.6076C32.0061 94.6076 31.5174 95.3984 31.5174 96.4482C31.5174 97.4255 31.9491 98.3026 32.9549 98.3026C33.573 98.3026 34.091 97.972 34.508 97.4402ZM25.436 99.8558H23.6817V96.1607C23.6817 95.2119 23.4658 94.5791 22.517 94.5791C21.6252 94.5791 21.3239 95.1109 21.3239 96.1175V99.8558H19.5696V91.301L21.3239 90.4239V93.5293C21.6546 93.127 22.3444 92.9258 23.0204 92.9258C24.8032 92.9258 25.436 94.3348 25.436 96.0174V99.8558ZM18.4903 97.814L18.2313 99.5821C17.8722 99.8696 17.0088 99.9991 16.5486 99.9991C15.485 99.9991 14.7226 99.1504 14.7226 97.972V94.7077H13.5433V93.0682H14.7226V91.3001L16.477 90.4229V93.0682H18.4609V94.7077H16.477V97.4971C16.477 98.1153 16.7066 98.3164 17.1236 98.3164C17.5406 98.3164 18.1872 98.1006 18.4894 97.8131L18.4903 97.814ZM10.8273 93.0691V99.8558H12.5816V93.0691H10.8273ZM9.90694 93.0691L7.765 99.8558H6.15487L5.00491 95.729L3.84025 99.8558H2.23012L0.101035 93.0691H2.05652L3.07698 97.0085L4.22694 93.0691H5.82329L6.97325 97.0085L8.0084 93.0691H9.90694ZM62.5756 76.98V78.3743C62.187 78.2732 61.9289 78.2301 61.6984 78.2301C61.0949 78.2301 60.9654 78.4459 60.9654 78.7913V79.3809H62.1154V81.0204H60.9654V86.1676H59.269V81.0204H58.435V79.3809H59.269V78.5616C59.269 77.3823 59.8871 76.7789 61.3255 76.7789C61.7857 76.7789 62.1586 76.8652 62.5756 76.98ZM41.7118 84.1837L41.4675 85.9095C41.1222 86.1823 40.5187 86.3118 40.1017 86.3118C39.0666 86.3118 38.261 85.5357 38.261 84.2985V81.0057H37.0817V79.3809H38.261V77.6128L39.9575 76.7504V79.3818H41.5392V81.0066H39.9575V83.8539C39.9575 84.4436 40.2018 84.6595 40.6188 84.6595C41.0358 84.6595 41.4381 84.4427 41.7118 84.1837ZM33.8183 82.76C33.8183 82.9759 33.8036 83.2487 33.7898 83.3497H29.8209C29.8926 84.2985 30.5539 84.687 31.2878 84.687C31.7195 84.687 32.1071 84.5575 32.4524 84.2122L33.6603 85.2326C33.0991 85.9802 32.0786 86.3109 31.173 86.3109C29.2322 86.3109 28.0813 84.7871 28.0813 82.8023C28.0813 80.8174 29.3323 79.2367 31.1004 79.2367C32.998 79.2367 33.8183 80.9635 33.8183 82.76ZM29.8494 82.0271H32.2651C32.1934 81.2647 31.747 80.7476 31.0141 80.7476C30.2379 80.7476 29.8926 81.4668 29.8494 82.0271ZM27.2758 82.7894C27.2758 84.529 26.5566 86.3118 24.6305 86.3118C23.8828 86.3118 23.4227 86.039 23.1205 85.7506V87.8209L21.424 88.6696V79.3809H23.1205V79.8411C23.566 79.4388 24.0261 79.2376 24.659 79.2376C26.4849 79.2376 27.2758 80.9635 27.2758 82.7894ZM25.5214 82.8748C25.5214 81.8829 25.2624 80.8762 24.242 80.8762C23.7671 80.8762 23.3933 81.0921 23.1205 81.4797V84.068C23.3933 84.4565 23.8534 84.6861 24.343 84.6861C25.2918 84.6861 25.5214 83.8236 25.5214 82.8748ZM20.2447 86.1676H18.5482V85.6928C18.1459 86.095 17.6279 86.3109 16.9665 86.3109C15.6292 86.3109 14.5794 85.4484 14.5794 83.9531C14.5794 82.4578 15.5998 81.667 17.2246 81.667C17.6563 81.667 18.1018 81.7249 18.5473 81.9398V81.5807C18.5473 80.9479 18.1303 80.6888 17.3826 80.6888C16.8508 80.6888 16.3475 80.8184 15.8157 81.1343L15.1396 79.9265C15.8726 79.4663 16.5771 79.2367 17.4836 79.2367C19.1948 79.2367 20.2447 80.0707 20.2447 81.6092V86.1676ZM18.5482 84.1837V83.3212C18.2028 83.1054 17.7574 83.0337 17.412 83.0337C16.6643 83.0337 16.3052 83.3644 16.3052 83.9109C16.3052 84.4289 16.6359 84.8459 17.2687 84.8459C17.5994 84.8459 18.1744 84.7302 18.5482 84.1837ZM13.6452 86.1676H11.9488V82.4725C11.9488 81.5522 11.7476 80.8762 10.7988 80.8762C9.84999 80.8762 9.63415 81.4944 9.63415 82.4294V86.1676H7.93768V77.6128L9.63415 76.7504V79.8558C10.008 79.482 10.4681 79.2376 11.2305 79.2376C13.028 79.2376 13.6462 80.6181 13.6462 82.343V86.1676H13.6452ZM7.00264 83.4507C7.00264 85.4925 5.44946 86.3118 3.60971 86.3118C2.28615 86.3118 0.819302 85.8948 0 84.687L1.26569 83.5655C1.85537 84.27 2.70315 84.6007 3.56654 84.6007C4.58699 84.6007 5.17667 84.1405 5.17667 83.4939C5.17667 83.2349 5.07563 82.9759 4.64485 82.7609C4.32889 82.603 3.94037 82.5019 3.17801 82.3155C2.70315 82.2007 1.72586 81.9701 1.12149 81.4815C0.518034 80.9929 0.345356 80.2884 0.345356 79.6702C0.345356 77.758 1.98488 76.9818 3.59501 76.9818C4.98929 76.9818 5.99597 77.5568 6.80149 78.3761L5.5358 79.6124C4.94612 79.0227 4.37114 78.6921 3.47928 78.6921C2.71692 78.6921 2.15664 78.9364 2.15664 79.5692C2.15664 79.842 2.25767 80.0294 2.53047 80.1874C2.84643 80.36 3.29282 80.4895 3.98262 80.6622C4.80192 80.8781 5.56427 81.0645 6.18242 81.5678C6.72893 82.0133 7.00173 82.603 7.00173 83.4517L7.00264 83.4507ZM86.0414 79.6978L85.3489 81.3942C85.0898 81.1499 84.7877 80.9773 84.3716 80.9773C83.5661 80.9773 83.3667 81.6533 83.3667 82.4725V86.1676H81.6703V79.3809H83.3667V79.8558C83.7553 79.4673 84.2439 79.2376 84.7904 79.2376C85.2653 79.2376 85.6823 79.3818 86.0414 79.6978Z"},jt=156,bm=`2px solid ${u.yellow}`,wm=V2.replace(/^Phase 1: /,"");function fa(i){i.currentTarget.style.outline=bm,i.currentTarget.style.outlineOffset="2px"}function ha(i){i.currentTarget.style.outline="none"}function Yo(i){const{onNavigate:o,onBack:s,sectionStatus:p}=i,c=i.mode==="phase-overview",f=c?null:i.currentModuleId,g=c?void 0:i.onSectionClick,x=f?df(f):null,m=c?"Foundational AI Training":x.title,v=c?{module:`Module ${Ps} of ${Y2}`,subModule:null}:{module:`Module ${Ps}`,subModule:`Sub-module ${x.order} of ${G2}`},k=p,[b,S]=z.useState(!1),I=z.useRef(null),_=f?q2(f):{learn:[],apply:[]},{learn:B,apply:P}=_,X=!c&&!!(x!=null&&x.supportsInPageNav)&&(B.length>0||P.length>0),U=jm(g||!x?[]:x.subModules.map(K=>K.id));return z.useEffect(()=>{if(!b)return;function K(me){I.current&&!I.current.contains(me.target)&&S(!1)}function ye(me){me.key==="Escape"&&S(!1)}return document.addEventListener("mousedown",K),document.addEventListener("keydown",ye),()=>{document.removeEventListener("mousedown",K),document.removeEventListener("keydown",ye)}},[b]),r.jsxs("div",{style:{position:"sticky",top:0,zIndex:200},children:[r.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 md:gap-4 px-4 sm:px-6 md:px-10 py-3",style:{background:u.offBlack,borderBottom:`1px solid ${u.offBlack}`},children:[r.jsxs("div",{className:"flex items-center gap-2 md:gap-3 min-w-0 flex-1",children:[r.jsxs("button",{onClick:s,className:"flex items-center gap-2 shrink-0",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4},"aria-label":"Back to Tax Labs",onFocus:fa,onBlur:ha,children:[r.jsx(Cm,{}),r.jsx("span",{className:"hidden sm:inline",style:{fontFamily:C.bold,fontSize:14,color:u.yellow,whiteSpace:"nowrap"},children:"Tax Labs"})]}),r.jsx("span",{className:"hidden sm:inline shrink-0","aria-hidden":"true",children:r.jsx(vp,{})}),r.jsxs("div",{ref:I,className:"relative min-w-0",children:[r.jsxs("button",{onClick:()=>S(K=>!K),"aria-haspopup":"menu","aria-expanded":b,className:"flex items-center gap-1.5 min-w-0 max-w-[min(100%,240px)] sm:max-w-none",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4,fontFamily:C.bold,fontSize:14,color:u.white},onFocus:fa,onBlur:ha,children:[r.jsx("span",{className:"truncate",children:wm}),r.jsx("span",{style:{fontSize:8,color:u.yellow,transform:b?"rotate(180deg)":"none",transition:"transform 0.15s",display:"inline-block",flexShrink:0},"aria-hidden":"true",children:"▼"})]}),b&&r.jsxs("div",{role:"menu","aria-label":"Jump to module",style:{position:"absolute",top:"calc(100% + 8px)",left:0,minWidth:260,maxWidth:"min(90vw, 320px)",background:u.confidentBlack,border:"1px solid rgba(255,255,255,0.14)",borderRadius:8,boxShadow:"0 12px 32px rgba(0,0,0,0.4)",padding:6,zIndex:300},children:[r.jsx(yp,{label:`Module ${Ps} Overview`,isCurrent:c,order:null,onClick:()=>{S(!1),c||o(U2)}}),ld.map(K=>r.jsx(yp,{label:K.title,isCurrent:K.id===f,order:K.order,onClick:()=>{S(!1),K.id!==f&&o(K.path)}},K.id))]})]}),r.jsx("span",{className:"hidden lg:inline shrink-0","aria-hidden":"true",children:r.jsx(vp,{})}),r.jsx("span",{className:"hidden lg:inline truncate",style:{color:u.gray01,fontFamily:C.regular,fontSize:14},"aria-current":"page",children:m})]}),r.jsxs("div",{className:"flex items-center gap-3 md:gap-5 shrink-0",children:[r.jsx(km,{moduleLabel:v.module,subModuleLabel:v.subModule}),k&&r.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[r.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:u.yellow,flexShrink:0},"aria-hidden":"true"}),r.jsx("span",{style:{color:u.white,fontFamily:C.regular,fontSize:12,whiteSpace:"nowrap"},children:k})]})]})]}),X&&r.jsxs("nav",{"aria-label":`${m} sections`,className:"flex gap-6 md:gap-8 overflow-x-auto px-4 sm:px-6 md:px-10 pt-2.5",style:{background:u.offWhite,borderBottom:"1px solid rgba(46,46,56,0.1)"},children:[B.length>0&&r.jsx(bp,{label:"Learn",items:B,activeSectionId:U,onSectionClick:g}),B.length>0&&P.length>0&&r.jsx("div",{className:"hidden sm:block w-px self-stretch mb-2.5",style:{background:"rgba(46,46,56,0.12)"},"aria-hidden":"true"}),P.length>0&&r.jsx(bp,{label:"Apply",items:P,activeSectionId:U,onSectionClick:g})]})]})}function km({moduleLabel:i,subModuleLabel:o}){const s=o?`${i}|${o}`:i,[p,c]=z.useState(i),[f,g]=z.useState(o),[x,m]=z.useState(!1),[v,k]=z.useState(!1),b=z.useRef(s),S=z.useRef([]);z.useEffect(()=>()=>S.current.forEach(clearTimeout),[]),z.useEffect(()=>{if(s===b.current)return;b.current=s;const B=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(S.current.forEach(clearTimeout),S.current=[],B){c(i),g(o),m(!1),k(!1);return}k(!0),S.current.push(setTimeout(()=>{c(i),g(o),k(!1),m(!0),S.current.push(setTimeout(()=>m(!1),200))},100))},[s,i,o]);const I={borderRadius:12,padding:"6px 12px",fontSize:12,whiteSpace:"nowrap",lineHeight:1.2},_=f?`${p}, ${f}`:p;return r.jsxs("div",{role:"status","aria-live":"polite","aria-atomic":"true","aria-label":_,className:"flex items-center shrink-0",style:{gap:6,transform:x?"scale(1.03)":"scale(1)",opacity:v?.4:1,transition:"transform 200ms ease, opacity 100ms ease",transformOrigin:"right center"},children:[r.jsx("span",{style:{...I,background:f?"rgba(255,255,255,0.08)":u.yellow,border:f?`1px solid ${u.borderOnDark}`:"none",color:f?u.gray02:u.confidentBlack,fontFamily:f?C.regular:C.bold},children:p}),f&&r.jsxs(r.Fragment,{children:[r.jsx("span",{"aria-hidden":"true",style:{color:u.gray01,fontSize:11,fontFamily:C.regular,userSelect:"none"},children:"›"}),r.jsx("span",{style:{...I,background:u.yellow,color:u.confidentBlack,fontFamily:C.bold,boxShadow:"0 0 0 1px rgba(255,230,0,0.35)"},children:f})]})]})}function Cm(){return r.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",border:`1.5px solid ${u.yellow}`,color:u.yellow,flexShrink:0,boxSizing:"border-box"},"aria-hidden":"true",children:r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",flexShrink:0},children:r.jsx("path",{d:"M7.5 2.5L4 6l3.5 3.5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})}function vp(){return r.jsx("span",{style:{color:u.gray01,fontSize:14,flexShrink:0},"aria-hidden":"true",children:"›"})}function yp({label:i,isCurrent:o,order:s,onClick:p}){return r.jsxs("button",{role:"menuitem","aria-current":o?"page":void 0,onClick:p,style:{width:"100%",display:"flex",alignItems:"center",gap:10,background:o?"rgba(255,230,0,0.1)":"none",border:"none",borderRadius:6,padding:"10px 10px",cursor:o?"default":"pointer",textAlign:"left",fontFamily:o?C.bold:C.regular,fontSize:13,color:o?u.yellow:u.white},onMouseEnter:c=>{o||(c.currentTarget.style.background="rgba(255,255,255,0.08)")},onMouseLeave:c=>{o||(c.currentTarget.style.background="none")},onFocus:fa,onBlur:ha,children:[s!==null&&r.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:18,height:18,borderRadius:"50%",fontSize:11,fontFamily:C.bold,background:o?u.yellow:"rgba(255,255,255,0.12)",color:o?u.offBlack:"rgba(255,255,255,0.7)",flexShrink:0},"aria-hidden":"true",children:s}),i]})}function bp({label:i,items:o,activeSectionId:s,onSectionClick:p}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flexShrink:0},children:[r.jsx("span",{style:{fontFamily:C.bold,fontSize:10,letterSpacing:"0.06em",textTransform:"uppercase",color:u.gray01},children:i}),r.jsx("div",{style:{display:"flex",gap:20},children:o.map(c=>{const f=c.id===s,g={display:"flex",flexDirection:"column",alignItems:"center",gap:8,paddingBottom:10,background:"none",border:"none",color:f?u.offBlack:u.gray01,fontFamily:f?C.bold:C.regular,fontSize:14,whiteSpace:"nowrap",textDecoration:"none",cursor:"pointer",borderBottom:f?`3px solid ${u.yellow}`:"3px solid transparent",transition:"color 0.15s, border-color 0.15s"};return p?r.jsx("button",{onClick:()=>p(c.id),style:g,onFocus:fa,onBlur:ha,children:c.label},c.id):r.jsx("a",{href:`#${c.id}`,"aria-current":f?"location":void 0,style:g,onFocus:fa,onBlur:ha,children:c.label},c.id)})})]})}function jm(i){const[o,s]=z.useState(i[0]??null);return z.useEffect(()=>{if(i.length===0)return;const p=i.map(f=>document.getElementById(f)).filter(f=>f!==null);if(p.length===0)return;const c=new IntersectionObserver(f=>{const g=f.filter(x=>x.isIntersecting);if(g.length>0){const x=g.reduce((m,v)=>m.boundingClientRect.top<v.boundingClientRect.top?m:v);s(x.target.id)}},{rootMargin:`-${jt}px 0px -60% 0px`,threshold:0});return p.forEach(f=>c.observe(f)),()=>c.disconnect()},[i.join(",")]),o}const Ys={p18f7f580:"M12.6667 7.33333H3.33333C2.59695 7.33333 2 7.93029 2 8.66667V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66667C14 7.93029 13.403 7.33333 12.6667 7.33333Z",p3c2c1c00:"M4 7.3336C5.8411 7.3336 7.3336 5.8411 7.3336 4C7.3336 2.1589 5.8411 0.6664 4 0.6664C2.1589 0.6664 0.6664 2.1589 0.6664 4C0.6664 5.8411 2.1589 7.3336 4 7.3336Z",p4317f80:"M4.66667 7.33333V4.66667C4.66667 3.78261 5.01786 2.93477 5.64298 2.30964C6.2681 1.68452 7.11594 1.33333 8 1.33333C8.88405 1.33333 9.7319 1.68452 10.357 2.30964C10.9821 2.93477 11.3333 3.78261 11.3333 4.66667V7.33333"},Em="/assets/f5e2e2f2ea31280810b6cbd46b1af92fee8b344c-DR_OQro3.png",cf="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2091.85%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22clip0_1_2%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M91.85%200H0V100H91.85V0Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",uf="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_facebook.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1096)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M29.5615%2013.5H14.4385C13.92%2013.5%2013.5%2013.92%2013.5%2014.4385V29.5622C13.5%2030.08%2013.92%2030.5%2014.4385%2030.5H22.5808V23.9167H20.3652V21.3512H22.5808V19.4592C22.5808%2017.2634%2023.9217%2016.0677%2025.881%2016.0677C26.8195%2016.0677%2027.6256%2016.1378%2027.8607%2016.169V18.464L26.5022%2018.4647C25.4368%2018.4647%2025.2307%2018.9712%2025.2307%2019.7135V21.3519H27.7715L27.4407%2023.9175H25.2307V30.5H29.5629C30.08%2030.5%2030.5%2030.08%2030.5%2029.5615V14.4385C30.5%2013.92%2030.08%2013.5%2029.5615%2013.5Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1096%22%3E%0A%3Crect%20width%3D%2217%22%20height%3D%2217%22%20fill%3D%22white%22%20transform%3D%22translate(13.5%2013.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",pf="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_twitter.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M23.7821%2020.4474L30.7554%2012.3415H29.1029L23.048%2019.3797L18.212%2012.3415H12.6342L19.9472%2022.9845L12.6342%2031.4848H14.2867L20.6809%2024.0522L25.7881%2031.4848H31.3659L23.7821%2020.4474ZM21.5187%2023.0783L20.7777%2022.0185L14.8821%2013.5855H17.4203L22.1781%2020.3912L22.9191%2021.451L29.1037%2030.2974H26.5655L21.5187%2023.0783Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",ff="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_linkedin.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1091)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M17.1036%2016.0713C17.1036%2017.0345%2016.3293%2017.815%2015.3738%2017.815C14.4182%2017.815%2013.644%2017.0345%2013.644%2016.0713C13.644%2015.1087%2014.4182%2014.3275%2015.3738%2014.3275C16.3293%2014.3275%2017.1036%2015.1087%2017.1036%2016.0713ZM17.1175%2019.21H13.63V30.37H17.1175V19.21ZM22.6849%2019.21H19.2198V30.37H22.6856V24.5117C22.6856%2021.2544%2026.8909%2020.9879%2026.8909%2024.5117V30.37H30.37V23.3036C30.37%2017.8073%2024.1469%2018.0075%2022.6849%2020.7131V19.21Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1091%22%3E%0A%3Crect%20width%3D%2216.74%22%20height%3D%2216.74%22%20fill%3D%22white%22%20transform%3D%22translate(13.63%2013.63)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",hf="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_youtube.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1081)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cg%20id%3D%22Group_2%22%3E%0A%3Cg%20id%3D%22Group_3%22%3E%0A%3Cg%20id%3D%22Group_4%22%3E%0A%3Cg%20id%3D%22Group_5%22%3E%0A%3Cpath%20id%3D%22Vector%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M32.5402%2016.8423C33%2018.5133%2033%2022%2033%2022C33%2022%2033%2025.4865%2032.5402%2027.1578C32.2872%2028.0797%2031.5419%2028.8058%2030.5951%2029.0523C28.8796%2029.5%2022%2029.5%2022%2029.5C22%2029.5%2015.1204%2029.5%2013.4047%2029.0523C12.4581%2028.8058%2011.7126%2028.0797%2011.4596%2027.1578C11%2025.4865%2011%2022%2011%2022C11%2022%2011%2018.5133%2011.4596%2016.8423C11.7126%2015.9203%2012.4581%2015.1942%2013.4047%2014.9478C15.1204%2014.5%2022%2014.5%2022%2014.5C22%2014.5%2028.8796%2014.5%2030.5951%2014.9478C31.5419%2015.1942%2032.2872%2015.9203%2032.5402%2016.8423ZM19.75%2025.1656L25.5%2022.0001L19.75%2018.8344V25.1656Z%22%20fill%3D%22var(--fill-0%2C%20%232E2E38)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1081%22%3E%0A%3Crect%20width%3D%2222%22%20height%3D%2215%22%20fill%3D%22white%22%20transform%3D%22translate(11%2014.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",Nt={ringGrayHalf:"/pipeline/v2/ring-gray-half.svg",ringWhiteHalf:"/pipeline/v2/ring-white-half.svg",copilot:"/pipeline/copilot-icon.svg",iconChat:"/pipeline/v2/icon-chat.svg",iconRag:"/pipeline/v2/icon-rag.svg",iconHuman:"/pipeline/v2/icon-human.svg",iconModel:"/pipeline/v2/icon-model.svg",info:"/pipeline/info.svg",word:"/pipeline/word.svg",excel:"/pipeline/excel.svg",teams:"/pipeline/teams.svg",powerpoint:"/pipeline/powerpoint.svg",sharepoint:"/pipeline/sharepoint.svg",outlook:"/pipeline/outlook.svg"},wp=1200,kp=820,Sm=[{title:"Chat",left:414,top:86,composedIcon:Nt.iconChat,bakedIcon:null},{title:"RAG",left:258,top:235,composedIcon:null,bakedIcon:Nt.iconRag},{title:"Human in the Loop",left:251,top:406,composedIcon:Nt.iconHuman,bakedIcon:null},{title:"Model",left:364,top:589,composedIcon:null,bakedIcon:Nt.iconModel}];function Am({title:i,left:o,top:s,composedIcon:p,bakedIcon:c}){return r.jsxs("div",{className:"absolute flex w-[100px] flex-col items-center gap-3",style:{left:o,top:s},children:[c?r.jsx("img",{alt:"",className:"size-[67px] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.24)]",src:c}):r.jsx("div",{className:"flex size-[67px] items-center justify-center rounded-[10px] bg-[#ffe600] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.24)]",children:r.jsx("img",{alt:"",className:"size-[42px]",src:p??void 0})}),r.jsx("p",{className:"whitespace-nowrap text-center font-['EYInterstate:Bold',sans-serif] text-base leading-6 text-white",children:i})]})}function Fm(){return r.jsxs("svg",{className:"pointer-events-none absolute inset-0",width:384,height:384,viewBox:"0 0 384 384",children:[r.jsxs("defs",{children:[r.jsx("path",{id:"ring-label-left",d:"M 138 43.5 A 158 158 0 0 0 138 340.5",fill:"none"}),r.jsx("path",{id:"ring-label-right",d:"M 246 43.5 A 158 158 0 0 1 246 340.5",fill:"none"})]}),r.jsx("text",{fontFamily:"EYInterstate:Bold, sans-serif",fontWeight:700,fontSize:13.5,letterSpacing:"0.5",fill:"#1a1a24",children:r.jsx("textPath",{href:"#ring-label-left",startOffset:"50%",textAnchor:"middle",children:"Core Processing Pipeline"})}),r.jsx("text",{fontFamily:"EYInterstate:Bold, sans-serif",fontWeight:700,fontSize:13.5,letterSpacing:"0.5",fill:"#1a1a24",children:r.jsx("textPath",{href:"#ring-label-right",startOffset:"50%",textAnchor:"middle",children:"MS 365 Copilot"})})]})}function zm(){return r.jsxs("div",{className:"absolute left-[409px] top-[224px] size-[384px]",children:[r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:r.jsx("div",{className:"-rotate-90 size-[384px]",children:r.jsxs("div",{className:"relative size-[384px]",children:[r.jsx("div",{className:"absolute bottom-1/2 left-0 right-0 top-0",children:r.jsx("img",{alt:"",className:"block size-full max-w-none",src:Nt.ringGrayHalf})}),r.jsx("div",{className:"absolute bottom-0 left-0 right-0 top-1/2",children:r.jsx("img",{alt:"",className:"block size-full max-w-none",src:Nt.ringWhiteHalf})})]})})}),r.jsx(Fm,{}),r.jsx("div",{className:"absolute left-[68px] top-[68px] size-[248px] rounded-full bg-[#1a1a24]"}),r.jsx("div",{className:"absolute left-1/2 top-1/2 flex size-[116px] -translate-x-1/2 -translate-y-1/2 items-center justify-center",children:r.jsx("img",{alt:"Microsoft Copilot",className:"block size-full max-w-none",src:Nt.copilot})})]})}function Im(){const i=z.useRef(null),[o,s]=z.useState(1);return z.useEffect(()=>{const p=i.current;if(!p)return;const c=()=>s(p.clientWidth/wp);c();const f=new ResizeObserver(c);return f.observe(p),()=>f.disconnect()},[]),r.jsx("div",{ref:i,className:"relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-2xl",style:{height:kp*o},"data-name":"Infographic - Core Processing Pipeline","data-node-id":"3543:4136",children:r.jsxs("div",{className:"absolute left-0 top-0 origin-top-left bg-[#1a1a24]",style:{width:wp,height:kp,transform:`scale(${o})`},children:[r.jsx(zm,{}),Sm.map(p=>r.jsx(Am,{...p},p.title)),r.jsx("div",{className:"absolute",style:{inset:"12.44% 38.9% 75.54% 53.08%"},children:r.jsx("img",{alt:"Microsoft Word",className:"absolute inset-0 size-full max-w-none",src:Nt.word})}),r.jsx("div",{className:"absolute",style:{inset:"20.34% 27.97% 67.65% 64.02%"},children:r.jsx("img",{alt:"Microsoft Excel",className:"absolute inset-0 size-full max-w-none",src:Nt.excel})}),r.jsx("div",{className:"absolute left-[839px] top-[281.06px] h-[99px] w-[94px] overflow-clip",children:r.jsx("img",{alt:"Microsoft Teams",className:"absolute inset-0 size-full max-w-none",src:Nt.teams})}),r.jsx("div",{className:"absolute",style:{inset:"52.16% 20.91% 36.4% 71.08%"},children:r.jsx("img",{alt:"Microsoft PowerPoint",className:"absolute inset-0 size-full max-w-none",src:Nt.powerpoint})}),r.jsx("div",{className:"absolute left-[768.25px] top-[536.18px] h-[108.176px] w-[96.156px] overflow-clip",children:r.jsx("img",{alt:"Microsoft SharePoint",className:"absolute inset-0 size-full max-w-none",src:Nt.sharepoint})}),r.jsx("div",{className:"absolute left-[643.29px] top-[609.71px] h-[91.349px] w-[96.156px] overflow-clip",children:r.jsx("img",{alt:"Microsoft Outlook",className:"absolute inset-0 size-full max-w-none",src:Nt.outlook})}),r.jsxs("div",{className:"absolute bottom-0 left-0 flex h-12 w-full items-center justify-center gap-2 bg-[#2E2E38] px-8",children:[r.jsx("img",{alt:"",className:"size-4",height:16,src:Nt.info,width:16}),r.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] text-sm leading-[22.4px] text-[#c4c4cd] whitespace-nowrap",children:"EY AI Tax Hub · Core Processing Pipeline · Confidential"})]})]})})}function Lm(){return r.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start justify-center not-italic relative shrink-0 w-full max-w-[800px]","data-name":"Frame",children:[r.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#ffe600] text-[32px] sm:text-[40px] md:text-[48px] md:leading-[56px]",children:"EY.ai Tax Labs"}),r.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] font-normal leading-[26px] md:leading-[28px] relative shrink-0 text-[#C4C4CD] text-[16px] md:text-[18px] w-full",children:"A structured phased engagement designed to empower your tax teams with AI capabilities, from foundational training to advanced workflow integration."})]})}function Tm(){return r.jsx("div",{className:"relative shrink-0 w-full","data-name":"header-section",children:r.jsx("div",{className:"flex flex-row items-center size-full",children:r.jsx("div",{className:"content-stretch flex items-center justify-between pb-[24px] pt-[32px] md:pt-[40px] px-4 sm:px-8 md:px-[64px] relative size-full",children:r.jsx(Lm,{})})})})}function Nm(){return r.jsx("div",{className:"bg-[#1A1A24] relative shrink-0 w-full min-w-0","data-name":"diagram-viewport",children:r.jsx("div",{className:"flex flex-row items-center justify-center size-full min-w-0",children:r.jsx("div",{className:"content-stretch flex items-center justify-center px-4 sm:px-8 md:px-[48px] py-6 md:py-[40px] relative size-full min-w-0 w-full",children:r.jsx(Im,{})})})})}function Mm(){return r.jsxs("div",{className:"bg-[#1A1A24] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full","data-name":"ai-ms365-schematic",children:[r.jsx(Tm,{}),r.jsx(Nm,{})]})}function Rm(){return r.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2e2e38] w-full","data-name":"Frame",children:[r.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[24px] sm:text-[28px] md:text-[32px] md:leading-[40px]",children:"Phased Approach"}),r.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[24px] relative shrink-0 text-[15px] md:text-[16px] w-full",children:"A progressive journey from understanding to application to adoption, tailored for your organization's specific tax needs."})]})}function Bm(){return r.jsxs("div",{className:"bg-[#F6F6FA] content-stretch flex items-start px-[16px] sm:px-[20px] py-[12px] relative rounded-[4px] shrink-0 max-w-full","data-name":"Frame",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-0 pointer-events-none rounded-[4px]"}),r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2e2e38] text-[13px] sm:text-[14px]",children:"5-6 Weeks | ~10 Participants | M365 Copilot Licensed"})]})}function Dm(){return r.jsxs("div",{className:"content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full","data-name":"Frame",children:[r.jsx(Rm,{}),r.jsx(Bm,{})]})}function Pm(){return r.jsx("div",{className:"bg-[#c4c4cd] relative shrink-0 w-full",children:r.jsx("div",{className:"content-stretch flex flex-col items-start px-4 sm:px-8 md:px-[64px] py-[24px] relative size-full",children:r.jsx(Dm,{})})})}function Hm(){return r.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"arrow-right",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:r.jsx("g",{id:"arrow-right",children:r.jsx("path",{d:pa.p3bfa7a00,id:"Vector",stroke:"var(--stroke-0, #1A1A24)",strokeLinecap:"round",strokeWidth:"2"})})})})}function _m(){return r.jsxs("div",{className:"bg-[#ffe600] content-stretch flex gap-[12px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0","data-name":"Frame",children:[r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1A1A24] text-[16px] whitespace-nowrap",children:"Download Engagement Overview"}),r.jsx(Hm,{})]})}function Om(){return r.jsx("div",{className:"content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full","data-name":"Frame",children:r.jsx(_m,{})})}const Mo=[{week:"Week 1-2",number:1,title:"Foundational Training Workshops",description:"Covers AI concepts in Tax, Prompt engineering basics, and M365 Copilot across tax use cases.",locked:!1,completed:!1,coverage:["AI concepts in Tax","Prompt engineering (basics)","M365 Copilot across tax use cases"],deliverables:["Copilot Prompt Templates","Adoption & Enablement Toolkit"],outcome:"Workforce well-equipped with basics of AI, Prompt, M365 Copilot"},{week:"Week 3-4",number:2,title:"Brainstorming Use Cases",description:"Identify high-impact tax processes for AI, map current workflows, and classify opportunities between AI agents and prompts.",locked:!0,completed:!1,coverage:["Identify 5–7 tax processes for AI","Use cases across current tax workflow","Agent vs Prompt classification"],deliverables:["AI first process maps for 5-7 tax use cases","Recommendation note for Prompt vs M365 Agent"],outcome:"AI first process maps with clarity on agents vs prompts"},{week:"Week 5-6",number:3,title:"AI Agents & Prompts",description:"Advanced, hands-on training in prompt engineering and M365 Copilot agent design for the use cases identified in Phase 2.",locked:!0,completed:!1,coverage:["Advanced prompt engineering (hands-on)","M365 Copilot Agent design (hands-on)","Guided Prompt Library Development"],deliverables:["Sample Prompt Templates","Instructions for M365 Agents"],outcome:"Power users capable of building no-code agents independently"},{week:"Week 6",number:4,title:"Closure & AI Reinforcement",description:"Assess AI readiness, review adoption through Viva Insights, and establish governance guidance to close out the engagement responsibly.",locked:!0,completed:!1,coverage:["AI Readiness Assessment","Viva Insights Dashboard","AI governance guidance"],deliverables:["Governance Playbook","Copilot Monitoring Guidance"],outcome:"Real-time visibility into AI adoption, aligned with responsible AI"}];function Cp(){return r.jsx("div",{className:"relative shrink-0 size-[8px]",children:r.jsxs("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 8 8",children:[r.jsx("g",{clipPath:"url(#clip0_card_bullet)",children:r.jsx("path",{d:Ys.p3c2c1c00,stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeWidth:"2"})}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_card_bullet",children:r.jsx("rect",{fill:"white",height:"8",width:"8"})})})]})})}function Wm(){return r.jsx("div",{className:"relative shrink-0 size-[16px]",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:r.jsxs("g",{children:[r.jsx("path",{d:Ys.p18f7f580,stroke:"var(--stroke-0, #747480)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"}),r.jsx("path",{d:Ys.p4317f80,stroke:"var(--stroke-0, #747480)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"})]})})})}function $m(){return r.jsx("div",{className:"relative shrink-0 size-[16px]",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:r.jsx("path",{d:"M13.5 4L6 11.5L2.5 8",stroke:"var(--stroke-0, #FFFFFF)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"})})})}function Ro({phase:i,onProceed:o}){return r.jsxs("div",{className:"bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-0 pointer-events-none rounded-[8px]"}),r.jsxs("div",{className:"content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full",children:[r.jsxs("div",{className:"content-stretch flex items-center justify-between relative shrink-0 w-full min-w-0",children:[r.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]",children:r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1A1A24] text-[20px] whitespace-nowrap",children:i.number})}),r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:i.week})]}),r.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full",children:[r.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[24px]",children:i.title}),r.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#747480] text-[14px] w-[min-content]",children:i.description})]}),r.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full",children:[r.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Coverage"}),r.jsx("div",{className:"content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full",children:i.coverage.map(s=>r.jsxs("div",{className:"content-stretch flex gap-[8px] items-center relative shrink-0",children:[r.jsx(Cp,{}),r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative min-w-0 text-[#2e2e38] text-[14px]",children:s})]},s))})]}),r.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Deliverables"}),r.jsx("div",{className:"content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full",children:i.deliverables.map(s=>r.jsxs("div",{className:"content-stretch flex gap-[8px] items-center relative shrink-0",children:[r.jsx(Cp,{}),r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative min-w-0 text-[#2e2e38] text-[14px]",children:s})]},s))})]}),r.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Outcome"}),r.jsx("div",{className:"bg-[#FFFBE0] border border-[#FFE600] rounded-[6px] px-[14px] py-[10px] relative shrink-0 w-full",children:r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative text-[#2e2e38] text-[13px]",children:i.outcome})})]})]}),i.completed?r.jsxs("div",{className:"bg-[#00C864] content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0",children:[r.jsx($m,{}),r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-white text-[16px] whitespace-nowrap",children:"Completed"})]}):i.locked?r.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[r.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0",children:[r.jsx(Wm,{}),r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[16px] whitespace-nowrap",children:"This journey is locked"})]}),r.jsxs("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[12px]",children:["Complete Phase ",i.number-1," to unlock this journey"]})]}):r.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer",onClick:o,children:r.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2E2E38] text-[16px] whitespace-nowrap",children:"Click here to Proceed"})})]})]})}function Vm({onProceed:i}){return r.jsx("div",{className:"relative shrink-0 w-full min-w-0",children:r.jsx("div",{className:"content-stretch flex flex-col gap-[24px] items-stretch px-4 sm:px-8 md:px-[64px] relative size-full",children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-[24px] relative shrink-0 w-full",children:[r.jsx(Ro,{phase:Mo[0],onProceed:i}),r.jsx(Ro,{phase:Mo[1]}),r.jsx(Ro,{phase:Mo[2]}),r.jsx(Ro,{phase:Mo[3]})]})})})}function Um(){return r.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function Ym(){return r.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-[40px] md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:r.jsx(Um,{})})}function Gm(){return r.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${cf}")`},"data-name":"Group",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:r.jsxs("g",{id:"Group",children:[r.jsx("path",{d:pa.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),r.jsx("path",{d:pa.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function qm(){return r.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:r.jsx(Gm,{})})}function Zm(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:r.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:r.jsx(qm,{})})})}function Km(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:r.jsx(Zm,{})})}function Qm(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:r.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function Xm(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:r.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function Jm(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:r.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function ex(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:r.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function tx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:r.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function nx(){return r.jsxs("div",{className:"content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0 w-full","data-name":"List",children:[r.jsx(Qm,{}),r.jsx(Xm,{}),r.jsx(Jm,{}),r.jsx(ex,{}),r.jsx(tx,{})]})}function rx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:r.jsx(nx,{})})}function ix(){return r.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[r.jsx(Km,{}),r.jsx(rx,{})]})}function ax(){return r.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:r.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function ox(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${uf}")`},"data-name":"Background"})})}function lx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(ox,{})]})})}function sx(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${pf}")`},"data-name":"Background"})})}function dx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(sx,{})]})})}function cx(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${ff}")`},"data-name":"Background"})})}function ux(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(cx,{})]})})}function px(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${hf}")`},"data-name":"Background"})})}function fx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(px,{})]})})}function hx(){return r.jsxs("div",{className:"content-center flex flex-wrap gap-[0px_10px] items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[r.jsx(lx,{}),r.jsx(dx,{}),r.jsx(ux,{}),r.jsx(fx,{})]})}function gx(){return r.jsxs("div",{className:"content-stretch flex flex-col sm:flex-row sm:items-center gap-4 relative shrink-0 w-full min-w-0",children:[r.jsx(ax,{}),r.jsx(hx,{})]})}function mx(){return r.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Container",children:r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-0 sm:px-[8px] relative w-full",children:r.jsx(gx,{})})})}function xx(){return r.jsxs("div",{className:"content-stretch flex flex-col gap-8 md:gap-[36px] items-stretch relative shrink-0 w-full min-w-0",children:[r.jsx(ix,{}),r.jsx(mx,{})]})}function vx(){return r.jsx("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:r.jsx(xx,{})})}function yx(){return r.jsx("div",{className:"absolute h-[1200px] left-0 opacity-8 top-0 w-full pointer-events-none","data-name":"Background Motif",children:r.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Em})})}function bx(){return r.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0",children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[r.jsx("p",{style:{fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:11,letterSpacing:"0.05em",textTransform:"uppercase",color:"#B89B00",margin:0},children:"Phase 1 of 4"}),r.jsx("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[0,1,2,3].map(i=>r.jsx("div",{style:{width:i===0?20:8,height:8,borderRadius:999,background:i===0?"#2e2e38":"#c4c4cd",transition:"width 0.2s"}},i))})]}),r.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#2e2e38] text-[28px] sm:text-[36px] md:text-[48px] md:leading-[56px] w-full max-w-full",children:"Phase 1 — Foundational Training"}),r.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] font-normal leading-[26px] md:leading-[28px] relative shrink-0 text-[#747480] text-[16px] md:text-[18px] w-full max-w-[800px]",children:"Select a module below to begin your foundational journey into AI concepts, prompting, and M365 Copilot capabilities."})]})}function Hs({onNavigate:i,icon:o,activeIcon:s,title:p,description:c,estimatedTime:f}){const[g,x]=z.useState(!1),[m,v]=z.useState(!1),k=()=>{g?i==null||i():x(!0)};return g?r.jsxs("div",{className:"w-full min-w-0 relative rounded-[8px]",style:{background:"#FFFFFF",border:m?"1.5px solid #2e2e38":"1.5px solid #ffe600",boxShadow:m?"0 8px 28px rgba(0,0,0,0.09)":"0 4px 16px rgba(255,230,0,0.2)",cursor:"pointer",transition:"border 0.15s, box-shadow 0.15s, transform 0.15s",transform:m?"translateY(-2px)":"none"},onClick:k,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),role:"button",tabIndex:0,onKeyDown:b=>(b.key==="Enter"||b.key===" ")&&k(),"aria-label":`Begin ${p}`,children:[r.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,width:m?6:4,background:"#ffe600",borderRadius:"8px 0 0 8px",transition:"width 0.1s"}}),r.jsx("div",{style:{position:"absolute",top:12,right:12,background:"#ffe600",color:"#1a1a24",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:20,fontFamily:"'EYInterstate:Bold',sans-serif",letterSpacing:"0.05em"},children:"✓ UNLOCKED"}),r.jsxs("div",{className:"content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full",children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:24,background:"#ffe600",flexShrink:0},children:s??o}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,flex:1},children:r.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold text-[#2e2e38] text-[22px]",style:{lineHeight:"1.2",margin:0},children:p})}),r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%"},children:r.jsx("div",{style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:6,background:m?"#2e2e38":"#ffe600",color:m?"#ffffff":"#1A1A24",padding:"8px 16px",borderRadius:4,fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:13,transition:"background 0.15s ease-out, color 0.15s ease-out"},children:"Begin →"})})]})]}):r.jsx("div",{className:"w-full min-w-0 relative rounded-[8px]",style:{background:"#F6F6FA",border:"1px solid #F6F6FA",cursor:"pointer",transition:"box-shadow 0.15s",boxShadow:m?"0 4px 14px rgba(0,0,0,0.08)":"none"},onClick:k,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),role:"button",tabIndex:0,onKeyDown:b=>(b.key==="Enter"||b.key===" ")&&k(),"aria-label":`Unlock ${p}`,children:r.jsxs("div",{className:"content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full",children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:24,background:"#F6F6FA",flexShrink:0,opacity:.6},children:o}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,flex:1},children:r.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold text-[22px]",style:{lineHeight:"1.2",margin:0,color:"#c4c4cd"},children:p})}),r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%"},children:r.jsxs("div",{style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:6,background:m?"#ffe600":"#F6F6FA",color:m?"#1a1a24":"#c4c4cd",padding:"8px 16px",borderRadius:4,fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:13,transition:"background 0.2s, color 0.2s"},children:[r.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[r.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),r.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),m?"Click to Unlock":"Locked"]})})]})})}function wx({onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s}){return r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative shrink-0 w-full min-w-0",children:[r.jsx(Hs,{onNavigate:i,icon:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}),r.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"})]}),activeIcon:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}),r.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"})]}),title:"Foundational Concepts of AI",description:"Understanding AI fundamentals and their application in tax workflows.",estimatedTime:"~45 min"}),r.jsx(Hs,{onNavigate:o,icon:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),activeIcon:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),title:"AI Tax Prompting",description:"Core principles of effective prompt engineering for tax professionals.",estimatedTime:"~30 min"}),r.jsx(Hs,{onNavigate:s,icon:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]}),activeIcon:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]}),title:"M365 Copilot Dashboard",description:"Hands-on exploration of Microsoft 365 Copilot capabilities across tax use cases.",estimatedTime:"~60 min"})]})}function kx({onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s}){return r.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Content Area",children:r.jsxs("div",{className:"content-stretch flex flex-col gap-[48px] items-stretch md:items-start px-6 md:px-[64px] py-12 md:py-[80px] relative size-full max-w-full",children:[r.jsx(bx,{}),r.jsx(wx,{onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s})]})})}function Cx(){return r.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function jx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-10 md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:r.jsx(Cx,{})})}function Ex(){return r.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${cf}")`},"data-name":"Group",children:r.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:r.jsxs("g",{id:"Group",children:[r.jsx("path",{d:pa.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),r.jsx("path",{d:pa.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function Sx(){return r.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:r.jsx(Ex,{})})}function Ax(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:r.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:r.jsx(Sx,{})})})}function Fx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:r.jsx(Ax,{})})}function zx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:r.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function Ix(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:r.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function Lx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:r.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function Tx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:r.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function Nx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:r.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[r.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),r.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:r.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function Mx(){return r.jsxs("div",{className:"content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0 w-full","data-name":"List",children:[r.jsx(zx,{}),r.jsx(Ix,{}),r.jsx(Lx,{}),r.jsx(Tx,{}),r.jsx(Nx,{})]})}function Rx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:r.jsx(Mx,{})})}function Bx(){return r.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[r.jsx(Fx,{}),r.jsx(Rx,{})]})}function Dx(){return r.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:r.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function Px(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${uf}")`},"data-name":"Background"})})}function Hx(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(Px,{})]})})}function _x(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${pf}")`},"data-name":"Background"})})}function Ox(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(_x,{})]})})}function Wx(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${ff}")`},"data-name":"Background"})})}function $x(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(Wx,{})]})})}function Vx(){return r.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:r.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${hf}")`},"data-name":"Background"})})}function Ux(){return r.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:r.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[r.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:r.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),r.jsx(Vx,{})]})})}function Yx(){return r.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[r.jsx(Hx,{}),r.jsx(Ox,{}),r.jsx($x,{}),r.jsx(Ux,{})]})}function Gx(){return r.jsxs("div",{className:"content-stretch flex items-start relative shrink-0 w-full",children:[r.jsx(Dx,{}),r.jsx(Yx,{})]})}function qx(){return r.jsx("div",{className:"relative shrink-0 w-full","data-name":"Container",children:r.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-[8px] relative size-full",children:r.jsx(Gx,{})})})}function Zx(){return r.jsxs("div",{className:"content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full",children:[r.jsx(Bx,{}),r.jsx(qx,{})]})}function Kx(){return r.jsx("div",{className:"content-stretch flex flex-col items-center relative shrink-0 w-full",children:r.jsx(Zx,{})})}function Qx({onProceed:i}){return r.jsxs("div",{className:"bg-white content-stretch flex flex-col gap-[48px] items-start pb-[80px] relative shrink-0 w-full",children:[r.jsx(Pm,{}),r.jsx(Vm,{onProceed:i}),r.jsx(Om,{})]})}function Xx({onNavigateToPhase1:i}={}){const o=Nn();return r.jsxs("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full max-w-full min-w-0 overflow-x-hidden","data-name":"EY.ai Tax Labs - Phased Engagement",children:[r.jsx("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full sticky top-0 z-[300]","data-name":"Top Navigation",children:r.jsx(fi,{variant:"hub",activeSection:"tax-labs",onNavigate:o,skipLinkTarget:"#phased-content"})}),r.jsxs("div",{id:"phased-content",className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:[r.jsx(Mm,{}),r.jsx(Qx,{onProceed:i})]}),r.jsxs("div",{className:"bg-white content-stretch flex flex-col items-stretch justify-center px-4 sm:px-8 md:px-[64px] py-10 md:py-14 relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:[r.jsx(Ym,{}),r.jsx(vx,{})]})]})}function Jx({onNavigateToFoundational:i,onNavigateToAiTaxPrompting:o,onNavigateToCopilotHub:s,onNavigate:p}={}){const c=Nn(),f=p??(g=>c(g));return r.jsxs("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full max-w-full min-w-0 overflow-x-hidden","data-name":"EY.ai Tax Labs - Phase 1",children:[r.jsx(yx,{}),r.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full sticky top-0 z-[300]","data-name":"Top Navigation",children:[r.jsx(fi,{variant:"learning",onNavigate:f,skipLinkTarget:"#phase1-content"}),r.jsx(Yo,{mode:"phase-overview",onNavigate:f,onBack:()=>f("/phased")})]}),r.jsx("div",{id:"phase1-content",className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0 overflow-x-hidden",children:r.jsx(kx,{onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s})}),r.jsx("div",{className:"bg-white relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:r.jsx("div",{className:"flex flex-col items-stretch justify-center w-full",children:r.jsxs("div",{className:"content-stretch flex flex-col items-stretch justify-center px-4 sm:px-6 md:px-[64px] py-10 md:py-14 relative w-full",children:[r.jsx(jx,{}),r.jsx(Kx,{})]})})})]})}const jp=`
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
  --ey-on-dark: #FFFFFF;
  --ey-on-dark-72: rgba(255, 255, 255, 0.72);
  --ey-on-dark-55: rgba(255, 255, 255, 0.55);
  --ey-surface-on-dark: rgba(255, 255, 255, 0.06);
  --ey-border-on-dark: rgba(255, 255, 255, 0.12);
  --ey-yellow-alpha-10: rgba(255, 230, 0, 0.10);
  --ey-bg-card: #2E2E38;

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

/* ===== HERO — dark spectrum (Frame 7), matches Copilot Hub / Prompting ─── */
.hero {
  position: relative;
  text-align: left;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--confident-black);
  background-image: url('/spectrum/hero-frame-7.png');
  background-size: cover;
  background-position: 70% center;
  background-repeat: no-repeat;
  border-bottom: none;
  padding: 72px 64px 80px;
}
/* Full-bleed spectrum sits on .hero; keep layer for parity with markup */
.hero-bg {
  display: none;
}
/* Soft left scrim so white type stays readable over the bloom */
.hero-overlay {
  display: block;
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(26,26,36,0.94) 0%,
    rgba(26,26,36,0.78) 42%,
    rgba(26,26,36,0.35) 70%,
    rgba(26,26,36,0.18) 100%
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
  color: var(--ey-yellow);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 26px;
}
.hero-title {
  font-size: 36px; font-weight: 700;
  font-family: 'EYInterstate:Bold', Arial, sans-serif;
  color: #FFFFFF; line-height: 44px;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}
/* Yellow highlight words — accent only, not body copy */
.hero-title .hl { color: var(--ey-yellow); box-shadow: none; }
.hero-subtitle {
  font-size: 16px; font-weight: 400;
  color: rgba(255,255,255,0.82); line-height: 24px;
  max-width: 560px; margin-bottom: 14px;
}
.hero-meta {
  font-size: 14px; color: var(--gray-02);
  margin-bottom: 26px;
}
.hero-cta { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
/* Dark-hero CTAs — primary yellow for contrast; secondary white outline */
.hero-cta button, .btn-primary, .btn-secondary {
  padding: 12px 28px; border: none; border-radius: 0;
  font-size: 14px; font-weight: 700; cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  letter-spacing: -0.02em; height: 48px;
  font-family: 'EYInterstate:Bold', Arial, sans-serif;
}
/* Light-section defaults (Confident Black primary — never yellow fill) */
.btn-primary { background: var(--confident-black); color: var(--white); border: 1px solid var(--confident-black); }
.btn-primary:hover { background: var(--ey-dark); border-color: var(--ey-dark); }
.btn-secondary { background: transparent; color: var(--ey-dark); border: 1.5px solid var(--ey-dark) !important; }
.btn-secondary:hover { border-color: var(--confident-black) !important; background: var(--off-white); }
/* Dark-hero overrides for contrast on spectrum */
.hero .btn-primary { background: var(--ey-yellow); color: var(--confident-black); border: 1px solid var(--ey-yellow); }
.hero .btn-primary:hover { background: #FFE84D; border-color: #FFE84D; }
.hero .btn-secondary { background: transparent; color: #FFFFFF; border: 1.5px solid rgba(255,255,255,0.65) !important; }
.hero .btn-secondary:hover { border-color: #FFFFFF !important; background: rgba(255,255,255,0.08); }
.hero-media {
  position: relative;
  width: 100%; max-width: 480px; margin-left: auto;
  aspect-ratio: 16/9;
  background: rgba(46,46,56,0.55);
  border: 1px solid rgba(255,255,255,0.12);
  overflow: hidden;
  backdrop-filter: blur(8px);
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
  .hero { padding: 48px 24px 56px; background-position: center top; }
  .hero-inner { grid-template-columns: 1fr; gap: 32px; }
  .hero-media { max-width: 100%; margin: 0; }
  .hero-title { font-size: 28px; line-height: 36px; }
  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(26,26,36,0.94) 0%,
      rgba(26,26,36,0.78) 45%,
      rgba(26,26,36,0.45) 100%
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
.rise-section .rise-title {
  font-size: 32px; font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 12px;
  letter-spacing: -0.5px;
  width: 100%;
  text-align: center;
}
.rise-section .rise-title .hl { color: var(--ey-yellow); }
.rise-section .rise-sub {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-02);
  text-align: center;
}
.rise-section .rise-hint {
  margin: 0 0 40px;
  font-size: 14px;
  font-style: italic;
  color: var(--gray-01);
  text-align: center;
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
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
  display: flex; flex-direction: column;
}
.rise-card:hover {
  transform: translateY(-3px);
  border-color: var(--gray-01);
  box-shadow: 0 8px 24px rgba(46,46,56,0.16);
}
.rise-card:focus-visible { outline: 2px solid var(--eyebrow-gold); outline-offset: 2px; }
.rise-card-top--img {
  position: relative;
  height: 120px;
  padding: 0;
  background: var(--off-white);
  overflow: hidden;
}
.rise-card-top--img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}
/* EY Insight Card signature — yellow corner bracket over the media area */
.rise-card-top--img::after {
  content: '';
  position: absolute;
  left: 14px; right: 14px; top: 14px;
  height: 46px;
  border: 2px solid var(--ey-yellow);
  border-bottom: none;
  pointer-events: none;
}
.rise-card-body { padding: 18px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.rise-card-meta {
  display: flex; justify-content: space-between; align-items: baseline;
  font-size: 11px; margin: 0;
}
.rise-card-meta .source {
  font-weight: 700; color: var(--eyebrow-gold);
  text-transform: uppercase; letter-spacing: 0.06em; font-size: 12px;
}
.rise-card-body p {
  font-size: 15px; line-height: 1.35;
  color: var(--ey-dark); font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
  flex: 1;
}
.rise-card-body .date {
  font-size: 12px;
  color: var(--gray-01);
  margin-top: 4px;
  padding-top: 8px;
  border-top: 1px solid var(--off-white);
}
@media (max-width: 1100px) {
  .rise-section { padding: 56px 24px; }
  .rise-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .rise-grid { grid-template-columns: 1fr; }
  .rise-section .rise-title { font-size: 24px; }
}

/* ===== REALITY CHECK — AI Adoption Gap ===== */
.wrong-section {
  background: var(--off-white);
  border-bottom: 1px solid var(--gray-02);
  padding: 80px;
  text-align: left;
}
.wrong-section .wrong-title {
  font-size: 32px; font-weight: 700;
  color: var(--confident-black);
  margin: 0 0 12px;
  letter-spacing: -0.5px;
  width: 100%;
  text-align: center;
}
.wrong-section .wrong-sub {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-01);
}
.wrong-section .wrong-hint {
  margin: 0 0 40px;
  font-size: 14px;
  font-style: italic;
  color: var(--gray-01);
}
.wrong-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  max-width: none;
}
.wrong-card {
  background: var(--white);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
  display: flex;
  flex-direction: column;
}
.wrong-card:hover {
  transform: translateY(-3px);
  border-color: rgba(239, 68, 68, 0.45);
  box-shadow: 0 8px 24px rgba(46, 46, 56, 0.16);
}
.wrong-card:focus-visible { outline: 2px solid #FF4136; outline-offset: 2px; }
.wrong-card-top {
  position: relative;
  height: 120px;
  padding: 0;
  background: var(--off-white);
  overflow: hidden;
}
.wrong-card-top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}
/* Same EY Insight Card device as .rise-card, in the section's danger red */
.wrong-card-top::after {
  content: '';
  position: absolute;
  left: 14px; right: 14px; top: 14px;
  height: 46px;
  border: 2px solid #FF4136;
  border-bottom: none;
  pointer-events: none;
}
.wrong-card-body {
  padding: 18px;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}
.wrong-card-meta {
  display: flex; justify-content: space-between; align-items: baseline;
  font-size: 11px; margin: 0;
}
.wrong-card-meta .source { font-weight: 700; color: #FF4136; text-transform: uppercase; letter-spacing: 0.06em; font-size: 12px; }
.wrong-card-body p {
  font-size: 15px; line-height: 1.35;
  color: var(--ey-dark); font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
  flex: 1;
}
.wrong-card-body .date {
  font-size: 12px;
  color: var(--muted-foreground);
  margin-top: 4px;
  padding-top: 8px;
  border-top: 1px solid rgba(239, 68, 68, 0.12);
}
@media (max-width: 900px) {
  .wrong-section { padding: 56px 24px; }
  .wrong-grid { grid-template-columns: 1fr; }
  .wrong-section .wrong-title { font-size: 24px; }
}


/* ===== LLM vs AI Agent vs Agentic AI — EY dark-module tokens + sticky compare ===== */
.gva-section {
  /* Bridge to design-kit dark module tokens (overridden from React TOKEN_BRIDGE) */
  --gva-sticky-top: 156px;
  --gva-colhead-h: 84px;
  --gva-page: var(--confident-black);
  --gva-card: var(--ey-dark);
  --gva-border: var(--ey-border-on-dark, rgba(255, 255, 255, 0.12));
  --gva-surface: var(--ey-surface-on-dark, rgba(255, 255, 255, 0.06));
  --gva-text: var(--ey-on-dark, var(--white));
  --gva-text-muted: var(--ey-on-dark-72, var(--gray-02));
  --gva-text-subtle: var(--ey-on-dark-55, var(--gray-01));
  --gva-yellow: var(--ey-yellow);
  --gva-yellow-soft: var(--ey-yellow-alpha-10, rgba(255, 230, 0, 0.10));
  --gva-blue: var(--accent-blue);
  --gva-green: var(--accent-green);
  --gva-purple: var(--accent-purple);
  --gva-radius: 8px;
  --gva-gap: 24px;
  --gva-pad: var(--card-padding, 18px);

  padding: var(--section-padding, 72px 64px) !important;
  text-align: center;
  background: var(--gva-page) !important;
  border-bottom: 1px solid var(--gva-card);
  color: var(--gva-text);
  font-family: 'EYInterstate:Regular', Arial, 'Helvetica Neue', sans-serif;
}
.gva-section .gva-title {
  margin: 0 0 12px;
  font-family: 'EYInterstate:Bold', Arial, 'Helvetica Neue', sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--gva-text) !important;
  text-align: center;
  width: 100%;
}
.gva-section .gva-sub {
  margin: 0 auto 40px;
  max-width: 650px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.01em;
  color: var(--gva-text-muted);
  text-align: center;
}

/* Equation — solid EY card chips, spectrum/yellow text only (no tint washes) */
.gva-equation {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto 12px;
}
.gva-eq-chip {
  border-radius: var(--gva-radius);
  padding: 12px 20px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
  background: var(--gva-card);
  border: 1px solid var(--gva-border);
  color: var(--gva-text);
}
.gva-eq-chip[data-tone="blue"] { color: var(--gva-blue); }
.gva-eq-chip[data-tone="green"] { color: var(--gva-green); }
.gva-eq-chip[data-tone="purple"] { color: var(--gva-purple); }
.gva-eq-chip[data-tone="yellow"] { color: var(--gva-yellow); }
.gva-eq-op { font-size: 24px; font-weight: 300; line-height: 1; color: var(--gva-yellow); padding: 0 2px; }
.gva-eq-op.is-eq { color: var(--gva-text-subtle); }
.gva-eq-caption {
  margin: 0 auto 40px;
  font-size: 12px;
  font-weight: 300;
  color: var(--gva-text-subtle);
  letter-spacing: -0.01em;
}

.gva-compare {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  text-align: left;
}
.gva-colheads {
  position: sticky;
  top: var(--gva-sticky-top);
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--gva-gap);
  margin-bottom: 0;
  padding-bottom: 12px;
  background: var(--gva-page);
}
.gva-colhead {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: var(--gva-pad);
  border-radius: var(--gva-radius) var(--gva-radius) 0 0;
  border-top: 3px solid currentColor;
  border-left: 1px solid var(--gva-border);
  border-right: 1px solid var(--gva-border);
  background: var(--gva-card);
}
.gva-colhead[data-tone="blue"] { color: var(--gva-blue); }
.gva-colhead[data-tone="green"] { color: var(--gva-green); }
.gva-colhead[data-tone="purple"] { color: var(--gva-purple); }
.gva-colhead-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--gva-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--gva-border);
  background: var(--gva-surface);
  color: currentColor;
}
.gva-colhead-kicker {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.gva-colhead-title {
  margin: 0;
  font-family: 'EYInterstate:Bold', Arial, 'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  color: var(--gva-text);
}

.gva-band { margin: 0 0 4px; }
.gva-band-label {
  position: sticky;
  top: calc(var(--gva-sticky-top) + var(--gva-colhead-h));
  z-index: 4;
  margin: 0;
  padding: 10px 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gva-yellow);
  background: var(--gva-page);
  border-bottom: 1px solid var(--gva-border);
}
.gva-band-cells {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--gva-gap);
  align-items: stretch;
}
.gva-cell {
  padding: var(--gva-pad);
  border-left: 1px solid var(--gva-border);
  border-right: 1px solid var(--gva-border);
  background: var(--gva-card);
  min-height: 100%;
  color: var(--gva-text);
}
.gva-band:last-of-type .gva-cell {
  border-bottom: 1px solid var(--gva-border);
  border-radius: 0 0 var(--gva-radius) var(--gva-radius);
}
.gva-cell[data-tone="blue"],
.gva-cell[data-tone="green"],
.gva-cell[data-tone="purple"] {
  background: var(--gva-card);
  border-color: var(--gva-border);
}

.gva-cell-label {
  margin: 0 0 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gva-text-subtle);
}
.gva-check-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.gva-check-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 400;
  color: var(--gva-text-muted);
  line-height: 1.4;
}
.gva-check-list svg { flex-shrink: 0; color: currentColor; }
.gva-cell[data-tone="blue"] .gva-check-list svg { color: var(--gva-blue); }
.gva-cell[data-tone="green"] .gva-check-list svg { color: var(--gva-green); }
.gva-cell[data-tone="purple"] .gva-check-list svg { color: var(--gva-purple); }

.gva-body {
  margin: 0;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: var(--gva-text-muted);
}
.gva-analogy {
  border-left: 3px solid var(--gva-yellow);
  background: var(--gva-yellow-soft);
  border-radius: 0 6px 6px 0;
  padding: 12px 14px;
}
.gva-analogy .gva-cell-label { color: var(--gva-yellow); margin-bottom: 4px; }
.gva-analogy .gva-body { color: var(--gva-text); font-weight: 400; }

.gva-example {
  background: var(--gva-page);
  border: 1px solid var(--gva-border);
  border-radius: var(--gva-radius);
  padding: 14px 16px;
}
.gva-example .gva-cell-label { margin-bottom: 8px; }
.gva-quote {
  margin: 0 0 6px;
  font-size: 13px;
  font-style: italic;
  line-height: 1.55;
  color: var(--gva-text);
}
.gva-example .gva-body { color: var(--gva-text-subtle); }
.gva-example-note {
  margin: 0 0 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gva-text-subtle);
}
.gva-example-quote-plain {
  margin: 0 0 10px;
  padding-left: 8px;
  border-left: 2px solid var(--gva-border);
  font-size: 13px;
  font-style: italic;
  color: var(--gva-text-muted);
}
.gva-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.gva-steps li {
  font-size: 13px;
  color: var(--gva-text-muted);
  line-height: 1.4;
}

.gva-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.gva-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: var(--gva-text-muted);
  line-height: 1.4;
}
.gva-bullets .gva-dash { font-weight: 700; line-height: 1.2; color: var(--gva-text); }
.gva-cell[data-tone="blue"] .gva-dash { color: var(--gva-blue); }
.gva-cell[data-tone="green"] .gva-dash { color: var(--gva-green); }
.gva-cell[data-tone="purple"] .gva-dash { color: var(--gva-purple); }

.gva-cap-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid var(--gva-border);
  background: var(--gva-surface);
  color: var(--gva-text);
}
.gva-cell[data-tone="blue"] .gva-cap-pill { color: var(--gva-blue); border-color: var(--gva-blue); }
.gva-cell[data-tone="green"] .gva-cap-pill { color: var(--gva-green); border-color: var(--gva-green); }
.gva-cell[data-tone="purple"] .gva-cap-pill { color: var(--gva-purple); border-color: var(--gva-purple); }

.gva-summary {
  margin-top: 48px;
  background: var(--gva-card);
  border: 1px solid var(--gva-border);
  border-radius: var(--gva-radius);
  padding: 32px 36px;
}
.gva-summary-title {
  margin: 0 0 24px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gva-yellow);
}
.gva-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 600px;
  margin: 0 auto 32px;
  border: 1px solid var(--gva-border);
  border-radius: var(--gva-radius);
  overflow: hidden;
  background: var(--gva-page);
}
.gva-table-h,
.gva-table-c {
  padding: 12px 16px;
  font-size: 13px;
  border-bottom: 1px solid var(--gva-border);
}
.gva-table-h {
  background: var(--gva-surface);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gva-text-subtle);
}
.gva-table-h:nth-child(2),
.gva-table-c:nth-child(even) { border-left: 1px solid var(--gva-border); }
.gva-table-c { color: var(--gva-text-muted); font-weight: 400; }
.gva-table-c strong { font-weight: 700; color: var(--gva-text); }
.gva-table-c[data-tone="blue"] strong { color: var(--gva-blue); }
.gva-table-c[data-tone="green"] strong { color: var(--gva-green); }
.gva-table-c[data-tone="purple"] strong { color: var(--gva-purple); }
.gva-table > :nth-last-child(-n+2) { border-bottom: none; }

.gva-mantras {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  max-width: 700px;
  margin: 0 auto;
}
.gva-mantra {
  text-align: center;
  padding: var(--gva-pad);
  border-radius: var(--gva-radius);
  border: 1px solid var(--gva-border);
  background: var(--gva-page);
}
.gva-mantra[data-tone="blue"] { border-top: 3px solid var(--gva-blue); }
.gva-mantra[data-tone="green"] { border-top: 3px solid var(--gva-green); }
.gva-mantra[data-tone="purple"] { border-top: 3px solid var(--gva-purple); }
.gva-mantra-kicker {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.gva-mantra[data-tone="blue"] .gva-mantra-kicker { color: var(--gva-blue); }
.gva-mantra[data-tone="green"] .gva-mantra-kicker { color: var(--gva-green); }
.gva-mantra[data-tone="purple"] .gva-mantra-kicker { color: var(--gva-purple); }
.gva-mantra-text {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
  color: var(--gva-text);
}

@media (max-width: 1000px) {
  .gva-section { padding: 56px 24px !important; }
  .gva-colheads,
  .gva-band-label { position: static; }
  .gva-colheads,
  .gva-band-cells,
  .gva-mantras { grid-template-columns: 1fr; gap: 12px; }
  .gva-colhead {
    border-radius: var(--gva-radius);
    border: 1px solid var(--gva-border);
    border-top-width: 3px;
  }
  .gva-band-label {
    padding: 16px 0 8px;
    background: transparent;
    border: none;
    color: var(--gva-yellow);
  }
  .gva-cell {
    border-radius: var(--gva-radius);
    border: 1px solid var(--gva-border);
  }
  .gva-band:last-of-type .gva-cell { border-radius: var(--gva-radius); }
  .gva-equation { gap: 8px; }
  .gva-eq-chip { padding: 10px 14px; font-size: 12px; }
  .gva-summary { padding: 24px 18px; }
  .gva-table { max-width: none; }
}

/* ===== STRATEGIC DIVIDE / Why Fundamentals ===== */
.paths-section {
  background: var(--surface-light);
  border-bottom: 1px solid var(--gray-02);
  padding: 80px 64px 64px;
  text-align: center;
}
.paths-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
}
.paths-section .paths-label {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--eyebrow-gold);
}
.paths-section .paths-title {
  margin: 0;
  max-width: 900px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--ey-dark);
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
.paths-card.bad .paths-card-title { color: #FF4136; }
.paths-card.good .paths-card-title { color: #2e2e38; }
.paths-items { display: flex; flex-direction: column; }
.paths-item {
  display: flex;
  align-items: flex-start;
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
  margin-top: 2px;
}
.paths-item p {
  font-size: 14px; font-weight: 400;
  color: #2e2e38;
  line-height: 1.35;
  margin: 0;
}
.paths-item p em {
  display: block;
  margin-top: 2px;
  font-size: 12px;
  color: #747480;
  font-style: italic;
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
  min-width: 28px;
  height: 28px;
  padding: 0 6px;
  background: var(--white);
  border: 1px solid #C4C4CD;
  border-radius: 14px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #2e2e38;
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
/* Parent → child concentric nest (wraps the featured card) */
.sr-only {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}
.evo-breadcrumb {
  display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
  margin: 0 0 16px;
}
.evo-breadcrumb-item {
  display: inline-flex; align-items: center;
  background: none; border: none; padding: 5px 8px;
  font-family: inherit; font-size: 13px; font-weight: 700;
  color: #747480; cursor: pointer; border-radius: 6px;
  transition: color 0.15s, background 0.15s;
}
.evo-breadcrumb-item:hover { color: #FFFFFF; background: rgba(255,255,255,0.06); }
.evo-breadcrumb-item:focus-visible { outline: 2px solid var(--ey-yellow); outline-offset: 2px; }
.evo-breadcrumb-item.is-visited { color: #C4C4CD; }
.evo-breadcrumb-item.is-current {
  color: #1A1A24; background: var(--ey-yellow); cursor: default;
}
.evo-breadcrumb-sep {
  color: #2E2E38; font-size: 14px; line-height: 1;
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
.evo-nest-toggle { cursor: pointer; border-radius: 8px; }
.evo-nest-toggle:hover { background: rgba(255,255,255,0.04); }
.evo-nest-toggle:focus-visible { outline: 2px solid var(--ey-yellow); outline-offset: 2px; }
.evo-nest-chevron { margin-left: auto; flex-shrink: 0; transition: transform 0.25s ease; }
#evo-nest.is-collapsed .evo-nest-chevron { transform: rotate(-90deg); }
/* Collapsed: fold every ring down to a single summary line above the featured card */
#evo-nest.is-collapsed .evo-nest-layer {
  border-color: transparent;
  background: transparent;
  padding: 0;
}
#evo-nest.is-collapsed .evo-nest-layer > .evo-nest-layer { margin-top: 0; }
#evo-nest.is-collapsed .evo-nest-row { display: none; }
#evo-nest.is-collapsed > .evo-nest-layer {
  border: 1.5px solid #2E2E38;
  border-radius: 12px;
  padding: 10px 14px;
  background: rgba(255,255,255,0.015);
  margin-bottom: 12px;
}
#evo-nest.is-collapsed > .evo-nest-layer > .evo-nest-row { display: flex; padding: 0; }
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
.evo-body {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 40px;
}
.evo-body > .evo-concentric {
  flex: 1 1 auto;
  min-width: 0;
  margin-bottom: 0;
}
.evo-previews {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 340px;
  flex: 0 0 340px;
}
.evo-preview {
  background: #1A1A24;
  border: 1px solid #2E2E38;
  border-radius: 12px;
  padding: 12px;
  display: flex; flex-direction: row; align-items: center; gap: 14px;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s;
  text-align: left;
  font-family: inherit;
  color: inherit;
}
.evo-preview:hover { border-color: rgba(255,230,0,0.35); transform: translateY(-2px); }
.evo-preview-body {
  flex: 1;
  min-width: 0;
  display: flex; flex-direction: column; gap: 5px;
}
.evo-preview-top {
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
}
.evo-preview-left { display: flex; align-items: center; gap: 8px; min-width: 0; }
.evo-dot {
  width: 10px; height: 10px; border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}
.evo-preview-year { font-size: 13px; font-weight: 700; color: #FFFFFF; }
.evo-preview-short { font-size: 11px; font-weight: 700; color: #C4C4CD; white-space: nowrap; }
.evo-preview-title { font-size: 15px; font-weight: 700; color: #FFFFFF; margin: 0; }
.evo-preview-desc {
  font-size: 12px; line-height: 16px; color: #C4C4CD; margin: 0;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.evo-preview-thumb {
  width: 64px; height: 64px; flex-shrink: 0;
  border-radius: 8px; overflow: hidden;
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
  .evo-body { flex-direction: column; }
  .evo-previews { width: 100%; flex: 1 1 auto; }
  .evo-year-display { font-size: 48px; }
  .evo-era-name { font-size: 24px; }
  .evo-cabinet { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 640px) {
  .evo-preview { flex-direction: column; align-items: stretch; }
  .evo-preview-thumb { width: 100%; height: 88px; }
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
.quiz-scorebar #spot-score-val,
.quiz-scorebar #match-score-val {
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

<!-- ======== HERO — dark spectrum (Frame 7), aligned with Copilot Hub / Prompting ======== -->
<section class="hero" id="home" aria-label="Module 1 hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-inner">
    <div>
      <h1 class="hero-title">
        AI Foundations for the <span class="hl">Future-Ready</span> Tax Function
      </h1>
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
        <span class="hero-duration">The AI Shift</span>
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

<!-- ======== ACT NOW — The AI Advantage Won't Wait ======== -->
<section class="section velocity-section surface-neutral" id="act-now">
  <div class="velocity-header">
    <h2>The AI Advantage Won't Wait</h2>
    <p class="velocity-sub">The biggest risk today isn't using AI incorrectly — it's waiting too long to start.</p>
  </div>

  <div class="velocity-card">
    <p class="velocity-chart-label">Time to reach 1 Million Users</p>

    <div class="velocity-row">
      <span class="velocity-label">Netflix</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:100%;"></div></div>
        <span class="velocity-value">3.5 years</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">Facebook</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:57%;"></div></div>
        <span class="velocity-value">10 months</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">Dropbox</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:40%;"></div></div>
        <span class="velocity-value">7 months</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">Spotify</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:28%;"></div></div>
        <span class="velocity-value">5 months</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">Instagram</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:16%;"></div></div>
        <span class="velocity-value">2.5 months</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label velocity-label--accent">ChatGPT</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--accent" style="width:12%;"></div></div>
        <span class="velocity-value">5 days</span>
      </div>
    </div>

    <div class="velocity-divider" aria-hidden="true"></div>

    <div class="velocity-callout">
      <p class="velocity-callout-title">100 Million Users in 2 Months</p>
      <p class="velocity-callout-body">ChatGPT became the fastest-growing consumer application in history</p>
    </div>

    <p class="velocity-source">
      Source: Statista, Time to One Million Users (2023); Economic Times summary of Statista data; OpenAI and industry reports on ChatGPT adoption.
      <a href="https://www.statista.com" target="_blank" rel="noopener noreferrer">statista.com</a> ·
      <a href="https://economictimes.com" target="_blank" rel="noopener noreferrer">economictimes.com</a> ·
      <a href="https://explodingtopics.com" target="_blank" rel="noopener noreferrer">explodingtopics.com</a>
    </p>
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
.velocity-section h2 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.64px;
  line-height: 40px;
  color: var(--ey-dark);
  margin: 0;
  text-align: left;
}
.velocity-sub {
  margin: 0;
  max-width: 720px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--gray-01);
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
.velocity-chart-label {
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--ey-dark);
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
.velocity-label--accent { color: var(--ey-dark); }
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
.velocity-source {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--gray-01);
}
.velocity-source a {
  color: var(--ey-dark);
  text-decoration: underline;
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

<!-- ======== SECTION 2 — The Meteoric Rise of AI (Figma 3519:3028) ======== -->
<section id="rise-of-ai" class="rise-section surface-dark" aria-labelledby="rise-heading">
  <h2 id="rise-heading" class="rise-title">The <span class="hl">Meteoric Rise</span> of AI</h2>
  <p class="rise-sub">Recent headlines capturing AI's explosive growth</p>
  <p class="rise-hint">click any card to view the full article</p>

  <div class="rise-grid">
    <article class="rise-card" onclick="openLightbox('/gov.uk.png','GOV.UK — Britain powers ahead on AI · 12 June 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="rise-card-top rise-card-top--img">
        <img src="/gov.uk.png" alt="">
      </div>
      <div class="rise-card-body">
        <div class="rise-card-meta">
          <span class="source">GOV.UK — Press Release</span>
        </div>
        <p>Britain powers ahead on AI with billions of pounds of new investment and thousands of jobs secured as London Tech Week wraps up</p>
        <span class="date">12 June 2026</span>
      </div>
    </article>

    <article class="rise-card" onclick="openLightbox('/nvidia.png','Times of India — Nvidia tops $5 trillion · 26 April 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="rise-card-top rise-card-top--img">
        <img src="/nvidia.png" alt="">
      </div>
      <div class="rise-card-body">
        <div class="rise-card-meta">
          <span class="source">Times of India</span>
        </div>
        <p>Nvidia tops $5 trillion market cap as AI rally lifts chip stocks</p>
        <span class="date">26 April 2026</span>
      </div>
    </article>

    <article class="rise-card" onclick="openLightbox('/indian%20date%20center.png','Kotak News Desk — AI-Linked Indian Firms · 12 June 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="rise-card-top rise-card-top--img">
        <img src="/indian%20date%20center.png" alt="">
      </div>
      <div class="rise-card-body">
        <div class="rise-card-meta">
          <span class="source">Kotak News Desk</span>
        </div>
        <p>Lesser-Known AI-Linked Indian Firms Add $48 Billion In Market Value</p>
        <span class="date">12 June 2026</span>
      </div>
    </article>

    <article class="rise-card" onclick="openLightbox('/tcs.png','Reuters — TCS partners with Anthropic · 11 June 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="rise-card-top rise-card-top--img">
        <img src="/tcs.png" alt="">
      </div>
      <div class="rise-card-body">
        <div class="rise-card-meta">
          <span class="source">Reuters</span>
        </div>
        <p>India's TCS partners with Anthropic to drive enterprise AI scaling</p>
        <span class="date">11 June 2026</span>
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

<!-- ======== REALITY CHECK — AI Adoption Gap (Figma 3519:3111) ======== -->
<section id="reality-check" class="wrong-section surface-neutral" aria-labelledby="wrong-heading">
  <h2 id="wrong-heading" class="wrong-title">The Reality Check: AI Adoption Gap</h2>
  <p class="wrong-sub">Investment has not always translated into impact</p>
  <p class="wrong-hint">click any card to view the full article</p>

  <div class="wrong-grid">
    <article class="wrong-card" onclick="openLightbox('/95pct.png','Times of India — 95% companies have seen zero return · 30 September 2025')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="wrong-card-top">
        <img src="/reality-95.png" alt="">
      </div>
      <div class="wrong-card-body">
        <div class="wrong-card-meta">
          <span class="source">Times of India</span>
        </div>
        <p>95% companies have seen zero return on their AI investments and the reason is …, says study</p>
        <span class="date">30 September 2025</span>
      </div>
    </article>

    <article class="wrong-card" onclick="openLightbox('/wakeupcall.png','Times of India — $500 million monthly bill · 31 May 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="wrong-card-top">
        <img src="/reality-500m.png" alt="">
      </div>
      <div class="wrong-card-body">
        <div class="wrong-card-meta">
          <span class="source">Times of India</span>
        </div>
        <p>How AI startup's $500 million monthly bill may be a wakeup call for tech companies using AI freely</p>
        <span class="date">31 May 2026</span>
      </div>
    </article>

    <article class="wrong-card" onclick="openLightbox('/wall%20street.png','The Wall Street Journal — Corporate America Is Starting to Ration AI · 28 May 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="wrong-card-top">
        <img src="/reality-sanctioned.png" alt="">
      </div>
      <div class="wrong-card-body">
        <div class="wrong-card-meta">
          <span class="source">The Wall Street Journal</span>
        </div>
        <p>Corporate America Is Starting to Ration AI as Cost Skyrockets</p>
        <span class="date">28 May 2026</span>
      </div>
    </article>
  </div>
</section>

<!-- ======== STRATEGIC DIVIDE — Two Paths (Figma 3519:3180) ======== -->
<section id="strategic-divide" class="paths-section surface-light" aria-labelledby="paths-heading">
  <div class="paths-header">
    <h2 id="paths-heading" class="paths-title">AI Hype + Zero Fundamentals = Missed Opportunities</h2>
  </div>

  <div class="paths-row">
    <article class="paths-card bad">
      <div class="paths-card-head">
        <h3 class="paths-card-title">The "Just Wing It" Path</h3>
      </div>
      <div class="paths-items">
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p><strong>No Defined Use Case</strong><br><em>Like applying AI to everything instead of the right things</em></p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p><strong>Blind Reliance</strong> on Outputs<br><em>Like citing a tax provision without verifying the source</em></p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p>Weak <strong>Governance</strong><br><em>Like issuing advice without an appropriate review process</em></p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p>Access <strong>Without Enablement</strong><br><em>Like moving to AI while still relying on spreadsheets</em></p>
        </div>
      </div>
      <p class="paths-outcome">OUTCOME: Wasted Budget, Risk Exposure, Inefficiency</p>
    </article>

    <div class="paths-divider" aria-hidden="true">
      <span class="paths-divider-diamond">VS</span>
    </div>

    <article class="paths-card good">
      <div class="paths-card-head">
        <h3 class="paths-card-title">The "Foundations First" Path</h3>
      </div>
      <div class="paths-items">
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p><strong>Intentional</strong> use — right tool, right task<br><em>Choosing the right AI tool for the right activity</em></p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p>Human <strong>validation</strong><br><em>Like a senior reviewing the junior's draft before filing</em></p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p><strong>Measured</strong> Impact<br><em>Like measuring value through time savings and quality improvements</em></p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p>Strong <strong>Governance</strong><br><em>Like having guardrails on a mountain road—they keep you moving safely</em></p>
        </div>
      </div>
      <p class="paths-outcome">OUTCOME: Efficiency, Trust, Competitive Edge</p>
    </article>
  </div>

  <div class="paths-footer">
    <p class="paths-footer-msg">Understanding AI is the first step toward realizing its value.</p>
    <a class="paths-cta" href="#evolution">
      Let's Start with the Fundamentals👇
    </a>
  </div>
</section>

<!-- ======== AI EVOLUTION TIMELINE (Figma 3276:17185) ======== -->
<section class="evo-section surface-dark" id="evolution" aria-labelledby="evo-heading">
  <h2 id="evo-heading" class="evo-title">The Evolution of AI</h2>
  <p class="evo-sub">Each layer is a subset of the one before it — building on the last</p>

  <div id="evo-timeline-view">
    <nav class="evo-breadcrumb" id="evo-breadcrumb" aria-label="AI evolution hierarchy, current layer highlighted"></nav>

    <div class="evo-body">
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
    </div>

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
  <p class="section-subtitle" style="max-width:700px; color:var(--gray-01);">Follow a prompt and discover what happens behind the scenes—from your question to the final answer.</p>

  <div style="max-width:1200px; margin:0 auto;">

    <!-- Copilot Window -->
    <div id="copilot-window" style="background:var(--off-white); border:1px solid var(--gray-02); border-radius:16px; overflow:hidden; box-shadow:0 24px 60px rgba(46,46,56,0.12);">

      <!-- Title bar — reflects what's happening in the window right now -->
      <div style="display:flex; align-items:center; padding:12px 20px; background:var(--confident-black); border-bottom:1px solid rgba(255,255,255,0.08);">
        <div style="display:flex; align-items:center; gap:8px; min-width:0;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ey-yellow)" stroke-width="1.5" style="flex-shrink:0;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span id="copilot-status" style="color:#FFFFFF; font-size:14px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">EY.ai Copilot</span>
        </div>
        <span style="margin-left:auto; flex-shrink:0; font-size:10px; color:rgba(255,255,255,0.7); background:rgba(255,255,255,0.08); padding:3px 10px; border-radius:10px;">GPT-4o • EY Secure</span>
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
@keyframes fadeOutMsg { to { opacity: 0; } }
@keyframes flipOutY { 0% { transform:perspective(1200px) rotateY(0deg); opacity:1; } 100% { transform:perspective(1200px) rotateY(-90deg); opacity:0; } }
@keyframes flipInY { 0% { transform:perspective(1200px) rotateY(90deg); opacity:0; } 100% { transform:perspective(1200px) rotateY(0deg); opacity:1; } }
.beat-flip-out { animation:flipOutY 0.32s ease-in forwards; transform-style:preserve-3d; transform-origin:center; }
.beat-flip-in { animation:flipInY 0.4s ease-out forwards; transform-style:preserve-3d; transform-origin:center; }
#pipeline-cta-card:focus-visible { outline:2px solid var(--ey-yellow); outline-offset:2px; }
@media (prefers-reduced-motion: reduce) {
  .beat-flip-out { animation:fadeOutMsg 0.15s ease forwards; }
  .beat-flip-in { animation:fadeInMsg 0.25s ease forwards; }
}
@keyframes pulseRed { 0%,100%{background:rgba(255,65,54,0.15)} 50%{background:rgba(255,65,54,0.3)} }
#copilot-window.is-hallucinating { animation:pulseRedBorder 2s ease-in-out infinite; }
@keyframes pulseRedBorder {
  0%, 100% { box-shadow:0 24px 60px rgba(46,46,56,0.12); }
  50% { box-shadow:0 0 0 3px rgba(255,65,54,0.35), 0 24px 60px rgba(255,65,54,0.15); }
}
@media (max-width: 640px) {
  #demo-actions { padding:12px 16px; }
  #demo-actions > div { gap:12px; }
}
</style>
<script>
let currentBeat = -1;
const BEATS = ['ask','sent','pipeline','inside','output','hallucination','you','better'];
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

// Compact bubble for genuine back-and-forth lines (as opposed to the wide
// explainer cards addMessage also renders) — sender bubbles hug their content
// and sit on opposite sides of the thread, like a real chat app.
function addChatBubble(role, text, tone) {
  const isYou = role === 'You';
  const danger = tone === 'danger';
  const msg = document.createElement('div');
  msg.style.cssText = 'display:flex; gap:10px; margin-bottom:20px; align-items:flex-end;' + (isYou ? ' flex-direction:row-reverse;' : '') + ' animation:fadeInMsg 0.5s ease-out forwards; opacity:0;';
  const bubbleBg = isYou ? 'rgba(255,230,0,0.1)' : danger ? 'rgba(255,65,54,0.05)' : 'rgba(70,150,255,0.05)';
  const bubbleBorder = isYou ? 'rgba(255,230,0,0.3)' : danger ? 'rgba(255,65,54,0.2)' : 'rgba(70,150,255,0.12)';
  const radius = isYou ? '16px 16px 4px 16px' : '16px 16px 16px 4px';
  const avatarBg = isYou ? 'rgba(255,230,0,0.18)' : 'rgba(70,150,255,0.15)';
  const avatarFg = isYou ? 'var(--ey-dark)' : 'var(--accent-blue)';
  msg.innerHTML = \`<div style="width:28px;height:28px;border-radius:50%;background:\${avatarBg};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:\${avatarFg};flex-shrink:0;">\${isYou ? 'You' : 'AI'}</div><div style="max-width:72%;padding:12px 16px;background:\${bubbleBg};border:1px solid \${bubbleBorder};border-radius:\${radius};color:var(--ey-dark);font-size:14px;line-height:1.7;">\${text}</div>\`;
  chatEl.appendChild(msg);
  chatEl.scrollTop = chatEl.scrollHeight;
}

// Title-bar status — reflects what the copilot is doing right now instead of a static brand label.
const BEAT_STATUS = {
  ask: 'Reading your prompt…',
  sent: 'Prompt sent…',
  pipeline: 'Processing your prompt…',
  inside: 'Breaking down how it works…',
  output: 'Drafting a response…',
  hallucination: 'Double-checking the answer…',
  you: 'Handing off for review…',
  better: 'Recap: the full journey',
};
function setCopilotStatus(text) {
  const el = document.getElementById('copilot-status');
  if (el) el.textContent = text;
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
  document.getElementById('demo-actions').style.display = 'flex';
  currentBeat = 0;
  renderBeat();
}

function continueBeat() {
  if (currentBeat >= BEATS.length - 1) return;
  var leavingBeat = BEATS[currentBeat];
  if (leavingBeat === 'sent') {
    var cta = document.getElementById('pipeline-cta-card');
    if (cta) {
      cta.classList.add('beat-flip-out');
      setTimeout(function () { currentBeat++; renderBeat(true); }, 300);
      return;
    }
  }
  currentBeat++;
  renderBeat();
}

function backBeat() {
  if (window._typer) clearInterval(window._typer);
  if (currentBeat > 0) { currentBeat--; renderBeat(); }
}

function resetDemo() {
  if (window._typer) clearInterval(window._typer);
  chatEl.innerHTML = \`<div id="copilot-welcome" style="text-align:center;padding:60px 20px;"><h3 style="color:var(--ey-dark);font-size:20px;font-weight:700;margin-bottom:8px;">Welcome to EY.ai Copilot</h3><p style="color:var(--gray-01);font-size:14px;max-width:400px;margin:0 auto 24px;">Ask me anything about India tax. I'll show you how AI processes your question — and where things can go wrong.</p><button onclick="startDemo()" style="background:var(--ey-yellow);color:var(--ey-dark);border:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:10px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="var(--ey-dark)"><polygon points="5 3 19 12 5 21 5 3"/></svg> Start walkthrough</button></div>\`;
  document.getElementById('demo-actions').style.display = 'none';
  var bar = document.getElementById('copilot-input-bar'); if (bar) bar.style.display = 'none';
  var inp = document.getElementById('copilot-input'); if (inp) { inp.value = ''; inp.style.color = 'var(--text-secondary)'; inp.style.borderColor = 'rgba(46,46,56,0.08)'; }
  var win = document.getElementById('copilot-window'); if (win) win.classList.remove('is-hallucinating');
  setCopilotStatus('EY.ai Copilot');
  currentBeat = -1;
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

function renderBeat(flipIn) {
  updateActionBar();
  if (window._typer) clearInterval(window._typer);
  chatEl.innerHTML = '';
  var barEl = document.getElementById('copilot-input-bar');
  var inputEl = document.getElementById('copilot-input');
  var winEl = document.getElementById('copilot-window');
  if (winEl) winEl.classList.remove('is-hallucinating');
  var beat = BEATS[currentBeat];
  setCopilotStatus(BEAT_STATUS[beat] || 'EY.ai Copilot');

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
    ann.innerHTML = \`<div style="border:1px solid rgba(255,230,0,0.25);border-radius:12px;overflow:hidden;background:var(--white);"><div style="background:rgba(255,230,0,0.07);border-bottom:1px solid rgba(255,230,0,0.15);padding:10px 18px;display:flex;align-items:center;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span style="color:var(--eyebrow-gold);font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">What is a Prompt?</span></div><div style="padding:18px 20px;display:grid;grid-template-columns:1fr;gap:18px;align-items:start;"><div><p style="color:var(--ey-dark);font-size:14px;font-weight:700;margin:0 0 6px;line-height:1.4;">This is the instruction given to AI.</p><p style="color:var(--gray-01);font-size:12px;line-height:1.6;margin:0 0 14px;">The clearer the instruction, the better the answer.</p><div style="display:inline-flex;align-items:center;gap:6px;background:rgba(0,200,100,0.1);border:1px solid rgba(0,200,100,0.25);padding:7px 14px;border-radius:20px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:12px;font-weight:700;">Prompt = What you ask AI to do</span></div></div><div style="background:var(--off-white);border:1px solid rgba(255,230,0,0.15);border-left:3px solid var(--ey-yellow);border-radius:8px;padding:14px 16px;"><div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Everyday Analogy</span></div><p style="color:var(--ey-dark);font-size:13px;font-weight:600;margin:0 0 6px;line-height:1.4;">Like giving directions to a cab driver.</p><p style="color:var(--gray-01);font-size:12px;line-height:1.5;margin:0;">A specific destination leads to a better journey.</p></div></div></div>\`;
    chatEl.appendChild(ann);
    chatEl.scrollTop = chatEl.scrollHeight;

  } else if (beat === 'sent') {
    barEl.style.display = 'none';
    inputEl.value = ''; inputEl.style.color = 'var(--text-secondary)'; inputEl.style.borderColor = 'rgba(46,46,56,0.08)';
    addChatBubble('You', 'Summarize the GST implications for an online seller selling goods across multiple Indian states');
    var cta = document.createElement('div');
    cta.id = 'pipeline-cta-card';
    cta.setAttribute('role', 'button');
    cta.setAttribute('tabindex', '0');
    cta.style.cssText = 'margin:2px 0 20px 0;cursor:pointer;animation:fadeInMsg 0.5s ease-out 0.2s forwards;opacity:0;';
    cta.onclick = function () { continueBeat(); };
    cta.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); continueBeat(); } };
    cta.innerHTML = \`<div style="border:1px solid rgba(255,230,0,0.3);border-radius:14px;overflow:hidden;background:linear-gradient(135deg,var(--white),var(--off-white));transition:transform 0.2s ease,box-shadow 0.2s ease;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 28px rgba(255,230,0,0.18)'" onmouseout="this.style.transform='none';this.style.boxShadow='none'"><div style="padding:16px 20px;display:flex;align-items:center;gap:14px;"><div style="width:38px;height:38px;border-radius:50%;background:rgba(255,230,0,0.14);border:1px solid rgba(255,230,0,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div style="flex:1;"><div style="color:var(--ey-dark);font-size:14px;font-weight:700;margin-bottom:3px;">What's happening right now: the pipeline at a glance</div><div style="color:var(--gray-01);font-size:12px;line-height:1.5;">Your prompt just triggered 7 invisible steps — tap to watch them unfold.</div></div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div></div>\`;
    chatEl.appendChild(cta);
    chatEl.scrollTop = chatEl.scrollHeight;

  } else if (beat === 'pipeline') {
    barEl.style.display = 'none';
    inputEl.value = ''; inputEl.style.color = 'var(--text-secondary)'; inputEl.style.borderColor = 'rgba(46,46,56,0.08)';
    addChatBubble('You', 'Summarize the GST implications for an online seller selling goods across multiple Indian states');
    var exp = document.createElement('div');
    exp.id = 'pipeline-reveal-card';
    exp.style.cssText = 'margin:0 0 20px 0; opacity:0;';
    exp.innerHTML = \`<div style="border:1px solid rgba(46,46,56,0.07);border-radius:14px;overflow:hidden;background:linear-gradient(135deg,var(--white),var(--off-white));"><div style="padding:18px 20px 4px;"><p style="color:var(--gray-01);font-size:13px;line-height:1.7;margin:0 0 18px;">Every AI response travels through <strong style="color:var(--ey-dark);">7 invisible steps</strong> before reaching you</p><div style="display:flex;align-items:flex-start;gap:0;margin-bottom:8px;overflow-x:auto;padding-bottom:2px;justify-content:center;"><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,230,0,0.12);border:1.5px solid rgba(255,230,0,0.45);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><span style="color:rgba(255,230,0,0.9);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Prompt</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:linear-gradient(90deg,rgba(255,230,0,0.4),rgba(70,150,255,0.3));"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none" style="margin-bottom:0;"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.2)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:42px;height:42px;border-radius:50%;background:rgba(70,150,255,0.18);border:2px solid var(--accent-blue);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 4px rgba(70,150,255,0.12);"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2.25"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg></div><span style="color:var(--accent-blue);font-size:7.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;">Tokens</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(0,200,100,0.08);border:1.5px dashed rgba(0,200,100,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6h-8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z"/><path d="M9 21h6"/></svg></div><span style="color:rgba(0,200,100,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">LLM</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,125,30,0.08);border:1.5px dashed rgba(255,125,30,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><span style="color:rgba(255,125,30,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">RAG</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(70,150,255,0.08);border:1.5px dashed rgba(70,150,255,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span style="color:rgba(70,150,255,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Output</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,65,54,0.08);border:1.5px dashed rgba(255,65,54,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg></div><span style="color:rgba(255,65,54,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Risk?</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(0,200,100,0.08);border:1.5px dashed rgba(0,200,100,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span style="color:rgba(0,200,100,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">You</span></div></div></div><div style="height:1px;background:rgba(46,46,56,0.06);margin:4px 20px 0;"></div><div style="padding:16px 20px 20px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg><span style="color:var(--accent-blue);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Zooming in: how tokenization actually worked</span></div><div style="background:var(--off-white);border-radius:10px;padding:14px 16px;"><div style="font-size:11px;color:var(--gray-01);margin-bottom:10px;font-style:italic;line-height:1.5;padding:7px 10px;background:var(--white);border-radius:5px;border-left:2px solid rgba(46,46,56,0.06);">&ldquo;Summarize the GST implications for an online seller selling goods across multiple Indian states&rdquo;</div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;"><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.1s both;"><span style="background:rgba(70,150,255,0.2);border:1px solid rgba(70,150,255,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-blue);font-weight:600;font-family:monospace;">Summar</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.2s both;"><span style="background:rgba(70,150,255,0.2);border:1px solid rgba(70,150,255,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-blue);font-weight:600;font-family:monospace;">ize</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.35s both;"><span style="background:rgba(0,200,100,0.2);border:1px solid rgba(0,200,100,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-green);font-weight:600;font-family:monospace;">the</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.5s both;"><span style="background:rgba(70,150,255,0.2);border:1px solid rgba(70,150,255,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-blue);font-weight:600;font-family:monospace;">G</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.65s both;"><span style="background:rgba(70,150,255,0.2);border:1px solid rgba(70,150,255,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-blue);font-weight:600;font-family:monospace;">ST</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.8s both;"><span style="background:rgba(255,125,30,0.2);border:1px solid rgba(255,125,30,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-orange);font-weight:600;font-family:monospace;">impl</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.95s both;"><span style="background:rgba(255,125,30,0.2);border:1px solid rgba(255,125,30,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-orange);font-weight:600;font-family:monospace;">ications</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 1.1s both;"><span style="background:rgba(0,200,100,0.2);border:1px solid rgba(0,200,100,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-green);font-weight:600;font-family:monospace;">online</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 1.25s both;"><span style="background:rgba(255,65,54,0.2);border:1px solid rgba(255,65,54,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-red);font-weight:600;font-family:monospace;">sell</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 1.4s both;"><span style="background:rgba(255,65,54,0.2);border:1px solid rgba(255,65,54,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-red);font-weight:600;font-family:monospace;">er</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 1.55s both;align-self:center;"><span style="color:rgba(46,46,56,0.25);font-size:18px;letter-spacing:3px;">···</span></span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:var(--text-dim);font-size:10px;">16 words</span><span style="color:var(--text-dim);">→</span><span style="color:var(--accent-blue);font-size:10px;font-weight:600;">~21 tokens</span></div></div></div></div>\`;
    chatEl.appendChild(exp);
    if (flipIn) {
      exp.classList.add('beat-flip-in');
    } else {
      exp.style.animation = 'fadeInMsg 0.6s ease-out forwards';
    }
    chatEl.scrollTop = chatEl.scrollHeight;

  } else if (beat === 'inside') {
    barEl.style.display = 'none';
    var acc = document.createElement('div');
    acc.style.cssText = 'animation:fadeInMsg 0.5s ease-out forwards;opacity:0;';
    acc.innerHTML = buildInsideAccordion();
    chatEl.appendChild(acc);
    chatEl.scrollTop = chatEl.scrollHeight;

  } else if (beat === 'output') {
    barEl.style.display = 'none';
    addChatBubble('AI', 'GST registration may be required in multiple states depending on the business model. Interstate supplies generally attract IGST. E-commerce operators may have additional compliance requirements including collection and reporting obligations. Businesses should evaluate registration, invoicing, return filing and place-of-supply considerations.');

  } else if (beat === 'hallucination') {
    barEl.style.display = 'none';
    if (winEl) winEl.classList.add('is-hallucinating');
    addChatBubble('AI', 'Every online seller is required to register for GST in every Indian state where customers are located.', 'danger');

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





<!-- ======== CHEAT SHEET — Think Beyond Drafting (CREATE / UNDERSTAND / ORGANIZE / THINK) ======== -->
<section class="section surface-neutral cheat-section" id="cheatsheet" aria-labelledby="cheat-heading">
  <h2 id="cheat-heading" class="cheat-title">Think Beyond Drafting and Summarisation</h2>
  <p class="cheat-subtitle">Generative AI can be your smart thought partner</p>

  <div class="cheat-columns" aria-label="GenAI capability cheat sheet">
    <!-- CREATE -->
    <details class="cheat-col" data-tone="create" open>
      <summary class="cheat-col-head">
        <span class="cheat-col-label">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          Create
        </span>
        <svg class="cheat-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="cheat-col-body">
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.5 6.5L21 9.5l-5 5 1 7L12 18l-5 3.5 1-7-5-5 6.5-1z"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Generate</h3>
            <p class="cheat-card-desc">Create something new from instructions</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Draft a response to a tax authority notice based on the facts provided"</p>
        </article>
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 12h16"/><path d="M12 4v16"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Transform</h3>
            <p class="cheat-card-desc">Convert information from one format into another</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Convert this GST reconciliation table into a user-ready summary."</p>
        </article>
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Synthesize</h3>
            <p class="cheat-card-desc">Combine information from multiple sources into one view.</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Combine the judgment, circular and statutory provisions into a consolidated briefing note."</p>
        </article>
      </div>
    </details>

    <!-- UNDERSTAND -->
    <details class="cheat-col" data-tone="understand" open>
      <summary class="cheat-col-head">
        <span class="cheat-col-label">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          Understand
        </span>
        <svg class="cheat-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="cheat-col-body">
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Query</h3>
            <p class="cheat-card-desc">Ask questions and get targeted answers.</p>
          </div>
          </div>
          <p class="cheat-card-eg">"What is the time limit for filing a revised return?"</p>
        </article>
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h10"/><path d="M4 18h14"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Summarise</h3>
            <p class="cheat-card-desc">Condense large volumes of information into key points.</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Summarize this tax judgment in five key takeaways."</p>
        </article>
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6H8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z"/><path d="M9 21h6"/><path d="M10 17h4"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Explain</h3>
            <p class="cheat-card-desc">Simplify complex topics for a specific audience.</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Explain POEM in simple language for a CFO presentation."</p>
        </article>
      </div>
    </details>

    <!-- ORGANIZE -->
    <details class="cheat-col" data-tone="organize" open>
      <summary class="cheat-col-head">
        <span class="cheat-col-label">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></svg>
          Organize
        </span>
        <svg class="cheat-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="cheat-col-body">
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M3 12h18"/><rect x="6" y="6" width="12" height="12" rx="1"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Extract</h3>
            <p class="cheat-card-desc">Pull specific information from documents</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Extract TDS amounts, PANs and section references from Form 26AS."</p>
        </article>
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v4H3z"/><path d="M3 10h18v4H3z"/><path d="M3 17h18v4H3z"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Classify</h3>
            <p class="cheat-card-desc">Categorise information into predefined groups</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Classify expenses as capital or revenue based on the descriptions provided."</p>
        </article>
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/><path d="M18 3h3v3"/><path d="M10 14L21 3"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Compare</h3>
            <p class="cheat-card-desc">Highlight similarities, differences and trade-offs.</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Compare the India–Singapore and India–Mauritius treaties for capital gains taxation."</p>
        </article>
      </div>
    </details>

    <!-- THINK -->
    <details class="cheat-col" data-tone="think" open>
      <summary class="cheat-col-head">
        <span class="cheat-col-label">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6H8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z"/><path d="M9 21h6"/><path d="M10 17h4"/></svg>
          Think
        </span>
        <svg class="cheat-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </summary>
      <div class="cheat-col-body">
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-6 4 4 5-8"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Analyse</h3>
            <p class="cheat-card-desc">Identify patterns, risks and insights.</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Analyze these transactions and highlight potential transfer pricing risk areas."</p>
        </article>
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Evaluate</h3>
            <p class="cheat-card-desc">Assess strengths, weaknesses and potential issues.</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Evaluate the risks and support available for this tax position."</p>
        </article>
        <article class="cheat-card">
          <div class="cheat-card-main">
          <div class="cheat-card-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
          <div class="cheat-card-copy">
            <h3>Advise</h3>
            <p class="cheat-card-desc">Suggest possible approaches or next steps.</p>
          </div>
          </div>
          <p class="cheat-card-eg">"Suggest factors to consider when evaluating a cross-border restructuring."</p>
        </article>
      </div>
    </details>
  </div>
</section>

<style>
/* Cheat sheet — EY tokens (Off White surface, white cards, Off Black type) */
.cheat-section {
  padding: 72px 64px;
  text-align: center;
  background: var(--off-white);
  border-bottom: 1px solid var(--gray-02);
}
.cheat-title {
  margin: 0 0 12px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--ey-dark);
  text-align: center;
}
.cheat-subtitle {
  margin: 0 auto 48px;
  max-width: 650px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: var(--gray-01);
}
.cheat-columns {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  max-width: none;
  margin: 0;
  text-align: left;
}
.cheat-col {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cheat-col-head {
  list-style: none;
  border-top: 3px solid currentColor;
  padding: 14px 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: default;
  color: inherit;
}
.cheat-col-head::-webkit-details-marker { display: none; }
.cheat-col-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.cheat-chevron {
  display: none;
  flex-shrink: 0;
  color: var(--gray-01);
  transition: transform 0.2s;
}
.cheat-col[data-tone="create"] { color: var(--ey-dark); }
.cheat-col[data-tone="create"] .cheat-col-head { color: var(--ey-dark); border-top-color: var(--ey-yellow); }
.cheat-col[data-tone="create"] .cheat-col-label { color: var(--ey-dark); }
.cheat-col[data-tone="create"] .cheat-col-label svg { color: var(--ey-yellow); }
.cheat-col[data-tone="understand"] .cheat-col-head { color: var(--accent-blue); border-top-color: var(--accent-blue); }
.cheat-col[data-tone="organize"] .cheat-col-head { color: var(--accent-green); border-top-color: var(--accent-green); }
.cheat-col[data-tone="think"] .cheat-col-head { color: var(--accent-purple); border-top-color: var(--accent-purple); }
.cheat-col[data-tone="create"] .cheat-card-icon { color: var(--ey-dark); }
.cheat-col[data-tone="understand"] .cheat-card-icon { color: var(--accent-blue); }
.cheat-col[data-tone="organize"] .cheat-card-icon { color: var(--accent-green); }
.cheat-col[data-tone="think"] .cheat-card-icon { color: var(--accent-purple); }
.cheat-col-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cheat-card {
  background: var(--white);
  border: 1px solid var(--gray-02);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  min-width: 0;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}
.cheat-card:hover {
  border-color: var(--gray-01);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transform: translateY(-2px);
}
.cheat-card-main {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  min-width: 0;
}
.cheat-card-copy {
  min-width: 0;
  flex: 1;
}
.cheat-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--off-white);
  border: 1px solid var(--gray-02);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cheat-card h3 {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
  color: var(--ey-dark);
  line-height: 1.25;
}
.cheat-card-desc {
  margin: 0;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.45;
  color: var(--gray-01);
}
/* Prompt example — tag/quote box so text stays readable in narrow columns */
.cheat-card-eg {
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border-radius: 6px;
  background: var(--off-white);
  border: 1px solid var(--gray-02);
  border-left: 3px solid var(--ey-yellow);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  font-style: italic;
  color: var(--ey-dark);
  word-break: break-word;
  overflow-wrap: anywhere;
}

/* Narrow: stacked accordion (one column under another) */
@media (max-width: 900px) {
  .cheat-section { padding: 56px 24px; }
  .cheat-title { font-size: 24px; }
  .cheat-subtitle { margin-bottom: 28px; }
  .cheat-columns {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .cheat-col {
    background: var(--white);
    border: 1px solid var(--gray-02);
    border-radius: 8px;
    gap: 0;
    overflow: hidden;
  }
  .cheat-col-head {
    padding: 16px 18px;
    cursor: pointer;
    border-top-width: 3px;
  }
  .cheat-chevron { display: block; }
  .cheat-col[open] .cheat-chevron { transform: rotate(180deg); }
  .cheat-col-body {
    padding: 0 18px 18px;
    gap: 10px;
  }
  .cheat-card { box-shadow: none; }
  .cheat-card:hover { transform: none; box-shadow: none; }
}
</style>

<script>
(function initCheatAccordion() {
  var root = document.getElementById('cheatsheet');
  if (!root || root.dataset.cheatReady === '1') return;
  root.dataset.cheatReady = '1';
  var cols = Array.prototype.slice.call(root.querySelectorAll('.cheat-col'));
  var mq = window.matchMedia('(max-width: 900px)');

  function syncMode() {
    var mobile = mq.matches;
    cols.forEach(function (col, i) {
      if (mobile) {
        // Accordion: first open, others closed
        col.open = i === 0;
      } else {
        // Desktop grid: all columns expanded
        col.open = true;
      }
    });
  }

  cols.forEach(function (col) {
    col.addEventListener('toggle', function () {
      if (!mq.matches || !col.open) return;
      // One open panel at a time on small screens
      cols.forEach(function (other) {
        if (other !== col) other.open = false;
      });
    });
  });

  // Match every card's height to the tallest card in its row, so the four
  // columns line up evenly even though the copy lengths differ.
  function equalizeCardRows() {
    var rows = cols.map(function (col) {
      return Array.prototype.slice.call(col.querySelectorAll('.cheat-card'));
    });
    var rowCount = rows.reduce(function (max, r) { return Math.max(max, r.length); }, 0);

    // Reset first so we measure natural (content) height, not a stale max.
    rows.forEach(function (cards) {
      cards.forEach(function (card) { card.style.height = ''; });
    });

    if (mq.matches) return; // single-column accordion on mobile — natural height is fine

    for (var i = 0; i < rowCount; i++) {
      var tallest = 0;
      rows.forEach(function (cards) {
        if (cards[i]) tallest = Math.max(tallest, cards[i].offsetHeight);
      });
      rows.forEach(function (cards) {
        if (cards[i]) cards[i].style.height = tallest + 'px';
      });
    }
  }

  var resizeTimer;
  function scheduleEqualize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(equalizeCardRows, 100);
  }

  syncMode();
  equalizeCardRows();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(equalizeCardRows);
  window.addEventListener('load', equalizeCardRows);
  window.addEventListener('resize', scheduleEqualize);
  if (mq.addEventListener) mq.addEventListener('change', function () { syncMode(); equalizeCardRows(); });
  else if (mq.addListener) mq.addListener(function () { syncMode(); equalizeCardRows(); });
})();
<\/script>


<section class="section surface-dark gva-section" id="genai-vs-agents" aria-labelledby="gva-heading" data-node-id="3519:3747">
  <h2 id="gva-heading" class="gva-title">LLM vs AI Agent vs Agentic AI</h2>
  <p class="gva-sub">Each level builds on the previous by adding new capabilities. Understanding the difference helps you choose the right tool for the job.</p>

  <div class="gva-equation" aria-label="Capability evolution equation">
    <span class="gva-eq-chip" data-tone="blue">LLM (GenAI)</span>
    <span class="gva-eq-op" aria-hidden="true">+</span>
    <span class="gva-eq-chip" data-tone="yellow">Tools &amp; Actions</span>
    <span class="gva-eq-op is-eq" aria-hidden="true">=</span>
    <span class="gva-eq-chip" data-tone="green">AI Agent</span>
    <span class="gva-eq-op" aria-hidden="true">+</span>
    <span class="gva-eq-chip" data-tone="yellow">Planning &amp; Workflow</span>
    <span class="gva-eq-op is-eq" aria-hidden="true">=</span>
    <span class="gva-eq-chip" data-tone="purple">Agentic AI</span>
  </div>
  <p class="gva-eq-caption">Each level inherits everything from the previous level.</p>

  <div class="gva-compare">
    <!-- Sticky column headers -->
    <div class="gva-colheads" aria-hidden="false">
      <div class="gva-colhead" data-tone="blue">
        <div class="gva-colhead-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg>
        </div>
        <div>
          <p class="gva-colhead-kicker">1 — LLM</p>
          <h3 class="gva-colhead-title">LLM (Generative AI)</h3>
        </div>
      </div>
      <div class="gva-colhead" data-tone="green">
        <div class="gva-colhead-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><path d="M17 11l2 2 4-4"/></svg>
        </div>
        <div>
          <p class="gva-colhead-kicker">2 — AI AGENT</p>
          <h3 class="gva-colhead-title">AI Agent</h3>
        </div>
      </div>
      <div class="gva-colhead" data-tone="purple">
        <div class="gva-colhead-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <div>
          <p class="gva-colhead-kicker">3 — AGENTIC AI</p>
          <h3 class="gva-colhead-title">Agentic AI</h3>
        </div>
      </div>
    </div>

    <!-- Capabilities -->
    <section class="gva-band" aria-labelledby="gva-band-cap">
      <h4 id="gva-band-cap" class="gva-band-label">Capabilities</h4>
      <div class="gva-band-cells">
        <div class="gva-cell" data-tone="blue">
          <p class="gva-cell-label">What it gives you</p>
          <ul class="gva-check-list">
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Answer</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Draft</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Summary</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Email</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Presentation content</li>
          </ul>
        </div>
        <div class="gva-cell" data-tone="green">
          <p class="gva-cell-label">What is added?</p>
          <ul class="gva-check-list">
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> LLM Capability</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Access to tools</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Ability to take actions</li>
          </ul>
        </div>
        <div class="gva-cell" data-tone="purple">
          <p class="gva-cell-label">What is added?</p>
          <ul class="gva-check-list">
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> LLM</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Tools</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Planning</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Decision-making</li>
            <li><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Multi-step workflow management</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- What it does -->
    <section class="gva-band" aria-labelledby="gva-band-does">
      <h4 id="gva-band-does" class="gva-band-label">What it does</h4>
      <div class="gva-band-cells">
        <div class="gva-cell" data-tone="blue"><p class="gva-body">Answers questions and creates content.</p></div>
        <div class="gva-cell" data-tone="green"><p class="gva-body">Not only answers — but also does things.</p></div>
        <div class="gva-cell" data-tone="purple"><p class="gva-body">Manages an entire objective from start to finish.</p></div>
      </div>
    </section>

    <!-- Think of it as -->
    <section class="gva-band" aria-labelledby="gva-band-think">
      <h4 id="gva-band-think" class="gva-band-label">Think of it as</h4>
      <div class="gva-band-cells">
        <div class="gva-cell" data-tone="blue"><div class="gva-analogy"><p class="gva-cell-label">Think of it as</p><p class="gva-body">A knowledgeable assistant.</p></div></div>
        <div class="gva-cell" data-tone="green"><div class="gva-analogy"><p class="gva-cell-label">Think of it as</p><p class="gva-body">A virtual team member.</p></div></div>
        <div class="gva-cell" data-tone="purple"><div class="gva-analogy"><p class="gva-cell-label">Think of it as</p><p class="gva-body">A project manager.</p></div></div>
      </div>
    </section>

    <!-- Example -->
    <section class="gva-band" aria-labelledby="gva-band-ex">
      <h4 id="gva-band-ex" class="gva-band-label">Example</h4>
      <div class="gva-band-cells">
        <div class="gva-cell" data-tone="blue">
          <div class="gva-example">
            <p class="gva-cell-label">Example</p>
            <p class="gva-quote">"Summarize the GST implications for e-commerce sellers."</p>
            <p class="gva-body">AI returns an answer.</p>
          </div>
        </div>
        <div class="gva-cell" data-tone="green">
          <div class="gva-example">
            <p class="gva-cell-label">Example</p>
            <p class="gva-example-note">Instead of:</p>
            <p class="gva-example-quote-plain">Summarize this GST notice</p>
            <p class="gva-example-note">The Agent:</p>
            <ul class="gva-steps">
              <li>— reads the notice</li>
              <li>— extracts key facts</li>
              <li>— drafts a summary</li>
              <li>— stores it in the correct folder</li>
            </ul>
          </div>
        </div>
        <div class="gva-cell" data-tone="purple">
          <div class="gva-example">
            <p class="gva-cell-label">Example</p>
            <p class="gva-example-note">Goal:</p>
            <p class="gva-body" style="font-style:italic;margin-bottom:10px;">Prepare an initial response package for a GST notice.</p>
            <p class="gva-example-note">Agentic AI can:</p>
            <ul class="gva-steps">
              <li>1. Review the notice</li>
              <li>2. Identify due dates</li>
              <li>3. Gather supporting documents</li>
              <li>4. Draft response points</li>
              <li>5. Create a review package</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Best used when -->
    <section class="gva-band" aria-labelledby="gva-band-best">
      <h4 id="gva-band-best" class="gva-band-label">Best Used When</h4>
      <div class="gva-band-cells">
        <div class="gva-cell" data-tone="blue">
          <ul class="gva-bullets">
            <li><span class="gva-dash">—</span><span>You need information</span></li>
            <li><span class="gva-dash">—</span><span>You need a draft</span></li>
            <li><span class="gva-dash">—</span><span>You need ideas</span></li>
          </ul>
        </div>
        <div class="gva-cell" data-tone="green">
          <ul class="gva-bullets">
            <li><span class="gva-dash">—</span><span>Tasks are repetitive</span></li>
            <li><span class="gva-dash">—</span><span>Multiple actions are required</span></li>
            <li><span class="gva-dash">—</span><span>The process is still relatively simple</span></li>
          </ul>
        </div>
        <div class="gva-cell" data-tone="purple">
          <ul class="gva-bullets">
            <li><span class="gva-dash">—</span><span>Multiple steps are involved</span></li>
            <li><span class="gva-dash">—</span><span>Decisions need to be made</span></li>
            <li><span class="gva-dash">—</span><span>Several tasks must be coordinated</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- New capability -->
    <section class="gva-band" aria-labelledby="gva-band-new">
      <h4 id="gva-band-new" class="gva-band-label">New Capability Introduced</h4>
      <div class="gva-band-cells">
        <div class="gva-cell" data-tone="blue"><span class="gva-cap-pill"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Creates content</span></div>
        <div class="gva-cell" data-tone="green"><span class="gva-cap-pill"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Takes action</span></div>
        <div class="gva-cell" data-tone="purple"><span class="gva-cap-pill"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 9 17 20 7"/></svg> Plans and coordinates work</span></div>
      </div>
    </section>
  </div>

  <div class="gva-summary">
    <p class="gva-summary-title">When Should I Use Which?</p>
    <div class="gva-table" role="table" aria-label="When should I use which">
      <div class="gva-table-h" role="columnheader">If You Need To...</div>
      <div class="gva-table-h" role="columnheader">Use</div>
      <div class="gva-table-c" role="cell">Get an answer or draft content</div>
      <div class="gva-table-c" data-tone="blue" role="cell"><strong>LLM (GenAI)</strong></div>
      <div class="gva-table-c" role="cell">Complete a task</div>
      <div class="gva-table-c" data-tone="green" role="cell"><strong>AI Agent</strong></div>
      <div class="gva-table-c" role="cell">Manage a process with multiple steps</div>
      <div class="gva-table-c" data-tone="purple" role="cell"><strong>Agentic AI</strong></div>
    </div>
    <div class="gva-mantras">
      <div class="gva-mantra" data-tone="blue">
        <p class="gva-mantra-kicker">LLM</p>
        <p class="gva-mantra-text">"Tell me."</p>
      </div>
      <div class="gva-mantra" data-tone="green">
        <p class="gva-mantra-kicker">AI Agent</p>
        <p class="gva-mantra-text">"Do it."</p>
      </div>
      <div class="gva-mantra" data-tone="purple">
        <p class="gva-mantra-kicker">Agentic AI</p>
        <p class="gva-mantra-text">"Own it."</p>
      </div>
    </div>
  </div>
</section>



<script>
(function initGvaStickyHeights() {
  var section = document.getElementById('genai-vs-agents');
  if (!section || section.dataset.gvaStickyReady === '1') return;
  section.dataset.gvaStickyReady = '1';
  var heads = section.querySelector('.gva-colheads');
  if (!heads) return;
  function sync() {
    var h = Math.ceil(heads.getBoundingClientRect().height);
    if (h > 0) section.style.setProperty('--gva-colhead-h', h + 'px');
  }
  sync();
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(sync).observe(heads);
  } else {
    window.addEventListener('resize', sync);
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
    <p style="color:var(--gray-01); font-size:13px; line-height:1.6; margin:0 0 20px; padding-left:52px;">Match each description to the correct term. Click a description to select it (it highlights in yellow), then click the matching term on the right.</p>

    <div class="quiz-scorebar">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gray-01)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span style="color:var(--gray-01); font-size:12px;">Score:</span>
      <span id="match-score-val">0 / 9</span>
      <span style="color:var(--gray-01); font-size:12px;">matched</span>
    </div>

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
        var matchScoreEl = document.getElementById('match-score-val');
        if (matchScoreEl) matchScoreEl.textContent = matchCount + ' / 9';
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
      var matchScoreEl = document.getElementById('match-score-val');
      if (matchScoreEl) matchScoreEl.textContent = '0 / 9';
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
let evoNestCollapsed = false;

function toggleEvoNestCollapse() {
  evoNestCollapsed = !evoNestCollapsed;
  const nest = document.getElementById('evo-nest');
  if (!nest) return;
  nest.classList.toggle('is-collapsed', evoNestCollapsed);
  const toggleRow = nest.querySelector('.evo-nest-toggle');
  if (toggleRow) toggleRow.setAttribute('aria-expanded', String(!evoNestCollapsed));
}
window.toggleEvoNestCollapse = toggleEvoNestCollapse;

function renderEvoBreadcrumb(i) {
  const el = document.getElementById('evo-breadcrumb');
  if (!el) return;
  el.innerHTML = EVO_ERAS.map((e, idx) => {
    const state = idx === i ? 'is-current' : idx < i ? 'is-visited' : '';
    const sep = idx > 0 ? '<span class="evo-breadcrumb-sep" aria-hidden="true">›</span>' : '';
    const current = idx === i ? ' aria-current="true"' : '';
    return \`\${sep}<button type="button" class="evo-breadcrumb-item \${state}" onclick="selectEra(\${idx})"\${current}>\${e.short}</button>\`;
  }).join('');
}

function renderEvoNest(i) {
  const nest = document.getElementById('evo-nest');
  const featured = document.getElementById('evo-featured');
  if (!nest || !featured) return;

  renderEvoBreadcrumb(i);

  // Keep the featured card alive — pull it out before rebuilding rings
  featured.remove();

  // Build concentric rings: outer ancestors → inner current wraps featured
  let outer = null;
  let innermost = null;
  for (let depth = 0; depth <= i; depth++) {
    const e = EVO_ERAS[depth];
    const isCurrent = depth === i;
    const role = depth === 0 && i === 0
      ? 'Root layer'
      : isCurrent
        ? 'You are here'
        : (depth === 0 ? 'Parent (root) layer' : 'Parent layer');

    const layer = document.createElement('div');
    layer.className = 'evo-nest-layer ' + (isCurrent ? 'is-current' : 'is-ancestor');
    layer.setAttribute('data-depth', String(depth));

    const row = document.createElement('div');
    row.className = 'evo-nest-row';
    row.innerHTML =
      \`<span class="evo-nest-dot" style="background:\${e.dot}"></span>\` +
      \`<span class="evo-nest-label">\${e.short} · \${e.title}<span class="sr-only"> — \${role}</span></span>\`;

    if (depth === 0 && i > 0) {
      row.classList.add('evo-nest-toggle');
      row.setAttribute('role', 'button');
      row.setAttribute('tabindex', '0');
      row.setAttribute('aria-expanded', String(!evoNestCollapsed));
      row.setAttribute('aria-label', 'Expand or collapse the nested technology layers');
      row.insertAdjacentHTML('beforeend', '<svg class="evo-nest-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4C4CD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>');
      row.addEventListener('click', toggleEvoNestCollapse);
      row.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggleEvoNestCollapse(); }
      });
    }
    layer.appendChild(row);

    if (!outer) outer = layer;
    else innermost.appendChild(layer);
    innermost = layer;
  }

  innermost.appendChild(featured);
  nest.innerHTML = '';
  nest.appendChild(outer);
  nest.classList.toggle('is-collapsed', i > 0 && evoNestCollapsed);
  nest.setAttribute(
    'aria-label',
    'Nesting: ' + EVO_ERAS.slice(0, i + 1).map((e) => e.short).join(' contains ')
  );
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
      <div class="evo-preview-thumb"><img src="\${e.image}" alt=""></div>
      <div class="evo-preview-body">
        <div class="evo-preview-top">
          <div class="evo-preview-left">
            <span class="evo-dot" style="background:\${e.dot}"></span>
            <span class="evo-preview-year">\${e.yearLabel || e.year}</span>
          </div>
          <span class="evo-preview-short">\${relation} · \${e.short}</span>
        </div>
        <p class="evo-preview-title">\${e.title}</p>
        <p class="evo-preview-desc">\${e.preview}</p>
      </div>
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
 */const ev=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tv=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,s,p)=>p?p.toUpperCase():s.toLowerCase()),Ep=i=>{const o=tv(i);return o.charAt(0).toUpperCase()+o.slice(1)},gf=(...i)=>i.filter((o,s,p)=>!!o&&o.trim()!==""&&p.indexOf(o)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=z.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:p,className:c="",children:f,iconNode:g,...x},m)=>z.createElement("svg",{ref:m,...nv,width:o,height:o,stroke:i,strokeWidth:p?Number(s)*24/Number(o):s,className:gf("lucide",c),...x},[...g.map(([v,k])=>z.createElement(v,k)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(i,o)=>{const s=z.forwardRef(({className:p,...c},f)=>z.createElement(rv,{ref:f,iconNode:o,className:gf(`lucide-${ev(Ep(i))}`,`lucide-${i}`,p),...c}));return s.displayName=Ep(i),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Gs=ht("arrow-right",iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ov=ht("chevron-right",av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],sv=ht("circle-check-big",lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],cv=ht("copy",dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],pv=ht("cpu",uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],hv=ht("eye-off",fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],mv=ht("file-text",gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],vv=ht("list-checks",xv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]],bv=ht("list-tree",yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],kv=ht("palette",wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jv=ht("rotate-ccw",Cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Sv=ht("scale",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Fv=ht("shield",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]],mf=ht("table-2",zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Lv=ht("target",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],xf=ht("user",Tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mv=ht("zap",Nv),Ot={page:u.confidentBlack,surface:u.offBlack,yellow:u.yellow,yellowSoft:"rgba(255, 230, 0, 0.10)",border:"#2E2E38",body:u.gray02,caption:u.gray01,white:u.white};function cd({eyebrow:i="What's Next",title:o,description:s,ctaLabel:p,onContinue:c,meta:f,id:g="whats-next",style:x}){return r.jsx("section",{id:g,"aria-labelledby":`${g}-heading`,style:{background:Ot.page,padding:`${Mt.sectionPaddingY} ${Oo}`,textAlign:"center",borderTop:`1px solid ${Ot.border}`,...x},children:r.jsxs("div",{style:{maxWidth:640,margin:"0 auto",padding:"48px 40px",background:Ot.surface,border:`1px solid ${Ot.border}`,borderRadius:16,boxShadow:"0 16px 40px rgba(0,0,0,0.35)"},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",background:Ot.yellowSoft,border:`1px solid ${Ot.yellow}`,borderRadius:100,padding:"4px 12px",marginBottom:16},children:r.jsx("span",{style:{color:Ot.yellow,fontSize:12,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",fontFamily:C.bold,lineHeight:1.2},children:i})}),r.jsx("h2",{id:`${g}-heading`,style:{margin:"0 0 14px",fontSize:32,lineHeight:"38px",fontWeight:700,color:Ot.white,fontFamily:C.bold},children:o}),r.jsx("p",{style:{margin:"0 0 28px",fontSize:15,lineHeight:"22px",color:Ot.body,fontFamily:C.regular},children:s}),r.jsxs("button",{type:"button",onClick:c,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px 28px",fontSize:15,fontWeight:700,fontFamily:C.bold,background:Ot.yellow,color:Ot.page,border:"none",borderRadius:8,cursor:"pointer",lineHeight:1.2},children:[p,r.jsx(Gs,{size:16,"aria-hidden":!0})]}),f?r.jsx("p",{style:{margin:"18px 0 0",fontSize:13,lineHeight:1.5,color:Ot.caption,fontFamily:C.regular},children:f}):null]})})}function vf({children:i}){return r.jsx("span",{style:{color:Ot.yellow},children:i})}const Rv=`
#module-content {
  /* Colour tokens (design-kit) */
  --ey-yellow: ${u.yellow};
  --eyebrow-gold: ${u.eyebrowGold};
  --white: ${u.white};
  --off-white: ${u.offWhite};
  --gray-02: ${u.gray02};
  --gray-01: ${u.gray01};
  --ey-dark: ${u.offBlack};
  --confident-black: ${u.confidentBlack};
  --muted-foreground: ${u.gray01};

  /* Surface aliases used by the lesson CSS */
  --ey-bg: ${u.white};
  --ey-bg-alt: ${u.offWhite};
  --ey-bg-deep: ${u.offWhite};
  --card-bg: ${u.white};
  --text-secondary: ${u.gray01};
  --surface-neutral: ${u.offWhite};
  --accent-blue: ${u.frameBlue};
  --accent-green: ${u.frameGreen};
  --accent-purple: ${u.framePurple};
  --accent-orange: ${u.frameOrange};

  /* Dark-module tokens (design-kit) */
  --ey-on-dark: ${u.onDark};
  --ey-on-dark-72: ${u.onDarkMuted};
  --ey-on-dark-55: ${u.onDarkSubtle};
  --ey-surface-on-dark: ${u.surfaceOnDark};
  --ey-border-on-dark: ${u.borderOnDark};
  --ey-yellow-alpha-10: ${u.yellowAlpha10};
  --ey-bg-card: ${u.eyBgCard};

  /* Spacing + global content rail (change layout.contentWidth once → all pages) */
  --ey-content-width: ${Uo.contentWidth};
  --ey-content-inline-pad: calc((100% - var(--ey-content-width)) / 2);
  --section-padding: ${Mt.sectionPaddingY} var(--ey-content-inline-pad);
  --card-padding: ${Mt.cardPadding};

  font-family: ${C.regular};
  background: ${u.white};
  color: ${u.offBlack};
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* Reality Check — EY Off White light-grey band */
#module-content .wrong-section,
#module-content #reality-check {
  background: ${u.offWhite} !important;
}

/* Restore intended section breathing room (lesson used 90px 60px / 80px / 64px;
   unify major .section blocks on the kit's section padding). */
#module-content .section,
#module-content .rise-section,
#module-content .wrong-section,
#module-content .paths-section,
#module-content .gva-section,
#module-content .cheat-section {
  padding: var(--section-padding);
}

/* Cheat Sheet — pin EY kit surfaces so dark glass styles cannot leak back in */
#module-content .cheat-section {
  background: ${u.offWhite} !important;
  color: ${u.offBlack};
  border-bottom: 1px solid ${u.gray02};
}
#module-content .cheat-title { color: ${u.offBlack} !important; }
#module-content .cheat-subtitle { color: ${u.gray01} !important; }
#module-content .cheat-card {
  background: ${u.white};
  border: 1px solid ${u.gray02};
  border-radius: 8px;
}
#module-content .cheat-card h3 { color: ${u.offBlack}; }
#module-content .cheat-card-desc { color: ${u.gray01}; }
#module-content .cheat-card-eg {
  background: ${u.offWhite};
  border: 1px solid ${u.gray02};
  border-left: 3px solid ${u.yellow};
  color: ${u.offBlack};
  border-radius: 6px;
  padding: 10px 12px;
  width: 100%;
  box-sizing: border-box;
  word-break: break-word;
  overflow-wrap: anywhere;
}
#module-content .cheat-columns { width: 100%; max-width: none; }
@media (max-width: 900px) {
  #module-content .cheat-columns { grid-template-columns: 1fr; }
}

/* Content rail — section padding already insets to layout.contentWidth;
   inner grids fill that rail (not the full viewport). */
#module-content .rise-grid,
#module-content .wrong-grid,
#module-content .gva-compare,
#module-content .gva-band-cells,
#module-content .gva-colheads,
#module-content .paths-row,
#module-content .hero-inner,
#module-content .velocity-header,
#module-content .velocity-card,
#module-content #evo-timeline-view,
#module-content .news-grid,
#module-content .cheat-columns {
  width: 100%;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
}

/* LLM vs AI Agent vs Agentic AI — EY dark-module tokens only (no ad-hoc rgba washes) */
#module-content .gva-section {
  --gva-sticky-top: ${jt}px;
  --gva-page: ${u.confidentBlack};
  --gva-card: ${u.eyBgCard};
  --gva-border: ${u.borderOnDark};
  --gva-surface: ${u.surfaceOnDark};
  --gva-text: ${u.onDark};
  --gva-text-muted: ${u.onDarkMuted};
  --gva-text-subtle: ${u.onDarkSubtle};
  --gva-yellow: ${u.yellow};
  --gva-yellow-soft: ${u.yellowAlpha10};
  --gva-blue: ${u.frameBlue};
  --gva-green: ${u.frameGreen};
  --gva-purple: ${u.framePurple};
  --gva-radius: 8px;
  --gva-gap: 24px;
  --gva-pad: ${Mt.cardPadding};
  background: ${u.confidentBlack} !important;
  color: ${u.onDark};
  font-family: ${C.regular};
}
#module-content .gva-title { font-family: ${C.bold}; color: ${u.onDark} !important; }
#module-content .gva-colheads,
#module-content .gva-band-label { background: ${u.confidentBlack}; }
#module-content .gva-band-label { color: ${u.yellow}; }
#module-content .gva-colhead,
#module-content .gva-cell,
#module-content .gva-summary { background: ${u.eyBgCard}; border-color: ${u.borderOnDark}; }
#module-content .gva-compare,
#module-content .gva-band-cells,
#module-content .gva-colheads {
  width: 100%;
  max-width: none;
}

#module-content .hero {
  padding: 72px var(--ey-content-inline-pad) 80px;
}
#module-content .velocity-section,
#module-content .quiz-section,
#module-content .evo-section,
#module-content .sim-section {
  padding-left: var(--ey-content-inline-pad) !important;
  padding-right: var(--ey-content-inline-pad) !important;
}

#module-content [id] {
  scroll-margin-top: ${jt}px;
}
`;function Bv(i){const o=[],s=[];let p=i.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi,(x,m)=>(o.push(m),""));p=p.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi,(x,m)=>(m.trim()&&s.push(m),""));const c=p.match(/<body[^>]*>([\s\S]*)<\/body>/i),f=c?c[1]:p;let g=o.join(`
`);return g=g.replace(/\*,\s*\*::before,\s*\*::after\s*\{[^}]*\}/,`#module-content { margin: 0; padding: 0; }
#module-content, #module-content *, #module-content *::before, #module-content *::after { box-sizing: border-box; }`),g=g.replace(/(^|})\s*body\s*\{/g,`$1
#module-content {`),g=g.replace(/(^|})\s*:root\s*\{/g,`$1
#module-content {`),g+=`
${Rv}
`,{css:g,body:f,scripts:s}}function Dv({onBack:i,onNavigate:o}){const{css:s,body:p,scripts:c}=z.useMemo(()=>Bv(jp),[jp]),f=z.useRef(null),g=z.useRef(!1);return z.useEffect(()=>{if(g.current)return;g.current=!0;const x=[];for(const v of c){const k=document.createElement("script");k.text=v,document.body.appendChild(k),x.push(k)}const m=window;return typeof m.initEvoExplorer=="function"&&m.initEvoExplorer(),()=>{x.forEach(v=>v.remove()),g.current=!1}},[c]),r.jsxs("div",{style:{position:"fixed",inset:0,overflowY:"auto",background:u.white},children:[r.jsx(fi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),r.jsx(Yo,{currentModuleId:"foundational",onNavigate:o,onBack:i}),r.jsxs("div",{id:"module-content",ref:f,children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:s}}),r.jsx("div",{dangerouslySetInnerHTML:{__html:p}})]}),r.jsx(cd,{title:r.jsxs(r.Fragment,{children:["Fundamentals are clear.",r.jsx("br",{}),"Now it's time to ",r.jsx(vf,{children:"use AI effectively."})]}),description:"You now understand what AI is, how it works, where it fails, and why fundamentals matter. The next step is learning how to interact with it — how to craft prompts that deliver real, usable results in tax work.",ctaLabel:"Continue to Part 2: Basics of Prompting in Tax",onContinue:()=>o("/ai-tax-prompting"),meta:"Part 2 covers: prompt structure, role-setting, context framing, output formatting, and real tax prompt templates"})]})}const Ke={dark:{bg:u.confidentBlack,heading:u.onDark,body:u.gray02,border:u.borderOnDark},neutral:{bg:u.offWhite,heading:u.confidentBlack,body:u.gray01,border:"rgba(46,46,56,0.10)"},light:{bg:u.white,heading:u.confidentBlack,body:u.gray01,eyebrow:u.eyebrowGold,border:"rgba(46,46,56,0.10)"}},yf=[{id:1,name:"Persona",color:u.frameMagenta,border:u.frameMagenta,q:"WHO should AI be?",what:"Defines who the AI should act like — setting its expertise, seniority, and perspective. A tax partner writes differently from a junior analyst.",why:"Aligns output to the expertise level you need. Without it, AI defaults to a generic voice that doesn't match your audience.",without:'"Explain impact of New Tax Act on MNCs."',with:'"You are a senior tax partner in India. Explain impact of withholding tax changes in the New Income Tax Act, 2025 on MNCs."'},{id:2,name:"Context",color:u.frameTeal,border:u.frameTeal,q:"WHAT's the background?",what:"Background information for the task — the who, what, where, and when surrounding your query.",why:"Without context, AI gives generic answers that miss your specific situation entirely.",without:'"Explain recent changes to transfer pricing regulations."',with:'"Our client in India provides IT support to its parent in Singapore. Explain recent TP Regulation changes in 2025."'},{id:3,name:"Instruction",color:u.yellow,border:u.yellow,q:"WHAT should AI do?",what:"A clear task or command — the specific action you want AI to perform. No ambiguity.",why:`Define what "significant" or "recent" means — don't leave it to AI to guess.`,without:'"Summarise significant recent tax exposures of the Indian target company"',with:'"Summarise tax exposures above INR 25 crore, under dispute in the last 3 assessment years."'},{id:4,name:"Constraints & Boundaries",color:u.frameBlue,border:u.frameBlue,q:"WHAT are the limits?",what:"Setting limits on scope, detail, or length — guardrails that keep AI focused.",why:"Without limits, AI may produce 2000 words when you needed 200.",without:'"Summarise GST refund changes."',with:'"In under 200 words, summarise July 2025 GST refund changes for exporters."'},{id:5,name:"Grounding / Source Anchoring",color:u.framePurple,border:u.framePurple,q:"WHERE should AI look?",what:"Instructing AI to use specific statutes, circulars, or case law as its reference base.",why:"Prevents hallucination and ensures legal accuracy. Ungrounded output is dangerous output.",without:'"Explain safe harbour rules."',with:'"According to the Income-tax Act, 1961 and latest CBDT circulars, explain safe harbour applicability to cross-border service fees."'},{id:6,name:"Tone / Style",color:u.yellow,border:u.yellow,q:"HOW should it sound?",what:"Directing AI to adopt a formal, client-ready, or simplified style matching your audience.",why:"A CFO needs different language than an internal audit team or ITAT bench.",without:'"Draft an email to the client regarding new GST slab rates"',with:'"Explain new GST slab changes in formal and concise manner, suitable for Tax Head of a Logistics company"'},{id:7,name:"Output Format",color:u.frameGreen,border:u.frameGreen,q:"WHAT shape should the answer take?",what:"Specifies desired format — table, bullets, email, memo, comparison chart, etc.",why:"Output is immediately usable without reformatting — saves editing time.",without:'"Compare old vs new tax rates."',with:'"Provide a table comparing old vs new tax rates, followed by 3 bullet-point risks and recommendations."'}],Pv=[{title:"Be Specific & Give Context",desc:"Mention your industry, jurisdiction (e.g. India — GST / IT Act), entity type and financial year. The more context you give, the more relevant and accurate the output.",example:'"I am the Tax Head of an Indian pharma company (₹2,000 Cr turnover). Explain Section 43B(h) implications for MSME vendor payments in FY 2025-26."'},{title:"Structure Your Ask",desc:'Use a clear format: "I am a [CFO / MD]. My situation is [X]. Please explain [Y] in simple terms." A structured prompt consistently yields a structured, usable response.',example:'"I am a CFO. My company received a transfer pricing adjustment of ₹45 Cr. Explain my appeal options at CIT(A) and ITAT in 5 bullet points."'},{title:"Define the Output Format",desc:"Specify what you need — a comparison table, a bullet checklist, or an executive summary. AI will match the format you request, saving you editing time.",example:'"Provide a table comparing old vs new GST rates for logistics services, with columns: Service, Old Rate, New Rate, Effective Date, Impact."'},{title:"Iterate and Refine",desc:'Treat it as a dialogue. Follow up with "Simplify this", "Focus only on MSME applicability" or "Add a practical example." Each refinement improves precision.',example:`"That's good, but simplify the language for a board presentation. Remove all section references and focus on business impact only."`},{title:"Anonymise Sensitive Data",desc:"Replace actual PAN, GSTIN, client names and financials with dummy figures before prompting. You still get meaningful insights without compromising confidentiality.",example:'"Company A (manufacturing, turnover ₹X Cr) has paid ₹Y Cr to Company B (US parent) as management fees. Analyze withholding obligations."'},{title:"Validate With Your Advisor",desc:"Use AI for first-level research and drafting only. All final decisions on filings, compliance positions and strategy must be confirmed with your qualified tax advisor.",example:'"Use this AI output as a starting point for discussion with your EY tax team — never as standalone advice for filings or board decisions."'}],Hv=[{title:"Don't Be Vague",desc:'"Tell me about taxes" produces generic output. Instead: "Explain the impact of Section 43B(h) on MSME vendor payments for FY 2024-25 for a private limited company."',example:`❌ "What are the latest tax changes?" → AI doesn't know which country, which tax, which year, or which entity type you mean.`},{title:"Don't Stack Multiple Questions",desc:"Asking ten questions in one prompt produces ten diluted answers. Break it down — one focused question at a time delivers sharper, actionable output.",example:'❌ "Explain GST, income tax changes, TDS rates, advance tax dates and MAT provisions for 2025-26" — this will get shallow answers on everything.'},{title:"Don't Enter Confidential Data",desc:"Real PAN, GSTIN, client names, account numbers and actual financial data must never be entered into a public AI tool. Data confidentiality is non-negotiable.",example:'❌ Never type: "PAN: AABCX1234Z, GSTIN: 27AABCX1234Z1ZP, actual assessment order details" into ChatGPT or Gemini.'},{title:"Don't Treat AI as Final Authority",desc:"AI can generate plausible but incorrect information, including outdated tax provisions. Never use AI output directly for returns, filings, or board-level decisions.",example:"❌ AI may confidently cite a section number that was amended or a circular that was superseded. Always cross-verify with current law."},{title:"Don't Omit Jurisdiction",desc:"Tax rules vary significantly by country, state and entity type. Without a clear jurisdiction, AI defaults to generic — and often inapplicable — answers.",example:`❌ "What's the capital gains tax rate?" — For whom? India resident? NRI? Company? On what asset? Which holding period? Specify everything.`},{title:"Don't Accept the First Response as Final",desc:'Always probe the output. Ask "Which section covers this?" or "Is this current for AY 2025-26?" Critical review of AI responses is part of responsible usage.',example:"❌ Copy-pasting AI's first draft into a client email without reviewing for accuracy, tone, and completeness is a professional risk."}],di=[{id:"techniques",name:"Pro Techniques",color:u.frameBlue,summary:"Now that you know the elements, here are 8 techniques to level up your prompting game.",techniques:[{id:"few-shot",name:"Few-Shot Prompting",tagline:"SHOW AI what good looks like",what:"Providing 1-3 examples of ideal input-output pairs before asking your actual question — so AI learns the pattern you want.",does:"Like showing a new associate a sample memo before asking them to draft one — the output matches your style and standard.",without:'"Draft a tax equalisation policy for employees relocating from India to the US."',with:'"Here is a sample tax equalisation policy [attached]. Using the same format and structure, draft a policy for India-to-US relocations."'},{id:"iteration",name:"Iteration",tagline:"BUILD on what AI gives you",what:"Using multi-turn conversations — asking AI to improve, expand, or restructure its own previous output step by step.",does:"First drafts are starting points. Each follow-up sharpens precision — like reviewing a junior's memo through rounds of feedback.",without:'"Summarize this SC ruling and draft a client memo."',with:'Turn 1: "Summarize the facts and ruling." → Turn 2: "Now draft a 1-page client memo." → Turn 3: "Simplify for a non-tax CFO audience."'},{id:"cot",name:"Chain of Thought",tagline:"MAKE AI show its reasoning",what:'Asking AI to "think step by step" — making it show its reasoning before giving the final answer so you can verify the logic.',does:"Like asking an associate to show their workings, not just the conclusion. You can spot errors in reasoning before they reach the client.",without:'"What is the effective tax rate for MNCs with royalty payments?"',with:'"Think step by step: First identify applicable provisions, then calculate base rate, add surcharge and cess, factor in DTAA, and arrive at the effective rate for MNCs with royalty payments."'},{id:"meta",name:"Meta Prompt",tagline:"ASK AI to write the prompt for you",what:"A prompt that instructs AI to generate an optimised prompt for you — describe your use case and let AI craft the perfect structured instruction.",does:"You don't need to remember every technique. Describe what you need and let AI build the optimal prompt structure for you.",without:'"Help me respond to a GST show cause notice on product classification."',with:`"You are an expert prompt crafter. My use case: I'm a Tax Head responding to a GST SCN on misclassification. Craft me an optimal prompt that includes persona, context, task, constraints, and step-back reasoning."`},{id:"refinement",name:"Refinement",tagline:"SHARPEN the output after review",what:"Asking AI to critique and improve its own output — reviewing as a partner would, fixing gaps, strengthening arguments.",does:"AI catches its own weak spots. Like asking an associate to self-review before submitting — the second pass is always stronger.",without:'"Draft a TP memo for IT services." (accept whatever comes back)',with:'"Now review your own draft as if you are the reviewing partner. Identify gaps in legal reasoning, strengthen weak arguments, and produce an improved version."'},{id:"expansion",name:"Creative Expansion",tagline:"EXPLORE angles you haven't considered",what:"Asking AI to brainstorm alternative approaches, counterarguments, or edge cases you may not have considered.",does:"Uncovers blind spots in your analysis. Like having a second opinion from a specialist in a different tax domain.",without:'"Analyze the tax implications of this cross-border restructuring."',with:'"Analyze the restructuring, then list 5 risks I might be overlooking — including GAAR, PE exposure, and indirect transfer provisions that a revenue officer might raise."'},{id:"audience",name:"Audience Targeting",tagline:"TAILOR for who will read it",what:"Explicitly telling AI who the reader is — so it adjusts complexity, jargon level, and depth accordingly.",does:"A board presentation needs different language than an ITAT submission. Name your reader and AI writes for them.",without:'"Explain POEM rules under Section 6(3)."',with:'"Explain POEM rules under Section 6(3) in simple language for a CFO with no tax background. Avoid section references — focus on business impact and what action they need to take."'},{id:"flipped",name:"Flipped Prompting",tagline:"LET AI ask YOU the questions",what:"Instead of you writing the prompt, ask AI to interview you — it asks clarifying questions first, then produces a tailored output.",does:"When you don't know how to frame the problem, let AI guide you. It surfaces context you might have forgotten to include.",without:'"Help me with a tax restructuring advisory." (dumps everything at once, misses key details)',with:'"I need help with a restructuring advisory. Before you start, ask me 5 clarifying questions about the entities, jurisdictions, transaction type, timeline, and key concerns."'}]}],_v=[{key:"what",label:"What it is",color:u.frameBlue},{key:"does",label:"Why it matters",color:u.frameOrange},{key:"without",label:"Without",color:u.destructive},{key:"with",label:"With",color:u.success}],Ov=[{id:"cot",name:"Chain of Thought (CoT)",color:u.frameBlue,rows:[{name:"Step-back Prompting",does:"Asks AI to consider the broader principle first, then apply it to the specific question",taxUse:"Before analyzing a GAAR provision, ask AI to first outline general anti-avoidance principles globally, then apply to the Indian context"},{name:"Analogical Prompting",does:"Draws parallels from a familiar domain to solve a novel problem",taxUse:"Compare India's equalisation levy treatment to how the EU's digital services tax works to find strategic gaps"},{name:"Thread of Thought",does:"Maintains reasoning continuity across a multi-turn conversation without losing context",taxUse:"Multi-turn TP analysis — first define the transaction, then benchmark, then apply safe harbour, building on each prior response"},{name:"Tabular CoT",does:"Organizes step-by-step reasoning into a structured table for clarity",taxUse:"Break down withholding tax obligation by category (royalty, FTS, interest) with rate, treaty, and section in columns"},{name:"Active CoT",does:"Selects the most informative examples to demonstrate reasoning before answering",taxUse:"Provide 2–3 ITAT rulings as worked examples, then ask AI to analyze your case using the same reasoning pattern"},{name:"Auto CoT",does:"AI automatically generates its own chain-of-thought demonstrations before solving",taxUse:`"First show me how you would approach a PE determination, then apply that framework to our client's facts"`},{name:"Complexity-based CoT",does:"Uses the most complex reasoning chains as demonstrations for harder problems",taxUse:"For multi-layered cross-border restructuring, show AI a complex worked example before asking it to handle yours"},{name:"Contrastive CoT",does:"Shows both correct and incorrect reasoning paths to improve accuracy",taxUse:`"Here's a wrong application of Section 9(1)(vi). Here's the correct one. Now analyze this new scenario."`},{name:"Memory of Thought",does:"Retains and reuses reasoning patterns from previously solved problems",taxUse:"Refer back to AI's earlier analysis of Client A's DTAA position when analyzing Client B's similar structure"},{name:"Uncertainty Routed CoT",does:"Triggers more detailed step-by-step reasoning when AI is uncertain about an answer",taxUse:`"If you're less than 80% confident, show your full reasoning with alternative positions and cite sources"`}]},{id:"decomposition",name:"Decomposition",color:u.frameOrange,rows:[{name:"Tree of Thoughts",does:"Explores multiple reasoning paths in a branching tree structure, evaluating each branch before choosing the best",taxUse:"For tax restructuring — explore 3 parallel structures (merger, demerger, slump sale), evaluate tax cost of each path, then recommend"},{name:"Graph of Thoughts",does:"Extends tree thinking into a graph where reasoning paths can merge, split, and reconnect",taxUse:"Analyze circular shareholding structures where entities have multiple cross-holdings — map tax implications as interconnected nodes"}]},{id:"ensembling",name:"Ensembling",color:u.frameTeal,rows:[{name:"Multiple Runs",does:"Generates multiple outputs for the same prompt and selects the most consistent or highest-quality result",taxUse:"Run your TP benchmarking question 3 times with slight variations, then pick the analysis that's most aligned with OECD guidelines"},{name:"Synthesise",does:"Combines multiple AI outputs into a single refined, comprehensive answer",taxUse:"Generate separate analyses for direct tax, indirect tax, and TP angles of a transaction, then ask AI to synthesize into one unified advisory"}]},{id:"self-criticism",name:"Self-Criticism",color:u.framePurple,rows:[{name:"Self-Calibration",does:"AI assesses its own confidence level and flags areas where it may be unreliable",taxUse:'"Rate your confidence (1-10) for each position in this tax opinion. For anything below 7, flag it for human review."'},{name:"Self-Refine",does:"AI iteratively critiques and improves its own output without human intervention",taxUse:'"Draft a client memo, then review it as if you are the reviewing partner. Improve the draft based on your own feedback."'},{name:"Chain of Verification",does:"AI generates verification questions to fact-check its own claims before presenting",taxUse:'"After your analysis, list 5 factual claims you made and verify each against the attached statute. Correct any errors."'},{name:"Reversed CoT",does:"Works backward from the conclusion to verify whether the reasoning actually supports it",taxUse:'"You concluded no PE exists. Now work backward — what facts would need to change for a PE to be established? Does our case pass?"'}]}],Sp=[{element:"Persona",question:"Who is the AI?",example:"Senior Tax Partner, India"},{element:"Context",question:"What's the situation?",example:"Client has cross-border IT support arrangement"},{element:"Instruction",question:"What exactly should it do?",example:"Summarise exposures above INR 25 Cr"},{element:"Constraints",question:"What are the limits?",example:"Under 200 words, last 3 assessment years"},{element:"Grounding",question:"Which sources apply?",example:"Income-tax Act, 1961 + CBDT circulars"},{element:"Tone",question:"How should it sound?",example:"Formal, client-ready"},{element:"Output",question:"What format?",example:"Table + 3 bullet risks"}],Wv=[{icon:xf,name:"Persona",color:u.frameMagenta,bg:"rgba(255,50,255,0.06)",desc:`Tell AI WHO to be. Like telling a new colleague: "Pretend you're a senior tax partner" — so it talks like one, not like a Wikipedia article.`},{icon:mv,name:"Context",color:u.frameTeal,bg:"rgba(50,255,255,0.06)",desc:"Give the background story. Like telling a taxi driver WHERE you're going — without it, AI drives in circles giving generic answers."},{icon:vv,name:"Instruction",color:u.yellow,bg:"rgba(255,230,0,0.08)",desc:`Say exactly WHAT to do. Like ordering food: "Give me a paneer tikka" works. "Give me something nice" doesn't.`},{icon:Fv,name:"Constraints",color:u.frameBlue,bg:"rgba(70,150,255,0.08)",desc:'Set boundaries. Like telling a kid "draw me a picture — but only use 3 colours and keep it on one page." Keeps AI focused.'},{icon:Sv,name:"Grounding",color:u.framePurple,bg:"rgba(180,0,255,0.06)",desc:'Tell AI WHERE to look. Like saying "only use THIS textbook for answers" — prevents it from making things up.'},{icon:kv,name:"Tone / Style",color:u.yellow,bg:"rgba(255,230,0,0.08)",desc:`Tell AI HOW to sound. Like asking someone: "Explain it like I'm presenting to a CFO" vs "Explain it to a 5-year-old." Same info, different packaging.`},{icon:mf,name:"Output Format",color:u.frameGreen,bg:"rgba(0,200,100,0.08)",desc:'Tell AI WHAT SHAPE the answer should take. Like saying "give me a table, not a paragraph" — saves you 20 minutes of reformatting.'}],$v=[{label:"User",value:"ABC Corp"},{label:"Issue",value:"Royalty payments"},{label:"Jurisdiction",value:"India"},{label:"Output",value:"1-page memo"},{label:"Deadline",value:"Thursday"},{label:"Audience",value:"User-ready"}],Vv={prompts:[{id:"b1",answer:"persona",text:'"You are a senior international tax partner with 20 years of experience in India-US DTAA matters. Analyze whether this payment qualifies as royalty under Article 12."'},{id:"b2",answer:"context",text:'"Our client is an Indian subsidiary of a US pharma company. They pay ₹50 Cr annually as management fees to the parent. The AO has disallowed this under Section 37. The matter is pending before CIT(A)."'},{id:"b3",answer:"output",text:`"Present your analysis as a 3-column table with columns: Issue, Taxpayer's Position, Revenue's Likely Argument. Follow with 5 bullet-point recommendations."`},{id:"b4",answer:"constraints",text:'"Keep your response under 300 words. Focus only on the indirect transfer provisions under Section 9(1)(i). Do not cover capital gains computation or exemptions."'},{id:"b5",answer:"grounding",text:'"Base your analysis strictly on the Supreme Court ruling in Engineering Analysis Centre of Excellence (2022) and the CBDT Circular No. 17/2023. Do not rely on tribunal decisions."'}],elements:[{id:"grounding",label:"Grounding / Source Anchoring"},{id:"persona",label:"Persona"},{id:"constraints",label:"Constraints & Boundaries"},{id:"output",label:"Output Indicator"},{id:"context",label:"Context"}],scoreMsg:"You've got the basics down! These elements form the foundation of every effective prompt."},Uv={prompts:[{id:"a1",answer:"step-back",text:`"Before analyzing whether our client's arrangement triggers GAAR, first explain the general principles of anti-avoidance across OECD jurisdictions. Then apply those principles to the Indian GAAR provisions under Chapter X-A."`},{id:"a2",answer:"tree-of-thoughts",text:'"Consider 3 possible restructuring paths for this demerger: (A) tax-neutral under Section 2(19AA), (B) slump sale under Section 50B, (C) itemised sale of assets. Evaluate tax cost of each path separately, then recommend the optimal one."'},{id:"a3",answer:"self-refine",text:'"Draft a transfer pricing documentation memo for this IT services transaction. Then review your own draft as if you were the reviewing tax partner. Identify gaps, strengthen weak arguments, and produce an improved final version."'},{id:"a4",answer:"chain-verification",text:'"After completing your analysis of the PE exposure, list every factual claim and legal citation you made. Verify each one against the attached India-Singapore DTAA text. Correct any errors before presenting the final output."'},{id:"a5",answer:"analogical",text:`"The EU's digital services tax applies a 3% levy on revenues from targeted digital services. Using this as a parallel, analyze how India's Equalisation Levy (2%) compares in scope, applicability, and treaty override implications."`}],elements:[{id:"analogical",label:"Analogical Prompting"},{id:"chain-verification",label:"Chain of Verification"},{id:"step-back",label:"Step-back Prompting"},{id:"self-refine",label:"Self-Refine"},{id:"tree-of-thoughts",label:"Tree of Thoughts"}],scoreMsg:"Impressive! You can identify advanced techniques — now use them to supercharge your prompts."};function _s(){return{selectedPromptId:null,correctCount:0,answeredCount:0,solvedPrompts:{},matchedElements:{},incorrectPromptId:null,highlightElementId:null,showScore:!1,scoreMessage:""}}function Ap(i,o){return o===5?i==="basic"?"🎉 Perfect score! You've mastered the basic prompt elements. Time to level up!":"🎉 Flawless! You can identify advanced techniques like a pro — now deploy them in your tax work.":o>=3?i==="basic"?"Solid foundation! Review the ones you missed and try again.":"Good grasp of advanced techniques! A quick review of the missed ones will make you unstoppable.":i==="basic"?"Worth another try — scroll up to the Prompt Elements section for a refresher.":"These are tricky! Revisit the Advanced Techniques section and give it another go."}const Ho=yf.map(i=>{var o,s;return{id:i.id,name:i.name.replace(" / "," · "),shortName:i.name.split(" / ")[0],question:((o=Sp[i.id-1])==null?void 0:o.question)??i.q,example:((s=Sp[i.id-1])==null?void 0:s.example)??"",color:i.color,border:i.border,fragment:["You are an Indian Tax Professional specializing in the Indian Income-tax Act and allied laws, with expertise in cross-border withholding tax and software royalty transactions.",'ABC Software Solutions Pvt. Ltd. (Pune, India) pays software license fees to its US parent XYZ Inc. The company needs clarity on whether these payments constitute "royalty" under the Income-tax Act and the India-US DTAA.',`1. Analyze the SC ruling in Engineering Analysis Centre of Excellence and categorize the EULAs.
2. Analyze the attached Software License EULA clause by clause.
3. Draft a client memo covering background, EULA analysis, documentation checklist, and withholding tax position.`,"Scope: Withholding tax implications only. Do not cover GST, corporate tax, or transfer pricing. Keep the memo under 3 pages.","Base your analysis strictly on the Income Tax Act 1961, Income Tax Rules 1962, the SC ruling in EACoE (2022), and applicable DTAA provisions. Do not cite tribunal decisions unless directly relevant.","Draft in a formal, client-ready advisory style suitable for the Tax Head of a software company. Use professional language, avoid jargon where possible.","Present the EULA analysis as a table (Term | SC Interpretation). Provide clause analysis in a 3-column table (Clause | Description | SC Ruling). End with a numbered action checklist."][i.id-1]}});function Yv(i){return[...i].sort((o,s)=>o-s).map(o=>{var s;return(s=Ho.find(p=>p.id===o))==null?void 0:s.fragment}).filter(Boolean).join(" ")}function Gv(){const[i,o]=z.useState([]),[s,p]=z.useState(!1),c=`2px solid ${u.yellow}`,f=new Set(i),g=[...i].sort((b,S)=>b-S).map(b=>Ho.find(S=>S.id===b)).filter(Boolean),x=Yv(i),m=b=>{o(S=>S.includes(b)?S.filter(I=>I!==b):[...S,b]),p(!1)},v=()=>{o([]),p(!1)},k=async()=>{x&&(await navigator.clipboard.writeText(x),p(!0),setTimeout(()=>p(!1),2e3))};return r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(240px, 280px) 1fr",gap:24,height:560,minHeight:560,background:u.offWhite,border:"1px solid rgba(46,46,56,0.10)",borderRadius:12,padding:20},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:0},children:[r.jsx("p",{style:{fontSize:13,color:u.gray01,fontFamily:C.regular,lineHeight:1.5,marginBottom:12,flexShrink:0},children:"Click to add each layer:"}),r.jsx("div",{role:"group","aria-label":"Prompt elements",style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",flex:1,paddingRight:4},children:Ho.map(b=>{const S=f.has(b.id);return r.jsxs("button",{type:"button","aria-pressed":S,onClick:()=>m(b.id),style:{width:"100%",display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:8,cursor:"pointer",textAlign:"left",background:S?"rgba(255,230,0,0.18)":u.white,border:S?`1.5px solid ${u.yellow}`:"1px solid rgba(46,46,56,0.12)",flexShrink:0},onFocus:I=>{I.currentTarget.style.outline=c},onBlur:I=>{I.currentTarget.style.outline="none"},children:[r.jsx("span",{style:{width:26,height:26,borderRadius:"50%",flexShrink:0,background:S?u.yellow:b.color+"22",border:S?"none":`1.5px solid ${b.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:S?u.confidentBlack:b.color,fontFamily:C.bold},children:b.id}),r.jsx("span",{style:{minWidth:0},children:r.jsx("span",{style:{display:"block",fontSize:13,fontWeight:700,color:S?u.offBlack:u.confidentBlack,fontFamily:C.bold},children:b.shortName})})]},b.id)})}),r.jsxs("p",{style:{fontSize:11,color:u.gray01,fontFamily:C.regular,marginTop:10,flexShrink:0},children:[i.length," of ",Ho.length," added"]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:0,height:"100%"},children:[r.jsx("div",{"aria-label":"Prompt element stack",style:{flex:1,minHeight:0,overflowY:"auto",background:"transparent",border:"1px solid rgba(46,46,56,0.08)",borderRadius:"12px 12px 0 0",padding:"20px 24px"},children:g.length===0?r.jsx("div",{style:{height:"100%",minHeight:160,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("p",{style:{fontSize:14,color:u.gray01,fontFamily:C.regular,margin:0,textAlign:"center",maxWidth:320,lineHeight:1.6},children:"Click the ingredients on the left to build your prompt layer by layer. Each layer adds a colored block. Watch the prompt grow from vague to precise."})}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:g.map(b=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",padding:"12px 14px",background:u.white,borderRadius:8,border:"1px solid rgba(46,46,56,0.08)",borderLeft:`3px solid ${b.border}`},children:[r.jsx("span",{style:{flexShrink:0,fontSize:10,fontWeight:800,letterSpacing:"0.04em",color:b.color,background:b.color+"18",border:`1px solid ${b.color}44`,borderRadius:4,padding:"3px 8px",fontFamily:C.bold,lineHeight:1.4},children:b.shortName.toUpperCase()}),r.jsx("p",{style:{margin:0,fontSize:14,lineHeight:1.65,color:u.offBlack,fontFamily:C.regular,flex:1,whiteSpace:"pre-line"},children:b.fragment}),r.jsx("button",{type:"button","aria-label":`Remove ${b.shortName}`,onClick:()=>m(b.id),style:{background:"none",border:"none",cursor:"pointer",color:u.gray01,fontSize:18,lineHeight:1,padding:"0 2px",flexShrink:0},children:"×"})]},b.id))})}),r.jsxs("div",{style:{flexShrink:0,background:u.white,border:"1px solid rgba(46,46,56,0.10)",borderTop:`2px solid ${u.yellow}`,borderRadius:"0 0 12px 12px",padding:"18px 24px",display:"flex",flexDirection:"column",gap:12},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:u.eyebrowGold,fontFamily:C.bold},children:"Generated prompt"}),r.jsx("p",{"aria-live":"polite",style:{margin:0,fontSize:14,lineHeight:1.7,color:x?u.offBlack:u.gray01,fontFamily:C.light,fontStyle:x?"italic":"normal",maxHeight:72,overflowY:"auto",flex:1},children:x?`"${x}"`:"Your assembled prompt appears here as you add elements."}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,flexShrink:0},children:[r.jsxs("button",{type:"button",onClick:v,disabled:i.length===0,style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:6,fontSize:12,fontFamily:C.regular,border:"1px solid rgba(46,46,56,0.15)",background:u.white,color:i.length===0?u.gray02:u.offBlack,cursor:i.length===0?"not-allowed":"pointer"},children:[r.jsx(jv,{size:13})," Reset"]}),r.jsxs("button",{type:"button",onClick:k,disabled:!x,style:{display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:12,fontFamily:C.bold,border:"none",background:x?u.yellow:u.offWhite,color:x?u.confidentBlack:u.gray02,cursor:x?"pointer":"not-allowed"},children:[r.jsx(cv,{size:13})," ",s?"Copied!":"Copy prompt"]})]})]})]})]})}function qv(){const i=["What issue?","Which jurisdiction?","What output?","By when?"];return r.jsx("section",{id:"team-briefing",style:{background:Ke.light.bg,padding:`${Mt.sectionPaddingY} 0`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("h2",{style:{fontSize:36,fontWeight:700,color:u.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:C.bold},children:"Brief AI Like You Brief Your Team"}),r.jsx("p",{style:{fontSize:16,color:u.gray01,textAlign:"center",lineHeight:1.7,marginBottom:52,fontFamily:C.light},children:"The more context you provide, the better the outcome."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 60px 1fr",gap:0,alignItems:"stretch"},children:[r.jsxs("div",{style:{border:`1px solid ${u.destructive}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%",background:u.white},children:[r.jsx("div",{style:{background:u.destructive+"0d",padding:"14px 22px",borderBottom:`1px solid ${u.destructive}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:r.jsx("span",{style:{color:u.destructive,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:C.bold},children:"WEAK BRIEF"})}),r.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[r.jsx("div",{style:{background:u.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${u.destructive}`},children:r.jsx("p",{style:{color:u.offBlack,fontSize:15,fontStyle:"italic",lineHeight:1.65,fontFamily:C.light,margin:0},children:"“Research this matter and get back to me.”"})}),r.jsxs("div",{children:[r.jsx("div",{style:{color:u.destructive,fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:9,fontFamily:C.bold},children:"Missing:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:i.map(o=>r.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:u.destructive+"0d",borderRadius:6},children:r.jsx("span",{style:{color:u.destructive,fontSize:11,fontWeight:600,fontFamily:C.bold},children:o})},o))})]}),r.jsxs("div",{style:{background:u.destructive+"0a",border:`1px dashed ${u.destructive}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[r.jsx("div",{style:{color:u.destructive,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:C.bold},children:"↓ OUTCOME"}),r.jsx("p",{style:{color:u.gray01,fontSize:12,lineHeight:1.6,fontFamily:C.regular,margin:0},children:r.jsx("strong",{style:{color:u.destructive},children:"Generic response"})})]})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[r.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${u.destructive}4d, ${u.yellow}99, ${u.success}4d)`}}),r.jsx("div",{style:{background:u.white,border:`2px solid ${u.yellow}`,color:u.offBlack,fontSize:10,fontWeight:800,padding:"6px 8px",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:C.bold},children:"VS"}),r.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${u.success}4d, ${u.yellow}99, ${u.destructive}4d)`}})]}),r.jsxs("div",{style:{border:`1px solid ${u.success}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%",background:u.white},children:[r.jsx("div",{style:{background:u.success+"0d",padding:"14px 22px",borderBottom:`1px solid ${u.success}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:r.jsx("span",{style:{color:u.success,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:C.bold},children:"STRONG BRIEF"})}),r.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:$v.map(o=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"7px 12px",background:u.success+"0d",borderRadius:6},children:[r.jsx("span",{style:{color:u.gray01,fontSize:11,fontWeight:600,minWidth:82,flexShrink:0,fontFamily:C.bold},children:o.label}),r.jsx("span",{style:{color:u.offBlack,fontSize:12,fontWeight:500,flex:1,fontFamily:C.regular},children:o.value}),r.jsx("span",{style:{color:u.success,fontSize:12,fontWeight:700},children:"✓"})]},o.label))}),r.jsxs("div",{style:{background:u.success+"0a",border:`1px dashed ${u.success}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[r.jsx("div",{style:{color:u.success,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:C.bold},children:"↓ OUTCOME"}),r.jsx("p",{style:{color:u.gray01,fontSize:12,lineHeight:1.6,fontFamily:C.regular,margin:0},children:r.jsx("strong",{style:{color:u.success},children:"Focused response"})})]})]})]})]}),r.jsx("div",{style:{textAlign:"center",marginTop:36},children:r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:14,flexWrap:"wrap",padding:"16px 28px",background:u.white,border:"1px solid rgba(46,46,56,0.10)",borderRadius:12},children:[r.jsx("div",{style:{background:u.yellowAlpha10,border:`1px solid ${u.yellow}44`,padding:"10px 20px",borderRadius:8,color:u.eyebrowGold,fontSize:14,fontWeight:600,fontFamily:C.bold},children:"A Good Brief"}),r.jsx("span",{style:{color:u.confidentBlack,fontSize:24,fontWeight:700,fontFamily:C.bold},children:"="}),r.jsx("div",{style:{background:u.info+"14",border:`1px solid ${u.info}33`,padding:"10px 20px",borderRadius:8,color:u.info,fontSize:14,fontWeight:600,fontFamily:C.bold},children:"A Good Prompt"})]})})]})})}function Zv(){return r.jsx("section",{id:"lazy-vs-pro",style:{background:Ke.neutral.bg,padding:`${Mt.sectionPaddingY} 0`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("h2",{style:{fontSize:36,fontWeight:700,color:u.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:C.bold},children:"Same AI. Two Very Different Results."}),r.jsx("p",{style:{fontSize:16,color:u.gray01,textAlign:"center",lineHeight:1.7,marginBottom:52,fontFamily:C.light},children:"The only thing that changed? The way you asked."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 60px 1fr",gap:0,alignItems:"stretch"},children:[r.jsxs("div",{style:{border:`1px solid ${u.destructive}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%"},children:[r.jsxs("div",{style:{background:u.destructive+"0d",padding:"14px 22px",borderBottom:`1px solid ${u.destructive}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:[r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:u.destructive,strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M15 9l-6 6M9 9l6 6"})]}),r.jsx("span",{style:{color:u.destructive,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:C.bold},children:"THE LAZY ASK"})]}),r.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[r.jsx("div",{style:{background:u.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${u.destructive}`,minHeight:128,display:"flex",alignItems:"flex-start"},children:r.jsx("p",{style:{color:u.offBlack,fontSize:15,fontStyle:"italic",lineHeight:1.65,fontFamily:C.light,margin:0},children:"“Summarise this document”"})}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,minHeight:76},children:["No role","No context","No format","No limits"].map(i=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:u.destructive+"0d",borderRadius:6},children:[r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:u.destructive,strokeWidth:"2.5",children:r.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),r.jsx("span",{style:{color:u.destructive,fontSize:11,fontWeight:600,fontFamily:C.bold},children:i})]},i))}),r.jsxs("div",{style:{background:u.destructive+"0a",border:`1px dashed ${u.destructive}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[r.jsx("div",{style:{color:u.destructive,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:C.bold},children:"↓ WHAT YOU GET BACK"}),r.jsxs("p",{style:{color:u.gray01,fontSize:12,lineHeight:1.6,fontFamily:C.regular,margin:0},children:["A generic 300-word wall of text. Wrong tone. Wrong audience. Needs complete rewriting. ",r.jsx("strong",{style:{color:u.destructive},children:"30 minutes wasted."})]})]})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[r.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${u.destructive}4d, ${u.yellow}99, ${u.success}4d)`}}),r.jsx("div",{style:{background:u.white,border:`2px solid ${u.yellow}`,color:u.offBlack,fontSize:10,fontWeight:800,padding:"6px 8px",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:C.bold},children:"VS"}),r.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${u.success}4d, ${u.yellow}99, ${u.destructive}4d)`}})]}),r.jsxs("div",{style:{border:`1px solid ${u.success}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%"},children:[r.jsxs("div",{style:{background:u.success+"0d",padding:"14px 22px",borderBottom:`1px solid ${u.success}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:[r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:u.success,strokeWidth:"2",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),r.jsx("span",{style:{color:u.success,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:C.bold},children:"THE PRO ASK"})]}),r.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[r.jsx("div",{style:{background:u.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${u.success}`,minHeight:128,display:"flex",alignItems:"flex-start"},children:r.jsxs("p",{style:{color:u.offBlack,fontSize:14,fontStyle:"italic",lineHeight:1.65,fontFamily:C.light,margin:0},children:["“You are a ",r.jsx("strong",{style:{color:u.eyebrowGold,fontStyle:"normal"},children:"tax advisor"}),". Summarise the key ",r.jsx("strong",{style:{color:u.frameBlue,fontStyle:"normal"},children:"transfer pricing changes"})," in this circular for a ",r.jsx("strong",{style:{color:u.frameOrange,fontStyle:"normal"},children:"client memo"}),". Use ",r.jsx("strong",{style:{color:u.framePurple,fontStyle:"normal"},children:"bullet points"}),". Keep it under ",r.jsx("strong",{style:{color:u.success,fontStyle:"normal"},children:"200 words"}),".”"]})}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,minHeight:76},children:["Role defined","Task clear","Format set","Length capped"].map(i=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:u.success+"0d",borderRadius:6},children:[r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:u.success,strokeWidth:"2.5",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),r.jsx("span",{style:{color:u.success,fontSize:11,fontWeight:600,fontFamily:C.bold},children:i})]},i))}),r.jsxs("div",{style:{background:u.success+"0a",border:`1px dashed ${u.success}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[r.jsx("div",{style:{color:u.success,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:C.bold},children:"↓ WHAT YOU GET BACK"}),r.jsxs("p",{style:{color:u.gray01,fontSize:12,lineHeight:1.6,fontFamily:C.regular,margin:0},children:["A client-ready bullet list. Right tone. Right scope. Drop it straight into the email. ",r.jsx("strong",{style:{color:u.success},children:"Done in 30 seconds."})]})]})]})]})]}),r.jsxs("div",{style:{marginTop:40,textAlign:"center",padding:"24px 32px",background:u.yellowAlpha10,border:`1px solid ${u.yellow}33`,borderRadius:12},children:[r.jsx("p",{style:{color:u.eyebrowGold,fontSize:16,fontWeight:700,marginBottom:12,fontFamily:C.bold},children:"The Prompting Equation"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,flexWrap:"wrap"},children:[["Role","Context","Task","Format"].map((i,o)=>r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:12},children:[o>0&&r.jsx("span",{style:{color:u.eyebrowGold,fontSize:18,fontWeight:700},children:"+"}),r.jsx("span",{style:{padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:700,fontFamily:C.bold,background:u.white,border:"1px solid rgba(46,46,56,0.12)",color:u.offBlack},children:i})]},i)),r.jsx("span",{style:{color:u.success,fontSize:18,fontWeight:700},children:"="}),r.jsx("span",{style:{padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:700,fontFamily:C.bold,background:u.success+"14",border:`1px solid ${u.success}4d`,color:u.success},children:"Client-Ready Output"})]})]})]})})}function Kv(){const i=Ke.dark;return r.jsx("section",{id:"recap",style:{background:i.bg,padding:"100px 0",scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt,textAlign:"center"},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",background:u.yellow,border:`1px solid ${u.gray02}`,borderRadius:100,padding:"6px 16px",marginBottom:16},children:r.jsx("span",{style:{color:u.offBlack,fontSize:14,fontFamily:C.regular},children:"Recap in a Nutshell"})}),r.jsxs("h2",{style:{fontSize:36,fontWeight:700,color:i.heading,marginBottom:10,fontFamily:C.bold},children:["Putting your ",r.jsx("span",{style:{color:u.yellow,fontStyle:"italic"},children:"#BestPrompt Forward"})]}),r.jsx("p",{style:{fontSize:16,color:i.body,lineHeight:1.6,marginBottom:50,fontFamily:C.light},children:"Your 7-element checklist. Before you hit Send, make sure you've covered these."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,textAlign:"left"},children:Wv.map(({icon:o,name:s,color:p,desc:c})=>r.jsxs("div",{style:{background:u.white,border:`1px solid ${i.border}`,borderLeft:`4px solid ${p}`,borderRadius:12,padding:"21px 28px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:u.yellow,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(o,{size:18,color:u.confidentBlack,strokeWidth:2})}),r.jsx("span",{style:{color:p,fontSize:15,fontWeight:700,fontFamily:C.bold},children:s})]}),r.jsx("p",{style:{color:u.gray01,fontSize:13,lineHeight:1.6,margin:0,fontFamily:C.regular},children:c})]},s))}),r.jsxs("div",{style:{marginTop:40,maxWidth:900,marginLeft:"auto",marginRight:"auto",background:u.surfaceOnDark,border:`1px solid ${i.border}`,borderTop:`3px solid ${u.yellow}`,borderRadius:12,padding:29,textAlign:"center"},children:[r.jsx("p",{style:{margin:0,fontSize:16,lineHeight:1.6,fontFamily:C.bold,color:i.heading},children:"We have shared the essentials. Now it's your turn to unlock the extraordinary."}),r.jsx("p",{style:{margin:"8px 0 0",fontSize:16,lineHeight:1.6,color:i.body,fontFamily:C.regular},children:"The more you practice, the sharper your prompts become. Start with one element — and layer more as you gain confidence."})]})]})})}function Qv({onContinue:i}){return r.jsx(cd,{style:{background:Ke.neutral.bg,borderTop:`1px solid ${Ke.neutral.border}`},title:"Prompting skills — unlocked.",description:r.jsx(r.Fragment,{children:"Now see them in action with M365 Copilot. The next module takes you into Microsoft 365 Copilot — where you'll apply these skills across Word, Excel, Outlook, and Teams with real tax use cases."}),ctaLabel:"Continue to Part 3: M365 Copilot Deep Dive →",onContinue:i,meta:"Part 3 covers: Copilot in Word, Excel, Outlook, Teams, and real tax workflows"})}function Xv(){const[i,o]=z.useState("basic"),[s,p]=z.useState({basic:_s(),advanced:_s()}),c=i==="basic"?Vv:Uv,f=s[i],g=v=>{f.solvedPrompts[v]||p(k=>({...k,[i]:{...k[i],selectedPromptId:v}}))},x=v=>{const k=s[i];if(k.matchedElements[v]||!k.selectedPromptId)return;const b=c.prompts.find(B=>B.id===k.selectedPromptId);if(!b)return;const S=b.answer===v,I=k.answeredCount+1,_=k.correctCount+(S?1:0);if(S){p(B=>({...B,[i]:{...B[i],selectedPromptId:null,answeredCount:I,correctCount:_,solvedPrompts:{...B[i].solvedPrompts,[b.id]:!0},matchedElements:{...B[i].matchedElements,[v]:!0},showScore:I===5,scoreMessage:I===5?Ap(i,_):B[i].scoreMessage}}));return}p(B=>({...B,[i]:{...B[i],selectedPromptId:null,answeredCount:I,correctCount:_,incorrectPromptId:b.id,highlightElementId:b.answer,showScore:I===5,scoreMessage:I===5?Ap(i,_):B[i].scoreMessage}})),window.setTimeout(()=>{p(B=>({...B,[i]:{...B[i],incorrectPromptId:null,highlightElementId:null}}))},1500)},m=v=>{p(k=>({...k,[v]:_s()}))};return r.jsx("section",{id:"match-activity",style:{background:Ke.neutral.bg,padding:"100px 0",textAlign:"center",scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("div",{style:{display:"inline-flex",background:u.accentOrange+"14",border:`1px solid ${u.accentOrange}40`,borderRadius:20,padding:"6px 18px",marginBottom:16},children:r.jsx("span",{style:{color:u.accentOrange,fontSize:11,fontWeight:700,letterSpacing:"1.26px",textTransform:"uppercase",fontFamily:C.bold},children:"Interactive Activity"})}),r.jsx("h2",{style:{fontSize:36,fontWeight:700,color:u.confidentBlack,marginBottom:12,fontFamily:C.bold},children:"Match the Prompt to the Element"}),r.jsx("p",{style:{fontSize:16,color:u.gray01,lineHeight:1.6,marginBottom:24,fontFamily:C.regular,maxWidth:650,marginLeft:"auto",marginRight:"auto"},children:"Read each prompt example. Identify which prompting element or technique it demonstrates. Click the prompt, then click the matching element."}),r.jsx("div",{style:{display:"flex",justifyContent:"center",gap:12,marginBottom:40,flexWrap:"wrap"},children:[{id:"basic",label:"🎯 Basic Elements"},{id:"advanced",label:"🚀 Advanced Techniques"}].map(v=>r.jsx("button",{type:"button",onClick:()=>o(v.id),style:{padding:"10px 24px",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",border:i===v.id?`1px solid ${u.yellow}`:"1px solid rgba(46,46,56,0.12)",background:i===v.id?u.yellowAlpha10:u.white,color:i===v.id?u.eyebrowGold:u.gray01,fontFamily:C.bold},children:v.label},v.id))}),r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,flexWrap:"wrap",marginBottom:30,padding:"14px 24px",background:u.white,border:"1px solid rgba(46,46,56,0.08)",borderRadius:10,maxWidth:700,marginLeft:"auto",marginRight:"auto"},children:["Click a prompt on the left","Click the matching element on the right","Get instant feedback"].map((v,k)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:u.gray01,fontFamily:C.regular},children:[r.jsx("span",{style:{width:20,height:20,borderRadius:"50%",background:u.yellowAlpha10,color:u.eyebrowGold,fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"},children:k+1}),v]},v))}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:c.prompts.map((v,k)=>{const b=c.elements[k],S=f.selectedPromptId===v.id,I=f.solvedPrompts[v.id],_=f.incorrectPromptId===v.id,B=f.matchedElements[b.id],P=f.highlightElementId===b.id;return r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 80px 1fr",gap:0,alignItems:"stretch"},children:[r.jsxs("button",{type:"button",onClick:()=>g(v.id),disabled:I,style:{position:"relative",padding:"18px 20px",borderRadius:10,textAlign:"left",cursor:I?"default":"pointer",background:I?u.success+"0d":_?u.destructive+"0d":S?u.yellowAlpha10:u.white,border:I?`2px solid ${u.success}`:_?`2px solid ${u.destructive}`:S?`2px solid ${u.yellow}`:"2px solid rgba(46,46,56,0.10)",boxShadow:S?`0 0 15px ${u.yellowAlpha12}`:"none",fontFamily:C.regular},children:[r.jsx("span",{style:{position:"absolute",top:-8,left:-8,width:22,height:22,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,background:u.confidentBlack,color:u.yellow,border:"1px solid rgba(255,230,0,0.3)"},children:k+1}),I&&r.jsx("span",{style:{position:"absolute",top:10,right:12,color:u.success,fontSize:16,fontWeight:700},children:"✓"}),r.jsx("p",{style:{margin:0,fontSize:13,color:u.offBlack,lineHeight:1.6,fontStyle:"italic"},children:v.text})]}),r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:u.gray01,fontSize:24},children:"⟷"}),r.jsxs("button",{type:"button",onClick:()=>x(b.id),disabled:B,style:{padding:"14px 20px",borderRadius:10,textAlign:"center",cursor:B?"default":"pointer",background:u.white,border:P?`2px solid ${u.success}`:B?`2px solid ${u.success}4d`:"2px solid rgba(46,46,56,0.10)",boxShadow:P?`0 0 12px ${u.success}80`:"none",fontSize:13,fontWeight:700,color:B?u.success:u.offBlack,opacity:B?.5:1,letterSpacing:"0.3px",fontFamily:C.bold},children:[b.label,B?" ✓":""]})]},v.id)})}),f.showScore&&r.jsxs("div",{style:{marginTop:30,padding:24,background:u.yellowAlpha10,border:`1px solid ${u.yellow}44`,borderRadius:12},children:[r.jsxs("div",{style:{fontSize:42,fontWeight:800,color:u.eyebrowGold,fontFamily:C.bold},children:[f.correctCount,"/5"]}),r.jsx("p",{style:{fontSize:14,color:u.gray01,marginTop:8,fontFamily:C.regular},children:f.scoreMessage||c.scoreMsg})]}),r.jsx("button",{type:"button",onClick:()=>m(i),style:{marginTop:20,padding:"10px 24px",border:"1px solid rgba(46,46,56,0.15)",borderRadius:6,background:u.white,color:u.gray01,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:C.bold},children:"↻ Reset & Try Again"})]})})}const Os=[{key:"what",label:"WHAT IT IS",color:u.frameBlue,panelBg:u.offWhite,panelBorder:u.gray02},{key:"why",label:"WHY IT MATTERS",color:u.frameOrange,panelBg:u.offWhite,panelBorder:u.gray02},{key:"without",label:"❌ WITHOUT",color:u.destructive,panelBg:u.offWhite,panelBorder:u.gray02,italic:!0},{key:"with",label:"✅ WITH",color:u.success,panelBg:u.offWhite,panelBorder:u.gray02,italic:!0}];function Jv({elem:i}){const[o,s]=z.useState({what:!1,why:!1,without:!1,with:!1}),p={what:i.what,why:i.why,without:i.without,with:i.with};return r.jsxs("div",{style:{background:u.white,border:`1px solid ${u.gray02}`,borderRadius:8,overflow:"hidden",borderTop:`3px solid ${i.border}`,display:"flex",flexDirection:"column",textAlign:"left"},children:[r.jsxs("div",{style:{padding:"22px 24px 16px",display:"flex",alignItems:"center",gap:14},children:[r.jsx("div",{style:{width:38,height:38,borderRadius:"50%",background:u.yellow,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,fontWeight:700,color:u.confidentBlack,fontFamily:C.bold,flexShrink:0},children:i.id}),r.jsxs("div",{children:[r.jsx("div",{style:{color:u.offBlack,fontSize:19,fontWeight:700,fontFamily:C.bold},children:i.name}),r.jsx("div",{style:{color:i.color,fontSize:11,fontWeight:700,fontFamily:C.bold,letterSpacing:"0.02em"},children:i.q})]})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",borderTop:`1px solid ${u.gray02}`},children:Os.map((c,f)=>{const g=o[c.key];return r.jsx("button",{type:"button",onClick:()=>s(x=>({...x,[c.key]:!x[c.key]})),style:{padding:"10px 8px",background:g?u.yellowAlpha10:u.offWhite,border:"none",borderRight:f<Os.length-1?`1px solid ${u.gray02}`:"none",borderBottom:g?`2px solid ${c.color}`:"2px solid transparent",cursor:"pointer",fontSize:10,fontWeight:700,letterSpacing:"0.5px",color:c.color,fontFamily:C.bold,transition:"background 0.2s"},children:c.label},c.key)})}),r.jsx("div",{children:Os.map(c=>o[c.key]?r.jsx("div",{style:{padding:"14px 24px",background:c.panelBg,borderTop:`1px solid ${c.panelBorder}`,minHeight:70},children:r.jsx("p",{style:{margin:0,color:u.gray01,fontSize:13,lineHeight:1.6,fontFamily:C.regular,fontStyle:c.italic?"italic":"normal"},children:p[c.key]})},c.key):null)})]})}function ey(){const i=Ke.neutral;return r.jsx("section",{id:"elements",style:{background:i.bg,padding:`${Mt.sectionPaddingY} 0`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt,textAlign:"center"},children:[r.jsx("h2",{style:{fontSize:32,fontWeight:700,color:i.heading,fontFamily:C.bold,letterSpacing:"-0.02em",margin:"0 0 12px",textAlign:"center"},children:"Prompt like a Pro - Elements"}),r.jsx("p",{style:{fontSize:16,color:i.body,fontFamily:C.light,lineHeight:"24px",margin:"0 auto 12px",maxWidth:720,textAlign:"center"},children:"Each element is a lever — pull the right ones for the right task."}),r.jsx("p",{style:{textAlign:"center",color:i.body,fontSize:12,margin:"0 0 40px",fontFamily:C.regular},children:"Click any tab below each element to reveal details — they stay open once clicked."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 420px), 1fr))",gap:22,alignItems:"stretch",textAlign:"left"},children:yf.map(o=>r.jsx(Jv,{elem:o},o.id))})]})})}function ty({view:i,onChange:o,onDark:s=!1}){const p=`2px solid ${u.yellow}`,c=[{id:"wizard",label:"Techniques",Icon:bv,hint:"8 pro techniques — one at a time"},{id:"table",label:"Level Up",Icon:mf,hint:"Advanced catalog with tax use cases"}];return r.jsx("div",{role:"tablist","aria-label":"Techniques view",style:{display:"inline-flex",background:s?u.white:u.offWhite,border:"1px solid rgba(46,46,56,0.10)",borderRadius:10,padding:4,gap:4},children:c.map(({id:f,label:g,Icon:x,hint:m})=>{const v=i===f;return r.jsxs("button",{type:"button",role:"tab","aria-selected":v,title:m,onClick:()=>o(f),style:{display:"flex",alignItems:"center",gap:8,padding:"9px 16px",borderRadius:7,border:"none",cursor:"pointer",background:v?u.confidentBlack:"transparent",color:v?u.white:u.gray01,fontSize:13,fontWeight:v?700:500,fontFamily:v?C.bold:C.regular,transition:"background 0.15s, color 0.15s"},onFocus:k=>{k.currentTarget.style.outline=p},onBlur:k=>{k.currentTarget.style.outline="none"},children:[r.jsx(x,{size:15,strokeWidth:2}),g]},f)})})}function ny(){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28},children:[r.jsxs("div",{children:[r.jsx("p",{style:{fontSize:18,fontWeight:700,color:u.confidentBlack,fontFamily:C.bold,margin:"0 0 8px"},children:"🚀 Level Up — Advanced Techniques"}),r.jsx("p",{style:{fontSize:14,color:u.gray01,fontFamily:C.light,lineHeight:1.7,margin:0,maxWidth:820},children:"The fundamentals will handle 80% of your prompting needs. But for complex tax analysis, multi-step reasoning, and mission-critical accuracy — these advanced techniques take you from competent to exceptional."})]}),Ov.map(i=>r.jsxs("div",{style:{border:"1px solid rgba(46,46,56,0.10)",borderRadius:10,overflow:"hidden"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"14px 20px",background:u.confidentBlack},children:[r.jsxs("span",{style:{fontSize:12,fontWeight:700,fontFamily:C.bold,color:i.color,background:i.color+"22",border:`1px solid ${i.color}55`,borderRadius:4,padding:"3px 8px"},children:[i.rows.length," techniques"]}),r.jsx("span",{style:{color:u.white,fontSize:15,fontWeight:700,fontFamily:C.bold},children:i.name})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1.6fr 2fr",background:u.offWhite,padding:"12px 20px",gap:16},children:["Technique","What it does","Tax Use Case"].map(o=>r.jsx("span",{style:{color:u.gray01,fontSize:11,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",fontFamily:C.bold},children:o},o))}),i.rows.map((o,s)=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1.6fr 2fr",padding:"16px 20px",gap:16,alignItems:"start",background:s%2===0?u.white:u.offWhite,borderTop:"1px solid rgba(46,46,56,0.07)"},children:[r.jsx("span",{style:{color:u.confidentBlack,fontSize:13,fontWeight:700,fontFamily:C.bold,lineHeight:1.4},children:o.name}),r.jsx("span",{style:{color:u.gray01,fontSize:13,fontFamily:C.regular,lineHeight:1.6},children:o.does}),r.jsx("span",{style:{color:u.offBlack,fontSize:13,fontFamily:C.regular,lineHeight:1.6},children:o.taxUse})]},o.name))]},i.id))]})}function ry({onDark:i=!1}){const[o,s]=z.useState("wizard"),p=i?Ke.dark.body:u.gray01;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap",marginBottom:24},children:[r.jsx("p",{style:{fontSize:11,color:p,margin:0,fontFamily:C.regular,flex:1,minWidth:220},children:o==="wizard"?"Click any technique to reveal details.":"Level Up catalog — Technique, What it does, and Tax Use Case."}),r.jsx(ty,{view:o,onChange:s,onDark:i})]}),o==="wizard"?r.jsx(iy,{}):r.jsx(ny,{})]})}function iy(){const[i,o]=z.useState(di[0].id),[s,p]=z.useState({categoryId:di[0].id,techniqueId:di[0].techniques[0].id}),c=di.find(m=>m.id===s.categoryId),f=c.techniques.find(m=>m.id===s.techniqueId),g=(m,v)=>{p({categoryId:m,techniqueId:v}),o(m)},x=`2px solid ${u.yellow}`;return r.jsxs("div",{style:{border:"1px solid rgba(46,46,56,0.10)",borderRadius:12,overflow:"hidden",display:"grid",gridTemplateColumns:"minmax(260px, 300px) 1fr",minHeight:520},children:[r.jsxs("nav",{"aria-label":"Advanced technique categories",style:{background:u.offWhite,borderRight:"1px solid rgba(46,46,56,0.08)",padding:"20px 0",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"0 20px 16px",borderBottom:"1px solid rgba(46,46,56,0.08)"},children:[r.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:u.gray01,fontFamily:C.bold,marginBottom:4},children:"Prompt like a Pro — Techniques"}),r.jsx("div",{style:{fontSize:13,color:u.offBlack,fontFamily:C.regular,lineHeight:1.5},children:"Pick a technique to explore."})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"12px 10px"},children:di.map(m=>{const v=i===m.id;return r.jsxs("div",{style:{marginBottom:6},children:[r.jsxs("button",{type:"button","aria-expanded":v,onClick:()=>o(v?"":m.id),style:{width:"100%",display:"flex",alignItems:"center",gap:10,padding:"10px 12px",background:v?u.white:"transparent",border:v?"1px solid rgba(46,46,56,0.10)":"1px solid transparent",borderRadius:8,cursor:"pointer",textAlign:"left"},onFocus:k=>{k.currentTarget.style.outline=x},onBlur:k=>{k.currentTarget.style.outline="none"},children:[r.jsx("span",{style:{width:22,height:22,borderRadius:6,flexShrink:0,background:m.color+"18",border:`1.5px solid ${m.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:m.color,fontFamily:C.bold},children:di.indexOf(m)+1}),r.jsxs("span",{style:{flex:1},children:[r.jsx("span",{style:{display:"block",fontSize:13,fontWeight:700,color:u.confidentBlack,fontFamily:C.bold},children:m.name}),r.jsxs("span",{style:{display:"block",fontSize:11,color:u.gray01,fontFamily:C.regular,marginTop:2},children:[m.techniques.length," technique",m.techniques.length>1?"s":""]})]}),r.jsx(ov,{size:14,color:u.gray01,style:{flexShrink:0,transform:v?"rotate(90deg)":"none",transition:"transform 0.15s"}})]}),v&&r.jsx("div",{style:{marginTop:4,marginLeft:14,paddingLeft:14,borderLeft:`2px solid ${m.color}44`},children:m.techniques.map(k=>{const b=s.categoryId===m.id&&s.techniqueId===k.id;return r.jsx("button",{type:"button","aria-current":b?"true":void 0,onClick:()=>g(m.id,k.id),style:{width:"100%",display:"block",padding:"8px 12px",marginBottom:2,background:b?u.confidentBlack:"transparent",border:b?"none":"1px solid transparent",borderRadius:6,cursor:"pointer",textAlign:"left",fontSize:12,fontWeight:b?700:500,color:b?u.white:u.offBlack,fontFamily:b?C.bold:C.regular,lineHeight:1.4},onFocus:S=>{S.currentTarget.style.outline=x},onBlur:S=>{S.currentTarget.style.outline="none"},children:k.name},k.id)})})]},m.id)})})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",background:u.white,minHeight:0},children:[r.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid rgba(46,46,56,0.08)",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[r.jsx("span",{style:{fontSize:13,fontWeight:700,color:u.confidentBlack,fontFamily:C.bold},children:f.name}),r.jsx("span",{style:{fontSize:11,color:c.color,fontWeight:600,fontFamily:C.bold},children:f.tagline})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"24px 28px 32px",display:"flex",flexDirection:"column",gap:20},children:_v.map(m=>{const v=m.key==="without"||m.key==="with";return r.jsxs("section",{"aria-labelledby":`facet-${f.id}-${m.key}`,children:[r.jsx("span",{id:`facet-${f.id}-${m.key}`,style:{display:"inline-flex",alignItems:"center",marginBottom:10,padding:"4px 10px",borderRadius:100,border:`1px solid ${m.color}55`,background:m.color+"14",fontSize:12,fontWeight:700,color:m.color,fontFamily:C.bold,lineHeight:1.3},children:m.label}),r.jsx("p",{style:{fontSize:v?14:16,lineHeight:1.7,color:m.key==="without"?u.destructive:m.key==="with"?u.success:u.offBlack,fontFamily:v?C.light:C.regular,fontStyle:v?"italic":"normal",margin:0,maxWidth:560,padding:v?"14px 18px":0,background:v?m.key==="without"?u.destructive+"0a":u.success+"0a":"transparent",borderRadius:v?8:0,borderLeft:v?`3px solid ${m.color}`:"none"},children:f[m.key]})]},m.key)})})]})]})}function ay({onBack:i,onNavigate:o}){return r.jsxs("div",{style:{position:"fixed",inset:0,overflowY:"auto",background:u.white},children:[r.jsx(fi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),r.jsx(Yo,{currentModuleId:"ai-tax-prompting",onNavigate:o,onBack:i}),r.jsxs("section",{id:"module-content",style:{padding:`${Mt.sectionPaddingY} ${Oo} 72px`,position:"relative",overflow:"hidden",backgroundColor:u.confidentBlack,backgroundImage:"url('/spectrum/hero-frame-8.png')",backgroundSize:"cover",backgroundPosition:"78% center",backgroundRepeat:"no-repeat"},children:[r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(26,26,36,0.94) 0%, rgba(26,26,36,0.78) 45%, rgba(26,26,36,0.35) 72%, rgba(26,26,36,0.18) 100%)",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:$2(5),zIndex:2}}),r.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:860},children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,230,0,0.08)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:24,padding:"6px 18px",marginBottom:28},children:[r.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:u.yellow}}),r.jsx("span",{style:{color:u.yellow,fontSize:11,fontWeight:700,letterSpacing:"1.5px",fontFamily:C.bold},children:"PART 2 · AI TAX LABS"})]}),r.jsxs("h1",{style:{fontSize:52,fontWeight:700,color:u.white,lineHeight:1.15,marginBottom:20,fontFamily:C.bold},children:["The Difference Is the"," ",r.jsx("span",{style:{color:u.yellow},children:"Prompt"})]}),r.jsx("p",{style:{fontSize:19,color:u.gray02,fontWeight:300,lineHeight:1.7,maxWidth:660,fontFamily:C.light},children:"A prompt isn't just a question — it's a structured instruction that determines the quality of everything AI gives you back."}),r.jsxs("div",{style:{display:"flex",gap:12,marginTop:36},children:[r.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,230,0,0.10)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:20,color:u.yellow,fontSize:12,fontFamily:C.bold},children:"~30 min"}),r.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:20,color:u.gray02,fontSize:12,fontFamily:C.regular},children:"7 Elements"}),r.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:20,color:u.gray02,fontSize:12,fontFamily:C.regular},children:"Interactive"})]})]})]}),r.jsx("section",{id:"pipeline",style:{background:Ke.neutral.bg,padding:`${Mt.sectionPaddingY} 0`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt,display:"flex",flexDirection:"column",gap:48,alignItems:"center"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16,width:"100%"},children:[r.jsx("div",{style:{background:u.yellow,border:`1px solid ${u.gray02}`,borderRadius:100,padding:"6px 16px"},children:r.jsx("span",{style:{fontSize:14,color:u.offBlack,fontFamily:C.regular,lineHeight:"21px"},children:"THE PIPELINE"})}),r.jsx("h2",{style:{fontSize:32,fontWeight:700,color:u.offBlack,fontFamily:C.bold,lineHeight:1.2,letterSpacing:"-0.32px",textAlign:"center",margin:0},children:"A Prompt Is Simply an Instruction"}),r.jsx("p",{style:{fontSize:16,color:u.offBlack,fontFamily:C.light,lineHeight:"24px",textAlign:"center",maxWidth:760,margin:0},children:"AI responds to the instructions you provide. Better instructions produce better results"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,width:"100%",alignItems:"center"},children:[r.jsxs("div",{style:{background:u.confidentBlack,border:`1px solid ${u.gray02}`,borderRadius:16,padding:32,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:24,flexWrap:"wrap"},children:[r.jsxs("div",{style:{background:u.white,border:`1.5px solid ${u.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[r.jsx("div",{style:{background:u.info+"33",borderRadius:100,padding:12,display:"flex"},children:r.jsx(xf,{size:24,color:u.info,strokeWidth:2})}),r.jsx("span",{style:{fontSize:15,color:u.offBlack,fontFamily:C.regular,lineHeight:"25.5px"},children:"YOU"}),r.jsx("span",{style:{border:`1px solid ${u.gray02}`,borderRadius:16,padding:"2px 8px",fontSize:14,color:u.offBlack,fontFamily:C.regular,lineHeight:"22.4px"},children:"Instruction"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,flexShrink:0},children:[r.jsx("span",{style:{fontSize:10,color:u.gray01,fontFamily:C.regular},children:"sends prompt"}),r.jsx(Gs,{size:16,color:u.white,strokeWidth:2})]}),r.jsxs("div",{style:{background:u.yellow,border:`1.5px solid ${u.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[r.jsx("div",{style:{background:u.yellow,borderRadius:100,padding:12,display:"flex"},children:r.jsx(pv,{size:24,color:u.offBlack,strokeWidth:2})}),r.jsx("span",{style:{fontSize:15,color:u.offBlack,fontFamily:C.regular,lineHeight:"25.5px"},children:"AI"}),r.jsx("span",{style:{border:`1px solid ${u.gray02}`,borderRadius:16,padding:"2px 8px",fontSize:14,color:u.offBlack,fontFamily:C.regular,lineHeight:"22.4px",background:u.yellow},children:"Processes"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,flexShrink:0},children:[r.jsx("span",{style:{fontSize:10,color:u.gray01,fontFamily:C.regular},children:"returns output"}),r.jsx(Gs,{size:16,color:u.white,strokeWidth:2})]}),r.jsxs("div",{style:{background:u.white,border:`1.5px solid ${u.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[r.jsx("div",{style:{background:"rgba(0,200,100,0.12)",borderRadius:100,padding:12,display:"flex"},children:r.jsx(sv,{size:24,color:u.success,strokeWidth:2})}),r.jsx("span",{style:{fontSize:15,color:u.offBlack,fontFamily:C.regular,lineHeight:"25.5px"},children:"RESULT"}),r.jsx("span",{style:{border:"1px solid rgba(0,200,100,0.35)",borderRadius:16,padding:"2px 8px",fontSize:14,color:u.offBlack,fontFamily:C.regular,lineHeight:"22.4px",background:"rgba(0,200,100,0.10)"},children:"Output"})]})]}),r.jsx("div",{style:{display:"flex",gap:24,width:"100%",flexWrap:"wrap"},children:[{Icon:Lv,text:"Specific input = Specific output."},{Icon:hv,text:"AI doesn't read your mind."},{Icon:Mv,text:"Prompting is a skill, not a gift."}].map(({Icon:s,text:p})=>r.jsxs("div",{style:{flex:"1 1 240px",background:u.confidentBlack,border:`1px solid ${u.gray02}`,borderRadius:12,padding:20,display:"flex",alignItems:"center",gap:16},children:[r.jsx(s,{size:24,color:u.white,strokeWidth:2,style:{flexShrink:0}}),r.jsx("p",{style:{margin:0,fontSize:14,color:u.white,fontFamily:C.regular,lineHeight:"21px"},children:p})]},p))})]})]})}),r.jsx(qv,{}),r.jsx(ey,{}),r.jsx(Zv,{}),r.jsx("section",{id:"stack-builder",style:{background:Ke.light.bg,padding:`${Mt.sectionPaddingY} 0`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("h2",{style:{fontSize:36,fontWeight:700,color:u.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:C.bold},children:"Build a Perfect Prompt — Piece by Piece"}),r.jsx("p",{style:{fontSize:16,color:u.gray01,textAlign:"center",lineHeight:1.7,marginBottom:8,fontFamily:C.light,maxWidth:650,marginLeft:"auto",marginRight:"auto"},children:"Click each ingredient below to add it to the prompt. Watch it come together like assembling a client brief."}),r.jsx("p",{style:{fontSize:13,color:u.gray01,textAlign:"center",marginBottom:32,fontFamily:C.regular},children:"Use case: Analyzing withholding tax on software royalty payments to a US parent company"}),r.jsx(Gv,{})]})}),r.jsx("section",{id:"advanced",style:{background:Ke.dark.bg,padding:`${Mt.sectionPaddingY} 0`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("h2",{style:{fontSize:36,fontWeight:700,color:Ke.dark.heading,marginBottom:8,fontFamily:C.bold},children:"Prompt like a Pro — Techniques"}),r.jsx("p",{style:{fontSize:16,color:Ke.dark.body,lineHeight:1.7,marginBottom:12,fontFamily:C.light,maxWidth:680},children:"Now that you know the elements, here are 8 techniques to level up your prompting game."}),r.jsx(ry,{onDark:!0})]})}),r.jsx(Xv,{}),r.jsx("section",{id:"dos-donts",style:{background:Ke.light.bg,padding:`${Mt.sectionPaddingY} 0`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("p",{style:{color:Ke.light.eyebrow,fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:C.bold,marginBottom:10},children:"The Golden Rules"}),r.jsx("h2",{style:{fontSize:36,fontWeight:700,color:Ke.light.heading,marginBottom:8,fontFamily:C.bold},children:"Prompt Engineering — Do's & Don'ts"}),r.jsx("p",{style:{fontSize:15,color:u.gray01,marginBottom:40,fontFamily:C.light,lineHeight:1.6},children:"A practical guide for tax professionals. Each card includes a real example."}),r.jsxs("div",{children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,marginBottom:16},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 18px",background:u.success+"1a",border:`1px solid ${u.success}40`,borderRadius:8},children:[r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:u.success,strokeWidth:"2.5",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),r.jsx("span",{style:{color:u.success,fontSize:14,fontWeight:700,fontFamily:C.bold},children:"✅ Do's"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 18px",background:u.destructive+"1a",border:`1px solid ${u.destructive}40`,borderRadius:8},children:[r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:u.destructive,strokeWidth:"2.5",children:r.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),r.jsx("span",{style:{color:u.destructive,fontSize:14,fontWeight:700,fontFamily:C.bold},children:"❌ Don'ts"})]})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:Pv.map((s,p)=>{const c=Hv[p];return c?r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,alignItems:"stretch"},children:[r.jsxs("div",{style:{height:"100%",padding:"16px 18px",background:Ke.neutral.bg,borderRadius:8,border:`1px solid ${Ke.light.border}`,borderLeft:`3px solid ${u.success}`,display:"flex",flexDirection:"column",gap:8},children:[r.jsx("div",{style:{fontSize:13,fontWeight:700,color:u.success,fontFamily:C.bold},children:s.title}),r.jsx("div",{style:{fontSize:13,color:Ke.light.body,lineHeight:1.6,fontFamily:C.regular},children:s.desc}),r.jsx("div",{style:{fontSize:12,color:u.gray01,lineHeight:1.55,fontFamily:C.light,fontStyle:"italic",marginTop:"auto",paddingTop:8},children:s.example})]}),r.jsxs("div",{style:{height:"100%",padding:"16px 18px",background:Ke.neutral.bg,borderRadius:8,border:`1px solid ${Ke.light.border}`,borderLeft:`3px solid ${u.destructive}`,display:"flex",flexDirection:"column",gap:8},children:[r.jsx("div",{style:{fontSize:13,fontWeight:700,color:u.destructive,fontFamily:C.bold},children:c.title}),r.jsx("div",{style:{fontSize:13,color:Ke.light.body,lineHeight:1.6,fontFamily:C.regular},children:c.desc}),r.jsx("div",{style:{fontSize:12,color:u.gray01,lineHeight:1.55,fontFamily:C.light,fontStyle:"italic",marginTop:"auto",paddingTop:8},children:c.example})]})]},s.title):null})})]}),r.jsx("div",{style:{marginTop:40,padding:"14px 22px",background:u.yellowAlpha10,border:`1px solid ${u.yellow}33`,borderRadius:8,textAlign:"center"},children:r.jsx("p",{style:{fontSize:12,color:u.eyebrowGold,lineHeight:1.6,fontFamily:C.regular,margin:0},children:"⚠️ FOR INFORMATIONAL PURPOSES ONLY. ALWAYS CONSULT YOUR QUALIFIED TAX ADVISOR BEFORE ACTING ON ANY AI-GENERATED OUTPUT."})})]})}),r.jsx(Kv,{}),r.jsx(Qv,{onContinue:()=>o("/copilot-hub")}),r.jsx("div",{style:{background:Ke.light.bg,borderTop:`1px solid ${Ke.light.border}`,padding:`24px ${Oo}`,textAlign:"center"},children:r.jsx("p",{style:{color:u.gray01,fontSize:12,fontFamily:C.regular},children:"© 2026 EY India AI Tax Hub — Part 2: Basics of Prompting | Building a better working world"})})]})}const q={yellow:"#FFE600",dark:"#1A1A24",dark2:"#2E2E38",gray01:"#747480",gray02:"#C4C4CD",offWhite:"#F6F6FA",white:"#FFFFFF",frameGreen:"#00C864",wordBlue:"#4696FF",excelGreen:"#00C864",pptOrange:"#FF3C00",outlookBlue:"#4696FF",teamsViolet:"#B400FF"};function oy({height:i=32,letterColor:o="#FFFFFF"}){return r.jsxs("svg",{viewBox:"0 -18 217.599 217.599",width:i*(217.599/181.599),height:i,"aria-label":"EY logo",children:[r.jsx("path",{fill:q.yellow,d:"M0 79.4L217.599 0v41z"}),r.jsx("path",{fill:o,d:"M24.9 150.6h28.5v-16.5H24.9v-13h31.5L46 103H1.4v78.6h62.8v-18.1H24.9zM106.1 103l-13.3 25.7L79.4 103h-26l27.4 47.6v31h23.5v-31l27.5-47.6z"})]})}function Wo({size:i=20}){return r.jsxs("svg",{width:i,height:i,viewBox:"0 0 32 32",fill:"none",children:[r.jsx("circle",{cx:"16",cy:"16",r:"16",fill:"url(#cg)"}),r.jsx("defs",{children:r.jsxs("radialGradient",{id:"cg",cx:"30%",cy:"30%",children:[r.jsx("stop",{offset:"0%",stopColor:"#4696FF"}),r.jsx("stop",{offset:"100%",stopColor:"#B400FF"})]})}),r.jsx("path",{d:"M16 8l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z",fill:"#FFFFFF",opacity:".9"})]})}const bf=[{id:"word",label:"Word Prompts",color:q.wordBlue,appColor:q.wordBlue,letter:"W"},{id:"excel",label:"Excel Formulas",color:q.excelGreen,appColor:q.excelGreen,letter:"X"},{id:"ppt",label:"PowerPoint Decks",color:q.pptOrange,appColor:q.pptOrange,letter:"P"},{id:"outlook",label:"Outlook Threads",color:q.outlookBlue,appColor:q.outlookBlue,letter:"O"},{id:"m365",label:"M365 Chat",color:q.teamsViolet,appColor:q.teamsViolet,letter:"T"}],ly={word:{eyebrow:"DOCUMENT INTELLIGENCE",eyebrowColor:q.wordBlue,h2:"Copilot in Word",subtitle:"Draft documents, summarize content, and rewrite text with AI-powered assistance. Build professional issue memos and restructure client communication instantly.",features:[{title:"Draft Position Notes",body:"Generate comprehensive first-cut tax research memos, issue analyses, and legal summaries for client reviews."},{title:"Refine Legal Language",body:"Audit and adjust draft submissions, ensuring technical precision and alignment with jurisdictional requirements."},{title:"Summarize Case Laws",body:"Quickly synthesize extensive tax court rulings, tribunal orders, and state circulars into essential facts and holdings."},{title:"Track Review Points",body:"Convert comments and inputs into action points, open items and next-step trackers."}],prompt:'"Draft a position memo on international tax safe harbor implications for tech transfers."',suggestions:["Summarize Rulings","Rewrite & Restructure"],screenshotSide:"left",altBg:!0},excel:{eyebrow:"ANALYTICAL ROUTINES",eyebrowColor:q.excelGreen,h2:"Copilot in Excel",subtitle:"Analyze data, create formulas, generate charts, and uncover insights from your spreadsheets. Build clean logical checks and eliminate calculation bugs.",features:[{title:"Analyse Tax Data",body:"Summarise large datasets and identify key trends, gaps, mismatches and exceptions."},{title:"Spot Exceptions",body:"Detect anomalies such as missing details, rate mismatches or duplicates."},{title:"Build Reconciliations",body:"Create formulas and logic checks to compare books, returns and working papers."},{title:"Visualise Compliance",body:"Create dashboards to show status, exposures, ageing and risk movement."}],prompt:'"Highlight and partition any invoice entries where currency rates deviate by more than 2%."',suggestions:["Flag Anomalies","Build Formula"],screenshotSide:"right",altBg:!1},ppt:{eyebrow:"COLLABORATIVE & CREATIVE DELIVERY",eyebrowColor:q.pptOrange,h2:"Copilot in PowerPoint & Chat",subtitle:"Translate raw data matrices into compelling slides, executive summaries, and cross-application project definitions. Use Interactive Chat to coordinate answers.",features:[{title:"Create Client Decks",body:"Convert tax analysis into structured, visually clean, client-ready presentations."},{title:"Prepare Leadership Updates",body:"Generate concise leadership slides on exposures, updates and decisions required."},{title:"Tell the Tax Story",body:"Organise complex positions into context, issue, risk, recommendation and next steps."},{title:"Summarise Case Strategy",body:"Build crisp hearing briefs, timelines and argument maps."}],prompt:'"Create a 5-slide visual presentation deck outlining the safe harbor risks for Q3."',suggestions:["Summarize Rulings","Rewrite & Restructure"],screenshotSide:"right",altBg:!0},outlook:{eyebrow:"COMMUNICATIONS & AGENDAS",eyebrowColor:q.outlookBlue,h2:"Copilot in Outlook",subtitle:"Summarize email threads, draft replies, and manage your inbox efficiently. Convert messy, sprawling client communications into actionable priorities in seconds.",features:[{title:"Draft Client Emails",body:"Prepare clear professional emails for data requests, updates and follow-ups."},{title:"Manage Follow-ups",body:"Convert email conversations into action-oriented follow-ups."},{title:"Summarise Threads",body:"Extract decisions, pending inputs, responsibilities and deadlines from long chains."},{title:"Polish Tone Instantly",body:"Rewrite responses to sound concise, client-sensitive and executive-ready."}],prompt:'"Summarise this 12-email thread, listing all key approvals and unresolved items for the compliance team."',suggestions:["Summarize Thread","Draft Reply"],screenshotSide:"left",altBg:!1},m365:{eyebrow:"COLATE INFORMATION ACROSS M365",eyebrowColor:q.teamsViolet,h2:"Copilot in M365 Chat",subtitle:"Use Copilot in M365 Chat to ask questions, get summaries, and generate content across your Microsoft 365 data. Chat brings together information from documents, emails, meetings, and contacts to give you AI-powered answers grounded in your work data.",features:[{title:"Search Across Work",body:"Find tax-related discussions, documents, emails and files across Microsoft 365."},{title:"Connect Tax Context",body:"Connect compliance data, research notes, email trails and presentation inputs."},{title:"Prepare Matter Briefs",body:"Generate briefing notes before client calls or internal reviews."},{title:"Accelerate First Drafts",body:"Create starting drafts for emails, memos, decks, trackers and meeting prep."}],prompt:'"Find all tax-related documents James shared last week and summarise the key updates."',suggestions:["Search Docs","Summarise"],screenshotSide:"right",altBg:!0}};function sy({title:i,body:o}){return r.jsxs("div",{style:{background:q.white,borderRadius:12,padding:"24px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)",borderBottom:"1px solid #C4C4CD"},children:[r.jsx("p",{style:{fontFamily:C.regular,fontWeight:700,fontSize:16,color:q.dark2,marginBottom:8,lineHeight:1.3},children:i}),r.jsx("p",{style:{fontFamily:C.regular,fontSize:14,color:q.gray01,lineHeight:1.6},children:o})]})}function wf({prompt:i,suggestions:o}){return r.jsxs("div",{style:{width:220,background:q.white,borderLeft:"1px solid #C4C4CD",padding:16,flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx(Wo,{size:22}),r.jsx("p",{style:{fontFamily:C.regular,fontWeight:700,fontSize:14,color:q.dark2},children:"Copilot"})]}),r.jsx("p",{style:{fontFamily:C.regular,fontSize:11,color:q.gray01,marginBottom:6,fontWeight:600,letterSpacing:"0.04em"},children:"CURRENT PROMPT"}),r.jsx("p",{style:{fontFamily:C.regular,fontSize:12,background:q.offWhite,padding:"10px 12px",borderRadius:8,fontStyle:"italic",color:q.dark2,lineHeight:1.5,marginBottom:16},children:i}),r.jsx("p",{style:{fontFamily:C.regular,fontSize:11,color:q.gray01,marginBottom:8,fontWeight:600,letterSpacing:"0.04em"},children:"SUGGESTIONS"}),o.map(s=>r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:16,border:"1px solid #C4C4CD",fontSize:11,color:q.dark2,marginRight:4,marginBottom:4,background:q.white,cursor:"default",fontFamily:C.regular},children:[r.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",children:[r.jsx("circle",{cx:"6",cy:"6",r:"5.5",stroke:q.frameGreen}),r.jsx("path",{d:"M3.5 6l1.7 1.7L8.5 4.5",stroke:q.frameGreen,strokeWidth:"1.2",strokeLinecap:"round"})]}),s]},s))]})}function dy({prompt:i,suggestions:o}){return r.jsxs("div",{style:{flex:1,background:"#F6F6FA",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[r.jsxs("div",{style:{background:q.wordBlue,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[r.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[r.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#4696FF"}),r.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:C.regular,children:"W"})]}),r.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:C.regular,fontWeight:600},children:"Untitled Document"}),r.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:16},children:["File","Home","Insert"].map(s=>r.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontSize:11,fontFamily:C.regular},children:s},s))})]}),r.jsxs("div",{style:{display:"flex",minHeight:320},children:[r.jsxs("div",{style:{flex:1,padding:"24px 24px",fontFamily:C.regular,overflow:"hidden"},children:[r.jsx("p",{style:{fontWeight:700,fontSize:16,color:"#1A1A24",marginBottom:12},children:"International Tax Transfer Pricing Memo"}),r.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65",marginBottom:12},children:"Executive Summary: This document outlines the current regulatory landscape regarding safe harbor provisions for cross-border tech transfers. The following sections detail the methodology for calculating arm's length pricing and the implications of recent tribunal rulings on multinational entities."}),r.jsx("p",{style:{fontWeight:600,fontSize:13,color:"#1A1A24",marginBottom:6},children:"• Methodology"}),r.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65"},children:"We will utilize the Comparable Uncontrolled Price (CUP) method to establish a baseline for royalty rates. This approach ensures compliance with OECD guidelines while providing a defensible position for audit purposes."})]}),r.jsx(wf,{prompt:i,suggestions:o})]})]})}const cy=[{n:2,id:"INV-20240101",exp:"1.1250",act:"1.1260",flag:"OK",ent:"DE Entity A",flagged:!1,active:!1},{n:3,id:"INV-20240102",exp:"1.1250",act:"1.1520",flag:"FLAG",ent:"FR Entity B",flagged:!0,active:!1},{n:4,id:"INV-20240103",exp:"1.1250",act:"1.1480",flag:"FLAG",ent:"NL Entity C",flagged:!1,active:!0},{n:5,id:"INV-20240104",exp:"1.1250",act:"1.1255",flag:"OK",ent:"UK Entity D",flagged:!1,active:!1},{n:6,id:"INV-20240105",exp:"1.1250",act:"1.1610",flag:"FLAG",ent:"ES Entity E",flagged:!0,active:!1},{n:7,id:"INV-20240106",exp:"1.1250",act:"1.1258",flag:"OK",ent:"IT Entity F",flagged:!1,active:!1},{n:8,id:"INV-20240107",exp:"1.1250",act:"1.1263",flag:"OK",ent:"PL Entity G",flagged:!1,active:!1,faded:!0}];function uy({prompt:i,suggestions:o}){return r.jsxs("div",{style:{flex:1,background:"#FFFFFF",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[r.jsxs("div",{style:{background:q.excelGreen,padding:"8px 14px",display:"flex",alignItems:"center",gap:8},children:[r.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[r.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#00C864"}),r.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:C.regular,children:"X"})]}),r.jsx("span",{style:{color:"#FFFFFF",fontSize:12,fontFamily:C.regular,fontWeight:600},children:"TaxAnalysis_Q4_2024.xlsx - Excel"}),r.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:10},children:[q.excelGreen,"#00C864","#00C864"].map((s,p)=>r.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:s,border:"1px solid rgba(255,255,255,0.3)"}},p))})]}),r.jsx("div",{style:{background:"#F6F6FA",padding:"4px 14px",display:"flex",gap:16,borderBottom:"1px solid #C4C4CD"},children:["File","Home","Insert","Formulas","Data","Review","View","Copilot"].map(s=>r.jsx("span",{style:{fontSize:11,color:"#2E2E38",fontFamily:C.regular},children:s},s))}),r.jsxs("div",{style:{background:"#FFFFFF",padding:"5px 14px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #C4C4CD"},children:[r.jsx("span",{style:{background:"#F6F6FA",padding:"3px 8px",borderRadius:4,fontSize:10,fontFamily:"monospace",fontWeight:600},children:"D4"}),r.jsx("span",{style:{width:1,height:16,background:"#C4C4CD"}}),r.jsx("span",{style:{fontFamily:"monospace",fontSize:10,color:q.excelGreen},children:'=IF(ABS(C4-B4)/B4>0.02,"FLAG","OK")'})]}),r.jsxs("div",{style:{position:"relative",overflowX:"auto"},children:[r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:10,fontFamily:C.regular},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#F6F6FA",width:32,padding:"5px 6px",border:"1px solid #C4C4CD",color:"#747480"}}),r.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Invoice ID"}),r.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Expected Rate"}),r.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Actual Rate"}),r.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Variance Flag"}),r.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Entity"})]})}),r.jsx("tbody",{children:cy.map(s=>r.jsxs("tr",{style:{background:s.active?"rgba(16,124,65,0.06)":s.flagged?"rgba(192,57,43,0.04)":"#FFFFFF",opacity:s.faded?.45:1},children:[r.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?q.excelGreen:"#747480",textAlign:"center",fontWeight:s.active?700:400},children:s.n}),r.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?q.excelGreen:s.flagged?"#FF4136":"#2E2E38"},children:s.id}),r.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:"#2E2E38"},children:s.exp}),r.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.flagged?"#FF4136":s.active?q.excelGreen:"#2E2E38",fontWeight:s.flagged||s.active?600:400},children:s.act}),r.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD"},children:r.jsx("span",{style:{background:s.flag==="FLAG"?s.active?q.excelGreen:"rgba(192,57,43,0.12)":"transparent",color:s.flag==="FLAG"?s.active?"#FFFFFF":"#FF4136":q.excelGreen,padding:"2px 6px",borderRadius:4,fontWeight:700},children:s.flag})}),r.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?q.excelGreen:"#2E2E38"},children:s.ent})]},s.n))})]}),r.jsxs("div",{style:{background:"#FFFFFF",borderTop:"1px solid #C4C4CD",padding:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:10},children:[r.jsx(Wo,{size:16}),r.jsx("span",{style:{fontFamily:C.regular,fontSize:11,fontWeight:700,background:q.excelGreen,color:"#FFFFFF",padding:"2px 8px",borderRadius:10},children:"Copilot"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[r.jsx("div",{style:{fontSize:10,fontFamily:C.regular,padding:"8px 10px",borderRadius:8,background:"#F6F6FA",color:"#2E2E38",lineHeight:1.5},children:"I've analysed your transaction data. I found 2 invoices where currency rate deviation exceeds your 2% threshold."}),r.jsx("div",{style:{fontSize:10,fontFamily:C.regular,padding:"8px 10px",borderRadius:8,background:q.excelGreen,color:"#FFFFFF",alignSelf:"flex-end",maxWidth:"85%",lineHeight:1.5},children:"Highlight and partition any invoice entries where currency rates deviate by more than 2%."}),r.jsxs("div",{style:{fontSize:10,fontFamily:C.regular,padding:"8px 10px",borderRadius:8,background:"#F6F6FA",color:"#2E2E38",lineHeight:1.5},children:["Done! Rows 3 and 6 are flagged. Column D formula applied:",r.jsx("div",{style:{fontFamily:"monospace",fontSize:9,color:q.excelGreen,background:"#F6F6FA",padding:"4px 8px",borderRadius:4,marginTop:4},children:'=IF(ABS(C-B)/B>0.02,"FLAG","OK")'})]})]}),r.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",background:q.offWhite,borderRadius:8,padding:"6px 10px"},children:[r.jsx("span",{style:{flex:1,fontFamily:C.regular,fontSize:11,color:q.gray01},children:"Ask Copilot something..."}),r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:q.gray01,strokeWidth:"2",children:[r.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),r.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]})]})]})}function Fp({appColor:i,appLetter:o,title:s,bodyContent:p,prompt:c,suggestions:f}){return r.jsxs("div",{style:{flex:1,background:"#F6F6FA",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[r.jsxs("div",{style:{background:i,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[r.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[r.jsx("rect",{width:"18",height:"19",rx:"2",fill:i}),r.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:C.regular,children:o})]}),r.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:C.regular,fontWeight:600},children:s}),r.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:16},children:["File","Home","Insert"].map(g=>r.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontSize:11,fontFamily:C.regular},children:g},g))})]}),r.jsxs("div",{style:{display:"flex",minHeight:300},children:[r.jsx("div",{style:{flex:1,padding:24,fontFamily:C.regular,overflow:"hidden"},children:p}),r.jsx(wf,{prompt:c,suggestions:f})]})]})}function py(){return r.jsxs("div",{style:{flex:1,background:"#FFFFFF",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[r.jsxs("div",{style:{background:q.teamsViolet,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[r.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[r.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#B400FF"}),r.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:C.regular,children:"T"})]}),r.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:C.regular,fontWeight:600},children:"M365 Chat"})]}),r.jsxs("div",{style:{padding:20},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,paddingBottom:16,borderBottom:"1px solid #C4C4CD",marginBottom:16},children:[r.jsx(Wo,{size:28}),r.jsxs("div",{children:[r.jsx("p",{style:{fontFamily:C.regular,fontWeight:700,fontSize:15,color:q.dark2},children:"Copilot"}),r.jsx("p",{style:{fontFamily:C.regular,fontSize:12,color:q.excelGreen},children:"Online"})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[r.jsxs("div",{style:{display:"flex",gap:10},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:q.yellow,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:C.regular,fontWeight:700,fontSize:12,color:q.dark},children:"U"}),r.jsx("div",{style:{background:"#F6F6FA",padding:"12px 14px",borderRadius:12,fontSize:13,color:"#2E2E38",fontFamily:C.regular,maxWidth:"85%",lineHeight:1.6},children:"Find all tax-related documents James shared last week and summarise the key updates across compliance and advisory."})]}),r.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[r.jsxs("div",{style:{background:"#F6F6FA",padding:"12px 14px",borderRadius:12,fontSize:13,color:"#2E2E38",fontFamily:C.regular,maxWidth:"85%",lineHeight:1.6},children:["I found 3 documents shared by James last week. Here is a summary of the key tax updates:",r.jsx("br",{}),"• ",r.jsx("strong",{children:"Compliance:"})," New safe harbor provisions for cross-border tech transfers.",r.jsx("br",{}),"• ",r.jsx("strong",{children:"Advisory:"})," Tribunal rulings on arm's length pricing methodologies."]}),r.jsx(Wo,{size:28})]})]})]})]})}function kf({color:i,letter:o}){return r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",style:{flexShrink:0},children:[r.jsx("rect",{width:"20",height:"20",rx:"3",fill:i}),r.jsx("text",{x:"4",y:"14",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:C.regular,children:o})]})}function fy({tabId:i}){const o=ly[i],s=bf.find(g=>g.id===i),p=o.altBg?q.offWhite:q.white,c=i==="word"?r.jsx(dy,{prompt:o.prompt,suggestions:o.suggestions}):i==="excel"?r.jsx(uy,{prompt:o.prompt,suggestions:o.suggestions}):i==="ppt"?r.jsx(Fp,{appColor:q.pptOrange,appLetter:"P",title:"Safe Harbor Presentation",prompt:o.prompt,suggestions:o.suggestions,bodyContent:r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{fontWeight:700,fontSize:16,color:"#1A1A24",marginBottom:12},children:"Safe Harbor Risks — Q3 Presentation"}),r.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65",marginBottom:12},children:"Executive Summary: This deck summarizes the current regulatory landscape regarding safe harbor provisions for cross-border tech transfers. The following slides detail the methodology for calculating arm's length pricing."}),r.jsx("p",{style:{fontWeight:600,fontSize:13,color:"#1A1A24",marginBottom:6},children:"• Slide 1: Executive Summary"}),r.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65"},children:"We will utilize the Comparable Uncontrolled Price (CUP) method to establish a baseline for royalty rates. This approach ensures compliance with OECD guidelines."})]})}):i==="outlook"?r.jsx(Fp,{appColor:q.outlookBlue,appLetter:"O",title:"Inbox — Compliance Team",prompt:o.prompt,suggestions:o.suggestions,bodyContent:r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,padding:12,background:"#F6F6FA",borderRadius:8},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:q.outlookBlue,display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF",fontWeight:700,fontSize:15,flexShrink:0,fontFamily:C.regular},children:"A"}),r.jsxs("div",{children:[r.jsx("p",{style:{fontWeight:700,fontSize:14,color:"#1A1A24",marginBottom:4,fontFamily:C.regular},children:"Alex Chen"}),r.jsx("p",{style:{fontSize:13,color:"#2E2E38",fontFamily:C.regular},children:"Re: Compliance Review for Q3 Tax Filings"}),r.jsx("p",{style:{fontSize:11,color:q.gray01,fontFamily:C.regular,marginTop:2},children:"10:42 AM"})]})]})}):r.jsx(py,{}),f=r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:16},children:o.features.map(g=>r.jsx(sy,{title:g.title,body:g.body},g.title))});return r.jsx("div",{style:{background:p,padding:"48px 0 64px"},children:r.jsxs("div",{style:{...Rt},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[r.jsx(kf,{color:s.appColor,letter:s.letter}),r.jsx("span",{style:{fontFamily:C.regular,fontWeight:700,fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:o.eyebrowColor},children:o.eyebrow})]}),r.jsx("p",{style:{fontFamily:C.regular,fontWeight:700,fontSize:28,color:q.dark2,marginBottom:12,lineHeight:1.2},children:o.h2}),r.jsx("p",{style:{fontFamily:C.regular,fontSize:15,color:q.gray01,marginBottom:36,lineHeight:1.6},children:o.subtitle}),r.jsx("div",{style:{display:"flex",gap:32,alignItems:"flex-start"},children:o.screenshotSide==="left"?r.jsxs(r.Fragment,{children:[c,f]}):r.jsxs(r.Fragment,{children:[f,c]})})]})})}const aa={mail:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),r.jsx("path",{d:"M2 7l10 7 10-7"})]}),book:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4 19.5A2.5 2.5 0 016.5 17H20"}),r.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"})]}),helpCircle:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),r.jsx("circle",{cx:"12",cy:"17",r:".5",fill:"#C4C4CD"})]}),compass:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),lock:r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),r.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})},hy=[{icon:aa.mail,title:"Outlook Copilot Resources",body:"Access quick reference sheets and guides for secure email automation.",cta:"View Guides"},{icon:aa.book,title:"EY Prompt Library",body:"Explore verified prompts created and vetted specifically by professional services.",cta:"Browse Library"},{icon:aa.helpCircle,title:"Copilot FAQs",body:"Find quick answers regarding workspace licenses, token limits, and prompt accuracy.",cta:"Read FAQs"},{icon:aa.compass,title:"Explore Agents",body:"Discover AI agents built for specific EY workflows, from tax research to audit support.",cta:"Explore Agents"},{icon:aa.lock,title:"Manage Access",body:"Review your Copilot license status, request access, or manage permissions for your team.",cta:"Manage Access"}],gy=[{num:"01",title:"Quick Check Before You Prompt",src:"/security_Picture1.png"},{num:"02",title:"Share Smartly",src:"/security_Picture2.png"},{num:"03",title:"Use Sensitivity Labels",src:"/security_Picture3.png"},{num:"04",title:"Check Who Has Access",src:"/security_Picture4.png"}];function my({onBack:i,onNavigate:o}){const[s,p]=z.useState("word");return r.jsxs("div",{style:{fontFamily:C.regular,color:q.dark2,background:q.white,minHeight:"100vh"},children:[i&&o&&r.jsxs(r.Fragment,{children:[r.jsx(fi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),r.jsx(Yo,{currentModuleId:"copilot-hub",onNavigate:o,onBack:i})]}),r.jsxs("section",{id:"module-content",style:{position:"relative",display:"flex",alignItems:"center",padding:`88px ${Oo}`,gap:64,overflow:"hidden",backgroundColor:q.dark,backgroundImage:"url('/spectrum/hero-frame-9.png')",backgroundSize:"cover",backgroundPosition:"72% center",backgroundRepeat:"no-repeat"},children:[r.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(26,26,36,0.92) 0%, rgba(26,26,36,0.72) 42%, rgba(26,26,36,0.28) 70%, rgba(26,26,36,0.15) 100%)",pointerEvents:"none"}}),r.jsxs("div",{style:{position:"relative",zIndex:1,flex:1,maxWidth:676},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20},children:[r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:q.frameGreen}}),r.jsx("span",{style:{fontSize:11,color:q.gray02,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,fontFamily:C.regular},children:"M365 COPILOT HUB IS LIVE"})]}),r.jsx("h1",{style:{fontSize:36,color:q.white,fontWeight:700,lineHeight:1.3,marginBottom:20},children:"Explore M365 Copilot prompts in a new-age workspace"}),r.jsx("p",{style:{fontSize:16,color:"rgba(255,255,255,0.82)",lineHeight:1.6},children:"Step into an interactive M365 learning space where you can find what wonders the age-old MS apps can do just by adding a magical element called M365."})]}),r.jsx("div",{style:{position:"relative",zIndex:1,width:540,height:269,background:"rgba(46,46,56,0.55)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:"22px solid #FFFFFF",borderTop:"13px solid transparent",borderBottom:"13px solid transparent",marginLeft:5}})})})]}),r.jsx("section",{id:"prompt-repository",style:{padding:"64px 0 0",textAlign:"center",scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("p",{style:{fontSize:11,color:q.gray01,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:12,fontWeight:700},children:"EXPLORE PROMPT CATEGORIES"}),r.jsx("h2",{style:{fontSize:28,fontWeight:700,marginBottom:12,color:q.dark2},children:"Sample Prompt Repository for using Copilot in Tax"}),r.jsx("p",{style:{fontSize:15,color:q.gray01,marginBottom:32},children:"Select your preferred M365 application tool below to view optimized, compliant corporate-ready prompts."}),r.jsx("div",{style:{display:"inline-flex",gap:8,background:q.dark2,borderRadius:12,padding:8},children:bf.map(c=>r.jsxs("button",{onClick:()=>p(c.id),style:{display:"flex",alignItems:"center",gap:8,padding:"9px 18px",borderRadius:8,background:s===c.id?q.yellow:"transparent",border:"none",cursor:"pointer",fontSize:13,color:s===c.id?q.dark2:q.gray02,fontWeight:700,boxShadow:s===c.id?"0 1px 6px rgba(0,0,0,0.25)":"none",transition:"background 0.15s, color 0.15s, box-shadow 0.15s",fontFamily:C.regular},children:[r.jsx(kf,{color:c.appColor,letter:c.letter}),c.label]},c.id))})]})}),r.jsx(fy,{tabId:s}),r.jsx("section",{id:"useful-links",style:{background:q.dark2,padding:`${Mt.sectionPaddingY} 0 64px`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("h2",{style:{fontSize:28,fontWeight:700,color:q.white,marginBottom:12,textAlign:"center"},children:"Useful Links"}),r.jsx("p",{style:{fontSize:15,color:q.gray02,marginBottom:48,textAlign:"center"},children:"Handy EY resources to check your system access, explore deeper templates, and use generative AI safely."}),r.jsx("div",{style:{display:"flex",gap:20},children:hy.map(c=>r.jsxs("div",{style:{flex:"1 1 0",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,padding:"24px 20px",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.15s",cursor:"default"},children:[r.jsx("div",{style:{width:48,height:48,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:c.icon}),r.jsx("p",{style:{fontWeight:700,fontSize:15,color:q.white,lineHeight:1.3},children:c.title}),r.jsx("p",{style:{fontSize:13,color:"#C4C4CD",flex:1,lineHeight:1.55},children:c.body}),r.jsxs("a",{href:"#",style:{fontSize:14,color:q.yellow,textDecoration:"none",fontWeight:700,display:"flex",alignItems:"center",gap:4},children:[c.cta," ",r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},c.title))})]})}),r.jsx("section",{id:"security",style:{background:q.dark,padding:`${Mt.sectionPaddingY} 0`,scrollMarginTop:jt},children:r.jsxs("div",{style:{...Rt},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",background:"rgba(255,230,0,0.12)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:20,padding:"5px 14px",marginBottom:24},children:r.jsx("span",{style:{fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:q.yellow,fontFamily:C.regular},children:"GOVERNANCE & TRUST"})}),r.jsx("h2",{style:{fontSize:32,fontWeight:700,color:q.white,marginBottom:14},children:"Enterprise-Grade Security"}),r.jsx("p",{style:{fontSize:16,color:q.gray02,marginBottom:52,maxWidth:800},children:"Before you let Copilot loose on tax data, know the ground rules. Tap any card to view it full-size."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:26},children:gy.map(c=>r.jsxs("div",{style:{borderRadius:12,overflow:"hidden",cursor:"pointer",transition:"transform 0.25s, box-shadow 0.25s",background:"#2e2e38",border:"1px solid #747480",display:"flex",flexDirection:"column"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-6px)",f.currentTarget.style.boxShadow="0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px #ffe600"},onMouseLeave:f=>{f.currentTarget.style.transform="none",f.currentTarget.style.boxShadow="none"},children:[r.jsx("div",{style:{height:140,background:"linear-gradient(155deg, rgb(69,69,83) 0%, rgb(37,37,46) 100%)",position:"relative",overflow:"hidden",flexShrink:0},children:r.jsx("img",{src:c.src,alt:c.title,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}})}),r.jsxs("div",{style:{background:"#2e2e38",padding:"20px 24px",flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("p",{style:{fontFamily:C.regular,fontWeight:700,fontSize:32,color:q.yellow,marginBottom:10,lineHeight:1},children:c.num}),r.jsx("p",{style:{fontFamily:C.regular,fontWeight:700,fontSize:16,color:q.white,lineHeight:1.35,flex:1,marginBottom:14},children:c.title}),r.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.1)",marginBottom:14}}),r.jsxs("a",{href:"#",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,color:q.yellow,fontWeight:700,textDecoration:"none",fontFamily:C.regular},children:["View Protocol",r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},c.num))})]})}),r.jsx(cd,{title:r.jsxs(r.Fragment,{children:["You've completed Phase 1.",r.jsx("br",{}),"Keep practising with ",r.jsx(vf,{children:"real tax workflows."})]}),description:"You now have the foundations, prompting craft, and Copilot patterns to use AI safely in tax work. Revisit any module anytime — or return to Tax Labs to explore what's next.",ctaLabel:"Back to Tax Labs",onContinue:()=>o==null?void 0:o("/phase1"),meta:"Phase 1 covered: AI foundations, tax prompting, and M365 Copilot"}),r.jsx("footer",{style:{background:q.dark2,padding:"56px 0 32px"},children:r.jsxs("div",{style:{...Rt},children:[r.jsxs("div",{style:{display:"flex",gap:80,marginBottom:48},children:[r.jsxs("div",{style:{flex:1,maxWidth:280},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[r.jsx(oy,{height:28,letterColor:"#FFFFFF"}),r.jsx("span",{style:{color:q.white,fontWeight:700,fontSize:16,fontFamily:C.regular},children:"EY.ai Tax Labs"})]}),r.jsx("p",{style:{fontSize:13,color:"#C4C4CD",lineHeight:1.6},children:"Accelerating tax performance safely through custom generative AI structures and premium prompt frameworks."})]}),r.jsxs("div",{children:[r.jsx("p",{style:{fontSize:14,color:q.white,fontWeight:700,marginBottom:14,fontFamily:C.regular},children:"M365 Apps"}),["Word Prompts","Excel Sheets","PowerPoint Decks","Outlook Emails"].map(c=>r.jsx("a",{href:"#",style:{display:"block",fontSize:13,color:"#C4C4CD",textDecoration:"none",marginBottom:8,fontFamily:C.regular},children:c},c))]}),r.jsxs("div",{children:[r.jsx("p",{style:{fontSize:14,color:q.white,fontWeight:700,marginBottom:14,fontFamily:C.regular},children:"Trust & Security"}),["Privacy Policy","Data Governance","Safe Harbor Rules"].map(c=>r.jsx("a",{href:"#",style:{display:"block",fontSize:13,color:"#C4C4CD",textDecoration:"none",marginBottom:8,fontFamily:C.regular},children:c},c))]})]}),r.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:20,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx("p",{style:{fontSize:12,color:"#C4C4CD",fontFamily:C.regular},children:"© 2026 EY.ai Tax Labs. All rights reserved. Proprietary and confidential."}),r.jsx("div",{style:{display:"flex",gap:14},children:["in","𝕏"].map(c=>r.jsx("a",{href:"#",style:{width:28,height:28,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"#C4C4CD",fontSize:11,fontWeight:700,textDecoration:"none",fontFamily:C.regular},children:c},c))})]})]})})]})}function xy(){return r.jsx("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden",children:r.jsx(ym,{})})}function vy(){const i=Nn();return r.jsx("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden",children:r.jsx(Xx,{onNavigateToPhase1:()=>i("/phase1")})})}function yy(){const i=Nn();return r.jsx("div",{style:{width:"100%",maxWidth:"100%",minWidth:0},children:r.jsx(Jx,{onNavigate:i,onNavigateToFoundational:()=>i("/foundational"),onNavigateToAiTaxPrompting:()=>i("/ai-tax-prompting"),onNavigateToCopilotHub:()=>i("/copilot-hub")})})}function by(){const i=Nn();return r.jsx("div",{className:"size-full",children:r.jsx(my,{onBack:()=>i("/phase1"),onNavigate:i})})}function wy(){const i=Nn();return r.jsx("div",{className:"size-full",children:r.jsx(ay,{onBack:()=>i("/phase1"),onNavigate:i})})}function ky(){const i=Nn();return r.jsx("div",{className:"size-full",children:r.jsx(Dv,{onBack:()=>i("/phase1"),onNavigate:i})})}function Cy(){return r.jsx("div",{className:"size-full overflow-auto bg-white",children:r.jsx(a2,{})})}const jy=I2([{path:"/",Component:Cy,children:[{index:!0,Component:xy},{path:"phased",Component:vy},{path:"phase1",Component:yy},{path:"ai-tax-prompting",Component:wy},{path:"foundational",Component:ky},{path:"copilot-hub",Component:by}]}]);function Ey(){return r.jsx(n2,{router:jy})}document.documentElement.style.setProperty("--ey-content-width",Uo.contentWidth);hh.createRoot(document.getElementById("root")).render(r.jsx(Ey,{}));
