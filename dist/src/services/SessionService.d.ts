import { JSONData } from "../types";
declare const _default: {
    get(key: string, defaultValue?: any): JSONData;
    set(key: string, value: any): void;
    toggle(key: string): JSONData;
};
/**
 * Simple session service to store and retrieve user-specific data
 */
export default _default;
