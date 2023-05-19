"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[8019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(k,p(p({ref:t},c),{},{components:r})):a.createElement(k,p({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const o={title:"Run a WAX Container",nav_order:22,layout:"default",parent:"Docker Setup",grand_parent:"dApp Development","lang-ref":"Run a WAX Container",lang:"en"},p=void 0,s={unversionedId:"dapp-development/docker-setup/docker_qstart_getstarted",id:"dapp-development/docker-setup/docker_qstart_getstarted",title:"Run a WAX Container",description:"To run the waxteam/dev Docker image:",source:"@site/docs/dapp-development/docker-setup/docker_qstart_getstarted.md",sourceDirName:"dapp-development/docker-setup",slug:"/dapp-development/docker-setup/docker_qstart_getstarted",permalink:"/waxdevelopers_test/docs/dapp-development/docker-setup/docker_qstart_getstarted",draft:!1,editUrl:"https://github.com/3dkrender/waxdeveloper_test/tree/main/docs/dapp-development/docker-setup/docker_qstart_getstarted.md",tags:[],version:"current",frontMatter:{title:"Run a WAX Container",nav_order:22,layout:"default",parent:"Docker Setup",grand_parent:"dApp Development","lang-ref":"Run a WAX Container",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"Docker Setup",permalink:"/waxdevelopers_test/docs/dapp-development/docker-setup/"},next:{title:"Manage Containers",permalink:"/waxdevelopers_test/docs/dapp-development/docker-setup/docker_qstart_manage"}},l={},i=[],c={toc:i},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To run the ",(0,n.kt)("strong",{parentName:"p"},"waxteam/dev")," Docker image:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("a",{href:"https://www.docker.com/get-started",target:"_blank"},"Docker")," (if you haven't done so already). "),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("strong",null,"Linux Users:")," It's recommended that you configure Docker to run without sudo to utilize all of our Docker-enabled ",(0,n.kt)("strong",null,"make")," scripts. Refer to ",(0,n.kt)("a",{href:"https://docs.docker.com/install/linux/linux-postinstall/",target:"_blank"},"Post-installation steps for Linux")," for more information.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new directory named ",(0,n.kt)("strong",{parentName:"p"},"wax"),". You can use this folder to store WAX Blockchain source code, samples, and your WAX smart contracts directory. This directory will be shared between your operating system and the Docker container. You will be able to edit your source code with your favourite IDE in either environment.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the command line, start your WAX containers in interactive mode and share your host's ",(0,n.kt)("strong",{parentName:"p"},"wax")," directory. This command starts a bash session inside the container."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Linux")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --name waxdev -v /c/wax:/wax waxteam/dev bash\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --name waxcdt -v /c/wax:/wax waxteam/cdt bash\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Windows 10")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --name waxdev -v c:\\wax:/wax waxteam/dev bash\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --name waxcdt -v c:\\wax:/wax waxteam/cdt bash\n")),(0,n.kt)("p",{parentName:"li"},"The console prints something similar to:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"root@b6e444e3cc33:/#\n")))),(0,n.kt)("p",null,"You should now have a running container with an active bash session. You can use this bash session to follow along with our Quickstart guides and tutorials."))}u.isMDXComponent=!0}}]);