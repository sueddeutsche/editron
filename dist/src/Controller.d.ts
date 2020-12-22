import DataService from "./services/dataservice";
import InstanceService from "./services/InstanceService";
import LocationService, { Options as LocationServiceOptions } from "./services/LocationService";
import { Plugin } from "./plugin";
import SchemaService from "./services/SchemaService";
import Store from "./store";
import ValidationService from "./services/ValidationService";
import { Editor, EditorPlugin } from "./editors/Editor";
import { Foxy, Options as ProxyOptions } from "@technik-sde/foxy";
import { JSONPointer, JSONSchema, JSONData, FormatValidator, KeywordValidator, ValidationError } from "./types";
export declare type i18nFunction = (object?: any) => string;
export declare type i18nErrorFunction = (controller: Controller, error: ValidationError) => string;
export declare type Options = {
    /** print debug messages */
    log?: boolean;
    /** list of editors to use, replaces plugin and default editors */
    editors?: Array<EditorPlugin>;
    /** set to false, to exclude default base-editors (object, array, values). Defaults to true */
    addDefaultEditors?: boolean;
    /** proxy configuration for data and image retrieval */
    proxy?: ProxyOptions | Foxy;
    /** list of plugins to use */
    plugins?: Array<Plugin>;
    /** configuration of location service */
    locationService?: LocationServiceOptions;
    /** string mapping values */
    i18n?: {
        strings?: {
            [p: string]: string | i18nFunction;
        };
        errors?: {
            [p: string]: string | i18nErrorFunction;
        };
    };
};
export declare type Services = {
    instances: InstanceService;
    data: DataService;
    validation: ValidationService;
    schema: SchemaService;
    location: LocationService;
};
/**
 * Main component to build editors. Each editor should receive the controller, which carries all required services
 * for editor initialization
 *
 * # Usage
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
 */
export default class Controller {
    #private;
    core: any;
    /** internal helper. Set to `true`, if editron has been destroyed */
    destroyed: boolean;
    /** active state of editor */
    disabled: boolean;
    /** list of editor-widgets to generate form for this instance */
    editors: Array<EditorPlugin>;
    /** set to true,  */
    addDefaultEditors: boolean;
    /** final options used by this editron instance */
    options: Options;
    /** list of active plugins for this instance */
    plugins: Array<Plugin>;
    /** list instantiated services */
    services: Services;
    /** current state of errors, ui and data */
    store: Store;
    /**
     * Create a new editron instance, which will be used to create ui-forms for specific
     * data-points via `controller.createEditor(pointer, dom);`
     *
     * @param [schema] - json schema describing required data/form template
     * @param [data] - initial data for given json-schema
     * @param [options] - configuration options
     * @param [options.editors] - list of editron-editors/widgets to use. Order defines editor to use
     *      (based on editorOf-method)
     * @param [options.plugins] - list of editron-plugins to use
     */
    constructor(schema?: JSONSchema, data?: JSONData, options?: Options);
    service<T extends keyof Services>(serviceName: T): Services[T];
    getPlugin(pluginId: string): Plugin;
    notifyPlugins(method: string, ...args: any[]): void;
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
     * @param selector - a css selector describing the desired element
     * @param attributes - a map of dom attribute:value of the element (reminder className = class)
     * @returns the resulting dom-element (not attached)
     */
    createElement(selector: string, attributes?: any): HTMLElement;
    /**
     * Add additional editors to available editors for json-schema rendering.
     * Note, that order is important. First editor to register, will be
     * selected first. Registered editors will be added to start of list.
     * @param editors one or many editors to add to start of editor-list
     */
    registerEditor(...editors: Array<EditorPlugin>): void;
    /**
     * @throws
     * The only entry point to create editors.
     * Use in application and from editors to create (delegate) child editors
     *
     * @param pointer - data pointer to editor in current state
     * @param element - parent element of create editor. Will be appended automatically
     * @param [options] - individual editor options
     * @returns created editor-instance or undefined;
     */
    createEditor(pointer: JSONPointer, element: HTMLElement, options?: any): Editor | undefined;
    /**
     * Call this method, to destroy your editors, deregistering its instance on editron
     * @param editor - editor instance to remove
     */
    destroyEditor(editor: Editor): void;
    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param pointer - to array on which to insert the child
     * @param index - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer: JSONPointer, index?: number): void;
    /**
     * @returns proxy instance
     */
    proxy(): Foxy;
    /**
     * Set the application data
     * @param data - json data matching registered json-schema
     */
    setData(data: JSONData, options?: any): void;
    /**
     * @param [pointer="#"] - location of data to fetch. Defaults to root (all) data
     * @returns data at the given location
     */
    getData(pointer?: JSONPointer): JSONData;
    /**
     * Change the new schema for the current data
     * @param schema   - a valid json-schema
     */
    setSchema(schema: JSONSchema): void;
    getSchema(pointer?: JSONPointer): JSONSchema;
    /** @debug return editron and global-state */
    getStates(): (import("@rematch/core").ExtractRematchStateFromModels<{
        data: {
            state: import("./store/models/data").DataState;
            reducers: {
                clearHistory(state: import("./store/models/data").DataState): {
                    past: any[];
                    future: any[];
                    undoSize: number;
                    present: any;
                };
                removeLastUndo(state: import("./store/models/data").DataState): {
                    past: any[];
                    undoSize: number;
                    present: any;
                    future: any[];
                };
                undo(state: import("./store/models/data").DataState): import("./store/models/data").DataState;
                redo(state: import("./store/models/data").DataState): import("./store/models/data").DataState;
                set(state: import("./store/models/data").DataState, action: import("./store/models/data").ActionSet): import("./store/models/data").DataState;
            };
        };
        errors: {
            state: any[];
            reducers: {
                set(state: import("./store/models/errors").ErrorState, errors?: import("./store/models/errors").ErrorState): import("./store/models/errors").ErrorState;
            };
        };
    }> | import("@rematch/core").ExtractRematchStateFromModels<{
        ui: {
            state: import("./store/models/ui").UIState;
            reducers: {
                setCurrentPage(state: import("./store/models/ui").UIState, pointer: string): import("./store/models/ui").UIState;
                setCurrentPointer(state: import("./store/models/ui").UIState, pointer: string): import("./store/models/ui").UIState;
                showOverlay(state: import("./store/models/ui").UIState, overlayIsVisible: boolean): import("./store/models/ui").UIState;
            };
        };
    }>)[];
    /** returns the parent editor */
    getParentEditor(editor: Editor): Editor | undefined;
    /** returns the root editor of the editor tree */
    getRootEditor(editor: Editor): Editor | undefined;
    /** start validation of current data */
    validateAll(): void;
    /** Destroy the editor, its widgets and services */
    destroy(): void;
}
