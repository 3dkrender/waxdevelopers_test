"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[7640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"WAX Contract Development Toolkit",layout:"default",nav_order:50,parent:"dApp Development",has_children:!0,"lang-ref":"WAX Contract Development Toolkit",lang:"en"},i=void 0,s={unversionedId:"dapp-development/wax-cdt/index",id:"dapp-development/wax-cdt/index",title:"WAX Contract Development Toolkit",description:"The WAX Contract Development Toolkit (WAX-CDT) includes a C/C++ API and a Clang based set of tools used to build and deploy your smart contracts.",source:"@site/docs/dapp-development/wax-cdt/index.md",sourceDirName:"dapp-development/wax-cdt",slug:"/dapp-development/wax-cdt/",permalink:"/waxdevelopers_test/docs/dapp-development/wax-cdt/",draft:!1,editUrl:"https://github.com/3dkrender/waxdeveloper_test/tree/main/docs/dapp-development/wax-cdt/index.md",tags:[],version:"current",frontMatter:{title:"WAX Contract Development Toolkit",layout:"default",nav_order:50,parent:"dApp Development",has_children:!0,"lang-ref":"WAX Contract Development Toolkit",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Verify Your Installation",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/blockchain_verify"},next:{title:"WAX-CDT Build Tools",permalink:"/waxdevelopers_test/docs/dapp-development/wax-cdt/cdt_cpp"}},l={},c=[{value:"What&#39;s Included",id:"whats-included",level:2},{value:"How it Works",id:"how-it-works",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-cdt",target:"_blank"},"WAX Contract Development Toolkit (WAX-CDT)")," includes a C/C++ API and a ",(0,o.kt)("a",{href:"https://clang.llvm.org/",target:"_blank"},"Clang")," based set of tools used to build and deploy your smart contracts."),(0,o.kt)("p",null,"WAX-CDT tools are included in the ",(0,o.kt)("strong",{parentName:"p"},"waxteam/dev")," Docker image, and we also provide a standalone ",(0,o.kt)("strong",{parentName:"p"},"waxteam/cdt")," Docker image. To start an interactive WAX-CDT container, you can use the following commands:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"shell run -it --name waxcdt -v /var/share/wax:/wax waxteam/cdt bash")),(0,o.kt)("p",null,"Refer to our ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapp-development/docker-setup/"},"Docker Quickstart")," for more information."),(0,o.kt)("p",null,"If you'd like to access our sample contracts and scripts from your local drive or have a need to install WAX-CDT instead of using Docker, you can use this guide to download and optionally build the WAX-CDT source code."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("strong",null,"Important:")," At this time, pre-compiled packages are not available. Support is ",(0,o.kt)("strong",null,"not")," available when you build WAX-CDT from source."),(0,o.kt)("h2",{id:"whats-included"},"What's Included"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/cdt_api"},"C/C++ API library")," to communicate with the WAX Blockchain"),(0,o.kt)("li",{parentName:"ul"},"Sample smart contracts to jumpstart your dApp development"),(0,o.kt)("li",{parentName:"ul"},"Tools to create new smart contract templates "),(0,o.kt)("li",{parentName:"ul"},"CMake scripts and tools to build optimized, high-performance WASM files"),(0,o.kt)("li",{parentName:"ul"},"Support for Ricardian files")),(0,o.kt)("p",null,"WAX-CDT includes various ",(0,o.kt)("strong",{parentName:"p"},"eosio")," commands, built around the ",(0,o.kt)("a",{href:"https://clang.llvm.org/",target:"_blank"},"Clang")," front-end and tooling infrastructure. This collection includes various tools to compile your smart contracts and create smart contract templates. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/cdt_options"},"WAX-CDT Options")," for a list of tools and parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sample contracts and customizable ",(0,o.kt)("strong",{parentName:"li"},"make")," scripts to automatically generate WASM and ABI files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://clang.llvm.org/",target:"_blank"},"Clang")," based tools , including - **eosio-cpp:** C++ WebAssembly Compiler - **eosio-ld:** WebAssembly Linker - **eosio-abigen:** C++ ABI Generator")),(0,o.kt)("h2",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"When you're ready to deploy your smart contract to your local development environment or the WAX mainnet, you can use the ",(0,o.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-cdt",target:"_blank"},"WAX Contract Development Toolkit (WAX-CDT)")," to convert your contract to a WebAssembly (WASM) file. You can also use WAX-CDT to create an Application Binary Interface (ABI) file that includes ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/ricardian_contract"},"Ricardian Contracts")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/ricardian_clause"},"Ricardian Clauses"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"WebAssembly (WASM) Files:")," A WASM file is a compact, binary format of your C++ smart contract, optimized for speed and web performance. The WAX Blockchain uses this file to execute the actions defined in your smart contract. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Application Binary Interface (ABI) Files:")," An ABI file is a JSON description of your smart contract's structures, types, actions, tables, and other contract definitions. This allows developers and client interfaces to easily interpret your contract's functionality. "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'### Example ABI\nThis example includes a Ricardian contract for the "hi" action and a Ricardian clause for the contract.\n\n```json\n{\n    "____comment": "This file was generated with eosio-abigen. DO NOT EDIT Fri Jul 19 13:36:50 2019",\n    "version": "eosio::abi/1.1",\n    "structs": [\n        {\n            "name": "hi",\n            "base": "",\n            "fields": [\n                {\n                    "name": "user",\n                    "type": "name"\n                }\n            ]\n        }\n    ],\n    "types": [],\n    "actions": [\n        {\n            "name": "hi",\n            "type": "hi",\n            "ricardian_contract": "### Parameters\\nInput parameters:\\n\\n* `user` (string to include in the output)\\n\\nImplied parameters: \\n\\n* `account_name` (name of the party invoking and signing the contract)\\n\\n### Intent\\nINTENT. The intention of the author and the invoker of this contract is to print output. It shall have no other effect.\\n\\n### Term\\nTERM. This Contract expires at the conclusion of code execution."\n        }\n    ],\n    "tables": [],\n    "ricardian_clauses": [\n        {\n            "id": "Warranty",\n            "body": "The invoker of the contract action shall uphold its Obligations under this Contract in a timely and workmanlike manner, using knowledge and recommendations for performing the services which meet generally acceptable standards set forth by EOS.IO Blockchain Block Producers."\n        },\n        {\n            "id": "Default",\n            "body": "The occurrence of any of the following shall constitute a material default under this Contract:"\n        },\n        {\n            "id": "Remedies",\n            "body": "In addition to any and all other rights a party may have available according to law, if a party defaults by failing to substantially perform any provision, term or condition of this Contract, the other party may terminate the Contract by providing written notice to the defaulting party. This notice shall describe with sufficient detail the nature of the default. The party receiving such notice shall promptly be removed from being a Block Producer and this Contract shall be automatically terminated."\n        },\n        {\n            "id": "ForceMajeure",\n            "body": "If performance of this Contract or any obligation under this Contract is prevented, restricted, or interfered with by causes beyond either party\'s reasonable control (\\"Force Majeure\\"), and if the party unable to carry out its obligations gives the other party prompt written notice of such event, then the obligations of the party invoking this provision shall be suspended to the extent necessary by such event. The term Force Majeure shall include, without limitation, acts of God, fire, explosion, vandalism, storm or other similar occurrence, orders or acts of military or civil authority, or by national emergencies, insurrections, riots, or wars, or strikes, lock-outs, work stoppages, or supplier failures. The excused party shall use reasonable efforts under the circumstances to avoid or remove such causes of non-performance and shall proceed to perform with reasonable dispatch whenever such causes are removed or ceased. An act or omission shall be deemed within the reasonable control of a party if committed, omitted, or caused by such party, or its employees, officers, agents, or affiliates."\n        },\n        {\n            "id": "DisputeResolution",\n            "body": "Any controversies or disputes arising out of or relating to this Contract will be resolved by binding arbitration under the default rules set forth by the EOS.IO Blockchain. The arbitrator\'s award will be final, and judgment may be entered upon it by any court having proper jurisdiction."\n        },\n        {\n            "id": "Agreement",\n            "body": "This Contract contains the entire agreement of the parties, and there are no other promises or conditions in any other agreement whether oral or written concerning the subject matter of this Contract. This Contract supersedes any prior written or oral agreements between the parties."\n        },\n        {\n            "id": "Severability",\n            "body": "If any provision of this Contract will be held to be invalid or unenforceable for any reason, the remaining provisions will continue to be valid and enforceable. If a court finds that any provision of this Contract is invalid or unenforceable, but that by limiting such provision it would become valid and enforceable, then such provision will be deemed to be written, construed, and enforced as so limited."\n        },\n        {\n            "id": "Amendment",\n            "body": "This Contract may be modified or amended in writing by mutual agreement between the parties, if the writing is signed by the party obligated under the amendment."\n        },\n        {\n            "id": "GoverningLaw",\n            "body": "This Contract shall be construed in accordance with the Maxims of Equity."\n        },\n        {\n            "id": "Notice",\n            "body": "Any notice or communication required or permitted under this Contract shall be sufficiently given if delivered to a verifiable email address or to such other email address as one party may have publicly furnished in writing, or published on a broadcast contract provided by this blockchain for purposes of providing notices of this type."\n        },\n        {\n            "id": "WaiverOfContractualRight",\n            "body": "The failure of either party to enforce any provision of this Contract shall not be construed as a waiver or limitation of that party\'s right to subsequently enforce and compel strict compliance with every provision of this Contract."\n        },\n        {\n            "id": "ArbitratorsFeesToPrevailingParty",\n            "body": "In any action arising hereunder or any separate action pertaining to the validity of this Agreement, both sides shall pay half the initial cost of arbitration, and the prevailing party shall be awarded reasonable arbitrator\'s fees and costs."\n        },\n        {\n            "id": "ConstructionAndInterpretation",\n            "body": "The rule requiring construction or interpretation against the drafter is waived. The document shall be deemed as if it were drafted by both parties in a mutual effort."\n        },\n        {\n            "id": "InWitnessWhereof",\n            "body": "In witness whereof, the parties hereto have caused this Agreement to be executed by themselves or their duly authorized representatives as of the date of execution, and authorized as proven by the cryptographic signature on the transaction that invokes this contract."\n        }\n    ],\n    "variants": [],\n    "abi_extensions": []\n}\n```\n')))}u.isMDXComponent=!0}}]);