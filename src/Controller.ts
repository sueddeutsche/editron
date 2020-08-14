import gp from "gson-pointer";
import { Foxy, Options as ProxyOptions } from "@technik-sde/foxy";
import jsonSchemaLibrary from "json-schema-library";
import addValidator from "json-schema-library/lib/addValidator";
import DataService, { EventType as DataServiceEvent, isMoveChange, isDeleteChange } from "./services/DataService";
import SchemaService from "./services/SchemaService";
import ValidationService from "./services/ValidationService";
import LocationService, { EventType as LocationEvent } from "./services/LocationService";
import State from "./services/State";
import selectEditor from "./utils/selectEditor";
import _createElement from "./utils/createElement";
import addItem from "./utils/addItem";
import UISchema from "./utils/UISchema";
import getID from "./utils/getID";
import plugin, { Plugin } from "./plugin";
import i18n from "./utils/i18n";
import createProxy from "./utils/createProxy";
import { JSONPointer, JSONSchema, JSONData, FormatValidator, KeywordValidator } from "./types";
import { Editor, EditorPlugin } from "./editors/Editor";

import oneOfEditor from "./editors/oneofeditor";
import arrayEditor from "./editors/arrayeditor";
import objectEditor from "./editors/objecteditor";
import valueEditor from "./editors/valueeditor";

const { JsonEditor: Core } = jsonSchemaLibrary.cores;


/** throws an error, when given pointer is not a valid jons-pointer */
function assertValidPointer(pointer: JSONPointer): void {
    if (pointer[0] !== "#") {
        throw new Error(`Invalid json(schema)-pointer: ${pointer}`);
    }
}

/** removes the editor from the instances-inventory of active editors */
function removeEditorFrom(instances: { [p: string]: Array<Editor> }, editor): void {
    const pointer = editor.getPointer();
    if (instances[pointer]) {
        instances[pointer] = instances[pointer].filter(instance => editor !== instance);
        if (instances[pointer].length === 0) {
            delete instances[pointer];
        }
    }
}

/** callback on each editor-instance */
function eachInstance(instances: { [p: string]: Array<Editor> }, cb: (pointer: JSONPointer, editor) => void) {
    Object.keys(instances).forEach(pointer => {
        instances[pointer].forEach(editor => cb(pointer, editor));
    });
}

/** callback on each editor-instance */
function getInstances(instances: { [p: string]: Array<Editor> }, parentPointer: JSONPointer) {
    const editors = [];
    eachInstance(instances, (pointer, editor) => {
        if (pointer.startsWith(parentPointer)) {
            editors.push(...instances[pointer]);
        }
    });
    return editors;
}


export type Options = {
    log?: boolean;
    editors?: Array<EditorPlugin>;
    proxy?: ProxyOptions|Foxy;
    plugins?;
};


interface EditorInstance {
    toElement(): HTMLElement;
}


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
 * @param [schema] - json schema describing required data/form template
 * @param [data] - initial data for given json-schema
 * @param [options] - configuration options
 * @param [options.editors] - list of editron-editors/widgets to use. Order defines editor to use
 *      (based on editorOf-method)
 */
export default class Controller {
    #proxy: Foxy;
    core;
    dataService: DataService;
    destroyed = false;
    disabled = false;
    editors: Array<EditorPlugin>;
    instances: { [p:string]: any };
    locationService: LocationService;
    options: Options;
    schemaService: SchemaService;
    state: State;
    validationService: ValidationService;
    plugins: Array<Plugin> = [];


