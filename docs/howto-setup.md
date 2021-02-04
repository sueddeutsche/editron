# How To Setup Editron

Learn how to get started using _editron_ in your application

- [Setup Using Script-Tags](#setup-using-script-tags)
- [Installation Using Modules](#installation-using-modules)


## Setup Using Script-Tags

> You can copy the following example from [./examples/getting-started.html](./examples/getting-started.html)


**1. Add the required dependencies to your application**

```html
<!-- editron required fonts and styles -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/editron/dist/editron.css" rel="stylesheet" />
<!-- editron required dependency -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mithril/2.0.4/mithril.min.js"></script>
<!-- editron library and main controller, exposed to window.editron -->
<script src="https://cdn.jsdelivr.net/npm/editron/dist/editron-modules.js"></script>
<script src="https://cdn.jsdelivr.net/npm/editron/dist/editron.js"></script>
```

**Note** ensure that `editron-modules.js` is loaded before `editron.js` and any other editors.


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


**3. Initialize editron and create an editor**

```html
<div class="editor"></div>

<script type="text/javascript">
    const Editron = window.editron;
    const editron = new Editron(window.jsonSchema);
    editron.createEditor("#", document.querySelector(".editor"));

    // get the generated data with
    const data = editron.getData(); // { title: "" }
    // change data
    editron.setData({ title: "getting started" });
</script>
```



## Installation Using Modules

Install the module from npm

`npm install editron` or `yarn add editron`

```ts
import Editron from "editron";

const mySchema =  {
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

const editron = new Editron(mySchema);
editron.createEditor("#", document.querySelector(".editor"));

// get the generated data with
const data = editron.getData(); // { title: "" }
// change data
editron.setData({ title: "getting started" });
```

with a HTML file like

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/editron/dist/editron.css" rel="stylesheet" />
  </head>
  <body>
    <div class="editron"></div>
    <script type="text/javascript" src="yourScript.js"></script>
  </body>
</html>
```

**Note** Adding the CSS-files is optional. You can also add them to your bundle or add your own styles.
