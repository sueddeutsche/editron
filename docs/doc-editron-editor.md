# Editron Editor

> Here, all required tasks of a custom _editor_, quirks and conventions are documented in detail. If you are looking for a more simple approach, read the [howto of writing a custom value editor](howto-write-value-editor.md), using the _AbstractValueEditor_ helper.


- [Editor](#editor)
- [Changing Data](#changing-data)
- [Update Events](#update-events)
- [Focus Hook](#focus-hooks)
- [Further Details](#further-details)
    - [HTML Conventions](#html-conventions)
    - [The Pointer Property](#the-pointer-property)
    - [Delegating Child-Editors](#delegating-child-editors)
    - [Injecting DOM-Elements](#injecting-dom-elements)
    - [Receiving Child Events](#receiving-child-events)
    - [Arrays: Working With Patches](#arrays-working-with-patches)
- [Example Implementation](#example-implementation)



## Editor

> A custom _editor_ is **completly responsible for rendering the display of a value to a _dom_-Element, receiving user-events and passing data-changes back to _editron_**. _Editron_ will manage and update values, perform validation and error-reporting and helps choosing the right _editor_ is assigned to the specified value, as defined in the _json-schema_ (and confirmed by the `editorOf`-method of an _editor_).

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
        const dataService = this.editron.service("data");
        const { pointer } = this;
        const onChange = event => dataService.set(pointer, event.target.value);

        // using jsx-like syntad here, but can be rendered with the FW of your choice
        this.dom.innerHTML = <input data-id="{this.pointer}" onChange={onChange}>;
    }
}
```



## Update Events

_Editron_ services emit their events to each editor's `update`-method. To inspect these events and sequence, you can log them in your editor. Each events has a `type:string` and a specific `value:T` dependening on the type of event. Some events send data-updates, emit errors and change the active state of an editor. This should be processed and end with an update of your view.


```ts
import { EditorUpdateEvent } from "editron";

class MyEditor {
    update(event: EditorUpdateEvent) {
        console.log(event.type, event.value);
        this.render();
    }
}
``` 

**Note** Editor events are typed in [Editor.ts](../src/editors/Editor.ts)

Usually a switch statement is helpful, to process the events:

```ts
import { EditorUpdateEvent } from "editron";

class MyEditor {
    update(event: EditorUpdateEvent) {
        switch(event.type) {
            case "data:update":
                this.data = event.value;
                break;
            case "validation:errors": 
                this.errors = event.value;
                break;
            case "active":
                this.disabled = event.value === false;
                break;
        }
        this.render();
    }
}
``` 

Overview of update events:

type                | value     | description
--------------------|-----------|-----------------
data:update         | any               | the new `data` of your editor to display
validation:errors   | [ValidationError] | list of validation `errors` in your _data_
active              | boolean           | if `false`, the input should not be editable
pointer             | string            | the _pointer_ (position in data) of your editor has changed



## Focus Hooks

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

> A _json-pointer_ of an _editor_ may change, when its position is changed, due to [modifications of an array](#arrays-working-with-patches). Arrays are modified when another items is inserted or deleted or items are resorted. To improve rendering speed and maintain the current input-focus an _editor_ may be moved and reused (instead of destroyed and recreated). But this will change the editor's original position and requires a change of events, _DOM_-attributes and possibly accessing child-editors.  

Internally, each editor is identified by its _pointer_. For this reason an _editor_-instance, will receive a managed property `pointer:string`, placed directly on the instance's object. So, if you create an instance by `const instance = editron.createEditor("#/article", dom);` you may access (but must not modify) the _json-pointer_ of an _editor_ through `instance.pointer`. 

Tracking your own _json-pointer_ or dependending on the initial _pointer_ received in the constructor will cause errors in behaviour (@see [HTML Attributes](#html-attributes)) or errors in rendering child-editors. @see [Delegating Child-Editors](#delegating-child-editors).


### Delegating Child-Editors

> When creating a custom _object_ or custom _array_ editor and you just want to add functionality on the surrounding node (which contains further values), but you do not wish to add functionality to those editors, you can delegate the creation of child-editors back to _editron_. Thus, you can hook into any node of the data-tree, inject your ui-features and continue rendering of child-nodes/editors by passing each location back to editron. For this, you can use `editron.createEditor()`, like adding an initial root-editor for your initial _editron_ view, as described on the [README](../README.md).

You can delegate one, some or all _properties_ or _items_ of your editor back to _editron_. In this case, _editron_ will choose and setup the _editor_ for this property, but you have to place the returned _DOM_ into you editor's view:

```ts
    // we to delegate our first item, that is: our pointer + target-property:
    const delegatedPointer: string = `${this.pointer}/0`; 
    // a dom-element, where child-editors should be placed
    const childDom: HTMLElement = document.createElement("div");
    // following the basic editor creation, create the editor, which will be 
    // appended to childDom
    const delegatedEditor: Editor = editron.createEditor(delegatedPointer, childDom);
```

Remember: the api between _editors_ and _editron_ is a _DOM-element_. Following the above example

```ts
    // now, we have a child-editor rendered to `childDom` and must inject it into
    // our view. Thus, in e.g. the our render()-method
    this.dom.innerHTML = (
        <div>
            <h1>My Custom Editor</h1>
            <div class="ed-children">
                // inject our child-dom element into our editor's view
                {childDom}
            </div>
        </div>
    )
```

[@see Injecting DOM-Elements](#injecting-dom-elements) for working with _DOM_-nodes


Suppose we have an custom editor for an object, but want to modify the objects representation only:

```ts
import { EditorUpdateEvent } from "editron";


class MyObject implements Editor {
    // ...
    constructor(pointer: string, editron: Editron) {

        // we need to track the child editors in order to
        // recreate or destroy them
        this.childEditors = [];

        // create a dom element to gather all childNodes
        this.$children = document.createElement("div");

        // fetch the current data object
        const myObject = editron.service("data").get(pointer);

        // iterate data and create an editor for each property
        Object.keys(myObject)
            .forEach(property => {
                const childPointer = `${this.pointer}/${property}`;
                // this will create a child editor and append it to $children
                const childEditor = editron.createEditor(childPointer, this.$children);
                this.childEditors.push(childEditor);
            });
    }

    update(event: EditorUpdateEvent) {
        switch(event.type) {
            // for an object, a data update is triggered (only), when a property is added or removed
            case "data:update": {
                // 1. destroy previous editors
                this.childEditors.forEach(editor => controller.destroyEditor(editor));
                this.childEditors.length = 0; // reset stored editors
                this.$children.innerHTML = ""; // reset html

                // 2. featch current data
                const myObject = event.value; // or using `editron.service("data").get(this.pointer)`

                // 3. iterate data and (re)create an editor for each property
                Object.keys(myObject)
                    .forEach(property => {
                        const childPointer = `${this.pointer}/${property}`;
                        // this will create a child editor and append it to $children
                        const childEditor = editron.createEditor(childPointer, this.$children);
                        this.childEditors.push(childEditor);
                    });

                break;
            }
        }
    }

    render() {
        // using pseudo-jsx-code here, you can use a rendering of your choice
        this.dom.innerHTML = (
            <div>
                <h1>My Custom Object Editor</h1>
                // ... other custom stuff
                <div class="ed-children">
                    // important: following this example, you need a way to inject 
                    // a dom-element for the children. Dependending on your choice 
                    // of framework you may need a different solution
                    {this.$children}
                </div>
            </div>
        );
    }
}
```


### Injecting DOM-Elements

> _Editron_ uses DOM-Elements as an interface between _editors_. This ensures _editron_ is framework agnostic. But this may cause some headaches, when working with child-editors [@see Delegating Child-Editors](#delegating-child-editors). Managing and injecting _DOM_-nodes outside the used frawework _might_ be tricky. Thus, the following section should give some guidance.

When creating an editor, you pass a _DOM-element_ to _editron_ on which the chosen editor should be rendered to. Having multiple child-nodes you usally assemble them on a single node, e.g. _$children:HTMLElement_ or document-fragment. Thus, you have something like the following

```ts
// a node to collect child-editors
const $children = document.createElement("div");
// create editors and append their views to the $children node
editron.createEditor("#/title", $children);
editron.createEditor("#/text", $children);
```

Now, you have to pass the node `$children` into your view. Basically, there are two possibilities to append _DOM_-nodes using a framework

1. append your node within the view on a _on-create-hook_
2. use _document.querySelector_ to fetch the _parent-node_ of a prerendered view and append the your node


**1. append your node within the view**

For example, [mithriljs](https://mithril.js.org/) supports an `oncreate`-hook, which will pass the _DOM_-node of the element:

```ts
m.render(this.dom,
    m(".ed-children", {
        // append $myNode once, to a managed view
        oncreate: ({ dom }) => dom.appendChild(this.$myNode);
    })
);
```

Following this api, our jsx-like examples in this document simplify the step to

```ts
this.dom.innerHTML = (
    <div class=".ed-children">
        {this.$myNode}
    </div>
);
```


**2. _querySelector_ on a prerendered view**

Optionally render your view twice: Once initially to setup the DOM-hierarchy, append your node to the selected target and render the full view:

```ts
// initial render
this.render();
const target = this.dom.querySelector(".ed-children");
target.appendChild(this.$myNode);
```



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

> An _array-editor_ can be written by following the guidelines in this document. But, arrays have a unqiue behaviour, in which items are not fixed to their position like object-properties (usally). So, rearranging item positions is a behaviour unique to arrays and has a special impact on the rendering. A naive implementation may just destroy the whole user-interface and create it from scratch, whenever an item is moved to another position.
>
> Recreating an array for each change in item-positions can have a huge impact on performance, dependening on the complexity of the array contents (e.g. multiple objects and form elements per item). And it can mess with the current user interaction, where a focus input element becomes defocused after recreation. This will be extremely noticable when synching changes across multiple users. On the other hand, only positions do change, not the corresponding view. Making a reuse of array-items a logic choice.
>
> In the context of `editron`, position of a _editor_ (_view_) is referenced by a _json-pointer_. For this case, the _json-pointer_ is managed for each editor from _editron_ and can be access by `this.pointer` as is explained in [The Pointer Property](#the-pointer-property).

Internally, _editron_ uses diffs on _json-data_ to determine if data has changed and determine the location and type of change. For a change in data, the corresponding diff is passed along to the _update-event_, which can be used to update a view in place, optimizing rerendering the view. For a complete implementation, refer to the bundled [Array-Editor#applyPatches](../src/editors/arrayeditor/index.ts#196).

@todo overview, details of a patch, implementation-example, consider renaming patch to diff (in docu) - depending on its contents



## Example Implementation

```ts
import Editron, { Editor, EditorUpdateEvent, EditorOptions } from "editron";


class URLEditor implements Editor {
    
    // this property is managed by editron (its instance-service)
    pointer: string;
    
    // we register this editor to all strings with a format "url"
    static editorOf(pointer: string, editron: Editron, options: EditorOptions) {

        // fetch the json-schema for this pointer
        const schema = editron.service("schema").get(pointer);
        if (schema.type === "string" && schema.format === "url") {

            // this is the schema, we support. Thus we return 
            // `true`, which will get this editor to be 
            // instantiated for his value
            return true;
        }

        // returning false, we tell editron to ignore this 
        // editor and keep searching for a matching editor
        return false;
    }

    // same arguments as in editorOf - this only gets called, 
    // when our editorOf returned `true` for this pointer
    constructor(pointer: string, editron: Editron, options: EditorOptions) {

        // get our current value, the initial _url_-string
        const value = editron.service("data").get(pointer);

        // and possible validation errors
        const errors = editron.service("validation").getErrorsAndWarnings(pointer);

        // setup editron integration using this.pointer`, which 
        // is always up to date check _The Pointer Property_ for details
        const focus = () => editron.service("location").setCurrent(this.pointer);
        const blur = () => editron.service("location").blur(this.pointer);
        const changeValue = (event) => editron.service("data").set(this.pointer, event.target.value);

        // from our options, we get the basic settings of this 
        // editor, mainly retrieved from its json-schema
        const { disabled, title, description } = options;

        // for rendering and reuse, we create a state variable, 
        // which will be updated from our update events
        this.state = { changeValue, focus, blur, value, errors, tile, description, disabled };

        // create our root dom element, which will be passed to 
        // editron by getElement()
        this.dom = document.createElement("div");
        this.dom.classList.add("ed-value", "ed-value--string");

        // render this editor initially 
        this.render();
    }

    getElement() {
        return this.dom;
    }

    update(event: EditorUpdateEvent) {
        switch(event.type) {
            case "data:update":
                this.state.data = event.value;
                break;
            case "validation:errors": 
                this.state.errors = event.value;
                break;
            case "active":
                this.state.disabled = event.value === false;
                break;
        }
        this.render();
    }

    render() {
        // using pseudo-jsx-code here, you can use the rendering of 
        // your choice or none at all
        const errors = this.state.errors.map(error => <li>{error.message}</li>);
        
        this.dom.innerHTML = (
            <div>
                <label>
                    {this.state.title}
                    <input 
                        type="text" value="this.state.value" disabled={this.state.disabled ? "disabled" : ""}
                        data-id="{this.pointer}" 
                        onChange={this.state.changeValue}
                        onFocus={this.state.focus}
                        onBlur={this.state.blur}
                    >
                </label>
                <em>{this.description}</em>
                <ul class="errors">{errors}</ul>
            </div>
        );
    }

    destroy() {
        // check if we havent been destroyed yet
        if (this.state == null) {
            return;
        }

        // remove all event listeners not yet unregistered on dom elements
        // ...
        
        // maybe cleanup the dom
        this.dom.innerHTML = "";

        // free the state and flag instance to be deleted
        this.state = null;
    }
}
```



## @todos

- _editron_ display-strings may be customized using the ii8n-setting, but the current setup prevents using the translation helper independent of en editron-dependency. This will create a cyclic dependency which must be prevented _@todo expose the translation helper on the editron-instance in a next release_
- _editron_ has a _mithril_ based _createElement_-method, which can be used to simplify the creation of a root-dom element. But in future releases, we do not want to depend on a _mithril_-dependency, thus documenting this helper is omitted.


[Back to README](../README.md)