import AbstractValueEditor from "../AbstractValueEditor";
import { QueryListForm } from "mithril-material-forms";
import m from "mithril";
export default class AutocompleteEditor extends AbstractValueEditor {
    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        const { suggestions } = options.autocomplete;
        if (typeof (suggestions === null || suggestions === void 0 ? void 0 : suggestions.proxyMethod) === "string") {
            this.getSuggestions = (value) => controller.proxy()
                .get(suggestions.proxyMethod, { source: value })
                .catch(e => {
                console.warn(`Failed retrieving suggestions for ${value}: ${e.message}`);
                return [];
            });
        }
        else if (Array.isArray(suggestions)) {
            this.getSuggestions = suggestions;
        }
        this.render();
    }
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "string" && schema.format === "autocomplete";
    }
    render() {
        console.log("this.options.valueProp", this.options, this.viewModel);
        m.render(this.dom, m(QueryListForm, {
            id: this.pointer,
            title: this.options.title,
            description: this.options.description,
            placeholder: this.options.placeholder,
            disabled: this.options.disabled,
            theme: this.options.theme,
            errors: this.viewModel.errors,
            value: this.viewModel.value,
            valueProp: this.options.autocomplete.valueProp,
            onchange: this.viewModel.onchange,
            onblur: this.viewModel.onblur,
            onfocus: this.viewModel.onfocus,
            suggestions: this.getSuggestions
        }));
    }
}
