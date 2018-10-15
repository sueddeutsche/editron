const getTypeOf = require("json-schema-library").getTypeOf;
const gp = require("gson-pointer");
const getParentPointer = require("./getParentPointer");


module.exports = function hasParentValue(data, pointer) {
    const parentPointer = getParentPointer(pointer);
    const value = gp.get(data, parentPointer);
    if (value == null) {
        return false;
    }
    const type = getTypeOf(value);
    return type === "object" || type === "array";
};
