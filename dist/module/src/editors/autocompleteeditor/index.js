import AbstractValueEditor from '../AbstractValueEditor';
import m from "mithril";
import { QueryListForm } from "mithril-material-forms";
export default class AutocompleteEditor extends AbstractValueEditor {
    constructor(pointer, editron, options) {
        super(pointer, editron, options);
        const { suggestions, showCurrentInput, currentInputDescription } = options.autocomplete;
        if (Array.isArray(suggestions)) {
            this.getSuggestions = suggestions;
        }
        else {
            this.getSuggestions = (value) => editron.proxy()
                .get(suggestions.proxyMethod, { source: value })
                .catch(e => {
                console.warn(`Failed retrieving suggestions for ${value}: ${e.message}`);
                return [];
            });
        }
        this.viewModel = {
            ...this.viewModel,
            placeholder: options.placeholder,
            disabled: options.disabled,
            showCurrentInput,
            currentInputDescription,
            suggestions: this.getSuggestions,
            valueProp: options.autocomplete.valueProp
        };
        this.render();
    }
    static editorOf(pointer, editron) {
        const schema = editron.service("schema").get(pointer);
        return schema.type === "string" && schema.format === "autocomplete";
    }
    render() {
        m.render(this.dom, m(QueryListForm, this.viewModel));
    }
}
