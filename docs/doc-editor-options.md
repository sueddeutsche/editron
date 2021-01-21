# Editor Options

> Editor configurations may set titles and descriptions, hide an editor, modify its behaviour, add an icon, etc.

From a given JSON-Schema, its properties `title` and `description` are used for labels and inline-information of the
input-element or group. Additional configuration for an _editron_-editor goes into the _editron:ui_ property in each json-schema-definition. Some configuration settings are supported per default, and should be supported by a _custom_-editor. Other configuration settings are editor-specific and go into a nested object-property, where its configuration **must be an object**. e.g.

```js
{
  type: "object",
  // json-schema properties used per default in editor configuration
  title: "default-title",
  description: "optional description of data-item",
  // additional, extended editor configuration
  "editron:ui": {
    // default settings
    // ...
    
    // specific settings for the (default) object-editor
    object: {
      // ...
    }
  }
}
```

- [Shared options across editors](#shared-editor-options)
- [Editor editors](#editor-options)
  - [Object editor options](#object-editor-options)
  - [Array editor options](#array-editor-options)
  - [Value editor options](#value-editor-options)
  - [Autocomplete editor options](#autocomplete-editor-options)
  - [OneOf editor options](#oneof-editor-options)
  - [Minimap editor options](#minimap-editor-options)
- [Overriding editor options](#overriding-editor-options)

## Shared editor options

Default editor options are properties within the `editron:ui`-object, like

```js
{
  type: "object",
  "editron:ui": {
    title: "SEO Information"
  }
}
```

The currently used default-configuration properties can be inspected in its type-defintion [Editor#Options](../src/editors/Editor.ts#L7). Right now, all shared configuration properties are:

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`title`             | string    | set or override the title of the editor
`attrs`             | object    | attributes object, passed to the editors html-element, e.g. `class: "my-theme"`
`description`       | string    | set or override the description of the editor
`disabled`          | boolean   | if set to `true`, will disable input of editor
`hidden`            | boolean   | if set to `true`, will not render the editor
`hideTitle`         | boolean   | if set to `true`, does not render a title
`icon`              | string    | if supported, set an icon from [material icon](https://material.io/tools/icons/?style=baseline)
`placeholder`       | string    | if supported, adds placeholder-text to input
`theme`             | string    | classname for theming components ([@see mithril-material-forms](https://github.com/sueddeutsche/mithril-material-forms))
`instantUpdate`     | boolean   | if supported, set to true to update (and validate) on each keystroke, instead of on blur


## Editor options

Custom editor options are defined by the editor itself. to prevent configuration collisions, each editor's settings should be placed into a unique property in `editron:ui`. Each editor must document its own settings. For the default editors, bundled with editron, see the following descriptions:


### Object editor options

The _object-editors-options_ are placed into its property `object`:

```js
{
    type: "object",
    "editron:ui": {
        object: {
            collapsed: true
        }
    }
}
```

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`delete`            | boolean   | if set to `true`, will add an action to delete this object from data
`collapsed`         | boolean   | if set, will add a collapse button for the object contents. If set to `true`, will initially collapse the editor
`collapseIcon`      | string    | the collapse [icon](https://material.io/tools/icons/?style=baseline), when not collapsed
`collapsedIcon`     | string    | the collapsed [icon](https://material.io/tools/icons/?style=baseline), when collapsed
`headerContent`     | boolean   | experimental: if set to `true`, will place objects contents into the object-header


### Array editor options

The _array-editors-options_ are placed into its property `array`:

```js
{
    type: "array",
    "editron:ui": {
        array: {
            add: true
        }
    }
}
```

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`add`               | boolean   | if set to `true`, will insert an add-action to add another item
`addTitle`          | string    | button text of add-action
`clone`             | boolean   | if set to `true`, will insert a clone-action to duplicate selected item
`collapsed`         | boolean   | if set, will add a collapse button for the array contents. If set to `true`, will initially collapse the editor
`insert`            | boolean   | if set to `true`, will add an insert-action between elements, to add another item
`insertTitle`       | string    | button text of insert-action
`move`              | boolean   | if set to `true`, will add a move-action to move selected item
`passActions`       | boolean   | if set to `true`, will delegate item actions to child-editor (which must be treated there)
`remove`            | boolean   | if set to `true`, will add a remove-action to remove selected item
`showIndex`         | boolean   | if set to `true`, will add and an index-label, e.g. _3 / 5_ to each item


### Value editor options

The _value-editor_ is a single editor, supporting all basic input types like _boolean_, _string_, _number_, etc. Thus, it does not conform to the configuration guidelines and its configuration properties are still placed directly on `editron:ui`-object. Besides the mentioned _shared properties_, the following settings are noteworthy:

#### select

Per default, a selection is rendered for a json-schema containing an enum. Selection values may have different labels (from the values) with the following setting

```js
{
  type: "string",
  enum: ["milk", "juice", "water"],
  "editron:ui": {
    // use the following values for display in selection
    enum: ["Milch", "Saft", "Wasser"],
    // if set to true, will swap the position of label-title and input
    invertOrder: true
  }
}
```

#### textarea

```js
{
  type: "string",
  format: "textarea",
  "editron:ui": {
    // sets initial row-height of textarea to 3
    "textarea:rows": 3
  }
}
```

### Autocomplete editor options

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`valueProp`         | string    | the property-name of a suggestion-item, to use as _id_
`suggestions`       | array     | list of suggestions _objects_ containing a property `valueProp`
`suggestions`       | object    | [proxy](https://github.com/sueddeutsche/foxy)-method, called with current input to get a completion list
`showCurrentInput`  | boolean   | if set to `true`, adds the current input to the selection list
`currentInputDescription` | string | description to display for an enabled `showCurrentInput`-setting


### OneOf editor options

```js
{
  oneOf: [
    // ...
  ],
  "editron:ui": {
    // if set to true, will swap the position of label-title and input
    invertOrder: true
  }
}
```


### Minimap editor options

As probably mentioned, the _minimap-editor_ is a special-case, considering editors. It is only used as a main-editor and has to be triggered manually using its options:

```js
editron.createEditor("#", dom, {
  minimap: {
    use: true
  }
});
```

Consequently, it will render the main parts of data as a navigation tree.

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`minimap`           | boolean   | if set to `true`, will select the minimap-editor to render a overview-like navigation
`depth`             | number    | depth in data of navigation to display

additional to the _minimap-editor-options_, each child-editor being rendered may be configured individually with the following options in `editron:ui: { minimap: { ... }}`

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`titlePointer`      | string    | title for navigation-item to use, instead of default-title
`skipTo`            | string    | relative json-pointer, to point to data that should be displayed instead of this node (passing nodes)


## Overriding editor options

Remember, you can override editor options using the `editron.createEditor`-method:

```js
editron.createEditor("#/title", dom, {
  invertOrder: true
});
```

Any options passed here, will override options defined in json-schema


[back to README](../../README.MD)
