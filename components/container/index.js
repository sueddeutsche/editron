const m = require("mithril");
const ContainerHeader = require("../containerheader");
const ContainerErrors = require("../containererrors");
const ContainerDescription = require("../containerdescription");


/**
 * @view
 * A Container Component is used for any non-value like object or arrays. They hold other values. This group may expose
 * a group-title and errors. Any childnodes must go to the container '.jed-container__children'.
 * @type {Object}
 */
module.exports = {

    childContainerSelector: ".editron-container__children",

    view(vnode) {
        return [
            vnode.attrs.hideTitle === true ? null : m(ContainerHeader, vnode.attrs),
            m(ContainerDescription, vnode.attrs),
            vnode.children,
            m(ContainerErrors, vnode.attrs),
            m(this.childContainerSelector)
        ];
    }
};
