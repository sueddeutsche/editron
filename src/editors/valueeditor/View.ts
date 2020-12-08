import m from "mithril";
import {
    CheckboxForm,
    CheckboxFormAttrs,
    InputForm,
    InputFormAttrs,
    InputType,
    RadioButtonsForm,
    RadioButtonsFormAttrs,
    SwitchForm,
    SwitchFormAttrs,
    SelectForm,
    SelectFormAttrs,
    TextareaForm,
    TextareaFormAttrs
} from "mithril-material-forms";
import UISchema from "../../utils/UISchema";
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
        const { schema, options = {}, onblur, onfocus, onchange, errors, value, pointer, theme } = vnode.attrs;

        if (schema.enum && schema.enum.length > 0 && schema.format === "radio") {

            const radioBtnsModel: RadioButtonsFormAttrs = {
                value,
                title: options.title,
                errors,
                description: options.description,
                disabled: options.disabled,
                theme: theme,
                options: UISchema.enumOptions(schema), 
                onchange
            };

            return m(RadioButtonsForm, radioBtnsModel);
        }

        if (schema.enum && schema.enum.length > 0) {

            const selectFormModel: SelectFormAttrs = {
                id: pointer,
                title: options.title,
                description: options.description,
                disabled: options.disabled,
                theme: options.theme,
                errors,
                invertOrder: options.invertOrder,

                value,
                options: UISchema.enumOptions(schema),
                onchange,
                onblur,
                onfocus
            };

            return m(SelectForm, selectFormModel, vnode.children);
        }

        if (schema.type === "boolean" && schema.format === "switch") {
            const switchModel: SwitchFormAttrs = {
                id: pointer,
                title: options.title,
                description: options.description,
                disabled: options.disabled,
                theme: options.theme,
                errors,

                value,
                onchange,
                onblur,
                onfocus
            };

            return m(SwitchForm, switchModel, vnode.children);
        }

        if (schema.type === "boolean") {
            const checkBoxModel: CheckboxFormAttrs = {
                id: pointer,
                title: options.title,
                description: options.description,
                disabled: options.disabled,
                theme: options.theme,
                errors,

                value,
                onchange,
                onblur,
                onfocus
            };

            return m(CheckboxForm, checkBoxModel, vnode.children);
        }

        if (schema.type === "string" && schema.format === "html") {
            const textareaModel: TextareaFormAttrs = {
                id: pointer,
                title: options.title,
                description: options.description,
                placeholder: options.placeholder,
                disabled: options.disabled,
                theme: options.theme,
                errors,

                value,
                onchange,
                onblur,
                onfocus
            };
            return m(TextareaForm, textareaModel, vnode.children);
        }

        if (schema.type === "string" && schema.format === "textarea") {
            const textareaModel: TextareaFormAttrs = {
                id: pointer,
                title: options.title,
                description: options.description,
                placeholder: options.placeholder,
                disabled: options.disabled,
                theme: options.theme,
                errors,

                rows: options["textarea:rows"] || 1,

                value,
                onchange,
                onblur,
                onfocus
            };
            return m(TextareaForm, textareaModel, vnode.children);
        }

        const inputModel: InputFormAttrs = {
            id: pointer,
            title: options.title,
            description: options.description,
            placeholder: options.placeholder,
            disabled: options.disabled,
            theme: options.theme,
            errors,

            instantUpdate: options.instantUpdate,

            type: getInputType(schema),
            value,
            onchange,
            onblur,
            onfocus
        };

        return m(InputForm, inputModel, vnode.children);
    }
};


export default Component;
