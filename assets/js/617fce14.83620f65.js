"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[8599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={title:"WAX-CDT Options",layout:"default",nav_order:110,parent:"Tools & Topics","lang-ref":"WAX-CDT Options",lang:"en"},s=void 0,a={unversionedId:"tools/cdt_options",id:"tools/cdt_options",title:"WAX-CDT Options",description:"Below is a list of common WAX-CDT tools and parameters. You can use these tools to generate WASM and ABI files for your smart contracts.",source:"@site/docs/tools/cdt_options.md",sourceDirName:"tools",slug:"/tools/cdt_options",permalink:"/waxdevelopers_test/docs/tools/cdt_options",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/tools/cdt_options.md",tags:[],version:"current",frontMatter:{title:"WAX-CDT Options",layout:"default",nav_order:110,parent:"Tools & Topics","lang-ref":"WAX-CDT Options",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Blockchain Tools",permalink:"/waxdevelopers_test/docs/tools/blockchain_tools"},next:{title:"Supported Operating Systems",permalink:"/waxdevelopers_test/docs/tools/os"}},l={},p=[{value:"eosio-abidiff",id:"eosio-abidiff",level:2},{value:"eosio-cpp",id:"eosio-cpp",level:2},{value:"eosio-init",id:"eosio-init",level:2},{value:"eosio-ld",id:"eosio-ld",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Below is a list of common WAX-CDT tools and parameters. You can use these tools to generate WASM and ABI files for your smart contracts."),(0,i.kt)("h2",{id:"eosio-abidiff"},"eosio-abidiff"),(0,i.kt)("p",null,"Compares the differences between two ABI files. A report prints out to the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"USAGE: eosio-abidiff [options] [input file1] ... [input file2] ...\nEXAMPLE: eosio-abidiff hello.abi old_hello.abi   \n\nOPTIONS:\n\nGeneric Options:\n\n  -help      - Display available options (-help-hidden for more)\n  -help-list - Display list of available options (-help-list-hidden for more)\n  -version   - Display the version of this program\n")),(0,i.kt)("h2",{id:"eosio-cpp"},"eosio-cpp"),(0,i.kt)("p",null,"Generates WASM and ABI files for your smart contracts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"USAGE: eosio-cpp [options] [input file] ...\nEXAMPLE: eosio-cpp -abigen wax.cpp -o wax.wasm\n\nOPTIONS:\n  -C                       - Include comments in preprocessed output\n  -CC                      - Include comments from within macros in preprocessed output\n  -D=[string]              - Define [macro] to [value] (or 1 if [value] omitted)\n  -E                       - Only run the preprocessor\n  -I=[string]              - Add directory to include search path\n  -L=[string]              - Add directory to library search path\n  -O=[string]              - Optimization level s, 0-3\n  -S                       - Only run preprocess and compilation steps\n  -U=[string]              - Undefine macro [macro]\n  -W=[string]              - Enable the specified warning\n  -c                       - Only run preprocess, compile, and assemble steps\n  -dD                      - Print macro definitions in -E mode in addition to normal output\n  -dI                      - Print include directives in -E mode in addition to normal outpu\n  -dM                      - Print macro definitions in -E mode instead to normal output\n  -emit-ast                - Emit Clang AST files for source inputs\n  -emit-llvm               - Use the LLVM representation for assembler and object files\n  -faligned-allocation     - Enable C++17 aligned allocation functions\n  -fcoroutine-ts           - Enable support for the C++ Coroutines TS\n  -finline-functions       - Inline suitable functions\n  -finline-hint-functions  - Inline functions which are (explicitly or implicitly) marked inline\n  -fmerge-all-constants    - Allow merging of constants\n  -fno-cfl-aa              - Disable CFL Alias Analysis\n  -fno-elide-constructors  - Disable C++ copy constructor elision\n  -fno-lto                 - Disable LTO\n  -fstack-protector        - Enable stack protectors for functions potentially vulnerable to stack smashing\n  -fstack-protector-all    - Force the usage of stack protectors for all functions\n  -fstack-protector-strong - Use a strong heuristic to apply stack protectors to functions\n  -fstrict-enums           - Enable optimizations based on the strict definition of an enum's value range\n  -fstrict-return          - Always treat control flow paths that fall off the end of a non-void function as unreachable\n  -fstrict-vtable-pointers - Enable optimizations based on the strict rules for overwriting polymorphic C++ objects\n  -include=[string]        - Include file before parsing\n  -isysroot=[string]       - Set the system root directory (usually /)\n  -l=[string]              - Root name of library to link\n  -lto-opt=[string]        - LTO Optimization level (O0-O3)\n  -o=[string]              - Write output to [file]\n  -std=[string]            - Language standard to compile for\n  -v                       - Show commands to run and use verbose output\n  -w                       - Suppress all warnings\n\nGeneric Options:\n\n  -help                    - Display available options (-help-hidden for more)\n  -help-list               - Display list of available options (-help-list-hidden for more)\n  -version                 - Display the version of this program\n")),(0,i.kt)("h2",{id:"eosio-init"},"eosio-init"),(0,i.kt)("p",null,"Creates a smart contract template and directory structure. Includes CMake build scripts by default."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"USAGE: eosio-init [options]\nEXAMPLE: eosio-init -project wax\n\nOPTIONS:\n\nGeneric Options:\n\n  -help             - Display available options (-help-hidden for more)\n  -help-list        - Display list of available options (-help-list-hidden for more)\n  -version          - Display the version of this program\n\neosio-init:\ngenerates an eosio smart contract project\n\n  -bare             - produces only a skeleton smart contract without CMake support\n  -path=[string]    - directory to place the project\n  -project=[string] - output project name\n")),(0,i.kt)("h2",{id:"eosio-ld"},"eosio-ld"),(0,i.kt)("p",null,"WebAssembly linker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"USAGE: eosio-ld [options] [input file] ...\n\nOPTIONS:\n\nGeneric Options:\n\n  -help             - Display available options (-help-hidden for more)\n  -help-list        - Display list of available options (-help-list-hidden for more)\n  -version          - Display the version of this program\n\neosio.ld options:\n\n  -L=[string]       - Add directory to library search path\n  -fno-cfl-aa       - Disable CFL Alias Analysis\n  -fno-lto          - Disable LTO\n  -fno-post-pass    - Don't run post processing pass\n  -fno-stack-first  - Don't set the stack first in memory\n  -l=[string]       - Root name of library to link\n  -lto-opt=[string] - LTO Optimization level (O0-O3)\n  -o=[string]       - Write output to [file]\n")))}u.isMDXComponent=!0}}]);