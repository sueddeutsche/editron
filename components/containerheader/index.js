const m = require("mithril");
const getID = require("../../utils/getID");
const populated = require("../../utils/populated");


function getClass({ title, icon, hasAction, disabled }) {
    let classname = `${title ? "withTitle" : "noTitle"}`;
    classname += ` ${hasAction ? "withActions" : "noActions"}`;
    classname += ` ${icon ? "withIcon" : "noIcon"}`;
    classname += disabled ? " is-disabled" : "";
    return classname;
}


module.exports = {
    view(vnode) {
        const attrs = Object.assign({
            pointer: "",
            icon: "",
            title: "",
            disabled: false
            // onadd
            // ondelete
            // onmoveup
            // onmovedown
        }, vnode.attrs);

        attrs.hasAction = attrs.onadd || attrs.ondelete || attrs.onmoveup || attrs.onmovedown;

        return m(".editron-container__header",
            {
                "class": getClass(attrs),
                name: getID(attrs.pointer)
            },

            m(".editron-container__title",
                populated(vnode.attrs.icon, m("i.mmf-icon", attrs.icon)),
                (!attrs.hideTitle) && m("h2", attrs.title)
            ),

            m(".editron-container__actions",
                attrs.onmoveup ? m("i.mmf-icon.mmf-icon--add", {
                    onclick: attrs.onmoveup
                }, "arrow_upward") : "",

                attrs.onmovedown ? m("i.mmf-icon.mmf-icon--add", {
                    onclick: attrs.onmovedown
                }, "arrow_downward") : "",

                attrs.onadd ? m("i.mmf-icon.mmf-icon--add", {
                    onclick: () => attrs.onadd()
                }, "add") : "",

                attrs.ondelete ? m("i.mmf-icon.mmf-icon--delete", {
                    onclick: attrs.ondelete
                }, "delete") : ""
            )
        );
    }
};
