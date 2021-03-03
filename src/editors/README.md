## recap custom editor


**getElement** 
An editor requires a method `getElement(): HTMLElement`, which must return its current _root dom element_
(given by AbstractEditor)


**getPointer** 
An editor requires a method `getPointer(): string`, which must return its current _json-pointer_
(given by AbstractEditor)


**destroy** 
An editor requires a method `destroy()`, which will be called by editron to remove the editor. Its called

- when data is removed or
- when editor is removed from view (change of entry pointer). 

In the last case, all child editors must be removed manually, because the editor does not know which child-instance to remove. Removing editors must be done through `editron.destroyEditor(editor)`

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


### Editor widget DOM convention

Each root-element of a widget must have a property `data-point`. This is assigned by the editron, but be sure not to 
remove this attribute. e.g.

```html
<div class="editron-widget" data-point="#/document/title">
    <!-- header, description, input-form, ... -->
</div>
```


### Input-form DOM convention

For a complete interaction of editron-features, an input-element like _input_, _textarea_, _select_ etc must have a
property `data-id` with its json-pointer as value. e.g.

```html
<input type="text" data-id="#/document/title" />
```

Above all, this ensures that cursor navigation through input fields can be supported


