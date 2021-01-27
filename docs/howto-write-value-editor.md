# How To Write A Custom Editron Editor For Values

> There is a difference, between a editor for arrays and object and more simple editors for values, like string, boolean, number. Object- and array-editors have to manage child-editors (or multiple values). This documentation refers to custom editors for _simple values_ only, but the concepts are the same.


Starting with the most simplest implementation, inheriting from the [AbstractValueEditor](../src/editors/AbstractValueEditor.ts), the following implementations are required:

```ts
import Editron, { AbstractValueEditor } from "editron";


export class MyCustomEditor extends AbstractValueEditor {

  // Return `true` to register this editor to the given data-value, at the given json-pointer
  static editorOf(pointer: JSONPointer, controller: Editron) {
    // using controller and its services, you can access all relevant information, 
    // using the passed json-pointer (unique location in data). Usually we fetch 
    // the json-schema here and test a specific setting, which should trigger 
    // this editor. Per convention, the property `format` is used in most cases:
    const schema = controller.service("schema").get(pointer);
    return schema.format === "custom-editor";
  }

  // update view
  render() {
    const { dom, viewModel } = this;
    // render your custom-view to the _dom_ html element
    dom.innerHTML = `My Custom Editor for: ${this.viewModel.value}";`
  }
}
```

When adding this editor to you editron-instance, like `editron.registerEditor(MyCustomEditor);`, the result is as follows: Each data-value having a json-schema with a property `format: "custom-editor"` will be rendered with a string `"My Custom Editor for: <initial value>"`. Here, you can decide what the ui should look like , how the interactions should be, how the value is interpreted and perform updates on data, show validation-errors, etc.

From start to finish:

```ts
import Editron from "editron";
import { MyCustomEditor } from "./MyCustomEditor";

const schema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      format: "custom-editor"
    },
    teaser: {
      type: "string"
    }
  }
};

const editron = new Editron(schema, { title: "test", teaser: "test of a custom editor" }, {
  editors: [MyCustomEditor]
});

const editor = editron.createEditor("#", document.body);
// this will render a ui with a string `My Custom Editor for: test` and 
// an input containing value "test of a custom editor"
```

- [Updating The Value](#updating-the-value)
- Additional Editor Features
  - [display title, description and errors](display-title-description-and-errors)
  - [support disabled option](support-disabled-option)
  - [support focus & blur](support-focus-blur)
- [Summary](summary)



## Updating The Value

> When interacting with _editron_, you do not update your dom directly. Instead, you pass any value changes to _editron_, which in turn will notify all affected editors through an _update_-event, which in turn should trigger the _render_-method. Just like using [redux](https://github.com/reduxjs/redux), which is used internally. Extending from the _AbstractValueEditor_, this is already setup and all you have to do is 1) send an data-update to editron and 2) ensure you render the updated value given in `viewModel.value`.

For convinience, there is a `this.setData(value)`-helper, which will notify _editron_ and update the value at our _json-pointer_:

```ts
export class MyCustomEditor extends AbstractValueEditor {
  // ...
  render() {
    const { dom, viewModel } = this;
    // usually, we use a framework here
    
    if (dom.children.length === 0) {
      // first render
      const input = document.createElement("input");
      // set the initial value
      input.value = this.viewModel.value;

      // create a change listener and store it for later reference
      this.callback = () => this.setData(input.value);

      // add register callback to send an update on changed inputs
      input.addEventListener("change", this.callback);
      dom.appendChild(input);      

    } else {
      // we have already setup the view, just update the value
      dom.children[0].value = this.viewModel.value;      
    }
  }
}
```

**about setData(value)** `setData(value)` is a shortcut for the _editron_ interaction. In detail, you send a message to the _editron_ _DataService_ to change the value of the given position: `this.controller.service("data").set(this.getPointer(), newValue)`.

Editors will be constantly added and removed, so ensure, that all event-listeners and properties are removed when an editor is abput to be destroyed. For this, used the `destroy`-method in your custom editor, like in the following example:

```ts
export class MyCustomEditor extends AbstractValueEditor {
  // ...
  destroy() {
    // track, if we have not yet been destroyed
    if (this.viewModel) {
      // remove our event-listeners
      dom.children[0].removeEventListener(this.callback);
       // remove any dom elements
      dom.innerHTML = "";
      // and flag our instance as destroyed
      this.viewModel = null;
    }  
  }
}
``` 



## Additional Editor Features

For an editor to be a good citizen, the following features should be supported. In addition, you can refer to the [default editor options](doc-editor-options.md), which features should or may be supported.


### display title, description and errors

> Describing the value, giving context and informing about incorrect data is important. Thus we have to ensure, these value are rendered by the editor.

```ts
// MyCustomEditor
render() {
  const { title, description, errors } = this.viewModel;
  // render something like:
  // TITLE
  // DESCRIPTION
  // INPUT
  // LIST OF ERRORS
}
```


### support disabled option

> Individual or all editors may be disabled. Either due to missing data-values or to present the form in read-only mode.

Following our example, we should ensure, that the current _disabled_-state is rendered correctly. Using the _AbstractValueEditor_, you may reference `this.viewModel.disabled`;

```ts
// MyCustomEditor
render() {
  if (this.viewModel.disabled) {
    dom.children[0].setAttribute("disabled", true);
  } else {
    dom.children[0].removeAttribute("disabled");
  }
```


### support focus & blur

> For a set of specific functions, like changing the ui, based on the active editor oder highlighting the current location, an editor should notify _editron_ about its active state, using focus and blur events.

Following our example and using our convenient-methods `this.focus()` and `this.blur()` from _AsbtractValueEditor_:

```ts
// MyCustomEditor
render() {
    // ...
    input.addEventListener("blur", () => this.blur());
    input.addEventListener("focus", () => this.focus());
}
```

**about focus/blur** As with data-updates, the current focus state is managed by a _editron_-service _LocationService_. In this context, `this.focus()` is just a shortcut to `this.controller.service("lcoation").setCurrent(this.getPointer());`.



## Summary

> Note, that writing custom editors is usually only necessary in some situations, where you need improve the usability or preview data in a more appropriate way. When writing a custom editor, you can take full control on rendering, interaction and interpretation of the data. But this means, some custom implementations must be met, like supporting options (depending on your requirements), managing events and rendering title, description, errors, etc along side the input. The _AbstractValueEditor_ tries to minimize the effort of writing a complete standalone editor.

- Using the _AbstractValueEditor_ is totally optional, but is very helpful in bootstrapping an editor and following editron-migrations
- For a more detailed description of an editor and its interaction with editron, refer to [doc-editron-editor.md](doc-editron-editor.md)
- @todo a running example should be within this repository


[Back to README](../README.md)