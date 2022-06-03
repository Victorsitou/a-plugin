import { batchFind } from "@cumcord/modules/webpack";

export const [
    Select,
] = batchFind(({ findByDisplayName }) => {
    findByDisplayName("Select");
});