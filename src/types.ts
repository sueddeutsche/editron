export type JSONPointer = string;

export type JSONSchema = {
    type: string;
    [p:string]: any;
};

export type JSONData = Array<any>|any|number|string|boolean|null;


export interface UpdateEvent<T> {
    type: string;
    value: T;
}


export type EditronConfigAttrs = {
    id?: string;
    class?: string;
    [p: string]: any;
}

/** json-schema-library validation error-object */
export type ValidationError = {
    type: "error";
    severity?: "error"|"warning";
    code: string;
    message: string;
    data: {
        pointer: JSONPointer;
        [p:string]: any;
    }
}

export type JSONSchemaTypes = "array"|"object"|"boolean"|"object"|"string"|"number"|"null"

// Adds a custom format validator. Existing format may not be overriden (may still be modified manually)
// (core, schema, value, pointer)
export type FormatValidator = (core, schema: JSONSchema, value: any, pointer: JSONPointer) =>
    undefined|ValidationError|Array<ValidationError>|Promise<ValidationError>|Promise<Array<ValidationError>>;

// custom keyword validation to a specific type. May not override existing keywords.
export type KeywordValidator = (core, schema: JSONSchema, value: any, pointer: JSONPointer) =>
    undefined|ValidationError|Array<ValidationError>|Promise<ValidationError>|Promise<Array<ValidationError>>;


