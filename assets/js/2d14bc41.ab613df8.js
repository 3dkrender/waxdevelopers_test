"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[5954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Create a WAX NFT",layout:"default",nav_order:89,parent:"How-To SimpleAssets",grand_parent:"Tutorials","lang-ref":"Create a WAX NFT",lang:"en"},s=void 0,l={unversionedId:"tutorials/howto_simpleassets/nft_use",id:"tutorials/howto_simpleassets/nft_use",title:"Create a WAX NFT",description:"In this example, we'll write a smart contract that creates a WAX NFT Sticker using the simpleassets smart contract.",source:"@site/docs/tutorials/howto_simpleassets/nft_use.md",sourceDirName:"tutorials/howto_simpleassets",slug:"/tutorials/howto_simpleassets/nft_use",permalink:"/waxdevelopers_test/docs/tutorials/howto_simpleassets/nft_use",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/tutorials/howto_simpleassets/nft_use.md",tags:[],version:"current",frontMatter:{title:"Create a WAX NFT",layout:"default",nav_order:89,parent:"How-To SimpleAssets",grand_parent:"Tutorials","lang-ref":"Create a WAX NFT",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Test Your NFT Smart Contract",permalink:"/waxdevelopers_test/docs/tutorials/howto_simpleassets/nft_test"},next:{title:"WAX Random Number Generator",permalink:"/waxdevelopers_test/docs/tutorials/wax-rng/"}},i={},c=[{value:"Get Set Up",id:"get-set-up",level:2},{value:"Create and Compile Your NFT Smart Contract",id:"create-and-compile-your-nft-smart-contract",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this example, we'll write a smart contract that creates a WAX NFT Sticker using the ",(0,n.kt)("strong",{parentName:"p"},"simpleassets")," smart contract. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WAX NFT Sticker (Example)")),(0,n.kt)("img",{src:"https://developer.wax.io/img/wax_sticker.png",style:{height:"200px"}}),(0,n.kt)("h2",{id:"get-set-up"},"Get Set Up"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use our ",(0,n.kt)("a",{parentName:"p",href:"/docs/dapp-development/docker-setup/"},"Docker Quickstart")," to start a new interactive bash session. From the command line, navigate to the ",(0,n.kt)("strong",{parentName:"p"},"wax")," directory (or the local directory that you shared with your Docker container)."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd wax\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you haven't done so already, create a smart contracts directory. For this tutorial, we'll use a folder named ",(0,n.kt)("strong",{parentName:"p"},"mycontracts"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir mycontracts\n")),(0,n.kt)("p",{parentName:"li"},"Navigate to this new directory:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd mycontracts\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the command line, create a folder named ",(0,n.kt)("strong",{parentName:"p"},"waxnft")," and navigate to this new directory."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir waxnft && cd waxnft\n")))),(0,n.kt)("h2",{id:"create-and-compile-your-nft-smart-contract"},"Create and Compile Your NFT Smart Contract"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"waxnft")," folder, create a file named ",(0,n.kt)("strong",{parentName:"p"},"waxnft.cpp")," and paste the following code into your NFT smart contract:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'#include <eosio/eosio.hpp>\n\nusing namespace eosio;\n\nCONTRACT waxnft : public eosio::contract{\npublic:\n    using contract::contract;\n\n    ACTION createnft() {\n\n        //assign asset attributes\n        name author = get_self();\n        name category = "sticker"_n;\n        name owner = "waxnftowner1"_n;\n        std::string idata = R"json({"name": "WAX Developer Hive", "desc" : "WAX Developer Hive Sticker" })json";\n        std::string mdata = R"json({"color": "black", "img" : "https://developer.wax.io/img/wax_sticker.png" })json";\n        bool requireClaim = false;\n\n        //call the simpleassets create action\n        action(\n            { author, "active"_n },\n            "simpleassets"_n,\n            "create"_n,\n            std::tuple(author, category, owner, idata, mdata, requireClaim)\n        )\n        .send();\n\n    }\n};\n\nEOSIO_DISPATCH(waxnft, (createnft))\n')),(0,n.kt)("p",{parentName:"li"},"Save your changes. This contract creates a WAX NFT Sticker with the same author and owner account. Because the ",(0,n.kt)("inlineCode",{parentName:"p"},"requireClaim")," flag is set to false, your smart contract account is charged the RAM and the asset is instantly assigned to the owner (you)."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"idata")," includes key/value pairs that can not change."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"mdata")," includes key/value pairs that you can update."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the command line, use WAX-CDT to build your NFT smart contract:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"eosio-cpp -abigen waxnft.cpp -o waxnft.wasm\n")))),(0,n.kt)("p",null,"Your NFT smart contract is now ready to be deployed to the WAX mainnet."))}u.isMDXComponent=!0}}]);