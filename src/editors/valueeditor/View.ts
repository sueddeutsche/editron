import m from "mithril";
import CheckboxForm, { Attrs as CheckboxAttrs } from "mithril-material-forms/components/checkboxform";
import SelectForm, { Attrs as SelectAttrs } from "mithril-material-forms/components/selectform";
import TextareaForm, { Attrs as TextareaAttrs } from "mithril-material-forms/components/textareaform";
import InputForm, { Attrs as InputAttrs, InputType } from "mithril-material-forms/components/inputform";
import UISchema from "../../utils/UISchema";
import { JSONSchema } from "../../types";
import { ViewModel } from "../AbstractValueEditor";


export type Attrs = ViewModel;


const TYPES = {
    string: "text",
    integer: "number",
    number: "number"
};

function getInputType(schema): InputType {
    return TYPES[schema.type] || "text";
}


const Component: m.Component<Attrs> = {

    view({ attrs }) {
        const { schema, options = {}, onblur, onfocus, onchange, errors, value, id, pointer } = attrs;

        if (schema.enum && schema.enum.length > 0) {
            const selectFormModel: SelectAttrs = {
                id,
                title: options.title,
                description: options.description,
                errors,

                options: UISchema.enumOptions(schema),
                value,
                onchange,
                onblur,
                onfocus
            };
            return m(SelectForm, selectFormModel);
        }

        if (schema.type === "boolean") {
            const checkBoxModel: CheckboxAttrs = {
                id,
                title: options.title,
                description: options.description,
                errors,

                value,
                onchange,
                onblur,
                onfocus
            }

            return m(CheckboxForm, checkBoxModel);
        }

        if (schema.type === "string" && schema.format === "html") {
            const textareaModel: TextareaAttrs = {
                id,
                title: options.title,
                description: options.description,
                placeholder: options.placeholder,
                errors,

                value,
                onchange,
                onblur,
                onfocus
            }
            return m(TextareaForm, textareaModel);
        }

        if (schema.type === "string" && schema.format === "textarea") {
            const textareaModel: TextareaAttrs = {
                id,
                title: options.title,
                description: options.description,
                placeholder: options.placeholder,
                errors,
                rows: options["textarea:rows"] || 1,

                value,
                onchange,
                onblur,
                onfocus
            }
            return m(TextareaForm, textareaModel);
        }

        const inputModel: InputAttrs = {
            id,
            title: options.title,
            description: options.description,
            placeholder: options.placeholder,
            errors,
            type: getInputType(schema),

            value,
            onchange,
            onblur,
            onfocus
        }

        return m(InputForm, inputModel);
    }
};


export default Component;
