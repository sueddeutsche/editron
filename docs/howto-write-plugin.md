# How To Write A Plugin

An overview of the plugin api is described in [doc-plugin](./doc-plugin.md)

> The following example describes an implementation for the SelectionPlugin in Typescript. The goal is to make an editor selectable, so it is highlighted and exposes an _selection-hook_ for further consumption. You can refer to the full implementation in [SelectionPlugin](../src/plugin/selectionplugin/index.ts).

Using typescript, we start defining our plugin-options to expose our _selection-hooks_

```ts
type SelectionPluginOptions = {
  /* when an editor is selected, onSelect is called with the location pointer, editor instance and its options */
  onSelect({ pointer, editor }): void;
  /* called when an editor is deselected */
  onDeselect({ pointer, editor }): void;
}
```

and introduce a class for our custom plugin taking the options

```ts
class SelectionPlugin implements Plugin {
  id = "SelectionPlugin"; // add an id to identify this plugin
  options: SeletionPluginOptions;
  editron: Editron
  
  constructor(options: SelectionPluginOptions) {
    this.options = options; // store passed in hooks for later notifications
  }

  initialize(editron: Editron) {
    this.editron = editron; // store editron instance for later access
  }
}
```

With this, we can add the SelectionPlugin to editron, which will do nothing yet:

```ts
new Editron(schema, data, {
  plugin: [
    new SelectionPlugin({
      onSelect: ({ pointer }) => console.log("select editor at", pointer),
      onDeselect: ({ pointer }) => console.log("deselect editor at", pointer)
    })
  ]
});
```


## Adding Selection Behaviour

Next, we add our selection logic. We track an active element, manage a css-class `selected` and call our user hooks _onSelect_ and _onDeselect_.


```ts
class SelectionPlugin implements Plugin {

  options: SeletionPluginOptions;
  // track the currently selected editor instance
  currentSelection: Editor;

  deselect() {
    if (this.currentSelection == null) {
      // bail, if we have no active selection
      return;
    }

    const editor = this.currentSelection;
    // remove the selection flag from the editors root DOM element
    editor.getElement().classList.remove("selected");
    // call the registered user hook
    this.options.onDeselect({ pointer: editor.getPointer(), editor });
    // and remove the stored selection
    this.currentSelection = null;
  }

  select(editor: Editor) {
    if (this.currentSelection === editor) {
      // bail, if this editor is already selected
      return;
    }
    // deselect any current active editor
    this.deselect();
    // add a selected flag on the editors root DOM element
    editor.getElement().classList.add("selected");
    // store the editor as selected
    this.currentSelection = editor;
    // and call the registered user hook
    this.onSelect({ pointer: editor.getPointer(), editor });
  }
}
```


Now that we have a basic Plugin and selection behaviour, we need to register our methods to an event-listener.


## Tracking An Instance And Event-Listeners

We will add an event-listener for each editor, so we store a function directly on each instance for later removal. In order to track editor instances that are registered to our _selection-plugin_, we extend editor instances by adding a configuration field directly on each editor:

```ts
interface ModifiedEditor extends Editor {
    __selectionPlugin?: {
        select(event: MouseEvent) => void;
    }
}
```

This gives us the ability (within typescript) to store properties onto an editor. Using the `onCreateEditor`-hook, we store our event-listener for later reuse.

```ts
class SelectionPlugin implements Plugin {
  
  // ...
  
  onCreateEditor(pointer, editor: ModifiedEditor, options?): void {
    // only register editors, that are configured as selectable, 
    // for example in a json-schema: { "editron:ui": { selectable: true } }
    if (options?.selectable == null) {
      return;
    }
    
    // store our plugin information on this instance, 
    editor.__selectionPlugin = {
      // add an event-listener, that we can access again later
      select: (event: MouseEvent) => {
        event.stopPropagation();
        this.select(editor);
    };

    // and finally register the event
    editor.getElement().addEventListener("click", editor.__selectionPlugin.select);
  }
}
```

Being good citizens, we want to remove all custom data and listeners when an editor instance is removed. Therefore we watch `onDestroyEditor`-hook to cleanup

```ts
  onDestroyEditor(pointer, editor: ModifiedEditor, options?): void {
    // bail, if this is not a tracked editor instance
    if (editor.__selectionPlugin == null) {
      return;
    }
    // remove the event-listener
    editor.getElement().removeEventListener("click", editor.__selectionPlugin.select);
    // remove our custom properties
    editor.__selectionPlugin = undefined;
  }
```

**Note** In case we are relying on an editor's json-pointer, we should add a `onChangePointer`-hook, which is described in [doc-plugin](./doc-plugin#onchangepointer-hook). For an implementation example, refer to the [SortablePlugin](../src/plugin/sortableplugon/index.ts).

Finally, we add the missing deselect hook and are done implementing the plugin

```ts
  initialize(controller: Editron): Plugin {
      this.controller = controller;

      // listen to clicks on document for deselecting any editors
      document.body.addEventListener("click", () => this.deselect());
  }
```

See the full implementation in [SelectionPlugin](../src/plugin/selectionplugin/index.ts).
