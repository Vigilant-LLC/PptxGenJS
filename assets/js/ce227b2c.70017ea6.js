(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),o=p(a),m=n,O=o["".concat(b,".").concat(m)]||o[m]||s[m]||l;return a?r.a.createElement(O,i(i({ref:t},c),{},{components:a})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var c=2;c<l;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},216:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-master-slide-output-13dd09a91096b04349c74c7b99ff7362.png"},217:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-master-slide-placeholder-output-733284de799696fca3273da8640eb109.png"},218:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ex-master-slide-demo-1971d25b1bd3ecf6769148aee5a65c15.png"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(107)),b={id:"masters",title:"Masters and Placeholders"},i={unversionedId:"masters",id:"masters",isDocsHomePage:!1,title:"Masters and Placeholders",description:"Slide Masters",source:"@site/docs/masters.md",slug:"/masters",permalink:"/PptxGenJS/docs/masters",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1617159972,formattedLastUpdatedAt:"3/30/2021",sidebar:"docs",previous:{title:"HTML to PowerPoint",permalink:"/PptxGenJS/docs/html-to-powerpoint"},next:{title:"Slide Sections",permalink:"/PptxGenJS/docs/sections"}},d=[{value:"Slide Masters",id:"slide-masters",children:[]},{value:"Properties",id:"properties",children:[{value:"Slide Master Props (<code>SlideMasterProps</code>)",id:"slide-master-props-slidemasterprops",children:[]},{value:"Background Props (<code>BackgroundProps</code>)",id:"background-props-backgroundprops",children:[]},{value:"SlideNumber Props (<code>SlideNumberProps</code>)",id:"slidenumber-props-slidenumberprops",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Slide Master Example",id:"slide-master-example",children:[]},{value:"Slide Master Example Output",id:"slide-master-example-output",children:[]}]},{value:"Placeholders",id:"placeholders",children:[{value:"Placeholder Types",id:"placeholder-types",children:[]},{value:"Placeholder Example",id:"placeholder-example",children:[]},{value:"Placeholder Example Output",id:"placeholder-example-output",children:[]}]},{value:"More Examples and Demos",id:"more-examples-and-demos",children:[]}],c={toc:d};function p(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"slide-masters"},"Slide Masters"),Object(l.b)("p",null,"Generating sample slides like those shown in the Examples section are great for demonstrating library features,\nbut the reality is most of us will be required to produce presentations that have a certain design or\ncorporate branding."),Object(l.b)("p",null,"PptxGenJS allows you to define Slide Master Layouts via objects that can then be used to provide branding\nfunctionality. This enables you to easily create a Master Slide using code."),Object(l.b)("p",null,"Slide Masters are created by calling the ",Object(l.b)("inlineCode",{parentName:"p"},"defineSlideMaster()")," method along with an options object\n(same style used in Slides). Once defined, you can pass the Master title to ",Object(l.b)("inlineCode",{parentName:"p"},"addSlide()")," and that Slide will\nuse the Layout previously defined. See the demo under /examples for several working examples."),Object(l.b)("p",null,"The defined Masters become first-class Layouts in the exported PowerPoint presentation and can be changed\nvia View > Slide Master and will affect the Slides created using that layout."),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"slide-master-props-slidemasterprops"},"Slide Master Props (",Object(l.b)("inlineCode",{parentName:"h3"},"SlideMasterProps"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Reqd?"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Possible Values"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"title")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"Y"),Object(l.b)("td",{parentName:"tr",align:"left"},"Layout title/name"),Object(l.b)("td",{parentName:"tr",align:null},"unique name for this Master")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"background")),Object(l.b)("td",{parentName:"tr",align:"left"},"BackgroundProps"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"background props"),Object(l.b)("td",{parentName:"tr",align:null},"(see ",Object(l.b)("a",{parentName:"td",href:"#background-props-backgroundprops"},"Background Props"),")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"margin")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"Slide margins"),Object(l.b)("td",{parentName:"tr",align:null},"(inches) 0.0 through Slide.width")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"margin")),Object(l.b)("td",{parentName:"tr",align:"left"},"array"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"Slide margins"),Object(l.b)("td",{parentName:"tr",align:null},"(inches) array of numbers in TRBL order. Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"[0.5, 0.75, 0.5, 0.75]"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"objects")),Object(l.b)("td",{parentName:"tr",align:"left"},"array"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"Objects for Slide"),Object(l.b)("td",{parentName:"tr",align:null},"object with type and options. ",Object(l.b)("a",{parentName:"td",href:"/PptxGenJS/demo/#templates"},"Example"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"slideNumber")),Object(l.b)("td",{parentName:"tr",align:"left"},"SlideNumberProps"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"Slide numbers"),Object(l.b)("td",{parentName:"tr",align:null},"(see ",Object(l.b)("a",{parentName:"td",href:"#slidenumber-props-slidenumberprops"},"SlideNumber Props"),")")))),Object(l.b)("h3",{id:"background-props-backgroundprops"},"Background Props (",Object(l.b)("inlineCode",{parentName:"h3"},"BackgroundProps"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"000000")),Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},"hex color code or ",Object(l.b)("a",{parentName:"td",href:"/PptxGenJS/docs/shapes-and-schemes"},"scheme color constant"),". Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{line:'0088CC'}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"transparency")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",{parentName:"tr",align:"left"},"transparency"),Object(l.b)("td",{parentName:"tr",align:"left"},"Percentage: 0-100")))),Object(l.b)("h3",{id:"slidenumber-props-slidenumberprops"},"SlideNumber Props (",Object(l.b)("inlineCode",{parentName:"h3"},"SlideNumberProps"),")"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Option"),Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Default"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"x")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"horizontal location (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'. (Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{x:'50%'}")," will place object in the middle of the Slide)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"y")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"1.0")),Object(l.b)("td",{parentName:"tr",align:"left"},"vertical location (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"w")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"width (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'. (Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{w:'50%'}")," will make object 50% width of the Slide)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"h")),Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"}),Object(l.b)("td",{parentName:"tr",align:"left"},"height (inches)"),Object(l.b)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"align")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"left")),Object(l.b)("td",{parentName:"tr",align:"left"},"alignment"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"left")," or ",Object(l.b)("inlineCode",{parentName:"td"},"center")," or ",Object(l.b)("inlineCode",{parentName:"td"},"right"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"000000")),Object(l.b)("td",{parentName:"tr",align:"left"},"color"),Object(l.b)("td",{parentName:"tr",align:"left"},"hex color code or ",Object(l.b)("a",{parentName:"td",href:"/PptxGenJS/docs/shapes-and-schemes"},"scheme color constant"),". Ex: ",Object(l.b)("inlineCode",{parentName:"td"},"{line:'0088CC'}"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTES")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Slide Number: more props are available that shown above - ",Object(l.b)("inlineCode",{parentName:"li"},"SlideNumberProps")," inherits from ",Object(l.b)("a",{parentName:"li",href:"/PptxGenJS/docs/api-text.html"},"TextProps")),Object(l.b)("li",{parentName:"ul"},"Pre-encode your images (base64) and add the string as the optional data key/val (see ",Object(l.b)("inlineCode",{parentName:"li"},"bkgd")," above)")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"slide-master-example"},"Slide Master Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'let pptx = new PptxGenJS();\npptx.layout = "LAYOUT_WIDE";\n\npptx.defineSlideMaster({\n    title: "MASTER_SLIDE",\n    background: { color: "FFFFFF" },\n    objects: [\n        { line: { x: 3.5, y: 1.0, w: 6.0, line: { color: "0088CC", width: 5 } } },\n        { rect: { x: 0.0, y: 5.3, w: "100%", h: 0.75, fill: { color: "F1F1F1" } } },\n        { text: { text: "Status Report", options: { x: 3.0, y: 5.3, w: 5.5, h: 0.75 } } },\n        { image: { x: 11.3, y: 6.4, w: 1.67, h: 0.75, path: "images/logo.png" } },\n    ],\n    slideNumber: { x: 0.3, y: "90%" },\n});\n\nlet slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });\nslide.addText("How To Create PowerPoint Presentations with JavaScript", { x: 0.5, y: 0.7, fontSize: 18 });\n\npptx.writeFile();\n')),Object(l.b)("h3",{id:"slide-master-example-output"},"Slide Master Example Output"),Object(l.b)("p",null,"Using the 'MASTER_SLIDE' defined above to produce a Slide:\n",Object(l.b)("img",{alt:"Master Slide Demo Presentation",src:a(216).default})),Object(l.b)("h2",{id:"placeholders"},"Placeholders"),Object(l.b)("p",null,"Placeholders are supported in PptxGenJS."),Object(l.b)("p",null,"Add a ",Object(l.b)("inlineCode",{parentName:"p"},"placeholder")," object to a Master Slide using a unique name, then reference that placeholder\nname when adding text or other objects."),Object(l.b)("h3",{id:"placeholder-types"},"Placeholder Types"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"title")),Object(l.b)("td",{parentName:"tr",align:"left"},"slide title")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"body")),Object(l.b)("td",{parentName:"tr",align:"left"},"body area")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"image")),Object(l.b)("td",{parentName:"tr",align:"left"},"image")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"chart")),Object(l.b)("td",{parentName:"tr",align:"left"},"chart")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"table")),Object(l.b)("td",{parentName:"tr",align:"left"},"table")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("inlineCode",{parentName:"td"},"media")),Object(l.b)("td",{parentName:"tr",align:"left"},"audio/video")))),Object(l.b)("h3",{id:"placeholder-example"},"Placeholder Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'let pptx = new PptxGenJS();\npptx.layout = "LAYOUT_WIDE";\n\npptx.defineSlideMaster({\n    title: "PLACEHOLDER_SLIDE",\n    background: { color: "FFFFFF" },\n    objects: [\n        { rect: { x: 0, y: 0, w: "100%", h: 0.75, fill: { color: "F1F1F1" } } },\n        { text: { text: "Status Report", options: { x: 0, y: 0, w: 6, h: 0.75 } } },\n        {\n            placeholder: {\n                options: { name: "body", type: "body", x: 0.6, y: 1.5, w: 12, h: 5.25 },\n                text: "(custom placeholder text!)",\n            },\n        },\n    ],\n    slideNumber: { x: 0.3, y: "95%" },\n});\n\nlet slide = pptx.addSlide({ masterName: "PLACEHOLDER_SLIDE" });\n\n// Add text, charts, etc. to any placeholder using its `name`\nslide.addText("Body Placeholder here!", { placeholder: "body" });\n\npptx.writeFile();\n')),Object(l.b)("h3",{id:"placeholder-example-output"},"Placeholder Example Output"),Object(l.b)("p",null,"Using the 'PLACEHOLDER_SLIDE' defined above to produce a Slide:\n",Object(l.b)("img",{alt:"Placeholder Demo Presentation",src:a(217).default})),Object(l.b)("h2",{id:"more-examples-and-demos"},"More Examples and Demos"),Object(l.b)("p",null,"There are several Master Slides defined in the Demo: ",Object(l.b)("inlineCode",{parentName:"p"},"demos/browser/index.html")," including examples using placeholders.\n",Object(l.b)("img",{alt:"PptxGenJS Master Slide Demo",src:a(218).default})))}p.isMDXComponent=!0}}]);