import { Switch } from "./WPMODULES";

export default {
    onLoad() {
        console.log("Hello world! :)");
    },
    onUnload() {
        console.log("Goodbye, world.. :(");
    },
    settings: () => (
        <div>
            <Switch k="test">test</Switch>
        </div>
    ),
};
