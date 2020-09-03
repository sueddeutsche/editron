import { JSONPointer } from "../../types";
/**
 * converts input data to a list of pointers for all objects, array and values
 *
 * usage example
 *
 * ```js
 * const value = data.list[0];
 * const pointers = pointersOf(value, "#/list/0");
 * // or const pointers = pointersOf(gp.get(data, "#/list/0), "#/list/0");
 * ```
 *
 * @param data
 * @param [pointer] root pointer of data
 */
export default function pointersOf(data: any, pointer?: JSONPointer, result?: any[]): Array<JSONPointer>;
