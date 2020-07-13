import m from "mithril";

import CheckboxForm from "mithril-material-forms/components/checkboxform";
import SelectForm from "mithril-material-forms/components/selectform";
import TextareaForm from "mithril-material-forms/components/textareaform";
import InputForm from "mithril-material-forms/components/inputform";
import UISchema from "../../utils/UISchema";
import { JSONSchema } from "../../src/types";


export type Attrs = {
    schema: JSONSchema;
    options?: any;
    onblur?: Function;
    onfocus?: Function;
    onchange?: Function;
}


const Component: m.Component<Attrs> = {

    view({ attrs }) {
        const { schema } = attrs;
        const { options = {} } = attrs.options;
        const config: any = {
            type: schema.type,
            title: schema.title,
            description: schema.description,
            onblur: attrs.onblur || Function.prototype,
            onfocus: attrs.onfocus || Function.prototype,
            onchange: attrs.onchange || Function.prototype,
            ...attrs,
            ...options
        };

        if (schema.enum && schema.enum.length > 0) {
            config.options = UISchema.enumOptions(schema);
            return m(SelectForm, config);
        }

        if (schema.type === "boolean") {
            return m(CheckboxForm, config);
        }

        if (schema.type === "string" && schema.format === "html") {
            return m(TextareaForm, config);
        }

        if (schema.type === "string" && schema.format === "textarea") {
            config.rows = options["textarea:rows"] || 1;
            return m(TextareaForm, config);
        }

        return m(InputForm, config);
    }
};


export default Component;
