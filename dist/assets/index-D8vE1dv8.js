function ag(i,o){for(var s=0;s<o.length;s++){const p=o[s];if(typeof p!="string"&&!Array.isArray(p)){for(const u in p)if(u!=="default"&&!(u in i)){const f=Object.getOwnPropertyDescriptor(p,u);f&&Object.defineProperty(i,u,f.get?f:{enumerable:!0,get:()=>p[u]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&p(h)}).observe(document,{childList:!0,subtree:!0});function s(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function p(u){if(u.ep)return;u.ep=!0;const f=s(u);fetch(u.href,f)}})();function og(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ss={exports:{}},na={},Fs={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function lg(){if(Tu)return Fe;Tu=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),b=Symbol.iterator;function F(A){return A===null||typeof A!="object"?null:(A=b&&A[b]||A["@@iterator"],typeof A=="function"?A:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,D={};function _(A,P,fe){this.props=A,this.context=P,this.refs=D,this.updater=fe||E}_.prototype.isReactComponent={},_.prototype.setState=function(A,P){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,P,"setState")},_.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Q(){}Q.prototype=_.prototype;function H(A,P,fe){this.props=A,this.context=P,this.refs=D,this.updater=fe||E}var K=H.prototype=new Q;K.constructor=H,B(K,_.prototype),K.isPureReactComponent=!0;var he=Array.isArray,xe=Object.prototype.hasOwnProperty,Ee={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function de(A,P,fe){var me,ge={},ke=null,De=null;if(P!=null)for(me in P.ref!==void 0&&(De=P.ref),P.key!==void 0&&(ke=""+P.key),P)xe.call(P,me)&&!M.hasOwnProperty(me)&&(ge[me]=P[me]);var ze=arguments.length-2;if(ze===1)ge.children=fe;else if(1<ze){for(var Ve=Array(ze),wt=0;wt<ze;wt++)Ve[wt]=arguments[wt+2];ge.children=Ve}if(A&&A.defaultProps)for(me in ze=A.defaultProps,ze)ge[me]===void 0&&(ge[me]=ze[me]);return{$$typeof:i,type:A,key:ke,ref:De,props:ge,_owner:Ee.current}}function ve(A,P){return{$$typeof:i,type:A.type,key:P,ref:A.ref,props:A.props,_owner:A._owner}}function Se(A){return typeof A=="object"&&A!==null&&A.$$typeof===i}function Ne(A){var P={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(fe){return P[fe]})}var Pe=/\/+/g;function Ue(A,P){return typeof A=="object"&&A!==null&&A.key!=null?Ne(""+A.key):P.toString(36)}function Me(A,P,fe,me,ge){var ke=typeof A;(ke==="undefined"||ke==="boolean")&&(A=null);var De=!1;if(A===null)De=!0;else switch(ke){case"string":case"number":De=!0;break;case"object":switch(A.$$typeof){case i:case o:De=!0}}if(De)return De=A,ge=ge(De),A=me===""?"."+Ue(De,0):me,he(ge)?(fe="",A!=null&&(fe=A.replace(Pe,"$&/")+"/"),Me(ge,P,fe,"",function(wt){return wt})):ge!=null&&(Se(ge)&&(ge=ve(ge,fe+(!ge.key||De&&De.key===ge.key?"":(""+ge.key).replace(Pe,"$&/")+"/")+A)),P.push(ge)),1;if(De=0,me=me===""?".":me+":",he(A))for(var ze=0;ze<A.length;ze++){ke=A[ze];var Ve=me+Ue(ke,ze);De+=Me(ke,P,fe,Ve,ge)}else if(Ve=F(A),typeof Ve=="function")for(A=Ve.call(A),ze=0;!(ke=A.next()).done;)ke=ke.value,Ve=me+Ue(ke,ze++),De+=Me(ke,P,fe,Ve,ge);else if(ke==="object")throw P=String(A),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return De}function qe(A,P,fe){if(A==null)return A;var me=[],ge=0;return Me(A,me,"","",function(ke){return P.call(fe,ke,ge++)}),me}function je(A){if(A._status===-1){var P=A._result;P=P(),P.then(function(fe){(A._status===0||A._status===-1)&&(A._status=1,A._result=fe)},function(fe){(A._status===0||A._status===-1)&&(A._status=2,A._result=fe)}),A._status===-1&&(A._status=0,A._result=P)}if(A._status===1)return A._result.default;throw A._result}var we={current:null},$={transition:null},te={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:$,ReactCurrentOwner:Ee};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:qe,forEach:function(A,P,fe){qe(A,function(){P.apply(this,arguments)},fe)},count:function(A){var P=0;return qe(A,function(){P++}),P},toArray:function(A){return qe(A,function(P){return P})||[]},only:function(A){if(!Se(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Fe.Component=_,Fe.Fragment=s,Fe.Profiler=u,Fe.PureComponent=H,Fe.StrictMode=p,Fe.Suspense=x,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Fe.act=Z,Fe.cloneElement=function(A,P,fe){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var me=B({},A.props),ge=A.key,ke=A.ref,De=A._owner;if(P!=null){if(P.ref!==void 0&&(ke=P.ref,De=Ee.current),P.key!==void 0&&(ge=""+P.key),A.type&&A.type.defaultProps)var ze=A.type.defaultProps;for(Ve in P)xe.call(P,Ve)&&!M.hasOwnProperty(Ve)&&(me[Ve]=P[Ve]===void 0&&ze!==void 0?ze[Ve]:P[Ve])}var Ve=arguments.length-2;if(Ve===1)me.children=fe;else if(1<Ve){ze=Array(Ve);for(var wt=0;wt<Ve;wt++)ze[wt]=arguments[wt+2];me.children=ze}return{$$typeof:i,type:A.type,key:ge,ref:ke,props:me,_owner:De}},Fe.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:f,_context:A},A.Consumer=A},Fe.createElement=de,Fe.createFactory=function(A){var P=de.bind(null,A);return P.type=A,P},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(A){return{$$typeof:m,render:A}},Fe.isValidElement=Se,Fe.lazy=function(A){return{$$typeof:C,_payload:{_status:-1,_result:A},_init:je}},Fe.memo=function(A,P){return{$$typeof:v,type:A,compare:P===void 0?null:P}},Fe.startTransition=function(A){var P=$.transition;$.transition={};try{A()}finally{$.transition=P}},Fe.unstable_act=Z,Fe.useCallback=function(A,P){return we.current.useCallback(A,P)},Fe.useContext=function(A){return we.current.useContext(A)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(A){return we.current.useDeferredValue(A)},Fe.useEffect=function(A,P){return we.current.useEffect(A,P)},Fe.useId=function(){return we.current.useId()},Fe.useImperativeHandle=function(A,P,fe){return we.current.useImperativeHandle(A,P,fe)},Fe.useInsertionEffect=function(A,P){return we.current.useInsertionEffect(A,P)},Fe.useLayoutEffect=function(A,P){return we.current.useLayoutEffect(A,P)},Fe.useMemo=function(A,P){return we.current.useMemo(A,P)},Fe.useReducer=function(A,P,fe){return we.current.useReducer(A,P,fe)},Fe.useRef=function(A){return we.current.useRef(A)},Fe.useState=function(A){return we.current.useState(A)},Fe.useSyncExternalStore=function(A,P,fe){return we.current.useSyncExternalStore(A,P,fe)},Fe.useTransition=function(){return we.current.useTransition()},Fe.version="18.3.1",Fe}var Ru;function Ys(){return Ru||(Ru=1,Fs.exports=lg()),Fs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function sg(){if(Mu)return na;Mu=1;var i=Ys(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(m,x,v){var C,b={},F=null,E=null;v!==void 0&&(F=""+v),x.key!==void 0&&(F=""+x.key),x.ref!==void 0&&(E=x.ref);for(C in x)p.call(x,C)&&!f.hasOwnProperty(C)&&(b[C]=x[C]);if(m&&m.defaultProps)for(C in x=m.defaultProps,x)b[C]===void 0&&(b[C]=x[C]);return{$$typeof:o,type:m,key:F,ref:E,props:b,_owner:u.current}}return na.Fragment=s,na.jsx=h,na.jsxs=h,na}var Du;function dg(){return Du||(Du=1,Ss.exports=sg()),Ss.exports}var n=dg(),Io={},As={exports:{}},Nt={},zs={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function cg(){return Bu||(Bu=1,(function(i){function o($,te){var Z=$.length;$.push(te);e:for(;0<Z;){var A=Z-1>>>1,P=$[A];if(0<u(P,te))$[A]=te,$[Z]=P,Z=A;else break e}}function s($){return $.length===0?null:$[0]}function p($){if($.length===0)return null;var te=$[0],Z=$.pop();if(Z!==te){$[0]=Z;e:for(var A=0,P=$.length,fe=P>>>1;A<fe;){var me=2*(A+1)-1,ge=$[me],ke=me+1,De=$[ke];if(0>u(ge,Z))ke<P&&0>u(De,ge)?($[A]=De,$[ke]=Z,A=ke):($[A]=ge,$[me]=Z,A=me);else if(ke<P&&0>u(De,Z))$[A]=De,$[ke]=Z,A=ke;else break e}}return te}function u($,te){var Z=$.sortIndex-te.sortIndex;return Z!==0?Z:$.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var x=[],v=[],C=1,b=null,F=3,E=!1,B=!1,D=!1,_=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K($){for(var te=s(v);te!==null;){if(te.callback===null)p(v);else if(te.startTime<=$)p(v),te.sortIndex=te.expirationTime,o(x,te);else break;te=s(v)}}function he($){if(D=!1,K($),!B)if(s(x)!==null)B=!0,je(xe);else{var te=s(v);te!==null&&we(he,te.startTime-$)}}function xe($,te){B=!1,D&&(D=!1,Q(de),de=-1),E=!0;var Z=F;try{for(K(te),b=s(x);b!==null&&(!(b.expirationTime>te)||$&&!Ne());){var A=b.callback;if(typeof A=="function"){b.callback=null,F=b.priorityLevel;var P=A(b.expirationTime<=te);te=i.unstable_now(),typeof P=="function"?b.callback=P:b===s(x)&&p(x),K(te)}else p(x);b=s(x)}if(b!==null)var fe=!0;else{var me=s(v);me!==null&&we(he,me.startTime-te),fe=!1}return fe}finally{b=null,F=Z,E=!1}}var Ee=!1,M=null,de=-1,ve=5,Se=-1;function Ne(){return!(i.unstable_now()-Se<ve)}function Pe(){if(M!==null){var $=i.unstable_now();Se=$;var te=!0;try{te=M(!0,$)}finally{te?Ue():(Ee=!1,M=null)}}else Ee=!1}var Ue;if(typeof H=="function")Ue=function(){H(Pe)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,qe=Me.port2;Me.port1.onmessage=Pe,Ue=function(){qe.postMessage(null)}}else Ue=function(){_(Pe,0)};function je($){M=$,Ee||(Ee=!0,Ue())}function we($,te){de=_(function(){$(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){B||E||(B=!0,je(xe))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return F},i.unstable_getFirstCallbackNode=function(){return s(x)},i.unstable_next=function($){switch(F){case 1:case 2:case 3:var te=3;break;default:te=F}var Z=F;F=te;try{return $()}finally{F=Z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,te){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=F;F=$;try{return te()}finally{F=Z}},i.unstable_scheduleCallback=function($,te,Z){var A=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?A+Z:A):Z=A,$){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Z+P,$={id:C++,callback:te,priorityLevel:$,startTime:Z,expirationTime:P,sortIndex:-1},Z>A?($.sortIndex=Z,o(v,$),s(x)===null&&$===s(v)&&(D?(Q(de),de=-1):D=!0,we(he,Z-A))):($.sortIndex=P,o(x,$),B||E||(B=!0,je(xe))),$},i.unstable_shouldYield=Ne,i.unstable_wrapCallback=function($){var te=F;return function(){var Z=F;F=te;try{return $.apply(this,arguments)}finally{F=Z}}}})(Is)),Is}var Pu;function ug(){return Pu||(Pu=1,zs.exports=cg()),zs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function pg(){if(_u)return Nt;_u=1;var i=Ys(),o=ug();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,u={};function f(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(u[e]=t,e=0;e<t.length;e++)p.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},b={};function F(e){return x.call(b,e)?!0:x.call(C,e)?!1:v.test(e)?b[e]=!0:(C[e]=!0,!1)}function E(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,r,a){if(t===null||typeof t>"u"||E(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function D(e,t,r,a,l,d,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=g}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new D(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,H);_[t]=new D(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,H);_[t]=new D(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,H);_[t]=new D(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,t,r,a){var l=_.hasOwnProperty(t)?_[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,r,l,a)&&(r=null),a||l===null?F(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var he=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),Ne=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),$=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,A;function P(e){if(A===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var fe=!1;function me(e,t){if(!e||fe)return"";fe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var a=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){a=R}e.call(t.prototype)}else{try{throw Error()}catch(R){a=R}e()}}catch(R){if(R&&a&&typeof R.stack=="string"){for(var l=R.stack.split(`
`),d=a.stack.split(`
`),g=l.length-1,y=d.length-1;1<=g&&0<=y&&l[g]!==d[y];)y--;for(;1<=g&&0<=y;g--,y--)if(l[g]!==d[y]){if(g!==1||y!==1)do if(g--,y--,0>y||l[g]!==d[y]){var j=`
`+l[g].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=g&&0<=y);break}}}finally{fe=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?P(e):""}function ge(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=me(e.type,!1),e;case 11:return e=me(e.type.render,!1),e;case 1:return e=me(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case Ee:return"Portal";case ve:return"Profiler";case de:return"StrictMode";case Ue:return"Suspense";case Me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ne:return(e.displayName||"Context")+".Consumer";case Se:return(e._context.displayName||"Context")+".Provider";case Pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qe:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function De(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ze(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wt(e){var t=Ve(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,d.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=wt(e))}function lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=Ve(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pr(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function wa(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=ze(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ln(e,t){t=t.checked,t!=null&&K(e,"checked",t,!1)}function hi(e,t){ln(e,t);var r=ze(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_r(e,t.type,r):t.hasOwnProperty("defaultValue")&&_r(e,t.type,ze(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ka(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function _r(e,t,r){(t!=="number"||Jt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ur=Array.isArray;function Tn(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+ze(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ca(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(ur(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ze(r)}}function sn(e,t){var r=ze(t.value),a=ze(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Rn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Et,Ot=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Et=Et||document.createElement("div"),Et.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Et.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vi=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){vi.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fr[t]=fr[e]})});function ja(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||fr.hasOwnProperty(e)&&fr[e]?(""+t).trim():t+"px"}function Wt(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=ja(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var Ea=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hr(e,t){if(t){if(Ea[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Or(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function Wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,yn=null,dn=null;function Sa(e){if(e=Oi(e)){if(typeof Dn!="function")throw Error(s(280));var t=e.stateNode;t&&(t=$a(t),Dn(e.stateNode,e.type,t))}}function bi(e){yn?dn?dn.push(e):dn=[e]:yn=e}function Fa(){if(yn){var e=yn,t=dn;if(dn=yn=null,Sa(e),t)for(e=0;e<t.length;e++)Sa(t[e])}}function wi(e,t){return e(t)}function gr(){}var Bn=!1;function ki(e,t,r){if(Bn)return e(t,r);Bn=!0;try{return wi(e,t,r)}finally{Bn=!1,(yn!==null||dn!==null)&&(gr(),Fa())}}function hr(e,t){var r=e.stateNode;if(r===null)return null;var a=$a(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var Ci=!1;if(m)try{var w={};Object.defineProperty(w,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",w,w),window.removeEventListener("test",w,w)}catch{Ci=!1}function z(e,t,r,a,l,d,g,y,j){var R=Array.prototype.slice.call(arguments,3);try{t.apply(r,R)}catch(V){this.onError(V)}}var T=!1,W=null,Y=!1,oe=null,ce={onError:function(e){T=!0,W=e}};function J(e,t,r,a,l,d,g,y,j){T=!1,W=null,z.apply(ce,arguments)}function ne(e,t,r,a,l,d,g,y,j){if(J.apply(this,arguments),T){if(T){var R=W;T=!1,W=null}else throw Error(s(198));Y||(Y=!0,oe=R)}}function ie(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function be(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function se(e){if(ie(e)!==e)throw Error(s(188))}function Ce(e){var t=e.alternate;if(!t){if(t=ie(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var d=l.alternate;if(d===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===r)return se(l),e;if(d===a)return se(l),t;d=d.sibling}throw Error(s(188))}if(r.return!==a.return)r=l,a=d;else{for(var g=!1,y=l.child;y;){if(y===r){g=!0,r=l,a=d;break}if(y===a){g=!0,a=l,r=d;break}y=y.sibling}if(!g){for(y=d.child;y;){if(y===r){g=!0,r=d,a=l;break}if(y===a){g=!0,a=d,r=l;break}y=y.sibling}if(!g)throw Error(s(189))}}if(r.alternate!==a)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function Ie(e){return e=Ce(e),e!==null?nt(e):null}function nt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nt(e);if(t!==null)return t;e=e.sibling}return null}var et=o.unstable_scheduleCallback,ct=o.unstable_cancelCallback,Be=o.unstable_shouldYield,St=o.unstable_requestPaint,_e=o.unstable_now,mr=o.unstable_getCurrentPriorityLevel,Vt=o.unstable_ImmediatePriority,Rt=o.unstable_UserBlockingPriority,Pn=o.unstable_NormalPriority,xr=o.unstable_LowPriority,cn=o.unstable_IdlePriority,bn=null,kt=null;function Le(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(bn,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Ze,_n=Math.log,wn=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(_n(e)/wn|0)|0}var kn=64,vr=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,d=e.pingedLanes,g=r&268435455;if(g!==0){var y=g&~l;y!==0?a=yr(y):(d&=g,d!==0&&(a=yr(d)))}else g=r&~l,g!==0?a=yr(g):d!==0&&(a=yr(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Oe(t),l=1<<r,a|=e[r],t&=~l;return a}function jf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var g=31-Oe(d),y=1<<g,j=l[g];j===-1?((y&r)===0||(y&a)!==0)&&(l[g]=jf(y,t)):j<=t&&(e.expiredLanes|=y),d&=~y}}function Yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cd(){var e=kn;return kn<<=1,(kn&4194240)===0&&(kn=64),e}function qo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ji(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=r}function Sf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Oe(r),d=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~d}}function Zo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Oe(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var He=0;function ud(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pd,Ko,fd,gd,hd,Qo=!1,za=[],Hn=null,On=null,Wn=null,Ei=new Map,Si=new Map,Vn=[],Ff="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Fi(e,t,r,a,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:d,targetContainers:[l]},t!==null&&(t=Oi(t),t!==null&&Ko(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Af(e,t,r,a,l){switch(t){case"focusin":return Hn=Fi(Hn,e,t,r,a,l),!0;case"dragenter":return On=Fi(On,e,t,r,a,l),!0;case"mouseover":return Wn=Fi(Wn,e,t,r,a,l),!0;case"pointerover":var d=l.pointerId;return Ei.set(d,Fi(Ei.get(d)||null,e,t,r,a,l)),!0;case"gotpointercapture":return d=l.pointerId,Si.set(d,Fi(Si.get(d)||null,e,t,r,a,l)),!0}return!1}function xd(e){var t=br(e.target);if(t!==null){var r=ie(t);if(r!==null){if(t=r.tag,t===13){if(t=be(r),t!==null){e.blockedOn=t,hd(e.priority,function(){fd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ia(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Jo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);yi=a,r.target.dispatchEvent(a),yi=null}else return t=Oi(r),t!==null&&Ko(t),e.blockedOn=r,!1;t.shift()}return!0}function vd(e,t,r){Ia(e)&&r.delete(t)}function zf(){Qo=!1,Hn!==null&&Ia(Hn)&&(Hn=null),On!==null&&Ia(On)&&(On=null),Wn!==null&&Ia(Wn)&&(Wn=null),Ei.forEach(vd),Si.forEach(vd)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zf)))}function zi(e){function t(l){return Ai(l,e)}if(0<za.length){Ai(za[0],e);for(var r=1;r<za.length;r++){var a=za[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Hn!==null&&Ai(Hn,e),On!==null&&Ai(On,e),Wn!==null&&Ai(Wn,e),Ei.forEach(t),Si.forEach(t),r=0;r<Vn.length;r++)a=Vn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<Vn.length&&(r=Vn[0],r.blockedOn===null);)xd(r),r.blockedOn===null&&Vn.shift()}var Vr=he.ReactCurrentBatchConfig,La=!0;function If(e,t,r,a){var l=He,d=Vr.transition;Vr.transition=null;try{He=1,Xo(e,t,r,a)}finally{He=l,Vr.transition=d}}function Lf(e,t,r,a){var l=He,d=Vr.transition;Vr.transition=null;try{He=4,Xo(e,t,r,a)}finally{He=l,Vr.transition=d}}function Xo(e,t,r,a){if(La){var l=Jo(e,t,r,a);if(l===null)ml(e,t,a,Na,r),md(e,a);else if(Af(l,e,t,r,a))a.stopPropagation();else if(md(e,a),t&4&&-1<Ff.indexOf(e)){for(;l!==null;){var d=Oi(l);if(d!==null&&pd(d),d=Jo(e,t,r,a),d===null&&ml(e,t,a,Na,r),d===l)break;l=d}l!==null&&a.stopPropagation()}else ml(e,t,a,null,r)}}var Na=null;function Jo(e,t,r,a){if(Na=null,e=Wr(a),e=br(e),e!==null)if(t=ie(e),t===null)e=null;else if(r=t.tag,r===13){if(e=be(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Na=e,null}function yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mr()){case Vt:return 1;case Rt:return 4;case Pn:case xr:return 16;case cn:return 536870912;default:return 16}default:return 16}}var $n=null,el=null,Ta=null;function bd(){if(Ta)return Ta;var e,t=el,r=t.length,a,l="value"in $n?$n.value:$n.textContent,d=l.length;for(e=0;e<r&&t[e]===l[e];e++);var g=r-e;for(a=1;a<=g&&t[r-a]===l[d-a];a++);return Ta=l.slice(e,1<a?1-a:void 0)}function Ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ma(){return!0}function wd(){return!1}function Mt(e){function t(r,a,l,d,g){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ma:wd,this.isPropagationStopped=wd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Mt($r),Ii=Z({},$r,{view:0,detail:0}),Nf=Mt(Ii),nl,rl,Li,Da=Z({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Li&&(Li&&e.type==="mousemove"?(nl=e.screenX-Li.screenX,rl=e.screenY-Li.screenY):rl=nl=0,Li=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),kd=Mt(Da),Tf=Z({},Da,{dataTransfer:0}),Rf=Mt(Tf),Mf=Z({},Ii,{relatedTarget:0}),il=Mt(Mf),Df=Z({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Bf=Mt(Df),Pf=Z({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_f=Mt(Pf),Hf=Z({},$r,{data:0}),Cd=Mt(Hf),Of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vf[e])?!!t[e]:!1}function al(){return $f}var Uf=Z({},Ii,{key:function(e){if(e.key){var t=Of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?Ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gf=Mt(Uf),Yf=Z({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Mt(Yf),qf=Z({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),Zf=Mt(qf),Kf=Z({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=Mt(Kf),Xf=Z({},Da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jf=Mt(Xf),e0=[9,13,27,32],ol=m&&"CompositionEvent"in window,Ni=null;m&&"documentMode"in document&&(Ni=document.documentMode);var t0=m&&"TextEvent"in window&&!Ni,Ed=m&&(!ol||Ni&&8<Ni&&11>=Ni),Sd=" ",Fd=!1;function Ad(e,t){switch(e){case"keyup":return e0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function n0(e,t){switch(e){case"compositionend":return zd(t);case"keypress":return t.which!==32?null:(Fd=!0,Sd);case"textInput":return e=t.data,e===Sd&&Fd?null:e;default:return null}}function r0(e,t){if(Ur)return e==="compositionend"||!ol&&Ad(e,t)?(e=bd(),Ta=el=$n=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ed&&t.locale!=="ko"?null:t.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i0[e.type]:t==="textarea"}function Ld(e,t,r,a){bi(a),t=Oa(t,"onChange"),0<t.length&&(r=new tl("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var Ti=null,Ri=null;function a0(e){Zd(e,0)}function Ba(e){var t=Kr(e);if(lt(t))return e}function o0(e,t){if(e==="change")return t}var Nd=!1;if(m){var ll;if(m){var sl="oninput"in document;if(!sl){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),sl=typeof Td.oninput=="function"}ll=sl}else ll=!1;Nd=ll&&(!document.documentMode||9<document.documentMode)}function Rd(){Ti&&(Ti.detachEvent("onpropertychange",Md),Ri=Ti=null)}function Md(e){if(e.propertyName==="value"&&Ba(Ri)){var t=[];Ld(t,Ri,e,Wr(e)),ki(a0,t)}}function l0(e,t,r){e==="focusin"?(Rd(),Ti=t,Ri=r,Ti.attachEvent("onpropertychange",Md)):e==="focusout"&&Rd()}function s0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ba(Ri)}function d0(e,t){if(e==="click")return Ba(t)}function c0(e,t){if(e==="input"||e==="change")return Ba(t)}function u0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:u0;function Mi(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!x.call(t,l)||!en(e[l],t[l]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bd(e,t){var r=Dd(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Dd(r)}}function Pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _d(){for(var e=window,t=Jt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Jt(e.document)}return t}function dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function p0(e){var t=_d(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Pd(r.ownerDocument.documentElement,r)){if(a!==null&&dl(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,d=Math.min(a.start,l);a=a.end===void 0?d:Math.min(a.end,l),!e.extend&&d>a&&(l=a,a=d,d=l),l=Bd(r,d);var g=Bd(r,a);l&&g&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f0=m&&"documentMode"in document&&11>=document.documentMode,Gr=null,cl=null,Di=null,ul=!1;function Hd(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ul||Gr==null||Gr!==Jt(a)||(a=Gr,"selectionStart"in a&&dl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Di&&Mi(Di,a)||(Di=a,a=Oa(cl,"onSelect"),0<a.length&&(t=new tl("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Gr)))}function Pa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Yr={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},pl={},Od={};m&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function _a(e){if(pl[e])return pl[e];if(!Yr[e])return e;var t=Yr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Od)return pl[e]=t[r];return e}var Wd=_a("animationend"),Vd=_a("animationiteration"),$d=_a("animationstart"),Ud=_a("transitionend"),Gd=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){Gd.set(e,t),f(t,[e])}for(var fl=0;fl<Yd.length;fl++){var gl=Yd[fl],g0=gl.toLowerCase(),h0=gl[0].toUpperCase()+gl.slice(1);Un(g0,"on"+h0)}Un(Wd,"onAnimationEnd"),Un(Vd,"onAnimationIteration"),Un($d,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(Ud,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function qd(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,ne(a,t,void 0,e),e.currentTarget=null}function Zd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var g=a.length-1;0<=g;g--){var y=a[g],j=y.instance,R=y.currentTarget;if(y=y.listener,j!==d&&l.isPropagationStopped())break e;qd(l,y,R),d=j}else for(g=0;g<a.length;g++){if(y=a[g],j=y.instance,R=y.currentTarget,y=y.listener,j!==d&&l.isPropagationStopped())break e;qd(l,y,R),d=j}}}if(Y)throw e=oe,Y=!1,oe=null,e}function Ge(e,t){var r=t[kl];r===void 0&&(r=t[kl]=new Set);var a=e+"__bubble";r.has(a)||(Kd(t,e,2,!1),r.add(a))}function hl(e,t,r){var a=0;t&&(a|=4),Kd(r,e,a,t)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[Ha]){e[Ha]=!0,p.forEach(function(r){r!=="selectionchange"&&(m0.has(r)||hl(r,!1,e),hl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ha]||(t[Ha]=!0,hl("selectionchange",!1,t))}}function Kd(e,t,r,a){switch(yd(t)){case 1:var l=If;break;case 4:l=Lf;break;default:l=Xo}r=l.bind(null,t,r,e),l=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function ml(e,t,r,a,l){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var y=a.stateNode.containerInfo;if(y===l||y.nodeType===8&&y.parentNode===l)break;if(g===4)for(g=a.return;g!==null;){var j=g.tag;if((j===3||j===4)&&(j=g.stateNode.containerInfo,j===l||j.nodeType===8&&j.parentNode===l))return;g=g.return}for(;y!==null;){if(g=br(y),g===null)return;if(j=g.tag,j===5||j===6){a=d=g;continue e}y=y.parentNode}}a=a.return}ki(function(){var R=d,V=Wr(r),U=[];e:{var O=Gd.get(e);if(O!==void 0){var X=tl,re=e;switch(e){case"keypress":if(Ra(r)===0)break e;case"keydown":case"keyup":X=Gf;break;case"focusin":re="focus",X=il;break;case"focusout":re="blur",X=il;break;case"beforeblur":case"afterblur":X=il;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Zf;break;case Wd:case Vd:case $d:X=Bf;break;case Ud:X=Qf;break;case"scroll":X=Nf;break;case"wheel":X=Jf;break;case"copy":case"cut":case"paste":X=_f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=jd}var ae=(t&4)!==0,tt=!ae&&e==="scroll",L=ae?O!==null?O+"Capture":null:O;ae=[];for(var S=R,N;S!==null;){N=S;var G=N.stateNode;if(N.tag===5&&G!==null&&(N=G,L!==null&&(G=hr(S,L),G!=null&&ae.push(_i(S,G,N)))),tt)break;S=S.return}0<ae.length&&(O=new X(O,re,null,r,V),U.push({event:O,listeners:ae}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",O&&r!==yi&&(re=r.relatedTarget||r.fromElement)&&(br(re)||re[Cn]))break e;if((X||O)&&(O=V.window===V?V:(O=V.ownerDocument)?O.defaultView||O.parentWindow:window,X?(re=r.relatedTarget||r.toElement,X=R,re=re?br(re):null,re!==null&&(tt=ie(re),re!==tt||re.tag!==5&&re.tag!==6)&&(re=null)):(X=null,re=R),X!==re)){if(ae=kd,G="onMouseLeave",L="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=jd,G="onPointerLeave",L="onPointerEnter",S="pointer"),tt=X==null?O:Kr(X),N=re==null?O:Kr(re),O=new ae(G,S+"leave",X,r,V),O.target=tt,O.relatedTarget=N,G=null,br(V)===R&&(ae=new ae(L,S+"enter",re,r,V),ae.target=N,ae.relatedTarget=tt,G=ae),tt=G,X&&re)t:{for(ae=X,L=re,S=0,N=ae;N;N=qr(N))S++;for(N=0,G=L;G;G=qr(G))N++;for(;0<S-N;)ae=qr(ae),S--;for(;0<N-S;)L=qr(L),N--;for(;S--;){if(ae===L||L!==null&&ae===L.alternate)break t;ae=qr(ae),L=qr(L)}ae=null}else ae=null;X!==null&&Qd(U,O,X,ae,!1),re!==null&&tt!==null&&Qd(U,tt,re,ae,!0)}}e:{if(O=R?Kr(R):window,X=O.nodeName&&O.nodeName.toLowerCase(),X==="select"||X==="input"&&O.type==="file")var le=o0;else if(Id(O))if(Nd)le=c0;else{le=s0;var ue=l0}else(X=O.nodeName)&&X.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(le=d0);if(le&&(le=le(e,R))){Ld(U,le,r,V);break e}ue&&ue(e,O,R),e==="focusout"&&(ue=O._wrapperState)&&ue.controlled&&O.type==="number"&&_r(O,"number",O.value)}switch(ue=R?Kr(R):window,e){case"focusin":(Id(ue)||ue.contentEditable==="true")&&(Gr=ue,cl=R,Di=null);break;case"focusout":Di=cl=Gr=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Hd(U,r,V);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":Hd(U,r,V)}var pe;if(ol)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ur?Ad(e,r)&&(ye="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ye="onCompositionStart");ye&&(Ed&&r.locale!=="ko"&&(Ur||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ur&&(pe=bd()):($n=V,el="value"in $n?$n.value:$n.textContent,Ur=!0)),ue=Oa(R,ye),0<ue.length&&(ye=new Cd(ye,e,null,r,V),U.push({event:ye,listeners:ue}),pe?ye.data=pe:(pe=zd(r),pe!==null&&(ye.data=pe)))),(pe=t0?n0(e,r):r0(e,r))&&(R=Oa(R,"onBeforeInput"),0<R.length&&(V=new Cd("onBeforeInput","beforeinput",null,r,V),U.push({event:V,listeners:R}),V.data=pe))}Zd(U,t)})}function _i(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Oa(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=hr(e,r),d!=null&&a.unshift(_i(e,d,l)),d=hr(e,t),d!=null&&a.push(_i(e,d,l))),e=e.return}return a}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qd(e,t,r,a,l){for(var d=t._reactName,g=[];r!==null&&r!==a;){var y=r,j=y.alternate,R=y.stateNode;if(j!==null&&j===a)break;y.tag===5&&R!==null&&(y=R,l?(j=hr(r,d),j!=null&&g.unshift(_i(r,j,y))):l||(j=hr(r,d),j!=null&&g.push(_i(r,j,y)))),r=r.return}g.length!==0&&e.push({event:t,listeners:g})}var x0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function Xd(e){return(typeof e=="string"?e:""+e).replace(x0,`
`).replace(v0,"")}function Wa(e,t,r){if(t=Xd(t),Xd(e)!==t&&r)throw Error(s(425))}function Va(){}var xl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(e){return Jd.resolve(null).then(e).catch(w0)}:bl;function w0(e){setTimeout(function(){throw e})}function wl(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),zi(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);zi(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),un="__reactFiber$"+Zr,Hi="__reactProps$"+Zr,Cn="__reactContainer$"+Zr,kl="__reactEvents$"+Zr,k0="__reactListeners$"+Zr,C0="__reactHandles$"+Zr;function br(e){var t=e[un];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Cn]||r[un]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ec(e);e!==null;){if(r=e[un])return r;e=ec(e)}return t}e=r,r=e.parentNode}return null}function Oi(e){return e=e[un]||e[Cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function $a(e){return e[Hi]||null}var Cl=[],Qr=-1;function Yn(e){return{current:e}}function Ye(e){0>Qr||(e.current=Cl[Qr],Cl[Qr]=null,Qr--)}function $e(e,t){Qr++,Cl[Qr]=e.current,e.current=t}var qn={},mt=Yn(qn),Ft=Yn(!1),wr=qn;function Xr(e,t){var r=e.type.contextTypes;if(!r)return qn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in r)l[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function At(e){return e=e.childContextTypes,e!=null}function Ua(){Ye(Ft),Ye(mt)}function tc(e,t,r){if(mt.current!==qn)throw Error(s(168));$e(mt,t),$e(Ft,r)}function nc(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(s(108,De(e)||"Unknown",l));return Z({},r,a)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,wr=mt.current,$e(mt,e),$e(Ft,Ft.current),!0}function rc(e,t,r){var a=e.stateNode;if(!a)throw Error(s(169));r?(e=nc(e,t,wr),a.__reactInternalMemoizedMergedChildContext=e,Ye(Ft),Ye(mt),$e(mt,e)):Ye(Ft),$e(Ft,r)}var jn=null,Ya=!1,jl=!1;function ic(e){jn===null?jn=[e]:jn.push(e)}function j0(e){Ya=!0,ic(e)}function Zn(){if(!jl&&jn!==null){jl=!0;var e=0,t=He;try{var r=jn;for(He=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}jn=null,Ya=!1}catch(l){throw jn!==null&&(jn=jn.slice(e+1)),et(Vt,Zn),l}finally{He=t,jl=!1}}return null}var Jr=[],ei=0,qa=null,Za=0,$t=[],Ut=0,kr=null,En=1,Sn="";function Cr(e,t){Jr[ei++]=Za,Jr[ei++]=qa,qa=e,Za=t}function ac(e,t,r){$t[Ut++]=En,$t[Ut++]=Sn,$t[Ut++]=kr,kr=e;var a=En;e=Sn;var l=32-Oe(a)-1;a&=~(1<<l),r+=1;var d=32-Oe(t)+l;if(30<d){var g=l-l%5;d=(a&(1<<g)-1).toString(32),a>>=g,l-=g,En=1<<32-Oe(t)+l|r<<l|a,Sn=d+e}else En=1<<d|r<<l|a,Sn=e}function El(e){e.return!==null&&(Cr(e,1),ac(e,1,0))}function Sl(e){for(;e===qa;)qa=Jr[--ei],Jr[ei]=null,Za=Jr[--ei],Jr[ei]=null;for(;e===kr;)kr=$t[--Ut],$t[Ut]=null,Sn=$t[--Ut],$t[Ut]=null,En=$t[--Ut],$t[Ut]=null}var Dt=null,Bt=null,Ke=!1,tn=null;function oc(e,t){var r=Zt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function lc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,Bt=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=kr!==null?{id:En,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Zt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Dt=e,Bt=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(Ke){var t=Bt;if(t){var r=t;if(!lc(e,t)){if(Fl(e))throw Error(s(418));t=Gn(r.nextSibling);var a=Dt;t&&lc(e,t)?oc(a,r):(e.flags=e.flags&-4097|2,Ke=!1,Dt=e)}}else{if(Fl(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ke=!1,Dt=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function Ka(e){if(e!==Dt)return!1;if(!Ke)return sc(e),Ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=Bt)){if(Fl(e))throw dc(),Error(s(418));for(;t;)oc(e,t),t=Gn(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Bt=Gn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Dt?Gn(e.stateNode.nextSibling):null;return!0}function dc(){for(var e=Bt;e;)e=Gn(e.nextSibling)}function ti(){Bt=Dt=null,Ke=!1}function zl(e){tn===null?tn=[e]:tn.push(e)}var E0=he.ReactCurrentBatchConfig;function Wi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var a=r.stateNode}if(!a)throw Error(s(147,e));var l=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(g){var y=l.refs;g===null?delete y[d]:y[d]=g},t._stringRef=d,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function Qa(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function uc(e){function t(L,S){if(e){var N=L.deletions;N===null?(L.deletions=[S],L.flags|=16):N.push(S)}}function r(L,S){if(!e)return null;for(;S!==null;)t(L,S),S=S.sibling;return null}function a(L,S){for(L=new Map;S!==null;)S.key!==null?L.set(S.key,S):L.set(S.index,S),S=S.sibling;return L}function l(L,S){return L=rr(L,S),L.index=0,L.sibling=null,L}function d(L,S,N){return L.index=N,e?(N=L.alternate,N!==null?(N=N.index,N<S?(L.flags|=2,S):N):(L.flags|=2,S)):(L.flags|=1048576,S)}function g(L){return e&&L.alternate===null&&(L.flags|=2),L}function y(L,S,N,G){return S===null||S.tag!==6?(S=bs(N,L.mode,G),S.return=L,S):(S=l(S,N),S.return=L,S)}function j(L,S,N,G){var le=N.type;return le===M?V(L,S,N.props.children,G,N.key):S!==null&&(S.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===je&&cc(le)===S.type)?(G=l(S,N.props),G.ref=Wi(L,S,N),G.return=L,G):(G=ko(N.type,N.key,N.props,null,L.mode,G),G.ref=Wi(L,S,N),G.return=L,G)}function R(L,S,N,G){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=ws(N,L.mode,G),S.return=L,S):(S=l(S,N.children||[]),S.return=L,S)}function V(L,S,N,G,le){return S===null||S.tag!==7?(S=Lr(N,L.mode,G,le),S.return=L,S):(S=l(S,N),S.return=L,S)}function U(L,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return S=bs(""+S,L.mode,N),S.return=L,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xe:return N=ko(S.type,S.key,S.props,null,L.mode,N),N.ref=Wi(L,null,S),N.return=L,N;case Ee:return S=ws(S,L.mode,N),S.return=L,S;case je:var G=S._init;return U(L,G(S._payload),N)}if(ur(S)||te(S))return S=Lr(S,L.mode,N,null),S.return=L,S;Qa(L,S)}return null}function O(L,S,N,G){var le=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return le!==null?null:y(L,S,""+N,G);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case xe:return N.key===le?j(L,S,N,G):null;case Ee:return N.key===le?R(L,S,N,G):null;case je:return le=N._init,O(L,S,le(N._payload),G)}if(ur(N)||te(N))return le!==null?null:V(L,S,N,G,null);Qa(L,N)}return null}function X(L,S,N,G,le){if(typeof G=="string"&&G!==""||typeof G=="number")return L=L.get(N)||null,y(S,L,""+G,le);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case xe:return L=L.get(G.key===null?N:G.key)||null,j(S,L,G,le);case Ee:return L=L.get(G.key===null?N:G.key)||null,R(S,L,G,le);case je:var ue=G._init;return X(L,S,N,ue(G._payload),le)}if(ur(G)||te(G))return L=L.get(N)||null,V(S,L,G,le,null);Qa(S,G)}return null}function re(L,S,N,G){for(var le=null,ue=null,pe=S,ye=S=0,ft=null;pe!==null&&ye<N.length;ye++){pe.index>ye?(ft=pe,pe=null):ft=pe.sibling;var Re=O(L,pe,N[ye],G);if(Re===null){pe===null&&(pe=ft);break}e&&pe&&Re.alternate===null&&t(L,pe),S=d(Re,S,ye),ue===null?le=Re:ue.sibling=Re,ue=Re,pe=ft}if(ye===N.length)return r(L,pe),Ke&&Cr(L,ye),le;if(pe===null){for(;ye<N.length;ye++)pe=U(L,N[ye],G),pe!==null&&(S=d(pe,S,ye),ue===null?le=pe:ue.sibling=pe,ue=pe);return Ke&&Cr(L,ye),le}for(pe=a(L,pe);ye<N.length;ye++)ft=X(pe,L,ye,N[ye],G),ft!==null&&(e&&ft.alternate!==null&&pe.delete(ft.key===null?ye:ft.key),S=d(ft,S,ye),ue===null?le=ft:ue.sibling=ft,ue=ft);return e&&pe.forEach(function(ir){return t(L,ir)}),Ke&&Cr(L,ye),le}function ae(L,S,N,G){var le=te(N);if(typeof le!="function")throw Error(s(150));if(N=le.call(N),N==null)throw Error(s(151));for(var ue=le=null,pe=S,ye=S=0,ft=null,Re=N.next();pe!==null&&!Re.done;ye++,Re=N.next()){pe.index>ye?(ft=pe,pe=null):ft=pe.sibling;var ir=O(L,pe,Re.value,G);if(ir===null){pe===null&&(pe=ft);break}e&&pe&&ir.alternate===null&&t(L,pe),S=d(ir,S,ye),ue===null?le=ir:ue.sibling=ir,ue=ir,pe=ft}if(Re.done)return r(L,pe),Ke&&Cr(L,ye),le;if(pe===null){for(;!Re.done;ye++,Re=N.next())Re=U(L,Re.value,G),Re!==null&&(S=d(Re,S,ye),ue===null?le=Re:ue.sibling=Re,ue=Re);return Ke&&Cr(L,ye),le}for(pe=a(L,pe);!Re.done;ye++,Re=N.next())Re=X(pe,L,ye,Re.value,G),Re!==null&&(e&&Re.alternate!==null&&pe.delete(Re.key===null?ye:Re.key),S=d(Re,S,ye),ue===null?le=Re:ue.sibling=Re,ue=Re);return e&&pe.forEach(function(ig){return t(L,ig)}),Ke&&Cr(L,ye),le}function tt(L,S,N,G){if(typeof N=="object"&&N!==null&&N.type===M&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case xe:e:{for(var le=N.key,ue=S;ue!==null;){if(ue.key===le){if(le=N.type,le===M){if(ue.tag===7){r(L,ue.sibling),S=l(ue,N.props.children),S.return=L,L=S;break e}}else if(ue.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===je&&cc(le)===ue.type){r(L,ue.sibling),S=l(ue,N.props),S.ref=Wi(L,ue,N),S.return=L,L=S;break e}r(L,ue);break}else t(L,ue);ue=ue.sibling}N.type===M?(S=Lr(N.props.children,L.mode,G,N.key),S.return=L,L=S):(G=ko(N.type,N.key,N.props,null,L.mode,G),G.ref=Wi(L,S,N),G.return=L,L=G)}return g(L);case Ee:e:{for(ue=N.key;S!==null;){if(S.key===ue)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){r(L,S.sibling),S=l(S,N.children||[]),S.return=L,L=S;break e}else{r(L,S);break}else t(L,S);S=S.sibling}S=ws(N,L.mode,G),S.return=L,L=S}return g(L);case je:return ue=N._init,tt(L,S,ue(N._payload),G)}if(ur(N))return re(L,S,N,G);if(te(N))return ae(L,S,N,G);Qa(L,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,S!==null&&S.tag===6?(r(L,S.sibling),S=l(S,N),S.return=L,L=S):(r(L,S),S=bs(N,L.mode,G),S.return=L,L=S),g(L)):r(L,S)}return tt}var ni=uc(!0),pc=uc(!1),Xa=Yn(null),Ja=null,ri=null,Il=null;function Ll(){Il=ri=Ja=null}function Nl(e){var t=Xa.current;Ye(Xa),e._currentValue=t}function Tl(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function ii(e,t){Ja=e,Il=ri=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(zt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(Il!==e)if(e={context:e,memoizedValue:t,next:null},ri===null){if(Ja===null)throw Error(s(308));ri=e,Ja.dependencies={lanes:0,firstContext:e}}else ri=ri.next=e;return t}var jr=null;function Rl(e){jr===null?jr=[e]:jr.push(e)}function fc(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,Rl(t)):(r.next=l.next,l.next=r),t.interleaved=r,Fn(e,a)}function Fn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Kn=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Fn(e,r)}return l=a.interleaved,l===null?(t.next=t,Rl(a)):(t.next=l.next,l.next=t),a.interleaved=t,Fn(e,r)}function eo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Zo(e,r)}}function hc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var g={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?l=d=g:d=d.next=g,r=r.next}while(r!==null);d===null?l=d=t:d=d.next=t}else l=d=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function to(e,t,r,a){var l=e.updateQueue;Kn=!1;var d=l.firstBaseUpdate,g=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var j=y,R=j.next;j.next=null,g===null?d=R:g.next=R,g=j;var V=e.alternate;V!==null&&(V=V.updateQueue,y=V.lastBaseUpdate,y!==g&&(y===null?V.firstBaseUpdate=R:y.next=R,V.lastBaseUpdate=j))}if(d!==null){var U=l.baseState;g=0,V=R=j=null,y=d;do{var O=y.lane,X=y.eventTime;if((a&O)===O){V!==null&&(V=V.next={eventTime:X,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var re=e,ae=y;switch(O=t,X=r,ae.tag){case 1:if(re=ae.payload,typeof re=="function"){U=re.call(X,U,O);break e}U=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ae.payload,O=typeof re=="function"?re.call(X,U,O):re,O==null)break e;U=Z({},U,O);break e;case 2:Kn=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,O=l.effects,O===null?l.effects=[y]:O.push(y))}else X={eventTime:X,lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},V===null?(R=V=X,j=U):V=V.next=X,g|=O;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;O=y,y=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);if(V===null&&(j=U),l.baseState=j,l.firstBaseUpdate=R,l.lastBaseUpdate=V,t=l.shared.interleaved,t!==null){l=t;do g|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);Fr|=g,e.lanes=g,e.memoizedState=U}}function mc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(s(191,l));l.call(a)}}}var Vi={},pn=Yn(Vi),$i=Yn(Vi),Ui=Yn(Vi);function Er(e){if(e===Vi)throw Error(s(174));return e}function Dl(e,t){switch($e(Ui,t),$e($i,e),$e(pn,Vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pr(t,e)}Ye(pn),$e(pn,t)}function ai(){Ye(pn),Ye($i),Ye(Ui)}function xc(e){Er(Ui.current);var t=Er(pn.current),r=pr(t,e.type);t!==r&&($e($i,e),$e(pn,r))}function Bl(e){$i.current===e&&(Ye(pn),Ye($i))}var Qe=Yn(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pl=[];function _l(){for(var e=0;e<Pl.length;e++)Pl[e]._workInProgressVersionPrimary=null;Pl.length=0}var ro=he.ReactCurrentDispatcher,Hl=he.ReactCurrentBatchConfig,Sr=0,Xe=null,st=null,ut=null,io=!1,Gi=!1,Yi=0,S0=0;function xt(){throw Error(s(321))}function Ol(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!en(e[r],t[r]))return!1;return!0}function Wl(e,t,r,a,l,d){if(Sr=d,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?I0:L0,e=r(a,l),Gi){d=0;do{if(Gi=!1,Yi=0,25<=d)throw Error(s(301));d+=1,ut=st=null,t.updateQueue=null,ro.current=N0,e=r(a,l)}while(Gi)}if(ro.current=lo,t=st!==null&&st.next!==null,Sr=0,ut=st=Xe=null,io=!1,t)throw Error(s(300));return e}function Vl(){var e=Yi!==0;return Yi=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Xe.memoizedState=ut=e:ut=ut.next=e,ut}function Yt(){if(st===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ut===null?Xe.memoizedState:ut.next;if(t!==null)ut=t,st=e;else{if(e===null)throw Error(s(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ut===null?Xe.memoizedState=ut=e:ut=ut.next=e}return ut}function qi(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Yt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var a=st,l=a.baseQueue,d=r.pending;if(d!==null){if(l!==null){var g=l.next;l.next=d.next,d.next=g}a.baseQueue=l=d,r.pending=null}if(l!==null){d=l.next,a=a.baseState;var y=g=null,j=null,R=d;do{var V=R.lane;if((Sr&V)===V)j!==null&&(j=j.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),a=R.hasEagerState?R.eagerState:e(a,R.action);else{var U={lane:V,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};j===null?(y=j=U,g=a):j=j.next=U,Xe.lanes|=V,Fr|=V}R=R.next}while(R!==null&&R!==d);j===null?g=a:j.next=y,en(a,t.memoizedState)||(zt=!0),t.memoizedState=a,t.baseState=g,t.baseQueue=j,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do d=l.lane,Xe.lanes|=d,Fr|=d,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ul(e){var t=Yt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,d=t.memoizedState;if(l!==null){r.pending=null;var g=l=l.next;do d=e(d,g.action),g=g.next;while(g!==l);en(d,t.memoizedState)||(zt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,a]}function vc(){}function yc(e,t){var r=Xe,a=Yt(),l=t(),d=!en(a.memoizedState,l);if(d&&(a.memoizedState=l,zt=!0),a=a.queue,Gl(kc.bind(null,r,a,e),[e]),a.getSnapshot!==t||d||ut!==null&&ut.memoizedState.tag&1){if(r.flags|=2048,Zi(9,wc.bind(null,r,a,l,t),void 0,null),pt===null)throw Error(s(349));(Sr&30)!==0||bc(r,t,l)}return l}function bc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wc(e,t,r,a){t.value=r,t.getSnapshot=a,Cc(t)&&jc(e)}function kc(e,t,r){return r(function(){Cc(t)&&jc(e)})}function Cc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!en(e,r)}catch{return!0}}function jc(e){var t=Fn(e,1);t!==null&&on(t,e,1,-1)}function Ec(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},t.queue=e,e=e.dispatch=z0.bind(null,Xe,e),[t.memoizedState,e]}function Zi(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Sc(){return Yt().memoizedState}function ao(e,t,r,a){var l=fn();Xe.flags|=e,l.memoizedState=Zi(1|t,r,void 0,a===void 0?null:a)}function oo(e,t,r,a){var l=Yt();a=a===void 0?null:a;var d=void 0;if(st!==null){var g=st.memoizedState;if(d=g.destroy,a!==null&&Ol(a,g.deps)){l.memoizedState=Zi(t,r,d,a);return}}Xe.flags|=e,l.memoizedState=Zi(1|t,r,d,a)}function Fc(e,t){return ao(8390656,8,e,t)}function Gl(e,t){return oo(2048,8,e,t)}function Ac(e,t){return oo(4,2,e,t)}function zc(e,t){return oo(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lc(e,t,r){return r=r!=null?r.concat([e]):null,oo(4,4,Ic.bind(null,t,e),r)}function Yl(){}function Nc(e,t){var r=Yt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Ol(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Tc(e,t){var r=Yt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Ol(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Rc(e,t,r){return(Sr&21)===0?(e.baseState&&(e.baseState=!1,zt=!0),e.memoizedState=r):(en(r,t)||(r=cd(),Xe.lanes|=r,Fr|=r,e.baseState=!0),t)}function F0(e,t){var r=He;He=r!==0&&4>r?r:4,e(!0);var a=Hl.transition;Hl.transition={};try{e(!1),t()}finally{He=r,Hl.transition=a}}function Mc(){return Yt().memoizedState}function A0(e,t,r){var a=tr(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Dc(e))Bc(t,r);else if(r=fc(e,t,r,a),r!==null){var l=jt();on(r,e,a,l),Pc(r,t,a)}}function z0(e,t,r){var a=tr(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Dc(e))Bc(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var g=t.lastRenderedState,y=d(g,r);if(l.hasEagerState=!0,l.eagerState=y,en(y,g)){var j=t.interleaved;j===null?(l.next=l,Rl(t)):(l.next=j.next,j.next=l),t.interleaved=l;return}}catch{}finally{}r=fc(e,t,l,a),r!==null&&(l=jt(),on(r,e,a,l),Pc(r,t,a))}}function Dc(e){var t=e.alternate;return e===Xe||t!==null&&t===Xe}function Bc(e,t){Gi=io=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Pc(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Zo(e,r)}}var lo={readContext:Gt,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},I0={readContext:Gt,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Fc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ao(4194308,4,Ic.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var r=fn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=fn();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=A0.bind(null,Xe,e),[a.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:Ec,useDebugValue:Yl,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Ec(!1),t=e[0];return e=F0.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Xe,l=fn();if(Ke){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),pt===null)throw Error(s(349));(Sr&30)!==0||bc(a,t,r)}l.memoizedState=r;var d={value:r,getSnapshot:t};return l.queue=d,Fc(kc.bind(null,a,d,e),[e]),a.flags|=2048,Zi(9,wc.bind(null,a,d,r,t),void 0,null),r},useId:function(){var e=fn(),t=pt.identifierPrefix;if(Ke){var r=Sn,a=En;r=(a&~(1<<32-Oe(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Yi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=S0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},L0={readContext:Gt,useCallback:Nc,useContext:Gt,useEffect:Gl,useImperativeHandle:Lc,useInsertionEffect:Ac,useLayoutEffect:zc,useMemo:Tc,useReducer:$l,useRef:Sc,useState:function(){return $l(qi)},useDebugValue:Yl,useDeferredValue:function(e){var t=Yt();return Rc(t,st.memoizedState,e)},useTransition:function(){var e=$l(qi)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Mc,unstable_isNewReconciler:!1},N0={readContext:Gt,useCallback:Nc,useContext:Gt,useEffect:Gl,useImperativeHandle:Lc,useInsertionEffect:Ac,useLayoutEffect:zc,useMemo:Tc,useReducer:Ul,useRef:Sc,useState:function(){return Ul(qi)},useDebugValue:Yl,useDeferredValue:function(e){var t=Yt();return st===null?t.memoizedState=e:Rc(t,st.memoizedState,e)},useTransition:function(){var e=Ul(qi)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Mc,unstable_isNewReconciler:!1};function nn(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ql(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var so={isMounted:function(e){return(e=e._reactInternals)?ie(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=jt(),l=tr(e),d=An(a,l);d.payload=t,r!=null&&(d.callback=r),t=Qn(e,d,l),t!==null&&(on(t,e,l,a),eo(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=jt(),l=tr(e),d=An(a,l);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=Qn(e,d,l),t!==null&&(on(t,e,l,a),eo(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=jt(),a=tr(e),l=An(r,a);l.tag=2,t!=null&&(l.callback=t),t=Qn(e,l,a),t!==null&&(on(t,e,a,r),eo(t,e,a))}};function _c(e,t,r,a,l,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,g):t.prototype&&t.prototype.isPureReactComponent?!Mi(r,a)||!Mi(l,d):!0}function Hc(e,t,r){var a=!1,l=qn,d=t.contextType;return typeof d=="object"&&d!==null?d=Gt(d):(l=At(t)?wr:mt.current,a=t.contextTypes,d=(a=a!=null)?Xr(e,l):qn),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function Oc(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function Zl(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Ml(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=Gt(d):(d=At(t)?wr:mt.current,l.context=Xr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(ql(e,t,d,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&so.enqueueReplaceState(l,l.state,null),to(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function oi(e,t){try{var r="",a=t;do r+=ge(a),a=a.return;while(a);var l=r}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function Kl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,t,r){r=An(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){mo||(mo=!0,ps=a),Ql(e,t)},r}function Vc(e,t,r){r=An(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){Ql(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){Ql(e,t),typeof a!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),r}function $c(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new T0;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=Y0.bind(null,e,t,r),t.then(e,e))}function Uc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=An(-1,1),t.tag=2,Qn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var R0=he.ReactCurrentOwner,zt=!1;function Ct(e,t,r,a){t.child=e===null?pc(t,null,r,a):ni(t,e.child,r,a)}function Yc(e,t,r,a,l){r=r.render;var d=t.ref;return ii(t,l),a=Wl(e,t,r,a,d,l),r=Vl(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zn(e,t,l)):(Ke&&r&&El(t),t.flags|=1,Ct(e,t,a,l),t.child)}function qc(e,t,r,a,l){if(e===null){var d=r.type;return typeof d=="function"&&!ys(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,Zc(e,t,d,a,l)):(e=ko(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var g=d.memoizedProps;if(r=r.compare,r=r!==null?r:Mi,r(g,a)&&e.ref===t.ref)return zn(e,t,l)}return t.flags|=1,e=rr(d,a),e.ref=t.ref,e.return=t,t.child=e}function Zc(e,t,r,a,l){if(e!==null){var d=e.memoizedProps;if(Mi(d,a)&&e.ref===t.ref)if(zt=!1,t.pendingProps=a=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(zt=!0);else return t.lanes=e.lanes,zn(e,t,l)}return Xl(e,t,r,a,l)}function Kc(e,t,r){var a=t.pendingProps,l=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(si,Pt),Pt|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(si,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:r,$e(si,Pt),Pt|=a}else d!==null?(a=d.baseLanes|r,t.memoizedState=null):a=r,$e(si,Pt),Pt|=a;return Ct(e,t,l,r),t.child}function Qc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,r,a,l){var d=At(r)?wr:mt.current;return d=Xr(t,d),ii(t,l),r=Wl(e,t,r,a,d,l),a=Vl(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zn(e,t,l)):(Ke&&a&&El(t),t.flags|=1,Ct(e,t,r,l),t.child)}function Xc(e,t,r,a,l){if(At(r)){var d=!0;Ga(t)}else d=!1;if(ii(t,l),t.stateNode===null)uo(e,t),Hc(t,r,a),Zl(t,r,a,l),a=!0;else if(e===null){var g=t.stateNode,y=t.memoizedProps;g.props=y;var j=g.context,R=r.contextType;typeof R=="object"&&R!==null?R=Gt(R):(R=At(r)?wr:mt.current,R=Xr(t,R));var V=r.getDerivedStateFromProps,U=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function";U||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==a||j!==R)&&Oc(t,g,a,R),Kn=!1;var O=t.memoizedState;g.state=O,to(t,a,g,l),j=t.memoizedState,y!==a||O!==j||Ft.current||Kn?(typeof V=="function"&&(ql(t,r,V,a),j=t.memoizedState),(y=Kn||_c(t,r,y,a,O,j,R))?(U||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=j),g.props=a,g.state=j,g.context=R,a=y):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{g=t.stateNode,gc(e,t),y=t.memoizedProps,R=t.type===t.elementType?y:nn(t.type,y),g.props=R,U=t.pendingProps,O=g.context,j=r.contextType,typeof j=="object"&&j!==null?j=Gt(j):(j=At(r)?wr:mt.current,j=Xr(t,j));var X=r.getDerivedStateFromProps;(V=typeof X=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==U||O!==j)&&Oc(t,g,a,j),Kn=!1,O=t.memoizedState,g.state=O,to(t,a,g,l);var re=t.memoizedState;y!==U||O!==re||Ft.current||Kn?(typeof X=="function"&&(ql(t,r,X,a),re=t.memoizedState),(R=Kn||_c(t,r,R,a,O,re,j)||!1)?(V||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,re,j),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,re,j)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=re),g.props=a,g.state=re,g.context=j,a=R):(typeof g.componentDidUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return Jl(e,t,r,a,d,l)}function Jl(e,t,r,a,l,d){Qc(e,t);var g=(t.flags&128)!==0;if(!a&&!g)return l&&rc(t,r,!1),zn(e,t,d);a=t.stateNode,R0.current=t;var y=g&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&g?(t.child=ni(t,e.child,null,d),t.child=ni(t,null,y,d)):Ct(e,t,y,d),t.memoizedState=a.state,l&&rc(t,r,!0),t.child}function Jc(e){var t=e.stateNode;t.pendingContext?tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tc(e,t.context,!1),Dl(e,t.containerInfo)}function eu(e,t,r,a,l){return ti(),zl(l),t.flags|=256,Ct(e,t,r,a),t.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function tu(e,t,r){var a=t.pendingProps,l=Qe.current,d=!1,g=(t.flags&128)!==0,y;if((y=g)||(y=e!==null&&e.memoizedState===null?!1:(l&2)!==0),y?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$e(Qe,l&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=a.children,e=a.fallback,d?(a=t.mode,d=t.child,g={mode:"hidden",children:g},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=g):d=Co(g,a,0,null),e=Lr(e,a,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=ts(r),t.memoizedState=es,e):ns(t,g));if(l=e.memoizedState,l!==null&&(y=l.dehydrated,y!==null))return M0(e,t,g,a,y,l,r);if(d){d=a.fallback,g=t.mode,l=e.child,y=l.sibling;var j={mode:"hidden",children:a.children};return(g&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=j,t.deletions=null):(a=rr(l,j),a.subtreeFlags=l.subtreeFlags&14680064),y!==null?d=rr(y,d):(d=Lr(d,g,r,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,g=e.child.memoizedState,g=g===null?ts(r):{baseLanes:g.baseLanes|r,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=e.childLanes&~r,t.memoizedState=es,a}return d=e.child,e=d.sibling,a=rr(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function ns(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,r,a){return a!==null&&zl(a),ni(t,e.child,null,r),e=ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M0(e,t,r,a,l,d,g){if(r)return t.flags&256?(t.flags&=-257,a=Kl(Error(s(422))),co(e,t,g,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,l=t.mode,a=Co({mode:"visible",children:a.children},l,0,null),d=Lr(d,l,g,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&ni(t,e.child,null,g),t.child.memoizedState=ts(g),t.memoizedState=es,d);if((t.mode&1)===0)return co(e,t,g,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var y=a.dgst;return a=y,d=Error(s(419)),a=Kl(d,a,void 0),co(e,t,g,a)}if(y=(g&e.childLanes)!==0,zt||y){if(a=pt,a!==null){switch(g&-g){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|g))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,Fn(e,l),on(a,e,l,-1))}return vs(),a=Kl(Error(s(421))),co(e,t,g,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=q0.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,Bt=Gn(l.nextSibling),Dt=t,Ke=!0,tn=null,e!==null&&($t[Ut++]=En,$t[Ut++]=Sn,$t[Ut++]=kr,En=e.id,Sn=e.overflow,kr=t),t=ns(t,a.children),t.flags|=4096,t)}function nu(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Tl(e.return,t,r)}function rs(e,t,r,a,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=r,d.tailMode=l)}function ru(e,t,r){var a=t.pendingProps,l=a.revealOrder,d=a.tail;if(Ct(e,t,a.children,r),a=Qe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,r,t);else if(e.tag===19)nu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if($e(Qe,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&no(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),rs(t,!1,l,r,d);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&no(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}rs(t,!0,r,null,d);break;case"together":rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=rr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=rr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function D0(e,t,r){switch(t.tag){case 3:Jc(t),ti();break;case 5:xc(t);break;case 1:At(t.type)&&Ga(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;$e(Xa,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?($e(Qe,Qe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?tu(e,t,r):($e(Qe,Qe.current&1),e=zn(e,t,r),e!==null?e.sibling:null);$e(Qe,Qe.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return ru(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$e(Qe,Qe.current),a)break;return null;case 22:case 23:return t.lanes=0,Kc(e,t,r)}return zn(e,t,r)}var iu,is,au,ou;iu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},is=function(){},au=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Er(pn.current);var d=null;switch(r){case"input":l=Pr(e,l),a=Pr(e,a),d=[];break;case"select":l=Z({},l,{value:void 0}),a=Z({},a,{value:void 0}),d=[];break;case"textarea":l=mi(e,l),a=mi(e,a),d=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Va)}Hr(r,a);var g;r=null;for(R in l)if(!a.hasOwnProperty(R)&&l.hasOwnProperty(R)&&l[R]!=null)if(R==="style"){var y=l[R];for(g in y)y.hasOwnProperty(g)&&(r||(r={}),r[g]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(u.hasOwnProperty(R)?d||(d=[]):(d=d||[]).push(R,null));for(R in a){var j=a[R];if(y=l!=null?l[R]:void 0,a.hasOwnProperty(R)&&j!==y&&(j!=null||y!=null))if(R==="style")if(y){for(g in y)!y.hasOwnProperty(g)||j&&j.hasOwnProperty(g)||(r||(r={}),r[g]="");for(g in j)j.hasOwnProperty(g)&&y[g]!==j[g]&&(r||(r={}),r[g]=j[g])}else r||(d||(d=[]),d.push(R,r)),r=j;else R==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,y=y?y.__html:void 0,j!=null&&y!==j&&(d=d||[]).push(R,j)):R==="children"?typeof j!="string"&&typeof j!="number"||(d=d||[]).push(R,""+j):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(u.hasOwnProperty(R)?(j!=null&&R==="onScroll"&&Ge("scroll",e),d||y===j||(d=[])):(d=d||[]).push(R,j))}r&&(d=d||[]).push("style",r);var R=d;(t.updateQueue=R)&&(t.flags|=4)}},ou=function(e,t,r,a){r!==a&&(t.flags|=4)};function Ki(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function vt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function B0(e,t,r){var a=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(t),null;case 1:return At(t.type)&&Ua(),vt(t),null;case 3:return a=t.stateNode,ai(),Ye(Ft),Ye(mt),_l(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tn!==null&&(hs(tn),tn=null))),is(e,t),vt(t),null;case 5:Bl(t);var l=Er(Ui.current);if(r=t.type,e!==null&&t.stateNode!=null)au(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(s(166));return vt(t),null}if(e=Er(pn.current),Ka(t)){a=t.stateNode,r=t.type;var d=t.memoizedProps;switch(a[un]=t,a[Hi]=d,e=(t.mode&1)!==0,r){case"dialog":Ge("cancel",a),Ge("close",a);break;case"iframe":case"object":case"embed":Ge("load",a);break;case"video":case"audio":for(l=0;l<Bi.length;l++)Ge(Bi[l],a);break;case"source":Ge("error",a);break;case"img":case"image":case"link":Ge("error",a),Ge("load",a);break;case"details":Ge("toggle",a);break;case"input":wa(a,d),Ge("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Ge("invalid",a);break;case"textarea":Ca(a,d),Ge("invalid",a)}Hr(r,d),l=null;for(var g in d)if(d.hasOwnProperty(g)){var y=d[g];g==="children"?typeof y=="string"?a.textContent!==y&&(d.suppressHydrationWarning!==!0&&Wa(a.textContent,y,e),l=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(d.suppressHydrationWarning!==!0&&Wa(a.textContent,y,e),l=["children",""+y]):u.hasOwnProperty(g)&&y!=null&&g==="onScroll"&&Ge("scroll",a)}switch(r){case"input":Br(a),ka(a,d,!0);break;case"textarea":Br(a),Rn(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=Va)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{g=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xi(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=g.createElement(r,{is:a.is}):(e=g.createElement(r),r==="select"&&(g=e,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):e=g.createElementNS(e,r),e[un]=t,e[Hi]=a,iu(e,t,!1,!1),t.stateNode=e;e:{switch(g=Or(r,a),r){case"dialog":Ge("cancel",e),Ge("close",e),l=a;break;case"iframe":case"object":case"embed":Ge("load",e),l=a;break;case"video":case"audio":for(l=0;l<Bi.length;l++)Ge(Bi[l],e);l=a;break;case"source":Ge("error",e),l=a;break;case"img":case"image":case"link":Ge("error",e),Ge("load",e),l=a;break;case"details":Ge("toggle",e),l=a;break;case"input":wa(e,a),l=Pr(e,a),Ge("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=Z({},a,{value:void 0}),Ge("invalid",e);break;case"textarea":Ca(e,a),l=mi(e,a),Ge("invalid",e);break;default:l=a}Hr(r,l),y=l;for(d in y)if(y.hasOwnProperty(d)){var j=y[d];d==="style"?Wt(e,j):d==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Ot(e,j)):d==="children"?typeof j=="string"?(r!=="textarea"||j!=="")&&Mn(e,j):typeof j=="number"&&Mn(e,""+j):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(u.hasOwnProperty(d)?j!=null&&d==="onScroll"&&Ge("scroll",e):j!=null&&K(e,d,j,g))}switch(r){case"input":Br(e),ka(e,a,!1);break;case"textarea":Br(e),Rn(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ze(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?Tn(e,!!a.multiple,d,!1):a.defaultValue!=null&&Tn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Va)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return vt(t),null;case 6:if(e&&t.stateNode!=null)ou(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(r=Er(Ui.current),Er(pn.current),Ka(t)){if(a=t.stateNode,r=t.memoizedProps,a[un]=t,(d=a.nodeValue!==r)&&(e=Dt,e!==null))switch(e.tag){case 3:Wa(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wa(a.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[un]=t,t.stateNode=a}return vt(t),null;case 13:if(Ye(Qe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ke&&Bt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)dc(),ti(),t.flags|=98560,d=!1;else if(d=Ka(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(s(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[un]=t}else ti(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;vt(t),d=!1}else tn!==null&&(hs(tn),tn=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Qe.current&1)!==0?dt===0&&(dt=3):vs())),t.updateQueue!==null&&(t.flags|=4),vt(t),null);case 4:return ai(),is(e,t),e===null&&Pi(t.stateNode.containerInfo),vt(t),null;case 10:return Nl(t.type._context),vt(t),null;case 17:return At(t.type)&&Ua(),vt(t),null;case 19:if(Ye(Qe),d=t.memoizedState,d===null)return vt(t),null;if(a=(t.flags&128)!==0,g=d.rendering,g===null)if(a)Ki(d,!1);else{if(dt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=no(e),g!==null){for(t.flags|=128,Ki(d,!1),a=g.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)d=r,e=a,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,e=g.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return $e(Qe,Qe.current&1|2),t.child}e=e.sibling}d.tail!==null&&_e()>di&&(t.flags|=128,a=!0,Ki(d,!1),t.lanes=4194304)}else{if(!a)if(e=no(g),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ki(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ke)return vt(t),null}else 2*_e()-d.renderingStartTime>di&&r!==1073741824&&(t.flags|=128,a=!0,Ki(d,!1),t.lanes=4194304);d.isBackwards?(g.sibling=t.child,t.child=g):(r=d.last,r!==null?r.sibling=g:t.child=g,d.last=g)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=_e(),t.sibling=null,r=Qe.current,$e(Qe,a?r&1|2:r&1),t):(vt(t),null);case 22:case 23:return xs(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Pt&1073741824)!==0&&(vt(t),t.subtreeFlags&6&&(t.flags|=8192)):vt(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function P0(e,t){switch(Sl(t),t.tag){case 1:return At(t.type)&&Ua(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ai(),Ye(Ft),Ye(mt),_l(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bl(t),null;case 13:if(Ye(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(Qe),null;case 4:return ai(),null;case 10:return Nl(t.type._context),null;case 22:case 23:return xs(),null;case 24:return null;default:return null}}var po=!1,yt=!1,_0=typeof WeakSet=="function"?WeakSet:Set,ee=null;function li(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Je(e,t,a)}else r.current=null}function as(e,t,r){try{r()}catch(a){Je(e,t,a)}}var lu=!1;function H0(e,t){if(xl=La,e=_d(),dl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var g=0,y=-1,j=-1,R=0,V=0,U=e,O=null;t:for(;;){for(var X;U!==r||l!==0&&U.nodeType!==3||(y=g+l),U!==d||a!==0&&U.nodeType!==3||(j=g+a),U.nodeType===3&&(g+=U.nodeValue.length),(X=U.firstChild)!==null;)O=U,U=X;for(;;){if(U===e)break t;if(O===r&&++R===l&&(y=g),O===d&&++V===a&&(j=g),(X=U.nextSibling)!==null)break;U=O,O=U.parentNode}U=X}r=y===-1||j===-1?null:{start:y,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(vl={focusedElem:e,selectionRange:r},La=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var re=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ae=re.memoizedProps,tt=re.memoizedState,L=t.stateNode,S=L.getSnapshotBeforeUpdate(t.elementType===t.type?ae:nn(t.type,ae),tt);L.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(G){Je(t,t.return,G)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return re=lu,lu=!1,re}function Qi(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&as(t,r,d)}l=l.next}while(l!==a)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function os(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function su(e){var t=e.alternate;t!==null&&(e.alternate=null,su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[un],delete t[Hi],delete t[kl],delete t[k0],delete t[C0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function du(e){return e.tag===5||e.tag===3||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ls(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Va));else if(a!==4&&(e=e.child,e!==null))for(ls(e,t,r),e=e.sibling;e!==null;)ls(e,t,r),e=e.sibling}function ss(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ss(e,t,r),e=e.sibling;e!==null;)ss(e,t,r),e=e.sibling}var gt=null,rn=!1;function Xn(e,t,r){for(r=r.child;r!==null;)uu(e,t,r),r=r.sibling}function uu(e,t,r){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(bn,r)}catch{}switch(r.tag){case 5:yt||li(r,t);case 6:var a=gt,l=rn;gt=null,Xn(e,t,r),gt=a,rn=l,gt!==null&&(rn?(e=gt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):gt.removeChild(r.stateNode));break;case 18:gt!==null&&(rn?(e=gt,r=r.stateNode,e.nodeType===8?wl(e.parentNode,r):e.nodeType===1&&wl(e,r),zi(e)):wl(gt,r.stateNode));break;case 4:a=gt,l=rn,gt=r.stateNode.containerInfo,rn=!0,Xn(e,t,r),gt=a,rn=l;break;case 0:case 11:case 14:case 15:if(!yt&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var d=l,g=d.destroy;d=d.tag,g!==void 0&&((d&2)!==0||(d&4)!==0)&&as(r,t,g),l=l.next}while(l!==a)}Xn(e,t,r);break;case 1:if(!yt&&(li(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(y){Je(r,t,y)}Xn(e,t,r);break;case 21:Xn(e,t,r);break;case 22:r.mode&1?(yt=(a=yt)||r.memoizedState!==null,Xn(e,t,r),yt=a):Xn(e,t,r);break;default:Xn(e,t,r)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new _0),t.forEach(function(a){var l=Z0.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function an(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var d=e,g=t,y=g;e:for(;y!==null;){switch(y.tag){case 5:gt=y.stateNode,rn=!1;break e;case 3:gt=y.stateNode.containerInfo,rn=!0;break e;case 4:gt=y.stateNode.containerInfo,rn=!0;break e}y=y.return}if(gt===null)throw Error(s(160));uu(d,g,l),gt=null,rn=!1;var j=l.alternate;j!==null&&(j.return=null),l.return=null}catch(R){Je(l,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fu(t,e),t=t.sibling}function fu(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),gn(e),a&4){try{Qi(3,e,e.return),fo(3,e)}catch(ae){Je(e,e.return,ae)}try{Qi(5,e,e.return)}catch(ae){Je(e,e.return,ae)}}break;case 1:an(t,e),gn(e),a&512&&r!==null&&li(r,r.return);break;case 5:if(an(t,e),gn(e),a&512&&r!==null&&li(r,r.return),e.flags&32){var l=e.stateNode;try{Mn(l,"")}catch(ae){Je(e,e.return,ae)}}if(a&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,g=r!==null?r.memoizedProps:d,y=e.type,j=e.updateQueue;if(e.updateQueue=null,j!==null)try{y==="input"&&d.type==="radio"&&d.name!=null&&ln(l,d),Or(y,g);var R=Or(y,d);for(g=0;g<j.length;g+=2){var V=j[g],U=j[g+1];V==="style"?Wt(l,U):V==="dangerouslySetInnerHTML"?Ot(l,U):V==="children"?Mn(l,U):K(l,V,U,R)}switch(y){case"input":hi(l,d);break;case"textarea":sn(l,d);break;case"select":var O=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var X=d.value;X!=null?Tn(l,!!d.multiple,X,!1):O!==!!d.multiple&&(d.defaultValue!=null?Tn(l,!!d.multiple,d.defaultValue,!0):Tn(l,!!d.multiple,d.multiple?[]:"",!1))}l[Hi]=d}catch(ae){Je(e,e.return,ae)}}break;case 6:if(an(t,e),gn(e),a&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(ae){Je(e,e.return,ae)}}break;case 3:if(an(t,e),gn(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(ae){Je(e,e.return,ae)}break;case 4:an(t,e),gn(e);break;case 13:an(t,e),gn(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(us=_e())),a&4&&pu(e);break;case 22:if(V=r!==null&&r.memoizedState!==null,e.mode&1?(yt=(R=yt)||V,an(t,e),yt=R):an(t,e),gn(e),a&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!V&&(e.mode&1)!==0)for(ee=e,V=e.child;V!==null;){for(U=ee=V;ee!==null;){switch(O=ee,X=O.child,O.tag){case 0:case 11:case 14:case 15:Qi(4,O,O.return);break;case 1:li(O,O.return);var re=O.stateNode;if(typeof re.componentWillUnmount=="function"){a=O,r=O.return;try{t=a,re.props=t.memoizedProps,re.state=t.memoizedState,re.componentWillUnmount()}catch(ae){Je(a,r,ae)}}break;case 5:li(O,O.return);break;case 22:if(O.memoizedState!==null){mu(U);continue}}X!==null?(X.return=O,ee=X):mu(U)}V=V.sibling}e:for(V=null,U=e;;){if(U.tag===5){if(V===null){V=U;try{l=U.stateNode,R?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(y=U.stateNode,j=U.memoizedProps.style,g=j!=null&&j.hasOwnProperty("display")?j.display:null,y.style.display=ja("display",g))}catch(ae){Je(e,e.return,ae)}}}else if(U.tag===6){if(V===null)try{U.stateNode.nodeValue=R?"":U.memoizedProps}catch(ae){Je(e,e.return,ae)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;V===U&&(V=null),U=U.return}V===U&&(V=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:an(t,e),gn(e),a&4&&pu(e);break;case 21:break;default:an(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(du(r)){var a=r;break e}r=r.return}throw Error(s(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Mn(l,""),a.flags&=-33);var d=cu(e);ss(e,d,l);break;case 3:case 4:var g=a.stateNode.containerInfo,y=cu(e);ls(e,y,g);break;default:throw Error(s(161))}}catch(j){Je(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function O0(e,t,r){ee=e,gu(e)}function gu(e,t,r){for(var a=(e.mode&1)!==0;ee!==null;){var l=ee,d=l.child;if(l.tag===22&&a){var g=l.memoizedState!==null||po;if(!g){var y=l.alternate,j=y!==null&&y.memoizedState!==null||yt;y=po;var R=yt;if(po=g,(yt=j)&&!R)for(ee=l;ee!==null;)g=ee,j=g.child,g.tag===22&&g.memoizedState!==null?xu(l):j!==null?(j.return=g,ee=j):xu(l);for(;d!==null;)ee=d,gu(d),d=d.sibling;ee=l,po=y,yt=R}hu(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,ee=d):hu(e)}}function hu(e){for(;ee!==null;){var t=ee;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:yt||fo(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!yt)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:nn(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&mc(t,d,a);break;case 3:var g=t.updateQueue;if(g!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}mc(t,g,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var j=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&r.focus();break;case"img":j.src&&(r.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var V=R.memoizedState;if(V!==null){var U=V.dehydrated;U!==null&&zi(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}yt||t.flags&512&&os(t)}catch(O){Je(t,t.return,O)}}if(t===e){ee=null;break}if(r=t.sibling,r!==null){r.return=t.return,ee=r;break}ee=t.return}}function mu(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ee=r;break}ee=t.return}}function xu(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fo(4,t)}catch(j){Je(t,r,j)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(j){Je(t,l,j)}}var d=t.return;try{os(t)}catch(j){Je(t,d,j)}break;case 5:var g=t.return;try{os(t)}catch(j){Je(t,g,j)}}}catch(j){Je(t,t.return,j)}if(t===e){ee=null;break}var y=t.sibling;if(y!==null){y.return=t.return,ee=y;break}ee=t.return}}var W0=Math.ceil,go=he.ReactCurrentDispatcher,ds=he.ReactCurrentOwner,qt=he.ReactCurrentBatchConfig,Te=0,pt=null,rt=null,ht=0,Pt=0,si=Yn(0),dt=0,Xi=null,Fr=0,ho=0,cs=0,Ji=null,It=null,us=0,di=1/0,In=null,mo=!1,ps=null,Jn=null,xo=!1,er=null,vo=0,ea=0,fs=null,yo=-1,bo=0;function jt(){return(Te&6)!==0?_e():yo!==-1?yo:yo=_e()}function tr(e){return(e.mode&1)===0?1:(Te&2)!==0&&ht!==0?ht&-ht:E0.transition!==null?(bo===0&&(bo=cd()),bo):(e=He,e!==0||(e=window.event,e=e===void 0?16:yd(e.type)),e)}function on(e,t,r,a){if(50<ea)throw ea=0,fs=null,Error(s(185));ji(e,r,a),((Te&2)===0||e!==pt)&&(e===pt&&((Te&2)===0&&(ho|=r),dt===4&&nr(e,ht)),Lt(e,a),r===1&&Te===0&&(t.mode&1)===0&&(di=_e()+500,Ya&&Zn()))}function Lt(e,t){var r=e.callbackNode;Ef(e,t);var a=Aa(e,e===pt?ht:0);if(a===0)r!==null&&ct(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&ct(r),t===1)e.tag===0?j0(yu.bind(null,e)):ic(yu.bind(null,e)),b0(function(){(Te&6)===0&&Zn()}),r=null;else{switch(ud(a)){case 1:r=Vt;break;case 4:r=Rt;break;case 16:r=Pn;break;case 536870912:r=cn;break;default:r=Pn}r=Fu(r,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function vu(e,t){if(yo=-1,bo=0,(Te&6)!==0)throw Error(s(327));var r=e.callbackNode;if(ci()&&e.callbackNode!==r)return null;var a=Aa(e,e===pt?ht:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=wo(e,a);else{t=a;var l=Te;Te|=2;var d=wu();(pt!==e||ht!==t)&&(In=null,di=_e()+500,zr(e,t));do try{U0();break}catch(y){bu(e,y)}while(!0);Ll(),go.current=d,Te=l,rt!==null?t=0:(pt=null,ht=0,t=dt)}if(t!==0){if(t===2&&(l=Yo(e),l!==0&&(a=l,t=gs(e,l))),t===1)throw r=Xi,zr(e,0),nr(e,a),Lt(e,_e()),r;if(t===6)nr(e,a);else{if(l=e.current.alternate,(a&30)===0&&!V0(l)&&(t=wo(e,a),t===2&&(d=Yo(e),d!==0&&(a=d,t=gs(e,d))),t===1))throw r=Xi,zr(e,0),nr(e,a),Lt(e,_e()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(s(345));case 2:Ir(e,It,In);break;case 3:if(nr(e,a),(a&130023424)===a&&(t=us+500-_e(),10<t)){if(Aa(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){jt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=bl(Ir.bind(null,e,It,In),t);break}Ir(e,It,In);break;case 4:if(nr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var g=31-Oe(a);d=1<<g,g=t[g],g>l&&(l=g),a&=~d}if(a=l,a=_e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*W0(a/1960))-a,10<a){e.timeoutHandle=bl(Ir.bind(null,e,It,In),a);break}Ir(e,It,In);break;case 5:Ir(e,It,In);break;default:throw Error(s(329))}}}return Lt(e,_e()),e.callbackNode===r?vu.bind(null,e):null}function gs(e,t){var r=Ji;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=wo(e,t),e!==2&&(t=It,It=r,t!==null&&hs(t)),e}function hs(e){It===null?It=e:It.push.apply(It,e)}function V0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],d=l.getSnapshot;l=l.value;try{if(!en(d(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~cs,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Oe(t),a=1<<r;e[r]=-1,t&=~a}}function yu(e){if((Te&6)!==0)throw Error(s(327));ci();var t=Aa(e,0);if((t&1)===0)return Lt(e,_e()),null;var r=wo(e,t);if(e.tag!==0&&r===2){var a=Yo(e);a!==0&&(t=a,r=gs(e,a))}if(r===1)throw r=Xi,zr(e,0),nr(e,t),Lt(e,_e()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,It,In),Lt(e,_e()),null}function ms(e,t){var r=Te;Te|=1;try{return e(t)}finally{Te=r,Te===0&&(di=_e()+500,Ya&&Zn())}}function Ar(e){er!==null&&er.tag===0&&(Te&6)===0&&ci();var t=Te;Te|=1;var r=qt.transition,a=He;try{if(qt.transition=null,He=1,e)return e()}finally{He=a,qt.transition=r,Te=t,(Te&6)===0&&Zn()}}function xs(){Pt=si.current,Ye(si)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,y0(r)),rt!==null)for(r=rt.return;r!==null;){var a=r;switch(Sl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ua();break;case 3:ai(),Ye(Ft),Ye(mt),_l();break;case 5:Bl(a);break;case 4:ai();break;case 13:Ye(Qe);break;case 19:Ye(Qe);break;case 10:Nl(a.type._context);break;case 22:case 23:xs()}r=r.return}if(pt=e,rt=e=rr(e.current,null),ht=Pt=t,dt=0,Xi=null,cs=ho=Fr=0,It=Ji=null,jr!==null){for(t=0;t<jr.length;t++)if(r=jr[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,d=r.pending;if(d!==null){var g=d.next;d.next=l,a.next=g}r.pending=a}jr=null}return e}function bu(e,t){do{var r=rt;try{if(Ll(),ro.current=lo,io){for(var a=Xe.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}io=!1}if(Sr=0,ut=st=Xe=null,Gi=!1,Yi=0,ds.current=null,r===null||r.return===null){dt=1,Xi=t,rt=null;break}e:{var d=e,g=r.return,y=r,j=t;if(t=ht,y.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var R=j,V=y,U=V.tag;if((V.mode&1)===0&&(U===0||U===11||U===15)){var O=V.alternate;O?(V.updateQueue=O.updateQueue,V.memoizedState=O.memoizedState,V.lanes=O.lanes):(V.updateQueue=null,V.memoizedState=null)}var X=Uc(g);if(X!==null){X.flags&=-257,Gc(X,g,y,d,t),X.mode&1&&$c(d,R,t),t=X,j=R;var re=t.updateQueue;if(re===null){var ae=new Set;ae.add(j),t.updateQueue=ae}else re.add(j);break e}else{if((t&1)===0){$c(d,R,t),vs();break e}j=Error(s(426))}}else if(Ke&&y.mode&1){var tt=Uc(g);if(tt!==null){(tt.flags&65536)===0&&(tt.flags|=256),Gc(tt,g,y,d,t),zl(oi(j,y));break e}}d=j=oi(j,y),dt!==4&&(dt=2),Ji===null?Ji=[d]:Ji.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var L=Wc(d,j,t);hc(d,L);break e;case 1:y=j;var S=d.type,N=d.stateNode;if((d.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Jn===null||!Jn.has(N)))){d.flags|=65536,t&=-t,d.lanes|=t;var G=Vc(d,y,t);hc(d,G);break e}}d=d.return}while(d!==null)}Cu(r)}catch(le){t=le,rt===r&&r!==null&&(rt=r=r.return);continue}break}while(!0)}function wu(){var e=go.current;return go.current=lo,e===null?lo:e}function vs(){(dt===0||dt===3||dt===2)&&(dt=4),pt===null||(Fr&268435455)===0&&(ho&268435455)===0||nr(pt,ht)}function wo(e,t){var r=Te;Te|=2;var a=wu();(pt!==e||ht!==t)&&(In=null,zr(e,t));do try{$0();break}catch(l){bu(e,l)}while(!0);if(Ll(),Te=r,go.current=a,rt!==null)throw Error(s(261));return pt=null,ht=0,dt}function $0(){for(;rt!==null;)ku(rt)}function U0(){for(;rt!==null&&!Be();)ku(rt)}function ku(e){var t=Su(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Cu(e):rt=t,ds.current=null}function Cu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=B0(r,t,Pt),r!==null){rt=r;return}}else{if(r=P0(r,t),r!==null){r.flags&=32767,rt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{dt=6,rt=null;return}}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);dt===0&&(dt=5)}function Ir(e,t,r){var a=He,l=qt.transition;try{qt.transition=null,He=1,G0(e,t,r,a)}finally{qt.transition=l,He=a}return null}function G0(e,t,r,a){do ci();while(er!==null);if((Te&6)!==0)throw Error(s(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(Sf(e,d),e===pt&&(rt=pt=null,ht=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||xo||(xo=!0,Fu(Pn,function(){return ci(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=qt.transition,qt.transition=null;var g=He;He=1;var y=Te;Te|=4,ds.current=null,H0(e,r),fu(r,e),p0(vl),La=!!xl,vl=xl=null,e.current=r,O0(r),St(),Te=y,He=g,qt.transition=d}else e.current=r;if(xo&&(xo=!1,er=e,vo=l),d=e.pendingLanes,d===0&&(Jn=null),Le(r.stateNode),Lt(e,_e()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(mo)throw mo=!1,e=ps,ps=null,e;return(vo&1)!==0&&e.tag!==0&&ci(),d=e.pendingLanes,(d&1)!==0?e===fs?ea++:(ea=0,fs=e):ea=0,Zn(),null}function ci(){if(er!==null){var e=ud(vo),t=qt.transition,r=He;try{if(qt.transition=null,He=16>e?16:e,er===null)var a=!1;else{if(e=er,er=null,vo=0,(Te&6)!==0)throw Error(s(331));var l=Te;for(Te|=4,ee=e.current;ee!==null;){var d=ee,g=d.child;if((ee.flags&16)!==0){var y=d.deletions;if(y!==null){for(var j=0;j<y.length;j++){var R=y[j];for(ee=R;ee!==null;){var V=ee;switch(V.tag){case 0:case 11:case 15:Qi(8,V,d)}var U=V.child;if(U!==null)U.return=V,ee=U;else for(;ee!==null;){V=ee;var O=V.sibling,X=V.return;if(su(V),V===R){ee=null;break}if(O!==null){O.return=X,ee=O;break}ee=X}}}var re=d.alternate;if(re!==null){var ae=re.child;if(ae!==null){re.child=null;do{var tt=ae.sibling;ae.sibling=null,ae=tt}while(ae!==null)}}ee=d}}if((d.subtreeFlags&2064)!==0&&g!==null)g.return=d,ee=g;else e:for(;ee!==null;){if(d=ee,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Qi(9,d,d.return)}var L=d.sibling;if(L!==null){L.return=d.return,ee=L;break e}ee=d.return}}var S=e.current;for(ee=S;ee!==null;){g=ee;var N=g.child;if((g.subtreeFlags&2064)!==0&&N!==null)N.return=g,ee=N;else e:for(g=S;ee!==null;){if(y=ee,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:fo(9,y)}}catch(le){Je(y,y.return,le)}if(y===g){ee=null;break e}var G=y.sibling;if(G!==null){G.return=y.return,ee=G;break e}ee=y.return}}if(Te=l,Zn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(bn,e)}catch{}a=!0}return a}finally{He=r,qt.transition=t}}return!1}function ju(e,t,r){t=oi(r,t),t=Wc(e,t,1),e=Qn(e,t,1),t=jt(),e!==null&&(ji(e,1,t),Lt(e,t))}function Je(e,t,r){if(e.tag===3)ju(e,e,r);else for(;t!==null;){if(t.tag===3){ju(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Jn===null||!Jn.has(a))){e=oi(r,e),e=Vc(t,e,1),t=Qn(t,e,1),e=jt(),t!==null&&(ji(t,1,e),Lt(t,e));break}}t=t.return}}function Y0(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&r,pt===e&&(ht&r)===r&&(dt===4||dt===3&&(ht&130023424)===ht&&500>_e()-us?zr(e,0):cs|=r),Lt(e,t)}function Eu(e,t){t===0&&((e.mode&1)===0?t=1:(t=vr,vr<<=1,(vr&130023424)===0&&(vr=4194304)));var r=jt();e=Fn(e,t),e!==null&&(ji(e,t,r),Lt(e,r))}function q0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Eu(e,r)}function Z0(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(t),Eu(e,r)}var Su;Su=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)zt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return zt=!1,D0(e,t,r);zt=(e.flags&131072)!==0}else zt=!1,Ke&&(t.flags&1048576)!==0&&ac(t,Za,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;uo(e,t),e=t.pendingProps;var l=Xr(t,mt.current);ii(t,r),l=Wl(null,t,a,e,l,r);var d=Vl();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(a)?(d=!0,Ga(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ml(t),l.updater=so,t.stateNode=l,l._reactInternals=t,Zl(t,a,e,r),t=Jl(null,t,a,!0,d,r)):(t.tag=0,Ke&&d&&El(t),Ct(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=Q0(a),e=nn(a,e),l){case 0:t=Xl(null,t,a,e,r);break e;case 1:t=Xc(null,t,a,e,r);break e;case 11:t=Yc(null,t,a,e,r);break e;case 14:t=qc(null,t,a,nn(a.type,e),r);break e}throw Error(s(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:nn(a,l),Xl(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:nn(a,l),Xc(e,t,a,l,r);case 3:e:{if(Jc(t),e===null)throw Error(s(387));a=t.pendingProps,d=t.memoizedState,l=d.element,gc(e,t),to(t,a,null,r);var g=t.memoizedState;if(a=g.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=oi(Error(s(423)),t),t=eu(e,t,a,r,l);break e}else if(a!==l){l=oi(Error(s(424)),t),t=eu(e,t,a,r,l);break e}else for(Bt=Gn(t.stateNode.containerInfo.firstChild),Dt=t,Ke=!0,tn=null,r=pc(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ti(),a===l){t=zn(e,t,r);break e}Ct(e,t,a,r)}t=t.child}return t;case 5:return xc(t),e===null&&Al(t),a=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,g=l.children,yl(a,l)?g=null:d!==null&&yl(a,d)&&(t.flags|=32),Qc(e,t),Ct(e,t,g,r),t.child;case 6:return e===null&&Al(t),null;case 13:return tu(e,t,r);case 4:return Dl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ni(t,null,a,r):Ct(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:nn(a,l),Yc(e,t,a,l,r);case 7:return Ct(e,t,t.pendingProps,r),t.child;case 8:return Ct(e,t,t.pendingProps.children,r),t.child;case 12:return Ct(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,d=t.memoizedProps,g=l.value,$e(Xa,a._currentValue),a._currentValue=g,d!==null)if(en(d.value,g)){if(d.children===l.children&&!Ft.current){t=zn(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var y=d.dependencies;if(y!==null){g=d.child;for(var j=y.firstContext;j!==null;){if(j.context===a){if(d.tag===1){j=An(-1,r&-r),j.tag=2;var R=d.updateQueue;if(R!==null){R=R.shared;var V=R.pending;V===null?j.next=j:(j.next=V.next,V.next=j),R.pending=j}}d.lanes|=r,j=d.alternate,j!==null&&(j.lanes|=r),Tl(d.return,r,t),y.lanes|=r;break}j=j.next}}else if(d.tag===10)g=d.type===t.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(s(341));g.lanes|=r,y=g.alternate,y!==null&&(y.lanes|=r),Tl(g,r,t),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===t){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}Ct(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,ii(t,r),l=Gt(l),a=a(l),t.flags|=1,Ct(e,t,a,r),t.child;case 14:return a=t.type,l=nn(a,t.pendingProps),l=nn(a.type,l),qc(e,t,a,l,r);case 15:return Zc(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:nn(a,l),uo(e,t),t.tag=1,At(a)?(e=!0,Ga(t)):e=!1,ii(t,r),Hc(t,a,l),Zl(t,a,l,r),Jl(null,t,a,!0,e,r);case 19:return ru(e,t,r);case 22:return Kc(e,t,r)}throw Error(s(156,t.tag))};function Fu(e,t){return et(e,t)}function K0(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,r,a){return new K0(e,t,r,a)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q0(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===qe)return 14}return 2}function rr(e,t){var r=e.alternate;return r===null?(r=Zt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ko(e,t,r,a,l,d){var g=2;if(a=e,typeof e=="function")ys(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case M:return Lr(r.children,l,d,t);case de:g=8,l|=8;break;case ve:return e=Zt(12,r,t,l|2),e.elementType=ve,e.lanes=d,e;case Ue:return e=Zt(13,r,t,l),e.elementType=Ue,e.lanes=d,e;case Me:return e=Zt(19,r,t,l),e.elementType=Me,e.lanes=d,e;case we:return Co(r,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:g=10;break e;case Ne:g=9;break e;case Pe:g=11;break e;case qe:g=14;break e;case je:g=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Zt(g,r,t,l),t.elementType=e,t.type=a,t.lanes=d,t}function Lr(e,t,r,a){return e=Zt(7,e,a,t),e.lanes=r,e}function Co(e,t,r,a){return e=Zt(22,e,a,t),e.elementType=we,e.lanes=r,e.stateNode={isHidden:!1},e}function bs(e,t,r){return e=Zt(6,e,null,t),e.lanes=r,e}function ws(e,t,r){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function X0(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ks(e,t,r,a,l,d,g,y,j){return e=new X0(e,t,r,y,j),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Zt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(d),e}function J0(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function Au(e){if(!e)return qn;e=e._reactInternals;e:{if(ie(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(At(r))return nc(e,r,t)}return t}function zu(e,t,r,a,l,d,g,y,j){return e=ks(r,a,!0,e,l,d,g,y,j),e.context=Au(null),r=e.current,a=jt(),l=tr(r),d=An(a,l),d.callback=t??null,Qn(r,d,l),e.current.lanes=l,ji(e,l,a),Lt(e,a),e}function jo(e,t,r,a){var l=t.current,d=jt(),g=tr(l);return r=Au(r),t.context===null?t.context=r:t.pendingContext=r,t=An(d,g),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Qn(l,t,g),e!==null&&(on(e,l,g,d),eo(e,l,g)),g}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Iu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Cs(e,t){Iu(e,t),(e=e.alternate)&&Iu(e,t)}function eg(){return null}var Lu=typeof reportError=="function"?reportError:function(e){console.error(e)};function js(e){this._internalRoot=e}So.prototype.render=js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));jo(e,t,null,null)},So.prototype.unmount=js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ar(function(){jo(null,e,null,null)}),t[Cn]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Vn.length&&t!==0&&t<Vn[r].priority;r++);Vn.splice(r,0,e),r===0&&xd(e)}};function Es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function tg(e,t,r,a,l){if(l){if(typeof a=="function"){var d=a;a=function(){var R=Eo(g);d.call(R)}}var g=zu(t,a,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=g,e[Cn]=g.current,Pi(e.nodeType===8?e.parentNode:e),Ar(),g}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var y=a;a=function(){var R=Eo(j);y.call(R)}}var j=ks(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=j,e[Cn]=j.current,Pi(e.nodeType===8?e.parentNode:e),Ar(function(){jo(t,j,r,a)}),j}function Ao(e,t,r,a,l){var d=r._reactRootContainer;if(d){var g=d;if(typeof l=="function"){var y=l;l=function(){var j=Eo(g);y.call(j)}}jo(t,g,e,l)}else g=tg(r,t,e,l,a);return Eo(g)}pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yr(t.pendingLanes);r!==0&&(Zo(t,r|1),Lt(t,_e()),(Te&6)===0&&(di=_e()+500,Zn()))}break;case 13:Ar(function(){var a=Fn(e,1);if(a!==null){var l=jt();on(a,e,1,l)}}),Cs(e,1)}},Ko=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var r=jt();on(t,e,134217728,r)}Cs(e,134217728)}},fd=function(e){if(e.tag===13){var t=tr(e),r=Fn(e,t);if(r!==null){var a=jt();on(r,e,t,a)}Cs(e,t)}},gd=function(){return He},hd=function(e,t){var r=He;try{return He=e,t()}finally{He=r}},Dn=function(e,t,r){switch(t){case"input":if(hi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=$a(a);if(!l)throw Error(s(90));lt(a),hi(a,l)}}}break;case"textarea":sn(e,r);break;case"select":t=r.value,t!=null&&Tn(e,!!r.multiple,t,!1)}},wi=ms,gr=Ar;var ng={usingClientEntryPoint:!1,Events:[Oi,Kr,$a,bi,Fa,ms]},ta={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rg={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ie(e),e===null?null:e.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||eg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{bn=zo.inject(rg),kt=zo}catch{}}return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ng,Nt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Es(t))throw Error(s(200));return J0(e,t,null,r)},Nt.createRoot=function(e,t){if(!Es(e))throw Error(s(299));var r=!1,a="",l=Lu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ks(e,1,!1,null,null,r,!1,a,l),e[Cn]=t.current,Pi(e.nodeType===8?e.parentNode:e),new js(t)},Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ie(t),e=e===null?null:e.stateNode,e},Nt.flushSync=function(e){return Ar(e)},Nt.hydrate=function(e,t,r){if(!Fo(t))throw Error(s(200));return Ao(null,e,t,!0,r)},Nt.hydrateRoot=function(e,t,r){if(!Es(e))throw Error(s(405));var a=r!=null&&r.hydratedSources||null,l=!1,d="",g=Lu;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),t=zu(t,null,e,1,r??null,l,!1,d,g),e[Cn]=t.current,Pi(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new So(t)},Nt.render=function(e,t,r){if(!Fo(t))throw Error(s(200));return Ao(null,e,t,!1,r)},Nt.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(s(40));return e._reactRootContainer?(Ar(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[Cn]=null})}),!0):!1},Nt.unstable_batchedUpdates=ms,Nt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!Fo(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ao(e,t,r,!1,a)},Nt.version="18.3.1-next-f1338f8080-20240426",Nt}var Hu;function fg(){if(Hu)return As.exports;Hu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),As.exports=pg(),As.exports}var Ou;function gg(){if(Ou)return Io;Ou=1;var i=fg();return Io.createRoot=i.createRoot,Io.hydrateRoot=i.hydrateRoot,Io}var hg=gg(),I=Ys();const mg=og(I),xg=ag({__proto__:null,default:mg},[I]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lp=i=>{throw TypeError(i)},vg=(i,o,s)=>o.has(i)||Lp("Cannot "+s),Ls=(i,o,s)=>(vg(i,o,"read from private field"),s?s.call(i):o.get(i)),yg=(i,o,s)=>o.has(i)?Lp("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(i):o.set(i,s),Wu="popstate";function bg(i={}){function o(p,u){let{pathname:f,search:h,hash:m}=p.location;return ca("",{pathname:f,search:h,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function s(p,u){return typeof u=="string"?u:xn(u)}return kg(o,s,null,i)}function Ae(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function at(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function wg(){return Math.random().toString(36).substring(2,10)}function Vu(i,o){return{usr:i.state,key:i.key,idx:o}}function ca(i,o,s=null,p){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?cr(o):o,state:s,key:o&&o.key||p||wg()}}function xn({pathname:i="/",search:o="",hash:s=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function cr(i){let o={};if(i){let s=i.indexOf("#");s>=0&&(o.hash=i.substring(s),i=i.substring(0,s));let p=i.indexOf("?");p>=0&&(o.search=i.substring(p),i=i.substring(0,p)),i&&(o.pathname=i)}return o}function kg(i,o,s,p={}){let{window:u=document.defaultView,v5Compat:f=!1}=p,h=u.history,m="POP",x=null,v=C();v==null&&(v=0,h.replaceState({...h.state,idx:v},""));function C(){return(h.state||{idx:null}).idx}function b(){m="POP";let _=C(),Q=_==null?null:_-v;v=_,x&&x({action:m,location:D.location,delta:Q})}function F(_,Q){m="PUSH";let H=ca(D.location,_,Q);v=C()+1;let K=Vu(H,v),he=D.createHref(H);try{h.pushState(K,"",he)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;u.location.assign(he)}f&&x&&x({action:m,location:D.location,delta:1})}function E(_,Q){m="REPLACE";let H=ca(D.location,_,Q);v=C();let K=Vu(H,v),he=D.createHref(H);h.replaceState(K,"",he),f&&x&&x({action:m,location:D.location,delta:0})}function B(_){return Np(_)}let D={get action(){return m},get location(){return i(u,h)},listen(_){if(x)throw new Error("A history only accepts one active listener");return u.addEventListener(Wu,b),x=_,()=>{u.removeEventListener(Wu,b),x=null}},createHref(_){return o(u,_)},createURL:B,encodeLocation(_){let Q=B(_);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:F,replace:E,go(_){return h.go(_)}};return D}function Np(i,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ae(s,"No window.location.(origin|href) available to create URL");let p=typeof i=="string"?i:xn(i);return p=p.replace(/ $/,"%20"),!o&&p.startsWith("//")&&(p=s+p),new URL(p,s)}var la,$u=class{constructor(i){if(yg(this,la,new Map),i)for(let[o,s]of i)this.set(o,s)}get(i){if(Ls(this,la).has(i))return Ls(this,la).get(i);if(i.defaultValue!==void 0)return i.defaultValue;throw new Error("No value found for context")}set(i,o){Ls(this,la).set(i,o)}};la=new WeakMap;var Cg=new Set(["lazy","caseSensitive","path","id","index","children"]);function jg(i){return Cg.has(i)}var Eg=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Sg(i){return Eg.has(i)}function Fg(i){return i.index===!0}function ua(i,o,s=[],p={},u=!1){return i.map((f,h)=>{let m=[...s,String(h)],x=typeof f.id=="string"?f.id:m.join("-");if(Ae(f.index!==!0||!f.children,"Cannot specify children on an index route"),Ae(u||!p[x],`Found a route id collision on id "${x}".  Route id's must be globally unique within Data Router usages`),Fg(f)){let v={...f,id:x};return p[x]=Uu(v,o(v)),v}else{let v={...f,id:x,children:void 0};return p[x]=Uu(v,o(v)),f.children&&(v.children=ua(f.children,o,m,p,u)),v}})}function Uu(i,o){return Object.assign(i,{...o,...typeof o.lazy=="object"&&o.lazy!=null?{lazy:{...i.lazy,...o.lazy}}:{}})}function or(i,o,s="/"){return sa(i,o,s,!1)}function sa(i,o,s,p){let u=typeof o=="string"?cr(o):o,f=Qt(u.pathname||"/",s);if(f==null)return null;let h=Tp(i);zg(h);let m=null;for(let x=0;m==null&&x<h.length;++x){let v=Hg(f);m=Pg(h[x],v,p)}return m}function Ag(i,o){let{route:s,pathname:p,params:u}=i;return{id:s.id,pathname:p,params:u,data:o[s.id],loaderData:o[s.id],handle:s.handle}}function Tp(i,o=[],s=[],p="",u=!1){let f=(h,m,x=u,v)=>{let C={relativePath:v===void 0?h.path||"":v,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(p)&&x)return;Ae(C.relativePath.startsWith(p),`Absolute route path "${C.relativePath}" nested under path "${p}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(p.length)}let b=mn([p,C.relativePath]),F=s.concat(C);h.children&&h.children.length>0&&(Ae(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Tp(h.children,o,F,b,x)),!(h.path==null&&!h.index)&&o.push({path:b,score:Dg(b,h.index),routesMeta:F})};return i.forEach((h,m)=>{var x;if(h.path===""||!((x=h.path)!=null&&x.includes("?")))f(h,m);else for(let v of Rp(h.path))f(h,m,!0,v)}),o}function Rp(i){let o=i.split("/");if(o.length===0)return[];let[s,...p]=o,u=s.endsWith("?"),f=s.replace(/\?$/,"");if(p.length===0)return u?[f,""]:[f];let h=Rp(p.join("/")),m=[];return m.push(...h.map(x=>x===""?f:[f,x].join("/"))),u&&m.push(...h),m.map(x=>i.startsWith("/")&&x===""?"/":x)}function zg(i){i.sort((o,s)=>o.score!==s.score?s.score-o.score:Bg(o.routesMeta.map(p=>p.childrenIndex),s.routesMeta.map(p=>p.childrenIndex)))}var Ig=/^:[\w-]+$/,Lg=3,Ng=2,Tg=1,Rg=10,Mg=-2,Gu=i=>i==="*";function Dg(i,o){let s=i.split("/"),p=s.length;return s.some(Gu)&&(p+=Mg),o&&(p+=Ng),s.filter(u=>!Gu(u)).reduce((u,f)=>u+(Ig.test(f)?Lg:f===""?Tg:Rg),p)}function Bg(i,o){return i.length===o.length&&i.slice(0,-1).every((p,u)=>p===o[u])?i[i.length-1]-o[o.length-1]:0}function Pg(i,o,s=!1){let{routesMeta:p}=i,u={},f="/",h=[];for(let m=0;m<p.length;++m){let x=p[m],v=m===p.length-1,C=f==="/"?o:o.slice(f.length)||"/",b=Wo({path:x.relativePath,caseSensitive:x.caseSensitive,end:v},C),F=x.route;if(!b&&v&&s&&!p[p.length-1].route.index&&(b=Wo({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},C)),!b)return null;Object.assign(u,b.params),h.push({params:u,pathname:mn([f,b.pathname]),pathnameBase:Vg(mn([f,b.pathnameBase])),route:F}),b.pathnameBase!=="/"&&(f=mn([f,b.pathnameBase]))}return h}function Wo(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,p]=_g(i.path,i.caseSensitive,i.end),u=o.match(s);if(!u)return null;let f=u[0],h=f.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:p.reduce((v,{paramName:C,isOptional:b},F)=>{if(C==="*"){let B=m[F]||"";h=f.slice(0,f.length-B.length).replace(/(.)\/+$/,"$1")}const E=m[F];return b&&!E?v[C]=void 0:v[C]=(E||"").replace(/%2F/g,"/"),v},{}),pathname:f,pathnameBase:h,pattern:i}}function _g(i,o=!1,s=!0){at(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let p=[],u="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,x)=>(p.push({paramName:m,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(p.push({paramName:"*"}),u+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?u+="\\/*$":i!==""&&i!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),p]}function Hg(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return at(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function Qt(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,p=i.charAt(s);return p&&p!=="/"?null:i.slice(s)||"/"}function Og({basename:i,pathname:o}){return o==="/"?i:mn([i,o])}var Mp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qs=i=>Mp.test(i);function Wg(i,o="/"){let{pathname:s,search:p="",hash:u=""}=typeof i=="string"?cr(i):i,f;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?f=Yu(s.substring(1),"/"):f=Yu(s,o)):f=o,{pathname:f,search:$g(p),hash:Ug(u)}}function Yu(i,o){let s=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(u=>{u===".."?s.length>1&&s.pop():u!=="."&&s.push(u)}),s.length>1?s.join("/"):"/"}function Ns(i,o,s,p){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(p)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dp(i){return i.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Zs(i){let o=Dp(i);return o.map((s,p)=>p===o.length-1?s.pathname:s.pathnameBase)}function Ks(i,o,s,p=!1){let u;typeof i=="string"?u=cr(i):(u={...i},Ae(!u.pathname||!u.pathname.includes("?"),Ns("?","pathname","search",u)),Ae(!u.pathname||!u.pathname.includes("#"),Ns("#","pathname","hash",u)),Ae(!u.search||!u.search.includes("#"),Ns("#","search","hash",u)));let f=i===""||u.pathname==="",h=f?"/":u.pathname,m;if(h==null)m=s;else{let b=o.length-1;if(!p&&h.startsWith("..")){let F=h.split("/");for(;F[0]==="..";)F.shift(),b-=1;u.pathname=F.join("/")}m=b>=0?o[b]:"/"}let x=Wg(u,m),v=h&&h!=="/"&&h.endsWith("/"),C=(f||h===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(v||C)&&(x.pathname+="/"),x}var mn=i=>i.join("/").replace(/\/\/+/g,"/"),Vg=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),$g=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Ug=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,ma=class{constructor(i,o,s,p=!1){this.status=i,this.statusText=o||"",this.internal=p,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function pa(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function xa(i){return i.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Bp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Pp(i,o){let s=i;if(typeof s!="string"||!Mp.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let p=s,u=!1;if(Bp)try{let f=new URL(window.location.href),h=s.startsWith("//")?new URL(f.protocol+s):new URL(s),m=Qt(h.pathname,o);h.origin===f.origin&&m!=null?s=m+h.search+h.hash:u=!0}catch{at(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:p,isExternal:u,to:s}}var sr=Symbol("Uninstrumented");function Gg(i,o){let s={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};i.forEach(u=>u({id:o.id,index:o.index,path:o.path,instrument(f){let h=Object.keys(s);for(let m of h)f[m]&&s[m].push(f[m])}}));let p={};if(typeof o.lazy=="function"&&s.lazy.length>0){let u=pi(s.lazy,o.lazy,()=>{});u&&(p.lazy=u)}if(typeof o.lazy=="object"){let u=o.lazy;["middleware","loader","action"].forEach(f=>{let h=u[f],m=s[`lazy.${f}`];if(typeof h=="function"&&m.length>0){let x=pi(m,h,()=>{});x&&(p.lazy=Object.assign(p.lazy||{},{[f]:x}))}})}return["loader","action"].forEach(u=>{let f=o[u];if(typeof f=="function"&&s[u].length>0){let h=f[sr]??f,m=pi(s[u],h,(...x)=>qu(x[0]));m&&(u==="loader"&&h.hydrate===!0&&(m.hydrate=!0),m[sr]=h,p[u]=m)}}),o.middleware&&o.middleware.length>0&&s.middleware.length>0&&(p.middleware=o.middleware.map(u=>{let f=u[sr]??u,h=pi(s.middleware,f,(...m)=>qu(m[0]));return h?(h[sr]=f,h):u})),p}function Yg(i,o){let s={navigate:[],fetch:[]};if(o.forEach(p=>p({instrument(u){let f=Object.keys(u);for(let h of f)u[h]&&s[h].push(u[h])}})),s.navigate.length>0){let p=i.navigate[sr]??i.navigate,u=pi(s.navigate,p,(...f)=>{let[h,m]=f;return{to:typeof h=="number"||typeof h=="string"?h:h?xn(h):".",...Zu(i,m??{})}});u&&(u[sr]=p,i.navigate=u)}if(s.fetch.length>0){let p=i.fetch[sr]??i.fetch,u=pi(s.fetch,p,(...f)=>{let[h,,m,x]=f;return{href:m??".",fetcherKey:h,...Zu(i,x??{})}});u&&(u[sr]=p,i.fetch=u)}return i}function pi(i,o,s){return i.length===0?null:async(...p)=>{let u=await _p(i,s(...p),()=>o(...p),i.length-1);if(u.type==="error")throw u.value;return u.value}}async function _p(i,o,s,p){let u=i[p],f;if(u){let h,m=async()=>(h?console.error("You cannot call instrumented handlers more than once"):h=_p(i,o,s,p-1),f=await h,Ae(f,"Expected a result"),f.type==="error"&&f.value instanceof Error?{status:"error",error:f.value}:{status:"success",error:void 0});try{await u(m,o)}catch(x){console.error("An instrumentation function threw an error:",x)}h||await m(),await h}else try{f={type:"success",value:await s()}}catch(h){f={type:"error",value:h}}return f||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function qu(i){let{request:o,context:s,params:p,unstable_pattern:u}=i;return{request:qg(o),params:{...p},unstable_pattern:u,context:Zg(s)}}function Zu(i,o){return{currentUrl:xn(i.state.location),..."formMethod"in o?{formMethod:o.formMethod}:{},..."formEncType"in o?{formEncType:o.formEncType}:{},..."formData"in o?{formData:o.formData}:{},..."body"in o?{body:o.body}:{}}}function qg(i){return{method:i.method,url:i.url,headers:{get:(...o)=>i.headers.get(...o)}}}function Zg(i){if(Qg(i)){let o={...i};return Object.freeze(o),o}else return{get:o=>i.get(o)}}var Kg=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qg(i){if(i===null||typeof i!="object")return!1;const o=Object.getPrototypeOf(i);return o===Object.prototype||o===null||Object.getOwnPropertyNames(o).sort().join("\0")===Kg}var Hp=["POST","PUT","PATCH","DELETE"],Xg=new Set(Hp),Jg=["GET",...Hp],eh=new Set(Jg),Op=new Set([301,302,303,307,308]),th=new Set([307,308]),Ts={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},nh={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ra={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},rh=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),Wp="remix-router-transitions",Vp=Symbol("ResetLoaderData");function ih(i){const o=i.window?i.window:typeof window<"u"?window:void 0,s=typeof o<"u"&&typeof o.document<"u"&&typeof o.document.createElement<"u";Ae(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let p=i.hydrationRouteProperties||[],u=i.mapRouteProperties||rh,f=u;if(i.unstable_instrumentations){let w=i.unstable_instrumentations;f=z=>({...u(z),...Gg(w.map(T=>T.route).filter(Boolean),z)})}let h={},m=ua(i.routes,f,void 0,h),x,v=i.basename||"/";v.startsWith("/")||(v=`/${v}`);let C=i.dataStrategy||dh,b={...i.future},F=null,E=new Set,B=null,D=null,_=null,Q=i.hydrationData!=null,H=or(m,i.history.location,v),K=!1,he=null,xe;if(H==null&&!i.patchRoutesOnNavigation){let w=Kt(404,{pathname:i.history.location.pathname}),{matches:z,route:T}=Lo(m);xe=!0,H=z,he={[T.id]:w}}else if(H&&!i.hydrationData&&gr(H,m,i.history.location.pathname).active&&(H=null),H)if(H.some(w=>w.route.lazy))xe=!1;else if(!H.some(w=>Qs(w.route)))xe=!0;else{let w=i.hydrationData?i.hydrationData.loaderData:null,z=i.hydrationData?i.hydrationData.errors:null;if(z){let T=H.findIndex(W=>z[W.route.id]!==void 0);xe=H.slice(0,T+1).every(W=>!Ws(W.route,w,z))}else xe=H.every(T=>!Ws(T.route,w,z))}else{xe=!1,H=[];let w=gr(null,m,i.history.location.pathname);w.active&&w.matches&&(K=!0,H=w.matches)}let Ee,M={historyAction:i.history.action,location:i.history.location,matches:H,initialized:xe,navigation:Ts,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||he,fetchers:new Map,blockers:new Map},de="POP",ve=null,Se=!1,Ne,Pe=!1,Ue=new Map,Me=null,qe=!1,je=!1,we=new Set,$=new Map,te=0,Z=-1,A=new Map,P=new Set,fe=new Map,me=new Map,ge=new Set,ke=new Map,De,ze=null;function Ve(){if(F=i.history.listen(({action:w,location:z,delta:T})=>{if(De){De(),De=void 0;return}at(ke.size===0||T!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=yn({currentLocation:M.location,nextLocation:z,historyAction:w});if(W&&T!=null){let Y=new Promise(oe=>{De=oe});i.history.go(T*-1),Dn(W,{state:"blocked",location:z,proceed(){Dn(W,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),Y.then(()=>i.history.go(T))},reset(){let oe=new Map(M.blockers);oe.set(W,ra),lt({blockers:oe})}}),ve==null||ve.resolve(),ve=null;return}return ln(w,z)}),s){Fh(o,Ue);let w=()=>Ah(o,Ue);o.addEventListener("pagehide",w),Me=()=>o.removeEventListener("pagehide",w)}return M.initialized||ln("POP",M.location,{initialHydration:!0}),Ee}function wt(){F&&F(),Me&&Me(),E.clear(),Ne&&Ne.abort(),M.fetchers.forEach((w,z)=>vi(z)),M.blockers.forEach((w,z)=>Wr(z))}function Br(w){return E.add(w),()=>E.delete(w)}function lt(w,z={}){w.matches&&(w.matches=w.matches.map(Y=>{let oe=h[Y.route.id],ce=Y.route;return ce.element!==oe.element||ce.errorElement!==oe.errorElement||ce.hydrateFallbackElement!==oe.hydrateFallbackElement?{...Y,route:oe}:Y})),M={...M,...w};let T=[],W=[];M.fetchers.forEach((Y,oe)=>{Y.state==="idle"&&(ge.has(oe)?T.push(oe):W.push(oe))}),ge.forEach(Y=>{!M.fetchers.has(Y)&&!$.has(Y)&&T.push(Y)}),[...E].forEach(Y=>Y(M,{deletedFetchers:T,newErrors:w.errors??null,viewTransitionOpts:z.viewTransitionOpts,flushSync:z.flushSync===!0})),T.forEach(Y=>vi(Y)),W.forEach(Y=>M.fetchers.delete(Y))}function Jt(w,z,{flushSync:T}={}){var be,se;let W=M.actionData!=null&&M.navigation.formMethod!=null&&bt(M.navigation.formMethod)&&M.navigation.state==="loading"&&((be=w.state)==null?void 0:be._isRedirect)!==!0,Y;z.actionData?Object.keys(z.actionData).length>0?Y=z.actionData:Y=null:W?Y=M.actionData:Y=null;let oe=z.loaderData?ap(M.loaderData,z.loaderData,z.matches||[],z.errors):M.loaderData,ce=M.blockers;ce.size>0&&(ce=new Map(ce),ce.forEach((Ce,Ie)=>ce.set(Ie,ra)));let J=qe?!1:wi(w,z.matches||M.matches),ne=Se===!0||M.navigation.formMethod!=null&&bt(M.navigation.formMethod)&&((se=w.state)==null?void 0:se._isRedirect)!==!0;x&&(m=x,x=void 0),qe||de==="POP"||(de==="PUSH"?i.history.push(w,w.state):de==="REPLACE"&&i.history.replace(w,w.state));let ie;if(de==="POP"){let Ce=Ue.get(M.location.pathname);Ce&&Ce.has(w.pathname)?ie={currentLocation:M.location,nextLocation:w}:Ue.has(w.pathname)&&(ie={currentLocation:w,nextLocation:M.location})}else if(Pe){let Ce=Ue.get(M.location.pathname);Ce?Ce.add(w.pathname):(Ce=new Set([w.pathname]),Ue.set(M.location.pathname,Ce)),ie={currentLocation:M.location,nextLocation:w}}lt({...z,actionData:Y,loaderData:oe,historyAction:de,location:w,initialized:!0,navigation:Ts,revalidation:"idle",restoreScrollPosition:J,preventScrollReset:ne,blockers:ce},{viewTransitionOpts:ie,flushSync:T===!0}),de="POP",Se=!1,Pe=!1,qe=!1,je=!1,ve==null||ve.resolve(),ve=null,ze==null||ze.resolve(),ze=null}async function Pr(w,z){if(ve==null||ve.resolve(),ve=null,typeof w=="number"){ve||(ve=dp());let Ie=ve.promise;return i.history.go(w),Ie}let T=Os(M.location,M.matches,v,w,z==null?void 0:z.fromRouteId,z==null?void 0:z.relative),{path:W,submission:Y,error:oe}=Ku(!1,T,z),ce=M.location,J=ca(M.location,W,z&&z.state);J={...J,...i.history.encodeLocation(J)};let ne=z&&z.replace!=null?z.replace:void 0,ie="PUSH";ne===!0?ie="REPLACE":ne===!1||Y!=null&&bt(Y.formMethod)&&Y.formAction===M.location.pathname+M.location.search&&(ie="REPLACE");let be=z&&"preventScrollReset"in z?z.preventScrollReset===!0:void 0,se=(z&&z.flushSync)===!0,Ce=yn({currentLocation:ce,nextLocation:J,historyAction:ie});if(Ce){Dn(Ce,{state:"blocked",location:J,proceed(){Dn(Ce,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),Pr(w,z)},reset(){let Ie=new Map(M.blockers);Ie.set(Ce,ra),lt({blockers:Ie})}});return}await ln(ie,J,{submission:Y,pendingError:oe,preventScrollReset:be,replace:z&&z.replace,enableViewTransition:z&&z.viewTransition,flushSync:se,callSiteDefaultShouldRevalidate:z&&z.unstable_defaultShouldRevalidate})}function wa(){ze||(ze=dp()),pr(),lt({revalidation:"loading"});let w=ze.promise;return M.navigation.state==="submitting"?w:M.navigation.state==="idle"?(ln(M.historyAction,M.location,{startUninterruptedRevalidation:!0}),w):(ln(de||M.historyAction,M.navigation.location,{overrideNavigation:M.navigation,enableViewTransition:Pe===!0}),w)}async function ln(w,z,T){Ne&&Ne.abort(),Ne=null,de=w,qe=(T&&T.startUninterruptedRevalidation)===!0,Fa(M.location,M.matches),Se=(T&&T.preventScrollReset)===!0,Pe=(T&&T.enableViewTransition)===!0;let W=x||m,Y=T&&T.overrideNavigation,oe=T!=null&&T.initialHydration&&M.matches&&M.matches.length>0&&!K?M.matches:or(W,z,v),ce=(T&&T.flushSync)===!0;if(oe&&M.initialized&&!je&&xh(M.location,z)&&!(T&&T.submission&&bt(T.submission.formMethod))){Jt(z,{matches:oe},{flushSync:ce});return}let J=gr(oe,W,z.pathname);if(J.active&&J.matches&&(oe=J.matches),!oe){let{error:et,notFoundMatches:ct,route:Be}=dn(z.pathname);Jt(z,{matches:ct,loaderData:{},errors:{[Be.id]:et}},{flushSync:ce});return}Ne=new AbortController;let ne=ui(i.history,z,Ne.signal,T&&T.submission),ie=i.getContext?await i.getContext():new $u,be;if(T&&T.pendingError)be=[lr(oe).route.id,{type:"error",error:T.pendingError}];else if(T&&T.submission&&bt(T.submission.formMethod)){let et=await hi(ne,z,T.submission,oe,ie,J.active,T&&T.initialHydration===!0,{replace:T.replace,flushSync:ce});if(et.shortCircuited)return;if(et.pendingActionResult){let[ct,Be]=et.pendingActionResult;if(Ht(Be)&&pa(Be.error)&&Be.error.status===404){Ne=null,Jt(z,{matches:et.matches,loaderData:{},errors:{[ct]:Be.error}});return}}oe=et.matches||oe,be=et.pendingActionResult,Y=Rs(z,T.submission),ce=!1,J.active=!1,ne=ui(i.history,ne.url,ne.signal)}let{shortCircuited:se,matches:Ce,loaderData:Ie,errors:nt}=await ka(ne,z,oe,ie,J.active,Y,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,T&&T.initialHydration===!0,ce,be,T&&T.callSiteDefaultShouldRevalidate);se||(Ne=null,Jt(z,{matches:Ce||oe,...op(be),loaderData:Ie,errors:nt}))}async function hi(w,z,T,W,Y,oe,ce,J={}){pr();let ne=Eh(z,T);if(lt({navigation:ne},{flushSync:J.flushSync===!0}),oe){let se=await Bn(W,z.pathname,w.signal);if(se.type==="aborted")return{shortCircuited:!0};if(se.type==="error"){if(se.partialMatches.length===0){let{matches:Ie,route:nt}=Lo(m);return{matches:Ie,pendingActionResult:[nt.id,{type:"error",error:se.error}]}}let Ce=lr(se.partialMatches).route.id;return{matches:se.partialMatches,pendingActionResult:[Ce,{type:"error",error:se.error}]}}else if(se.matches)W=se.matches;else{let{notFoundMatches:Ce,error:Ie,route:nt}=dn(z.pathname);return{matches:Ce,pendingActionResult:[nt.id,{type:"error",error:Ie}]}}}let ie,be=Bo(W,z);if(!be.route.action&&!be.route.lazy)ie={type:"error",error:Kt(405,{method:w.method,pathname:z.pathname,routeId:be.route.id})};else{let se=fi(f,h,w,W,be,ce?[]:p,Y),Ce=await Rn(w,se,Y,null);if(ie=Ce[be.route.id],!ie){for(let Ie of W)if(Ce[Ie.route.id]){ie=Ce[Ie.route.id];break}}if(w.signal.aborted)return{shortCircuited:!0}}if(Rr(ie)){let se;return J&&J.replace!=null?se=J.replace:se=np(ie.response.headers.get("Location"),new URL(w.url),v,i.history)===M.location.pathname+M.location.search,await sn(w,ie,!0,{submission:T,replace:se}),{shortCircuited:!0}}if(Ht(ie)){let se=lr(W,be.route.id);return(J&&J.replace)!==!0&&(de="PUSH"),{matches:W,pendingActionResult:[se.route.id,ie,be.route.id]}}return{matches:W,pendingActionResult:[be.route.id,ie]}}async function ka(w,z,T,W,Y,oe,ce,J,ne,ie,be,se,Ce){let Ie=oe||Rs(z,ce),nt=ce||J||sp(Ie),et=!qe&&!ie;if(Y){if(et){let Oe=_r(se);lt({navigation:Ie,...Oe!==void 0?{actionData:Oe}:{}},{flushSync:be})}let Le=await Bn(T,z.pathname,w.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){if(Le.partialMatches.length===0){let{matches:_n,route:wn}=Lo(m);return{matches:_n,loaderData:{},errors:{[wn.id]:Le.error}}}let Oe=lr(Le.partialMatches).route.id;return{matches:Le.partialMatches,loaderData:{},errors:{[Oe]:Le.error}}}else if(Le.matches)T=Le.matches;else{let{error:Oe,notFoundMatches:_n,route:wn}=dn(z.pathname);return{matches:_n,loaderData:{},errors:{[wn.id]:Oe}}}}let ct=x||m,{dsMatches:Be,revalidatingFetchers:St}=Qu(w,W,f,h,i.history,M,T,nt,z,ie?[]:p,ie===!0,je,we,ge,fe,P,ct,v,i.patchRoutesOnNavigation!=null,se,Ce);if(Z=++te,!i.dataStrategy&&!Be.some(Le=>Le.shouldLoad)&&!Be.some(Le=>Le.route.middleware&&Le.route.middleware.length>0)&&St.length===0){let Le=Hr();return Jt(z,{matches:T,loaderData:{},errors:se&&Ht(se[1])?{[se[0]]:se[1].error}:null,...op(se),...Le?{fetchers:new Map(M.fetchers)}:{}},{flushSync:be}),{shortCircuited:!0}}if(et){let Le={};if(!Y){Le.navigation=Ie;let Oe=_r(se);Oe!==void 0&&(Le.actionData=Oe)}St.length>0&&(Le.fetchers=ur(St)),lt(Le,{flushSync:be})}St.forEach(Le=>{Wt(Le.key),Le.controller&&$.set(Le.key,Le.controller)});let _e=()=>St.forEach(Le=>Wt(Le.key));Ne&&Ne.signal.addEventListener("abort",_e);let{loaderResults:mr,fetcherResults:Vt}=await xi(Be,St,w,W);if(w.signal.aborted)return{shortCircuited:!0};Ne&&Ne.signal.removeEventListener("abort",_e),St.forEach(Le=>$.delete(Le.key));let Rt=No(mr);if(Rt)return await sn(w,Rt.result,!0,{replace:ne}),{shortCircuited:!0};if(Rt=No(Vt),Rt)return P.add(Rt.key),await sn(w,Rt.result,!0,{replace:ne}),{shortCircuited:!0};let{loaderData:Pn,errors:xr}=ip(M,T,mr,se,St,Vt);ie&&M.errors&&(xr={...M.errors,...xr});let cn=Hr(),bn=Or(Z),kt=cn||bn||St.length>0;return{matches:T,loaderData:Pn,errors:xr,...kt?{fetchers:new Map(M.fetchers)}:{}}}function _r(w){if(w&&!Ht(w[1]))return{[w[0]]:w[1].data};if(M.actionData)return Object.keys(M.actionData).length===0?null:M.actionData}function ur(w){return w.forEach(z=>{let T=M.fetchers.get(z.key),W=ia(void 0,T?T.data:void 0);M.fetchers.set(z.key,W)}),new Map(M.fetchers)}async function Tn(w,z,T,W){Wt(w);let Y=(W&&W.flushSync)===!0,oe=x||m,ce=Os(M.location,M.matches,v,T,z,W==null?void 0:W.relative),J=or(oe,ce,v),ne=gr(J,oe,ce);if(ne.active&&ne.matches&&(J=ne.matches),!J){Ot(w,z,Kt(404,{pathname:ce}),{flushSync:Y});return}let{path:ie,submission:be,error:se}=Ku(!0,ce,W);if(se){Ot(w,z,se,{flushSync:Y});return}let Ce=i.getContext?await i.getContext():new $u,Ie=(W&&W.preventScrollReset)===!0;if(be&&bt(be.formMethod)){await mi(w,z,ie,J,Ce,ne.active,Y,Ie,be,W&&W.unstable_defaultShouldRevalidate);return}fe.set(w,{routeId:z,path:ie}),await Ca(w,z,ie,J,Ce,ne.active,Y,Ie,be)}async function mi(w,z,T,W,Y,oe,ce,J,ne,ie){pr(),fe.delete(w);let be=M.fetchers.get(w);Et(w,Sh(ne,be),{flushSync:ce});let se=new AbortController,Ce=ui(i.history,T,se.signal,ne);if(oe){let Ze=await Bn(W,new URL(Ce.url).pathname,Ce.signal,w);if(Ze.type==="aborted")return;if(Ze.type==="error"){Ot(w,z,Ze.error,{flushSync:ce});return}else if(Ze.matches)W=Ze.matches;else{Ot(w,z,Kt(404,{pathname:T}),{flushSync:ce});return}}let Ie=Bo(W,T);if(!Ie.route.action&&!Ie.route.lazy){let Ze=Kt(405,{method:ne.formMethod,pathname:T,routeId:z});Ot(w,z,Ze,{flushSync:ce});return}$.set(w,se);let nt=te,et=fi(f,h,Ce,W,Ie,p,Y),ct=await Rn(Ce,et,Y,w),Be=ct[Ie.route.id];if(!Be){for(let Ze of et)if(ct[Ze.route.id]){Be=ct[Ze.route.id];break}}if(Ce.signal.aborted){$.get(w)===se&&$.delete(w);return}if(ge.has(w)){if(Rr(Be)||Ht(Be)){Et(w,Ln(void 0));return}}else{if(Rr(Be))if($.delete(w),Z>nt){Et(w,Ln(void 0));return}else return P.add(w),Et(w,ia(ne)),sn(Ce,Be,!1,{fetcherSubmission:ne,preventScrollReset:J});if(Ht(Be)){Ot(w,z,Be.error);return}}let St=M.navigation.location||M.location,_e=ui(i.history,St,se.signal),mr=x||m,Vt=M.navigation.state!=="idle"?or(mr,M.navigation.location,v):M.matches;Ae(Vt,"Didn't find any matches after fetcher action");let Rt=++te;A.set(w,Rt);let Pn=ia(ne,Be.data);M.fetchers.set(w,Pn);let{dsMatches:xr,revalidatingFetchers:cn}=Qu(_e,Y,f,h,i.history,M,Vt,ne,St,p,!1,je,we,ge,fe,P,mr,v,i.patchRoutesOnNavigation!=null,[Ie.route.id,Be],ie);cn.filter(Ze=>Ze.key!==w).forEach(Ze=>{let kn=Ze.key,vr=M.fetchers.get(kn),yr=ia(void 0,vr?vr.data:void 0);M.fetchers.set(kn,yr),Wt(kn),Ze.controller&&$.set(kn,Ze.controller)}),lt({fetchers:new Map(M.fetchers)});let bn=()=>cn.forEach(Ze=>Wt(Ze.key));se.signal.addEventListener("abort",bn);let{loaderResults:kt,fetcherResults:Le}=await xi(xr,cn,_e,Y);if(se.signal.aborted)return;if(se.signal.removeEventListener("abort",bn),A.delete(w),$.delete(w),cn.forEach(Ze=>$.delete(Ze.key)),M.fetchers.has(w)){let Ze=Ln(Be.data);M.fetchers.set(w,Ze)}let Oe=No(kt);if(Oe)return sn(_e,Oe.result,!1,{preventScrollReset:J});if(Oe=No(Le),Oe)return P.add(Oe.key),sn(_e,Oe.result,!1,{preventScrollReset:J});let{loaderData:_n,errors:wn}=ip(M,Vt,kt,void 0,cn,Le);Or(Rt),M.navigation.state==="loading"&&Rt>Z?(Ae(de,"Expected pending action"),Ne&&Ne.abort(),Jt(M.navigation.location,{matches:Vt,loaderData:_n,errors:wn,fetchers:new Map(M.fetchers)})):(lt({errors:wn,loaderData:ap(M.loaderData,_n,Vt,wn),fetchers:new Map(M.fetchers)}),je=!1)}async function Ca(w,z,T,W,Y,oe,ce,J,ne){let ie=M.fetchers.get(w);Et(w,ia(ne,ie?ie.data:void 0),{flushSync:ce});let be=new AbortController,se=ui(i.history,T,be.signal);if(oe){let Be=await Bn(W,new URL(se.url).pathname,se.signal,w);if(Be.type==="aborted")return;if(Be.type==="error"){Ot(w,z,Be.error,{flushSync:ce});return}else if(Be.matches)W=Be.matches;else{Ot(w,z,Kt(404,{pathname:T}),{flushSync:ce});return}}let Ce=Bo(W,T);$.set(w,be);let Ie=te,nt=fi(f,h,se,W,Ce,p,Y),ct=(await Rn(se,nt,Y,w))[Ce.route.id];if($.get(w)===be&&$.delete(w),!se.signal.aborted){if(ge.has(w)){Et(w,Ln(void 0));return}if(Rr(ct))if(Z>Ie){Et(w,Ln(void 0));return}else{P.add(w),await sn(se,ct,!1,{preventScrollReset:J});return}if(Ht(ct)){Ot(w,z,ct.error);return}Et(w,Ln(ct.data))}}async function sn(w,z,T,{submission:W,fetcherSubmission:Y,preventScrollReset:oe,replace:ce}={}){T||(ve==null||ve.resolve(),ve=null),z.response.headers.has("X-Remix-Revalidate")&&(je=!0);let J=z.response.headers.get("Location");Ae(J,"Expected a Location header on the redirect Response"),J=np(J,new URL(w.url),v,i.history);let ne=ca(M.location,J,{_isRedirect:!0});if(s){let nt=!1;if(z.response.headers.has("X-Remix-Reload-Document"))nt=!0;else if(qs(J)){const et=Np(J,!0);nt=et.origin!==o.location.origin||Qt(et.pathname,v)==null}if(nt){ce?o.location.replace(J):o.location.assign(J);return}}Ne=null;let ie=ce===!0||z.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:be,formAction:se,formEncType:Ce}=M.navigation;!W&&!Y&&be&&se&&Ce&&(W=sp(M.navigation));let Ie=W||Y;if(th.has(z.response.status)&&Ie&&bt(Ie.formMethod))await ln(ie,ne,{submission:{...Ie,formAction:J},preventScrollReset:oe||Se,enableViewTransition:T?Pe:void 0});else{let nt=Rs(ne,W);await ln(ie,ne,{overrideNavigation:nt,fetcherSubmission:Y,preventScrollReset:oe||Se,enableViewTransition:T?Pe:void 0})}}async function Rn(w,z,T,W){var ce;let Y,oe={};try{Y=await uh(C,w,z,W,T,!1)}catch(J){return z.filter(ne=>ne.shouldLoad).forEach(ne=>{oe[ne.route.id]={type:"error",error:J}}),oe}if(w.signal.aborted)return oe;if(!bt(w.method))for(let J of z){if(((ce=Y[J.route.id])==null?void 0:ce.type)==="error")break;!Y.hasOwnProperty(J.route.id)&&!M.loaderData.hasOwnProperty(J.route.id)&&(!M.errors||!M.errors.hasOwnProperty(J.route.id))&&J.shouldCallHandler()&&(Y[J.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${J.route.id}`)})}for(let[J,ne]of Object.entries(Y))if(wh(ne)){let ie=ne.result;oe[J]={type:"redirect",response:hh(ie,w,J,z,v)}}else oe[J]=await gh(ne);return oe}async function xi(w,z,T,W){let Y=Rn(T,w,W,null),oe=Promise.all(z.map(async ne=>{if(ne.matches&&ne.match&&ne.request&&ne.controller){let be=(await Rn(ne.request,ne.matches,W,ne.key))[ne.match.route.id];return{[ne.key]:be}}else return Promise.resolve({[ne.key]:{type:"error",error:Kt(404,{pathname:ne.path})}})})),ce=await Y,J=(await oe).reduce((ne,ie)=>Object.assign(ne,ie),{});return{loaderResults:ce,fetcherResults:J}}function pr(){je=!0,fe.forEach((w,z)=>{$.has(z)&&we.add(z),Wt(z)})}function Et(w,z,T={}){M.fetchers.set(w,z),lt({fetchers:new Map(M.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Ot(w,z,T,W={}){let Y=lr(M.matches,z);vi(w),lt({errors:{[Y.route.id]:T},fetchers:new Map(M.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function Mn(w){return me.set(w,(me.get(w)||0)+1),ge.has(w)&&ge.delete(w),M.fetchers.get(w)||nh}function fr(w,z){Wt(w,z==null?void 0:z.reason),Et(w,Ln(null))}function vi(w){let z=M.fetchers.get(w);$.has(w)&&!(z&&z.state==="loading"&&A.has(w))&&Wt(w),fe.delete(w),A.delete(w),P.delete(w),ge.delete(w),we.delete(w),M.fetchers.delete(w)}function ja(w){let z=(me.get(w)||0)-1;z<=0?(me.delete(w),ge.add(w)):me.set(w,z),lt({fetchers:new Map(M.fetchers)})}function Wt(w,z){let T=$.get(w);T&&(T.abort(z),$.delete(w))}function Ea(w){for(let z of w){let T=Mn(z),W=Ln(T.data);M.fetchers.set(z,W)}}function Hr(){let w=[],z=!1;for(let T of P){let W=M.fetchers.get(T);Ae(W,`Expected fetcher: ${T}`),W.state==="loading"&&(P.delete(T),w.push(T),z=!0)}return Ea(w),z}function Or(w){let z=[];for(let[T,W]of A)if(W<w){let Y=M.fetchers.get(T);Ae(Y,`Expected fetcher: ${T}`),Y.state==="loading"&&(Wt(T),A.delete(T),z.push(T))}return Ea(z),z.length>0}function yi(w,z){let T=M.blockers.get(w)||ra;return ke.get(w)!==z&&ke.set(w,z),T}function Wr(w){M.blockers.delete(w),ke.delete(w)}function Dn(w,z){let T=M.blockers.get(w)||ra;Ae(T.state==="unblocked"&&z.state==="blocked"||T.state==="blocked"&&z.state==="blocked"||T.state==="blocked"&&z.state==="proceeding"||T.state==="blocked"&&z.state==="unblocked"||T.state==="proceeding"&&z.state==="unblocked",`Invalid blocker state transition: ${T.state} -> ${z.state}`);let W=new Map(M.blockers);W.set(w,z),lt({blockers:W})}function yn({currentLocation:w,nextLocation:z,historyAction:T}){if(ke.size===0)return;ke.size>1&&at(!1,"A router only supports one blocker at a time");let W=Array.from(ke.entries()),[Y,oe]=W[W.length-1],ce=M.blockers.get(Y);if(!(ce&&ce.state==="proceeding")&&oe({currentLocation:w,nextLocation:z,historyAction:T}))return Y}function dn(w){let z=Kt(404,{pathname:w}),T=x||m,{matches:W,route:Y}=Lo(T);return{notFoundMatches:W,route:Y,error:z}}function Sa(w,z,T){if(B=w,_=z,D=T||null,!Q&&M.navigation===Ts){Q=!0;let W=wi(M.location,M.matches);W!=null&&lt({restoreScrollPosition:W})}return()=>{B=null,_=null,D=null}}function bi(w,z){return D&&D(w,z.map(W=>Ag(W,M.loaderData)))||w.key}function Fa(w,z){if(B&&_){let T=bi(w,z);B[T]=_()}}function wi(w,z){if(B){let T=bi(w,z),W=B[T];if(typeof W=="number")return W}return null}function gr(w,z,T){if(i.patchRoutesOnNavigation)if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:sa(z,T,v,!0)}}else return{active:!0,matches:sa(z,T,v,!0)||[]};return{active:!1,matches:null}}async function Bn(w,z,T,W){if(!i.patchRoutesOnNavigation)return{type:"success",matches:w};let Y=w;for(;;){let oe=x==null,ce=x||m,J=h;try{await i.patchRoutesOnNavigation({signal:T,path:z,matches:Y,fetcherKey:W,patch:(be,se)=>{T.aborted||Xu(be,se,ce,J,f,!1)}})}catch(be){return{type:"error",error:be,partialMatches:Y}}finally{oe&&!T.aborted&&(m=[...m])}if(T.aborted)return{type:"aborted"};let ne=or(ce,z,v),ie=null;if(ne){if(Object.keys(ne[0].params).length===0)return{type:"success",matches:ne};if(ie=sa(ce,z,v,!0),!(ie&&Y.length<ie.length&&ki(Y,ie.slice(0,Y.length))))return{type:"success",matches:ne}}if(ie||(ie=sa(ce,z,v,!0)),!ie||ki(Y,ie))return{type:"success",matches:null};Y=ie}}function ki(w,z){return w.length===z.length&&w.every((T,W)=>T.route.id===z[W].route.id)}function hr(w){h={},x=ua(w,f,void 0,h)}function Ci(w,z,T=!1){let W=x==null;Xu(w,z,x||m,h,f,T),W&&(m=[...m],lt({}))}return Ee={get basename(){return v},get future(){return b},get state(){return M},get routes(){return m},get window(){return o},initialize:Ve,subscribe:Br,enableScrollRestoration:Sa,navigate:Pr,fetch:Tn,revalidate:wa,createHref:w=>i.history.createHref(w),encodeLocation:w=>i.history.encodeLocation(w),getFetcher:Mn,resetFetcher:fr,deleteFetcher:ja,dispose:wt,getBlocker:yi,deleteBlocker:Wr,patchRoutes:Ci,_internalFetchControllers:$,_internalSetRoutes:hr,_internalSetStateDoNotUseOrYouWillBreakYourApp(w){lt(w)}},i.unstable_instrumentations&&(Ee=Yg(Ee,i.unstable_instrumentations.map(w=>w.router).filter(Boolean))),Ee}function ah(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function Os(i,o,s,p,u,f){let h,m;if(u){h=[];for(let v of o)if(h.push(v),v.route.id===u){m=v;break}}else h=o,m=o[o.length-1];let x=Ks(p||".",Zs(h),Qt(i.pathname,s)||i.pathname,f==="path");if(p==null&&(x.search=i.search,x.hash=i.hash),(p==null||p===""||p===".")&&m){let v=Js(x.search);if(m.route.index&&!v)x.search=x.search?x.search.replace(/^\?/,"?index&"):"?index";else if(!m.route.index&&v){let C=new URLSearchParams(x.search),b=C.getAll("index");C.delete("index"),b.filter(E=>E).forEach(E=>C.append("index",E));let F=C.toString();x.search=F?`?${F}`:""}}return s!=="/"&&(x.pathname=Og({basename:s,pathname:x.pathname})),xn(x)}function Ku(i,o,s){if(!s||!ah(s))return{path:o};if(s.formMethod&&!jh(s.formMethod))return{path:o,error:Kt(405,{method:s.formMethod})};let p=()=>({path:o,error:Kt(400,{type:"invalid-body"})}),f=(s.formMethod||"get").toUpperCase(),h=Zp(o);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!bt(f))return p();let b=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((F,[E,B])=>`${F}${E}=${B}
`,""):String(s.body);return{path:o,submission:{formMethod:f,formAction:h,formEncType:s.formEncType,formData:void 0,json:void 0,text:b}}}else if(s.formEncType==="application/json"){if(!bt(f))return p();try{let b=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:o,submission:{formMethod:f,formAction:h,formEncType:s.formEncType,formData:void 0,json:b,text:void 0}}}catch{return p()}}}Ae(typeof FormData=="function","FormData is not available in this environment");let m,x;if(s.formData)m=$s(s.formData),x=s.formData;else if(s.body instanceof FormData)m=$s(s.body),x=s.body;else if(s.body instanceof URLSearchParams)m=s.body,x=rp(m);else if(s.body==null)m=new URLSearchParams,x=new FormData;else try{m=new URLSearchParams(s.body),x=rp(m)}catch{return p()}let v={formMethod:f,formAction:h,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:x,json:void 0,text:void 0};if(bt(v.formMethod))return{path:o,submission:v};let C=cr(o);return i&&C.search&&Js(C.search)&&m.append("index",""),C.search=`?${m}`,{path:xn(C),submission:v}}function Qu(i,o,s,p,u,f,h,m,x,v,C,b,F,E,B,D,_,Q,H,K,he){var qe;let xe=K?Ht(K[1])?K[1].error:K[1].data:void 0,Ee=u.createURL(f.location),M=u.createURL(x),de;if(C&&f.errors){let je=Object.keys(f.errors)[0];de=h.findIndex(we=>we.route.id===je)}else if(K&&Ht(K[1])){let je=K[0];de=h.findIndex(we=>we.route.id===je)-1}let ve=K?K[1].statusCode:void 0,Se=ve&&ve>=400,Ne={currentUrl:Ee,currentParams:((qe=f.matches[0])==null?void 0:qe.params)||{},nextUrl:M,nextParams:h[0].params,...m,actionResult:xe,actionStatus:ve},Pe=xa(h),Ue=h.map((je,we)=>{let{route:$}=je,te=null;if(de!=null&&we>de?te=!1:$.lazy?te=!0:Qs($)?C?te=Ws($,f.loaderData,f.errors):oh(f.loaderData,f.matches[we],je)&&(te=!0):te=!1,te!==null)return Vs(s,p,i,Pe,je,v,o,te);let Z=!1;typeof he=="boolean"?Z=he:Se?Z=!1:(b||Ee.pathname+Ee.search===M.pathname+M.search||Ee.search!==M.search||lh(f.matches[we],je))&&(Z=!0);let A={...Ne,defaultShouldRevalidate:Z},P=da(je,A);return Vs(s,p,i,Pe,je,v,o,P,A,he)}),Me=[];return B.forEach((je,we)=>{if(C||!h.some(ge=>ge.route.id===je.routeId)||E.has(we))return;let $=f.fetchers.get(we),te=$&&$.state!=="idle"&&$.data===void 0,Z=or(_,je.path,Q);if(!Z){if(H&&te)return;Me.push({key:we,routeId:je.routeId,path:je.path,matches:null,match:null,request:null,controller:null});return}if(D.has(we))return;let A=Bo(Z,je.path),P=new AbortController,fe=ui(u,je.path,P.signal),me=null;if(F.has(we))F.delete(we),me=fi(s,p,fe,Z,A,v,o);else if(te)b&&(me=fi(s,p,fe,Z,A,v,o));else{let ge;typeof he=="boolean"?ge=he:Se?ge=!1:ge=b;let ke={...Ne,defaultShouldRevalidate:ge};da(A,ke)&&(me=fi(s,p,fe,Z,A,v,o,ke))}me&&Me.push({key:we,routeId:je.routeId,path:je.path,matches:me,match:A,request:fe,controller:P})}),{dsMatches:Ue,revalidatingFetchers:Me}}function Qs(i){return i.loader!=null||i.middleware!=null&&i.middleware.length>0}function Ws(i,o,s){if(i.lazy)return!0;if(!Qs(i))return!1;let p=o!=null&&i.id in o,u=s!=null&&s[i.id]!==void 0;return!p&&u?!1:typeof i.loader=="function"&&i.loader.hydrate===!0?!0:!p&&!u}function oh(i,o,s){let p=!o||s.route.id!==o.route.id,u=!i.hasOwnProperty(s.route.id);return p||u}function lh(i,o){let s=i.route.path;return i.pathname!==o.pathname||s!=null&&s.endsWith("*")&&i.params["*"]!==o.params["*"]}function da(i,o){if(i.route.shouldRevalidate){let s=i.route.shouldRevalidate(o);if(typeof s=="boolean")return s}return o.defaultShouldRevalidate}function Xu(i,o,s,p,u,f){let h;if(i){let v=p[i];Ae(v,`No route found to patch children into: routeId = ${i}`),v.children||(v.children=[]),h=v.children}else h=s;let m=[],x=[];if(o.forEach(v=>{let C=h.find(b=>$p(v,b));C?x.push({existingRoute:C,newRoute:v}):m.push(v)}),m.length>0){let v=ua(m,u,[i||"_","patch",String((h==null?void 0:h.length)||"0")],p);h.push(...v)}if(f&&x.length>0)for(let v=0;v<x.length;v++){let{existingRoute:C,newRoute:b}=x[v],F=C,[E]=ua([b],u,[],{},!0);Object.assign(F,{element:E.element?E.element:F.element,errorElement:E.errorElement?E.errorElement:F.errorElement,hydrateFallbackElement:E.hydrateFallbackElement?E.hydrateFallbackElement:F.hydrateFallbackElement})}}function $p(i,o){return"id"in i&&"id"in o&&i.id===o.id?!0:i.index===o.index&&i.path===o.path&&i.caseSensitive===o.caseSensitive?(!i.children||i.children.length===0)&&(!o.children||o.children.length===0)?!0:i.children.every((s,p)=>{var u;return(u=o.children)==null?void 0:u.some(f=>$p(s,f))}):!1}var Ju=new WeakMap,Up=({key:i,route:o,manifest:s,mapRouteProperties:p})=>{let u=s[o.id];if(Ae(u,"No route found in manifest"),!u.lazy||typeof u.lazy!="object")return;let f=u.lazy[i];if(!f)return;let h=Ju.get(u);h||(h={},Ju.set(u,h));let m=h[i];if(m)return m;let x=(async()=>{let v=jg(i),b=u[i]!==void 0&&i!=="hasErrorBoundary";if(v)at(!v,"Route property "+i+" is not a supported lazy route property. This property will be ignored."),h[i]=Promise.resolve();else if(b)at(!1,`Route "${u.id}" has a static property "${i}" defined. The lazy property will be ignored.`);else{let F=await f();F!=null&&(Object.assign(u,{[i]:F}),Object.assign(u,p(u)))}typeof u.lazy=="object"&&(u.lazy[i]=void 0,Object.values(u.lazy).every(F=>F===void 0)&&(u.lazy=void 0))})();return h[i]=x,x},ep=new WeakMap;function sh(i,o,s,p,u){let f=s[i.id];if(Ae(f,"No route found in manifest"),!i.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof i.lazy=="function"){let C=ep.get(f);if(C)return{lazyRoutePromise:C,lazyHandlerPromise:C};let b=(async()=>{Ae(typeof i.lazy=="function","No lazy route function found");let F=await i.lazy(),E={};for(let B in F){let D=F[B];if(D===void 0)continue;let _=Sg(B),H=f[B]!==void 0&&B!=="hasErrorBoundary";_?at(!_,"Route property "+B+" is not a supported property to be returned from a lazy route function. This property will be ignored."):H?at(!H,`Route "${f.id}" has a static property "${B}" defined but its lazy function is also returning a value for this property. The lazy route property "${B}" will be ignored.`):E[B]=D}Object.assign(f,E),Object.assign(f,{...p(f),lazy:void 0})})();return ep.set(f,b),b.catch(()=>{}),{lazyRoutePromise:b,lazyHandlerPromise:b}}let h=Object.keys(i.lazy),m=[],x;for(let C of h){if(u&&u.includes(C))continue;let b=Up({key:C,route:i,manifest:s,mapRouteProperties:p});b&&(m.push(b),C===o&&(x=b))}let v=m.length>0?Promise.all(m).then(()=>{}):void 0;return v==null||v.catch(()=>{}),x==null||x.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:x}}async function tp(i){let o=i.matches.filter(u=>u.shouldLoad),s={};return(await Promise.all(o.map(u=>u.resolve()))).forEach((u,f)=>{s[o[f].route.id]=u}),s}async function dh(i){return i.matches.some(o=>o.route.middleware)?Gp(i,()=>tp(i)):tp(i)}function Gp(i,o){return ch(i,o,p=>{if(Ch(p))throw p;return p},yh,s);function s(p,u,f){if(f)return Promise.resolve(Object.assign(f.value,{[u]:{type:"error",result:p}}));{let{matches:h}=i,m=Math.min(Math.max(h.findIndex(v=>v.route.id===u),0),Math.max(h.findIndex(v=>v.shouldCallHandler()),0)),x=lr(h,h[m].route.id).route.id;return Promise.resolve({[x]:{type:"error",result:p}})}}}async function ch(i,o,s,p,u){let{matches:f,request:h,params:m,context:x,unstable_pattern:v}=i,C=f.flatMap(F=>F.route.middleware?F.route.middleware.map(E=>[F.route.id,E]):[]);return await Yp({request:h,params:m,context:x,unstable_pattern:v},C,o,s,p,u)}async function Yp(i,o,s,p,u,f,h=0){let{request:m}=i;if(m.signal.aborted)throw m.signal.reason??new Error(`Request aborted: ${m.method} ${m.url}`);let x=o[h];if(!x)return await s();let[v,C]=x,b,F=async()=>{if(b)throw new Error("You may only call `next()` once per middleware");try{return b={value:await Yp(i,o,s,p,u,f,h+1)},b.value}catch(E){return b={value:await f(E,v,b)},b.value}};try{let E=await C(i,F),B=E!=null?p(E):void 0;return u(B)?B:b?B??b.value:(b={value:await F()},b.value)}catch(E){return await f(E,v,b)}}function qp(i,o,s,p,u){let f=Up({key:"middleware",route:p.route,manifest:o,mapRouteProperties:i}),h=sh(p.route,bt(s.method)?"action":"loader",o,i,u);return{middleware:f,route:h.lazyRoutePromise,handler:h.lazyHandlerPromise}}function Vs(i,o,s,p,u,f,h,m,x=null,v){let C=!1,b=qp(i,o,s,u,f);return{...u,_lazyPromises:b,shouldLoad:m,shouldRevalidateArgs:x,shouldCallHandler(F){return C=!0,x?typeof v=="boolean"?da(u,{...x,defaultShouldRevalidate:v}):typeof F=="boolean"?da(u,{...x,defaultShouldRevalidate:F}):da(u,x):m},resolve(F){let{lazy:E,loader:B,middleware:D}=u.route,_=C||m||F&&!bt(s.method)&&(E||B),Q=D&&D.length>0&&!B&&!E;return _&&(bt(s.method)||!Q)?ph({request:s,unstable_pattern:p,match:u,lazyHandlerPromise:b==null?void 0:b.handler,lazyRoutePromise:b==null?void 0:b.route,handlerOverride:F,scopedContext:h}):Promise.resolve({type:"data",result:void 0})}}}function fi(i,o,s,p,u,f,h,m=null){return p.map(x=>x.route.id!==u.route.id?{...x,shouldLoad:!1,shouldRevalidateArgs:m,shouldCallHandler:()=>!1,_lazyPromises:qp(i,o,s,x,f),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Vs(i,o,s,xa(p),x,f,h,!0,m))}async function uh(i,o,s,p,u,f){s.some(v=>{var C;return(C=v._lazyPromises)==null?void 0:C.middleware})&&await Promise.all(s.map(v=>{var C;return(C=v._lazyPromises)==null?void 0:C.middleware}));let h={request:o,unstable_pattern:xa(s),params:s[0].params,context:u,matches:s},x=await i({...h,fetcherKey:p,runClientMiddleware:v=>{let C=h;return Gp(C,()=>v({...C,fetcherKey:p,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(s.flatMap(v=>{var C,b;return[(C=v._lazyPromises)==null?void 0:C.handler,(b=v._lazyPromises)==null?void 0:b.route]}))}catch{}return x}async function ph({request:i,unstable_pattern:o,match:s,lazyHandlerPromise:p,lazyRoutePromise:u,handlerOverride:f,scopedContext:h}){let m,x,v=bt(i.method),C=v?"action":"loader",b=F=>{let E,B=new Promise((Q,H)=>E=H);x=()=>E(),i.signal.addEventListener("abort",x);let D=Q=>typeof F!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${C}" [routeId: ${s.route.id}]`)):F({request:i,unstable_pattern:o,params:s.params,context:h},...Q!==void 0?[Q]:[]),_=(async()=>{try{return{type:"data",result:await(f?f(H=>D(H)):D())}}catch(Q){return{type:"error",result:Q}}})();return Promise.race([_,B])};try{let F=v?s.route.action:s.route.loader;if(p||u)if(F){let E,[B]=await Promise.all([b(F).catch(D=>{E=D}),p,u]);if(E!==void 0)throw E;m=B}else{await p;let E=v?s.route.action:s.route.loader;if(E)[m]=await Promise.all([b(E),u]);else if(C==="action"){let B=new URL(i.url),D=B.pathname+B.search;throw Kt(405,{method:i.method,pathname:D,routeId:s.route.id})}else return{type:"data",result:void 0}}else if(F)m=await b(F);else{let E=new URL(i.url),B=E.pathname+E.search;throw Kt(404,{pathname:B})}}catch(F){return{type:"error",result:F}}finally{x&&i.signal.removeEventListener("abort",x)}return m}async function fh(i){let o=i.headers.get("Content-Type");return o&&/\bapplication\/json\b/.test(o)?i.body==null?null:i.json():i.text()}async function gh(i){var p,u,f,h,m;let{result:o,type:s}=i;if(Xs(o)){let x;try{x=await fh(o)}catch(v){return{type:"error",error:v}}return s==="error"?{type:"error",error:new ma(o.status,o.statusText,x),statusCode:o.status,headers:o.headers}:{type:"data",data:x,statusCode:o.status,headers:o.headers}}return s==="error"?lp(o)?o.data instanceof Error?{type:"error",error:o.data,statusCode:(p=o.init)==null?void 0:p.status,headers:(u=o.init)!=null&&u.headers?new Headers(o.init.headers):void 0}:{type:"error",error:vh(o),statusCode:pa(o)?o.status:void 0,headers:(f=o.init)!=null&&f.headers?new Headers(o.init.headers):void 0}:{type:"error",error:o,statusCode:pa(o)?o.status:void 0}:lp(o)?{type:"data",data:o.data,statusCode:(h=o.init)==null?void 0:h.status,headers:(m=o.init)!=null&&m.headers?new Headers(o.init.headers):void 0}:{type:"data",data:o}}function hh(i,o,s,p,u){let f=i.headers.get("Location");if(Ae(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!qs(f)){let h=p.slice(0,p.findIndex(m=>m.route.id===s)+1);f=Os(new URL(o.url),h,u,f),i.headers.set("Location",f)}return i}function np(i,o,s,p){let u=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(qs(i)){let f=i,h=f.startsWith("//")?new URL(o.protocol+f):new URL(f);if(u.includes(h.protocol))throw new Error("Invalid redirect location");let m=Qt(h.pathname,s)!=null;if(h.origin===o.origin&&m)return h.pathname+h.search+h.hash}try{let f=p.createURL(i);if(u.includes(f.protocol))throw new Error("Invalid redirect location")}catch{}return i}function ui(i,o,s,p){let u=i.createURL(Zp(o)).toString(),f={signal:s};if(p&&bt(p.formMethod)){let{formMethod:h,formEncType:m}=p;f.method=h.toUpperCase(),m==="application/json"?(f.headers=new Headers({"Content-Type":m}),f.body=JSON.stringify(p.json)):m==="text/plain"?f.body=p.text:m==="application/x-www-form-urlencoded"&&p.formData?f.body=$s(p.formData):f.body=p.formData}return new Request(u,f)}function $s(i){let o=new URLSearchParams;for(let[s,p]of i.entries())o.append(s,typeof p=="string"?p:p.name);return o}function rp(i){let o=new FormData;for(let[s,p]of i.entries())o.append(s,p);return o}function mh(i,o,s,p=!1,u=!1){let f={},h=null,m,x=!1,v={},C=s&&Ht(s[1])?s[1].error:void 0;return i.forEach(b=>{if(!(b.route.id in o))return;let F=b.route.id,E=o[F];if(Ae(!Rr(E),"Cannot handle redirect results in processLoaderData"),Ht(E)){let B=E.error;if(C!==void 0&&(B=C,C=void 0),h=h||{},u)h[F]=B;else{let D=lr(i,F);h[D.route.id]==null&&(h[D.route.id]=B)}p||(f[F]=Vp),x||(x=!0,m=pa(E.error)?E.error.status:500),E.headers&&(v[F]=E.headers)}else f[F]=E.data,E.statusCode&&E.statusCode!==200&&!x&&(m=E.statusCode),E.headers&&(v[F]=E.headers)}),C!==void 0&&s&&(h={[s[0]]:C},s[2]&&(f[s[2]]=void 0)),{loaderData:f,errors:h,statusCode:m||200,loaderHeaders:v}}function ip(i,o,s,p,u,f){let{loaderData:h,errors:m}=mh(o,s,p);return u.filter(x=>!x.matches||x.matches.some(v=>v.shouldLoad)).forEach(x=>{let{key:v,match:C,controller:b}=x;if(b&&b.signal.aborted)return;let F=f[v];if(Ae(F,"Did not find corresponding fetcher result"),Ht(F)){let E=lr(i.matches,C==null?void 0:C.route.id);m&&m[E.route.id]||(m={...m,[E.route.id]:F.error}),i.fetchers.delete(v)}else if(Rr(F))Ae(!1,"Unhandled fetcher revalidation redirect");else{let E=Ln(F.data);i.fetchers.set(v,E)}}),{loaderData:h,errors:m}}function ap(i,o,s,p){let u=Object.entries(o).filter(([,f])=>f!==Vp).reduce((f,[h,m])=>(f[h]=m,f),{});for(let f of s){let h=f.route.id;if(!o.hasOwnProperty(h)&&i.hasOwnProperty(h)&&f.route.loader&&(u[h]=i[h]),p&&p.hasOwnProperty(h))break}return u}function op(i){return i?Ht(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function lr(i,o){return(o?i.slice(0,i.findIndex(p=>p.route.id===o)+1):[...i]).reverse().find(p=>p.route.hasErrorBoundary===!0)||i[0]}function Lo(i){let o=i.length===1?i[0]:i.find(s=>s.index||!s.path||s.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:o}],route:o}}function Kt(i,{pathname:o,routeId:s,method:p,type:u,message:f}={}){let h="Unknown Server Error",m="Unknown @remix-run/router error";return i===400?(h="Bad Request",p&&o&&s?m=`You made a ${p} request to "${o}" but did not provide a \`loader\` for route "${s}", so there is no way to handle the request.`:u==="invalid-body"&&(m="Unable to encode submission body")):i===403?(h="Forbidden",m=`Route "${s}" does not match URL "${o}"`):i===404?(h="Not Found",m=`No route matches URL "${o}"`):i===405&&(h="Method Not Allowed",p&&o&&s?m=`You made a ${p.toUpperCase()} request to "${o}" but did not provide an \`action\` for route "${s}", so there is no way to handle the request.`:p&&(m=`Invalid request method "${p.toUpperCase()}"`)),new ma(i||500,h,new Error(m),!0)}function No(i){let o=Object.entries(i);for(let s=o.length-1;s>=0;s--){let[p,u]=o[s];if(Rr(u))return{key:p,result:u}}}function Zp(i){let o=typeof i=="string"?cr(i):i;return xn({...o,hash:""})}function xh(i,o){return i.pathname!==o.pathname||i.search!==o.search?!1:i.hash===""?o.hash!=="":i.hash===o.hash?!0:o.hash!==""}function vh(i){var o,s;return new ma(((o=i.init)==null?void 0:o.status)??500,((s=i.init)==null?void 0:s.statusText)??"Internal Server Error",i.data)}function yh(i){return i!=null&&typeof i=="object"&&Object.entries(i).every(([o,s])=>typeof o=="string"&&bh(s))}function bh(i){return i!=null&&typeof i=="object"&&"type"in i&&"result"in i&&(i.type==="data"||i.type==="error")}function wh(i){return Xs(i.result)&&Op.has(i.result.status)}function Ht(i){return i.type==="error"}function Rr(i){return(i&&i.type)==="redirect"}function lp(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function Xs(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function kh(i){return Op.has(i)}function Ch(i){return Xs(i)&&kh(i.status)&&i.headers.has("Location")}function jh(i){return eh.has(i.toUpperCase())}function bt(i){return Xg.has(i.toUpperCase())}function Js(i){return new URLSearchParams(i).getAll("index").some(o=>o==="")}function Bo(i,o){let s=typeof o=="string"?cr(o).search:o.search;if(i[i.length-1].route.index&&Js(s||""))return i[i.length-1];let p=Dp(i);return p[p.length-1]}function sp(i){let{formMethod:o,formAction:s,formEncType:p,text:u,formData:f,json:h}=i;if(!(!o||!s||!p)){if(u!=null)return{formMethod:o,formAction:s,formEncType:p,formData:void 0,json:void 0,text:u};if(f!=null)return{formMethod:o,formAction:s,formEncType:p,formData:f,json:void 0,text:void 0};if(h!==void 0)return{formMethod:o,formAction:s,formEncType:p,formData:void 0,json:h,text:void 0}}}function Rs(i,o){return o?{state:"loading",location:i,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Eh(i,o){return{state:"submitting",location:i,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}}function ia(i,o){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:o}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:o}}function Sh(i,o){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:o?o.data:void 0}}function Ln(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function Fh(i,o){try{let s=i.sessionStorage.getItem(Wp);if(s){let p=JSON.parse(s);for(let[u,f]of Object.entries(p||{}))f&&Array.isArray(f)&&o.set(u,new Set(f||[]))}}catch{}}function Ah(i,o){if(o.size>0){let s={};for(let[p,u]of o)s[p]=[...u];try{i.sessionStorage.setItem(Wp,JSON.stringify(s))}catch(p){at(!1,`Failed to save applied view transitions in sessionStorage (${p}).`)}}}function dp(){let i,o,s=new Promise((p,u)=>{i=async f=>{p(f);try{await s}catch{}},o=async f=>{u(f);try{await s}catch{}}});return{promise:s,resolve:i,reject:o}}var Mr=I.createContext(null);Mr.displayName="DataRouter";var va=I.createContext(null);va.displayName="DataRouterState";var Kp=I.createContext(!1);function zh(){return I.useContext(Kp)}var ed=I.createContext({isTransitioning:!1});ed.displayName="ViewTransition";var Qp=I.createContext(new Map);Qp.displayName="Fetchers";var Ih=I.createContext(null);Ih.displayName="Await";var Xt=I.createContext(null);Xt.displayName="Navigation";var $o=I.createContext(null);$o.displayName="Location";var vn=I.createContext({outlet:null,matches:[],isDataRoute:!1});vn.displayName="Route";var td=I.createContext(null);td.displayName="RouteError";var Xp="REACT_ROUTER_ERROR",Lh="REDIRECT",Nh="ROUTE_ERROR_RESPONSE";function Th(i){if(i.startsWith(`${Xp}:${Lh}:{`))try{let o=JSON.parse(i.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Rh(i){if(i.startsWith(`${Xp}:${Nh}:{`))try{let o=JSON.parse(i.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new ma(o.status,o.statusText,o.data)}catch{}}function Mh(i,{relative:o}={}){Ae(ya(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:p}=I.useContext(Xt),{hash:u,pathname:f,search:h}=ba(i,{relative:o}),m=f;return s!=="/"&&(m=f==="/"?s:mn([s,f])),p.createHref({pathname:m,search:h,hash:u})}function ya(){return I.useContext($o)!=null}function Dr(){return Ae(ya(),"useLocation() may be used only in the context of a <Router> component."),I.useContext($o).location}var Jp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ef(i){I.useContext(Xt).static||I.useLayoutEffect(i)}function Nn(){let{isDataRoute:i}=I.useContext(vn);return i?Kh():Dh()}function Dh(){Ae(ya(),"useNavigate() may be used only in the context of a <Router> component.");let i=I.useContext(Mr),{basename:o,navigator:s}=I.useContext(Xt),{matches:p}=I.useContext(vn),{pathname:u}=Dr(),f=JSON.stringify(Zs(p)),h=I.useRef(!1);return ef(()=>{h.current=!0}),I.useCallback((x,v={})=>{if(at(h.current,Jp),!h.current)return;if(typeof x=="number"){s.go(x);return}let C=Ks(x,JSON.parse(f),u,v.relative==="path");i==null&&o!=="/"&&(C.pathname=C.pathname==="/"?o:mn([o,C.pathname])),(v.replace?s.replace:s.push)(C,v.state,v)},[o,s,f,u,i])}var Bh=I.createContext(null);function Ph(i){let o=I.useContext(vn).outlet;return I.useMemo(()=>o&&I.createElement(Bh.Provider,{value:i},o),[o,i])}function ba(i,{relative:o}={}){let{matches:s}=I.useContext(vn),{pathname:p}=Dr(),u=JSON.stringify(Zs(s));return I.useMemo(()=>Ks(i,JSON.parse(u),p,o==="path"),[i,u,p,o])}function _h(i,o,s,p,u){Ae(ya(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=I.useContext(Xt),{matches:h}=I.useContext(vn),m=h[h.length-1],x=m?m.params:{},v=m?m.pathname:"/",C=m?m.pathnameBase:"/",b=m&&m.route;{let H=b&&b.path||"";nf(v,!b||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let F=Dr(),E;E=F;let B=E.pathname||"/",D=B;if(C!=="/"){let H=C.replace(/^\//,"").split("/");D="/"+B.replace(/^\//,"").split("/").slice(H.length).join("/")}let _=or(i,{pathname:D});return at(b||_!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),at(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),$h(_&&_.map(H=>Object.assign({},H,{params:Object.assign({},x,H.params),pathname:mn([C,f.encodeLocation?f.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?C:mn([C,f.encodeLocation?f.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),h,s,p,u)}function Hh(){let i=Zh(),o=pa(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,p="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:p},f={padding:"2px 4px",backgroundColor:p},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=I.createElement(I.Fragment,null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:f},"ErrorBoundary")," or"," ",I.createElement("code",{style:f},"errorElement")," prop on your route.")),I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},o),s?I.createElement("pre",{style:u},s):null,h)}var Oh=I.createElement(Hh,null),tf=class extends I.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){this.props.onError?this.props.onError(i,o):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const s=Rh(i.digest);s&&(i=s)}let o=i!==void 0?I.createElement(vn.Provider,{value:this.props.routeContext},I.createElement(td.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?I.createElement(Wh,{error:i},o):o}};tf.contextType=Kp;var Ms=new WeakMap;function Wh({children:i,error:o}){let{basename:s}=I.useContext(Xt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let p=Th(o.digest);if(p){let u=Ms.get(o);if(u)throw u;let f=Pp(p.location,s);if(Bp&&!Ms.get(o))if(f.isExternal||p.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:p.replace}));throw Ms.set(o,h),h}return I.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return i}function Vh({routeContext:i,match:o,children:s}){let p=I.useContext(Mr);return p&&p.static&&p.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=o.route.id),I.createElement(vn.Provider,{value:i},s)}function $h(i,o=[],s=null,p=null,u=null){if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let f=i,h=s==null?void 0:s.errors;if(h!=null){let C=f.findIndex(b=>b.route.id&&(h==null?void 0:h[b.route.id])!==void 0);Ae(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,C+1))}let m=!1,x=-1;if(s)for(let C=0;C<f.length;C++){let b=f[C];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(x=C),b.route.id){let{loaderData:F,errors:E}=s,B=b.route.loader&&!F.hasOwnProperty(b.route.id)&&(!E||E[b.route.id]===void 0);if(b.route.lazy||B){m=!0,x>=0?f=f.slice(0,x+1):f=[f[0]];break}}}let v=s&&p?(C,b)=>{var F,E;p(C,{location:s.location,params:((E=(F=s.matches)==null?void 0:F[0])==null?void 0:E.params)??{},unstable_pattern:xa(s.matches),errorInfo:b})}:void 0;return f.reduceRight((C,b,F)=>{let E,B=!1,D=null,_=null;s&&(E=h&&b.route.id?h[b.route.id]:void 0,D=b.route.errorElement||Oh,m&&(x<0&&F===0?(nf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,_=null):x===F&&(B=!0,_=b.route.hydrateFallbackElement||null)));let Q=o.concat(f.slice(0,F+1)),H=()=>{let K;return E?K=D:B?K=_:b.route.Component?K=I.createElement(b.route.Component,null):b.route.element?K=b.route.element:K=C,I.createElement(Vh,{match:b,routeContext:{outlet:C,matches:Q,isDataRoute:s!=null},children:K})};return s&&(b.route.ErrorBoundary||b.route.errorElement||F===0)?I.createElement(tf,{location:s.location,revalidation:s.revalidation,component:D,error:E,children:H(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:v}):H()},null)}function nd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uh(i){let o=I.useContext(Mr);return Ae(o,nd(i)),o}function Gh(i){let o=I.useContext(va);return Ae(o,nd(i)),o}function Yh(i){let o=I.useContext(vn);return Ae(o,nd(i)),o}function rd(i){let o=Yh(i),s=o.matches[o.matches.length-1];return Ae(s.route.id,`${i} can only be used on routes that contain a unique "id"`),s.route.id}function qh(){return rd("useRouteId")}function Zh(){var p;let i=I.useContext(td),o=Gh("useRouteError"),s=rd("useRouteError");return i!==void 0?i:(p=o.errors)==null?void 0:p[s]}function Kh(){let{router:i}=Uh("useNavigate"),o=rd("useNavigate"),s=I.useRef(!1);return ef(()=>{s.current=!0}),I.useCallback(async(u,f={})=>{at(s.current,Jp),s.current&&(typeof u=="number"?await i.navigate(u):await i.navigate(u,{fromRouteId:o,...f}))},[i,o])}var cp={};function nf(i,o,s){!o&&!cp[i]&&(cp[i]=!0,at(!1,s))}var up={};function pp(i,o){!i&&!up[o]&&(up[o]=!0,console.warn(o))}var Qh="useOptimistic",fp=xg[Qh],Xh=()=>{};function Jh(i){return fp?fp(i):[i,Xh]}function em(i){let o={hasErrorBoundary:i.hasErrorBoundary||i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&(i.element&&at(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(o,{element:I.createElement(i.Component),Component:void 0})),i.HydrateFallback&&(i.hydrateFallbackElement&&at(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(o,{hydrateFallbackElement:I.createElement(i.HydrateFallback),HydrateFallback:void 0})),i.ErrorBoundary&&(i.errorElement&&at(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(o,{errorElement:I.createElement(i.ErrorBoundary),ErrorBoundary:void 0})),o}var tm=["HydrateFallback","hydrateFallbackElement"],nm=class{constructor(){this.status="pending",this.promise=new Promise((i,o)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",i(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",o(s))}})}};function rm({router:i,flushSync:o,onError:s,unstable_useTransitions:p}){p=zh()||p;let[f,h]=I.useState(i.state),[m,x]=Jh(f),[v,C]=I.useState(),[b,F]=I.useState({isTransitioning:!1}),[E,B]=I.useState(),[D,_]=I.useState(),[Q,H]=I.useState(),K=I.useRef(new Map),he=I.useCallback((de,{deletedFetchers:ve,newErrors:Se,flushSync:Ne,viewTransitionOpts:Pe})=>{Se&&s&&Object.values(Se).forEach(Me=>{var qe;return s(Me,{location:de.location,params:((qe=de.matches[0])==null?void 0:qe.params)??{},unstable_pattern:xa(de.matches)})}),de.fetchers.forEach((Me,qe)=>{Me.data!==void 0&&K.current.set(qe,Me.data)}),ve.forEach(Me=>K.current.delete(Me)),pp(Ne===!1||o!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ue=i.window!=null&&i.window.document!=null&&typeof i.window.document.startViewTransition=="function";if(pp(Pe==null||Ue,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Pe||!Ue){o&&Ne?o(()=>h(de)):p===!1?h(de):I.startTransition(()=>{p===!0&&x(Me=>gp(Me,de)),h(de)});return}if(o&&Ne){o(()=>{D&&(E==null||E.resolve(),D.skipTransition()),F({isTransitioning:!0,flushSync:!0,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation})});let Me=i.window.document.startViewTransition(()=>{o(()=>h(de))});Me.finished.finally(()=>{o(()=>{B(void 0),_(void 0),C(void 0),F({isTransitioning:!1})})}),o(()=>_(Me));return}D?(E==null||E.resolve(),D.skipTransition(),H({state:de,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation})):(C(de),F({isTransitioning:!0,flushSync:!1,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation}))},[i.window,o,D,E,p,x,s]);I.useLayoutEffect(()=>i.subscribe(he),[i,he]),I.useEffect(()=>{b.isTransitioning&&!b.flushSync&&B(new nm)},[b]),I.useEffect(()=>{if(E&&v&&i.window){let de=v,ve=E.promise,Se=i.window.document.startViewTransition(async()=>{p===!1?h(de):I.startTransition(()=>{p===!0&&x(Ne=>gp(Ne,de)),h(de)}),await ve});Se.finished.finally(()=>{B(void 0),_(void 0),C(void 0),F({isTransitioning:!1})}),_(Se)}},[v,E,i.window,p,x]),I.useEffect(()=>{E&&v&&m.location.key===v.location.key&&E.resolve()},[E,D,m.location,v]),I.useEffect(()=>{!b.isTransitioning&&Q&&(C(Q.state),F({isTransitioning:!0,flushSync:!1,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation}),H(void 0))},[b.isTransitioning,Q]);let xe=I.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:de=>i.navigate(de),push:(de,ve,Se)=>i.navigate(de,{state:ve,preventScrollReset:Se==null?void 0:Se.preventScrollReset}),replace:(de,ve,Se)=>i.navigate(de,{replace:!0,state:ve,preventScrollReset:Se==null?void 0:Se.preventScrollReset})}),[i]),Ee=i.basename||"/",M=I.useMemo(()=>({router:i,navigator:xe,static:!1,basename:Ee,onError:s}),[i,xe,Ee,s]);return I.createElement(I.Fragment,null,I.createElement(Mr.Provider,{value:M},I.createElement(va.Provider,{value:m},I.createElement(Qp.Provider,{value:K.current},I.createElement(ed.Provider,{value:b},I.createElement(lm,{basename:Ee,location:m.location,navigationType:m.historyAction,navigator:xe,unstable_useTransitions:p},I.createElement(im,{routes:i.routes,future:i.future,state:m,onError:s})))))),null)}function gp(i,o){return{...i,navigation:o.navigation.state!=="idle"?o.navigation:i.navigation,revalidation:o.revalidation!=="idle"?o.revalidation:i.revalidation,actionData:o.navigation.state!=="submitting"?o.actionData:i.actionData,fetchers:o.fetchers}}var im=I.memo(am);function am({routes:i,future:o,state:s,onError:p}){return _h(i,void 0,s,p,o)}function om(i){return Ph(i.context)}function lm({basename:i="/",children:o=null,location:s,navigationType:p="POP",navigator:u,static:f=!1,unstable_useTransitions:h}){Ae(!ya(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=i.replace(/^\/*/,"/"),x=I.useMemo(()=>({basename:m,navigator:u,static:f,unstable_useTransitions:h,future:{}}),[m,u,f,h]);typeof s=="string"&&(s=cr(s));let{pathname:v="/",search:C="",hash:b="",state:F=null,key:E="default"}=s,B=I.useMemo(()=>{let D=Qt(v,m);return D==null?null:{location:{pathname:D,search:C,hash:b,state:F,key:E},navigationType:p}},[m,v,C,b,F,E,p]);return at(B!=null,`<Router basename="${m}"> is not able to match the URL "${v}${C}${b}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:I.createElement(Xt.Provider,{value:x},I.createElement($o.Provider,{children:o,value:B}))}var Po="get",_o="application/x-www-form-urlencoded";function Uo(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function sm(i){return Uo(i)&&i.tagName.toLowerCase()==="button"}function dm(i){return Uo(i)&&i.tagName.toLowerCase()==="form"}function cm(i){return Uo(i)&&i.tagName.toLowerCase()==="input"}function um(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function pm(i,o){return i.button===0&&(!o||o==="_self")&&!um(i)}var To=null;function fm(){if(To===null)try{new FormData(document.createElement("form"),0),To=!1}catch{To=!0}return To}var gm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ds(i){return i!=null&&!gm.has(i)?(at(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_o}"`),null):i}function hm(i,o){let s,p,u,f,h;if(dm(i)){let m=i.getAttribute("action");p=m?Qt(m,o):null,s=i.getAttribute("method")||Po,u=Ds(i.getAttribute("enctype"))||_o,f=new FormData(i)}else if(sm(i)||cm(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=i.getAttribute("formaction")||m.getAttribute("action");if(p=x?Qt(x,o):null,s=i.getAttribute("formmethod")||m.getAttribute("method")||Po,u=Ds(i.getAttribute("formenctype"))||Ds(m.getAttribute("enctype"))||_o,f=new FormData(m,i),!fm()){let{name:v,type:C,value:b}=i;if(C==="image"){let F=v?`${v}.`:"";f.append(`${F}x`,"0"),f.append(`${F}y`,"0")}else v&&f.append(v,b)}}else{if(Uo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Po,p=null,u=_o,h=i}return f&&u==="text/plain"&&(h=f,f=void 0),{action:p,method:s.toLowerCase(),encType:u,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function id(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function mm(i,o,s,p){let u=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${p}`:u.pathname=`${u.pathname}.${p}`:u.pathname==="/"?u.pathname=`_root.${p}`:o&&Qt(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${p}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${p}`,u}async function xm(i,o){if(i.id in o)return o[i.id];try{let s=await import(i.module);return o[i.id]=s,s}catch(s){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vm(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function ym(i,o,s){let p=await Promise.all(i.map(async u=>{let f=o.routes[u.route.id];if(f){let h=await xm(f,s);return h.links?h.links():[]}return[]}));return Cm(p.flat(1).filter(vm).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function hp(i,o,s,p,u,f){let h=(x,v)=>s[v]?x.route.id!==s[v].route.id:!0,m=(x,v)=>{var C;return s[v].pathname!==x.pathname||((C=s[v].route.path)==null?void 0:C.endsWith("*"))&&s[v].params["*"]!==x.params["*"]};return f==="assets"?o.filter((x,v)=>h(x,v)||m(x,v)):f==="data"?o.filter((x,v)=>{var b;let C=p.routes[x.route.id];if(!C||!C.hasLoader)return!1;if(h(x,v)||m(x,v))return!0;if(x.route.shouldRevalidate){let F=x.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((b=s[0])==null?void 0:b.params)||{},nextUrl:new URL(i,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof F=="boolean")return F}return!0}):[]}function bm(i,o,{includeHydrateFallback:s}={}){return wm(i.map(p=>{let u=o.routes[p.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),s&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function wm(i){return[...new Set(i)]}function km(i){let o={},s=Object.keys(i).sort();for(let p of s)o[p]=i[p];return o}function Cm(i,o){let s=new Set;return new Set(o),i.reduce((p,u)=>{let f=JSON.stringify(km(u));return s.has(f)||(s.add(f),p.push({key:f,link:u})),p},[])}function rf(){let i=I.useContext(Mr);return id(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function jm(){let i=I.useContext(va);return id(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ad=I.createContext(void 0);ad.displayName="FrameworkContext";function af(){let i=I.useContext(ad);return id(i,"You must render this element inside a <HydratedRouter> element"),i}function Em(i,o){let s=I.useContext(ad),[p,u]=I.useState(!1),[f,h]=I.useState(!1),{onFocus:m,onBlur:x,onMouseEnter:v,onMouseLeave:C,onTouchStart:b}=o,F=I.useRef(null);I.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let D=Q=>{Q.forEach(H=>{h(H.isIntersecting)})},_=new IntersectionObserver(D,{threshold:.5});return F.current&&_.observe(F.current),()=>{_.disconnect()}}},[i]),I.useEffect(()=>{if(p){let D=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(D)}}},[p]);let E=()=>{u(!0)},B=()=>{u(!1),h(!1)};return s?i!=="intent"?[f,F,{}]:[f,F,{onFocus:aa(m,E),onBlur:aa(x,B),onMouseEnter:aa(v,E),onMouseLeave:aa(C,B),onTouchStart:aa(b,E)}]:[!1,F,{}]}function aa(i,o){return s=>{i&&i(s),s.defaultPrevented||o(s)}}function Sm({page:i,...o}){let{router:s}=rf(),p=I.useMemo(()=>or(s.routes,i,s.basename),[s.routes,i,s.basename]);return p?I.createElement(Am,{page:i,matches:p,...o}):null}function Fm(i){let{manifest:o,routeModules:s}=af(),[p,u]=I.useState([]);return I.useEffect(()=>{let f=!1;return ym(i,o,s).then(h=>{f||u(h)}),()=>{f=!0}},[i,o,s]),p}function Am({page:i,matches:o,...s}){let p=Dr(),{future:u,manifest:f,routeModules:h}=af(),{basename:m}=rf(),{loaderData:x,matches:v}=jm(),C=I.useMemo(()=>hp(i,o,v,f,p,"data"),[i,o,v,f,p]),b=I.useMemo(()=>hp(i,o,v,f,p,"assets"),[i,o,v,f,p]),F=I.useMemo(()=>{if(i===p.pathname+p.search+p.hash)return[];let D=new Set,_=!1;if(o.forEach(H=>{var he;let K=f.routes[H.route.id];!K||!K.hasLoader||(!C.some(xe=>xe.route.id===H.route.id)&&H.route.id in x&&((he=h[H.route.id])!=null&&he.shouldRevalidate)||K.hasClientLoader?_=!0:D.add(H.route.id))}),D.size===0)return[];let Q=mm(i,m,u.unstable_trailingSlashAwareDataRequests,"data");return _&&D.size>0&&Q.searchParams.set("_routes",o.filter(H=>D.has(H.route.id)).map(H=>H.route.id).join(",")),[Q.pathname+Q.search]},[m,u.unstable_trailingSlashAwareDataRequests,x,p,f,C,o,i,h]),E=I.useMemo(()=>bm(b,f),[b,f]),B=Fm(b);return I.createElement(I.Fragment,null,F.map(D=>I.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...s})),E.map(D=>I.createElement("link",{key:D,rel:"modulepreload",href:D,...s})),B.map(({key:D,link:_})=>I.createElement("link",{key:D,nonce:s.nonce,..._,crossOrigin:_.crossOrigin??s.crossOrigin})))}function zm(...i){return o=>{i.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var Im=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Im&&(window.__reactRouterVersion="7.13.0")}catch{}function Lm(i,o){return ih({basename:o==null?void 0:o.basename,getContext:o==null?void 0:o.getContext,future:o==null?void 0:o.future,history:bg({window:o==null?void 0:o.window}),hydrationData:Nm(),routes:i,mapRouteProperties:em,hydrationRouteProperties:tm,dataStrategy:o==null?void 0:o.dataStrategy,patchRoutesOnNavigation:o==null?void 0:o.patchRoutesOnNavigation,window:o==null?void 0:o.window,unstable_instrumentations:o==null?void 0:o.unstable_instrumentations}).initialize()}function Nm(){let i=window==null?void 0:window.__staticRouterHydrationData;return i&&i.errors&&(i={...i,errors:Tm(i.errors)}),i}function Tm(i){if(!i)return null;let o=Object.entries(i),s={};for(let[p,u]of o)if(u&&u.__type==="RouteErrorResponse")s[p]=new ma(u.status,u.statusText,u.data,u.internal===!0);else if(u&&u.__type==="Error"){if(u.__subType){let f=window[u.__subType];if(typeof f=="function")try{let h=new f(u.message);h.stack="",s[p]=h}catch{}}if(s[p]==null){let f=new Error(u.message);f.stack="",s[p]=f}}else s[p]=u;return s}var of=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lf=I.forwardRef(function({onClick:o,discover:s="render",prefetch:p="none",relative:u,reloadDocument:f,replace:h,state:m,target:x,to:v,preventScrollReset:C,viewTransition:b,unstable_defaultShouldRevalidate:F,...E},B){let{basename:D,unstable_useTransitions:_}=I.useContext(Xt),Q=typeof v=="string"&&of.test(v),H=Pp(v,D);v=H.to;let K=Mh(v,{relative:u}),[he,xe,Ee]=Em(p,E),M=Bm(v,{replace:h,state:m,target:x,preventScrollReset:C,relative:u,viewTransition:b,unstable_defaultShouldRevalidate:F,unstable_useTransitions:_});function de(Se){o&&o(Se),Se.defaultPrevented||M(Se)}let ve=I.createElement("a",{...E,...Ee,href:H.absoluteURL||K,onClick:H.isExternal||f?o:de,ref:zm(B,xe),target:x,"data-discover":!Q&&s==="render"?"true":void 0});return he&&!Q?I.createElement(I.Fragment,null,ve,I.createElement(Sm,{page:K})):ve});lf.displayName="Link";var Rm=I.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:p="",end:u=!1,style:f,to:h,viewTransition:m,children:x,...v},C){let b=ba(h,{relative:v.relative}),F=Dr(),E=I.useContext(va),{navigator:B,basename:D}=I.useContext(Xt),_=E!=null&&Wm(b)&&m===!0,Q=B.encodeLocation?B.encodeLocation(b).pathname:b.pathname,H=F.pathname,K=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;s||(H=H.toLowerCase(),K=K?K.toLowerCase():null,Q=Q.toLowerCase()),K&&D&&(K=Qt(K,D)||K);const he=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let xe=H===Q||!u&&H.startsWith(Q)&&H.charAt(he)==="/",Ee=K!=null&&(K===Q||!u&&K.startsWith(Q)&&K.charAt(Q.length)==="/"),M={isActive:xe,isPending:Ee,isTransitioning:_},de=xe?o:void 0,ve;typeof p=="function"?ve=p(M):ve=[p,xe?"active":null,Ee?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let Se=typeof f=="function"?f(M):f;return I.createElement(lf,{...v,"aria-current":de,className:ve,ref:C,style:Se,to:h,viewTransition:m},typeof x=="function"?x(M):x)});Rm.displayName="NavLink";var Mm=I.forwardRef(({discover:i="render",fetcherKey:o,navigate:s,reloadDocument:p,replace:u,state:f,method:h=Po,action:m,onSubmit:x,relative:v,preventScrollReset:C,viewTransition:b,unstable_defaultShouldRevalidate:F,...E},B)=>{let{unstable_useTransitions:D}=I.useContext(Xt),_=Hm(),Q=Om(m,{relative:v}),H=h.toLowerCase()==="get"?"get":"post",K=typeof m=="string"&&of.test(m),he=xe=>{if(x&&x(xe),xe.defaultPrevented)return;xe.preventDefault();let Ee=xe.nativeEvent.submitter,M=(Ee==null?void 0:Ee.getAttribute("formmethod"))||h,de=()=>_(Ee||xe.currentTarget,{fetcherKey:o,method:M,navigate:s,replace:u,state:f,relative:v,preventScrollReset:C,viewTransition:b,unstable_defaultShouldRevalidate:F});D&&s!==!1?I.startTransition(()=>de()):de()};return I.createElement("form",{ref:B,method:H,action:Q,onSubmit:p?x:he,...E,"data-discover":!K&&i==="render"?"true":void 0})});Mm.displayName="Form";function Dm(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sf(i){let o=I.useContext(Mr);return Ae(o,Dm(i)),o}function Bm(i,{target:o,replace:s,state:p,preventScrollReset:u,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:m,unstable_useTransitions:x}={}){let v=Nn(),C=Dr(),b=ba(i,{relative:f});return I.useCallback(F=>{if(pm(F,o)){F.preventDefault();let E=s!==void 0?s:xn(C)===xn(b),B=()=>v(i,{replace:E,state:p,preventScrollReset:u,relative:f,viewTransition:h,unstable_defaultShouldRevalidate:m});x?I.startTransition(()=>B()):B()}},[C,v,b,s,p,o,i,u,f,h,m,x])}var Pm=0,_m=()=>`__${String(++Pm)}__`;function Hm(){let{router:i}=sf("useSubmit"),{basename:o}=I.useContext(Xt),s=qh(),p=i.fetch,u=i.navigate;return I.useCallback(async(f,h={})=>{let{action:m,method:x,encType:v,formData:C,body:b}=hm(f,o);if(h.navigate===!1){let F=h.fetcherKey||_m();await p(F,s,h.action||m,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:C,body:b,formMethod:h.method||x,formEncType:h.encType||v,flushSync:h.flushSync})}else await u(h.action||m,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:C,body:b,formMethod:h.method||x,formEncType:h.encType||v,replace:h.replace,state:h.state,fromRouteId:s,flushSync:h.flushSync,viewTransition:h.viewTransition})},[p,u,o,s])}function Om(i,{relative:o}={}){let{basename:s}=I.useContext(Xt),p=I.useContext(vn);Ae(p,"useFormAction must be used inside a RouteContext");let[u]=p.matches.slice(-1),f={...ba(i||".",{relative:o})},h=Dr();if(i==null){f.search=h.search;let m=new URLSearchParams(f.search),x=m.getAll("index");if(x.some(C=>C==="")){m.delete("index"),x.filter(b=>b).forEach(b=>m.append("index",b));let C=m.toString();f.search=C?`?${C}`:""}}return(!i||i===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:mn([s,f.pathname])),xn(f)}function Wm(i,{relative:o}={}){let s=I.useContext(ed);Ae(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:p}=sf("useViewTransitionState"),u=ba(i,{relative:o});if(!s.isTransitioning)return!1;let f=Qt(s.currentLocation.pathname,p)||s.currentLocation.pathname,h=Qt(s.nextLocation.pathname,p)||s.nextLocation.pathname;return Wo(u.pathname,h)!=null||Wo(u.pathname,f)!=null}const c={yellow:"#FFE600",white:"#FFFFFF",offWhite:"#F6F6FA",gray02:"#C4C4CD",gray01:"#747480",offBlack:"#2E2E38",confidentBlack:"#1A1A24",frameOrange:"#FF7D1E",frameRed:"#FF3C00",frameMagenta:"#FF32FF",framePurple:"#B400FF",frameLime:"#B4FF00",frameGreen:"#00C864",frameTeal:"#32FFFF",frameBlue:"#4696FF",eyebrowGold:"#B89B00",success:"#00C864",destructive:"#FF4136",info:"#4696FF",accentOrange:"#FF7D1E",onDark:"#FFFFFF",onDarkSubtle:"rgba(255, 255, 255, 0.55)",surfaceOnDark:"rgba(255, 255, 255, 0.06)",borderOnDark:"rgba(255, 255, 255, 0.12)",yellowAlpha10:"rgba(255, 230, 0, 0.10)",yellowAlpha12:"rgba(255, 230, 0, 0.12)"},Vm=[[c.yellow,c.frameOrange,c.frameMagenta],[c.yellow,c.frameMagenta,c.frameRed],[c.yellow,c.frameMagenta,c.frameTeal],[c.yellow,c.framePurple,c.frameBlue],[c.yellow,c.frameLime,c.frameTeal],[c.yellow,c.frameGreen,c.frameBlue],[c.yellow,c.frameOrange,c.frameTeal]];function $m(i,o="90deg"){const[s,p,u]=Vm[Math.max(0,Math.min(i-1,6))];return`linear-gradient(${o}, ${s}, ${p}, ${u})`}const k={bold:"'EYInterstate:Bold', Arial, 'Helvetica Neue', sans-serif",regular:"'EYInterstate:Regular', Arial, 'Helvetica Neue', sans-serif",light:"'EYInterstate:Light', Arial, 'Helvetica Neue', sans-serif"},mp={sectionPadding:"72px 64px",cardPadding:"18px"};function Ro({height:i,letterColor:o}){return n.jsxs("svg",{viewBox:"0 -18 217.599 217.599",style:{height:i,width:"auto",display:"block",flexShrink:0},xmlns:"http://www.w3.org/2000/svg","aria-label":"EY logo",children:[n.jsx("path",{fill:c.yellow,d:"M0 79.4L217.599 0v41z"}),n.jsx("path",{fill:o,d:"M24.9 150.6h28.5v-16.5H24.9v-13h31.5L46 103H1.4v78.6h62.8v-18.1H24.9zM106.1 103l-13.3 25.7L79.4 103h-26l27.4 47.6v31h23.5v-31l27.5-47.6z"})]})}function Bs({fontSize:i,color:o}){return n.jsxs("span",{style:{fontFamily:"'EYInterstate:Bold', Arial, sans-serif",fontWeight:700,fontSize:i,lineHeight:1.2,color:o,whiteSpace:"nowrap"},children:["Shape the future",n.jsx("br",{}),"with confidence"]})}function df({variant:i="stacked",theme:o="dark",className:s,onClick:p}){const u=o==="dark"?c.white:c.offBlack,f=o==="dark"?c.white:c.offBlack,h={display:"inline-flex",alignItems:"flex-start",cursor:p?"pointer":"default",userSelect:"none"};return i==="mark-only"?n.jsx("div",{style:h,className:s,onClick:p,"aria-label":"EY",children:n.jsx(Ro,{height:44,letterColor:u})}):i==="stacked"?n.jsxs("div",{style:{...h,flexDirection:"column",gap:12,alignItems:"flex-start"},className:s,onClick:p,"aria-label":"EY — Shape the future with confidence",children:[n.jsx(Ro,{height:100,letterColor:u}),n.jsx(Bs,{fontSize:18,color:f})]}):i==="horizontal-sm"?n.jsxs("div",{style:{...h,flexDirection:"row",gap:14,alignItems:"center"},className:s,onClick:p,"aria-label":"EY — Shape the future with confidence",children:[n.jsx(Ro,{height:40,letterColor:u}),n.jsx(Bs,{fontSize:12,color:f})]}):n.jsxs("div",{style:{...h,flexDirection:"row",gap:18,alignItems:"center"},className:s,onClick:p,"aria-label":"EY — Shape the future with confidence",children:[n.jsx(Ro,{height:56,letterColor:u}),n.jsx(Bs,{fontSize:15,color:f})]})}const Um="Phase 1: Foundational Training Workshops",Gm="/phase1",Ps=1,Ym=4,cf="EY.ai Tax Labs",od=[{id:"foundational",title:"Foundational Concepts of AI",path:"/foundational",order:1,estimatedTime:"~45 min",supportsInPageNav:!0,subModules:[{id:"act-now",label:"Act Now",group:"learn"},{id:"rise-of-ai",label:"Understanding AI",group:"learn"},{id:"evolution",label:"Evolution",group:"learn"},{id:"terminology",label:"Key Terms",group:"learn"},{id:"cheatsheet",label:"Cheat Sheet",group:"apply"},{id:"genai-vs-agents",label:"GenAI vs Agents",group:"learn"},{id:"quiz",label:"Quiz",group:"apply"}]},{id:"ai-tax-prompting",title:"AI Tax Prompting",path:"/ai-tax-prompting",order:2,estimatedTime:"~30 min",supportsInPageNav:!0,subModules:[{id:"pipeline",label:"Prompt Basics",group:"learn"},{id:"team-briefing",label:"Team Briefing",group:"learn"},{id:"elements",label:"8 Elements",group:"learn"},{id:"lazy-vs-pro",label:"Weak vs Strong",group:"learn"},{id:"stack-builder",label:"Stack Builder",group:"learn"},{id:"advanced",label:"Techniques",group:"learn"},{id:"match-activity",label:"Activity",group:"apply"},{id:"dos-donts",label:"Do's & Don'ts",group:"apply"},{id:"recap",label:"Cheat Sheet",group:"apply"}]},{id:"copilot-hub",title:"M365 Copilot Dashboard",path:"/copilot-hub",order:3,estimatedTime:"~60 min",supportsInPageNav:!0,subModules:[{id:"prompt-repository",label:"M365 Apps",group:"learn"},{id:"useful-links",label:"Useful Links",group:"apply"},{id:"security",label:"Security & Governance",group:"apply"}]}];function uf(i){const o=od.find(s=>s.id===i);if(!o)throw new Error(`Unknown module id: ${i}`);return o}const qm=od.length;function Zm(i){const{subModules:o}=uf(i);return{learn:o.filter(s=>s.group==="learn"),apply:o.filter(s=>s.group==="apply")}}const Km=`2px solid ${c.yellow}`;function ld(i){i.currentTarget.style.outline=Km,i.currentTarget.style.outlineOffset="2px"}function sd(i){i.currentTarget.style.outline="none"}function gi({variant:i="hub",activeSection:o="tax-labs",onNavigate:s,rightSlot:p,skipLinkTarget:u}){return n.jsxs("header",{children:[u&&n.jsx("a",{href:u,style:{position:"absolute",left:-9999,top:"auto",width:1,height:1,overflow:"hidden",zIndex:1e4,background:c.yellow,color:c.confidentBlack,padding:"10px 16px",fontFamily:k.bold,fontSize:13},onFocus:f=>{Object.assign(f.currentTarget.style,{left:16,top:8,width:"auto",height:"auto"})},onBlur:f=>{Object.assign(f.currentTarget.style,{left:-9999,width:1,height:1})},children:"Skip to content"}),i==="learning"?n.jsx(Qm,{onNavigate:s}):n.jsx(Xm,{onNavigate:s,activeSection:o,rightSlot:p})]})}function Qm({onNavigate:i}){return n.jsxs("div",{className:"flex items-center justify-between gap-3 w-full px-4 sm:px-6 md:px-10 py-3 md:py-4",style:{background:c.confidentBlack,borderBottom:"1px solid #2E2E38"},children:[n.jsxs("button",{onClick:()=>i("/phased"),className:"flex items-center gap-3 md:gap-4 min-w-0",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4},"aria-label":`${cf} — back to Tax Labs overview`,onFocus:ld,onBlur:sd,children:[n.jsx("div",{style:{background:c.offBlack,width:40,height:40,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx("div",{style:{transform:"scale(0.68)",transformOrigin:"center"},children:n.jsx(df,{variant:"mark-only",theme:"dark"})})}),n.jsxs("div",{className:"flex flex-col gap-0.5 items-start min-w-0",children:[n.jsxs("span",{className:"text-[16px] md:text-[20px] truncate",style:{color:"#FFFFFF",fontFamily:k.bold,lineHeight:1.2},children:["EY.ai ",n.jsx("span",{style:{fontFamily:k.regular},children:"Tax Labs"})]}),n.jsx("span",{className:"text-[9px] md:text-[10px]",style:{color:c.yellow,fontFamily:k.bold,letterSpacing:"0.04em",textTransform:"uppercase",whiteSpace:"nowrap"},children:"India Tax Hub"})]})]}),n.jsx("div",{className:"hidden sm:block shrink-0",children:n.jsx(Jm,{})})]})}function Xm({onNavigate:i,activeSection:o,rightSlot:s}){return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{background:c.yellow,height:3,width:"100%"}}),n.jsxs("div",{style:{background:c.offBlack,height:64,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"},children:[n.jsxs("button",{onClick:()=>i("/"),style:{background:"none",border:"none",cursor:"pointer",padding:4,borderRadius:4,display:"flex",alignItems:"center",gap:12,minWidth:0},"aria-label":`${cf} — go to home`,onFocus:ld,onBlur:sd,children:[n.jsx(df,{variant:"mark-only",theme:"dark"}),n.jsx("span",{style:{color:"#FFFFFF",fontFamily:k.regular,fontSize:13,borderLeft:"1px solid rgba(255,255,255,0.3)",paddingLeft:12,whiteSpace:"nowrap"},children:"India AI Tax Hub"})]}),s]}),n.jsxs("nav",{"aria-label":"Site sections",style:{background:"#2E2E38",display:"flex",alignItems:"center",padding:"0 16px",overflowX:"auto"},children:[n.jsx(xp,{label:"About EY India AI Tax Hub",isActive:o==="home",onClick:()=>i("/")}),n.jsx(xp,{label:"EY.ai Tax Labs",isActive:o==="tax-labs",onClick:()=>i("/phased")})]})]})}function Jm(){return n.jsx("span",{style:{color:c.yellow,fontFamily:k.bold,fontSize:12,textTransform:"uppercase",letterSpacing:"0.04em",whiteSpace:"nowrap"},children:"Platform Mode: Active Learning"})}function xp({label:i,isActive:o,onClick:s}){return n.jsx("button",{onClick:o?void 0:s,"aria-current":o?"page":void 0,style:{background:"none",border:"none",cursor:o?"default":"pointer",padding:"10px 14px",fontFamily:k.regular,fontSize:13,color:o?c.yellow:c.gray02,whiteSpace:"nowrap",transition:"color 0.15s"},onMouseEnter:p=>{o||(p.currentTarget.style.color="#FFFFFF")},onMouseLeave:p=>{o||(p.currentTarget.style.color=c.gray02)},onFocus:ld,onBlur:sd,children:i})}const dr={p110f3b80:"M26.25 3.75V15C26.2497 15.629 26.4077 16.248 26.7094 16.8L37.0406 35.7C37.3531 36.2711 37.5115 36.9138 37.5003 37.5647C37.4891 38.2157 37.3086 38.8525 36.9765 39.4125C36.6445 39.9725 36.1724 40.4364 35.6066 40.7586C35.0409 41.0808 34.401 41.2502 33.75 41.25H11.25C10.599 41.2502 9.95909 41.0808 9.39336 40.7586C8.82762 40.4364 8.35551 39.9725 8.02348 39.4125C7.69145 38.8525 7.51093 38.2157 7.49969 37.5647C7.48845 36.9138 7.64687 36.2711 7.95937 35.7L18.2906 16.8C18.5923 16.248 18.7503 15.629 18.75 15V3.75",p17d3fb80:"M20.8125 41.25H11.25C10.2554 41.25 9.30161 40.8549 8.59835 40.1517C7.89509 39.4484 7.5 38.4946 7.5 37.5V7.5C7.5 6.50544 7.89509 5.55161 8.59835 4.84835C9.30161 4.14509 10.2554 3.75 11.25 3.75H26.25C26.8442 3.74854 27.4327 3.86477 27.9818 4.09197C28.5308 4.31917 29.0294 4.65285 29.4488 5.07375L36.1781 11.8013C36.5987 12.2208 36.932 12.7194 37.1589 13.2685C37.3858 13.8175 37.5017 14.406 37.5 15V21.0938",p1b4fc880:"M26.25 3.75V13.125C26.25 13.6223 26.4475 14.0992 26.7992 14.4508C27.1508 14.8025 27.6277 15 28.125 15H37.5",p26318a80:"M30 37.5C33.1066 37.5 35.625 34.9816 35.625 31.875C35.625 28.7684 33.1066 26.25 30 26.25C26.8934 26.25 24.375 28.7684 24.375 31.875C24.375 34.9816 26.8934 37.5 30 37.5Z",p2dd93a80:"M5.625 13.125L9.375 16.875L16.875 9.375",p3955b500:"M80.5276 0L19.8341 22.1511L80.5276 11.4305V0Z",p3eb8a400:"M5.625 31.875L9.375 35.625L16.875 28.125",pf788bc0:"M29.572 49.9334H40.673V43.4875H29.572V38.4211H41.8524L37.7779 31.3598H20.3641V62.0601H44.9238V54.9988H29.5711L29.572 49.9334ZM61.2704 31.3607L56.0551 41.3795L50.8528 31.3607H40.673L51.3993 49.9343V62.0611H60.5788V49.9343L71.3197 31.3607H61.2704ZM71.519 96.4482C71.519 96.664 71.5043 96.9368 71.4905 97.0379H67.3784C67.4501 97.9867 68.0976 98.3752 68.8306 98.3752C69.2623 98.3752 69.6646 98.2457 70.0099 97.9003L71.2177 98.9208C70.5849 99.7116 69.6214 99.9991 68.7589 99.9991C66.775 99.9991 65.6388 98.4753 65.6388 96.4767C65.6388 94.3054 66.9761 92.9249 68.6441 92.9249C70.4269 92.9249 71.5199 94.4918 71.5199 96.4473L71.519 96.4482ZM67.4069 95.7153H69.8225C69.7647 94.9529 69.276 94.4358 68.5862 94.4358C67.7669 94.4358 67.4501 95.155 67.4069 95.7153ZM91.85 96.4482C91.85 96.664 91.8353 96.9368 91.8215 97.0379H87.7094C87.781 97.9867 88.4286 98.3752 89.1616 98.3752C89.5932 98.3752 89.9956 98.2457 90.3409 97.9003L91.5487 98.9208C90.9159 99.7116 89.9524 99.9991 89.0899 99.9991C87.106 99.9991 85.9698 98.4753 85.9698 96.4767C85.9698 94.3054 87.3071 92.9249 88.9751 92.9249C90.7579 92.9249 91.8509 94.4918 91.8509 96.4473L91.85 96.4482ZM87.7379 95.7153H90.1535C90.0957 94.9529 89.607 94.4358 88.9172 94.4358C88.0979 94.4358 87.781 95.155 87.7379 95.7153ZM84.3155 97.4402L85.437 98.5038C84.8621 99.2367 84.0712 99.9991 82.7339 99.9991C80.8794 99.9991 79.5127 98.5185 79.5127 96.4767C79.5127 94.6076 80.6489 92.9249 82.7624 92.9249C83.9702 92.9249 84.8042 93.4714 85.4223 94.3917L84.2724 95.5564C83.8701 95.0246 83.4384 94.6076 82.7486 94.6076C81.8136 94.6076 81.3249 95.3984 81.3249 96.4482C81.3249 97.4255 81.7566 98.3026 82.7624 98.3026C83.3805 98.3026 83.8985 97.972 84.3155 97.4402ZM68.6717 86.1676H67.0037V85.6928C66.6298 86.1097 66.0264 86.3109 65.422 86.3109C63.6677 86.3109 63.0063 85.0452 63.0063 83.2193V79.38H64.7028V83.0751C64.7028 83.9954 64.8902 84.6852 65.839 84.6852C66.7878 84.6852 66.9752 83.966 66.9752 83.132V79.3791H68.6717V86.1658V86.1676ZM73.9631 84.1837L73.7188 85.9095C73.3735 86.1823 72.7415 86.3118 72.3245 86.3118C71.2894 86.3118 70.4839 85.5357 70.4839 84.2985V81.0057H69.5066V79.3809H70.4839V77.6128L72.1803 76.7504V79.3818H73.7905V81.0066H72.1803V83.8539C72.1803 84.4436 72.4246 84.6595 72.8416 84.6595C73.2586 84.6595 73.6903 84.4427 73.9631 84.1837ZM48.1965 86.1676H46.5V82.4725C46.5 81.5522 46.2988 80.8762 45.35 80.8762C44.4012 80.8762 44.1854 81.4944 44.1854 82.4294V86.1676H42.4889V77.6128L44.1854 76.7504V79.8558C44.5592 79.482 45.0194 79.2376 45.7817 79.2376C47.5792 79.2376 48.1974 80.6181 48.1974 82.343L48.1965 86.1676ZM78.4776 99.8558H76.7232V96.1607C76.7232 95.2119 76.5074 94.5791 75.5586 94.5791C74.6667 94.5791 74.3792 95.1109 74.3792 96.1175V99.8558H72.6249V93.0691H74.3792V93.5293C74.7383 93.1701 75.2711 92.9258 76.0325 92.9258C77.8732 92.9258 78.4766 94.3495 78.4766 96.0174V99.8567L78.4776 99.8558ZM56.5364 92.4804C57.0976 92.4804 57.5431 92.0349 57.5431 91.4737C57.5431 90.9125 57.0976 90.467 56.5364 90.467C55.9752 90.467 55.5298 90.9125 55.5298 91.4737C55.5298 92.0349 55.9752 92.4804 56.5364 92.4804ZM11.7044 92.4804C12.2656 92.4804 12.7111 92.0349 12.7111 91.4737C12.7111 90.9125 12.2656 90.467 11.7044 90.467C11.1432 90.467 10.6978 90.9125 10.6978 91.4737C10.6978 92.0349 11.1432 92.4804 11.7044 92.4804ZM91.85 82.76C91.85 82.9759 91.8353 83.2487 91.8215 83.3497H87.7094C87.781 84.2985 88.4286 84.687 89.1616 84.687C89.5932 84.687 89.9956 84.5575 90.3409 84.2122L91.5487 85.2326C90.9159 86.0234 89.9524 86.3109 89.0899 86.3109C87.106 86.3109 85.9698 84.7871 85.9698 82.7885C85.9698 80.6172 87.3071 79.2367 88.9751 79.2367C90.7579 79.2367 91.8509 80.8037 91.8509 82.7591L91.85 82.76ZM87.7379 82.0271H90.1535C90.0957 81.2647 89.607 80.7476 88.9172 80.7476C88.0979 80.7476 87.781 81.4668 87.7379 82.0271ZM80.4193 86.1676H78.7513V85.6928C78.3774 86.1097 77.774 86.3109 77.1696 86.3109C75.4153 86.3109 74.754 85.0452 74.754 83.2193V79.38H76.4504V83.0751C76.4504 83.9954 76.6378 84.6852 77.5866 84.6852C78.5354 84.6852 78.7228 83.966 78.7228 83.132V79.3791H80.4193V86.1658V86.1676ZM54.9401 82.76C54.9401 82.9759 54.9254 83.2487 54.9116 83.3497H50.7995C50.8711 84.2985 51.5187 84.687 52.2516 84.687C52.6833 84.687 53.0856 84.5575 53.431 84.2122L54.6388 85.2326C54.006 86.0234 53.0425 86.3109 52.18 86.3109C50.196 86.3109 49.0598 84.7871 49.0598 82.7885C49.0598 80.6172 50.3972 79.2367 52.0652 79.2367C53.848 79.2367 54.941 80.8037 54.941 82.7591L54.9401 82.76ZM50.828 82.0271H53.2436C53.1857 81.2647 52.6971 80.7476 52.0073 80.7476C51.188 80.7476 50.8711 81.4668 50.828 82.0271ZM64.588 99.8558H62.8337V99.4103C62.2587 99.8273 61.9133 100 61.2952 100C59.3397 100 58.5057 98.3035 58.5057 96.405C58.5057 94.3485 59.483 92.9258 61.252 92.9258C61.8417 92.9258 62.402 93.0838 62.8337 93.4723V91.301L64.588 90.4239V99.8558ZM62.8346 97.757V95.1688C62.4608 94.7665 62.1016 94.5791 61.6121 94.5791C60.5916 94.5791 60.3464 95.3846 60.3464 96.3472C60.3464 97.4402 60.6623 98.3458 61.6552 98.3458C62.1439 98.3458 62.4892 98.1308 62.8346 97.757ZM55.6446 93.0691V99.8558H57.3989V93.0691H55.6446ZM54.6241 90.6544V92.0634C54.3651 91.977 54.0207 91.9339 53.7616 91.9339C53.2583 91.9339 53.0287 92.0918 53.0287 92.5235V93.07H54.4808V94.7095H53.0287V99.8567H51.2743V94.7095H50.3255V93.07H51.2743V92.2507C51.2743 90.9851 52.0652 90.468 53.3446 90.468C53.7185 90.468 54.265 90.5102 54.6241 90.6544ZM49.4621 99.8558H47.7078V96.1607C47.7078 95.2119 47.492 94.5791 46.5432 94.5791C45.6513 94.5791 45.3638 95.1109 45.3638 96.1175V99.8558H43.6095V93.0691H45.3638V93.5293C45.7229 93.1701 46.2557 92.9258 47.0171 92.9258C48.8578 92.9258 49.4612 94.3495 49.4612 96.0174V99.8567L49.4621 99.8558ZM39.3825 92.9258C37.427 92.9258 36.2045 94.4643 36.2045 96.4629C36.2045 98.5626 37.5419 100 39.3825 100C41.2232 100 42.5605 98.5626 42.5605 96.4629C42.5605 94.3632 41.338 92.9258 39.3825 92.9258ZM39.3825 98.3035C38.261 98.3035 38.0167 97.2252 38.0167 96.4629C38.0167 95.4131 38.4484 94.6085 39.3825 94.6085C40.3166 94.6085 40.7483 95.414 40.7483 96.4629C40.7483 97.2252 40.504 98.3035 39.3825 98.3035ZM34.508 97.4402L35.6295 98.5038C35.0546 99.2367 34.2637 99.9991 32.9264 99.9991C31.0719 99.9991 29.7052 98.5185 29.7052 96.4767C29.7052 94.6076 30.8414 92.9249 32.9549 92.9249C34.1627 92.9249 34.9967 93.4714 35.6148 94.3917L34.4649 95.5564C34.0626 95.0246 33.6309 94.6076 32.9411 94.6076C32.0061 94.6076 31.5174 95.3984 31.5174 96.4482C31.5174 97.4255 31.9491 98.3026 32.9549 98.3026C33.573 98.3026 34.091 97.972 34.508 97.4402ZM25.436 99.8558H23.6817V96.1607C23.6817 95.2119 23.4658 94.5791 22.517 94.5791C21.6252 94.5791 21.3239 95.1109 21.3239 96.1175V99.8558H19.5696V91.301L21.3239 90.4239V93.5293C21.6546 93.127 22.3444 92.9258 23.0204 92.9258C24.8032 92.9258 25.436 94.3348 25.436 96.0174V99.8558ZM18.4903 97.814L18.2313 99.5821C17.8722 99.8696 17.0088 99.9991 16.5486 99.9991C15.485 99.9991 14.7226 99.1504 14.7226 97.972V94.7077H13.5433V93.0682H14.7226V91.3001L16.477 90.4229V93.0682H18.4609V94.7077H16.477V97.4971C16.477 98.1153 16.7066 98.3164 17.1236 98.3164C17.5406 98.3164 18.1872 98.1006 18.4894 97.8131L18.4903 97.814ZM10.8273 93.0691V99.8558H12.5816V93.0691H10.8273ZM9.90694 93.0691L7.765 99.8558H6.15487L5.00491 95.729L3.84025 99.8558H2.23012L0.101035 93.0691H2.05652L3.07698 97.0085L4.22694 93.0691H5.82329L6.97325 97.0085L8.0084 93.0691H9.90694ZM62.5756 76.98V78.3743C62.187 78.2732 61.9289 78.2301 61.6984 78.2301C61.0949 78.2301 60.9654 78.4459 60.9654 78.7913V79.3809H62.1154V81.0204H60.9654V86.1676H59.269V81.0204H58.435V79.3809H59.269V78.5616C59.269 77.3823 59.8871 76.7789 61.3255 76.7789C61.7857 76.7789 62.1586 76.8652 62.5756 76.98ZM41.7118 84.1837L41.4675 85.9095C41.1222 86.1823 40.5187 86.3118 40.1017 86.3118C39.0666 86.3118 38.261 85.5357 38.261 84.2985V81.0057H37.0817V79.3809H38.261V77.6128L39.9575 76.7504V79.3818H41.5392V81.0066H39.9575V83.8539C39.9575 84.4436 40.2018 84.6595 40.6188 84.6595C41.0358 84.6595 41.4381 84.4427 41.7118 84.1837ZM33.8183 82.76C33.8183 82.9759 33.8036 83.2487 33.7898 83.3497H29.8209C29.8926 84.2985 30.5539 84.687 31.2878 84.687C31.7195 84.687 32.1071 84.5575 32.4524 84.2122L33.6603 85.2326C33.0991 85.9802 32.0786 86.3109 31.173 86.3109C29.2322 86.3109 28.0813 84.7871 28.0813 82.8023C28.0813 80.8174 29.3323 79.2367 31.1004 79.2367C32.998 79.2367 33.8183 80.9635 33.8183 82.76ZM29.8494 82.0271H32.2651C32.1934 81.2647 31.747 80.7476 31.0141 80.7476C30.2379 80.7476 29.8926 81.4668 29.8494 82.0271ZM27.2758 82.7894C27.2758 84.529 26.5566 86.3118 24.6305 86.3118C23.8828 86.3118 23.4227 86.039 23.1205 85.7506V87.8209L21.424 88.6696V79.3809H23.1205V79.8411C23.566 79.4388 24.0261 79.2376 24.659 79.2376C26.4849 79.2376 27.2758 80.9635 27.2758 82.7894ZM25.5214 82.8748C25.5214 81.8829 25.2624 80.8762 24.242 80.8762C23.7671 80.8762 23.3933 81.0921 23.1205 81.4797V84.068C23.3933 84.4565 23.8534 84.6861 24.343 84.6861C25.2918 84.6861 25.5214 83.8236 25.5214 82.8748ZM20.2447 86.1676H18.5482V85.6928C18.1459 86.095 17.6279 86.3109 16.9665 86.3109C15.6292 86.3109 14.5794 85.4484 14.5794 83.9531C14.5794 82.4578 15.5998 81.667 17.2246 81.667C17.6563 81.667 18.1018 81.7249 18.5473 81.9398V81.5807C18.5473 80.9479 18.1303 80.6888 17.3826 80.6888C16.8508 80.6888 16.3475 80.8184 15.8157 81.1343L15.1396 79.9265C15.8726 79.4663 16.5771 79.2367 17.4836 79.2367C19.1948 79.2367 20.2447 80.0707 20.2447 81.6092V86.1676ZM18.5482 84.1837V83.3212C18.2028 83.1054 17.7574 83.0337 17.412 83.0337C16.6643 83.0337 16.3052 83.3644 16.3052 83.9109C16.3052 84.4289 16.6359 84.8459 17.2687 84.8459C17.5994 84.8459 18.1744 84.7302 18.5482 84.1837ZM13.6452 86.1676H11.9488V82.4725C11.9488 81.5522 11.7476 80.8762 10.7988 80.8762C9.84999 80.8762 9.63415 81.4944 9.63415 82.4294V86.1676H7.93768V77.6128L9.63415 76.7504V79.8558C10.008 79.482 10.4681 79.2376 11.2305 79.2376C13.028 79.2376 13.6462 80.6181 13.6462 82.343V86.1676H13.6452ZM7.00264 83.4507C7.00264 85.4925 5.44946 86.3118 3.60971 86.3118C2.28615 86.3118 0.819302 85.8948 0 84.687L1.26569 83.5655C1.85537 84.27 2.70315 84.6007 3.56654 84.6007C4.58699 84.6007 5.17667 84.1405 5.17667 83.4939C5.17667 83.2349 5.07563 82.9759 4.64485 82.7609C4.32889 82.603 3.94037 82.5019 3.17801 82.3155C2.70315 82.2007 1.72586 81.9701 1.12149 81.4815C0.518034 80.9929 0.345356 80.2884 0.345356 79.6702C0.345356 77.758 1.98488 76.9818 3.59501 76.9818C4.98929 76.9818 5.99597 77.5568 6.80149 78.3761L5.5358 79.6124C4.94612 79.0227 4.37114 78.6921 3.47928 78.6921C2.71692 78.6921 2.15664 78.9364 2.15664 79.5692C2.15664 79.842 2.25767 80.0294 2.53047 80.1874C2.84643 80.36 3.29282 80.4895 3.98262 80.6622C4.80192 80.8781 5.56427 81.0645 6.18242 81.5678C6.72893 82.0133 7.00173 82.603 7.00173 83.4517L7.00264 83.4507ZM86.0414 79.6978L85.3489 81.3942C85.0898 81.1499 84.7877 80.9773 84.3716 80.9773C83.5661 80.9773 83.3667 81.6533 83.3667 82.4725V86.1676H81.6703V79.3809H83.3667V79.8558C83.7553 79.4673 84.2439 79.2376 84.7904 79.2376C85.2653 79.2376 85.6823 79.3818 86.0414 79.6978Z"},ex="/assets/cf830df8acc30d2ebe5a2c08149d39333d1079bd-BeLjyhso.png",tx="/assets/c47d9607a0edbab8c4595b79a2b7a480058303f1-jP8oLYOB.png",nx="/assets/3ade42659624abadce59b0790baf7f1d24194a8a-DJmztXD1.png",rx="/assets/f68a98c7299f7f60dd06bf1faca4b1c636e4b255-By-7Ebtn.png",ix="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2091.85%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22clip0_1_2%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M91.85%200H0V100H91.85V0Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",ax="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_facebook.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1096)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M29.5615%2013.5H14.4385C13.92%2013.5%2013.5%2013.92%2013.5%2014.4385V29.5622C13.5%2030.08%2013.92%2030.5%2014.4385%2030.5H22.5808V23.9167H20.3652V21.3512H22.5808V19.4592C22.5808%2017.2634%2023.9217%2016.0677%2025.881%2016.0677C26.8195%2016.0677%2027.6256%2016.1378%2027.8607%2016.169V18.464L26.5022%2018.4647C25.4368%2018.4647%2025.2307%2018.9712%2025.2307%2019.7135V21.3519H27.7715L27.4407%2023.9175H25.2307V30.5H29.5629C30.08%2030.5%2030.5%2030.08%2030.5%2029.5615V14.4385C30.5%2013.92%2030.08%2013.5%2029.5615%2013.5Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1096%22%3E%0A%3Crect%20width%3D%2217%22%20height%3D%2217%22%20fill%3D%22white%22%20transform%3D%22translate(13.5%2013.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",ox="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_twitter.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M23.7821%2020.4474L30.7554%2012.3415H29.1029L23.048%2019.3797L18.212%2012.3415H12.6342L19.9472%2022.9845L12.6342%2031.4848H14.2867L20.6809%2024.0522L25.7881%2031.4848H31.3659L23.7821%2020.4474ZM21.5187%2023.0783L20.7777%2022.0185L14.8821%2013.5855H17.4203L22.1781%2020.3912L22.9191%2021.451L29.1037%2030.2974H26.5655L21.5187%2023.0783Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",lx="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_linkedin.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1091)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M17.1036%2016.0713C17.1036%2017.0345%2016.3293%2017.815%2015.3738%2017.815C14.4182%2017.815%2013.644%2017.0345%2013.644%2016.0713C13.644%2015.1087%2014.4182%2014.3275%2015.3738%2014.3275C16.3293%2014.3275%2017.1036%2015.1087%2017.1036%2016.0713ZM17.1175%2019.21H13.63V30.37H17.1175V19.21ZM22.6849%2019.21H19.2198V30.37H22.6856V24.5117C22.6856%2021.2544%2026.8909%2020.9879%2026.8909%2024.5117V30.37H30.37V23.3036C30.37%2017.8073%2024.1469%2018.0075%2022.6849%2020.7131V19.21Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1091%22%3E%0A%3Crect%20width%3D%2216.74%22%20height%3D%2216.74%22%20fill%3D%22white%22%20transform%3D%22translate(13.63%2013.63)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",sx="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_youtube.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1081)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cg%20id%3D%22Group_2%22%3E%0A%3Cg%20id%3D%22Group_3%22%3E%0A%3Cg%20id%3D%22Group_4%22%3E%0A%3Cg%20id%3D%22Group_5%22%3E%0A%3Cpath%20id%3D%22Vector%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M32.5402%2016.8423C33%2018.5133%2033%2022%2033%2022C33%2022%2033%2025.4865%2032.5402%2027.1578C32.2872%2028.0797%2031.5419%2028.8058%2030.5951%2029.0523C28.8796%2029.5%2022%2029.5%2022%2029.5C22%2029.5%2015.1204%2029.5%2013.4047%2029.0523C12.4581%2028.8058%2011.7126%2028.0797%2011.4596%2027.1578C11%2025.4865%2011%2022%2011%2022C11%2022%2011%2018.5133%2011.4596%2016.8423C11.7126%2015.9203%2012.4581%2015.1942%2013.4047%2014.9478C15.1204%2014.5%2022%2014.5%2022%2014.5C22%2014.5%2028.8796%2014.5%2030.5951%2014.9478C31.5419%2015.1942%2032.2872%2015.9203%2032.5402%2016.8423ZM19.75%2025.1656L25.5%2022.0001L19.75%2018.8344V25.1656Z%22%20fill%3D%22var(--fill-0%2C%20%232E2E38)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1081%22%3E%0A%3Crect%20width%3D%2222%22%20height%3D%2215%22%20fill%3D%22white%22%20transform%3D%22translate(11%2014.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A";function dx(){return n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#2e2e38] to-[rgba(0,0,0,0)] via-[62.981%] via-[rgba(46,46,56,0.7)] w-full","data-name":"Container",children:n.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"IndianTaxLady 1",children:n.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[n.jsx("img",{alt:"",className:"absolute max-w-none object-cover object-[70%_center] size-full",src:ex}),n.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.25)] inset-0"})]})})})}function cx(){return n.jsxs("section",{className:"relative shrink-0 w-full min-h-[420px] md:min-h-[560px] lg:min-h-[632px] overflow-hidden","data-name":"section",children:[n.jsx(dx,{}),n.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[4px] bg-[#ffe600]"}),n.jsxs("div",{className:"relative z-[1] flex flex-col gap-5 md:gap-6 max-w-[640px] px-5 sm:px-8 md:px-10 pt-24 pb-16 md:pt-32 md:pb-20",children:[n.jsx("h1",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.1] not-italic text-[#ffe600] text-[36px] sm:text-[48px] md:text-[58px] tracking-[-0.02em] m-0",children:"EY India AI Tax Hub"}),n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.45] not-italic m-0 text-[16px] sm:text-[18px] md:text-[20px] text-[rgba(255,255,255,0.85)]",children:"A program offering suite of AI Agents for deep research, compliance, litigation and AI led bespoke tax function transformation capabilities. It is backed by trusted tax databases and sharpest tax minds in India."}),n.jsx("button",{type:"button",className:"bg-[#ffe600] border-0 cursor-pointer font-['EYInterstate:Regular',sans-serif] text-[#2e2e38] text-[16px] px-6 py-3 w-fit",children:"Know More"})]})]})}function ux(){return n.jsxs("div",{className:"relative shrink-0 w-full flex flex-col gap-2 items-center text-center px-2","data-name":"Container",children:[n.jsx("h2",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.25] not-italic m-0 text-[#2e2e38] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.02em]",children:"Discover what's happening on the Hub"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[1.5] not-italic m-0 text-[#747480] text-[15px] md:text-[16px] max-w-[720px]",children:"The three foundational pillars of the EY India AI Tax Hub, designed to revolutionize your end-to-end tax operations."})]})}function px(){return n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"Research & Litigation"})})}function fx(){return n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[71px]","data-name":"file-search-corner 4",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:n.jsxs("g",{id:"file-search-corner 4",children:[n.jsx("path",{d:dr.p17d3fb80,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:dr.p1b4fc880,id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M39.375 41.25L33.975 35.85",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:dr.p26318a80,id:"Vector_4",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function gx(){return n.jsxs("div",{className:"absolute bg-gradient-to-t from-[61.538%] from-[rgba(46,46,56,0)] h-[192px] left-0 to-[rgba(0,0,0,0)] top-[0.41px] w-full","data-name":"Container",children:[n.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"ResearchLitigation 1",children:n.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[n.jsx("img",{alt:"",className:"absolute max-w-none object-cover size-full",src:tx}),n.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),n.jsx(fx,{})]})}function hx(){return n.jsx("div",{className:"absolute h-[27px] left-[16px] top-[149px] w-full max-w-full","data-name":"h3"})}function mx(){return n.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex items-start justify-between p-[10px] relative size-full",children:[n.jsx(gx,{}),n.jsx(hx,{})]})})})}function xx(){return n.jsx("div",{className:"h-[67.195px] relative shrink-0 w-full","data-name":"p",children:n.jsx("p",{className:"[word-break:break-word] absolute font-['EYInterstate:Bold',sans-serif] leading-[23.996px] left-0 not-italic text-[#747480] text-[16.002px] top-[0.5px] w-full",children:"Platform for research and litigation with deeply embedded agentic capabilities."})})}function vx(){return n.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:n.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0","data-name":"Link",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#747480] border-solid inset-0 pointer-events-none"}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] whitespace-nowrap",children:"Know more"})]})})}function yx(){return n.jsxs("div",{className:"bg-white flex-[1_0_0] min-h-px relative rounded-[5px] w-full","data-name":"Container",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[5px]"}),n.jsx("div",{className:"flex flex-col justify-center size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start justify-between p-[20px] relative size-full",children:[n.jsx(xx,{}),n.jsx(vx,{})]})})]})}function bx(){return n.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[n.jsx(mx,{}),n.jsx(yx,{})]})}),n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function wx(){return n.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px]",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),n.jsx(px,{}),n.jsx(bx,{})]})}function kx(){return n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"Compliance"})})}function Cx(){return n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[73.41px]","data-name":"list-checks 1",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:n.jsxs("g",{id:"list-checks 1",children:[n.jsx("path",{d:"M24.375 9.375H39.375",id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M24.375 22.5H39.375",id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M24.375 35.625H39.375",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:dr.p3eb8a400,id:"Vector_4",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:dr.p2dd93a80,id:"Vector_5",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function jx(){return n.jsxs("div",{className:"absolute bg-[#2e2e38] h-[192px] left-0 top-0 w-full","data-name":"Container",children:[n.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"Compliance 1",children:n.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[n.jsx("img",{alt:"",className:"absolute max-w-none object-cover size-full",src:nx}),n.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),n.jsx(Cx,{})]})}function Ex(){return n.jsx("div",{className:"absolute h-[27px] left-[16px] top-[149px] w-full max-w-full","data-name":"h3"})}function Sx(){return n.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex items-start justify-between p-[10px] relative size-full",children:[n.jsx(jx,{}),n.jsx(Ex,{})]})})})}function Fx(){return n.jsx("div",{className:"content-stretch flex items-center justify-center py-px relative shrink-0","data-name":"p",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[23.996px] not-italic relative shrink-0 text-[#747480] text-[16.002px] w-full",children:"Platforms for multiple tax compliances powered by AI agents"})})}function Ax(){return n.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:n.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0","data-name":"Link",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#747480] border-solid inset-0 pointer-events-none"}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] whitespace-nowrap",children:"Know more"})]})})}function zx(){return n.jsx("div",{className:"bg-white relative rounded-[5px] shrink-0 w-full","data-name":"Container",children:n.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full",children:[n.jsx(Fx,{}),n.jsx(Ax,{})]})})}function Ix(){return n.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[n.jsx(Sx,{}),n.jsx(zx,{})]})}),n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function Lx(){return n.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px]",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),n.jsx(kx,{}),n.jsx(Ix,{})]})}function Nx(){return n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"EY.ai Tax Labs"})})}function Tx(){return n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[73.41px]","data-name":"flask-conical (1) 1",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:n.jsxs("g",{id:"flask-conical (1) 1",children:[n.jsx("path",{d:dr.p110f3b80,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M12.0994 28.125H32.9006",id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M15.9375 3.75H29.0625",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function Rx(){return n.jsxs("div",{className:"absolute bg-gradient-to-t from-1/2 from-[rgba(46,46,56,0.6)] h-[192px] left-0 to-[rgba(0,0,0,0)] top-0 w-full","data-name":"Container",children:[n.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"Tax lab 1",children:n.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute inset-0 overflow-hidden",children:n.jsx("img",{alt:"",className:"absolute h-[150.96%] left-[-30.48%] max-w-none top-[-32.57%] w-[153.51%]",src:rx})}),n.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),n.jsx(Tx,{})]})}function Mx(){return n.jsx("div",{className:"h-[27px] relative shrink-0 w-full max-w-full","data-name":"h3"})}function Dx(){return n.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full",children:[n.jsx(Rx,{}),n.jsx(Mx,{})]})})})}function Bx(){return n.jsx("div",{className:"content-stretch flex items-center justify-center relative shrink-0","data-name":"p",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[23.996px] not-italic relative shrink-0 text-[#747480] text-[16.002px] w-full",children:"Your space to build the tax function of the future"})})}function Px({onOpenTaxLabs:i}){return n.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:n.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),i==null||i()},className:"bg-[#ffe600] border-0 content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0 cursor-pointer","data-name":"Get started",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2e2e38] text-[14px] whitespace-nowrap",children:"Get Started"})})})}function _x({onOpenTaxLabs:i}){return n.jsx("div",{className:"bg-white flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:n.jsx("div",{className:"flex flex-col justify-center size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start justify-between p-[20px] relative size-full",children:[n.jsx(Bx,{}),n.jsx(Px,{onOpenTaxLabs:i})]})})})}function Hx({onOpenTaxLabs:i}){return n.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[n.jsx(Dx,{}),n.jsx(_x,{onOpenTaxLabs:i})]})}),n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function Ox({onOpenTaxLabs:i}){return n.jsxs("div",{onClick:i,title:"Explore EY.ai Tax Labs",className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px] bg-transparent border-0 p-0 cursor-pointer text-left",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),n.jsx(Nx,{}),n.jsx(Hx,{onOpenTaxLabs:i})]})}function Wx({onOpenTaxLabs:i}){return n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(wx,{}),n.jsx(Lx,{}),n.jsx(Ox,{onOpenTaxLabs:i})]})}function Vx({onOpenTaxLabs:i}){return n.jsx("div",{className:"bg-white relative shrink-0 w-full","data-name":"Section",children:n.jsxs("div",{className:"content-stretch flex flex-col gap-8 items-stretch p-5 sm:p-8 md:p-10 relative size-full",children:[n.jsx(ux,{}),n.jsx(Wx,{onOpenTaxLabs:i})]})})}function $x(){return n.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function Ux(){return n.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-10 md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:n.jsx($x,{})})}function Gx(){return n.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${ix}")`},"data-name":"Group",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:n.jsxs("g",{id:"Group",children:[n.jsx("path",{d:dr.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),n.jsx("path",{d:dr.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function Yx(){return n.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:n.jsx(Gx,{})})}function qx(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:n.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:n.jsx(Yx,{})})})}function Zx(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:n.jsx(qx,{})})}function Kx(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:n.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function Qx(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:n.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function Xx(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:n.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function Jx(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:n.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function e1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:n.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function t1(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[n.jsx(Kx,{}),n.jsx(Qx,{}),n.jsx(Xx,{}),n.jsx(Jx,{}),n.jsx(e1,{})]})}function n1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:n.jsx(t1,{})})}function r1(){return n.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(Zx,{}),n.jsx(n1,{})]})}function i1(){return n.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:n.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function a1(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${ax}")`},"data-name":"Background"})})}function o1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(a1,{})]})})}function l1(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${ox}")`},"data-name":"Background"})})}function s1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(l1,{})]})})}function d1(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${lx}")`},"data-name":"Background"})})}function c1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(d1,{})]})})}function u1(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${sx}")`},"data-name":"Background"})})}function p1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(u1,{})]})})}function f1(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[n.jsx(o1,{}),n.jsx(s1,{}),n.jsx(c1,{}),n.jsx(p1,{})]})}function g1(){return n.jsxs("div",{className:"content-stretch flex flex-col sm:flex-row sm:items-center gap-4 relative shrink-0 w-full min-w-0",children:[n.jsx(i1,{}),n.jsx(f1,{})]})}function h1(){return n.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Container",children:n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-0 sm:px-[8px] relative w-full",children:n.jsx(g1,{})})})}function m1(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-8 md:gap-[36px] items-stretch relative shrink-0 w-full min-w-0",children:[n.jsx(r1,{}),n.jsx(h1,{})]})}function x1(){return n.jsx("div",{className:"content-stretch flex flex-col items-center relative shrink-0 w-full",children:n.jsx(m1,{})})}function v1({onOpenTaxLabs:i}){return n.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:[n.jsx(cx,{}),n.jsx(Vx,{onOpenTaxLabs:i}),n.jsxs("div",{className:"bg-white content-stretch flex flex-col items-stretch justify-center px-4 sm:px-8 md:px-[64px] py-10 md:py-14 relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:[n.jsx(Ux,{}),n.jsx(x1,{})]})]})}function y1({onOpenTaxLabs:i}){return n.jsx("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full min-w-0","data-name":"Body",children:n.jsx(v1,{onOpenTaxLabs:i})})}function b1(){const i=Nn();return n.jsxs("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden bg-white","data-name":"HOME 2",children:[n.jsx("div",{className:"sticky top-0 z-[300] w-full",children:n.jsx(gi,{variant:"hub",activeSection:"home",onNavigate:i,skipLinkTarget:"#home-content"})}),n.jsx("div",{id:"home-content",className:"w-full min-w-0",children:n.jsx(y1,{onOpenTaxLabs:()=>i("/phased")})})]})}const fa={p3955b500:"M80.5276 0L19.8341 22.1511L80.5276 11.4305V0Z",p3bfa7a00:"M3.3328 8H12.6672M8 12.6672L12.6672 8L8 3.3328",pf788bc0:"M29.572 49.9334H40.673V43.4875H29.572V38.4211H41.8524L37.7779 31.3598H20.3641V62.0601H44.9238V54.9988H29.5711L29.572 49.9334ZM61.2704 31.3607L56.0551 41.3795L50.8528 31.3607H40.673L51.3993 49.9343V62.0611H60.5788V49.9343L71.3197 31.3607H61.2704ZM71.519 96.4482C71.519 96.664 71.5043 96.9368 71.4905 97.0379H67.3784C67.4501 97.9867 68.0976 98.3752 68.8306 98.3752C69.2623 98.3752 69.6646 98.2457 70.0099 97.9003L71.2177 98.9208C70.5849 99.7116 69.6214 99.9991 68.7589 99.9991C66.775 99.9991 65.6388 98.4753 65.6388 96.4767C65.6388 94.3054 66.9761 92.9249 68.6441 92.9249C70.4269 92.9249 71.5199 94.4918 71.5199 96.4473L71.519 96.4482ZM67.4069 95.7153H69.8225C69.7647 94.9529 69.276 94.4358 68.5862 94.4358C67.7669 94.4358 67.4501 95.155 67.4069 95.7153ZM91.85 96.4482C91.85 96.664 91.8353 96.9368 91.8215 97.0379H87.7094C87.781 97.9867 88.4286 98.3752 89.1616 98.3752C89.5932 98.3752 89.9956 98.2457 90.3409 97.9003L91.5487 98.9208C90.9159 99.7116 89.9524 99.9991 89.0899 99.9991C87.106 99.9991 85.9698 98.4753 85.9698 96.4767C85.9698 94.3054 87.3071 92.9249 88.9751 92.9249C90.7579 92.9249 91.8509 94.4918 91.8509 96.4473L91.85 96.4482ZM87.7379 95.7153H90.1535C90.0957 94.9529 89.607 94.4358 88.9172 94.4358C88.0979 94.4358 87.781 95.155 87.7379 95.7153ZM84.3155 97.4402L85.437 98.5038C84.8621 99.2367 84.0712 99.9991 82.7339 99.9991C80.8794 99.9991 79.5127 98.5185 79.5127 96.4767C79.5127 94.6076 80.6489 92.9249 82.7624 92.9249C83.9702 92.9249 84.8042 93.4714 85.4223 94.3917L84.2724 95.5564C83.8701 95.0246 83.4384 94.6076 82.7486 94.6076C81.8136 94.6076 81.3249 95.3984 81.3249 96.4482C81.3249 97.4255 81.7566 98.3026 82.7624 98.3026C83.3805 98.3026 83.8985 97.972 84.3155 97.4402ZM68.6717 86.1676H67.0037V85.6928C66.6298 86.1097 66.0264 86.3109 65.422 86.3109C63.6677 86.3109 63.0063 85.0452 63.0063 83.2193V79.38H64.7028V83.0751C64.7028 83.9954 64.8902 84.6852 65.839 84.6852C66.7878 84.6852 66.9752 83.966 66.9752 83.132V79.3791H68.6717V86.1658V86.1676ZM73.9631 84.1837L73.7188 85.9095C73.3735 86.1823 72.7415 86.3118 72.3245 86.3118C71.2894 86.3118 70.4839 85.5357 70.4839 84.2985V81.0057H69.5066V79.3809H70.4839V77.6128L72.1803 76.7504V79.3818H73.7905V81.0066H72.1803V83.8539C72.1803 84.4436 72.4246 84.6595 72.8416 84.6595C73.2586 84.6595 73.6903 84.4427 73.9631 84.1837ZM48.1965 86.1676H46.5V82.4725C46.5 81.5522 46.2988 80.8762 45.35 80.8762C44.4012 80.8762 44.1854 81.4944 44.1854 82.4294V86.1676H42.4889V77.6128L44.1854 76.7504V79.8558C44.5592 79.482 45.0194 79.2376 45.7817 79.2376C47.5792 79.2376 48.1974 80.6181 48.1974 82.343L48.1965 86.1676ZM78.4776 99.8558H76.7232V96.1607C76.7232 95.2119 76.5074 94.5791 75.5586 94.5791C74.6667 94.5791 74.3792 95.1109 74.3792 96.1175V99.8558H72.6249V93.0691H74.3792V93.5293C74.7383 93.1701 75.2711 92.9258 76.0325 92.9258C77.8732 92.9258 78.4766 94.3495 78.4766 96.0174V99.8567L78.4776 99.8558ZM56.5364 92.4804C57.0976 92.4804 57.5431 92.0349 57.5431 91.4737C57.5431 90.9125 57.0976 90.467 56.5364 90.467C55.9752 90.467 55.5298 90.9125 55.5298 91.4737C55.5298 92.0349 55.9752 92.4804 56.5364 92.4804ZM11.7044 92.4804C12.2656 92.4804 12.7111 92.0349 12.7111 91.4737C12.7111 90.9125 12.2656 90.467 11.7044 90.467C11.1432 90.467 10.6978 90.9125 10.6978 91.4737C10.6978 92.0349 11.1432 92.4804 11.7044 92.4804ZM91.85 82.76C91.85 82.9759 91.8353 83.2487 91.8215 83.3497H87.7094C87.781 84.2985 88.4286 84.687 89.1616 84.687C89.5932 84.687 89.9956 84.5575 90.3409 84.2122L91.5487 85.2326C90.9159 86.0234 89.9524 86.3109 89.0899 86.3109C87.106 86.3109 85.9698 84.7871 85.9698 82.7885C85.9698 80.6172 87.3071 79.2367 88.9751 79.2367C90.7579 79.2367 91.8509 80.8037 91.8509 82.7591L91.85 82.76ZM87.7379 82.0271H90.1535C90.0957 81.2647 89.607 80.7476 88.9172 80.7476C88.0979 80.7476 87.781 81.4668 87.7379 82.0271ZM80.4193 86.1676H78.7513V85.6928C78.3774 86.1097 77.774 86.3109 77.1696 86.3109C75.4153 86.3109 74.754 85.0452 74.754 83.2193V79.38H76.4504V83.0751C76.4504 83.9954 76.6378 84.6852 77.5866 84.6852C78.5354 84.6852 78.7228 83.966 78.7228 83.132V79.3791H80.4193V86.1658V86.1676ZM54.9401 82.76C54.9401 82.9759 54.9254 83.2487 54.9116 83.3497H50.7995C50.8711 84.2985 51.5187 84.687 52.2516 84.687C52.6833 84.687 53.0856 84.5575 53.431 84.2122L54.6388 85.2326C54.006 86.0234 53.0425 86.3109 52.18 86.3109C50.196 86.3109 49.0598 84.7871 49.0598 82.7885C49.0598 80.6172 50.3972 79.2367 52.0652 79.2367C53.848 79.2367 54.941 80.8037 54.941 82.7591L54.9401 82.76ZM50.828 82.0271H53.2436C53.1857 81.2647 52.6971 80.7476 52.0073 80.7476C51.188 80.7476 50.8711 81.4668 50.828 82.0271ZM64.588 99.8558H62.8337V99.4103C62.2587 99.8273 61.9133 100 61.2952 100C59.3397 100 58.5057 98.3035 58.5057 96.405C58.5057 94.3485 59.483 92.9258 61.252 92.9258C61.8417 92.9258 62.402 93.0838 62.8337 93.4723V91.301L64.588 90.4239V99.8558ZM62.8346 97.757V95.1688C62.4608 94.7665 62.1016 94.5791 61.6121 94.5791C60.5916 94.5791 60.3464 95.3846 60.3464 96.3472C60.3464 97.4402 60.6623 98.3458 61.6552 98.3458C62.1439 98.3458 62.4892 98.1308 62.8346 97.757ZM55.6446 93.0691V99.8558H57.3989V93.0691H55.6446ZM54.6241 90.6544V92.0634C54.3651 91.977 54.0207 91.9339 53.7616 91.9339C53.2583 91.9339 53.0287 92.0918 53.0287 92.5235V93.07H54.4808V94.7095H53.0287V99.8567H51.2743V94.7095H50.3255V93.07H51.2743V92.2507C51.2743 90.9851 52.0652 90.468 53.3446 90.468C53.7185 90.468 54.265 90.5102 54.6241 90.6544ZM49.4621 99.8558H47.7078V96.1607C47.7078 95.2119 47.492 94.5791 46.5432 94.5791C45.6513 94.5791 45.3638 95.1109 45.3638 96.1175V99.8558H43.6095V93.0691H45.3638V93.5293C45.7229 93.1701 46.2557 92.9258 47.0171 92.9258C48.8578 92.9258 49.4612 94.3495 49.4612 96.0174V99.8567L49.4621 99.8558ZM39.3825 92.9258C37.427 92.9258 36.2045 94.4643 36.2045 96.4629C36.2045 98.5626 37.5419 100 39.3825 100C41.2232 100 42.5605 98.5626 42.5605 96.4629C42.5605 94.3632 41.338 92.9258 39.3825 92.9258ZM39.3825 98.3035C38.261 98.3035 38.0167 97.2252 38.0167 96.4629C38.0167 95.4131 38.4484 94.6085 39.3825 94.6085C40.3166 94.6085 40.7483 95.414 40.7483 96.4629C40.7483 97.2252 40.504 98.3035 39.3825 98.3035ZM34.508 97.4402L35.6295 98.5038C35.0546 99.2367 34.2637 99.9991 32.9264 99.9991C31.0719 99.9991 29.7052 98.5185 29.7052 96.4767C29.7052 94.6076 30.8414 92.9249 32.9549 92.9249C34.1627 92.9249 34.9967 93.4714 35.6148 94.3917L34.4649 95.5564C34.0626 95.0246 33.6309 94.6076 32.9411 94.6076C32.0061 94.6076 31.5174 95.3984 31.5174 96.4482C31.5174 97.4255 31.9491 98.3026 32.9549 98.3026C33.573 98.3026 34.091 97.972 34.508 97.4402ZM25.436 99.8558H23.6817V96.1607C23.6817 95.2119 23.4658 94.5791 22.517 94.5791C21.6252 94.5791 21.3239 95.1109 21.3239 96.1175V99.8558H19.5696V91.301L21.3239 90.4239V93.5293C21.6546 93.127 22.3444 92.9258 23.0204 92.9258C24.8032 92.9258 25.436 94.3348 25.436 96.0174V99.8558ZM18.4903 97.814L18.2313 99.5821C17.8722 99.8696 17.0088 99.9991 16.5486 99.9991C15.485 99.9991 14.7226 99.1504 14.7226 97.972V94.7077H13.5433V93.0682H14.7226V91.3001L16.477 90.4229V93.0682H18.4609V94.7077H16.477V97.4971C16.477 98.1153 16.7066 98.3164 17.1236 98.3164C17.5406 98.3164 18.1872 98.1006 18.4894 97.8131L18.4903 97.814ZM10.8273 93.0691V99.8558H12.5816V93.0691H10.8273ZM9.90694 93.0691L7.765 99.8558H6.15487L5.00491 95.729L3.84025 99.8558H2.23012L0.101035 93.0691H2.05652L3.07698 97.0085L4.22694 93.0691H5.82329L6.97325 97.0085L8.0084 93.0691H9.90694ZM62.5756 76.98V78.3743C62.187 78.2732 61.9289 78.2301 61.6984 78.2301C61.0949 78.2301 60.9654 78.4459 60.9654 78.7913V79.3809H62.1154V81.0204H60.9654V86.1676H59.269V81.0204H58.435V79.3809H59.269V78.5616C59.269 77.3823 59.8871 76.7789 61.3255 76.7789C61.7857 76.7789 62.1586 76.8652 62.5756 76.98ZM41.7118 84.1837L41.4675 85.9095C41.1222 86.1823 40.5187 86.3118 40.1017 86.3118C39.0666 86.3118 38.261 85.5357 38.261 84.2985V81.0057H37.0817V79.3809H38.261V77.6128L39.9575 76.7504V79.3818H41.5392V81.0066H39.9575V83.8539C39.9575 84.4436 40.2018 84.6595 40.6188 84.6595C41.0358 84.6595 41.4381 84.4427 41.7118 84.1837ZM33.8183 82.76C33.8183 82.9759 33.8036 83.2487 33.7898 83.3497H29.8209C29.8926 84.2985 30.5539 84.687 31.2878 84.687C31.7195 84.687 32.1071 84.5575 32.4524 84.2122L33.6603 85.2326C33.0991 85.9802 32.0786 86.3109 31.173 86.3109C29.2322 86.3109 28.0813 84.7871 28.0813 82.8023C28.0813 80.8174 29.3323 79.2367 31.1004 79.2367C32.998 79.2367 33.8183 80.9635 33.8183 82.76ZM29.8494 82.0271H32.2651C32.1934 81.2647 31.747 80.7476 31.0141 80.7476C30.2379 80.7476 29.8926 81.4668 29.8494 82.0271ZM27.2758 82.7894C27.2758 84.529 26.5566 86.3118 24.6305 86.3118C23.8828 86.3118 23.4227 86.039 23.1205 85.7506V87.8209L21.424 88.6696V79.3809H23.1205V79.8411C23.566 79.4388 24.0261 79.2376 24.659 79.2376C26.4849 79.2376 27.2758 80.9635 27.2758 82.7894ZM25.5214 82.8748C25.5214 81.8829 25.2624 80.8762 24.242 80.8762C23.7671 80.8762 23.3933 81.0921 23.1205 81.4797V84.068C23.3933 84.4565 23.8534 84.6861 24.343 84.6861C25.2918 84.6861 25.5214 83.8236 25.5214 82.8748ZM20.2447 86.1676H18.5482V85.6928C18.1459 86.095 17.6279 86.3109 16.9665 86.3109C15.6292 86.3109 14.5794 85.4484 14.5794 83.9531C14.5794 82.4578 15.5998 81.667 17.2246 81.667C17.6563 81.667 18.1018 81.7249 18.5473 81.9398V81.5807C18.5473 80.9479 18.1303 80.6888 17.3826 80.6888C16.8508 80.6888 16.3475 80.8184 15.8157 81.1343L15.1396 79.9265C15.8726 79.4663 16.5771 79.2367 17.4836 79.2367C19.1948 79.2367 20.2447 80.0707 20.2447 81.6092V86.1676ZM18.5482 84.1837V83.3212C18.2028 83.1054 17.7574 83.0337 17.412 83.0337C16.6643 83.0337 16.3052 83.3644 16.3052 83.9109C16.3052 84.4289 16.6359 84.8459 17.2687 84.8459C17.5994 84.8459 18.1744 84.7302 18.5482 84.1837ZM13.6452 86.1676H11.9488V82.4725C11.9488 81.5522 11.7476 80.8762 10.7988 80.8762C9.84999 80.8762 9.63415 81.4944 9.63415 82.4294V86.1676H7.93768V77.6128L9.63415 76.7504V79.8558C10.008 79.482 10.4681 79.2376 11.2305 79.2376C13.028 79.2376 13.6462 80.6181 13.6462 82.343V86.1676H13.6452ZM7.00264 83.4507C7.00264 85.4925 5.44946 86.3118 3.60971 86.3118C2.28615 86.3118 0.819302 85.8948 0 84.687L1.26569 83.5655C1.85537 84.27 2.70315 84.6007 3.56654 84.6007C4.58699 84.6007 5.17667 84.1405 5.17667 83.4939C5.17667 83.2349 5.07563 82.9759 4.64485 82.7609C4.32889 82.603 3.94037 82.5019 3.17801 82.3155C2.70315 82.2007 1.72586 81.9701 1.12149 81.4815C0.518034 80.9929 0.345356 80.2884 0.345356 79.6702C0.345356 77.758 1.98488 76.9818 3.59501 76.9818C4.98929 76.9818 5.99597 77.5568 6.80149 78.3761L5.5358 79.6124C4.94612 79.0227 4.37114 78.6921 3.47928 78.6921C2.71692 78.6921 2.15664 78.9364 2.15664 79.5692C2.15664 79.842 2.25767 80.0294 2.53047 80.1874C2.84643 80.36 3.29282 80.4895 3.98262 80.6622C4.80192 80.8781 5.56427 81.0645 6.18242 81.5678C6.72893 82.0133 7.00173 82.603 7.00173 83.4517L7.00264 83.4507ZM86.0414 79.6978L85.3489 81.3942C85.0898 81.1499 84.7877 80.9773 84.3716 80.9773C83.5661 80.9773 83.3667 81.6533 83.3667 82.4725V86.1676H81.6703V79.3809H83.3667V79.8558C83.7553 79.4673 84.2439 79.2376 84.7904 79.2376C85.2653 79.2376 85.6823 79.3818 86.0414 79.6978Z"},Tt=156,w1=`2px solid ${c.yellow}`,k1=Um.replace(/^Phase 1: /,"");function ga(i){i.currentTarget.style.outline=w1,i.currentTarget.style.outlineOffset="2px"}function ha(i){i.currentTarget.style.outline="none"}function Go(i){const{onNavigate:o,onBack:s,sectionStatus:p}=i,u=i.mode==="phase-overview",f=u?null:i.currentModuleId,h=u?void 0:i.onSectionClick,m=f?uf(f):null,x=u?"Foundational AI Training":m.title,v=u?{module:`Module ${Ps} of ${Ym}`,subModule:null}:{module:`Module ${Ps}`,subModule:`Sub-module ${m.order} of ${qm}`},C=p,[b,F]=I.useState(!1),E=I.useRef(null),B=f?Zm(f):{learn:[],apply:[]},{learn:D,apply:_}=B,Q=!u&&!!(m!=null&&m.supportsInPageNav)&&(D.length>0||_.length>0),H=E1(h||!m?[]:m.subModules.map(K=>K.id));return I.useEffect(()=>{if(!b)return;function K(xe){E.current&&!E.current.contains(xe.target)&&F(!1)}function he(xe){xe.key==="Escape"&&F(!1)}return document.addEventListener("mousedown",K),document.addEventListener("keydown",he),()=>{document.removeEventListener("mousedown",K),document.removeEventListener("keydown",he)}},[b]),n.jsxs("div",{style:{position:"sticky",top:0,zIndex:200},children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 md:gap-4 px-4 sm:px-6 md:px-10 py-3",style:{background:c.offBlack,borderBottom:`1px solid ${c.offBlack}`},children:[n.jsxs("div",{className:"flex items-center gap-2 md:gap-3 min-w-0 flex-1",children:[n.jsxs("button",{onClick:s,className:"flex items-center gap-2 shrink-0",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4},"aria-label":"Back to Tax Labs",onFocus:ga,onBlur:ha,children:[n.jsx(j1,{}),n.jsx("span",{className:"hidden sm:inline",style:{fontFamily:k.bold,fontSize:14,color:c.yellow,whiteSpace:"nowrap"},children:"Tax Labs"})]}),n.jsx("span",{className:"hidden sm:inline shrink-0","aria-hidden":"true",children:n.jsx(vp,{})}),n.jsxs("div",{ref:E,className:"relative min-w-0",children:[n.jsxs("button",{onClick:()=>F(K=>!K),"aria-haspopup":"menu","aria-expanded":b,className:"flex items-center gap-1.5 min-w-0 max-w-[min(100%,240px)] sm:max-w-none",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4,fontFamily:k.bold,fontSize:14,color:c.white},onFocus:ga,onBlur:ha,children:[n.jsx("span",{className:"truncate",children:k1}),n.jsx("span",{style:{fontSize:8,color:c.yellow,transform:b?"rotate(180deg)":"none",transition:"transform 0.15s",display:"inline-block",flexShrink:0},"aria-hidden":"true",children:"▼"})]}),b&&n.jsxs("div",{role:"menu","aria-label":"Jump to module",style:{position:"absolute",top:"calc(100% + 8px)",left:0,minWidth:260,maxWidth:"min(90vw, 320px)",background:c.confidentBlack,border:"1px solid rgba(255,255,255,0.14)",borderRadius:8,boxShadow:"0 12px 32px rgba(0,0,0,0.4)",padding:6,zIndex:300},children:[n.jsx(yp,{label:`Module ${Ps} Overview`,isCurrent:u,order:null,onClick:()=>{F(!1),u||o(Gm)}}),od.map(K=>n.jsx(yp,{label:K.title,isCurrent:K.id===f,order:K.order,onClick:()=>{F(!1),K.id!==f&&o(K.path)}},K.id))]})]}),n.jsx("span",{className:"hidden lg:inline shrink-0","aria-hidden":"true",children:n.jsx(vp,{})}),n.jsx("span",{className:"hidden lg:inline truncate",style:{color:c.gray01,fontFamily:k.regular,fontSize:14},"aria-current":"page",children:x})]}),n.jsxs("div",{className:"flex items-center gap-3 md:gap-5 shrink-0",children:[n.jsx(C1,{moduleLabel:v.module,subModuleLabel:v.subModule}),C&&n.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[n.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:c.yellow,flexShrink:0},"aria-hidden":"true"}),n.jsx("span",{style:{color:c.white,fontFamily:k.regular,fontSize:12,whiteSpace:"nowrap"},children:C})]})]})]}),Q&&n.jsxs("nav",{"aria-label":`${x} sections`,className:"flex gap-6 md:gap-8 overflow-x-auto px-4 sm:px-6 md:px-10 pt-2.5",style:{background:c.offWhite,borderBottom:"1px solid rgba(46,46,56,0.1)"},children:[D.length>0&&n.jsx(bp,{label:"Learn",items:D,activeSectionId:H,onSectionClick:h}),D.length>0&&_.length>0&&n.jsx("div",{className:"hidden sm:block w-px self-stretch mb-2.5",style:{background:"rgba(46,46,56,0.12)"},"aria-hidden":"true"}),_.length>0&&n.jsx(bp,{label:"Apply",items:_,activeSectionId:H,onSectionClick:h})]})]})}function C1({moduleLabel:i,subModuleLabel:o}){const s=o?`${i}|${o}`:i,[p,u]=I.useState(i),[f,h]=I.useState(o),[m,x]=I.useState(!1),[v,C]=I.useState(!1),b=I.useRef(s),F=I.useRef([]);I.useEffect(()=>()=>F.current.forEach(clearTimeout),[]),I.useEffect(()=>{if(s===b.current)return;b.current=s;const D=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(F.current.forEach(clearTimeout),F.current=[],D){u(i),h(o),x(!1),C(!1);return}C(!0),F.current.push(setTimeout(()=>{u(i),h(o),C(!1),x(!0),F.current.push(setTimeout(()=>x(!1),200))},100))},[s,i,o]);const E={borderRadius:12,padding:"6px 12px",fontSize:12,whiteSpace:"nowrap",lineHeight:1.2},B=f?`${p}, ${f}`:p;return n.jsxs("div",{role:"status","aria-live":"polite","aria-atomic":"true","aria-label":B,className:"flex items-center shrink-0",style:{gap:6,transform:m?"scale(1.03)":"scale(1)",opacity:v?.4:1,transition:"transform 200ms ease, opacity 100ms ease",transformOrigin:"right center"},children:[n.jsx("span",{style:{...E,background:f?"rgba(255,255,255,0.08)":c.yellow,border:f?`1px solid ${c.borderOnDark}`:"none",color:f?c.gray02:c.confidentBlack,fontFamily:f?k.regular:k.bold},children:p}),f&&n.jsxs(n.Fragment,{children:[n.jsx("span",{"aria-hidden":"true",style:{color:c.gray01,fontSize:11,fontFamily:k.regular,userSelect:"none"},children:"›"}),n.jsx("span",{style:{...E,background:c.yellow,color:c.confidentBlack,fontFamily:k.bold,boxShadow:"0 0 0 1px rgba(255,230,0,0.35)"},children:f})]})]})}function j1(){return n.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",border:`1.5px solid ${c.yellow}`,color:c.yellow,flexShrink:0,boxSizing:"border-box"},"aria-hidden":"true",children:n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",flexShrink:0},children:n.jsx("path",{d:"M7.5 2.5L4 6l3.5 3.5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})}function vp(){return n.jsx("span",{style:{color:c.gray01,fontSize:14,flexShrink:0},"aria-hidden":"true",children:"›"})}function yp({label:i,isCurrent:o,order:s,onClick:p}){return n.jsxs("button",{role:"menuitem","aria-current":o?"page":void 0,onClick:p,style:{width:"100%",display:"flex",alignItems:"center",gap:10,background:o?"rgba(255,230,0,0.1)":"none",border:"none",borderRadius:6,padding:"10px 10px",cursor:o?"default":"pointer",textAlign:"left",fontFamily:o?k.bold:k.regular,fontSize:13,color:o?c.yellow:c.white},onMouseEnter:u=>{o||(u.currentTarget.style.background="rgba(255,255,255,0.08)")},onMouseLeave:u=>{o||(u.currentTarget.style.background="none")},onFocus:ga,onBlur:ha,children:[s!==null&&n.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:18,height:18,borderRadius:"50%",fontSize:11,fontFamily:k.bold,background:o?c.yellow:"rgba(255,255,255,0.12)",color:o?c.offBlack:"rgba(255,255,255,0.7)",flexShrink:0},"aria-hidden":"true",children:s}),i]})}function bp({label:i,items:o,activeSectionId:s,onSectionClick:p}){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flexShrink:0},children:[n.jsx("span",{style:{fontFamily:k.bold,fontSize:10,letterSpacing:"0.06em",textTransform:"uppercase",color:c.gray01},children:i}),n.jsx("div",{style:{display:"flex",gap:20},children:o.map(u=>{const f=u.id===s,h={display:"flex",flexDirection:"column",alignItems:"center",gap:8,paddingBottom:10,background:"none",border:"none",color:f?c.offBlack:c.gray01,fontFamily:f?k.bold:k.regular,fontSize:14,whiteSpace:"nowrap",textDecoration:"none",cursor:"pointer",borderBottom:f?`3px solid ${c.yellow}`:"3px solid transparent",transition:"color 0.15s, border-color 0.15s"};return p?n.jsx("button",{onClick:()=>p(u.id),style:h,onFocus:ga,onBlur:ha,children:u.label},u.id):n.jsx("a",{href:`#${u.id}`,"aria-current":f?"location":void 0,style:h,onFocus:ga,onBlur:ha,children:u.label},u.id)})})]})}function E1(i){const[o,s]=I.useState(i[0]??null);return I.useEffect(()=>{if(i.length===0)return;const p=i.map(f=>document.getElementById(f)).filter(f=>f!==null);if(p.length===0)return;const u=new IntersectionObserver(f=>{const h=f.filter(m=>m.isIntersecting);if(h.length>0){const m=h.reduce((x,v)=>x.boundingClientRect.top<v.boundingClientRect.top?x:v);s(m.target.id)}},{rootMargin:`-${Tt}px 0px -60% 0px`,threshold:0});return p.forEach(f=>u.observe(f)),()=>u.disconnect()},[i.join(",")]),o}const Us={p18f7f580:"M12.6667 7.33333H3.33333C2.59695 7.33333 2 7.93029 2 8.66667V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66667C14 7.93029 13.403 7.33333 12.6667 7.33333Z",p3c2c1c00:"M4 7.3336C5.8411 7.3336 7.3336 5.8411 7.3336 4C7.3336 2.1589 5.8411 0.6664 4 0.6664C2.1589 0.6664 0.6664 2.1589 0.6664 4C0.6664 5.8411 2.1589 7.3336 4 7.3336Z",p4317f80:"M4.66667 7.33333V4.66667C4.66667 3.78261 5.01786 2.93477 5.64298 2.30964C6.2681 1.68452 7.11594 1.33333 8 1.33333C8.88405 1.33333 9.7319 1.68452 10.357 2.30964C10.9821 2.93477 11.3333 3.78261 11.3333 4.66667V7.33333"},S1="/assets/f5e2e2f2ea31280810b6cbd46b1af92fee8b344c-DR_OQro3.png",pf="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2091.85%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22clip0_1_2%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M91.85%200H0V100H91.85V0Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",ff="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_facebook.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1096)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M29.5615%2013.5H14.4385C13.92%2013.5%2013.5%2013.92%2013.5%2014.4385V29.5622C13.5%2030.08%2013.92%2030.5%2014.4385%2030.5H22.5808V23.9167H20.3652V21.3512H22.5808V19.4592C22.5808%2017.2634%2023.9217%2016.0677%2025.881%2016.0677C26.8195%2016.0677%2027.6256%2016.1378%2027.8607%2016.169V18.464L26.5022%2018.4647C25.4368%2018.4647%2025.2307%2018.9712%2025.2307%2019.7135V21.3519H27.7715L27.4407%2023.9175H25.2307V30.5H29.5629C30.08%2030.5%2030.5%2030.08%2030.5%2029.5615V14.4385C30.5%2013.92%2030.08%2013.5%2029.5615%2013.5Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1096%22%3E%0A%3Crect%20width%3D%2217%22%20height%3D%2217%22%20fill%3D%22white%22%20transform%3D%22translate(13.5%2013.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",gf="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_twitter.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M23.7821%2020.4474L30.7554%2012.3415H29.1029L23.048%2019.3797L18.212%2012.3415H12.6342L19.9472%2022.9845L12.6342%2031.4848H14.2867L20.6809%2024.0522L25.7881%2031.4848H31.3659L23.7821%2020.4474ZM21.5187%2023.0783L20.7777%2022.0185L14.8821%2013.5855H17.4203L22.1781%2020.3912L22.9191%2021.451L29.1037%2030.2974H26.5655L21.5187%2023.0783Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",hf="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_linkedin.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1091)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M17.1036%2016.0713C17.1036%2017.0345%2016.3293%2017.815%2015.3738%2017.815C14.4182%2017.815%2013.644%2017.0345%2013.644%2016.0713C13.644%2015.1087%2014.4182%2014.3275%2015.3738%2014.3275C16.3293%2014.3275%2017.1036%2015.1087%2017.1036%2016.0713ZM17.1175%2019.21H13.63V30.37H17.1175V19.21ZM22.6849%2019.21H19.2198V30.37H22.6856V24.5117C22.6856%2021.2544%2026.8909%2020.9879%2026.8909%2024.5117V30.37H30.37V23.3036C30.37%2017.8073%2024.1469%2018.0075%2022.6849%2020.7131V19.21Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1091%22%3E%0A%3Crect%20width%3D%2216.74%22%20height%3D%2216.74%22%20fill%3D%22white%22%20transform%3D%22translate(13.63%2013.63)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",mf="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_youtube.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1081)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cg%20id%3D%22Group_2%22%3E%0A%3Cg%20id%3D%22Group_3%22%3E%0A%3Cg%20id%3D%22Group_4%22%3E%0A%3Cg%20id%3D%22Group_5%22%3E%0A%3Cpath%20id%3D%22Vector%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M32.5402%2016.8423C33%2018.5133%2033%2022%2033%2022C33%2022%2033%2025.4865%2032.5402%2027.1578C32.2872%2028.0797%2031.5419%2028.8058%2030.5951%2029.0523C28.8796%2029.5%2022%2029.5%2022%2029.5C22%2029.5%2015.1204%2029.5%2013.4047%2029.0523C12.4581%2028.8058%2011.7126%2028.0797%2011.4596%2027.1578C11%2025.4865%2011%2022%2011%2022C11%2022%2011%2018.5133%2011.4596%2016.8423C11.7126%2015.9203%2012.4581%2015.1942%2013.4047%2014.9478C15.1204%2014.5%2022%2014.5%2022%2014.5C22%2014.5%2028.8796%2014.5%2030.5951%2014.9478C31.5419%2015.1942%2032.2872%2015.9203%2032.5402%2016.8423ZM19.75%2025.1656L25.5%2022.0001L19.75%2018.8344V25.1656Z%22%20fill%3D%22var(--fill-0%2C%20%232E2E38)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1081%22%3E%0A%3Crect%20width%3D%2222%22%20height%3D%2215%22%20fill%3D%22white%22%20transform%3D%22translate(11%2014.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",it={circleGlowTop:"/pipeline/circle-glow-top.svg",circleGlowBot:"/pipeline/circle-glow-bot.svg",bot:"/pipeline/bot.svg",copilot:"/pipeline/copilot-icon.svg",message:"/pipeline/message-circle.svg",database:"/pipeline/database.svg",userCheck:"/pipeline/user-check.svg",cpu:"/pipeline/cpu.svg",arrow:"/pipeline/arrow-right.svg",info:"/pipeline/info.svg",word:"/pipeline/word.svg",excel:"/pipeline/excel.svg",teams:"/pipeline/teams.svg",powerpoint:"/pipeline/powerpoint.svg",sharepoint:"/pipeline/sharepoint.svg",outlook:"/pipeline/outlook.svg",line1:"/pipeline/line1.svg",line3:"/pipeline/line3.svg",line4:"/pipeline/line4.svg"},wp=1200,kp=820,F1=[{title:"Chat",desc:"Conversational interface layer for user interaction",icon:it.message},{title:"RAG",desc:"Retrieval-Augmented Generation for contextual data",icon:it.database},{title:"Human in the Loop",desc:"Expert oversight and decision validation layer",icon:it.userCheck},{title:"Model",desc:"AI model inference and prediction engine",icon:it.cpu}];function A1({title:i,icon:o}){return n.jsxs("div",{className:"bg-white border border-[#C4C4CD] shadow-[0px_2px_5px_rgba(0,0,0,0.08)] flex items-center justify-between px-4 py-3.5 rounded-xl w-[420px]",children:[n.jsxs("div",{className:"flex flex-1 gap-3 items-center min-w-0",children:[n.jsx("div",{className:"bg-[#ffe600] flex items-center justify-center rounded-[10px] shrink-0 size-10",children:n.jsx("img",{alt:"",className:"size-7",height:28,src:o,width:28})}),n.jsx("p",{className:"flex-1 min-w-0 font-['EYInterstate:Bold',sans-serif] leading-6 text-base text-[#2e2e38] whitespace-nowrap",children:i})]}),n.jsx("img",{alt:"",className:"shrink-0 size-[18px]",height:18,src:it.arrow,width:18})]})}function z1(){return n.jsxs("div",{className:"absolute left-[521px] top-[219px] size-[384px]",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"-rotate-90 size-[384px]",children:n.jsxs("div",{className:"relative size-[384px]",children:[n.jsx("div",{className:"absolute bottom-1/2 left-0 right-0 top-0",children:n.jsx("img",{alt:"",className:"block size-full max-w-none",height:192,src:it.circleGlowTop,width:384})}),n.jsx("div",{className:"absolute bottom-0 left-0 right-0 top-1/2",children:n.jsx("img",{alt:"",className:"block size-full max-w-none",height:192,src:it.circleGlowBot,width:384})})]})})}),n.jsx("div",{className:"absolute left-[68px] top-[68px] size-[248px] rounded-full bg-[#1a1a24]"}),n.jsxs("div",{className:"absolute left-1/2 top-1/2 flex w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1",children:[n.jsx("div",{className:"flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[rgba(255,230,0,0.2)] bg-[#2E2E38]",children:n.jsx("img",{alt:"",className:"block size-6 max-w-none",height:24,src:it.bot,width:24})}),n.jsx("img",{alt:"Microsoft Copilot",className:"size-[116px] shrink-0",height:116,src:it.copilot,width:116})]})]})}function I1(){const i=I.useRef(null),[o,s]=I.useState(1);return I.useEffect(()=>{const p=i.current;if(!p)return;const u=()=>s(p.clientWidth/wp);u();const f=new ResizeObserver(u);return f.observe(p),()=>f.disconnect()},[]),n.jsx("div",{ref:i,className:"relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-2xl",style:{height:kp*o},"data-name":"Infographic - Core Processing Pipeline","data-node-id":"3440:2917",children:n.jsxs("div",{className:"absolute left-0 top-0 origin-top-left bg-[#1a1a24]",style:{width:wp,height:kp,transform:`scale(${o})`},children:[n.jsx(z1,{}),n.jsx("div",{className:"absolute left-12 top-[136px] flex h-[588px] flex-col items-start justify-between",children:F1.map(p=>n.jsx(A1,{...p},p.title))}),n.jsx("div",{className:"absolute",style:{inset:"11.83% 29.57% 76.15% 62.42%"},children:n.jsx("img",{alt:"Microsoft Word",className:"absolute inset-0 size-full max-w-none",src:it.word})}),n.jsx("div",{className:"absolute",style:{inset:"19.73% 18.63% 68.26% 73.35%"},children:n.jsx("img",{alt:"Microsoft Excel",className:"absolute inset-0 size-full max-w-none",src:it.excel})}),n.jsx("div",{className:"absolute left-[951px] top-[276px] h-[99px] w-[94px] overflow-clip",children:n.jsx("img",{alt:"Microsoft Teams",className:"absolute inset-0 size-full max-w-none",src:it.teams})}),n.jsx("div",{className:"absolute",style:{inset:"51.55% 11.58% 37.01% 80.41%"},children:n.jsx("img",{alt:"Microsoft PowerPoint",className:"absolute inset-0 size-full max-w-none",src:it.powerpoint})}),n.jsx("div",{className:"absolute left-[880px] top-[531px] h-[108px] w-[96px] overflow-clip",children:n.jsx("img",{alt:"Microsoft SharePoint",className:"absolute inset-0 size-full max-w-none",src:it.sharepoint})}),n.jsx("div",{className:"absolute left-[755px] top-[605px] h-[91px] w-[96px] overflow-clip",children:n.jsx("img",{alt:"Microsoft Outlook",className:"absolute inset-0 size-full max-w-none",src:it.outlook})}),n.jsx("div",{className:"absolute left-[492px] top-[603px] flex h-[108px] w-[173px] items-center justify-center",children:n.jsx("div",{className:"flex-none rotate-[-27.55deg]",children:n.jsx("div",{className:"relative h-[28px] w-[181px]",children:n.jsx("img",{alt:"",className:"absolute inset-0 size-full max-w-none",src:it.line1})})})}),n.jsx("div",{className:"absolute left-[474px] top-[364px] h-0 w-[43px]",children:n.jsx("img",{alt:"",className:"absolute inset-[-4px_0] size-full max-w-none",src:it.line3})}),n.jsx("div",{className:"absolute left-[474px] top-[511px] h-0 w-[43px]",children:n.jsx("img",{alt:"",className:"absolute inset-[-4px_0] size-full max-w-none",src:it.line3})}),n.jsx("div",{className:"absolute left-[472px] top-[153px] flex h-[95px] w-[148px] items-center justify-center",children:n.jsx("div",{className:"flex-none rotate-[26.57deg]",children:n.jsx("div",{className:"relative h-[31px] w-[149px]",children:n.jsx("img",{alt:"",className:"absolute inset-0 size-full max-w-none",src:it.line4})})})}),n.jsxs("div",{className:"absolute bottom-0 left-0 flex h-12 w-full items-center justify-center gap-2 bg-[#2E2E38] px-8",children:[n.jsx("img",{alt:"",className:"size-4",height:16,src:it.info,width:16}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] text-sm leading-[22.4px] text-[#c4c4cd] whitespace-nowrap",children:"EY AI Tax Hub · Core Processing Pipeline · Confidential"})]})]})})}function L1(){return n.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start justify-center not-italic relative shrink-0 w-full max-w-[800px]","data-name":"Frame",children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#ffe600] text-[32px] sm:text-[40px] md:text-[48px] md:leading-[56px]",children:"EY.ai Tax Labs"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] font-normal leading-[26px] md:leading-[28px] relative shrink-0 text-[#C4C4CD] text-[16px] md:text-[18px] w-full",children:"A structured phased engagement designed to empower your tax teams with AI capabilities, from foundational training to advanced workflow integration."})]})}function N1(){return n.jsx("div",{className:"relative shrink-0 w-full","data-name":"header-section",children:n.jsx("div",{className:"flex flex-row items-center size-full",children:n.jsx("div",{className:"content-stretch flex items-center justify-between pb-[24px] pt-[32px] md:pt-[40px] px-4 sm:px-8 md:px-[64px] relative size-full",children:n.jsx(L1,{})})})})}function T1(){return n.jsx("div",{className:"bg-[#1A1A24] relative shrink-0 w-full min-w-0","data-name":"diagram-viewport",children:n.jsx("div",{className:"flex flex-row items-center justify-center size-full min-w-0",children:n.jsx("div",{className:"content-stretch flex items-center justify-center px-4 sm:px-8 md:px-[48px] py-6 md:py-[40px] relative size-full min-w-0 w-full",children:n.jsx(I1,{})})})})}function R1(){return n.jsxs("div",{className:"bg-[#1A1A24] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full","data-name":"ai-ms365-schematic",children:[n.jsx(N1,{}),n.jsx(T1,{})]})}function M1(){return n.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2e2e38] w-full","data-name":"Frame",children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[24px] sm:text-[28px] md:text-[32px] md:leading-[40px]",children:"Phased Approach"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[24px] relative shrink-0 text-[15px] md:text-[16px] w-full",children:"A progressive journey from understanding to application to adoption, tailored for your organization's specific tax needs."})]})}function D1(){return n.jsxs("div",{className:"bg-[#F6F6FA] content-stretch flex items-start px-[16px] sm:px-[20px] py-[12px] relative rounded-[4px] shrink-0 max-w-full","data-name":"Frame",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-0 pointer-events-none rounded-[4px]"}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2e2e38] text-[13px] sm:text-[14px]",children:"5-6 Weeks | ~10 Participants | M365 Copilot Licensed"})]})}function B1(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full","data-name":"Frame",children:[n.jsx(M1,{}),n.jsx(D1,{})]})}function P1(){return n.jsx("div",{className:"bg-[#c4c4cd] relative shrink-0 w-full",children:n.jsx("div",{className:"content-stretch flex flex-col items-start px-4 sm:px-8 md:px-[64px] py-[24px] relative size-full",children:n.jsx(B1,{})})})}function _1(){return n.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"arrow-right",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsx("g",{id:"arrow-right",children:n.jsx("path",{d:fa.p3bfa7a00,id:"Vector",stroke:"var(--stroke-0, #1A1A24)",strokeLinecap:"round",strokeWidth:"2"})})})})}function H1(){return n.jsxs("div",{className:"bg-[#ffe600] content-stretch flex gap-[12px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0","data-name":"Frame",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1A1A24] text-[16px] whitespace-nowrap",children:"Download Engagement Overview"}),n.jsx(_1,{})]})}function O1(){return n.jsx("div",{className:"content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full","data-name":"Frame",children:n.jsx(H1,{})})}const Mo=[{week:"Week 1-2",number:1,title:"Foundational Training Workshops",description:"Covers AI concepts in Tax, Prompt engineering basics, and M365 Copilot across tax use cases.",locked:!1,completed:!1,coverage:["AI concepts in Tax","Prompt engineering (basics)","M365 Copilot across tax use cases"],deliverables:["Copilot Prompt Templates","Adoption & Enablement Toolkit"],outcome:"Workforce well-equipped with basics of AI, Prompt, M365 Copilot"},{week:"Week 3-4",number:2,title:"Brainstorming Use Cases",description:"Identify high-impact tax processes for AI, map current workflows, and classify opportunities between AI agents and prompts.",locked:!0,completed:!1,coverage:["Identify 5–7 tax processes for AI","Use cases across current tax workflow","Agent vs Prompt classification"],deliverables:["AI first process maps for 5-7 tax use cases","Recommendation note for Prompt vs M365 Agent"],outcome:"AI first process maps with clarity on agents vs prompts"},{week:"Week 5-6",number:3,title:"AI Agents & Prompts",description:"Advanced, hands-on training in prompt engineering and M365 Copilot agent design for the use cases identified in Phase 2.",locked:!0,completed:!1,coverage:["Advanced prompt engineering (hands-on)","M365 Copilot Agent design (hands-on)","Guided Prompt Library Development"],deliverables:["Sample Prompt Templates","Instructions for M365 Agents"],outcome:"Power users capable of building no-code agents independently"},{week:"Week 6",number:4,title:"Closure & AI Reinforcement",description:"Assess AI readiness, review adoption through Viva Insights, and establish governance guidance to close out the engagement responsibly.",locked:!0,completed:!1,coverage:["AI Readiness Assessment","Viva Insights Dashboard","AI governance guidance"],deliverables:["Governance Playbook","Copilot Monitoring Guidance"],outcome:"Real-time visibility into AI adoption, aligned with responsible AI"}];function Cp(){return n.jsx("div",{className:"relative shrink-0 size-[8px]",children:n.jsxs("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 8 8",children:[n.jsx("g",{clipPath:"url(#clip0_card_bullet)",children:n.jsx("path",{d:Us.p3c2c1c00,stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeWidth:"2"})}),n.jsx("defs",{children:n.jsx("clipPath",{id:"clip0_card_bullet",children:n.jsx("rect",{fill:"white",height:"8",width:"8"})})})]})})}function W1(){return n.jsx("div",{className:"relative shrink-0 size-[16px]",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsxs("g",{children:[n.jsx("path",{d:Us.p18f7f580,stroke:"var(--stroke-0, #747480)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"}),n.jsx("path",{d:Us.p4317f80,stroke:"var(--stroke-0, #747480)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"})]})})})}function V1(){return n.jsx("div",{className:"relative shrink-0 size-[16px]",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsx("path",{d:"M13.5 4L6 11.5L2.5 8",stroke:"var(--stroke-0, #FFFFFF)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"})})})}function Do({phase:i,onProceed:o}){return n.jsxs("div",{className:"bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-0 pointer-events-none rounded-[8px]"}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full",children:[n.jsxs("div",{className:"content-stretch flex items-center justify-between relative shrink-0 w-full min-w-0",children:[n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1A1A24] text-[20px] whitespace-nowrap",children:i.number})}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:i.week})]}),n.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full",children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[24px]",children:i.title}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#747480] text-[14px] w-[min-content]",children:i.description})]}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full",children:[n.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Coverage"}),n.jsx("div",{className:"content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full",children:i.coverage.map(s=>n.jsxs("div",{className:"content-stretch flex gap-[8px] items-center relative shrink-0",children:[n.jsx(Cp,{}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative min-w-0 text-[#2e2e38] text-[14px]",children:s})]},s))})]}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Deliverables"}),n.jsx("div",{className:"content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full",children:i.deliverables.map(s=>n.jsxs("div",{className:"content-stretch flex gap-[8px] items-center relative shrink-0",children:[n.jsx(Cp,{}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative min-w-0 text-[#2e2e38] text-[14px]",children:s})]},s))})]}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Outcome"}),n.jsx("div",{className:"bg-[#FFFBE0] border border-[#FFE600] rounded-[6px] px-[14px] py-[10px] relative shrink-0 w-full",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative text-[#2e2e38] text-[13px]",children:i.outcome})})]})]}),i.completed?n.jsxs("div",{className:"bg-[#00C864] content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0",children:[n.jsx(V1,{}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-white text-[16px] whitespace-nowrap",children:"Completed"})]}):i.locked?n.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[n.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0",children:[n.jsx(W1,{}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[16px] whitespace-nowrap",children:"This journey is locked"})]}),n.jsxs("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[12px]",children:["Complete Phase ",i.number-1," to unlock this journey"]})]}):n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer",onClick:o,children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2E2E38] text-[16px] whitespace-nowrap",children:"Click here to Proceed"})})]})]})}function $1({onProceed:i}){return n.jsx("div",{className:"relative shrink-0 w-full min-w-0",children:n.jsx("div",{className:"content-stretch flex flex-col gap-[24px] items-stretch px-4 sm:px-8 md:px-[64px] relative size-full",children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-[24px] relative shrink-0 w-full",children:[n.jsx(Do,{phase:Mo[0],onProceed:i}),n.jsx(Do,{phase:Mo[1]}),n.jsx(Do,{phase:Mo[2]}),n.jsx(Do,{phase:Mo[3]})]})})})}function U1(){return n.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function G1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-[40px] md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:n.jsx(U1,{})})}function Y1(){return n.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${pf}")`},"data-name":"Group",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:n.jsxs("g",{id:"Group",children:[n.jsx("path",{d:fa.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),n.jsx("path",{d:fa.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function q1(){return n.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:n.jsx(Y1,{})})}function Z1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:n.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:n.jsx(q1,{})})})}function K1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:n.jsx(Z1,{})})}function Q1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:n.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function X1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:n.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function J1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:n.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function e2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:n.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function t2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:n.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function n2(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0 w-full","data-name":"List",children:[n.jsx(Q1,{}),n.jsx(X1,{}),n.jsx(J1,{}),n.jsx(e2,{}),n.jsx(t2,{})]})}function r2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:n.jsx(n2,{})})}function i2(){return n.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(K1,{}),n.jsx(r2,{})]})}function a2(){return n.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:n.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function o2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${ff}")`},"data-name":"Background"})})}function l2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(o2,{})]})})}function s2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${gf}")`},"data-name":"Background"})})}function d2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(s2,{})]})})}function c2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${hf}")`},"data-name":"Background"})})}function u2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(c2,{})]})})}function p2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${mf}")`},"data-name":"Background"})})}function f2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(p2,{})]})})}function g2(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-[0px_10px] items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[n.jsx(l2,{}),n.jsx(d2,{}),n.jsx(u2,{}),n.jsx(f2,{})]})}function h2(){return n.jsxs("div",{className:"content-stretch flex flex-col sm:flex-row sm:items-center gap-4 relative shrink-0 w-full min-w-0",children:[n.jsx(a2,{}),n.jsx(g2,{})]})}function m2(){return n.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Container",children:n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-0 sm:px-[8px] relative w-full",children:n.jsx(h2,{})})})}function x2(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-8 md:gap-[36px] items-stretch relative shrink-0 w-full min-w-0",children:[n.jsx(i2,{}),n.jsx(m2,{})]})}function v2(){return n.jsx("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:n.jsx(x2,{})})}function y2(){return n.jsx("div",{className:"absolute h-[1200px] left-0 opacity-8 top-0 w-full pointer-events-none","data-name":"Background Motif",children:n.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:S1})})}function b2(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0",children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[n.jsx("p",{style:{fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:11,letterSpacing:"0.05em",textTransform:"uppercase",color:"#B89B00",margin:0},children:"Phase 1 of 4"}),n.jsx("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[0,1,2,3].map(i=>n.jsx("div",{style:{width:i===0?20:8,height:8,borderRadius:999,background:i===0?"#2e2e38":"#c4c4cd",transition:"width 0.2s"}},i))})]}),n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#2e2e38] text-[28px] sm:text-[36px] md:text-[48px] md:leading-[56px] w-full max-w-full",children:"Phase 1 — Foundational Training"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] font-normal leading-[26px] md:leading-[28px] relative shrink-0 text-[#747480] text-[16px] md:text-[18px] w-full max-w-[800px]",children:"Select a module below to begin your foundational journey into AI concepts, prompting, and M365 Copilot capabilities."})]})}function _s({onNavigate:i,icon:o,activeIcon:s,title:p,description:u,estimatedTime:f}){const[h,m]=I.useState(!1),[x,v]=I.useState(!1),C=()=>{h?i==null||i():m(!0)};return h?n.jsxs("div",{className:"w-full min-w-0 relative rounded-[8px]",style:{background:"#FFFFFF",border:x?"1.5px solid #2e2e38":"1.5px solid #ffe600",boxShadow:x?"0 8px 28px rgba(0,0,0,0.09)":"0 4px 16px rgba(255,230,0,0.2)",cursor:"pointer",transition:"border 0.15s, box-shadow 0.15s, transform 0.15s",transform:x?"translateY(-2px)":"none"},onClick:C,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),role:"button",tabIndex:0,onKeyDown:b=>(b.key==="Enter"||b.key===" ")&&C(),"aria-label":`Begin ${p}`,children:[n.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,width:x?6:4,background:"#ffe600",borderRadius:"8px 0 0 8px",transition:"width 0.1s"}}),n.jsx("div",{style:{position:"absolute",top:12,right:12,background:"#ffe600",color:"#1a1a24",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:20,fontFamily:"'EYInterstate:Bold',sans-serif",letterSpacing:"0.05em"},children:"✓ UNLOCKED"}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full",children:[n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:24,background:"#ffe600",flexShrink:0},children:s??o}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,flex:1},children:n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold text-[#2e2e38] text-[22px]",style:{lineHeight:"1.2",margin:0},children:p})}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%"},children:n.jsx("div",{style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:6,background:x?"#2e2e38":"#ffe600",color:x?"#ffffff":"#1A1A24",padding:"8px 16px",borderRadius:4,fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:13,transition:"background 0.15s ease-out, color 0.15s ease-out"},children:"Begin →"})})]})]}):n.jsx("div",{className:"w-full min-w-0 relative rounded-[8px]",style:{background:"#F6F6FA",border:"1px solid #F6F6FA",cursor:"pointer",transition:"box-shadow 0.15s",boxShadow:x?"0 4px 14px rgba(0,0,0,0.08)":"none"},onClick:C,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),role:"button",tabIndex:0,onKeyDown:b=>(b.key==="Enter"||b.key===" ")&&C(),"aria-label":`Unlock ${p}`,children:n.jsxs("div",{className:"content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full",children:[n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:24,background:"#F6F6FA",flexShrink:0,opacity:.6},children:o}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,flex:1},children:n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold text-[22px]",style:{lineHeight:"1.2",margin:0,color:"#c4c4cd"},children:p})}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%"},children:n.jsxs("div",{style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:6,background:x?"#ffe600":"#F6F6FA",color:x?"#1a1a24":"#c4c4cd",padding:"8px 16px",borderRadius:4,fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:13,transition:"background 0.2s, color 0.2s"},children:[n.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[n.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),n.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),x?"Click to Unlock":"Locked"]})})]})})}function w2({onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s}){return n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(_s,{onNavigate:i,icon:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}),n.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"})]}),activeIcon:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}),n.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"})]}),title:"Foundational Concepts of AI",description:"Understanding AI fundamentals and their application in tax workflows.",estimatedTime:"~45 min"}),n.jsx(_s,{onNavigate:o,icon:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),activeIcon:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),title:"AI Tax Prompting",description:"Core principles of effective prompt engineering for tax professionals.",estimatedTime:"~30 min"}),n.jsx(_s,{onNavigate:s,icon:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]}),activeIcon:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]}),title:"M365 Copilot Dashboard",description:"Hands-on exploration of Microsoft 365 Copilot capabilities across tax use cases.",estimatedTime:"~60 min"})]})}function k2({onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s}){return n.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Content Area",children:n.jsxs("div",{className:"content-stretch flex flex-col gap-[48px] items-stretch md:items-start px-6 md:px-[64px] py-12 md:py-[80px] relative size-full max-w-full",children:[n.jsx(b2,{}),n.jsx(w2,{onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s})]})})}function C2(){return n.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function j2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-10 md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:n.jsx(C2,{})})}function E2(){return n.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${pf}")`},"data-name":"Group",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:n.jsxs("g",{id:"Group",children:[n.jsx("path",{d:fa.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),n.jsx("path",{d:fa.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function S2(){return n.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:n.jsx(E2,{})})}function F2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:n.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:n.jsx(S2,{})})})}function A2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:n.jsx(F2,{})})}function z2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:n.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function I2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:n.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function L2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:n.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function N2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:n.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function T2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:n.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function R2(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0 w-full","data-name":"List",children:[n.jsx(z2,{}),n.jsx(I2,{}),n.jsx(L2,{}),n.jsx(N2,{}),n.jsx(T2,{})]})}function M2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:n.jsx(R2,{})})}function D2(){return n.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(A2,{}),n.jsx(M2,{})]})}function B2(){return n.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:n.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function P2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${ff}")`},"data-name":"Background"})})}function _2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(P2,{})]})})}function H2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${gf}")`},"data-name":"Background"})})}function O2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(H2,{})]})})}function W2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${hf}")`},"data-name":"Background"})})}function V2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(W2,{})]})})}function $2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${mf}")`},"data-name":"Background"})})}function U2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx($2,{})]})})}function G2(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[n.jsx(_2,{}),n.jsx(O2,{}),n.jsx(V2,{}),n.jsx(U2,{})]})}function Y2(){return n.jsxs("div",{className:"content-stretch flex items-start relative shrink-0 w-full",children:[n.jsx(B2,{}),n.jsx(G2,{})]})}function q2(){return n.jsx("div",{className:"relative shrink-0 w-full","data-name":"Container",children:n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-[8px] relative size-full",children:n.jsx(Y2,{})})})}function Z2(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full",children:[n.jsx(D2,{}),n.jsx(q2,{})]})}function K2(){return n.jsx("div",{className:"content-stretch flex flex-col items-center relative shrink-0 w-full",children:n.jsx(Z2,{})})}function Q2({onProceed:i}){return n.jsxs("div",{className:"bg-white content-stretch flex flex-col gap-[48px] items-start pb-[80px] relative shrink-0 w-full",children:[n.jsx(P1,{}),n.jsx($1,{onProceed:i}),n.jsx(O1,{})]})}function X2({onNavigateToPhase1:i}={}){const o=Nn();return n.jsxs("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full max-w-full min-w-0 overflow-x-hidden","data-name":"EY.ai Tax Labs - Phased Engagement",children:[n.jsx("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full sticky top-0 z-[300]","data-name":"Top Navigation",children:n.jsx(gi,{variant:"hub",activeSection:"tax-labs",onNavigate:o,skipLinkTarget:"#phased-content"})}),n.jsxs("div",{id:"phased-content",className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:[n.jsx(R1,{}),n.jsx(Q2,{onProceed:i})]}),n.jsxs("div",{className:"bg-white content-stretch flex flex-col items-stretch justify-center px-4 sm:px-8 md:px-[64px] py-10 md:py-14 relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:[n.jsx(G1,{}),n.jsx(v2,{})]})]})}function J2({onNavigateToFoundational:i,onNavigateToAiTaxPrompting:o,onNavigateToCopilotHub:s,onNavigate:p}={}){const u=Nn(),f=p??(h=>u(h));return n.jsxs("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full max-w-full min-w-0 overflow-x-hidden","data-name":"EY.ai Tax Labs - Phase 1",children:[n.jsx(y2,{}),n.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full sticky top-0 z-[300]","data-name":"Top Navigation",children:[n.jsx(gi,{variant:"learning",onNavigate:f,skipLinkTarget:"#phase1-content"}),n.jsx(Go,{mode:"phase-overview",onNavigate:f,onBack:()=>f("/phased")})]}),n.jsx("div",{id:"phase1-content",className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0 overflow-x-hidden",children:n.jsx(k2,{onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s})}),n.jsx("div",{className:"bg-white relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:n.jsx("div",{className:"flex flex-col items-stretch justify-center w-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-stretch justify-center px-4 sm:px-6 md:px-[64px] py-10 md:py-14 relative w-full",children:[n.jsx(j2,{}),n.jsx(K2,{})]})})})]})}const jp=`
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
.surface-dark .cheat-section h2,
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
.rise-section .rise-title {
  font-size: 32px; font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 12px;
  letter-spacing: -0.5px;
  width: 100%;
}
.rise-section .rise-title .hl { color: var(--ey-yellow); }
.rise-section .rise-sub {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-02);
}
.rise-section .rise-hint {
  margin: 0 0 40px;
  font-size: 14px;
  font-style: italic;
  color: var(--gray-01);
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
.rise-card-top--img {
  height: 160px;
  padding: 0;
  background: var(--off-white);
  overflow: hidden;
}
.rise-card-top--img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.rise-card-body { padding: 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.rise-card-meta {
  display: flex; justify-content: space-between; align-items: baseline;
  font-size: 11px; margin: 0;
}
.rise-card-meta .source { font-weight: 700; color: var(--ey-dark); text-transform: uppercase; letter-spacing: 0.04em; }
.rise-card-body p {
  font-size: 14px; line-height: 1.4;
  color: var(--ey-dark); font-weight: 400;
  margin: 0;
  flex: 1;
}
.rise-card-body .date {
  font-size: 12px;
  color: var(--gray-01);
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
  height: 160px;
  padding: 0;
  background: var(--off-white);
  overflow: hidden;
}
.wrong-card-top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.wrong-card-body {
  padding: 20px;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}
.wrong-card-meta {
  display: flex; justify-content: space-between; align-items: baseline;
  font-size: 11px; margin: 0;
}
.wrong-card-meta .source { font-weight: 700; color: #FF4136; text-transform: uppercase; letter-spacing: 0.04em; }
.wrong-card-body p {
  font-size: 14px; line-height: 1.4;
  color: var(--ey-dark); font-weight: 400;
  margin: 0;
  flex: 1;
}
.wrong-card-body .date {
  font-size: 12px;
  color: var(--muted-foreground);
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
  margin: 0 0 12px;
  width: 100%;
  letter-spacing: -0.5px;
  text-align: left;
}
.gva-section .gva-sub {
  margin: 0 0 40px;
  max-width: 820px;
  font-size: 15px;
  line-height: 1.55;
  color: var(--gray-02);
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

/* ===== STRATEGIC DIVIDE / Why Fundamentals ===== */
.paths-section {
  background: var(--surface-light);
  border-bottom: 1px solid var(--gray-02);
  padding: 80px 64px 64px;
  text-align: center;
}
.paths-equation {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0;
  padding: 16px 28px;
  border-radius: 999px;
  background: var(--off-white);
  border: 1px solid var(--gray-02);
}
.paths-eq-bad {
  font-size: 22px;
  font-weight: 700;
  color: #FF4136;
}
.paths-eq-op {
  font-size: 20px;
  color: var(--gray-01);
}
.paths-eq-miss {
  font-size: 22px;
  font-weight: 700;
  color: #FF4136;
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
.evo-nest-toggle { cursor: pointer; border-radius: 8px; }
.evo-nest-toggle:hover { background: rgba(255,255,255,0.04); }
.evo-nest-toggle:focus-visible { outline: 2px solid var(--ey-yellow); outline-offset: 2px; }
.evo-nest-chevron { margin-left: 4px; flex-shrink: 0; transition: transform 0.25s ease; }
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

<!-- ======== HERO — dark spectrum (Frame 7), aligned with Copilot Hub / Prompting ======== -->
<section class="hero" id="home" aria-label="Module 1 hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-inner">
    <div>
      <h1 class="hero-title">
        AI Foundations for the <span class="hl">Future-Ready</span> Tax Function
      </h1>
      <div class="hero-cta">
        <button type="button" class="btn-primary" onclick="document.getElementById('act-now').scrollIntoView({behavior:'smooth'})">Begin Module</button>
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
    <p class="paths-equation" id="paths-heading" aria-label="AI Hype plus Zero Fundamentals equals Missed Opportunities">
      <span class="paths-eq-bad">AI Hype</span>
      <span class="paths-eq-op">+</span>
      <span class="paths-eq-bad">Zero Fundamentals</span>
      <span class="paths-eq-op">=</span>
      <span class="paths-eq-miss">Missed Opportunities</span>
    </p>
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
    <a class="paths-cta" href="#evolution">Let's Start with the Fundamentals👇</a>
  </div>
</section>

<!-- ======== AI EVOLUTION TIMELINE (Figma 3276:17185) ======== -->
<section class="evo-section surface-dark" id="evolution" aria-labelledby="evo-heading">
  <h2 id="evo-heading" class="evo-title">The Evolution of AI</h2>
  <p class="evo-sub">Each layer is a subset of the one before it — building on the last</p>

  <div id="evo-timeline-view">
    <p class="evo-builds" id="evo-builds" aria-live="polite"></p>

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
  <p class="section-subtitle" style="max-width:700px; color:var(--gray-01);">Follow one prompt through five beats and learn what happens between your question and the final answer.</p>

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
const BEATS = ['ask','pipeline','inside','output','hallucination','you','better'];
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
  if (currentBeat < BEATS.length - 1) { currentBeat++; renderBeat(); }
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

function renderBeat() {
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
    ann.innerHTML = \`<div style="border:1px solid rgba(255,230,0,0.25);border-radius:12px;overflow:hidden;background:var(--white);"><div style="background:rgba(255,230,0,0.07);border-bottom:1px solid rgba(255,230,0,0.15);padding:10px 18px;display:flex;align-items:center;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span style="color:var(--eyebrow-gold);font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">What is a Prompt?</span></div><div style="padding:18px 20px;display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start;"><div><p style="color:var(--ey-dark);font-size:14px;font-weight:700;margin:0 0 6px;line-height:1.4;">This is the instruction given to AI.</p><p style="color:var(--gray-01);font-size:12px;line-height:1.6;margin:0 0 14px;">The clearer the instruction, the better the answer.</p><div style="display:inline-flex;align-items:center;gap:6px;background:rgba(0,200,100,0.1);border:1px solid rgba(0,200,100,0.25);padding:7px 14px;border-radius:20px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:12px;font-weight:700;">Prompt = What you ask AI to do</span></div></div><div style="background:var(--off-white);border:1px solid rgba(255,230,0,0.15);border-left:3px solid var(--ey-yellow);border-radius:8px;padding:14px 16px;"><div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Everyday Analogy</span></div><p style="color:var(--ey-dark);font-size:13px;font-weight:600;margin:0 0 6px;line-height:1.4;">Like giving directions to a cab driver.</p><p style="color:var(--gray-01);font-size:12px;line-height:1.5;margin:0;">A specific destination leads to a better journey.</p></div></div></div>\`;
    chatEl.appendChild(ann);
    chatEl.scrollTop = chatEl.scrollHeight;

  } else if (beat === 'pipeline') {
    barEl.style.display = 'none';
    inputEl.value = ''; inputEl.style.color = 'var(--text-secondary)'; inputEl.style.borderColor = 'rgba(46,46,56,0.08)';
    addChatBubble('You', 'Summarize the GST implications for an online seller selling goods across multiple Indian states');
    showThinking('Processing your prompt...');
    setTimeout(function () {
      removeThinking();
      var exp = document.createElement('div');
      exp.style.cssText = 'margin:0 0 20px 0;animation:fadeInMsg 0.7s ease-out forwards;opacity:0;';
      exp.innerHTML = \`<div style="border:1px solid rgba(46,46,56,0.07);border-radius:14px;overflow:hidden;background:linear-gradient(135deg,var(--white),var(--off-white));"><div style="padding:14px 20px;background:rgba(46,46,56,0.025);border-bottom:1px solid rgba(46,46,56,0.06);display:flex;align-items:center;gap:12px;"><div style="width:34px;height:34px;border-radius:50%;background:rgba(255,230,0,0.1);border:1px solid rgba(255,230,0,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div><div style="color:var(--ey-dark);font-size:14px;font-weight:700;">What's happening right now: the pipeline at a glance</div><div style="color:var(--gray-01);font-size:11px;margin-top:3px;"></div></div></div><div style="padding:18px 20px;"><p style="color:var(--gray-01);font-size:13px;line-height:1.7;margin:0 0 18px;">Every AI response travels through <strong style="color:var(--ey-dark);">7 invisible steps</strong> before reaching you</p><div style="display:flex;align-items:flex-start;gap:0;margin-bottom:18px;overflow-x:auto;padding-bottom:2px;justify-content:center;"><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,230,0,0.12);border:1.5px solid rgba(255,230,0,0.45);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><span style="color:rgba(255,230,0,0.9);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Prompt</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:linear-gradient(90deg,rgba(255,230,0,0.4),rgba(70,150,255,0.3));"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none" style="margin-bottom:0;"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.2)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(70,150,255,0.08);border:1.5px dashed rgba(70,150,255,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg></div><span style="color:rgba(70,150,255,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Tokens</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(0,200,100,0.08);border:1.5px dashed rgba(0,200,100,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6h-8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z"/><path d="M9 21h6"/></svg></div><span style="color:rgba(0,200,100,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">LLM</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,125,30,0.08);border:1.5px dashed rgba(255,125,30,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><span style="color:rgba(255,125,30,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">RAG</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(70,150,255,0.08);border:1.5px dashed rgba(70,150,255,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span style="color:rgba(70,150,255,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Output</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,65,54,0.08);border:1.5px dashed rgba(255,65,54,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg></div><span style="color:rgba(255,65,54,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Risk?</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(0,200,100,0.08);border:1.5px dashed rgba(0,200,100,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span style="color:rgba(0,200,100,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">You</span></div></div></div></div>\`;
      chatEl.appendChild(exp);
      chatEl.scrollTop = chatEl.scrollHeight;
    }, 700);

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





<!-- ======== CHEAT SHEET — Functional Taxonomy (Figma 3455:17116) ======== -->
<section class="section surface-neutral cheat-section" id="cheatsheet" data-node-id="3455:17116" aria-labelledby="cheat-heading">
  <p class="cheat-label">Functional Taxonomy</p>
  <h2 id="cheat-heading">GenAI Can Be Your Smart Thought Partner</h2>

  <div class="cheat-grid">
    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Generate</h3>
      </div>
      <p class="cheat-card-desc">Create structural outlines and preliminary brief drafts.</p>
      <p class="cheat-card-eg">e.g. Drafting a customs response draft.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Extract</h3>
      </div>
      <p class="cheat-card-desc">Locate target parameters inside massive scanned files.</p>
      <p class="cheat-card-eg">e.g. Pulling loan rates from audit PDFs.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Query</h3>
      </div>
      <p class="cheat-card-desc">Retrieve answers from localized document repositories.</p>
      <p class="cheat-card-eg">e.g. Interrogating statutory definitions.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Transform</h3>
      </div>
      <p class="cheat-card-desc">Reformat tabular listings into valid tax formats.</p>
      <p class="cheat-card-eg">e.g. Structuring transaction logs to ledger tables.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Classify</h3>
      </div>
      <p class="cheat-card-desc">Categorize line-item transactions automatically.</p>
      <p class="cheat-card-eg">e.g. Tagging capital vs revenue expenses.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Summarise</h3>
      </div>
      <p class="cheat-card-desc">Condense long-form regulatory briefs into bullet summaries.</p>
      <p class="cheat-card-eg">e.g. Reading 200-page high court judgments.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Analyse</h3>
      </div>
      <p class="cheat-card-desc">Examine financial reports for internal math outliers.</p>
      <p class="cheat-card-eg">e.g. Scanning tax schedules for reconciliation errors.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Evaluate</h3>
      </div>
      <p class="cheat-card-desc">Verify contracts against compliance checklists.</p>
      <p class="cheat-card-eg">e.g. Highlighting missing clause safeguards.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Explain</h3>
      </div>
      <p class="cheat-card-desc">Simplify complex cross-border guidelines on request.</p>
      <p class="cheat-card-eg">e.g. Explaining BEPS Pillar Two parameters.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Compare</h3>
      </div>
      <p class="cheat-card-desc">Compare tax regulations across multiple active years.</p>
      <p class="cheat-card-eg">e.g. Contrasting Finance Act revisions.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Advise</h3>
      </div>
      <p class="cheat-card-desc">Model hypothetical tax structuring variations.</p>
      <p class="cheat-card-eg">e.g. Analyzing local restructuring options.</p>
    </article>

    <article class="cheat-card">
      <div class="cheat-card-title">
        <span class="cheat-card-icon" aria-hidden="true"><img src="/icons/capability-star.svg" alt="" width="18" height="18"></span>
        <h3>Synthesize</h3>
      </div>
      <p class="cheat-card-desc">Combine disparate sources into unified summaries.</p>
      <p class="cheat-card-eg">e.g. Consolidating state tax policy revisions.</p>
    </article>
  </div>
</section>

<style>
/* Figma 3455:17116 — Capabilities Grid on light EY surface */
.cheat-section {
  padding: 80px;
  text-align: left;
  background: var(--off-white);
}
.cheat-section .cheat-label {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--eyebrow-gold);
}
.cheat-section h2 {
  margin: 0 0 40px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ey-dark);
  text-align: left;
}
.cheat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
}
.cheat-card {
  background: var(--white);
  border: 1px solid var(--gray-02);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  min-height: 100%;
}
.cheat-card-title {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cheat-card-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  overflow: hidden;
  display: block;
}
.cheat-card-icon img {
  width: 18px;
  height: 18px;
  display: block;
}
.cheat-card-title h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--ey-dark);
  line-height: 1.2;
}
.cheat-card-desc {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--gray-01);
  flex: 1;
}
.cheat-card-eg {
  margin: 0;
  font-size: 12px;
  line-height: 1.35;
  color: var(--accent-blue);
}
@media (max-width: 1100px) {
  .cheat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .cheat-section { padding: 56px 24px; }
  .cheat-section h2 { font-size: 24px; margin-bottom: 28px; }
  .cheat-grid { grid-template-columns: 1fr; }
}
</style>


<section class="section surface-dark gva-section" id="genai-vs-agents" aria-labelledby="gva-heading" data-node-id="3519:3747">
  <h2 id="gva-heading" class="gva-title">LLM vs AI Agent vs Agentic AI</h2>
  <p class="gva-sub">Each level builds on the previous by adding new capabilities. Understanding the difference helps you choose the right tool for the job.</p>

  <div class="gva-spectrum">
    <button type="button" class="gva-spectrum-card" data-tone="blue" data-gva-open="llm" aria-haspopup="dialog">
      <div class="gva-spectrum-head">
        <p class="gva-spectrum-title">LLM (GenAI)</p>
        <span class="gva-badge">“Tell me.”</span>
      </div>
      <div class="gva-spectrum-body">
        <p class="gva-spectrum-desc">Answers questions and creates content. Think of it as a knowledgeable assistant.</p>
        <div class="gva-flow">Creates content</div>
        <div>
          <p class="gva-best-label">Best Used When</p>
          <p class="gva-best-value">You need information, a draft, or ideas</p>
        </div>
        <span class="gva-card-cta">Open details →</span>
      </div>
    </button>

    <button type="button" class="gva-spectrum-card" data-tone="green" data-gva-open="agent" aria-haspopup="dialog">
      <div class="gva-spectrum-head">
        <p class="gva-spectrum-title">AI Agent</p>
        <span class="gva-badge">“Do it.”</span>
      </div>
      <div class="gva-spectrum-body">
        <p class="gva-spectrum-desc">Not only answers — but also does things. Think of it as a virtual team member.</p>
        <div class="gva-flow">Tools &amp; Actions</div>
        <div>
          <p class="gva-best-label">Best Used When</p>
          <p class="gva-best-value">Tasks are repetitive or require multiple actions</p>
        </div>
        <span class="gva-card-cta">Open details →</span>
      </div>
    </button>

    <button type="button" class="gva-spectrum-card" data-tone="orange" data-gva-open="agentic" aria-haspopup="dialog">
      <div class="gva-spectrum-head">
        <p class="gva-spectrum-title">Agentic AI</p>
        <span class="gva-badge">“Own it.”</span>
      </div>
      <div class="gva-spectrum-body">
        <p class="gva-spectrum-desc">Manages an entire objective from start to finish. Think of it as a project manager.</p>
        <div class="gva-flow">Planning &amp; Workflow</div>
        <div>
          <p class="gva-best-label">Best Used When</p>
          <p class="gva-best-value">Multiple steps must be coordinated</p>
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
      <p class="gva-banner-title">When Should I Use Which?</p>
      <p class="gva-banner-body">LLM: get an answer or draft content (“Tell me.”). AI Agent: complete a task (“Do it.”). Agentic AI: manage a process with multiple steps (“Own it.”). Each level inherits everything from the previous level.</p>
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
      badge: '“Tell me.”',
      title: 'LLM (Generative AI)',
      image: '/llm.png',
      imageAlt: 'Large language model generating content',
      mantra: '“Tell me.”',
      blocks: [
        { type: 'lead', text: 'Answers questions and creates content.' },
        { type: 'list', label: 'What it gives you', items: ['Answer', 'Draft', 'Summary', 'Email', 'Presentation content'] },
        { type: 'analogy', label: 'Think of it as', text: 'A knowledgeable assistant.' },
        { type: 'example', label: 'Example', quote: '"Summarize the GST implications for e-commerce sellers."', text: 'AI returns an answer.' },
        { type: 'list', label: 'Best Used When', items: ['You need information', 'You need a draft', 'You need ideas'] },
        { type: 'cap', label: 'New Capability Introduced', text: 'Creates content' }
      ]
    },
    agent: {
      tone: 'green',
      badge: '“Do it.”',
      title: 'AI Agent',
      image: '/ai.png',
      imageAlt: 'AI agent assisting with workplace tasks',
      mantra: '“Do it.”',
      blocks: [
        { type: 'lead', text: 'Not only answers — but also does things.' },
        { type: 'list', label: 'What is added?', items: ['LLM Capability', 'Access to tools', 'Ability to take actions'] },
        { type: 'analogy', label: 'Think of it as', text: 'A virtual team member.' },
        { type: 'example', label: 'Instead of:', quote: 'Summarize this GST notice', text: 'The Agent: reads the notice, extracts key facts, drafts a summary, and stores it in the correct folder.' },
        { type: 'list', label: 'Best Used When', items: ['Tasks are repetitive', 'Multiple actions are required', 'The process is still relatively simple'] },
        { type: 'cap', label: 'New Capability Introduced', text: 'Takes action' }
      ]
    },
    agentic: {
      tone: 'orange',
      badge: '“Own it.”',
      title: 'Agentic AI',
      image: '/agentic.png',
      imageAlt: 'Agentic AI coordinating a multi-step workflow',
      mantra: '“Own it.”',
      blocks: [
        { type: 'lead', text: 'Manages an entire objective from start to finish.' },
        { type: 'list', label: 'What is added?', items: ['Planning', 'Decision-making', 'Multi-step workflow management'] },
        { type: 'analogy', label: 'Think of it as', text: 'A project manager.' },
        { type: 'example', label: 'Goal:', quote: 'Prepare an initial response package for a GST notice.', text: 'Agentic AI can: 1. Review the notice 2. Identify due dates 3. Gather supporting documents 4. Draft response points 5. Create a review package' },
        { type: 'list', label: 'Best Used When', items: ['Multiple steps are involved', 'Decisions need to be made', 'Several tasks must be coordinated'] },
        { type: 'cap', label: 'New Capability Introduced', text: 'Plans and coordinates work' }
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
 */const ev=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tv=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,s,p)=>p?p.toUpperCase():s.toLowerCase()),Ep=i=>{const o=tv(i);return o.charAt(0).toUpperCase()+o.slice(1)},xf=(...i)=>i.filter((o,s,p)=>!!o&&o.trim()!==""&&p.indexOf(o)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=I.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:p,className:u="",children:f,iconNode:h,...m},x)=>I.createElement("svg",{ref:x,...nv,width:o,height:o,stroke:i,strokeWidth:p?Number(s)*24/Number(o):s,className:xf("lucide",u),...m},[...h.map(([v,C])=>I.createElement(v,C)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(i,o)=>{const s=I.forwardRef(({className:p,...u},f)=>I.createElement(rv,{ref:f,iconNode:o,className:xf(`lucide-${ev(Ep(i))}`,`lucide-${i}`,p),...u}));return s.displayName=Ep(i),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Gs=ot("arrow-right",iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ov=ot("chevron-left",av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ho=ot("chevron-right",lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],dv=ot("circle-check-big",sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],uv=ot("copy",cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],fv=ot("cpu",pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],hv=ot("eye-off",gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xv=ot("file-text",mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Sp=ot("lightbulb",vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],bv=ot("list-checks",yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]],kv=ot("list-tree",wv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],jv=ot("palette",Cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Sv=ot("refresh-cw",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Av=ot("rotate-ccw",Fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Iv=ot("scale",zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Nv=ot("shield",Lv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]],vf=ot("table-2",Tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Mv=ot("target",Rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],yf=ot("user",Dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Pv=ot("zap",Bv),_t={page:c.confidentBlack,surface:c.offBlack,yellow:c.yellow,yellowSoft:"rgba(255, 230, 0, 0.10)",border:"#2E2E38",body:c.gray02,caption:c.gray01,white:c.white};function dd({eyebrow:i="What's Next",title:o,description:s,ctaLabel:p,onContinue:u,meta:f,id:h="whats-next",style:m}){return n.jsx("section",{id:h,"aria-labelledby":`${h}-heading`,style:{background:_t.page,padding:"96px 64px",textAlign:"center",borderTop:`1px solid ${_t.border}`,...m},children:n.jsxs("div",{style:{maxWidth:640,margin:"0 auto",padding:"48px 40px",background:_t.surface,border:`1px solid ${_t.border}`,borderRadius:16,boxShadow:"0 16px 40px rgba(0,0,0,0.35)"},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",background:_t.yellowSoft,border:`1px solid ${_t.yellow}`,borderRadius:100,padding:"4px 12px",marginBottom:16},children:n.jsx("span",{style:{color:_t.yellow,fontSize:12,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",fontFamily:k.bold,lineHeight:1.2},children:i})}),n.jsx("h2",{id:`${h}-heading`,style:{margin:"0 0 14px",fontSize:32,lineHeight:"38px",fontWeight:700,color:_t.white,fontFamily:k.bold},children:o}),n.jsx("p",{style:{margin:"0 0 28px",fontSize:15,lineHeight:"22px",color:_t.body,fontFamily:k.regular},children:s}),n.jsxs("button",{type:"button",onClick:u,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px 28px",fontSize:15,fontWeight:700,fontFamily:k.bold,background:_t.yellow,color:_t.page,border:"none",borderRadius:8,cursor:"pointer",lineHeight:1.2},children:[p,n.jsx(Gs,{size:16,"aria-hidden":!0})]}),f?n.jsx("p",{style:{margin:"18px 0 0",fontSize:13,lineHeight:1.5,color:_t.caption,fontFamily:k.regular},children:f}):null]})})}function bf({children:i}){return n.jsx("span",{style:{color:_t.yellow},children:i})}const _v=`
#module-content {
  /* Colour tokens (design-kit) */
  --ey-yellow: ${c.yellow};
  --eyebrow-gold: ${c.eyebrowGold};
  --white: ${c.white};
  --off-white: ${c.offWhite};
  --gray-02: ${c.gray02};
  --gray-01: ${c.gray01};
  --ey-dark: ${c.offBlack};
  --confident-black: ${c.confidentBlack};
  --muted-foreground: ${c.gray01};

  /* Surface aliases used by the lesson CSS */
  --ey-bg: ${c.white};
  --ey-bg-alt: ${c.offWhite};
  --ey-bg-deep: ${c.offWhite};
  --card-bg: ${c.white};
  --text-secondary: ${c.gray01};
  --surface-neutral: ${c.offWhite};

  /* Spacing — section rhythm from design-kit */
  --section-padding: ${mp.sectionPadding};
  --card-padding: ${mp.cardPadding};

  font-family: ${k.regular};
  background: ${c.white};
  color: ${c.offBlack};
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* Reality Check — EY Off White light-grey band */
#module-content .wrong-section,
#module-content #reality-check {
  background: ${c.offWhite} !important;
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
  background: ${c.white};
  border: 1px solid ${c.gray02};
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
#module-content .gva-spectrum-card[data-tone="blue"] .gva-spectrum-title { color: ${c.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-spectrum-title { color: ${c.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-spectrum-title { color: ${c.frameOrange}; }
#module-content .gva-badge {
  display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 4px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: ${c.white};
}
#module-content .gva-spectrum-card[data-tone="blue"] .gva-badge { background: ${c.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-badge { background: ${c.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-badge { background: ${c.frameOrange}; }
#module-content .gva-spectrum-body { display: flex; flex-direction: column; gap: 16px; padding: 20px; flex: 1; }
#module-content .gva-spectrum-desc { margin: 0; font-size: 13px; line-height: 1.4; color: ${c.gray01}; }
#module-content .gva-flow {
  border: 1px solid rgba(46,46,56,0.12); border-radius: 6px; min-height: 32px;
  display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;
  background: ${c.white};
}
#module-content .gva-spectrum-card[data-tone="blue"] .gva-flow { color: ${c.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-flow { color: ${c.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-flow { color: ${c.frameOrange}; }
#module-content .gva-best-label { margin: 0; font-size: 11px; text-transform: uppercase; color: ${c.gray01}; }
#module-content .gva-best-value { margin: 2px 0 0; font-size: 13px; font-weight: 700; color: ${c.offBlack}; }
#module-content .gva-card-cta { margin-top: auto; font-size: 13px; font-weight: 700; color: ${c.offBlack}; text-decoration: underline; text-underline-offset: 3px; }
#module-content .gva-banner {
  width: 100%; max-width: none; display: flex; gap: 20px; align-items: center; padding: 24px;
  border-radius: 12px; background: ${c.confidentBlack}; border: 1px solid rgba(255,255,255,0.08);
}
#module-content .gva-banner-icon {
  width: 40px; height: 40px; border-radius: 8px; background: ${c.yellow};
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
#module-content .gva-banner-icon img { width: 20px; height: 20px; display: block; }
#module-content .gva-banner-title { margin: 0 0 4px; font-size: 16px; font-weight: 700; color: #FFFFFF; }
#module-content .gva-banner-body { margin: 0; font-size: 13px; color: ${c.gray02}; line-height: 1.45; }
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
  background: ${c.white}; border: 1px solid ${c.gray02};
  border-radius: 12px; box-shadow: 0 24px 64px rgba(0,0,0,0.35);
}
#module-content .gva-modal-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 16px; padding: 20px 24px; border-bottom: 1px solid ${c.gray02};
}
#module-content .gva-modal-top h3 {
  margin: 0 0 6px; font-size: 22px; font-weight: 700; color: ${c.offBlack};
}
#module-content .gva-modal-close {
  border: 1px solid ${c.gray02}; background: ${c.offWhite};
  width: 36px; height: 36px; border-radius: 8px; cursor: pointer;
  font-size: 18px; line-height: 1; color: ${c.offBlack}; flex-shrink: 0;
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
  padding: 72px 64px 80px;
}

#module-content [id] {
  scroll-margin-top: ${Tt}px;
}
`;function Hv(i){const o=[],s=[];let p=i.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi,(m,x)=>(o.push(x),""));p=p.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi,(m,x)=>(x.trim()&&s.push(x),""));const u=p.match(/<body[^>]*>([\s\S]*)<\/body>/i),f=u?u[1]:p;let h=o.join(`
`);return h=h.replace(/\*,\s*\*::before,\s*\*::after\s*\{[^}]*\}/,`#module-content { margin: 0; padding: 0; }
#module-content, #module-content *, #module-content *::before, #module-content *::after { box-sizing: border-box; }`),h=h.replace(/(^|})\s*body\s*\{/g,`$1
#module-content {`),h=h.replace(/(^|})\s*:root\s*\{/g,`$1
#module-content {`),h+=`
${_v}
`,{css:h,body:f,scripts:s}}function Ov({onBack:i,onNavigate:o}){const{css:s,body:p,scripts:u}=I.useMemo(()=>Hv(jp),[jp]),f=I.useRef(null),h=I.useRef(!1);return I.useEffect(()=>{if(h.current)return;h.current=!0;const m=[];for(const v of u){const C=document.createElement("script");C.text=v,document.body.appendChild(C),m.push(C)}const x=window;return typeof x.initEvoExplorer=="function"&&x.initEvoExplorer(),()=>{m.forEach(v=>v.remove()),h.current=!1}},[u]),n.jsxs("div",{style:{position:"fixed",inset:0,overflowY:"auto",background:c.white},children:[n.jsx(gi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),n.jsx(Go,{currentModuleId:"foundational",onNavigate:o,onBack:i}),n.jsxs("div",{id:"module-content",ref:f,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:s}}),n.jsx("div",{dangerouslySetInnerHTML:{__html:p}})]}),n.jsx(dd,{title:n.jsxs(n.Fragment,{children:["Fundamentals are clear.",n.jsx("br",{}),"Now it's time to ",n.jsx(bf,{children:"use AI effectively."})]}),description:"You now understand what AI is, how it works, where it fails, and why fundamentals matter. The next step is learning how to interact with it — how to craft prompts that deliver real, usable results in tax work.",ctaLabel:"Continue to Part 2: Basics of Prompting in Tax",onContinue:()=>o("/ai-tax-prompting"),meta:"Part 2 covers: prompt structure, role-setting, context framing, output formatting, and real tax prompt templates"})]})}const We={dark:{bg:c.confidentBlack,heading:c.onDark,body:c.gray02,eyebrow:c.yellow,border:c.borderOnDark},neutral:{bg:c.offWhite,border:"rgba(46,46,56,0.10)"},light:{bg:c.white,heading:c.confidentBlack,body:c.gray01,eyebrow:c.eyebrowGold,border:"rgba(46,46,56,0.10)"}},Nr=[{id:1,name:"Persona",color:c.frameMagenta,border:c.frameMagenta,q:"WHO should AI be?",what:"Defines who the AI should act like — setting expertise, seniority, and perspective. A tax partner writes differently from a junior analyst.",why:"Aligns output to the expertise level you need. Without it, AI defaults to a generic voice that doesn't match your audience.",without:'"Explain impact of New Tax Act on MNCs."',with:'"You are a senior tax partner in India. Explain impact of withholding tax changes in the New Income Tax Act, 2025 on MNCs."'},{id:2,name:"Context",color:c.frameTeal,border:c.frameTeal,q:"WHAT's the background?",what:"Background information for the task — the who, what, where, and when surrounding your query.",why:"Without context, AI gives generic answers that miss your specific situation entirely.",without:'"Explain recent changes to transfer pricing regulations."',with:'"Our client in India provides IT support to its parent in Singapore. Explain recent TP Regulation changes in 2025."'},{id:3,name:"Instruction",color:c.frameOrange,border:c.yellow,q:"WHAT should AI do?",what:"A clear task or command — the specific action you want AI to perform. No ambiguity.",why:`Define what "significant" or "recent" means — don't leave it to AI to guess.`,without:'"Summarise significant recent tax exposures of the Indian target company."',with:'"Summarise tax exposures above INR 25 crore, under dispute in the last 3 assessment years."'},{id:4,name:"Constraints",color:c.frameBlue,border:c.frameBlue,q:"WHAT are the limits?",what:"Setting limits on scope, detail, or length — guardrails that keep AI focused.",why:"Without limits, AI may produce 2,000 words when you needed 200.",without:'"Summarise GST refund changes."',with:'"In under 200 words, summarise July 2025 GST refund changes for exporters."'},{id:5,name:"Grounding",color:c.framePurple,border:c.framePurple,q:"WHERE should AI look?",what:"Instructing AI to use specific statutes, circulars, or case law as its reference base.",why:"Prevents hallucination and ensures legal accuracy. Ungrounded output is dangerous output.",without:'"Explain safe harbour rules."',with:'"According to the Income-tax Act, 1961 and latest CBDT circulars, explain safe harbour applicability to cross-border service fees."'},{id:6,name:"Tone / Style",color:c.eyebrowGold,border:c.yellow,q:"HOW should it sound?",what:"Directing AI to adopt a formal, client-ready, or simplified style matching your audience.",why:"A CFO needs different language than an internal audit team or ITAT bench.",without:'"Draft an email to the client regarding new GST slab rates."',with:'"Explain new GST slab changes in a formal and concise manner, suitable for the Tax Head of a Logistics company."'},{id:7,name:"Output Format",color:c.frameGreen,border:c.frameGreen,q:"WHAT shape should the answer take?",what:"Specifies desired format — table, bullets, email, memo, comparison chart, etc.",why:"Output is immediately usable without reformatting — saves editing time.",without:'"Compare old vs new tax rates."',with:'"Provide a table comparing old vs new tax rates, followed by 3 bullet-point risks and recommendations."'},{id:8,name:"Iterative Refinement",color:c.frameOrange,border:c.frameOrange,q:"REFINE — don't restart",what:"Improving output through follow-ups — treating AI conversations as iterative, not one-shot.",why:"First drafts are starting points. Each refinement sharpens precision and usability.",without:'"Summarize attached case law."',with:'Step 1: "Summarize facts, issues and ruling." → Step 2: "Now create 5-bullet summary for Indian MNCs."'}],Wv=[{title:"Be specific about your role",desc:'Say "You are a senior tax manager in India" not just "You are a tax professional."'},{title:"State the output format",desc:"Ask for bullet points, table, 1-page memo, or email — whatever you'll actually use."},{title:"Set word or length limits",desc:'"Under 200 words" prevents unnecessary padding and forces concision.'},{title:"Reference specific statutes",desc:"Cite Acts, circulars, or sections to keep the AI legally grounded."},{title:"Iterate — don't restart",desc:"Ask follow-ups like 'Make it more concise' or 'Add a risk table.' Build on the conversation."}],Vv=[{title:"Don't share confidential data",desc:"Never input client names, PAN numbers, or deal-specific financials into a public AI tool."},{title:"Don't accept output without review",desc:"AI can hallucinate statutes or dates. Always verify legal citations before use."},{title:"Don't use one-word prompts",desc:'"Explain GST" will produce a textbook. Ask for what you actually need, for whom.'},{title:"Don't ignore the tool's knowledge cutoff",desc:"AI may not know about the latest Finance Act amendments. Ground it or verify freshness."},{title:"Don't forget tone and audience",desc:"An internal memo for a partner reads very differently from a client advisory note."}],Tr=[{id:"context",name:"Context & Audience",color:c.frameTeal,summary:"Shape who the answer is for and how examples guide format.",techniques:[{id:"audience",name:"Audience Prompting",what:"Telling AI who the output is intended for.",does:"Adjusts language, depth and terminology for the reader.",without:'"Explain POEM provisions."',with:'"Explain POEM provisions for a CEO with no tax background using simple business language and examples."',taxUse:"Turn a dense POEM memo into a board-ready summary without losing the tax position."},{id:"few-shot",name:"Zero-Shot / Few-Shot",what:"Providing no examples (Zero-Shot) or sample examples (Few-Shot) to guide the AI.",does:"Guides the format and quality of the response.",without:'"Summarize this tax judgment."',with:'"Example Format: Issue → Taxpayer Argument → Revenue Argument → Decision → Key Takeaway. Now summarize this judgment using the same format."',taxUse:"Standardize ITAT ruling summaries across the team using one worked example as the template."}]},{id:"iterate",name:"Iterative Flow",color:c.frameOrange,summary:"Build, question, and refine — don't restart from scratch.",techniques:[{id:"iterative",name:"Iterative Prompting",what:"Improving the output through a series of follow-up prompts.",does:"Refines the response step by step until it meets your needs.",without:'"Draft a note on GST implications."',with:'"Draft a note on GST implications." → "Make it user-friendly." → "Reduce it to one page." → "Add a summary table."',taxUse:"Draft a GST advisory in passes — scope first, then tone, then a partner-ready one-pager."},{id:"flipped",name:"Flipped Prompting",what:"Asking AI to ask questions before answering.",does:"Helps gather missing context and improve accuracy.",without:'"Prepare a tax advisory note on this transaction."',with:'"Before preparing the advisory note, ask me all relevant questions regarding the transaction, jurisdictions, parties, objectives and timeline."',taxUse:"Surface missing facts on a cross-border deal before AI drafts the opinion."},{id:"refinement",name:"Refinement Prompting",what:"Asking AI to improve your question before attempting the task.",does:"Helps identify gaps and creates a stronger, more effective prompt.",without:'"Summarize the GST implications of this transaction."',with:'"Review my prompt and suggest a better version before answering. Highlight any missing context, assumptions or instructions that would improve the quality of the response."',taxUse:"Catch vague scope or missing grounding before the model produces a wrong GST analysis."}]},{id:"reasoning",name:"Structured Reasoning",color:c.frameBlue,summary:"Step through complex tax analysis with deliberate structure.",techniques:[{id:"cot",name:"Chain-of-Thought",what:"Asking AI to reason through a problem step by step.",does:"Improves structured thinking and analysis.",without:'"Does this arrangement create a Permanent Establishment risk?"',with:'"Assess this arrangement step-by-step: identify key facts, evaluate PE indicators, analyze supporting and opposing arguments, then conclude."',taxUse:"PE determinations where facts, indicators, and counter-arguments must be shown in sequence."},{id:"expansion",name:"Creative Expansion",what:"Asking AI to challenge assumptions and identify gaps.",does:"Generates additional perspectives and uncovers blind spots.",without:'"Review this restructuring proposal."',with:'"Review this restructuring proposal and identify 10 risks, unanswered questions or issues the team may have overlooked."',taxUse:"Stress-test a restructuring memo before partner sign-off — find what the first draft missed."}]},{id:"meta",name:"Meta & Craft",color:c.framePurple,summary:"Let AI help you design the prompt itself.",techniques:[{id:"meta",name:"Meta Prompting",what:"Asking AI to create or improve the prompt itself.",does:"Combines multiple prompting techniques and helps build stronger prompts.",without:'"Summarize this judgment."',with:'"Create the most effective prompt for summarizing a Supreme Court tax judgment for a Tax Partner. Incorporate persona, audience, format and key takeaway requirements."',taxUse:"Generate a reusable prompt template for Supreme Court tax ruling summaries."}]}],ar=[{key:"what",label:"What it is",color:c.frameBlue},{key:"does",label:"What it does",color:c.frameOrange},{key:"without",label:"Without",color:c.destructive},{key:"with",label:"With",color:c.success},{key:"taxUse",label:"Tax use case",color:c.eyebrowGold}],$v=Tr.flatMap(i=>i.techniques.map(o=>({...o,category:i.name,categoryColor:i.color}))),Fp=[{element:"Persona",question:"Who is the AI?",example:"Senior Tax Partner, India"},{element:"Context",question:"What's the situation?",example:"Client has cross-border IT support arrangement"},{element:"Instruction",question:"What exactly should it do?",example:"Summarise exposures above INR 25 Cr"},{element:"Constraints",question:"What are the limits?",example:"Under 200 words, last 3 assessment years"},{element:"Grounding",question:"Which sources apply?",example:"Income-tax Act, 1961 + CBDT circulars"},{element:"Tone",question:"How should it sound?",example:"Formal, client-ready"},{element:"Output",question:"What format?",example:"Table + 3 bullet risks"},{element:"Iterate",question:"How do you refine?",example:'Follow up: "Now make it 5 bullets for MNCs"'}],Uv=[{icon:yf,name:"Persona",color:c.frameMagenta,bg:"rgba(255,50,255,0.06)",desc:`Tell AI WHO to be. Like telling a new colleague: "Pretend you're a senior tax partner" — so it talks like one, not like a Wikipedia article.`},{icon:xv,name:"Context",color:c.frameTeal,bg:"rgba(50,255,255,0.06)",desc:"Give the background story. Like telling a taxi driver WHERE you're going — without it, AI drives in circles giving generic answers."},{icon:bv,name:"Instruction",color:c.yellow,bg:"rgba(255,230,0,0.08)",desc:`Say exactly WHAT to do. Like ordering food: "Give me a paneer tikka" works. "Give me something nice" doesn't.`},{icon:Nv,name:"Constraints",color:c.frameBlue,bg:"rgba(70,150,255,0.08)",desc:'Set boundaries. Like telling a kid "draw me a picture — but only use 3 colours and keep it on one page." Keeps AI focused.'},{icon:Iv,name:"Grounding",color:c.framePurple,bg:"rgba(180,0,255,0.06)",desc:'Tell AI WHERE to look. Like saying "only use THIS textbook for answers" — prevents it from making things up.'},{icon:jv,name:"Tone / Style",color:c.yellow,bg:"rgba(255,230,0,0.08)",desc:`Tell AI HOW to sound. Like asking someone: "Explain it like I'm presenting to a CFO" vs "Explain it to a 5-year-old." Same info, different packaging.`},{icon:vf,name:"Output Format",color:c.frameGreen,bg:"rgba(0,200,100,0.08)",desc:'Tell AI WHAT SHAPE the answer should take. Like saying "give me a table, not a paragraph" — saves you 20 minutes of reformatting.'},{icon:Sv,name:"Iterative Refinement",color:c.frameOrange,bg:"rgba(255,125,30,0.08)",desc:`Don't restart — refine. Like editing a draft: "Make it shorter", "Add a table", "Simplify for the board." Each follow-up makes it better.`}],Gv=[{label:"User",value:"ABC Corp"},{label:"Issue",value:"Royalty payments"},{label:"Jurisdiction",value:"India"},{label:"Output",value:"1-page memo"},{label:"Deadline",value:"Thursday"},{label:"Audience",value:"User-ready"}],Yv={prompts:[{id:"b1",answer:"persona",text:'"You are a senior international tax partner with 20 years of experience in India-US DTAA matters. Analyze whether this payment qualifies as royalty under Article 12."'},{id:"b2",answer:"context",text:'"Our client is an Indian subsidiary of a US pharma company. They pay ₹50 Cr annually as management fees to the parent. The AO has disallowed this under Section 37. The matter is pending before CIT(A)."'},{id:"b3",answer:"output",text:`"Present your analysis as a 3-column table with columns: Issue, Taxpayer's Position, Revenue's Likely Argument. Follow with 5 bullet-point recommendations."`},{id:"b4",answer:"constraints",text:'"Keep your response under 300 words. Focus only on the indirect transfer provisions under Section 9(1)(i). Do not cover capital gains computation or exemptions."'},{id:"b5",answer:"grounding",text:'"Base your analysis strictly on the Supreme Court ruling in Engineering Analysis Centre of Excellence (2022) and the CBDT Circular No. 17/2023. Do not rely on tribunal decisions."'}],elements:[{id:"grounding",label:"Grounding / Source Anchoring"},{id:"persona",label:"Persona"},{id:"constraints",label:"Constraints & Boundaries"},{id:"output",label:"Output Indicator"},{id:"context",label:"Context"}],scoreMsg:"You've got the basics down! These elements form the foundation of every effective prompt."},qv={prompts:[{id:"a1",answer:"step-back",text:`"Before analyzing whether our client's arrangement triggers GAAR, first explain the general principles of anti-avoidance across OECD jurisdictions. Then apply those principles to the Indian GAAR provisions under Chapter X-A."`},{id:"a2",answer:"tree-of-thoughts",text:'"Consider 3 possible restructuring paths for this demerger: (A) tax-neutral under Section 2(19AA), (B) slump sale under Section 50B, (C) itemised sale of assets. Evaluate tax cost of each path separately, then recommend the optimal one."'},{id:"a3",answer:"self-refine",text:'"Draft a transfer pricing documentation memo for this IT services transaction. Then review your own draft as if you were the reviewing tax partner. Identify gaps, strengthen weak arguments, and produce an improved final version."'},{id:"a4",answer:"chain-verification",text:'"After completing your analysis of the PE exposure, list every factual claim and legal citation you made. Verify each one against the attached India-Singapore DTAA text. Correct any errors before presenting the final output."'},{id:"a5",answer:"analogical",text:`"The EU's digital services tax applies a 3% levy on revenues from targeted digital services. Using this as a parallel, analyze how India's Equalisation Levy (2%) compares in scope, applicability, and treaty override implications."`}],elements:[{id:"analogical",label:"Analogical Prompting"},{id:"chain-verification",label:"Chain of Verification"},{id:"step-back",label:"Step-back Prompting"},{id:"self-refine",label:"Self-Refine"},{id:"tree-of-thoughts",label:"Tree of Thoughts"}],scoreMsg:"Impressive! You can identify advanced techniques — now use them to supercharge your prompts."};function Hs(){return{selectedPromptId:null,correctCount:0,answeredCount:0,solvedPrompts:{},matchedElements:{},incorrectPromptId:null,highlightElementId:null,showScore:!1,scoreMessage:""}}function Ap(i,o){return o===5?i==="basic"?"🎉 Perfect score! You've mastered the basic prompt elements. Time to level up!":"🎉 Flawless! You can identify advanced techniques like a pro — now deploy them in your tax work.":o>=3?i==="basic"?"Solid foundation! Review the ones you missed and try again.":"Good grasp of advanced techniques! A quick review of the missed ones will make you unstoppable.":i==="basic"?"Worth another try — scroll up to the Prompt Elements section for a refresher.":"These are tricky! Revisit the Advanced Techniques section and give it another go."}const Oo=Nr.map(i=>{var o,s;return{id:i.id,name:i.name.replace(" / "," · "),shortName:i.name.split(" / ")[0],question:((o=Fp[i.id-1])==null?void 0:o.question)??i.q,example:((s=Fp[i.id-1])==null?void 0:s.example)??"",color:i.color,border:i.border,fragment:["You are a senior tax partner in India.","Our client in India provides IT support to its parent in Singapore.","Summarise tax exposures above INR 25 crore, under dispute in the last 3 assessment years.","Keep the response under 200 words.","According to the Income-tax Act, 1961 and latest CBDT circulars.","Use a formal, client-ready tone suitable for the Tax Head.","Provide a table followed by 3 bullet-point risks and recommendations.",'Then refine: "Now create a 5-bullet summary for Indian MNCs."'][i.id-1]}});function Zv(i){return[...i].sort((o,s)=>o-s).map(o=>{var s;return(s=Oo.find(p=>p.id===o))==null?void 0:s.fragment}).filter(Boolean).join(" ")}function Kv(){const[i,o]=I.useState([]),[s,p]=I.useState(!1),u=`2px solid ${c.yellow}`,f=new Set(i),h=[...i].sort((b,F)=>b-F).map(b=>Oo.find(F=>F.id===b)).filter(Boolean),m=Zv(i),x=b=>{o(F=>F.includes(b)?F.filter(E=>E!==b):[...F,b]),p(!1)},v=()=>{o([]),p(!1)},C=async()=>{m&&(await navigator.clipboard.writeText(m),p(!0),setTimeout(()=>p(!1),2e3))};return n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(240px, 280px) 1fr",gap:24,height:560,minHeight:560,background:c.offWhite,border:"1px solid rgba(46,46,56,0.10)",borderRadius:12,padding:20},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:0},children:[n.jsx("p",{style:{fontSize:13,color:c.gray01,fontFamily:k.regular,lineHeight:1.5,marginBottom:12,flexShrink:0},children:"Tap to add. Tap again to remove."}),n.jsx("div",{role:"group","aria-label":"Prompt elements",style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",flex:1,paddingRight:4},children:Oo.map(b=>{const F=f.has(b.id);return n.jsxs("button",{type:"button","aria-pressed":F,onClick:()=>x(b.id),style:{width:"100%",display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:8,cursor:"pointer",textAlign:"left",background:F?"rgba(255,230,0,0.18)":c.white,border:F?`1.5px solid ${c.yellow}`:"1px solid rgba(46,46,56,0.12)",flexShrink:0},onFocus:E=>{E.currentTarget.style.outline=u},onBlur:E=>{E.currentTarget.style.outline="none"},children:[n.jsx("span",{style:{width:26,height:26,borderRadius:"50%",flexShrink:0,background:F?c.yellow:b.color+"22",border:F?"none":`1.5px solid ${b.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:F?c.confidentBlack:b.color,fontFamily:k.bold},children:b.id}),n.jsx("span",{style:{minWidth:0},children:n.jsx("span",{style:{display:"block",fontSize:13,fontWeight:700,color:F?c.offBlack:c.confidentBlack,fontFamily:k.bold},children:b.shortName})})]},b.id)})}),n.jsxs("p",{style:{fontSize:11,color:c.gray01,fontFamily:k.regular,marginTop:10,flexShrink:0},children:[i.length," of ",Oo.length," added"]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:0,height:"100%"},children:[n.jsx("div",{"aria-label":"Prompt element stack",style:{flex:1,minHeight:0,overflowY:"auto",background:"transparent",border:"1px solid rgba(46,46,56,0.08)",borderRadius:"12px 12px 0 0",padding:"20px 24px"},children:h.length===0?n.jsx("div",{style:{height:"100%",minHeight:160,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("p",{style:{fontSize:14,color:c.gray01,fontFamily:k.regular,margin:0,textAlign:"center",maxWidth:320,lineHeight:1.6},children:"Pick elements on the left — each one appears here as a tagged line."})}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:h.map(b=>n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",padding:"12px 14px",background:c.white,borderRadius:8,border:"1px solid rgba(46,46,56,0.08)",borderLeft:`3px solid ${b.border}`},children:[n.jsx("span",{style:{flexShrink:0,fontSize:10,fontWeight:800,letterSpacing:"0.04em",color:b.color,background:b.color+"18",border:`1px solid ${b.color}44`,borderRadius:4,padding:"3px 8px",fontFamily:k.bold,lineHeight:1.4},children:b.shortName.toUpperCase()}),n.jsx("p",{style:{margin:0,fontSize:14,lineHeight:1.65,color:c.offBlack,fontFamily:k.regular,flex:1},children:b.fragment}),n.jsx("button",{type:"button","aria-label":`Remove ${b.shortName}`,onClick:()=>x(b.id),style:{background:"none",border:"none",cursor:"pointer",color:c.gray01,fontSize:18,lineHeight:1,padding:"0 2px",flexShrink:0},children:"×"})]},b.id))})}),n.jsxs("div",{style:{flexShrink:0,background:c.white,border:"1px solid rgba(46,46,56,0.10)",borderTop:`2px solid ${c.yellow}`,borderRadius:"0 0 12px 12px",padding:"18px 24px",display:"flex",flexDirection:"column",gap:12},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:c.eyebrowGold,fontFamily:k.bold},children:"Generated prompt"}),n.jsx("p",{"aria-live":"polite",style:{margin:0,fontSize:14,lineHeight:1.7,color:m?c.offBlack:c.gray01,fontFamily:k.light,fontStyle:m?"italic":"normal",maxHeight:72,overflowY:"auto",flex:1},children:m?`"${m}"`:"Your assembled prompt appears here as you add elements."}),n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,flexShrink:0},children:[n.jsxs("button",{type:"button",onClick:v,disabled:i.length===0,style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:6,fontSize:12,fontFamily:k.regular,border:"1px solid rgba(46,46,56,0.15)",background:c.white,color:i.length===0?c.gray02:c.offBlack,cursor:i.length===0?"not-allowed":"pointer"},children:[n.jsx(Av,{size:13})," Reset"]}),n.jsxs("button",{type:"button",onClick:C,disabled:!m,style:{display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:12,fontFamily:k.bold,border:"none",background:m?c.yellow:c.offWhite,color:m?c.confidentBlack:c.gray02,cursor:m?"pointer":"not-allowed"},children:[n.jsx(uv,{size:13})," ",s?"Copied!":"Copy prompt"]})]})]})]})]})}function Qv(){const i=["What issue?","Which jurisdiction?","What output?","By when?"];return n.jsx("section",{id:"team-briefing",style:{background:We.light.bg,padding:"72px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:c.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:k.bold},children:"Brief AI Like You Brief Your Team"}),n.jsx("p",{style:{fontSize:16,color:c.gray01,textAlign:"center",lineHeight:1.7,marginBottom:52,fontFamily:k.light},children:"The more context you provide, the better the outcome."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 60px 1fr",gap:0,alignItems:"stretch"},children:[n.jsxs("div",{style:{border:`1px solid ${c.destructive}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%",background:c.white},children:[n.jsx("div",{style:{background:c.destructive+"0d",padding:"14px 22px",borderBottom:`1px solid ${c.destructive}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:n.jsx("span",{style:{color:c.destructive,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:k.bold},children:"WEAK BRIEF"})}),n.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[n.jsx("div",{style:{background:c.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${c.destructive}`},children:n.jsx("p",{style:{color:c.offBlack,fontSize:15,fontStyle:"italic",lineHeight:1.65,fontFamily:k.light,margin:0},children:"“Research this matter and get back to me.”"})}),n.jsxs("div",{children:[n.jsx("div",{style:{color:c.destructive,fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:9,fontFamily:k.bold},children:"Missing:"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:i.map(o=>n.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:c.destructive+"0d",borderRadius:6},children:n.jsx("span",{style:{color:c.destructive,fontSize:11,fontWeight:600,fontFamily:k.bold},children:o})},o))})]}),n.jsxs("div",{style:{background:c.destructive+"0a",border:`1px dashed ${c.destructive}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[n.jsx("div",{style:{color:c.destructive,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:k.bold},children:"↓ OUTCOME"}),n.jsxs("p",{style:{color:c.gray01,fontSize:12,lineHeight:1.6,fontFamily:k.regular,margin:0},children:[n.jsx("strong",{style:{color:c.destructive},children:"Generic response"})," — vague, incomplete, and needs a full rewrite."]})]})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${c.destructive}4d, ${c.yellow}99, ${c.success}4d)`}}),n.jsx("div",{style:{background:c.white,border:`2px solid ${c.yellow}`,color:c.offBlack,fontSize:10,fontWeight:800,padding:"6px 8px",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:k.bold},children:"VS"}),n.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${c.success}4d, ${c.yellow}99, ${c.destructive}4d)`}})]}),n.jsxs("div",{style:{border:`1px solid ${c.success}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%",background:c.white},children:[n.jsx("div",{style:{background:c.success+"0d",padding:"14px 22px",borderBottom:`1px solid ${c.success}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:n.jsx("span",{style:{color:c.success,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:k.bold},children:"STRONG BRIEF"})}),n.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:Gv.map(o=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"7px 12px",background:c.success+"0d",borderRadius:6},children:[n.jsx("span",{style:{color:c.gray01,fontSize:11,fontWeight:600,minWidth:82,flexShrink:0,fontFamily:k.bold},children:o.label}),n.jsx("span",{style:{color:c.offBlack,fontSize:12,fontWeight:500,flex:1,fontFamily:k.regular},children:o.value}),n.jsx("span",{style:{color:c.success,fontSize:12,fontWeight:700},children:"✓"})]},o.label))}),n.jsxs("div",{style:{background:c.success+"0a",border:`1px dashed ${c.success}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[n.jsx("div",{style:{color:c.success,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:k.bold},children:"↓ OUTCOME"}),n.jsxs("p",{style:{color:c.gray01,fontSize:12,lineHeight:1.6,fontFamily:k.regular,margin:0},children:[n.jsx("strong",{style:{color:c.success},children:"Focused response"})," — ready to use, right scope, right audience."]})]})]})]})]}),n.jsx("div",{style:{textAlign:"center",marginTop:36},children:n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:14,flexWrap:"wrap",padding:"16px 28px",background:c.white,border:"1px solid rgba(46,46,56,0.10)",borderRadius:12},children:[n.jsx("div",{style:{background:c.yellowAlpha10,border:`1px solid ${c.yellow}44`,padding:"10px 20px",borderRadius:8,color:c.eyebrowGold,fontSize:14,fontWeight:600,fontFamily:k.bold},children:"A Good Brief"}),n.jsx("span",{style:{color:c.confidentBlack,fontSize:24,fontWeight:700,fontFamily:k.bold},children:"="}),n.jsx("div",{style:{background:c.info+"14",border:`1px solid ${c.info}33`,padding:"10px 20px",borderRadius:8,color:c.info,fontSize:14,fontWeight:600,fontFamily:k.bold},children:"A Good Prompt"})]})})]})})}function Xv(){return n.jsx("section",{id:"lazy-vs-pro",style:{background:We.neutral.bg,padding:"72px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:c.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:k.bold},children:"Same AI. Two Very Different Results."}),n.jsx("p",{style:{fontSize:16,color:c.gray01,textAlign:"center",lineHeight:1.7,marginBottom:52,fontFamily:k.light},children:"The only thing that changed? The way you asked."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 60px 1fr",gap:0,alignItems:"stretch"},children:[n.jsxs("div",{style:{border:`1px solid ${c.destructive}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%"},children:[n.jsxs("div",{style:{background:c.destructive+"0d",padding:"14px 22px",borderBottom:`1px solid ${c.destructive}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:c.destructive,strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M15 9l-6 6M9 9l6 6"})]}),n.jsx("span",{style:{color:c.destructive,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:k.bold},children:"THE LAZY ASK"})]}),n.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[n.jsx("div",{style:{background:c.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${c.destructive}`,minHeight:128,display:"flex",alignItems:"flex-start"},children:n.jsx("p",{style:{color:c.offBlack,fontSize:15,fontStyle:"italic",lineHeight:1.65,fontFamily:k.light,margin:0},children:"“Summarise this document”"})}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,minHeight:76},children:["No role","No context","No format","No limits"].map(i=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:c.destructive+"0d",borderRadius:6},children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:c.destructive,strokeWidth:"2.5",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),n.jsx("span",{style:{color:c.destructive,fontSize:11,fontWeight:600,fontFamily:k.bold},children:i})]},i))}),n.jsxs("div",{style:{background:c.destructive+"0a",border:`1px dashed ${c.destructive}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[n.jsx("div",{style:{color:c.destructive,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:k.bold},children:"↓ WHAT YOU GET BACK"}),n.jsxs("p",{style:{color:c.gray01,fontSize:12,lineHeight:1.6,fontFamily:k.regular,margin:0},children:["A generic 300-word wall of text. Wrong tone. Wrong audience. Needs complete rewriting. ",n.jsx("strong",{style:{color:c.destructive},children:"30 minutes wasted."})]})]})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${c.destructive}4d, ${c.yellow}99, ${c.success}4d)`}}),n.jsx("div",{style:{background:c.white,border:`2px solid ${c.yellow}`,color:c.offBlack,fontSize:10,fontWeight:800,padding:"6px 8px",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:k.bold},children:"VS"}),n.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${c.success}4d, ${c.yellow}99, ${c.destructive}4d)`}})]}),n.jsxs("div",{style:{border:`1px solid ${c.success}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%"},children:[n.jsxs("div",{style:{background:c.success+"0d",padding:"14px 22px",borderBottom:`1px solid ${c.success}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:c.success,strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),n.jsx("span",{style:{color:c.success,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:k.bold},children:"THE PRO ASK"})]}),n.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[n.jsx("div",{style:{background:c.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${c.success}`,minHeight:128,display:"flex",alignItems:"flex-start"},children:n.jsxs("p",{style:{color:c.offBlack,fontSize:14,fontStyle:"italic",lineHeight:1.65,fontFamily:k.light,margin:0},children:["“You are a ",n.jsx("strong",{style:{color:c.eyebrowGold,fontStyle:"normal"},children:"tax advisor"}),". Summarise the key ",n.jsx("strong",{style:{color:c.frameBlue,fontStyle:"normal"},children:"transfer pricing changes"})," in this circular for a ",n.jsx("strong",{style:{color:c.frameOrange,fontStyle:"normal"},children:"client memo"}),". Use ",n.jsx("strong",{style:{color:c.framePurple,fontStyle:"normal"},children:"bullet points"}),". Keep it under ",n.jsx("strong",{style:{color:c.success,fontStyle:"normal"},children:"200 words"}),".”"]})}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,minHeight:76},children:["Role defined","Task clear","Format set","Length capped"].map(i=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:c.success+"0d",borderRadius:6},children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:c.success,strokeWidth:"2.5",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),n.jsx("span",{style:{color:c.success,fontSize:11,fontWeight:600,fontFamily:k.bold},children:i})]},i))}),n.jsxs("div",{style:{background:c.success+"0a",border:`1px dashed ${c.success}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[n.jsx("div",{style:{color:c.success,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:k.bold},children:"↓ WHAT YOU GET BACK"}),n.jsxs("p",{style:{color:c.gray01,fontSize:12,lineHeight:1.6,fontFamily:k.regular,margin:0},children:["A client-ready bullet list. Right tone. Right scope. Drop it straight into the email. ",n.jsx("strong",{style:{color:c.success},children:"Done in 30 seconds."})]})]})]})]})]})]})})}function Jv(){const i=We.dark;return n.jsx("section",{id:"recap",style:{background:i.bg,padding:"100px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto",textAlign:"center"},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",background:c.yellow,border:`1px solid ${c.gray02}`,borderRadius:100,padding:"6px 16px",marginBottom:16},children:n.jsx("span",{style:{color:c.offBlack,fontSize:14,fontFamily:k.regular},children:"Recap in a Nutshell"})}),n.jsxs("h2",{style:{fontSize:36,fontWeight:700,color:i.heading,marginBottom:10,fontFamily:k.bold},children:["Putting your ",n.jsx("span",{style:{color:c.yellow,fontStyle:"italic"},children:"#BestPrompt Forward"})]}),n.jsx("p",{style:{fontSize:16,color:i.body,lineHeight:1.6,marginBottom:50,fontFamily:k.light},children:"Your 8-element checklist. Before you hit Send, make sure you've covered these."}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,textAlign:"left"},children:Uv.map(({icon:o,name:s,color:p,desc:u})=>n.jsxs("div",{style:{background:c.white,border:`1px solid ${i.border}`,borderLeft:`4px solid ${p}`,borderRadius:12,padding:"21px 28px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:c.yellow,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(o,{size:18,color:c.confidentBlack,strokeWidth:2})}),n.jsx("span",{style:{color:p,fontSize:15,fontWeight:700,fontFamily:k.bold},children:s})]}),n.jsx("p",{style:{color:c.gray01,fontSize:13,lineHeight:1.6,margin:0,fontFamily:k.regular},children:u})]},s))}),n.jsxs("div",{style:{marginTop:40,maxWidth:900,marginLeft:"auto",marginRight:"auto",background:c.surfaceOnDark,border:`1px solid ${i.border}`,borderTop:`3px solid ${c.yellow}`,borderRadius:12,padding:29,textAlign:"center"},children:[n.jsx("p",{style:{margin:0,fontSize:16,lineHeight:1.6,fontFamily:k.bold,color:i.heading},children:"We have shared the essentials. Now it's your turn to unlock the extraordinary."}),n.jsx("p",{style:{margin:"8px 0 0",fontSize:16,lineHeight:1.6,color:i.body,fontFamily:k.regular},children:"The more you practice, the sharper your prompts become. Start with one element — and layer more as you gain confidence."})]})]})})}function ey({onContinue:i}){return n.jsx(dd,{style:{background:We.neutral.bg,borderTop:`1px solid ${We.neutral.border}`},title:"Prompting skills — unlocked.",description:n.jsx(n.Fragment,{children:"The next module takes you into Microsoft 365 Copilot — where you'll apply these skills across Word, Excel, Outlook, and Teams with real tax use cases."}),ctaLabel:"Continue to Part 3: M365 Copilot Deep Dive",onContinue:i,meta:"Part 3 covers: Copilot in Word, Excel, Outlook, Teams, and real tax workflows"})}function ty(){const[i,o]=I.useState("basic"),[s,p]=I.useState({basic:Hs(),advanced:Hs()}),u=i==="basic"?Yv:qv,f=s[i],h=v=>{f.solvedPrompts[v]||p(C=>({...C,[i]:{...C[i],selectedPromptId:v}}))},m=v=>{const C=s[i];if(C.matchedElements[v]||!C.selectedPromptId)return;const b=u.prompts.find(D=>D.id===C.selectedPromptId);if(!b)return;const F=b.answer===v,E=C.answeredCount+1,B=C.correctCount+(F?1:0);if(F){p(D=>({...D,[i]:{...D[i],selectedPromptId:null,answeredCount:E,correctCount:B,solvedPrompts:{...D[i].solvedPrompts,[b.id]:!0},matchedElements:{...D[i].matchedElements,[v]:!0},showScore:E===5,scoreMessage:E===5?Ap(i,B):D[i].scoreMessage}}));return}p(D=>({...D,[i]:{...D[i],selectedPromptId:null,answeredCount:E,correctCount:B,incorrectPromptId:b.id,highlightElementId:b.answer,showScore:E===5,scoreMessage:E===5?Ap(i,B):D[i].scoreMessage}})),window.setTimeout(()=>{p(D=>({...D,[i]:{...D[i],incorrectPromptId:null,highlightElementId:null}}))},1500)},x=v=>{p(C=>({...C,[v]:Hs()}))};return n.jsx("section",{id:"match-activity",style:{background:We.neutral.bg,padding:"100px 64px",textAlign:"center",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto"},children:[n.jsx("div",{style:{display:"inline-flex",background:c.accentOrange+"14",border:`1px solid ${c.accentOrange}40`,borderRadius:20,padding:"6px 18px",marginBottom:16},children:n.jsx("span",{style:{color:c.accentOrange,fontSize:11,fontWeight:700,letterSpacing:"1.26px",textTransform:"uppercase",fontFamily:k.bold},children:"Interactive Activity"})}),n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:c.confidentBlack,marginBottom:12,fontFamily:k.bold},children:"Match the Prompt to the Element"}),n.jsx("p",{style:{fontSize:16,color:c.gray01,lineHeight:1.6,marginBottom:24,fontFamily:k.regular,maxWidth:650,marginLeft:"auto",marginRight:"auto"},children:"Read each prompt example. Identify which prompting element or technique it demonstrates. Click the prompt, then click the matching element."}),n.jsx("div",{style:{display:"flex",justifyContent:"center",gap:12,marginBottom:40,flexWrap:"wrap"},children:[{id:"basic",label:"🎯 Basic Elements"},{id:"advanced",label:"🚀 Advanced Techniques"}].map(v=>n.jsx("button",{type:"button",onClick:()=>o(v.id),style:{padding:"10px 24px",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",border:i===v.id?`1px solid ${c.yellow}`:"1px solid rgba(46,46,56,0.12)",background:i===v.id?c.yellowAlpha10:c.white,color:i===v.id?c.eyebrowGold:c.gray01,fontFamily:k.bold},children:v.label},v.id))}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,flexWrap:"wrap",marginBottom:30,padding:"14px 24px",background:c.white,border:"1px solid rgba(46,46,56,0.08)",borderRadius:10,maxWidth:700,marginLeft:"auto",marginRight:"auto"},children:["Click a prompt on the left","Click the matching element on the right","Get instant feedback"].map((v,C)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:c.gray01,fontFamily:k.regular},children:[n.jsx("span",{style:{width:20,height:20,borderRadius:"50%",background:c.yellowAlpha10,color:c.eyebrowGold,fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"},children:C+1}),v]},v))}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:u.prompts.map((v,C)=>{const b=u.elements[C],F=f.selectedPromptId===v.id,E=f.solvedPrompts[v.id],B=f.incorrectPromptId===v.id,D=f.matchedElements[b.id],_=f.highlightElementId===b.id;return n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 80px 1fr",gap:0,alignItems:"stretch"},children:[n.jsxs("button",{type:"button",onClick:()=>h(v.id),disabled:E,style:{position:"relative",padding:"18px 20px",borderRadius:10,textAlign:"left",cursor:E?"default":"pointer",background:E?c.success+"0d":B?c.destructive+"0d":F?c.yellowAlpha10:c.white,border:E?`2px solid ${c.success}`:B?`2px solid ${c.destructive}`:F?`2px solid ${c.yellow}`:"2px solid rgba(46,46,56,0.10)",boxShadow:F?`0 0 15px ${c.yellowAlpha12}`:"none",fontFamily:k.regular},children:[n.jsx("span",{style:{position:"absolute",top:-8,left:-8,width:22,height:22,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,background:c.confidentBlack,color:c.yellow,border:"1px solid rgba(255,230,0,0.3)"},children:C+1}),E&&n.jsx("span",{style:{position:"absolute",top:10,right:12,color:c.success,fontSize:16,fontWeight:700},children:"✓"}),n.jsx("p",{style:{margin:0,fontSize:13,color:c.offBlack,lineHeight:1.6,fontStyle:"italic"},children:v.text})]}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.gray01,fontSize:24},children:"⟷"}),n.jsxs("button",{type:"button",onClick:()=>m(b.id),disabled:D,style:{padding:"14px 20px",borderRadius:10,textAlign:"center",cursor:D?"default":"pointer",background:c.white,border:_?`2px solid ${c.success}`:D?`2px solid ${c.success}4d`:"2px solid rgba(46,46,56,0.10)",boxShadow:_?`0 0 12px ${c.success}80`:"none",fontSize:13,fontWeight:700,color:D?c.success:c.offBlack,opacity:D?.5:1,letterSpacing:"0.3px",fontFamily:k.bold},children:[b.label,D?" ✓":""]})]},v.id)})}),f.showScore&&n.jsxs("div",{style:{marginTop:30,padding:24,background:c.yellowAlpha10,border:`1px solid ${c.yellow}44`,borderRadius:12},children:[n.jsxs("div",{style:{fontSize:42,fontWeight:800,color:c.eyebrowGold,fontFamily:k.bold},children:[f.correctCount,"/5"]}),n.jsx("p",{style:{fontSize:14,color:c.gray01,marginTop:8,fontFamily:k.regular},children:f.scoreMessage||u.scoreMsg})]}),n.jsx("button",{type:"button",onClick:()=>x(i),style:{marginTop:20,padding:"10px 24px",border:"1px solid rgba(46,46,56,0.15)",borderRadius:6,background:c.white,color:c.gray01,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:k.bold},children:"↻ Reset & Try Again"})]})})}const zp={1:"WHO should AI be?",2:"What is the background?",3:"What should AI do?",4:"What are the limits?",5:"Where should AI look?",6:"How should it sound?",7:"What shape should it take?",8:"How do you refine?"},hn={description:"Assigning a specific persona primes the AI's perspective, knowledge base, and tone. It shifts the response from a generic search engine summary to a contextual expert analysis.",whyMatters:'Without a specified persona, the LLM treats your inquiry through a generalist average lens. Specifying "Tax Partner" ensures it highlights liabilities and focuses precisely on structural risk mitigation.',without:'"Explain the GST applicability on supply of services under Section 7 of CGST Act."',with:'"Act as a Senior Indian Tax Partner specializing in indirect taxation. Analyze Section 7 of the CGST Act..."',withoutNote:"⚠️ Result: Produces a generic textbook definition without practical corporate tax planning implications.",withNote:"🌟 Result: Generates corporate advisory-level insights, highlighting risks, recent rulings, and planning loopholes.",fieldLabel:"Define the AI Persona below:",fieldPlaceholder:"AI Persona Definition",fieldTip:"Tip: Mention years of experience, field of mastery, and context-specific credentials.",proTips:['• Authority: Reference specific professional bodies or titles (e.g., "Chartered Accountant", "Audit Partner").','• Tone Setting: Give it constraints (e.g., "Be analytical, skeptical, and prioritize regulatory safety").']};function ny(){const[i,o]=I.useState(0),[s,p]=I.useState({}),u=Nr[i],f=s[u.id]??"",h=u.id===1,m=h?hn.description:u.what,x=h?hn.whyMatters:u.why,v=h?hn.without:u.without,C=h?hn.with:u.with,b=h?hn.withoutNote:"⚠️ Result: Output stays generic and misses the specifics of your tax situation.",F=h?hn.withNote:"🌟 Result: Output becomes precise, professional, and ready to use in your workflow.",E=h?hn.fieldLabel:`Define the ${u.name} below:`,B=h?hn.fieldPlaceholder:`${u.name} definition`,D=h?hn.fieldTip:`Tip: Be explicit about ${u.name.toLowerCase()} so the AI knows exactly what you need.`,_=h?hn.proTips:[`• Apply ${u.name.toLowerCase()} clearly in your opening sentence before the main task.`],Q=u.name.replace(" / "," ").toUpperCase();return n.jsx("section",{id:"elements",style:{background:We.dark.bg,padding:"80px 80px 48px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",display:"flex",flexDirection:"column",gap:8},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16,marginBottom:8},children:[n.jsx("div",{style:{background:c.yellow,border:`1px solid ${c.gray02}`,borderRadius:100,padding:"6px 16px"},children:n.jsx("span",{style:{fontSize:14,color:c.offBlack,fontFamily:k.regular},children:"METHODOLOGY"})}),n.jsx("h2",{style:{fontSize:32,fontWeight:700,color:We.dark.heading,fontFamily:k.bold,letterSpacing:"-0.32px",textAlign:"center",margin:0},children:"Prompt like a Pro — The 8 Elements"}),n.jsx("p",{style:{fontSize:16,color:We.dark.body,fontFamily:k.light,lineHeight:"24px",textAlign:"center",maxWidth:760,margin:0},children:"The more context and structural anchors you provide, the better the final output."})]}),n.jsx("div",{style:{padding:"40px 0 20px",overflowX:"auto"},children:n.jsx("div",{style:{background:c.offWhite,border:`1px solid ${c.gray02}`,borderRadius:16,padding:24,display:"inline-flex",minWidth:"min(100%, 1232px)"},children:n.jsx("div",{style:{display:"flex",alignItems:"flex-start"},children:Nr.map((H,K)=>{const he=K===i;return n.jsxs("div",{style:{display:"flex",alignItems:"flex-start"},children:[n.jsxs("button",{type:"button",onClick:()=>o(K),style:{background:he?c.offWhite:"transparent",border:"none",borderRadius:8,padding:8,cursor:"pointer",display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start",textAlign:"left",fontFamily:k.regular},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:14,background:he?c.yellow:c.offBlack,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,color:he?c.confidentBlack:c.white,fontFamily:k.bold},children:H.id}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:14,color:c.offBlack,lineHeight:"22px",whiteSpace:"nowrap"},children:H.name}),n.jsx("div",{style:{fontSize:12,color:c.gray01,lineHeight:"19.2px",whiteSpace:"nowrap"},children:zp[H.id]})]})]}),K<Nr.length-1&&n.jsx("div",{style:{padding:"14px 16px 0 8px",display:"flex",alignItems:"center"},children:n.jsx(Ho,{size:14,color:c.gray01,strokeWidth:2})})]},H.id)})})})}),n.jsxs("div",{style:{display:"flex",gap:40,alignItems:"stretch",justifyContent:"center",flexWrap:"wrap",paddingTop:12},children:[n.jsxs("div",{style:{flex:"1 1 560px",maxWidth:760,background:c.confidentBlack,border:`1px solid ${c.gray02}`,borderRadius:20,padding:40,display:"flex",flexDirection:"column",gap:32,boxShadow:"0 16px 16px rgba(0,0,0,0.25)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:22,background:c.yellow,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:800,color:c.confidentBlack,fontFamily:k.bold,flexShrink:0},children:u.id}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:28,fontWeight:700,color:c.white,fontFamily:k.bold,lineHeight:1.1},children:u.name}),n.jsx("div",{style:{fontSize:20,fontWeight:700,color:c.white,fontFamily:k.bold,lineHeight:"28px"},children:zp[u.id]})]})]}),n.jsx("p",{style:{margin:0,fontSize:15,lineHeight:"25.5px",color:c.white,fontFamily:k.regular},children:m}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[n.jsx("label",{style:{fontSize:16,fontWeight:700,color:c.white,fontFamily:k.bold},children:E}),n.jsx("textarea",{value:f,onChange:H=>p(K=>({...K,[u.id]:H.target.value})),placeholder:B,maxLength:2e3,style:{width:"100%",minHeight:118,resize:"vertical",background:c.confidentBlack,border:`1px solid ${c.yellow}`,borderRadius:4,padding:"8px 12px",fontSize:14,lineHeight:"20px",color:c.white,fontFamily:k.light,outline:"none"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:24,alignItems:"flex-start"},children:[n.jsx("p",{style:{margin:0,flex:1,fontSize:12,lineHeight:"18px",color:c.gray01,fontFamily:k.light},children:D}),n.jsxs("span",{style:{fontSize:12,color:c.white,fontFamily:k.light,whiteSpace:"nowrap"},children:[f.length,"/2000"]})]})]}),n.jsxs("div",{style:{background:c.offWhite,border:`1px solid ${c.gray02}`,borderRadius:12,padding:20,display:"flex",flexDirection:"column",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx(Sp,{size:20,color:c.gray01,strokeWidth:2}),n.jsxs("span",{style:{fontSize:16,fontWeight:700,color:c.gray01,fontFamily:k.bold},children:["Pro ",u.name," Tips:"]})]}),_.map(H=>n.jsx("p",{style:{margin:0,fontSize:14,lineHeight:"22.4px",color:c.gray01,fontFamily:k.regular},children:H},H))]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[n.jsx("button",{type:"button",onClick:()=>p(H=>({...H,[u.id]:""})),style:{background:"none",border:"none",color:c.white,fontSize:16,cursor:"pointer",fontFamily:k.regular,padding:"10px 16px"},children:"Reset Field"}),n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx("button",{type:"button",disabled:i===0,onClick:()=>o(H=>Math.max(0,H-1)),style:{height:44,padding:"10px 16px",borderRadius:4,cursor:i===0?"not-allowed":"pointer",border:`1px solid ${c.gray02}`,background:"transparent",color:i===0?c.onDarkSubtle:c.white,fontSize:16,fontFamily:k.regular},children:"Back"}),i<Nr.length-1?n.jsxs("button",{type:"button",onClick:()=>o(H=>Math.min(Nr.length-1,H+1)),style:{height:44,padding:"10px 16px",borderRadius:4,border:"none",background:c.yellow,color:c.confidentBlack,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:k.bold},children:["Next Step: ",Nr[i+1].name]}):n.jsx("button",{type:"button",onClick:()=>o(0),style:{height:44,padding:"10px 16px",borderRadius:4,border:"none",background:c.yellow,color:c.confidentBlack,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:k.bold},children:"Start Over"})]})]})]}),n.jsxs("div",{style:{flex:"0 1 480px",display:"flex",flexDirection:"column",gap:16,minWidth:280},children:[n.jsxs("div",{style:{background:c.yellow,border:`1px solid ${c.gray02}`,borderRadius:16,padding:24,display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx(Sp,{size:20,color:c.offBlack,strokeWidth:2}),n.jsx("span",{style:{fontSize:20,fontWeight:700,color:c.offBlack,fontFamily:k.bold},children:"Why it matters"})]}),n.jsx("p",{style:{margin:0,fontSize:15,lineHeight:"25.5px",color:c.offBlack,fontFamily:k.regular},children:x})]}),n.jsxs("div",{style:{background:c.offWhite,border:`1px solid ${c.gray02}`,borderRadius:16,padding:24,display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[n.jsxs("span",{style:{background:"rgba(255,107,107,0.1)",padding:"2px 8px",borderRadius:4,fontSize:11,fontWeight:700,color:c.gray02,fontFamily:k.bold},children:["❌ WITHOUT ",Q]}),n.jsx("span",{style:{fontSize:14,color:c.gray01,fontFamily:k.regular},children:"The Generic Way"})]}),n.jsx("div",{style:{background:c.confidentBlack,borderRadius:8,padding:16},children:n.jsx("p",{style:{margin:0,fontSize:14,lineHeight:"22.4px",color:c.white,fontFamily:k.regular,fontStyle:"italic"},children:v})}),n.jsx("p",{style:{margin:0,fontSize:12,lineHeight:"19.2px",color:c.gray01,fontFamily:k.regular},children:b})]}),n.jsxs("div",{style:{background:c.offWhite,border:`1px solid ${c.gray02}`,borderRadius:16,padding:24,display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[n.jsxs("span",{style:{background:"rgba(46,204,113,0.1)",padding:"2px 8px",borderRadius:4,fontSize:11,fontWeight:700,color:c.gray02,fontFamily:k.bold},children:["✅ WITH ",Q]}),n.jsx("span",{style:{fontSize:14,color:c.gray01,fontFamily:k.regular},children:"The Expert Way"})]}),n.jsx("div",{style:{background:c.confidentBlack,borderRadius:8,padding:16},children:n.jsx("p",{style:{margin:0,fontSize:14,lineHeight:"22.4px",color:c.white,fontFamily:k.regular,fontStyle:"italic"},children:C})}),n.jsx("p",{style:{margin:0,fontSize:12,lineHeight:"19.2px",color:c.gray01,fontFamily:k.regular},children:F})]})]})]}),n.jsx("div",{style:{paddingTop:24},children:n.jsx("div",{style:{height:1,background:We.dark.border,width:"100%"}})})]})})}function ry({view:i,onChange:o,onDark:s=!1}){const p=`2px solid ${c.yellow}`,u=[{id:"wizard",label:"Wizard",Icon:kv,hint:"One technique at a time"},{id:"table",label:"Table",Icon:vf,hint:"Scan all techniques"}];return n.jsx("div",{role:"tablist","aria-label":"Advanced techniques view",style:{display:"inline-flex",background:s?c.white:c.offWhite,border:"1px solid rgba(46,46,56,0.10)",borderRadius:10,padding:4,gap:4},children:u.map(({id:f,label:h,Icon:m,hint:x})=>{const v=i===f;return n.jsxs("button",{type:"button",role:"tab","aria-selected":v,title:x,onClick:()=>o(f),style:{display:"flex",alignItems:"center",gap:8,padding:"9px 16px",borderRadius:7,border:"none",cursor:"pointer",background:v?c.confidentBlack:"transparent",color:v?c.white:c.gray01,fontSize:13,fontWeight:v?700:500,fontFamily:v?k.bold:k.regular,transition:"background 0.15s, color 0.15s"},onFocus:C=>{C.currentTarget.style.outline=p},onBlur:C=>{C.currentTarget.style.outline="none"},children:[n.jsx(m,{size:15,strokeWidth:2}),h]},f)})})}function iy(){return n.jsx("div",{style:{overflowX:"auto"},children:n.jsxs("div",{style:{border:"1px solid rgba(46,46,56,0.10)",borderRadius:10,overflow:"hidden",minWidth:860},children:[n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr 1.4fr 1.4fr 2fr 2fr",background:c.confidentBlack,padding:"14px 20px",gap:16},children:["Technique","Category","What it is","What it does","Without","With"].map((i,o)=>n.jsx("span",{style:{color:o===0?c.yellow:o>=4?o===4?c.destructive:c.success:c.gray02,fontSize:11,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",fontFamily:k.bold},children:i},i))}),$v.map((i,o)=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr 1.4fr 1.4fr 2fr 2fr",padding:"18px 20px",gap:16,alignItems:"start",background:o%2===0?c.white:c.offWhite,borderTop:"1px solid rgba(46,46,56,0.07)"},children:[n.jsx("span",{style:{color:c.confidentBlack,fontSize:13,fontWeight:700,fontFamily:k.bold,lineHeight:1.4},children:i.name}),n.jsx("span",{style:{display:"inline-block",width:"fit-content",fontSize:10,fontWeight:700,fontFamily:k.bold,color:i.categoryColor,background:i.categoryColor+"14",border:`1px solid ${i.categoryColor}33`,borderRadius:4,padding:"3px 8px"},children:i.category}),n.jsx("span",{style:{color:c.gray01,fontSize:13,fontFamily:k.regular,lineHeight:1.6},children:i.what}),n.jsx("span",{style:{color:c.gray01,fontSize:13,fontFamily:k.regular,lineHeight:1.6},children:i.does}),n.jsx("span",{style:{color:c.destructive,fontSize:12,fontStyle:"italic",fontFamily:k.light,lineHeight:1.65,background:c.destructive+"0a",borderRadius:6,padding:"8px 12px",display:"block"},children:i.without}),n.jsx("span",{style:{color:c.success,fontSize:12,fontStyle:"italic",fontFamily:k.light,lineHeight:1.65,background:c.success+"0a",borderRadius:6,padding:"8px 12px",display:"block"},children:i.with})]},i.id))]})})}function ay({onDark:i=!1}){const[o,s]=I.useState("wizard"),p=i?We.dark.body:c.gray01;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap",marginBottom:24},children:[n.jsx("p",{style:{fontSize:11,color:p,margin:0,fontFamily:k.regular,flex:1,minWidth:220},children:o==="wizard"?"Wizard — decompose left, walk through one facet at a time.":"Table — compare all techniques side by side for quick reference."}),n.jsx(ry,{view:o,onChange:s,onDark:i})]}),o==="wizard"?n.jsx(oy,{}):n.jsx(iy,{})]})}function oy(){const[i,o]=I.useState(Tr[0].id),[s,p]=I.useState({categoryId:Tr[0].id,techniqueId:Tr[0].techniques[0].id}),[u,f]=I.useState(0),h=Tr.find(E=>E.id===s.categoryId),m=h.techniques.find(E=>E.id===s.techniqueId),x=ar[u],v=m[x.key],C=x.key==="without"||x.key==="with",b=(E,B)=>{p({categoryId:E,techniqueId:B}),o(E),f(0)},F=`2px solid ${c.yellow}`;return n.jsxs("div",{style:{border:"1px solid rgba(46,46,56,0.10)",borderRadius:12,overflow:"hidden",display:"grid",gridTemplateColumns:"minmax(260px, 300px) 1fr",minHeight:520},children:[n.jsxs("nav",{"aria-label":"Advanced technique categories",style:{background:c.offWhite,borderRight:"1px solid rgba(46,46,56,0.08)",padding:"20px 0",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{padding:"0 20px 16px",borderBottom:"1px solid rgba(46,46,56,0.08)"},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:c.gray01,fontFamily:k.bold,marginBottom:4},children:"Decompose by topic"}),n.jsx("div",{style:{fontSize:13,color:c.offBlack,fontFamily:k.regular,lineHeight:1.5},children:"Pick a branch, then one technique."})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"12px 10px"},children:Tr.map(E=>{const B=i===E.id;return n.jsxs("div",{style:{marginBottom:6},children:[n.jsxs("button",{type:"button","aria-expanded":B,onClick:()=>o(B?"":E.id),style:{width:"100%",display:"flex",alignItems:"center",gap:10,padding:"10px 12px",background:B?c.white:"transparent",border:B?"1px solid rgba(46,46,56,0.10)":"1px solid transparent",borderRadius:8,cursor:"pointer",textAlign:"left"},onFocus:D=>{D.currentTarget.style.outline=F},onBlur:D=>{D.currentTarget.style.outline="none"},children:[n.jsx("span",{style:{width:22,height:22,borderRadius:6,flexShrink:0,background:E.color+"18",border:`1.5px solid ${E.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:E.color,fontFamily:k.bold},children:Tr.indexOf(E)+1}),n.jsxs("span",{style:{flex:1},children:[n.jsx("span",{style:{display:"block",fontSize:13,fontWeight:700,color:c.confidentBlack,fontFamily:k.bold},children:E.name}),n.jsxs("span",{style:{display:"block",fontSize:11,color:c.gray01,fontFamily:k.regular,marginTop:2},children:[E.techniques.length," technique",E.techniques.length>1?"s":""]})]}),n.jsx(Ho,{size:14,color:c.gray01,style:{flexShrink:0,transform:B?"rotate(90deg)":"none",transition:"transform 0.15s"}})]}),B&&n.jsx("div",{style:{marginTop:4,marginLeft:14,paddingLeft:14,borderLeft:`2px solid ${E.color}44`},children:E.techniques.map(D=>{const _=s.categoryId===E.id&&s.techniqueId===D.id;return n.jsx("button",{type:"button","aria-current":_?"true":void 0,onClick:()=>b(E.id,D.id),style:{width:"100%",display:"block",padding:"8px 12px",marginBottom:2,background:_?c.confidentBlack:"transparent",border:_?"none":"1px solid transparent",borderRadius:6,cursor:"pointer",textAlign:"left",fontSize:12,fontWeight:_?700:500,color:_?c.white:c.offBlack,fontFamily:_?k.bold:k.regular,lineHeight:1.4},onFocus:Q=>{Q.currentTarget.style.outline=F},onBlur:Q=>{Q.currentTarget.style.outline="none"},children:D.name},D.id)})})]},E.id)})})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",background:c.white},children:[n.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid rgba(46,46,56,0.08)",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[n.jsx("span",{style:{fontSize:11,color:h.color,fontWeight:700,fontFamily:k.bold},children:h.name}),n.jsx(Ho,{size:12,color:c.gray02}),n.jsx("span",{style:{fontSize:13,fontWeight:700,color:c.confidentBlack,fontFamily:k.bold},children:m.name}),n.jsxs("span",{style:{marginLeft:"auto",fontSize:11,color:c.gray01,fontFamily:k.regular},children:["Step ",u+1," of ",ar.length]})]}),n.jsx("div",{style:{display:"flex",gap:6,padding:"12px 24px",borderBottom:"1px solid rgba(46,46,56,0.06)"},children:ar.map((E,B)=>n.jsx("button",{type:"button","aria-label":`View ${E.label}`,"aria-current":B===u?"step":void 0,onClick:()=>f(B),style:{flex:1,height:4,borderRadius:2,border:"none",cursor:"pointer",background:B===u?E.color:B<u?E.color+"66":"rgba(46,46,56,0.10)",transition:"background 0.15s"},onFocus:D=>{D.currentTarget.style.outline=F,D.currentTarget.style.outlineOffset="2px"},onBlur:D=>{D.currentTarget.style.outline="none"}},E.key))}),n.jsxs("div",{style:{flex:1,padding:"28px 32px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:x.color,fontFamily:k.bold,marginBottom:12},children:x.label}),n.jsx("p",{style:{fontSize:x.key==="taxUse"?15:C?14:16,lineHeight:1.7,color:x.key==="without"?c.destructive:x.key==="with"?c.success:c.offBlack,fontFamily:C?k.light:k.regular,fontStyle:C?"italic":"normal",margin:0,maxWidth:560,padding:C?"16px 20px":0,background:C?x.key==="without"?c.destructive+"0a":c.success+"0a":"transparent",borderRadius:C?8:0,borderLeft:C?`3px solid ${x.color}`:"none"},children:v})]}),n.jsxs("div",{style:{padding:"14px 24px",borderTop:"1px solid rgba(46,46,56,0.08)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsxs("button",{type:"button",disabled:u===0,onClick:()=>f(E=>E-1),style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:6,border:"1px solid rgba(46,46,56,0.15)",background:u===0?c.offWhite:c.white,color:u===0?c.gray02:c.offBlack,cursor:u===0?"not-allowed":"pointer",fontSize:13,fontFamily:k.regular},onFocus:E=>{u>0&&(E.currentTarget.style.outline=F)},onBlur:E=>{E.currentTarget.style.outline="none"},children:[n.jsx(ov,{size:16})," Previous"]}),n.jsx("span",{style:{fontSize:12,color:c.gray01,fontFamily:k.regular},children:x.label}),n.jsxs("button",{type:"button",disabled:u===ar.length-1,onClick:()=>f(E=>E+1),style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:6,border:"1px solid rgba(46,46,56,0.15)",background:u===ar.length-1?c.offWhite:c.confidentBlack,color:u===ar.length-1?c.gray02:c.white,cursor:u===ar.length-1?"not-allowed":"pointer",fontSize:13,fontFamily:k.bold},onFocus:E=>{u<ar.length-1&&(E.currentTarget.style.outline=F)},onBlur:E=>{E.currentTarget.style.outline="none"},children:["Next ",n.jsx(Ho,{size:16})]})]})]})]})}function ly({onBack:i,onNavigate:o}){return n.jsxs("div",{style:{position:"fixed",inset:0,overflowY:"auto",background:c.white},children:[n.jsx(gi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),n.jsx(Go,{currentModuleId:"ai-tax-prompting",onNavigate:o,onBack:i}),n.jsxs("section",{id:"module-content",style:{padding:"80px 64px 72px",position:"relative",overflow:"hidden",backgroundColor:c.confidentBlack,backgroundImage:"url('/spectrum/hero-frame-8.png')",backgroundSize:"cover",backgroundPosition:"78% center",backgroundRepeat:"no-repeat"},children:[n.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(26,26,36,0.94) 0%, rgba(26,26,36,0.78) 45%, rgba(26,26,36,0.35) 72%, rgba(26,26,36,0.18) 100%)",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:$m(5),zIndex:2}}),n.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:860},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,230,0,0.08)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:24,padding:"6px 18px",marginBottom:28},children:[n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:c.yellow}}),n.jsx("span",{style:{color:c.yellow,fontSize:11,fontWeight:700,letterSpacing:"1.5px",fontFamily:k.bold},children:"PART 2 · AI TAX LABS"})]}),n.jsxs("h1",{style:{fontSize:52,fontWeight:700,color:c.white,lineHeight:1.15,marginBottom:20,fontFamily:k.bold},children:["Basics of"," ",n.jsx("span",{style:{color:c.yellow},children:"Prompting"})]}),n.jsx("p",{style:{fontSize:19,color:c.gray02,fontWeight:300,lineHeight:1.7,maxWidth:660,fontFamily:k.light},children:"The quality of your AI output is a direct function of your input. Learn the 8 elements of a great prompt — and how to use them in your daily tax work."}),n.jsxs("div",{style:{display:"flex",gap:12,marginTop:36},children:[n.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,230,0,0.10)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:20,color:c.yellow,fontSize:12,fontFamily:k.bold},children:"~30 min"}),n.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:20,color:c.gray02,fontSize:12,fontFamily:k.regular},children:"8 Elements"}),n.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:20,color:c.gray02,fontSize:12,fontFamily:k.regular},children:"Interactive"})]})]})]}),n.jsx("section",{id:"pipeline",style:{background:We.neutral.bg,padding:"80px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"flex",flexDirection:"column",gap:48,alignItems:"center"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16,width:"100%"},children:[n.jsx("div",{style:{background:c.yellow,border:`1px solid ${c.gray02}`,borderRadius:100,padding:"6px 16px"},children:n.jsx("span",{style:{fontSize:14,color:c.offBlack,fontFamily:k.regular,lineHeight:"21px"},children:"THE PIPELINE"})}),n.jsx("h2",{style:{fontSize:32,fontWeight:700,color:c.offBlack,fontFamily:k.bold,lineHeight:1.2,letterSpacing:"-0.32px",textAlign:"center",margin:0},children:"A Prompt Is Simply an Instruction"}),n.jsx("p",{style:{fontSize:16,color:c.offBlack,fontFamily:k.light,lineHeight:"24px",textAlign:"center",maxWidth:760,margin:0},children:"AI responds to the instructions you provide. Better instructions produce better results."})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,width:"100%",alignItems:"center"},children:[n.jsxs("div",{style:{background:c.confidentBlack,border:`1px solid ${c.gray02}`,borderRadius:16,padding:32,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:24,flexWrap:"wrap"},children:[n.jsxs("div",{style:{background:c.white,border:`1.5px solid ${c.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[n.jsx("div",{style:{background:c.info+"33",borderRadius:100,padding:12,display:"flex"},children:n.jsx(yf,{size:24,color:c.info,strokeWidth:2})}),n.jsx("span",{style:{fontSize:15,color:c.offBlack,fontFamily:k.regular,lineHeight:"25.5px"},children:"YOU"}),n.jsx("span",{style:{border:`1px solid ${c.gray02}`,borderRadius:16,padding:"2px 8px",fontSize:14,color:c.offBlack,fontFamily:k.regular,lineHeight:"22.4px"},children:"Instruction"})]}),n.jsx(Gs,{size:16,color:c.white,strokeWidth:2,style:{flexShrink:0}}),n.jsxs("div",{style:{background:c.yellow,border:`1.5px solid ${c.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[n.jsx("div",{style:{background:c.yellow,borderRadius:100,padding:12,display:"flex"},children:n.jsx(fv,{size:24,color:c.offBlack,strokeWidth:2})}),n.jsx("span",{style:{fontSize:15,color:c.offBlack,fontFamily:k.regular,lineHeight:"25.5px"},children:"AI ENGINE"}),n.jsx("span",{style:{border:`1px solid ${c.gray02}`,borderRadius:16,padding:"2px 8px",fontSize:14,color:c.offBlack,fontFamily:k.regular,lineHeight:"22.4px",background:c.yellow},children:"Processes"})]}),n.jsx(Gs,{size:16,color:c.white,strokeWidth:2,style:{flexShrink:0}}),n.jsxs("div",{style:{background:c.white,border:`1.5px solid ${c.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[n.jsx("div",{style:{background:"rgba(0,200,100,0.12)",borderRadius:100,padding:12,display:"flex"},children:n.jsx(dv,{size:24,color:c.success,strokeWidth:2})}),n.jsx("span",{style:{fontSize:15,color:c.offBlack,fontFamily:k.regular,lineHeight:"25.5px"},children:"RESULT"}),n.jsx("span",{style:{border:"1px solid rgba(0,200,100,0.35)",borderRadius:16,padding:"2px 8px",fontSize:14,color:c.offBlack,fontFamily:k.regular,lineHeight:"22.4px",background:"rgba(0,200,100,0.10)"},children:"Output"})]})]}),n.jsx("div",{style:{display:"flex",gap:24,width:"100%",flexWrap:"wrap"},children:[{Icon:Mv,text:"Specific input = Specific output."},{Icon:hv,text:"AI doesn't read your mind."},{Icon:Pv,text:"Prompting is a skill, not a gift."}].map(({Icon:s,text:p})=>n.jsxs("div",{style:{flex:"1 1 240px",background:c.confidentBlack,border:`1px solid ${c.gray02}`,borderRadius:12,padding:20,display:"flex",alignItems:"center",gap:16},children:[n.jsx(s,{size:24,color:c.white,strokeWidth:2,style:{flexShrink:0}}),n.jsx("p",{style:{margin:0,fontSize:14,color:c.white,fontFamily:k.regular,lineHeight:"21px"},children:p})]},p))})]})]})}),n.jsx(Qv,{}),n.jsx(ny,{}),n.jsx(Xv,{}),n.jsx("section",{id:"stack-builder",style:{background:We.light.bg,padding:"80px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:c.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:k.bold},children:"Build a Perfect Prompt — Piece by Piece"}),n.jsx("p",{style:{fontSize:16,color:c.gray01,textAlign:"center",lineHeight:1.7,marginBottom:8,fontFamily:k.light,maxWidth:650,marginLeft:"auto",marginRight:"auto"},children:"Click each ingredient below to add it to the prompt stack. Watch your prompt assemble in real time."}),n.jsx("p",{style:{fontSize:13,color:c.gray01,textAlign:"center",marginBottom:32,fontFamily:k.regular},children:"Use case: Analyzing withholding tax on software royalty payments from India to the US"}),n.jsx(Kv,{})]})}),n.jsx("section",{id:"advanced",style:{background:We.dark.bg,padding:"72px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[n.jsx("p",{style:{color:We.dark.eyebrow,fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:k.bold,marginBottom:10},children:"NEXT LEVEL"}),n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:We.dark.heading,marginBottom:8,fontFamily:k.bold},children:"Advanced Prompting Techniques"}),n.jsx("p",{style:{fontSize:16,color:We.dark.body,lineHeight:1.7,marginBottom:12,fontFamily:k.light,maxWidth:680},children:"Once you've mastered the 8 elements, these techniques help you get more precise, structured, and creative output."}),n.jsx(ay,{onDark:!0})]})}),n.jsx(ty,{}),n.jsx("section",{id:"dos-donts",style:{background:We.light.bg,padding:"72px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("p",{style:{color:We.light.eyebrow,fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:k.bold,marginBottom:10},children:"GUARDRAILS"}),n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:We.light.heading,marginBottom:48,fontFamily:k.bold},children:"Do's & Don'ts"}),n.jsxs("div",{children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,marginBottom:16},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 18px",background:c.success+"1a",border:`1px solid ${c.success}40`,borderRadius:8},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:c.success,strokeWidth:"2.5",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),n.jsx("span",{style:{color:c.success,fontSize:14,fontWeight:700,fontFamily:k.bold},children:"DO THIS"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 18px",background:c.destructive+"1a",border:`1px solid ${c.destructive}40`,borderRadius:8},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:c.destructive,strokeWidth:"2.5",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),n.jsx("span",{style:{color:c.destructive,fontSize:14,fontWeight:700,fontFamily:k.bold},children:"DON'T DO THIS"})]})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:Wv.map((s,p)=>{const u=Vv[p];return u?n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,alignItems:"stretch"},children:[n.jsxs("div",{style:{height:"100%",padding:"16px 18px",background:We.neutral.bg,borderRadius:8,border:`1px solid ${We.light.border}`,borderLeft:`3px solid ${c.success}`,display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{fontSize:13,fontWeight:700,color:c.success,marginBottom:5,fontFamily:k.bold},children:s.title}),n.jsx("div",{style:{fontSize:13,color:We.light.body,lineHeight:1.6,fontFamily:k.regular,flex:1},children:s.desc})]}),n.jsxs("div",{style:{height:"100%",padding:"16px 18px",background:We.neutral.bg,borderRadius:8,border:`1px solid ${We.light.border}`,borderLeft:`3px solid ${c.destructive}`,display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{fontSize:13,fontWeight:700,color:c.destructive,marginBottom:5,fontFamily:k.bold},children:u.title}),n.jsx("div",{style:{fontSize:13,color:We.light.body,lineHeight:1.6,fontFamily:k.regular,flex:1},children:u.desc})]})]},s.title):null})})]}),n.jsx("div",{style:{marginTop:40,padding:"14px 22px",background:c.yellowAlpha10,border:`1px solid ${c.yellow}33`,borderRadius:8,textAlign:"center"},children:n.jsx("p",{style:{fontSize:12,color:c.eyebrowGold,lineHeight:1.6,fontFamily:k.regular},children:"⚠️ AI tools are assistants, not advisors. All output must be reviewed by a qualified tax professional before client delivery. Never input confidential or personally identifiable information into public AI platforms."})})]})}),n.jsx(Jv,{}),n.jsx(ey,{onContinue:()=>o("/copilot-hub")}),n.jsx("div",{style:{background:We.light.bg,borderTop:`1px solid ${We.light.border}`,padding:"24px 64px",textAlign:"center"},children:n.jsx("p",{style:{color:c.gray01,fontSize:12,fontFamily:k.regular},children:"EY.ai Tax Labs · AI Tax Prompting Module · For internal training use only. Not for external distribution."})})]})}const q={yellow:"#FFE600",dark:"#1A1A24",dark2:"#2E2E38",gray01:"#747480",gray02:"#C4C4CD",offWhite:"#F6F6FA",white:"#FFFFFF",frameGreen:"#00C864",wordBlue:"#4696FF",excelGreen:"#00C864",pptOrange:"#FF3C00",outlookBlue:"#4696FF",teamsViolet:"#B400FF"};function sy({height:i=32,letterColor:o="#FFFFFF"}){return n.jsxs("svg",{viewBox:"0 -18 217.599 217.599",width:i*(217.599/181.599),height:i,"aria-label":"EY logo",children:[n.jsx("path",{fill:q.yellow,d:"M0 79.4L217.599 0v41z"}),n.jsx("path",{fill:o,d:"M24.9 150.6h28.5v-16.5H24.9v-13h31.5L46 103H1.4v78.6h62.8v-18.1H24.9zM106.1 103l-13.3 25.7L79.4 103h-26l27.4 47.6v31h23.5v-31l27.5-47.6z"})]})}function Vo({size:i=20}){return n.jsxs("svg",{width:i,height:i,viewBox:"0 0 32 32",fill:"none",children:[n.jsx("circle",{cx:"16",cy:"16",r:"16",fill:"url(#cg)"}),n.jsx("defs",{children:n.jsxs("radialGradient",{id:"cg",cx:"30%",cy:"30%",children:[n.jsx("stop",{offset:"0%",stopColor:"#4696FF"}),n.jsx("stop",{offset:"100%",stopColor:"#B400FF"})]})}),n.jsx("path",{d:"M16 8l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z",fill:"#FFFFFF",opacity:".9"})]})}const wf=[{id:"word",label:"Word Prompts",color:q.wordBlue,appColor:q.wordBlue,letter:"W"},{id:"excel",label:"Excel Formulas",color:q.excelGreen,appColor:q.excelGreen,letter:"X"},{id:"ppt",label:"PowerPoint Decks",color:q.pptOrange,appColor:q.pptOrange,letter:"P"},{id:"outlook",label:"Outlook Threads",color:q.outlookBlue,appColor:q.outlookBlue,letter:"O"},{id:"m365",label:"M365 Chat",color:q.teamsViolet,appColor:q.teamsViolet,letter:"T"}],dy={word:{eyebrow:"DOCUMENT INTELLIGENCE",eyebrowColor:q.wordBlue,h2:"Copilot in Word",subtitle:"Draft documents, summarize content, and rewrite text with AI-powered assistance. Build professional issue memos and restructure client communication instantly.",features:[{title:"Draft Position Notes",body:"Generate comprehensive first-cut tax research memos, issue analyses, and legal summaries for client reviews."},{title:"Refine Legal Language",body:"Audit and adjust draft submissions, ensuring technical precision and alignment with jurisdictional requirements."},{title:"Summarize Case Laws",body:"Quickly synthesize extensive tax court rulings, tribunal orders, and state circulars into essential facts and holdings."},{title:"Track Review Points",body:"Convert comments and inputs into action points, open items and next-step trackers."}],prompt:'"Draft a position memo on international tax safe harbor implications for tech transfers."',suggestions:["Summarize Rulings","Rewrite & Restructure"],screenshotSide:"left",altBg:!0},excel:{eyebrow:"ANALYTICAL ROUTINES",eyebrowColor:q.excelGreen,h2:"Copilot in Excel",subtitle:"Analyze data, create formulas, generate charts, and uncover insights from your spreadsheets. Build clean logical checks and eliminate calculation bugs.",features:[{title:"Analyse Tax Data",body:"Summarise large datasets and identify key trends, gaps, mismatches and exceptions."},{title:"Spot Exceptions",body:"Detect anomalies such as missing details, rate mismatches or duplicates."},{title:"Build Reconciliations",body:"Create formulas and logic checks to compare books, returns and working papers."},{title:"Visualise Compliance",body:"Create dashboards to show status, exposures, ageing and risk movement."}],prompt:'"Highlight and partition any invoice entries where currency rates deviate by more than 2%."',suggestions:["Flag Anomalies","Build Formula"],screenshotSide:"right",altBg:!1},ppt:{eyebrow:"COLLABORATIVE & CREATIVE DELIVERY",eyebrowColor:q.pptOrange,h2:"Copilot in PowerPoint & Chat",subtitle:"Translate raw data matrices into compelling slides, executive summaries, and cross-application project definitions. Use Interactive Chat to coordinate answers.",features:[{title:"Create Client Decks",body:"Convert tax analysis into structured, visually clean, client-ready presentations."},{title:"Prepare Leadership Updates",body:"Generate concise leadership slides on exposures, updates and decisions required."},{title:"Tell the Tax Story",body:"Organise complex positions into context, issue, risk, recommendation and next steps."},{title:"Summarise Case Strategy",body:"Build crisp hearing briefs, timelines and argument maps."}],prompt:'"Create a 5-slide visual presentation deck outlining the safe harbor risks for Q3."',suggestions:["Summarize Rulings","Rewrite & Restructure"],screenshotSide:"right",altBg:!0},outlook:{eyebrow:"COMMUNICATIONS & AGENDAS",eyebrowColor:q.outlookBlue,h2:"Copilot in Outlook",subtitle:"Summarize email threads, draft replies, and manage your inbox efficiently. Convert messy, sprawling client communications into actionable priorities in seconds.",features:[{title:"Draft Client Emails",body:"Prepare clear professional emails for data requests, updates and follow-ups."},{title:"Manage Follow-ups",body:"Convert email conversations into action-oriented follow-ups."},{title:"Summarise Threads",body:"Extract decisions, pending inputs, responsibilities and deadlines from long chains."},{title:"Polish Tone Instantly",body:"Rewrite responses to sound concise, client-sensitive and executive-ready."}],prompt:'"Summarise this 12-email thread, listing all key approvals and unresolved items for the compliance team."',suggestions:["Summarize Thread","Draft Reply"],screenshotSide:"left",altBg:!1},m365:{eyebrow:"COLATE INFORMATION ACROSS M365",eyebrowColor:q.teamsViolet,h2:"Copilot in M365 Chat",subtitle:"Use Copilot in M365 Chat to ask questions, get summaries, and generate content across your Microsoft 365 data. Chat brings together information from documents, emails, meetings, and contacts to give you AI-powered answers grounded in your work data.",features:[{title:"Search Across Work",body:"Find tax-related discussions, documents, emails and files across Microsoft 365."},{title:"Connect Tax Context",body:"Connect compliance data, research notes, email trails and presentation inputs."},{title:"Prepare Matter Briefs",body:"Generate briefing notes before client calls or internal reviews."},{title:"Accelerate First Drafts",body:"Create starting drafts for emails, memos, decks, trackers and meeting prep."}],prompt:'"Find all tax-related documents James shared last week and summarise the key updates."',suggestions:["Search Docs","Summarise"],screenshotSide:"right",altBg:!0}};function cy({title:i,body:o}){return n.jsxs("div",{style:{background:q.white,borderRadius:12,padding:"24px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)",borderBottom:"1px solid #C4C4CD"},children:[n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:16,color:q.dark2,marginBottom:8,lineHeight:1.3},children:i}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:14,color:q.gray01,lineHeight:1.6},children:o})]})}function kf({prompt:i,suggestions:o}){return n.jsxs("div",{style:{width:220,background:q.white,borderLeft:"1px solid #C4C4CD",padding:16,flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx(Vo,{size:22}),n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:14,color:q.dark2},children:"Copilot"})]}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:11,color:q.gray01,marginBottom:6,fontWeight:600,letterSpacing:"0.04em"},children:"CURRENT PROMPT"}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:12,background:q.offWhite,padding:"10px 12px",borderRadius:8,fontStyle:"italic",color:q.dark2,lineHeight:1.5,marginBottom:16},children:i}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:11,color:q.gray01,marginBottom:8,fontWeight:600,letterSpacing:"0.04em"},children:"SUGGESTIONS"}),o.map(s=>n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:16,border:"1px solid #C4C4CD",fontSize:11,color:q.dark2,marginRight:4,marginBottom:4,background:q.white,cursor:"default",fontFamily:k.regular},children:[n.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",children:[n.jsx("circle",{cx:"6",cy:"6",r:"5.5",stroke:q.frameGreen}),n.jsx("path",{d:"M3.5 6l1.7 1.7L8.5 4.5",stroke:q.frameGreen,strokeWidth:"1.2",strokeLinecap:"round"})]}),s]},s))]})}function uy({prompt:i,suggestions:o}){return n.jsxs("div",{style:{flex:1,background:"#F6F6FA",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsxs("div",{style:{background:q.wordBlue,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[n.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#4696FF"}),n.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:"W"})]}),n.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:k.regular,fontWeight:600},children:"Untitled Document"}),n.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:16},children:["File","Home","Insert"].map(s=>n.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontSize:11,fontFamily:k.regular},children:s},s))})]}),n.jsxs("div",{style:{display:"flex",minHeight:320},children:[n.jsxs("div",{style:{flex:1,padding:"24px 24px",fontFamily:k.regular,overflow:"hidden"},children:[n.jsx("p",{style:{fontWeight:700,fontSize:16,color:"#1A1A24",marginBottom:12},children:"International Tax Transfer Pricing Memo"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65",marginBottom:12},children:"Executive Summary: This document outlines the current regulatory landscape regarding safe harbor provisions for cross-border tech transfers. The following sections detail the methodology for calculating arm's length pricing and the implications of recent tribunal rulings on multinational entities."}),n.jsx("p",{style:{fontWeight:600,fontSize:13,color:"#1A1A24",marginBottom:6},children:"• Methodology"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65"},children:"We will utilize the Comparable Uncontrolled Price (CUP) method to establish a baseline for royalty rates. This approach ensures compliance with OECD guidelines while providing a defensible position for audit purposes."})]}),n.jsx(kf,{prompt:i,suggestions:o})]})]})}const py=[{n:2,id:"INV-20240101",exp:"1.1250",act:"1.1260",flag:"OK",ent:"DE Entity A",flagged:!1,active:!1},{n:3,id:"INV-20240102",exp:"1.1250",act:"1.1520",flag:"FLAG",ent:"FR Entity B",flagged:!0,active:!1},{n:4,id:"INV-20240103",exp:"1.1250",act:"1.1480",flag:"FLAG",ent:"NL Entity C",flagged:!1,active:!0},{n:5,id:"INV-20240104",exp:"1.1250",act:"1.1255",flag:"OK",ent:"UK Entity D",flagged:!1,active:!1},{n:6,id:"INV-20240105",exp:"1.1250",act:"1.1610",flag:"FLAG",ent:"ES Entity E",flagged:!0,active:!1},{n:7,id:"INV-20240106",exp:"1.1250",act:"1.1258",flag:"OK",ent:"IT Entity F",flagged:!1,active:!1},{n:8,id:"INV-20240107",exp:"1.1250",act:"1.1263",flag:"OK",ent:"PL Entity G",flagged:!1,active:!1,faded:!0}];function fy({prompt:i,suggestions:o}){return n.jsxs("div",{style:{flex:1,background:"#FFFFFF",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsxs("div",{style:{background:q.excelGreen,padding:"8px 14px",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[n.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#00C864"}),n.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:"X"})]}),n.jsx("span",{style:{color:"#FFFFFF",fontSize:12,fontFamily:k.regular,fontWeight:600},children:"TaxAnalysis_Q4_2024.xlsx - Excel"}),n.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:10},children:[q.excelGreen,"#00C864","#00C864"].map((s,p)=>n.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:s,border:"1px solid rgba(255,255,255,0.3)"}},p))})]}),n.jsx("div",{style:{background:"#F6F6FA",padding:"4px 14px",display:"flex",gap:16,borderBottom:"1px solid #C4C4CD"},children:["File","Home","Insert","Formulas","Data","Review","View","Copilot"].map(s=>n.jsx("span",{style:{fontSize:11,color:"#2E2E38",fontFamily:k.regular},children:s},s))}),n.jsxs("div",{style:{background:"#FFFFFF",padding:"5px 14px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #C4C4CD"},children:[n.jsx("span",{style:{background:"#F6F6FA",padding:"3px 8px",borderRadius:4,fontSize:10,fontFamily:"monospace",fontWeight:600},children:"D4"}),n.jsx("span",{style:{width:1,height:16,background:"#C4C4CD"}}),n.jsx("span",{style:{fontFamily:"monospace",fontSize:10,color:q.excelGreen},children:'=IF(ABS(C4-B4)/B4>0.02,"FLAG","OK")'})]}),n.jsxs("div",{style:{position:"relative",overflowX:"auto"},children:[n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:10,fontFamily:k.regular},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{background:"#F6F6FA",width:32,padding:"5px 6px",border:"1px solid #C4C4CD",color:"#747480"}}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Invoice ID"}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Expected Rate"}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Actual Rate"}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Variance Flag"}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Entity"})]})}),n.jsx("tbody",{children:py.map(s=>n.jsxs("tr",{style:{background:s.active?"rgba(16,124,65,0.06)":s.flagged?"rgba(192,57,43,0.04)":"#FFFFFF",opacity:s.faded?.45:1},children:[n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?q.excelGreen:"#747480",textAlign:"center",fontWeight:s.active?700:400},children:s.n}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?q.excelGreen:s.flagged?"#FF4136":"#2E2E38"},children:s.id}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:"#2E2E38"},children:s.exp}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.flagged?"#FF4136":s.active?q.excelGreen:"#2E2E38",fontWeight:s.flagged||s.active?600:400},children:s.act}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD"},children:n.jsx("span",{style:{background:s.flag==="FLAG"?s.active?q.excelGreen:"rgba(192,57,43,0.12)":"transparent",color:s.flag==="FLAG"?s.active?"#FFFFFF":"#FF4136":q.excelGreen,padding:"2px 6px",borderRadius:4,fontWeight:700},children:s.flag})}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?q.excelGreen:"#2E2E38"},children:s.ent})]},s.n))})]}),n.jsxs("div",{style:{background:"#FFFFFF",borderTop:"1px solid #C4C4CD",padding:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:10},children:[n.jsx(Vo,{size:16}),n.jsx("span",{style:{fontFamily:k.regular,fontSize:11,fontWeight:700,background:q.excelGreen,color:"#FFFFFF",padding:"2px 8px",borderRadius:10},children:"Copilot"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("div",{style:{fontSize:10,fontFamily:k.regular,padding:"8px 10px",borderRadius:8,background:"#F6F6FA",color:"#2E2E38",lineHeight:1.5},children:"I've analysed your transaction data. I found 2 invoices where currency rate deviation exceeds your 2% threshold."}),n.jsx("div",{style:{fontSize:10,fontFamily:k.regular,padding:"8px 10px",borderRadius:8,background:q.excelGreen,color:"#FFFFFF",alignSelf:"flex-end",maxWidth:"85%",lineHeight:1.5},children:"Highlight and partition any invoice entries where currency rates deviate by more than 2%."}),n.jsxs("div",{style:{fontSize:10,fontFamily:k.regular,padding:"8px 10px",borderRadius:8,background:"#F6F6FA",color:"#2E2E38",lineHeight:1.5},children:["Done! Rows 3 and 6 are flagged. Column D formula applied:",n.jsx("div",{style:{fontFamily:"monospace",fontSize:9,color:q.excelGreen,background:"#F6F6FA",padding:"4px 8px",borderRadius:4,marginTop:4},children:'=IF(ABS(C-B)/B>0.02,"FLAG","OK")'})]})]}),n.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",background:q.offWhite,borderRadius:8,padding:"6px 10px"},children:[n.jsx("span",{style:{flex:1,fontFamily:k.regular,fontSize:11,color:q.gray01},children:"Ask Copilot something..."}),n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:q.gray01,strokeWidth:"2",children:[n.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),n.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]})]})]})}function Ip({appColor:i,appLetter:o,title:s,bodyContent:p,prompt:u,suggestions:f}){return n.jsxs("div",{style:{flex:1,background:"#F6F6FA",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsxs("div",{style:{background:i,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[n.jsx("rect",{width:"18",height:"19",rx:"2",fill:i}),n.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:o})]}),n.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:k.regular,fontWeight:600},children:s}),n.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:16},children:["File","Home","Insert"].map(h=>n.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontSize:11,fontFamily:k.regular},children:h},h))})]}),n.jsxs("div",{style:{display:"flex",minHeight:300},children:[n.jsx("div",{style:{flex:1,padding:24,fontFamily:k.regular,overflow:"hidden"},children:p}),n.jsx(kf,{prompt:u,suggestions:f})]})]})}function gy(){return n.jsxs("div",{style:{flex:1,background:"#FFFFFF",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsxs("div",{style:{background:q.teamsViolet,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[n.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#B400FF"}),n.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:"T"})]}),n.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:k.regular,fontWeight:600},children:"M365 Chat"})]}),n.jsxs("div",{style:{padding:20},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,paddingBottom:16,borderBottom:"1px solid #C4C4CD",marginBottom:16},children:[n.jsx(Vo,{size:28}),n.jsxs("div",{children:[n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:15,color:q.dark2},children:"Copilot"}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:12,color:q.excelGreen},children:"Online"})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[n.jsxs("div",{style:{display:"flex",gap:10},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:q.yellow,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:k.regular,fontWeight:700,fontSize:12,color:q.dark},children:"U"}),n.jsx("div",{style:{background:"#F6F6FA",padding:"12px 14px",borderRadius:12,fontSize:13,color:"#2E2E38",fontFamily:k.regular,maxWidth:"85%",lineHeight:1.6},children:"Find all tax-related documents James shared last week and summarise the key updates across compliance and advisory."})]}),n.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[n.jsxs("div",{style:{background:"#F6F6FA",padding:"12px 14px",borderRadius:12,fontSize:13,color:"#2E2E38",fontFamily:k.regular,maxWidth:"85%",lineHeight:1.6},children:["I found 3 documents shared by James last week. Here is a summary of the key tax updates:",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Compliance:"})," New safe harbor provisions for cross-border tech transfers.",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Advisory:"})," Tribunal rulings on arm's length pricing methodologies."]}),n.jsx(Vo,{size:28})]})]})]})]})}function Cf({color:i,letter:o}){return n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",style:{flexShrink:0},children:[n.jsx("rect",{width:"20",height:"20",rx:"3",fill:i}),n.jsx("text",{x:"4",y:"14",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:o})]})}function hy({tabId:i}){const o=dy[i],s=wf.find(h=>h.id===i),p=o.altBg?q.offWhite:q.white,u=i==="word"?n.jsx(uy,{prompt:o.prompt,suggestions:o.suggestions}):i==="excel"?n.jsx(fy,{prompt:o.prompt,suggestions:o.suggestions}):i==="ppt"?n.jsx(Ip,{appColor:q.pptOrange,appLetter:"P",title:"Safe Harbor Presentation",prompt:o.prompt,suggestions:o.suggestions,bodyContent:n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{fontWeight:700,fontSize:16,color:"#1A1A24",marginBottom:12},children:"Safe Harbor Risks — Q3 Presentation"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65",marginBottom:12},children:"Executive Summary: This deck summarizes the current regulatory landscape regarding safe harbor provisions for cross-border tech transfers. The following slides detail the methodology for calculating arm's length pricing."}),n.jsx("p",{style:{fontWeight:600,fontSize:13,color:"#1A1A24",marginBottom:6},children:"• Slide 1: Executive Summary"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65"},children:"We will utilize the Comparable Uncontrolled Price (CUP) method to establish a baseline for royalty rates. This approach ensures compliance with OECD guidelines."})]})}):i==="outlook"?n.jsx(Ip,{appColor:q.outlookBlue,appLetter:"O",title:"Inbox — Compliance Team",prompt:o.prompt,suggestions:o.suggestions,bodyContent:n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,padding:12,background:"#F6F6FA",borderRadius:8},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:q.outlookBlue,display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF",fontWeight:700,fontSize:15,flexShrink:0,fontFamily:k.regular},children:"A"}),n.jsxs("div",{children:[n.jsx("p",{style:{fontWeight:700,fontSize:14,color:"#1A1A24",marginBottom:4,fontFamily:k.regular},children:"Alex Chen"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",fontFamily:k.regular},children:"Re: Compliance Review for Q3 Tax Filings"}),n.jsx("p",{style:{fontSize:11,color:q.gray01,fontFamily:k.regular,marginTop:2},children:"10:42 AM"})]})]})}):n.jsx(gy,{}),f=n.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:16},children:o.features.map(h=>n.jsx(cy,{title:h.title,body:h.body},h.title))});return n.jsxs("div",{style:{background:p,padding:"48px 80px 64px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[n.jsx(Cf,{color:s.appColor,letter:s.letter}),n.jsx("span",{style:{fontFamily:k.regular,fontWeight:700,fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:o.eyebrowColor},children:o.eyebrow})]}),n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:28,color:q.dark2,marginBottom:12,lineHeight:1.2},children:o.h2}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:15,color:q.gray01,maxWidth:1e3,marginBottom:36,lineHeight:1.6},children:o.subtitle}),n.jsx("div",{style:{display:"flex",gap:32,alignItems:"flex-start"},children:o.screenshotSide==="left"?n.jsxs(n.Fragment,{children:[u,f]}):n.jsxs(n.Fragment,{children:[f,u]})})]})}const oa={mail:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("path",{d:"M2 7l10 7 10-7"})]}),book:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M4 19.5A2.5 2.5 0 016.5 17H20"}),n.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"})]}),helpCircle:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),n.jsx("circle",{cx:"12",cy:"17",r:".5",fill:"#C4C4CD"})]}),compass:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),lock:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),n.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})},my=[{icon:oa.mail,title:"Outlook Copilot Resources",body:"Access quick reference sheets and guides for secure email automation.",cta:"View Guides"},{icon:oa.book,title:"EY Prompt Library",body:"Explore verified prompts created and vetted specifically by professional services.",cta:"Browse Library"},{icon:oa.helpCircle,title:"Copilot FAQs",body:"Find quick answers regarding workspace licenses, token limits, and prompt accuracy.",cta:"Read FAQs"},{icon:oa.compass,title:"Explore Agents",body:"Discover AI agents built for specific EY workflows, from tax research to audit support.",cta:"Explore Agents"},{icon:oa.lock,title:"Manage Access",body:"Review your Copilot license status, request access, or manage permissions for your team.",cta:"Manage Access"}],xy=[{num:"01",title:"Quick Check Before You Prompt",src:"/security_Picture1.png"},{num:"02",title:"Share Smartly",src:"/security_Picture2.png"},{num:"03",title:"Use Sensitivity Labels",src:"/security_Picture3.png"},{num:"04",title:"Check Who Has Access",src:"/security_Picture4.png"}];function vy({onBack:i,onNavigate:o}){const[s,p]=I.useState("word");return n.jsxs("div",{style:{fontFamily:k.regular,color:q.dark2,background:q.white,minHeight:"100vh"},children:[i&&o&&n.jsxs(n.Fragment,{children:[n.jsx(gi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),n.jsx(Go,{currentModuleId:"copilot-hub",onNavigate:o,onBack:i})]}),n.jsxs("section",{id:"module-content",style:{position:"relative",display:"flex",alignItems:"center",padding:"88px 80px",gap:64,overflow:"hidden",backgroundColor:q.dark,backgroundImage:"url('/spectrum/hero-frame-9.png')",backgroundSize:"cover",backgroundPosition:"72% center",backgroundRepeat:"no-repeat"},children:[n.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(26,26,36,0.92) 0%, rgba(26,26,36,0.72) 42%, rgba(26,26,36,0.28) 70%, rgba(26,26,36,0.15) 100%)",pointerEvents:"none"}}),n.jsxs("div",{style:{position:"relative",zIndex:1,flex:1,maxWidth:676},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20},children:[n.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:q.frameGreen}}),n.jsx("span",{style:{fontSize:11,color:q.gray02,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,fontFamily:k.regular},children:"M365 COPILOT HUB IS LIVE"})]}),n.jsx("h1",{style:{fontSize:36,color:q.white,fontWeight:700,lineHeight:1.3,marginBottom:20},children:"Explore M365 Copilot prompts in a new-age workspace"}),n.jsx("p",{style:{fontSize:16,color:"rgba(255,255,255,0.82)",lineHeight:1.6},children:"Step into an interactive M365 learning space where you can find what wonders the age-old MS apps can do just by adding a magical element called M365."})]}),n.jsx("div",{style:{position:"relative",zIndex:1,width:540,height:269,background:"rgba(46,46,56,0.55)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("div",{style:{width:0,height:0,borderLeft:"22px solid #FFFFFF",borderTop:"13px solid transparent",borderBottom:"13px solid transparent",marginLeft:5}})})})]}),n.jsxs("section",{id:"prompt-repository",style:{padding:"64px 80px 0",textAlign:"center",scrollMarginTop:Tt},children:[n.jsx("p",{style:{fontSize:11,color:q.gray01,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:12,fontWeight:700},children:"EXPLORE PROMPT CATEGORIES"}),n.jsx("h2",{style:{fontSize:28,fontWeight:700,marginBottom:12,color:q.dark2},children:"Sample Prompt Repository for using Copilot in Tax"}),n.jsx("p",{style:{fontSize:15,color:q.gray01,marginBottom:32},children:"Select your preferred M365 application tool below to view optimized, compliant corporate-ready prompts."}),n.jsx("div",{style:{display:"inline-flex",gap:8,background:q.dark2,borderRadius:12,padding:8},children:wf.map(u=>n.jsxs("button",{onClick:()=>p(u.id),style:{display:"flex",alignItems:"center",gap:8,padding:"9px 18px",borderRadius:8,background:s===u.id?q.yellow:"transparent",border:"none",cursor:"pointer",fontSize:13,color:s===u.id?q.dark2:q.gray02,fontWeight:700,boxShadow:s===u.id?"0 1px 6px rgba(0,0,0,0.25)":"none",transition:"background 0.15s, color 0.15s, box-shadow 0.15s",fontFamily:k.regular},children:[n.jsx(Cf,{color:u.appColor,letter:u.letter}),u.label]},u.id))})]}),n.jsx(hy,{tabId:s}),n.jsxs("section",{id:"useful-links",style:{background:q.dark2,padding:"80px 80px 64px",scrollMarginTop:Tt},children:[n.jsx("h2",{style:{fontSize:28,fontWeight:700,color:q.white,marginBottom:12,textAlign:"center"},children:"Useful Links"}),n.jsx("p",{style:{fontSize:15,color:q.gray02,marginBottom:48,textAlign:"center"},children:"Handy EY resources to check your system access, explore deeper templates, and use generative AI safely."}),n.jsx("div",{style:{display:"flex",gap:20},children:my.map(u=>n.jsxs("div",{style:{flex:"1 1 0",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,padding:"24px 20px",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.15s",cursor:"default"},children:[n.jsx("div",{style:{width:48,height:48,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:u.icon}),n.jsx("p",{style:{fontWeight:700,fontSize:15,color:q.white,lineHeight:1.3},children:u.title}),n.jsx("p",{style:{fontSize:13,color:"#C4C4CD",flex:1,lineHeight:1.55},children:u.body}),n.jsxs("a",{href:"#",style:{fontSize:14,color:q.yellow,textDecoration:"none",fontWeight:700,display:"flex",alignItems:"center",gap:4},children:[u.cta," ",n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},u.title))})]}),n.jsxs("section",{id:"security",style:{background:q.dark,padding:"80px 80px 80px",scrollMarginTop:Tt},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",background:"rgba(255,230,0,0.12)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:20,padding:"5px 14px",marginBottom:24},children:n.jsx("span",{style:{fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:q.yellow,fontFamily:k.regular},children:"GOVERNANCE & TRUST"})}),n.jsx("h2",{style:{fontSize:32,fontWeight:700,color:q.white,marginBottom:14},children:"Enterprise-Grade Security"}),n.jsx("p",{style:{fontSize:16,color:q.gray02,marginBottom:52,maxWidth:800},children:"Before you let Copilot loose on tax data, know the ground rules. Tap any card to view it full-size."}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:26},children:xy.map(u=>n.jsxs("div",{style:{borderRadius:12,overflow:"hidden",cursor:"pointer",transition:"transform 0.25s, box-shadow 0.25s",background:"#2e2e38",border:"1px solid #747480",display:"flex",flexDirection:"column"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-6px)",f.currentTarget.style.boxShadow="0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px #ffe600"},onMouseLeave:f=>{f.currentTarget.style.transform="none",f.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{height:140,background:"linear-gradient(155deg, rgb(69,69,83) 0%, rgb(37,37,46) 100%)",position:"relative",overflow:"hidden",flexShrink:0},children:n.jsx("img",{src:u.src,alt:u.title,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}})}),n.jsxs("div",{style:{background:"#2e2e38",padding:"20px 24px",flex:1,display:"flex",flexDirection:"column"},children:[n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:32,color:q.yellow,marginBottom:10,lineHeight:1},children:u.num}),n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:16,color:q.white,lineHeight:1.35,flex:1,marginBottom:14},children:u.title}),n.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.1)",marginBottom:14}}),n.jsxs("a",{href:"#",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,color:q.yellow,fontWeight:700,textDecoration:"none",fontFamily:k.regular},children:["View Protocol",n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},u.num))})]}),n.jsx(dd,{title:n.jsxs(n.Fragment,{children:["You've completed Phase 1.",n.jsx("br",{}),"Keep practising with ",n.jsx(bf,{children:"real tax workflows."})]}),description:"You now have the foundations, prompting craft, and Copilot patterns to use AI safely in tax work. Revisit any module anytime — or return to Tax Labs to explore what's next.",ctaLabel:"Back to Tax Labs",onContinue:()=>o==null?void 0:o("/phase1"),meta:"Phase 1 covered: AI foundations, tax prompting, and M365 Copilot"}),n.jsxs("footer",{style:{background:q.dark2,padding:"56px 80px 32px"},children:[n.jsxs("div",{style:{display:"flex",gap:80,marginBottom:48},children:[n.jsxs("div",{style:{flex:1,maxWidth:280},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[n.jsx(sy,{height:28,letterColor:"#FFFFFF"}),n.jsx("span",{style:{color:q.white,fontWeight:700,fontSize:16,fontFamily:k.regular},children:"EY.ai Tax Labs"})]}),n.jsx("p",{style:{fontSize:13,color:"#C4C4CD",lineHeight:1.6},children:"Accelerating tax performance safely through custom generative AI structures and premium prompt frameworks."})]}),n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:14,color:q.white,fontWeight:700,marginBottom:14,fontFamily:k.regular},children:"M365 Apps"}),["Word Prompts","Excel Sheets","PowerPoint Decks","Outlook Emails"].map(u=>n.jsx("a",{href:"#",style:{display:"block",fontSize:13,color:"#C4C4CD",textDecoration:"none",marginBottom:8,fontFamily:k.regular},children:u},u))]}),n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:14,color:q.white,fontWeight:700,marginBottom:14,fontFamily:k.regular},children:"Trust & Security"}),["Privacy Policy","Data Governance","Safe Harbor Rules"].map(u=>n.jsx("a",{href:"#",style:{display:"block",fontSize:13,color:"#C4C4CD",textDecoration:"none",marginBottom:8,fontFamily:k.regular},children:u},u))]})]}),n.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:20,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsx("p",{style:{fontSize:12,color:"#C4C4CD",fontFamily:k.regular},children:"© 2026 EY.ai Tax Labs. All rights reserved. Proprietary and confidential."}),n.jsx("div",{style:{display:"flex",gap:14},children:["in","𝕏"].map(u=>n.jsx("a",{href:"#",style:{width:28,height:28,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"#C4C4CD",fontSize:11,fontWeight:700,textDecoration:"none",fontFamily:k.regular},children:u},u))})]})]})]})}function yy(){return n.jsx("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden",children:n.jsx(b1,{})})}function by(){const i=Nn();return n.jsx("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden",children:n.jsx(X2,{onNavigateToPhase1:()=>i("/phase1")})})}function wy(){const i=Nn();return n.jsx("div",{style:{width:"100%",maxWidth:"100%",minWidth:0},children:n.jsx(J2,{onNavigate:i,onNavigateToFoundational:()=>i("/foundational"),onNavigateToAiTaxPrompting:()=>i("/ai-tax-prompting"),onNavigateToCopilotHub:()=>i("/copilot-hub")})})}function ky(){const i=Nn();return n.jsx("div",{className:"size-full",children:n.jsx(vy,{onBack:()=>i("/phase1"),onNavigate:i})})}function Cy(){const i=Nn();return n.jsx("div",{className:"size-full",children:n.jsx(ly,{onBack:()=>i("/phase1"),onNavigate:i})})}function jy(){const i=Nn();return n.jsx("div",{className:"size-full",children:n.jsx(Ov,{onBack:()=>i("/phase1"),onNavigate:i})})}function Ey(){return n.jsx("div",{className:"size-full overflow-auto bg-white",children:n.jsx(om,{})})}const Sy=Lm([{path:"/",Component:Ey,children:[{index:!0,Component:yy},{path:"phased",Component:by},{path:"phase1",Component:wy},{path:"ai-tax-prompting",Component:Cy},{path:"foundational",Component:jy},{path:"copilot-hub",Component:ky}]}]);function Fy(){return n.jsx(rm,{router:Sy})}hg.createRoot(document.getElementById("root")).render(n.jsx(Fy,{}));
