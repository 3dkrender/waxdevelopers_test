"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"WAX-CDT Sample Contracts",layout:"default",nav_order:52,parent:"WAX Contract Development Toolkit",grand_parent:"dApp Development","lang-ref":"WAX-CDT Sample Contracts",lang:"en"},l=void 0,i={unversionedId:"dapp-development/wax-cdt/cdt_use",id:"dapp-development/wax-cdt/cdt_use",title:"WAX-CDT Sample Contracts",description:"WAX-CDT provides a wax-cdt/examples directory that includes the following sample smart contracts:",source:"@site/docs/dapp-development/wax-cdt/cdt_use.md",sourceDirName:"dapp-development/wax-cdt",slug:"/dapp-development/wax-cdt/cdt_use",permalink:"/waxdevelopers_test/docs/dapp-development/wax-cdt/cdt_use",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/dapp-development/wax-cdt/cdt_use.md",tags:[],version:"current",frontMatter:{title:"WAX-CDT Sample Contracts",layout:"default",nav_order:52,parent:"WAX Contract Development Toolkit",grand_parent:"dApp Development","lang-ref":"WAX-CDT Sample Contracts",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Install WAX-CDT",permalink:"/waxdevelopers_test/docs/dapp-development/wax-cdt/cdt_install"},next:{title:"wax-testnet-quickstart",permalink:"/waxdevelopers_test/docs/dapp-development/wax-testnet-quickstart"}},p={},c=[{value:"Compile Hello World",id:"compile-hello-world",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"WAX-CDT provides a ",(0,o.kt)("strong",{parentName:"p"},"wax-cdt/examples")," directory that includes the following sample smart contracts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hello World"),(0,o.kt)("li",{parentName:"ul"},"multi_index Example"),(0,o.kt)("li",{parentName:"ul"},"Inline Transaction Example")),(0,o.kt)("p",null,"Each project includes two ",(0,o.kt)("strong",{parentName:"p"},"CMakeLists.txt")," files: one in the project's root directory, and the other in the projects ",(0,o.kt)("strong",{parentName:"p"},"src")," directory. You can use these files to automatically generate WASM and ABI files for the sample projects."),(0,o.kt)("p",null,"In this tutorial, you'll learn how to use the ",(0,o.kt)("strong",{parentName:"p"},"make")," scripts to build the Hello World example."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("strong",null,"Note:")," These samples were created with **eosio-init** (part of the [WAX-CDT Options](/docs/tools/cdt_options) suite of tools). Refer to [Create a Smart Contract](/docs/dapp-development/wax-cdt/cdt_use.html#compile-hello-world) to customize these scripts for your smart contracts."),(0,o.kt)("h2",{id:"compile-hello-world"},"Compile Hello World"),(0,o.kt)("p",null,"To compile the Hello World example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the command line, navigate to ",(0,o.kt)("strong",{parentName:"p"},"wax-cdt/examples/hello"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd wax-cdt/examples/hello\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("strong",{parentName:"p"},"build")," directory."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir build\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("strong",null,"Note:")," By default, ",(0,o.kt)("strong",null,"eosio-init")," creates a build directory. Because this directory is empty, it's not uploaded to Git. If you use ",(0,o.kt)("strong",null,"eosio-init")," to [Create a Smart Contract](/docs/dapp-development/wax-cdt/cdt_use.html#compile-hello-world), you'll be able to skip this step. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"build")," directory."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd build\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Initialize cmake from the ",(0,o.kt)("strong",{parentName:"p"},"wax-cdt/examples/hello")," directory to write the necessary build files to the ",(0,o.kt)("strong",{parentName:"p"},"build")," directory."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cmake ..\n")),(0,o.kt)("p",{parentName:"li"},"The console prints the following build tasks:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'-- The C compiler identification is GNU 7.4.0\n-- The CXX compiler identification is GNU 7.4.0\n-- Check for working C compiler: /usr/bin/cc\n-- Check for working C compiler: /usr/bin/cc -- works\n-- Detecting C compiler ABI info\n-- Detecting C compiler ABI info - done\n-- Detecting C compile features\n-- Detecting C compile features - done\n-- Check for working CXX compiler: /usr/bin/c++\n-- Check for working CXX compiler: /usr/bin/c++ -- works\n-- Detecting CXX compiler ABI info\n-- Detecting CXX compiler ABI info - done\n-- Detecting CXX compile features\n-- Detecting CXX compile features - done\n-- Setting up Eosio Wasm Toolchain 1.6.1 at /usr/local/eosio.cdt\nCMake Warning (dev) in CMakeLists.txt:\n  No cmake_minimum_required command is present.  A line of code such as\n\n    cmake_minimum_required(VERSION 3.10)\n\n  should be added at the top of the file.  The version specified may be lower\n  if you wish to support older CMake versions for this project.  For more\n  information run "cmake --help-policy CMP0000".\nThis warning is for project developers.  Use -Wno-dev to suppress it.\n\n-- Configuring done\n-- Generating done\n-- Build files have been written to: waxblockchain/wax-blockchain/wax-cdt/examples/hello/build\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the scripts."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make\n")),(0,o.kt)("p",{parentName:"li"},"The console prints the following confirmation:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[  5%] Performing build step for 'hello_project'\n[100%] Built target hello\n[ 11%] No install step for 'hello_project'\n[ 16%] No test step for 'hello_project'\n[ 22%] Completed 'hello_project'\n[ 50%] Built target hello_project\n[ 55%] Performing configure step for 'hello_tests_project'\n")))),(0,o.kt)("p",null,"You should now be able to locate the ",(0,o.kt)("strong",{parentName:"p"},"hello.wasm")," and ",(0,o.kt)("strong",{parentName:"p"},"hello.abi")," files in the ",(0,o.kt)("strong",{parentName:"p"},"build/hello")," directory. "))}m.isMDXComponent=!0}}]);