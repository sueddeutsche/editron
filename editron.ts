import Controller from "./src/Controller";
import components from "./components";
import editors from "./editors";
import services from "./services";
import utils from "./utils";
import plugin from "./src/plugin";


/**
 * Editron-Core. Depending on your build setup, use
 *
 * ```js
 * import { Controller } from "editron";
 * // or
 * const Controller = require("editron").Controller;
 * ```
 *
 * to get the editron core entry point for a enjoyable formular world
 *
 * @type exported methods and utilities
 * @property Controller    - the main Editron-Class you want to start all form applications
 * @property components        - mithril components, for default html-generation of headers and containers
 * @property editors           - basic editron editors for object, array and simple value reprensentation
 * @property services          - services to work on data, json-schema, validation and more
 * @property utils             - utility functions, to generate ids, translate strings and resolve editors
 * @property plugin            - basic plugin implementation for editor registration
 */
export default {
    Controller,
    components,
    editors,
    services,
    utils,
    plugin
};
