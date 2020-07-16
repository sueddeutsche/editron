import { JSONPointer } from "../types";
/**
 * Converts a json-pointer to a valid dom-id (url selection)
 * https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
 */
export default function getID(pointer: JSONPointer): string;
