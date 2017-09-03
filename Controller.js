const gp = require("gson-pointer");
const DataService = require("json-data-services").DataService;
const SchemaService = require("json-data-services").SchemaService;
const ValidationService = require("json-data-services").ValidationService;
const SyncService = require("json-data-services/lib/SyncService");
const LocationService = require("./services/LocationService");
const State = require("json-data-services/lib/State");
const selectEditor = require("./utils/selectEditor");
const _createElement = require("./utils/createElement");
const addItem = require("./utils/addItem");
const UISchema = require("./utils/UISchema");
const getID = require("./utils/getID");

/**
 * Main component to build editors. Each editor should receive the controller, which carries all required services
 * for editor initialization
 */
class Controller {

    constructor(schema = {}, data = {}, options = {}) {
        schema = UISchema.extend(schema);

        this.options = Object.assign({
            editors: require("./editors")
        }, options);

        this.editors = this.options.editors;
        this.state = new State();
        this.instances = {};
        this.schemaService = new SchemaService(schema, data);
        this.validationService = new ValidationService(this.state, schema);
        // merge given data with template data
        data = this.schemaService.addDefaultData(data, schema);
        this.dataService = new DataService(this.state, data);
        // start validation after data has been updated
        this.onAfterDataUpdate = this.dataService
            .on(DataService.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate.bind(this));
        // run initial validation
        this.validateAll();
        // reset undo/redo states
        // @debug
        window.data = this.dataService; // eslint-disable-line
    }

    synchronizeData(url, id) {
        this.syncService = new SyncService(url, this.dataService, id);
    }

    resetUndoRedo() {
        this.dataService.resetUndoRedo();
    }

    // convenience methods
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
        // ensure valid pointer
        pointer = gp.join(pointer);

        // merge schema.ui object with options. options precede
        const schema = this.schema().get(pointer);
        options = Object.assign({ id: getID(pointer) }, schema.ui, options);

        // find a matching editor
        const Editor = selectEditor(this.getEditors(), pointer, this, options);
        if (Editor === false) {
            return undefined;
        }
        if (Editor === undefined) {
            // console.warn(`Could not resolve an editor for ${pointer}`, this.schema().get(pointer));
            return undefined;
        }

        // iniitialize editor and save editor in list
        // @TODO loose reference to destroyed editors
        const editor = new Editor(pointer, this, options);
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

        this.removeEditorFromInstances(editor);
    }

    removeEditorFromInstances(editor) {
        const pointer = editor.getPointer();
        if (this.instances[pointer]) {
            this.instances[pointer] = this.instances[pointer].filter((instance) => editor !== instance);
            if (this.instances[pointer].length === 0) {
                delete this.instances[pointer];
            }
        }
    }

    addEditor(pointer, editor) {
        this.instances[pointer] = this.instances[pointer] || [];
        this.instances[pointer].push(editor);
    }

    changePointer(newPointer, editor) {
        this.removeEditorFromInstances(editor);
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
        LocationService.goto(gp.join(pointer, index));
    }

    // expose main services
    data() { return this.dataService; }
    schema() { return this.schemaService; }
    validator() { return this.validationService; }

    location() {
        // goto(pointer) - Jump to given json pointer. This might also load another page if the root property changes.
        // setCurrent(pointer) - Update current pointer, but do not jump to target
        return LocationService;
    }

    // helpers

    onAfterDataUpdate(evt) {
        this.update();
        this.validateAll();
        if (evt.type === "array" || evt.type === "object") {
            LocationService.focus();
        }
    }

    addDefaultData() {
        const data = this.schemaService.addDefaultData(this.dataService.get());
        this.setData("#", data);
    }

    getEditors() {
        return this.editors;
    }

    setSchema(schema) {
        this.validationService.set(schema);
        this.schemaService.setSchema(schema);
    }

    // update data in schema service
    update() {
        this.schemaService.setData(this.dataService.getDataByReference());
    }

    validateAll() {
        setTimeout(() => this.validationService.validate(this.dataService.getDataByReference()));
    }

    destroy() {
        // delete all editors
        Object.keys(this.instances).forEach((pointer) => {
            this.instances[pointer].forEach((instance) => instance.destroy());
        });

        this.instances = {};
        this.schemaService.destroy();
        this.validationService.destroy();
        this.dataService.destroy();
        this.dataService.off(DataService.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate);
    }
}


// @debug
window.state = require("json-data-services/lib/state"); // eslint-disable-line


module.exports = Controller;
