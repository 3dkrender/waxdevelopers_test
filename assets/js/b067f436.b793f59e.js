"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[7295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(f,s(s({ref:t},h),{},{components:n})):r.createElement(f,s({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"How to explore WAX Blockchain",layout:"default",nav_order:97,parent:"Tutorials","lang-ref":"How to explore WAX Blockchain",lang:"en"},s="How to explore WAX Blockchain block by block at a low level (Node.JS)",i={unversionedId:"tutorials/howto_blockexplorer",id:"tutorials/howto_blockexplorer",title:"How to explore WAX Blockchain",description:"Introduction",source:"@site/docs/tutorials/howto_blockexplorer.md",sourceDirName:"tutorials",slug:"/tutorials/howto_blockexplorer",permalink:"/waxdevelopers_test/docs/tutorials/howto_blockexplorer",draft:!1,editUrl:"https://github.com/3dkrender/waxdeveloper_test/tree/main/docs/tutorials/howto_blockexplorer.md",tags:[],version:"current",frontMatter:{title:"How to explore WAX Blockchain",layout:"default",nav_order:97,parent:"Tutorials","lang-ref":"How to explore WAX Blockchain",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Transfer atomicassets NFTs",permalink:"/waxdevelopers_test/docs/tutorials/howto_atomicassets/transfer_nft"},next:{title:"How-To SimpleAssets",permalink:"/waxdevelopers_test/docs/tutorials/howto_simpleassets/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Structure",id:"structure",level:2},{value:"Starting the engine",id:"starting-the-engine",level:2},{value:"processTrace",id:"processtrace",level:2},{value:"Example code",id:"example-code",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-explore-wax-blockchain-block-by-block-at-a-low-level-nodejs"},"How to explore WAX Blockchain block by block at a low level (Node.JS)"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"One of the key advantages of the blockchain is that all the information is stored in the blocks in an unalterable and reliable way so that it can be consulted at any time. However, performing these queries is often not easy. For this reason, historical data storage services have been developed to facilitate this task, such as the SHIP or Hyperion APIs. Some of these services are limited to the actions of a smart contract or a specific and reduced group of them, such as the AtomicAssets API."),(0,o.kt)("p",null,"Most of these query services consist of two distinct components."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Filler: In charge of exploring the blockchain to extract the information, process it and store it in the database."),(0,o.kt)("li",{parentName:"ul"},"API: Responsible for handling data queries from users or applications. These queries are made on the database already generated and designed specifically for the desired type of query.")),(0,o.kt)("p",null,'In this tutorial we are going to develop the core of a "filler". We will see a design that, although functional, will have to be adapted for each specific use. The type of data to be obtained and how to manage it is beyond the scope of this tutorial.'),(0,o.kt)("p",null,'The "Filler" engine must connect to a SHIP node of the blockchain in order to receive the blocks that it will later evaluate. This connection will be made using the "eosio-statereceiver" library created by EOSDAC.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/eosdac/eosio-statereceiver"},"https://github.com/eosdac/eosio-statereceiver")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("strong",null,"Note"),': For this tutorial, the library has been modified to update it to "enf-eosjs", the new JavaScript library for Antelope blockchains that replaces the obsolete "eosjs". For that reason, in the example repository, the files "connection.js" and "statereceiver.js" of that library have been included directly as part of the code.'),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"The engine will consist of two components: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Traces processor: It receives from the statereceiver the traces contained in each block received from the SHIP. We will be able to make a first filtering before translating the serialised information of the actions and adding this information to the data stack that will be processed by the next component."),(0,o.kt)("li",{parentName:"ul"},"Action processor: This component operates independently and its function will be to process the already deserialised actions. From here we can send the filtered and processed information to the database or use it for the function that is the object of the project we are designing.")),(0,o.kt)("h2",{id:"starting-the-engine"},"Starting the engine"),(0,o.kt)("p",null,"The program will start from a function that will create the connection to the ",(0,o.kt)("em",{parentName:"p"},"statereceiver")," and register our data processor to receive the information obtained from the blockchain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const run = async () => {\n\n  /**\n   * Set stateReceiver\n  */\n const sr = new StateReceiver({\n   startBlock: 0,  \n   endBlock: 0xffffffff,\n   mode: 0,\n   config: {\n     eos: {\n       wsEndpoint: process.env.WS,\n      },\n    },\n  irreversibleOnly: false,\n  verbose: false,\n  });\n\n  /**\n   * Create handlers\n   */\n  const trace_handler = new TraceHandler();\n  // const block_handler = new BlockHandler();\n  // const delta_handler = new DeltaHandler();\n  // [...]\n\n  /**\n   * Register handlers\n   */\n  sr.registerTraceHandler(trace_handler);\n  // sr.registerBlockHandler(block_handler);\n  // sr.registerDeltaHandler(delta_handler);\n  // [...]\n\n  /**\n   * Start stateReceiver\n   */\n  sr.start();\n};\n")),(0,o.kt)("p",null,'The "trace_handler" object contains our filler engine. With this sentence we link the "statereceiver" module to the function "trace_handler.processTrace" of our engine.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"sr.registerTraceHandler(trace_handler);\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("strong",null,"Note"),": StateReceiver allows us to create other types of handles to receive data. We can create handles to process blocks, traces or deltas, for example."),(0,o.kt)("h2",{id:"processtrace"},"processTrace"),(0,o.kt)("p",null,"To capture the statereceiver data we must have to create and register this function. Its declaration will be of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async processTrace(block_num, traces, block_timestamp) {...}\n")),(0,o.kt)("p",null,"It receives the number of the block to manage, an object with the traces of the block and the time-stamp of the block. Our job now is to go through the traces to extract and deserialise the ones we are interested in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'async processTrace(block_num, traces, block_timestamp) {\n  // Parse traces\n  for (const trace of traces) {\n    if (trace[0] === "transaction_trace_v0") {\n      const tx_id = trace[1].id;\n      for (const action of trace[1].action_traces) {\n        if (action[0] === "action_trace_v0") {\n          try {\n            const actionDeser = await apiRpc.deserializeActions([\n              action[1].act,\n            ]);\n            // Add desereialize data to actions buffer\n            this.queue.push({\n              data: actionDeser,\n              block_num: block_num,\n              block_timestamp: block_timestamp,\n              tx_id: tx_id,\n              retries: 0,\n            });\n          } catch (error) {\n            console.log("Deserialized error.", error);\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,'In this example we have not made any filter. All actions contained in the block are deserialised and added to the pool to be managed by our "processQueue" function.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async processQueue() {\n  // No actions or this is still processing? exit\n  if (!this.queue.length || this.processingQueue) {\n    return;\n  }\n\n  this.processingQueue = true;\n  const itemProcess = this.queue.pop();\n  const action = itemProcess.data[0];\n  let retries = itemProcess.retries;\n\n  // Too much retries? drop action and exit\n  if (retries > 20) {\n    console.log(\"Exceeded retries!\");\n    return;\n  }\n\n  try {\n\n    /**\n     * process data here\n     */\n    // **************************************************\n    console.log('Action', JSON.stringify(action), '\\n')\n    // ***************************************************\n\n    this.processingQueue = false;\n  } catch (error) {\n    // Error? retry\n    console.log(error);\n    setTimeout(() => {\n      retries++;\n      this.queue.push(item);\n    }, 1000 * retries);\n  }\n}\n")),(0,o.kt)("p",null,"This function shall be executed cyclically. It extracts data from the pool, as long as it exists, and processes it. This is where we can perform the final actions with the information received. For example, we capture the transactions of more than 10000 WAX to show them in the console, or send them to the database (see attached code example)."),(0,o.kt)("p",null,"The routine runs in a constant loop so we must block it while it is processing data. To force cyclic processing we can use a ",(0,o.kt)("em",{parentName:"p"},"setInterval")," statement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"This.processingQueue = true\n")),(0,o.kt)("p",null,"At the start of each cycle we check if Queue has data to process or if the processor is available."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("p",null,"A complete example is available on Github:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/3dkrender/WAXCrawler"},"https://github.com/3dkrender/WAXCrawler")),(0,o.kt)("p",null,"In this example we will crawl the blockchain to locate those transactions over 10000 WAX. We use a database to store the number of the first block from where we want to start crawling the blockchain and to store the transactions that meet the condition."))}d.isMDXComponent=!0}}]);