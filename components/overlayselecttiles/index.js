const m = require("mithril");


const Tile = {
    view(vnode) {
        return m(".editron-form-box",
            {
                "data-value": vnode.attrs.value,
                "data-type": vnode.attrs.title.toLowerCase() // @uitest
            },
            m(".editron-form-box__content",
                m(".editron-form-box__title",
                    [
                        vnode.attrs.icon ? m(".mmf-icon", vnode.attrs.icon) : "",
                        vnode.attrs.title
                    ]
                ),
                m(".editron-form-box__description", vnode.attrs.description)
            )
        );
    }
};


function getDataValue(node) {
    while (
        node.parentNode &&
        node.getAttribute("data-value") == null &&
        node.className.includes("editron-form-tiles") === false
    ) {
        node = node.parentNode;
    }
    return node.getAttribute("data-value");
}

/**
 * @View mithril
 * Overlay content to pick options. Displayed as tiles
 * @type {Object}
 */
module.exports = {
    view(vnode) {
        const attrs = Object.assign({
            value: 0,
            options: [{ title: "Keine Optionen angegeben", value: false }],
            onchange: Function.prototype
        }, vnode.attrs);

        return m(".editron-form-tiles",
            {
                onclick: (e) => {
                    const value = getDataValue(e.target);
                    attrs.onchange(value);
                }
            },
            attrs.options.map((tile) =>
                m(Tile, {
                    active: attrs.value === tile.value,
                    title: tile.title,
                    icon: tile.icon,
                    description: m.trust(tile.description), // allow html
                    value: tile.value
                })
            )
        );
    }
};
