"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[8514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Troubleshooting",layout:"default",nav_order:200,"lang-ref":"Troubleshooting",lang:"en"},a=void 0,l={unversionedId:"troubleshooting/index",id:"troubleshooting/index",title:"Troubleshooting",description:"Below is a list of known issues and fixes (if available).",source:"@site/docs/troubleshooting/index.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/",permalink:"/waxdevelopers_test/docs/troubleshooting/",draft:!1,editUrl:"https://github.com/3dkrender/waxdeveloper_test/tree/main/docs/troubleshooting/index.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting",layout:"default",nav_order:200,"lang-ref":"Troubleshooting",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Ricardian Contracts",permalink:"/waxdevelopers_test/docs/tools/ricardian_contract"},next:{title:"Tutorials",permalink:"/waxdevelopers_test/docs/tutorials/"}},s={},c=[{value:"Build Error in Function `fork_once_func&#39;",id:"build-error-in-function-fork_once_func",level:2},{value:"Fix",id:"fix",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below is a list of known issues and fixes (if available)."),(0,o.kt)("h2",{id:"build-error-in-function-fork_once_func"},"Build Error in Function `fork_once_func'"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Error Description:")," WAX Source Code Repository Build Issue"),(0,o.kt)("p",null,"After running ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo ./wax_install.sh")," to build the WAX Source Code Repository on ",(0,o.kt)("strong",{parentName:"p"},"Ubuntu 18.04"),", the command line reports an error \"In function 'fork_once_func'\" (around ","[90%]","):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Scanning dependencies of target test_cypher_suites\nScanning dependencies of target eosio_chain\n[ 90%] Building CXX object libraries/fc/test/crypto/CMakeFiles/test_cypher_suites.dir/test_cypher_suites.cpp.o\n[ 90%] Building CXX object libraries/chain/CMakeFiles/eosio_chain.dir/merkle.cpp.o\n[ 90%] Building CXX object libraries/chain/CMakeFiles/eosio_chain.dir/name.cpp.o\n[ 90%] Building CXX object libraries/chain/CMakeFiles/eosio_chain.dir/transaction.cpp.o\n[ 90%] Linking CXX executable test_cypher_suites\n/usr/lib/x86_64-linux-gnu/libcrypto.a(threads_pthread.o): In function `fork_once_func':\n(.text+0x16): undefined reference to `pthread_atfork'\nclang: error: linker command failed with exit code 1 (use -v to see invocation)\nlibraries/fc/test/crypto/CMakeFiles/test_cypher_suites.dir/build.make:113: recipe for target 'libraries/fc/test/crypto/test_cypher_suites' failed\nmake[2]: *** [libraries/fc/test/crypto/test_cypher_suites] Error 1\nCMakeFiles/Makefile2:783: recipe for target 'libraries/fc/test/crypto/CMakeFiles/test_cypher_suites.dir/all' failed\nmake[1]: *** [libraries/fc/test/crypto/CMakeFiles/test_cypher_suites.dir/all] Error 2\nmake[1]: *** Waiting for unfinished jobs....\n")),(0,o.kt)("p",null,"Shortly after receiving this error, the build stops with the following message: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MAKE building EOSIO has exited with the above error. \n")),(0,o.kt)("h3",{id:"fix"},"Fix"),(0,o.kt)("p",null,"You can use the steps below to fix the issue and resume the WAX Source Code Repository build process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the command line, change your directory to:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd patches/fc\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("span",{class:"sampleCode"},"patches/fc")," directory, run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./apply_patch.sh\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"When the patch completes, change your directory to:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ../../build\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"build")," directory, run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make -j $(nproc)\n")),(0,o.kt)("p",null,"You should now be able to continue the build process."))}d.isMDXComponent=!0}}]);