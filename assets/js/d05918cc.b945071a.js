"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[2577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return n?o.createElement(f,p(p({ref:t},d),{},{components:n})):o.createElement(f,p({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Access Your Local API",layout:"default",nav_order:42,parent:"Set Up a Local dApp Environment",grand_parent:"dApp Development","lang-ref":"Access Your Local API",lang:"en"},p=void 0,l={unversionedId:"dapp-development/setup-local-dapp-environment/dapp_api",id:"dapp-development/setup-local-dapp-environment/dapp_api",title:"Access Your Local API",description:"The WAX mainnet exposes a set of nodeos API endpoints (RPC API), allowing you to interact with the WAX Blockchain. Commonly known as chain-api-url",source:"@site/docs/dapp-development/setup-local-dapp-environment/dapp_api.md",sourceDirName:"dapp-development/setup-local-dapp-environment",slug:"/dapp-development/setup-local-dapp-environment/dapp_api",permalink:"/waxdevelopers_test/docs/dapp-development/setup-local-dapp-environment/dapp_api",draft:!1,editUrl:"https://github.com/3dkrender/waxdeveloper_test/tree/main/docs/dapp-development/setup-local-dapp-environment/dapp_api.md",tags:[],version:"current",frontMatter:{title:"Access Your Local API",layout:"default",nav_order:42,parent:"Set Up a Local dApp Environment",grand_parent:"dApp Development","lang-ref":"Access Your Local API",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Set Up a Local dApp Environment",permalink:"/waxdevelopers_test/docs/dapp-development/setup-local-dapp-environment/"},next:{title:"Start a Local Node",permalink:"/waxdevelopers_test/docs/dapp-development/setup-local-dapp-environment/dapp_local"}},i={},c=[{value:"Additional Information",id:"additional-information",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The WAX mainnet exposes a set of ",(0,r.kt)("strong",{parentName:"p"},"nodeos")," API endpoints (RPC API), allowing you to interact with the WAX Blockchain. Commonly known as ",(0,r.kt)("a",{parentName:"p",href:"/docs/wax-infrastructure/#public-and-free-api-service-providers"},"chain-api-url")),(0,r.kt)("p",null,"Now that you have a local node running on your local development server, these endpoints can be accessed from your local IP address: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8888"),". This API endpoint is initialized when you pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin eosio::chain_api_plugin")," parameter to ",(0,r.kt)("strong",{parentName:"p"},"nodeos"),"."),(0,r.kt)("p",null,"To test your local RPC API, from the command line, make a ",(0,r.kt)("strong",{parentName:"p"},"curl")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"get_info")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --request POST \\\n  --url http://127.0.0.1:8888/v1/chain/get_info \\\n  --header 'content-type: application/x-www-form-urlencoded; charset=UTF-8'\n")),(0,r.kt)("p",null,"You should receive the following JSON Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n   "server_version":"448287d5",\n   "chain_id":"cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",\n   "head_block_num":1937,\n   "last_irreversible_block_num":1936,\n   "last_irreversible_block_id":"000007905e94a4406ef34a227cf815154ac6886bf54deaa2d35db606cb4b667d",\n   "head_block_id":"00000791a899e1751e60a13b77817f7243496cdd68010cd84505023200fd9e8a",\n   "head_block_time":"2019-07-16T21:43:19.500",\n   "head_block_producer":"eosio",\n   "virtual_block_cpu_limit":1384557,\n   "virtual_block_net_limit":7271761,\n   "block_cpu_limit":199900,\n   "block_net_limit":1048576,\n   "server_version_string":"v1.7.3"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("strong",null,"Tip:"),' Notice the "head_block_producer":"eosio" parameter. Locally, ',(0,r.kt)("strong",null,"eosio"),' is the system account. If you make a request to the WAX mainnet API, it would return an actual block producer (e.g., "head_block_producer": "strongblock1").'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nodeos")," must be running to call this endpoint. If not, you'll receive the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl: (7) Failed to connect to 127.0.0.1 port 8888: Connection refused\n")),(0,r.kt)("h2",{id:"additional-information"},"Additional Information"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/rpc_api"},"WAX RPC API")," for more information."))}u.isMDXComponent=!0}}]);