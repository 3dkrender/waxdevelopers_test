"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[4057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"How to Mitigate API abuse on a WAX Load Balancer",nav_order:147,layout:"default",parent:"WAX Infrastructure Guides","lang-ref":"How to Mitigate API abuse on a WAX Load Balancer",lang:"en"},o=void 0,s={unversionedId:"wax-infrastructure/wax-mainnet-node-mitigate-abuse",id:"wax-infrastructure/wax-mainnet-node-mitigate-abuse",title:"How to Mitigate API abuse on a WAX Load Balancer",description:"Even though you may be providing a WAX Guild level of service fronted by a high performing HAProxy, this service is still open to be exploited by greedy or malicious users.",source:"@site/docs/wax-infrastructure/wax-mainnet-node-mitigate-abuse.md",sourceDirName:"wax-infrastructure",slug:"/wax-infrastructure/wax-mainnet-node-mitigate-abuse",permalink:"/waxdevelopers_test/docs/wax-infrastructure/wax-mainnet-node-mitigate-abuse",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/wax-infrastructure/wax-mainnet-node-mitigate-abuse.md",tags:[],version:"current",frontMatter:{title:"How to Mitigate API abuse on a WAX Load Balancer",nav_order:147,layout:"default",parent:"WAX Infrastructure Guides","lang-ref":"How to Mitigate API abuse on a WAX Load Balancer",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"How to Set Up a Reliable WAX Load Balancer",permalink:"/waxdevelopers_test/docs/wax-infrastructure/wax-mainnet-node-load-balancer"},next:{title:"How to Set Up a Solid WAX Mainnet Node",permalink:"/waxdevelopers_test/docs/wax-infrastructure/wax-mainnet-node"}},p={},l=[{value:"Sliding Window Rate Limiting",id:"sliding-window-rate-limiting",level:2},{value:"Tarpit",id:"tarpit",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Even though you may be providing a WAX Guild level of service fronted by a high performing HAProxy, this service is still open to be exploited by greedy or malicious users."),(0,r.kt)("p",null,"This guide will walk through configuring HAProxy response policies to mitigate these types of threats."),(0,r.kt)("h1",{id:"how-to-mitigate-api-abuse-on-a-wax-load-balancer"},"How to Mitigate API abuse on a WAX Load Balancer"),(0,r.kt)("p",null,"In the previous guide's HAProxy example you will have noticed that a  ",(0,r.kt)("inlineCode",{parentName:"p"},"maxconn"),"  variable was configured in the  ",(0,r.kt)("strong",{parentName:"p"},"global"),"  section as well as in the  ",(0,r.kt)("strong",{parentName:"p"},"backend"),"  section."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"maxconn"),"  is a hard limit that will stop any more than the specified connections from being setup to the API service when this threshold is met, however it is indiscriminate and will stop good actors along with the API abusers."),(0,r.kt)("p",null,"HAProxy has a more elegant way of identifying and limiting abuse, two of these mechanisms will be discussed in this article."),(0,r.kt)("h2",{id:"sliding-window-rate-limiting"},"Sliding Window Rate Limiting"),(0,r.kt)("p",null,"Also known as implementing  ",(0,r.kt)("strong",{parentName:"p"},"deny stick lists"),"  are a way to limit the number of requests a user for a specific source IP address can make of your API\u2019s over a period of time."),(0,r.kt)("p",null,"In this configuration example there is a limit of  ",(0,r.kt)("strong",{parentName:"p"},"200 API requests"),"  per source IP address allowed over a  ",(0,r.kt)("strong",{parentName:"p"},"period of 5 seconds"),". This period of time is a sliding window. If the threshold is met the user is denied and receives a 429 error."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTTP Error 429 is an HTTP response status code that indicates")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"the client application has surpassed its rate limit")),(0,r.kt)("em",{parentName:"p"},", or number of requests they can send in a given period of time.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/12730423/201574327-6544b9f4-209f-4da0-b833-00e76afe6531.png",alt:"image"})),(0,r.kt)("p",null,"Follow the below to configure each section in the  ",(0,r.kt)("inlineCode",{parentName:"p"},"haproxy.cfg")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> sudo nano /etc/haproxy/haproxy.cfg\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"frontend")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"frontend http-in  \n    http-request track-sc0 src table wax_api_servers\n")),(0,r.kt)("p",null,"This configuration creates a specific table in HAProxy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"backend")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backend wax_api_servers  \n    stick-table type ip size 50k expire 30s store http_req_rate(5s)  \n    http-request deny deny_status 429 if { sc_http_req_rate(0) gt 200 }\n")),(0,r.kt)("p",null,"This configuration applies the policy to the specific backend."),(0,r.kt)("p",null,"Save and exit  ",(0,r.kt)("inlineCode",{parentName:"p"},"haproxy.cfg"),", check your configuration and restart the service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> haproxy -c -V -f /etc/haproxy/haproxy.cfg  \nConfiguration file is valid\n\n> sudo service haproxy restart\n\n> sudo service haproxy status  \nActive: active (running)\n")),(0,r.kt)("p",null,"If you are using the Statistics dashboard with Prometheus you can see the number of API users hitting this threshold and being 429 denied.  ",(0,r.kt)("strong",{parentName:"p"},"-HTTP 4xx responses:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/12730423/201574775-18ee6c3d-0a3e-4148-960b-dc2059f8bacb.png",alt:"image"})),(0,r.kt)("h2",{id:"tarpit"},"Tarpit"),(0,r.kt)("p",null,"The stick list  ",(0,r.kt)("strong",{parentName:"p"},"deny"),"  example gives potential abusers a immediate notification that they have been denied, often prompting an retry within milliseconds. HAProxy Tarpit\u2019s response policy accepts a client\u2019s connection, but then waits a predefined time (10 seconds in this example) before returning a deny response. This can tie up the malicious user\u2019s resources limiting their ability to continue hammering your API."),(0,r.kt)("p",null,"Essentially tarpit is configured in the stick-list policy by replacing  ",(0,r.kt)("strong",{parentName:"p"},"deny"),"  with  ",(0,r.kt)("strong",{parentName:"p"},"tarpit")),(0,r.kt)("p",null,"Follow the below to configure each section in the  ",(0,r.kt)("inlineCode",{parentName:"p"},"haproxy.cfg"),"  to amend the previous policy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> sudo nano /etc/haproxy/haproxy.cfg\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"backend")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backend wax_api_servers  \n    stick-table type ip size 50k expire 30s store http_req_rate(5s)  \n    http-request tarpit deny_status 429 if { sc_http_req_rate(0) gt 200 }  \n    timeout tarpit 10s\n")),(0,r.kt)("p",null,"This configuration applies the policy to the specific backend and sets the delay to 10 seconds."),(0,r.kt)("p",null,"Save and exit  ",(0,r.kt)("inlineCode",{parentName:"p"},"haproxy.cfg"),", check your configuration and restart the service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> haproxy -c -V -f /etc/haproxy/haproxy.cfg  \nConfiguration file is valid\n\n> sudo service haproxy restart> sudo service haproxy status  \nActive: active (running)\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"These ",(0,r.kt)("strong",{parentName:"p"},"WAX Developer Technical Guides")," are created using source material from the ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/eosphere/wax-technical-how-to/home"},"EOSphere WAX Technical How To Series")),(0,r.kt)("p",null,"Be sure to ask any questions in the  ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/eosphere_io"},"EOSphere Telegram")))}d.isMDXComponent=!0}}]);