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

    view(vnode) {
        const { schema, options = {}, onblur, onfocus, onchange, errors, value, pointer } = vnode.attrs;

        if (schema.enum && schema.enum.length > 0) {
            const selectFormModel: SelectAttrs = {
                title: options.title,
                description: options.description,
                disabled: options.disabled,
                errors,

                options: UISchema.enumOptions(schema),
                value,
                onchange,
                onblur,
                onfocus
            };
            return m(SelectForm, selectFormModel, vnode.children);
        }

        if (schema.type === "boolean") {
            const checkBoxModel: CheckboxAttrs = {
                title: options.title,
                description: options.description,
                disabled: options.disabled,
                errors,

                value,
                onchange,
                onblur,
                onfocus
            }

            return m(CheckboxForm, checkBoxModel, vnode.children);
        }

        if (schema.type === "string" && schema.format === "html") {
            const textareaModel: TextareaAttrs = {
                title: options.title,
                description: options.description,
                placeholder: options.placeholder,
                disabled: options.disabled,
                errors,

                value,
                onchange,
                onblur,
                onfocus
            }
            return m(TextareaForm, textareaModel, vnode.children);
        }

        if (schema.type === "string" && schema.format === "textarea") {
            const textareaModel: TextareaAttrs = {
                title: options.title,
                description: options.description,
                placeholder: options.placeholder,
                disabled: options.disabled,
                errors,
                rows: options["textarea:rows"] || 1,

                value,
                onchange,
                onblur,
                onfocus
            }
            return m(TextareaForm, textareaModel, vnode.children);
        }

        const inputModel: InputAttrs = {
            title: options.title,
            description: options.description,
            placeholder: options.placeholder,
            disabled: options.disabled,
            errors,
            type: getInputType(schema),
            instantUpdate: options.instantUpdate,

            value,
            onchange,
            onblur,
            onfocus
        }

        return m(InputForm, inputModel, vnode.children);
    }
};


export default Component;
