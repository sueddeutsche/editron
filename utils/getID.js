/**
 * Converts a json-pointer to a correct dom-id (url selection)
 * @param  {String} pointer
 * @return {String} unique id
 */
module.exports = function getID(pointer) {
    return `editor/${pointer.replace(/^[#/]*/, "")}`.replace(/\/*$/, "");
};
