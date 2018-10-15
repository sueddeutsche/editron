const Core = require("json-schema-library").cores.JsonEditor;
const copy = require("./utils/copy");
const jsl = require("json-schema-library");
const getChildSchemaSelection = require("json-schema-library").getChildSchemaSelection;


class SchemaService {

    constructor(schema = {}, data = {}, core = new Core()) {
        this.core = core;
        this.setSchema(schema);
        this.setData(data);
    }

    addDefaultData(data = this.data, schema = this.schema) {
        return this.core.getTemplate(schema, data);
    }

    getTemplate(schema) {
        return this.core.getTemplate(schema);
    }

    getChildSchemaSelection(pointer, property) {
        const parentSchema = this.get(pointer);
        return getChildSchemaSelection(this.core, parentSchema, property);
    }

    setData(data) {
        this.data = this.addDefaultData(data);
        this.resetCache();
    }

    setSchema(schema) {
        this.core.setSchema(schema);
        this.schema = this.core.rootSchema;
        this.resetCache();
    }

    resetCache() {
        this.cache = {};
    }

    // return the json-schema for the given json-pointer
    get(pointer, data) {
        if (data) {
            const result = jsl.getSchema(this.core, this.schema, data, pointer);
            return copy(result);
        }

        if (this.cache[pointer] === undefined) {
            const result = jsl.getSchema(this.core, this.schema, this.data, pointer);
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
