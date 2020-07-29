import { JSONSchema, JSONData, JSONPointer } from "../types";
/**
 * Manages json-schema interactions and adds caching of reoccuring json-schema requests
 * @param schema - json-schema
 * @param [data={}] - data corresponding to json-schema
 * @param [core={}] - instance of json-schema-library Core
 */
export default class SchemaService {
    core: any;
    data: JSONData;
    schema: JSONSchema;
    /** cache for resolved json-pointer */
    cache: {
        [p: string]: any;
    };
    constructor(schema?: JSONSchema, data?: JSONData, core?: any);
    /**
     * Update data by any missing (default) values specified in the json-schema
     * @param [data=currentData]   - update given data or use the internal stored data (via `setData(data)`)
     * @param [schema]             - specific json schema, or the internal store schema (via `setSchema(root)`)
     * @return json data with valid default data values
     */
    addDefaultData(data?: JSONData, schema?: JSONSchema): JSONData;
    /**
     * Create the template data object based on the json-schema, which fullfills the schemas structure as much as
     * possible
     * @param  schema
     * @return data corresponding to json-schema
     */
    getTemplate(schema: JSONSchema): JSONData;
    /**
     * @returns list of valid items to insert at the given position
     */
    getChildSchemaSelection(pointer: JSONPointer, property: number | string): Array<JSONSchema>;
    /**
     * Sets the root data. This is optional and used within internal functions to support optional _data_-parameters.
     * On every change in data, call this method with that latest state `schemaService.setData(latestData)`;
     * @param data - latest root data corresponding to stored json-schema
     */
    setData(data: JSONData): void;
    /**
     * Set or change the application schema
     * @param {Object} schema
     */
    setSchema(schema: JSONSchema): void;
    resetCache(): void;
    /**
     * Return the json-schema for the requested pointer. Resolved the pointer on the stored schema by the accompanied
     * json-data, which is required to resolve optional json-schema values.
     *
     * @param pointer - pointer in data
     * @param [data] - root data, corresponding to json-schema.
     *     This is optional, when the root-data is up-to-date (via setData)
     * @return json-schema for the requested pointer
     */
    get(pointer: JSONPointer, data?: JSONData): JSONData;
    destroy(): void;
}
