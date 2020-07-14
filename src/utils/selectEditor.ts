/**
 * Selects an editor based on the given schema
 *
 * @param  {Array} editorViews  - List of editors with a static function 'editorOf'
 * @param  {String} pointer     - current pointer in data
 * @param  {Controller} controller
 * @param  {Object} options     - the complete and resolved (UISchema) options object (editron:ui + additions)
 * @return {Boolean|Constructor} The constructor of the chosen editor od false if no editor could be resolved
 *  or is denied
 */
export default function select(editorViews, pointer, controller, options) {
    // @todo export this to a configurable function (this is distributed across modules: json-schema-library)
    if (/_id$/.test(pointer)) {
        return false; // abort if it is an internal value
    }

    const schema = controller.schema().get(pointer);
    if (schema.type === "error") {
        // data-pointer could not be found in schema
        // @todo find a better solution for additional data: maybe an 'additional data'-editor
        return false;
    }

    // @ui-option hidden
    if (options.hidden === true) {
        return false;
    }

    for (let i = 0, l = editorViews.length; i < l; i += 1) {
        if (editorViews[i].editorOf(pointer, controller, options)) {
            return editorViews[i];
        }
    }

    return undefined;
}
