/* eslint no-use-before-define: 0 */
const m = require("mithril");
const Overlay = require("../components/overlay");
const createElement = require("../utils/createElement");
const UIState = require("./uistate");


UIState.on(UIState.EVENTS.OVERLAY_EVENT, (value = {}) => OverlayService.onChange(value.element, value.options));


/**
 * Opens an overlay with a DOM-Node as contents
 * @type {Object}
 */
const OverlayService = {

    /**
     * Opens the overlay, showing the given `container` as conten
     *
     * Options
     *  {Boolean} ok            - display `ok`, instead of `abort`
     *  {Boolean} fullscreen    - fullscreen size of overlay, regardless of content
     *  {Function} onAbort      - called when Overlay is closed via ok/abort
     *  {Function} onSave       - called when Overlay is closed via save
     *
     * @param  {HTMLElement} container
     * @param  {Obejct} options
     */
    open(container, options) {
        UIState.setOverlay({
            element: container,
            options: Object.assign({
                ok: false,
                save: true,
                fullscreen: false,
                onAbort: Function.prototype,
                onSave: Function.prototype
            }, options)
        });
    },

    close() {
        UIState.setOverlay();
        // must destroy component for reuse
        m.render(this.getElement(), m("i"));
    },

    onChange(container, options) {
        if (container == null) {
            const $el = this.getElement();
            $el.parentNode && $el.parentNode.removeChild($el);
            return;
        }

        const $el = this.getElement();
        container.classList.add("overlay__item");
        m.render($el,
            m(Overlay, {
                container,
                fullscreen: options.fullscreen,
                showSave: options.save,
                titleAbort: options.ok ? "OK" : "Abbrechen",
                onSave: () => {
                    options.onSave();
                    this.close();
                },
                onAbort: () => this.close(), // calls onremove -> onAbort
                onremove: () => options.onAbort()
            })
        );

        document.body.appendChild($el);
    },

    getElement() {
        if (this.$element == null) {
            this.$element = createElement(".ui-overlay");
            this.$element.addEventListener("click", (e) => {
                // close popup if clicked on "background"
                if (e.target === this.$element) {
                    this.close();
                }
            });
        }
        return this.$element;
    }
};


module.exports = OverlayService;
