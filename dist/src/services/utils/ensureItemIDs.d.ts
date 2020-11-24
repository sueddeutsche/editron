declare function generateId(index: string | number): string;
declare function addMissingItemIDs(list: Array<any>): void;
declare function ensureItemIDs<T extends any>(data: T): T;
declare namespace ensureItemIDs {
    var config: {
        ID_PROPERTY: string;
        addMissingItemIDs: typeof addMissingItemIDs;
        generateId: typeof generateId;
    };
}
export default ensureItemIDs;
