"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[1702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"WAX-RPC API",nav_order:20,layout:"default",has_children:!1,parent:"WAX API Reference","lang-ref":"WAX-RPC API",lang:"en"},i=void 0,l={unversionedId:"api-reference/rpc_api",id:"api-reference/rpc_api",title:"WAX-RPC API",description:"The WAX Blockchain RPC API includes public endpoints used to get block information, block history, node information, and node producer information. Exposed through nodeos plugins, this API is available on the WAX mainnet and your local development environment.",source:"@site/docs/api-reference/rpc_api.md",sourceDirName:"api-reference",slug:"/api-reference/rpc_api",permalink:"/waxdevelopers_test/docs/api-reference/rpc_api",draft:!1,editUrl:"https://github.com/3dkrender/waxdeveloper_test/tree/main/docs/api-reference/rpc_api.md",tags:[],version:"current",frontMatter:{title:"WAX-RPC API",nav_order:20,layout:"default",has_children:!1,parent:"WAX API Reference","lang-ref":"WAX-RPC API",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"dfuse Example",permalink:"/waxdevelopers_test/docs/api-reference/dfuse/dfuse_example"},next:{title:"Atomic Assets",permalink:"/waxdevelopers_test/docs/atomic-assets/"}},p={},s=[{value:"Additional Information and Third-Party Tools",id:"additional-information-and-third-party-tools",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The WAX Blockchain RPC API includes public endpoints used to get block information, block history, node information, and node producer information. Exposed through ",(0,a.kt)("strong",{parentName:"p"},"nodeos")," plugins, this API is available on the WAX mainnet and your local development environment. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("strong",null,"Note:")," If you're making local requests, ",(0,a.kt)("strong",null,"nodeos")," must be running."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Environment"),(0,a.kt)("th",{parentName:"tr",align:null},"URL"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WAX mainnet"),(0,a.kt)("td",{parentName:"tr",align:null},"Check node availability at ",(0,a.kt)("a",{parentName:"td",href:"https://validate.eosnation.io/wax/reports/endpoints.html"},"https://validate.eosnation.io/wax/reports/endpoints.html"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Local Testnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:8888"},"http://127.0.0.1:8888"))))),(0,a.kt)("p",null,"You can make API requests directly to blockchain endpoints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl --request POST \\\n  --url http://127.0.0.1:8888/v1/chain/get_info \\\n  --header 'content-type: application/x-www-form-urlencoded; charset=UTF-8'\n")),(0,a.kt)("p",null,"You can also call these endpoints using ",(0,a.kt)("strong",{parentName:"p"},"cleos")," commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cleos -u [api-url] get info\n")),(0,a.kt)("h2",{id:"additional-information-and-third-party-tools"},"Additional Information and Third-Party Tools"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{href:"https://docs.eosnetwork.com/leap/latest/nodeos/rpc_apis/",target:"_blank"},"RPC API documentation ")," for a list of API calls."),(0,a.kt)("a",{href:"https://github.com/eosnetworkfoundation/mandel-eosjs",target:"_blank"},"eosjs")," is a javascript API SDK that's used to easily communicate with the WAX RPC API. To simplify development, you can use this tool to access blockchain endpoints.")}u.isMDXComponent=!0}}]);