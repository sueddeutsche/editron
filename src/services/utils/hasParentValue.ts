import gp from "gson-pointer";
import { getTypeOf } from "json-schema-library";
import { JSONData, JSONPointer } from "../../types";


export default function hasParentValue(data: JSONData, pointer: JSONPointer): boolean {
    const parentPointer = gp.join(pointer, "..");
    const value = gp.get(data, parentPointer);
    if (value == null) {
        return false;
    }
    const type = getTypeOf(value);
    return type === "object" || type === "array";
}