    constructor(schema: JSONSchema = { type: "object" }, data: JSONData = {}, options: Options = {}) {
        schema = UISchema.extendSchema(schema);

        this.options = {
            editors: [
                ...plugin.getEditors(),
                oneOfEditor,
                arrayEditor,
                objectEditor,
                valueEditor
            ],
            ...options,
        };

        this.editors = this.options.editors;
        this.state = new State();
        this.instances = {};
        this.core = new Core();
        this.#proxy = createProxy(this.options.proxy);

        plugin.getValidators().forEach(([validationType, ...validator]) => {
            try {
                if (validationType === "format") {
                    // @ts-ignore
                    return this.addFormatValidator(...validator);
                } else if (validationType === "keyword") {
                    // @ts-ignore
                    return this.addKeywordValidator(...validator);
                }
                throw new Error(`Unknown validation type '${validationType}'`);

            } catch (e) {
                console.log("Error:", e.message);
            }

            return false;
        });

        this.schemaService = new SchemaService(schema, data, this.core);
        this.validationService = new ValidationService(this.state, schema, this.core);
        // enable i18n error-translations
        this.validationService.setErrorHandler(error => i18n.translateError(this, error));
        // merge given data with template data
        data = this.schemaService.addDefaultData(data, schema);

        this.dataService = new DataService(this.state, data);
        // update container will be called before any editor change-notification
        // this gives us time, to manage update-pointer and destory events of
        // known editors
        this.dataService.on(DataServiceEvent.UPDATE_CONTAINER, (pointer, changes) => {
                const changePointers = [];
                const removeEditors = [];

                for (let i = 0, l = changes.length; i < l; i += 1) {
                    const change = changes[i];
                    // we need to prefetch all editors that are going to change,
                    // because upcoming modification will mess with pointers per change
                    // (and thus mangle updated and not-updated editors)
                    if (isMoveChange(change)) {
                        changePointers.push({
                            old: change.old,
                            next: change.next,
                            editors: getInstances(this.instances, change.old)
                        });

                    // immediately destroy editors
                    } else if (isDeleteChange(change)) {
                        getInstances(this.instances, change.old).forEach(ed => ed.destroy());
                    }
                }

                // notify editors of pointer changes
                changePointers.forEach(change => {
                    change.editors.forEach(ed => ed.updatePointer(ed.getPointer().replace(change.old, change.next)))
                });
            });

        // start validation after data has been updated
        this.onAfterDataUpdate = this.dataService.on(DataServiceEvent.AFTER_UPDATE, this.onAfterDataUpdate.bind(this));

        // run initial validation
        this.validateAll();

        this.locationService = new LocationService();
        this.locationService.on(LocationEvent.FOCUS, (pointer: JSONPointer) => {
            console.log("focus", pointer, this.schemaService.get(pointer));
        });

        // @lifecycle hook initialize on controller ready
        if (Array.isArray(options.plugins)) {
            this.plugins = options.plugins.map(plugin => plugin.initialize(this));
        }
    }

    getPlugin(pluginId: string) {
        return this.plugins.find(plugin => plugin.id === pluginId);
    }

    /** reset undo history */
    resetUndoRedo(): void {
        this.dataService.resetUndoRedo();
    }

    /**
     * enable or disable the editor input-interaction
     * @param active if false, deactivates editor
     */
    setActive(active = true) : void{
        const disabled = active === false;
        if (this.disabled === disabled) {
            return;
        }
        this.disabled = disabled;
        eachInstance(this.getInstances(), (pointer, editor) => {
            editor.setActive(!this.disabled);
        });
    }

    /** returns the editors active state */
    isActive(): boolean {
        return !this.disabled;
    }

    /**
     * Helper to create dom elements via mithril syntax
     *
     * @param  {String} selector    - a css selector describing the desired element
     * @param  {Object} attributes  - a map of dom attribute:value of the element (reminder className = class)
     * @returns the resulting dom-element (not attached)
     */
    createElement(selector: string, attributes?: object): HTMLElement { // eslint-disable-line class-methods-use-this
        return _createElement(selector, attributes);
    }

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
    createEditor(pointer: JSONPointer, element: HTMLElement, options?): Editor|undefined {
        if (pointer == null || element == null) {
            throw new Error(`Missing ${pointer == null ? "pointer" : "element"} in createEditor`);
        }

        assertValidPointer(pointer);

        // merge schema["editron:ui"] object with options. options precede
        const instanceOptions = {
            id: getID(pointer),
            pointer,
            disabled: this.disabled,
            ...UISchema.copyOptions(pointer, this),
            ...options
        };

        instanceOptions.attrs = {
            "data-title": instanceOptions.title,
            ...instanceOptions.attrs
        }

        // find a matching editor
        const EditorConstructor = selectEditor(this.getEditors(), pointer, this, instanceOptions);
        if (EditorConstructor === false) {
            return undefined;
        }

        if (EditorConstructor === undefined) {
            this.options.log && console.warn(`Could not resolve an editor for ${pointer}`, this.schema().get(pointer));
            return undefined;
        }

        // iniitialize editor and save editor in list
        // @TODO loose reference to destroyed editors
        const editor = new EditorConstructor(pointer, this, instanceOptions);
        const dom = editor.toElement();
        element.appendChild(dom);
        editor.setActive(!instanceOptions.disabled);
        dom.setAttribute("data-point", pointer);
        this.addInstance(pointer, editor);

        // @lifecycle hook create widget
        this.plugins.forEach(plugin => {
            if (plugin.onCreateEditor) {
                plugin.onCreateEditor(pointer, editor, instanceOptions);
            }
        });

        return editor;
    }

