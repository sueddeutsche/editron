import { JSONPointer } from "../types";
import Controller from "../Controller";
import { EditorPlugin } from "../editors/Editor";


interface EditorConstructor {
    editorOf(pointer, controller, options): boolean;
}


/**
 * Selects an editor based on the given schema
 *
 * @param editorViews - List of editors with a static function 'editorOf'
 * @param pointer - current pointer in data
 * @param controller
 * @param options - the complete and resolved (UISchema) options object (editron:ui + additions)
 * @return The constructor of the chosen editor od false if no editor could be resolved
 *  or is denied
 */
function select(editors: Array<EditorPlugin>, pointer: JSONPointer, controller: Controller, options): EditorPlugin|false|undefined {
    // @todo export this to a configurable function (this is distributed across modules: json-schema-library)
    if (/_id$/.test(pointer)) {
        return false; // abort if it is an internal value
    }

    const schema = controller.service("schema").get(pointer);
    if (schema.type === "error") {
        // data-pointer could not be found in schema
        // @todo find a better solution for additional data: maybe an 'additional data'-editor
        return false;
    }

    // @ui-option hidden
    if (options.hidden === true) {
        return false;
    }

    for (let i = 0, l = editors.length; i < l; i += 1) {
        if (editors[i].editorOf(pointer, controller, options)) {
            return editors[i];
        }
    }

    return undefined;
}


export default select;
