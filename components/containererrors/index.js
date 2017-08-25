const m = require("mithril");


module.exports = {
    view(vnode) {
        return vnode.attrs.errors.length > 0 ?
            m("ul.editron-container__errors", vnode.attrs.errors.map((error) =>
                m("li", { "class": `is-${error.severity || "error"}` }, error.message)
            )) :
            null;
    }
};
