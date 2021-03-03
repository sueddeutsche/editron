# Editron Plugins

// TODO: add link to [How to write a Plugin](./howto-write-plugin.md) guide?

> Editron editors manage the visual portion of the data. It is the data they represent. Thus, within editron editors, you **only** manage visible data. Other functionality, like working on data (e.g. fetching remote data based on an id that is not yet displayed) or cross-cutting features like drag'n'drop between different editors, requires a different approach. For this, there is a plugin api, that has access to all editor lifecycle events, data-changes and error-updates. 

Using the plugin api, you can add features that work across editors, data based features and expose custom events. Plugins are added as options to the editron constructor:

```ts
import Editron, { Options, Plugin } from "editron";

class SelectionPlugin implements Plugin {
  id: "MyPlugin",
  initialize(controller: Editron) {}
}

const editron = new Editron(jsonSchema, jsonData, {
  plugins: [
    new MyPlugin({})
  ]
});
```

Besides a mandatory `initialize`-method and an unique id, there are several lifecycle-hooks that a plugin may define:

```ts
interface Plugin {
    id: string;
    initialize(controller: Editron) => void;
    onModifiedData?: (changes: Array<SimpleChange>) => void;
    onEditorOptions?: (pointer: JSONPointer, options: EditorOptions) => void;
    onCreateEditor?: (pointer: JSONPointer, editor: Editor, options: EditorOptions) => void;
    onChangePointer?: (oldPointer: JSONPointer, newPointer: JSONPointer, editor: Editor) => void;
    onDestroyEditor?: (pointer: JSONPointer, editor: Editor) => void;
    destroy?: () => void;
}
```


### _initialize_

The plugin's mandatory `initialize`-method is called when editron is created. It passes the editron instance to the plugin, which should store a reference for later access to editron-functions:

```ts
import Editron, { Options, Plugin } from "editron";
class SelectionPlugin implements Plugin {
  id: "MyPlugin",
  editron: Editron;
  initialize(editron: Editron) {
    // store for later use in lifecycle-hooks
    this.editron = editron;
  }
}
```


### _destroy_

When plugins are destroyed, this optional method should be used to remove any created data or event-listeners.

//TODO: missing example? 
```ts
class SelectionPlugin implements Plugin {
    // ...
    destroy() => {
        // TODO: e.g. remove event listener?
    }
}
```

### _onModifiedData_-hook

Each time data changes `onModifiedData` will be called on each plugin, that has the method defined. Those plugins receive a list of changes made to the data and a json-pointer to the changed data. This allows you to watch for any or specific changes and perform your custom actions:

```ts
class MyPlugin implements Plugin {
  // ...
  onModifiedData(changes: Array<SimpleChange>) {
    if (changes.find(change => change.type === "delete")) {
      // notify about data changes to a configured hook
      this.options.notify("onRemove", change);
    }
    if (changes.find(change => change.pointers.includes("imageId"))) {
      // perform some sort of data modification...
    }
  }
}
```

where a change is defined by

```ts
type SimpleChange = { type: "add"|"delete"|"update", pointer: JSONPointer, from?: JSONPointer, to?: JSONPointer };
```

For an implementation example, refer to the [RemoteDataPlugin](../src/plugin/remotedataplugin/index.ts)



### _onEditorOptions_-hook

Before any editor-instance is created, an _options-object_ is assembled and then passed to the editor's _contrucutor_ as options. Before an editor-instance receives the _options-object_, the `onEditorOptions` hook will receive the json-pointer and its _options_. This allows you to modify any values on this object, before the editor will receive them.

// TODO: Example when you would need that?


## Editor Lifecycle Events

Editor lifecycle-hooks are called for each editor-instance: when it is created, destroyed and for each location-change in data caused by array movement. This allows you to track an editors lifetime and e.g. hook into its HTML via `editor.getElement();`.

For a complete implementation example, refer to the [DelegationPlugin](../src/plugin/delegationplugin/index.ts)


### _onCreateEditor_-hook

Use the `onCreateEditor`-hook to add your custom plugin-feature(s) and start tracking this editor instance. To decide if your feature should be added, you usually check the json-schema for specific settings or options. The json-schema can be retrieved using the editron instance:

```ts
import Editron, { Plugin, EditorOptions, Editor, JSONPointer } from "editron";

class MyPlugin implements Plugin {
  id = "MyPlugin";
  editron: Editron;
  initialize(editron: Editron) {
    this.editron = editron;
  }
  onCreateEditor(pointer: JSONPointer, editor: Editor, options: EditorOptions) {
    const jsonSchema = this.editron.service("schema").get(pointer);
    // check for options or json-schema settings if your feature should be added
    // ...
  }
}
```

### _onChangePointer_-hook

Editors may change their location. When an item is moved within an array, its editor is usually reused and its pointer changes. Pointer changes are manage on a `pointer` property of each editor. In case you track editor instances on your own, you must watch to these changes and update your stored editors. // TODO: and the onChangePointer-hook gets triggered when the editron pointer changes? Small example would also be nice :) 


### _onDestroyEditor_-hook

When an editor instance is destroyed, the `onDestroyEditor`-hook in your plugin will be called, allowing you to cleanup any tracked editor-instances.