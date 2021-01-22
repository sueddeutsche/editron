# Widget Options

> Widget configurations may set titles and descriptions, hide a widget, modify its behaviour, add an icon, etc.. Here is a description of widget-options supported by the default widgets that are bundled along with _editron_. These widgets ensure, that all basic json-values can be displayed and edited. Each widget supports its own configuration settings. But there are some configuration-values that _should_ be supported per default, like changing a _title_ or _description_. These default configuration values are described here as **shared widget options**, where all specific widget options are described in **widget options** for each widget individually.
> 
> So, _editron_ per se does not support any options, besides `hidden: boolean`. All other configuration values are defined by the widgets in use.

From a given JSON-Schema, its optional properties `title` and `description` are used for labels and inline-information of the generated
input-element or group. All additional configuration for an _editron_-widget goes into the _editron:ui_ property in each json-schema-definition. Some configuration settings are supported per default, and should be supported by a _custom_-widget. Other configuration settings are widget-specific and should be added with a unique property-name , where its contents **must be an object**. e.g.: The _autocomplete_-Widget, has its custom configuration in a corresponding property _autocomplete_, like in the following example:

```js
{
  type: "string",
  format: "autocomplete",
  // json-schema properties used per default in widget configuration
  title: "optional title",
  description: "optional description",
  // additional, extended widget configuration
  "editron:ui": {
    // default settings
    // ...
    
    // specific settings for the (default) autocomplete-widget
    autocomplete: {
      // ...
    }
  }
}
```

