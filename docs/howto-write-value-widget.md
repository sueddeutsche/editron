# How To Write A Custom Editron Widget For Values

> There is a difference, between a widget for arrays and object and more simple widgets for values, like string, boolean, number. Object- and array-widgets have to manage child-widgets (or multiple values). This documentation refers to custom widgets for _simple values_ only, but the concepts are the same.


Starting with the most simplest implementation, inheriting from the [AbstractValueEditor](../src/editors/AbstractValueEditor.ts), the following implementations are required:

```ts
import Editron, { AbstractValueEditor } from "editron";


export class MyCustomWidget extends AbstractValueEditor {

  // Return `true` to register this widget to the given data-value, at the given json-pointer
  static editorOf(pointer: JSONPointer, controller: Editron) {
    // using controller and its services, you can access all relevant information, 
    // using the passed json-pointer (unique location in data). Usually we fetch 
    // the json-schema here and test a specific setting, which should trigger 
    // this widget. Per convention, the property `format` is used in most cases:
    const schema = controller.service("schema").get(pointer);
    return schema.format === "custom-widget";
  }

  // update view
  render() {
    const { dom, viewModel } = this;
    // render your custom-view to the _dom_ html element
    dom.innerHTML = `My Custom Editor for: ${this.viewModel.value}";`
  }
}
```

When adding this widget to you editron-instance, like `editron.registerEditor(MyCustomWidget);`, the result is as follows: Each data-value having a json-schema with a property `format: "custom-widget"` will be rendered with a string `"My Custom Editor for: <initial value>"`. Here, you can decide what the ui should look like , how the interactions should be, how the value is interpreted and perform updates on data, show validation-errors, etc.

From start to finish:

```ts
import Editron from "editron";
import { MyCustomWidget } from "./MyCustomWidget";

const schema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      format: "custom-widget"
    },
    teaser: {
      type: "string"
    }
  }
};

const editron = new Editron(schema, { title: "test", teaser: "test of a custom widget" }, {
  editors: [MyCustomWidget]
});

const editor = editron.createEditor("#", document.body);
// this will render a ui with a string `My Custom Editor for: test` and 
// an input containing value "test of a custom widget"
```


## Updating The Value


