import m from "mithril";
import { ValidationError } from "../../types";


export type Attrs = {
    errors?: Array<ValidationError>;
}


export default {
    view(vnode) {
        if (Array.isArray(vnode.attrs.errors) === false || vnode.attrs.errors.length === 0) {
            return null;
        }

        return m("ul.editron-container__errors", vnode.attrs.errors.map(error =>
            m("li", { "class": `is-${error.severity || "error"}` }, error.message)
        ));
    }

} as m.Component<Attrs>;
