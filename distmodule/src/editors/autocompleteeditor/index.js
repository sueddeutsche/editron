import { QueryListForm } from 'mithril-material-forms';
import m from "mithril";
import AbstractValueEditor from '../AbstractValueEditor';
export default class AutocompleteEditor extends AbstractValueEditor {
    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        const { suggestions, showCurrentInput, currentInputDescription } = options.autocomplete;
        if (Array.isArray(suggestions)) {
            this.getSuggestions = suggestions;
        }
        else {
            this.getSuggestions = (value) => controller.proxy()
                .get(suggestions.proxyMethod, { source: value })
                .catch(e => {
                console.warn(`Failed retrieving suggestions for ${value}: ${e.message}`);
                return [];
            });
        }
        this.autoCompleteViewModel = {
            placeholder: options.placeholder,
            disabled: options.disabled,
            showCurrentInput,
            currentInputDescription,
            valueProp: options.autocomplete.valueProp,
            suggestions: this.getSuggestions,
            ...this.viewModel
        };
        this.render();
    }
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "string" && schema.format === "autocomplete";
    }
    render() {
        m.render(this.dom, m(QueryListForm, this.autoCompleteViewModel));
    }
    update(event) {
        switch (event.type) {
            case "data:update":
                this.autoCompleteViewModel.value = this.controller.service("data").get(this.getPointer());
                this.render();
                break;
        }
    }
    destroy() {
        if (this.autoCompleteViewModel) {
            m.render(this.dom, m.trust(""));
            this.autoCompleteViewModel = null;
        }
    }
}
