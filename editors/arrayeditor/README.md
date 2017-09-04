# ArrayEditor

Builds a form based of an array. Besides delegating childEditors takes

- adds an additional header
- adds configurable controls to edit the array
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
        "controls": {
            // controls managed by header and float right besides any card/container
            add: false,     // display floating add button
            remove: true,   // remove button
            move: true,     // buttons: move array item up and down
            insert: true    // inserts a button after array-container to insert an item between this and next item
        }
    }   
}
```


## API

Options may contain an onadd-callback to overwrite default onadd-action

```js
new ArrayEditor(pointer, controller, {
    // this currently refers to the main add-button only (within header/title)
    onadd: (arrayIndex) => console.log("perform custom onadd action");
})
```


## Sidenotes

- Each editor is wrapped in a separate class to provide the array item actions and headers. Thus the Arrayeditor does not hold the the editors in its childlist. They may be access through arrayEditor.children[0].editor (@see ArrayItemEditor)

