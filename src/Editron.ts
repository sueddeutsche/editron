import _createElement from "./utils/createElement";
import addItem from "./utils/addItem";
import { addValidator, JsonEditor as Core } from "json-schema-library";
import createProxy from "./utils/createProxy";
import DataService from "./services/dataservice";
import gp from "gson-pointer";
import { translate, translateError } from "./utils/i18n";
import InstanceService from "./services/InstanceService";
import LocationService, { Options as LocationServiceOptions } from "./services/LocationService";
import plugin, { Plugin } from "./plugin";
import SchemaService from "./services/SchemaService";
import selectEditor from "./utils/selectEditor";
import { getState as getGlobalState } from "./store/global";
import Store from "./store";
import UISchema from "./utils/UISchema";
import ValidationService from "./services/ValidationService";
import { Editor, EditorPlugin, SetEnabledEvent } from "./editors/Editor";
import { Foxy, Options as ProxyOptions } from "@technik-sde/foxy";
import { JSONPointer, JSONSchema, JSONData, FormatValidator, KeywordValidator, ValidationError } from "./types";

import oneOfEditor from "./editors/oneofeditor";
import arrayEditor from "./editors/arrayeditor";
import objectEditor from "./editors/objecteditor";
import valueEditor from "./editors/valueeditor";

export type i18nFunction = (object?) => string;
export type i18nErrorFunction = (editron: Editron, error: ValidationError) => string;


export type Options = {
    /** print debug messages */
    log?: boolean;
    /** list of editors to use, replaces plugin and default editors */
    editors?: Array<EditorPlugin>;
    /** set to false, to exclude default base-editors (object, array, values). Defaults to true */
    addDefaultEditors?: boolean;
    /** proxy configuration for data and image retrieval */
    proxy?: ProxyOptions|Foxy;
    /** list of plugins to use */
    plugins?: Array<Plugin>;
    /** configuration of location service */
    locationService?: LocationServiceOptions;
    /** string mapping values */
    i18n?: {
        strings?: { [p: string]: string | i18nFunction };
        errors?: { [p: string]: string | i18nErrorFunction };
    }
};


export type Services = {
    instances: InstanceService;
    data: DataService;
    validation: ValidationService;
    schema: SchemaService;
    location: LocationService;
}


