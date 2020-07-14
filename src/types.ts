export type JSONPointer = string;

export type JSONSchema = {
    type: "object"|"array"|"string"|"boolean"|"number"|"integer"|"null";
    [p:string]: any;
};

export type JSONData = Array<any>|any|number|string|boolean|null;

export type EditronConfigAttrs = {
    id?: string;
    class?: string;
    [p: string]: any;
}

export type ValidationError = {
    type: "error";
    severity: "error"|"warning";
    message: string;
    data: {
        pointer: JSONPointer;
        [p:string]: any;
    }
}
