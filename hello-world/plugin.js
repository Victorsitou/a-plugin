(function(d,c,S,l){"use strict";function u(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(a){if(a!=="default"){var s=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,s.get?s:{enumerable:!0,get:function(){return e[a]}})}}),t.default=e,Object.freeze(t)}var f=i(d),r=u(l);const[p]=c.batchFind(({findByProps:e})=>{e("SingleSelect")});function m(){return[{name:"None",url:null},{name:"BearHood",url:"https://canary.discord.com/assets/84508a07ebb0533ea77ac03e71d9d38c.png"},{name:"Egg",url:"https://canary.discord.com/assets/df029aed54f08f780a1c305fff8b9183.svg"},{name:"EmoHair",url:"https://canary.discord.com/assets/a8b3efde89d07099e08549a72e7eb489.png"},{name:"FloppyCat",url:"https://canary.discord.com/assets/ed315fe1999b1889a94c8473f5d53d5d.svg"},{name:"Turtle",url:"https://canary.discord.com/assets/adea5750166b2879746170a7551f7740.svg"},{name:"BiteyDog",url:"https://canary.discord.com/assets/19dd1ba662834eab6d946deee868ed0c.svg"},{name:"Frog",url:"https://canary.discord.com/assets/ab616dac9329b540438693b3086eb399.svg"},{name:"SnakeHelmet",url:"https://canary.discord.com/assets/d11711be026dff82140d7bb048325e20.png"},{name:"CandyPlanet",url:"https://canary.discord.com/assets/f16649030c7d975c74e4794e53975a13.png"},{name:"Neon",url:"https://canary.discord.com/assets/3e86ad03bf042a6a02a7c9b04253f03b.svg"},{name:"Rainbow",url:"https://canary.discord.com/assets/970f1f3a88a7604624ea26ca0481132b.svg"},{name:"StickyHands",url:"https://canary.discord.com/assets/9dffa4c700d55f2bff06e44932a52454.png"},{name:"BarbedWire",url:"https://canary.discord.com/assets/3dc7fa9fb808a237cb0330ad0cd79a97.png"},{name:"Fire",url:"https://canary.discord.com/assets/0123fbcf1358c97c1f8b851e6563a9f0.png"},{name:"Lightning",url:"https://canary.discord.com/assets/1d57c1a5ed723c7e695196b14eee3c2c.png"},{name:"Neon2",url:"https://canary.discord.com/assets/26c56e301889a9ec94c159ce07bf72a3.png"},{name:"Snake",url:"https://canary.discord.com/assets/055671257e4fd25fba12cfca6a49b313.png"},{name:"StringLights",url:"https://canary.discord.com/assets/08dd1a481bbdef42bd5563f95774f3b0.png"},{name:"HotDog",url:"https://canary.discord.com/assets/ff038bed535f1e15e4292e030600b7f4.svg"},{name:"PC",url:"https://canary.discord.com/assets/3d73f3c6bbbc149de9db4713abd7a284.svg"}]}function b(e){return r.default.persist.store.avatardeco=e,cumcord.patcher.instead("getAvatarDecorationURL",c.findByPropsAll("getAvatarDecorationURL")[1],t=>{if(parseInt(t[0].userId)==parseInt(c.findByProps("getCurrentUser").getCurrentUser().id))return console.log("wooo e: "+r.default.persist.store.avatardeco),r.default.persist.store.avatardeco;var a=t[0],s=a.userId,n=a.avatarDecoration,v=a.size;if(n!=null){var o;return o="https://cdn.discordapp.com/avatar-decorations/"+s+"/"+n+".png?size="+v,o}}),console.log(r.default.persist.store.avatardeco),r.default.persist.store.avatardeco}function g(){var e=m();let t=[];return e.forEach(function(a){t.push({value:a.url,label:a.name})}),t}function y(){return p.SingleSelect({options:g(),value:"asd",onChange:b})}var h={onLoad(){console.log("Hello world! :)")},onUnload(){console.log("Goodbye, world.. :(")},settings:()=>f.createElement("div",null,y())};return h})(cumcord.modules.common.React,cumcord.modules.webpack,cumcord.patcher,cumcord.pluginData);
