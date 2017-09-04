const UI_PROPERTY = require("./UISchema").UI_PROPERTY;


function select(editorViews, pointer, controller, options) {
    if (/_id$/.test(pointer)) {
        return false;
    }

    const schema = controller.schema().get(pointer);

    if (schema.type === "error") {
        // pointer could not be found in schema
        // @todo find a better solution for additional data: maybe an 'additional data'-editor
        // console.warn(`Failed retrieving schema for '${pointer}': ${schema.message}`, controller.data().get(pointer));
        return false;
    }

    if (schema[UI_PROPERTY] == null) {
        // console.warn(`Missing ui-object in schema ${pointer}:`, schema);

    // @ui-option hidden and
    // @legacy support: jdorn/json-editor
    } else if (schema[UI_PROPERTY].hidden === true || (schema.options && schema.options.hidden === true)) {
        return false;
    }

    for (let i = 0, l = editorViews.length; i < l; i += 1) {
        if (editorViews[i].editorOf(pointer, controller, options)) {
            return editorViews[i];
        }
    }

    return undefined;
}


module.exports = select;
