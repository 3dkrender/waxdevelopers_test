"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[3045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"WAX RNG Basics",layout:"default",nav_order:82,parent:"Create a WAX RNG Smart Contract",grand_parent:"Tutorials","lang-ref":"WAX RNG Basics",lang:"en"},i=void 0,s={unversionedId:"tutorials/create-wax-rng-smart-contract/rng_basics",id:"tutorials/create-wax-rng-smart-contract/rng_basics",title:"WAX RNG Basics",description:"How it Works",source:"@site/docs/tutorials/create-wax-rng-smart-contract/rng_basics.md",sourceDirName:"tutorials/create-wax-rng-smart-contract",slug:"/tutorials/create-wax-rng-smart-contract/rng_basics",permalink:"/waxdevelopers_test/docs/tutorials/create-wax-rng-smart-contract/rng_basics",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/tutorials/create-wax-rng-smart-contract/rng_basics.md",tags:[],version:"current",frontMatter:{title:"WAX RNG Basics",layout:"default",nav_order:82,parent:"Create a WAX RNG Smart Contract",grand_parent:"Tutorials","lang-ref":"WAX RNG Basics",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Create a WAX RNG Smart Contract",permalink:"/waxdevelopers_test/docs/tutorials/create-wax-rng-smart-contract/"},next:{title:"Deploy Your WAX RNG Contract",permalink:"/waxdevelopers_test/docs/tutorials/create-wax-rng-smart-contract/rng_deploy"}},c={},l=[{value:"How it Works",id:"how-it-works",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-it-works"},"How it Works"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WAX RNG Smart Contract.")," The WAX RNG smart contract runs on the WAX mainnet, owned by the ",(0,n.kt)("strong",{parentName:"li"},"orng.wax")," account.  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WAX RNG Oracle Service.")," Secured by the ",(0,n.kt)("strong",{parentName:"li"},"oracle.wax")," account, this service monitors the WAX Blockchain externally, listening for new calls to the WAX RNG smart contract. When you request a new random number, the RNG oracle creates RSA signatures that generate provably fair random numbers. ")),(0,n.kt)("p",null,"Here's the typical WAX RNG flow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Your user or your client-side app supplies a 64-bit random number (",(0,n.kt)("em",{parentName:"li"},"signing_value"),"). For example, you could display a button that calls a javascript function that generates a pseudo-random number. When the user is satisfied with their seed value, they can click another button (e.g., Start Playing)."),(0,n.kt)("li",{parentName:"ol"},"You also need to supply a unique tracking number (",(0,n.kt)("em",{parentName:"li"},"assoc_id"),"). This can be an internal job id or database id. This number will serve as a unique key to identify the request and help retrieve the random number obtained."),(0,n.kt)("li",{parentName:"ol"},"Your smart contract calls the WAX RNG service to request a random number, sending your ",(0,n.kt)("em",{parentName:"li"},"assoc_id")," and the user's ",(0,n.kt)("em",{parentName:"li"},"signing_value"),"."),(0,n.kt)("li",{parentName:"ol"},"The WAX RNG oracle accepts your request, then uses an internal public and private key pair to create an RSA signature based on the number supplied by your customer (",(0,n.kt)("em",{parentName:"li"},"signing_value"),"). This signature is hashed and becomes your random number. "),(0,n.kt)("li",{parentName:"ol"},"The WAX RNG service verifies the RSA signature returned from the WAX RNG oracle, then sends the random number to a call-back action in your smart contract, along with your tracking number (",(0,n.kt)("em",{parentName:"li"},"assoc_id"),"). "),(0,n.kt)("li",{parentName:"ol"},"You display the random number to the client or implement some sort of randomization logic, animation, or in-game function.")))}p.isMDXComponent=!0}}]);