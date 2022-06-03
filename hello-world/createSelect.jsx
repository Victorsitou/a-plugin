import { Select } from "./WPMODULES";

function isSelected_(e) {
    return true
}

function serialize_(e) {
    return null
}

function onChange_(e) {
    return null
}

function j(e) {
    var t = e.value
        , n = e.onChange
        , r = e.serialize
        , o = void 0 === r ? function (e) {
            return String(e)
        }
            : r;
    return {
        select: function (e) {
            return n(e)
        },
        isSelected: function (e) {
            return e === t
        },
        clear: function () {
            return n(null)
        },
        serialize: o
    }
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
    a = j({ value: "Hello", onChange: onChange_ })
    return Select(
        {
            options: [{ "value": "Hello", "label": "World" }, { "value": "sad", "label": "asjd" }],
            a
        }
    );
}