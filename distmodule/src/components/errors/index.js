import m from "mithril";
export default {
    view(vnode) {
        if (Array.isArray(vnode.attrs.errors) === false || vnode.attrs.errors.length === 0) {
            return null;
        }
        return m("ul.ed-errors", vnode.attrs.errors.map(error => m("li", { "class": `is-${error.severity || "error"}` }, error.message)));
    }
};
