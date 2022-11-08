"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,p={unversionedId:"Setting Up/Getting Started",id:"Setting Up/Getting Started",title:"Getting Started",description:"How to get started with WalletBot.",source:"@site/docs/02-Setting Up/01-Getting Started.md",sourceDirName:"02-Setting Up",slug:"/Setting Up/Getting Started",permalink:"/Setting Up/Getting Started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to WalletBot",permalink:"/"},next:{title:"Wallet Collection & Logging",permalink:"/Setting Up/Wallet Collection & Logging"}},l={},s=[{value:"Inviting the bot",id:"inviting-the-bot",level:2},{value:"Purchasing Premium",id:"purchasing-premium",level:2},{value:"Activating Premium",id:"activating-premium",level:2},{value:"Managing Premium",id:"managing-premium",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to get started with WalletBot."),(0,i.kt)("h2",{id:"inviting-the-bot"},"Inviting the bot"),(0,i.kt)("p",null,"You can invite the bot by using this link here: ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=1008408461769457724&permissions=275884928209&scope=bot%20applications.commands"},"https://discord.com/api/oauth2/authorize?client_id=1008408461769457724&permissions=275884928209&scope=bot%20applications.commands")," "),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Do not remove any permissions")),(0,i.kt)("h2",{id:"purchasing-premium"},"Purchasing Premium"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"YOU MUST JOIN THE DISCORD SERVER FOR US TO ASSIGN YOU THE PREMIUM SLOT\n")),(0,i.kt)("p",null,"You can purchase a slot for your bot from: ",(0,i.kt)("a",{parentName:"p",href:"https://shop.walletbot.pro/"},"https://shop.walletbot.pro/")),(0,i.kt)("p",null,"If you are a community manager or collab manager who works with multiple servers and are looking to purchase multiple premium slots, do let us know! We offer a special prices depending on how many premium slots you purchase. "),(0,i.kt)("h2",{id:"activating-premium"},"Activating Premium"),(0,i.kt)("p",null,"Once you've purchased a premium subscription, join the Discord server so we can assign premium to your Discord Account. You can purchase multiple premium subscriptions at the same time for different servers. Follow these steps to get your Premium Slot activated:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Join our Discord server"),(0,i.kt)("li",{parentName:"ol"},"Open a ticket"),(0,i.kt)("li",{parentName:"ol"},"Let us know your invoice ID"),(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"/premium activate")," command in your server and that's it! ")),(0,i.kt)("h2",{id:"managing-premium"},"Managing Premium"),(0,i.kt)("p",null,"You can have multiple premium subscriptions at the same time. This is perfect for Community Managers, Collab Managers or anyone who is managing multiple communities at the same time!"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"/premium view")," command you can see how many slots you have, how many you've used and on which servers. You can deactivate premium on a server by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"/premium deactivate")," and choosing the slot which you wish to deactivate."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can manage premium subscriptions by using the command in ",(0,i.kt)("strong",{parentName:"p"},"any")," server, so you could also actviate / deactivate premium without even being in the server!")))}u.isMDXComponent=!0}}]);