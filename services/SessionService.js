/* global localStorage */


/**
 * Simple session service to store and retrieve user-specific data
 * @type {Object}
 */
module.exports = {
    get(key, defaultValue) {
        if (window.localStorage == null) {
            return defaultValue;
        }

        if (localStorage.getItem(key) == null) {
            this.set(key, defaultValue);
        }
        return JSON.parse(localStorage.getItem(key));
    },
    set(key, value) {
        if (window.localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },
    toggle(key) {
        const value = !this.get(key, false);
        this.set(key, value);
        return value;
    }
};
