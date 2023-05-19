"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[9005],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},c=Object.keys(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,c=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(n),p=a,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||c;return n?o.createElement(h,r(r({ref:e},u),{},{components:n})):o.createElement(h,r({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=n.length,r=new Array(c);r[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:a,r[1]=i;for(var l=2;l<c;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6175:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const c={title:"Managing AA Collections",nav_order:34,layout:"default",parent:"How-To AtomicAssets",grand_parent:"Tutorials",has_children:!1,"lang-ref":"Managing AA Collections",lang:"en"},r=void 0,i={unversionedId:"tutorials/howto_atomicassets/collection_js",id:"tutorials/howto_atomicassets/collection_js",title:"Managing AA Collections",description:"Collections are the main pillar of NFT management. If we want to use the AtomicAssets standard to create our NFTs in WAX blockchain, the first thing we have to do is to create a collection that serves as a container catalogue for all the NFTs (and that are part of the context of that collection).",source:"@site/docs/tutorials/howto_atomicassets/collection_js.md",sourceDirName:"tutorials/howto_atomicassets",slug:"/tutorials/howto_atomicassets/collection_js",permalink:"/waxdevelopers_test/docs/tutorials/howto_atomicassets/collection_js",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/tutorials/howto_atomicassets/collection_js.md",tags:[],version:"current",frontMatter:{title:"Managing AA Collections",nav_order:34,layout:"default",parent:"How-To AtomicAssets",grand_parent:"Tutorials",has_children:!1,"lang-ref":"Managing AA Collections",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"How-To AtomicAssets",permalink:"/waxdevelopers_test/docs/tutorials/howto_atomicassets/"},next:{title:"Collection structure",permalink:"/waxdevelopers_test/docs/tutorials/howto_atomicassets/collection_struct"}},s={},l=[{value:"Collection data definition",id:"collection-data-definition",level:2},{value:"Modify AtomicAssets Collection Data",id:"modify-atomicassets-collection-data",level:2},{value:"Add or Remove Authorized Accounts to AtomicAssets Collection",id:"add-or-remove-authorized-accounts-to-atomicassets-collection",level:2},{value:"Add or Remove Notify Accounts to AtomicAssets Collection",id:"add-or-remove-notify-accounts-to-atomicassets-collection",level:2},{value:"Modifying the market fee for a collection of AtomicAssets NFTs",id:"modifying-the-market-fee-for-a-collection-of-atomicassets-nfts",level:2}],u={toc:l},d="wrapper";function m(t){let{components:e,...c}=t;return(0,a.kt)(d,(0,o.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Collections are the main pillar of NFT management. If we want to use the AtomicAssets standard to create our NFTs in WAX blockchain, the first thing we have to do is to create a collection that serves as a container catalogue for all the NFTs (and that are part of the context of that collection)."),(0,a.kt)("p",null,"It doesn\u2019t matter if our intention is to create a series of NFTs for blockchain video games or to sell art; it is very important that all the NFTs that are related to the project are part of a collection that facilitates their management by us and by users and third-party applications."),(0,a.kt)("p",null,"All the collection creation and management operations can be done from the official AtomicHub interface but, in this series of articles, we are going to explain how we can manage all the necessary operations to create and maintain our collection of NFTs from JavaScrip."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AtomicAsssets Actions",src:n(3254).Z,width:"952",height:"390"})),(0,a.kt)("p",null,"These are the actions we are going to cover in this article:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createcol: Create collection"),(0,a.kt)("li",{parentName:"ul"},"addcolauth: Add authorised account to the collection"),(0,a.kt)("li",{parentName:"ul"},"remcolauth: Remove an authorised account"),(0,a.kt)("li",{parentName:"ul"},"addnotifyacc: Add account that will receive notifications"),(0,a.kt)("li",{parentName:"ul"},"remnotifyacc: Remove an account from the list of notifications"),(0,a.kt)("li",{parentName:"ul"},"setcoldata: Modify collection information"),(0,a.kt)("li",{parentName:"ul"},"setmarketfee: Modify collection fee")),(0,a.kt)("p",null,"First we are going to create the working environment so that we can connect to the blockchain. We must connect to a WAX full API node to be able to send our calls to the AtomicAssets smart contract actions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { Api, JsonRpc } = require("eosjs");\nconst { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig");\nconst fetch = require("node-fetch");\n\nconst signatureProvider = new JsSignatureProvider([PVT_K1_eGgwexxxxxxxxxxxxxxxxxxxxxxxxxxxx]);\n\nconst rpc = new JsonRpc("http://testnet-wax.3dkrender.com", {\n  fetch,\n});\n\nconst apiRpc = new Api({\n  rpc,\n  signatureProvider,\n  textDecoder: new TextDecoder(),\n  textEncoder: new TextEncoder(),\n});\n\nconst TAPOS = {\n  blocksBehind: 3,\n  expireSeconds: 30,\n};\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT"),": This is an example for educational purposes. Never leave the private key exposed on the server. We recommend the client/server pattern in order to hide sensitive data on the backend.\n:::"),(0,a.kt)("p",null,"We will use some test account names. Create your accounts on testnet to do your internship."),(0,a.kt)("h2",{id:"collection-data-definition"},"Collection data definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/*\n Collection definition\n*/\n\n// Collection author\nconst auth = \'arpegiator21\';\n\n// Collection name (eosio name format)\nconst colName = \'arpecol11111\';\n\n// Activate notifications?\nconst notify = true;\n\n// Authorized accounts\nconst authorizedAccs = [\n    \'blenderizerx\',\n    \'nftpacker3dk\',\n    \'atomicdropsx\',\n    \'arpegiator22\'\n];\n\n// Accounts to receive notifications\nconst notifyAccs = [\n    \'arpegiator25\',\n    \'nftpacker3dk\'\n];\n\n// Market fee (5% for example)\nconst marketFee = 0.05;\n\n// Collection description (not all fields)\nconst data = [{\n        "key": "name",\n        "value": ["string", "My great collection"]\n    },\n    {\n        "key": "description",\n        "value": ["string", "A new testing collection"]\n    },\n    {\n        "key": "url",\n        "value": ["string", "https://mysite.url"]\n    },\n    {\n        "key": "img",\n        "value": ["string", "QmRxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]\n    }\n];\n// Create collection\n(async()=> {\n    const result = await createCol(auth, colName, notify, authorizedAccs, notifyAccs, marketFee, data);\n    console.log(result);\n})()\n')),(0,a.kt)("p",null,'And call to action "',(0,a.kt)("em",{parentName:"p"},"createcol"),'":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n *  Create AtomicAssets collection\n */\nconst createCol = async (\n  auth, // Author account\n  name, // Collection name\n  notify, // Allow notify?\n  authorizedAccs, // Array authorized accounts\n  notifyAccs, // Array accounts to notify\n  marketFee, // Market fee\n  data // Collection description.\n) => {\n  try {\n    const result = await apiRpc.transact(\n      {\n        actions: [\n          {\n            account: "atomicassets",\n            name: "createcol",\n            authorization: [\n              {\n                actor: auth,\n                permission: "active",\n              },\n            ],\n            data: {\n              author: auth,\n              collection_name: name,\n              allow_notify: notify,\n              authorized_accounts: authorizedAccs,\n              notify_accounts: notifyAccs,\n              market_fee: marketFee,\n              data: data,\n            },\n          },\n        ],\n      },\n      TAPOS\n    );\n    return result;\n  } catch (error) {\n    console.error(error);\n    return false;\n  }\n};\n')),(0,a.kt)("h2",{id:"modify-atomicassets-collection-data"},"Modify AtomicAssets Collection Data"),(0,a.kt)("p",null,"To modify a NFT collection in AtomicAssets we will use a data structure very similar to the one used to create the collection. The action must be signed by an authorised account in the collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Collection author\nconst auth = \'arpegiator21\';\n\n// Collection name (eosio name format)\nconst colName = \'arpecol11111\';\n\n// New data\nconst data = [\n  {\n    key: "name",\n    value: ["string", "My Great Collection"],\n  },\n  {\n    key: "description",\n    value: ["string", "A new testing collection *edited*"],\n  },\n  {\n    key: "url",\n    value: ["string", "https://mysite.url"],\n  },\n  {\n    key: "img",\n    value: ["string", "QmRVxxxxxxxxxxxxxxxxxxxxxxxxxxx"],\n  },\n  {\n      key: "company",\n      value: ["string", "My Company Name Ltd."],\n  }\n];\n// Call to action\n(async () => {\n  const result = await modifyColData(auth, colName, data);\n  console.log(result);\n})();\n')),(0,a.kt)("p",null,'And call to action "',(0,a.kt)("em",{parentName:"p"},"setcoldata"),'":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Modify data collection\n */\nconst modifyColData = async (\n  auth, // Authorized user\n  colName, // Collection name\n  data // New data collection\n) => {\n  try {\n    const result = await apiRpc.transact(\n      {\n        actions: [\n          {\n            account: "atomicassets",\n            name: "setcoldata",\n            authorization: [\n              {\n                actor: auth,\n                permission: "active",\n              },\n            ],\n            data: {\n              collection_name: colName,\n              data: data,\n            },\n          },\n        ],\n      },\n      TAPOS\n    );\n    return result;\n  } catch (error) {\n    console.error(error);\n    return false;\n  }\n};\n')),(0,a.kt)("h2",{id:"add-or-remove-authorized-accounts-to-atomicassets-collection"},"Add or Remove Authorized Accounts to AtomicAssets Collection"),(0,a.kt)("p",null,'We can add or remove authorised accounts in our collection at any time by using the "addcolauth" or "remcolauth" actions.'),(0,a.kt)("p",null,"The input parameters will be the name of the collection and the account name to add or remove."),(0,a.kt)("p",null,"The action must be signed by an authorised account in the collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Collection author\nconst auth = 'arpegiator21';\n\n// Collection name (eosio name format)\nconst colName = 'arpecol11111';\n\n// New authorized account to add\nconst newAuth = 'arpegiator25';\n\n// Set Action: True -> add / False -> remove\nconst setAction = true;\n\n// Call to action\n(async()=>{\n    const result = await addAuths(auth, colName, newAuth, setAction);\n    console.log(result);\n})();\n")),(0,a.kt)("p",null,'Call to action "',(0,a.kt)("em",{parentName:"p"},"addcolauth"),'" or "',(0,a.kt)("em",{parentName:"p"},"remcolauth"),'" (We use a switch to simplify the example)'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Add or remove authorized accounts\n */\nconst addAuths = async (\n  auth, // Authorized user\n  nameCol, // Colection name\n  setAccount, // New account authorized\n  setAction // Add or remove auth?\n) => {\n  try {\n    let data = {\n      collection_name: nameCol\n    };\n    if (setAction) {\n      data = {\n        ...data,\n        account_to_add: setAccount,\n      };\n    } else {\n      data = {\n        ...data,\n        account_to_remove: setAccount,\n      };\n    }    \n    const result = await apiRpc.transact(\n      {\n        actions: [\n          {\n            account: "atomicassets",\n            name: (setAction) ? "addcolauth" : "remcolauth",\n            authorization: [\n              {\n                actor: auth,\n                permission: "active",\n              },\n            ],\n            data: data,\n          },\n        ],\n      },\n      TAPOS\n    );\n    return result;\n  } catch (error) {\n    console.error(error);\n    return false;\n  }\n};\n')),(0,a.kt)("h2",{id:"add-or-remove-notify-accounts-to-atomicassets-collection"},"Add or Remove Notify Accounts to AtomicAssets Collection"),(0,a.kt)("p",null,'We can add or remove accounts to the notification list through actions very similar to the previous ones; "',(0,a.kt)("em",{parentName:"p"},"addnotifyacc"),'" and "',(0,a.kt)("em",{parentName:"p"},"remnotifyacc"),'".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Add or remove accounts to notify list\n */\nconst notifyAcc = async (\n  auth, // Authorization account\n  colName, // Collection name\n  setAccount, // Name to add or remove\n  setAction // Add or remove from list?\n) => {\n  try {\n    let data = {\n      collection_name: colName,\n    };\n    if (setAction) {\n      data = {\n        ...data,\n        account_to_add: setAccount,\n      };\n    } else {\n      data = {\n        ...data,\n        account_to_remove: setAccount,\n      };\n    }\n    const result = await apiRpc.transact(\n      {\n        actions: [\n          {\n            account: "atomicassets",\n            name: setAction ? "addnotifyacc" : "remnotifyacc",\n            authorization: [\n              {\n                actor: auth,\n                permission: "active",\n              },\n            ],\n            data: data,\n          },\n        ],\n      },\n      TAPOS\n    );\n    return result;\n  } catch (error) {\n    console.log(error);\n    return false;\n  }\n};\n')),(0,a.kt)("h2",{id:"modifying-the-market-fee-for-a-collection-of-atomicassets-nfts"},"Modifying the market fee for a collection of AtomicAssets NFTs"),(0,a.kt)("p",null,"To conclude this section, we will see how we can modify the royalty rate of our collection. This fee will be collected by the NFT markets on the purchase/sale operations of any NFT in our collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Collection author\nconst auth = 'arpegiator21';\n\n// Collection name (eosio name format)\nconst colName = 'arpecol11111';\n\n// New collection fee\nconst marketFee = 0.08;\n\n(async()=>{\n    const result = await setMarketFee(auth, colName, marketFee);\n    console.log(result);\n})();\n")),(0,a.kt)("p",null,"And call to action"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Set / change collection market fee\n */\nconst setMarketFee = async (\n  auth,\n  colName,\n  marketFee\n  ) => {\n    try {\n      const result = await apiRpc.transact(\n        {\n          actions: [\n            {\n              account: "atomicassets",\n              name: "setmarketfee",\n              authorization: [\n                {\n                  actor: auth,\n                  permission: "active",\n                },\n              ],\n              data: {\n                collection_name: colName,\n                market_fee: marketFee\n              },\n            },\n          ],\n        },\n        TAPOS\n      );\n      return result;\n    } catch (error) {\n      console.log(error);\n      return false;\n    }\n};\n')))}m.isMDXComponent=!0},3254:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/atomicassets_actions-91c241ec3552e545d065203ab91ba4c2.png"}}]);