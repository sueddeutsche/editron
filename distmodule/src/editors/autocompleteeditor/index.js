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
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "string" && schema.format === "autocomplete";
    }
    render() {
        m.render(this.dom, m(QueryListForm, this.viewModel));
    }
}
