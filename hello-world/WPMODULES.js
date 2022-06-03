import { batchFind } from "@cumcord/modules/webpack";

export const [

    Switch,
] = batchFind(({ findByDisplayName }) => {
    findByDisplayName("Switch");
});