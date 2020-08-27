# ArrayEditor

Builds a form based of an array. Besides delegating childEditors it

- adds configurable controls to edit the array-item
- performs patch operations on data changes (reusing created editors via `updatePointer()`)

will be build with

```js
{
    "type": "array"
}
```


## Schema configuration

may be configured with

```js
{
    "type": "array",
    "editron:ui": {
        "attrs": {
            // attributes past to main element @see mithril
            // e.g. class: "my-custom-class", data-target: "array", etc
        },
        "array": {
            // array options here
        }
    }   
}
```

Options

```ts
type EditronSchemaOptions = EditorOptions & {
  array?: {
    /** show action to insert item another item */
    add?: boolean;
    /** clone an item */
    clone?: boolean;
    /** show item-header in array item */
    header?: boolean;
    /** add an insert button between items */
    insert?: boolean;
    /** show move up and down actions */
    move?: boolean;
    /** pass actions to child-editor (must be treated and rendered in child-editor) */
    passActions?: boolean;
    /** show a remove item action */
    remove?: boolean;
    /** show the index of the element */
    showIndex?: boolean;
  }
}
```


## Sidenotes

- Each editor is wrapped in a separate class to provide the array item actions and headers. Thus the Arrayeditor does not hold the the editors in its childlist. They may be access through `arrayEditor.children[childIndex].editor` (@see class ArrayItem)

