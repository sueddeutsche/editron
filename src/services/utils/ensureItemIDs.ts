import { getTypeOf } from "json-schema-library";
const ID_PROPERTY = "_id";


function generateId(index: string|number): string {
    return `${index}${Math.random()}${Date.now()}`;
}


function addMissingItemIDs(list: Array<any>): void {
    list.forEach((item, index) => {
        if (item[ID_PROPERTY] == null) {
            const type = getTypeOf(item);
            if (type === "object" || type === "array") {
                item[ID_PROPERTY] = ensureItemIDs.config.generateId(index);
            }
        }
    });
}


function ensureItemIDs<T extends any>(data: T): T {
    if (Array.isArray(data)) {
        ensureItemIDs.config.addMissingItemIDs(data);
        data.forEach(item => ensureItemIDs(item));

    } else if (getTypeOf(data) === "object") {
        Object.keys(data).forEach((key) => ensureItemIDs(data[key]));
    }

    return data;
}


ensureItemIDs.config = {
    ID_PROPERTY,
    addMissingItemIDs,
    generateId
};


export default ensureItemIDs;
