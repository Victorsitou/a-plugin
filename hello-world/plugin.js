(function(c,r){"use strict";function l(e){if(e&&e.__esModule)return e;var o=Object.create(null);return e&&Object.keys(e).forEach(function(t){if(t!=="default"){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(o,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}}),o.default=e,Object.freeze(o)}var a=l(c);const[u]=r.batchFind(({findByDisplayName:e})=>{e("Select")});function i(e){return!0}function s(e){console.log(e)}function d(){return u({options:[{value:"Hello",label:"World"}],isSelected:i,serialize:s})}var f={onLoad(){console.log("Hello world! :)")},onUnload(){console.log("Goodbye, world.. :(")},settings:()=>a.createElement("div",null,d())};return f})(cumcord.modules.common.React,cumcord.modules.webpack);