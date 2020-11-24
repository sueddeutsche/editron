// returns true if the value is valid, that is: it has content
export default function populated<T extends any, K extends any>(value: any, returnIf?: K, returnElse?: T): boolean|T|K {
    let isPopulated = true;

    if (value == null || value === "" || value === "#") {
        isPopulated = false;
    } else if (typeof value === "string") {
        isPopulated = value.replace(/<[^>]+>/g, "").replace(/[^A-Za-z0-9]/g, "").length > 0;
    } else if (Array.isArray(value)) {
        isPopulated = value.length > 0;
    } else if (Object.prototype.toString.call(value) === "[object Object]") {
        isPopulated = Object.keys(value).length > 0;
    }

    if (returnIf === undefined && returnElse === undefined) {
        return isPopulated;
    }

    return isPopulated ? returnIf : returnElse;
}
