const m = require("mithril");


const ArrayItemView = {

    editorTarget: ".editron-item",

    view(vnode) {
        const canRemove = vnode.attrs.minItems < vnode.attrs.length;
        const canAdd = vnode.attrs.maxItems > vnode.attrs.length;
        const showIndex = vnode.attrs.showIndex === true;

        return [
            // CONTROLS
            m("ul.editron-container__controls.editron-container__controls--child",
                (vnode.attrs.move === false || vnode.attrs.index === 0) ? "" : m("li",
                    { onclick: () => vnode.attrs.onmove(vnode.attrs.index - 1) },
                    m("i.mmf-icon", "arrow_upward")
                ),
                (vnode.attrs.move === false || vnode.attrs.index === vnode.attrs.length - 1) ? "" : m("li",
                    { onclick: () => vnode.attrs.onmove(vnode.attrs.index + 1) },
                    m("i.mmf-icon", "arrow_downward")
                ),
                (vnode.attrs.remove && vnode.attrs.ondelete && canRemove) ? m("li",
                    { onclick: () => vnode.attrs.ondelete(vnode.attrs.index) },
                    m("i.mmf-icon", "delete")
                ) : "",
                (vnode.attrs.add && vnode.attrs.onadd && canAdd) ? m("li",
                    { onclick: () => vnode.attrs.onadd(vnode.attrs.index) },
                    m("i.mmf-icon", "add")
                ) : ""
            ),

            // TARGET CONTAINER FOR EDITOR
            m(this.editorTarget, {
                "data-index": `${vnode.attrs.index + 1} / ${vnode.attrs.length}`,
                "class": [
                    canRemove ? "has-remove-enabled" : "has-remove-disabled",
                    canAdd ? "has-add-enabled" : "has-add-disabled",
                    showIndex ? "with-index" : ""
                ].join(" ").trim()
            }),

            // ADD BUTTON
            (vnode.attrs.insert && canAdd) ? m(".editron-container__separator.mmf-row",
                m(".editron-container__button--add",
                    {
                        onclick: (e) => {
                            e.preventDefault();
                            vnode.attrs.onadd && vnode.attrs.onadd(vnode.attrs.index);
                        }
                    },
                    m("i.mmf-icon", "add_circle")
                )
            ) : ""
        ];
    }
};


module.exports = ArrayItemView;
