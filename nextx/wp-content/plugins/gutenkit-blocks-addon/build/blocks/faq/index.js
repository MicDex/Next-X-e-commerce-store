(()=>{"use strict";var e,t={8065:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,n=window.wp.element,o=window.wp.blockEditor,i=(0,n.memo)((({attributes:e,setAttributes:i,device:r,advancedControl:l})=>{const{GkitTabs:g,GkitPanelBody:k,GkitColor:d,GkitTypography:u,GkitResponsive:c,GkitRepeater:s,GkitText:b,GkitBackgrounGroup:p,GkitBoxControl:q,GkitBorderControl:m}=window.gutenkit.components,{gkitResponsiveValue:F,useFontFamilyinBlock:C,responsiveHelper:T}=window.gutenkit.helpers;return(0,n.useEffect)((()=>{const t=(e=>{const{parseCSS:t,backgroundGenerator:a,getBoxValue:n,getBorderValue:o,getTypographyValue:i,getColor:r}=window.gutenkit.helpers,l=e?.blockClass;return t({desktop:[{selector:`.${l} .gkit-faq .gkit-faq-item .gkit-faq-item-header`,color:r(e?.gkitFaqTitleColor),background:a(e?.gkitFaqTitleBackgroundGroup,"Desktop").background,"background-size":a(e?.gkitFaqTitleBackgroundGroup,"Desktop").size,...o(e?.gkitFaqTitleBorderGroup),...i(e?.gkitFaqTitleTypographyGroup,"Desktop"),...n(e?.gkitFaqBorderRadiusDesktop,"border-radius"),...n(e?.gkitFaqTitlePaddingDesktop,"padding"),...n(e?.gkitFaqTitleMarginDesktop,"margin")},{selector:`.${l} .gkit-faq .gkit-faq-item .gkit-faq-item-body`,color:r(e?.gkitFaqContentColor),background:a(e?.gkitFaqContentBackgroundGroup,"Desktop").background,"background-size":a(e?.gkitFaqContentBackgroundGroup,"Desktop").size,...o(e?.gkitFaqContentBorderGroup),...i(e?.gkitFaqContentTypographyGroup,"Desktop"),...n(e?.gkitFaqContentBorderRadiusDesktop,"border-radius"),...n(e?.gkitFaqContentPaddingDesktop,"padding"),...n(e?.gkitFaqContentMarginDesktop,"margin")}],tablet:[{selector:`.${l} .gkit-faq .gkit-faq-item .gkit-faq-item-header`,background:a(e?.gkitFaqTitleBackgroundGroup,"Tablet").background,"background-size":a(e?.gkitFaqTitleBackgroundGroup,"Tablet").size,...i(e?.gkitFaqTitleTypographyGroup,"Tablet"),...n(e?.gkitFaqBorderRadiusTablet,"border-radius"),...n(e?.gkitFaqTitlePaddingTablet,"padding"),...n(e?.gkitFaqTitleMarginTablet,"margin")},{selector:`.${l} .gkit-faq .gkit-faq-item .gkit-faq-item-body`,background:a(e?.gkitFaqContentBackgroundGroup,"Tablet").background,"background-size":a(e?.gkitFaqContentBackgroundGroup,"Tablet").size,...i(e?.gkitFaqContentTypographyGroup,"Tablet"),...n(e?.gkitFaqContentBorderRadiusTablet,"border-radius"),...n(e?.gkitFaqContentPaddingTablet,"padding"),...n(e?.gkitFaqContentMarginTablet,"margin")}],mobile:[{selector:`.${l} .gkit-faq .gkit-faq-item .gkit-faq-item-header`,background:a(e?.gkitFaqTitleBackgroundGroup,"Mobile").background,"background-size":a(e?.gkitFaqTitleBackgroundGroup,"Mobile").size,...i(e?.gkitFaqTitleTypographyGroup,"Mobile"),...n(e?.gkitFaqBorderRadiusMobile,"border-radius"),...n(e?.gkitFaqTitlePaddingMobile,"padding"),...n(e?.gkitFaqTitleMarginMobile,"margin")},{selector:`.${l} .gkit-faq .gkit-faq-item .gkit-faq-item-body`,background:a(e?.gkitFaqContentBackgroundGroup,"Mobile").background,"background-size":a(e?.gkitFaqContentBackgroundGroup,"Mobile").size,...i(e?.gkitFaqContentTypographyGroup,"Mobile"),...n(e?.gkitFaqContentBorderRadiusMobile,"border-radius"),...n(e?.gkitFaqContentPaddingMobile,"padding"),...n(e?.gkitFaqContentMarginMobile,"margin")}]})})(e);i({blocksCSS:t})}),[JSON.stringify(e)]),C([e?.gkitFaqTitleTypographyGroup,e?.gkitFaqContentTypographyGroup]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(g,{type:"top-level",tabs:[{name:"content",title:(0,a.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,a.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,a.__)("Advanced","gutenkit-blocks-addon")}]},(n=>{switch(n.name){case"content":return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(k,{title:(0,a.__)("FAQ","gutenkit-blocks-addon"),initialOpen:!0},(0,t.createElement)(s,{onChange:e=>i({gkitFaqContents:e}),itemLabelName:"gkitFaqTitle",repeaterFields:e?.gkitFaqContents},(0,t.createElement)(b,{label:(0,a.__)("Title","gutenkit-blocks-addon"),name:"gkitFaqTitle",labelBlock:"block",default:"How to Change my Photo from Admin Dashboard?"}),(0,t.createElement)(b,{label:(0,a.__)("Content","gutenkit-blocks-addon"),name:"gkitFaqContent",labelBlock:"block",type:"textarea",default:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"}))));case"style":return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(k,{title:(0,a.__)("Title","gutenkit-blocks-addon"),initialOpen:!0},(0,t.createElement)(d,{label:(0,a.__)("Title Color","gutenkit-blocks-addon"),value:e?.gkitFaqTitleColor,onChange:e=>i({gkitFaqTitleColor:e})}),(0,t.createElement)(u,{label:(0,a.__)("Typography","gutenkit-blocks-addon"),value:e?.gkitFaqTitleTypographyGroup,onChange:e=>i({gkitFaqTitleTypographyGroup:e})}),(0,t.createElement)(p,{label:(0,a.__)("Background","gutenkit-blocks-addon"),value:e?.gkitFaqTitleBackgroundGroup,onChange:e=>i({gkitFaqTitleBackgroundGroup:e}),exclude:{video:!0,image:!0}}),(0,t.createElement)(m,{label:(0,a.__)("Border","gutenkit-blocks-addon"),onChange:e=>i({gkitFaqTitleBorderGroup:e}),value:e?.gkitFaqTitleBorderGroup}),(0,t.createElement)(c,null,(0,t.createElement)(q,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),values:F(e,"gkitFaqBorderRadius",r),onChange:e=>T("gkitFaqBorderRadius",e,r,i)})),(0,t.createElement)(c,null,(0,t.createElement)(q,{label:(0,a.__)("Padding","gutenkit-blocks-addon"),values:F(e,"gkitFaqTitlePadding",r),onChange:e=>T("gkitFaqTitlePadding",e,r,i)})),(0,t.createElement)(c,null,(0,t.createElement)(q,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:F(e,"gkitFaqTitleMargin",r),onChange:e=>T("gkitFaqTitleMargin",e,r,i)}))),(0,t.createElement)(k,{title:(0,a.__)("Content","gutenkit-blocks-addon")},(0,t.createElement)(d,{label:(0,a.__)("Color","gutenkit-blocks-addon"),value:e?.gkitFaqContentColor,onChange:e=>i({gkitFaqContentColor:e})}),(0,t.createElement)(u,{label:(0,a.__)("Typography","gutenkit-blocks-addon"),value:e?.gkitFaqContentTypographyGroup,onChange:e=>i({gkitFaqContentTypographyGroup:e})}),(0,t.createElement)(p,{label:(0,a.__)("Background","gutenkit-blocks-addon"),value:e?.gkitFaqContentBackgroundGroup,onChange:e=>i({gkitFaqContentBackgroundGroup:e}),exclude:{video:!0,image:!0}}),(0,t.createElement)(m,{label:(0,a.__)("Border","gutenkit-blocks-addon"),onChange:e=>i({gkitFaqContentBorderGroup:e}),value:e?.gkitFaqContentBorderGroup}),(0,t.createElement)(c,null,(0,t.createElement)(q,{label:(0,a.__)("Border Radius","gutenkit-blocks-addon"),values:F(e,"gkitFaqContentBorderRadius",r),onChange:e=>T("gkitFaqContentBorderRadius",e,r,i)})),(0,t.createElement)(c,null,(0,t.createElement)(q,{label:(0,a.__)("Padding","gutenkit-blocks-addon"),values:F(e,"gkitFaqContentPadding",r),onChange:e=>T("gkitFaqContentPadding",e,r,i)})),(0,t.createElement)(c,null,(0,t.createElement)(q,{label:(0,a.__)("Margin","gutenkit-blocks-addon"),values:F(e,"gkitFaqContentMargin",r),onChange:e=>T("gkitFaqContentMargin",e,r,i)}))));case"advanced":return(0,t.createElement)(t.Fragment,null,l)}}))))})),r=({attributes:e})=>(0,t.createElement)("div",{className:"gkit-faq"},e?.gkitFaqContents&&e?.gkitFaqContents.map(((e,a)=>(0,t.createElement)("div",{key:a,className:"gkit-faq-item"},(0,t.createElement)("div",{className:"gkit-faq-item-header"},e?.gkitFaqTitle&&(0,t.createElement)("h2",{className:"gkit-faq-item-title"},e?.gkitFaqTitle)),e?.gkitFaqContent&&(0,t.createElement)("div",{className:"gkit-faq-item-body"},e?.gkitFaqContent))))),l=JSON.parse('{"UU":"gutenkit/faq"}'),{faq:g}=window.gutenkit.editorIcon;(0,e.registerBlockType)(l.UU,{edit:function({attributes:e,setAttributes:a,clientId:n,advancedControl:l}){const{GkitStyle:g}=window.gutenkit.components,{useDeviceType:k}=window.gutenkit.helpers,d=k(),u=(0,o.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(g,{blocksCSS:e?.blocksCSS}),(0,t.createElement)(i,{attributes:e,setAttributes:a,device:d,advancedControl:l}),(0,t.createElement)("div",{...u},(0,t.createElement)(r,{attributes:e})))},icon:{src:g},save:function({attributes:e}){const a=o.useBlockProps.save();return(0,t.createElement)("div",{...a},(0,t.createElement)(r,{attributes:e}))}})}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,a,o,i)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,o,i]=e[d],l=!0,g=0;g<a.length;g++)(!1&i||r>=i)&&Object.keys(n.O).every((e=>n.O[e](a[g])))?a.splice(g--,1):(l=!1,i<r&&(r=i));if(l){e.splice(d--,1);var k=o();void 0!==k&&(t=k)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={8813:0,3793:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[r,l,g]=a,k=0;if(r.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(g)var d=g(n)}for(t&&t(a);k<r.length;k++)i=r[k],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},a=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[3793],(()=>n(8065)));o=n.O(o)})();