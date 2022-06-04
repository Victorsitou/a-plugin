import { Select } from "./WPMODULES";
import { getAvatarDecorations } from "./avatarDecorations"

function onChange_(e) {
    console.log(e);
    return e;
}

function createOptions() {
    data = getAvatarDecorations();
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