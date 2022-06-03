import { Select } from "./WPMODULES";

export default {
    onLoad() {
        console.log("Hello world! :)");
    },
    onUnload() {
        console.log("Goodbye, world.. :(");
    },
    settings: () => (
        <div>
            <Select k="test">test</Select>
        </div>
    ),
};