- [Shared options across widgets](#shared-widget-options)
- [Widget Options](#widget-options)
  - [Object widget options](#object-widget-options)
  - [Array widget options](#array-widget-options)
  - [Value widget options](#value-widget-options)
  - [Autocomplete widget options](#autocomplete-widget-options)
  - [OneOf widget options](#oneof-widget-options)
  - [Minimap widget options](#minimap-widget-options)
- [Overriding widget options](#overriding-widget-options)

## Shared widget options

Default widget options are properties within the `editron:ui`-object, like

```js
{
  type: "object",
  "editron:ui": {
    title: "SEO Information"
  }
}
```

The currently used default-configuration properties can be inspected in its type-defintion [Widget#Options](../src/widgets/Widget.ts#L7). Right now, all shared configuration properties are:

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`title`             | string    | set or override the title of the widget
`attrs`             | object    | attributes object, passed to the widgets html-element, e.g. `class: "my-theme"`
`description`       | string    | set or override the ui-description of the value
`disabled`          | boolean   | if set to `true`, will disable ui for this value
`hidden`            | boolean   | if set to `true`, will not render the value
`hideTitle`         | boolean   | if set to `true`, does not render a title
`icon`              | string    | if supported, set an icon from [material icon](https://material.io/tools/icons/?style=baseline)
`placeholder`       | string    | if supported, adds placeholder-text to input
`theme`             | string    | classname for theming components ([@see mithril-material-forms](https://github.com/sueddeutsche/mithril-material-forms))
`instantUpdate`     | boolean   | if supported, set to true to update (and validate) on each keystroke, instead of on blur


**about instantUpdate** The default-widgets only update data on a change-event which is mostly triggered on a blur action. That is, when a user exits an input-field, the value is sent and validation started, resulting in fast feedback. In some cases, you want to trigger data-updates and its error-validation while typing. Thus, an option `instantUpdate: true` will tell the widget to send an update on each keystroke. Depending on the validation (e.g. remote requests to an object), _instantUpdate_ will result in bad behaviour.


## Widget options

Custom widget options are defined by the widget itself. To prevent configuration collisions, each widget's settings should be placed into a unique property in `editron:ui`. Each widget must document its own settings. For the default widgets, bundled with editron, see the following descriptions:


### Object widget options

The _object-widgets-options_ are placed into its property `object`:

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
`collapsed`         | boolean   | if set, will add a collapse button for the object contents. If set to `true`, will initially collapse the widget
`collapseIcon`      | string    | the collapse [icon](https://material.io/tools/icons/?style=baseline), when not collapsed
`collapsedIcon`     | string    | the collapsed [icon](https://material.io/tools/icons/?style=baseline), when collapsed


### Array widget options

The _array-widgets-options_ are placed into its property `array`:

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
`addTitle`          | string    | alternative add-button text of enabled add-action
`clone`             | boolean   | if set to `true`, will insert a clone-action to duplicate selected item
`collapsed`         | boolean   | if set, will add a collapse button for the array contents. If set to `true`, will initially collapse the widget
`insert`            | boolean   | if set to `true`, will add an insert-action between elements, to add another item
`insertTitle`       | string    | button text of insert-action
`move`              | boolean   | if set to `true`, will add a move-action to move selected item
`passActions`       | boolean   | if set to `true`, will delegate item actions to child-widget (which must be treated there)
`remove`            | boolean   | if set to `true`, will add a remove-action to remove selected item
`showIndex`         | boolean   | if set to `true`, will add and an index-label, e.g. _3/5_, to each item


### Value widget options

The _value-widget_ is a single widget, supporting all basic input types like _boolean_, _string_, _number_, etc. Thus, it does not conform to the configuration guidelines and its configuration properties are still placed directly on `editron:ui`-object. Besides the mentioned _shared properties_, the following settings are noteworthy:

#### select

Per default, a selection (_html: select_) is rendered for a json-schema containing an enum. Per json-schema specification it is defined as list of values, for example `enum: Array<string>`. In user interfaces we usually want to display more readable values, thus we need another enum-setting, containing the selection's display values, like in the following example:

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

### Autocomplete widget options

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`valueProp`         | string    | the property-name of a suggestion-item, to use as _id_
`suggestions`       | array     | list of suggestions _objects_ containing a property `valueProp`
`suggestions`       | object    | [proxy](https://github.com/sueddeutsche/foxy)-method, called with current input to get a completion list
`showCurrentInput`  | boolean   | if set to `true`, adds the current input to the selection list
`currentInputDescription` | string | description to display for an enabled `showCurrentInput`-setting


### OneOf widget options

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


### Minimap widget options

As probably mentioned, the _minimap-widget_ is a special-case, considering widgets. As an widget, it is usually created directly through the `editron.createEditor`-method and not by registering it through the json-schema.

```js
editron.createEditor("#", domOfNavigation, {
  minimap: {
    use: true
  }
});
```

Consequently, it will render a navigation based on the data. That is, for each object or array, a _title_ will be rendered and linked to the corresponding form (if present). For more details, refer to the [editron-minimap-widget documentation](../src/widgets/minimapwidget/README.md).

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`minimap`           | boolean   | if set to `true`, will select the minimap-widget to render a overview-like navigation
`depth`             | number    | depth in data of navigation to display

additional to the _minimap-widget-options_, each child-widget being rendered may be configured individually with the following options in `editron:ui: { minimap: { ... }}`

property            | type      | description                                 
|-------------------|-----------|---------------------------------------------|
`titlePointer`      | string    | title for navigation-item to use, instead of default-title
`skipTo`            | string    | relative json-pointer, to point to data that should be displayed instead of this node (passing nodes)


## Overriding widget options

> Recap: for each _data-value_ an _widget_ is assigned to it, to render the user-interface and manage the data updates. Here the json-schema is passed to the widget with an options object, containing the sanitized options from `editron:ui`-property. Each editron-ui starts with a call to `editron.createEditor`. In this case, options may also be passed directly to the method, which will override any options, defined in json-schema, for this widget-instance.


Using a json-schema through `new Editron(jsonSchema)`, each _widget_-instance will received the options, defined in `editron:ui`. But you can override any widget option using the `editron.createEditor`-method and pass in specific options, for this instance (at json-pointer):

```ts
editron.createEditor("#/title", dom as HTMLElement, {
  invertOrder: true
});
```

Any options passed here, will override options defined in json-schema. From the widgets perspective

```js
import Editron, { WidgetOptions } from "editron";

class MyWidget {
  constructor(pointer: string, controller: Editron, options: WidgetOptions) {
    // here, options contains the settings from _editron:ui_ as well as the option _invertOrder: true_ as shown above.
    // options passed to the createEditor-method, overwrite any settings given in `editron:ui`
  }
}
```


[back to README](../../README.MD)
