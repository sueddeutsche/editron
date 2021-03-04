import copy from "./utils/copy";
import { getSchema, getChildSchemaSelection, JsonEditor as Core } from "json-schema-library";
export default class SchemaService {
    /**
     * Manages json-schema interactions and adds caching of reoccuring json-schema requests
     * @param schema - json-schema
     * @param [data] - data corresponding to json-schema
     * @param [core] - instance of json-schema-library Core
     */
    constructor(schema = { type: "object" }, data = {}, core = new Core()) {
        /** cache for resolved json-pointer */
        this.cache = {};
        this.core = core;
        this.setSchema(schema);
        this.setData(data);
    }
    /**
     * Update data by any missing (default) values specified in the json-schema
     * @param [data=currentData]   - update given data or use the internal stored data (via `setData(data)`)
     * @param [schema]             - specific json schema, or the internal store schema (via `setSchema(root)`)
     * @return json data with valid default data values
     */
    addDefaultData(data = this.data, schema = this.schema) {
        return this.core.getTemplate(data, schema);
    }
    /**
     * Create the template data object based on the json-schema, which fullfills the schemas structure as much as
     * possible
     * @return data corresponding to json-schema
     */
    getTemplate(schema) {
        return this.core.getTemplate(undefined, schema);
    }
    /**
     * @return list of valid items to insert at the given position
     */
    getChildSchemaSelection(pointer, property) {
        const parentSchema = this.get(pointer);
        return getChildSchemaSelection(this.core, property, parentSchema);
    }
    /**
     * Sets the root data. This is optional and used within internal functions to support optional _data_-parameters.
     * On every change in data, call this method with that latest state `schemaService.setData(latestData)`;
     * @param data - latest root data corresponding to stored json-schema
     */
    setData(data) {
        this.data = this.addDefaultData(data);
        this.resetCache();
    }
    /** Set or change the application schema */
    setSchema(schema) {
        this.core.setSchema(schema);
        this.schema = this.core.getSchema();
        this.resetCache();
    }
    resetCache() {
        this.cache = {};
    }
    /**
     * Return the json-schema for the requested pointer. Resolved the pointer on the stored schema by the accompanied
     * json-data, which is required to resolve optional json-schema values.
     *
     * @param pointer - pointer in data
     * @param [data] - root data, corresponding to json-schema.
     *     This is optional, when the root-data is up-to-date (via setData)
     * @return json-schema for the requested pointer
     */
    get(pointer, data) {
        if (data) {
            const result = getSchema(this.core, pointer, data, this.schema);
            return copy(result);
        }
        if (this.cache[pointer] === undefined) {
            const result = getSchema(this.core, pointer, this.data, this.schema);
            if (result.variableSchema === true) {
                // @special case: do not cache dynamic schema object (oneOf)
                return result;
            }
            this.cache[pointer] = copy(result);
        }
        return this.cache[pointer];
    }
    destroy() {
        this.setData(null);
        this.setSchema(null);
    }
}
