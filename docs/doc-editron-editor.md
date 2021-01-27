# Editron Editor

> Here, all required tasks of a custom _editor_, quirks and conventions are documented in detail. If you are looking for a more simple approach, read the [howto of writing a custom value editor](howto-write-value-editor.md), using the AbstractValueEditor helper.

A custom _editor_ is **completly responsible for rendering the display of a value to a _dom_-Element, receiving user-events and passing data-changes back to _editron_**. _Editron_ will manage and update values, perform validation and error-reporting and helps choosing the right _editor_ is assigned to the specified value, as defined in the _json-schema_ (and confirmed by the `editorOf`-method of an _editor_).

An _editron editor_ **must** be a class (or instantiatable function) with the following attributes

- A static `editorOf`-method, which will be called to evaluate, if this _editor_ should be used to render for the current _value_
- An `update`-method, which will receive all update events, like new _validation-errors_ or _data-updates_
- An additional method `getElement` to pass the root-dom element of the _editor_ to _editron_ 
- and a method `destroy` which will be called when the editors is _unmounted_


## Changing Data

> Each _editor_ is responsible to pass data changes from a user directly to _editron_. For all data changes, no manual update in rendering is required. Instead, each change in data will notify your `update`-method, after which your view should be updated. 

To update data that the custom _editor_ is managing under its _json-pointer_, you **must** notify _editron_ of the changes to update the main data, trigger validation and notify all responsible editors to render the update. This conforms to the basic redux-pattern, which is used internally.

To update the data you access the editron _data-service_ and change the data at your position:

```ts
const dataService = editron.service("data");
dataService.set(myPointer, newValue);
```

**Note** that your _json-pointer_ might change during the lifetime of an _editor_ as described in [The Pointer Property](#the-pointer-property). To play it safe, always use `this.pointer` property, which is managed outside of your editor, e.g. when rendering your view or performing updates of data, e.g.

```ts
class MyEditor {
    render() {
        // using hyperscript here, but can be rendered with the FW of your choice
        this.dom.innerHTML = h("input", {
            "data-id": this.pointer,
            onchange: event => {
                this.editron.service("data").set(this.pointer, event.target.value);
            }
        });
    }
}
```



## Update Events

`@todo`


## Additional Focus Hooks

> An editor **should** notify _editron_ of its current active state by sending its _pointer_ to the _location-service_ when it is _focused_ and _blured_. This enables other _editors_ to respond to the current-selected element, e.g. highlighting the position in an overview-representation, rendering additional informations based on the current selection or changing the shown portion of the data (pagination).

Accessing the _location-service_ follows the usual pattern through the _editron_-instance:

```ts
const locationService = editron.service("location");
```

Here, you can use 

- `setCurrent(pointer: string)` - to set your location as active
- `blur(pointer: string)` - to remove your location from being active

An example would look like

```ts
// set current location as selected
myDom.addEventListener("focus", () => {
    editron.service("location").setCurrent(myPointer);
});
// deselect current location
myDom.addEventListener("blur", () => {
    editron.service("location").blur(myPointer);
});
```

For an implementation example, see the bundled [AbstractValueEditor](../src/editors/AbstractValueEditor.ts) or [AbstractEditor](../src/editors/AbstractEditor.ts) _blur_ and _focus_ methods. The _location-service_ is documented in code in [services/LocationService.ts](../src/services/LocationService.ts).



## Example Implementation

`@todo`


## Editron Helpers

### Language Support

`@todo`


### Create Element

`@todo`


## Further Details

### HTML Conventions

#### HTML Attributes

Your root _dom_-element is assigned the current json-pointer to an html-attribute `[data-point=<json-pointer>]`. If your choice of rendering overwrites this attribute, it is recommended to add it on your own. The attribute _data-point_ enables an integration by querying the dom-hierarchy for a match using this convention.

In addtion to an attribute on your root-element, an attribute `[data-id]=<json-pointer>` _should_ be placed to each html-input-form (_input_, _select_, _textarea_, etc) for the same reasons.

`data-point` and `data-id` is currently used in

- [LocationService](../src/services/LocationService.ts) to _focus_ an input-element by _command_
- [selection-helper](../src/utils/selection.ts) to retrieve the current active input-element (if it is part of _editron_)
- and default styling of form layout

For an _editor_ with a `pointer="#/article/title"`, this would look like

```html
<div class="ed-value ed-value--string" data-point="#/article/title">
    <label>
        article title 
        <input type="text" data-id="#/article/title">
    </label>
</div>
```


#### HTML Classnames

For consistent styling, the bundled editors assign a [BEM-style](http://getbem.com/introduction/) classname to each component and input-form:

Each root _dom_-element receives a class `ed-<JSTYPE>` and for values an additional type `ed-<SCHEMA_FORMAT_OR_TYPE>`. e.g.

```html
<!-- for an object -->
<div class="ed-object"></div>
<!-- for an array -->
<div class="ed-array"></div>
<!-- for a string with format: "url" -->
<div class="ed-value ed-value--url"></div>
<!-- for a string without format -->
<div class="ed-value ed-value--string"></div>
```


### The Pointer Property

> A _json-pointer_ of an _editor_ may change, when its position is changed, due to modifications of an array. Arrays are modified when another items is inserted or deleted or items are resorted. To improve rendering speed and maintain the current input-focus an _editor_ may be moved and reused (instead of destroyed and recreated). But this will change the editor's original position and requires a change of events, dom-attributes and possibly accessing child-editors.  

Internally, each editor is identified by its _pointer_. For this reason an _editor_-instance, will receive a managed property `pointer:string`, placed directly on the instance's object. So, if you create an instance by `const instance = editron.createEditor("#/article", dom);` you may access (but must not modify) the _json-pointer_ of an _editor_ through `instance.pointer`. 

Tracking your own _json-pointer_ or dependending on the initial _pointer_ received in the constructor will cause errors in behaviour (@see [HTML Attributes](#html-attributes)) or errors in rendering child-editors. @see [Delegating Child-Editors](#delegating-child-editors).


### Delegating Child-Editors

`@todo`

- using controller.createEditor


### Receiving Child Events

> For convenience and optimization each _editor_ registers to events on its own location (_json-pointer_) only. That is, it will receive updates on errors or data changes only regarding its own value. Thus, an _object_ or _array_ will not be notified if its _property_ or _item_ receive a change of its value and has a validation-error.

In some cases it is required that an editors listens to changes in its child values or errors. For example, an _editor_ manages its whole object, not relying on child-editors, it will require all updates within to trigger a dom-update. For this reason, you may set properties on your instance, to register to nested events:

```ts
class MyEditor {
    // get notified of changes within my object or array
    notifyNestedChanges = true,
    // get notified of errors within my object or array
    notifyNestedErrors = true
}
``` 

As a result, your `update`-event will be called for all changes on your data, starting at your _json-pointer_.


### Arrays: Working With Patches

`@todo`

- performance and rendering
- sync-feature



[Back to README](../README.md)