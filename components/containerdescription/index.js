const m = require("mithril");
const populated = require("../../utils/populated");


module.exports = {
    view(vnode) {
        return populated(vnode.attrs.description,
            m(".editron-container__description.mmf-meta", m.trust(vnode.attrs.description))
        );
    }
};
