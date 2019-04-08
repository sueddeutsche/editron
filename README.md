Editron is a JSON-Editor, which takes a JSON-Schema to generate an HTML form for user input and live validation. The editor can be used as a component in your web application.

![editron](./docs/images/logo.png)

<p align="center">
    demo (coming soon) | <a href="#user-content-getting-started">getting started</a> | <a href="#user-content-custom-editor-widget">custom editor-widget</a> | API (coming soon)
</p>

---
<!-- TOC
TOC -->

---
## about

**what does editron do?**
- editron is a JSON-Editor, which generates an user interface based on a JSON-Schema
- editron will display the JSON-Schema's title, detailed descriptions, structure and live validation results in an HTML form
- furthermore, it can display data in a custom and appropriate way to improve usability

**why use a schema-based editor?**
- a JSON-Schema is quick to write, readable and easy to extend
- because it represents all types of JSON data structures, it can be the single interface for all forms
- being JSON and thus serializable it can be distributed over http, stored in a database and read by any programming language
- JSON-Schema is a standard and has a range of [validators for many common languages](https://json-schema.org/implementations.html#validators)

**why use editron**
- customizability
    - via json-schema
    - selection of what to render and where (specific properties, trees or lists within the data)
- extensibility
    - custom editor-widgets, framework agnostic
    - custom validation methods (sync and async)
- design
    - performant
    - follows simple concepts in interpreting the JSON-Schema to build a HTML form
- features
    - supports collaborative editing,
    - live inline validation
    - complete json-schema draft04 spec
    - support for multiple languages
    - tested and used in production

**limitations**
- requires programming skills for a custom editor-widget
- currently no theming options: for layout adjustments either custom css or custom editor-widgets are required
- not recommended for text-heavy applications like in docs or word
- if you only need a login-form, this project might not be worth the _Kb_
- complex data-types result in complex user-interfaces. could be solved through specific editor-widgets

<!--
### demos
-  @todo setup github.io page
-  @todo website demonstrating custom-editors, live schema modification and selection of schema examples
-->


---
## key concepts

There are three basic concepts that you should be familiar, when working with a JSON-Schema based editor:

1. **[JSON-Schema](https://json-schema.org/)** is a [declarative format for describing the structure of data](https://json-schema.org/understanding-json-schema/about.html) and itself is stored as a JSON-file. A JSON-Schema may be used to describe the data you need and also describe the user-interface to create this data.
2. **[JSON-Schema validation](https://json-schema.org/latest/json-schema-validation.html)** extends the JSON-Schema with validation rules for the input values. These rules are used to further evaluate the corresponding data and respond with errors, if the given rules are not met.
3. **[JSON-Pointer](https://tools.ietf.org/html/rfc6901)** defines a string syntax for identifying a specific value within a JSON document and is [supported by JSON-Schema](https://json-schema.org/understanding-json-schema/structuring.html). Given a JSON document, it behaves similar to a [lodash path](https://lodash.com/docs/4.17.5#get) (`a[0].b.c`), which follows JS-syntax, but instead uses `/` separators, e.g. (`a/0/b/c`). In the end, you describe a path into the JSON data to a specific point.


---
## Getting started

> You can copy [the following example](./examples/getting-started.html) from `./examples/getting-started.html`

**1. Add the required dependencies to your application**

```html
<!-- editron required fonts and styles -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/editron-core@5.2.2/dist/editron-core.css" rel="stylesheet" />
<!-- editron required dependency -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mithril/1.1.3/mithril.min.js"></script>
<!-- editron library and main controller, exposed to window.editronCore -->
<script src="https://cdn.jsdelivr.net/npm/editron-core@5.2.2/dist/editron-modules.js"></script>
<script src="https://cdn.jsdelivr.net/npm/editron-core@5.2.2/dist/editron-core.js"></script>
```

**Note** ensure that `editron-modules.js` is loaded before `editron-core.js` and any other editors.

**2. Create or load a JSON-Schema**

```html
<script type="text/javascript">
    window.jsonSchema = {
        type: "object",
        required: ["title"],
        properties: {
            title: {
                title: "simple-string", // any title property will be shown as label
                type: "string",
                minLength: 1
            }
        }
    };
</script>
```

**3. Initialize the Controller and create an editor**

```html
<div class="editor"></div>

<script type="text/javascript">
    const { Controller } = window.editronCore;
    const controller = new Controller(window.jsonSchema);
    controller.createEditor("#", document.querySelector(".editor"));

    // get the generated data with
    const data = controller.getData(); // { title: "" }
    // change data
    controller.setData({ title: "getting started" });
</script>
```


### Working with the Controller

The `Controller` manages editors and editor-instances. Most of the time, you want to work with the actual data and
validation. Each `Controller`-instance will therefore expose three main services: `DataService`, `ValidationService` and
the `SchemaService`.

#### DataService

The `DataService` manages the input-data. It keeps a history of all updates (undo/redo) and notifies any observers for
changes on the data or a JSON-Pointer. To get the `DataService`-instance, use

```javascript
const dataService = controller.data();
```

**Access data**

```javascript
// get data matching json-schema
const data = controller.data().get();
// get data from specific JSON-Pointer
const title = controller.data().get("#/title");
// set data
controller.data().set("#", { title: "new title" });
// or change a specific property using JSON-Pointer
controller.data().set("#/title", "new title");
```

**Events**

You can listen to any change events or specific properties within the data

```javascript
// listen to any change
controller.data().on("beforeUpdate", (pointer, action) => {});
controller.data().on("afterUpdate", (pointer, action) => {});

// in order to watch specific properties, use the observable-interface
controller.data().observe("#/title", event => {
    const { pointer, parentPointer, patch } = event
});
// you can also watch changes of any childnodes by setting the bubble-option to `true`
controller.data().observe("#/title", event => {}, true);
```

**Undo/Redo**

The `DataService`-instance also exposes undo/redo states

```javascript
// get steps
const undoCount = controller.data().undoCount();
const redoCount = controller.data().redoCount();
// and performs undo actions
controller.data().undo();
controller.data().redo();
```

#### ValidationService

The `ValidationService` manages the validation process, stores and notifies of any input-errors within the data. To get
the `ValidationService`-instance, use

```javascript
const validator = controller.validator();
```

**Access Errors**

Anytime you can get a list of current errors and/or warnings. But you should pay attention that, while validating any
aysnchronous validation may not be resolved at this time. See the next point _Events_ for handling this situation.

```javascript
// most of the time, you will be interested in errors
const errors = controller.validator().getErrors();
// but warnings are also supported `{ type: 'warning' }`
const warnings = controller.validator().getWarnings();
// or get both
const problems = controller.validator().getErrorsAndWarnings();
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
controller.validator().on("onError", (errorObject) => {});
// get notified on a new validation-run (clears all current errors)
controller.validator().on("beforeValidation", () => {});
// get notified when a validation has finished
controller.validator().on("afterValidation", (listOfErrors) => {});

// to watch specific properties for occurring errors, use the observable-interface
contoller.validator().observe("#/title", (errorObject) => {});
// or watch all errors, occuring in childnodes, using the bubble-option set to `true`
contoller.validator().observe("#", (errorObject) => {}, true);
```

**Note** that _onError_, and any `observe`-events, emit each error individually. To get the current list of errors,
gather all error-events and reset them at the _beforeValidation_-event.

**Validating data**

Data validation is triggered on each change by the `Controller`. In order to manually start validation, you can use the
convenience method

```javascript
controller.validateAll();
```
instead of `controller.validator().validate(controller.data().get());`.


#### SchemaService

The `SchemaService` is a simple wrapper for the json-schema, helping to retrieve a json-schema of a data JSON-Pointer.
To get the `SchemaService`-instance, use

```javascript
const schema = controller.schema();
```

In order to retrieve a json-schema, e.g. the property `title` from the _getting-started-example_

```javascript
const titleSchema = controller.schema().get("#/title");
// { minLength: 1, title: "simple-string", type: "string", editron:ui: {...} }
```

The `SchemaService` exposes some helper-methods

```javascript
// generate data, confirming to the given json-schema
const templateData = controller.schema().getTemplate(jsonSchema);
// add any missing data, according to the json-schema
const validInputData = controller.schema().addDefaultData(inputData, jsonSchema);
```


### Configuration

#### editors

**Customize base editors from json-schema**

@todo editron:ui, default options

**Add additional editors**

To add new or custom editors globally, use the plugin interface

```javascript
const { plugin, Controller } = editronCore;
plugin.editor(MyCustomEditor);
const controller = new Controller(jsonSchema, data);
```

Adding editors to a single `Controller`-instance, use the options or add them directory. Using options, you build the
complete editors-list

```javascript
const { editors, plugin. Controller } = editronCore;
const options = {
    editors: [
        MyCustomEditor,
        editors.OneOfEditor,
        ...plugin.getEditors,
        editors.ArrayEditor,
        editors.ObjectEditor,
        editors.ValueEditor
    ]
};

const controller = new Controller(jsonSchema, data, options);
```

Or add your editor directly to the instance by

```javascript
const controller = new Controller(jsonSchema, data);
controller.editors.unshift(MyCustomEditor);
```

**Note** The order of the editors-list is relevant. Any json-schema will be resolved in order, starting at the first
index, a matching editor-Constructor is searched. The first editor to return _true_ (for _Class.editorOf_) will be
used to represent the given json-schema and instantiated. Thus more specific editors should be at the start of list,
where more generale editors, like _object_ or _default values_ should come last.


#### validators
    - what is a validator?
    - adding a validator
    - link to json-schema-library

#### language
    - what are languages for?
    - how do they work?
    - how to configure languages?

<!--
- theming
    - ???
-->

## Further examples

Besides the getting-started example the are also the following examples in the `./examples` directory

* see how to create multiple editors from one instance in [examples/multipleEditors](./examples/multipleEditors.html)
* see how to create multiple independent editron instances in [examples/multipleController](./examples/multipleController.html)


### custom build

- npm i
- webpack build
- hello world
- linking editors


---
## custom editor (widget)

### why should i create an editor?
> create a custom interface for a specific type of data/schema

<!-- where you need to improve usabilty for long forms, complex data or input values where visual help is really necessary (i.e. placing a point on a map) -->
- **improve usability of input**: ask for data in a better way. where default forms are not a good match (poimap)
- **improve usability of form** break flow, to hide details from main data
- **preview data** (feedback/usability): preview for given input data (e.g. image-url)

### what can i do with custom editor?
> in general, you can do everything (interface is a dom-element, interaction is performed through data-events)

- hook on a very specific json-schema property
- completely render and grab user input (complete take over)
- extend rendering on spot
- delegate rendering of child child editors to editron


### how to create a custom editor-widget

**Add your editor**

Custom editors can be added to the `Controller`-instance via the options property, modified directly or added global via
the plugin-helper [@see configuration.editors](#editors). In the end, all editors are stored within a simple _Array_

```javascript
// push the CustomEditor to the start of list to overrule any other search-results (matching editors)
controller.editors.unshift(CustomEditor);
```

**Hook to a schema**

_Editron_ will run through this list, searching for a compatible editor-constructor for the specific schema-type. The
first editor, returning `true` for the _static_ function `CustomEditor.editorOf` will be instantiated (
[@see utils/selectEditor]("./utils/selectEditor.js")). e.g. if no editor will match the json-schema
`type: "object"`, a default _object-editor_ will be instantiated.

You can evaluate any json-schema property, options set in json-schema and  the associated data:

```javascript
class CustomEditor {
    // pointer - data JSON-Pointer referring to a schema, where an editor is requested
    static editorOf(pointer, controller, options) {
        // per default, you will want to get the schema of the current JSON-pointer
        const schema = controller.schema().get(pointer);
        // access data by
        // const data = controller.data().get(pointer);
        // and evaluate if this is the right editor for the schema
        return schema.type === "object" && schema.format === "CustomEditor";
    }

    constructor(pointer, controller, options) {}
}
```

**The options object**

Based on the current JSON-Schema (short: `schema`), the options object always passes the following properties

property    | schema-options                | description
:-----------|:------------------------------|:--------------------------------------------------------------------------
description | schema.description            | description of the input-field for the user
hidden      | schema["editron:ui"].hidden   | if the input-field should be hidden
id          | -                             | the current editor-id, which should be used in rendering the input-field
pointer     | -                             | current JSON-pointer
title       | schema.title                  | the title as given in `schema.title` or overruled by `schema["editron:ui"].title`

The options object will be extended by all properties given in `schema.options` and `schema["editron:ui"]`, where the
options in `editron:ui` will overwrite the properties defined in the default options-object. Additionally, any options
defined by code, e.g. by calling `controller.createEditor(pointer, domNode, { dynamic-options })`, will overwrite all
other options.


#### 1. quickstart and hack away (boilerplate)

- @todo working example with editor testpage


#### 2. example using abstract editor

Using the optional base class `AbstractEditor`, most work for bootstraping is done by its base methods. This leaves the following required methods for a working editor

```javascript
/**
 * A custom editron-editor-widget
 */
class CustomEditor extends AbstractEditor {
    /**
     * Decide, if the given JSON-Schema should use this editor
     * @param  {String} pointer         - JSON-Pointer
     * @param  {Controller} controller  - Controller-instance
     * @param  {Object} options         - options-object as described above
     * @return {Boolean} returns `true` if this class should be used for the pased JSON-Pointer
     */
    static editorOf(pointer, controller, options) {
        const schema = controller.schema().get(pointer);
        return schema.format === "CustomEditor" && schema.type === "array";
    }

    constructor(pointer, controller, options) {
        // perform required bootstrapping and exposed the DomNode on `this.dom`
        super(pointer, controller, options);

        // recommended: build your view model for rendering. In this example `mithril` hooks are used
        this.viewModel = {
            pointer,
            title: options.title,
            id: options.id,
            value: "",
            errors: [],
            description: options.description,
            onfocus: () => this.focus(),
            onblur: () => this.blur(),
            onchange: this.addTag.bind(this),
            tags: this.getData()
        };

        // recommended: initially render view
        this.render();
    }

    // required: data has changed, update data and view
    update(patch) {
        this.viewModel.tags = this.getData();
        this.render();
    }

    // optional: update errors and view
    updateErrors(errors) {
        this.viewModel.errors = errors;
        this.render();
    }

    // position in data has changed (from moved array-items), update any pointer references used
    // required, if pointer is not referenced
    updatePointer(newPointer) {
        super.updatePointer(newPointer);
        this.viewModel.pointer = newPointer;
    }

    // optional: remove any custom views, created data or listeners
    destroy() {
        if (this.viewModel) { // ensure this editor was not already destroyed
            m.render(this.dom, m.trust(""));
            super.destroy();
            this.viewModel = null; // flag as destroyed
        }
    }

    // custom method: render the view to dom
    render() {
        m.render(this.dom, m(CustomView, this.viewModel));
    }
}
```

**about `update(patch)`**

The editor will always be notified on a change (same updates are ignored). And thus, the editor must update the view to
reflect this change. The default flow is:

1. use `this.setData(newValue)` to update the data-source. The input does already reflect this
2. an `update(patch)` is received and the input-form is rerendered (nonetheless)

in order to improve rendering performance, the patch-object (which is a
[jsondiffpatch](https://github.com/benjamine/jsondiffpatch/blob/master/docs/deltas.md)-diff) can be used to decrease
changes in the ui.

**about `updatePointer(newPointer)`**

Any editor uses its `pointer` to reference data, schema and set its id to the rendered view. Changing the `pointer` is
an implementation detail, but is required for a performant user-experience. In case of reordering array-items
(i.e. drag & drop), the main view must rerender all UI-forms, which will become sluggish on large documents. Thus
`updatePointer` is required to reuse existing HTML nodes for a performant rendering. The `AbstractEditor` will change
all default listeners to the new pointer, but any custom usage of the pointer (and _id_) must be treated manually.

**further details**

For further detail, check the [AbstractEditor](./editors/AbstractEditor.js) implementation or the
[advanced](#advanced)-section below.


#### 3. build setup

- editron dependencies
- setup
- templates (helpers)

#### 4. plugin editor



#### 5. Delegating child nodes

@todo delegate
@todo update pointer

#### 6. advanced

Extending the `AbstractEditor` is totally optional. For any more custom editor-implementations you can write your own
class, but you must follow the some basic rules, that are further described in [AbstractEditor](./editors/AbstractEditor.js).

@todo Theese rules are

1. error event
2. update pointer and event listeners
3. creating dom element and class convention
4. exposing helpers toElement, getPointer
5. Using test-template

<!--
---
## public api

> generated api

### Controller

### Services

### ...


## editors

- wysiwyg
- code
- overview navigation

### todo

- image
- taglist editor
-
-->
