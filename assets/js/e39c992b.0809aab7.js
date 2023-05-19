"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[5866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Transfer atomicassets NFTs",nav_order:42,layout:"default",parent:"How-To AtomicAssets",grand_parent:"Tutorials",has_children:!1,"lang-ref":"Transfer atomicassets NFTs",lang:"en"},s=void 0,i={unversionedId:"tutorials/howto_atomicassets/transfer_nft",id:"tutorials/howto_atomicassets/transfer_nft",title:"Transfer atomicassets NFTs",description:'Among the attributes of an NFT, as we have seen in the previous document, we can find the "owner" attribute, which specifies who is the current owner of the NFT.',source:"@site/docs/tutorials/howto_atomicassets/transfer_nft.md",sourceDirName:"tutorials/howto_atomicassets",slug:"/tutorials/howto_atomicassets/transfer_nft",permalink:"/waxdevelopers_test/docs/tutorials/howto_atomicassets/transfer_nft",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/tutorials/howto_atomicassets/transfer_nft.md",tags:[],version:"current",frontMatter:{title:"Transfer atomicassets NFTs",nav_order:42,layout:"default",parent:"How-To AtomicAssets",grand_parent:"Tutorials",has_children:!1,"lang-ref":"Transfer atomicassets NFTs",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Managing AA Templates",permalink:"/waxdevelopers_test/docs/tutorials/howto_atomicassets/templates_js"},next:{title:"How to explore WAX Blockchain",permalink:"/waxdevelopers_test/docs/tutorials/howto_blockexplorer"}},c={},l=[],u={toc:l},f="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(f,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Among the attributes of an NFT, as we have seen in the previous document, we can find the "owner" attribute, which specifies who is the current owner of the NFT.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"owner": "arpegiator21",\n')),(0,a.kt)("p",null,"Transferring an NFT from one user account to another is a matter of changing the value of that attribute to the name of the recipient account. To do this, we can make use of an action of the smart contract atomicassets that, in addition, allows us to make the transaction of multiple NFTs simultaneously, as long as it is with the same recipient."),(0,a.kt)("p",null,'To do so, we will call the "transfer" action of the smart contract atomicassets'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AtomicAsssets transfer",src:n(6868).Z,width:"1048",height:"791"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"from: Originating account and current owner of the NFT. Must sign the transaction."),(0,a.kt)("li",{parentName:"ul"},"to: Destination account."),(0,a.kt)("li",{parentName:"ul"},"asset_ids: Array of IDs of NFTs to be transferred."),(0,a.kt)("li",{parentName:"ul"},"memo: Message attached to the transaction.")),(0,a.kt)("p",null,"Prepare the data for the transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const from = 'arpegiator21';\nconst to = 'waxarena3dk1';\nasset_ids = [1099532298240];\nmemo = 'deposit';\n\n(async() => {\n    const result = await transferNft(\n        from,\n        to,\n        asset_ids,\n        memo\n    );\n    console.log(result);\n})();\n")),(0,a.kt)("p",null,"Call to action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Transfer NFT\n */\nconst transferNft = async (from, to, asset_ids, memo) => {\n  try {\n    const result = await apiRpc.transact(\n      {\n        actions: [\n          {\n            account: "atomicassets",\n            name: "transfer",\n            authorization: [\n              {\n                actor: from,\n                permission: "active",\n              },\n            ],\n            data: {\n              from: from,\n              to: to,\n              asset_ids: asset_ids,\n              memo: memo\n            },\n          },\n        ],\n      }, TAPOS\n    );\n    return result;\n  } catch (error) {\n    console.log(error);\n  }\n}\n')),(0,a.kt)("p",null,"If no error has occurred we will get a result with the transaction ID among other data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  transaction_id: '79c4a2c191a2ad3df46897887c34f156aa90b5d7df4a7192fda6386f7d94f70c',\n  processed: {\n    id: '79c4a2c191a2ad3df46897887c34f156aa90b5d7df4a7192fda6386f7d94f70c',\n    block_num: 157433271,\n    block_time: '2022-06-07T09:29:22.500',\n    producer_block_id: null,\n    receipt: { status: 'executed', cpu_usage_us: 4636, net_usage_words: 16 },\n    elapsed: 4636,\n    net_usage: 128,\n    scheduled: false,\n    action_traces: [ [Object] ],\n    account_ram_delta: null,\n    except: null,\n    error_code: null\n  }\n}\n")))}p.isMDXComponent=!0},6868:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aa_transfer-e2e50680b8f6410f8948ed7a13744768.png"}}]);