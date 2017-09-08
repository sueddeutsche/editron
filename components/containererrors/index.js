const m = require("mithril");


module.exports = {
    view(vnode) {
        if (Array.isArray(vnode.attrs.errors) === false || vnode.attrs.errors.length === 0) {
            return null;
        }

        return m("ul.editron-container__errors", vnode.attrs.errors.map((error) =>
            m("li", { "class": `is-${error.severity || "error"}` }, error.message)
        ));
    }
};
