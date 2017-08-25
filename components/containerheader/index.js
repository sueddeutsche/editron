const m = require("mithril");
const getID = require("../../utils/getID");


function getClass({ title, icon, hasAction }) {
    let className = title ? "withTitle" : "noTitle";
    className += ` ${hasAction ? "withActions" : "noActions"}`;
    if (icon) {
        className += " withIcon";
    }
    return className;
}


module.exports = {
    view(vnode) {
        const attrs = Object.assign({
            pointer: "",
            icon: "",
            title: ""
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
                vnode.attrs.icon ? m("i.mmf-icon", attrs.icon) : null,
                (!attrs.hideTitle) && m("h2", attrs.title)
            ),

            m(".editron-container__actions",
                attrs.onmoveup ? m("i.mmf-icon.mmf-icon--add", {
                    onclick: attrs.onmoveup
                }, "arrow_upward") : null,

                attrs.onmovedown ? m("i.mmf-icon.mmf-icon--add", {
                    onclick: attrs.onmovedown
                }, "arrow_downward") : null,

                attrs.onadd ? m("i.mmf-icon.mmf-icon--add", {
                    onclick: () => attrs.onadd()
                }, "add") : null,

                attrs.ondelete ? m("i.mmf-icon.mmf-icon--delete", {
                    onclick: attrs.ondelete
                }, "delete") : null
            )
        );
    }
};
