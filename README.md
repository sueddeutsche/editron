> JSON-Editor, which takes a JSON-Schema to generate an HTML form for user input and live validation. The editor can be used as a component in your web application.

![editron](./docs/images/logo.png)

<p align="center">
    <a href="#">demo</a> | <a href="#">getting started</a> | <a href="#">custom editor-widget</a> | <a href="#">API</a>
</p>


---
* what does editron do?
* why use a schema-based editor?
* why use editron
* limitations
* demos
* key concepts
* getting started
    * quickest way
    * configuration
    * custom build
* custom editor (widget)
    * why should i create an editor?
    * what can i do with custom editor?
    * how to create a custom editor-widget
* public api
* api


---
## editron

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

```js
const dataService = controller.data();
```

**Access data**

```js
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

```js
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

```js
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

```js
const validator = controller.validator();
```

**Access Errors**

Anytime you can get a list of current errors and/or warnings. But you should pay attention that, while validating any
aysnchronous validation may not be resolved at this time. See the next point _Events_ for handling this situation.

```js
// most of the time, you will be interested in errors
const errors = controller.validator().getErrors();
// but warnings are also supported `{ type: 'warning' }`
const warnings = controller.validator().getWarnings();
// or get both
const problems = controller.validator().getErrorsAndWarnings();
```

All methods return an array of error-objects, like
```js
// example errorObject
code: "min-length-error"
data: { minLength: 1, length: 0, pointer: "#/title" }
message: "Value `#/title` should have a minimum length of `1`, but got `0`."
name: "MinLengthError"
type: "error"
```

**Events**

You can watch any errors or errors on specific data JSON-Pointer. Following the interface for the `DataService`

```js
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
```js
controller.validateAll();
```
instead of `controller.validator().validate(controller.data().get());`.


#### SchemaService

The `SchemaService` is a simple wrapper for the json-schema, helping to retrieve a json-schema of a data JSON-Pointer.
To get the `SchemaService`-instance, use

```js
const schema = controller.schema();
```

In order to retrieve a json-schema, e.g. the property `title` from the _getting-started-example_
```js
const titleSchema = controller.schema().get("#/title");
// { minLength: 1, title: "simple-string", type: "string", editron:ui: {...} }
```

The `SchemaService` exposes some helper-methods

```js
// generate data, confirming to the given json-schema
const templateData = controller.schema().getTemplate(jsonSchema);
// add any missing data, according to the json-schema
const validInputData = controller.schema().addDefaultData(inputData, jsonSchema);
```


### Configuration

#### editors

**Customize base editors from json-schema**

@todo

**Add additional editors**

@todo
Custom editors can be passed to the `Controller`-instance as options or directly modified.


**Editor sort order and instantiation**

@todo


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

Custom editors can be added to the `Controller`-instance via the options property ([@see configuration.editors]("#/editors")) or modified
directly. All editors are stored within a simple _Array_

```js
// push the CustomEditor to the start of list to overrule any other search-results (matching editors)
controller.editors.unshift(CustomEditor);
```

**Hook to a schema**

_Editron_ will run through this list, searching for a compatible editor-constructor for the specific schema-type. The
first editor, returning `true` for for the _static_ function `CustomEditor.editorOf` will be instantiated (
[@see utils/selectEditor]("./utils/selectEditor.js")). e.g. if no editor will match the json-schema
`type: "object"`, a default _object-editor_ will be instantiated.

You can evaluate any json-schema property, options set in json-schema and even the associated data:

```js
    Class CustomEditor {
        // pointer - data JSON-Pointer referring to a schema, where an editor is requested
        static editorOf(pointer, controller, options) {
            // per default, you will want to get the schema of the current JSON-pointer
            const schema = controller.schema().get(pointer);
            // and evaluate if this is the right editor for the schema
            return schema.type === "object" && schema.format === "CustomEditor";
        }

        constructor(pointer, controller, options) {}
    }

```

**The options object**

@todo


#### 1. quickstart and hack away (boilerplate)


#### 2. example using abstract editor

Using the optional base class `AbstractEditor`, most work for bootstraping is done by its base methods. This leaves the following required methods for a working editor

```js
class CustomEditor extends AbstractEditor {
    static editorOf(pointer, controller, options) {
        const schema = controller.schema().get(pointer);
        return schema.format === "CustomEditor" && schema.type === "array";
    }

    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        // this.dom is created

        const schema = this.getSchema();
        this.viewModel = {
            pointer,
            title: schema.title,
            id: options.id,
            value: "",
            errors: [],
            description: options.description,
            onfocus: () => this.focus(),
            onblur: () => this.blur(),
            onchange: this.addTag.bind(this),
            tags: this.getData()
        };

        // initially render view
        this.render();
    }

    // data has changed, update data
    update() {
        this.viewModel.tags = this.getData();
        this.render();
    }

    // received new errors
    updateErrors(errors) {
        this.viewModel.errors = errors;
        this.render();
    }

    // position in data has changed (from moved array-items), update any pointer references used
    updatePointer(newPointer) {
        super.updatePointer(newPointer);
        this.viewModel.pointer = newPointer;
    }

    // destroy this editor and any created data or listeners
    destroy() {
        if (this.viewModel) {
            m.render(this.dom, m.trust(""));
            super.destroy();
            this.viewModel = null;
        }
    }

    // custom method: update view
    render() {
        m.render(this.dom, m(CustomView, this.viewModel));
    }
}
```

#### 3. build setup
#### 4. plugin editor
#### 5. advanced example

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
