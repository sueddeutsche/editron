import m from "mithril";
export declare type Attrs = {
    description?: string;
};
declare const _default: m.Component<Attrs, {}>;
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
export default _default;
