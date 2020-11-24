/* global process */
export default function isNodeContext(): boolean {
    if (typeof process === "object") {
        if (typeof process.versions === "object") {
            if (typeof process.versions.node !== "undefined") {
                return true;
            }
        }
    }
    return false;
}
