## recap custom editor


**getElement** 
An editor requires a method `getElement(): HTMLElement`, which must return its current _root dom element_
(given by AbstractEditor)


**getPointer** 
An editor requires a method `getPointer(): string`, which must return its current _json-pointer_
(given by AbstractEditor)


**destroy** 
An editor requires a method `destroy()`, which will be called by controller to remove the editor. Its called

- when data is removed or
- when editor is removed from view (change of entry pointer). 

In the last case, all child editors must be removed manually, because the editor does not know which child-instance to remove. Removing editors must be done through `controller.destroyEditor(editor)`

> Note: a created editor would be more simply destroyed directly:

```js
const page = editron.createEditor("#/page", dom);
// ...
page.destroy();
```

Currently the following method is required

```js
const page = editron.createEditor("#/page", dom);
// ...
editron.destroyEditor(page);
```


## talk about

- `data-point` and `data-id`
