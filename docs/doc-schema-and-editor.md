- [Further Reading](#further-reading)


# JSON-Schema And Editron Editors

For each json-schema (each object containing a `type`) editron will pass this schema to a selected editron editor, which in turn will display a user input form for this schema.

That is, a json-schema like

```json
{ "type": "object", "title": "MyData" }
```

will be rendered as 

```jsx
<ObjectEditor title="MyData"></ObjectEditor>
```

Editors like _ObjectEditor_ and _ArrayEditor_ usually contain further editors:

```json
{ 
  "type": "object", 
  "title": "MyData",
  "properties": {
    "image": {
      "title": "MyImageUrl",
      "type": "string"
    }
  }
}
```

which will be rendered as expected:

```jsx
<ObjectEditor title="MyData">
  <ValueEditor title="MyImageUrl" />
</ObjectEditor>
```

You can define your custom editors for specific json-schema types. In most cases a property _format_ is used for this:

```json
{ 
  "type": "object", 
  "title": "MyData",
  "properties": {
    "image": {
      "title": "MyImageUrl",
      "type": "string",
      "format": "MyImagePreview"
    }
  }
}
```

```jsx
<ObjectEditor title="MyData">
  <ImagePreview title="MyImageUrl" />
</ObjectEditor>
```

It is also possible to write custom editors, that manage more complex objects, like in:

```json
{ 
  "type": "object", 
  "title": "MyData",
  "properties": {
    "image": {
      "type": "object",
      "format": "MyImageEditor",
      "properties": {
        "url": {
          "type": "string"
        },
        "quality": {
          "type": "number"
}}}}}
```

with an editor registered to a format _MyImageEditor_ that now manages the whole image-object on its own:

```jsx
<ObjectEditor title="MyData">
  <MyImageEditor />
</ObjectEditor>
```

Editron contains a list of editors to render each json-schema type. You can add editors either on initialization:

```ts
import { Editron } from "editron";
const editron = new Editron(schema, data, {
  editors: [MyImageEditor]
})
```

or later by the instance method:

```ts
editron.registerEditor(MyImageEditor);
```

Each editor has a static `editorOf`-method. This method will be called by editron to decide if this editor should be used for the given json-schema. For example:

```ts
class MyImageEditor {
  editorOf(pointer: string, editron: Editron) {
    const jsonSchema = editron.service("schema").get(pointer);
    const useThisEditor = jsonSchema.format === "MyImageEditor";
    return useThisEditor;
  }
}
```

## Further Reading

- [learn to work with editron](./howto-work-with-editron.md)
- [read about custom editron editors](./doc-editron-editor.md) or
- [follow the howto write a value editor](./howto-write-value-editor.md)

more details can be found on

- [howto write a custom validation](./howto-add-custom-validation.md)
- [details about plugins](./doc-plugin.md) and 
- [howto write a custom plugin](./howto-write-plugin)


[Back to README](../../Readme.md)
