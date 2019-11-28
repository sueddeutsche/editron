type JSONObject = { [p:string]: any };

type JSONSchema = {
    type: "object"|"array"|"string"|"boolean"|"number"|"integer"|"null";
    [p:string]: any
};

type JSONPointer = string;

type JSONData = Array<any>|JSONObject|number|string|boolean;

type validationError = {
    type: "error"|"warning";
    message: string;
    data: {
        pointer: JSONPointer;
        [p:string]: any;
    }
}

type validationResult = undefined|validationError|Array<undefined|validationError>;

type DataServiceEventListener = (DataServiceEvent) => void;

type DataServiceEvent = {
    pointer: string;
    parentPointer: string;
    [p: string]: any;
}

type DataServiceObserveCallback = (DataServiceEvent) => void;

// {type: "error", message: "err-msg", data: { pointer }}
type validator = (core: Controller, schema: JSONSchema, value: JSONObject, pointer: string) => validationResult|Promise<validationResult>;


declare class JSONLibCore {
    [p: string]: any;
}


export declare class Editor {
    /** for the given input, returns true if this editor-class should be used for editing */
    static editorOf(pointer: JSONPointer, controller: Controller, options?: JSONObject): boolean;

    constructor(pointer: JSONPointer, controller: Controller, options: JSONObject);
    // update is used as a convention, not enforced, nor required
    // update(DataServiceEvent): void;
    updatePointer(newPointer: JSONPointer): void;
    /** returns the editors root element */
    toElement(): HTMLElement;
    /** destroys the editor */
    destroy(): void;
    // render is used as a convention, not enforced, nor required
    // render(): void;
}


export declare class DataService {
    constructor(state: JSONObject, data: JSONObject);

    /** return copy of data at json-pointer */
    get(pointer?: JSONPointer): JSONObject;

    /** return data by reference at json-pointer */
    getDataByReference(pointer?: JSONPointer): JSONObject;
    /**
     * Change data at the given pointer
     * @param pointer    - data location to modify
     * @param value      - new value at pointer
     */
    set(pointer: JSONPointer, value: JSONObject): void;

    /** Delete data at the given_pointer */
    delete(pointer: JSONPointer): void;

    /** reset undo history */
    resetUndoRedo(): void;
    /** get valid undo count */
    undoCount(): number;
    /** get valid redo count */
    redoCount(): number;
    /** perform undo */
    undo(): void;
    /** perform redo */
    redo(): void;

    /** test if the given json-pointer points to a value in data */
    isValid(pointer: JSONPointer): boolean;

    on(eventType: "beforeUpdate"|"afterUpdate", DataService: DataServiceEventListener): DataServiceEventListener;
    off(eventType: "beforeUpdate"|"afterUpdate", callback: DataServiceObserveCallback): void;
    /** send a notification to event-listeners */
    emit(eventType: string, pointer: JSONPointer, data: JSONData): void;

    /**
     * observes changes in data at the specified json-pointer
     * @param pointer   json-pointer to watch
     * @param callback  called on a change
     * @param bubbleEvents set to true to receive notifications changes in children of pointer
     */
    observe(pointer: JSONPointer, callback: DataServiceObserveCallback, bubbleEvents: boolean): void;
    removeObserver(pointer: JSONPointer, callback: DataServiceObserveCallback): void;
    bubbleObservers(pointer: JSONPointer, data: JSONData): void;
    /** send an event to all json-pointer observers */
    notify(pointer: JSONPointer, event: DataServiceEvent): void;

    /** destory service */
    destroy(): void;
}


export declare class SchemaService {
    constructor(schema?: JSONSchema, data?: JSONData, core?: JSONLibCore);

    /**
     * Updates data by any missing (default) values specified in the json-schema
     * @param [data=currentData]   - update given data or use the internal stored data (via `setData(data)`)
     * @param [schema]             - specific json schema, or the internal store schema (via `setSchema(root)`)
     * @return json data with valid default data values
     */
    addDefaultData(data?: JSONData, schema?: JSONSchema): JSONData;

    /**
     * Create the template data object based on the json-schema, which fullfills the schemas structure as much as
     * possible
     * @param  schema
     * @return data corresponding to json-schema
     */
    getTemplate(schema: JSONSchema): JSONData;

    /**
     * returns a list of valid items to insert at the given position
     * @param  {JsonPointer} pointer
     * @param  {String|Number} property
     */
    getChildSchemaSelection(pointer: JSONPointer, property: string|number): Array<any>;

    /**
     * Sets the root data. This is optional and used within internal functions to support optional _data_-parameters.
     * On every change in data, call this method with that latest state `schemaService.setData(latestData)`;
     *
     * @param data    - latest root data corresponding to stored json-schema
     */
    setData(data: JSONData): void;

    /** set or change the application schema */
    setSchema(schema: JSONSchema): void;

    resetCache(): void;

    /**
     * Return the json-schema for the requested pointer. Resolved the pointer on the stored schema by the accompanied
     * json-data, which is required to resolve optional json-schema values.
     *
     * @param  pointer  - pointer in data
     * @param  data     - root data, corresponding to json-schema. This is optional, when the root-data
     *                                       is up-to-date (via setData)
     * @return json-schema for the requested pointer
     */
    get(pointer: JSONPointer, data?: JSONData): JSONSchema;

