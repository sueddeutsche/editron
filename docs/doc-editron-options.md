# Editron Options

> You can customize most forms for the bundled _editron editors_ in your _json-schema_. For this, follow the [docs/doc-editor-options](./doc-editor-options.md). When you need to adjust the list of used [editors](./docs/doc-editron-editor.md), add [plugins](./doc-plugin.md) or modify [services](./howto-work-with-editron#services) you can add _options_ to the _editron_ constructor which is described here.

- [Options](#options)
- [Option: i18n](#option-i18n)
- [Option: services](#option-services)
- [Option: proxy](#option-proxy)


## Options

Creating a new _editron_ instance you may pass an optional _options_ object

```ts
import { Editron } from "editron";

const options = {}
const jsonSchema = { type: "object" };
const editron = new Editron(jsonSchema, data || {}, options);
```

With the options supporting the following settings

option    | type            | description
----------|-----------------|----------------------
editors   | EditorPlugin[]  | a list of additional _editors_ that may be used to display your json-schema
addDefaultEditors | boolean | if set to false, _editron_ will not add the bundled _editors_ to the list of available _editors_.
i18n      | object          | an object containing key-string translations
proxy     | object          | an object with proxy handlers for custom requests
locationService | object    | a configuration object for the location-service


For example, adding a custom editor:

```ts
import { Editron } from "editron";
import { MyImageEditor } from "./MyImageEditor";

const jsonSchema = { type: "object" };
const editron = new Editron(jsonSchema, data || {}, {
  editors: [MyImageEditor]
});
```


### Option i18n

_Editron_ uses a simple key to string translation helper, that is exposed as `translate`. This method will return a string for a unique key and performs placeholder replacement for a data-object. Example:

For a key 

```ts
{ "custom:title": "Title of {{id}}" }
```

you can call translate with

```ts
import { translate } from "editron";
const string = translate("custom:title", { id: "Test" });
console.log(string); // "title of Test"
```

You can add your own key-string pairs and overwrite strings used by _editron_ using the i8n setting:

```ts
import { Editron } from "editron";
const editron = new Editron(jsonSchema, data || {}, {
  i18n: {
    strings: {
      "toolbar:undo:tooltip": "Undo. Letzte Änderung rückgängig machen",
      "toolbar:redo:tooltip": "Redo. Letzte Änderung wiederherstellen",
    }
  }
});
```

The _i18n_ object supports translation of generated errors. Each error has its own error-code, which may be referenced for string translation like in:

```ts
import { Editron } from "editron";
const editron = new Editron(jsonSchema, data || {}, {
  i18n: {
    errors: {
      "minimum-error": "Die Zahl muss größer oder gleich {{minimum}} sein"
    }
  }
});
```

When a simple string-translation is not sufficient you may also pass a function

```ts
import { Editron, render } from "editron";
const editron = new Editron(jsonSchema, data || {}, {
  i18n: {
    errors: {
      "min-length-error": (editron, error) => {
          if (error.data.minLength === 1) {
              return "Es wird eine Eingabe benötigt";
          }
          return render("Der Text muss eine Mindestlänge von {{minLength}} haben (aktuell {{length}}).", error.data);
      }
    }
  }
});
```


### Option Services

Currently, only the [LocationService](./howto-work-with-editron#locationservice) has configuration settings exposed on `locationService`:


```ts
import { Editron } from "editron";
const editron = new Editron(jsonSchema, data || {}, {
  locationService: {
    /** additional offset in px, to scroll into view. In case you want to adjust scroll-position on focus (e.g. skip a header). Defaults to 0 */
    scrollTopOffset: 50
    /** default root element, where any json-pointers (editron widgets) are searched for. Defaults to `document.body` */
    rootElement: $mainFormElement;
    /** regular expression to identify page-target within a json-pointer. The service will emit an event `location:page` when it was changed */
    pagePattern?: string;
    /** a scoll callback event is fired when the desired position has completed scrolling */
    scrollCallback?: boolean;
  }
});
```


### Proxy

_Editron_ uses a frontend adapter [Foxy](https://github.com/sueddeutsche/foxy/) to configure requests outside of _editron_ to be used within _editron_ by custom _editors_. You may pass Foxy-Handlers to the _editron_ constructor, like:

```ts
import { Editron } from "editron";
const editron = new Editron(jsonSchema, data || {}, {
  proxy: {
    handlers: [
      {
        use: () => true,
        getImageData: ({ source }) => imageService.get(source)
      }
    ]
  }
});
```

which can be accessed from any _editron_ instance by 

```ts
const imageData = await editron.proxy().get("getImageData", { source: 123 });
```

For more details about the handlers and api, refer to the [Foxy Documentation](https://github.com/sueddeutsche/foxy/).




You can read [docs/howto-work-with-editron](./howto-work-with-editron.md) next

[Back to README](../README.md)
