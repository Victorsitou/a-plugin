import { Select } from "./WPMODULES";

function isSelected_(e) {
    return true
}

function serialize_(e) {
    return null
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
    return Select({ options: [{ "value": "Hello", "label": "World" }, { "value": "sad", "label": "asjd" }], isSelected: isSelected_, serialize: serialize_ });
}