# [editron](https://github.com/sueddeutsche/editron) Core

Core repository of [editron](https://github.com/sueddeutsche/editron) json-editor. Its Controller may be used to setup
form, based on nested editors for each data.


## Setup

`npm i editron-core --save`

Add font and view dependencies to your website
```html
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mithril/1.1.3/mithril.min.js"></script>
```

Currently requires a webpack build with babel. Check the `webpack.config.js` for an example build.


## Controller

```js
const Controller = require("editron-core/Controller");

// instantiate controller
const controller = new Controller(
    mySchema, // schema used to build form
    myDefaultData, // some data like { inputform: [...] }
    [].concat(require("editron-core-editors") // a list of editron-editors
);

// setup simple editor at data-pointer (json-pointer)
controller.createEditor("#/inputform", document.querySelector("#json-editor"));

// access services via
controller.data(); // DataService
controller.validator(); // ValidationService
controller.schema(); // SchemaService
```

for details on services checkout [json-schema-services](https://github.com/sueddeutsche/json-data-services)


## Markup Overview

```css
.editron-container
    .editron-container__header
        .editron-container__title
        .editron-container__actions
    .editron-container__errors
    .editron-container__children
        .editron-container__child
```
