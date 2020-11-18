export default function isEmpty(value) {
    return value == null || value === "" ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (Array.isArray(value) && value.length === 0);
}
