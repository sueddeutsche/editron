import m from "mithril";
import Tile, { Attrs as TileAttrs } from "./Tile";


export type Attrs = {
    value?: number;
    onchange?: Function;
    options?: Array<{
        value?: number;
        title?: string;
        icon?: string;
        description?: string;
    }>;
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
 * Overlay content to pick options. Displayed as tiles
 */
export default {
    view(vnode) {
        const attrs: Attrs = {
            value: 0,
            options: [{ title: "Keine Optionen angegeben", value: -1 }],
            onchange: Function.prototype,
            ...vnode.attrs
        };

        return m(".editron-form-tiles",
            {
                onclick: (e) => {
                    const value = getDataValue(e.target);
                    if (value != null) {
                        // @todo event-target being may be unexpected
                        attrs.onchange(value);
                    }
                }
            },
            attrs.options.map(tile =>
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

} as m.Component<Attrs>;
