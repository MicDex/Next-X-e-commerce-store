(()=>{"use strict";var e,t={9573:(e,t,l)=>{const i=window.wp.blocks,n=window.React,a=window.wp.blockEditor,o=window.wp.i18n,g=window.wp.element,r=window.wp.apiFetch;var s=l.n(r);const c=window.wp.primitives,k=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),d=(0,n.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(c.Path,{d:"M7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5C6.82843 13.5 7.5 12.8284 7.5 12Z"}),(0,n.createElement)(c.Path,{d:"M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"}),(0,n.createElement)(c.Path,{d:"M19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5C18.8284 13.5 19.5 12.8284 19.5 12Z"})),p=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})),u=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})),b=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})),m=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})),v=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"})),h=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})),_=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"})),w=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(c.Path,{d:"m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"})),C=(0,g.memo)((({attributes:e,setAttributes:t,device:l,advancedControl:i})=>{const{GkitBoxShadow:r,GkitColor:c,GkitIconPicker:C,GkitPanelBody:E,GkitResponsive:x,GkitSwitcher:B,GkitTabs:y,GkitTypography:T,GkitBackgrounGroup:f,GkitChoose:S,GkitSlider:M,GkitText:P,GkitRepeater:$,GkitComplexSelectAsync:A,GkitAdvancedUrl:G,GkitBorderControl:L,GkitSelect:H,GkitBoxControl:D}=window.gutenkit.components,{gkitResponsiveValue:V,useFontFamilyinBlock:I,responsiveHelper:z,boxControlUnit:O}=window.gutenkit.helpers;(0,g.useEffect)((()=>{s()({path:"/wp/v2/pages"}).then((l=>{const i=l.map((e=>({listText:e?.title?.rendered,listSubTitle:"",listBackground:{},listIconColor:"",listIconActive:!0,listIcon:{title:"check",src:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>check</title>\n<path d="M31.512 6.162l-1.706-1.706c-0.488-0.487-1.219-0.487-1.706 0h-0.125l-16.331 16.925c-0.244 0.244-0.606 0.244-0.85 0l-6.7-7.188-0.119-0.119c-0.487-0.488-1.219-0.488-1.706 0l-1.706 1.706c-0.244 0.244-0.362 0.606-0.362 0.85s0.119 0.613 0.362 0.856l0.256 0.369 9.5 10.238c0.244 0.244 0.481 0.369 0.85 0.369 0.363 0 0.606-0.125 0.85-0.369l19.494-20.225c0.488-0.487 0.488-1.219 0-1.706z"></path>\n</svg>\n'},listPageOrLink:"page",listLabelText:"Exclusive",listPage:{label:e?.title?.rendered,link:e?.link,value:e?.id},listLink:{url:"https://wpmet.com"},listShowLabelActive:!1})));e?.isSelected||i.length>0&&(t({listItems:i}),t({isSelected:!0})),t({newListItems:i})}))}),[e?.isSelected]);const R=()=>s()({path:"/wp/v2/pages"}).then((e=>e.map((e=>({label:e?.title?.rendered,link:e?.link,value:e?.id})))));return(0,g.useEffect)((()=>{const l=(e=>{const{parseCSS:t,backgroundGenerator:l,getBoxShadowValue:i,getBoxValue:n,getBorderValue:a,getTypographyValue:o,getSliderValue:g,getColor:r}=window.gutenkit.helpers,s=e.blockClass;return t({desktop:[...(e=>{const t=e.map(((e,t)=>[{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link-${t} .gkit-page-list-label`,color:r(e.listLabelColor),background:l(e?.listLabelBackground).background},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link-${t}`,background:l(e?.listBackground).background},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link-${t} .gkit-page-list-content .gkit-page-list-text .gkit-page-list-title`,color:r(e.listTextColor)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link-${t} .gkit-page-list-content .gkit-page-list-text .gkit-page-subtitle`,color:r(e.listSubTitleColor)},{selector:`.${s} .gkit-page-list-container .gkit-page-list  .gkit-page-link-${t} .gkit-page-list-icon span svg`,fill:r(e?.listIconColor?e?.listIconColor:void 0)}]));let i=[];return t.forEach((e=>{i=[...i,...e]})),i})(e?.listItems),{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link`,...n(e?.listPaddingDesktop,"padding"),...a(e?.listBorder),...n(e.listBorderRadiusDesktop,"border-radius"),"box-shadow":i(e.listBoxShadow),width:g(e?.listWidthDesktop),"justify-content":"space-between","flex-direction":"left"===e?.horizontalAlignment?"row-reverse":""},{selector:`.${s} .gkit-page-list > a`,background:l(e?.listBgColor).background},{selector:`.${s} .gkit-page-list > a .gkit-page-list-title`,color:r(e?.textColor)},{selector:`.${s} .gkit-page-list > a .gkit-page-subtitle`,color:r(e?.subtitleColor)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link:hover`,background:l(e?.listBgHoverColor).background},{selector:`.${s} .gkit-page-list-container`,"text-align":e?.listAlignmentDesktop,"row-gap":g(e?.rowGapBetweenDesktop),"column-gap":g(e?.columnGapBetweenDesktop)},{selector:`.${s} .gkit-inline-items`,"grid-template-columns":`repeat(${e?.columnAppearance?.size}, minmax(0,1fr))`},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link`,"border-bottom-width":e?.listDivider&&"default"===e?.layOut&&e?.listDividerControl?.width,"border-bottom-style":e?.listDivider&&"default"===e?.layOut&&e?.listDividerControl?.style,"border-bottom-color":e?.listDivider&&"default"===e?.layOut&&e?.listDividerControl?.color},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-icon svg`,"vertical-align":e?.iconAlignmentDesktop},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-icon svg`,"font-size":g(e?.iconSizeDesktop),fill:r(e?.iconColor)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-icon span`,background:l(e?.iconBackground).background,...n(e?.iconPaddingDesktop,"padding"),...n(e?.iconMarginDesktop,"margin")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link:hover .gkit-page-list-icon span`,background:l(e?.iconBackgroundHover).background},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link:hover .gkit-page-list-icon svg`,fill:r(e?.iconHover)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content`,"flex-direction":e?.iconPosition},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text`,...n(e?.textMarginDesktop,"margin"),"padding-left":g(e?.textPaddingDesktop)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text .gkit-page-list-title`,...o(e.textTypography,"Desktop")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link:hover .gkit-page-list-content .gkit-page-list-text .gkit-page-list-title`,color:r(e?.textHoverColor)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text .gkit-page-subtitle`,...n(e?.subtitleMarginDesktop,"margin"),...o(e.subtitleTypography,"Desktop")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link:hover .gkit-page-list-content .gkit-page-list-text .gkit-page-subtitle`,color:r(e?.subtitleHoverColor)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-label`,...o(e.labelTypography,"Desktop"),...n(e?.labelMarginDesktop,"margin"),...n(e?.labelPaddingDesktop,"padding"),...n(e?.labelBorderRadiusDesktop,"border-radius"),"align-self":e?.verticalAlignmentDesktop}],tablet:[{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link`,...n(e?.listPaddingTablet,"padding"),...n(e.listBorderRadiusTablet,"border-radius"),width:g(e?.listWidthTablet)},{selector:`.${s} .gkit-page-list-container`,"text-align":e?.listAlignmentTablet,"row-gap":g(e?.rowGapBetweenTablet),"column-gap":g(e?.columnGapBetweenTablet)},{selector:`.${s} .gkit-page-list-container .gkit-page-list:not(:last-child):after`,content:"",width:`${g(e?.listDividerWidthTablet)}`},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-icon svg`,"vertical-align":e?.iconAlignmentTablet},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-icon svg`,"font-size":g(e?.iconSizeTablet)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-icon span`,...n(e?.iconPaddingTablet,"padding"),...n(e?.iconMarginTablet,"margin")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text`,...n(e?.textMarginTablet,"margin"),"padding-left":g(e?.textPaddingTablet)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text .gkit-page-list-title`,...o(e.textTypography,"Tablet")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text .gkit-page-subtitle`,...n(e?.subtitleMarginTablet,"margin"),...o(e.subtitleTypography,"Tablet")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-label`,...o(e.labelTypography,"Tablet"),...n(e?.labelMarginTablet,"margin"),...n(e?.labelPaddingTablet,"padding"),...n(e?.labelBorderRadiusTablet,"border-radius"),"align-self":e?.verticalAlignmentTablet}],mobile:[{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link`,...n(e?.listPaddingMobile,"padding"),...n(e.listBorderRadiusMobile,"border-radius"),width:g(e?.listWidthMobile)},{selector:`.${s} .gkit-page-list-container`,"text-align":e?.listAlignmentMobile,"row-gap":g(e?.rowGapBetweenMobile),"column-gap":g(e?.columnGapBetweenMobile)},{selector:`.${s} .gkit-page-list-container .gkit-page-list:not(:last-child):after`,content:"",width:`${g(e?.listDividerWidthMobile)}`},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-icon svg`,"vertical-align":e?.iconAlignmentMobile},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-icon svg`,"font-size":g(e?.iconSizeMobile)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-icon span`,...n(e?.iconPaddingMobile,"padding"),...n(e?.iconMarginMobile,"margin")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text`,...n(e?.textMarginMobile,"margin"),"padding-left":g(e?.textPaddingMobile)},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text .gkit-page-list-title`,...o(e.textTypography,"Mobile")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-content .gkit-page-list-text .gkit-page-subtitle`,...n(e?.subtitleMarginMobile,"margin"),...o(e.subtitleTypography,"Mobile")},{selector:`.${s} .gkit-page-list-container .gkit-page-list .gkit-page-link .gkit-page-list-label`,...o(e.labelTypography,"Mobile"),...n(e?.labelMarginMobile,"margin"),...n(e?.labelPaddingMobile,"padding"),...n(e?.labelBorderRadiusMobile,"border-radius"),"align-self":e?.verticalAlignmentMobile}]})})(e);t({blocksCSS:l})}),[JSON.stringify(e)]),I([e?.textTypography,e?.subtitleTypography,e?.labelTypography]),(0,n.createElement)(a.InspectorControls,{key:"setting"},(0,n.createElement)(y,{type:"top-level",tabs:[{name:"layout",title:(0,o.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,o.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,o.__)("Advanced","gutenkit-blocks-addon")}]},(a=>"layout"===a.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(E,{title:(0,o.__)("List","gutenkit-blocks-addon")},(0,n.createElement)($,{label:"Content",onChange:e=>t({listItems:e}),repeaterFields:e?.listItems,itemLabelName:"listText"},(0,n.createElement)(P,{label:(0,o.__)("Title","gutenkit-blocks-addon"),name:"listText",labelBlock:"block",default:"Your Title"}),(0,n.createElement)(P,{label:(0,o.__)("Sub Title","gutenkit-blocks-addon"),name:"listSubTitle",labelBlock:"block"}),(0,n.createElement)(c,{label:(0,o.__)("Title Color","gutenkit-blocks-addon"),name:"listTextColor",value:e?.listTextColor,onChange:e=>t({listTextColor:e})}),(0,n.createElement)(c,{label:(0,o.__)("Subtitle Color","gutenkit-blocks-addon"),name:"listSubTitleColor",value:e?.listSubTitleColor,onChange:e=>t({listSubTitleColor:e})}),(0,n.createElement)(f,{name:"listBackground",onChange:e=>t({listBackground:e}),value:e?.listBackground,exclude:{video:!0,image:!0}}),(0,n.createElement)(B,{label:(0,o.__)("Show Icon?","gutenkit-blocks-addon"),name:"listIconActive",default:!0}),(0,n.createElement)(C,{label:(0,o.__)("Icon","gutenkit-blocks-addon"),name:"listIcon",default:{title:"check",src:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>check</title><path d="M31.512 6.162l-1.706-1.706c-0.488-0.487-1.219-0.487-1.706 0h-0.125l-16.331 16.925c-0.244 0.244-0.606 0.244-0.85 0l-6.7-7.188-0.119-0.119c-0.487-0.488-1.219-0.488-1.706 0l-1.706 1.706c-0.244 0.244-0.362 0.606-0.362 0.85s0.119 0.613 0.362 0.856l0.256 0.369 9.5 10.238c0.244 0.244 0.481 0.369 0.85 0.369 0.363 0 0.606-0.125 0.85-0.369l19.494-20.225c0.488-0.487 0.488-1.219 0-1.706z"></path></svg>'},condition:{name:"listIconActive",value:!0}}),(0,n.createElement)(c,{label:(0,o.__)("Icon Color","gutenkit-blocks-addon"),name:"listIconColor",value:e?.listIconColor,onChange:e=>t({listIconColor:e}),condition:{name:"listIconActive",value:!0}}),(0,n.createElement)(S,{label:(0,o.__)("Select Page / Custom Link","gutenkit-blocks-addon"),options:[{label:(0,o.__)("Link","gutenkit-blocks-addon"),value:"link"},{label:(0,o.__)("Page","gutenkit-blocks-addon"),value:"page"}],name:"listPageOrLink",default:"link",isToggle:!1}),(0,n.createElement)(A,{label:(0,o.__)("Select Page","gutenkit-blocks-addon"),options:R,cacheOptions:!0,defaultOptions:!0,name:"listPage",condition:{name:"listPageOrLink",value:"page"}}),(0,n.createElement)(G,{label:(0,o.__)("Custom Link","gutenkit-blocks-addon"),name:"listLink",labelBlock:"block",placeholder:"https://wpmet.com",default:{url:"https://wpmet.com"},condition:{name:"listPageOrLink",value:"link"}}),(0,n.createElement)(B,{label:(0,o.__)("Show Badge","gutenkit-blocks-addon"),name:"listShowLabelActive",default:!1}),(0,n.createElement)(P,{label:(0,o.__)("Badge","gutenkit-blocks-addon"),name:"listLabelText",labelBlock:"block",default:"Exclusive",condition:{name:"listShowLabelActive",value:!0}}),(0,n.createElement)(c,{label:(0,o.__)("Text Color","gutenkit-blocks-addon"),name:"listLabelColor",condition:{name:"listShowLabelActive",value:!0}}),(0,n.createElement)(f,{name:"listLabelBackground",onChange:e=>t({listLabelBackground:e}),value:e?.listLabelBackground,exclude:{video:!0,image:!0},condition:{name:"listShowLabelActive",value:!0}}))),(0,n.createElement)(E,{title:(0,o.__)("Settings","gutenkit-blocks-addon")},(0,n.createElement)(S,{label:(0,o.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,o.__)("Default","gutenkit-blocks-addon"),value:"default",icon:k},{label:(0,o.__)("Inline","gutenkit-blocks-addon"),value:"inline",icon:d}],value:e?.layOut,onChange:e=>t({layOut:e})}),"inline"===e?.layOut&&(0,n.createElement)(M,{label:(0,o.__)("Columns Grid","gutenkit-blocks-addon"),value:e?.columnAppearance,onChange:e=>t({columnAppearance:e}),range:{min:1,max:12}}),(0,n.createElement)(H,{label:(0,o.__)("Target","gutenkit-blocks-addon"),options:[{label:(0,o.__)("Blank","gutenkit-blocks-addon"),value:"_blank"},{label:(0,o.__)("Self","gutenkit-blocks-addon"),value:"self"}],value:e?.LinkAppearance,onChange:e=>t({LinkAppearance:e})}),(0,n.createElement)(B,{label:(0,o.__)("Rel","gutenkit-blocks-addon"),value:e?.showHideRel,onChange:e=>t({showHideRel:e})}))):"style"===a.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(E,{title:(0,o.__)("List","gutenkit-blocks-addon")},(0,n.createElement)(x,null,(0,n.createElement)(M,{label:(0,o.__)("Width","gutenkit-blocks-addon"),value:V(e,"listWidth",l),onChange:e=>z("listWidth",e,l,t),sizeUnits:["%"],range:{min:0,max:100}})),(0,n.createElement)(x,null,(0,n.createElement)(M,{label:(0,o.__)("Row Gap","gutenkit-blocks-addon"),value:V(e,"rowGapBetween",l),onChange:e=>z("rowGapBetween",e,l,t),sizeUnits:["px"],range:{min:0,max:100}})),(0,n.createElement)(x,null,(0,n.createElement)(M,{label:(0,o.__)("Column Gap","gutenkit-blocks-addon"),value:V(e,"columnGapBetween",l),onChange:e=>z("columnGapBetween",e,l,t),sizeUnits:["px"],range:{min:0,max:100}})),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Padding","gutenkit-blocks-addon"),values:V(e,"listPadding",l),onChange:e=>z("listPadding",e,l,t)})),(0,n.createElement)(L,{label:(0,o.__)("Border","gutenkit-blocks-addon"),onChange:e=>t({listBorder:e}),value:e?.listBorder}),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Border Radius","gutenkit-blocks-addon"),units:O,values:V(e,"listBorderRadius",l),onChange:e=>z("listBorderRadius",e,l,t)})),(0,n.createElement)(r,{value:e?.listBoxShadow,onChange:e=>t({listBoxShadow:e})}),(0,n.createElement)(y,{type:"normal",tabs:[{name:"normal",title:(0,o.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,o.__)("Hover","gutenkit-blocks-addon")}]},(l=>"normal"===l.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(f,{onChange:e=>t({listBgColor:e}),value:e?.listBgColor,exclude:{video:!0,image:!0}})):"hover"===l.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(f,{onChange:e=>t({listBgHoverColor:e}),value:e?.listBgHoverColor,exclude:{video:!0,image:!0}})):void 0)),"default"===e?.layOut&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(x,null,(0,n.createElement)(S,{label:(0,o.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,o.__)("Left","gutenkit-blocks-addon"),value:"Left",icon:p},{label:(0,o.__)("Center","gutenkit-blocks-addon"),value:"center",icon:u},{label:(0,o.__)("Right","gutenkit-blocks-addon"),value:"right",icon:b}],values:V(e,"listAlignment",l),onChange:e=>z("listAlignment",e,l,t)})),(0,n.createElement)(B,{label:(0,o.__)("Divider","gutenkit-blocks-addon"),value:e?.listDivider,onChange:e=>t({listDivider:e})})),e?.listDivider&&"default"===e?.layOut&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(L,{isBox:!1,label:(0,o.__)("Divider","gutenkit-blocks-addon"),onChange:e=>t({listDividerControl:e}),value:e?.listDividerControl,withSlider:!0}))),(0,n.createElement)(E,{title:(0,o.__)("Icon","gutenkit-blocks-addon")},(0,n.createElement)(x,null,(0,n.createElement)(S,{label:(0,o.__)("Alignment","gutenkit-blocks-addon"),value:e?.iconPosition,options:[{label:(0,o.__)("Left","gutenkit-blocks-addon"),value:"row",icon:m},{label:(0,o.__)("Top","gutenkit-blocks-addon"),value:"column",icon:v},{label:(0,o.__)("Right","gutenkit-blocks-addon"),value:"row-reverse",icon:h}],onChange:e=>t({iconPosition:e})})),"column"!==e?.iconPosition&&(0,n.createElement)(S,{label:(0,o.__)("Vertical Alignment","gutenkit-blocks-addon"),options:[{label:(0,o.__)("Top","gutenkit-blocks-addon"),value:"top",icon:v},{label:(0,o.__)("Middle","gutenkit-blocks-addon"),value:"middle",icon:_},{label:(0,o.__)("Bottom","gutenkit-blocks-addon"),value:"bottom",icon:w}],onChange:e=>z("iconAlignment",e,l,t),value:V(e,"iconAlignment",l)}),(0,n.createElement)(y,{type:"normal",tabs:[{name:"normal",title:(0,o.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,o.__)("Hover","gutenkit-blocks-addon")}]},(l=>"normal"===l.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(f,{onChange:e=>t({iconBackground:e}),value:e?.iconBackground,exclude:{video:!0,image:!0}}),(0,n.createElement)(c,{label:(0,o.__)("Icon Color","gutenkit-blocks-addon"),onChange:e=>t({iconColor:e}),value:e?.iconColor})):"hover"===l.name?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(f,{onChange:e=>t({iconBackgroundHover:e}),value:e?.iconBackgroundHover,exclude:{video:!0,image:!0}}),(0,n.createElement)(c,{label:(0,o.__)("Icon Color","gutenkit-blocks-addon"),onChange:e=>t({iconHover:e}),value:e?.iconHover})):void 0)),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Padding","gutenkit-blocks-addon"),values:V(e,"iconPadding",l),onChange:e=>z("iconPadding",e,l,t)})),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Margin","gutenkit-blocks-addon"),values:V(e,"iconMargin",l),onChange:e=>z("iconMargin",e,l,t)})),(0,n.createElement)(x,null,(0,n.createElement)(M,{label:(0,o.__)("Size","gutenkit-blocks-addon"),sizeUnits:["px","%","vw"],value:V(e,"iconSize",l),onChange:e=>z("iconSize",e,l,t),range:{max:100,min:0}}))),(0,n.createElement)(E,{title:(0,o.__)("Title","gutenkit-blocks-addon")},(0,n.createElement)(c,{label:(0,o.__)("Color","gutenkit-blocks-addon"),onChange:e=>t({textColor:e}),value:e?.textColor}),(0,n.createElement)(c,{label:(0,o.__)("Hover Color","gutenkit-blocks-addon"),onChange:e=>t({textHoverColor:e}),value:e?.textHoverColor}),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Margin","gutenkit-blocks-addon"),values:V(e,"textMargin",l),onChange:e=>z("textMargin",e,l,t)})),(0,n.createElement)(x,null,(0,n.createElement)(M,{label:(0,o.__)("Padding Left","gutenkit-blocks-addon"),sizeUnits:["px","%","vw"],value:V(e,"textPadding",l),onChange:e=>z("textPadding",e,l,t),range:{max:100,min:0}})),(0,n.createElement)(T,{label:(0,o.__)("Typography","gutenkit-blocks-addon"),onChange:e=>t({textTypography:e}),value:e?.textTypography})),(0,n.createElement)(E,{title:(0,o.__)("Subtitle","gutenkit-blocks-addon")},(0,n.createElement)(T,{label:(0,o.__)("Typography","gutenkit-blocks-addon"),onChange:e=>t({subtitleTypography:e}),value:e?.subtitleTypography}),(0,n.createElement)(c,{label:(0,o.__)("Color","gutenkit-blocks-addon"),onChange:e=>t({subtitleColor:e}),value:e?.subtitleColor}),(0,n.createElement)(c,{label:(0,o.__)("Hover Color","gutenkit-blocks-addon"),onChange:e=>t({subtitleHoverColor:e}),value:e?.subtitleHoverColor}),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Margin","gutenkit-blocks-addon"),values:V(e,"subtitleMargin",l),onChange:e=>z("subtitleMargin",e,l,t)}))),(0,n.createElement)(E,{title:(0,o.__)("Badge","gutenkit-blocks-addon")},(0,n.createElement)(T,{label:(0,o.__)("Typography","gutenkit-blocks-addon"),onChange:e=>t({labelTypography:e}),value:e?.labelTypography}),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Margin","gutenkit-blocks-addon"),values:V(e,"labelMargin",l),onChange:e=>z("labelMargin",e,l,t)})),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Padding","gutenkit-blocks-addon"),values:V(e,"labelPadding",l),onChange:e=>z("labelPadding",e,l,t)})),(0,n.createElement)(x,null,(0,n.createElement)(D,{label:(0,o.__)("Border Radius","gutenkit-blocks-addon"),values:V(e,"labelBorderRadius",l),onChange:e=>z("labelBorderRadius",e,l,t)})),(0,n.createElement)(S,{label:(0,o.__)("Horizontal Alignment","gutenkit-blocks-addon"),value:e?.horizontalAlignment,options:[{label:(0,o.__)("Left","gutenkit-blocks-addon"),value:"left",icon:p},{label:(0,o.__)("Right","gutenkit-blocks-addon"),value:"right",icon:b}],onChange:e=>t({horizontalAlignment:e})}),(0,n.createElement)(S,{label:(0,o.__)("Vertical Alignment","gutenkit-blocks-addon"),options:[{label:(0,o.__)("Top","gutenkit-blocks-addon"),value:"start",icon:v},{label:(0,o.__)("Center","gutenkit-blocks-addon"),value:"center",icon:_},{label:(0,o.__)("Bottom","gutenkit-blocks-addon"),value:"end",icon:w}],onChange:e=>z("verticalAlignment",e,l,t),value:V(e,"verticalAlignment",l)}))):"advanced"===a.name?i:void 0)))})),E=({attributes:e})=>{const{GkitIcon:t}=window.gutenkit.components,{linkGenerator:l}=window.gutenkit.helpers,{listItems:i,LinkAppearance:a,showHideRel:o}=e,g="inline"===e?.layOut?"gkit-inline-items":"";return(0,n.createElement)("div",{className:`gkit-page-list-container ${g}`},i?.length?i?.map(((i,g)=>{const{listLink:r,listPage:s,listPageOrLink:c,listIconActive:k,listIcon:d,listText:p,listSubTitle:u,listShowLabelActive:b,listLabelText:m}=i,v=e.newListItems.find((e=>e.listPage.value===s.value));let h;return h="page"===c?{href:s&&s?.link,target:"_blank"===a?"_blank":null,rel:o?"nofollow noopener":"noopener"}:{...l(r),target:"_blank"===a?"_blank":null,rel:o?"nofollow noopener":"noopener"},"link"===c&&p||"page"===c&&v?(0,n.createElement)("div",{className:"gkit-page-list",key:g},(0,n.createElement)("a",{className:`gkit-page-link gkit-page-link-${g}`,...h,onClick:e=>e.preventDefault()},(0,n.createElement)("div",{className:"gkit-page-list-content"},k&&(0,n.createElement)("div",{className:"gkit-page-list-icon"},(0,n.createElement)(t,{icon:d,tagName:"span"})),(0,n.createElement)("div",{className:"gkit-page-list-text"},(0,n.createElement)("span",{className:"gkit-page-list-title"},p||s?.label),(0,n.createElement)("span",{className:"gkit-page-subtitle"},u))),b&&m&&(0,n.createElement)("span",{className:"gkit-page-list-label"},m))):""})):(0,n.createElement)("span",null,"Please select a page or give a link..."))},x=JSON.parse('{"UU":"gutenkit/page-list"}'),{pageList:B}=window.gutenkit.editorIcon;(0,i.registerBlockType)(x.UU,{edit:function({attributes:e,setAttributes:t,advancedControl:l}){const{GkitStyle:i}=window.gutenkit.components,{useDeviceType:o}=window.gutenkit.helpers,g=(0,a.useBlockProps)(),r=o();return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(i,{blocksCSS:e?.blocksCSS}),(0,n.createElement)(C,{attributes:e,setAttributes:t,device:r,advancedControl:l}),(0,n.createElement)("div",{...g},(0,n.createElement)(E,{attributes:e})))},icon:{src:B},save:function(){return null}})}},l={};function i(e){var n=l[e];if(void 0!==n)return n.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,l,n,a)=>{if(!l){var o=1/0;for(c=0;c<e.length;c++){for(var[l,n,a]=e[c],g=!0,r=0;r<l.length;r++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](l[r])))?l.splice(r--,1):(g=!1,a<o&&(o=a));if(g){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[l,n,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var l in t)i.o(t,l)&&!i.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={7895:0,7215:0};i.O.j=t=>0===e[t];var t=(t,l)=>{var n,a,[o,g,r]=l,s=0;if(o.some((t=>0!==e[t]))){for(n in g)i.o(g,n)&&(i.m[n]=g[n]);if(r)var c=r(i)}for(t&&t(l);s<o.length;s++)a=o[s],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},l=globalThis.webpackChunkgutenkit_blocks_addon=globalThis.webpackChunkgutenkit_blocks_addon||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=i.O(void 0,[7215],(()=>i(9573)));n=i.O(n)})();