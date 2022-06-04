import { Select } from "./WPMODULES";
import { getAvatarDecorations } from "./avatarDecorations"
import { instead } from "@cumcord/patcher"
import { findByPropsAll, findByProps } from "@cumcord/modules/webpack"
import data from "@cumcord/pluginData";

function onChange_(e) {
    data.persist.store.avatardeco = e;
    cumcord.patcher.instead("getAvatarDecorationURL", findByPropsAll("getAvatarDecorationURL")[1], (args) => {
        if (parseInt(args[0].userId) == parseInt(findByProps("getCurrentUser").getCurrentUser().id)) {
            console.log("wooo e: " + data.persist.store.avatardeco)
            return data.persist.store.avatardeco;
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
    console.log(data.persist.store.avatardeco);
    return data.persist.store.avatardeco;
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