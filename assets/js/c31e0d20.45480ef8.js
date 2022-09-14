"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2347],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:6},s="Migrating from v2 to v3",p={unversionedId:"v3-migration",id:"version-3.1/v3-migration",title:"Migrating from v2 to v3",description:"Due to how Android handles foreground services, it's not possible for us to stop the process manually, as it's waiting for the foreground service to come back. With v3 we are introducing the following changes related to this:",source:"@site/versioned_docs/version-3.1/v3-migration.md",sourceDirName:".",slug:"/v3-migration",permalink:"/docs/v3-migration",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.1/v3-migration.md",tags:[],version:"3.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"app",previous:{title:"Migrating from v1 to v2",permalink:"/docs/v2-migration"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c={},d=[{value:"API Changes",id:"api-changes",level:2},{value:"<code>stopWithApp</code> is now <code>stoppingAppPausesPlayback</code>",id:"stopwithapp-is-now-stoppingapppausesplayback",level:3},{value:"<code>destroy</code> and <code>stop</code> have been removed",id:"destroy-and-stop-have-been-removed",level:3},{value:"Configuration Changes",id:"configuration-changes",level:2},{value:"<code>track-player.json</code> / Build Preferences no longer needed",id:"track-playerjson--build-preferences-no-longer-needed",level:3},{value:"Minimum Compile/Target SDK",id:"minimum-compiletarget-sdk",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-from-v2-to-v3"},"Migrating from v2 to v3"),(0,a.kt)("p",null,"Due to how Android handles foreground services, it's not possible for us to stop the process manually, as it's waiting for the foreground service to come back. With v3 we are introducing the following changes related to this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On Android, the audio service can't be manually stopped by the app anymore.\nThe OS itself decides when to stop it."),(0,a.kt)("li",{parentName:"ul"},"An audio control notification will ",(0,a.kt)("em",{parentName:"li"},"always")," be present (depending on phone\nvendor, this would look and behave differently), which allows users to\nquickly go back to the app by tapping on it."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"destroy")," function does not exist anymore. "),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"stopWithApp")," flag turns into ",(0,a.kt)("inlineCode",{parentName:"li"},"stoppingAppPausesPlayback")," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/doublesymmetry/react-native-track-player/pull/1447#issuecomment-1195246389"},"More information here"))))),(0,a.kt)("p",null,"The full changelog of added features and bug fixes ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/doublesymmetry/react-native-track-player/releases/tag/v3.0"},"can be found here"),"."),(0,a.kt)("p",null,"When migrating from v2 to v3, the following has changed:"),(0,a.kt)("h2",{id:"api-changes"},"API Changes"),(0,a.kt)("h3",{id:"stopwithapp-is-now-stoppingapppausesplayback"},(0,a.kt)("inlineCode",{parentName:"h3"},"stopWithApp")," is now ",(0,a.kt)("inlineCode",{parentName:"h3"},"stoppingAppPausesPlayback")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// Methods\nawait TrackPlayer.updateOptions({\n-  stopWithApp: true,\n+  stoppingAppPausesPlayback: true,\n  ...\n});\n")),(0,a.kt)("h3",{id:"destroy-and-stop-have-been-removed"},(0,a.kt)("inlineCode",{parentName:"h3"},"destroy")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"stop")," have been removed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// remove all usages of `.destroy()` and `.stop()`\n-  TrackPlayer.destroy();\n-  TrackPlayer.stop();\n")),(0,a.kt)("h2",{id:"configuration-changes"},"Configuration Changes"),(0,a.kt)("h3",{id:"track-playerjson--build-preferences-no-longer-needed"},(0,a.kt)("inlineCode",{parentName:"h3"},"track-player.json")," / Build Preferences no longer needed"),(0,a.kt)("p",null,"HLS, Dash, & Smoothstreaming are now supported on Android out of the box. You\ncan remove your ",(0,a.kt)("inlineCode",{parentName:"p"},"track-player.json")," file if you have one. You still need to\nensure that ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/objects/track"},"the correct ",(0,a.kt)("inlineCode",{parentName:"a"},"type")," is specified on your ",(0,a.kt)("inlineCode",{parentName:"a"},"Track"),"\nobject"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- track-player.json\n")),(0,a.kt)("h3",{id:"minimum-compiletarget-sdk"},"Minimum Compile/Target SDK"),(0,a.kt)("p",null,"You also need to have a minimum compile & target SDK of 31 (Android 12)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"// android/build.gradle\n...\n    compileSdkVersion = 31\n    targetSdkVersion = 31\n...\n")))}m.isMDXComponent=!0}}]);