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
export default function pointersOf(data, pointer = "#", result = []) {
    if (data == null) {
        return result;
    }
    result.push(pointer);
    if (Array.isArray(data)) {
        data.forEach((value, index) => {
            pointersOf(value, `${pointer}/${index}`, result);
        });
    }
    else if (typeof data === "object") {
        Object.keys(data).forEach(property => property !== "_id" && pointersOf(data[property], `${pointer}/${property}`, result));
    }
    return result;
}
