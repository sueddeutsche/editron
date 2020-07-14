import m from "mithril";
import populated from "../../utils/populated";


export type Attrs = {
    description?: string;
}


/**
 * Mithril Component to render a description
 *
 * # Usage
 *
 * render by
 *
 * ```js
 *  m(ContainerDescription, { description: "description" }
 * ```
 *
 * which will result in a html-node like
 *
 * ```html
 *  <div class="editron-container__description mmf-meta">"description"</div>
 * ```
 */
export default {
    view(vnode) {
        return populated(vnode.attrs.description,
            m(".editron-container__description.mmf-meta", m.trust(vnode.attrs.description))
        );
    }

} as m.Component<Attrs>;
