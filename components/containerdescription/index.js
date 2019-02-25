const m = require("mithril");
const populated = require("../../utils/populated");


/**
 * @name   ContainerDescription
 * @description
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
 *
 * @type {Object} m.render(ContainerDescription)
 * @param {String|Object} description  - html string or mithril-vnode of a description
 */
module.exports = {
    view(vnode) {
        return populated(vnode.attrs.description,
            m(".editron-container__description.mmf-meta", m.trust(vnode.attrs.description))
        );
    }
};
