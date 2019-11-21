const Core = require("json-schema-library").cores.JsonEditor;
const copy = require("./utils/copy");
const jsl = require("json-schema-library");
const getChildSchemaSelection = require("json-schema-library").getChildSchemaSelection;


/**
 * Manages json-schema interactions and adds caching of reoccuring json-schema requests
 *
 * @param {Object} schema       - json-schema
 * @param {Object} [data={}]    - data corresponding to json-schema
 * @param {Core} [core={}]      - instance of json-schema-library Core
 */
class SchemaService {

    constructor(schema = {}, data = {}, core = new Core()) {
        this.core = core;
        this.setSchema(schema);
        this.setData(data);
    }

    /**
     * Update data by any missing (default) values specified in the json-schema
     * @param {Object} [data=currentData]   - update given data or use the internal stored data (via `setData(data)`)
     * @param {Object} [schema]             - specific json schema, or the internal store schema (via `setSchema(root)`)
     * @return {Any} json data with valid default data values
     */
    addDefaultData(data = this.data, schema = this.schema) {
        return this.core.getTemplate(data);
    }

    /**
     * Create the template data object based on the json-schema, which fullfills the schemas structure as much as
     * possible
     * @param  {Object} schema
     * @return {Any} data corresponding to json-schema
     */
    getTemplate(schema) {
        return this.core.getTemplate({}, schema);
    }

    /**
     * @param  {JsonPointer} pointer
     * @param  {String|Number} property
     * @return {Array} list of valid items to insert at the given position
     */
    getChildSchemaSelection(pointer, property) {
        const parentSchema = this.get(pointer);
        return getChildSchemaSelection(this.core, parentSchema, property);
    }

    /**
     * Sets the root data. This is optional and used within internal functions to support optional _data_-parameters.
     * On every change in data, call this method with that latest state `schemaService.setData(latestData)`;
     *
     * @param {Any} data    - latest root data corresponding to stored json-schema
     */
    setData(data) {
        this.data = this.addDefaultData(data);
        this.resetCache();
    }

    /**
     * Set or change the application schema
     * @param {Object} schema
     */
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
     * @param  {JsonPointer} pointer    - pointer in data
     * @param  {Any} [data]             - root data, corresponding to json-schema. This is optional, when the root-data
     *                                       is up-to-date (via setData)
     * @return {Object} json-schema for the requested pointer
     */
    get(pointer, data) {
        if (data) {
            const result = jsl.getSchema(this.core, pointer, data, this.schema);
            return copy(result);
        }

        if (this.cache[pointer] === undefined) {
            const result = jsl.getSchema(this.core, pointer, this.data, this.schema);
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


module.exports = SchemaService;
