var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _proxy;
import _createElement from "./utils/createElement";
import addItem from "./utils/addItem";
import { addValidator, JsonEditor as Core } from "json-schema-library";
import createProxy from "./utils/createProxy";
import DataService from "./services/dataservice";
import gp from "gson-pointer";
import { translate, translateError } from "./utils/i18n";
import InstanceService from "./services/InstanceService";
import LocationService from "./services/LocationService";
import plugin from "./plugin";
import SchemaService from "./services/SchemaService";
import selectEditor from "./utils/selectEditor";
import { getState as getGlobalState } from "./store/global";
import Store from "./store";
import UISchema from "./utils/UISchema";
import ValidationService from "./services/ValidationService";
import oneOfEditor from "./editors/oneofeditor";
import arrayEditor from "./editors/arrayeditor";
import objectEditor from "./editors/objecteditor";
import valueEditor from "./editors/valueeditor";
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
    constructor(schema = { type: "object" }, data = {}, options = {}) {
        var _a, _b;
        /** internal helper. Set to `true`, if editron has been destroyed */
        this.destroyed = false;
        /** active state of editor */
        this.disabled = false;
        /** list of editor-widgets to generate form for this instance */
        this.editors = [];
        /** list of active plugins for this instance */
        this.plugins = [];
        /** editron proxy instance */
        _proxy.set(this, void 0);
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
        __classPrivateFieldSet(this, _proxy, createProxy(this.options.proxy));
        // add strings and functions for translation
        if ((_a = this.options.i18n) === null || _a === void 0 ? void 0 : _a.strings) {
            Object.assign(translate.strings, this.options.i18n.strings);
        }
        if ((_b = this.options.i18n) === null || _b === void 0 ? void 0 : _b.errors) {
            Object.assign(translateError.strings, this.options.i18n.errors);
        }
        plugin.getValidators().forEach(([validationType, ...validator]) => {
            try {
                if (validationType === "format") {
                    // @ts-ignore
                    return this.addFormatValidator(...validator);
                }
                else if (validationType === "keyword") {
                    // @ts-ignore
                    return this.addKeywordValidator(...validator);
                }
                throw new Error(`Unknown validation type '${validationType}'`);
            }
            catch (e) {
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
    service(serviceName) {
        return this.services[serviceName];
    }
    getPlugin(pluginId) {
        return this.plugins.find(plugin => plugin.id === pluginId);
    }
    notifyPlugins(method, ...args) {
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
    addFormatValidator(format, validator) {
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
    addKeywordValidator(datatype, keyword, validator) {
        // @ts-ignore
        addValidator.keyword(this.core, datatype, keyword, validator);
    }
    /** reset undo history */
    resetUndoRedo() {
        this.service("data").resetUndoRedo();
    }
    /**
     * enable or disable the editor input-interaction
     * @param active if false, deactivates editor
     */
    setActive(active = true) {
        const disabled = active === false;
        if (this.disabled === disabled) {
            return;
        }
        this.disabled = disabled;
        this.service("instances").setActive(!this.disabled);
    }
    /** returns the editors active state */
    isActive() {
        return !this.disabled;
    }
    /**
     * Helper to create dom elements via mithril syntax
     * @param selector - a css selector describing the desired element
     * @param attributes - a map of dom attribute:value of the element (reminder className = class)
     * @returns the resulting dom-element (not attached)
     */
    createElement(selector, attributes) {
        return _createElement(selector, attributes);
    }
    /**
     * Add additional editors to available editors for json-schema rendering.
     * Note, that order is important. First editor to register, will be
     * selected first. Registered editors will be added to start of list.
     * @param editors one or many editors to add to start of editor-list
     */
    registerEditor(...editors) {
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
    createEditor(pointer, element, options) {
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
        editor.update({ type: "active", value: !instanceOptions.disabled });
        // @lifecycle hook create widget
        this.plugins.filter(plugin => plugin.onCreateEditor)
            .forEach(plugin => plugin.onCreateEditor(pointer, editor, instanceOptions));
        return editor;
    }
    /**
     * Call this method, to destroy your editors, deregistering its instance on editron
     * @param editor - editor instance to remove
     */
    destroyEditor(editor) {
        var _a;
        if (!editor) {
            return;
        }
        // @lifecycle hook destroy widget
        this.plugins.filter(plugin => plugin.onDestroyEditor)
            .forEach(plugin => plugin.onDestroyEditor(editor.getPointer(), editor));
        this.services.instances.remove(editor);
        // editron inserted child and removes it here again
        const $element = editor.getElement();
        (_a = $element === null || $element === void 0 ? void 0 : $element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild($element);
        editor.destroy();
    }
    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param pointer - to array on which to insert the child
     * @param index - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer, index = 0) {
        addItem(this.service("data"), this.service("schema"), this.services.location, pointer, index);
        // @todo this might be a wrong falsy check within gson-pointer
        this.services.location.focusInputElement(gp.join(pointer, `${index}`, true));
    }
    /**
     * @returns proxy instance
     */
    proxy() { return __classPrivateFieldGet(this, _proxy); }
    /**
     * Set the application data
     * @param data - json data matching registered json-schema
     */
    setData(data, options) {
        data = this.service("schema").addDefaultData(data);
        this.service("data").set("#", data, options);
    }
    /**
     * @param [pointer="#"] - location of data to fetch. Defaults to root (all) data
     * @returns data at the given location
     */
    getData(pointer = "#") {
        return this.service("data").get(pointer);
    }
    /**
     * Change the new schema for the current data
     * @param schema   - a valid json-schema
     */
    setSchema(schema) {
        schema = UISchema.extendSchema(schema);
        this.service("validation").set(schema);
        this.service("schema").setSchema(schema);
    }
    getSchema(pointer) {
        return this.service("schema").get(pointer);
    }
    /** @debug return editron and global-state */
    getStates() {
        return [this.store.getState(), getGlobalState()];
    }
    /** returns the parent editor */
    getParentEditor(editor) {
        let node = editor.getElement();
        while (node.parentNode !== null && node.parentNode !== document.body) {
            node = node.parentNode;
            if (node.dataset.point) {
                return this.service("instances").editorFromElement(node);
            }
        }
    }
    /** returns the root editor of the editor tree */
    getRootEditor(editor) {
        let node = editor.getElement();
        let root = node;
        while (node.parentNode !== null && node.parentNode !== document.body) {
            node = node.parentNode;
            if (node.dataset.point) {
                root = node;
            }
        }
        return this.service("instances").editorFromElement(root);
    }
    /** start validation of current data */
    validateAll() {
        setTimeout(() => this.destroyed !== true && this.service("validation").validate(this.service("data").getDataByReference()));
    }
    getErrors() {
        return this.service("validation").getErrorsAndWarnings();
    }
    /** Destroy the editor, its widgets and services */
    destroy() {
        var _a;
        if (this.destroyed === true) {
            return;
        }
        this.destroyed = true;
        Object.keys(this.services).forEach(id => this.services[id].destroy());
        (_a = this.plugins) === null || _a === void 0 ? void 0 : _a.forEach(plugin => plugin.destroy && plugin.destroy());
    }
}
_proxy = new WeakMap();
/** throws an error, when given pointer is not a valid jons-pointer */
function assertValidPointer(pointer) {
    if (pointer == null || pointer[0] !== "#") {
        throw new Error(`Invalid json(schema)-pointer: ${pointer}`);
    }
}
