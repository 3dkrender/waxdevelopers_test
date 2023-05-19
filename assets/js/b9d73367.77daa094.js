"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[4524],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var i=2;i<l;i++)a[i]=o[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9168:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=o(7462),r=(o(7294),o(3905));const l={title:"Blockchain Tools",layout:"default",nav_order:99,parent:"Tools & Topics","lang-ref":"Blockchain Tools",lang:"en"},a=void 0,c={unversionedId:"tools/blockchain_tools",id:"tools/blockchain_tools",title:"Blockchain Tools",description:"To communicate with the WAX Blockchain, create a local development environment, and locally deploy your smart contracts, you'll need to use three key tools included in the WAX Blockchain Setup:",source:"@site/docs/tools/blockchain_tools.md",sourceDirName:"tools",slug:"/tools/blockchain_tools",permalink:"/waxdevelopers_test/docs/tools/blockchain_tools",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/tools/blockchain_tools.md",tags:[],version:"current",frontMatter:{title:"Blockchain Tools",layout:"default",nav_order:99,parent:"Tools & Topics","lang-ref":"Blockchain Tools",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Tools & Topics",permalink:"/waxdevelopers_test/docs/tools/"},next:{title:"WAX-CDT Options",permalink:"/waxdevelopers_test/docs/tools/cdt_options"}},s={},i=[{value:"keosd",id:"keosd",level:2},{value:"nodeos",id:"nodeos",level:2},{value:"cleos",id:"cleos",level:2}],p={toc:i},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To communicate with the WAX Blockchain, create a local development environment, and locally deploy your smart contracts, you'll need to use three key tools included in the ",(0,r.kt)("a",{parentName:"p",href:"//docs/dapp-development/wax-blockchain-setup/"},"WAX Blockchain Setup"),":"),(0,r.kt)("h2",{id:"keosd"},"keosd"),(0,r.kt)("p",null,"Used to store private keys. This program automatically starts when you initiate ",(0,r.kt)("strong",{parentName:"p"},"cleos")," commands and can start several instances on your local server."),(0,r.kt)("p",null,"Refer to EOS's ",(0,r.kt)("a",{href:"https://docs.eosnetwork.com/leap/latest/keosd/",target:"_blank"},"Introduction - keosd")," for more information."),(0,r.kt)("h2",{id:"nodeos"},"nodeos"),(0,r.kt)("p",null,"This is the core WAX node daemon, used to run a local node on your server. You can initialize ",(0,r.kt)("strong",{parentName:"p"},"nodeos")," with various plug-ins and options."),(0,r.kt)("p",null,"Nodeos also allows you to communicate with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/rpc_api"},"WAX RPC API"),"."),(0,r.kt)("p",null,"Refer to EOS's ",(0,r.kt)("a",{href:"https://docs.eosnetwork.com/leap/latest/nodeos/",target:"_blank"},"Overview - nodeos")," for more information."),(0,r.kt)("h2",{id:"cleos"},"cleos"),(0,r.kt)("p",null,"Used to interact with your local blockchain and manage local wallets and accounts."),(0,r.kt)("p",null,"Refer to EOS's ",(0,r.kt)("a",{href:"https://docs.eosnetwork.com/leap/latest/cleos/",target:"_blank"},"Overview - cleos")," for more information."))}u.isMDXComponent=!0}}]);