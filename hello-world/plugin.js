(function(r,c){"use strict";function l(e){if(e&&e.__esModule)return e;var o=Object.create(null);return e&&Object.keys(e).forEach(function(t){if(t!=="default"){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}}),o.default=e,Object.freeze(o)}var a=l(r);const[u]=c.batchFind(({findByDisplayName:e})=>{e("Select")});function i(){return u({options:[{value:"Hello",label:"World"}]})}var d={onLoad(){console.log("Hello world! :)")},onUnload(){console.log("Goodbye, world.. :(")},settings:()=>a.createElement("div",null,i())};return d})(cumcord.modules.common.React,cumcord.modules.webpack);
