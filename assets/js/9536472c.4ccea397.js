"use strict";(self.webpackChunkwaxdevelopers=self.webpackChunkwaxdevelopers||[]).push([[8197],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>w});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,w=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(w,s(s({ref:t},c),{},{components:a})):n.createElement(w,s({ref:t},c))}));function w(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Use WaxJS",layout:"default",parent:"WaxJS Overview",grand_parent:"WAX Cloud Wallet","lang-ref":"Use WaxJS",lang:"en"},s=void 0,i={unversionedId:"wax-cloud-wallet/waxjs/waxjs_use",id:"wax-cloud-wallet/waxjs/waxjs_use",title:"Use WaxJS",description:"The WaxJS library exposes four primary components:",source:"@site/docs/wax-cloud-wallet/waxjs/waxjs_use.md",sourceDirName:"wax-cloud-wallet/waxjs",slug:"/wax-cloud-wallet/waxjs/waxjs_use",permalink:"/waxdevelopers_test/docs/wax-cloud-wallet/waxjs/waxjs_use",draft:!1,editUrl:"https://github.com/wax-office-of-inspector-general/wax-developer/tree/main/docs/wax-cloud-wallet/waxjs/waxjs_use.md",tags:[],version:"current",frontMatter:{title:"Use WaxJS",layout:"default",parent:"WaxJS Overview",grand_parent:"WAX Cloud Wallet","lang-ref":"Use WaxJS",lang:"en"},sidebar:"tutorialSidebar",previous:{title:"WAX Cloud Wallet Quickstart",permalink:"/waxdevelopers_test/docs/wax-cloud-wallet/waxjs/waxjs_qstart"}},l={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"WaxJS")," library exposes four primary components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wax.userAccount.")," WAX Account user name, returned when you make a call to ",(0,r.kt)("inlineCode",{parentName:"li"},"wax.login()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wax.pubKeys.")," A user's active and owner keys. Available once a user's logged in or if you pass the keys in the WaxJS constructor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wax.api.")," Use this to execute standard eosjs transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wax.rpc.")," Use this to make API calls to the WAX Blockchain. Refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/"},"WAX RPC API")," for more information.")),(0,r.kt)("p",null,"To use ",(0,r.kt)("strong",{parentName:"p"},"WaxJS"),": "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the Library. React style apps using npm or yarn can import the library via:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as waxjs from "@waxio/waxjs/dist";\n')),(0,r.kt)("p",{parentName:"li"},"You can also download and save ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/worldwide-asset-exchange/waxjs/develop/dist-web/waxjs.js"},"WaxJS")," from GitHub and include the file on a web page:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<script src='waxjs.js'><\/script>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"There are several ways to instantiate the WaxJS constructor, depending on what information you have for your users. Constructor parameters include:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The URL for the RPC Server you wish to connect to (required)"),(0,r.kt)("li",{parentName:"ul"},"A user's WAX Blockchain Account name (optional)"),(0,r.kt)("li",{parentName:"ul"},"An Array of public keys for a specific account (optional)"),(0,r.kt)("li",{parentName:"ul"},"Autologin bool value (optional)")),(0,r.kt)("p",{parentName:"li"},"To let WaxJS to assign the appropriate user values, you can simply pass an RPC URL:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const wax = new waxjs.WaxJS({\n  rpcEndpoint: 'https://wax.greymass.com'\n});\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Notice:")," The constructor for WaxJS changed with version 1.0. If you are updating from a previous version you will need to change the constructor.\n:::"),(0,r.kt)("p",{parentName:"li"},"The library can also be instantiated with the user account and public keys. If you have this information, you can pass it to the WaxJS constructor."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const wax = new waxjs.WaxJS({\n  rpcEndpoint: 'https://wax.greymass.com',\n  userAccount: '3m1q4.wam',\n  pubKeys: ['EOS6rjGKGYPBmVGsDDFAbM6UT5wQ9szB9m2fEcqHFMMcPge983xz9','EOS7wTCoctybwrQWuE2tWYGwdLEGRXE9rrzALeBLUhWfbHXysFr9W']\n});\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tip:")," If you pass these additional parameters, you won't need to call the autoLogin method.\n:::"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before you can start signing transactions from your dApp, a user must be logged in. WaxJS includes an ",(0,r.kt)("inlineCode",{parentName:"p"},"isAutoLoginAvailable")," function that:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Securely checks for WAX Cloud Wallet credentials"),(0,r.kt)("li",{parentName:"ul"},"Checks to see if your dApp is whitelisted")),(0,r.kt)("p",{parentName:"li"},"If both conditions are true, a user's userAccount and public keys are set in your WaxJS object, and you don't need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"login()")," function. You'll also have access to wax.userAccount and wax.pubKeys."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    //if true, popup won't be triggered; user is now logged in\n    var isAutoLoginAvailable = await wax.isAutoLoginAvailable();\n    var userAccount = wax.userAccount\n    var pubKeys = wax.pubKeys\n")),(0,r.kt)("p",{parentName:"li"},"If auto-login is not available, you can easily use the ",(0,r.kt)("inlineCode",{parentName:"p"},"login()")," function to allows users to sign in or sign up using WAX Cloud Wallet."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//normal login. Triggers a popup for non-whitelisted dapps\nasync function login() {\n  try {\n     const userAccount = await wax.login();\n     const pubKeys = wax.pubKeys;\n  } catch (e) {\n     \n  }\n}\n")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"login()"),' function opens WAX Cloud Wallet in a new browser window. Users are prompted that your dApp would like to "Know your WAX Account Name." Once they click Approve, they\'re redirected back to your dApp '),(0,r.kt)("p",{parentName:"li"},"A successful login returns the userAccount (e.g., jq3ao.wam), and you can also access this property by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"wax.userAccount"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send a Transaction"),(0,r.kt)("p",{parentName:"li"},"Now that you have a user's WAX Account name, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wax.api")," object to build your transaction."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," The ",(0,r.kt)("inlineCode",{parentName:"p"},"wax.api")," method is not initialized until you log a user in or pass a user's information in the WaxJS constructor.\n:::"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```js\nconst result = await wax.api.transact({\n  actions: [{\n    account: 'eosio.token',\n    name: 'transfer',\n    authorization: [{\n      actor: wax.userAccount,\n      permission: 'active',\n    }],\n    data: {\n      from: wax.userAccount,\n      to: 'eosio',\n      quantity: '0.00000001 WAX',\n      memo: '',\n    },\n  }]\n}, {\n  blocksBehind: 3,\n  expireSeconds: 1200,\n});\n```\n\n**Tip:** The `wax.api` method is an instance of the **eosjs** object, and provides the same functionality. Refer to the [eosjs](https://eosio.github.io/eosjs/latest) docs for more information.\n:::\n\nThe `wax.api.transact()` function launches WAX Cloud Wallet in a new browser window. On this screen, users can review the transaction details and Approve or Deny the transaction. Once users click Approve, the transaction is signed on the WAX Blockchain and users are returned to your dApp.\n")))}m.isMDXComponent=!0}}]);