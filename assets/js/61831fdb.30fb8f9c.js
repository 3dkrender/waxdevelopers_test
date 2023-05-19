"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[9756],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={title:"Deploy Your NFT Smart Contract",layout:"default",nav_order:90,parent:"How-To SimpleAssets",grand_parent:"Tutorials","lang-ref":"Deploy Your NFT Smart Contract",lang:"en"},l=void 0,s={unversionedId:"tutorials/howto_simpleassets/nft_deploy",id:"tutorials/howto_simpleassets/nft_deploy",title:"Deploy Your NFT Smart Contract",description:"Next, we'll use WAX-CDT tools to deploy your NFT smart contract to the WAX mainnet. Refer to WAX-CDT Deploy for more information.",source:"@site/docs/tutorials/howto_simpleassets/nft_deploy.md",sourceDirName:"tutorials/howto_simpleassets",slug:"/tutorials/howto_simpleassets/nft_deploy",permalink:"/waxdevelopers_test/docs/tutorials/howto_simpleassets/nft_deploy",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/tutorials/howto_simpleassets/nft_deploy.md",tags:[],version:"current",frontMatter:{title:"Deploy Your NFT Smart Contract",layout:"default",nav_order:90,parent:"How-To SimpleAssets",grand_parent:"Tutorials","lang-ref":"Deploy Your NFT Smart Contract",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Simple Assets Basics",permalink:"/waxdevelopers_test/docs/tutorials/howto_simpleassets/nft_basics"},next:{title:"Test Your NFT Smart Contract",permalink:"/waxdevelopers_test/docs/tutorials/howto_simpleassets/nft_test"}},p={},i=[],c={toc:i},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Next, we'll use WAX-CDT tools to deploy your NFT smart contract to the WAX mainnet. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/dapp-development/deploy-dapp-on-wax/deploy_source"},"WAX-CDT Deploy")," for more information."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From Docker, open and unlock your wallet."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos wallet open -n mywallet && cleos wallet unlock -n mywallet --password {wallet.pwd}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("strong",{parentName:"p"},"cleos")," or an EOSIO compatible wallet, create a new public/private key pair for your smart contract."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos wallet create_key -n mywallet\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the command line, use ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos system newaccount"),". The example below uses ",(0,r.kt)("strong",{parentName:"p"},"waxdappacct1")," as the primary WAX Account holder and creates a new smart contract account named ",(0,r.kt)("strong",{parentName:"p"},"waxnftowner1"),". To run this command, you'll need to have the proper authority. This means that the wallet containing your primary account must be opened and unlocked."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos -u [chain-api-url] system newaccount waxdappacct1 waxnftowner1 EOS7jEb46pDiWvA39faCoFn3jUdn6LfL51irdXbvfpuSko86iNU5x --stake-net '5.00000000 WAX' --stake-cpu '5.00000000 WAX' --buy-ram-kbytes 32\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To run the inline ",(0,r.kt)("strong",{parentName:"p"},"create")," action in the ",(0,r.kt)("strong",{parentName:"p"},"simpleassets")," smart contract, you'll need to give your new ",(0,r.kt)("strong",{parentName:"p"},"waxnftowner1@active")," permission the additional ",(0,r.kt)("strong",{parentName:"p"},"eosio.code")," permission. This permission enhances security and allows your smart contract to send inline actions. From the command line, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos set account permission")," command, and include the literal ",(0,r.kt)("inlineCode",{parentName:"p"},"--add-code")," parameter."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos -u [chain-api-url] set account permission waxnftowner1 active --add-code\n")),(0,r.kt)("p",{parentName:"li"},"To verify the new permission, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos get account")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," cleos -u [chain-api-url] get account waxnftowner1\n")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"active")," permission now displays the new ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:waxnftowner1@eosio.code"},"waxnftowner1@eosio.code"))," permission."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"created: 2019-12-02T16:13:29.500\npermissions:\n owner     1:    1 EOS7jEb46pDiWvA39faCoFn3jUdn6LfL51irdXbvfpuSko86iNU5x\n active    1:    1 EOS7jEb46pDiWvA39faCoFn3jUdn6LfL51irdXbvfpuSko86iNU5x, 1 waxnftowner1@eosio.code\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, set your contract with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos set contract")," command (make sure that you're in the ",(0,r.kt)("strong",{parentName:"p"},"waxnft")," folder):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cleos -u [chain-api-url] set contract waxnftowner1 $(pwd) waxrng.wasm waxrng.abi\n")))))}u.isMDXComponent=!0}}]);