"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[3724],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),w=n,m=p["".concat(i,".").concat(w)]||p[w]||d[w]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=w;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}w.displayName="MDXCreateElement"},6126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"WaxJS Overview",layout:"default",nav_order:3,parent:"WAX Cloud Wallet",has_children:!0,has_toc:!0,"lang-ref":"WaxJS Overview",lang:"en"},l=void 0,s={unversionedId:"wax-cloud-wallet/waxjs/index",id:"wax-cloud-wallet/waxjs/index",title:"WaxJS Overview",description:"WaxJS is a Javascript library that connects to WAX Cloud Wallet to sign in users and execute smart contract transactions, without requiring an external wallet (e.g., Scatter). Similar to the standard OAuth 2.0 flow, users simply allow your dApp to access their WAX Blockchain Account name. Once your dApp's been authorized, users can approve your smart contract transactions from their WAX Cloud Wallet Account.",source:"@site/docs/wax-cloud-wallet/waxjs/index.md",sourceDirName:"wax-cloud-wallet/waxjs",slug:"/wax-cloud-wallet/waxjs/",permalink:"/waxdevelopers_test/docs/wax-cloud-wallet/waxjs/",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/wax-cloud-wallet/waxjs/index.md",tags:[],version:"current",frontMatter:{title:"WaxJS Overview",layout:"default",nav_order:3,parent:"WAX Cloud Wallet",has_children:!0,has_toc:!0,"lang-ref":"WaxJS Overview",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"boost.wax",permalink:"/waxdevelopers_test/docs/wax-cloud-wallet/boost-wax"},next:{title:"WaxJS Demo",permalink:"/waxdevelopers_test/docs/wax-cloud-wallet/waxjs/waxjs_demo"}},i={},c=[{value:"How it Works",id:"how-it-works",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WaxJS")," is a Javascript library that connects to WAX Cloud Wallet to sign in users and execute smart contract transactions, without requiring an external wallet (e.g., Scatter). Similar to the standard OAuth 2.0 flow, users simply allow your dApp to access their WAX Blockchain Account name. Once your dApp's been authorized, users can approve your smart contract transactions from their WAX Cloud Wallet Account."),(0,n.kt)("p",null,"To get started, you simply need to include our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/worldwide-asset-exchange/waxjs"},"WaxJS")," library and make a few simple calls from your client. If you'd like to jump right to the code and run our live WaxJS example, refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/wax-cloud-wallet/waxjs/waxjs_demo"},"WaxJS Demo"),"."),(0,n.kt)("h2",{id:"how-it-works"},"How it Works"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WaxJS")," uses the WAX Cloud Wallet and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eosjs"},"EOSIO/eosjs"),"  Javascript API to provide an easy-to-use interface between your users and the WAX Blockchain."),(0,n.kt)("p",null,"To use ",(0,n.kt)("strong",{parentName:"p"},"WaxJS"),", you simply need to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the ",(0,n.kt)("strong",{parentName:"li"},"WaxJS")," library to your client"),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"wax.login")," to sign users in with WAX Cloud Wallet (Auto-login features available)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WaxJS Login",src:a(287).Z,width:"523",height:"318"}),'{:class="img-responsive"}'),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"wax.api")," to send your transactions to the WAX Blockchain")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WaxJS Sign",src:a(8893).Z,width:"681",height:"365"}),'{:class="img-responsive"}'),(0,n.kt)("p",null,"In the next sections, you'll learn how to install and use ",(0,n.kt)("strong",{parentName:"p"},"WaxJS"),"."))}d.isMDXComponent=!0},287:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/waxjs_login-6a313c90c4d0971fffde3f6c5912947a.png"},8893:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/waxjs_sign-7594d89c89df1c60bc11301254629a79.png"}}]);