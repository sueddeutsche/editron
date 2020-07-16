import { JSONPointer } from "../types";
import Controller from "../Controller";
import { Editor } from "../editors/Editor";
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
declare function select(editors: Array<Editor>, pointer: JSONPointer, controller: Controller, options: any): Editor | false | undefined;
export default select;
