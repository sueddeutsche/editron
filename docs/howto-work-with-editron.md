# How To Work With Editron

> Before reading about working with editron, make sure you have read the overview to [docs/json-schema-and-editron-editors](./doc-schema-editor.md)

- [Editron](#editron)
  - [Generate User Forms](#generate-user-forms)
  - [Remove User Forms](#remove-user-forms)
- [Editron API](#editron-API)
  - [Editron Editors](#editron-editors)
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

> **Note** rendering partial uis enables features like pagination or form details to be shown in a separate place of the application.


### Remove User Forms

Created instances should be correctly removed, either within an _editor_ or when using _editron_ in an application. This step may be omitted, when the whole _editron_ instance is destroyed. For a created _editor_ in your application, use the _destroy_-method to completely remove the _editor_ from _editron_ and the dom:

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

> **Note** To destroy an editor, you have to use the editron-method `editron.destroyEditor(myEditor)`. This will ensure all editor bootstrapping is removed from the editor. e.g. the `update`-method is automatically registered and will continue to be called. So, *do not use editor.destroy()* directly or ensure `editron.destroyEditor(this)` is called on the editors `destroy`-method.



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

You can read about _services_ in the next section [editron-services](#editron-services). Refer to section [proxy](#proxy) to learn how to expose custom requests to _editron editors_.


### Editron Editors

The order of the editors-list is relevant. Any json-schema will be resolved in order, starting at the first
index, a matching editor-Constructor is searched. The first editor to return _true_ (for _Class.editorOf_) will be
used to represent the given json-schema and instantiated. Thus more specific editors should be at the start of list,
where more generale editors, like _object_ or _default values_ should come last.


To completely reset the available list of editors, you can modify the _editors_ property directly

```ts
editron.editors.length = 0;
```


## Editron Services

The _editron instance_ exposes all required methods and _services_ for usage in an application, for [custom editors](./doc-editron-editor.md) and for [editron plugins](./doc-plugin.md). Each _editron service_ exposes its own api and manages a specific part of the _json-editor_. You can access a _service_ by the method `service(serviceId: string)` which may be called anytime on an _editron_ instance. What follows is a quick overview of services, followed by a details description of their apis.


serviceId   | serviceName       | description
:-----------|:------------------|------------------------------------------------------------------
data        | DataService       | Manages data updates, change notifications and undo/redo stack
validation  | ValidationService | Performs data validation and emits error events
schema      | SchemaService     | Manages retrieval and caching of json-schemas for each data
location    | LocationService   | Manages global input selection and scroll to behaviour


> All _services_ use the _json-pointer_ specification to describe values within the managed data. Recap: a _json-pointer_ describes a path into data, starting with a hash `#`, and each property is separated by a _slash_. e.g. `"#/todos/2"` describes a path to the third array element of a list on property _todos_. The root or whole object can be described as a _root-pointer_ `"#"`.


### DataService

The _DataService_ manages all input-data. Use this _service_ to

- make changes to data
- get latest data
- watch for changes made to data
- watch for changes made on a specific _json-pointer_
- run undo and redo

You access the service through an _editron instance_ by 

```ts
const dataService = editron.service("data");
```


**Working on data**

You can set and get data as usual

```ts
const data = editron.service("data").get();
editron.service("data").set("#", data);
```

And as might be seen, data may also be directly selected:

```ts
const title = editron.service("data").get("#/title");
editron.service("data").set("#/title", "modified title");
```


**Undo/Redo**

The _DataService_ also exposes _undo/redo_ states

```ts
// get steps
const undoCount = editron.service("data").undoCount();
const redoCount = editron.service("data").redoCount();
// and performs undo actions
editron.service("data").undo();
editron.service("data").redo();
```


**Listen to changes**

The _DataService_ emits events when something in data has changed. It supports two different event systems, a method **watch** to notify about all changes made on data and a method **observe** to listen for changes on a specific _json-pointer_. 


**Watch updates**

The _watch_-method is usually used by an application, where you are interested in all changes of data, e.g. you want to sent the latest data when it has beend changed:

```ts
// This will add 
editron.service("data").watch(event => {});
```

The callback in _watch_ receives an event. For an update, multiple events will be sent to each _watcher_, like before update start, when a single change was notified and finally, when all watchers and observers have beend notified (_"data:update:done"_). You might use a switch statement, to select the _event_ you need for your task, like:

```ts
const watcher => {
  switch (event.type) {
    case "data:update:done":
      // respond to data change
      console.log(event.value);
      break;
  }
}

editron.service("data").watch(watcher);
```

And remove the watch with

```ts
editron.service("data").removeWatcher(watcher);
```

For an up to date list of events, refer to the callback types in [DataService](../src/services/dataservice/index.ts#L40) or simple log to your console.

> **Note** Each _event_ has a property `type:string` and a property `value`, where the type of `value` will vary based on the event-type.


**Watch updates of a value**

Observing data changes for a single value is usually used by an _editron editor_. Each editor updates and displays a single value and thus is interested in this value only. As always, the value is described by a _json-pointer_. To use the observer-api, pass the _json-pointer_ you are interested and a callback-function receiving an updateEvent, with `{ type: "data:update", value }`:

```ts
const onUpdate = update => {};
editron.service("data").observe("#/title", onUpdate);
```

and remove the observer with

```ts
editron.service("data").removeObserver("#/title", onUpdate);
```

In same cases you might want updates _from a certain point_ in data. For example, watch an object and all its children. For example: An editor that manages a whole object, like a point on a map with _x_ and _y_ coordinates:

```json
{
  "properties": {
    "mapPoint": {
      "type": "object",
      "properties": {
        "x": { "type": "number" },
        "y": { "type": "number" }
      }
    }
  }
}
```

Here, there are no individual forms listening to x and y. Some goes for validation errors. A map editor in this example may pass `true` as a second parameter to `observe(callback, true)`. With this, any observer will get notified of data changes on the _json-pointer_ and also receives events if a child-value has been changed:

```ts
editron.service("data").removeObserver("#/mapPointer", onUpdate, true);
```


**DataService API Overview**

method                        | description
:-----------------------------|:------------------------------------------------
`set(pointer: string, value)` | sets value at pointer-location to the passed value
`get(pointer?: string)`       | returns the data at json-pointer. Defaults to all
`delete(pointer: string)`     | deletes value at the given json-pointer
`undo()`                      | changes the state back to previous state
`redo()`                      | reverts the previous undo change
`getDataByReference(pointer)` | returns a direct reference to stored data
`undoCount(): number`         | returns a number of available undo steps
`redoCount(): number`         | returns a number of available redo steps
`resetUndoRedo()`             | clears the undo/redo-stack
`watch(callback)`             | adds a watcher to update events
`removeWatcher(callback)`     | removes a registered watcher from update events
`observe(pointer, cb, bubble?)`| registers an observer to a json-pointer
`removeObserver(pointer, cb)` | removes a registered pointer-observer
`isValid(pointer)`            | returns `true` when the passed location exists in data


### ValidationService

The `ValidationService` manages the validation process, stores and notifies any input-errors within the data. Basic validation is usually performed _sync_, but custom validators may also introduce _async_ validation. Thus, validation errors are notifies at once, when they resolve and the service will end with a _validation:done_ event, when all errors have been omitted. As with the _DataService_, the _ValidationService_ has two types of event-system. A simple `watch`-method for general validation updates and an _observe_-method to watch specific values referenced by a _json-pointer_. You can access the _ValidationService_ throuh any _editron instance_:

```ts
const validationService = editron.service("validation");
```

A new validation is started after each data change automatically. To manually start a validation use

```ts
editron.validateAll();
```


**Errors and warning**

Each _ValidationError_ has a type of _error_ e.g.

```ts
// example errorObject
code: "min-length-error"
data: { minLength: 1, length: 0, pointer: "#/title" }
message: "Value `#/title` should have a minimum length of `1`, but got `0`."
name: "MinLengthError"
severity: "error"
type: "error"
```

Each _error_ can be differentiated by a _severity_. For custom validation methods a warning may be placed on a property _severity_. _Editron_ exposes helpers to access the latest validation results, optionally differentiating by _severty_:

```ts
// most of the time, you will be interested in errors
const errors = editron.service("validation").getErrors();
// but warnings are also supported `{ type: 'warning' }`
const warnings = editron.service("validation").getWarnings();
// or get both
const problems = editron.service("validation").getErrorsAndWarnings();
```


**Watch validation errors**

The _ValidationService_ will emit one event after validation containing all errors on property _value_

```ts
const onError = validationEvent => {};
editron.service("validation").watch(onError);
// ...
// and remove the watcher with
editron.service("validation").unwatch(onError);
```

with a validationEvent defined as `{ type: "validation:done", value: Array<ValidationError> }`


**Watch validation errors of a value**

The _ValidationService_ will notify each error individually

```ts
const onError = validationEvent => {};
editron.service("validation").observe("#/title", onError);
// ...
// and remove the observer with
editron.service("validation").removeObserver("#/title", onError);
```


**ValidationService API Overview**

method                        | description
:-----------------------------|:------------------------------------------------
`getErrors()`                 | returns all errors with _severity: error_ 
`getErrorsAndWarnings()`      | returns all errors with any _severity_ 
`getWarning()`                | returns all errors with _severity: warning_ 
`observe(pointer, cb, bubble?)`| registers an observer to a json-pointer
`removeObserver(pointer, cb)` | removes a registered pointer-observer
`setErrorHandler(cb)`         | set handler being called for each _error_ (e.g. error translation)
`unwatch(callback)`           | removes a registered watcher from validation events
`watch(callback)`             | adds a watcher to validation:done events


### SchemaService

The `SchemaService` manages schema retrieval based on the current data. Additionally, it caches resolved schemas for the current data object. You can access the _SchemaService_ throuh any _editron instance_:

```ts
const schemaService = editron.service("schema");
```

As usual, you can get a schema based on a _json-pointer_, e.g.

```ts
const titleSchema = editron.service("schema").get("#/title");
// { title: "Title of introduction", type: "string", minLength: 1 }
```

_SchemaService_ exposes two additional helpers methods for data generation based in a _json-schema_:

```ts
// generate data, confirming to the given json-schema
const templateData = editron.service("schema").getTemplate(jsonSchema);
// add any missing data, according to the json-schema
const validInputData = editron.service("schema").addDefaultData(inputData, jsonSchema);
```

> **Note** Most _json-schema_ can be resolved statically, but in case of e.g. oneOf statements the current data is required. _Editron_ will ensure data is updated in _SchemaService_ automatically


**SchemaService API Overview**

method                        | description
:-----------------------------|:------------------------------------------------
`get(pointer):JSONSchema`     | returns the _json-schema_ of the given _json-pointer_
`getTemplate(:JSONSchema)`    | returns generated data matching the passed _json-schema_
`addDefaultData(data, :JSONSchema)`| returns a merge of passed and generated data matching _json-schema_


### LocationService

The `LocationService` manages input selection, notifies of selection changes and exposes scroll-to helpers. Detailed usage of `LocationService` within a custom editor is documented in [docs/docs-editron-editor.md](./docs-editron-editor.md#focus-hooks).


**LocationService API Overview**

method                        | description
:-----------------------------|:------------------------------------------------
`goto(pointer, ?:HTMLElement)`| focus the form of the current pointer
`getCurrent(): pointer`       | returns the currently selected _json-pointer_
`watch(callback)`             | add watcher for changes in current location
`removeWatcher(callback)`     | remove a registered watcher
`setCurrent(pointer)`         | set input for _json-pointer_ as currently focused
`blur(pointer)`               | unfocus an active and matching input element



## Editron Configuration

- editors
- plugins
- services
- translation
- json-schema options

### Proxy


## Editron utilities


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
            "min-length-error": (editron, error) => {
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
