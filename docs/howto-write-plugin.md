# How To Write A Plugin

An overview of the plugin api is described in [doc-plugin](./doc-plugin.md)

> The following example describes an implementation for the SelectionPlugin in Typescript. The goal is to make an editor selectable, so it is highlighted and exposes an _selection-hook_ for further consumption. You can refer to the full implementation in [SelectionPlugin](../src/plugin/selectionplugin/index.ts).

Using typescript, we start defining our plugin-options to expose our _selection-hooks_

```ts
type SelectionPluginOptions = {
  /* when an editor is selected, onSelect is called with the location pointer, editor instance and its options */
  onSelect({ pointer, editor, options }): void;
  /* called when an editor is deselected */
  onDeselect({ pointer, editor, options }): void;
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

With this, we can add the SelectionPlugin to editron, doing nothing yet:

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


## Tracking An Editor Instance

Now that we a basic Plugin, we can add our selection behaviour using the _editor-lifecycle_ hooks. 
In order to track editor instances that are registered to our _selection-plugin_, we extend the editors by adding a configuration field directly on the editor instance:

```ts
interface ModifiedEditor extends Editor {
    __selectionPlugin?: {
        select: (event: MouseEvent) => void;
        options: any;
    }
}
```

This gives us the ability (within typescript) to store properties onto an editor. Using the `onCreateEditor`-hook, we add our required tracking information:

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
    // tracking the options object and a reference to our event-callback
    editor.__selectionPlugin = {
      options, 
      select: event => console.log("do stuff")
    };
  }
}`
```

Being good citizens, we want to remove all custom data and listeners when an editor instance is removed. Therefore we watch `onDestroyEditor`-hook to cleanup

```ts
  onDestroyEditor(pointer, editor: ModifiedEditor, options?): void {
    // bail, if this is not a tracked editor instance
    if (editor.__selectionPlugin == null) {
      return;
    }
    // remove our custom properties
    editor.__selectionPlugin = undefined;
  }
```

**Note** In case we are relying on an editor's json-pointer, we should add a `onChangePointer`-hook, which is described in [doc-plugin](./doc-plugin#onchangepointer-hook). For an implementation example, refer to the [SortablePlugin](../src/plugin/sortableplugon/index.ts).



## Adding A Click-Event Handler

