# How To Work With Editron

> Before reading about working with editron, make sure you have read the overview to [docs/json-schema-and-editron-editors](./doc-schema-editor.md)

- [Editron](#editron)
  - [Generate User Forms](#generate-user-forms)
  - [Remove User Forms](#remove-user-forms)
- [Editron API](#editron-API)
- [Editron Services](#editron-services)
  - [DataService](#dataservice)
  - [ValidationService](#validationservice)
  - [SchemaService](#schemaservice)
  - [LocationService](#locationservice)
- [Editron Configuration](#editron-configuration)
  - [proxy](#proxy)
- [Editron Utils](#editron-utils)


## Editron

With a json-schema like

```ts
const jsonSchema = {
  title: "My Data",
  type: "object",
  properties: {
    title: {
      title: "Title of introduction",
      type: "string",
      minLength: 1
    },
    wordCount: {
      title: "Title of cord count",
      type: "number"
    }
  }
}
```

we can create an instance of _editron_ to generate data for this schema and perform data validation. Note, that creating an editron instance will not yet render anything.

```ts
import { Editron } from "editron";
const editronInstance = new Editron(jsonSchema);
editronInstance.getData(); // { title: "", wordCount: 0 }
```

You can also pass initial data to the editron constructor. This will merge the default data generated from your json-schema and the input data, e.g.:

```ts
import { Editron } from "editron";
const editronInstance = new Editron(jsonSchema, { title: "Custom Title" });
editronInstance.getData(); // { title: "Custom Title", wordCount: 0 }
```

Confirming to json-schema specifications, you can place default values directly in a schema:

```json
{ 
  "type": "object", 
  "properties": {
    "wordCount": {
      "type": "number",
      "default": 100
    }
  }
}
```

```ts
import { Editron } from "editron";
const editronInstance = new Editron(jsonSchema);
editronInstance.getData(); // { wordCount: 100 }
```


### Generate User Forms

With our _editron_ instance ready, we can start to render input forms for our data. To render a form on an html-element with an id `my-data`:

```ts
import { Editron } from "editron";
const editronInstance = new Editron(jsonSchema);

editronInstance.createEditor("#", document.querySelector("#my-data"));
```

This will create an input form on the given html element, in our example, an input for _title_ and another input for number _wordCount_. The first parameter of _createEditor_ is a _json-pointer_ and specifies, which part of the data should be rendered. `#` refers to the root json-pointer, which means all data. This also means, we can selectively render portions of the data to the ui.

The following example will render one the input for _title_ to a html element _\<div id="my-title"\>_ and the input for _wordCount_ to a html element _\<div id="my-word-count"\>_:

```ts
import { Editron } from "editron";
const editronInstance = new Editron(jsonSchema);

editronInstance.createEditor("#/title", document.querySelector("#my-title"));
editronInstance.createEditor("#/wordCount", document.querySelector("#my-word-count"));
```

Additionally, input forms can be rendered to multiple locations. _Editron_ will sync updates between them.


### Remove User Forms

Created instances should be correctly removed, either within an _editor_ or when using _editron_ in an application. This step may be omitted, when the whole _editron_ instance is destroyed. For a created _editor_, use the _destroyApplication_-method, to completely remove the _editor_ from _editron_ and the dom:

```ts
import { Editron } from "editron";
const editronInstance = new Editron(jsonSchema);

const editor = editronInstance.createEditor("#", document.querySelector("#my-data"));
// ... 
// when done, destroy the editor 
editronInstance.destroyEditor(editor);
```

And when editron should be removed, simply call `destroy`, which will also destroy all created editor instances

```ts
editronInstance.destroy();
```

> **Note** To destroy an editor, you have to use the editron-method `editron.destroyEditor(myEditor)`. This will ensure all editor bootstrapping is removed from the editor. e.g. the `update`-method is automatically registered and will continue to be called. So, *do not use editor.destroy()* directly or ensure `controller.destroyEditor(this)` is called on the editors `destroy`-method.



## Editron API

An editron instance exposes basic functions to set and get data, json-schema and validation results as is listed in the following overview. For more advanced interactions and event-listeners, editron exposes several services that are described in the following section under [editron-services](#editron-services).

So for the editron instance with 

```ts
import { Editron } from "editron";
const editron = new Editron(jsonSchema);
```

the following methods are exposed:

method                        | description
:-----------------------------|:------------------------------------------------
`getSchema(): JSONSchema`     | returns the current json-schema
`setSchema(:JSONSchema)`      | change the used json-schema to the passed schema
`setData(data)`               | update initial data with passed data
`getData(): any`              | returns whole date object
`getData(:JSONPointer): any`  | returns the data from passed json-pointer
`validateAll()`               | triggers async json-schema validation of whole data
`getErrors(): Error[]`        | returns all current validation errors and warnings
`isActive(): boolean`         | returns true, if the user form is in edit mode
`setActive(:boolean)`         | if `false` is passed, will deactivate all user forms
`service(:ServiceID)`         | Will return editron service matching _serviceId_
`proxy(): Foxy`               | Will editrons proxy for configurable requests
`registerEditor(:Editor)`     | adds a custom editron _editor_ to available editors

You can read about _services_ in the next section: [editron-services](#editron-services). Refer to section [proxy](#proxy) to learn how to expose custom requests to _editron editors_.


## Editron Services


### DataService


### ValidationService


### SchemaService


### LocationService




## Editron Configuration

- editors
- plugins
- services
- translation
- json-schema options

### Proxy


## Editron utilities



### Add Additional Editors

To add new or custom editors globally, use the plugin interface

```javascript
const { plugin, Editron } = editron;
plugin.editor(MyCustomEditor);
const controller = new Editron(jsonSchema, data);
```

Adding editors to a single `Editron`-instance, use the options or add them directly. Using options, you add additional editors to the default editor list (prepended)

```javascript
const { editors, plugin, Editron } = editron;
const options = {
    editors: [
        MyCustomEditor
    ]
};

const controller = new Editron(jsonSchema, data, options);
```

Or add your editor directly to the instance by

```javascript
const controller = new Editron(jsonSchema, data);
controller.registerEditor(MyCustomEditor);
```

**Note** The order of the editors-list is relevant. Any json-schema will be resolved in order, starting at the first
index, a matching editor-Constructor is searched. The first editor to return _true_ (for _Class.editorOf_) will be
used to represent the given json-schema and instantiated. Thus more specific editors should be at the start of list,
where more generale editors, like _object_ or _default values_ should come last.


To completely reset the available list of editors, you can modify the _editors_ property directly

```javascript
controller.editors.length = 0;
```


**Hook to a schema**

_Editron_ will run through this list, searching for a compatible editor-constructor for the specific schema-type. The
first editor, returning `true` for the _static_ function `CustomEditor.editorOf` will be instantiated (
[@see utils/selectEditor]("./utils/selectEditor.js")). e.g. if no editor will match the json-schema
`type: "object"`, a default _object-editor_ will be instantiated.

You can evaluate any json-schema property, options set in json-schema and the associated data:

```javascript
class CustomEditor {
    /**
     * Decide, if the given JSON-Schema should use this editor
     * @param  {String} pointer         - JSON-Pointer
     * @param  {Editron} controller  - Editron-instance
     * @param  {Object} options         - options-object as described above
     * @return {Boolean} returns `true` if this class should be used for the pased JSON-Pointer
     */
    static editorOf(pointer, controller, options) {
        // per default, you will want to get the schema of the current JSON-pointer
        const schema = controller.service("schema").get(pointer);
        // access data by
        // const data = controller.service("data").get(pointer);
        // and evaluate if this is the right editor for the schema
        return schema.type === "object" && schema.format === "CustomEditor";
    }

    constructor(pointer, controller, options) {}
}
```


#### language

You can change all interface labels, messages and errors. For this, all strings are stored in a simple object, where
each property resolves to the given template string.

```javascript

// either pass translations via options in constructor
import Editron from "editron";
const editron = new Editron(schema, data, {
    i18n: {
        strings: {
            "editor:mediaimage:metadata": "Bildgröße: {{width}}x{{height}} [{{size}}]",
            "editor:wysiwyg:edithtml:tooltip": "HTML Quellcode bearbeiten",
            "toolbar:errors:tooltip": "Schnellansicht aller Fehler",
            "toolbar:undo:tooltip": "Undo. Letzte Änderung rückgängig machen",
            "toolbar:redo:tooltip": "Redo. Letzte Änderung wiederherstellen",
            "toolbar:description:tooltip": "Beschreibungstexte ein oder ausblenden"
        },
        errors: {
            "format-url-error": "Die angegebene Wert `{{value}}` ist keine gültige url",
            "maximum-error": "Die Zahl darf nicht größer als {{maximum}} sein.",
            "max-length-error": "Die Eingabe ist zu lang: {{length}} von {{maxLength}} erlaubten Zeichen.",
            "minimum-error": "Die Zahl muss größer oder gleich {{minimum}} sein",
            "min-items-error": "Es müssen mindestens {{minLength}} Elemente vorhanden sein",
            "min-length-error": (controller, error) => {
                if (error.data.minLength === 1) {
                    return "Es wird eine Eingabe benötigt";
                }
                return render("Der Text muss eine Mindestlänge von {{minLength}} haben (aktuell {{length}}).", error.data);
            }
        }
    }
});

// and/or merge translations directly over the i18n helper
import i18n from "editron/utils/i18n";
i18n.addLanguage({
    strings: {
        // ...
    },
    errors: {
        // ...
    }
});
```

<!--
- theming
    - ???
-->



### Editron Interaction

The `Editron` manages editors and editor-instances. Most of the time, you want to work with the actual data and
validation. Each `Editron`-instance will therefore expose three main services: `DataService`, `ValidationService` and
the `SchemaService`.


#### Data

The `DataService` manages the input-data. It keeps a history of all updates (undo/redo) and notifies any observers for
changes on the data or a JSON-Pointer. To get the `DataService`-instance, use

```javascript
const dataService = controller.service("data");
```

**Access data**

```javascript
// get data matching json-schema
const data = controller.service("data").get();
// get data from specific JSON-Pointer
const title = controller.service("data").get("#/title");
// set data
controller.service("data").set("#", { title: "new title" });
// or change a specific property using JSON-Pointer
controller.service("data").set("#/title", "new title");
```

**Events**

You can listen to any change events or specific properties within the data

```javascript
// listen to any change
controller.service("data").on("beforeUpdate", (pointer, action) => {});
controller.service("data").on("afterUpdate", (pointer, action) => {});

// in order to watch specific properties, use the observable-interface
controller.service("data").observe("#/title", event => {
    const { pointer, parentPointer, patch } = event
});
// you can also watch changes of any childnodes by setting the bubble-option to `true`
controller.service("data").observe("#/title", event => {}, true);
```

**Undo/Redo**

The `DataService`-instance also exposes undo/redo states

```javascript
// get steps
const undoCount = controller.service("data").undoCount();
const redoCount = controller.service("data").redoCount();
// and performs undo actions
controller.service("data").undo();
controller.service("data").redo();
```

#### Validation

The `ValidationService` manages the validation process, stores and notifies of any input-errors within the data. To get
the `ValidationService`-instance, use

```javascript
const validator = controller.service("validation");
```

**Access Errors**

Anytime you can get a list of current errors and/or warnings. But you should pay attention that, while validating any
aysnchronous validation may not be resolved at this time. See the next point _Events_ for handling this situation.

```javascript
// most of the time, you will be interested in errors
const errors = controller.service("validation").getErrors();
// but warnings are also supported `{ type: 'warning' }`
const warnings = controller.service("validation").getWarnings();
// or get both
const problems = controller.service("validation").getErrorsAndWarnings();
```

All methods return an array of error-objects, like

```javascript
// example errorObject
code: "min-length-error"
data: { minLength: 1, length: 0, pointer: "#/title" }
message: "Value `#/title` should have a minimum length of `1`, but got `0`."
name: "MinLengthError"
type: "error"
```

**Events**

You can watch any errors or errors on specific data JSON-Pointer. Following the interface for the `DataService`

```javascript
// watch any errors using the emitter
controller.service("validation").on("onError", (errorObject) => {});
// get notified on a new validation-run (clears all current errors)
controller.service("validation").on("beforeValidation", () => {});
// get notified when a validation has finished
controller.service("validation").on("afterValidation", (listOfErrors) => {});

// to watch specific properties for occurring errors, use the observable-interface
contoller.service("validation").observe("#/title", (errorObject) => {});
// or watch all errors, occuring in childnodes, using the bubble-option set to `true`
contoller.service("validation").observe("#", (errorObject) => {}, true);
```

**Note** that _onError_ emits each error individually. To get the current list of errors,
gather all error-events and reset them at the _beforeValidation_-event. Any `observe`-events collect errors and will
notify each update. e.g. For two errors you receive three events `[]`, `[{ error }]`, `[{ error }, { error }]`.


**Validating data**

Data validation is triggered on each change by the `Editron`. In order to manually start validation, you can use the
convenience method

```javascript
controller.validateAll();
```
instead of `controller.service("validation").validate(controller.service("data").get());`.


#### Schema

The `SchemaService` is a simple wrapper for the json-schema, helping to retrieve a json-schema of a data JSON-Pointer.
To get the `SchemaService`-instance, use

```javascript
const schema = controller.service("schema");
```

In order to retrieve a json-schema, e.g. the property `title` from the _getting-started-example_

```javascript
const titleSchema = controller.service("schema").get("#/title");
// { minLength: 1, title: "simple-string", type: "string", editron:ui: {...} }
```

The `SchemaService` exposes some helper-methods

```javascript
// generate data, confirming to the given json-schema
const templateData = controller.service("schema").getTemplate(jsonSchema);
// add any missing data, according to the json-schema
const validInputData = controller.service("schema").addDefaultData(inputData, jsonSchema);
```

