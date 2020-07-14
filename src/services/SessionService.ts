import { JSONData } from "../types";


/**
 * Simple session service to store and retrieve user-specific data
 */
export default {

    get(key: string, defaultValue?: any): JSONData {
        if (window.localStorage == null) {
            return defaultValue;
        }

        if (localStorage.getItem(key) == null) {
            this.set(key, defaultValue);
        }
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch(error) {
            return defaultValue;
        }
    },

    set(key: string, value: any): void {
        if (window.localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },

    toggle(key: string): JSONData {
        const value = !this.get(key, false);
        this.set(key, value);
        return value;
    }
};
