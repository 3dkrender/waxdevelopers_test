"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[5592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Working with WAX Software Files and Folders",nav_order:149,layout:"default",parent:"WAX Infrastructure Guides","lang-ref":"Working with WAX Software Files and Folders",lang:"en"},i=void 0,l={unversionedId:"wax-infrastructure/working-with-wax-software-files",id:"wax-infrastructure/working-with-wax-software-files",title:"Working with WAX Software Files and Folders",description:"Many of our guides have worked with configuring and deploying WAX software, however it did occur to me that I might not have explained the file and folder functions. In particular some of the nuances with node types and recovering or successfully syncing to the chain head block.",source:"@site/docs/wax-infrastructure/working-with-wax-software-files.md",sourceDirName:"wax-infrastructure",slug:"/wax-infrastructure/working-with-wax-software-files",permalink:"/waxdevelopers_test/docs/wax-infrastructure/working-with-wax-software-files",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/wax-infrastructure/working-with-wax-software-files.md",tags:[],version:"current",frontMatter:{title:"Working with WAX Software Files and Folders",nav_order:149,layout:"default",parent:"WAX Infrastructure Guides","lang-ref":"Working with WAX Software Files and Folders",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Set Up a WAX Testnet Node",permalink:"/waxdevelopers_test/docs/wax-infrastructure/wax-testnet-node"},next:{title:"WAX API Reference",permalink:"/waxdevelopers_test/docs/api-reference/"}},s={},p=[{value:"Types of Node",id:"types-of-node",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Many of our guides have worked with configuring and deploying WAX software, however it did occur to me that I might not have explained the file and folder functions. In particular some of the nuances with node types and recovering or successfully syncing to the chain head block."),(0,a.kt)("p",null,"This guide will go over the functions of the WAX Software files and folders, the types of nodes determined by the data they contain and the nuances of successfully starting or recovering a node type."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This article has been updated to incorporate the")," ",(0,a.kt)("a",{parentName:"p",href:"https://antelope.io/"},(0,a.kt)("em",{parentName:"a"},"Antelope"))," ",(0,a.kt)("em",{parentName:"p"},"Leap software build process.")),(0,a.kt)("h1",{id:"working-with-wax-software-files-and-folders"},"Working with WAX Software Files and Folders"),(0,a.kt)("p",null,"The WAX Software  ",(0,a.kt)("inlineCode",{parentName:"p"},"data-dir"),"  structure by default is made up of 5 directories:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/state  \n/blocks   \n/state-history   \n/snapshots  \n/protocol_features\n")),(0,a.kt)("p",null,"and 2 files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"config.ini  \ngenesis.json\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"/state folder")," contains the  ",(0,a.kt)("inlineCode",{parentName:"p"},"shared_memory.bin"),"  file, which is the thin provisioned WAX network memory mapped file also called the state database. It is this file that is recovered when starting from a snapshot."),(0,a.kt)("p",null,"The  ",(0,a.kt)("strong",{parentName:"p"},"/blocks"),"  folder contains the  ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.log"),"  file, which is a local copy of all immutable blocks of the WAX chain stored on the node. It also contains a  ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.index"),"  file, which is an index of the ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.log")," file used to find the location of a specific block number quickly."),(0,a.kt)("p",null,"The  ",(0,a.kt)("strong",{parentName:"p"},"/state-history"),"  contains the  ",(0,a.kt)("inlineCode",{parentName:"p"},"chain_state_history.log"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"chain_state_history.index"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"trace_history.log"),"and  ",(0,a.kt)("inlineCode",{parentName:"p"},"trace_history.index"),"files. These files capture historical data about the blockchain state (WAX Mainnet in this case) and stores this data in the files making them externally readable in a flat file format."),(0,a.kt)("p",null,"The  ",(0,a.kt)("strong",{parentName:"p"},"/snapshots"),"  folder is the default location where nodeos saves snapshot files."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"/protocol_features"),"  folder contains network feature .json configuration files used for starting a new network or making a significant feature changes to the existing chain. Typically this wouldn't be used by WAX Guilds on the Mainnet."),(0,a.kt)("p",null,"The  ",(0,a.kt)("strong",{parentName:"p"},"config.ini"),"  file contains the nodeos configuration used when running the nodeos binary."),(0,a.kt)("p",null,"The  ",(0,a.kt)("strong",{parentName:"p"},"genesis.json"),"  file contains the initial state parameters required by every new starting node on the WAX Mainnet."),(0,a.kt)("h2",{id:"types-of-node"},"Types of Node"),(0,a.kt)("p",null,"Broadly there are 3 node types provided by the WAX Software  ",(0,a.kt)("strong",{parentName:"p"},"producer/query/seed"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"producer: Node with signing key"),(0,a.kt)("li",{parentName:"ul"},"query: Node that provides HTTP(S) APIs to the public"),(0,a.kt)("li",{parentName:"ul"},"seed: Node that provides P2P access to the public")),(0,a.kt)("p",null,"However the levels of functionality are also determined by the data the node contains. For example: It is possible to have a query node that doesn\u2019t have a full  ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.index"),"  for block number lookup, it is also possible to have a seed node that doesn\u2019t have all blocks in the  ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.log"),"  and it is also possible to have a state-history data base that wasn\u2019t built from the first block of the network. All these examples mean that any external query or connection to this partial node will not have the Full Node / Blockchain data presented."),(0,a.kt)("p",null,"With this in mind depending on your use case you may choose a partial node to fulfil the functionality you require, however for public facing query and seed nodes it is most desirable to ensure you have full functionality."),(0,a.kt)("p",null,"The construct of a Full Node and Full State-History node are explained below:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Full Node :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete from block 1  ",(0,a.kt)("inlineCode",{parentName:"li"},"blocks.log"),"  (Needs to be sync\u2019d from peers from genesis or copied from another node)"),(0,a.kt)("li",{parentName:"ul"},"Complete  ",(0,a.kt)("inlineCode",{parentName:"li"},"blocks.index"),"  (Will be built automatically from the existing available  ",(0,a.kt)("inlineCode",{parentName:"li"},"blocks.log"),")"),(0,a.kt)("li",{parentName:"ul"},"Having both the above will enable block lookups and provide a full blocks peer service from block 1."),(0,a.kt)("li",{parentName:"ul"},"Current  ",(0,a.kt)("inlineCode",{parentName:"li"},"shared_memory.bin"),"  (Will be created automatically when syncing from genesis, can be copied from another node or can be recovered with a  ",(0,a.kt)("a",{parentName:"li",href:"https://link.medium.com/YZXqTwk5Gmb"},"snapshot"),")"),(0,a.kt)("li",{parentName:"ul"},"It is important that when recovering from a  ",(0,a.kt)("a",{parentName:"li",href:"https://link.medium.com/YZXqTwk5Gmb"},"snapshot"),"  that a  ",(0,a.kt)("strong",{parentName:"li"},"snap from a lower block number"),"  is used than what is available in the  ",(0,a.kt)("inlineCode",{parentName:"li"},"blocks.log"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Full State-History Node:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Must contain the same complete  ",(0,a.kt)("inlineCode",{parentName:"li"},"blocks.log"),"  ,  ",(0,a.kt)("inlineCode",{parentName:"li"},"block.index"),"  and current  ",(0,a.kt)("inlineCode",{parentName:"li"},"shared_memory.bin"),"  as with a Full Node."),(0,a.kt)("li",{parentName:"ul"},"However as with the  ",(0,a.kt)("inlineCode",{parentName:"li"},"blocks.log"),"  the  ",(0,a.kt)("inlineCode",{parentName:"li"},"/state-history"),"  files need to be  ",(0,a.kt)("strong",{parentName:"li"},"complete and built from block 1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/state-history"),"  files can be copied from another node or must be built from either a replay or re-sync from block 1."),(0,a.kt)("li",{parentName:"ul"},"It is important that when recovering from a  ",(0,a.kt)("a",{parentName:"li",href:"https://link.medium.com/YZXqTwk5Gmb"},"snapshot"),"  that a  ",(0,a.kt)("strong",{parentName:"li"},"snap from a lower block number"),"  is used, than what is available in the  ",(0,a.kt)("inlineCode",{parentName:"li"},"blocks.log"),"  as well as what is available in the  ",(0,a.kt)("inlineCode",{parentName:"li"},"/state-history"),"  files.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Checking Tools")),(0,a.kt)("p",null,"WAX software has a great tool for managing the  ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.log"),"  called  ",(0,a.kt)("inlineCode",{parentName:"p"},"eosio-blocklog"),"  this binary is created when building."),(0,a.kt)("p",null,"Do the following to query current  ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.log"),"  blocks and  ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.index"),"  for currency and any issues:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> ./eosio-blocklog --blocks-dir /home/eosphere/datavolume/blocks --smoke-test\n\nSmoke test of blocks.log and blocks.index in directory "/home/eosphere/datavolume/blocks"\ninfo  2022-01-10T04:59:07.720 eosio-blo block_log.cpp:1081            trim_data            ] block log version= 3\ninfo  2022-01-10T04:59:07.724 eosio-blo block_log.cpp:1133            trim_data            ] first block= 1\ninfo  2022-01-10T04:59:07.724 eosio-blo block_log.cpp:1134            trim_data            ] last block= 160670840\nblocks.log and blocks.index agree on number of blocks\n')),(0,a.kt)("p",null,"Also if you have any corruption due to an unclean shutdown of the node, it is possible to cleanly trim the end of the current  ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks.log"),"  ."),(0,a.kt)("p",null,"For example you can trim to block 160670000 like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./eosio-blocklog --blocks-dir /home/eosphere/datavolume/blocks --trim-blocklog --last 160670000\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"These ",(0,a.kt)("strong",{parentName:"p"},"WAX Developer Technical Guides")," are created using source material from the ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/eosphere/wax-technical-how-to/home"},"EOSphere WAX Technical How To Series")),(0,a.kt)("p",null,"Be sure to ask any questions in the  ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/eosphere_io"},"EOSphere Telegram")))}u.isMDXComponent=!0}}]);