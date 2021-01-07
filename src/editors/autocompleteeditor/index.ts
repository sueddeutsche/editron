import AbstractValueEditor from "../AbstractValueEditor";
import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { QueryListForm } from "mithril-material-forms";
import m from "mithril";


export type SuggestionInput = {
    /** display name of value */
    name?: string;
    /** final exported value */
    value: string;
}

export type AutocompleteSchemaOptions = {
    autocomplete?: {
        suggestions?: Array<SuggestionInput> | { proxyMethod: string };
    }
}

interface GetSuggestions {
    (value: string): Promise<any>;
}


export default class AutocompleteEditor extends AbstractValueEditor {
    getSuggestions: Array<SuggestionInput> | GetSuggestions;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);

        return schema.type === "string" && schema.format === "autocomplete";
    }

    constructor(pointer: JSONPointer, controller: Controller, options) {
        super(pointer, controller, options);

        const { suggestions } = options.autocomplete;

        if (typeof suggestions?.proxyMethod === "string") {
            this.getSuggestions = (value: string) => controller.proxy()
                .get(suggestions.proxyMethod, { source: value })
                .catch(e => {
                    console.warn(`Failed retrieving suggestions for ${value}: ${e.message}`);
                    return [];
                });

        } else if (Array.isArray(suggestions)) {
            this.getSuggestions = suggestions;
        }

        this.render();
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
