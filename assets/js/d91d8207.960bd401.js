"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[4288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Supported Operating Systems",layout:"default",nav_order:100,parent:"Tools & Topics","lang-ref":"Supported Operating Systems",lang:"en"},s="Supported Operating Systems",i={unversionedId:"tools/os",id:"tools/os",title:"Supported Operating Systems",description:"WAX currently supports the following operating systems:",source:"@site/docs/tools/os.md",sourceDirName:"tools",slug:"/tools/os",permalink:"/waxdevelopers_test/docs/tools/os",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/tools/os.md",tags:[],version:"current",frontMatter:{title:"Supported Operating Systems",layout:"default",nav_order:100,parent:"Tools & Topics","lang-ref":"Supported Operating Systems",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"WAX-CDT Options",permalink:"/waxdevelopers_test/docs/tools/cdt_options"},next:{title:"Ricardian Clauses",permalink:"/waxdevelopers_test/docs/tools/ricardian_clause"}},l={},p=[{value:"Deprecated Operating Systems",id:"deprecated-operating-systems",level:2},{value:"Virtual Machines",id:"virtual-machines",level:2},{value:"Windows Users",id:"windows-users",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported-operating-systems"},"Supported Operating Systems"),(0,o.kt)("p",null,"WAX currently supports the following operating systems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon 2017.09 and higher"),(0,o.kt)("li",{parentName:"ul"},"Centos 7"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 16.04"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 18.04"),(0,o.kt)("li",{parentName:"ul"},"MacOS 10.14.x and higher ")),(0,o.kt)("h2",{id:"deprecated-operating-systems"},"Deprecated Operating Systems"),(0,o.kt)("p",null,"Support is no longer available for the following operating systems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mint 18"),(0,o.kt)("li",{parentName:"ul"},"Fedora 27"),(0,o.kt)("li",{parentName:"ul"},"Amazon Linux 1"),(0,o.kt)("li",{parentName:"ul"},"macOS versions earlier than 10.14 (such as High Sierra)")),(0,o.kt)("h2",{id:"virtual-machines"},"Virtual Machines"),(0,o.kt)("p",null,"If you're using a virtual machine, it should be configured with at least 2 CPUs (does not have to be two physical ones) and 8G of memory."),(0,o.kt)("h2",{id:"windows-users"},"Windows Users"),(0,o.kt)("p",null,"The quickest, easiest way to run the WAX Blockchain on Windows is to use our Docker images. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapp-development/docker-setup/"},"Docker Quickstart")," to get started. "),(0,o.kt)("p",null,"If you're an advanced Window's developer with an understanding of Linux, you do have other options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{href:"https://www.virtualbox.org/",target:"_blank"},"VirtualBox")," (or a similar app) to create a Linux virtual machine"),(0,o.kt)("li",{parentName:"ul"},"Use Microsoft's ",(0,o.kt)("a",{href:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/",target:"_blank"},"Introduction to Hyper-V on Windows 10")," to create a Linux virtual machine"),(0,o.kt)("li",{parentName:"ul"},"Use Microsoft's ",(0,o.kt)("a",{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",target:"_blank"},"Windows Subsystem for Linux"))))}d.isMDXComponent=!0}}]);