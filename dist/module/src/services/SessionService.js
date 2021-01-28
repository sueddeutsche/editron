/** Simple session service to store and retrieve user-specific data */
export default {
    get(key, defaultValue) {
        if (window.localStorage == null) {
            return defaultValue;
        }
        if (localStorage.getItem(key) == null) {
            this.set(key, defaultValue);
        }
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (error) {
            return defaultValue;
        }
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
