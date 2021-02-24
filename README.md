Editron creates an html user interface with validation for your data, solely based on a json-schema, with almost no programming required. Then, use Editron with your own components and plugins to completely customize the user interface according to your needs.

![editron](./docs/images/logo.png)

<p align="center">
    demo (coming soon) | <a href="#working-with-editron">working with editron</a> | <a href="#configure">customize editron</a>
</p>

---

> - _editron_ is a JSON-Editor, which generates an user interface based on a JSON-Schema
> - _editron_ will display the JSON-Schema's title, detailed descriptions, structure and live validation results in an HTML form
> - to improve usability, _editron_ can be customized to display data in an appropriate way

<details><summary>why use a schema-based editor?</summary>

- a JSON-Schema is quick to write, readable and easy to extend
- because it represents all types of JSON data structures, it can be the single interface for all forms
- being JSON and thus serializable it can be distributed over http, stored in a database and read by any programming language
- JSON-Schema is a standard and has a range of [validators for many common languages](https://json-schema.org/implementations.html#validators)
</details>


<details><summary>why use editron</summary>

- customizability
    - via json-schema
    - selection of what to render and where (specific properties, trees or lists within the data)
- extensibility
    - custom editor-widgets, framework agnostic
    - custom validation methods (sync and async)
- design
    - performant
    - follows simple concepts in interpreting the JSON-Schema to build an HTML form
- features
    - supports collaborative editing,
    - live inline validation
    - complete json-schema draft04 spec
    - support for multiple languages
    - tested and used in production
</details>

<details><summary>limitations</summary>

- requires programming skills for a custom editor-widget
- currently no theming options: for layout adjustments either custom css or custom editor-widgets are required
- not recommended for text-heavy applications like in docs or word
- if you only need a login-form, this project might not be worth the _Kb_
- complex data-types result in complex user-interfaces. could be solved through specific editor-widgets
</details>


**Key Concepts**

Before using _editron_, you should be familiar with some specifications, like [JSON-Schema](https://json-schema.org/), [JSON-Schema Validation](https://json-schema.org/latest/json-schema-validation.html) and [JSON-Pointer](https://tools.ietf.org/html/rfc6901).

<details><summary>What is a JSON-Schema</summary>

**[JSON-Schema](https://json-schema.org/)** is a [declarative format for describing the structure of data](https://json-schema.org/understanding-json-schema/about.html) and itself is stored as a JSON-file. A JSON-Schema may be used to describe the data you need and also describe the user-interface to create this data.
</details>

<details><summary>What is JSON-Schema Validation</summary>

 **[JSON-Schema Validation](https://json-schema.org/latest/json-schema-validation.html)** extends the JSON-Schema with validation rules for the input values. These rules are used to further evaluate the corresponding data and respond with errors, if the given rules are not met.
</details>

<details><summary>What is a JSON-Pointer</summary>

**[JSON-Pointer](https://tools.ietf.org/html/rfc6901)** defines a string syntax for identifying a specific value within a JSON document and is [supported by JSON-Schema](https://json-schema.org/understanding-json-schema/structuring.html). Given a JSON document, it behaves similar to a [lodash path](https://lodash.com/docs/4.17.5#get) (`a[0].b.c`), which follows JS-syntax, but instead uses `/` separators, e.g. (`a/0/b/c`). In the end, you describe a path into the JSON data to a specific point.
</details>


## Installation

`npm install editron`

_Editron_ can be loaded through script tags in HMTL or bundled with your application. This README will refer to a bundled setup using import-statements. For a detailed setup using HTML-scripts or bundling, refer to [docs/how-setup-editron](./docs/howto-setup-editron.md).


## Working With Editron
For details about _editron_ **configuration** and **interaction** refer to [docs/howto-work-with-editron](./docs/howto-work-with-editron.md). What follows is a quick overview:

Create an instance of editron, passing your json-schema

```ts
import Editron from "editron";
const editron = new Editron(schema);
```

Then, pick a DOM-element and render a form for all your data

```ts
const editor = editron.createEditor("#", document.querySelector(".editron"));
```

finally, remove the view with

```ts
editron.destroyEditor(editor);
```

**Interaction**

Get the current data

```ts
const data = editron.getData();
```

change the data

```ts
editron.setData(data);
````

get the current validation errors

```ts
const errors = editron.getErrors();
const isValid = errors.length === 0;
```

and finally, remove editron

```ts
editron.destroy();
```

The complete _editron_-api is explained in [docs/howto-work-with-editron](./docs/howto-work-with-editron.md)



## Configure Bundled Editors
Each instance of an _editor_ supports a set of options, that can be added on a json-schema property, called _editron:ui_.
For configuration options for all _editors_ bundled with editron, refer to [docs/doc-editor-options](docs/doc-editor-options.mda)


## Custom Input Validation
Validators are used to validate input-data for a JSON-Schema. E.g. a schema `{ type: "string", minLength: 1 }` tests if the passed input is a string, another validator checks if the given `minLength`-rule passes. You can validate everything, even remote ressources, which are validated asynchronous. 
See how to write, add and setup validators in [docs/howto-add-custom-validator](./docs/howto-add-custom-validator).


## Custom Editor

Default input-forms will not always be suited best for your data. For this reason, editron can be extended by or completly replaced with custom editors. In general, you create custom editors to 

- **improve usability of input**, collecting data in a more appropriate way, e.g. pointing to a map, instead of asking for x- and y-coordinates
- **improve usability of form**, where you break the rendering flow, hiding details per default
- **preview data**, e.g. show an image to an image-url input

With a custom _editor_ you take complete control of rendering of and interaction with data. In addition, you may choose, which child-values are rendered with _editron_ or should be taken care of in the custom-_editor_.

For a general overview how to set up _editors_, refer to [docs/howto-work-with-editron](./docs/howto-work-with-editron.md). You can read about adding a custom value _editor_ extending from _AbstractValueEditor_ in [docs/howto-write-value-editor](howto-write-value-editor.md) or the complete _editor_-documentation in [docs/docs-editron-editor](./docs/docs-editron-editor.md).


## Plugins

_Editron_ does support plugins through a plugin-api that exposes lifecycle-hooks. This allows you to add data-based features and cross-editor features. You can refer to the [plugin overview](./docs/doc-plugin.md) or read through [howto write a plugin](./docs/howto-write-plugin.md).


## Further examples

Besides [getting-started](./examples/getting-started.html), the following examples can be found in the [./examples](./examples) directory

* see how to create multiple editors from one instance in [examples/multiple-editors](./examples/multiple-editors.html)
* see how to create multiple independent editron instances in [examples/multiple-controller](./examples/multiple-controller.html)


## Breaking Changes

`07/2020` with `v8` editron is written using typescript. Due to module-syntax, some exports have changed, mainly:

- The EVENTS-object in services is now exported separately and not on its object `import { EVENTS } from "./DataService` 
- The `main`-module now exports all helpers separately and the controller is exported as default.
- All components are exported individually, having no default in `src/components/index.ts`
- dependency _mitt_ has been replaced by _nanoevents_
- test-runner _ava_ has been replaced by _mocha_

Additionally all source files have been moved to `src`-folder, which must be adjusted in the imports


`11/2019` with `v7` editron has been updated to mithril@2, json-schema-library@4, mithril-material-forms@3. and all editors have new required method `setActive(boolean)` to enable or disabled editor input-interaction. Please refer to each library version for Breaking Changes. In short:

- _mithril-material-forms_ has a consistent api for forms. Any callbacks have changes to lowercase mithril-style e.g. `onclick` or `onchange` (button, checkbox, input are affected)
- _json-schema-library_ has undergone a major change in its api (schema is mostly optional)
- _mithril_ has dropped support for `m.withAttrs`



<!--
custom build
- npm i
- webpack build
- hello world
- linking editors

Quickstart and hack away (boilerplate)
- working example with editor testpage

Build setup (webpack)

Plugin editor

Guidelines
--->
