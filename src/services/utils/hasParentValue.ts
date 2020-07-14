import getParentPointer from "./getParentPointer";
import gp from "gson-pointer";
import jlib from "json-schema-library";
import { JSONData, JSONPointer } from "../../types";

const { getTypeOf } = jlib;


export default function hasParentValue(data: JSONData, pointer: JSONPointer): boolean {
    const parentPointer = getParentPointer(pointer);
    const value = gp.get(data, parentPointer);
    if (value == null) {
        return false;
    }
    const type = getTypeOf(value);
    return type === "object" || type === "array";
};
