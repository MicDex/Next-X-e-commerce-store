"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[3469],{73469:(e,t,n)=>{n.d(t,{UC:()=>Pe,ZL:()=>we,bL:()=>ye,l9:()=>be});var o=n(58168),r=n(51609),i=n(9957),s=n(91071),a=n(62133),u=n(12579),l=n(10263),c=n(92129);const d="dismissableLayer.update";let p;const f=(0,r.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),v=(0,r.forwardRef)(((e,t)=>{var n;const{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:v,onPointerDownOutside:E,onFocusOutside:g,onInteractOutside:y,onDismiss:b,...w}=e,P=(0,r.useContext)(f),[O,C]=(0,r.useState)(null),A=null!==(n=null==O?void 0:O.ownerDocument)&&void 0!==n?n:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,x]=(0,r.useState)({}),T=(0,s.s)(t,(e=>C(e))),D=Array.from(P.layers),[N]=[...P.layersWithOutsidePointerEventsDisabled].slice(-1),L=D.indexOf(N),R=O?D.indexOf(O):-1,F=P.layersWithOutsidePointerEventsDisabled.size>0,_=R>=L,I=function(e,t=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const n=(0,l.c)(e),o=(0,r.useRef)(!1),i=(0,r.useRef)((()=>{}));return(0,r.useEffect)((()=>{const e=e=>{if(e.target&&!o.current){const r={originalEvent:e};function s(){h("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=s,t.addEventListener("click",i.current,{once:!0})):s()}else t.removeEventListener("click",i.current);o.current=!1},r=window.setTimeout((()=>{t.addEventListener("pointerdown",e)}),0);return()=>{window.clearTimeout(r),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}}),[t,n]),{onPointerDownCapture:()=>o.current=!0}}((e=>{const t=e.target,n=[...P.branches].some((e=>e.contains(t)));_&&!n&&(null==E||E(e),null==y||y(e),e.defaultPrevented||null==b||b())}),A),S=function(e,t=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const n=(0,l.c)(e),o=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{const e=e=>{e.target&&!o.current&&h("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)}),[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}((e=>{const t=e.target;[...P.branches].some((e=>e.contains(t)))||(null==g||g(e),null==y||y(e),e.defaultPrevented||null==b||b())}),A);return(0,c.U)((e=>{R===P.layers.size-1&&(null==v||v(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))}),A),(0,r.useEffect)((()=>{if(O)return a&&(0===P.layersWithOutsidePointerEventsDisabled.size&&(p=A.body.style.pointerEvents,A.body.style.pointerEvents="none"),P.layersWithOutsidePointerEventsDisabled.add(O)),P.layers.add(O),m(),()=>{a&&1===P.layersWithOutsidePointerEventsDisabled.size&&(A.body.style.pointerEvents=p)}}),[O,A,a,P]),(0,r.useEffect)((()=>()=>{O&&(P.layers.delete(O),P.layersWithOutsidePointerEventsDisabled.delete(O),m())}),[O,P]),(0,r.useEffect)((()=>{const e=()=>x({});return document.addEventListener(d,e),()=>document.removeEventListener(d,e)}),[]),(0,r.createElement)(u.sG.div,(0,o.A)({},w,{ref:T,style:{pointerEvents:F?_?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.m)(e.onFocusCapture,S.onFocusCapture),onBlurCapture:(0,i.m)(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:(0,i.m)(e.onPointerDownCapture,I.onPointerDownCapture)}))}));function m(){const e=new CustomEvent(d);document.dispatchEvent(e)}function h(e,t,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?(0,u.hO)(r,i):r.dispatchEvent(i)}var E=n(61463);const g="focusScope.autoFocusOnMount",y="focusScope.autoFocusOnUnmount",b={bubbles:!1,cancelable:!0},w=(0,r.forwardRef)(((e,t)=>{const{loop:n=!1,trapped:i=!1,onMountAutoFocus:a,onUnmountAutoFocus:c,...d}=e,[p,f]=(0,r.useState)(null),v=(0,l.c)(a),m=(0,l.c)(c),h=(0,r.useRef)(null),E=(0,s.s)(t,(e=>f(e))),w=(0,r.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,r.useEffect)((()=>{if(i){function e(e){if(w.paused||!p)return;const t=e.target;p.contains(t)?h.current=t:A(h.current,{select:!0})}function t(e){if(w.paused||!p)return;const t=e.relatedTarget;null!==t&&(p.contains(t)||A(h.current,{select:!0}))}function n(e){if(document.activeElement===document.body)for(const t of e)t.removedNodes.length>0&&A(p)}document.addEventListener("focusin",e),document.addEventListener("focusout",t);const o=new MutationObserver(n);return p&&o.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),o.disconnect()}}}),[i,p,w.paused]),(0,r.useEffect)((()=>{if(p){x.add(w);const e=document.activeElement;if(!p.contains(e)){const t=new CustomEvent(g,b);p.addEventListener(g,v),p.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(A(o,{select:t}),document.activeElement!==n)return}(P(p).filter((e=>"A"!==e.tagName)),{select:!0}),document.activeElement===e&&A(p))}return()=>{p.removeEventListener(g,v),setTimeout((()=>{const t=new CustomEvent(y,b);p.addEventListener(y,m),p.dispatchEvent(t),t.defaultPrevented||A(null!=e?e:document.body,{select:!0}),p.removeEventListener(y,m),x.remove(w)}),0)}}}),[p,v,m,w]);const C=(0,r.useCallback)((e=>{if(!n&&!i)return;if(w.paused)return;const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){const t=e.currentTarget,[r,i]=function(e){const t=P(e);return[O(t,e),O(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&A(i,{select:!0})):(e.preventDefault(),n&&A(r,{select:!0})):o===t&&e.preventDefault()}}),[n,i,w.paused]);return(0,r.createElement)(u.sG.div,(0,o.A)({tabIndex:-1},d,{ref:E,onKeyDown:C}))}));function P(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function O(e,t){for(const n of e)if(!C(n,{upTo:t}))return n}function C(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(void 0!==t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function A(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&function(e){return e instanceof HTMLInputElement&&"select"in e}(e)&&t&&e.select()}}const x=function(){let e=[];return{add(t){const n=e[0];t!==n&&(null==n||n.pause()),e=T(e,t),e.unshift(t)},remove(t){var n;e=T(e,t),null===(n=e[0])||void 0===n||n.resume()}}}();function T(e,t){const n=[...e],o=n.indexOf(t);return-1!==o&&n.splice(o,1),n}var D=n(18723),N=n(34743),L=n(52425),R=n(95361),F=(n(48771),n(88200)),_=n(31769);const I="Popper",[S,M]=(0,a.A)(I),[k,U]=S(I),W=(0,r.forwardRef)(((e,t)=>{const{__scopePopper:n,virtualRef:i,...a}=e,l=U("PopperAnchor",n),c=(0,r.useRef)(null),d=(0,s.s)(t,c);return(0,r.useEffect)((()=>{l.onAnchorChange((null==i?void 0:i.current)||c.current)})),i?null:(0,r.createElement)(u.sG.div,(0,o.A)({},a,{ref:d}))})),K="PopperContent",[$,z]=S(K),B=(0,r.forwardRef)(((e,t)=>{var n,i,a,c,d,p,f,v;const{__scopePopper:m,side:h="bottom",sideOffset:E=0,align:g="center",alignOffset:y=0,arrowPadding:b=0,avoidCollisions:w=!0,collisionBoundary:P=[],collisionPadding:O=0,sticky:C="partial",hideWhenDetached:A=!1,updatePositionStrategy:x="optimized",onPlaced:T,...D}=e,I=U(K,m),[S,M]=(0,r.useState)(null),k=(0,s.s)(t,(e=>M(e))),[W,z]=(0,r.useState)(null),B=(0,_.X)(W),X=null!==(n=null==B?void 0:B.width)&&void 0!==n?n:0,Y=null!==(i=null==B?void 0:B.height)&&void 0!==i?i:0,Z=h+("center"!==g?"-"+g:""),q="number"==typeof O?O:{top:0,right:0,bottom:0,left:0,...O},J=Array.isArray(P)?P:[P],Q=J.length>0,V={padding:q,boundary:J.filter(H),altBoundary:Q},{refs:ee,floatingStyles:te,placement:ne,isPositioned:oe,middlewareData:re}=(0,N.we)({strategy:"fixed",placement:Z,whileElementsMounted:(...e)=>(0,L.ll)(...e,{animationFrame:"always"===x}),elements:{reference:I.anchor},middleware:[(0,R.cY)({mainAxis:E+Y,alignmentAxis:y}),w&&(0,L.BN)({mainAxis:!0,crossAxis:!1,limiter:"partial"===C?(0,L.ER)():void 0,...V}),w&&(0,L.UU)({...V}),(0,L.Ej)({...V,apply:({elements:e,rects:t,availableWidth:n,availableHeight:o})=>{const{width:r,height:i}=t.reference,s=e.floating.style;s.setProperty("--radix-popper-available-width",`${n}px`),s.setProperty("--radix-popper-available-height",`${o}px`),s.setProperty("--radix-popper-anchor-width",`${r}px`),s.setProperty("--radix-popper-anchor-height",`${i}px`)}}),W&&(0,N.UE)({element:W,padding:b}),G({arrowWidth:X,arrowHeight:Y}),A&&(0,L.jD)({strategy:"referenceHidden",...V})]}),[ie,se]=j(ne),ae=(0,l.c)(T);(0,F.N)((()=>{oe&&(null==ae||ae())}),[oe,ae]);const ue=null===(a=re.arrow)||void 0===a?void 0:a.x,le=null===(c=re.arrow)||void 0===c?void 0:c.y,ce=0!==(null===(d=re.arrow)||void 0===d?void 0:d.centerOffset),[de,pe]=(0,r.useState)();return(0,F.N)((()=>{S&&pe(window.getComputedStyle(S).zIndex)}),[S]),(0,r.createElement)("div",{ref:ee.setFloating,"data-radix-popper-content-wrapper":"",style:{...te,transform:oe?te.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:de,"--radix-popper-transform-origin":[null===(p=re.transformOrigin)||void 0===p?void 0:p.x,null===(f=re.transformOrigin)||void 0===f?void 0:f.y].join(" ")},dir:e.dir},(0,r.createElement)($,{scope:m,placedSide:ie,onArrowChange:z,arrowX:ue,arrowY:le,shouldHideArrow:ce},(0,r.createElement)(u.sG.div,(0,o.A)({"data-side":ie,"data-align":se},D,{ref:k,style:{...D.style,animation:oe?void 0:"none",opacity:null!==(v=re.hide)&&void 0!==v&&v.referenceHidden?0:void 0}}))))}));function H(e){return null!==e}const G=e=>({name:"transformOrigin",options:e,fn(t){var n,o,r,i,s;const{placement:a,rects:u,middlewareData:l}=t,c=0!==(null===(n=l.arrow)||void 0===n?void 0:n.centerOffset),d=c?0:e.arrowWidth,p=c?0:e.arrowHeight,[f,v]=j(a),m={start:"0%",center:"50%",end:"100%"}[v],h=(null!==(o=null===(r=l.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+d/2,E=(null!==(i=null===(s=l.arrow)||void 0===s?void 0:s.y)&&void 0!==i?i:0)+p/2;let g="",y="";return"bottom"===f?(g=c?m:`${h}px`,y=-p+"px"):"top"===f?(g=c?m:`${h}px`,y=`${u.floating.height+p}px`):"right"===f?(g=-p+"px",y=c?m:`${E}px`):"left"===f&&(g=`${u.floating.width+p}px`,y=c?m:`${E}px`),{data:{x:g,y}}}});function j(e){const[t,n="center"]=e.split("-");return[t,n]}const X=e=>{const{__scopePopper:t,children:n}=e,[o,i]=(0,r.useState)(null);return(0,r.createElement)(k,{scope:t,anchor:o,onAnchorChange:i},n)},Y=W,Z=B;var q=n(75795);const J=(0,r.forwardRef)(((e,t)=>{var n;const{container:i=(null===globalThis||void 0===globalThis||null===(n=globalThis.document)||void 0===n?void 0:n.body),...s}=e;return i?q.createPortal((0,r.createElement)(u.sG.div,(0,o.A)({},s,{ref:t})),i):null}));var Q=n(7971),V=n(33362),ee=n(81351),te=n(58241),ne=n(74099);const oe="Popover",[re,ie]=(0,a.A)(oe,[M]),se=M(),[ae,ue]=re(oe),le=(0,r.forwardRef)(((e,t)=>{const{__scopePopover:n,...a}=e,l=ue("PopoverTrigger",n),c=se(n),d=(0,s.s)(t,l.triggerRef),p=(0,r.createElement)(u.sG.button,(0,o.A)({type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":ge(l.open)},a,{ref:d,onClick:(0,i.m)(e.onClick,l.onOpenToggle)}));return l.hasCustomAnchor?p:(0,r.createElement)(Y,(0,o.A)({asChild:!0},c),p)})),ce="PopoverPortal",[de,pe]=re(ce,{forceMount:void 0}),fe="PopoverContent",ve=(0,r.forwardRef)(((e,t)=>{const n=pe(fe,e.__scopePopover),{forceMount:i=n.forceMount,...s}=e,a=ue(fe,e.__scopePopover);return(0,r.createElement)(Q.C,{present:i||a.open},a.modal?(0,r.createElement)(me,(0,o.A)({},s,{ref:t})):(0,r.createElement)(he,(0,o.A)({},s,{ref:t})))})),me=(0,r.forwardRef)(((e,t)=>{const n=ue(fe,e.__scopePopover),a=(0,r.useRef)(null),u=(0,s.s)(t,a),l=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{const e=a.current;if(e)return(0,te.Eq)(e)}),[]),(0,r.createElement)(ne.A,{as:V.DX,allowPinchZoom:!0},(0,r.createElement)(Ee,(0,o.A)({},e,{ref:u,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.m)(e.onCloseAutoFocus,(e=>{var t;e.preventDefault(),l.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()})),onPointerDownOutside:(0,i.m)(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,o=2===t.button||n;l.current=o}),{checkForDefaultPrevented:!1}),onFocusOutside:(0,i.m)(e.onFocusOutside,(e=>e.preventDefault()),{checkForDefaultPrevented:!1})})))})),he=(0,r.forwardRef)(((e,t)=>{const n=ue(fe,e.__scopePopover),i=(0,r.useRef)(!1),s=(0,r.useRef)(!1);return(0,r.createElement)(Ee,(0,o.A)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,r;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(i.current||null===(r=n.triggerRef.current)||void 0===r||r.focus(),t.preventDefault()),i.current=!1,s.current=!1},onInteractOutside:t=>{var o,r;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(i.current=!0,"pointerdown"===t.detail.originalEvent.type&&(s.current=!0));const a=t.target;(null===(r=n.triggerRef.current)||void 0===r?void 0:r.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&s.current&&t.preventDefault()}}))})),Ee=(0,r.forwardRef)(((e,t)=>{const{__scopePopover:n,trapFocus:i,onOpenAutoFocus:s,onCloseAutoFocus:a,disableOutsidePointerEvents:u,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:p,...f}=e,m=ue(fe,n),h=se(n);return(0,E.Oh)(),(0,r.createElement)(w,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:s,onUnmountAutoFocus:a},(0,r.createElement)(v,{asChild:!0,disableOutsidePointerEvents:u,onInteractOutside:p,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:d,onDismiss:()=>m.onOpenChange(!1)},(0,r.createElement)(Z,(0,o.A)({"data-state":ge(m.open),role:"dialog",id:m.contentId},h,f,{ref:t,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))}));function ge(e){return e?"open":"closed"}const ye=e=>{const{__scopePopover:t,children:n,open:o,defaultOpen:i,onOpenChange:s,modal:a=!1}=e,u=se(t),l=(0,r.useRef)(null),[c,d]=(0,r.useState)(!1),[p=!1,f]=(0,ee.i)({prop:o,defaultProp:i,onChange:s});return(0,r.createElement)(X,u,(0,r.createElement)(ae,{scope:t,contentId:(0,D.B)(),triggerRef:l,open:p,onOpenChange:f,onOpenToggle:(0,r.useCallback)((()=>f((e=>!e))),[f]),hasCustomAnchor:c,onCustomAnchorAdd:(0,r.useCallback)((()=>d(!0)),[]),onCustomAnchorRemove:(0,r.useCallback)((()=>d(!1)),[]),modal:a},n))},be=le,we=e=>{const{__scopePopover:t,forceMount:n,children:o,container:i}=e,s=ue(ce,t);return(0,r.createElement)(de,{scope:t,forceMount:n},(0,r.createElement)(Q.C,{present:n||s.open},(0,r.createElement)(J,{asChild:!0,container:i},o)))},Pe=ve},7971:(e,t,n)=>{n.d(t,{C:()=>a});var o=n(51609),r=n(75795),i=n(91071),s=n(88200);const a=e=>{const{present:t,children:n}=e,a=function(e){const[t,n]=(0,o.useState)(),i=(0,o.useRef)({}),a=(0,o.useRef)(e),l=(0,o.useRef)("none"),c=e?"mounted":"unmounted",[d,p]=function(e,t){return(0,o.useReducer)(((e,n)=>{const o=t[e][n];return null!=o?o:e}),e)}(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,o.useEffect)((()=>{const e=u(i.current);l.current="mounted"===d?e:"none"}),[d]),(0,s.N)((()=>{const t=i.current,n=a.current;if(n!==e){const o=l.current,r=u(t);e?p("MOUNT"):"none"===r||"none"===(null==t?void 0:t.display)?p("UNMOUNT"):p(n&&o!==r?"ANIMATION_OUT":"UNMOUNT"),a.current=e}}),[e,p]),(0,s.N)((()=>{if(t){const e=e=>{const n=u(i.current).includes(e.animationName);e.target===t&&n&&(0,r.flushSync)((()=>p("ANIMATION_END")))},n=e=>{e.target===t&&(l.current=u(i.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}p("ANIMATION_END")}),[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,o.useCallback)((e=>{e&&(i.current=getComputedStyle(e)),n(e)}),[])}}(t),l="function"==typeof n?n({present:a.isPresent}):o.Children.only(n),c=(0,i.s)(a.ref,l.ref);return"function"==typeof n||a.isPresent?(0,o.cloneElement)(l,{ref:c}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"}}]);