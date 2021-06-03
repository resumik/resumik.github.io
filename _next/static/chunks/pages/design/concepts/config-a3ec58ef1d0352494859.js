_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"3MdJ":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/design/concepts/config",function(){return n("SFC/")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n("q1tI"),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),O=r,f=b["".concat(i,".").concat(O)]||b[O]||u[O]||c;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"===typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},"R/WZ":function(e,t,n){"use strict";var r=n("wx14"),a=n("RD7I"),c=n("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.a)(e,Object(r.a)({defaultTheme:c.a},t))}},"SFC/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n("cpVT"),a=n("dhJC"),c=(n("q1tI"),n("7ljp")),i=n("Zk+C");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)("wrapper",p(p(p({},l),n),{},{components:t,mdxType:"MDXLayout"}),Object(c.a)("h1",null,"Config"),Object(c.a)("p",null,"Your regular settings. On technical side: we use Redux to store them, so they are available application-wide. They are contained in a ",Object(c.a)("inlineCode",{parentName:"p"},"config")," slice."),Object(c.a)("p",null,"We put some effort into making the application accessible. Related options are limited, but we felt the urge to add them anyways."),Object(c.a)("h2",null,"General"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"language")," - a language selected from a list of installed language packs."),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"theme")," - a theme selected from a list of installed themes"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"textDirection")," - either LTR or RTL"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"loadPrevious")," - if ",Object(c.a)("inlineCode",{parentName:"p"},"true"),", skips the main screen and loads the last project on startup"),Object(c.a)("h2",null,"Accessibility"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"contrastMode")," - loads a high contract theme"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"fontSize")," - adjusts the font size"))}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}s.isMDXComponent=!0;var O={},f=Object(i.a)((function(){return Object(c.a)(s,null)}));function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.a)(f,b(b(b({},O),n),{},{components:t,mdxType:"MDXLayout"}))}j.isMDXComponent=!0},ZBNC:function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},"Zk+C":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("nKUr"),a=(n("q1tI"),n("R/WZ")),c=n("ZBNC"),i=n("nfx3"),o=Object(a.a)((function(e){return Object(c.a)({root:{"& ul":{listStyleType:"none",paddingLeft:0},"& ul ul":{paddingLeft:e.spacing(2)},"& li li":{"&::before":{content:'"- "'}},"& a":{color:i.d}},appName:{textTransform:"uppercase",fontSize:24,textAlign:"center",marginBottom:e.spacing(4),fontFamily:"Montserrat, sans-serif"}})})),p=n("cpVT"),l=n("dhJC"),s=n("7ljp");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={};function f(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(s.a)("wrapper",b(b(b({},O),n),{},{components:t,mdxType:"MDXLayout"}),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"Core",Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design"}),"Design")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/tech-stack"}),"Tech Stack")))),Object(s.a)("li",{parentName:"ul"},"Concepts",Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/concepts/versioning"}),"Versioning")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/concepts/template"}),"Template")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/concepts/theme"}),"Theme")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/concepts/save"}),"Save")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/concepts/config"}),"Config")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/concepts/profile"}),"Profile")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/concepts/i18n"}),"I18n")))),Object(s.a)("li",{parentName:"ul"},"Interfaces",Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/interfaces/gui"}),"GUI")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",b({parentName:"li"},{href:"/design/interfaces/cli"}),"CLI"))))))}f.isMDXComponent=!0;var j=n("hwiM"),m=function(){var e=o(),t=Object(j.a)();return Object(r.jsxs)("div",{className:e.root,children:[Object(r.jsx)("div",{className:e.appName,children:t.appName}),Object(r.jsx)("div",{children:Object(r.jsx)(f,{})})]})},d=Object(a.a)((function(e){return Object(c.a)({root:{display:"grid",gridTemplateAreas:'"sidebar content"',gridAutoColumns:"minmax(100px, 200px) minmax(200px, 600px)",height:"100vh","& h1":{fontSize:32}},sidebar:{gridArea:"sidebar",borderRight:"1px solid lightgray",padding:e.spacing(8)},content:{padding:e.spacing(8),gridArea:"content",textAlign:"justify"}})})),g=function(e){return function(t){var n=d();return Object(r.jsxs)("div",{className:n.root,children:[Object(r.jsx)("div",{className:n.sidebar,children:Object(r.jsx)(m,{})}),Object(r.jsx)("div",{className:n.content,children:Object(r.jsx)(e,{})})]})}}},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},hwiM:function(e,t,n){"use strict";t.a=function(){return{appName:"Resumik",githubRepo:"https://github.com/resumik/resumik"}}}},[["3MdJ",0,1,2]]]);