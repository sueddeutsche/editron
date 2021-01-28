

**destroy editor**

To destroy an editor, you have to use the editron-method `editron.destroyEditor(myEditor)`. This will ensure all editor bootstrapping is removed from the editor. e.g. the `update`-method is automatically registered and will continue to be called. So, *do not use editor.destroy()* directly or ensure `controller.destroyEditor(this)` is called on the editors `destroy`-method.
