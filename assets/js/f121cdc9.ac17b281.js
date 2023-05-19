"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[9780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Verify Your Installation",nav_order:32,layout:"default",parent:"WAX Blockchain Setup",grand_parent:"dApp Development","lang-ref":"Verify Your Installation",lang:"en"},l=void 0,i={unversionedId:"dapp-development/wax-blockchain-setup/blockchain_verify",id:"dapp-development/wax-blockchain-setup/blockchain_verify",title:"Verify Your Installation",description:"To verify your installation, you can use cleos to call the get info endpoint on the Wax Blockchain API.",source:"@site/docs/dapp-development/wax-blockchain-setup/blockchain_verify.md",sourceDirName:"dapp-development/wax-blockchain-setup",slug:"/dapp-development/wax-blockchain-setup/blockchain_verify",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/blockchain_verify",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/dapp-development/wax-blockchain-setup/blockchain_verify.md",tags:[],version:"current",frontMatter:{title:"Verify Your Installation",nav_order:32,layout:"default",parent:"WAX Blockchain Setup",grand_parent:"dApp Development","lang-ref":"Verify Your Installation",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Install the WAX Blockchain",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/blockchain_install"},next:{title:"WAX Contract Development Toolkit",permalink:"/waxdevelopers_test/docs/dapp-development/wax-cdt/"}},p={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To verify your installation, you can use ",(0,o.kt)("strong",{parentName:"p"},"cleos")," to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"get info")," endpoint on the Wax Blockchain API. "),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,"From the command line, enter the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cleos -u https://wax-api-url get info\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Check ",(0,o.kt)("a",{parentName:"em",href:"https://validate.eosnation.io/wax/reports/endpoints.html"},"https://validate.eosnation.io/wax/reports/endpoints.html")," to get an updated API endpoint URL")),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/blockchain_tools"},"Blockchain Tools")," installed successfully, this endpoint will return various details about the WAX Blockchain, including the ",(0,o.kt)("inlineCode",{parentName:"p"},"chain_id"),", block producer, and most recent block height."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4540).Z,width:"701",height:"385"}),'{:class="img-responsive"}'))}d.isMDXComponent=!0},4540:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docker_results-1d3e2b0aa283aebd0411c7dfb65425b0.jpg"}}]);