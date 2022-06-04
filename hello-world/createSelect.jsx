import { Select } from "./WPMODULES";
import { getAvatarDecorations } from "./avatarDecorations"
import { instead } from "@cumcord/patcher"
import { findByPropsAll, findByProps } from "@cumcord/modules/webpack"
const { currentUser } = findByProps("getCurrentUser").getCurrentUser;

function onChange_(e) {
    instead("getAvatarDecorationURL", findByPropsAll("getAvatarDecorationURL")[1], (args) => {
        if (args[0].userId == currentUser().id) {
            return "https://canary.discord.com/assets/ed315fe1999b1889a94c8473f5d53d5d.svg"
        }
        var e = args[0]
        var t = e.userId
        var n = e.avatarDecoration
        var r = e.size;
        if (null != n) {
            var i;
            i = "https://cdn.discordapp.com/avatar-decorations/" + t + "/" + n + ".png?size=" + r
            return i
        }
    });
    console.log(e);
    return e;
}

function createOptions() {
    var data = getAvatarDecorations();
    let options = [];
    data.forEach(function (item) {
        options.push({ value: item.url, label: item.name });
    });
    return options;
}

export function createSelect() {
    /*{
    "className": "sort-37NWdz",
    "popoutClassName": "sortPopout-zN4OCq",
    "options": [
        {
            "value": "Last Message",
            "label": "Recent Activity"
        },
        {
            "value": "Creation",
            "label": "Creation Time"
        }
    ]
    }*/
    return Select.SingleSelect(
        {
            options: createOptions(),
            value: "asd",
            onChange: onChange_
        }
    );
}