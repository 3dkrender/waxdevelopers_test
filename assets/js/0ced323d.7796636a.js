"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[5502],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(o),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(k,l(l({ref:t},p),{},{components:o})):n.createElement(k,l({ref:t},p))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},939:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const r={title:"WAX Blockchain Setup",nav_order:30,layout:"default",parent:"dApp Development",has_children:!0,"lang-ref":"WAX Blockchain Setup",lang:"en"},l=void 0,i={unversionedId:"dapp-development/wax-blockchain-setup/index",id:"dapp-development/wax-blockchain-setup/index",title:"WAX Blockchain Setup",description:"To set up and use the WAX Blockchain, it's recommended that you use our waxteam - Docker Images. Our docker images provide a fast, fully supported way to run a node in seconds. Refer to Docker Quickstart for more information.",source:"@site/docs/dapp-development/wax-blockchain-setup/index.md",sourceDirName:"dapp-development/wax-blockchain-setup",slug:"/dapp-development/wax-blockchain-setup/",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/dapp-development/wax-blockchain-setup/index.md",tags:[],version:"current",frontMatter:{title:"WAX Blockchain Setup",nav_order:30,layout:"default",parent:"dApp Development",has_children:!0,"lang-ref":"WAX Blockchain Setup",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"WAX Testnet Quickstart",permalink:"/waxdevelopers_test/docs/dapp-development/testnet-quickstart"},next:{title:"Install the WAX Blockchain",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/blockchain_install"}},c={},s=[{value:"What&#39;s Included",id:"whats-included",level:2},{value:"Docker Quick Deploy",id:"docker-quick-deploy",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"System Requirements",id:"system-requirements",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To set up and use the WAX Blockchain, it's recommended that you use our ",(0,a.kt)("a",{href:"https://hub.docker.com/u/waxteam",target:"_blank"},"waxteam - Docker Images"),". Our docker images provide a fast, fully supported way to run a node in seconds. Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapp-development/docker-setup/"},"Docker Quickstart")," for more information."),(0,a.kt)("p",null,"Our production and development Docker images include everything that's available from the ",(0,a.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-blockchain",target:"_blank"},"WAX Blockchain Source Code Repository"),", allowing you to run WAX nodes and build and deploy smart contracts."),(0,a.kt)("p",null,"If you'd like to access our sample contracts and scripts from your local drive or have a need to install the WAX Blockchain instead of using Docker, you can use this guide to download and optionally build the WAX Blockchain source code."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("strong",null,"Important:")," At this time, pre-compiled packages are not available. Support is ",(0,a.kt)("strong",null,"not")," available when you build the WAX blockchain from source."),(0,a.kt)("h2",{id:"whats-included"},"What's Included"),(0,a.kt)("p",null,"The WAX Blockchain is a fork of ",(0,a.kt)("a",{href:"https://docs.eosnetwork.com/",target:"_blank"},"EOS (Antelope)"),". This ",(0,a.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-blockchain",target:"_blank"},"WAX Blockchain Source Code Repository")," includes and installs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WAX Blockchain source code"),(0,a.kt)("li",{parentName:"ul"},"Dependencies"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tools/blockchain_tools"},"Blockchain Tools"),", including keosd, nodeos, and cleos"),(0,a.kt)("li",{parentName:"ul"},"Sample contracts")),(0,a.kt)("p",null,"You can use these components to manage local wallets, create local accounts, interact with the WAX Blockchain, and more."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("strong",null,"EOS Developers:")," Building the WAX Source Code Repository will overwrite a previous EOS installation."),(0,a.kt)("h3",{id:"docker-quick-deploy"},"Docker Quick Deploy"),(0,a.kt)("p",null,"The WAX Source Code Repository includes a Hello World sample to quickly build and deploy WAX smart contracts to the WAX Blockchain. Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapp-development/deploy-dapp-on-wax/deploy_docker"},"Docker Quick Deploy")," for more information."),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"For a complete list of dependencies, refer to ",(0,a.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-blockchain/tree/develop/scripts",target:"_blank"},"wax-blockchain/scripts")," and locate the `wax_build_` file for your operating system."),(0,a.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,a.kt)("p",null,"If you're not using our Docker images, you'll need to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/os"},"Supported Operating Systems")," to make sure you meet the operating system requirements."),(0,a.kt)("admonition",{parentName:"li",type:"warning"},(0,a.kt)("strong",null,"Ubuntu 18.04 Users:")," Refer to [Known Issues](/docs/troubleshooting/) before you begin the WAX Blockchain Setup.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Have at least 7 GB of free RAM.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Have at least 20 GB of free hard drive space."))))}d.isMDXComponent=!0}}]);