const m = require("mithril");

const CheckboxForm = require("mithril-material-forms/components/checkboxform");
const SelectForm = require("mithril-material-forms/components/selectform");
const TextareaForm = require("mithril-material-forms/components/textareaform");
const InputForm = require("mithril-material-forms/components/inputform");
const UISchema = require("../../utils/UISchema");


function chooseInput(attrs, options = {}) {
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
    if (schema.type === "string" && schema.format === "textarea") {
        config.rows = options["textarea:rows"] || 1;
        return m(TextareaForm, config);
    }
    return m(InputForm, config);
}


module.exports = {
    view(vnode) {
        return chooseInput(vnode.attrs, vnode.attrs.options);
    }
};
