"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Docker Setup",nav_order:21,layout:"default",parent:"dApp Development",has_children:!0,"lang-ref":"Docker Setup",lang:"en"},l=void 0,i={unversionedId:"dapp-development/docker-setup/index",id:"dapp-development/docker-setup/index",title:"Docker Setup",description:"Docker is a container platform that's similar to a virtual machine. Docker allows you to run software, applications, and even operating systems like Ubuntu from an isolated environment. Refer to Docker's Overview guide to learn more.",source:"@site/docs/dapp-development/docker-setup/index.md",sourceDirName:"dapp-development/docker-setup",slug:"/dapp-development/docker-setup/",permalink:"/waxdevelopers_test/docs/dapp-development/docker-setup/",draft:!1,editUrl:"https://github.com/3dkrender/waxdevelopers_test/tree/main/docs/dapp-development/docker-setup/index.md",tags:[],version:"current",frontMatter:{title:"Docker Setup",nav_order:21,layout:"default",parent:"dApp Development",has_children:!0,"lang-ref":"Docker Setup",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"WAX-CDT Deploy",permalink:"/waxdevelopers_test/docs/dapp-development/deploy-dapp-on-wax/deploy_source"},next:{title:"Run a WAX Container",permalink:"/waxdevelopers_test/docs/dapp-development/docker-setup/docker_qstart_getstarted"}},c={},p=[{value:"What&#39;s Included",id:"whats-included",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:"https://www.docker.com/",target:"_blank"},"Docker")," is a _container_ platform that's similar to a virtual machine. Docker allows you to run software, applications, and even operating systems like Ubuntu from an isolated environment. Refer to Docker's ",(0,o.kt)("a",{href:"https://www.docker.com/why-docker",target:"_blank"},"Overview")," guide to learn more.",(0,o.kt)("p",null,"Our development and production Docker images provide a fast, easy way to run the WAX Blockchain in minutes. You can also use our Docker images to build and deploy smart contracts."),(0,o.kt)("p",null,"Using our Docker environment offers the following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adds convenience and speed to your development efforts"),(0,o.kt)("li",{parentName:"ul"},"Eliminates the need to manage source code"),(0,o.kt)("li",{parentName:"ul"},"Eliminates the need to meet our ",(0,o.kt)("a",{parentName:"li",href:"/docs/tools/os"},"Supported Operating Systems")," requirements"),(0,o.kt)("li",{parentName:"ul"},"Doesn't overwrite an existing installation of Leap"),(0,o.kt)("li",{parentName:"ul"},"Makes it easy to upgrade and try out new features"),(0,o.kt)("li",{parentName:"ul"},"Makes it easy to switch between production and development environments")),(0,o.kt)("h2",{id:"whats-included"},"What's Included"),(0,o.kt)("p",null,"Below is a list of our core Docker images. For a complete list, refer to ",(0,o.kt)("a",{href:"https://hub.docker.com/u/waxteam",target:"_blank"},"waxteam - Docker Repositories"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{width:"25%"}},"Docker Image"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://hub.docker.com/r/waxteam/dev",target:"_blank"},"waxteam/dev")),(0,o.kt)("td",null,"This ",(0,o.kt)("strong",null,"development")," image includes everything you need to get the WAX Blockchain up and running. You can use this image to run a WAX node, create a local development environment, and create and compile smart contracts using the ",(0,o.kt)("a",{href:"/docs/dapp-development/wax-cdt/"},"WAX Contract Development Toolkit (WAX-CDT)"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://hub.docker.com/r/waxteam/cdt",target:"_blank"},"waxteam/cdt")),(0,o.kt)("td",null,"Use this image to create and compile smart contracts using the ",(0,o.kt)("a",{href:"/docs/dapp-development/wax-cdt/"},"WAX Contract Development Toolkit (WAX-CDT)"),". This image does ",(0,o.kt)("strong",null,"not")," allow you to run a WAX node or use ",(0,o.kt)("a",{href:"/docs/tools/blockchain_tools"},"Blockchain Tools"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://hub.docker.com/r/waxteam/production",target:"_blank"},"waxteam/production")),(0,o.kt)("td",null,"It's recommended that you use our ",(0,o.kt)("a",{href:"https://hub.docker.com/r/waxteam/production",target:"_blank"},"production docker images")," to run a production node. Refer to ",(0,o.kt)("a",{href:"https://github.com/worldwide-asset-exchange/wax-blockchain/tree/develop/samples/mainnet",target:"_blank"},"Running a WAX node")," for more information.")))))}u.isMDXComponent=!0}}]);