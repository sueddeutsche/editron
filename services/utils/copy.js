module.exports = function copy(data) {
    if (data === undefined || (Array.isArray(data) === false && typeof data !== "object")) {
        return data;
    }
    return JSON.parse(JSON.stringify(data));
};
