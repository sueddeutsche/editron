/**
 * For a changed pointer, changedPointer -> newPointer, will replace the given pointer accordingly.
 * This will not modify jsonPointers, that do not match the changedPointer.
 * @param jsonPointer your json-pointer that might have changed
 * @param changedPointer the previous pointer that has been changed
 * @param newPointer the new pointer, the previous changePointer was changed to
 * @return updated jsonPointer having changes applied, if any
 */
export function changePointer(jsonPointer: string, changedPointer: string, newPointer: string): string {
    if (jsonPointer === changedPointer) {
        return newPointer;
    }
    const replacePattern = new RegExp("^" + changedPointer + "/");
    return jsonPointer.replace(replacePattern, newPointer + "/");
}
