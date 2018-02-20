/**
 * Converts a json-pointer to a valid dom-id (url selection)
 * https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
 *
 * @param  {String} pointer
 * @return {String} unique id
 */
module.exports = function getID(pointer) {
    return `${pointer.replace(/(^[#/]*|\/+$)/, "")}`.replace(/\/+/g, ".");
};
