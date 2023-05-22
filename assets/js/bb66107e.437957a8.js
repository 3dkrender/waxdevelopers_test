"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[9143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Install the WAX Blockchain",nav_order:31,layout:"default",parent:"WAX Blockchain Setup",grand_parent:"dApp Development","lang-ref":"Install the WAX Blockchain",lang:"en"},l=void 0,i={unversionedId:"dapp-development/wax-blockchain-setup/blockchain_install",id:"dapp-development/wax-blockchain-setup/blockchain_install",title:"Install the WAX Blockchain",description:"The GitHub WAX Blockchain Source Code Repository downloads to the wax-blockchain directory. The download and build process can take several minutes to several hours, depending on your Internet connection, operating system, and hardware specifications.",source:"@site/docs/dapp-development/wax-blockchain-setup/blockchain_install.md",sourceDirName:"dapp-development/wax-blockchain-setup",slug:"/dapp-development/wax-blockchain-setup/blockchain_install",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/blockchain_install",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/dapp-development/wax-blockchain-setup/blockchain_install.md",tags:[],version:"current",frontMatter:{title:"Install the WAX Blockchain",nav_order:31,layout:"default",parent:"WAX Blockchain Setup",grand_parent:"dApp Development","lang-ref":"Install the WAX Blockchain",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"WAX Blockchain Setup",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/"},next:{title:"Verify Your Installation",permalink:"/waxdevelopers_test/docs/dapp-development/wax-blockchain-setup/blockchain_verify"}},c={},p=[{value:"Build the WAX Blockchain",id:"build-the-wax-blockchain",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The GitHub WAX Blockchain Source Code Repository downloads to the ",(0,o.kt)("strong",{parentName:"p"},"wax-blockchain")," directory. The download and build process can take several minutes to several hours, depending on your Internet connection, operating system, and hardware specifications."),(0,o.kt)("p",null,"To download the WAX Blockchain Source Code Repository:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the command line, clone the Git repository."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/worldwide-asset-exchange/wax-blockchain.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the directory to ",(0,o.kt)("strong",{parentName:"p"},"wax-blockchain"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd wax-blockchain\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update Git submodules."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init --recursive\n")))),(0,o.kt)("h2",{id:"build-the-wax-blockchain"},"Build the WAX Blockchain"),(0,o.kt)("p",null,"If you're using our Docker images, you do ",(0,o.kt)("strong",{parentName:"p"},"not")," need to complete these steps."),(0,o.kt)("p",null,"To build the WAX Blockchain from source, you can use the following steps. If you have a previous version installed, you'll need to uninstall it first. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/blockchain_uninstall"},"Uninstall WAX")," for more information."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("strong",null,"Important:")," Refer to [Known Issues](/docs/troubleshooting/) if you encounter an issue with the build or use our [Docker Images](/docs/dapp-development/docker-setup/) instead (recommended). Building from source is not supported. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the build script and set the installation directory. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./wax_build.sh -i ~/wax-blockchain\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("strong",null,"Tip:")," This installs [Blockchain Tools](/docs/tools/blockchain_tools) to the ",(0,o.kt)("strong",null,"wax-blockchain/bin")," directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install WAX to the directory you set in Step 4."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./wax_install.sh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optional. Add the blockchain tools directory to your path."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=~/wax-blockchain/bin:$PATH" >> ~/.bashrc && source ~/.bashrc\n')))))}u.isMDXComponent=!0}}]);