    /**
     * Call this method, when your editor is destroyed, deregistering its instance on editron
     * @param editor - editor instance to remove
     */
    removeInstance(editor: Editor) {
        // controller inserted child and removes it here again
        // @ts-ignore
        const $element = editor.toElement();
        if ($element.parentNode) {
            $element.parentNode.removeChild($element);
        }

        // @lifecycle hook destroy widget
        this.plugins.forEach(plugin => {
            if (plugin.onDestroyEditor) {
                plugin.onDestroyEditor(editor.getPointer(), editor);
            }
        });

        removeEditorFrom(this.instances, editor);
    }

    addInstance(pointer: JSONPointer, editor: Editor) {
        this.instances[pointer] = this.instances[pointer] || [];
        this.instances[pointer].push(editor);
    }

    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param pointer - to array on which to insert the child
     * @param index - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer: JSONPointer, index = 0) {
        addItem(this.data(), this.schema(), this.locationService, pointer, index);
        this.locationService.goto(gp.join(pointer, index, true));
    }

    /**
     * Get or update data from a pointer
     * @returns DataService instance
     */
    data(): DataService { return this.dataService; }

    /**
     * Get the json schema from a pointer or replace the schema
     * @returns SchemaService instance
     */
    schema(): SchemaService { return this.schemaService; }

    /**
     * @returns proxy instance
     */
    proxy(): Foxy { return this.#proxy; }

    /**
     * Validate data based on a json-schema and register to generated error events
     *
     * - start validation
     * - get your current errors at `pointer`
     * - hook into validation to receive your errors at `pointer`
     *
     * @returns ValidationService instance
     */
    validator(): ValidationService { return this.validationService; }

    /**
     * ## Usage
     *  goto(pointer) - Jump to given json pointer. This might also load another page if the root property changes.
     *  setCurrent(pointer) - Update current pointer, but do not jump to target
     * @returns LocationService-Singleton
     */
    location(): LocationService { return this.locationService; }

    /**
     * Set the application data
     * @param {Any} data    - json data matching registered json-schema
     */
    setData(data: JSONData) {
        data = this.schemaService.addDefaultData(data);
        this.data().set("#", data);
    }

    /**
     * @param {JsonPointer} [pointer="#"] - location of data to fetch. Defaults to root (all) data
     * @returns data at the given location
     */
    getData(pointer: JSONPointer = "#"): JSONData {
        return this.data().get(pointer);
    }

    /**
     * @returns registered editor-widgets used to edit the json-data
     */
    getEditors() { return this.editors; }

    /**
     * @returns currently active editor/widget instances
     */
    getInstances() { return this.instances; }

    /**
     * @param format - value of _format_
     * @param validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addFormatValidator(format: string, validator: FormatValidator): void {
        addValidator.format(this.core, format, validator);
    }

    /**
     * @param datatype - JSON-Schema datatype to register attribute, e.g. "string" or "object"
     * @param keyword - custom keyword
     * @param validator - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addKeywordValidator(datatype: string, keyword: string, validator: KeywordValidator): void {
        addValidator.keyword(this.core, datatype, keyword, validator);
    }

    /**
     * Change the new schema for the current data
     * @param schema   - a valid json-schema
     */
    setSchema(schema: JSONSchema): void {
        schema = UISchema.extendSchema(schema);
        this.validationService.set(schema);
        this.schemaService.setSchema(schema);
    }

    // update data in schema service
    update(): void {
        this.schemaService.setData(this.dataService.get());
    }

    /**
     * Starts validation of current data
     */
    validateAll(): void {
        setTimeout(() =>
            this.destroyed !== true && this.validationService.validate(this.dataService.getDataByReference())
        );
    }

    /** Destroy the editor, its widgets and services */
    destroy(): void {
        // delete all editors
        Object.keys(this.instances).forEach(pointer => {
            this.instances[pointer] && this.instances[pointer].forEach(instance => instance.destroy());
        });

        this.destroyed = true;
        this.instances = {};
        this.schemaService.destroy();
        this.validationService.destroy();
        this.dataService.destroy();
        this.dataService.off(DataServiceEvent.AFTER_UPDATE, this.onAfterDataUpdate);
    }

    onAfterDataUpdate({ pointer }): void {
        this.update();

        // @feature selective-validation
        if (pointer.includes("/")) {
            // @attention validate parent-object or array, in order to support parent-validators.
            // Any higher validators will still be ignore
            pointer = pointer.replace(/\/[^/]+$/, "");
        }

        setTimeout(() => {
            const data = this.dataService.getDataByReference();
            this.destroyed !== true && this.validationService.validate(data, pointer);
        });
    }

    changePointer(newPointer: JSONPointer, editor: Editor): void {
        // @ts-ignore
        editor.__called = true;

        removeEditorFrom(this.instances, editor);
        editor.toElement().setAttribute("data-point", newPointer);
        this.addInstance(newPointer, editor);
    }
}
