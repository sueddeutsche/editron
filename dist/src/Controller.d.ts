import { Foxy, Options as ProxyOptions } from "@technik-sde/foxy";
import DataService from "./services/DataService";
import SchemaService from "./services/SchemaService";
import ValidationService from "./services/ValidationService";
import LocationService from "./services/LocationService";
import { JSONPointer, JSONSchema, JSONData, FormatValidator, KeywordValidator } from "./types";
import { Editor } from "./editors/Editor";
export declare type Options = {
    log?: boolean;
    editors?: Array<Editor>;
    proxy?: ProxyOptions | Foxy;
};
/**
 * Main component to build editors. Each editor should receive the controller, which carries all required services
 * for editor initialization
 *
 * ### Usage
 *
 * Instantiate the controller
 *
 * ```js
 * import Controller from "editron";
 * // jsonSchema = { type: "object", required: ["title"], properties: { title: { type: "string" } } }
 * const editron = new Controller(jsonSchema);
 * ```
 *
 * or, using all parameters
 *
 * ```js
 *  import Controller from "editron";
 *  // jsonSchema = { type: "object", required: ["title"], properties: { title: { type: "string" } } }
 *  // data = { title: "Hello" } - or simply use {}
 *  // options = { editors: [ complete list of custom editors ] }
 *  const editron = new Controller(jsonSchema, data, options);
 * ```
 *
 * and start rendering editors
 *
 * ```js
 *  const editor = editron.createEditor("#", document.querySelector("#editor"));
 *  // render from title only: editron.createEditor("#/title", document.querySelector("#title"));
 * ```
 *
 * to fetch the generated data use
 *
 * ```js
 *  const data = editron.getData();
 * ```
 *
 * @param  {Object} schema          - json schema describing required data/form template
 * @param  {Any} data               - initial data for given json-schema
 * @param  {Object} [options]       - configuration options
 * @param  {Array} options.editors  - list of editron-editors/widgets to use. Order defines editor to use
 *      (based on editorOf-method)
 */
export default class Controller {
    #private;
    core: any;
    dataService: DataService;
    destroyed: boolean;
    disabled: boolean;
    editors: Array<Editor>;
    instances: {
        [p: string]: any;
    };
    locationService: any;
    options: Options;
    schemaService: SchemaService;
    state: any;
    validationService: ValidationService;
    constructor(schema?: JSONSchema, data?: JSONData, options?: Options);
    /** reset undo history */
    resetUndoRedo(): void;
    /**
     * enable or disable the editor input-interaction
     * @param active if false, deactivates editor
     */
    setActive(active?: boolean): void;
    /** returns the editors active state */
    isActive(): boolean;
    /**
     * Helper to create dom elements via mithril syntax
     *
     * @param  {String} selector    - a css selector describing the desired element
     * @param  {Object} attributes  - a map of dom attribute:value of the element (reminder className = class)
     * @returns the resulting dom-element (not attached)
     */
    createElement(selector: string, attributes?: object): HTMLElement;
    /**
     * @throws
     * The only entry point to create editors.
     * Use in application and from editors to create (delegate) child editors
     *
     * @param  pointer - data pointer to editor in current state
     * @param  element - parent element of create editor. Will be appended automatically
     * @param  [options] - individual editor options
     * @returns created editor-instance or undefined;
     */
    createEditor(pointer: JSONPointer, element: HTMLElement, options: any): Editor | undefined;
    /**
     * Call this method, when your editor is destroyed, deregistering its instance on editron
     * @param editor - editor instance to remove
     */
    removeInstance(editor: Editor): void;
    addInstance(pointer: JSONPointer, editor: Editor): void;
    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param {String} pointer  - to array on which to insert the child
     * @param {Number} index    - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer: JSONPointer, index?: number): void;
    /**
     * Get or update data from a pointer
     * @returns DataService instance
     */
    data(): DataService;
    /**
     * Get the json schema from a pointer or replace the schema
     * @returns SchemaService instance
     */
    schema(): SchemaService;
    /**
     * @returns proxy instance
     */
    proxy(): Foxy;
    /**
     * Validate data based on a json-schema and register to generated error events
     *
     * - start validation
     * - get your current errors at `pointer`
     * - hook into validation to receive your errors at `pointer`
     *
     * @returns ValidationService instance
     */
    validator(): ValidationService;
    /**
     * ## Usage
     *  goto(pointer) - Jump to given json pointer. This might also load another page if the root property changes.
     *  setCurrent(pointer) - Update current pointer, but do not jump to target
     * @returns LocationService-Singleton
     */
    location(): typeof LocationService;
    /**
     * Set the application data
     * @param {Any} data    - json data matching registered json-schema
     */
    setData(data: JSONData): void;
    /**
     * @param {JsonPointer} [pointer="#"] - location of data to fetch. Defaults to root (all) data
     * @returns data at the given location
     */
    getData(pointer?: JSONPointer): JSONData;
    /**
     * @returns registered editor-widgets used to edit the json-data
     */
    getEditors(): Editor[];
    /**
     * @returns currently active editor/widget instances
     */
    getInstances(): {
        [p: string]: any;
    };
    /**
     * @param format - value of _format_
     * @param validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addFormatValidator(format: string, validator: FormatValidator): void;
    /**
     * @param datatype - JSON-Schema datatype to register attribute, e.g. "string" or "object"
     * @param keyword - custom keyword
     * @param validator - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addKeywordValidator(datatype: string, keyword: string, validator: KeywordValidator): void;
    /**
     * Change the new schema for the current data
     * @param schema   - a valid json-schema
     */
    setSchema(schema: JSONSchema): void;
    update(): void;
    /**
     * Starts validation of current data
     */
    validateAll(): void;
    /** Destroy the editor, its widgets and services */
    destroy(): void;
    onAfterDataUpdate({ pointer }: {
        pointer: any;
    }): void;
    changePointer(newPointer: JSONPointer, editor: Editor): void;
}
