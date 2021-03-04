import gp from "gson-pointer";
import { getTypeOf } from "json-schema-library";
export default function hasParentValue(data, pointer) {
    const parentPointer = gp.join(pointer, "..");
    const value = gp.get(data, parentPointer);
    if (value == null) {
        return false;
    }
    const type = getTypeOf(value);
    return type === "object" || type === "array";
}