    destroy(): void;
}


type errorHandler = (error: any) => any;

type ValidationServiceEvents = "beforeValidation"|"afterValidation"|"onError";

export declare class ValidationService {
    constructor(state: any, schema?: JSONSchema, core?: JSONLibCore);

    /** set a error-callback performing message translation */
    setErrorHandler(callback: errorHandler): void;

    /**
     * Starts the validation, executing callback handlers and emitters on the go
     * @param  data     - data to validate
     * @param  schema   - optional json-schema. Per default the root schema is used
     * @return promise, resolving with list of errors when all async validations are performed
     */
    validate(data: JSONData, schema?: JSONSchema): Promise<Array<validationError>>;

    set(schema: JSONSchema): void;
    get(): JSONSchema;

    on(eventType: ValidationServiceEvents, callback: Function): Function;
    off(eventType: ValidationServiceEvents, callback: Function): Function;
    emit(eventType: string, event: JSONObject): void;
    observe(pointer: JSONPointer, callback: Function, bubbledEvents: boolean): Function;
    removeObserver(pointer: string, callback: Function): void;
    notify(pointer: JSONPointer, event: any): void;
    getErrorsAndWarnings(pointer?: string, withChildErrors?: boolean): Array<validationError>;
    getErrors(pointer?: JSONPointer, withChildErrors?: boolean): Array<validationError>;
    getWarnings(pointer?: JSONPointer, withChildWarnings?: boolean): Array<validationError>;

    destroy():void;
}

export interface LocationService {
    /** use first level property as page and focus input-element at pointer */
    goto(targetPointer: JSONPointer): void;

    /** focus input-element of pointera */
    setCurrent(pointer: JSONPointer): void;

    /** return current focus json-pointera */
    getCurrent(): JSONPointer;

    /** refocus current target */
    focus(): void;

    /** defous current target */
    blur(pointer: JSONPointer): void;

    on(eventType: string, callback: Function): void;
    off(eventType: string, callback: Function): void;
}


export declare class Controller {
    constructor(schema?: JSONObject, data?: JSONObject, options?: JSONObject);

    /**
     * The only entry point to create editors.
     * Use in application and from editors to create (delegate) child editors
     * @param  pointer    - data pointer to editor in current state
     * @param  element    - parent element of create editor. Will be appended automatically
     * @param  [options]  - individual editor options
     * @return created editor-instance or undefined;
     */
    createEditor(pointer: JSONPointer, element: Element, options?: JSONObject): Editor;

    /**
     * enable or disable the editor input-interaction
     * @param active id false, deactivates editor
     */
    setActive(active: boolean): void;

    /** returns the editors active state */
    isActive(): boolean;

    /** service to get or update data from a pointer */
    data(): DataService;

    /** service to get the json-schema from a pointer or replace it */
    schema(): SchemaService;

    /** service to validate data, based on a json-schema and register to generated error events */
    validator(): ValidationService;

    /** service to focus/blur current input-editor */
    location(): LocationService;

    /**
     * set application data
     * @param data    - json data matching registered json-schema
     */
    setData(data: JSONObject): void;

    /**
     * @param location of data to fetch. Defaults to root (all) data
     * @return data at the given location
     */
    getData(location?: JSONPointer): JSONObject;

    /** returns list of registered editor-widgets (classes) used to edit the json-data */
    getEditors(): Array<Editor>;

    /** @return currently active editor/widget instances */
    getInstances(): { [p: string]: Array<Editor> };

    /**
     * @param format     - value of _format_
     * @param validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addFormatValidator(format: string, validator: validator): void;

    /**
     * @param datatype    - JSON-Schema datatype to register attribute, e.g. "string" or "object"
     * @param keyword     - custom keyword
     * @param validator   - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addKeywordValidator(datatype: string, keyword: string, validator: validator): void;

    /**
     * Change the new schema for the current data
     * @param schema   - a valid json-schema
     */
    setSchema(schema: JSONSchema): void;

    /** update data in schema service */
    update(): void;

    /** Starts validation of current data */
    validateAll(): void

    /** Destroy the editor, its widgets and services */
    destroy(): void;

    onAfterDataUpdate(): void;

    /** change pointer of an existing editor-instance */
    changePointer(newPointer: string, editor: Editor): void;

    /**
     * Call this method, when your editor is destroyed, deregistering its instance on editron
     * @param  editor    - editor instance to remove
     */
    removeInstance(editor: Editor): void;

    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param pointer  - to array on which to insert the child
     * @param index    - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer: JSONPointer, index: number): void;

    addInstance(pointer: JSONPointer, editor: Editor): void;

    /** resets undo-history */
    resetUndoRedo(): void;

    /**
     * Helper to create dom elements via mithril syntax
     * @param  selector    - a css selector describing the desired element
     * @param  attributes  - a map of dom attribute:value of the element (reminder className = class)
     * @return the resulting DOMHtml element (not attached)
     */
    createElement(selector: string, attributes: JSON): HTMLElement;
}
