import m from "mithril";
import populated from "../../utils/populated";


export type Attrs = {
    description?: string;
}


export default {
    view(vnode) {
        return populated(vnode.attrs.description,
            m(".ed-description.mmf-meta", m.trust(vnode.attrs.description))
        );
    }

} as m.Component<Attrs>;
