export declare type JSONPointer = string;
export declare type JSONSchema = {
    type: string;
    [p: string]: any;
};
export declare type JSONData = Array<any> | any | number | string | boolean | null;
export declare type EditronConfigAttrs = {
    id?: string;
    class?: string;
    [p: string]: any;
};
/** json-schema-library validation error-object */
export declare type ValidationError = {
    type: "error";
    severity?: "error" | "warning";
    code: string;
    message: string;
    data: {
        pointer: JSONPointer;
        [p: string]: any;
    };
};
export declare type JSONSchemaTypes = "array" | "object" | "boolean" | "object" | "string" | "number" | "null";
export declare type FormatValidator = (core: any, schema: JSONSchema, value: any, pointer: JSONPointer) => undefined | ValidationError | Array<ValidationError> | Promise<ValidationError> | Promise<Array<ValidationError>>;
export declare type KeywordValidator = (core: any, schema: JSONSchema, value: any, pointer: JSONPointer) => undefined | ValidationError | Array<ValidationError> | Promise<ValidationError> | Promise<Array<ValidationError>>;
