const m = require("mithril");
const Button = require("mithril-material-forms").button;


module.exports = {

    /**
     * @View mithril
     * Content overlay
     *
     * @param  {VNode} vnode                        - mithril virtual node
     * @param  {VNode.attrs.container} container    - parent container
     * @return {Object} virtual node
     */
    view(vnode) {
        return m("section.ui-overlay__card",
            {
                "class": vnode.attrs.fullscreen ? "ui-overlay__card--fullscreen" : null
            },
            vnode.attrs.header ? m(".ui-card__header",
                m("h1", vnode.attrs.header)
            ) : "",
            m(".ui-card__content",
                {
                    oncreate: (contentNode) => contentNode.dom.appendChild(vnode.attrs.container)
                }
            ),
            m(".ui-card__footer",
                m(Button,
                    {
                        onClick: vnode.attrs.onAbort
                    },
                    vnode.attrs.titleAbort
                ),
                vnode.attrs.showSave ? m(Button,
                    {
                        onClick: vnode.attrs.onSave
                    },
                    "Speichern"
                ) : ""
            )
        );
    }
};
