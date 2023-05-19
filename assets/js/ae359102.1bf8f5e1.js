"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[1491],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(t),u=r,f=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={title:"Creating a chains.json",nav_order:141,layout:"default",parent:"WAX Block Producer","lang-ref":"Creating a chains.json",lang:"en"},i=void 0,s={unversionedId:"wax-bp/chains-json",id:"wax-bp/chains-json",title:"Creating a chains.json",description:"Why a chains.json?",source:"@site/docs/wax-bp/chains-json.md",sourceDirName:"wax-bp",slug:"/wax-bp/chains-json",permalink:"/waxdevelopers_test/docs/wax-bp/chains-json",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/wax-bp/chains-json.md",tags:[],version:"current",frontMatter:{title:"Creating a chains.json",nav_order:141,layout:"default",parent:"WAX Block Producer","lang-ref":"Creating a chains.json",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Creating a bp.json",permalink:"/waxdevelopers_test/docs/wax-bp/bp-json"},next:{title:"WAX Cloud Wallet",permalink:"/waxdevelopers_test/docs/wax-cloud-wallet/"}},l={},c=[{value:"Why a chains.json?",id:"why-a-chainsjson",level:2},{value:"Creating the chains.json",id:"creating-the-chainsjson",level:2},{value:"Access Control Allow Origin Header",id:"access-control-allow-origin-header",level:2},{value:"Helpful Links",id:"helpful-links",level:2}],p={toc:c},h="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-a-chainsjson"},"Why a chains.json?"),(0,r.kt)("p",null,"Since a ",(0,r.kt)("a",{parentName:"p",href:"/docs/wax-bp/bp-json"},"bp.json")," is needed for every chain (this includes a separate producerjson for Mainnet and Testnet), there is the need for listing all the producerjson associated with a block producer and chain. The chains.json simply lists and links the bp.json to a chain-id."),(0,r.kt)("h2",{id:"creating-the-chainsjson"},"Creating the chains.json"),(0,r.kt)("p",null,"Just start off by using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Blacklusion/chains.json"},"this")," template. It contains already all chains that you will probably need and more. If you don\u2019t want to use this repo, we can alternatively suggest using the Network Info from the ",(0,r.kt)("a",{parentName:"p",href:"https://wax.validationcore.io/services/network-info"},"Validationcore")," or ",(0,r.kt)("a",{parentName:"p",href:"https://validate.eosnation.io/wax/info/"},"EOS Nation Validator"),".\nIn the next step, delete all chains, that you don\u2019t need from the template. Don\u2019t forget to adjust the names of the chain\u2019s producerjson that you have not deleted. These have to match the according .json and URL for that chain. The names provided in the repo are not binding, however, this is how we (would) name the producerjsons."),(0,r.kt)("p",null,"Examnple chains.json for WAX Mainnet & Testnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chains": {\n    "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4": "/wax.json",\n    "f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12": "/wax-testnet.json"\n  }\n}\n')),(0,r.kt)("h2",{id:"access-control-allow-origin-header"},"Access Control Allow Origin Header"),(0,r.kt)("p",null,"Note that you will have to set up the Access-Control-Allow-Origin Header properly. You can find more information about this header ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers"},"here"),"."),(0,r.kt)("p",null,"If you are using Nginx, you can easily achieve this by adding the following line to your conf that handles the route for the chains.json."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"add_header Access-Control-Allow-Origin *;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"# Example config\nlocation ~ \\.json {\n        add_header Access-Control-Allow-Origin *;\n        root /var/website/resources;\n    }\n")),(0,r.kt)("h2",{id:"helpful-links"},"Helpful Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Template chains.json with ChainIds: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Blacklusion/chains.json"},"https://github.com/Blacklusion/chains.json")),(0,r.kt)("li",{parentName:"ul"},"Tools to validate your chains.json: ",(0,r.kt)("a",{parentName:"li",href:"https://wax.validationcore.io/validations"},"Validationcore")," ",(0,r.kt)("a",{parentName:"li",href:"https://validate.eosnation.io/wax/producers/"},"EOS Nation Validator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/wax-bp/bp-json"},"bp.json tutorial"))))}d.isMDXComponent=!0}}]);