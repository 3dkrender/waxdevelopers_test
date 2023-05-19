"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[3853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={title:"Docker Deploy",layout:"default",nav_order:72,parent:"Deploy Your dApp on WAX",grand_parent:"dApp Development","lang-ref":"Docker Deploy",lang:"en"},l=void 0,p={unversionedId:"dapp-development/deploy-dapp-on-wax/deploy_docker",id:"dapp-development/deploy-dapp-on-wax/deploy_docker",title:"Docker Deploy",description:"In this guide, you'll learn how to customize the hello-world build scripts to deploy your smart contracts to the WAX mainnet.",source:"@site/docs/dapp-development/deploy-dapp-on-wax/deploy_docker.md",sourceDirName:"dapp-development/deploy-dapp-on-wax",slug:"/dapp-development/deploy-dapp-on-wax/deploy_docker",permalink:"/waxdevelopers_test/docs/dapp-development/deploy-dapp-on-wax/deploy_docker",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/dapp-development/deploy-dapp-on-wax/deploy_docker.md",tags:[],version:"current",frontMatter:{title:"Docker Deploy",layout:"default",nav_order:72,parent:"Deploy Your dApp on WAX",grand_parent:"dApp Development","lang-ref":"Docker Deploy",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Deploy Your dApp on WAX",permalink:"/waxdevelopers_test/docs/dapp-development/deploy-dapp-on-wax/"},next:{title:"WAX-CDT Deploy",permalink:"/waxdevelopers_test/docs/dapp-development/deploy-dapp-on-wax/deploy_source"}},c={},i=[{value:"Modify the Scripts",id:"modify-the-scripts",level:2}],s={toc:i},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide, you'll learn how to customize the ",(0,r.kt)("strong",{parentName:"p"},"hello-world")," build scripts to deploy your smart contracts to the WAX mainnet."),(0,r.kt)("p",null,"Before you begin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure Docker is configured to run without sudo. "),(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-blockchain",target:"_blank"},"WAX Blockchain Source Code"),". Refer to the ",(0,r.kt)("a",{parentName:"li",href:"/docs/dapp-development/wax-blockchain-setup/"},"WAX Blockchain Setup"),"for more information."),(0,r.kt)("li",{parentName:"ul"},"Have your WAX Blockchain Account public/private keys available."),(0,r.kt)("li",{parentName:"ul"},"Make sure you have enough WAX staked in your account to allocate resources. ")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("strong",null,"Note:")," You do not need to build WAX source code to complete these steps. "),(0,r.kt)("h2",{id:"modify-the-scripts"},"Modify the Scripts"),(0,r.kt)("p",null,"To modify the ",(0,r.kt)("strong",{parentName:"p"},"hello-world")," scripts to deploy your smart contract:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the command line, navigate to the ",(0,r.kt)("strong",{parentName:"p"},"hello-world")," folder in the ",(0,r.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-blockchain",target:"_blank"},"WAX Blockchain Source Code Repository"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd wax-blockchain/samples/hello-world\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the contents of ",(0,r.kt)("strong",{parentName:"p"},"hello-world")," to your smart contract's directory. For this example, we'll use ",(0,r.kt)("strong",{parentName:"p"},"wax_deploy"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From ",(0,r.kt)("strong",{parentName:"p"},"wax_deploy"),", open ",(0,r.kt)("strong",{parentName:"p"},"CMakeLists.txt"),". This file stores your project name and smart contract file name."),(0,r.kt)("p",{parentName:"li"},"a. Type your contract name on line 25."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"project(waxcontract)\n")),(0,r.kt)("p",{parentName:"li"},"b. Type your contract's filename on line 29."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"add_contract(${PROJECT_NAME} ${PROJECT_NAME} waxcontract.cpp)\n")),(0,r.kt)("p",{parentName:"li"},"Save the file. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, open ",(0,r.kt)("strong",{parentName:"p"},"Makefile"),". This file contains the scripts to run ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos")," and the WAX Docker Development image."),(0,r.kt)("p",{parentName:"li"},"a. Type your contract name on Line 23."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"CONTRACT_NAME = waxcontract\n")),(0,r.kt)("p",{parentName:"li"},"b. Update the WAX allocations for your smart contract on Line 87, if required."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--stake-net '0.50000000 WAX' --stake-cpu '0.50000000 WAX' --buy-ram-kbytes 32\"\n")),(0,r.kt)("p",{parentName:"li"},"c. To test your smart contract, you can update line 48 to run your action:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"push action ${CONTRACT_ACCOUNT} greet '[]' -p ${CONTRACT_ACCOUNT}@active\"\n")),(0,r.kt)("p",{parentName:"li"},"Save the file."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"<strong>Note:</strong> `NODEOS_URL` is the only optional parameter. Its default value is the mainnet deployment address [chain-api-url](/docs/wax-infrastructure/#public-and-free-api-service-providers/.  \n:::\n")),(0,r.kt)("p",{parentName:"admonition"},"Once these changes have been made, you're ready to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," scripts to build and deploy your smart contract."),(0,r.kt)("h2",{parentName:"admonition",id:"deploy-your-smart-contract"},"Deploy Your Smart Contract"),(0,r.kt)("p",{parentName:"admonition"},"To launch your WAX smart contract on the WAX Blockchain:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Build your smart contract.")," In the command line, run the following script from the ",(0,r.kt)("strong",{parentName:"p"},"wax_deploy")," folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make build\n")),(0,r.kt)("p",{parentName:"li"},"This creates ",(0,r.kt)("inlineCode",{parentName:"p"},"wax.wasm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wax.abi")," in the ",(0,r.kt)("strong",{parentName:"p"},"wax_deploy")," folder.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Generate keys for your smart contract's account.")," From the command line, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make create-key\n")),(0,r.kt)("p",{parentName:"li"},"This creates a pair of private/public keys for your smart contract's account (save the console response in a safe place, you'll need to use them later).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a WAX Contract Account.")," To create a blockchain account for your smart contract, run:"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{width:"28%"}},"Parameter"),(0,r.kt)("th",null,"Example"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"WAX_ACCOUNT"),(0,r.kt)("td",null,"waxprimary"),(0,r.kt)("td",null,"Your dApp Developer Account name.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"WAX_PRIVATE_KEY"),(0,r.kt)("td",null,"5JTZaN1zabi5wyC3LcdeZG3AzF7sLDX4JFqMDe68ThLC3Q5nYez"),(0,r.kt)("td",null,"Private key for your dApp Developer Account.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"CONTRACT_ACCOUNT"),(0,r.kt)("td",null,"waxsc1"),(0,r.kt)("td",null,"Specify a new name for your smart contract account. Account names must be less than 13 characters and only contain letters [a-z] and numbers [1-5].")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"CONTRACT_PUBLIC_KEY"),(0,r.kt)("td",null,"EOS4yxqE5KYv5XaB2gj6sZTUDiGzKm42KfiRPDCeXWZUsAZZVXk1F"),(0,r.kt)("td",null,"New public key that you created in Step 2.")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make create-account WAX_ACCOUNT=waxprimary WAX_PRIVATE_KEY=5JTZaN1zabi5wyC3LcdeZG3AzF7sLDX4JFqMDe68ThLC3Q5nYez CONTRACT_ACCOUNT=waxsc1 CONTRACT_PUBLIC_KEY=EOS4yxqE5KYv5XaB2gj6sZTUDiGzKm42KfiRPDCeXWZUsAZZVXk1F\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deploy your contract.")," From the command line, run: "),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{width:"28%"}},"Parameter"),(0,r.kt)("th",null,"Example"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"CONTRACT_ACCOUNT"),(0,r.kt)("td",null,"waxsc1"),(0,r.kt)("td",null,"The name you specified for your smart contract's account.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"CONTRACT_PRIVATE_KEY"),(0,r.kt)("td",null,"9X5KRXKVx25yjL3FvxxY9YxYxxYY9Yxx99yyXTRH8DjppKpD9tKtVz"),(0,r.kt)("td",null,"Private key for your smart contract's account (that you created in Step 2).")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make deploy CONTRACT_ACCOUNT=waxsc1 CONTRACT_PRIVATE_KEY=9X5KRXKVx25yjL3FvxxY9YxYxxYY9Yxx99yyXTRH8DjppKpD9tKtVz\n")),(0,r.kt)("p",{parentName:"li"},"This deploys your smart contract to the mainnet. You only need to pass your smart contract's account name and private key.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Test your smart contract.")," From the command line, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make test CONTRACT_ACCOUNT=waxsc1\n")))),(0,r.kt)("p",{parentName:"admonition"},"Your dApp is now live on WAX! ")),(0,r.kt)("strong",null,"Note:")," Depending on how your dApp's onboarding process is built, your customers may need to create a WAX Account to use your dApp on WAX. :::")}u.isMDXComponent=!0}}]);