const m = require("mithril");

const CheckboxForm = require("mithril-material-forms/components/checkboxForm");
const SelectForm = require("mithril-material-forms/components/selectForm");
const TextareaForm = require("mithril-material-forms/components/textareaForm");
const InputForm = require("mithril-material-forms/components/inputForm");
const UISchema = require("../../utils/UISchema");


function chooseInput(attrs) {
    const schema = attrs.schema;
    const config = Object.assign({
        type: schema.type,
        title: schema.title,
        description: schema.description,
        onblur: attrs.onblur || Function.prototype,
        onfocus: attrs.onfocus || Function.prototype,
        onchange: attrs.onchange || Function.prototype
    }, attrs);

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
    return m(InputForm, config);
}


module.exports = {
    view(vnode) {
        return chooseInput(vnode.attrs);
    }
};
