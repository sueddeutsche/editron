export type JSONPointer = string;
export type JSONSchema = {
    type: "object"|"array"|"string"|"boolean"|"number"|"integer"|"null";
    [p:string]: any;
};
export type JSONData = Array<any>|any|number|string|boolean|null;
