import m from "mithril";
import populated from "../../utils/populated";
export default {
    view(vnode) {
        return populated(vnode.attrs.description, m(".ed-description.mmf-meta", m.trust(vnode.attrs.description)));
    }
};
