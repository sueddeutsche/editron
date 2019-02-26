> Very customizable, extendable, fast and hackable json-editor (like
> [jdorn/json-editor](https://github.com/json-editor/json-editor)), to build your data-input-interface based on a
> json-schema


# Editron Core

> This is the core of the editron editor. It may be used to build a custom application (instead of using the default
> [editron](https://github.com/sueddeutsche/editron) application).

This is the base for building a complete [editron](https://github.com/sueddeutsche/editron) json-editor. Its Controller may be used to setup one or many input-forms, based on nested editors for each input-data. The core and the main app are still under development and the api has not yet settled. Still, it is flawlessly used in production for a CMS at the Süddeutsche Digitale Medien GmbH.

<img alt="Editron Application - Simple Demo" src="examples/screenshot-simpledemo.png">


## Features

- Full [json-schema](http://json-schema.org/) draft04 support
- Basic editors supporting _objects_, _arrays_, _checkboxes_, _oneOf-selection_, _textarea_, _input_ and _selections_
- Additional editors currently available
    - _editron-wysiwyg-editor_
    - _editron-script-editor_
    - _editron-overview-navigation_
- inline-validation
- undo/redo
- display only a specific data pointer or switch them, using [json-pointer-syntax](https://github.com/sagold/gson-pointer)
- collaborative editing using _editron-sync-service_
- optional styles, supporting custom styling
- customizable translations and error-messages
- add custom editors (aka widgets)
    - basically independent of any frameworks ([mithriljs](https://mithril.js.org/) is used internally)
    - access to all methods
    - very flexible editors (requiring some knowledge of implementation details)
    - build-helpers and integration tests
    - independent builds, which enables simple plug&edit through an include-script


## Installation

`npm i editron-core --save`

Add the required fonts and rendering dependencies to your website

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mithril/1.1.3/mithril.min.js"></script>
```

And add the editron-core modules and their export (paths depend on your build-setup):

```html
<link rel="stylesheet" href="../node_modules/editron-core/dist/editron-core.css">
<script type="text/javascript" src="../node_modules/editron-core/dist/editron-modules.js"></script>
<script type="text/javascript" src="../node_modules/editron-core/dist/editron-core.js"></script>
```


## Usage

`editron-core.js` exposes a global object `editronCore` to the window object, which may be accessed to retrieve the main Controller, which is the basis of an editron-editor:

```js
    // and create a new editor instance (referencing a unique json-schema and data)
    const controller = new editronCore.Controller(myJsonSchema, myJsonData);
    // create the editor within the selected DOM-Element
    const main = controller.createEditor("#", document.querySelector("#editor"));

    // create another form for the data-point at { header: ... }
    const header = controller.createEditor("#/header", document.querySelector("#editor-header"));

    // receive a notification when the data has changed
    controller.data().observe("#", (event) => {
        console.log("data has changed to", controller.data().get());
    });

    // access services for further functionality
    const dataService = editor.data();
    const schemaService = editor.schema();
    const validationService = editor.validator();
```

for details on the services checkout [json-schema-services](https://github.com/sueddeutsche/json-data-services)


## Build your own application using webpack

> You may also build a custom application using webpack. Following the build steps of
> [webpack.build.js](https://github.com/sueddeutsche/editron-core/blob/master/webpack.build.js) should answer most
> questions.


```js
const Controller = require("editron-core").Controller;

// follow usage explanation above
```


## Translate error messages

> As long as no api is exposed, use the following construct to add (error) message translations

```js
import { Controller } from "editron-core";
import i18n from "editron-core/utils/i18n";
import german from "./languageGerman";
Object.assign(i18n.translateError.strings, german.errors);
Object.assign(i18n.translate.strings, german.strings);

// ... on initialization
const controller = new Controller(schema, data);
controller.validator()
    .setErrorHandler(error => i18n.translateError(controller, error));
```

where the file `languageGerman.js` contains something like:

```js
    import render from "json-schema-library/lib/utils/render";

    export default {
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
    };
```

