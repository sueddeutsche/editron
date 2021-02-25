import AbstractValueEditor, { ViewModel } from '../AbstractValueEditor';
import Editron from "../../Editron";
import m from "mithril";
import { JSONPointer } from "../../types";
import { Options as EditorOptions } from "../Editor";
import { QueryListForm, QueryListFormAttrs } from "mithril-material-forms";


export type SuggestionInput = {
    /** display name of value */
    name?: string;
    /** final exported value */
    value: string;
}


export type Options = EditorOptions & AutocompleteSchemaOptions;


type AutocompleteSchemaOptions = {
    placeholder?: string;
    autocomplete: {
        valueProp: string,
        suggestions: Array<SuggestionInput> | { proxyMethod: string };
        /** if true, will also add current value to list of suggestions. Defaults to false */
        showCurrentInput?: boolean;
        /** adds an additional description below the current input in suggestions */
        currentInputDescription?: string;
    }
}

interface GetSuggestions {
    (value: string): Promise<any>;
}


export default class AutocompleteEditor extends AbstractValueEditor {
    getSuggestions: Array<SuggestionInput> | GetSuggestions;
    viewModel: QueryListFormAttrs & ViewModel;

    static editorOf(pointer: JSONPointer, editron: Editron) {
        const schema = editron.service("schema").get(pointer);

        return schema.type === "string" && schema.format === "autocomplete";
    }

    constructor(pointer: JSONPointer, editron: Editron, options: Options) {
        super(pointer, editron, options);

        const { suggestions, showCurrentInput, currentInputDescription } = options.autocomplete;

        if (Array.isArray(suggestions)) {
            this.getSuggestions = suggestions;
        } else {
            this.getSuggestions = (value: string) => editron.proxy()
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

    render() {
        m.render(this.dom, m(QueryListForm, this.viewModel));
    }
}
