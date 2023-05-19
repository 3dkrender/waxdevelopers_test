"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(v,l(l({ref:t},i),{},{components:n})):o.createElement(v,l({ref:t},i))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"Set Up a Local dApp Environment",layout:"default",nav_order:40,parent:"dApp Development",has_children:!0,"lang-ref":"Set Up a Local dApp Environment",lang:"en"},l=void 0,p={unversionedId:"dapp-development/setup-local-dapp-environment/index",id:"dapp-development/setup-local-dapp-environment/index",title:"Set Up a Local dApp Environment",description:"Our Docker Development Image includes everything you need to set up a local development environment. This reduces your development costs and offers a fully-functional sandbox for both new and experienced dApp developers. The WAX local testnet allows you to easily:",source:"@site/docs/dapp-development/setup-local-dapp-environment/index.md",sourceDirName:"dapp-development/setup-local-dapp-environment",slug:"/dapp-development/setup-local-dapp-environment/",permalink:"/waxdevelopers_test/docs/dapp-development/setup-local-dapp-environment/",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/dapp-development/setup-local-dapp-environment/index.md",tags:[],version:"current",frontMatter:{title:"Set Up a Local dApp Environment",layout:"default",nav_order:40,parent:"dApp Development",has_children:!0,"lang-ref":"Set Up a Local dApp Environment",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Run Commands",permalink:"/waxdevelopers_test/docs/dapp-development/docker-setup/docker_qstart_use"},next:{title:"Access Your Local API",permalink:"/waxdevelopers_test/docs/dapp-development/setup-local-dapp-environment/dapp_api"}},c={},s=[{value:"How it Works",id:"how-it-works",level:2},{value:"Before You Begin",id:"before-you-begin",level:2}],i={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/dapp-development/docker-setup/"},"Docker Development Image")," includes everything you need to set up a local development environment. This reduces your development costs and offers a fully-functional sandbox for both new and experienced dApp developers. The WAX local testnet allows you to easily:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run a local development node on your server"),(0,r.kt)("li",{parentName:"ul"},"Create free, local accounts to associate with your contract and simulate customers"),(0,r.kt)("li",{parentName:"ul"},"Deploy and test your smart contracts locally"),(0,r.kt)("li",{parentName:"ul"},"Estimate CPU and RAM usage"),(0,r.kt)("li",{parentName:"ul"},"Make local blockchain API calls ")),(0,r.kt)("h2",{id:"how-it-works"},"How it Works"),(0,r.kt)("p",null,"To set up your local development environment, you'll need to use three key ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/blockchain_tools"},"Blockchain Tools"),": keosd, nodeos, and cleos."),(0,r.kt)("p",null,"When you start ",(0,r.kt)("strong",{parentName:"p"},"nodeos")," with various development plug-ins, it will launch a local test node on your server and start producing blocks. These blocks are written to a log, allowing you to view signed transactions initiated from your smart contracts. "),(0,r.kt)("p",null,"Using a built-in development key and system account, you can also: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create a Development Wallet.")," This is required to create accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create a Contract Account.")," Each of your smart contracts must be associated with an account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create Test Users.")," You can create as many local accounts as you need and fund them with local tokens.")),(0,r.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,r.kt)("p",null,"Before you set up your local development environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You'll need to complete our ",(0,r.kt)("a",{parentName:"li",href:"/docs/dapp-development/docker-setup/"},"Docker Quickstart")," (recommended) or use the ",(0,r.kt)("a",{parentName:"li",href:"/docs/dapp-development/wax-blockchain-setup/"},"WAX Blockchain Setup")," to build from source."),(0,r.kt)("li",{parentName:"ul"},"Have a text document or note program ready. You'll need to use a wallet password and a public key to create accounts.")))}d.isMDXComponent=!0}}]);