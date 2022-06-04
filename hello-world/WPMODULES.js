import { batchFind } from "@cumcord/modules/webpack";

export const [
    Select,
] = batchFind(({ findByProps }) => {
    findByProps("SingleSelect").SingleSelect
});