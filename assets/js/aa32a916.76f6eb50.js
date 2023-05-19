"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"Install and Build WAX RNG",layout:"default",nav_order:81,parent:"WAX Random Number Generator",grand_parent:"Tutorials"},o=void 0,i={unversionedId:"tutorials/wax-rng/rng_install",id:"tutorials/wax-rng/rng_install",title:"Install and Build WAX RNG",description:"To install WAX RNG from GitHub:",source:"@site/docs/tutorials/wax-rng/rng_install.md",sourceDirName:"tutorials/wax-rng",slug:"/tutorials/wax-rng/rng_install",permalink:"/waxdevelopers_test/docs/tutorials/wax-rng/rng_install",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/tutorials/wax-rng/rng_install.md",tags:[],version:"current",frontMatter:{title:"Install and Build WAX RNG",layout:"default",nav_order:81,parent:"WAX Random Number Generator",grand_parent:"Tutorials"},sidebar:"tutorialSidebar",previous:{title:"WAX Random Number Generator",permalink:"/waxdevelopers_test/docs/tutorials/wax-rng/"},next:{title:"WAX Block Producer",permalink:"/waxdevelopers_test/docs/wax-bp/"}},s={},p=[{value:"Build the WAX RNG Smart Contract and Unit Tests",id:"build-the-wax-rng-smart-contract-and-unit-tests",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To install ",(0,n.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-orng",target:"_blank"},"WAX RNG")," from GitHub:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the command line, clone the Git repository."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/worldwide-asset-exchange/wax-orng.git\n")))),(0,n.kt)("h2",{id:"build-the-wax-rng-smart-contract-and-unit-tests"},"Build the WAX RNG Smart Contract and Unit Tests"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-orng",target:"_blank"},"WAX RNG")," GitHub repository includes WAX RNG source code and various unit tests."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"src")," RNG smart contract code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"tests:")," Unit test source code.")),(0,n.kt)("p",null,"To build these smart contracts with our Docker image and ",(0,n.kt)("strong",{parentName:"p"},"make")," scripts:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the command line, change the directory to ",(0,n.kt)("strong",{parentName:"p"},"wax-orng"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd wax-orng\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start the development docker."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make dev-docker-start\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Next, you have two options."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build the smart contracts and unit tests."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make build\n")),(0,n.kt)("p",{parentName:"li"},"Run tests"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optional, build and test."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make all\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clean all and exit."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make clean\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")))))}m.isMDXComponent=!0}}]);