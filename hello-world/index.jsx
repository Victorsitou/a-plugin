import { Select } from "./WPMODULES";
import { createSelect } from "./createSelect";

export default {
    onLoad() {
        console.log("Hello world! :)");
    },
    onUnload() {
        console.log("Goodbye, world.. :(");
    },
    settings: () => (
        <div>
            {createSelect({})}
        </div>
    ),
};
