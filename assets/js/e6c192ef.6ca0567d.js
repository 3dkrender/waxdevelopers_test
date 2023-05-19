"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[5082],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},i),{},{components:a})):n.createElement(k,l({ref:t},i))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6097:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"WAX Testnet Quickstart",layout:"default",nav_order:66,parent:"dApp Development","lang-ref":"WAX Testnet Quickstart",lang:"en"},l=void 0,s={unversionedId:"dapp-development/testnet-quickstart",id:"dapp-development/testnet-quickstart",title:"WAX Testnet Quickstart",description:"In this guide, you'll learn how to create Testnet accounts and deploy your smart contracts to the WAX Testnet.",source:"@site/docs/dapp-development/testnet-quickstart.md",sourceDirName:"dapp-development",slug:"/dapp-development/testnet-quickstart",permalink:"/waxdevelopers_test/docs/dapp-development/testnet-quickstart",draft:!1,editUrl:"https://github.com/3dkrender/waxdeveloper_test/tree/main/docs/dapp-development/testnet-quickstart.md",tags:[],version:"current",frontMatter:{title:"WAX Testnet Quickstart",layout:"default",nav_order:66,parent:"dApp Development","lang-ref":"WAX Testnet Quickstart",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Basics",permalink:"/waxdevelopers_test/docs/dapp-development/smart-contract-quickstart/smart_contract_basics"},next:{title:"WAX Blockchain Setup",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/"}},c={},p=[{value:"Create and Fund Testnet Accounts",id:"create-and-fund-testnet-accounts",level:2},{value:"Deploy Smart Contracts to the WAX Testnet",id:"deploy-smart-contracts-to-the-wax-testnet",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],i={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide, you'll learn how to create Testnet accounts and deploy your smart contracts to the WAX Testnet."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("strong",null,"Tip:")," Every smart contract requires a blockchain account. It's recommended that you name your accounts based on your smart contract's functionality (e.g., mywaxnftgame). Account names must be 12 characters and only contain letters [a-z] and numbers [1-5]."),(0,r.kt)("h2",{id:"create-and-fund-testnet-accounts"},"Create and Fund Testnet Accounts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"https://waxsweden.org/testnet/",target:"_blank"},"Create a Testnet Account"),". Save your private and public keys in a safe place."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Testnet homepage, get free WAX Tokens to fund your new account. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To deploy your smart contracts, you'll need to create a wallet using your public and private keys. You can use the wallet features on ",(0,r.kt)("a",{href:"https://local.bloks.io/wallet/transfer?nodeUrl=testnet.waxsweden.org&coreSymbol=WAX&corePrecision=8&systemDomain=eosio&hyperionUrl=https%3A%2F%2Ftestnet.waxsweden.org",target:"_blank"},"Bloks.io"),", or use our ",(0,r.kt)("a",{parentName:"p",href:"/docs/dapp-development/docker-setup/"},"Docker images"),"to manage your wallet. "),(0,r.kt)("p",{parentName:"li"},"To create a wallet from a Docker container, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos wallet")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos rm -f ~/eosio-wallet/{account.name}.wallet &&\ncleos wallet create -n {account.name} --to-console &&\ncleos wallet import -n {account.name} --private-key {active.privatekey} &&\ncleos wallet import -n {account.name} --private-key {owner.privatekey}\n")),(0,r.kt)("p",{parentName:"li"},"Store your wallet password in a safe place - you'll need it to run blockchain commands.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you have a wallet configured with your Testnet account, you can stake NET, CPU, and RAM from Bloks.io or your Docker container."),(0,r.kt)("p",{parentName:"li"},"Buy RAM:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cleos -u https://testnet.waxsweden.org system buyram {account.name} {account.name} "3.00000000 WAX"\n')),(0,r.kt)("p",{parentName:"li"},"Stake NET and CPU (to yourself, from the same account):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cleos -u https://testnet.waxsweden.org system delegatebw {account.name} {account.name} "4.00000000 WAX" "5.00000000 WAX"\n')))),(0,r.kt)("h2",{id:"deploy-smart-contracts-to-the-wax-testnet"},"Deploy Smart Contracts to the WAX Testnet"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("strong",null,"Tip:")," To complete these steps, make sure that your wallet is opened and unlocked. Refer to Troubleshooting below for more information."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From an interactive Docker bash session, navigate to your smart contracts directory and build your smart contract."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"eosio-cpp -abigen waxnft.cpp -o waxnft.wasm \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you're calling external contract actions from your smart contract (e.g., WAX RNG or Simple Assets), make sure to elevate your account permissions:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos -u https://testnet.waxsweden.org set account permission {account.name} active --add-code\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deploy.")," From the command line, set your contract with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos set contract")," command: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos -u https://testnet.waxsweden.org set contract {account.name} $(pwd) waxnft.wasm waxnft.abi   \n")))),(0,r.kt)("p",null,"Your smart contract is now live on the WAX Testnet! "),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you receive wallet and/or authorization errors, you may need to open and unlock your wallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos wallet open -n {account.name} &&\ncleos wallet unlock -n {account.name} --password {wallet.pwd}\n")))}m.isMDXComponent=!0}}]);