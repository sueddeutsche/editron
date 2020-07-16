/**
 * Opens an overlay with a DOM-Node as contents
 * @type {Object}
 */
declare const OverlayService: {
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
    open(container: any, options: any): void;
    close(): void;
    onChange(container: any, options: any): void;
    getElement(): any;
};
export default OverlayService;
