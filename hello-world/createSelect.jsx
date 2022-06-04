import { Select } from "./WPMODULES";

function onChange_(e) {
    console.log(e);
    return e;
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
            options: [{ "value": "asd", "label": "fgh" }, { "value": "qwe", "label": "erty" }],
            value: "asd",
            onChange: onChange_
        }
    );
}