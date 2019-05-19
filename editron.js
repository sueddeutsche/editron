/**
 * Editron-Core. Depending on your build setup, use
 *
 * ```js
 * import { Controller } from "editron";
 * // or
 * const { Controller } = require("editron");
 * ```
 * to get the editron core entry point for a enjoyable formular world
 *
 *
 * @type {Package} exported methods and utilities
 * @property {Controller} Controller    - the main Editron-Class you want to start all form applications
 * @property {Object} components        - mithril components, for default html-generation of headers and containers
 * @property {Object} editors           - basic editron editors for object, array and simple value reprensentation
 * @property {Object} services          - services to work on data, json-schema, validation and more
 * @property {Object} utils             - utility functions, to generate ids, translate strings and resolve editors
 * @property {Object} plugin            - basic plugin implementation for editor registration
 */
module.exports = {
    Controller: require("./Controller"),
    components: require("./components"),
    editors: require("./editors"),
    services: require("./services"),
    utils: require("./utils"),
    plugin: require("./plugin")
};
