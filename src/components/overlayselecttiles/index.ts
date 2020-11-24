import m from "mithril";
import Tile from "./Tile";


const CLASSNAME = "ed-overlay-tiles";
const noop = (value: string) => {}; // eslint-disable-line


export type Attrs = {
    value?: number;
    onchange?: (value: string) => void;
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
        node.className.includes(CLASSNAME) === false
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
            onchange: noop,
            ...vnode.attrs
        };

        return m(`.${CLASSNAME}`,
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
