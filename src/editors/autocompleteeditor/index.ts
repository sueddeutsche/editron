import Controller from "../../Controller";
import { JSONPointer } from "../../types";
import { QueryListForm, QueryListFormAttrs } from 'mithril-material-forms';
import m from "mithril";
import { EditorUpdateEvent, Options as EditorOptions } from "../Editor";
import AbstractValueEditor from '../AbstractValueEditor';


export type SuggestionInput = {
    /** display name of value */
    name?: string;
    /** final exported value */
    value: string;
}
export type Options = EditorOptions & AutocompleteSchemaOptions;

type AutocompleteSchemaOptions = {
    placeholder: string,
    autocomplete: {
        valueProp: string,
        suggestions: Array<SuggestionInput> | { proxyMethod: string };
    }
}

interface GetSuggestions {
    (value: string): Promise<any>;
}


export default class AutocompleteEditor extends AbstractValueEditor {
    getSuggestions: Array<SuggestionInput> | GetSuggestions;
    autoCompleteViewModel: QueryListFormAttrs;

    static editorOf(pointer: JSONPointer, controller: Controller) {
        const schema = controller.service("schema").get(pointer);

        return schema.type === "string" && schema.format === "autocomplete";
    }

    constructor(pointer: JSONPointer, controller: Controller, options: Options) {
        super(pointer, controller, options);

        const { suggestions } = options.autocomplete;

        if (Array.isArray(suggestions)) {
            this.getSuggestions = suggestions;
        } else {
            this.getSuggestions = (value: string) => controller.proxy()
                .get(suggestions.proxyMethod, { source: value })
                .catch(e => {
                    console.warn(`Failed retrieving suggestions for ${value}: ${e.message}`);
                    return [];
                });
        }

        this.autoCompleteViewModel = {
            placeholder: options.placeholder,
            disabled: options.disabled,
            valueProp: options.autocomplete.valueProp,
            suggestions: this.getSuggestions,
            ...this.viewModel
        };

        this.render();
    }

    render() {
        m.render(this.dom, m(QueryListForm, this.autoCompleteViewModel));
    }


    update(event: EditorUpdateEvent) {
        switch (event.type) {
            case "data:update":
                this.viewModel.value = this.controller.service("data").get(this.getPointer());
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