/**
 * Main component to build editors. Each editor should receive the editron, which carries all required services
 * for editor initialization
 *
 * # Usage
 *
 * Instantiate the editron
 *
 * ```js
 * import Editron from "editron";
 * // jsonSchema = { type: "object", required: ["title"], properties: { title: { type: "string" } } }
 * const editron = new Editron(jsonSchema);
 * ```
 *
 * or, using all parameters
 *
 * ```js
 *  import Editron from "editron";
 *  // jsonSchema = { type: "object", required: ["title"], properties: { title: { type: "string" } } }
 *  // data = { title: "Hello" } - or simply use {}
 *  // options = { editors: [ complete list of custom editors ] }
 *  const editron = new Editron(jsonSchema, data, options);
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
export default class Editron {
    core;
    /** internal helper. Set to `true`, if editron has been destroyed */
    destroyed = false;
    /** active state of editor */
    disabled = false;
    /** list of editor-widgets to generate form for this instance */
    editors: Array<EditorPlugin> = [];
    /** set to true,  */
    addDefaultEditors: boolean;
    /** final options used by this editron instance */
    options: Options;
    /** list of active plugins for this instance */
    plugins: Array<Plugin> = [];
    /** list instantiated services */
    services: Services;
    /** current state of errors, ui and data */
    store: Store;
    /** editron proxy instance */
    #proxy: Foxy;


    /**
     * Create a new editron instance, which will be used to create ui-forms for specific
     * data-points via `editron.createEditor(pointer, dom);`
     *
     * @param [schema] - json schema describing required data/form template
     * @param [data] - initial data for given json-schema
     * @param [options] - configuration options
     * @param [options.editors] - list of editron-editors/widgets to use. Order defines editor to use
     *      (based on editorOf-method)
     * @param [options.plugins] - list of editron-plugins to use
     */
    constructor(schema: JSONSchema = { type: "object" }, data: JSONData = {}, options: Options = {}) {
        schema = UISchema.extendSchema(schema);

        this.options = {
            editors: [],
            addDefaultEditors: true,
            ...options
        };

        if (this.options.addDefaultEditors) {
            this.registerEditor(oneOfEditor, arrayEditor, objectEditor, valueEditor);
        }
        this.registerEditor(...plugin.getEditors());
        if (Array.isArray(this.options.editors)) {
            this.registerEditor(...this.options.editors);
        }

        this.store = new Store();
        this.core = new Core();
        this.#proxy = createProxy(this.options.proxy);

        // add strings and functions for translation
        if (this.options.i18n?.strings) {
            Object.assign(translate.strings, this.options.i18n.strings);
        }
        if (this.options.i18n?.errors) {
            Object.assign(translateError.strings, this.options.i18n.errors);
        }

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

        this.services = {
           instances: new InstanceService(this),
           location: new LocationService(this.options.locationService),
           data: new DataService(this.store),
           schema: new SchemaService(schema, data, this.core),
           validation: new ValidationService(this.store, schema, this.core)
        };

        this.service("data").watch(event => {
            switch (event.type) {
                // update container will be called before any editor change-notification this gives us time,
                // to manage update-pointer and destory events of known editors
                case "data:update:container":
                    this.services.instances.updateContainer(event.value.pointer, this, event.value.changes);
                    break;

                // sync latest data and start validation
                case "data:update:after": {
                    let { pointer } = event.value;
                    this.service("schema").setData(this.service("data").get());
                    // @feature selective-validation
                    if (pointer.includes("/")) {
                        // @attention validate parent-object or array, in order to support parent-validators.
                        // any higher validators will still be ignore
                        pointer = pointer.replace(/\/[^/]+$/, "");
                    }
                    setTimeout(() => {
                        const data = this.service("data").getDataByReference();
                        this.destroyed !== true && this.service("validation").validate(data, pointer);
                    });
                    break;
                }

                case "data:update:done":
                    setTimeout(() => this.notifyPlugins("onModifiedData", event.value));
                    break;
            }
        });

        // merge given data with template data and set initial data
        this.setData(data);
        this.resetUndoRedo();

        // enable i18n error-translations
        this.service("validation").setErrorHandler(error => translateError(this, error));
        // run initial validation
        this.validateAll();

        // @lifecycle hook initialize on editron ready
        if (Array.isArray(options.plugins)) {
            this.plugins = options.plugins.map(plugin => {
                plugin.initialize(this);
                return plugin;
            });
        }
    }

    service<T extends keyof Services>(serviceName: T): Services[T] {
        return this.services[serviceName];
    }

    getPlugin(pluginId: string): Plugin {
        return this.plugins.find(plugin => plugin.id === pluginId);
    }

    notifyPlugins(method: string, ...args) {
        this.plugins.forEach(plugin => {
            if (plugin[method]) {
                plugin[method](...args);
            }
        });
    }

    /**
     * @param format - value of _format_
     * @param validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addFormatValidator(format: string, validator: FormatValidator): void {
        // @ts-ignore
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
        // @ts-ignore
        addValidator.keyword(this.core, datatype, keyword, validator);
    }

    /** reset undo history */
    resetUndoRedo(): void {
        this.service("data").resetUndoRedo();
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
        this.service("instances").setActive(!this.disabled);
    }

    /** returns the editors active state */
    isActive(): boolean {
        return !this.disabled;
    }

    /**
     * Helper to create dom elements via mithril syntax
     * @param selector - a css selector describing the desired element
     * @param attributes - a map of dom attribute:value of the element (reminder className = class)
     * @returns the resulting dom-element (not attached)
     */
    createElement(selector: string, attributes?): HTMLElement { // eslint-disable-line class-methods-use-this
        return _createElement(selector, attributes);
    }

    /**
     * Add additional editors to available editors for json-schema rendering.
     * Note, that order is important. First editor to register, will be
     * selected first. Registered editors will be added to start of list.
     * @param editors one or many editors to add to start of editor-list
     */
    registerEditor(...editors: Array<EditorPlugin>) {
        this.editors = [...editors, ...this.editors];
    }

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
    createEditor(pointer: JSONPointer, element: HTMLElement, options?): Editor|undefined {
        assertValidPointer(pointer);
        if (element == null) {
            throw new Error(`Missing ${pointer == null ? "pointer" : "element"} in createEditor`);
        }

        // merge schema["editron:ui"] object with options. options precede
        const instanceOptions = {
            pointer,
            disabled: this.disabled,
            ...UISchema.copyOptions(pointer, this),
            ...options
        };

        instanceOptions.attrs = {
            // "data-title": instanceOptions.title,
            ...instanceOptions.attrs
        };

        // find a matching editor
        const EditorConstructor = selectEditor(this.editors, pointer, this, instanceOptions);
        if (EditorConstructor === false) {
            return undefined;
        }

        if (EditorConstructor === undefined) {
            this.options.log && console.warn(`Could not resolve an editor for ${pointer}`, this.service("schema").get(pointer));
            return undefined;
        }

        // @lifecycle hook to modify options
        this.plugins.filter(plugin => plugin.onEditorOptions)
            .forEach(plugin => plugin.onEditorOptions(pointer, instanceOptions));

        // iniitialize editor and notify instance manager
        const editor = new EditorConstructor(pointer, this, instanceOptions);
        const dom = editor.getElement();
        element.appendChild(dom);
        this.services.instances.add(editor);
        editor.update(<SetEnabledEvent>{ type: "active", value: !instanceOptions.disabled });

        // @lifecycle hook create widget
        this.plugins.filter(plugin => plugin.onCreateEditor)
            .forEach(plugin => plugin.onCreateEditor(pointer, editor, instanceOptions));

        return editor;
    }

    /**
     * Call this method, to destroy your editors, deregistering its instance on editron
     * @param editor - editor instance to remove
     */
    destroyEditor(editor: Editor): void {
        if (!editor) {
            return;
        }

        // @lifecycle hook destroy widget
        this.plugins.filter(plugin => plugin.onDestroyEditor)
            .forEach(plugin => plugin.onDestroyEditor(editor.getPointer(), editor));

        this.services.instances.remove(editor);

        // editron inserted child and removes it here again
        const $element = editor.getElement();
        $element?.parentNode?.removeChild($element);
        editor.destroy();
    }

    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param pointer - to array on which to insert the child
     * @param index - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer: JSONPointer, index = 0): void {
        addItem(this.service("data"), this.service("schema"), this.services.location, pointer, index);
        // @todo this might be a wrong falsy check within gson-pointer
        this.services.location.focusInputElement(gp.join(pointer, `${index}`, true));
    }

    /**
     * @returns proxy instance
     */
    proxy(): Foxy { return this.#proxy; }

    /**
     * Set the application data
     * @param data - json data matching registered json-schema
     */
    setData(data: JSONData, options?): void {
        data = this.service("schema").addDefaultData(data);
        this.service("data").set("#", data, options);
    }

    /**
     * @param [pointer="#"] - location of data to fetch. Defaults to root (all) data
     * @returns data at the given location
     */
    getData(pointer: JSONPointer = "#"): JSONData {
        return this.service("data").get(pointer);
    }

    /**
     * Change the new schema for the current data
     * @param schema   - a valid json-schema
     */
    setSchema(schema: JSONSchema): void {
        schema = UISchema.extendSchema(schema);
        this.service("validation").set(schema);
        this.service("schema").setSchema(schema);
    }

    getSchema(pointer?: JSONPointer): JSONSchema {
        return this.service("schema").get(pointer);
    }

    /** @debug return editron and global-state */
    getStates() {
        return [this.store.getState(), getGlobalState()];
    }

    /** returns the parent editor */
    getParentEditor(editor: Editor): Editor|undefined {
        let node = editor.getElement();
        while (node.parentNode !== null && node.parentNode !== document.body) {
            node = <HTMLElement>node.parentNode;
            if (node.dataset.point) {
                return this.service("instances").editorFromElement(node);
            }
        }
    }

    /** returns the root editor of the editor tree */
    getRootEditor(editor: Editor): Editor|undefined {
        let node = editor.getElement();
        let root = node;
        while (node.parentNode !== null && node.parentNode !== document.body) {
            node = <HTMLElement>node.parentNode;
            if (node.dataset.point) {
                root = node;
            }
        }
        return this.service("instances").editorFromElement(root);
    }

    /** start validation of current data */
    validateAll(): void {
        setTimeout(() =>
            this.destroyed !== true && this.service("validation").validate(this.service("data").getDataByReference())
        );
    }

    /** Destroy the editor, its widgets and services */
    destroy(): void {
        if (this.destroyed === true) {
            return;
        }
        this.destroyed = true;
        Object.keys(this.services).forEach(id => this.services[id].destroy());
        this.plugins?.forEach(plugin => plugin.destroy && plugin.destroy());
    }
}


/** throws an error, when given pointer is not a valid jons-pointer */
function assertValidPointer(pointer: JSONPointer): void {
    if (pointer == null || pointer[0] !== "#") {
        throw new Error(`Invalid json(schema)-pointer: ${pointer}`);
    }
}
