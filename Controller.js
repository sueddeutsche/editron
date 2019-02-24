const gp = require("gson-pointer");
const Core = require("json-schema-library").cores.JsonEditor;
const addValidator = require("json-schema-library/lib/addValidator");
const DataService = require("./services/DataService");
const SchemaService = require("./services/SchemaService");
const ValidationService = require("./services/ValidationService");
const LocationService = require("./services/LocationService");
const State = require("./services/State");
const selectEditor = require("./utils/selectEditor");
const _createElement = require("./utils/createElement");
const addItem = require("./utils/addItem");
const UISchema = require("./utils/UISchema");
const getID = require("./utils/getID");
const plugin = require("./plugin");

function isValidPointer(pointer) {
    return pointer[0] === "#";
}

function assertValidPointer(pointer) {
    if (isValidPointer(pointer) === false) {
        throw new Error(`Invalid json(schema)-pointer: ${pointer}`);
    }
}


// removes the editor from the instances-inventory of active editors
function removeEditorFrom(instances, editor) {
    const pointer = editor.getPointer();
    if (instances[pointer]) {
        instances[pointer] = instances[pointer].filter((instance) => editor !== instance);
        if (instances[pointer].length === 0) {
            delete instances[pointer];
        }
    }
}


/**
 * Main component to build editors. Each editor should receive the controller, which carries all required services
 * for editor initialization
 */
class Controller {

    constructor(schema = {}, data = {}, options = {}) {
        schema = UISchema.extendSchema(schema);

        this.options = Object.assign({
            editors: [
                require("./editors/oneofeditor"),
                ...plugin.getEditors(),
                require("./editors/arrayeditor"),
                require("./editors/objecteditor"),
                require("./editors/valueeditor")
            ]
        }, options);

        this.editors = this.options.editors;
        this.state = new State();
        this.instances = {};
        this.core = new Core();

        plugin.getValidators().forEach((validator) => {
            try {
                this.addValidator(...validator);
            } catch (e) {
                console.log(e.message);
            }
        });

        this.schemaService = new SchemaService(schema, data, this.core);
        this.validationService = new ValidationService(this.state, schema, this.core);
        // merge given data with template data
        data = this.schemaService.addDefaultData(data, schema);
        this.dataService = new DataService(this.state, data);
        // start validation after data has been updated
        this.onAfterDataUpdate = this.dataService
            .on(DataService.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate.bind(this));
        // run initial validation
        this.validateAll();
    }

    resetUndoRedo() {
        this.dataService.resetUndoRedo();
    }

    /**
     * Helper to create dom elements via mithril syntax
     *
     * @param  {String} selector    - a css selector describing the desired element
     * @param  {Object} attributes  - a map of dom attribute:value of the element (reminder className = class)
     * @return {HTMLDomElement} the resulting DOMHtml element (not attached)
     */
    createElement(selector, attributes) { // eslint-disable-line class-methods-use-this
        return _createElement(selector, attributes);
    }

    /**
     * The only entry point to create editors.
     * Use in application and from editors to create (delegate) child editors
     *
     * @param  {String} pointer         - data pointer to editor in current state
     * @param  {HTMLElement} element    - parent element of create editor. Will be appended automatically
     * @param  {Object} options         - individual editor optionssa
     * @return {Object|undefined} created editor-instance or undefined;
     */
    createEditor(pointer, element, options) {
        if (pointer == null || element == null) {
            throw new Error(`Missing ${pointer == null ? "pointer" : "element"} in createEditor`);
        }

        assertValidPointer(pointer);

        // merge schema["editron:ui"] object with options. options precede
        const instanceOptions = Object.assign(
            { id: getID(pointer), pointer },
            UISchema.copyOptions(pointer, this),
            options
        );

        // find a matching editor
        const Editor = selectEditor(this.getEditors(), pointer, this, instanceOptions);
        if (Editor === false) {
            return undefined;
        }

        if (Editor === undefined) {
            console.warn(`Could not resolve an editor for ${pointer}`, this.schema().get(pointer));
            return undefined;
        }

        // iniitialize editor and save editor in list
        // @TODO loose reference to destroyed editors
        const editor = new Editor(pointer, this, instanceOptions);
        element.appendChild(editor.toElement());
        this.addEditor(pointer, editor);

        return editor;
    }

    removeEditor(editor) {
        // controller inserted child and removes it here again
        const $element = editor.toElement();
        if ($element.parentNode) {
            $element.parentNode.removeChild($element);
        }

        removeEditorFrom(this.instances, editor);
    }

    addEditor(pointer, editor) {
        this.instances[pointer] = this.instances[pointer] || [];
        this.instances[pointer].push(editor);
    }

    changePointer(newPointer, editor) {
        removeEditorFrom(this.instances, editor);
        this.addEditor(newPointer, editor);
    }

    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param {String} pointer  - to array on which to insert the child
     * @param {Number} index    - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer, index = 0) {
        addItem(this.data(), this.schema(), pointer, index);
        LocationService.goto(gp.join(pointer, index, true));
    }

    /**
     * @return {DataService} DataService instance
     */
    data() { return this.dataService; }

    /**
     * @return {SchemaService} SchemaService instance
     */
    schema() { return this.schemaService; }

    /**
     * @return {ValidationService} ValidationService instance
     */
    validator() { return this.validationService; }

    /**
     * ## Usage
     *  goto(pointer) - Jump to given json pointer. This might also load another page if the root property changes.
     *  setCurrent(pointer) - Update current pointer, but do not jump to target
     *
     * @return {Object} LocationService-Singleton
     */
    location() { return LocationService; }


    // helpers

    onAfterDataUpdate(evt) {
        this.update();
        this.validateAll();
        if (evt.type === "array" || evt.type === "object") {
            LocationService.focus();
        }
    }

    setData(data) {
        data = this.schemaService.addDefaultData(data);
        this.data().set("#", data);
    }

    getEditors() { return this.editors; }
    getInstances() { return this.instances; }


    addValidator(type, value, validator) {
        if (type === "format") {
            addValidator.format(this.core, value, validator);
            return;
        }

        throw new Error(`Unknown or unsupported validation ${type}`);
    }


    /**
     * Change the new schema for the current data
     * @param {Object} schema   - a valid json-schema
     */
    setSchema(schema) {
        this.validationService.set(schema);
        this.schemaService.setSchema(schema);
    }

    // update data in schema service
    update() {
        this.schemaService.setData(this.dataService.get());
    }

    validateAll() {
        setTimeout(() => this.validationService.validate(this.dataService.getDataByReference()));
    }

    destroy() {
        // delete all editors
        Object.keys(this.instances).forEach((pointer) => {
            this.instances[pointer] && this.instances[pointer].forEach((instance) => instance.destroy());
        });

        this.instances = {};
        this.schemaService.destroy();
        this.validationService.destroy();
        this.dataService.destroy();
        this.dataService.off(DataService.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate);
    }
}


module.exports = Controller;
