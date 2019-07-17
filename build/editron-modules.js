var editronModules =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Controller.js":
/*!***********************!*\
  !*** ./Controller.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var Core = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js").cores.JsonEditor;
var addValidator = __webpack_require__(/*! json-schema-library/lib/addValidator */ "./node_modules/json-schema-library/lib/addValidator.js");
var DataService = __webpack_require__(/*! ./services/DataService */ "./services/DataService.js");
var SchemaService = __webpack_require__(/*! ./services/SchemaService */ "./services/SchemaService.js");
var ValidationService = __webpack_require__(/*! ./services/ValidationService */ "./services/ValidationService.js");
var LocationService = __webpack_require__(/*! ./services/LocationService */ "./services/LocationService.js");
var State = __webpack_require__(/*! ./services/State */ "./services/State.js");
var selectEditor = __webpack_require__(/*! ./utils/selectEditor */ "./utils/selectEditor.js");
var _createElement = __webpack_require__(/*! ./utils/createElement */ "./utils/createElement.js");
var addItem = __webpack_require__(/*! ./utils/addItem */ "./utils/addItem.js");
var UISchema = __webpack_require__(/*! ./utils/UISchema */ "./utils/UISchema.js");
var getID = __webpack_require__(/*! ./utils/getID */ "./utils/getID.js");
var plugin = __webpack_require__(/*! ./plugin */ "./plugin/index.js");
var i18n = __webpack_require__(/*! ./utils/i18n */ "./utils/i18n.js");

function isValidPointer(pointer) {
    return pointer[0] === "#";
}

function assertValidPointer(pointer) {
    if (isValidPointer(pointer) === false) {
        throw new Error("Invalid json(schema)-pointer: " + pointer);
    }
}

// removes the editor from the instances-inventory of active editors
function removeEditorFrom(instances, editor) {
    var pointer = editor.getPointer();
    if (instances[pointer]) {
        instances[pointer] = instances[pointer].filter(function (instance) {
            return editor !== instance;
        });
        if (instances[pointer].length === 0) {
            delete instances[pointer];
        }
    }
}

/**
 * Main component to build editors. Each editor should receive the controller, which carries all required services
 * for editor initialization
 *
 * ### Usage
 *
 * Instantiate the controller
 *
 * ```js
 * import { Controller } from "editron";
 * // jsonSchema = { type: "object", required: ["title"], properties: { title: { type: "string" } } }
 * const editron = new Controller(jsonSchema);
 * ```
 *
 * or, using all parameters
 *
 * ```js
 *  import { Controller } from "editron";
 *  // jsonSchema = { type: "object", required: ["title"], properties: { title: { type: "string" } } }
 *  // data = { title: "Hello" } - or simply use {}
 *  // options = { editors: [ complete list of custom editors ] }
 *  const editron = new Controller(jsonSchema, data, options);
 * ```
 *
 * and start rendering editors
 *
 * ```js
 *  const editor = editron.createEditor("#", document.querySelector("#editor"));
 *  // render from title only: editron.createEditor("#/title", document.querySelector("#title"));
 * ```
 *
 * to fetch the generated data use
 *
 * ```js
 *  const data = editron.getData();
 * ```
 *
 * @param  {Object} schema          - json schema describing required data/form template
 * @param  {Any} data               - initial data for given json-schema
 * @param  {Object} [options]       - configuration options
 * @param  {Array} options.editors  - list of editron-editors/widgets to use. Order defines editor to use
 *      (based on editorOf-method)
 */

var Controller = function () {
    function Controller() {
        var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this = this;

        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Controller);

        schema = UISchema.extendSchema(schema);

        this.options = _extends({
            editors: [__webpack_require__(/*! ./editors/oneofeditor */ "./editors/oneofeditor/index.js")].concat(_toConsumableArray(plugin.getEditors()), [__webpack_require__(/*! ./editors/arrayeditor */ "./editors/arrayeditor/index.js"), __webpack_require__(/*! ./editors/objecteditor */ "./editors/objecteditor/index.js"), __webpack_require__(/*! ./editors/valueeditor */ "./editors/valueeditor/index.js")])
        }, options);

        this.editors = this.options.editors;
        this.state = new State();
        this.instances = {};
        this.core = new Core();

        plugin.getValidators().forEach(function (_ref) {
            var _ref2 = _toArray(_ref),
                validationType = _ref2[0],
                validator = _ref2.slice(1);

            try {
                if (validationType === "format") {
                    return _this.addFormatValidator.apply(_this, _toConsumableArray(validator));
                } else if (validationType === "keyword") {
                    return _this.addKeywordValidator.apply(_this, _toConsumableArray(validator));
                }
                throw new Error("Unknown validation type '" + validationType + "'");
            } catch (e) {
                console.log("Error:", e.message);
            }
        });

        this.schemaService = new SchemaService(schema, data, this.core);
        this.validationService = new ValidationService(this.state, schema, this.core);
        // enable i18n error-translations
        this.validationService.setErrorHandler(function (error) {
            return i18n.translateError(_this, error);
        });
        // merge given data with template data
        data = this.schemaService.addDefaultData(data, schema);
        this.dataService = new DataService(this.state, data);
        // start validation after data has been updated
        this.onAfterDataUpdate = this.dataService.on(DataService.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate.bind(this));
        // run initial validation
        this.validateAll();
    }

    _createClass(Controller, [{
        key: "resetUndoRedo",
        value: function resetUndoRedo() {
            this.dataService.resetUndoRedo();
        }

        /**
         * Helper to create dom elements via mithril syntax
         *
         * @param  {String} selector    - a css selector describing the desired element
         * @param  {Object} attributes  - a map of dom attribute:value of the element (reminder className = class)
         * @return {HTMLDomElement} the resulting DOMHtml element (not attached)
         */

    }, {
        key: "createElement",
        value: function createElement(selector, attributes) {
            // eslint-disable-line class-methods-use-this
            return _createElement(selector, attributes);
        }

        /**
         * The only entry point to create editors.
         * Use in application and from editors to create (delegate) child editors
         *
         * @param  {String} pointer         - data pointer to editor in current state
         * @param  {HTMLElement} element    - parent element of create editor. Will be appended automatically
         * @param  {Object} [options]       - individual editor options
         * @return {Object|undefined} created editor-instance or undefined;
         */

    }, {
        key: "createEditor",
        value: function createEditor(pointer, element, options) {
            if (pointer == null || element == null) {
                throw new Error("Missing " + (pointer == null ? "pointer" : "element") + " in createEditor");
            }

            assertValidPointer(pointer);

            // merge schema["editron:ui"] object with options. options precede
            var instanceOptions = _extends({ id: getID(pointer), pointer: pointer }, UISchema.copyOptions(pointer, this), options);

            // find a matching editor
            var Editor = selectEditor(this.getEditors(), pointer, this, instanceOptions);
            if (Editor === false) {
                return undefined;
            }

            if (Editor === undefined) {
                console.warn("Could not resolve an editor for " + pointer, this.schema().get(pointer));
                return undefined;
            }

            // iniitialize editor and save editor in list
            // @TODO loose reference to destroyed editors
            var editor = new Editor(pointer, this, instanceOptions);
            element.appendChild(editor.toElement());
            this.addInstance(pointer, editor);

            return editor;
        }

        /**
         * Call this method, when your editor is destroyed, deregistering its instance on editron
         * @param  {Instance} editor    - editor instance to remove
         */

    }, {
        key: "removeInstance",
        value: function removeInstance(editor) {
            // controller inserted child and removes it here again
            var $element = editor.toElement();
            if ($element.parentNode) {
                $element.parentNode.removeChild($element);
            }

            removeEditorFrom(this.instances, editor);
        }
    }, {
        key: "addInstance",
        value: function addInstance(pointer, editor) {
            this.instances[pointer] = this.instances[pointer] || [];
            this.instances[pointer].push(editor);
        }

        /**
         * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
         * dialogue is opened to let the user select the appropriate type of child (oneof).
         * @param {String} pointer  - to array on which to insert the child
         * @param {Number} index    - index within array, where the child should be inserted (does not replace). Default: 0
         */

    }, {
        key: "addItemTo",
        value: function addItemTo(pointer) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            addItem(this.data(), this.schema(), pointer, index);
            LocationService.goto(gp.join(pointer, index, true));
        }

        /**
         * Get or update data from a pointer
         * @return {DataService} DataService instance
         */

    }, {
        key: "data",
        value: function data() {
            return this.dataService;
        }

        /**
         * Get the json schema from a pointer or replace the schema
         * @return {SchemaService} SchemaService instance
         */

    }, {
        key: "schema",
        value: function schema() {
            return this.schemaService;
        }

        /**
         * Validate data based on a json-schema and register to generated error events
         *
         * - start validation
         * - get your current errors at _pointer_
         * - hook into validation to receive your errors at _pointer_
         *
         * @return {ValidationService} ValidationService instance
         */

    }, {
        key: "validator",
        value: function validator() {
            return this.validationService;
        }

        /**
         * ## Usage
         *  goto(pointer) - Jump to given json pointer. This might also load another page if the root property changes.
         *  setCurrent(pointer) - Update current pointer, but do not jump to target
         *
         * @return {Object} LocationService-Singleton
         */

    }, {
        key: "location",
        value: function location() {
            return LocationService;
        }

        /**
         * Set the application data
         * @param {Any} data    - json data matching registered json-schema
         */

    }, {
        key: "setData",
        value: function setData(data) {
            data = this.schemaService.addDefaultData(data);
            this.data().set("#", data);
        }

        /**
         * @param {JsonPointer} [pointer="#"] - location of data to fetch. Defaults to root (all) data
         * @return {Any} data at the given location
         */

    }, {
        key: "getData",
        value: function getData() {
            var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#";

            return this.data().get(pointer);
        }

        /**
         * @return {Array} registered editor-widgets used to edit the json-data
         */

    }, {
        key: "getEditors",
        value: function getEditors() {
            return this.editors;
        }

        /**
         * @return {Object} currently active editor/widget instances
         */

    }, {
        key: "getInstances",
        value: function getInstances() {
            return this.instances;
        }

        /**
         * @param {String} format       - value of _format_
         * @param {Function} validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
         *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
         *      als return a promise
         */

    }, {
        key: "addFormatValidator",
        value: function addFormatValidator(format, validator) {
            addValidator.format(this.core, format, validator);
        }

        /**
         * @param {String} datatype     - JSON-Schema datatype to register attribute, e.g. "string" or "object"
         * @param {String} keyword      - custom keyword
         * @param {Function} validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
         *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
         *      als return a promise
         */

    }, {
        key: "addKeywordValidator",
        value: function addKeywordValidator(datatype, keyword, validator) {
            addValidator.keyword(this.core, datatype, keyword, validator);
        }

        /**
         * Change the new schema for the current data
         * @param {Object} schema   - a valid json-schema
         */

    }, {
        key: "setSchema",
        value: function setSchema(schema) {
            schema = UISchema.extendSchema(schema);
            this.validationService.set(schema);
            this.schemaService.setSchema(schema);
        }

        // update data in schema service

    }, {
        key: "update",
        value: function update() {
            this.schemaService.setData(this.dataService.get());
        }

        /**
         * Starts validation of current data
         */

    }, {
        key: "validateAll",
        value: function validateAll() {
            var _this2 = this;

            setTimeout(function () {
                return _this2.validationService.validate(_this2.dataService.getDataByReference());
            });
        }

        /**
         * Destroy the editor, its widgets and services
         */

    }, {
        key: "destroy",
        value: function destroy() {
            var _this3 = this;

            // delete all editors
            Object.keys(this.instances).forEach(function (pointer) {
                _this3.instances[pointer] && _this3.instances[pointer].forEach(function (instance) {
                    return instance.destroy();
                });
            });

            this.instances = {};
            this.schemaService.destroy();
            this.validationService.destroy();
            this.dataService.destroy();
            this.dataService.off(DataService.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate);
        }
    }, {
        key: "onAfterDataUpdate",
        value: function onAfterDataUpdate(evt) {
            this.update();
            this.validateAll();
            if (evt.type === "array" || evt.type === "object") {
                LocationService.focus();
            }
        }
    }, {
        key: "changePointer",
        value: function changePointer(newPointer, editor) {
            removeEditorFrom(this.instances, editor);
            this.addInstance(newPointer, editor);
        }
    }]);

    return Controller;
}();

module.exports = Controller;

/***/ }),

/***/ "./components/container/index.js":
/*!***************************************!*\
  !*** ./components/container/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");
var ContainerHeader = __webpack_require__(/*! ../containerheader */ "./components/containerheader/index.js");
var ContainerErrors = __webpack_require__(/*! ../containererrors */ "./components/containererrors/index.js");
var ContainerDescription = __webpack_require__(/*! ../containerdescription */ "./components/containerdescription/index.js");

/**
 * @view ContainerView
 *
 * A Container Component is used for any non-value like object or arrays. They hold other values. This group may expose
 * a group-title and errors. Any childnodes must go to the container '.jed-container__children'.
 *
 * @type {Object}
 */
var ContainerView = {

    childContainerSelector: ".editron-container__children",

    getChildContainer: function getChildContainer($element) {
        var $childContainer = $element.querySelector(ContainerView.childContainerSelector);
        if ($childContainer == null) {
            throw new Error("Container-Component hast not yet been rendered");
        }
        return $childContainer;
    },
    view: function view(vnode) {
        return [vnode.attrs.hideTitle === true ? null : m(ContainerHeader, vnode.attrs), m(ContainerDescription, vnode.attrs), vnode.children, m(ContainerErrors, vnode.attrs), m(this.childContainerSelector)];
    }
};

module.exports = ContainerView;

/***/ }),

/***/ "./components/containerdescription/index.js":
/*!**************************************************!*\
  !*** ./components/containerdescription/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");
var populated = __webpack_require__(/*! ../../utils/populated */ "./utils/populated.js");

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
    view: function view(vnode) {
        return populated(vnode.attrs.description, m(".editron-container__description.mmf-meta", m.trust(vnode.attrs.description)));
    }
};

/***/ }),

/***/ "./components/containererrors/index.js":
/*!*********************************************!*\
  !*** ./components/containererrors/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
    view: function view(vnode) {
        if (Array.isArray(vnode.attrs.errors) === false || vnode.attrs.errors.length === 0) {
            return null;
        }

        return m("ul.editron-container__errors", vnode.attrs.errors.map(function (error) {
            return m("li", { "class": "is-" + (error.severity || "error") }, error.message);
        }));
    }
};

/***/ }),

/***/ "./components/containerheader/index.js":
/*!*********************************************!*\
  !*** ./components/containerheader/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");
var getID = __webpack_require__(/*! ../../utils/getID */ "./utils/getID.js");
var populated = __webpack_require__(/*! ../../utils/populated */ "./utils/populated.js");

function getClass(_ref) {
    var title = _ref.title,
        icon = _ref.icon,
        hasAction = _ref.hasAction;

    var classname = "" + (title ? "withTitle" : "noTitle");
    classname += " " + (hasAction ? "withActions" : "noActions");
    classname += " " + (icon ? "withIcon" : "noIcon");
    return classname;
}

module.exports = {
    view: function view(vnode) {
        var attrs = _extends({
            pointer: "",
            icon: "",
            title: ""
            // onadd
            // ondelete
            // onmoveup
            // onmovedown
        }, vnode.attrs);

        attrs.hasAction = attrs.onadd || attrs.ondelete || attrs.onmoveup || attrs.onmovedown;

        return m(".editron-container__header", {
            "class": getClass(attrs),
            name: getID(attrs.pointer)
        }, m(".editron-container__title", populated(vnode.attrs.icon, m("i.mmf-icon", attrs.icon)), !attrs.hideTitle && m("h2", attrs.title)), m(".editron-container__actions", attrs.onmoveup ? m("i.mmf-icon.mmf-icon--add", {
            onclick: attrs.onmoveup
        }, "arrow_upward") : "", attrs.onmovedown ? m("i.mmf-icon.mmf-icon--add", {
            onclick: attrs.onmovedown
        }, "arrow_downward") : "", attrs.onadd ? m("i.mmf-icon.mmf-icon--add", {
            onclick: function onclick() {
                return attrs.onadd();
            }
        }, "add") : "", attrs.ondelete ? m("i.mmf-icon.mmf-icon--delete", {
            onclick: attrs.ondelete
        }, "delete") : ""));
    }
};

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    container: __webpack_require__(/*! ./container */ "./components/container/index.js"),
    containerdescription: __webpack_require__(/*! ./containerdescription */ "./components/containerdescription/index.js"),
    containererrors: __webpack_require__(/*! ./containererrors */ "./components/containererrors/index.js"),
    containerheader: __webpack_require__(/*! ./containerheader */ "./components/containerheader/index.js"),
    overlay: __webpack_require__(/*! ./overlay */ "./components/overlay/index.js"),
    // overlayjson: require("./overlayjson"),
    overlayselecttiles: __webpack_require__(/*! ./overlayselecttiles */ "./components/overlayselecttiles/index.js")
};

/***/ }),

/***/ "./components/overlay/index.js":
/*!*************************************!*\
  !*** ./components/overlay/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");
var Button = __webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/index.js").button;

module.exports = {

    /**
     * @View mithril
     * Content overlay
     *
     * @param  {VNode} vnode                        - mithril virtual node
     * @param  {VNode.attrs.container} container    - parent container
     * @return {Object} virtual node
     */
    view: function view(vnode) {
        return m("section.ui-overlay__card", {
            "class": vnode.attrs.fullscreen ? "ui-overlay__card--fullscreen" : null
        }, vnode.attrs.header ? m(".ui-card__header", m("h1", vnode.attrs.header)) : "", m(".ui-card__content", {
            oncreate: function oncreate(contentNode) {
                return contentNode.dom.appendChild(vnode.attrs.container);
            }
        }), m(".ui-card__footer", m(Button, {
            onClick: vnode.attrs.onAbort
        }, vnode.attrs.titleAbort), vnode.attrs.showSave ? m(Button, {
            onClick: vnode.attrs.onSave
        }, "Speichern") : ""));
    }
};

/***/ }),

/***/ "./components/overlayselecttiles/index.js":
/*!************************************************!*\
  !*** ./components/overlayselecttiles/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");

var Tile = {
    view: function view(vnode) {
        return m(".editron-form-box", {
            "data-value": vnode.attrs.value,
            "data-type": vnode.attrs.title.toLowerCase() // @uitest
        }, m(".editron-form-box__content", m(".editron-form-box__title", [vnode.attrs.icon ? m(".mmf-icon", vnode.attrs.icon) : "", vnode.attrs.title]), m(".editron-form-box__description", vnode.attrs.description)));
    }
};

function getDataValue(node) {
    while (node.parentNode && node.getAttribute("data-value") == null && node.className.includes("editron-form-tiles") === false) {
        node = node.parentNode;
    }
    return node.getAttribute("data-value");
}

/**
 * @View mithril
 * Overlay content to pick options. Displayed as tiles
 * @type {Object}
 */
module.exports = {
    view: function view(vnode) {
        var attrs = _extends({
            value: 0,
            options: [{ title: "Keine Optionen angegeben", value: false }],
            onchange: Function.prototype
        }, vnode.attrs);

        return m(".editron-form-tiles", {
            onclick: function onclick(e) {
                var value = getDataValue(e.target);
                attrs.onchange(value);
            }
        }, attrs.options.map(function (tile) {
            return m(Tile, {
                active: attrs.value === tile.value,
                title: tile.title,
                icon: tile.icon,
                description: m.trust(tile.description), // allow html
                value: tile.value
            });
        }));
    }
};

/***/ }),

/***/ "./editors/AbstractEditor.js":
/*!***********************************!*\
  !*** ./editors/AbstractEditor.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getTypeClass(schema) {
    return schema.type === "array" || schema.type === "object" ? schema.type : "value";
}

/**
 * This is an optional base class for a custom editor. Inheriting from AbstractEditor will setup most required
 * editor-methods to work by default, while still allowing custom implementations. Most of all, it removes
 * the tedious and redundant controller/serivce/pointer bootstraping.
 *
 * Still required is
 *
 *      1. a custom `static editorOf(p, c, o)`-method, to register on a schema
 *      2. an `update(patch)`-method to respond to changes of the data at _pointer_
 *      3. a custom `updatePointer(newPointer)`-method to respond to changes in the location of the editor. Most of
 *          times, the pointer will be used in rendering and/or when creating child-editors. Dont forget to call
 *          `super.updatePointer(newPointer)`
 *
 * and optionally an `updateErrors(errors)`-method to handle new (or removed) errors.
 *
 * Convenience methods are
 *
 *      - `getData()` to fetch the associated data of the current _pointer_
 *      - `setData(newValue)` to update the associated data of the current _pointer_
 *      - `getSchema()` returning the json-schema of the current _pointer_
 *      - `getErrors()` returning a list of current errors
 *      - `toElement()` gives you the root dom-node for this editor (aka render target)
 *      - `focus()` and `blur()` to manage the selection state of the current input (requires correct placement of _id_)
 *
 * @param {String} pointer          - pointer referencing the current data and schema
 * @param {Controller} controller   - editron controller instance
 * @param {Object} options          - resolved options object
 */

var AbstractEditor = function () {
    _createClass(AbstractEditor, null, [{
        key: "editorOf",
        value: function editorOf(pointer, controller, options) {
            // eslint-disable-line
            throw new Error("Missing editorOf-method in custom editor");
        }
    }]);

    function AbstractEditor(pointer, controller, options) {
        _classCallCheck(this, AbstractEditor);

        this.pointer = pointer;
        this.controller = controller;
        this.options = options;

        this.dom = this.controller.createElement(".editron-container.editron-container--" + getTypeClass(this.getSchema()), options.attrs);

        this.update = controller.data().observe(pointer, this.update.bind(this), options.notifyNestedChanges === true);

        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this), options.notifyNestedErrors === true);

        this.errors = this.controller.validator().getErrorsAndWarnings(pointer);
    }

    _createClass(AbstractEditor, [{
        key: "update",
        value: function update() {
            throw new Error("Missing implemented of method 'update' in custom editor");
        }
    }, {
        key: "updatePointer",
        value: function updatePointer(newPointer) {
            var oldPointer = this.pointer;

            this.controller.data().removeObserver(oldPointer, this.update);
            this.controller.validator().removeObserver(oldPointer, this.setErrors);

            this.pointer = newPointer;

            this.controller.data().observe(newPointer, this.update, this.options.notifyNestedChanges === true);
            this.setErrors = this.controller.validator().observe(newPointer, this.setErrors);

            return [newPointer, oldPointer];
        }
    }, {
        key: "getData",
        value: function getData() {
            return this.controller.data().get(this.pointer);
        }
    }, {
        key: "setData",
        value: function setData(data) {
            return this.controller.data().set(this.pointer, data);
        }
    }, {
        key: "getErrors",
        value: function getErrors() {
            return this.errors;
        }
    }, {
        key: "getSchema",
        value: function getSchema() {
            return this.controller.schema().get(this.pointer);
        }
    }, {
        key: "getPointer",
        value: function getPointer() {
            return this.pointer;
        }
    }, {
        key: "focus",
        value: function focus() {
            this.controller.location().setCurrent(this.pointer);
        }
    }, {
        key: "blur",
        value: function blur() {
            this.controller.location().blur(this.pointer);
        }
    }, {
        key: "toElement",
        value: function toElement() {
            return this.dom;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.controller.removeInstance(this); // remove editor from editron and our html-element (dom) from the DOM
            this.controller.data().removeObserver(this.pointer, this.update);
            this.controller.validator().removeObserver(this.pointer, this._addError);
            this.controller.validator().off("beforeValidation", this._clearErrors);
        }
    }, {
        key: "setErrors",
        value: function setErrors(errors) {
            this.errors = errors;
            if (this.updateErrors) {
                this.updateErrors(this.errors);
            }
        }
    }]);

    return AbstractEditor;
}();

module.exports = AbstractEditor;

/***/ }),

/***/ "./editors/AbstractValueEditor.js":
/*!****************************************!*\
  !*** ./editors/AbstractValueEditor.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = __webpack_require__(/*! mithril */ "mithril");
var getId = __webpack_require__(/*! ../utils/getID */ "./utils/getID.js");

var convert = {
    "boolean": function boolean(value) {
        if (value === "true") {
            return true;
        }
        if (value === "false") {
            return false;
        }
        return value;
    },
    integer: function integer(value) {
        var converted = parseInt(value);
        if (isNaN(converted) === false) {
            return converted;
        }
        return value;
    },
    number: function number(value) {
        var converted = parseFloat(value);
        if (isNaN(converted) === false) {
            return converted;
        }
        return value;
    }
};

/**
 * Convenience class, which registers required events and base methods for value-editors (not object, array)
 *
 * Usage
 * ```js
 *      MyValueEditor extends AbstractValueEditor {
 *          constructor(pointer, controller, options) {
 *              super(pointer, controller, options);
 *              this.render();
 *          }
 *          render() {
 *              m.render(this.$element, m(MyView, this.viewModel));
 *          }
 *      }
 * ```
 */

var AbstractValueEditor = function () {
    _createClass(AbstractValueEditor, null, [{
        key: "editorOf",
        value: function editorOf(pointer, controller) {
            var schema = controller.schema().get(pointer);
            return schema.type !== "object" && schema.type !== "array";
        }

        /**
         * #options
         *      - editorValueType:String - custom type of editor value (added as classname)
         *      - editorElementProperties:Object - add custom properties to main DOM-element
         *      - viewModel:Object - viewModel which extends base viewmodel
         *
         * @param  {String} pointer         - json pointer to value
         * @param  {Controller} controller  - json editor controller
         * @param  {Object} options
         */

    }]);

    function AbstractValueEditor(pointer, controller, options) {
        var _this = this;

        _classCallCheck(this, AbstractValueEditor);

        this.pointer = pointer;
        this.controller = controller;

        var schema = controller.schema().get(pointer);

        options = _extends({
            viewModel: null,
            title: null,
            description: null,
            editorValueType: schema.enum ? "select" : schema.type,
            editorElementProperties: null
        }, options);

        // create main DOM-element for view-generation
        this.$element = controller.createElement(".editron-value.editron-value--" + options.editorValueType, _extends({
            name: getId(pointer)
        }, options.attrs));

        // use this model to generate the view. may be customized with `options.viewModel`
        this.viewModel = _extends({
            pointer: pointer,
            id: getId(pointer),
            title: options.title,
            description: options.description,
            value: controller.data().get(pointer),
            instantUpdate: options.instantUpdate,
            schema: schema,
            errors: controller.validator().getErrorsAndWarnings(pointer),
            onfocus: function onfocus() {
                return controller.location().setCurrent(pointer);
            },
            onblur: function onblur() {
                return controller.location().blur(pointer);
            },
            onchange: function onchange(value) {
                if (convert[schema.type]) {
                    value = convert[schema.type](value);
                }
                _this.setValue(value);
            }
        }, options.viewModel);

        // in order to deregister callbacks in destroy(), bind all callbacks to this class
        this.update = controller.data().observe(pointer, this.update.bind(this));
        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this));

        // this.render();
    }

    _createClass(AbstractValueEditor, [{
        key: "getPointer",
        value: function getPointer() {
            return this.pointer;
        }
    }, {
        key: "updatePointer",
        value: function updatePointer(pointer) {
            var _this2 = this;

            if (pointer === this.pointer) {
                return;
            }

            this.controller.changePointer(pointer, this);

            var oldPointer = this.pointer;
            this.$element.setAttribute("name", "editor-" + pointer);
            this.pointer = pointer;
            this.viewModel.pointer = pointer;
            this.viewModel.id = getId(pointer);
            this.viewModel.onfocus = function () {
                return _this2.controller.location().setCurrent(pointer);
            };
            this.controller.data().removeObserver(oldPointer, this.update);
            this.controller.validator().removeObserver(oldPointer, this.setErrors);
            this.controller.data().observe(pointer, this.update);
            this.controller.validator().observe(pointer, this.setErrors);

            this.update();
        }

        // update display value in view

    }, {
        key: "update",
        value: function update() {
            this.viewModel.value = this.controller.data().get(this.pointer);
            this.render();
        }

        // updates value in data-store

    }, {
        key: "setValue",
        value: function setValue(value) {
            this.controller.data().set(this.pointer, value);
            this.render();
        }

        // adds an error to view

    }, {
        key: "setErrors",
        value: function setErrors(errors) {
            this.viewModel.errors = errors;
            this.render();
        }

        // update view

    }, {
        key: "render",
        value: function render() {
            // this.$element.innerHTML = "<b>Overwrite AbstractValueEditor.render() to generate your view</b>";
            m.render(this.$element, m("b", "Overwrite AbstractValueEditor.render() to generate view"));
        }

        // return main dom element

    }, {
        key: "toElement",
        value: function toElement() {
            return this.$element;
        }

        // destroy this editor

    }, {
        key: "destroy",
        value: function destroy() {
            if (this.viewModel) {
                this.controller.removeInstance(this);

                // destroy this editor only once
                m.render(this.$element, m("i"));

                this.viewModel = null;
                this.controller.data().removeObserver(this.pointer, this.update);
                this.controller.validator().removeObserver(this.pointer, this.setErrors);
                this.$element = null;
            }
        }
    }]);

    return AbstractValueEditor;
}();

module.exports = AbstractValueEditor;

/***/ }),

/***/ "./editors/arrayeditor/ArrayItemEditor.js":
/*!************************************************!*\
  !*** ./editors/arrayeditor/ArrayItemEditor.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = __webpack_require__(/*! mithril */ "mithril");
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var ArrayItemView = __webpack_require__(/*! ./ArrayItemView */ "./editors/arrayeditor/ArrayItemView.js");
var arrayUtils = __webpack_require__(/*! ../../utils/array */ "./utils/array.js");

var ArrayItemEditor = function () {
    function ArrayItemEditor(pointer, controller) {
        var _this = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, ArrayItemEditor);

        // eslint-disable-next-line max-len
        this.$element = controller.createElement(".editron-container__child.editron-container__child--array-item", options.attrs);
        this.controller = controller;

        this.onAdd = function () {
            return _this.add();
        };
        this.onRemove = function () {
            return _this.remove();
        };

        this.viewModel = _extends({
            onadd: this.onAdd,
            onremove: this.onRemove,
            onmove: function onmove(index) {
                return _this.move(index);
            }
        }, options);

        this.render();

        var $target = this.$element.querySelector(ArrayItemView.editorTarget);
        this.editor = controller.createEditor(pointer, $target, {
            ondelete: this.onRemove
        });

        this.updatePointer(pointer);
    }

    _createClass(ArrayItemEditor, [{
        key: "render",
        value: function render() {
            m.render(this.$element, m(ArrayItemView, this.viewModel));
        }
    }, {
        key: "add",
        value: function add() {
            arrayUtils.addItem(this.parentPointer, this.controller, this.viewModel.index + 1);
        }
    }, {
        key: "remove",
        value: function remove() {
            arrayUtils.removeItem(this.parentPointer, this.controller, this.viewModel.index);
        }
    }, {
        key: "move",
        value: function move(to) {
            arrayUtils.moveItem(this.parentPointer, this.controller, this.viewModel.index, to);
        }
    }, {
        key: "updatePointer",
        value: function updatePointer(newPointer) {
            this.parentPointer = gp.join(newPointer, "..", true);
            this.viewModel.index = ArrayItemEditor.getIndex(newPointer);
            this.viewModel.pointer = newPointer;
            this.viewModel.length = this.controller.data().get(this.parentPointer).length;
            this.render();
            this.editor && this.editor.updatePointer(newPointer);
        }
    }, {
        key: "toElement",
        value: function toElement() {
            return this.$element;
        }
    }, {
        key: "getPointer",
        value: function getPointer() {
            return this.viewModel.pointer;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.viewModel) {
                this.viewModel = null;
                this.editor && this.editor.destroy();
                this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
            }
        }
    }], [{
        key: "getIndex",
        value: function getIndex(pointer) {
            var parentPointer = gp.join(pointer, "..");
            return parseInt(pointer.replace(parentPointer + "/", ""));
        }
    }]);

    return ArrayItemEditor;
}();

module.exports = ArrayItemEditor;

/***/ }),

/***/ "./editors/arrayeditor/ArrayItemView.js":
/*!**********************************************!*\
  !*** ./editors/arrayeditor/ArrayItemView.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");

var ArrayItemView = {

    editorTarget: ".editron-item",

    view: function view(vnode) {
        var canRemove = vnode.attrs.minItems < vnode.attrs.length;
        var canAdd = vnode.attrs.maxItems > vnode.attrs.length;
        var showIndex = vnode.attrs.showIndex === true;

        return [
        // CONTROLS
        m("ul.editron-container__controls.editron-container__controls--child", vnode.attrs.move === false || vnode.attrs.index === 0 ? "" : m("li", { onclick: function onclick() {
                return vnode.attrs.onmove(vnode.attrs.index - 1);
            } }, m("i.mmf-icon", "arrow_upward")), vnode.attrs.move === false || vnode.attrs.index === vnode.attrs.length - 1 ? "" : m("li", { onclick: function onclick() {
                return vnode.attrs.onmove(vnode.attrs.index + 1);
            } }, m("i.mmf-icon", "arrow_downward")), vnode.attrs.remove && vnode.attrs.ondelete && canRemove ? m("li", { onclick: function onclick() {
                return vnode.attrs.ondelete(vnode.attrs.index);
            } }, m("i.mmf-icon", "delete")) : "", vnode.attrs.add && vnode.attrs.onadd && canAdd ? m("li", { onclick: function onclick() {
                return vnode.attrs.onadd(vnode.attrs.index);
            } }, m("i.mmf-icon", "add")) : ""),

        // TARGET CONTAINER FOR EDITOR
        m(this.editorTarget, {
            "data-index": vnode.attrs.index + 1 + " / " + vnode.attrs.length,
            "class": [canRemove ? "has-remove-enabled" : "has-remove-disabled", canAdd ? "has-add-enabled" : "has-add-disabled", showIndex ? "with-index" : ""].join(" ").trim()
        }),

        // ADD BUTTON
        vnode.attrs.insert && canAdd ? m(".editron-container__separator.mmf-row", m(".editron-container__button--add", {
            onclick: function onclick(e) {
                e.preventDefault();
                vnode.attrs.onadd && vnode.attrs.onadd(vnode.attrs.index);
            }
        }, m("i.mmf-icon", "add_circle"))) : ""];
    }
};

module.exports = ArrayItemView;

/***/ }),

/***/ "./editors/arrayeditor/index.js":
/*!**************************************!*\
  !*** ./editors/arrayeditor/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = __webpack_require__(/*! mithril */ "mithril");
var ArrayItemEditor = __webpack_require__(/*! ./ArrayItemEditor */ "./editors/arrayeditor/ArrayItemEditor.js");
var diffpatch = __webpack_require__(/*! ../../services/utils/diffpatch */ "./services/utils/diffpatch.js");
var View = __webpack_require__(/*! ../../components/container */ "./components/container/index.js");

var ArrayEditor = function () {
    _createClass(ArrayEditor, null, [{
        key: "editorOf",
        value: function editorOf(pointer, controller) {
            var schema = controller.schema().get(pointer);
            return schema.type === "array";
        }
    }]);

    function ArrayEditor(pointer, controller) {
        var _this = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, ArrayEditor);

        // add id to element, since no other input-form is associated with this editor
        options.attrs = _extends({ id: options.id }, options.attrs);
        var schema = controller.schema().get(pointer);
        var data = controller.data().get(pointer);

        this.onAdd = function () {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return controller.addItemTo(_this.pointer, index);
        };

        this.$element = controller.createElement(".editron-container.editron-container--array.withAddButton", options.attrs);
        this.controller = controller;
        this.pointer = pointer;
        this.children = [];
        this.viewModel = _extends({
            pointer: pointer,
            attrs: {},
            errors: controller.validator().getErrorsAndWarnings(pointer),
            onadd: this.onAdd,
            length: data.length,
            maxItems: schema.maxItems || Infinity,
            minItems: schema.minItems || 0
        }, options);

        this.viewModel.controls = _extends({
            add: false,
            remove: true,
            move: true,
            insert: true,
            showIndex: options["array:index"] === true,
            maxItems: schema.maxItems || Infinity,
            minItems: schema.minItems || 0
        }, options.controls);

        this.updateView = controller.data().observe(pointer, this.updateView.bind(this));
        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this));

        this.render();
        this.$items = this.$element.querySelector(View.childContainerSelector);
        this.rebuildChildren();
        this.updateControls();
    }

    _createClass(ArrayEditor, [{
        key: "update",
        value: function update() {
            this.rebuildChildren();
            this.updateControls();
        }
    }, {
        key: "updatePointer",
        value: function updatePointer(newPointer) {
            if (this.pointer === newPointer) {
                return;
            }

            this.controller.changePointer(newPointer, this);

            var previousPointer = this.pointer;
            this.pointer = newPointer;
            this.viewModel.pointer = newPointer;
            this.viewModel.attrs.id = newPointer;

            this.controller.data().removeObserver(previousPointer, this.updateView);
            this.controller.validator().removeObserver(previousPointer, this.setErrors);
            this.controller.data().observe(newPointer, this.updateView);
            this.controller.validator().observe(newPointer, this.setErrors);

            this.children.forEach(function (child, index) {
                return child.updatePointer(newPointer + "/" + index);
            });
            this.render();
        }
    }, {
        key: "updateView",
        value: function updateView(changeEvent) {
            if (changeEvent && changeEvent.patch) {
                this.applyPatches(changeEvent.patch);
            } else {
                this.rebuildChildren();
            }
            this.updateControls();
        }
    }, {
        key: "applyPatches",
        value: function applyPatches(patch) {
            var _this2 = this;

            // fetch a copy of the original list
            var originalChildren = this.children.slice(0);
            // and patch the current list
            diffpatch.patch(this.children, patch);

            // search for inserted children
            this.children.forEach(function (child, index) {
                if (child instanceof ArrayItemEditor === false) {
                    var newChild = new ArrayItemEditor(_this2.pointer + "/" + index, _this2.controller, _this2.viewModel.controls);
                    // @insert?
                    _this2.children[index] = newChild;
                }
            });

            // search for removed children
            originalChildren.forEach(function (child) {
                if (_this2.children.indexOf(child) === -1) {
                    child.destroy();
                }
            });

            // update view: move and inserts nodes
            var currentLocation = this.controller.location().getCurrent();

            for (var i = 0, l = this.children.length; i < l; i += 1) {
                var previousPointer = this.children[i].getPointer();
                var currentPointer = this.pointer + "/" + i;

                // update current location
                if (currentLocation.indexOf(previousPointer) === 0) {
                    this.controller.location().setCurrent(currentLocation.replace(previousPointer, currentPointer));
                }

                // update child views to match patched list
                this.children[i].updatePointer(currentPointer);
                if (this.$items.children[i] === this.children[i].toElement()) {
                    // skip moving node, already in place
                    continue;
                } else if (i + 1 < this.$items.children.length) {
                    // move node to correct position
                    this.$items.insertBefore(this.children[i].toElement(), this.$items.children[i + 1]);
                } else {
                    // remaining nodes may be simply appended
                    this.$items.appendChild(this.children[i].toElement());
                }
            }
        }
    }, {
        key: "rebuildChildren",
        value: function rebuildChildren() {
            var _this3 = this;

            var data = this.controller.data().get(this.pointer);

            // delete all child editors
            this.children.forEach(function (editor) {
                return editor.destroy();
            });
            this.children.length = 0;
            this.$items.innerHTML = "";

            // recreate child editors
            data.forEach(function (item, index) {
                var childPointer = _this3.pointer + "/" + index;
                var childEditor = new ArrayItemEditor(childPointer, _this3.controller, _this3.viewModel.controls);
                _this3.$items.appendChild(childEditor.toElement());
                _this3.children.push(childEditor);
            });
        }
    }, {
        key: "updateControls",
        value: function updateControls() {
            this.viewModel.length = this.children.length;
            this.viewModel.onadd = this.viewModel.maxItems > this.children.length ? this.onAdd : false;

            this.$element.classList.toggle("has-add-disabled", this.viewModel.maxItems <= this.children.length);
            this.$element.classList.toggle("has-remove-disabled", this.viewModel.minItems >= this.children.length);
        }
    }, {
        key: "getPointer",
        value: function getPointer() {
            return this.pointer;
        }
    }, {
        key: "setErrors",
        value: function setErrors(errors) {
            this.viewModel.errors = errors;
            this.render();
        }
    }, {
        key: "render",
        value: function render() {
            m.render(this.$element, m(View, this.viewModel));
        }
    }, {
        key: "toElement",
        value: function toElement() {
            return this.$element;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.viewModel) {
                this.controller.removeInstance(this);

                this.viewModel = null;
                m.render(this.$element, m("i"));
                this.controller.data().removeObserver(this.pointer, this.updateView);
                this.controller.validator().removeObserver(this.pointer, this.setErrors);
                this.children.forEach(function (editor) {
                    return editor.destroy();
                });
            }
        }
    }]);

    return ArrayEditor;
}();

module.exports = ArrayEditor;

/***/ }),

/***/ "./editors/index.js":
/*!**************************!*\
  !*** ./editors/index.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    AbstractEditor: __webpack_require__(/*! ./AbstractEditor */ "./editors/AbstractEditor.js"),
    AbstractValueEditor: __webpack_require__(/*! ./AbstractValueEditor */ "./editors/AbstractValueEditor.js"),
    ArrayEditor: __webpack_require__(/*! ./arrayeditor */ "./editors/arrayeditor/index.js"),
    ObjectEditor: __webpack_require__(/*! ./objecteditor */ "./editors/objecteditor/index.js"),
    OneOfEditor: __webpack_require__(/*! ./oneofeditor */ "./editors/oneofeditor/index.js"),
    ValueEditor: __webpack_require__(/*! ./valueeditor */ "./editors/valueeditor/index.js")
};

/***/ }),

/***/ "./editors/objecteditor/index.js":
/*!***************************************!*\
  !*** ./editors/objecteditor/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = __webpack_require__(/*! mithril */ "mithril");
var TextareaForm = __webpack_require__(/*! mithril-material-forms/components/textareaform */ "./node_modules/mithril-material-forms/components/textareaform/index.js");
var OverlayService = __webpack_require__(/*! ../../services/OverlayService */ "./services/OverlayService.js");
var View = __webpack_require__(/*! ../../components/container */ "./components/container/index.js");

function showJSON(controller, data, title) {
    var element = controller.createElement(".overlay__item.overlay__item--json");
    OverlayService.open(element, { ok: true, save: false });
    // render textarea after it is injected into dom, to correctly update textarea size
    m.render(element, m(TextareaForm, { title: title, value: JSON.stringify(data, null, 4) }));
}

var ObjectEditor = function () {
    _createClass(ObjectEditor, null, [{
        key: "editorOf",
        value: function editorOf(pointer, controller) {
            var schema = controller.schema().get(pointer);
            return schema.type === "object";
        }
    }]);

    function ObjectEditor(pointer, controller) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, ObjectEditor);

        // add id to element, since no other input-form is associated with this editor
        options.attrs = _extends({ id: options.id }, options.attrs);

        this.$element = controller.createElement(".editron-container.editron-container--object", options.attrs);
        this.pointer = pointer;
        this.options = options;
        this.controller = controller;
        this.childEditors = [];
        this.viewModel = _extends({
            pointer: pointer,
            icon: options.icon,
            errors: [],
            attrs: {},
            hideTitle: options.hideTitle,
            title: options.title,
            description: options.description
        }, options);

        if (options.addDelete) {
            this.viewModel.ondelete = function () {
                return controller.data().delete(pointer);
            };
        }

        this.rebuildChildren = controller.data().observe(pointer, this.rebuildChildren.bind(this));
        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this));

        this.setErrors(controller.validator().getErrorsAndWarnings(pointer));
        this.render();
        this.$children = this.$element.querySelector(View.childContainerSelector);
        this.rebuildChildren();
    }

    _createClass(ObjectEditor, [{
        key: "updatePointer",
        value: function updatePointer(pointer) {
            var _this = this;

            if (this.pointer === pointer || this.viewModel == null) {
                return;
            }

            this.controller.changePointer(pointer, this);

            var oldPointer = this.pointer;
            this.$element.id = pointer;

            var controller = this.controller;
            this.options.attrs.id = pointer;
            this.pointer = pointer;
            this.viewModel.pointer = pointer;
            if (this.options.addDelete) {
                // console.log("Update ondelete", pointer);
                this.viewModel.ondelete = function () {
                    return controller.data().delete(pointer);
                };
            }
            controller.data().removeObserver(oldPointer, this.rebuildChildren);
            controller.validator().removeObserver(oldPointer, this.setErrors);
            controller.data().observe(pointer, this.rebuildChildren);
            controller.validator().observe(pointer, this.setErrors);

            this.childEditors.forEach(function (editor) {
                editor.updatePointer(_this.pointer + "/" + editor._property);
            });

            this.render();
        }
    }, {
        key: "update",
        value: function update() {
            this.rebuildChildren();
        }
    }, {
        key: "rebuildChildren",
        value: function rebuildChildren() {
            var _this2 = this;

            if (this.viewModel == null) {
                console.error("destroyed ObjectEditor receives an update event - this may be invoked through oneOf-Editor", this);
                return;
            }

            // fetch latest data
            var data = this.controller.data().get(this.pointer);
            // destroy child editor
            this.childEditors.forEach(function (editor) {
                return editor.destroy();
            });
            this.childEditors.length = 0;
            // clear html
            this.$children.innerHTML = "";
            // rebuild children
            if (data) {
                Object.keys(data).forEach(function (property) {
                    var editor = _this2.controller.createEditor(_this2.pointer + "/" + property, _this2.$children);
                    if (editor) {
                        editor._property = property;
                        _this2.childEditors.push(editor);
                    }
                });
            }

            this.render();
        }
    }, {
        key: "deleteProperty",
        value: function deleteProperty(property) {
            console.log("DELETE PROPERTY", property);
            var data = this.controller.data().get(this.pointer);
            delete data[property];
            this.controller.data().set(this.pointer, data);
        }
    }, {
        key: "showProperty",
        value: function showProperty(property) {
            var propertyData = this.controller.data().get(this.pointer + "/" + property);
            showJSON(this.controller, propertyData, property);
        }
    }, {
        key: "setErrors",
        value: function setErrors(errors) {
            var _this3 = this;

            // if we receive errors here, a property may be missing (which should go to schema.getTemplate) or additional,
            // but prohibited properties exist. For the latter, add an option to show and/or delete the property. Within
            // arrays this should come per default, as the may insert in add items...
            this.viewModel.errors = errors.map(function (error) {
                if (error.code === "no-additional-properties-error") {
                    var message = error.message;
                    var property = error.data.property;
                    return {
                        severity: error.type || "error",
                        message: m(".editron-error.editron-error--object-property", m("span", m.trust(message)), m("a.mmf-icon", { onclick: function onclick() {
                                return _this3.showProperty(property);
                            } }, "visibility"), m("a.mmf-icon", { onclick: function onclick() {
                                return _this3.deleteProperty(property);
                            } }, "clear"))
                    };
                }
                return error;
            });
            this.render();
        }
    }, {
        key: "render",
        value: function render() {
            m.render(this.$element, m(View, this.viewModel));
        }
    }, {
        key: "toElement",
        value: function toElement() {
            return this.$element;
        }
    }, {
        key: "getPointer",
        value: function getPointer() {
            return this.pointer;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.viewModel) {
                this.controller.removeInstance(this);

                m.render(this.$element, m("i"));
                this.controller.data().removeObserver(this.pointer, this.rebuildChildren);
                this.controller.validator().removeObserver(this.pointer, this.setErrors);

                this.childEditors.forEach(function (editor) {
                    return editor.destroy();
                });
                this.childEditors.length = 0;
                this.$children.innerHTML = "";
                this.viewModel = null;
            }
        }
    }]);

    return ObjectEditor;
}();

module.exports = ObjectEditor;

/***/ }),

/***/ "./editors/oneofeditor/index.js":
/*!**************************************!*\
  !*** ./editors/oneofeditor/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = __webpack_require__(/*! mithril */ "mithril");
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var Select = __webpack_require__(/*! mithril-material-forms/components/select */ "./node_modules/mithril-material-forms/components/select/index.js");
var getId = __webpack_require__(/*! ../../utils/getID */ "./utils/getID.js");
var View = __webpack_require__(/*! ../../components/container */ "./components/container/index.js");
var UI_PROPERTY = __webpack_require__(/*! ../../utils/UISchema */ "./utils/UISchema.js").UI_PROPERTY;

var OneOfEditor = function () {
    _createClass(OneOfEditor, null, [{
        key: "editorOf",
        value: function editorOf(pointer, controller, options) {
            var schema = controller.schema().get(pointer);
            return schema.oneOfSchema && !schema.items && !options.renderOneOf;
        }
    }]);

    function OneOfEditor(pointer, controller, options) {
        var _this = this;

        _classCallCheck(this, OneOfEditor);

        var childSchema = controller.schema().get(pointer);
        // @special case. Our options lie in `schema.oneOfSchema`
        var schema = childSchema.oneOfSchema;
        var attrs = gp.get(schema, "#/" + UI_PROPERTY + "/attrs");

        this.schema = schema;
        this.childSchema = childSchema;

        // ensure requried titles are set
        schema.oneOf.forEach(function (oneOfSchema, index) {
            return oneOfSchema.title = oneOfSchema.title || index + ".";
        });

        this.$element = controller.createElement(".editron-container.editron-container--oneof", attrs);
        this.controller = controller;
        this.pointer = pointer;
        this.viewModel = {
            id: getId(pointer),
            pointer: pointer,
            options: schema.oneOf.map(function (oneOf, index) {
                return { title: oneOf.title, value: index };
            }),
            onchange: function onchange(oneOfIndex) {
                _this.changeChild(schema.oneOf[oneOfIndex]);
            },
            value: this.getIndexOf(childSchema),
            title: schema.title,
            description: schema.description
        };

        // use bubble=true to catch inner changes (changes are compared by a diff which may not notify parent pointer)
        this.update = controller.data().observe(pointer, this.update.bind(this), true);

        this.render();
        this.$childContainer = this.$element.querySelector(View.childContainerSelector);
        this.rebuild();
    }

    _createClass(OneOfEditor, [{
        key: "changeChild",
        value: function changeChild(schema) {
            this.childEditor && this.childEditor.destroy();
            var data = this.controller.schema().getTemplate(schema);
            this.controller.data().set(this.pointer, data);
        }
    }, {
        key: "getIndexOf",
        value: function getIndexOf(currentSchema) {
            for (var i = 0, l = this.schema.oneOf.length; i < l; i += 1) {
                if (this.schema.oneOf[i].title === currentSchema.title) {
                    return i;
                }
            }
            return 0;
        }
    }, {
        key: "updatePointer",
        value: function updatePointer(newPointer) {
            var oldPointer = this.getPointer();
            if (oldPointer === newPointer) {
                return;
            }

            this.controller.changePointer(newPointer, this);

            this.pointer = newPointer;
            this.viewModel.id = getId(newPointer);
            this.viewModel.pointer = newPointer;
            this.$element.id = newPointer;
            this.controller.data().removeObserver(oldPointer, this.update);
            this.controller.data().observe(newPointer, this.update, true);

            if (this.childEditor) {
                this.childEditor.updatePointer(newPointer);
            }

            this.render();
        }
    }, {
        key: "update",
        value: function update() {
            var currentSchema = this.controller.schema().get(this.pointer);
            delete currentSchema.oneOfSchema; // is recreated each time
            if (currentSchema.title === this.childSchema.title) {
                return;
            }

            this.viewModel.value = this.getIndexOf(currentSchema);
            this.childSchema = currentSchema;
            this.rebuild();
        }
    }, {
        key: "rebuild",
        value: function rebuild() {
            this.childEditor && this.childEditor.destroy();
            this.$childContainer.innerHTML = "";
            this.childEditor = this.controller.createEditor(this.pointer, this.$childContainer, {
                // @attention this is very important or else we create an infinite loop through selectEditor
                renderOneOf: true
            });

            this.render();
        }
    }, {
        key: "render",
        value: function render() {
            m.render(this.$element, m(View, this.viewModel, m(".editron-value", m(Select, this.viewModel))));
        }
    }, {
        key: "toElement",
        value: function toElement() {
            return this.$element;
        }
    }, {
        key: "getPointer",
        value: function getPointer() {
            return this.pointer;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.viewModel) {
                this.controller.removeInstance(this);

                this.viewModel = null;
                m.render(this.$element, "i");
                this.controller.data().removeObserver(this.pointer, this.update);
            }
        }
    }]);

    return OneOfEditor;
}();

module.exports = OneOfEditor;

/***/ }),

/***/ "./editors/valueeditor/View.js":
/*!*************************************!*\
  !*** ./editors/valueeditor/View.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");

var CheckboxForm = __webpack_require__(/*! mithril-material-forms/components/checkboxform */ "./node_modules/mithril-material-forms/components/checkboxform/index.js");
var SelectForm = __webpack_require__(/*! mithril-material-forms/components/selectform */ "./node_modules/mithril-material-forms/components/selectform/index.js");
var TextareaForm = __webpack_require__(/*! mithril-material-forms/components/textareaform */ "./node_modules/mithril-material-forms/components/textareaform/index.js");
var InputForm = __webpack_require__(/*! mithril-material-forms/components/inputform */ "./node_modules/mithril-material-forms/components/inputform/index.js");
var UISchema = __webpack_require__(/*! ../../utils/UISchema */ "./utils/UISchema.js");

function chooseInput(attrs) {
    var schema = attrs.schema;
    var config = _extends({
        type: schema.type,
        title: schema.title,
        description: schema.description,
        onblur: attrs.onblur || Function.prototype,
        onfocus: attrs.onfocus || Function.prototype,
        onchange: attrs.onchange || Function.prototype
    }, attrs);

    if (schema.enum && schema.enum.length > 0) {
        config.options = UISchema.enumOptions(schema);
        return m(SelectForm, config);
    }
    if (schema.type === "boolean") {
        return m(CheckboxForm, config);
    }
    if (schema.type === "string" && schema.format === "html") {
        return m(TextareaForm, config);
    }
    if (schema.type === "string" && schema.format === "textarea") {
        return m(TextareaForm, config);
    }
    return m(InputForm, config);
}

module.exports = {
    view: function view(vnode) {
        return chooseInput(vnode.attrs);
    }
};

/***/ }),

/***/ "./editors/valueeditor/index.js":
/*!**************************************!*\
  !*** ./editors/valueeditor/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var m = __webpack_require__(/*! mithril */ "mithril");
var View = __webpack_require__(/*! ./View */ "./editors/valueeditor/View.js");
var AbstractValueEditor = __webpack_require__(/*! ../AbstractValueEditor */ "./editors/AbstractValueEditor.js");

var ValueEditor = function (_AbstractValueEditor) {
    _inherits(ValueEditor, _AbstractValueEditor);

    _createClass(ValueEditor, null, [{
        key: "editorOf",
        value: function editorOf(pointer, controller) {
            var schema = controller.schema().get(pointer);
            return schema.type !== "object" && schema.type !== "array";
        }
    }]);

    function ValueEditor(pointer, controller) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, ValueEditor);

        var _this = _possibleConstructorReturn(this, (ValueEditor.__proto__ || Object.getPrototypeOf(ValueEditor)).call(this, pointer, controller, options));

        _this.render();
        return _this;
    }

    _createClass(ValueEditor, [{
        key: "render",
        value: function render() {
            m.render(this.$element, m(View, this.viewModel));
        }
    }]);

    return ValueEditor;
}(AbstractValueEditor);

module.exports = ValueEditor;

/***/ }),

/***/ "./editron.js":
/*!********************!*\
  !*** ./editron.js ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  Controller: __webpack_require__(/*! ./Controller */ "./Controller.js"),
  components: __webpack_require__(/*! ./components */ "./components/index.js"),
  editors: __webpack_require__(/*! ./editors */ "./editors/index.js"),
  services: __webpack_require__(/*! ./services */ "./services/index.js"),
  utils: __webpack_require__(/*! ./utils */ "./utils/index.js"),
  plugin: __webpack_require__(/*! ./plugin */ "./plugin/index.js")
};

/***/ }),

/***/ "./editron.scss":
/*!**********************!*\
  !*** ./editron.scss ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "editron.css";

/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*!
	Autosize 3.0.21
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(undefined, function (exports, module) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			'delete': function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = ta.clientWidth;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			var originalHeight = ta.style.height;
			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = 'auto';

			var endHeight = ta.scrollHeight + heightOffset;

			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				ta.style.height = originalHeight;
				return;
			}

			ta.style.height = endHeight + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map['delete'](ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	module.exports = autosize;
});

/***/ }),

/***/ "./node_modules/diff_match_patch/lib/diff_match_patch.js":
/*!***************************************************************!*\
  !*** ./node_modules/diff_match_patch/lib/diff_match_patch.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Computes the difference between two texts to create a patch.
 * Applies the patch onto another text, allowing for errors.
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * Class containing the diff, match and patch methods.
 * @constructor
 */
function diff_match_patch() {

  // Defaults.
  // Redefine these in your program to override the defaults.

  // Number of seconds to map a diff before giving up (0 for infinity).
  this.Diff_Timeout = 1.0;
  // Cost of an empty edit operation in terms of edit characters.
  this.Diff_EditCost = 4;
  // The size beyond which the double-ended diff activates.
  // Double-ending is twice as fast, but less accurate.
  this.Diff_DualThreshold = 32;
  // At what point is no match declared (0.0 = perfection, 1.0 = very loose).
  this.Match_Threshold = 0.5;
  // How far to search for a match (0 = exact location, 1000+ = broad match).
  // A match this many characters away from the expected location will add
  // 1.0 to the score (0.0 is a perfect match).
  this.Match_Distance = 1000;
  // When deleting a large block of text (over ~64 characters), how close does
  // the contents have to match the expected contents. (0.0 = perfection,
  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
  // end points of a delete need to match.
  this.Patch_DeleteThreshold = 0.5;
  // Chunk size for context length.
  this.Patch_Margin = 4;

  /**
   * Compute the number of bits in an int.
   * The normal answer for JavaScript is 32.
   * @return {number} Max bits
   */
  function getMaxBits() {
    var maxbits = 0;
    var oldi = 1;
    var newi = 2;
    while (oldi != newi) {
      maxbits++;
      oldi = newi;
      newi = newi << 1;
    }
    return maxbits;
  }
  // How many bits in a number?
  this.Match_MaxBits = getMaxBits();
}

//  DIFF FUNCTIONS


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;

/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {boolean} opt_checklines Optional speedup flag.  If present and false,
 *     then don't run a line-level diff first to identify the changed areas.
 *     Defaults to true, which does a faster, slightly less optimal diff
 * @return {Array.<Array.<number|string>>} Array of diff tuples.
 */
diff_match_patch.prototype.diff_main = function (text1, text2, opt_checklines) {
  // Check for null inputs.
  if (text1 == null || text2 == null) {
    throw new Error('Null input. (diff_main)');
  }

  // Check for equality (speedup).
  if (text1 == text2) {
    return [[DIFF_EQUAL, text1]];
  }

  if (typeof opt_checklines == 'undefined') {
    opt_checklines = true;
  }
  var checklines = opt_checklines;

  // Trim off common prefix (speedup).
  var commonlength = this.diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = this.diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = this.diff_compute(text1, text2, checklines);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  this.diff_cleanupMerge(diffs);
  return diffs;
};

/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {boolean} checklines Speedup flag.  If false, then don't run a
 *     line-level diff first to identify the changed areas.
 *     If true, then run a faster, slightly less optimal diff
 * @return {Array.<Array.<number|string>>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_compute = function (text1, text2, checklines) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }
  longtext = shorttext = null; // Garbage collect.

  // Check to see if the problem can be split in two.
  var hm = this.diff_halfMatch(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = this.diff_main(text1_a, text2_a, checklines);
    var diffs_b = this.diff_main(text1_b, text2_b, checklines);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  // Perform a real diff.
  if (checklines && (text1.length < 100 || text2.length < 100)) {
    // Too trivial for the overhead.
    checklines = false;
  }
  var linearray;
  if (checklines) {
    // Scan the text on a line-by-line basis first.
    var a = this.diff_linesToChars(text1, text2);
    text1 = a[0];
    text2 = a[1];
    linearray = a[2];
  }
  diffs = this.diff_map(text1, text2);
  if (!diffs) {
    // No acceptable result.
    diffs = [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }
  if (checklines) {
    // Convert the diff back to original text.
    this.diff_charsToLines(diffs, linearray);
    // Eliminate freak matches (e.g. blank lines)
    this.diff_cleanupSemantic(diffs);

    // Rediff any replacement blocks, this time character-by-character.
    // Add a dummy entry at the end.
    diffs.push([DIFF_EQUAL, '']);
    var pointer = 0;
    var count_delete = 0;
    var count_insert = 0;
    var text_delete = '';
    var text_insert = '';
    while (pointer < diffs.length) {
      switch (diffs[pointer][0]) {
        case DIFF_INSERT:
          count_insert++;
          text_insert += diffs[pointer][1];
          break;
        case DIFF_DELETE:
          count_delete++;
          text_delete += diffs[pointer][1];
          break;
        case DIFF_EQUAL:
          // Upon reaching an equality, check for prior redundancies.
          if (count_delete >= 1 && count_insert >= 1) {
            // Delete the offending records and add the merged ones.
            var a = this.diff_main(text_delete, text_insert, false);
            diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert);
            pointer = pointer - count_delete - count_insert;
            for (var j = a.length - 1; j >= 0; j--) {
              diffs.splice(pointer, 0, a[j]);
            }
            pointer = pointer + a.length;
          }
          count_insert = 0;
          count_delete = 0;
          text_delete = '';
          text_insert = '';
          break;
      }
      pointer++;
    }
    diffs.pop(); // Remove the dummy entry at the end.
  }
  return diffs;
};

/**
 * Split two texts into an array of strings.  Reduce the texts to a string of
 * hashes where each Unicode character represents one line.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string|Array.<string>>} Three element Array, containing the
 *     encoded text1, the encoded text2 and the array of unique strings.  The
 *     zeroth element of the array of unique strings is intentionally blank.
 * @private
 */
diff_match_patch.prototype.diff_linesToChars = function (text1, text2) {
  var lineArray = []; // e.g. lineArray[4] == 'Hello\n'
  var lineHash = {}; // e.g. lineHash['Hello\n'] == 4

  // '\x00' is a valid character, but various debuggers don't like it.
  // So we'll insert a junk entry to avoid generating a null character.
  lineArray[0] = '';

  /**
   * Split a text into an array of strings.  Reduce the texts to a string of
   * hashes where each Unicode character represents one line.
   * Modifies linearray and linehash through being a closure.
   * @param {string} text String to encode.
   * @return {string} Encoded string.
   * @private
   */
  function diff_linesToCharsMunge(text) {
    var chars = '';
    // Walk the text, pulling out a substring for each line.
    // text.split('\n') would would temporarily double our memory footprint.
    // Modifying text would create many large strings to garbage collect.
    var lineStart = 0;
    var lineEnd = -1;
    // Keeping our own length variable is faster than looking it up.
    var lineArrayLength = lineArray.length;
    while (lineEnd < text.length - 1) {
      lineEnd = text.indexOf('\n', lineStart);
      if (lineEnd == -1) {
        lineEnd = text.length - 1;
      }
      var line = text.substring(lineStart, lineEnd + 1);
      lineStart = lineEnd + 1;

      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== undefined) {
        chars += String.fromCharCode(lineHash[line]);
      } else {
        chars += String.fromCharCode(lineArrayLength);
        lineHash[line] = lineArrayLength;
        lineArray[lineArrayLength++] = line;
      }
    }
    return chars;
  }

  var chars1 = diff_linesToCharsMunge(text1);
  var chars2 = diff_linesToCharsMunge(text2);
  return [chars1, chars2, lineArray];
};

/**
 * Rehydrate the text in a diff from a string of line hashes to real lines of
 * text.
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 * @param {Array.<string>} lineArray Array of unique strings.
 * @private
 */
diff_match_patch.prototype.diff_charsToLines = function (diffs, lineArray) {
  for (var x = 0; x < diffs.length; x++) {
    var chars = diffs[x][1];
    var text = [];
    for (var y = 0; y < chars.length; y++) {
      text[y] = lineArray[chars.charCodeAt(y)];
    }
    diffs[x][1] = text.join('');
  }
};

/**
 * Explore the intersection points between the two texts.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {?Array.<Array.<number|string>>} Array of diff tuples or null if no
 *     diff available.
 * @private
 */
diff_match_patch.prototype.diff_map = function (text1, text2) {
  // Don't run for too long.
  var ms_end = new Date().getTime() + this.Diff_Timeout * 1000;
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = text1_length + text2_length - 1;
  var doubleEnd = this.Diff_DualThreshold * 2 < max_d;
  // JavaScript efficiency note: (x << 32) + y doesn't work since numbers are
  // only 32 bit.  Use x + ',' + y to create a hash instead.
  var v_map1 = [];
  var v_map2 = [];
  var v1 = {};
  var v2 = {};
  v1[1] = 0;
  v2[1] = 0;
  var x, y;
  var footstep; // Used to track overlapping paths.
  var footsteps = {};
  var done = false;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (text1_length + text2_length) % 2;
  for (var d = 0; d < max_d; d++) {
    // Bail out if timeout reached.
    if (this.Diff_Timeout > 0 && new Date().getTime() > ms_end) {
      return null;
    }

    // Walk the front path one step.
    v_map1[d] = {};
    for (var k = -d; k <= d; k += 2) {
      if (k == -d || k != d && v1[k - 1] < v1[k + 1]) {
        x = v1[k + 1];
      } else {
        x = v1[k - 1] + 1;
      }
      y = x - k;
      if (doubleEnd) {
        footstep = x + ',' + y;
        if (front && footsteps[footstep] !== undefined) {
          done = true;
        }
        if (!front) {
          footsteps[footstep] = d;
        }
      }
      while (!done && x < text1_length && y < text2_length && text1.charAt(x) == text2.charAt(y)) {
        x++;
        y++;
        if (doubleEnd) {
          footstep = x + ',' + y;
          if (front && footsteps[footstep] !== undefined) {
            done = true;
          }
          if (!front) {
            footsteps[footstep] = d;
          }
        }
      }
      v1[k] = x;
      v_map1[d][x + ',' + y] = true;
      if (x == text1_length && y == text2_length) {
        // Reached the end in single-path mode.
        return this.diff_path1(v_map1, text1, text2);
      } else if (done) {
        // Front path ran over reverse path.
        v_map2 = v_map2.slice(0, footsteps[footstep] + 1);
        var a = this.diff_path1(v_map1, text1.substring(0, x), text2.substring(0, y));
        return a.concat(this.diff_path2(v_map2, text1.substring(x), text2.substring(y)));
      }
    }

    if (doubleEnd) {
      // Walk the reverse path one step.
      v_map2[d] = {};
      for (var k = -d; k <= d; k += 2) {
        if (k == -d || k != d && v2[k - 1] < v2[k + 1]) {
          x = v2[k + 1];
        } else {
          x = v2[k - 1] + 1;
        }
        y = x - k;
        footstep = text1_length - x + ',' + (text2_length - y);
        if (!front && footsteps[footstep] !== undefined) {
          done = true;
        }
        if (front) {
          footsteps[footstep] = d;
        }
        while (!done && x < text1_length && y < text2_length && text1.charAt(text1_length - x - 1) == text2.charAt(text2_length - y - 1)) {
          x++;
          y++;
          footstep = text1_length - x + ',' + (text2_length - y);
          if (!front && footsteps[footstep] !== undefined) {
            done = true;
          }
          if (front) {
            footsteps[footstep] = d;
          }
        }
        v2[k] = x;
        v_map2[d][x + ',' + y] = true;
        if (done) {
          // Reverse path ran over front path.
          v_map1 = v_map1.slice(0, footsteps[footstep] + 1);
          var a = this.diff_path1(v_map1, text1.substring(0, text1_length - x), text2.substring(0, text2_length - y));
          return a.concat(this.diff_path2(v_map2, text1.substring(text1_length - x), text2.substring(text2_length - y)));
        }
      }
    }
  }
  // Number of diffs equals number of characters, no commonality at all.
  return null;
};

/**
 * Work from the middle back to the start to determine the path.
 * @param {Array.<Object>} v_map Array of paths.
 * @param {string} text1 Old string fragment to be diffed.
 * @param {string} text2 New string fragment to be diffed.
 * @return {Array.<Array.<number|string>>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_path1 = function (v_map, text1, text2) {
  var path = [];
  var x = text1.length;
  var y = text2.length;
  /** @type {?number} */
  var last_op = null;
  for (var d = v_map.length - 2; d >= 0; d--) {
    while (1) {
      if (v_map[d][x - 1 + ',' + y] !== undefined) {
        x--;
        if (last_op === DIFF_DELETE) {
          path[0][1] = text1.charAt(x) + path[0][1];
        } else {
          path.unshift([DIFF_DELETE, text1.charAt(x)]);
        }
        last_op = DIFF_DELETE;
        break;
      } else if (v_map[d][x + ',' + (y - 1)] !== undefined) {
        y--;
        if (last_op === DIFF_INSERT) {
          path[0][1] = text2.charAt(y) + path[0][1];
        } else {
          path.unshift([DIFF_INSERT, text2.charAt(y)]);
        }
        last_op = DIFF_INSERT;
        break;
      } else {
        x--;
        y--;
        if (text1.charAt(x) != text2.charAt(y)) {
          throw new Error('No diagonal.  Can\'t happen. (diff_path1)');
        }
        if (last_op === DIFF_EQUAL) {
          path[0][1] = text1.charAt(x) + path[0][1];
        } else {
          path.unshift([DIFF_EQUAL, text1.charAt(x)]);
        }
        last_op = DIFF_EQUAL;
      }
    }
  }
  return path;
};

/**
 * Work from the middle back to the end to determine the path.
 * @param {Array.<Object>} v_map Array of paths.
 * @param {string} text1 Old string fragment to be diffed.
 * @param {string} text2 New string fragment to be diffed.
 * @return {Array.<Array.<number|string>>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_path2 = function (v_map, text1, text2) {
  var path = [];
  var pathLength = 0;
  var x = text1.length;
  var y = text2.length;
  /** @type {?number} */
  var last_op = null;
  for (var d = v_map.length - 2; d >= 0; d--) {
    while (1) {
      if (v_map[d][x - 1 + ',' + y] !== undefined) {
        x--;
        if (last_op === DIFF_DELETE) {
          path[pathLength - 1][1] += text1.charAt(text1.length - x - 1);
        } else {
          path[pathLength++] = [DIFF_DELETE, text1.charAt(text1.length - x - 1)];
        }
        last_op = DIFF_DELETE;
        break;
      } else if (v_map[d][x + ',' + (y - 1)] !== undefined) {
        y--;
        if (last_op === DIFF_INSERT) {
          path[pathLength - 1][1] += text2.charAt(text2.length - y - 1);
        } else {
          path[pathLength++] = [DIFF_INSERT, text2.charAt(text2.length - y - 1)];
        }
        last_op = DIFF_INSERT;
        break;
      } else {
        x--;
        y--;
        if (text1.charAt(text1.length - x - 1) != text2.charAt(text2.length - y - 1)) {
          throw new Error('No diagonal.  Can\'t happen. (diff_path2)');
        }
        if (last_op === DIFF_EQUAL) {
          path[pathLength - 1][1] += text1.charAt(text1.length - x - 1);
        } else {
          path[pathLength++] = [DIFF_EQUAL, text1.charAt(text1.length - x - 1)];
        }
        last_op = DIFF_EQUAL;
      }
    }
  }
  return path;
};

/**
 * Determine the common prefix of two strings
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
diff_match_patch.prototype.diff_commonPrefix = function (text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};

/**
 * Determine the common suffix of two strings
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
diff_match_patch.prototype.diff_commonSuffix = function (text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};

/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {?Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
diff_match_patch.prototype.diff_halfMatch = function (text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 10 || shorttext.length < 1) {
    return null; // Pointless.
  }
  var dmp = this; // 'this' becomes 'window' in a closure.

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext
   * @return {?Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i), shorttext.substring(j));
      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length >= longtext.length / 2) {
      return [best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI(longtext, shorttext, Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI(longtext, shorttext, Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};

/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupSemantic = function (diffs) {
  var changes = false;
  var equalities = []; // Stack of indices where equalities are found.
  var equalitiesLength = 0; // Keeping our own length var is faster in JS.
  var lastequality = null; // Always equal to equalities[equalitiesLength-1][1]
  var pointer = 0; // Index of current position.
  // Number of characters that changed prior to the equality.
  var length_changes1 = 0;
  // Number of characters that changed after the equality.
  var length_changes2 = 0;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {
      // equality found
      equalities[equalitiesLength++] = pointer;
      length_changes1 = length_changes2;
      length_changes2 = 0;
      lastequality = diffs[pointer][1];
    } else {
      // an insertion or deletion
      length_changes2 += diffs[pointer][1].length;
      if (lastequality !== null && lastequality.length <= length_changes1 && lastequality.length <= length_changes2) {
        // Duplicate record
        diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        // Throw away the equality we just deleted.
        equalitiesLength--;
        // Throw away the previous equality (it needs to be reevaluated).
        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_changes1 = 0; // Reset the counters.
        length_changes2 = 0;
        lastequality = null;
        changes = true;
      }
    }
    pointer++;
  }
  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
  this.diff_cleanupSemanticLossless(diffs);
};

/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupSemanticLossless = function (diffs) {
  // Define some regex patterns for matching boundaries.
  var punctuation = /[^a-zA-Z0-9]/;
  var whitespace = /\s/;
  var linebreak = /[\r\n]/;
  var blanklineEnd = /\n\r?\n$/;
  var blanklineStart = /^\r?\n\r?\n/;

  /**
   * Given two strings, compute a score representing whether the internal
   * boundary falls on logical boundaries.
   * Scores range from 5 (best) to 0 (worst).
   * Closure, makes reference to regex patterns defined above.
   * @param {string} one First string.
   * @param {string} two Second string.
   * @return {number} The score.
   */
  function diff_cleanupSemanticScore(one, two) {
    if (!one || !two) {
      // Edges are the best.
      return 5;
    }

    // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.
    var score = 0;
    // One point for non-alphanumeric.
    if (one.charAt(one.length - 1).match(punctuation) || two.charAt(0).match(punctuation)) {
      score++;
      // Two points for whitespace.
      if (one.charAt(one.length - 1).match(whitespace) || two.charAt(0).match(whitespace)) {
        score++;
        // Three points for line breaks.
        if (one.charAt(one.length - 1).match(linebreak) || two.charAt(0).match(linebreak)) {
          score++;
          // Four points for blank lines.
          if (one.match(blanklineEnd) || two.match(blanklineStart)) {
            score++;
          }
        }
      }
    }
    return score;
  }

  var pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      var equality1 = diffs[pointer - 1][1];
      var edit = diffs[pointer][1];
      var equality2 = diffs[pointer + 1][1];

      // First, shift the edit as far left as possible.
      var commonOffset = this.diff_commonSuffix(equality1, edit);
      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      }

      // Second, step character by character right, looking for the best fit.
      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore = diff_cleanupSemanticScore(equality1, edit) + diff_cleanupSemanticScore(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore(equality1, edit) + diff_cleanupSemanticScore(edit, equality2);
        // The >= encourages trailing rather than leading whitespace on edits.
        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }

      if (diffs[pointer - 1][1] != bestEquality1) {
        // We have an improvement, save it back to the diff.
        if (bestEquality1) {
          diffs[pointer - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer - 1, 1);
          pointer--;
        }
        diffs[pointer][1] = bestEdit;
        if (bestEquality2) {
          diffs[pointer + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer + 1, 1);
          pointer--;
        }
      }
    }
    pointer++;
  }
};

/**
 * Reduce the number of edits by eliminating operationally trivial equalities.
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupEfficiency = function (diffs) {
  var changes = false;
  var equalities = []; // Stack of indices where equalities are found.
  var equalitiesLength = 0; // Keeping our own length var is faster in JS.
  var lastequality = ''; // Always equal to equalities[equalitiesLength-1][1]
  var pointer = 0; // Index of current position.
  // Is there an insertion operation before the last equality.
  var pre_ins = false;
  // Is there a deletion operation before the last equality.
  var pre_del = false;
  // Is there an insertion operation after the last equality.
  var post_ins = false;
  // Is there a deletion operation after the last equality.
  var post_del = false;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {
      // equality found
      if (diffs[pointer][1].length < this.Diff_EditCost && (post_ins || post_del)) {
        // Candidate found.
        equalities[equalitiesLength++] = pointer;
        pre_ins = post_ins;
        pre_del = post_del;
        lastequality = diffs[pointer][1];
      } else {
        // Not a candidate, and can never become one.
        equalitiesLength = 0;
        lastequality = '';
      }
      post_ins = post_del = false;
    } else {
      // an insertion or deletion
      if (diffs[pointer][0] == DIFF_DELETE) {
        post_del = true;
      } else {
        post_ins = true;
      }
      /*
       * Five types to be split:
       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
       * <ins>A</ins>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<ins>C</ins>
       * <ins>A</del>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<del>C</del>
       */
      if (lastequality && (pre_ins && pre_del && post_ins && post_del || lastequality.length < this.Diff_EditCost / 2 && pre_ins + pre_del + post_ins + post_del == 3)) {
        // Duplicate record
        diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        equalitiesLength--; // Throw away the equality we just deleted;
        lastequality = '';
        if (pre_ins && pre_del) {
          // No changes made which could affect previous entry, keep going.
          post_ins = post_del = true;
          equalitiesLength = 0;
        } else {
          equalitiesLength--; // Throw away the previous equality;
          pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
          post_ins = post_del = false;
        }
        changes = true;
      }
    }
    pointer++;
  }

  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
};

/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupMerge = function (diffs) {
  diffs.push([DIFF_EQUAL, '']); // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete !== 0 || count_insert !== 0) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = this.diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = this.diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length - commonlength);
              text_delete = text_delete.substring(0, text_delete.length - commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop(); // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
};

/**
 * loc is a location in text1, compute and return the equivalent location in
 * text2.
 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 * @param {number} loc Location within text1.
 * @return {number} Location within text2.
 */
diff_match_patch.prototype.diff_xIndex = function (diffs, loc) {
  var chars1 = 0;
  var chars2 = 0;
  var last_chars1 = 0;
  var last_chars2 = 0;
  var x;
  for (x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {
      // Equality or deletion.
      chars1 += diffs[x][1].length;
    }
    if (diffs[x][0] !== DIFF_DELETE) {
      // Equality or insertion.
      chars2 += diffs[x][1].length;
    }
    if (chars1 > loc) {
      // Overshot the location.
      break;
    }
    last_chars1 = chars1;
    last_chars2 = chars2;
  }
  // Was the location was deleted?
  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
    return last_chars2;
  }
  // Add the remaining character length.
  return last_chars2 + (loc - last_chars1);
};

/**
 * Convert a diff array into a pretty HTML report.
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 * @return {string} HTML representation.
 */
diff_match_patch.prototype.diff_prettyHtml = function (diffs) {
  var html = [];
  var i = 0;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0]; // Operation (insert, delete, equal)
    var data = diffs[x][1]; // Text of change.
    var text = data.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '&para;<BR>');
    switch (op) {
      case DIFF_INSERT:
        html[x] = '<INS STYLE="background:#E6FFE6;" TITLE="i=' + i + '">' + text + '</INS>';
        break;
      case DIFF_DELETE:
        html[x] = '<DEL STYLE="background:#FFE6E6;" TITLE="i=' + i + '">' + text + '</DEL>';
        break;
      case DIFF_EQUAL:
        html[x] = '<SPAN TITLE="i=' + i + '">' + text + '</SPAN>';
        break;
    }
    if (op !== DIFF_DELETE) {
      i += data.length;
    }
  }
  return html.join('');
};

/**
 * Compute and return the source text (all equalities and deletions).
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 * @return {string} Source text.
 */
diff_match_patch.prototype.diff_text1 = function (diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {
      text[x] = diffs[x][1];
    }
  }
  return text.join('');
};

/**
 * Compute and return the destination text (all equalities and insertions).
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 * @return {string} Destination text.
 */
diff_match_patch.prototype.diff_text2 = function (diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_DELETE) {
      text[x] = diffs[x][1];
    }
  }
  return text.join('');
};

/**
 * Compute the Levenshtein distance; the number of inserted, deleted or
 * substituted characters.
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 * @return {number} Number of changes.
 */
diff_match_patch.prototype.diff_levenshtein = function (diffs) {
  var levenshtein = 0;
  var insertions = 0;
  var deletions = 0;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0];
    var data = diffs[x][1];
    switch (op) {
      case DIFF_INSERT:
        insertions += data.length;
        break;
      case DIFF_DELETE:
        deletions += data.length;
        break;
      case DIFF_EQUAL:
        // A deletion and an insertion is one substitution.
        levenshtein += Math.max(insertions, deletions);
        insertions = 0;
        deletions = 0;
        break;
    }
  }
  levenshtein += Math.max(insertions, deletions);
  return levenshtein;
};

/**
 * Crush the diff into an encoded string which describes the operations
 * required to transform text1 into text2.
 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
 * @param {Array.<Array.<number|string>>} diffs Array of diff tuples.
 * @return {string} Delta text.
 */
diff_match_patch.prototype.diff_toDelta = function (diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    switch (diffs[x][0]) {
      case DIFF_INSERT:
        text[x] = '+' + encodeURI(diffs[x][1]);
        break;
      case DIFF_DELETE:
        text[x] = '-' + diffs[x][1].length;
        break;
      case DIFF_EQUAL:
        text[x] = '=' + diffs[x][1].length;
        break;
    }
  }
  // Opera doesn't know how to encode char 0.
  return text.join('\t').replace(/\x00/g, '%00').replace(/%20/g, ' ');
};

/**
 * Given the original text1, and an encoded string which describes the
 * operations required to transform text1 into text2, compute the full diff.
 * @param {string} text1 Source string for the diff.
 * @param {string} delta Delta text.
 * @return {Array.<Array.<number|string>>} Array of diff tuples.
 * @throws {Error} If invalid input.
 */
diff_match_patch.prototype.diff_fromDelta = function (text1, delta) {
  var diffs = [];
  var diffsLength = 0; // Keeping our own length var is faster in JS.
  var pointer = 0; // Cursor in text1
  // Opera doesn't know how to decode char 0.
  delta = delta.replace(/%00/g, '\0');
  var tokens = delta.split(/\t/g);
  for (var x = 0; x < tokens.length; x++) {
    // Each token begins with a one character parameter which specifies the
    // operation of this token (delete, insert, equality).
    var param = tokens[x].substring(1);
    switch (tokens[x].charAt(0)) {
      case '+':
        try {
          diffs[diffsLength++] = [DIFF_INSERT, decodeURI(param)];
        } catch (ex) {
          // Malformed URI sequence.
          throw new Error('Illegal escape in diff_fromDelta: ' + param);
        }
        break;
      case '-':
      // Fall through.
      case '=':
        var n = parseInt(param, 10);
        if (isNaN(n) || n < 0) {
          throw new Error('Invalid number in diff_fromDelta: ' + param);
        }
        var text = text1.substring(pointer, pointer += n);
        if (tokens[x].charAt(0) == '=') {
          diffs[diffsLength++] = [DIFF_EQUAL, text];
        } else {
          diffs[diffsLength++] = [DIFF_DELETE, text];
        }
        break;
      default:
        // Blank tokens are ok (from a trailing \t).
        // Anything else is an error.
        if (tokens[x]) {
          throw new Error('Invalid diff operation in diff_fromDelta: ' + tokens[x]);
        }
    }
  }
  if (pointer != text1.length) {
    throw new Error('Delta length (' + pointer + ') does not equal source text length (' + text1.length + ').');
  }
  return diffs;
};

//  MATCH FUNCTIONS


/**
 * Locate the best instance of 'pattern' in 'text' near 'loc'.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 */
diff_match_patch.prototype.match_main = function (text, pattern, loc) {
  // Check for null inputs.
  if (text == null || pattern == null || loc == null) {
    throw new Error('Null input. (match_main)');
  }

  loc = Math.max(0, Math.min(loc, text.length));
  if (text == pattern) {
    // Shortcut (potentially not guaranteed by the algorithm)
    return 0;
  } else if (!text.length) {
    // Nothing to match.
    return -1;
  } else if (text.substring(loc, loc + pattern.length) == pattern) {
    // Perfect match at the perfect spot!  (Includes case of null pattern)
    return loc;
  } else {
    // Do a fuzzy compare.
    return this.match_bitap(text, pattern, loc);
  }
};

/**
 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
 * Bitap algorithm.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 * @private
 */
diff_match_patch.prototype.match_bitap = function (text, pattern, loc) {
  if (pattern.length > this.Match_MaxBits) {
    throw new Error('Pattern too long for this browser.');
  }

  // Initialise the alphabet.
  var s = this.match_alphabet(pattern);

  var dmp = this; // 'this' becomes 'window' in a closure.

  /**
   * Compute and return the score for a match with e errors and x location.
   * Accesses loc and pattern through being a closure.
   * @param {number} e Number of errors in match.
   * @param {number} x Location of match.
   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
   * @private
   */
  function match_bitapScore(e, x) {
    var accuracy = e / pattern.length;
    var proximity = Math.abs(loc - x);
    if (!dmp.Match_Distance) {
      // Dodge divide by zero error.
      return proximity ? 1.0 : accuracy;
    }
    return accuracy + proximity / dmp.Match_Distance;
  }

  // Highest score beyond which we give up.
  var score_threshold = this.Match_Threshold;
  // Is there a nearby exact match? (speedup)
  var best_loc = text.indexOf(pattern, loc);
  if (best_loc != -1) {
    score_threshold = Math.min(match_bitapScore(0, best_loc), score_threshold);
    // What about in the other direction? (speedup)
    best_loc = text.lastIndexOf(pattern, loc + pattern.length);
    if (best_loc != -1) {
      score_threshold = Math.min(match_bitapScore(0, best_loc), score_threshold);
    }
  }

  // Initialise the bit arrays.
  var matchmask = 1 << pattern.length - 1;
  best_loc = -1;

  var bin_min, bin_mid;
  var bin_max = pattern.length + text.length;
  var last_rd;
  for (var d = 0; d < pattern.length; d++) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from 'loc' we can stray at this
    // error level.
    bin_min = 0;
    bin_mid = bin_max;
    while (bin_min < bin_mid) {
      if (match_bitapScore(d, loc + bin_mid) <= score_threshold) {
        bin_min = bin_mid;
      } else {
        bin_max = bin_mid;
      }
      bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
    }
    // Use the result from this iteration as the maximum for the next.
    bin_max = bin_mid;
    var start = Math.max(1, loc - bin_mid + 1);
    var finish = Math.min(loc + bin_mid, text.length) + pattern.length;

    var rd = Array(finish + 2);
    rd[finish + 1] = (1 << d) - 1;
    for (var j = finish; j >= start; j--) {
      // The alphabet (s) is a sparse hash, so the following line generates
      // warnings.
      var charMatch = s[text.charAt(j - 1)];
      if (d === 0) {
        // First pass: exact match.
        rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
      } else {
        // Subsequent passes: fuzzy match.
        rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((last_rd[j + 1] | last_rd[j]) << 1 | 1) | last_rd[j + 1];
      }
      if (rd[j] & matchmask) {
        var score = match_bitapScore(d, j - 1);
        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (score <= score_threshold) {
          // Told you so.
          score_threshold = score;
          best_loc = j - 1;
          if (best_loc > loc) {
            // When passing loc, don't exceed our current distance from loc.
            start = Math.max(1, 2 * loc - best_loc);
          } else {
            // Already passed loc, downhill from here on in.
            break;
          }
        }
      }
    }
    // No hope for a (better) match at greater error levels.
    if (match_bitapScore(d + 1, loc) > score_threshold) {
      break;
    }
    last_rd = rd;
  }
  return best_loc;
};

/**
 * Initialise the alphabet for the Bitap algorithm.
 * @param {string} pattern The text to encode.
 * @return {Object} Hash of character locations.
 * @private
 */
diff_match_patch.prototype.match_alphabet = function (pattern) {
  var s = {};
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] = 0;
  }
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] |= 1 << pattern.length - i - 1;
  }
  return s;
};

//  PATCH FUNCTIONS


/**
 * Increase the context until it is unique,
 * but don't let the pattern expand beyond Match_MaxBits.
 * @param {patch_obj} patch The patch to grow.
 * @param {string} text Source text.
 * @private
 */
diff_match_patch.prototype.patch_addContext = function (patch, text) {
  if (text.length == 0) {
    return;
  }
  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
  var padding = 0;

  // Look for the first and last matches of pattern in text.  If two different
  // matches are found, increase the pattern length.
  while (text.indexOf(pattern) != text.lastIndexOf(pattern) && pattern.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin) {
    padding += this.Patch_Margin;
    pattern = text.substring(patch.start2 - padding, patch.start2 + patch.length1 + padding);
  }
  // Add one chunk for good luck.
  padding += this.Patch_Margin;

  // Add the prefix.
  var prefix = text.substring(patch.start2 - padding, patch.start2);
  if (prefix) {
    patch.diffs.unshift([DIFF_EQUAL, prefix]);
  }
  // Add the suffix.
  var suffix = text.substring(patch.start2 + patch.length1, patch.start2 + patch.length1 + padding);
  if (suffix) {
    patch.diffs.push([DIFF_EQUAL, suffix]);
  }

  // Roll back the start points.
  patch.start1 -= prefix.length;
  patch.start2 -= prefix.length;
  // Extend the lengths.
  patch.length1 += prefix.length + suffix.length;
  patch.length2 += prefix.length + suffix.length;
};

/**
 * Compute a list of patches to turn text1 into text2.
 * Use diffs if provided, otherwise compute it ourselves.
 * There are four ways to call this function, depending on what data is
 * available to the caller:
 * Method 1:
 * a = text1, b = text2
 * Method 2:
 * a = diffs
 * Method 3 (optimal):
 * a = text1, b = diffs
 * Method 4 (deprecated, use method 3):
 * a = text1, b = text2, c = diffs
 *
 * @param {string|Array.<Array.<number|string>>} a text1 (methods 1,3,4) or
 * Array of diff tuples for text1 to text2 (method 2).
 * @param {string|Array.<Array.<number|string>>} opt_b text2 (methods 1,4) or
 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
 * @param {string|Array.<Array.<number|string>>} opt_c Array of diff tuples for
 * text1 to text2 (method 4) or undefined (methods 1,2,3).
 * @return {Array.<patch_obj>} Array of patch objects.
 */
diff_match_patch.prototype.patch_make = function (a, opt_b, opt_c) {
  var text1, diffs;
  if (typeof a == 'string' && typeof opt_b == 'string' && typeof opt_c == 'undefined') {
    // Method 1: text1, text2
    // Compute diffs from text1 and text2.
    text1 = a;
    diffs = this.diff_main(text1, opt_b, true);
    if (diffs.length > 2) {
      this.diff_cleanupSemantic(diffs);
      this.diff_cleanupEfficiency(diffs);
    }
  } else if (a && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && typeof opt_b == 'undefined' && typeof opt_c == 'undefined') {
    // Method 2: diffs
    // Compute text1 from diffs.
    diffs = a;
    text1 = this.diff_text1(diffs);
  } else if (typeof a == 'string' && opt_b && (typeof opt_b === 'undefined' ? 'undefined' : _typeof(opt_b)) == 'object' && typeof opt_c == 'undefined') {
    // Method 3: text1, diffs
    text1 = a;
    diffs = opt_b;
  } else if (typeof a == 'string' && typeof opt_b == 'string' && opt_c && (typeof opt_c === 'undefined' ? 'undefined' : _typeof(opt_c)) == 'object') {
    // Method 4: text1, text2, diffs
    // text2 is not used.
    text1 = a;
    diffs = opt_c;
  } else {
    throw new Error('Unknown call format to patch_make.');
  }

  if (diffs.length === 0) {
    return []; // Get rid of the null case.
  }
  var patches = [];
  var patch = new patch_obj();
  var patchDiffLength = 0; // Keeping our own length var is faster in JS.
  var char_count1 = 0; // Number of characters into the text1 string.
  var char_count2 = 0; // Number of characters into the text2 string.
  // Start with text1 (prepatch_text) and apply the diffs until we arrive at
  // text2 (postpatch_text).  We recreate the patches one by one to determine
  // context info.
  var prepatch_text = text1;
  var postpatch_text = text1;
  for (var x = 0; x < diffs.length; x++) {
    var diff_type = diffs[x][0];
    var diff_text = diffs[x][1];

    if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
      // A new patch starts here.
      patch.start1 = char_count1;
      patch.start2 = char_count2;
    }

    switch (diff_type) {
      case DIFF_INSERT:
        patch.diffs[patchDiffLength++] = diffs[x];
        patch.length2 += diff_text.length;
        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text + postpatch_text.substring(char_count2);
        break;
      case DIFF_DELETE:
        patch.length1 += diff_text.length;
        patch.diffs[patchDiffLength++] = diffs[x];
        postpatch_text = postpatch_text.substring(0, char_count2) + postpatch_text.substring(char_count2 + diff_text.length);
        break;
      case DIFF_EQUAL:
        if (diff_text.length <= 2 * this.Patch_Margin && patchDiffLength && diffs.length != x + 1) {
          // Small equality inside a patch.
          patch.diffs[patchDiffLength++] = diffs[x];
          patch.length1 += diff_text.length;
          patch.length2 += diff_text.length;
        } else if (diff_text.length >= 2 * this.Patch_Margin) {
          // Time for a new patch.
          if (patchDiffLength) {
            this.patch_addContext(patch, prepatch_text);
            patches.push(patch);
            patch = new patch_obj();
            patchDiffLength = 0;
            // Unlike Unidiff, our patch lists have a rolling context.
            // http://code.google.com/p/google-diff-match-patch/wiki/Unidiff
            // Update prepatch text & pos to reflect the application of the
            // just completed patch.
            prepatch_text = postpatch_text;
            char_count1 = char_count2;
          }
        }
        break;
    }

    // Update the current character count.
    if (diff_type !== DIFF_INSERT) {
      char_count1 += diff_text.length;
    }
    if (diff_type !== DIFF_DELETE) {
      char_count2 += diff_text.length;
    }
  }
  // Pick up the leftover patch if not empty.
  if (patchDiffLength) {
    this.patch_addContext(patch, prepatch_text);
    patches.push(patch);
  }

  return patches;
};

/**
 * Given an array of patches, return another array that is identical.
 * @param {Array.<patch_obj>} patches Array of patch objects.
 * @return {Array.<patch_obj>} Array of patch objects.
 */
diff_match_patch.prototype.patch_deepCopy = function (patches) {
  // Making deep copies is hard in JavaScript.
  var patchesCopy = [];
  for (var x = 0; x < patches.length; x++) {
    var patch = patches[x];
    var patchCopy = new patch_obj();
    patchCopy.diffs = [];
    for (var y = 0; y < patch.diffs.length; y++) {
      patchCopy.diffs[y] = patch.diffs[y].slice();
    }
    patchCopy.start1 = patch.start1;
    patchCopy.start2 = patch.start2;
    patchCopy.length1 = patch.length1;
    patchCopy.length2 = patch.length2;
    patchesCopy[x] = patchCopy;
  }
  return patchesCopy;
};

/**
 * Merge a set of patches onto the text.  Return a patched text, as well
 * as a list of true/false values indicating which patches were applied.
 * @param {Array.<patch_obj>} patches Array of patch objects.
 * @param {string} text Old text.
 * @return {Array.<string|Array.<boolean>>} Two element Array, containing the
 *      new text and an array of boolean values.
 */
diff_match_patch.prototype.patch_apply = function (patches, text) {
  if (patches.length == 0) {
    return [text, []];
  }

  // Deep copy the patches so that no changes are made to originals.
  patches = this.patch_deepCopy(patches);

  var nullPadding = this.patch_addPadding(patches);
  text = nullPadding + text + nullPadding;

  this.patch_splitMax(patches);
  // delta keeps track of the offset between the expected and actual location
  // of the previous patch.  If there are patches expected at positions 10 and
  // 20, but the first patch was found at 12, delta is 2 and the second patch
  // has an effective expected position of 22.
  var delta = 0;
  var results = [];
  for (var x = 0; x < patches.length; x++) {
    var expected_loc = patches[x].start2 + delta;
    var text1 = this.diff_text1(patches[x].diffs);
    var start_loc;
    var end_loc = -1;
    if (text1.length > this.Match_MaxBits) {
      // patch_splitMax will only provide an oversized pattern in the case of
      // a monster delete.
      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits), expected_loc);
      if (start_loc != -1) {
        end_loc = this.match_main(text, text1.substring(text1.length - this.Match_MaxBits), expected_loc + text1.length - this.Match_MaxBits);
        if (end_loc == -1 || start_loc >= end_loc) {
          // Can't find valid trailing context.  Drop this patch.
          start_loc = -1;
        }
      }
    } else {
      start_loc = this.match_main(text, text1, expected_loc);
    }
    if (start_loc == -1) {
      // No match found.  :(
      results[x] = false;
      // Subtract the delta for this failed patch from subsequent patches.
      delta -= patches[x].length2 - patches[x].length1;
    } else {
      // Found a match.  :)
      results[x] = true;
      delta = start_loc - expected_loc;
      var text2;
      if (end_loc == -1) {
        text2 = text.substring(start_loc, start_loc + text1.length);
      } else {
        text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
      }
      if (text1 == text2) {
        // Perfect match, just shove the replacement text in.
        text = text.substring(0, start_loc) + this.diff_text2(patches[x].diffs) + text.substring(start_loc + text1.length);
      } else {
        // Imperfect match.  Run a diff to get a framework of equivalent
        // indices.
        var diffs = this.diff_main(text1, text2, false);
        if (text1.length > this.Match_MaxBits && this.diff_levenshtein(diffs) / text1.length > this.Patch_DeleteThreshold) {
          // The end points match, but the content is unacceptably bad.
          results[x] = false;
        } else {
          this.diff_cleanupSemanticLossless(diffs);
          var index1 = 0;
          var index2;
          for (var y = 0; y < patches[x].diffs.length; y++) {
            var mod = patches[x].diffs[y];
            if (mod[0] !== DIFF_EQUAL) {
              index2 = this.diff_xIndex(diffs, index1);
            }
            if (mod[0] === DIFF_INSERT) {
              // Insertion
              text = text.substring(0, start_loc + index2) + mod[1] + text.substring(start_loc + index2);
            } else if (mod[0] === DIFF_DELETE) {
              // Deletion
              text = text.substring(0, start_loc + index2) + text.substring(start_loc + this.diff_xIndex(diffs, index1 + mod[1].length));
            }
            if (mod[0] !== DIFF_DELETE) {
              index1 += mod[1].length;
            }
          }
        }
      }
    }
  }
  // Strip the padding off.
  text = text.substring(nullPadding.length, text.length - nullPadding.length);
  return [text, results];
};

/**
 * Add some padding on text start and end so that edges can match something.
 * Intended to be called only from within patch_apply.
 * @param {Array.<patch_obj>} patches Array of patch objects.
 * @return {string} The padding string added to each side.
 */
diff_match_patch.prototype.patch_addPadding = function (patches) {
  var paddingLength = this.Patch_Margin;
  var nullPadding = '';
  for (var x = 1; x <= paddingLength; x++) {
    nullPadding += String.fromCharCode(x);
  }

  // Bump all the patches forward.
  for (var x = 0; x < patches.length; x++) {
    patches[x].start1 += paddingLength;
    patches[x].start2 += paddingLength;
  }

  // Add some padding on start of first diff.
  var patch = patches[0];
  var diffs = patch.diffs;
  if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
    // Add nullPadding equality.
    diffs.unshift([DIFF_EQUAL, nullPadding]);
    patch.start1 -= paddingLength; // Should be 0.
    patch.start2 -= paddingLength; // Should be 0.
    patch.length1 += paddingLength;
    patch.length2 += paddingLength;
  } else if (paddingLength > diffs[0][1].length) {
    // Grow first equality.
    var extraLength = paddingLength - diffs[0][1].length;
    diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
    patch.start1 -= extraLength;
    patch.start2 -= extraLength;
    patch.length1 += extraLength;
    patch.length2 += extraLength;
  }

  // Add some padding on end of last diff.
  patch = patches[patches.length - 1];
  diffs = patch.diffs;
  if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
    // Add nullPadding equality.
    diffs.push([DIFF_EQUAL, nullPadding]);
    patch.length1 += paddingLength;
    patch.length2 += paddingLength;
  } else if (paddingLength > diffs[diffs.length - 1][1].length) {
    // Grow last equality.
    var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
    diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
    patch.length1 += extraLength;
    patch.length2 += extraLength;
  }

  return nullPadding;
};

/**
 * Look through the patches and break up any which are longer than the maximum
 * limit of the match algorithm.
 * @param {Array.<patch_obj>} patches Array of patch objects.
 */
diff_match_patch.prototype.patch_splitMax = function (patches) {
  for (var x = 0; x < patches.length; x++) {
    if (patches[x].length1 > this.Match_MaxBits) {
      var bigpatch = patches[x];
      // Remove the big old patch.
      patches.splice(x--, 1);
      var patch_size = this.Match_MaxBits;
      var start1 = bigpatch.start1;
      var start2 = bigpatch.start2;
      var precontext = '';
      while (bigpatch.diffs.length !== 0) {
        // Create one of several smaller patches.
        var patch = new patch_obj();
        var empty = true;
        patch.start1 = start1 - precontext.length;
        patch.start2 = start2 - precontext.length;
        if (precontext !== '') {
          patch.length1 = patch.length2 = precontext.length;
          patch.diffs.push([DIFF_EQUAL, precontext]);
        }
        while (bigpatch.diffs.length !== 0 && patch.length1 < patch_size - this.Patch_Margin) {
          var diff_type = bigpatch.diffs[0][0];
          var diff_text = bigpatch.diffs[0][1];
          if (diff_type === DIFF_INSERT) {
            // Insertions are harmless.
            patch.length2 += diff_text.length;
            start2 += diff_text.length;
            patch.diffs.push(bigpatch.diffs.shift());
            empty = false;
          } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 && patch.diffs[0][0] == DIFF_EQUAL && diff_text.length > 2 * patch_size) {
            // This is a large deletion.  Let it pass in one chunk.
            patch.length1 += diff_text.length;
            start1 += diff_text.length;
            empty = false;
            patch.diffs.push([diff_type, diff_text]);
            bigpatch.diffs.shift();
          } else {
            // Deletion or equality.  Only take as much as we can stomach.
            diff_text = diff_text.substring(0, patch_size - patch.length1 - this.Patch_Margin);
            patch.length1 += diff_text.length;
            start1 += diff_text.length;
            if (diff_type === DIFF_EQUAL) {
              patch.length2 += diff_text.length;
              start2 += diff_text.length;
            } else {
              empty = false;
            }
            patch.diffs.push([diff_type, diff_text]);
            if (diff_text == bigpatch.diffs[0][1]) {
              bigpatch.diffs.shift();
            } else {
              bigpatch.diffs[0][1] = bigpatch.diffs[0][1].substring(diff_text.length);
            }
          }
        }
        // Compute the head context for the next patch.
        precontext = this.diff_text2(patch.diffs);
        precontext = precontext.substring(precontext.length - this.Patch_Margin);
        // Append the end context for this patch.
        var postcontext = this.diff_text1(bigpatch.diffs).substring(0, this.Patch_Margin);
        if (postcontext !== '') {
          patch.length1 += postcontext.length;
          patch.length2 += postcontext.length;
          if (patch.diffs.length !== 0 && patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
            patch.diffs[patch.diffs.length - 1][1] += postcontext;
          } else {
            patch.diffs.push([DIFF_EQUAL, postcontext]);
          }
        }
        if (!empty) {
          patches.splice(++x, 0, patch);
        }
      }
    }
  }
};

/**
 * Take a list of patches and return a textual representation.
 * @param {Array.<patch_obj>} patches Array of patch objects.
 * @return {string} Text representation of patches.
 */
diff_match_patch.prototype.patch_toText = function (patches) {
  var text = [];
  for (var x = 0; x < patches.length; x++) {
    text[x] = patches[x];
  }
  return text.join('');
};

/**
 * Parse a textual representation of patches and return a list of patch objects.
 * @param {string} textline Text representation of patches.
 * @return {Array.<patch_obj>} Array of patch objects.
 * @throws {Error} If invalid input.
 */
diff_match_patch.prototype.patch_fromText = function (textline) {
  var patches = [];
  if (!textline) {
    return patches;
  }
  // Opera doesn't know how to decode char 0.
  textline = textline.replace(/%00/g, '\0');
  var text = textline.split('\n');
  var textPointer = 0;
  while (textPointer < text.length) {
    var m = text[textPointer].match(/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/);
    if (!m) {
      throw new Error('Invalid patch string: ' + text[textPointer]);
    }
    var patch = new patch_obj();
    patches.push(patch);
    patch.start1 = parseInt(m[1], 10);
    if (m[2] === '') {
      patch.start1--;
      patch.length1 = 1;
    } else if (m[2] == '0') {
      patch.length1 = 0;
    } else {
      patch.start1--;
      patch.length1 = parseInt(m[2], 10);
    }

    patch.start2 = parseInt(m[3], 10);
    if (m[4] === '') {
      patch.start2--;
      patch.length2 = 1;
    } else if (m[4] == '0') {
      patch.length2 = 0;
    } else {
      patch.start2--;
      patch.length2 = parseInt(m[4], 10);
    }
    textPointer++;

    while (textPointer < text.length) {
      var sign = text[textPointer].charAt(0);
      try {
        var line = decodeURI(text[textPointer].substring(1));
      } catch (ex) {
        // Malformed URI sequence.
        throw new Error('Illegal escape in patch_fromText: ' + line);
      }
      if (sign == '-') {
        // Deletion.
        patch.diffs.push([DIFF_DELETE, line]);
      } else if (sign == '+') {
        // Insertion.
        patch.diffs.push([DIFF_INSERT, line]);
      } else if (sign == ' ') {
        // Minor equality.
        patch.diffs.push([DIFF_EQUAL, line]);
      } else if (sign == '@') {
        // Start of next patch.
        break;
      } else if (sign === '') {
        // Blank line?  Whatever.
      } else {
        // WTF?
        throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
      }
      textPointer++;
    }
  }
  return patches;
};

/**
 * Class representing one patch operation.
 * @constructor
 */
function patch_obj() {
  /** @type {Array.<Array.<number|string>>} */
  this.diffs = [];
  /** @type {?number} */
  this.start1 = null;
  /** @type {?number} */
  this.start2 = null;
  /** @type {number} */
  this.length1 = 0;
  /** @type {number} */
  this.length2 = 0;
}

/**
 * Emmulate GNU diff's format.
 * Header: @@ -382,8 +481,9 @@
 * Indicies are printed as 1-based, not 0-based.
 * @return {string} The GNU diff string.
 */
patch_obj.prototype.toString = function () {
  var coords1, coords2;
  if (this.length1 === 0) {
    coords1 = this.start1 + ',0';
  } else if (this.length1 == 1) {
    coords1 = this.start1 + 1;
  } else {
    coords1 = this.start1 + 1 + ',' + this.length1;
  }
  if (this.length2 === 0) {
    coords2 = this.start2 + ',0';
  } else if (this.length2 == 1) {
    coords2 = this.start2 + 1;
  } else {
    coords2 = this.start2 + 1 + ',' + this.length2;
  }
  var text = ['@@ -' + coords1 + ' +' + coords2 + ' @@\n'];
  var op;
  // Escape the body of the patch with %xx notation.
  for (var x = 0; x < this.diffs.length; x++) {
    switch (this.diffs[x][0]) {
      case DIFF_INSERT:
        op = '+';
        break;
      case DIFF_DELETE:
        op = '-';
        break;
      case DIFF_EQUAL:
        op = ' ';
        break;
    }
    text[x + 1] = op + encodeURI(this.diffs[x][1]) + '\n';
  }
  // Opera doesn't know how to encode char 0.
  return text.join('').replace(/\x00/g, '%00').replace(/%20/g, ' ');
};

// Export these global variables so that they survive Google's JS compiler.
/*changed by lfborjas: changed `window` for `exports` to make it suitable for the node.js module conventions*/
exports['diff_match_patch'] = diff_match_patch;
exports['patch_obj'] = patch_obj;
exports['DIFF_DELETE'] = DIFF_DELETE;
exports['DIFF_INSERT'] = DIFF_INSERT;
exports['DIFF_EQUAL'] = DIFF_EQUAL;

/***/ }),

/***/ "./node_modules/gson-pointer/index.js":
/*!********************************************!*\
  !*** ./node_modules/gson-pointer/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.get = __webpack_require__(/*! ./lib/get */ "./node_modules/gson-pointer/lib/get.js");
exports.set = __webpack_require__(/*! ./lib/set */ "./node_modules/gson-pointer/lib/set.js");
exports.delete = __webpack_require__(/*! ./lib/delete */ "./node_modules/gson-pointer/lib/delete.js");
exports.join = __webpack_require__(/*! ./lib/join */ "./node_modules/gson-pointer/lib/join.js");
exports.split = __webpack_require__(/*! ./lib/split */ "./node_modules/gson-pointer/lib/split.js");

exports.isRoot = __webpack_require__(/*! ./lib/isRoot */ "./node_modules/gson-pointer/lib/isRoot.js");

/***/ }),

/***/ "./node_modules/gson-pointer/lib/delete.js":
/*!*************************************************!*\
  !*** ./node_modules/gson-pointer/lib/delete.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var split = __webpack_require__(/*! ./split */ "./node_modules/gson-pointer/lib/split.js");
var get = __webpack_require__(/*! ./get */ "./node_modules/gson-pointer/lib/get.js");
var removeUndefinedItems = __webpack_require__(/*! ./removeUndefinedItems */ "./node_modules/gson-pointer/lib/removeUndefinedItems.js");

function pointerDelete(data, pointer, keepArrayIndices) {
	var properties = split(pointer);
	var lastProperty = properties.pop();
	var target = get(data, properties);
	if (target) {
		delete target[lastProperty];
	}
	if (Array.isArray(target) && keepArrayIndices !== true) {
		removeUndefinedItems(target);
	}
	return data;
}

module.exports = pointerDelete;

/***/ }),

/***/ "./node_modules/gson-pointer/lib/get.js":
/*!**********************************************!*\
  !*** ./node_modules/gson-pointer/lib/get.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var split = __webpack_require__(/*! ./split */ "./node_modules/gson-pointer/lib/split.js");
var isRoot = __webpack_require__(/*! ./isRoot */ "./node_modules/gson-pointer/lib/isRoot.js");

function get(data, pointer, defaultValue) {
	if (pointer == null || data == null) {
		return defaultValue;
	}
	if (isRoot(pointer)) {
		return data;
	}
	var result = run(data, split(pointer));
	if (result === undefined) {
		return defaultValue;
	}
	return result;
}

function run(data, path) {
	var property = path.shift();
	if (data === undefined) {
		return;
	} else if (property !== undefined) {
		return run(data[property], path);
	}
	return data;
}

module.exports = get;

/***/ }),

/***/ "./node_modules/gson-pointer/lib/isRoot.js":
/*!*************************************************!*\
  !*** ./node_modules/gson-pointer/lib/isRoot.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isRoot(pointer) {
	return pointer === "#" || pointer === "";
};

/***/ }),

/***/ "./node_modules/gson-pointer/lib/join.js":
/*!***********************************************!*\
  !*** ./node_modules/gson-pointer/lib/join.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var split = __webpack_require__(/*! ./split */ "./node_modules/gson-pointer/lib/split.js");
var toString = Object.prototype.toString;
var simpleJoin = Array.prototype.join;
var matchMutlipleSlashes = /\/+/g;
var matchTildes = /~/g;
var matchSlashes = /\//g;

function joinList(list, isURI) {
	if (list.length === 0) {
		return isURI ? "#" : "";
	}

	var pointer = list.join("/");
	for (var i = 0, l = list.length; i < l; i += 1) {
		list[i] = list[i].replace(matchTildes, "~0").replace(matchSlashes, "~1");
		if (isURI) {
			list[i] = encodeURIComponent(list[i]);
		}
	}

	var pointer = (isURI ? "#/" : "/") + list.join("/");
	return pointer.replace(matchMutlipleSlashes, "/");
}

function join(firstPointer) {
	var result = [];
	if (Array.isArray(firstPointer)) {
		return joinList(firstPointer, arguments[1] === true);
	}

	// determine type of pointer
	var option = arguments[arguments.length - 1];
	var isURI = typeof option === "boolean" ? option : firstPointer && firstPointer[0] === "#";

	for (var i = 0, l = arguments.length; i < l; i += 1) {
		result.push.apply(result, split(arguments[i]));
	}

	// build final list of properties
	var pointer = [];
	for (var i = 0, l = result.length; i < l; i += 1) {
		if (result[i] === "..") {
			if (pointer.length === 0) {
				return isURI ? "#" : "";
			}
			pointer.pop();
		} else {
			pointer.push(result[i]);
		}
	}

	return joinList(pointer, isURI);
}

module.exports = join;

/***/ }),

/***/ "./node_modules/gson-pointer/lib/removeUndefinedItems.js":
/*!***************************************************************!*\
  !*** ./node_modules/gson-pointer/lib/removeUndefinedItems.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function removeUndefinedItems(array) {
	var i = 0;
	var skip = 0;
	while (i + skip < array.length) {
		if (array[i + skip] === undefined) {
			skip += 1;
		}
		array[i] = array[i + skip];
		i += 1;
	}
	array.length = array.length - skip;
	return array;
}

module.exports = removeUndefinedItems;

/***/ }),

/***/ "./node_modules/gson-pointer/lib/set.js":
/*!**********************************************!*\
  !*** ./node_modules/gson-pointer/lib/set.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var split = __webpack_require__(/*! ./split */ "./node_modules/gson-pointer/lib/split.js");
var isArray = /^\[.*\]$/;
var arrayIndex = /^\[(.+)\]$/;

function set(data, pointer, value) {
	if (pointer == null) {
		return data;
	}

	var properties = split(pointer);
	if (properties.length === 0) {
		return data;
	}

	if (data == null) {
		data = isArray.test(properties[0]) ? [] : {};
	}

	var key,
	    nextKeyIsArray,
	    current = data;
	while (properties.length > 1) {
		key = properties.shift();
		nextKeyIsArray = isArray.test(properties[0]);
		current = create(current, key, nextKeyIsArray);
	}
	key = properties.pop();
	addValue(current, key, value);
	return data;
}

function addValue(data, key, value) {
	var index;
	var keyAsIndex = key.match(arrayIndex);
	if (key === "[]" && Array.isArray(data)) {
		data.push(value);
	} else if (keyAsIndex) {
		index = keyAsIndex.pop();
		data[index] = value;
	} else {
		data[key] = value;
	}
}

function create(data, key, isArray) {
	if (data[key] != null) {
		return data[key];
	}
	var value = isArray ? [] : {};
	addValue(data, key, value);
	return value;
}

module.exports = set;

/***/ }),

/***/ "./node_modules/gson-pointer/lib/split.js":
/*!************************************************!*\
  !*** ./node_modules/gson-pointer/lib/split.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRoot = __webpack_require__(/*! ./isRoot */ "./node_modules/gson-pointer/lib/isRoot.js");

var matchSlashes = /~1/g;
var matchTildes = /~0/g;
var matchMutlipleSlashes = /\/+/g;
var matchPointerPrefixes = /(^[#/]*|\/+$)/g;

function sanitizeProperty(property) {
	return property.replace(matchSlashes, "/").replace(matchTildes, "~");
}

function sanitizeAndDecodeProperty(property) {
	return sanitizeProperty(decodeURIComponent(property));
}

function split(pointer) {
	if (pointer == null || typeof pointer !== "string" || isRoot(pointer)) {
		return Array.isArray(pointer) ? pointer : [];
	}
	var sanitize = pointer.indexOf("#") >= 0 ? sanitizeAndDecodeProperty : sanitizeProperty;
	pointer = pointer.replace(matchMutlipleSlashes, "/");
	pointer = pointer.replace(matchPointerPrefixes, "");

	var result = pointer.split("/");
	for (var i = 0, l = result.length; i < l; i += 1) {
		result[i] = sanitize(result[i]);
	}
	return result;
}

module.exports = split;

/***/ }),

/***/ "./node_modules/json-schema-library/index.js":
/*!***************************************************!*\
  !*** ./node_modules/json-schema-library/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    config: {
        strings: __webpack_require__(/*! ./lib/config/strings */ "./node_modules/json-schema-library/lib/config/strings.js")
    },
    cores: {
        Interface: __webpack_require__(/*! ./lib/cores/CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js"),
        Draft04: __webpack_require__(/*! ./lib/cores/Draft04 */ "./node_modules/json-schema-library/lib/cores/Draft04.js"), // core implementing draft04 specs
        JsonEditor: __webpack_require__(/*! ./lib/cores/JsonEditor */ "./node_modules/json-schema-library/lib/cores/JsonEditor.js") // adjusted core of draft04 to better support the json-editor
    },
    addSchema: __webpack_require__(/*! ./lib/addSchema */ "./node_modules/json-schema-library/lib/addSchema.js"),
    createCustomError: __webpack_require__(/*! ./lib/utils/createCustomError */ "./node_modules/json-schema-library/lib/utils/createCustomError.js"),
    addValidator: __webpack_require__(/*! ./lib/addValidator */ "./node_modules/json-schema-library/lib/addValidator.js"), // add validation for keyword, format, datatype and customize errors
    createSchemaOf: __webpack_require__(/*! ./lib/createSchemaOf */ "./node_modules/json-schema-library/lib/createSchemaOf.js"), // creates a simple schema based on the given data
    each: __webpack_require__(/*! ./lib/each */ "./node_modules/json-schema-library/lib/each.js"), // iterate over data, receiving each data-entry with its schema
    getSchema: __webpack_require__(/*! ./lib/getSchema */ "./node_modules/json-schema-library/lib/getSchema.js"), // get schema of data
    getChildSchemaSelection: __webpack_require__(/*! ./lib/getChildSchemaSelection */ "./node_modules/json-schema-library/lib/getChildSchemaSelection.js"), // get available child schemas
    getTemplate: __webpack_require__(/*! ./lib/getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js"), // create data based which validates the given schema
    getTypeOf: __webpack_require__(/*! ./lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js"), // returns the javascript datatype
    isValid: __webpack_require__(/*! ./lib/isValid */ "./node_modules/json-schema-library/lib/isValid.js"), // returns a boolean if the schema is valid
    iterateSchema: __webpack_require__(/*! ./lib/iterateSchema */ "./node_modules/json-schema-library/lib/iterateSchema.js"), // iterates over a json-schema
    SchemaService: __webpack_require__(/*! ./lib/SchemaService */ "./node_modules/json-schema-library/lib/SchemaService.js"),
    step: __webpack_require__(/*! ./lib/step */ "./node_modules/json-schema-library/lib/step.js"), // steps into a json-schema, returning the matching child-schema
    validate: __webpack_require__(/*! ./lib/validate */ "./node_modules/json-schema-library/lib/validate.js"), // validates data by a schema
    validateAsync: __webpack_require__(/*! ./lib/validateAsync */ "./node_modules/json-schema-library/lib/validateAsync.js") // async validation of data by a schema
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/SchemaService.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/SchemaService.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getSchema = __webpack_require__(/*! ./getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");
var Core = __webpack_require__(/*! ./cores/JsonEditor */ "./node_modules/json-schema-library/lib/cores/JsonEditor.js");
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

function copy(value) {
    return JSON.parse(JSON.stringify(value));
}

var SchemaService = function () {
    function SchemaService(schema, data) {
        _classCallCheck(this, SchemaService);

        this.core = new Core(schema);
        this.schema = schema;
        this.data = data;
        this.cache = {};
    }

    _createClass(SchemaService, [{
        key: "updateData",
        value: function updateData(data) {
            this.data = data;
            this.cache = {};
        }
    }, {
        key: "updateSchema",
        value: function updateSchema(schema) {
            this.schema = schema;
            this.core.rootSchema = schema;
            this.cache = {};
        }
    }, {
        key: "get",
        value: function get(pointer, data) {
            if (data) {
                // possibly separate entry point
                var _schema = getSchema(this.core, this.schema, data, pointer);
                return copy(_schema);
            }

            if (pointer === "#") {
                // root
                return this.schema;
            }

            if (this.cache[pointer]) {
                // return cached result
                return this.cache[pointer];
            }

            var parentPointer = gp.join(pointer, "..");
            var parentSchema = this.cache[parentPointer];
            if (parentSchema == null) {
                // store parent (major performance improvement if its within oneof)
                parentSchema = getSchema(this.core, this.schema, this.data, parentPointer);
                if (parentSchema.variableSchema !== true) {
                    this.cache[parentPointer] = copy(parentSchema);
                }
            }

            // step from parent to child
            var key = gp.split(pointer).pop();
            var schema = getSchema(this.core, this.cache[parentPointer], gp.get(this.data, parentPointer), key);
            schema = copy(schema);
            if (schema.variableSchema !== true) {
                this.cache[pointer] = schema;
            }
            return schema;
        }
    }]);

    return SchemaService;
}();

module.exports = SchemaService;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/addSchema.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/addSchema.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var remotes = __webpack_require__(/*! ../remotes */ "./node_modules/json-schema-library/remotes/index.js");
var precompile = __webpack_require__(/*! ./precompileSchema */ "./node_modules/json-schema-library/lib/precompileSchema.js");

module.exports = function addSchema(url, schema) {
    schema.id = schema.id || url;
    remotes[url] = precompile(null, schema);
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/addValidator.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/addValidator.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @throws Error
 * Adds a custom error. May override existing errors
 *
 * @param {Core} core
 * @param {String} errorId          - id of error @see /lib/validation/errors
 * @param {Function} errorCreator   - function returning an error-object @see /lib/utils/createCustomError
 */
function addError(core, errorId, errorCreator) {
    if (typeof errorCreator !== "function") {
        throw new Error("Error callback 'errorCreator' must be of type function. Received " + (typeof errorCreator === "undefined" ? "undefined" : _typeof(errorCreator)));
    }
    core.errors[errorId] = errorCreator;
}

/**
 * Adds a custom format validator. Existing format may not be overriden (may still be modified manually)
 * @param {Core} core
 * @param {String} formatType           - format type (i.e. `format: "html"`)
 * @param {Function} validationFunction - called with (core, schema, value, pointer)
 */
function addFormat(core, formatType, validationFunction) {
    if (typeof validationFunction !== "function") {
        throw new Error("Validation function expected. Received " + (typeof validationFunction === "undefined" ? "undefined" : _typeof(validationFunction)));
    }
    if (core.validateFormat[formatType] == null) {
        core.validateFormat[formatType] = validationFunction;
        return;
    }
    throw new Error("A format '" + formatType + "' is already registered to validation");
}

/**
 * Adds a custom keyword validation to a specific type. May not override existing keywords.
 *
 * @param {Core} core
 * @param {String} datatype             - valid datatype like "object", "array", "string", etc
 * @param {String} keyword              - The keyword to add, i.e. `minWidth: ...`
 * @param {Function} validationFunction - called with (core, schema, value, pointer)
 */
function addKeyword(core, datatype, keyword, validationFunction) {
    if (typeof validationFunction !== "function") {
        throw new Error("Validation function expected. Received " + (typeof validationFunction === "undefined" ? "undefined" : _typeof(validationFunction)));
    }
    if (core.typeKeywords[datatype] == null) {
        throw new Error("Unknown datatype " + datatype + ". Failed adding custom keyword validation.");
    }
    if (core.typeKeywords[datatype].includes(keyword) === false) {
        core.typeKeywords[datatype].push(keyword);
    }
    core.validateKeyword[keyword] = validationFunction;
}

module.exports = {
    error: addError,
    format: addFormat,
    keyword: addKeyword
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/config/settings.js":
/*!*****************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/config/settings.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    floatingPointPrecision: 10000,
    propertyBlacklist: ["_id"]
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/config/strings.js":
/*!****************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/config/strings.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint max-len: 0 */
module.exports = {
    // validation errors
    AdditionalItemsError: "Array at `{{pointer}}` may not have an additional item `{{key}}`",
    AdditionalPropertiesError: "Additional property `{{property}}` on `{{pointer}}` does not match schema `{{schema}}`",
    AnyOfError: "Value `{{value}}` at `{{pointer}}` does not match any schema of `{{anyOf}}`",
    EnumError: "Expected given value `{{value}}` in `{{pointer}}` to be one of `{{values}}`",
    FormatDateTimeError: "Value `{{value}}` at `{{pointer}}` is not a valid date-time",
    FormatEmailError: "Value `{{value}}` at `{{pointer}}` is not a valid email",
    FormatUrlError: "Value `{{value}}` at `{{pointer}}` is not a valid url",
    FormatUriError: "Value `{{value}}` at `{{pointer}}` is not a valid uri",
    FormatHostnameError: "Value `{{value}}` at `{{pointer}}` is not a valid hostname",
    FormatIPV4Error: "Value `{{value}}` at `{{pointer}}` is not a valid IPv4 address",
    FormatIPV6Error: "Value `{{value}}` at `{{pointer}}` is not a valid IPv6 address",
    FormatRegExError: "Value `{{value}}` at `{{pointer}}` is not a valid regular expression",
    MaximumError: "Value in `{{pointer}}` is `{{length}}`, but should be `{{maximum}}` at maximum",
    MaxItemsError: "Too many items in `{{pointer}}`, should be `{{maximum}}` at most, but got `{{length}}`",
    MaxLengthError: "Value `{{pointer}}` should have a maximum length of `{{maxLength}}`, but got `{{length}}`.",
    MaxPropertiesError: "Too many properties in `{{pointer}}`, should be `{{maximum}}` at most, but got `{{length}}`",
    MinimumError: "Value in `{{pointer}}` is `{{length}}`, but should be `{{minimum}}` at minimum",
    MinItemsError: "Too few items in `{{pointer}}`, should be at least `{{minimum}}`, but got `{{length}}`",
    MinLengthError: "Value `{{pointer}}` should have a minimum length of `{{minLength}}`, but got `{{length}}`.",
    MinPropertiesError: "Too few properties in `{{pointer}}`, should be at least `{{minimum}}`, but got `{{length}}`",
    MissingOneOfPropertyError: "Value at `{{pointer}}aroperty `{{property}}`",
    MissingDependencyError: "The required propery '{{missingProperty}}' in `{{pointer}}` is missing",
    MultipleOfError: "Expected `{{value}}` in `{{pointer}}` to be multiple of `{{multipleOf}}`",
    MultipleOneOfError: "Value `{{value}}` should not match multiple schemas in oneOf `{{matches}}`",
    NoAdditionalPropertiesError: "Additional property `{{property}}` in `{{pointer}}` is not allowed",
    NotError: "Value `{{value}}` at pointer should not match schema `{{not}}`",
    OneOfError: "Value `{{value}}` in `{{pointer}}` does not match any given oneof schema",
    OneOfPropertyError: "Failed finding a matching oneOfProperty schema in `{{pointer}}` where `{{property}}` matches `{{value}}`",
    PatternError: "Value in `{{pointer}}` should match `{{description}}`, but received `{{received}}`",
    PatternPropertiesError: "Property `{{key}}` does not match any patterns in `{{pointer}}`. Valid patterns are: {{patterns}}",
    RequiredPropertyError: "The required property `{{key}}` is missing at `{{pointer}}`",
    TypeError: "Expected `{{value}}` ({{received}}) in `{{pointer}}` to be of type `{{expected}}`",
    UndefinedValueError: "Value must not be undefined in `{{pointer}}`",
    UnknownPropertyError: "Could not find a valid schema for property `{{pointer}}` within object",
    UniqueItemsError: "Expected unique items in {{pointer}}: duplicate value `{{value}}` found at {{itemPointer}} and {{duplicatePointer}}",
    ValueNotEmptyError: "A value for `{{property}}` is required at `{{pointer}}`"
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/cores/CoreInterface.js":
/*!*********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/cores/CoreInterface.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var resolveRef = __webpack_require__(/*! ../resolveRef.withOverwrite */ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js");
var precompile = __webpack_require__(/*! ../precompileSchema */ "./node_modules/json-schema-library/lib/precompileSchema.js");

/* eslint no-unused-vars: 0 no-empty-function: 0 */
module.exports = function () {
    function CoreInterface(schema) {
        _classCallCheck(this, CoreInterface);

        this.setSchema(schema);
    }

    _createClass(CoreInterface, [{
        key: "each",
        value: function each(schema, data, callback) {
            var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

            return new Error("function 'each' is not implemented");
        }
    }, {
        key: "step",
        value: function step(key, schema, data) {
            var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

            return new Error("function 'step' is not implemented");
        }
    }, {
        key: "validate",
        value: function validate(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            return [new Error("function 'validate' is not implemented")];
        }
    }, {
        key: "isValid",
        value: function isValid(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            return new Error("function 'isValid' is not implemented");
        }
    }, {
        key: "resolveOneOf",
        value: function resolveOneOf(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            return new Error("function 'resolveOneOf' is not implemented");
        }
    }, {
        key: "resolveRef",
        value: function resolveRef(schema) {
            return new Error("function 'resolveRef' is not implemented");
        }
    }, {
        key: "getSchema",
        value: function getSchema(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            return new Error("function 'getSchema' is not implemented");
        }
    }, {
        key: "getTemplate",
        value: function getTemplate(schema, data) {
            return new Error("function 'getTemplate' is not implemented");
        }
    }, {
        key: "setSchema",
        value: function setSchema(schema) {
            this.rootSchema = schema;
        }
    }, {
        key: "rootSchema",
        get: function get() {
            return this.__rootSchema;
        },
        set: function set(rootSchema) {
            if (rootSchema == null) {
                return;
            }
            // initially resolve any $refs on rootschema (in case this is a reference to a remote or self-referenced schema)
            var schema = precompile(this, rootSchema);
            this.__rootSchema = resolveRef(schema, schema);
        }
    }]);

    return CoreInterface;
}();

/***/ }),

/***/ "./node_modules/json-schema-library/lib/cores/Draft04.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/cores/Draft04.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoreInterface = __webpack_require__(/*! ./CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js");
var _step = __webpack_require__(/*! ../step */ "./node_modules/json-schema-library/lib/step.js");
var _validate = __webpack_require__(/*! ../validate */ "./node_modules/json-schema-library/lib/validate.js");
var _resolveOneOf = __webpack_require__(/*! ../resolveOneOf.strict */ "./node_modules/json-schema-library/lib/resolveOneOf.strict.js");
var _resolveRef = __webpack_require__(/*! ../resolveRef.strict */ "./node_modules/json-schema-library/lib/resolveRef.strict.js");
var _getTemplate = __webpack_require__(/*! ../getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js");
var _getSchema = __webpack_require__(/*! ../getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");
var _each = __webpack_require__(/*! ../each */ "./node_modules/json-schema-library/lib/each.js");
var precompile = __webpack_require__(/*! ../precompileSchema */ "./node_modules/json-schema-library/lib/precompileSchema.js");

var Draft04Core = function (_CoreInterface) {
    _inherits(Draft04Core, _CoreInterface);

    function Draft04Core(schema) {
        _classCallCheck(this, Draft04Core);

        var _this = _possibleConstructorReturn(this, (Draft04Core.__proto__ || Object.getPrototypeOf(Draft04Core)).call(this, schema));

        _this.typeKeywords = JSON.parse(JSON.stringify(__webpack_require__(/*! ../validation/typeKeywordMapping */ "./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js")));
        _this.validateKeyword = _extends({}, __webpack_require__(/*! ../validation/keyword */ "./node_modules/json-schema-library/lib/validation/keyword.js"));
        _this.validateType = _extends({}, __webpack_require__(/*! ../validation/type */ "./node_modules/json-schema-library/lib/validation/type.js"));
        _this.validateFormat = _extends({}, __webpack_require__(/*! ../validation/format */ "./node_modules/json-schema-library/lib/validation/format.js"));
        _this.errors = _extends({}, __webpack_require__(/*! ../validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js"));
        return _this;
    }

    _createClass(Draft04Core, [{
        key: "each",
        value: function each(schema, data, callback) {
            var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

            _each(this, schema, data, callback, pointer);
        }
    }, {
        key: "step",
        value: function step(key, schema, data, pointer) {
            return _step(this, key, schema, data, pointer);
        }
    }, {
        key: "validate",
        value: function validate(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            schema = precompile(this, schema);
            return _validate(this, schema, data, pointer);
        }
    }, {
        key: "isValid",
        value: function isValid(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            return this.validate(schema, data, pointer).length === 0;
        }
    }, {
        key: "resolveOneOf",
        value: function resolveOneOf(schema, data, pointer) {
            return _resolveOneOf(this, schema, data, pointer);
        }
    }, {
        key: "resolveRef",
        value: function resolveRef(schema) {
            return _resolveRef(schema, this.rootSchema);
        }
    }, {
        key: "getSchema",
        value: function getSchema(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            return _getSchema(this, schema, data, pointer);
        }
    }, {
        key: "getTemplate",
        value: function getTemplate(schema, data) {
            return _getTemplate(this, schema, data, this.rootSchema);
        }
    }]);

    return Draft04Core;
}(CoreInterface);

module.exports = Draft04Core;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/cores/JsonEditor.js":
/*!******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/cores/JsonEditor.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoreInterface = __webpack_require__(/*! ./CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js");
var _step = __webpack_require__(/*! ../step */ "./node_modules/json-schema-library/lib/step.js");
var _validate = __webpack_require__(/*! ../validate */ "./node_modules/json-schema-library/lib/validate.js");
var _resolveOneOf = __webpack_require__(/*! ../resolveOneOf.fuzzy */ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js");
var _resolveRef = __webpack_require__(/*! ../resolveRef.withOverwrite */ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js");
var _getTemplate = __webpack_require__(/*! ../getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js");
var _getSchema = __webpack_require__(/*! ../getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");
var _each = __webpack_require__(/*! ../each */ "./node_modules/json-schema-library/lib/each.js");
var precompile = __webpack_require__(/*! ../precompileSchema */ "./node_modules/json-schema-library/lib/precompileSchema.js");

var JsonEditorCore = function (_CoreInterface) {
    _inherits(JsonEditorCore, _CoreInterface);

    function JsonEditorCore(schema) {
        _classCallCheck(this, JsonEditorCore);

        var _this = _possibleConstructorReturn(this, (JsonEditorCore.__proto__ || Object.getPrototypeOf(JsonEditorCore)).call(this, schema));

        _this.typeKeywords = JSON.parse(JSON.stringify(__webpack_require__(/*! ../validation/typeKeywordMapping */ "./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js")));
        _this.validateKeyword = _extends({}, __webpack_require__(/*! ../validation/keyword */ "./node_modules/json-schema-library/lib/validation/keyword.js"));
        // set properties required per default and prevent no duplicate errors.
        // This is required for fuzzy resolveOneOf
        // this.validateKeyword.properties = this.validateKeyword.propertiesRequired;
        // this.validateKeyword.required = this.validateKeyword.requiredNotEmpty;
        _this.validateType = _extends({}, __webpack_require__(/*! ../validation/type */ "./node_modules/json-schema-library/lib/validation/type.js"));
        _this.validateFormat = _extends({}, __webpack_require__(/*! ../validation/format */ "./node_modules/json-schema-library/lib/validation/format.js"));
        _this.errors = _extends({}, __webpack_require__(/*! ../validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js"));
        return _this;
    }

    _createClass(JsonEditorCore, [{
        key: "each",
        value: function each(schema, data, callback) {
            var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

            _each(this, schema, data, callback, pointer);
        }
    }, {
        key: "step",
        value: function step(key, schema, data, pointer) {
            return _step(this, key, schema, data, pointer);
        }
    }, {
        key: "validate",
        value: function validate(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            schema = precompile(this, schema);
            return _validate(this, schema, data, pointer);
        }
    }, {
        key: "isValid",
        value: function isValid(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            return this.validate(schema, data, pointer).length === 0;
        }
    }, {
        key: "resolveOneOf",
        value: function resolveOneOf(schema, data, pointer) {
            return _resolveOneOf(this, schema, data, pointer);
        }
    }, {
        key: "resolveRef",
        value: function resolveRef(schema) {
            return _resolveRef(schema, this.rootSchema);
        }
    }, {
        key: "getSchema",
        value: function getSchema(schema, data) {
            var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

            return _getSchema(this, schema, data, pointer);
        }
    }, {
        key: "getTemplate",
        value: function getTemplate(schema, data) {
            return _getTemplate(this, schema, data, this.rootSchema);
        }
    }]);

    return JsonEditorCore;
}(CoreInterface);

module.exports = JsonEditorCore;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/createSchemaOf.js":
/*!****************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/createSchemaOf.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

/**
 * Create a simple json schema for the given input data
 * @param  {Mixed} data     - data to get json schema for
 * @return {Object} schema
 */
function createSchemaOf(data) {
    var schema = {
        type: getTypeOf(data)
    };

    if (schema.type === "object") {
        schema.properties = {};
        Object.keys(data).forEach(function (key) {
            schema.properties[key] = createSchemaOf(data[key]);
        });
    }

    if (schema.type === "array" && data.length === 1) {
        schema.items = createSchemaOf(data[0]);
    } else if (schema.type === "array") {
        schema.items = data.map(createSchemaOf);
    }

    return schema;
}

module.exports = createSchemaOf;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/each.js":
/*!******************************************************!*\
  !*** ./node_modules/json-schema-library/lib/each.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

/**
 * Iterates over data, retrieving its schema
 *
 * @param  {CoreInterface} core - validator
 * @param  {Object} schema      - the schema matching the data
 * @param  {Mixed} data         - the data to iterate
 * @param  {Function} callback  - will be called with (schema, data, pointer) on each item
 * @param  {String} pointer     - pointer to given data
 */
function each(core, schema, data, callback) {
    var pointer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#";

    callback(schema, data, pointer);
    var dataType = getTypeOf(data);

    if (dataType === "object") {
        Object.keys(data).forEach(function (key) {
            var nextSchema = core.step(key, schema, data, pointer); // not save
            var next = data[key]; // save
            core.each(nextSchema, next, callback, pointer + "/" + key);
        });
    } else if (dataType === "array") {
        data.forEach(function (next, key) {
            var nextSchema = core.step(key, schema, data, pointer);
            core.each(nextSchema, next, callback, pointer + "/" + key);
        });
    }
}

module.exports = each;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/getChildSchemaSelection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/getChildSchemaSelection.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns a list of possible child-schemas for the given property key. In case of a oneOf selection, multiple schemas
 * could be added at the given property (e.g. item-index), thus an array of options is returned. In all other cases
 * a list with a single item will be returned
 *
 * @param  {Core} core      - core to use
 * @param  {Object} schema  - parent schema of following property
 * @param  {String} schema  - parent schema of following property
 * @return {[type]}        [description]
 */
module.exports = function getChildSchemaSelection(core, schema, property) {
    var result = core.step(property, schema, {}, "#");

    if (result.type === "error") {
        if (result.code === "one-of-error") {
            return result.data.oneOf;
        }
        return result;
    }

    return [result];
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/getSchema.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/getSchema.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var emptyObject = {};

/**
 * Returns the json-schema of a data-json-pointer.
 *
 *  Notes
 *      - Uses core.step to walk through data and schema
 *
 * @param  {CoreInterface} core
 * @param  {Object} schema      - the json schema (root)
 * @param  {Mixed} data         - the data object, which includes the json pointers value. This is optional, as long as
 *                                  no oneOf, anyOf, etc statement is part of the pointers schema
 * @param  {String} pointer     - json pointer in data to get the json schema for
 * @return {Object|Error} json schema object of the json-pointer or an error
 */
function getSchema(core, schema, data) {
    var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

    var frags = gp.split(pointer);
    return _get(core, schema, frags, pointer, data);
}

function _get(core, schema, frags, pointer) {
    var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : emptyObject;

    if (frags.length === 0) {
        return schema;
    }

    var key = frags.shift(); // step key
    schema = core.step(key, schema, data, pointer); // step schema
    if (schema && schema.type === "error") {
        return schema;
    }
    data = data[key]; // step data
    return _get(core, schema, frags, pointer + "/" + key, data);
}

module.exports = getSchema;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/getTemplate.js":
/*!*************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/getTemplate.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint quote-props: 0 */
var resolveOneOfFuzzy = __webpack_require__(/*! ./resolveOneOf.fuzzy */ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js");
var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

function convertValue(type, value) {
    if (type === "string") {
        return JSON.stringify(value);
    } else if (typeof value !== "string") {
        return null;
    }

    try {
        value = JSON.parse(value);
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === type) {
            return value;
        }
    } catch (e) {
        return null;
    }
}

/**
 * Create data object matching the given schema
 *
 * @param  {CoreInterface} core     - json schema core
 * @param  {Object} schema          - json schema
 * @param  {Mixed} [data]           - optional template data
 * @return {Mixed} created template data
 */
function getTemplate(core, schema, data) {
    if (schema == null) {
        throw new Error("geTemplate: missing schema for data", data);
    }

    if (schema.oneOf) {
        // find correct schema for data
        var resolvedSchema = resolveOneOfFuzzy(core, schema, data);
        if (data == null && resolvedSchema.type === "error") {
            schema = schema.oneOf[0];
        } else if (resolvedSchema.type === "error") {
            return resolvedSchema;
        } else {
            schema = resolvedSchema;
        }
    }

    // resolve $ref references
    schema = core.resolveRef(schema);

    if (schema.type == null) {
        console.warn("Invalid json-schema: missing property 'type' for " + (data && JSON.stringify(data)));
        return "";
    }

    if (data != null && getTypeOf(data) !== schema.type) {
        // reset invalid type
        // console.error("Schema does not match data", data, "schema:", schema);
        data = convertValue(schema.type, data);
    }

    // eslint-disable-next-line no-use-before-define
    if (TYPE[schema.type] == null) {
        throw new Error("Unsupported type '" + schema.type + " in " + JSON.stringify(schema) + "'");
    }

    // eslint-disable-next-line no-use-before-define
    return TYPE[schema.type](core, schema, data);
}

var TYPE = {
    "string": function string(core, schema, data) {
        return getDefault(schema, data, "");
    },
    "number": function number(core, schema, data) {
        return getDefault(schema, data, 0);
    },
    "integer": function integer(core, schema, data) {
        return getDefault(schema, data, 0);
    },
    "boolean": function boolean(core, schema, data) {
        return getDefault(schema, data, false);
    },
    "object": function object(core, schema, data) {
        var template = schema.default === undefined ? {} : schema.default;
        data = data || {};

        if (schema.properties) {
            Object.keys(schema.properties).forEach(function (key) {
                data[key] = core.getTemplate(schema.properties[key], data[key] == null ? template[key] : data[key]);
            });
        }

        return data;
    },
    "array": function array(core, schema, data) {
        var template = schema.default === undefined ? [] : schema.default;
        data = data || [];
        schema.minItems = schema.minItems || 0;
        if (schema.items == null) {
            return data;
        } else if (schema.items.oneOf && data.length === 0) {
            for (var i = 0; i < schema.minItems; i += 1) {
                data[i] = core.getTemplate(schema.items.oneOf[0], data[i] == null ? template[i] : data[i]);
            }
        } else if (schema.items.oneOf && data.length > 0) {
            var itemCount = Math.max(schema.minItems, data.length);
            for (var _i = 0; _i < itemCount; _i += 1) {
                var value = data[_i] == null ? template[_i] : data[_i];
                var one = resolveOneOfFuzzy(core, schema.items, value);
                if (one) {
                    data[_i] = core.getTemplate(one, value);
                } else {
                    data[_i] = value;
                }
            }
        } else if (schema.items.type) {
            for (var _i2 = 0; _i2 < schema.minItems; _i2 += 1) {
                data[_i2] = core.getTemplate(schema.items, data[_i2] == null ? template[_i2] : data[_i2]);
            }
        } else if (Array.isArray(schema.items)) {
            for (var _i3 = 0, l = Math.min(schema.minItems, schema.items.length); _i3 < l; _i3 += 1) {
                data[_i3] = core.getTemplate(schema.items[_i3], data[_i3] == null ? template[_i3] : data[_i3]);
            }
        }

        return data;
    }
};

function getDefault(schema, templateValue, initValue) {
    if (templateValue != null) {
        return templateValue;
    } else if (schema.default === undefined && Array.isArray(schema.enum)) {
        return schema.enum[0];
    } else if (schema.default === undefined) {
        return initValue;
    }
    return schema.default;
}

module.exports = getTemplate;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/getTypeOf.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/getTypeOf.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = Object.prototype.toString;

module.exports = function getTypeOf(value) {
    // eslint-disable-next-line newline-per-chained-call
    return toString.call(value).match(/\s([^\]]+)\]/).pop().toLowerCase();
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/isValid.js":
/*!*********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/isValid.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Test if the data is valid according to the given schema
 *
 * @param  {CoreInterface} core - validator
 * @param  {Schema} schema      - json schema
 * @param  {Mixed} value        - value to validate
 * @param  {String} [pointer]   - json pointer pointing to value
 * @return {Boolean} if schema does match given value
 */
module.exports = function isValid(core, schema, value) {
  var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

  return core.validate(schema, value, pointer).length === 0;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/iterateSchema.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/iterateSchema.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

function iterate(schema, callback, pointer, property) {
    var target = schema[property];
    if (schema == null || schema[property] == null) {
        return;
    }

    var type = getTypeOf(target);
    if (type !== "array" && type !== "object") {
        return;
    }

    var targetPointer = pointer + "/properties";
    if (type === "array") {
        target.forEach(function (ema, index) {
            return iterateSchema(ema, callback, targetPointer + "/" + index);
        });
        return;
    }

    Object.keys(target).forEach(function (prop) {
        return iterateSchema(target[prop], callback, targetPointer + "/" + prop);
    });
}

/**
 * Iterate over each property and item of a schema.
 *
 * @param  {Object}   schema    - schema to iterate
 * @param  {Function} callback  - callback executed with (schema)
 * @param  {String} pointer     - current pointer of schema
 */
function iterateSchema(schema, callback) {
    var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";

    callback(schema, pointer);

    // @todo resolve $ref and definitions
    iterate(schema, callback, pointer, "definitions");
    iterate(schema, callback, pointer, "oneOf");
    iterate(schema, callback, pointer, "anyOf");
    iterate(schema, callback, pointer, "allOf");
    iterate(schema, callback, pointer, "properties");

    if (schema.additionalProperties) {
        iterateSchema(schema.additionalProperties, callback, pointer + "/additionalProperties");
    }

    if (schema.items) {
        var type = getTypeOf(schema.items);

        if (type === "array") {
            iterate(schema, callback, pointer, "items");
        } else if (type === "object" && Array.isArray(schema.items.oneOf)) {
            iterate(schema.items, callback, pointer + "/items", "oneOf");
        } else if (type === "object") {
            iterateSchema(schema.items, callback, gp.join(pointer, "items"));
        }
    }

    if (schema.dependencies && getTypeOf(schema.dependencies) === "object") {
        Object.keys(schema.dependencies).forEach(function (property) {
            if (getTypeOf(schema.dependencies[property]) === "object") {
                iterateSchema(schema.dependencies[property], callback, pointer + "/dependencies/" + property);
            }
        });
    }
}

module.exports = iterateSchema;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/precompileSchema.js":
/*!******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/precompileSchema.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iterateSchema = __webpack_require__(/*! ./iterateSchema */ "./node_modules/json-schema-library/lib/iterateSchema.js");
var remotes = __webpack_require__(/*! ../remotes */ "./node_modules/json-schema-library/remotes/index.js");
var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

var isAbsoluteUrl = /^(https?|file):\/\//;

function getAbsoluteRef($ref) {
    var currentLocation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";

    var pointer = getPointer($ref);
    var url = $ref.replace(/#.*$/, "");
    if (url === "" && $ref[0] === "#" && isAbsoluteUrl.test(currentLocation)) {
        return "" + currentLocation + $ref;
    }
    if (!url) {
        return $ref;
    }
    if (isAbsoluteUrl.test(url)) {
        return "" + url + pointer;
    }
    if (isAbsoluteUrl.test(currentLocation)) {
        return "" + currentLocation.replace(/[^/]*$/, "") + url + pointer;
    }
    return $ref;
}

function getPointer($ref) {
    return $ref.includes("#") ? decodeURIComponent("#" + $ref.replace(/^.*#/, "")) : "";
}

function joinUrl(url) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    if (url == null) {
        return base;
    }
    if (isAbsoluteUrl.test(url)) {
        return url;
    }
    return base.replace(/\/[^/]*$/, "") + "/" + url.replace(/(^\/|\/$)/, "") + "/";
}

/**
 * Experimental precompilation of an input json-schema. It resolves scopes and remote relative $ref pointers, to prepare
 * for remote $ref resolution without requiring changes within api
 *
 * @param  {Core} core
 * @param  {Object} rootSchema
 * @return {Object} compiled copy of schema
 */
function precompileSchema(core, rootSchema) {
    if (rootSchema.__compiled) {
        return rootSchema;
    }
    rootSchema = JSON.parse(JSON.stringify(rootSchema));
    // a list of baseUrls to be retrieved from the current path. This prevents mixing up current baseUrls
    var baseUrls = {};

    iterateSchema(rootSchema, function (schema, pointer) {
        if (getTypeOf(schema) !== "object") {
            throw new Error("Invalid json-schema at " + pointer + ": " + JSON.stringify(schema, null, 2));
        }

        // json-schema pointers may not exactly match the parent (properties the target property/end of pointer), thus
        // we have to check both values, e.g. for #/properties/list (parent) and #/items/items (previous)
        var previousPointer = pointer.replace(/\/[^/]+$/, "");
        var parentPointer = pointer.replace(/\/[^/]+\/[^/]+$/, "");
        var scope = baseUrls[previousPointer] || baseUrls[parentPointer];

        var thisScope = joinUrl(schema.id, scope);
        if (schema.id) {
            schema.id = thisScope;
        } else {
            Object.defineProperty(schema, "id", { enumerable: false, value: thisScope });
        }

        if (scope !== schema.id) {
            remotes[schema.id] = schema;
        }

        if (schema.$ref) {
            schema.$ref = getAbsoluteRef(schema.$ref, schema.id);
        }

        baseUrls[pointer] = schema.id;
        Object.defineProperty(schema, "__compiled", { enumerable: false, value: true });
    });

    return rootSchema;
}

module.exports = precompileSchema;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js":
/*!********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");
var flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");
var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

/**
 * Returns a ranking for the data and given schema
 *
 * @param  {CoreInterface} core
 * @param  {Object} one     - json schema type: object
 * @param  {Object} data
 * @param  {String} pointer
 * @return {Number} ranking value (higher is better)
 */
function fuzzyObjectValue(core, one, data, pointer) {
    if (data == null || one.properties == null) {
        return -1;
    }

    var value = 0;
    var keys = Object.keys(one.properties);
    for (var i = 0; i < keys.length; i += 1) {
        var key = keys[i];
        if (data[key] != null && core.isValid(one.properties[key], data[key], pointer)) {
            value += 1;
        }
    }

    return value;
}

/**
 * Selects and returns a oneOf schema for the given data
 *
 * @param  {CoreInterface} core - validator
 * @param  {Object} schema      - current json schema containing property oneOf
 * @param  {Mixed} data
 * @param  {String} pointer     - json pointer to data
 * @return {Object|Error} oneOf schema or an error
 */
module.exports = function resolveOneOf(core, schema, data, pointer) {

    // !keyword: oneOfProperty
    // an additional `oneOfProperty` on the schema will exactly determine the oneOf value (if set in data)

    // @fixme
    // abort if no data is given an oneOfProperty is set (used by getChildSchemaSelection)
    // this case (data != null) should not be necessary
    if (data != null && schema.oneOfProperty) {

        var errors = [];
        var oneOfProperty = schema.oneOfProperty;
        var oneOfValue = data[schema.oneOfProperty];

        if (oneOfValue === undefined) {
            return core.errors.missingOneOfPropertyError({ property: oneOfProperty, pointer: pointer });
        }

        for (var i = 0; i < schema.oneOf.length; i += 1) {
            var one = core.resolveRef(schema.oneOf[i]);
            var oneOfPropertySchema = core.step(oneOfProperty, one, data, pointer);

            if (oneOfPropertySchema && oneOfPropertySchema.type === "error") {
                return oneOfPropertySchema;
            }

            var result = flattenArray(core.validate(oneOfPropertySchema, oneOfValue, pointer));
            result = result.filter(filter.errorOrPromise);

            if (result.length > 0) {
                errors.push.apply(errors, _toConsumableArray(result));
            } else {
                return schema.oneOf[i];
            }
        }

        return core.errors.oneOfPropertyError({ property: oneOfProperty, value: oneOfValue, pointer: pointer, errors: errors });
    }

    // keyword: oneOf
    var matches = [];
    for (var _i = 0; _i < schema.oneOf.length; _i += 1) {
        var _one = core.resolveRef(schema.oneOf[_i]);
        if (core.isValid(_one, data, pointer)) {
            matches.push(_one);
        }
    }

    if (matches.length === 1) {
        return matches[0];
    }

    // fuzzy match oneOf
    if (getTypeOf(data) === "object") {
        var schemaOfItem = void 0;
        var fuzzyGreatest = 0;

        for (var _i2 = 0; _i2 < schema.oneOf.length; _i2 += 1) {
            var _one2 = core.resolveRef(schema.oneOf[_i2]);
            var fuzzyValue = fuzzyObjectValue(core, _one2, data);

            if (fuzzyGreatest < fuzzyValue) {
                fuzzyGreatest = fuzzyValue;
                schemaOfItem = schema.oneOf[_i2];
            }
        }

        if (schemaOfItem === undefined) {
            return core.errors.oneOfError({ value: JSON.stringify(data), pointer: pointer, oneOf: schema.oneOf });
        }

        return schemaOfItem;
    }

    if (matches.length > 1) {
        return core.errors.multipleOneOfError({ matches: matches, data: data, pointer: pointer });
    }

    return core.errors.oneOfError({ value: JSON.stringify(data), pointer: pointer, oneOf: schema.oneOf });
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveOneOf.strict.js":
/*!*********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveOneOf.strict.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");
var flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");

/**
 * Selects and returns a oneOf schema for the given data
 *
 * @param  {CoreInterface} core - validator
 * @param  {Object} schema      - current json schema containing property oneOf
 * @param  {Mixed} data
 * @param  {String} pointer     - json pointer to data
 * @return {Object|Error} oneOf schema or an error
 */
module.exports = function resolveOneOf(core, schema, data, pointer) {
    var matches = [];
    var errors = [];
    for (var i = 0; i < schema.oneOf.length; i += 1) {
        var one = core.resolveRef(schema.oneOf[i]);

        var result = flattenArray(core.validate(one, data, pointer));
        result = result.filter(filter.errorOrPromise);

        if (result.length > 0) {
            errors.push.apply(errors, _toConsumableArray(result));
        } else {
            matches.push(one);
        }
    }

    if (matches.length === 1) {
        return matches[0];
    }
    if (matches.length > 1) {
        return core.errors.multipleOneOfError({ value: data, pointer: pointer, matches: matches });
    }

    return core.errors.oneOfError({ value: JSON.stringify(data), pointer: pointer, oneOf: schema.oneOf, errors: errors });
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveRef.strict.js":
/*!*******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveRef.strict.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var getTargetSchema = __webpack_require__(/*! ./utils/getTargetSchema */ "./node_modules/json-schema-library/lib/utils/getTargetSchema.js");
var ref = __webpack_require__(/*! ./utils/ref */ "./node_modules/json-schema-library/lib/utils/ref.js");

module.exports = function resolveRef(schema, rootSchema) {
    if (schema == null) {
        return {};
    }

    if (schema.$ref == null) {
        return schema;
    }

    var target = ref.getPointer(schema.$ref);
    var targetSchema = getTargetSchema(schema.$ref, rootSchema, rootSchema);
    var reference = gp.get(targetSchema, target);
    reference = resolveRef(reference, targetSchema); // resolve ref until completely resolved

    if (reference == null) {
        console.log("Error: Failed resolving reference " + schema.$ref + ".");
    }

    var result = _extends({}, reference);
    return result;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js":
/*!**************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var getTargetSchema = __webpack_require__(/*! ./utils/getTargetSchema */ "./node_modules/json-schema-library/lib/utils/getTargetSchema.js");
var ref = __webpack_require__(/*! ./utils/ref */ "./node_modules/json-schema-library/lib/utils/ref.js");

module.exports = function resolveRef(schema, rootSchema) {
    if (schema == null) {
        return {};
    }

    if (rootSchema == null) {
        throw new Error("Missing rootschema for", schema);
    }

    if (schema.$ref == null) {
        return schema;
    }

    var target = ref.getPointer(schema.$ref);
    var targetSchema = getTargetSchema(schema.$ref, rootSchema, rootSchema);
    var reference = gp.get(targetSchema, target);
    reference = resolveRef(reference, targetSchema); // resolve ref until completely resolved

    // @todo use this for forms. in draft04 any value in schema MUST be ignored
    var result = _extends({}, reference, schema);
    delete result.$ref;

    return result;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/step.js":
/*!******************************************************!*\
  !*** ./node_modules/json-schema-library/lib/step.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
var createSchemaOf = __webpack_require__(/*! ./createSchemaOf */ "./node_modules/json-schema-library/lib/createSchemaOf.js");
var errors = __webpack_require__(/*! ./validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js");

/**
 * Returns the json-schema of the given object property or array item.
 * e.g. it steps by one key into the data
 *
 *  This helper determines the location of the property within the schema (additional properties, oneOf, ...) and
 *  returns the correct schema.
 *
 * @param  {CoreInterface} core     - validator
 * @param  {String|Number} key      - property-name or array-index
 * @param  {Object} schema          - json schema of current data
 * @param  {Object|Array} data      - parent of key
 * @param  {String} pointer
 * @return {Object|Error} Schema or Error if failed resolving key
 */
function step(core, key, schema, data, pointer) {
    var expectedType = schema.type || getTypeOf(data);

    if (expectedType === "object" && Array.isArray(schema.oneOf)) {
        schema = core.resolveOneOf(schema, data, pointer);
        if (schema && schema.type === "error") {
            return schema;
        }
        if (schema && schema.properties[key] !== undefined) {
            return core.resolveRef(schema.properties[key]);
        }
        return errors.oneOfPropertyError({ property: key, value: data, pointer: pointer });
    }

    if (expectedType === "object" && !Array.isArray(schema.oneOf)) {
        var targetSchema = void 0;
        // step into object
        if (schema.properties && schema.properties[key] !== undefined) {
            targetSchema = core.resolveRef(schema.properties[key]);
        }
        // return any error
        if (targetSchema && targetSchema.type === "error") {
            return targetSchema;
        }
        // check if there is a oneOf selection, which must be resolved
        if (targetSchema && targetSchema.oneOf && Array.isArray(targetSchema.oneOf)) {
            // @special case: this is a mix of a schema and optional definitions
            // we resolve the schema here and add the original schema to `oneOfSchema`
            var resolvedSchema = core.resolveOneOf(targetSchema, data[key], pointer + "/" + key);
            resolvedSchema = JSON.parse(JSON.stringify(resolvedSchema));
            resolvedSchema.variableSchema = true;
            resolvedSchema.oneOfSchema = targetSchema;
            return resolvedSchema;
        }

        // resolved schema or error
        if (targetSchema) {
            return targetSchema;
        }

        // find matching property key
        if (getTypeOf(schema.patternProperties) === "object") {
            var regex = void 0;
            var patterns = Object.keys(schema.patternProperties);
            for (var i = 0, l = patterns.length; i < l; i += 1) {
                regex = new RegExp(patterns[i]);
                if (regex.test(key)) {
                    return schema.patternProperties[patterns[i]];
                }
            }
        }

        if (getTypeOf(schema.additionalProperties) === "object") {
            return schema.additionalProperties;
        } else if (schema.additionalProperties === true) {
            return createSchemaOf(data);
        }

        return errors.unknownPropertyError({ property: key, value: data, pointer: pointer });
    }

    if (expectedType === "array") {
        // oneOf
        if (schema.items && Array.isArray(schema.items.oneOf)) {
            return core.resolveOneOf(schema.items, data[key], pointer) || false;
        }
        // schema
        if (schema.items && getTypeOf(schema.items) === "object") {
            return core.resolveRef(schema.items);
        }
        // list of items
        if (schema.items && Array.isArray(schema.items)) {

            if (schema.items[key]) {
                return core.resolveRef(schema.items[key]);
            }

            if (schema.additionalItems === false) {
                return errors.additionalItemsError({ key: key, value: data[key], pointer: pointer });
            }

            if (schema.additionalItems === true || schema.additionalItems === undefined) {
                return createSchemaOf(data[key]);
            }

            if (getTypeOf(schema.additionalItems) === "object") {
                return schema.additionalItems;
            }

            throw new Error("Invalid schema " + JSON.stringify(schema, null, 4) + " for " + JSON.stringify(data, null, 4));
        }
        if (schema.additionalItems !== false && data[key]) {
            // @todo reevaluate: incomplete schema is created here
            // @todo support additionalItems: {schema}
            return createSchemaOf(data[key]);
        }

        return new Error("Invalid array schema for " + key + " at " + pointer);
    }

    // Here we might have a oneof selection
    // console.log("OneOf selection without type object?");
    return new Error("Unsupported schema type " + schema.type + " for key " + key);
}

module.exports = step;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/__.js":
/*!**********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/__.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strings = __webpack_require__(/*! ../config/strings */ "./node_modules/json-schema-library/lib/config/strings.js");
var render = __webpack_require__(/*! ./render */ "./node_modules/json-schema-library/lib/utils/render.js");

/**
 * Renders the given string as defined in __@see config/strings.js__
 * @param  {String} keyword
 * @param  {Object} data        - template data
 * @param  {String} fallback    - fallback template
 * @return {String} resultugn string
 */
module.exports = function __(keyword, data) {
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : keyword;

  var template = strings[keyword] || fallback;
  return render(template, data);
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/createCustomError.js":
/*!*************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/createCustomError.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __ = __webpack_require__(/*! ./__ */ "./node_modules/json-schema-library/lib/utils/__.js");

function dashCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Creates a custom Error-Constructor which instances may be identified by `customError instanceof Error`. Its messages
 * are defined by strings-object __@see config/strings.js__sa
 * @param  {String} name    - id of error (camelcased)
 * @return {Function} Error-Contructor
 */
module.exports = function createCustomError(name) {
    return function (data) {
        return {
            type: "error",
            name: name,
            code: dashCase(name),
            message: __(name, data),
            data: data
        };
    };

    // function CustomError(data) {
    //     const message = __(name, data);
    //     const error = Error.call(this, message);
    //     this.name = name;
    //     this.code = dashCase(name);
    //     this.stack = error.stack;
    //     this.message = message;
    //     this.data = data;
    // }
    // CustomError.prototype = Object.create(Error.prototype);
    // CustomError.prototype.name = name;
    // return CustomError;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/filter.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isPromise(obj) {
    return obj instanceof Promise;
}

function isError(obj) {
    return obj && obj.type === "error";
}

module.exports = {
    isError: isError,
    isPromise: isPromise,
    errorOrPromise: function errorOrPromise(error) {
        return isError(error) || isPromise(error);
    },
    errorsOnly: function errorsOnly(error) {
        return isError(error);
    }
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/flattenArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/flattenArray.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function flattenArray(list) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    for (var i = 0; i < list.length; i += 1) {
        if (Array.isArray(list[i])) {
            flattenArray(list[i], result);
        } else {
            result.push(list[i]);
        }
    }
    return result;
}

module.exports = flattenArray;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/getTargetSchema.js":
/*!***********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/getTargetSchema.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var remotes = __webpack_require__(/*! ../../remotes */ "./node_modules/json-schema-library/remotes/index.js");
var ref = __webpack_require__(/*! ./ref */ "./node_modules/json-schema-library/lib/utils/ref.js");

// resolves remote references and returns either the input schema or the referenced remote schema
module.exports = function getTargetSchema($ref, schema) {
    var url = ref.getUrl($ref, schema.id);

    if (remotes[url]) {
        return remotes[url];
    } else if (url) {
        throw new Error("Unknown remote schema " + url + ". It should have been added to 'remotes'-module");
    }
    return schema;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js":
/*!***************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-bitwise: 0 */

/**
 * taken from punycode@2.1.0
 *
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while (counter < length) {
        var value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            var extra = string.charCodeAt(counter++);
            // eslint-disable-next-line eqeqeq
            if ((extra & 0xFC00) == 0xDC00) {
                // Low surrogate.
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
                // It's an unmatched surrogate; only append this code unit, in case the
                // next code unit is the high surrogate of a surrogate pair.
                output.push(value);
                counter--;
            }
        } else {
            output.push(value);
        }
    }
    return output;
}

module.exports = ucs2decode;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/ref.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/ref.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getHostname(url) {
    if (url == null || url.match == null) {
        return false;
    }
    var base = url.match(/(^(https?|file):\/\/[^\/]+)/);
    if (base && base.length) {
        return base[1];
    }
    return false;
}

// strips the url of the given reference
function getPointer(ref) {
    if (ref.indexOf("#") > 0) {
        return ref.split("#").pop();
    }

    if (/^(http|https|file):\/\//.test(ref)) {
        return "";
    }

    return ref;
}

// strips the pointer from the json-schema-pointer
function getUrl(ref) {
    var resourcePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    if (ref.indexOf("#") > 0) {
        var url = ref.split("#").shift();
        var hostname = getHostname(resourcePath);

        if (/^(http|https|file):\/\//.test(url) === false && hostname !== false) {
            return hostname + "/" + url.replace(/^\//, "");
        }

        return url;
    }

    if (/^(http|https|file):\/\//.test(ref)) {
        return ref;
    }

    return false;
}

module.exports = {
    getPointer: getPointer,
    getUrl: getUrl
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/render.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/render.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Renders data into a string by {{variables}}.
 * Given a template string, removes all {{property}} substrings and replaces them with the property in the given data
 *
 * @param {String} template     - template string containing variables in handelbars/mustache style
 * @param {Object} data         - flat object containing properties matching variables
 * @return {String} rendered string
 */
module.exports = function render(template) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return template.replace(/\{\{\w+\}\}/g, function (match) {
    return data[match.replace(/[{}]/g, "")];
  });
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/validate.js":
/*!**********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validate.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
var filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");
var flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");

function getJsonSchemaType(value, expectedType) {
    var jsType = getTypeOf(value);

    if (jsType === "number" && (expectedType === "integer" || Array.isArray(expectedType) && expectedType.includes("integer"))) {
        jsType = Number.isInteger(value) ? "integer" : "number";
    }
    return jsType;
}

/**
 * Validate data by a json schema
 *
 * @param  {CoreInterface} core - validator
 * @param  {Schema} schema      - json schema
 * @param  {Mixed} value        - value to validate
 * @param  {String} [pointer]   - json pointer pointing to value (used for error-messages only)
 * @return {Array} list of errors or empty
 */
module.exports = function validate(core, schema, value) {
    var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

    if (schema.type === "error") {
        return [schema];
    }

    schema = core.resolveRef(schema);

    var receivedType = getJsonSchemaType(value, schema.type);
    var expectedType = schema.type || receivedType;

    if (receivedType !== expectedType && (!Array.isArray(expectedType) || !expectedType.includes(receivedType))) {
        return [core.errors.typeError({ received: receivedType, expected: expectedType, value: value, pointer: pointer })];
    }

    if (core.validateType[receivedType] == null) {
        return [core.errors.invalidTypeError({ receivedType: receivedType, pointer: pointer })];
    }

    var errors = flattenArray(core.validateType[receivedType](core, schema, value, pointer));
    // also promises may be passed along (validateAsync)
    return errors.filter(filter.errorOrPromise);
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/validateAsync.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validateAsync.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");
var flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");

function createErrorNotification(onError) {
    return function notifyError(error) {
        if (Array.isArray(error)) {
            error = flattenArray(error);
            error.forEach(notifyError);
            return error;
        }
        if (filter.isError(error)) {
            onError(error);
        }
        return error;
    };
}

/**
 * Validate data by a json schema
 *
 * @param  {CoreInterface} core     - validator
 * @param  {Schema} schema          - json schema
 * @param  {Mixed} value            - value to validate
 * @param  {String} [pointer]       - json pointer pointing to value
 * @param  {Function} [onError]     - will be called for each error as soon as it is resolved
 * @return {Array} list of errors or empty
 */
module.exports = function validateAsync(core, schema, value) {
    var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
    var onError = arguments[4];

    var errors = core.validate(schema, value, pointer);

    if (onError) {
        errors = flattenArray(errors);
        var notifyError = createErrorNotification(onError);
        for (var i = 0; i < errors.length; i += 1) {
            if (errors[i] instanceof Promise) {
                errors[i].then(notifyError);
            } else if (filter.isError(errors[i])) {
                onError(errors[i]);
            }
        }
    }

    return Promise.all(errors).then(flattenArray).then(function (resolvedErrors) {
        return resolvedErrors.filter(filter.errorsOnly);
    }).catch(function (e) {
        console.log("Failed resolving promises", e.message);
        console.log(e.stack);
        throw e;
    });
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/validation/errors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validation/errors.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 0 */
var createCustomError = __webpack_require__(/*! ../utils/createCustomError */ "./node_modules/json-schema-library/lib/utils/createCustomError.js");

var errors = {
    additionalItemsError: createCustomError("AdditionalItemsError"),
    additionalPropertiesError: createCustomError("AdditionalPropertiesError"),
    anyOfError: createCustomError("AnyOfError"),
    enumError: createCustomError("EnumError"),
    formatUrlError: createCustomError("FormatUrlError"),
    formatUriError: createCustomError("FormatUriError"),
    formatDateTimeError: createCustomError("FormatDateTimeError"),
    formatEmailError: createCustomError("FormatEmailError"),
    formatHostnameError: createCustomError("FormatHostnameError"),
    formatIPV4Error: createCustomError("FormatIPV4Error"),
    formatIPV6Error: createCustomError("FormatIPV6Error"),
    formatRegExError: createCustomError("FormatRegExError"),
    invalidSchemaError: createCustomError("InvalidSchemaError"),
    invalidTypeError: createCustomError("InvalidTypeError"),
    maximumError: createCustomError("MaximumError"),
    maxItemsError: createCustomError("MaxItemsError"),
    maxLengthError: createCustomError("MaxLengthError"),
    maxPropertiesError: createCustomError("MaxPropertiesError"),
    minimumError: createCustomError("MinimumError"),
    minItemsError: createCustomError("MinItemsError"),
    minLengthError: createCustomError("MinLengthError"),
    minPropertiesError: createCustomError("MinPropertiesError"),
    missingDependencyError: createCustomError("MissingDependencyError"),
    missingOneOfPropertyError: createCustomError("MissingOneOfPropertyError"),
    multipleOfError: createCustomError("MultipleOfError"),
    multipleOneOfError: createCustomError("MultipleOneOfError"),
    noAdditionalPropertiesError: createCustomError("NoAdditionalPropertiesError"),
    notError: createCustomError("NotError"),
    oneOfError: createCustomError("OneOfError"),
    oneOfPropertyError: createCustomError("OneOfPropertyError"),
    patternError: createCustomError("PatternError"),
    patternPropertiesError: createCustomError("PatternPropertiesError"),
    requiredPropertyError: createCustomError("RequiredPropertyError"),
    typeError: createCustomError("TypeError"),
    undefinedValueError: createCustomError("UndefinedValueError"),
    uniqueItemsError: createCustomError("UniqueItemsError"),
    unknownPropertyError: createCustomError("UnknownPropertyError"),
    valueNotEmptyError: createCustomError("ValueNotEmptyError")
};

module.exports = errors;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/validation/format.js":
/*!*******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validation/format.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-len */
var errors = __webpack_require__(/*! ./errors */ "./node_modules/json-schema-library/lib/validation/errors.js");
var validUrl = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");

// https://gist.github.com/marcelotmelo/b67f58a08bee6c2468f8
var isValidDateTime = new RegExp("^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([\+|\-]([01][0-9]|2[0-3]):[0-5][0-9]))$");
// https://stackoverflow.com/questions/23483855/javascript-regex-to-validate-ipv4-and-ipv6-address-no-hostnames
var isValidIPV4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
var isValidIPV6 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

// Default JSON-Schema formats: date-time, email, hostname, ipv4, ipv6, uri, uriref
var FormatValidation = {

    "date-time": function dateTime(core, schema, value, pointer) {
        if (value === "" || isValidDateTime.test(value)) {
            return undefined;
        }
        return errors.formatDateTimeError({ value: value, pointer: pointer });
    },

    email: function email(core, schema, value, pointer) {
        if (value === "" || value.includes("@")) {
            return undefined;
        }
        return errors.formatEmailError({ value: value, pointer: pointer });
    },

    hostname: function hostname(core, schema, value, pointer) {
        if (value === "" || /\./.test(value)) {
            return undefined;
        }
        return errors.formatHostnameError({ value: value, pointer: pointer });
    },

    ipv4: function ipv4(core, schema, value, pointer) {
        if (value === "" || isValidIPV4.test(value)) {
            return undefined;
        }
        return errors.formatIPV4Error({ value: value, pointer: pointer });
    },

    ipv6: function ipv6(core, schema, value, pointer) {
        if (value === "" || isValidIPV6.test(value)) {
            return undefined;
        }
        return errors.formatIPV6Error({ value: value, pointer: pointer });
    },

    regex: function regex(core, schema, value, pointer) {
        if (typeof value === "string" && /\\Z$/.test(value) === false) {
            return undefined;
        }
        return errors.formatRegExError({ value: value, pointer: pointer });
    },
    uri: function uri(core, schema, value, pointer) {
        if (value === "" || validUrl.isUri(value)) {
            return undefined;
        }
        return errors.formatUriError({ value: value, pointer: pointer });
    },

    url: function url(core, schema, value, pointer) {
        if (value === "" || validUrl.isWebUri(value)) {
            return undefined;
        }
        return errors.formatUrlError({ value: value, pointer: pointer });
    }
};

module.exports = FormatValidation;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/validation/keyword.js":
/*!********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validation/keyword.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getTypeOf = __webpack_require__(/*! ../getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
var ucs2decode = __webpack_require__(/*! ../utils/punycode.ucs2decode */ "./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js");
var settings = __webpack_require__(/*! ../config/settings */ "./node_modules/json-schema-library/lib/config/settings.js");
var FPP = settings.floatingPointPrecision;

// list of validation keywords: http://json-schema.org/latest/json-schema-validation.html#rfc.section.5
var KeywordValidation = {

    additionalProperties: function additionalProperties(core, schema, value, pointer) {
        if (schema.additionalProperties === true || schema.additionalProperties == null) {
            return undefined;
        }

        if (getTypeOf(schema.patternProperties) === "object" && schema.additionalProperties === false) {
            // this is an arrangement with patternProperties. patternProperties validate before additionalProperties:
            // https://spacetelescope.github.io/understanding-json-schema/reference/object.html#index-5
            return undefined;
        }

        var errors = [];
        var receivedProperties = Object.keys(value).filter(function (prop) {
            return settings.propertyBlacklist.includes(prop) === false;
        });
        var expectedProperties = Object.keys(schema.properties || {});

        if (getTypeOf(schema.patternProperties) === "object") {
            // filter received properties by matching patternProperties
            var patterns = Object.keys(schema.patternProperties).map(function (pattern) {
                return new RegExp(pattern);
            });
            receivedProperties = receivedProperties.filter(function (prop) {
                for (var i = 0; i < patterns.length; i += 1) {
                    if (patterns[i].test(prop)) {
                        return false; // remove
                    }
                }
                return true;
            });
        }

        // adds an error for each an unexpected property
        for (var i = 0, l = receivedProperties.length; i < l; i += 1) {
            var property = receivedProperties[i];
            if (expectedProperties.indexOf(property) === -1) {
                var isObject = _typeof(schema.additionalProperties) === "object";

                // additionalProperties { oneOf: [] }
                if (isObject && Array.isArray(schema.additionalProperties.oneOf)) {
                    var result = core.resolveOneOf(schema.additionalProperties, value[property], pointer + "/" + property);
                    if (result.type === "error") {
                        errors.push(core.errors.additionalPropertiesError({
                            schema: schema.additionalProperties,
                            property: receivedProperties[i],
                            properties: expectedProperties,
                            pointer: pointer,
                            // pass all validation errors
                            errors: result.data.errors
                        }));
                    } else {
                        errors.push(core.validate(result, value[property], pointer));
                    }

                    // additionalProperties {}
                } else if (isObject) {
                    if (core.validate(schema.additionalProperties, value[property], pointer).length !== 0) {
                        errors.push(core.errors.additionalPropertiesError({
                            schema: schema.additionalProperties,
                            property: receivedProperties[i],
                            properties: expectedProperties,
                            pointer: pointer
                        }));
                    }
                } else {
                    errors.push(core.errors.noAdditionalPropertiesError({ property: receivedProperties[i], properties: expectedProperties, pointer: pointer }));
                }
            }
        }

        return errors;
    },

    allOf: function allOf(core, schema, value, pointer) {
        if (Array.isArray(schema.allOf) === false) {
            return undefined;
        }

        var errors = [];
        schema.allOf.forEach(function (subSchema) {
            errors.push(core.validate(subSchema, value, pointer));
        });

        return errors;
    },

    anyOf: function anyOf(core, schema, value, pointer) {
        if (Array.isArray(schema.anyOf) === false) {
            return undefined;
        }

        for (var i = 0; i < schema.anyOf.length; i += 1) {
            if (core.isValid(schema.anyOf[i], value)) {
                return undefined;
            }
        }

        return core.errors.anyOfError({ anyOf: schema.anyOf, value: value, pointer: pointer });
    },

    dependencies: function dependencies(core, schema, value, pointer) {
        if (getTypeOf(schema.dependencies) !== "object") {
            return undefined;
        }

        var errors = [];
        Object.keys(value).forEach(function (property) {
            if (schema.dependencies[property] === undefined) {
                return;
            }

            var dependencyErrors = void 0;
            var type = getTypeOf(schema.dependencies[property]);
            if (type === "array") {
                dependencyErrors = schema.dependencies[property].filter(function (dependency) {
                    return value[dependency] === undefined;
                }).map(function (missingProperty) {
                    return core.errors.missingDependencyError({ missingProperty: missingProperty, pointer: pointer });
                });
            } else if (type === "object") {
                dependencyErrors = core.validate(schema.dependencies[property], value);
            } else {
                throw new Error("Invalid dependency definition for " + pointer + "/" + property + ". Must be list or schema");
            }

            errors.push.apply(errors, _toConsumableArray(dependencyErrors));
        });

        return errors.length > 0 ? errors : undefined;
    },

    "enum": function _enum(core, schema, value, pointer) {
        var type = getTypeOf(value);
        if (type === "object" || type === "array") {
            var valueStr = JSON.stringify(value);
            for (var i = 0; i < schema.enum.length; i += 1) {
                if (JSON.stringify(schema.enum[i]) === valueStr) {
                    return undefined;
                }
            }
        } else if (schema.enum.includes(value)) {
            return undefined;
        }
        return core.errors.enumError({ values: schema.enum, value: value, pointer: pointer });
    },
    format: function format(core, schema, value, pointer) {
        if (core.validateFormat[schema.format]) {
            var errors = core.validateFormat[schema.format](core, schema, value, pointer);
            return errors;
        }
        // fail silently if given format is not defined
        return undefined;
    },
    items: function items(core, schema, value, pointer) {
        var errors = [];
        for (var i = 0; i < value.length; i += 1) {
            var itemData = value[i];
            // @todo reevaluate: incomplete schema is created here
            var itemSchema = core.step(i, schema, value, pointer);

            if (itemSchema && itemSchema.type === "error") {
                return [itemSchema];
            }

            var itemErrors = core.validate(itemSchema, itemData, pointer + "/" + i);
            errors.push.apply(errors, _toConsumableArray(itemErrors));
        }

        return errors;
    },
    maximum: function maximum(core, schema, value, pointer) {
        if (isNaN(schema.maximum)) {
            return undefined;
        }
        if (schema.maximum && schema.maximum < value) {
            return core.errors.maximumError({ maximum: schema.maximum, length: value, pointer: pointer });
        }
        if (schema.maximum && schema.exclusiveMaximum === true && schema.maximum === value) {
            return core.errors.maximumError({ maximum: schema.maximum, length: value, pointer: pointer });
        }
        return undefined;
    },
    maxItems: function maxItems(core, schema, value, pointer) {
        if (isNaN(schema.maxItems)) {
            return undefined;
        }
        if (schema.maxItems < value.length) {
            return core.errors.maxItemsError({ maximum: schema.maxItems, length: value.length, pointer: pointer });
        }
        return undefined;
    },
    maxLength: function maxLength(core, schema, value, pointer) {
        if (isNaN(schema.maxLength)) {
            return undefined;
        }
        var lengthOfString = ucs2decode(value).length;
        if (schema.maxLength < lengthOfString) {
            return core.errors.maxLengthError({ maxLength: schema.maxLength, length: lengthOfString, pointer: pointer });
        }
        return undefined;
    },
    maxProperties: function maxProperties(core, schema, value, pointer) {
        var propertyCount = Object.keys(value).length;
        if (isNaN(schema.maxProperties) === false && schema.maxProperties < propertyCount) {
            return core.errors.maxPropertiesError({
                maxProperties: schema.maxProperties,
                length: propertyCount,
                pointer: pointer
            });
        }
        return undefined;
    },
    minLength: function minLength(core, schema, value, pointer) {
        if (isNaN(schema.minLength)) {
            return undefined;
        }
        var lengthOfString = ucs2decode(value).length;
        if (schema.minLength > lengthOfString) {
            return core.errors.minLengthError({ minLength: schema.minLength, length: lengthOfString, pointer: pointer });
        }
        return undefined;
    },
    minimum: function minimum(core, schema, value, pointer) {
        if (isNaN(schema.minimum)) {
            return undefined;
        }
        if (schema.minimum > value) {
            return core.errors.minimumError({ minimum: schema.minimum, length: value, pointer: pointer });
        }
        if (schema.exclusiveMinimum === true && schema.minimum === value) {
            return core.errors.minimumError({ minimum: schema.minimum, length: value, pointer: pointer });
        }
        return undefined;
    },
    minItems: function minItems(core, schema, value, pointer) {
        if (isNaN(schema.minItems)) {
            return undefined;
        }
        if (schema.minItems > value.length) {
            return core.errors.minItemsError({ minItems: schema.minItems, length: value.length, pointer: pointer });
        }
        return undefined;
    },
    minProperties: function minProperties(core, schema, value, pointer) {
        if (isNaN(schema.minProperties)) {
            return undefined;
        }
        var propertyCount = Object.keys(value).length;
        if (schema.minProperties > propertyCount) {
            return core.errors.minPropertiesError({
                minProperties: schema.minProperties,
                length: propertyCount, pointer: pointer
            });
        }
        return undefined;
    },
    multipleOf: function multipleOf(core, schema, value, pointer) {
        if (isNaN(schema.multipleOf)) {
            return undefined;
        }
        if (value * FPP % (schema.multipleOf * FPP) / FPP !== 0) {
            return core.errors.multipleOfError({ multipleOf: schema.multipleOf, value: value, pointer: pointer });
        }
        return undefined;
    },
    not: function not(core, schema, value, pointer) {
        var errors = [];
        if (core.validate(schema.not, value, pointer).length === 0) {
            errors.push(core.errors.notError({ value: value, not: schema.not, pointer: pointer }));
        }
        return errors;
    },
    oneOf: function oneOf(core, schema, value, pointer) {
        if (Array.isArray(schema.oneOf) === false) {
            return undefined;
        }

        schema = core.resolveOneOf(schema, value, pointer);
        if (schema && schema.type === "error") {
            return schema;
        }

        return undefined;
    },
    pattern: function pattern(core, schema, value, pointer) {
        if (new RegExp(schema.pattern).test(value) === false) {
            return core.errors.patternError({
                pattern: schema.pattern,
                description: schema.patternExample || schema.pattern,
                received: value, pointer: pointer
            });
        }
        return undefined;
    },
    patternProperties: function patternProperties(core, schema, value, pointer) {
        var properties = schema.properties || {};
        var pp = schema.patternProperties;
        if (getTypeOf(pp) !== "object") {
            return undefined;
        }

        var errors = [];
        var keys = Object.keys(value);
        var patterns = Object.keys(pp).map(function (expr) {
            return {
                regex: new RegExp(expr),
                patternSchema: pp[expr]
            };
        });

        keys.forEach(function (key) {
            var patternFound = false;

            for (var i = 0, l = patterns.length; i < l; i += 1) {
                if (patterns[i].regex.test(key)) {
                    patternFound = true;
                    var valErrors = core.validate(patterns[i].patternSchema, value[key], pointer + "/" + key);
                    if (valErrors && valErrors.length > 0) {
                        errors.push.apply(errors, _toConsumableArray(valErrors));
                    }
                }
            }

            if (properties[key]) {
                return;
            }

            if (patternFound === false && schema.additionalProperties === false) {
                // this is an arrangement with additionalProperties
                errors.push(core.errors.patternPropertiesError({
                    key: key, pointer: pointer, patterns: Object.keys(pp).join(",")
                }));
            }
        });

        return errors;
    },
    properties: function properties(core, schema, value, pointer) {
        var errors = [];
        var keys = Object.keys(schema.properties || {});
        for (var i = 0; i < keys.length; i += 1) {
            var key = keys[i];
            if (value[key] !== undefined) {
                var itemSchema = core.step(key, schema, value, pointer);
                var keyErrors = core.validate(itemSchema, value[key], pointer + "/" + key);
                errors.push.apply(errors, _toConsumableArray(keyErrors));
            }
        }
        return errors;
    },
    // @todo move to separate file: this is custom keyword validation for JsonEditor.properties keyword
    propertiesRequired: function propertiesRequired(core, schema, value, pointer) {
        var errors = [];
        var keys = Object.keys(schema.properties || {});
        for (var i = 0; i < keys.length; i += 1) {
            var key = keys[i];
            if (value[key] === undefined) {
                errors.push(core.errors.requiredPropertyError({ key: key, pointer: pointer }));
            } else {
                var itemSchema = core.step(key, schema, value, pointer);
                var keyErrors = core.validate(itemSchema, value[key], pointer + "/" + key);
                errors.push.apply(errors, _toConsumableArray(keyErrors));
            }
        }
        return errors;
    },
    required: function required(core, schema, value, pointer) {
        if (Array.isArray(schema.required) === false) {
            return undefined;
        }

        return schema.required.map(function (property) {
            if (value[property] === undefined) {
                return core.errors.requiredPropertyError({ key: property, pointer: pointer });
            }
            return undefined;
        });
    },
    // @todo move to separate file: this is custom keyword validation for JsonEditor.required keyword
    requiredNotEmpty: function requiredNotEmpty(core, schema, value, pointer) {
        if (Array.isArray(schema.required) === false) {
            return undefined;
        }

        return schema.required.map(function (property) {
            if (value[property] == null || value[property] === "") {
                return core.errors.valueNotEmptyError({ property: property, pointer: pointer + "/" + property });
            }
            return undefined;
        });
    },
    uniqueItems: function uniqueItems(core, schema, value, pointer) {
        if ((Array.isArray(value) && schema.uniqueItems) === false) {
            return undefined;
        }

        var errors = [];
        var map = {};
        value.forEach(function (item, index) {
            var id = JSON.stringify(item);
            var itemPointer = pointer + "/" + index;
            if (map[id]) {
                errors.push(core.errors.uniqueItemsError({
                    pointer: pointer,
                    itemPointer: map[id],
                    duplicatePointer: itemPointer,
                    value: id
                }));
            } else {
                map[id] = itemPointer;
            }
        });

        return errors;
    }
};

module.exports = KeywordValidation;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/validation/type.js":
/*!*****************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validation/type.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @todo: type is also a keyword, as is properties, items, etc
 *
 * An instance has one of six primitive types (http://json-schema.org/latest/json-schema-core.html#rfc.section.4.2)
 * or seven in case of ajv https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#type
 * 1 null, 2 boolean, 3 object, 4 array, 5 number, 6 string (7 integer)
 */
var TypeValidation = {

    array: function array(core, schema, value, pointer) {
        return core.typeKeywords.array.filter(function (key) {
            return schema && schema[key] != null;
        }).map(function (key) {
            return core.validateKeyword[key](core, schema, value, pointer);
        });
    },

    object: function object(core, schema, value, pointer) {
        return core.typeKeywords.object.filter(function (key) {
            return schema && schema[key] != null;
        }).map(function (key) {
            return core.validateKeyword[key](core, schema, value, pointer);
        });
    },

    string: function string(core, schema, value, pointer) {
        return core.typeKeywords.string.filter(function (key) {
            return schema && schema[key] != null;
        }).map(function (key) {
            return core.validateKeyword[key](core, schema, value, pointer);
        });
    },

    integer: function integer(core, schema, value, pointer) {
        return core.typeKeywords.number.filter(function (key) {
            return schema && schema[key] != null;
        }).map(function (key) {
            return core.validateKeyword[key](core, schema, value, pointer);
        });
    },

    number: function number(core, schema, value, pointer) {
        return core.typeKeywords.number.filter(function (key) {
            return schema && schema[key] != null;
        }).map(function (key) {
            return core.validateKeyword[key](core, schema, value, pointer);
        });
    },

    "boolean": function boolean(core, schema, value, pointer) {
        return core.typeKeywords.boolean.filter(function (key) {
            return schema && schema[key] != null;
        }).map(function (key) {
            return core.validateKeyword[key](core, schema, value, pointer);
        });
    },

    "null": function _null(core, schema, value, pointer) {
        return core.typeKeywords.null.filter(function (key) {
            return schema && schema[key] != null;
        }).map(function (key) {
            return core.validateKeyword[key](core, schema, value, pointer);
        });
    }
};

module.exports = TypeValidation;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint quote-props: 0 */

/**
 * Mapping, used in type validation to iterate over type-specific keywords to validate
 *
 *  - overview https://epoberezkin.github.io/ajv/keywords.html
 *
 * @type {Object}
 */
module.exports = {
    array: ["enum", "items", "minItems", "maxItems", "uniqueItems", "not"],
    boolean: ["enum", "not"],
    object: ["additionalProperties", "dependencies", "enum", "format", "minProperties", "maxProperties", "patternProperties", "properties", "required", "not", "oneOf", "allOf", "anyOf"],
    string: ["enum", "format", "maxLength", "minLength", "pattern", "not", "oneOf", "allOf", "anyOf"],
    number: ["enum", "format", "maximum", "minimum", "multipleOf", "not", "oneOf", "allOf", "anyOf"],
    null: ["enum", "format", "not", "oneOf", "allOf", "anyOf"]
};

/***/ }),

/***/ "./node_modules/json-schema-library/remotes/draft04.json":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/remotes/draft04.json ***!
  \***************************************************************/
/*! exports provided: id, $schema, description, definitions, type, properties, dependencies, default */
/*! all exports used */
/***/ (function(module) {

module.exports = {"id":"http://json-schema.org/draft-04/schema#","$schema":"http://json-schema.org/draft-04/schema#","description":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"positiveInteger":{"type":"integer","minimum":0},"positiveIntegerDefault0":{"allOf":[{"$ref":"#/definitions/positiveInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"minItems":1,"uniqueItems":true}},"type":"object","properties":{"id":{"type":"string","format":"uri"},"$schema":{"type":"string","format":"uri"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"boolean","default":false},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"boolean","default":false},"maxLength":{"$ref":"#/definitions/positiveInteger"},"minLength":{"$ref":"#/definitions/positiveIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"$ref":"#/definitions/positiveInteger"},"minItems":{"$ref":"#/definitions/positiveIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"maxProperties":{"$ref":"#/definitions/positiveInteger"},"minProperties":{"$ref":"#/definitions/positiveIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"enum":{"type":"array","minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"dependencies":{"exclusiveMaximum":["maximum"],"exclusiveMinimum":["minimum"]},"default":{}};

/***/ }),

/***/ "./node_modules/json-schema-library/remotes/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/remotes/index.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "http://json-schema.org/draft-04/schema": __webpack_require__(/*! ./draft04.json */ "./node_modules/json-schema-library/remotes/draft04.json"),

    reset: function reset() {
        var _this = this;

        Object.keys(this).forEach(function (key) {
            if (typeof _this[key] !== "function" && key !== "http://json-schema.org/draft-04/schema") {
                delete _this[key];
            }
        });
    }
};

/***/ }),

/***/ "./node_modules/jsondiffpatch/public/external sync recursive ^\\.\\/.*$":
/*!******************************************************************!*\
  !*** ./node_modules/jsondiffpatch/public/external sync ^\.\/.*$ ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./diff_match_patch_uncompressed": "./node_modules/jsondiffpatch/public/external/diff_match_patch_uncompressed.js",
	"./diff_match_patch_uncompressed.js": "./node_modules/jsondiffpatch/public/external/diff_match_patch_uncompressed.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/jsondiffpatch/public/external sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/jsondiffpatch/public/external/diff_match_patch_uncompressed.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/jsondiffpatch/public/external/diff_match_patch_uncompressed.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Computes the difference between two texts to create a patch.
 * Applies the patch onto another text, allowing for errors.
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * Class containing the diff, match and patch methods.
 * @constructor
 */
function diff_match_patch() {

  // Defaults.
  // Redefine these in your program to override the defaults.

  // Number of seconds to map a diff before giving up (0 for infinity).
  this.Diff_Timeout = 1.0;
  // Cost of an empty edit operation in terms of edit characters.
  this.Diff_EditCost = 4;
  // At what point is no match declared (0.0 = perfection, 1.0 = very loose).
  this.Match_Threshold = 0.5;
  // How far to search for a match (0 = exact location, 1000+ = broad match).
  // A match this many characters away from the expected location will add
  // 1.0 to the score (0.0 is a perfect match).
  this.Match_Distance = 1000;
  // When deleting a large block of text (over ~64 characters), how close does
  // the contents have to match the expected contents. (0.0 = perfection,
  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
  // end points of a delete need to match.
  this.Patch_DeleteThreshold = 0.5;
  // Chunk size for context length.
  this.Patch_Margin = 4;

  // The number of bits in an int.
  this.Match_MaxBits = 32;
}

//  DIFF FUNCTIONS


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;

/** @typedef {!Array.<number|string>} */
diff_match_patch.Diff;

/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {boolean=} opt_checklines Optional speedup flag. If present and false,
 *     then don't run a line-level diff first to identify the changed areas.
 *     Defaults to true, which does a faster, slightly less optimal diff.
 * @param {number} opt_deadline Optional time when the diff should be complete
 *     by.  Used internally for recursive calls.  Users should set DiffTimeout
 *     instead.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 */
diff_match_patch.prototype.diff_main = function (text1, text2, opt_checklines, opt_deadline) {
  // Set a deadline by which time the diff must be complete.
  if (typeof opt_deadline == 'undefined') {
    if (this.Diff_Timeout <= 0) {
      opt_deadline = Number.MAX_VALUE;
    } else {
      opt_deadline = new Date().getTime() + this.Diff_Timeout * 1000;
    }
  }
  var deadline = opt_deadline;

  // Check for null inputs.
  if (text1 == null || text2 == null) {
    throw new Error('Null input. (diff_main)');
  }

  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  if (typeof opt_checklines == 'undefined') {
    opt_checklines = true;
  }
  var checklines = opt_checklines;

  // Trim off common prefix (speedup).
  var commonlength = this.diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = this.diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = this.diff_compute_(text1, text2, checklines, deadline);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  this.diff_cleanupMerge(diffs);
  return diffs;
};

/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {boolean} checklines Speedup flag.  If false, then don't run a
 *     line-level diff first to identify the changed areas.
 *     If true, then run a faster, slightly less optimal diff.
 * @param {number} deadline Time when the diff should be complete by.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_compute_ = function (text1, text2, checklines, deadline) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }
  longtext = shorttext = null; // Garbage collect.

  // Check to see if the problem can be split in two.
  var hm = this.diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
    var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  if (checklines && text1.length > 100 && text2.length > 100) {
    return this.diff_lineMode_(text1, text2, deadline);
  }

  return this.diff_bisect_(text1, text2, deadline);
};

/**
 * Do a quick line-level diff on both strings, then rediff the parts for
 * greater accuracy.
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} deadline Time when the diff should be complete by.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_lineMode_ = function (text1, text2, deadline) {
  // Scan the text on a line-by-line basis first.
  var a = this.diff_linesToChars_(text1, text2);
  text1 = /** @type {string} */a[0];
  text2 = /** @type {string} */a[1];
  var linearray = /** @type {!Array.<string>} */a[2];

  var diffs = this.diff_bisect_(text1, text2, deadline);

  // Convert the diff back to original text.
  this.diff_charsToLines_(diffs, linearray);
  // Eliminate freak matches (e.g. blank lines)
  this.diff_cleanupSemantic(diffs);

  // Rediff any replacement blocks, this time character-by-character.
  // Add a dummy entry at the end.
  diffs.push([DIFF_EQUAL, '']);
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete >= 1 && count_insert >= 1) {
          // Delete the offending records and add the merged ones.
          var a = this.diff_main(text_delete, text_insert, false, deadline);
          diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert);
          pointer = pointer - count_delete - count_insert;
          for (var j = a.length - 1; j >= 0; j--) {
            diffs.splice(pointer, 0, a[j]);
          }
          pointer = pointer + a.length;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
    pointer++;
  }
  diffs.pop(); // Remove the dummy entry at the end.

  return diffs;
};

/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} deadline Time at which to bail if not yet complete.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_bisect_ = function (text1, text2, deadline) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = delta % 2 != 0;
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Bail out if deadline is reached.
    if (new Date().getTime() > deadline) {
      break;
    }

    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};

/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @param {number} deadline Time at which to bail if not yet complete.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_bisectSplit_ = function (text1, text2, x, y, deadline) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = this.diff_main(text1a, text2a, false, deadline);
  var diffsb = this.diff_main(text1b, text2b, false, deadline);

  return diffs.concat(diffsb);
};

/**
 * Split two texts into an array of strings.  Reduce the texts to a string of
 * hashes where each Unicode character represents one line.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {!Array.<string|!Array.<string>>} Three element Array, containing the
 *     encoded text1, the encoded text2 and the array of unique strings.  The
 *     zeroth element of the array of unique strings is intentionally blank.
 * @private
 */
diff_match_patch.prototype.diff_linesToChars_ = function (text1, text2) {
  var lineArray = []; // e.g. lineArray[4] == 'Hello\n'
  var lineHash = {}; // e.g. lineHash['Hello\n'] == 4

  // '\x00' is a valid character, but various debuggers don't like it.
  // So we'll insert a junk entry to avoid generating a null character.
  lineArray[0] = '';

  /**
   * Split a text into an array of strings.  Reduce the texts to a string of
   * hashes where each Unicode character represents one line.
   * Modifies linearray and linehash through being a closure.
   * @param {string} text String to encode.
   * @return {string} Encoded string.
   * @private
   */
  function diff_linesToCharsMunge_(text) {
    var chars = '';
    // Walk the text, pulling out a substring for each line.
    // text.split('\n') would would temporarily double our memory footprint.
    // Modifying text would create many large strings to garbage collect.
    var lineStart = 0;
    var lineEnd = -1;
    // Keeping our own length variable is faster than looking it up.
    var lineArrayLength = lineArray.length;
    while (lineEnd < text.length - 1) {
      lineEnd = text.indexOf('\n', lineStart);
      if (lineEnd == -1) {
        lineEnd = text.length - 1;
      }
      var line = text.substring(lineStart, lineEnd + 1);
      lineStart = lineEnd + 1;

      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== undefined) {
        chars += String.fromCharCode(lineHash[line]);
      } else {
        chars += String.fromCharCode(lineArrayLength);
        lineHash[line] = lineArrayLength;
        lineArray[lineArrayLength++] = line;
      }
    }
    return chars;
  }

  var chars1 = diff_linesToCharsMunge_(text1);
  var chars2 = diff_linesToCharsMunge_(text2);
  return [chars1, chars2, lineArray];
};

/**
 * Rehydrate the text in a diff from a string of line hashes to real lines of
 * text.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @param {!Array.<string>} lineArray Array of unique strings.
 * @private
 */
diff_match_patch.prototype.diff_charsToLines_ = function (diffs, lineArray) {
  for (var x = 0; x < diffs.length; x++) {
    var chars = diffs[x][1];
    var text = [];
    for (var y = 0; y < chars.length; y++) {
      text[y] = lineArray[chars.charCodeAt(y)];
    }
    diffs[x][1] = text.join('');
  }
};

/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
diff_match_patch.prototype.diff_commonPrefix = function (text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};

/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
diff_match_patch.prototype.diff_commonSuffix = function (text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};

/**
 * Determine if the suffix of one string is the prefix of another.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of the first
 *     string and the start of the second string.
 * @private
 */
diff_match_patch.prototype.diff_commonOverlap_ = function (text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  // Eliminate the null case.
  if (text1_length == 0 || text2_length == 0) {
    return 0;
  }
  // Truncate the longer string.
  if (text1_length > text2_length) {
    text1 = text1.substring(text1_length - text2_length);
  } else if (text1_length < text2_length) {
    text2 = text2.substring(0, text1_length);
  }
  var text_length = Math.min(text1_length, text2_length);
  // Quick check for the worst case.
  if (text1 == text2) {
    return text_length;
  }

  // Start by looking for a single character match
  // and increase length until no match is found.
  // Performance analysis: http://neil.fraser.name/news/2010/11/04/
  var best = 0;
  var length = 1;
  while (true) {
    var pattern = text1.substring(text_length - length);
    var found = text2.indexOf(pattern);
    if (found == -1) {
      return best;
    }
    length += found;
    if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
      best = length;
      length++;
    }
  }
};

/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 * @private
 */
diff_match_patch.prototype.diff_halfMatch_ = function (text1, text2) {
  if (this.Diff_Timeout <= 0) {
    // Don't risk returning a non-optimal diff if we have unlimited time.
    return null;
  }
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null; // Pointless.
  }
  var dmp = this; // 'this' becomes 'window' in a closure.

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i), shorttext.substring(j));
      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};

/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupSemantic = function (diffs) {
  var changes = false;
  var equalities = []; // Stack of indices where equalities are found.
  var equalitiesLength = 0; // Keeping our own length var is faster in JS.
  /** @type {?string} */
  var lastequality = null; // Always equal to equalities[equalitiesLength-1][1]
  var pointer = 0; // Index of current position.
  // Number of characters that changed prior to the equality.
  var length_insertions1 = 0;
  var length_deletions1 = 0;
  // Number of characters that changed after the equality.
  var length_insertions2 = 0;
  var length_deletions2 = 0;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {
      // Equality found.
      equalities[equalitiesLength++] = pointer;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastequality = /** @type {string} */diffs[pointer][1];
    } else {
      // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_INSERT) {
        length_insertions2 += diffs[pointer][1].length;
      } else {
        length_deletions2 += diffs[pointer][1].length;
      }
      // Eliminate an equality that is smaller or equal to the edits on both
      // sides of it.
      if (lastequality !== null && lastequality.length <= Math.max(length_insertions1, length_deletions1) && lastequality.length <= Math.max(length_insertions2, length_deletions2)) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        // Throw away the equality we just deleted.
        equalitiesLength--;
        // Throw away the previous equality (it needs to be reevaluated).
        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0; // Reset the counters.
        length_deletions1 = 0;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastequality = null;
        changes = true;
      }
    }
    pointer++;
  }

  // Normalize the diff.
  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
  this.diff_cleanupSemanticLossless(diffs);

  // Find any overlaps between deletions and insertions.
  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
  //   -> <del>abc</del>xxx<ins>def</ins>
  // Only extract an overlap if it is as big as the edit ahead or behind it.
  pointer = 1;
  while (pointer < diffs.length) {
    if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
      var deletion = /** @type {string} */diffs[pointer - 1][1];
      var insertion = /** @type {string} */diffs[pointer][1];
      var overlap_length = this.diff_commonOverlap_(deletion, insertion);
      if (overlap_length >= deletion.length / 2 || overlap_length >= insertion.length / 2) {
        // Overlap found.  Insert an equality and trim the surrounding edits.
        diffs.splice(pointer, 0, [DIFF_EQUAL, insertion.substring(0, overlap_length)]);
        diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length);
        diffs[pointer + 1][1] = insertion.substring(overlap_length);
        pointer++;
      }
      pointer++;
    }
    pointer++;
  }
};

/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupSemanticLossless = function (diffs) {
  // Define some regex patterns for matching boundaries.
  var punctuation = /[^a-zA-Z0-9]/;
  var whitespace = /\s/;
  var linebreak = /[\r\n]/;
  var blanklineEnd = /\n\r?\n$/;
  var blanklineStart = /^\r?\n\r?\n/;

  /**
   * Given two strings, compute a score representing whether the internal
   * boundary falls on logical boundaries.
   * Scores range from 5 (best) to 0 (worst).
   * Closure, makes reference to regex patterns defined above.
   * @param {string} one First string.
   * @param {string} two Second string.
   * @return {number} The score.
   * @private
   */
  function diff_cleanupSemanticScore_(one, two) {
    if (!one || !two) {
      // Edges are the best.
      return 5;
    }

    // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.
    var score = 0;
    // One point for non-alphanumeric.
    if (one.charAt(one.length - 1).match(punctuation) || two.charAt(0).match(punctuation)) {
      score++;
      // Two points for whitespace.
      if (one.charAt(one.length - 1).match(whitespace) || two.charAt(0).match(whitespace)) {
        score++;
        // Three points for line breaks.
        if (one.charAt(one.length - 1).match(linebreak) || two.charAt(0).match(linebreak)) {
          score++;
          // Four points for blank lines.
          if (one.match(blanklineEnd) || two.match(blanklineStart)) {
            score++;
          }
        }
      }
    }
    return score;
  }

  var pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      var equality1 = /** @type {string} */diffs[pointer - 1][1];
      var edit = /** @type {string} */diffs[pointer][1];
      var equality2 = /** @type {string} */diffs[pointer + 1][1];

      // First, shift the edit as far left as possible.
      var commonOffset = this.diff_commonSuffix(equality1, edit);
      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      }

      // Second, step character by character right, looking for the best fit.
      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
        // The >= encourages trailing rather than leading whitespace on edits.
        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }

      if (diffs[pointer - 1][1] != bestEquality1) {
        // We have an improvement, save it back to the diff.
        if (bestEquality1) {
          diffs[pointer - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer - 1, 1);
          pointer--;
        }
        diffs[pointer][1] = bestEdit;
        if (bestEquality2) {
          diffs[pointer + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer + 1, 1);
          pointer--;
        }
      }
    }
    pointer++;
  }
};

/**
 * Reduce the number of edits by eliminating operationally trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupEfficiency = function (diffs) {
  var changes = false;
  var equalities = []; // Stack of indices where equalities are found.
  var equalitiesLength = 0; // Keeping our own length var is faster in JS.
  var lastequality = ''; // Always equal to equalities[equalitiesLength-1][1]
  var pointer = 0; // Index of current position.
  // Is there an insertion operation before the last equality.
  var pre_ins = false;
  // Is there a deletion operation before the last equality.
  var pre_del = false;
  // Is there an insertion operation after the last equality.
  var post_ins = false;
  // Is there a deletion operation after the last equality.
  var post_del = false;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {
      // Equality found.
      if (diffs[pointer][1].length < this.Diff_EditCost && (post_ins || post_del)) {
        // Candidate found.
        equalities[equalitiesLength++] = pointer;
        pre_ins = post_ins;
        pre_del = post_del;
        lastequality = diffs[pointer][1];
      } else {
        // Not a candidate, and can never become one.
        equalitiesLength = 0;
        lastequality = '';
      }
      post_ins = post_del = false;
    } else {
      // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_DELETE) {
        post_del = true;
      } else {
        post_ins = true;
      }
      /*
       * Five types to be split:
       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
       * <ins>A</ins>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<ins>C</ins>
       * <ins>A</del>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<del>C</del>
       */
      if (lastequality && (pre_ins && pre_del && post_ins && post_del || lastequality.length < this.Diff_EditCost / 2 && pre_ins + pre_del + post_ins + post_del == 3)) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        equalitiesLength--; // Throw away the equality we just deleted;
        lastequality = '';
        if (pre_ins && pre_del) {
          // No changes made which could affect previous entry, keep going.
          post_ins = post_del = true;
          equalitiesLength = 0;
        } else {
          equalitiesLength--; // Throw away the previous equality.
          pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
          post_ins = post_del = false;
        }
        changes = true;
      }
    }
    pointer++;
  }

  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
};

/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupMerge = function (diffs) {
  diffs.push([DIFF_EQUAL, '']); // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = this.diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = this.diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length - commonlength);
              text_delete = text_delete.substring(0, text_delete.length - commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop(); // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
};

/**
 * loc is a location in text1, compute and return the equivalent location in
 * text2.
 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @param {number} loc Location within text1.
 * @return {number} Location within text2.
 */
diff_match_patch.prototype.diff_xIndex = function (diffs, loc) {
  var chars1 = 0;
  var chars2 = 0;
  var last_chars1 = 0;
  var last_chars2 = 0;
  var x;
  for (x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {
      // Equality or deletion.
      chars1 += diffs[x][1].length;
    }
    if (diffs[x][0] !== DIFF_DELETE) {
      // Equality or insertion.
      chars2 += diffs[x][1].length;
    }
    if (chars1 > loc) {
      // Overshot the location.
      break;
    }
    last_chars1 = chars1;
    last_chars2 = chars2;
  }
  // Was the location was deleted?
  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
    return last_chars2;
  }
  // Add the remaining character length.
  return last_chars2 + (loc - last_chars1);
};

/**
 * Convert a diff array into a pretty HTML report.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} HTML representation.
 */
diff_match_patch.prototype.diff_prettyHtml = function (diffs) {
  var html = [];
  var i = 0;
  var pattern_amp = /&/g;
  var pattern_lt = /</g;
  var pattern_gt = />/g;
  var pattern_para = /\n/g;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0]; // Operation (insert, delete, equal)
    var data = diffs[x][1]; // Text of change.
    var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;').replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
    switch (op) {
      case DIFF_INSERT:
        html[x] = '<ins style="background:#e6ffe6;">' + text + '</ins>';
        break;
      case DIFF_DELETE:
        html[x] = '<del style="background:#ffe6e6;">' + text + '</del>';
        break;
      case DIFF_EQUAL:
        html[x] = '<span>' + text + '</span>';
        break;
    }
    if (op !== DIFF_DELETE) {
      i += data.length;
    }
  }
  return html.join('');
};

/**
 * Compute and return the source text (all equalities and deletions).
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Source text.
 */
diff_match_patch.prototype.diff_text1 = function (diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {
      text[x] = diffs[x][1];
    }
  }
  return text.join('');
};

/**
 * Compute and return the destination text (all equalities and insertions).
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Destination text.
 */
diff_match_patch.prototype.diff_text2 = function (diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_DELETE) {
      text[x] = diffs[x][1];
    }
  }
  return text.join('');
};

/**
 * Compute the Levenshtein distance; the number of inserted, deleted or
 * substituted characters.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {number} Number of changes.
 */
diff_match_patch.prototype.diff_levenshtein = function (diffs) {
  var levenshtein = 0;
  var insertions = 0;
  var deletions = 0;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0];
    var data = diffs[x][1];
    switch (op) {
      case DIFF_INSERT:
        insertions += data.length;
        break;
      case DIFF_DELETE:
        deletions += data.length;
        break;
      case DIFF_EQUAL:
        // A deletion and an insertion is one substitution.
        levenshtein += Math.max(insertions, deletions);
        insertions = 0;
        deletions = 0;
        break;
    }
  }
  levenshtein += Math.max(insertions, deletions);
  return levenshtein;
};

/**
 * Crush the diff into an encoded string which describes the operations
 * required to transform text1 into text2.
 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Delta text.
 */
diff_match_patch.prototype.diff_toDelta = function (diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    switch (diffs[x][0]) {
      case DIFF_INSERT:
        text[x] = '+' + encodeURI(diffs[x][1]);
        break;
      case DIFF_DELETE:
        text[x] = '-' + diffs[x][1].length;
        break;
      case DIFF_EQUAL:
        text[x] = '=' + diffs[x][1].length;
        break;
    }
  }
  return text.join('\t').replace(/%20/g, ' ');
};

/**
 * Given the original text1, and an encoded string which describes the
 * operations required to transform text1 into text2, compute the full diff.
 * @param {string} text1 Source string for the diff.
 * @param {string} delta Delta text.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @throws {!Error} If invalid input.
 */
diff_match_patch.prototype.diff_fromDelta = function (text1, delta) {
  var diffs = [];
  var diffsLength = 0; // Keeping our own length var is faster in JS.
  var pointer = 0; // Cursor in text1
  var tokens = delta.split(/\t/g);
  for (var x = 0; x < tokens.length; x++) {
    // Each token begins with a one character parameter which specifies the
    // operation of this token (delete, insert, equality).
    var param = tokens[x].substring(1);
    switch (tokens[x].charAt(0)) {
      case '+':
        try {
          diffs[diffsLength++] = [DIFF_INSERT, decodeURI(param)];
        } catch (ex) {
          // Malformed URI sequence.
          throw new Error('Illegal escape in diff_fromDelta: ' + param);
        }
        break;
      case '-':
      // Fall through.
      case '=':
        var n = parseInt(param, 10);
        if (isNaN(n) || n < 0) {
          throw new Error('Invalid number in diff_fromDelta: ' + param);
        }
        var text = text1.substring(pointer, pointer += n);
        if (tokens[x].charAt(0) == '=') {
          diffs[diffsLength++] = [DIFF_EQUAL, text];
        } else {
          diffs[diffsLength++] = [DIFF_DELETE, text];
        }
        break;
      default:
        // Blank tokens are ok (from a trailing \t).
        // Anything else is an error.
        if (tokens[x]) {
          throw new Error('Invalid diff operation in diff_fromDelta: ' + tokens[x]);
        }
    }
  }
  if (pointer != text1.length) {
    throw new Error('Delta length (' + pointer + ') does not equal source text length (' + text1.length + ').');
  }
  return diffs;
};

//  MATCH FUNCTIONS


/**
 * Locate the best instance of 'pattern' in 'text' near 'loc'.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 */
diff_match_patch.prototype.match_main = function (text, pattern, loc) {
  // Check for null inputs.
  if (text == null || pattern == null || loc == null) {
    throw new Error('Null input. (match_main)');
  }

  loc = Math.max(0, Math.min(loc, text.length));
  if (text == pattern) {
    // Shortcut (potentially not guaranteed by the algorithm)
    return 0;
  } else if (!text.length) {
    // Nothing to match.
    return -1;
  } else if (text.substring(loc, loc + pattern.length) == pattern) {
    // Perfect match at the perfect spot!  (Includes case of null pattern)
    return loc;
  } else {
    // Do a fuzzy compare.
    return this.match_bitap_(text, pattern, loc);
  }
};

/**
 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
 * Bitap algorithm.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 * @private
 */
diff_match_patch.prototype.match_bitap_ = function (text, pattern, loc) {
  if (pattern.length > this.Match_MaxBits) {
    throw new Error('Pattern too long for this browser.');
  }

  // Initialise the alphabet.
  var s = this.match_alphabet_(pattern);

  var dmp = this; // 'this' becomes 'window' in a closure.

  /**
   * Compute and return the score for a match with e errors and x location.
   * Accesses loc and pattern through being a closure.
   * @param {number} e Number of errors in match.
   * @param {number} x Location of match.
   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
   * @private
   */
  function match_bitapScore_(e, x) {
    var accuracy = e / pattern.length;
    var proximity = Math.abs(loc - x);
    if (!dmp.Match_Distance) {
      // Dodge divide by zero error.
      return proximity ? 1.0 : accuracy;
    }
    return accuracy + proximity / dmp.Match_Distance;
  }

  // Highest score beyond which we give up.
  var score_threshold = this.Match_Threshold;
  // Is there a nearby exact match? (speedup)
  var best_loc = text.indexOf(pattern, loc);
  if (best_loc != -1) {
    score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
    // What about in the other direction? (speedup)
    best_loc = text.lastIndexOf(pattern, loc + pattern.length);
    if (best_loc != -1) {
      score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
    }
  }

  // Initialise the bit arrays.
  var matchmask = 1 << pattern.length - 1;
  best_loc = -1;

  var bin_min, bin_mid;
  var bin_max = pattern.length + text.length;
  var last_rd;
  for (var d = 0; d < pattern.length; d++) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from 'loc' we can stray at this
    // error level.
    bin_min = 0;
    bin_mid = bin_max;
    while (bin_min < bin_mid) {
      if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
        bin_min = bin_mid;
      } else {
        bin_max = bin_mid;
      }
      bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
    }
    // Use the result from this iteration as the maximum for the next.
    bin_max = bin_mid;
    var start = Math.max(1, loc - bin_mid + 1);
    var finish = Math.min(loc + bin_mid, text.length) + pattern.length;

    var rd = Array(finish + 2);
    rd[finish + 1] = (1 << d) - 1;
    for (var j = finish; j >= start; j--) {
      // The alphabet (s) is a sparse hash, so the following line generates
      // warnings.
      var charMatch = s[text.charAt(j - 1)];
      if (d === 0) {
        // First pass: exact match.
        rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
      } else {
        // Subsequent passes: fuzzy match.
        rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((last_rd[j + 1] | last_rd[j]) << 1 | 1) | last_rd[j + 1];
      }
      if (rd[j] & matchmask) {
        var score = match_bitapScore_(d, j - 1);
        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (score <= score_threshold) {
          // Told you so.
          score_threshold = score;
          best_loc = j - 1;
          if (best_loc > loc) {
            // When passing loc, don't exceed our current distance from loc.
            start = Math.max(1, 2 * loc - best_loc);
          } else {
            // Already passed loc, downhill from here on in.
            break;
          }
        }
      }
    }
    // No hope for a (better) match at greater error levels.
    if (match_bitapScore_(d + 1, loc) > score_threshold) {
      break;
    }
    last_rd = rd;
  }
  return best_loc;
};

/**
 * Initialise the alphabet for the Bitap algorithm.
 * @param {string} pattern The text to encode.
 * @return {!Object} Hash of character locations.
 * @private
 */
diff_match_patch.prototype.match_alphabet_ = function (pattern) {
  var s = {};
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] = 0;
  }
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] |= 1 << pattern.length - i - 1;
  }
  return s;
};

//  PATCH FUNCTIONS


/**
 * Increase the context until it is unique,
 * but don't let the pattern expand beyond Match_MaxBits.
 * @param {!diff_match_patch.patch_obj} patch The patch to grow.
 * @param {string} text Source text.
 * @private
 */
diff_match_patch.prototype.patch_addContext_ = function (patch, text) {
  if (text.length == 0) {
    return;
  }
  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
  var padding = 0;

  // Look for the first and last matches of pattern in text.  If two different
  // matches are found, increase the pattern length.
  while (text.indexOf(pattern) != text.lastIndexOf(pattern) && pattern.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin) {
    padding += this.Patch_Margin;
    pattern = text.substring(patch.start2 - padding, patch.start2 + patch.length1 + padding);
  }
  // Add one chunk for good luck.
  padding += this.Patch_Margin;

  // Add the prefix.
  var prefix = text.substring(patch.start2 - padding, patch.start2);
  if (prefix) {
    patch.diffs.unshift([DIFF_EQUAL, prefix]);
  }
  // Add the suffix.
  var suffix = text.substring(patch.start2 + patch.length1, patch.start2 + patch.length1 + padding);
  if (suffix) {
    patch.diffs.push([DIFF_EQUAL, suffix]);
  }

  // Roll back the start points.
  patch.start1 -= prefix.length;
  patch.start2 -= prefix.length;
  // Extend the lengths.
  patch.length1 += prefix.length + suffix.length;
  patch.length2 += prefix.length + suffix.length;
};

/**
 * Compute a list of patches to turn text1 into text2.
 * Use diffs if provided, otherwise compute it ourselves.
 * There are four ways to call this function, depending on what data is
 * available to the caller:
 * Method 1:
 * a = text1, b = text2
 * Method 2:
 * a = diffs
 * Method 3 (optimal):
 * a = text1, b = diffs
 * Method 4 (deprecated, use method 3):
 * a = text1, b = text2, c = diffs
 *
 * @param {string|!Array.<!diff_match_patch.Diff>} a text1 (methods 1,3,4) or
 * Array of diff tuples for text1 to text2 (method 2).
 * @param {string|!Array.<!diff_match_patch.Diff>} opt_b text2 (methods 1,4) or
 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
 * @param {string|!Array.<!diff_match_patch.Diff>} opt_c Array of diff tuples
 * for text1 to text2 (method 4) or undefined (methods 1,2,3).
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of patch objects.
 */
diff_match_patch.prototype.patch_make = function (a, opt_b, opt_c) {
  var text1, diffs;
  if (typeof a == 'string' && typeof opt_b == 'string' && typeof opt_c == 'undefined') {
    // Method 1: text1, text2
    // Compute diffs from text1 and text2.
    text1 = /** @type {string} */a;
    diffs = this.diff_main(text1, /** @type {string} */opt_b, true);
    if (diffs.length > 2) {
      this.diff_cleanupSemantic(diffs);
      this.diff_cleanupEfficiency(diffs);
    }
  } else if (a && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && typeof opt_b == 'undefined' && typeof opt_c == 'undefined') {
    // Method 2: diffs
    // Compute text1 from diffs.
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */a;
    text1 = this.diff_text1(diffs);
  } else if (typeof a == 'string' && opt_b && (typeof opt_b === 'undefined' ? 'undefined' : _typeof(opt_b)) == 'object' && typeof opt_c == 'undefined') {
    // Method 3: text1, diffs
    text1 = /** @type {string} */a;
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */opt_b;
  } else if (typeof a == 'string' && typeof opt_b == 'string' && opt_c && (typeof opt_c === 'undefined' ? 'undefined' : _typeof(opt_c)) == 'object') {
    // Method 4: text1, text2, diffs
    // text2 is not used.
    text1 = /** @type {string} */a;
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */opt_c;
  } else {
    throw new Error('Unknown call format to patch_make.');
  }

  if (diffs.length === 0) {
    return []; // Get rid of the null case.
  }
  var patches = [];
  var patch = new diff_match_patch.patch_obj();
  var patchDiffLength = 0; // Keeping our own length var is faster in JS.
  var char_count1 = 0; // Number of characters into the text1 string.
  var char_count2 = 0; // Number of characters into the text2 string.
  // Start with text1 (prepatch_text) and apply the diffs until we arrive at
  // text2 (postpatch_text).  We recreate the patches one by one to determine
  // context info.
  var prepatch_text = text1;
  var postpatch_text = text1;
  for (var x = 0; x < diffs.length; x++) {
    var diff_type = diffs[x][0];
    var diff_text = diffs[x][1];

    if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
      // A new patch starts here.
      patch.start1 = char_count1;
      patch.start2 = char_count2;
    }

    switch (diff_type) {
      case DIFF_INSERT:
        patch.diffs[patchDiffLength++] = diffs[x];
        patch.length2 += diff_text.length;
        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text + postpatch_text.substring(char_count2);
        break;
      case DIFF_DELETE:
        patch.length1 += diff_text.length;
        patch.diffs[patchDiffLength++] = diffs[x];
        postpatch_text = postpatch_text.substring(0, char_count2) + postpatch_text.substring(char_count2 + diff_text.length);
        break;
      case DIFF_EQUAL:
        if (diff_text.length <= 2 * this.Patch_Margin && patchDiffLength && diffs.length != x + 1) {
          // Small equality inside a patch.
          patch.diffs[patchDiffLength++] = diffs[x];
          patch.length1 += diff_text.length;
          patch.length2 += diff_text.length;
        } else if (diff_text.length >= 2 * this.Patch_Margin) {
          // Time for a new patch.
          if (patchDiffLength) {
            this.patch_addContext_(patch, prepatch_text);
            patches.push(patch);
            patch = new diff_match_patch.patch_obj();
            patchDiffLength = 0;
            // Unlike Unidiff, our patch lists have a rolling context.
            // http://code.google.com/p/google-diff-match-patch/wiki/Unidiff
            // Update prepatch text & pos to reflect the application of the
            // just completed patch.
            prepatch_text = postpatch_text;
            char_count1 = char_count2;
          }
        }
        break;
    }

    // Update the current character count.
    if (diff_type !== DIFF_INSERT) {
      char_count1 += diff_text.length;
    }
    if (diff_type !== DIFF_DELETE) {
      char_count2 += diff_text.length;
    }
  }
  // Pick up the leftover patch if not empty.
  if (patchDiffLength) {
    this.patch_addContext_(patch, prepatch_text);
    patches.push(patch);
  }

  return patches;
};

/**
 * Given an array of patches, return another array that is identical.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of patch objects.
 */
diff_match_patch.prototype.patch_deepCopy = function (patches) {
  // Making deep copies is hard in JavaScript.
  var patchesCopy = [];
  for (var x = 0; x < patches.length; x++) {
    var patch = patches[x];
    var patchCopy = new diff_match_patch.patch_obj();
    patchCopy.diffs = [];
    for (var y = 0; y < patch.diffs.length; y++) {
      patchCopy.diffs[y] = patch.diffs[y].slice();
    }
    patchCopy.start1 = patch.start1;
    patchCopy.start2 = patch.start2;
    patchCopy.length1 = patch.length1;
    patchCopy.length2 = patch.length2;
    patchesCopy[x] = patchCopy;
  }
  return patchesCopy;
};

/**
 * Merge a set of patches onto the text.  Return a patched text, as well
 * as a list of true/false values indicating which patches were applied.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
 * @param {string} text Old text.
 * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
 *      new text and an array of boolean values.
 */
diff_match_patch.prototype.patch_apply = function (patches, text) {
  if (patches.length == 0) {
    return [text, []];
  }

  // Deep copy the patches so that no changes are made to originals.
  patches = this.patch_deepCopy(patches);

  var nullPadding = this.patch_addPadding(patches);
  text = nullPadding + text + nullPadding;

  this.patch_splitMax(patches);
  // delta keeps track of the offset between the expected and actual location
  // of the previous patch.  If there are patches expected at positions 10 and
  // 20, but the first patch was found at 12, delta is 2 and the second patch
  // has an effective expected position of 22.
  var delta = 0;
  var results = [];
  for (var x = 0; x < patches.length; x++) {
    var expected_loc = patches[x].start2 + delta;
    var text1 = this.diff_text1(patches[x].diffs);
    var start_loc;
    var end_loc = -1;
    if (text1.length > this.Match_MaxBits) {
      // patch_splitMax will only provide an oversized pattern in the case of
      // a monster delete.
      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits), expected_loc);
      if (start_loc != -1) {
        end_loc = this.match_main(text, text1.substring(text1.length - this.Match_MaxBits), expected_loc + text1.length - this.Match_MaxBits);
        if (end_loc == -1 || start_loc >= end_loc) {
          // Can't find valid trailing context.  Drop this patch.
          start_loc = -1;
        }
      }
    } else {
      start_loc = this.match_main(text, text1, expected_loc);
    }
    if (start_loc == -1) {
      // No match found.  :(
      results[x] = false;
      // Subtract the delta for this failed patch from subsequent patches.
      delta -= patches[x].length2 - patches[x].length1;
    } else {
      // Found a match.  :)
      results[x] = true;
      delta = start_loc - expected_loc;
      var text2;
      if (end_loc == -1) {
        text2 = text.substring(start_loc, start_loc + text1.length);
      } else {
        text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
      }
      if (text1 == text2) {
        // Perfect match, just shove the replacement text in.
        text = text.substring(0, start_loc) + this.diff_text2(patches[x].diffs) + text.substring(start_loc + text1.length);
      } else {
        // Imperfect match.  Run a diff to get a framework of equivalent
        // indices.
        var diffs = this.diff_main(text1, text2, false);
        if (text1.length > this.Match_MaxBits && this.diff_levenshtein(diffs) / text1.length > this.Patch_DeleteThreshold) {
          // The end points match, but the content is unacceptably bad.
          results[x] = false;
        } else {
          this.diff_cleanupSemanticLossless(diffs);
          var index1 = 0;
          var index2;
          for (var y = 0; y < patches[x].diffs.length; y++) {
            var mod = patches[x].diffs[y];
            if (mod[0] !== DIFF_EQUAL) {
              index2 = this.diff_xIndex(diffs, index1);
            }
            if (mod[0] === DIFF_INSERT) {
              // Insertion
              text = text.substring(0, start_loc + index2) + mod[1] + text.substring(start_loc + index2);
            } else if (mod[0] === DIFF_DELETE) {
              // Deletion
              text = text.substring(0, start_loc + index2) + text.substring(start_loc + this.diff_xIndex(diffs, index1 + mod[1].length));
            }
            if (mod[0] !== DIFF_DELETE) {
              index1 += mod[1].length;
            }
          }
        }
      }
    }
  }
  // Strip the padding off.
  text = text.substring(nullPadding.length, text.length - nullPadding.length);
  return [text, results];
};

/**
 * Add some padding on text start and end so that edges can match something.
 * Intended to be called only from within patch_apply.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
 * @return {string} The padding string added to each side.
 */
diff_match_patch.prototype.patch_addPadding = function (patches) {
  var paddingLength = this.Patch_Margin;
  var nullPadding = '';
  for (var x = 1; x <= paddingLength; x++) {
    nullPadding += String.fromCharCode(x);
  }

  // Bump all the patches forward.
  for (var x = 0; x < patches.length; x++) {
    patches[x].start1 += paddingLength;
    patches[x].start2 += paddingLength;
  }

  // Add some padding on start of first diff.
  var patch = patches[0];
  var diffs = patch.diffs;
  if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
    // Add nullPadding equality.
    diffs.unshift([DIFF_EQUAL, nullPadding]);
    patch.start1 -= paddingLength; // Should be 0.
    patch.start2 -= paddingLength; // Should be 0.
    patch.length1 += paddingLength;
    patch.length2 += paddingLength;
  } else if (paddingLength > diffs[0][1].length) {
    // Grow first equality.
    var extraLength = paddingLength - diffs[0][1].length;
    diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
    patch.start1 -= extraLength;
    patch.start2 -= extraLength;
    patch.length1 += extraLength;
    patch.length2 += extraLength;
  }

  // Add some padding on end of last diff.
  patch = patches[patches.length - 1];
  diffs = patch.diffs;
  if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
    // Add nullPadding equality.
    diffs.push([DIFF_EQUAL, nullPadding]);
    patch.length1 += paddingLength;
    patch.length2 += paddingLength;
  } else if (paddingLength > diffs[diffs.length - 1][1].length) {
    // Grow last equality.
    var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
    diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
    patch.length1 += extraLength;
    patch.length2 += extraLength;
  }

  return nullPadding;
};

/**
 * Look through the patches and break up any which are longer than the maximum
 * limit of the match algorithm.
 * Intended to be called only from within patch_apply.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
 */
diff_match_patch.prototype.patch_splitMax = function (patches) {
  var patch_size = this.Match_MaxBits;
  for (var x = 0; x < patches.length; x++) {
    if (patches[x].length1 > patch_size) {
      var bigpatch = patches[x];
      // Remove the big old patch.
      patches.splice(x--, 1);
      var start1 = bigpatch.start1;
      var start2 = bigpatch.start2;
      var precontext = '';
      while (bigpatch.diffs.length !== 0) {
        // Create one of several smaller patches.
        var patch = new diff_match_patch.patch_obj();
        var empty = true;
        patch.start1 = start1 - precontext.length;
        patch.start2 = start2 - precontext.length;
        if (precontext !== '') {
          patch.length1 = patch.length2 = precontext.length;
          patch.diffs.push([DIFF_EQUAL, precontext]);
        }
        while (bigpatch.diffs.length !== 0 && patch.length1 < patch_size - this.Patch_Margin) {
          var diff_type = bigpatch.diffs[0][0];
          var diff_text = bigpatch.diffs[0][1];
          if (diff_type === DIFF_INSERT) {
            // Insertions are harmless.
            patch.length2 += diff_text.length;
            start2 += diff_text.length;
            patch.diffs.push(bigpatch.diffs.shift());
            empty = false;
          } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 && patch.diffs[0][0] == DIFF_EQUAL && diff_text.length > 2 * patch_size) {
            // This is a large deletion.  Let it pass in one chunk.
            patch.length1 += diff_text.length;
            start1 += diff_text.length;
            empty = false;
            patch.diffs.push([diff_type, diff_text]);
            bigpatch.diffs.shift();
          } else {
            // Deletion or equality.  Only take as much as we can stomach.
            diff_text = diff_text.substring(0, patch_size - patch.length1 - this.Patch_Margin);
            patch.length1 += diff_text.length;
            start1 += diff_text.length;
            if (diff_type === DIFF_EQUAL) {
              patch.length2 += diff_text.length;
              start2 += diff_text.length;
            } else {
              empty = false;
            }
            patch.diffs.push([diff_type, diff_text]);
            if (diff_text == bigpatch.diffs[0][1]) {
              bigpatch.diffs.shift();
            } else {
              bigpatch.diffs[0][1] = bigpatch.diffs[0][1].substring(diff_text.length);
            }
          }
        }
        // Compute the head context for the next patch.
        precontext = this.diff_text2(patch.diffs);
        precontext = precontext.substring(precontext.length - this.Patch_Margin);
        // Append the end context for this patch.
        var postcontext = this.diff_text1(bigpatch.diffs).substring(0, this.Patch_Margin);
        if (postcontext !== '') {
          patch.length1 += postcontext.length;
          patch.length2 += postcontext.length;
          if (patch.diffs.length !== 0 && patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
            patch.diffs[patch.diffs.length - 1][1] += postcontext;
          } else {
            patch.diffs.push([DIFF_EQUAL, postcontext]);
          }
        }
        if (!empty) {
          patches.splice(++x, 0, patch);
        }
      }
    }
  }
};

/**
 * Take a list of patches and return a textual representation.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of patch objects.
 * @return {string} Text representation of patches.
 */
diff_match_patch.prototype.patch_toText = function (patches) {
  var text = [];
  for (var x = 0; x < patches.length; x++) {
    text[x] = patches[x];
  }
  return text.join('');
};

/**
 * Parse a textual representation of patches and return a list of patch objects.
 * @param {string} textline Text representation of patches.
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of patch objects.
 * @throws {!Error} If invalid input.
 */
diff_match_patch.prototype.patch_fromText = function (textline) {
  var patches = [];
  if (!textline) {
    return patches;
  }
  var text = textline.split('\n');
  var textPointer = 0;
  var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
  while (textPointer < text.length) {
    var m = text[textPointer].match(patchHeader);
    if (!m) {
      throw new Error('Invalid patch string: ' + text[textPointer]);
    }
    var patch = new diff_match_patch.patch_obj();
    patches.push(patch);
    patch.start1 = parseInt(m[1], 10);
    if (m[2] === '') {
      patch.start1--;
      patch.length1 = 1;
    } else if (m[2] == '0') {
      patch.length1 = 0;
    } else {
      patch.start1--;
      patch.length1 = parseInt(m[2], 10);
    }

    patch.start2 = parseInt(m[3], 10);
    if (m[4] === '') {
      patch.start2--;
      patch.length2 = 1;
    } else if (m[4] == '0') {
      patch.length2 = 0;
    } else {
      patch.start2--;
      patch.length2 = parseInt(m[4], 10);
    }
    textPointer++;

    while (textPointer < text.length) {
      var sign = text[textPointer].charAt(0);
      try {
        var line = decodeURI(text[textPointer].substring(1));
      } catch (ex) {
        // Malformed URI sequence.
        throw new Error('Illegal escape in patch_fromText: ' + line);
      }
      if (sign == '-') {
        // Deletion.
        patch.diffs.push([DIFF_DELETE, line]);
      } else if (sign == '+') {
        // Insertion.
        patch.diffs.push([DIFF_INSERT, line]);
      } else if (sign == ' ') {
        // Minor equality.
        patch.diffs.push([DIFF_EQUAL, line]);
      } else if (sign == '@') {
        // Start of next patch.
        break;
      } else if (sign === '') {
        // Blank line?  Whatever.
      } else {
        // WTF?
        throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
      }
      textPointer++;
    }
  }
  return patches;
};

/**
 * Class representing one patch operation.
 * @constructor
 */
diff_match_patch.patch_obj = function () {
  /** @type {!Array.<!diff_match_patch.Diff>} */
  this.diffs = [];
  /** @type {?number} */
  this.start1 = null;
  /** @type {?number} */
  this.start2 = null;
  /** @type {number} */
  this.length1 = 0;
  /** @type {number} */
  this.length2 = 0;
};

/**
 * Emmulate GNU diff's format.
 * Header: @@ -382,8 +481,9 @@
 * Indicies are printed as 1-based, not 0-based.
 * @return {string} The GNU diff string.
 */
diff_match_patch.patch_obj.prototype.toString = function () {
  var coords1, coords2;
  if (this.length1 === 0) {
    coords1 = this.start1 + ',0';
  } else if (this.length1 == 1) {
    coords1 = this.start1 + 1;
  } else {
    coords1 = this.start1 + 1 + ',' + this.length1;
  }
  if (this.length2 === 0) {
    coords2 = this.start2 + ',0';
  } else if (this.length2 == 1) {
    coords2 = this.start2 + 1;
  } else {
    coords2 = this.start2 + 1 + ',' + this.length2;
  }
  var text = ['@@ -' + coords1 + ' +' + coords2 + ' @@\n'];
  var op;
  // Escape the body of the patch with %xx notation.
  for (var x = 0; x < this.diffs.length; x++) {
    switch (this.diffs[x][0]) {
      case DIFF_INSERT:
        op = '+';
        break;
      case DIFF_DELETE:
        op = '-';
        break;
      case DIFF_EQUAL:
        op = ' ';
        break;
    }
    text[x + 1] = op + encodeURI(this.diffs[x][1]) + '\n';
  }
  return text.join('').replace(/%20/g, ' ');
};

// Export these global variables so that they survive Google's JS compiler.
// In a browser, 'this' will be 'window'.
// In node.js 'this' will be a global object.
undefined['diff_match_patch'] = diff_match_patch;
undefined['DIFF_DELETE'] = DIFF_DELETE;
undefined['DIFF_INSERT'] = DIFF_INSERT;
undefined['DIFF_EQUAL'] = DIFF_EQUAL;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/clone.js":
/*!*************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/clone.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isArray = typeof Array.isArray === 'function' ?
// use native function
Array.isArray :
// use instanceof operator
function (a) {
  return a instanceof Array;
};

function cloneRegExp(re) {
  var regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString());
  return new RegExp(regexMatch[1], regexMatch[2]);
}

function clone(arg) {
  if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) !== 'object') {
    return arg;
  }
  if (arg === null) {
    return null;
  }
  if (isArray(arg)) {
    return arg.map(clone);
  }
  if (arg instanceof Date) {
    return new Date(arg.getTime());
  }
  if (arg instanceof RegExp) {
    return cloneRegExp(arg);
  }
  var cloned = {};
  for (var name in arg) {
    if (Object.prototype.hasOwnProperty.call(arg, name)) {
      cloned[name] = clone(arg[name]);
    }
  }
  return cloned;
}

module.exports = clone;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/contexts/context.js":
/*!************************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/contexts/context.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Pipe = __webpack_require__(/*! ../pipe */ "./node_modules/jsondiffpatch/src/pipe.js").Pipe;

var Context = function Context() {};

Context.prototype.setResult = function (result) {
	this.result = result;
	this.hasResult = true;
	return this;
};

Context.prototype.exit = function () {
	this.exiting = true;
	return this;
};

Context.prototype.switchTo = function (next, pipe) {
	if (typeof next === 'string' || next instanceof Pipe) {
		this.nextPipe = next;
	} else {
		this.next = next;
		if (pipe) {
			this.nextPipe = pipe;
		}
	}
	return this;
};

Context.prototype.push = function (child, name) {
	child.parent = this;
	if (typeof name !== 'undefined') {
		child.childName = name;
	}
	child.root = this.root || this;
	child.options = child.options || this.options;
	if (!this.children) {
		this.children = [child];
		this.nextAfterChildren = this.next || null;
		this.next = child;
	} else {
		this.children[this.children.length - 1].next = child;
		this.children.push(child);
	}
	child.next = this;
	return this;
};

exports.Context = Context;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/contexts/diff.js":
/*!*********************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/contexts/diff.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Context = __webpack_require__(/*! ./context */ "./node_modules/jsondiffpatch/src/contexts/context.js").Context;
var defaultClone = __webpack_require__(/*! ../clone */ "./node_modules/jsondiffpatch/src/clone.js");

var DiffContext = function DiffContext(left, right) {
  this.left = left;
  this.right = right;
  this.pipe = 'diff';
};

DiffContext.prototype = new Context();

DiffContext.prototype.setResult = function (result) {
  if (this.options.cloneDiffValues && (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
    var clone = typeof this.options.cloneDiffValues === 'function' ? this.options.cloneDiffValues : defaultClone;
    if (_typeof(result[0]) === 'object') {
      result[0] = clone(result[0]);
    }
    if (_typeof(result[1]) === 'object') {
      result[1] = clone(result[1]);
    }
  }
  return Context.prototype.setResult.apply(this, arguments);
};

exports.DiffContext = DiffContext;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/contexts/patch.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/contexts/patch.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Context = __webpack_require__(/*! ./context */ "./node_modules/jsondiffpatch/src/contexts/context.js").Context;

var PatchContext = function PatchContext(left, delta) {
  this.left = left;
  this.delta = delta;
  this.pipe = 'patch';
};

PatchContext.prototype = new Context();

exports.PatchContext = PatchContext;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/contexts/reverse.js":
/*!************************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/contexts/reverse.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Context = __webpack_require__(/*! ./context */ "./node_modules/jsondiffpatch/src/contexts/context.js").Context;

var ReverseContext = function ReverseContext(delta) {
  this.delta = delta;
  this.pipe = 'reverse';
};

ReverseContext.prototype = new Context();

exports.ReverseContext = ReverseContext;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/diffpatcher.js":
/*!*******************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/diffpatcher.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Processor = __webpack_require__(/*! ./processor */ "./node_modules/jsondiffpatch/src/processor.js").Processor;
var Pipe = __webpack_require__(/*! ./pipe */ "./node_modules/jsondiffpatch/src/pipe.js").Pipe;
var DiffContext = __webpack_require__(/*! ./contexts/diff */ "./node_modules/jsondiffpatch/src/contexts/diff.js").DiffContext;
var PatchContext = __webpack_require__(/*! ./contexts/patch */ "./node_modules/jsondiffpatch/src/contexts/patch.js").PatchContext;
var ReverseContext = __webpack_require__(/*! ./contexts/reverse */ "./node_modules/jsondiffpatch/src/contexts/reverse.js").ReverseContext;

var clone = __webpack_require__(/*! ./clone */ "./node_modules/jsondiffpatch/src/clone.js");

var trivial = __webpack_require__(/*! ./filters/trivial */ "./node_modules/jsondiffpatch/src/filters/trivial.js");
var nested = __webpack_require__(/*! ./filters/nested */ "./node_modules/jsondiffpatch/src/filters/nested.js");
var arrays = __webpack_require__(/*! ./filters/arrays */ "./node_modules/jsondiffpatch/src/filters/arrays.js");
var dates = __webpack_require__(/*! ./filters/dates */ "./node_modules/jsondiffpatch/src/filters/dates.js");
var texts = __webpack_require__(/*! ./filters/texts */ "./node_modules/jsondiffpatch/src/filters/texts.js");

var DiffPatcher = function DiffPatcher(options) {
  this.processor = new Processor(options);
  this.processor.pipe(new Pipe('diff').append(nested.collectChildrenDiffFilter, trivial.diffFilter, dates.diffFilter, texts.diffFilter, nested.objectsDiffFilter, arrays.diffFilter).shouldHaveResult());
  this.processor.pipe(new Pipe('patch').append(nested.collectChildrenPatchFilter, arrays.collectChildrenPatchFilter, trivial.patchFilter, texts.patchFilter, nested.patchFilter, arrays.patchFilter).shouldHaveResult());
  this.processor.pipe(new Pipe('reverse').append(nested.collectChildrenReverseFilter, arrays.collectChildrenReverseFilter, trivial.reverseFilter, texts.reverseFilter, nested.reverseFilter, arrays.reverseFilter).shouldHaveResult());
};

DiffPatcher.prototype.options = function () {
  return this.processor.options.apply(this.processor, arguments);
};

DiffPatcher.prototype.diff = function (left, right) {
  return this.processor.process(new DiffContext(left, right));
};

DiffPatcher.prototype.patch = function (left, delta) {
  return this.processor.process(new PatchContext(left, delta));
};

DiffPatcher.prototype.reverse = function (delta) {
  return this.processor.process(new ReverseContext(delta));
};

DiffPatcher.prototype.unpatch = function (right, delta) {
  return this.patch(right, this.reverse(delta));
};

DiffPatcher.prototype.clone = function (value) {
  return clone(value);
};

exports.DiffPatcher = DiffPatcher;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/filters/arrays.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/filters/arrays.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var DiffContext = __webpack_require__(/*! ../contexts/diff */ "./node_modules/jsondiffpatch/src/contexts/diff.js").DiffContext;
var PatchContext = __webpack_require__(/*! ../contexts/patch */ "./node_modules/jsondiffpatch/src/contexts/patch.js").PatchContext;
var ReverseContext = __webpack_require__(/*! ../contexts/reverse */ "./node_modules/jsondiffpatch/src/contexts/reverse.js").ReverseContext;

var lcs = __webpack_require__(/*! ./lcs */ "./node_modules/jsondiffpatch/src/filters/lcs.js");

var ARRAY_MOVE = 3;

var isArray = typeof Array.isArray === 'function' ?
// use native function
Array.isArray :
// use instanceof operator
function (a) {
  return a instanceof Array;
};

var arrayIndexOf = typeof Array.prototype.indexOf === 'function' ? function (array, item) {
  return array.indexOf(item);
} : function (array, item) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
};

function arraysHaveMatchByRef(array1, array2, len1, len2) {
  for (var index1 = 0; index1 < len1; index1++) {
    var val1 = array1[index1];
    for (var index2 = 0; index2 < len2; index2++) {
      var val2 = array2[index2];
      if (index1 !== index2 && val1 === val2) {
        return true;
      }
    }
  }
}

function matchItems(array1, array2, index1, index2, context) {
  var value1 = array1[index1];
  var value2 = array2[index2];
  if (value1 === value2) {
    return true;
  }
  if ((typeof value1 === 'undefined' ? 'undefined' : _typeof(value1)) !== 'object' || (typeof value2 === 'undefined' ? 'undefined' : _typeof(value2)) !== 'object') {
    return false;
  }
  var objectHash = context.objectHash;
  if (!objectHash) {
    // no way to match objects was provided, try match by position
    return context.matchByPosition && index1 === index2;
  }
  var hash1;
  var hash2;
  if (typeof index1 === 'number') {
    context.hashCache1 = context.hashCache1 || [];
    hash1 = context.hashCache1[index1];
    if (typeof hash1 === 'undefined') {
      context.hashCache1[index1] = hash1 = objectHash(value1, index1);
    }
  } else {
    hash1 = objectHash(value1);
  }
  if (typeof hash1 === 'undefined') {
    return false;
  }
  if (typeof index2 === 'number') {
    context.hashCache2 = context.hashCache2 || [];
    hash2 = context.hashCache2[index2];
    if (typeof hash2 === 'undefined') {
      context.hashCache2[index2] = hash2 = objectHash(value2, index2);
    }
  } else {
    hash2 = objectHash(value2);
  }
  if (typeof hash2 === 'undefined') {
    return false;
  }
  return hash1 === hash2;
}

var diffFilter = function arraysDiffFilter(context) {
  if (!context.leftIsArray) {
    return;
  }

  var matchContext = {
    objectHash: context.options && context.options.objectHash,
    matchByPosition: context.options && context.options.matchByPosition
  };
  var commonHead = 0;
  var commonTail = 0;
  var index;
  var index1;
  var index2;
  var array1 = context.left;
  var array2 = context.right;
  var len1 = array1.length;
  var len2 = array2.length;

  var child;

  if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== 'boolean') {
    matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
  }

  // separate common head
  while (commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)) {
    index = commonHead;
    child = new DiffContext(context.left[index], context.right[index]);
    context.push(child, index);
    commonHead++;
  }
  // separate common tail
  while (commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)) {
    index1 = len1 - 1 - commonTail;
    index2 = len2 - 1 - commonTail;
    child = new DiffContext(context.left[index1], context.right[index2]);
    context.push(child, index2);
    commonTail++;
  }
  var result;
  if (commonHead + commonTail === len1) {
    if (len1 === len2) {
      // arrays are identical
      context.setResult(undefined).exit();
      return;
    }
    // trivial case, a block (1 or more consecutive items) was added
    result = result || {
      _t: 'a'
    };
    for (index = commonHead; index < len2 - commonTail; index++) {
      result[index] = [array2[index]];
    }
    context.setResult(result).exit();
    return;
  }
  if (commonHead + commonTail === len2) {
    // trivial case, a block (1 or more consecutive items) was removed
    result = result || {
      _t: 'a'
    };
    for (index = commonHead; index < len1 - commonTail; index++) {
      result['_' + index] = [array1[index], 0, 0];
    }
    context.setResult(result).exit();
    return;
  }
  // reset hash cache
  delete matchContext.hashCache1;
  delete matchContext.hashCache2;

  // diff is not trivial, find the LCS (Longest Common Subsequence)
  var trimmed1 = array1.slice(commonHead, len1 - commonTail);
  var trimmed2 = array2.slice(commonHead, len2 - commonTail);
  var seq = lcs.get(trimmed1, trimmed2, matchItems, matchContext);
  var removedItems = [];
  result = result || {
    _t: 'a'
  };
  for (index = commonHead; index < len1 - commonTail; index++) {
    if (arrayIndexOf(seq.indices1, index - commonHead) < 0) {
      // removed
      result['_' + index] = [array1[index], 0, 0];
      removedItems.push(index);
    }
  }

  var detectMove = true;
  if (context.options && context.options.arrays && context.options.arrays.detectMove === false) {
    detectMove = false;
  }
  var includeValueOnMove = false;
  if (context.options && context.options.arrays && context.options.arrays.includeValueOnMove) {
    includeValueOnMove = true;
  }

  var removedItemsLength = removedItems.length;
  for (index = commonHead; index < len2 - commonTail; index++) {
    var indexOnArray2 = arrayIndexOf(seq.indices2, index - commonHead);
    if (indexOnArray2 < 0) {
      // added, try to match with a removed item and register as position move
      var isMove = false;
      if (detectMove && removedItemsLength > 0) {
        for (var removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++) {
          index1 = removedItems[removeItemIndex1];
          if (matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
            // store position move as: [originalValue, newPosition, ARRAY_MOVE]
            result['_' + index1].splice(1, 2, index, ARRAY_MOVE);
            if (!includeValueOnMove) {
              // don't include moved value on diff, to save bytes
              result['_' + index1][0] = '';
            }

            index2 = index;
            child = new DiffContext(context.left[index1], context.right[index2]);
            context.push(child, index2);
            removedItems.splice(removeItemIndex1, 1);
            isMove = true;
            break;
          }
        }
      }
      if (!isMove) {
        // added
        result[index] = [array2[index]];
      }
    } else {
      // match, do inner diff
      index1 = seq.indices1[indexOnArray2] + commonHead;
      index2 = seq.indices2[indexOnArray2] + commonHead;
      child = new DiffContext(context.left[index1], context.right[index2]);
      context.push(child, index2);
    }
  }

  context.setResult(result).exit();
};
diffFilter.filterName = 'arrays';

var compare = {
  numerically: function numerically(a, b) {
    return a - b;
  },
  numericallyBy: function numericallyBy(name) {
    return function (a, b) {
      return a[name] - b[name];
    };
  }
};

var patchFilter = function nestedPatchFilter(context) {
  if (!context.nested) {
    return;
  }
  if (context.delta._t !== 'a') {
    return;
  }
  var index, index1;

  var delta = context.delta;
  var array = context.left;

  // first, separate removals, insertions and modifications
  var toRemove = [];
  var toInsert = [];
  var toModify = [];
  for (index in delta) {
    if (index !== '_t') {
      if (index[0] === '_') {
        // removed item from original array
        if (delta[index][2] === 0 || delta[index][2] === ARRAY_MOVE) {
          toRemove.push(parseInt(index.slice(1), 10));
        } else {
          throw new Error('only removal or move can be applied at original array indices' + ', invalid diff type: ' + delta[index][2]);
        }
      } else {
        if (delta[index].length === 1) {
          // added item at new array
          toInsert.push({
            index: parseInt(index, 10),
            value: delta[index][0]
          });
        } else {
          // modified item at new array
          toModify.push({
            index: parseInt(index, 10),
            delta: delta[index]
          });
        }
      }
    }
  }

  // remove items, in reverse order to avoid sawing our own floor
  toRemove = toRemove.sort(compare.numerically);
  for (index = toRemove.length - 1; index >= 0; index--) {
    index1 = toRemove[index];
    var indexDiff = delta['_' + index1];
    var removedValue = array.splice(index1, 1)[0];
    if (indexDiff[2] === ARRAY_MOVE) {
      // reinsert later
      toInsert.push({
        index: indexDiff[1],
        value: removedValue
      });
    }
  }

  // insert items, in reverse order to avoid moving our own floor
  toInsert = toInsert.sort(compare.numericallyBy('index'));
  var toInsertLength = toInsert.length;
  for (index = 0; index < toInsertLength; index++) {
    var insertion = toInsert[index];
    array.splice(insertion.index, 0, insertion.value);
  }

  // apply modifications
  var toModifyLength = toModify.length;
  var child;
  if (toModifyLength > 0) {
    for (index = 0; index < toModifyLength; index++) {
      var modification = toModify[index];
      child = new PatchContext(context.left[modification.index], modification.delta);
      context.push(child, modification.index);
    }
  }

  if (!context.children) {
    context.setResult(context.left).exit();
    return;
  }
  context.exit();
};
patchFilter.filterName = 'arrays';

var collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
  if (!context || !context.children) {
    return;
  }
  if (context.delta._t !== 'a') {
    return;
  }
  var length = context.children.length;
  var child;
  for (var index = 0; index < length; index++) {
    child = context.children[index];
    context.left[child.childName] = child.result;
  }
  context.setResult(context.left).exit();
};
collectChildrenPatchFilter.filterName = 'arraysCollectChildren';

var reverseFilter = function arraysReverseFilter(context) {
  if (!context.nested) {
    if (context.delta[2] === ARRAY_MOVE) {
      context.newName = '_' + context.delta[1];
      context.setResult([context.delta[0], parseInt(context.childName.substr(1), 10), ARRAY_MOVE]).exit();
    }
    return;
  }
  if (context.delta._t !== 'a') {
    return;
  }
  var name, child;
  for (name in context.delta) {
    if (name === '_t') {
      continue;
    }
    child = new ReverseContext(context.delta[name]);
    context.push(child, name);
  }
  context.exit();
};
reverseFilter.filterName = 'arrays';

var reverseArrayDeltaIndex = function reverseArrayDeltaIndex(delta, index, itemDelta) {
  if (typeof index === 'string' && index[0] === '_') {
    return parseInt(index.substr(1), 10);
  } else if (isArray(itemDelta) && itemDelta[2] === 0) {
    return '_' + index;
  }

  var reverseIndex = +index;
  for (var deltaIndex in delta) {
    var deltaItem = delta[deltaIndex];
    if (isArray(deltaItem)) {
      if (deltaItem[2] === ARRAY_MOVE) {
        var moveFromIndex = parseInt(deltaIndex.substr(1), 10);
        var moveToIndex = deltaItem[1];
        if (moveToIndex === +index) {
          return moveFromIndex;
        }
        if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
          reverseIndex++;
        } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
          reverseIndex--;
        }
      } else if (deltaItem[2] === 0) {
        var deleteIndex = parseInt(deltaIndex.substr(1), 10);
        if (deleteIndex <= reverseIndex) {
          reverseIndex++;
        }
      } else if (deltaItem.length === 1 && deltaIndex <= reverseIndex) {
        reverseIndex--;
      }
    }
  }

  return reverseIndex;
};

var collectChildrenReverseFilter = function collectChildrenReverseFilter(context) {
  if (!context || !context.children) {
    return;
  }
  if (context.delta._t !== 'a') {
    return;
  }
  var length = context.children.length;
  var child;
  var delta = {
    _t: 'a'
  };

  for (var index = 0; index < length; index++) {
    child = context.children[index];
    var name = child.newName;
    if (typeof name === 'undefined') {
      name = reverseArrayDeltaIndex(context.delta, child.childName, child.result);
    }
    if (delta[name] !== child.result) {
      delta[name] = child.result;
    }
  }
  context.setResult(delta).exit();
};
collectChildrenReverseFilter.filterName = 'arraysCollectChildren';

exports.diffFilter = diffFilter;
exports.patchFilter = patchFilter;
exports.collectChildrenPatchFilter = collectChildrenPatchFilter;
exports.reverseFilter = reverseFilter;
exports.collectChildrenReverseFilter = collectChildrenReverseFilter;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/filters/dates.js":
/*!*********************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/filters/dates.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var diffFilter = function datesDiffFilter(context) {
  if (context.left instanceof Date) {
    if (context.right instanceof Date) {
      if (context.left.getTime() !== context.right.getTime()) {
        context.setResult([context.left, context.right]);
      } else {
        context.setResult(undefined);
      }
    } else {
      context.setResult([context.left, context.right]);
    }
    context.exit();
  } else if (context.right instanceof Date) {
    context.setResult([context.left, context.right]).exit();
  }
};
diffFilter.filterName = 'dates';

exports.diffFilter = diffFilter;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/filters/lcs.js":
/*!*******************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/filters/lcs.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*

LCS implementation that supports arrays or strings

reference: http://en.wikipedia.org/wiki/Longest_common_subsequence_problem

*/

var defaultMatch = function defaultMatch(array1, array2, index1, index2) {
  return array1[index1] === array2[index2];
};

var lengthMatrix = function lengthMatrix(array1, array2, match, context) {
  var len1 = array1.length;
  var len2 = array2.length;
  var x, y;

  // initialize empty matrix of len1+1 x len2+1
  var matrix = [len1 + 1];
  for (x = 0; x < len1 + 1; x++) {
    matrix[x] = [len2 + 1];
    for (y = 0; y < len2 + 1; y++) {
      matrix[x][y] = 0;
    }
  }
  matrix.match = match;
  // save sequence lengths for each coordinate
  for (x = 1; x < len1 + 1; x++) {
    for (y = 1; y < len2 + 1; y++) {
      if (match(array1, array2, x - 1, y - 1, context)) {
        matrix[x][y] = matrix[x - 1][y - 1] + 1;
      } else {
        matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
      }
    }
  }
  return matrix;
};

var backtrack = function backtrack(matrix, array1, array2, index1, index2, context) {
  if (index1 === 0 || index2 === 0) {
    return {
      sequence: [],
      indices1: [],
      indices2: []
    };
  }

  if (matrix.match(array1, array2, index1 - 1, index2 - 1, context)) {
    var subsequence = backtrack(matrix, array1, array2, index1 - 1, index2 - 1, context);
    subsequence.sequence.push(array1[index1 - 1]);
    subsequence.indices1.push(index1 - 1);
    subsequence.indices2.push(index2 - 1);
    return subsequence;
  }

  if (matrix[index1][index2 - 1] > matrix[index1 - 1][index2]) {
    return backtrack(matrix, array1, array2, index1, index2 - 1, context);
  } else {
    return backtrack(matrix, array1, array2, index1 - 1, index2, context);
  }
};

var get = function get(array1, array2, match, context) {
  context = context || {};
  var matrix = lengthMatrix(array1, array2, match || defaultMatch, context);
  var result = backtrack(matrix, array1, array2, array1.length, array2.length, context);
  if (typeof array1 === 'string' && typeof array2 === 'string') {
    result.sequence = result.sequence.join('');
  }
  return result;
};

exports.get = get;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/filters/nested.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/filters/nested.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DiffContext = __webpack_require__(/*! ../contexts/diff */ "./node_modules/jsondiffpatch/src/contexts/diff.js").DiffContext;
var PatchContext = __webpack_require__(/*! ../contexts/patch */ "./node_modules/jsondiffpatch/src/contexts/patch.js").PatchContext;
var ReverseContext = __webpack_require__(/*! ../contexts/reverse */ "./node_modules/jsondiffpatch/src/contexts/reverse.js").ReverseContext;

var collectChildrenDiffFilter = function collectChildrenDiffFilter(context) {
  if (!context || !context.children) {
    return;
  }
  var length = context.children.length;
  var child;
  var result = context.result;
  for (var index = 0; index < length; index++) {
    child = context.children[index];
    if (typeof child.result === 'undefined') {
      continue;
    }
    result = result || {};
    result[child.childName] = child.result;
  }
  if (result && context.leftIsArray) {
    result._t = 'a';
  }
  context.setResult(result).exit();
};
collectChildrenDiffFilter.filterName = 'collectChildren';

var objectsDiffFilter = function objectsDiffFilter(context) {
  if (context.leftIsArray || context.leftType !== 'object') {
    return;
  }

  var name,
      child,
      propertyFilter = context.options.propertyFilter;
  for (name in context.left) {
    if (!Object.prototype.hasOwnProperty.call(context.left, name)) {
      continue;
    }
    if (propertyFilter && !propertyFilter(name, context)) {
      continue;
    }
    child = new DiffContext(context.left[name], context.right[name]);
    context.push(child, name);
  }
  for (name in context.right) {
    if (!Object.prototype.hasOwnProperty.call(context.right, name)) {
      continue;
    }
    if (propertyFilter && !propertyFilter(name, context)) {
      continue;
    }
    if (typeof context.left[name] === 'undefined') {
      child = new DiffContext(undefined, context.right[name]);
      context.push(child, name);
    }
  }

  if (!context.children || context.children.length === 0) {
    context.setResult(undefined).exit();
    return;
  }
  context.exit();
};
objectsDiffFilter.filterName = 'objects';

var patchFilter = function nestedPatchFilter(context) {
  if (!context.nested) {
    return;
  }
  if (context.delta._t) {
    return;
  }
  var name, child;
  for (name in context.delta) {
    child = new PatchContext(context.left[name], context.delta[name]);
    context.push(child, name);
  }
  context.exit();
};
patchFilter.filterName = 'objects';

var collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
  if (!context || !context.children) {
    return;
  }
  if (context.delta._t) {
    return;
  }
  var length = context.children.length;
  var child;
  for (var index = 0; index < length; index++) {
    child = context.children[index];
    if (Object.prototype.hasOwnProperty.call(context.left, child.childName) && child.result === undefined) {
      delete context.left[child.childName];
    } else if (context.left[child.childName] !== child.result) {
      context.left[child.childName] = child.result;
    }
  }
  context.setResult(context.left).exit();
};
collectChildrenPatchFilter.filterName = 'collectChildren';

var reverseFilter = function nestedReverseFilter(context) {
  if (!context.nested) {
    return;
  }
  if (context.delta._t) {
    return;
  }
  var name, child;
  for (name in context.delta) {
    child = new ReverseContext(context.delta[name]);
    context.push(child, name);
  }
  context.exit();
};
reverseFilter.filterName = 'objects';

var collectChildrenReverseFilter = function collectChildrenReverseFilter(context) {
  if (!context || !context.children) {
    return;
  }
  if (context.delta._t) {
    return;
  }
  var length = context.children.length;
  var child;
  var delta = {};
  for (var index = 0; index < length; index++) {
    child = context.children[index];
    if (delta[child.childName] !== child.result) {
      delta[child.childName] = child.result;
    }
  }
  context.setResult(delta).exit();
};
collectChildrenReverseFilter.filterName = 'collectChildren';

exports.collectChildrenDiffFilter = collectChildrenDiffFilter;
exports.objectsDiffFilter = objectsDiffFilter;
exports.patchFilter = patchFilter;
exports.collectChildrenPatchFilter = collectChildrenPatchFilter;
exports.reverseFilter = reverseFilter;
exports.collectChildrenReverseFilter = collectChildrenReverseFilter;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/filters/texts.js":
/*!*********************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/filters/texts.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global diff_match_patch */
var TEXT_DIFF = 2;
var DEFAULT_MIN_LENGTH = 60;
var cachedDiffPatch = null;

var getDiffMatchPatch = function getDiffMatchPatch(required) {
  /*jshint camelcase: false */

  if (!cachedDiffPatch) {
    var instance;
    if (typeof diff_match_patch !== 'undefined') {
      // already loaded, probably a browser
      instance = typeof diff_match_patch === 'function' ? new diff_match_patch() : new diff_match_patch.diff_match_patch();
    } else if (true) {
      try {
        var dmpModuleName = 'diff_match_patch_uncompressed';
        var dmp = __webpack_require__("./node_modules/jsondiffpatch/public/external sync recursive ^\\.\\/.*$")("./" + dmpModuleName);
        instance = new dmp.diff_match_patch();
      } catch (err) {
        instance = null;
      }
    }
    if (!instance) {
      if (!required) {
        return null;
      }
      var error = new Error('text diff_match_patch library not found');
      error.diff_match_patch_not_found = true;
      throw error;
    }
    cachedDiffPatch = {
      diff: function diff(txt1, txt2) {
        return instance.patch_toText(instance.patch_make(txt1, txt2));
      },
      patch: function patch(txt1, _patch) {
        var results = instance.patch_apply(instance.patch_fromText(_patch), txt1);
        for (var i = 0; i < results[1].length; i++) {
          if (!results[1][i]) {
            var error = new Error('text patch failed');
            error.textPatchFailed = true;
          }
        }
        return results[0];
      }
    };
  }
  return cachedDiffPatch;
};

var diffFilter = function textsDiffFilter(context) {
  if (context.leftType !== 'string') {
    return;
  }
  var minLength = context.options && context.options.textDiff && context.options.textDiff.minLength || DEFAULT_MIN_LENGTH;
  if (context.left.length < minLength || context.right.length < minLength) {
    context.setResult([context.left, context.right]).exit();
    return;
  }
  // large text, try to use a text-diff algorithm
  var diffMatchPatch = getDiffMatchPatch();
  if (!diffMatchPatch) {
    // diff-match-patch library not available, fallback to regular string replace
    context.setResult([context.left, context.right]).exit();
    return;
  }
  var diff = diffMatchPatch.diff;
  context.setResult([diff(context.left, context.right), 0, TEXT_DIFF]).exit();
};
diffFilter.filterName = 'texts';

var patchFilter = function textsPatchFilter(context) {
  if (context.nested) {
    return;
  }
  if (context.delta[2] !== TEXT_DIFF) {
    return;
  }

  // text-diff, use a text-patch algorithm
  var patch = getDiffMatchPatch(true).patch;
  context.setResult(patch(context.left, context.delta[0])).exit();
};
patchFilter.filterName = 'texts';

var textDeltaReverse = function textDeltaReverse(delta) {
  var i,
      l,
      lines,
      line,
      lineTmp,
      header = null,
      headerRegex = /^@@ +\-(\d+),(\d+) +\+(\d+),(\d+) +@@$/,
      lineHeader,
      lineAdd,
      lineRemove;
  lines = delta.split('\n');
  for (i = 0, l = lines.length; i < l; i++) {
    line = lines[i];
    var lineStart = line.slice(0, 1);
    if (lineStart === '@') {
      header = headerRegex.exec(line);
      lineHeader = i;
      lineAdd = null;
      lineRemove = null;

      // fix header
      lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
    } else if (lineStart === '+') {
      lineAdd = i;
      lines[i] = '-' + lines[i].slice(1);
      if (lines[i - 1].slice(0, 1) === '+') {
        // swap lines to keep default order (-+)
        lineTmp = lines[i];
        lines[i] = lines[i - 1];
        lines[i - 1] = lineTmp;
      }
    } else if (lineStart === '-') {
      lineRemove = i;
      lines[i] = '+' + lines[i].slice(1);
    }
  }
  return lines.join('\n');
};

var reverseFilter = function textsReverseFilter(context) {
  if (context.nested) {
    return;
  }
  if (context.delta[2] !== TEXT_DIFF) {
    return;
  }

  // text-diff, use a text-diff algorithm
  context.setResult([textDeltaReverse(context.delta[0]), 0, TEXT_DIFF]).exit();
};
reverseFilter.filterName = 'texts';

exports.diffFilter = diffFilter;
exports.patchFilter = patchFilter;
exports.reverseFilter = reverseFilter;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/filters/trivial.js":
/*!***********************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/filters/trivial.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isArray = typeof Array.isArray === 'function' ?
// use native function
Array.isArray :
// use instanceof operator
function (a) {
  return a instanceof Array;
};

var diffFilter = function trivialMatchesDiffFilter(context) {
  if (context.left === context.right) {
    context.setResult(undefined).exit();
    return;
  }
  if (typeof context.left === 'undefined') {
    if (typeof context.right === 'function') {
      throw new Error('functions are not supported');
    }
    context.setResult([context.right]).exit();
    return;
  }
  if (typeof context.right === 'undefined') {
    context.setResult([context.left, 0, 0]).exit();
    return;
  }
  if (typeof context.left === 'function' || typeof context.right === 'function') {
    throw new Error('functions are not supported');
  }
  context.leftType = context.left === null ? 'null' : _typeof(context.left);
  context.rightType = context.right === null ? 'null' : _typeof(context.right);
  if (context.leftType !== context.rightType) {
    context.setResult([context.left, context.right]).exit();
    return;
  }
  if (context.leftType === 'boolean' || context.leftType === 'number') {
    context.setResult([context.left, context.right]).exit();
    return;
  }
  if (context.leftType === 'object') {
    context.leftIsArray = isArray(context.left);
  }
  if (context.rightType === 'object') {
    context.rightIsArray = isArray(context.right);
  }
  if (context.leftIsArray !== context.rightIsArray) {
    context.setResult([context.left, context.right]).exit();
    return;
  }

  if (context.left instanceof RegExp) {
    if (context.right instanceof RegExp) {
      context.setResult([context.left.toString(), context.right.toString()]).exit();
    } else {
      context.setResult([context.left, context.right]).exit();
      return;
    }
  }
};
diffFilter.filterName = 'trivial';

var patchFilter = function trivialMatchesPatchFilter(context) {
  if (typeof context.delta === 'undefined') {
    context.setResult(context.left).exit();
    return;
  }
  context.nested = !isArray(context.delta);
  if (context.nested) {
    return;
  }
  if (context.delta.length === 1) {
    context.setResult(context.delta[0]).exit();
    return;
  }
  if (context.delta.length === 2) {
    if (context.left instanceof RegExp) {
      var regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(context.delta[1]);
      if (regexArgs) {
        context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
        return;
      }
    }
    context.setResult(context.delta[1]).exit();
    return;
  }
  if (context.delta.length === 3 && context.delta[2] === 0) {
    context.setResult(undefined).exit();
    return;
  }
};
patchFilter.filterName = 'trivial';

var reverseFilter = function trivialReferseFilter(context) {
  if (typeof context.delta === 'undefined') {
    context.setResult(context.delta).exit();
    return;
  }
  context.nested = !isArray(context.delta);
  if (context.nested) {
    return;
  }
  if (context.delta.length === 1) {
    context.setResult([context.delta[0], 0, 0]).exit();
    return;
  }
  if (context.delta.length === 2) {
    context.setResult([context.delta[1], context.delta[0]]).exit();
    return;
  }
  if (context.delta.length === 3 && context.delta[2] === 0) {
    context.setResult([context.delta[0]]).exit();
    return;
  }
};
reverseFilter.filterName = 'trivial';

exports.diffFilter = diffFilter;
exports.patchFilter = patchFilter;
exports.reverseFilter = reverseFilter;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/pipe.js":
/*!************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/pipe.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Pipe = function Pipe(name) {
  this.name = name;
  this.filters = [];
};

Pipe.prototype.process = function (input) {
  if (!this.processor) {
    throw new Error('add this pipe to a processor before using it');
  }
  var debug = this.debug;
  var length = this.filters.length;
  var context = input;
  for (var index = 0; index < length; index++) {
    var filter = this.filters[index];
    if (debug) {
      this.log('filter: ' + filter.filterName);
    }
    filter(context);
    if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object' && context.exiting) {
      context.exiting = false;
      break;
    }
  }
  if (!context.next && this.resultCheck) {
    this.resultCheck(context);
  }
};

Pipe.prototype.log = function (msg) {
  console.log('[jsondiffpatch] ' + this.name + ' pipe, ' + msg);
};

Pipe.prototype.append = function () {
  this.filters.push.apply(this.filters, arguments);
  return this;
};

Pipe.prototype.prepend = function () {
  this.filters.unshift.apply(this.filters, arguments);
  return this;
};

Pipe.prototype.indexOf = function (filterName) {
  if (!filterName) {
    throw new Error('a filter name is required');
  }
  for (var index = 0; index < this.filters.length; index++) {
    var filter = this.filters[index];
    if (filter.filterName === filterName) {
      return index;
    }
  }
  throw new Error('filter not found: ' + filterName);
};

Pipe.prototype.list = function () {
  var names = [];
  for (var index = 0; index < this.filters.length; index++) {
    var filter = this.filters[index];
    names.push(filter.filterName);
  }
  return names;
};

Pipe.prototype.after = function (filterName) {
  var index = this.indexOf(filterName);
  var params = Array.prototype.slice.call(arguments, 1);
  if (!params.length) {
    throw new Error('a filter is required');
  }
  params.unshift(index + 1, 0);
  Array.prototype.splice.apply(this.filters, params);
  return this;
};

Pipe.prototype.before = function (filterName) {
  var index = this.indexOf(filterName);
  var params = Array.prototype.slice.call(arguments, 1);
  if (!params.length) {
    throw new Error('a filter is required');
  }
  params.unshift(index, 0);
  Array.prototype.splice.apply(this.filters, params);
  return this;
};

Pipe.prototype.replace = function (filterName) {
  var index = this.indexOf(filterName);
  var params = Array.prototype.slice.call(arguments, 1);
  if (!params.length) {
    throw new Error('a filter is required');
  }
  params.unshift(index, 1);
  Array.prototype.splice.apply(this.filters, params);
  return this;
};

Pipe.prototype.remove = function (filterName) {
  var index = this.indexOf(filterName);
  this.filters.splice(index, 1);
  return this;
};

Pipe.prototype.clear = function () {
  this.filters.length = 0;
  return this;
};

Pipe.prototype.shouldHaveResult = function (should) {
  if (should === false) {
    this.resultCheck = null;
    return;
  }
  if (this.resultCheck) {
    return;
  }
  var pipe = this;
  this.resultCheck = function (context) {
    if (!context.hasResult) {
      console.log(context);
      var error = new Error(pipe.name + ' failed');
      error.noResult = true;
      throw error;
    }
  };
  return this;
};

exports.Pipe = Pipe;

/***/ }),

/***/ "./node_modules/jsondiffpatch/src/processor.js":
/*!*****************************************************!*\
  !*** ./node_modules/jsondiffpatch/src/processor.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Processor = function Processor(options) {
  this.selfOptions = options || {};
  this.pipes = {};
};

Processor.prototype.options = function (options) {
  if (options) {
    this.selfOptions = options;
  }
  return this.selfOptions;
};

Processor.prototype.pipe = function (name, pipe) {
  if (typeof name === 'string') {
    if (typeof pipe === 'undefined') {
      return this.pipes[name];
    } else {
      this.pipes[name] = pipe;
    }
  }
  if (name && name.name) {
    pipe = name;
    if (pipe.processor === this) {
      return pipe;
    }
    this.pipes[pipe.name] = pipe;
  }
  pipe.processor = this;
  return pipe;
};

Processor.prototype.process = function (input, pipe) {
  var context = input;
  context.options = this.options();
  var nextPipe = pipe || input.pipe || 'default';
  var lastPipe, lastContext;
  while (nextPipe) {
    if (typeof context.nextAfterChildren !== 'undefined') {
      // children processed and coming back to parent
      context.next = context.nextAfterChildren;
      context.nextAfterChildren = null;
    }

    if (typeof nextPipe === 'string') {
      nextPipe = this.pipe(nextPipe);
    }
    nextPipe.process(context);
    lastContext = context;
    lastPipe = nextPipe;
    nextPipe = null;
    if (context) {
      if (context.next) {
        context = context.next;
        nextPipe = lastContext.nextPipe || context.pipe || lastPipe;
      }
    }
  }
  return context.hasResult ? context.result : undefined;
};

exports.Processor = Processor;

/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/button/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/button/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
    getClassNames: function getClassNames(attrs) {
        var classNames = [];
        classNames.push(attrs.raised ? "mmf-button--raised" : "mmf-button--flat");
        classNames.push(attrs.disabled ? "is-disabled" : "is-enabled");
        if (attrs.class) {
            classNames.push(attrs.class);
        }
        return classNames.join(" ");
    },
    view: function view(vnode) {
        var attrs = _extends({
            disabled: false,
            onclick: function onclick(event) {
                return vnode.attrs.disabled !== true && vnode.attrs.onClick(event);
            }
        }, vnode.attrs);

        attrs.class = this.getClassNames(vnode.attrs);

        return m("button.mmf-button", attrs, vnode.children);
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/checkbox/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/checkbox/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
    view: function view(vnode) {
        return m("input.mmf-checkbox", {
            id: vnode.attrs.id,
            type: "checkbox",
            checked: vnode.attrs.value,
            onchange: m.withAttr("checked", vnode.attrs.onChange || Function.prototype)
        });
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/checkboxform/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/checkboxform/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");
var Checkbox = __webpack_require__(/*! ../checkbox */ "./node_modules/mithril-material-forms/components/checkbox/index.js");
var Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");
var Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");

module.exports = {
    view: function view(vnode) {
        var attrs = _extends({
            id: null,
            title: "",
            value: "",
            errors: [],
            description: "",
            placeholder: "",
            onchange: Function.prototype
        }, vnode.attrs);

        return m(".mmf-form.mmf-form--checkbox", {
            "class": Errors.getErrorClass(attrs.errors)
        }, m(Checkbox, {
            id: vnode.attrs.id,
            value: vnode.attrs.value,
            onChange: vnode.attrs.onchange
        }), m(Label, attrs), m(Errors, attrs), attrs.description ? m(".mmf-meta", attrs.description) : "");
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/errors/getErrorClass.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/errors/getErrorClass.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getErrorClass(errors) {
    if (errors == null || errors.length === 0) {
        return "no-error";
    }

    for (var i = 0, l = errors.length; i < l; i += 1) {
        if (typeof errors[i] === "string" || errors[i].severity !== "warning") {
            return "has-error";
        }
    }

    return "has-warning";
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/errors/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/errors/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var m = __webpack_require__(/*! mithril */ "mithril");

function isVNode(object) {
    return typeof object.tag === "string" && object.attrs != null && _typeof(object.attrs) === "object";
}

module.exports = {

    getErrorClass: __webpack_require__(/*! ./getErrorClass */ "./node_modules/mithril-material-forms/components/errors/getErrorClass.js"),

    view: function view(vnode) {
        if (vnode.attrs.errors == null || vnode.attrs.errors.length === 0) {
            return "";
        }

        return m("ul.mmf-form__errors", vnode.attrs.errors.map(function (error) {
            if (isVNode(error)) {
                return m("li.mmf-form__error.mmf-form__error--" + error.attrs.severity, error);
            }

            if (error && (typeof error === "undefined" ? "undefined" : _typeof(error)) === "object") {
                if (error.severity === "warning") {
                    return m("li.mmf-form__error.mmf-form__error--warning", m.trust(error.message));
                }
                return m("li.mmf-form__error.mmf-form__error--error", m.trust(error.message));
            }
            return m("li.mmf-form__error.mmf-form__error--error", m.trust(error));
        }));
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/imagepreview/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/imagepreview/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");
var RATIO_DEFAULT = [16, 9];

function isEmpty(value) {
    return value == null || value === "";
}

function getRatioStyle(ratio) {
    return getRatio(ratio).toFixed(2) + "%";
}

function getRatio(ratio) {
    var dim = ratio.split(":").map(parseFloat);
    dim = dim.length === 2 ? dim : RATIO_DEFAULT;
    return 100 * dim[1] / dim[0];
}

var MetaDescription = {
    view: function view(vnode) {
        var attrs = vnode.attrs;
        return [isEmpty(attrs.url) ? m(".mmf-preview__placeholder", attrs.placeholder) : [attrs.description ? m(".mmf-preview__description", m.trust(attrs.description)) : "", m(".mmf-preview__overflow-indicator")], vnode.children];
    }
};

var InlineImage = {
    view: function view(vnode) {
        var attrs = vnode.attrs;
        return m(".mmf-preview__content", {
            style: isEmpty(attrs.url) ? "" : "padding-bottom: " + getRatioStyle(attrs.maxRatio) + ";",
            oncreate: attrs.oncreate
        }, isEmpty(attrs.url) ? m(".mmf-preview__placeholder", attrs.placeholder) : [m("img", {
            src: attrs.url,
            onload: attrs.onload
        }), attrs.description ? m(".mmf-preview__description", m.trust(attrs.description)) : "", m(".mmf-preview__overflow-indicator")], vnode.children);
    }
};

var ImagePreview = {

    overflowContainer: null,

    updateRatio: function updateRatio(maxRatio, image) {
        if (this.overflowContainer != null && image.naturalWidth) {
            var ratioMax = getRatio(maxRatio);
            var ratioImg = getRatio(image.naturalWidth + ":" + image.naturalHeight);

            if (ratioMax >= ratioImg) {
                this.overflowContainer.style.paddingBottom = ratioImg.toFixed(2) + "%";
                this.overflowContainer.classList.remove("with-overflow");
                this.hasOverflow = false;
            } else {
                this.overflowContainer.style.paddingBottom = ratioMax.toFixed(2) + "%";
                this.overflowContainer.classList.add("with-overflow");
                this.hasOverflow = true;
            }
        }
    },
    view: function view(vnode) {
        var _this = this;

        var attrs = _extends({
            url: null,
            "class": "",
            asBackgroundImage: false,
            description: null,
            placeholder: null,
            onclick: null,
            maxRatio: "16:9",
            // "private"
            onload: function onload(event) {
                return _this.updateRatio(attrs.maxRatio, event.currentTarget);
            },
            oncreate: function oncreate(content) {
                _this.overflowContainer = content.dom;
            }
        }, vnode.attrs);

        return m(".mmf-preview.mmf-preview--image", {
            "class": attrs.class + (isEmpty(attrs.url) ? "" : " with-image"),
            style: attrs.asBackgroundImage && !isEmpty(attrs.url) ? "background-image: url(" + attrs.url + ");" : ""
        }, attrs.asBackgroundImage ? m(MetaDescription, attrs, vnode.children) : m(InlineImage, attrs, vnode.children));
    }
};

module.exports = ImagePreview;

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/input/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/input/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
    value: null,
    hasFocus: false,

    onupdate: function onupdate(vnode) {
        // @prevent redraw of input
        vnode.dom.id = vnode.attrs.id; // updating the pointer dependend attributes outside of mithril
    },
    view: function view(_ref) {
        var _this = this;

        var attrs = _ref.attrs;

        var value = attrs.value;
        if (this.hasFocus & this.value != null) {
            value = this.value; // this will remove any changes applied to this data from "outside"
        }

        this.value = value;

        var inputAttributes = {
            // id: attrs.id, // if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
            type: attrs.type,
            value: value,
            oninput: m.withAttr("value", function (currentValue) {
                return _this.value = currentValue;
            }),
            // @fixme this might trigger updates, but ensures the property is always set (on initial rendering)
            oncreate: function oncreate(vnode) {
                return vnode.dom.id = attrs.id;
            },
            onfocus: function onfocus(event) {
                _this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
            },
            onblur: function onblur(event) {
                _this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
            }
        };

        var updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        inputAttributes[updateEvent] = function () {
            return attrs.onChange(_this.value);
        };

        return m("input.mmf-input", inputAttributes);
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/inputform/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/inputform/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");
var Input = __webpack_require__(/*! ../input */ "./node_modules/mithril-material-forms/components/input/index.js");
var Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");
var sanitizeValue = __webpack_require__(/*! ./sanitizeValue */ "./node_modules/mithril-material-forms/components/inputform/sanitizeValue.js");
var Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");

var TYPES = {
    string: "text",
    integer: "number",
    number: "number"
};

module.exports = {
    oncreate: function oncreate(vnode) {
        this.$form = vnode.dom;
    },
    updateClasses: function updateClasses(value) {
        var hasValue = value !== "";
        this.$form.classList.remove(hasValue ? "isEmpty" : "isNotEmpty");
        this.$form.classList.add(hasValue === false ? "isEmpty" : "isNotEmpty");
    },
    onfocus: function onfocus() {
        this.$form.classList.add("hasFocus");
        this.$form.classList.remove("hasNoFocus");
    },
    onblur: function onblur(value) {
        this.$form.classList.add("hasNoFocus");
        this.$form.classList.remove("hasFocus");
        this.updateClasses(value);
    },
    hasFocus: function hasFocus() {
        return this.$form && this.$form.classList.contains("hasFocus");
    },
    view: function view(vnode) {
        var _this = this;

        var inputType = TYPES[vnode.attrs.type] || "text";
        var attrs = _extends({
            id: null,
            title: "",
            value: "",
            errors: [],
            description: "",
            placeholder: "",
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype
        }, vnode.attrs);

        var focusClass = this.hasFocus() ? "hasFocus" : "hasNoFocus";
        var errorClass = Errors.getErrorClass(attrs.errors);
        var emptyClass = attrs.value === "" ? "isEmpty" : "isNotEmpty";

        var view = m(".mmf-form.mmf-form--input", {
            "class": focusClass + " " + errorClass + " " + emptyClass
        }, m(Label, attrs), m(Input, {
            type: inputType,
            id: attrs.id,
            instantUpdate: attrs.instantUpdate,
            onChange: function onChange(value) {
                return attrs.onchange(sanitizeValue(inputType, value));
            },
            value: attrs.value,
            onfocus: function onfocus(e) {
                _this.onfocus();
                attrs.onfocus && attrs.onfocus(e);
            },
            onblur: function onblur(e) {
                _this.onblur(e.target.value);
                attrs.onblur && attrs.onblur(e);
            }
        }), m(Errors, attrs), attrs.description ? m(".mmf-meta", attrs.description) : "");

        return view;
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/inputform/sanitizeValue.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/inputform/sanitizeValue.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sanitizeValue(type, value) {
    if (type === "number") {
        var intValue = parseInt(value);
        var floatValue = parseFloat(value);
        if (floatValue == value) {
            // eslint-disable-line
            return floatValue;
        } else if (isNaN(intValue)) {
            return value;
        }
        return intValue;
    }
    return value;
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/label/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/label/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
    view: function view(vnode) {
        return m("label.mmf-label", {
            "for": vnode.attrs.id,
            "class": vnode.attrs.class
        }, vnode.attrs.title);
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/select/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/select/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
    view: function view(vnode) {
        var _this = this;

        return m("div.mmf-select__wrapper", { oncreate: function oncreate(vnode) {
                return _this.$wrapper = vnode.dom;
            } }, m("select.mmf-select", {
            id: vnode.attrs.id,
            value: vnode.attrs.value,
            "class": vnode.attrs.class,
            onfocus: function onfocus() {
                _this.$wrapper && _this.$wrapper.classList.add("has-focus");
                vnode.attrs.onfocus && vnode.attrs.onfocus(vnode);
            },
            onblur: function onblur() {
                _this.$wrapper && _this.$wrapper.classList.remove("has-focus");
                vnode.attrs.onblur && vnode.attrs.onblur(vnode);
            },
            // @reminder will always be string, which must be specified in json-schema or else datatype must
            // be passed to select-component
            onchange: m.withAttr("value", vnode.attrs.onchange)
        }, vnode.attrs.options.map(function (value) {
            var title = value.title || value;
            value = "" + (value.value == null ? value : value.value); // value must be a string or else is discarded
            return m("option", { value: value }, title);
        })));
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/selectform/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/selectform/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");
var Select = __webpack_require__(/*! ../select */ "./node_modules/mithril-material-forms/components/select/index.js");
var Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");
var Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");

module.exports = {
    view: function view(vnode) {
        var attrs = _extends({
            id: null,
            value: "",
            options: [{ title: "-", value: false }],
            errors: [],
            description: "",
            placeholder: "",
            onchange: Function.prototype
        }, vnode.attrs);

        return m(".mmf-form.mmf-form--select", {
            "class": Errors.getErrorClass(attrs.errors)
        }, m(Select, attrs), m(Label, _extends({ "class": "mmf-grow-2" }, attrs)), m(Errors, attrs), attrs.description ? m(".mmf-meta", attrs.description) : "");
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/textarea/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/textarea/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");
var autosize = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");

module.exports = {
    onupdate: function onupdate(vnode) {
        autosize.update(vnode.dom);
    },
    view: function view(vnode) {
        var attrs = _extends({
            id: null,
            value: "",
            rows: 1,
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype,
            oncreate: Function.prototype,
            onbeforeremove: Function.prototype
        }, vnode.attrs);

        var textareaAttributes = {
            id: attrs.id,
            value: attrs.value,
            rows: attrs.rows,
            onblur: attrs.onblur,
            onfocus: attrs.onfocus,
            onupdate: function onupdate(node) {
                return autosize.update(node.dom);
            },
            oncreate: function oncreate(node) {
                attrs.oncreate(node);
                autosize(node.dom);
                autosize.update(vnode.dom);
            },
            onbeforeremove: function onbeforeremove(node) {
                attrs.onbeforeremove(node);
                autosize.destroy(node.dom);
            }
        };

        var updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        textareaAttributes[updateEvent] = attrs.onchange;

        return m("textarea.mmf-textarea", textareaAttributes);
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/textareaform/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/textareaform/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var m = __webpack_require__(/*! mithril */ "mithril");
var Textarea = __webpack_require__(/*! ../textarea */ "./node_modules/mithril-material-forms/components/textarea/index.js");
var Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");
var Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");

function isEmpty(value) {
    return value == null || value === "";
}

module.exports = {
    oncreate: function oncreate(vnode) {
        this.$form = vnode.dom;
        this.onblur(vnode.attrs.value);
    },
    onfocus: function onfocus() {
        this.$form.classList.remove("hasNoFocus");
        this.$form.classList.add("hasFocus");
    },
    onblur: function onblur(value) {
        this.$form.classList.remove("hasFocus");
        this.$form.classList.add("hasNoFocus");
        this.updateClasses(value);
    },
    updateClasses: function updateClasses(value) {
        var hasValue = isEmpty(value) === false;
        this.$form.classList.remove(hasValue ? "isEmpty" : "isNotEmpty");
        this.$form.classList.add(hasValue === false ? "isEmpty" : "isNotEmpty");
    },
    onupdate: function onupdate(vnode) {
        this.updateClasses(vnode.attrs.value);
    },
    view: function view(vnode) {
        var _this = this;

        var attrs = _extends({
            id: null,
            title: "",
            value: "",
            errors: [],
            description: "",
            placeholder: "",
            instantUpdate: false,
            onblur: Function.prototype,
            onfocus: Function.prototype,
            onchange: Function.prototype
        }, vnode.attrs);

        return m(".mmf-form.mmf-form--textarea", {
            "class": Errors.getErrorClass(attrs.errors)
        }, m(Label, attrs), m(Textarea, {
            id: attrs.id,
            value: attrs.value,
            instantUpdate: attrs.instantUpdate,
            onchange: m.withAttr("value", attrs.onchange),
            onblur: function onblur(e) {
                _this.onblur(e.target.value);
                attrs.onblur(e);
            },
            onfocus: function onfocus(e) {
                _this.onfocus();
                attrs.onfocus(e);
            }
        }), m(Errors, attrs), attrs.description ? m(".mmf-meta", attrs.description) : "");
    }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mithril-material-forms/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    button: __webpack_require__(/*! ./components/button */ "./node_modules/mithril-material-forms/components/button/index.js"),
    checkbox: __webpack_require__(/*! ./components/checkbox */ "./node_modules/mithril-material-forms/components/checkbox/index.js"),
    checkboxForm: __webpack_require__(/*! ./components/checkboxform */ "./node_modules/mithril-material-forms/components/checkboxform/index.js"),
    errors: __webpack_require__(/*! ./components/errors */ "./node_modules/mithril-material-forms/components/errors/index.js"),
    input: __webpack_require__(/*! ./components/input */ "./node_modules/mithril-material-forms/components/input/index.js"),
    inputForm: __webpack_require__(/*! ./components/inputform */ "./node_modules/mithril-material-forms/components/inputform/index.js"),
    label: __webpack_require__(/*! ./components/label */ "./node_modules/mithril-material-forms/components/label/index.js"),
    select: __webpack_require__(/*! ./components/select */ "./node_modules/mithril-material-forms/components/select/index.js"),
    selectForm: __webpack_require__(/*! ./components/selectform */ "./node_modules/mithril-material-forms/components/selectform/index.js"),
    textarea: __webpack_require__(/*! ./components/textarea */ "./node_modules/mithril-material-forms/components/textarea/index.js"),
    textareaForm: __webpack_require__(/*! ./components/textareaform */ "./node_modules/mithril-material-forms/components/textareaform/index.js"),
    imagePreview: __webpack_require__(/*! ./components/imagepreview */ "./node_modules/mithril-material-forms/components/imagepreview/index.js")
};

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//      
// An event handler can take an optional event argument
// and should not return a value


// An array of all currently registered event handlers for a type


// A map of event types and their corresponding event handlers.


/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all) {
	all = all || Object.create(null);

	return {
		/**
   * Register an event handler for the given type.
   *
   * @param  {String} type	Type of event to listen for, or `"*"` for all events
   * @param  {Function} handler Function to call in response to given event
   * @memberOf mitt
   */
		on: function on(type, handler) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
   * Remove an event handler for the given type.
   *
   * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
   * @param  {Function} handler Handler function to remove
   * @memberOf mitt
   */
		off: function off(type, handler) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
   * Invoke all handlers for the given type.
   * If present, `"*"` handlers are invoked after type-matched handlers.
   *
   * @param {String} type  The event type to invoke
   * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
   * @memberOf mitt
   */
		emit: function emit(type, evt) {
			(all[type] || []).slice().map(function (handler) {
				handler(evt);
			});
			(all['*'] || []).slice().map(function (handler) {
				handler(type, evt);
			});
		}
	};
}

exports.default = mitt;
//# sourceMappingURL=mitt.es.js.map

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.js":
/*!****************************************!*\
  !*** ./node_modules/mitt/dist/mitt.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function n(n) {
  return n = n || Object.create(null), { on: function on(c, e) {
      (n[c] || (n[c] = [])).push(e);
    }, off: function off(c, e) {
      n[c] && n[c].splice(n[c].indexOf(e) >>> 0, 1);
    }, emit: function emit(c, e) {
      (n[c] || []).slice().map(function (n) {
        n(e);
      }), (n["*"] || []).slice().map(function (n) {
        n(c, e);
      });
    } };
}module.exports = n;
//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/redux-undo/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-undo/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.parseActions = parseActions;
exports.default = undoable;
exports.distinctState = distinctState;
exports.includeAction = includeAction;
exports.ifAction = ifAction;
exports.excludeAction = excludeAction;

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

// debug output
var __DEBUG__ = undefined;
function debug() {
  if (__DEBUG__) {
    var _console;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!console.group) {
      args.unshift('%credux-undo', 'font-style: italic');
    }
    (_console = console).log.apply(_console, args);
  }
}
function debugStart(action, state) {
  if (__DEBUG__) {
    var args = ['action', action.type];
    if (console.group) {
      var _console2;

      args.unshift('%credux-undo', 'font-style: italic');
      (_console2 = console).groupCollapsed.apply(_console2, args);
      console.log('received', { state: state, action: action });
    } else {
      debug.apply(undefined, args);
    }
  }
}
function debugEnd() {
  if (__DEBUG__) {
    return console.groupEnd && console.groupEnd();
  }
}
// /debug output

// action types
var ActionTypes = exports.ActionTypes = {
  UNDO: '@@redux-undo/UNDO',
  REDO: '@@redux-undo/REDO',
  JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
  JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST'
};
// /action types

// action creators to change the state
var ActionCreators = exports.ActionCreators = {
  undo: function undo() {
    return { type: ActionTypes.UNDO };
  },
  redo: function redo() {
    return { type: ActionTypes.REDO };
  },
  jumpToFuture: function jumpToFuture(index) {
    return { type: ActionTypes.JUMP_TO_FUTURE, index: index };
  },
  jumpToPast: function jumpToPast(index) {
    return { type: ActionTypes.JUMP_TO_PAST, index: index };
  }
};
// /action creators

// length: get length of history
function length(history) {
  var past = history.past;
  var future = history.future;

  return past.length + 1 + future.length;
}
// /length

// insert: insert `state` into history, which means adding the current state
//         into `past`, setting the new `state` as `present` and erasing
//         the `future`.
function insert(history, state, limit) {
  debug('insert', { state: state, history: history, free: limit - length(history) });

  var past = history.past;
  var present = history.present;

  var historyOverflow = limit && length(history) >= limit;

  if (present === undefined) {
    // init history
    return {
      past: [],
      present: state,
      future: []
    };
  }

  return {
    past: [].concat(_toConsumableArray(past.slice(historyOverflow ? 1 : 0)), [present]),
    present: state,
    future: []
  };
}
// /insert

// undo: go back to the previous point in history
function undo(history) {
  debug('undo', { history: history });

  var past = history.past;
  var present = history.present;
  var future = history.future;

  if (past.length <= 0) return history;

  return {
    past: past.slice(0, past.length - 1), // remove last element from past
    present: past[past.length - 1], // set element as new present
    future: [present].concat(_toConsumableArray(future))
  };
}
// /undo

// redo: go to the next point in history
function redo(history) {
  debug('redo', { history: history });

  var past = history.past;
  var present = history.present;
  var future = history.future;

  if (future.length <= 0) return history;

  return {
    future: future.slice(1, future.length), // remove element from future
    present: future[0], // set element as new present
    past: [].concat(_toConsumableArray(past), [present // old present state is in the past now
    ])
  };
}
// /redo

// jumpToFuture: jump to requested index in future history
function jumpToFuture(history, index) {
  if (index === 0) return redo(history);

  var past = history.past;
  var present = history.present;
  var future = history.future;

  return {
    future: future.slice(index + 1),
    present: future[index],
    past: past.concat([present]).concat(future.slice(0, index))
  };
}
// /jumpToFuture

// jumpToPast: jump to requested index in past history
function jumpToPast(history, index) {
  if (index === history.past.length - 1) return undo(history);

  var past = history.past;
  var present = history.present;
  var future = history.future;

  return {
    future: past.slice(index + 1).concat([present]).concat(future),
    present: past[index],
    past: past.slice(0, index)
  };
}
// /jumpToPast

// wrapState: for backwards compatibility to 0.4
function wrapState(state) {
  return _extends({}, state, {
    history: state
  });
}
// /wrapState

// updateState
function updateState(state, history) {
  return wrapState(_extends({}, state, history));
}
// /updateState

// createHistory
function createHistory(state) {
  return {
    past: [],
    present: state,
    future: []
  };
}
// /createHistory

// parseActions
function parseActions(rawActions) {
  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (Array.isArray(rawActions)) {
    return rawActions;
  } else if (typeof rawActions === 'string') {
    return [rawActions];
  }
  return defaultValue;
}
// /parseActions

// redux-undo higher order reducer
function undoable(reducer) {
  var rawConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  __DEBUG__ = rawConfig.debug;

  var config = {
    initialState: rawConfig.initialState,
    initTypes: parseActions(rawConfig.initTypes, ['@@redux/INIT', '@@INIT']),
    limit: rawConfig.limit,
    filter: rawConfig.filter || function () {
      return true;
    },
    undoType: rawConfig.undoType || ActionTypes.UNDO,
    redoType: rawConfig.redoType || ActionTypes.REDO,
    jumpToPastType: rawConfig.jumpToPastType || ActionTypes.JUMP_TO_PAST,
    jumpToFutureType: rawConfig.jumpToFutureType || ActionTypes.JUMP_TO_FUTURE
  };
  config.history = rawConfig.initialHistory || createHistory(config.initialState);

  if (config.initTypes.length === 0) {
    console.warn('redux-undo: supply at least one action type in initTypes to ensure initial state');
  }

  return function (state, action) {
    debugStart(action, state);
    var res = undefined;
    switch (action.type) {
      case config.undoType:
        res = undo(state);
        debug('after undo', res);
        debugEnd();
        return res ? updateState(state, res) : state;

      case config.redoType:
        res = redo(state);
        debug('after redo', res);
        debugEnd();
        return res ? updateState(state, res) : state;

      case config.jumpToPastType:
        res = jumpToPast(state, action.index);
        debug('after jumpToPast', res);
        debugEnd();
        return res ? updateState(state, res) : state;

      case config.jumpToFutureType:
        res = jumpToFuture(state, action.index);
        debug('after jumpToFuture', res);
        debugEnd();
        return res ? updateState(state, res) : state;

      default:
        res = reducer(state && state.present, action);

        if (config.initTypes.some(function (actionType) {
          return actionType === action.type;
        })) {
          debug('reset history due to init action');
          debugEnd();
          return wrapState(_extends({}, state, createHistory(res)));
        }

        if (config.filter && typeof config.filter === 'function') {
          if (!config.filter(action, res, state && state.present)) {
            debug('filter prevented action, not storing it');
            debugEnd();
            return wrapState(_extends({}, state, {
              present: res
            }));
          }
        }

        var history = state && state.present !== undefined ? state : config.history;
        var updatedHistory = insert(history, res, config.limit);
        debug('after insert', { history: updatedHistory, free: config.limit - length(updatedHistory) });
        debugEnd();

        return wrapState(_extends({}, state, updatedHistory));
    }
  };
}
// /redux-undo

// distinctState helper
function distinctState() {
  return function (action, currentState, previousState) {
    return currentState !== previousState;
  };
}
// /distinctState

// includeAction helper
function includeAction(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) >= 0;
  };
}
// /includeAction

// deprecated ifAction helper
function ifAction(rawActions) {
  console.error('Deprecation Warning: Please change `ifAction` to `includeAction`');
  return includeAction(rawActions);
}
// /ifAction

// excludeAction helper
function excludeAction() {
  var rawActions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) < 0;
  };
}
// /excludeAction

/***/ }),

/***/ "./node_modules/redux/es/applyMiddleware.js":
/*!**************************************************!*\
  !*** ./node_modules/redux/es/applyMiddleware.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js");

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/redux/es/bindActionCreators.js":
/*!*****************************************************!*\
  !*** ./node_modules/redux/es/bindActionCreators.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/redux/es/combineReducers.js":
/*!**************************************************!*\
  !*** ./node_modules/redux/es/combineReducers.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(/*! ./createStore */ "./node_modules/redux/es/createStore.js");

var _isPlainObject = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(/*! ./utils/warning */ "./node_modules/redux/es/utils/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),

/***/ "./node_modules/redux/es/compose.js":
/*!******************************************!*\
  !*** ./node_modules/redux/es/compose.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),

/***/ "./node_modules/redux/es/createStore.js":
/*!**********************************************!*\
  !*** ./node_modules/redux/es/createStore.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(/*! ./createStore */ "./node_modules/redux/es/createStore.js");

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(/*! ./combineReducers */ "./node_modules/redux/es/combineReducers.js");

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(/*! ./bindActionCreators */ "./node_modules/redux/es/bindActionCreators.js");

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(/*! ./applyMiddleware */ "./node_modules/redux/es/applyMiddleware.js");

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js");

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(/*! ./utils/warning */ "./node_modules/redux/es/utils/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;

/***/ }),

/***/ "./node_modules/redux/es/utils/warning.js":
/*!************************************************!*\
  !*** ./node_modules/redux/es/utils/warning.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = (0, _ponyfill2.default)(root);
exports.default = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ "./node_modules/valid-url/index.js":
/*!*****************************************!*\
  !*** ./node_modules/valid-url/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function (module) {
    'use strict';

    module.exports.is_uri = is_iri;
    module.exports.is_http_uri = is_http_iri;
    module.exports.is_https_uri = is_https_iri;
    module.exports.is_web_uri = is_web_iri;
    // Create aliases
    module.exports.isUri = is_iri;
    module.exports.isHttpUri = is_http_iri;
    module.exports.isHttpsUri = is_https_iri;
    module.exports.isWebUri = is_web_iri;

    // private function
    // internal URI spitter method - direct from RFC 3986
    var splitUri = function splitUri(uri) {
        var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
        return splitted;
    };

    function is_iri(value) {
        if (!value) {
            return;
        }

        // check for illegal characters
        if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return;

        // check for hex escapes that aren't complete
        if (/%[^0-9a-f]/i.test(value)) return;
        if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;

        var splitted = [];
        var scheme = '';
        var authority = '';
        var path = '';
        var query = '';
        var fragment = '';
        var out = '';

        // from RFC 3986
        splitted = splitUri(value);
        scheme = splitted[1];
        authority = splitted[2];
        path = splitted[3];
        query = splitted[4];
        fragment = splitted[5];

        // scheme and path are required, though the path can be empty
        if (!(scheme && scheme.length && path.length >= 0)) return;

        // if authority is present, the path must be empty or begin with a /
        if (authority && authority.length) {
            if (!(path.length === 0 || /^\//.test(path))) return;
        } else {
            // if authority is not present, the path must not start with //
            if (/^\/\//.test(path)) return;
        }

        // scheme must begin with a letter, then consist of letters, digits, +, ., or -
        if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) return;

        // re-assemble the URL per section 5.3 in RFC 3986
        out += scheme + ':';
        if (authority && authority.length) {
            out += '//' + authority;
        }

        out += path;

        if (query && query.length) {
            out += '?' + query;
        }

        if (fragment && fragment.length) {
            out += '#' + fragment;
        }

        return out;
    }

    function is_http_iri(value, allowHttps) {
        if (!is_iri(value)) {
            return;
        }

        var splitted = [];
        var scheme = '';
        var authority = '';
        var path = '';
        var port = '';
        var query = '';
        var fragment = '';
        var out = '';

        // from RFC 3986
        splitted = splitUri(value);
        scheme = splitted[1];
        authority = splitted[2];
        path = splitted[3];
        query = splitted[4];
        fragment = splitted[5];

        if (!scheme) return;

        if (allowHttps) {
            if (scheme.toLowerCase() != 'https') return;
        } else {
            if (scheme.toLowerCase() != 'http') return;
        }

        // fully-qualified URIs must have an authority section that is
        // a valid host
        if (!authority) {
            return;
        }

        // enable port component
        if (/:(\d+)$/.test(authority)) {
            port = authority.match(/:(\d+)$/)[0];
            authority = authority.replace(/:\d+$/, '');
        }

        out += scheme + ':';
        out += '//' + authority;

        if (port) {
            out += port;
        }

        out += path;

        if (query && query.length) {
            out += '?' + query;
        }

        if (fragment && fragment.length) {
            out += '#' + fragment;
        }

        return out;
    }

    function is_https_iri(value) {
        return is_http_iri(value, true);
    }

    function is_web_iri(value) {
        return is_http_iri(value) || is_https_iri(value);
    }
})(module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./plugin/index.js":
/*!*************************!*\
  !*** ./plugin/index.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var editors = [];
var validators = [];

module.exports = {

    editor: function editor(constructor) {
        console.log("register editor " + constructor.name);
        editors.push(constructor);
    },

    // format validator
    validator: function validator(keyword, value, _validator) {
        validators.push(["format", value, _validator]);
    },

    keywordValidator: function keywordValidator(datatype, property, validator) {
        validators.push(["keyword", datatype, property, validator]);
    },

    getEditors: function getEditors() {
        return editors;
    },
    getValidators: function getValidators() {
        return validators;
    }
};

/***/ }),

/***/ "./services/DataService.js":
/*!*********************************!*\
  !*** ./services/DataService.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var mitt = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js");
var diffpatch = __webpack_require__(/*! ./utils/diffpatch */ "./services/utils/diffpatch.js");
var copy = __webpack_require__(/*! ./utils/copy */ "./services/utils/copy.js");
var isRootPointer = __webpack_require__(/*! ./utils/isRootPointer */ "./services/utils/isRootPointer.js");
var dataReducer = __webpack_require__(/*! ./reducers/dataReducer */ "./services/reducers/dataReducer.js");
var ActionCreators = __webpack_require__(/*! ./reducers/actions */ "./services/reducers/actions.js").ActionCreators;
var ActionTypes = __webpack_require__(/*! ./reducers/actions */ "./services/reducers/actions.js").ActionTypes;
var getParentPointer = __webpack_require__(/*! ./utils/getParentPointer */ "./services/utils/getParentPointer.js");
var getTypeOf = __webpack_require__(/*! json-schema-library/lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
var getPatchesPerPointer = __webpack_require__(/*! ./utils/getPatchesPerPointer */ "./services/utils/getPatchesPerPointer.js");

var State = __webpack_require__(/*! ./State */ "./services/State.js");
var DEBUG = false;

/**
 * @name DataService.EVENTS
 * @type {Object}
 * @property {String} BEFORE_UPDATE    - called before starting data update
 * @property {String} AFTER_UPDATE     - called after data udpate was performed
 */
var EVENTS = {
    BEFORE_UPDATE: "beforeUpdate",
    AFTER_UPDATE: "afterUpdate"
};

/**
 * Read and modify form data and notify observers
 *
 * @param {State} state     - current state/store of application
 * @param {Any} data        - current application data (form)
 */

var DataService = function () {
    function DataService(state, data) {
        var _this = this;

        _classCallCheck(this, DataService);

        if (!(state instanceof State)) {
            throw new Error("Given state in DataService must be of instance 'State'");
        }

        this.observers = {};
        this.emitter = mitt();
        this.EVENTS = EVENTS;

        this.id = "data";
        this.state = state;
        this.state.register(this.id, dataReducer);

        var lastUpdate = {};

        // improved version - supporting multiple patches
        this.onStateChanged = function () {
            var current = _this.state.get(_this.id);
            var patches = getPatchesPerPointer(lastUpdate, current.data.present);
            if (patches.length === 0) {
                DEBUG && console.info("DataService abort update event -- nothing changed");
                return;
            }

            DEBUG && console.log("Patch locations", patches.map(function (delta) {
                return delta.pointer;
            }));

            for (var i = 0, l = patches.length; i < l; i += 1) {
                var eventLocation = patches[i].pointer;
                var parentData = _this.getDataByReference(eventLocation);
                var parentDataType = getTypeOf(parentData);
                _this.emit(EVENTS.AFTER_UPDATE, eventLocation, { type: parentDataType, patch: patches[i].patch });
                _this.bubbleObservers(eventLocation, { type: parentDataType, patch: patches[i].patch });
            }

            lastUpdate = current.data.present;
        };

        this.state.subscribe(this.id, this.onStateChanged);

        if (data !== undefined) {
            this.set("#", data);
            this.resetUndoRedo();
        }
    }

    _createClass(DataService, [{
        key: "resetUndoRedo",
        value: function resetUndoRedo() {
            this.state.get(this.id).data.past.length = 0;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.state.unsubscribe(this.id, this.onStateChanged);
            this.state.unregister(this.id);
        }

        /**
         * Get a copy of current data from the requested _json-pointer_
         * @param {JsonPointer} [pointer="#"]  - data to fetch. Defaults to _root_
         * @returns {Any} data, associated with _pointer_
         */

    }, {
        key: "get",
        value: function get() {
            var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#";

            var value = this.getDataByReference(pointer);
            return copy(value);
        }
    }, {
        key: "getDataByReference",
        value: function getDataByReference() {
            var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#";

            // eslint-disable-next-line no-invalid-this
            return gp.get(this.state.get(this.id).data.present, pointer);
        }

        /**
         * Change data at the given _pointer_
         * @param {JsonPointer}  pointer    - data location to modify
         * @param {Any}  value              - new value at pointer
         * @param {Boolean} [isSynched]
         */

    }, {
        key: "set",
        value: function set(pointer, value) {
            var isSynched = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (this.isValid(pointer) === false) {
                throw new Error("Pointer " + pointer + " does not exist in data");
            }

            var currentValue = this.getDataByReference(pointer);
            if (diffpatch.diff(currentValue, value) == null) {
                DEBUG && console.info("DataService abort update -- value not changed");
                return;
            }

            this.emit(EVENTS.BEFORE_UPDATE, pointer, { action: ActionTypes.DATA_SET, isSynched: isSynched });
            this.state.dispatch(ActionCreators.setData(pointer, value, currentValue, isSynched));

            if (pointer === "#" && isSynched === false) {
                // do not add root changes to undo
                this.state.get(this.id).data.past.pop();
            }
        }

        /**
         * Delete data at the given _pointer_
         * @param  {JsonPointer} pointer    - data location to delete
         */

    }, {
        key: "delete",
        value: function _delete(pointer) {
            if (isRootPointer(pointer)) {
                throw new Error("Can not remove root data via delete. Use set(\"#/\", {}) instead.");
            }

            var key = pointer.split("/").pop();
            var parentPointer = getParentPointer(pointer);
            var data = this.get(parentPointer);

            gp.delete(data, key);
            this.set(parentPointer, data);
        }
    }, {
        key: "undoCount",
        value: function undoCount() {
            return this.state.get(this.id).data.past.length;
        }
    }, {
        key: "redoCount",
        value: function redoCount() {
            return this.state.get(this.id).data.future.length;
        }
    }, {
        key: "undo",
        value: function undo() {
            this.emit(EVENTS.BEFORE_UPDATE, "#", { action: ActionTypes.UNDO });
            this.state.dispatch(ActionCreators.undo());
        }
    }, {
        key: "redo",
        value: function redo() {
            this.emit(EVENTS.BEFORE_UPDATE, "#", { action: ActionTypes.REDO });
            this.state.dispatch(ActionCreators.redo());
        }
    }, {
        key: "on",
        value: function on(eventType, callback) {
            if (eventType === undefined) {
                throw new Error("Missing event type in DataService.on");
            }
            this.emitter.on(eventType, callback);
            return callback;
        }
    }, {
        key: "off",
        value: function off() {
            var _emitter;

            (_emitter = this.emitter).off.apply(_emitter, arguments);
        }
    }, {
        key: "emit",
        value: function emit(eventType, pointer, data) {
            this.emitter.emit(eventType, createEventObject(pointer, data));
        }
    }, {
        key: "observe",
        value: function observe(pointer, callback) {
            var bubbleEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            callback.bubbleEvents = bubbleEvents;
            this.observers[pointer] = this.observers[pointer] || [];
            this.observers[pointer].push(callback);
            return callback;
        }
    }, {
        key: "removeObserver",
        value: function removeObserver(pointer, callback) {
            if (this.observers[pointer] && this.observers[pointer].length > 0) {
                this.observers[pointer] = this.observers[pointer].filter(function (cb) {
                    return cb !== callback;
                });
            }
        }
    }, {
        key: "notify",
        value: function notify(pointer, event) {
            if (this.observers[pointer] == null || this.observers[pointer].length === 0) {
                return;
            }
            var observers = this.observers[pointer];
            for (var i = 0, l = observers.length; i < l; i += 1) {
                if (observers[i].bubbleEvents === true || event.pointer === pointer) {
                    observers[i](event);
                }
            }
        }
    }, {
        key: "bubbleObservers",
        value: function bubbleObservers(pointer, data) {
            var eventObject = createEventObject(pointer, data);
            var frags = gp.split(pointer);
            while (frags.length) {
                this.notify(gp.join(frags, true), eventObject);
                frags.length -= 1;
            }
            this.notify("#", eventObject);
        }
    }, {
        key: "isValid",
        value: function isValid(pointer) {
            return isRootPointer(pointer) || gp.get(this.getDataByReference(), pointer) !== undefined;
        }
    }]);

    return DataService;
}();

function createEventObject(pointer, data) {
    var parentPointer = getParentPointer(pointer);
    return _extends(data, {
        pointer: pointer,
        parentPointer: parentPointer
    });
}

module.exports = DataService;
module.exports.EVENTS = EVENTS;

/***/ }),

/***/ "./services/LocationService.js":
/*!*************************************!*\
  !*** ./services/LocationService.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global document */
var mitt = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js");
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var UIState = __webpack_require__(/*! ./uistate */ "./services/uistate/index.js");
var getId = __webpack_require__(/*! ../utils/getID */ "./utils/getID.js");
var DELAY = 25;

var emitter = mitt();

/**
 * Register to page changes, target-pointer changes or to (re)scroll to the current pointer in view.
 *
 * The LocationService manages global pointer states and scroll position:
 *  - the "current pointer" tracks the currently focused editor and
 *  - the "page pointer" corresponds to the first property of "current pointer", which may be used for main page loading
 *
 * ### Motivation
 *
 * Jumping to specific editors via the navigation requires a targeting system. A page reload may occur for a called
 * anchor, and thus is scrolled into view async. In other cases the current view may be completely rebuilt which
 * resets the scroll position to top. A stored pointer (current) may be used to retrieve the scroll position.
 * named anchors fail when hash routes are present. Thus anchors are processed via javascript.
 *
 * @type {Object}
 */
var LocationService = {

    PAGE_EVENT: "page",
    TARGET_EVENT: "target",

    // update page and target pointer
    goto: function goto(targetPointer) {
        var path = gp.split(targetPointer);

        if (path.length === 0 || path.length === 1 && path[0] === "") {
            return;
        }

        var nextPage = path[0];
        var currentPage = UIState.getCurrentPage();
        if (currentPage !== nextPage) {
            UIState.setCurrentPage(gp.join(nextPage, true));
        }
        UIState.setCurrentPointer(gp.join(targetPointer, true));
        this.focus();
    },


    // set target pointer
    setCurrent: function setCurrent(pointer) {
        if (pointer !== this.getCurrent()) {
            UIState.setCurrentPointer(pointer);
            emitter.emit("focus", pointer);
        }
    },
    getCurrent: function getCurrent() {
        return UIState.getCurrentPointer();
    },


    // focus target pointer
    focus: function focus() {
        clearTimeout(this.timeout);
        var pointer = UIState.getCurrentPointer();
        var id = getId(pointer);
        var targetElement = document.getElementById(id);
        // console.log(`pointer ${pointer} - id ${id}`, targetElement);
        if (targetElement == null) {
            // console.log(`Location:focus - target ${pointer} (id ${id}) not found`);
            return;
        }
        // const targetPosition = targetElement.getBoundingClientRect().top
        this.timeout = setTimeout(function () {
            // try scrolling to header-row in container (low height) to have a more robust scroll target position
            var scrollTarget = targetElement.querySelector(".editron-container > .editron-container__header");
            scrollTarget = scrollTarget == null ? targetElement : scrollTarget;
            if (scrollTarget.scrollIntoViewIfNeeded) {
                scrollTarget.scrollIntoViewIfNeeded();
            } else {
                scrollTarget.scrollIntoView();
            }

            // @todo only fire focus event?
            targetElement.dispatchEvent(new Event("focus"));
            targetElement.focus && targetElement.focus();
        }, DELAY);
    },
    blur: function blur(pointer) {
        if (UIState.getCurrentPointer() !== pointer) {
            return;
        }
        UIState.setCurrentPointer("");
        emitter.emit("blur", pointer);
    },


    on: function on() {
        return emitter.on.apply(emitter, arguments);
    },
    off: function off() {
        return emitter.off.apply(emitter, arguments);
    }
};

UIState.on(UIState.EVENTS.CURRENT_PAGE_EVENT, function (pointer) {
    return emitter.emit(LocationService.PAGE_EVENT, pointer);
});
UIState.on(UIState.EVENTS.CURRENT_POINTER_EVENT, function (pointer) {
    return emitter.emit(LocationService.TARGET_EVENT, pointer);
});

module.exports = LocationService;

/***/ }),

/***/ "./services/OverlayService.js":
/*!************************************!*\
  !*** ./services/OverlayService.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global document */
/* eslint no-use-before-define: 0 */
var m = __webpack_require__(/*! mithril */ "mithril");
var Overlay = __webpack_require__(/*! ../components/overlay */ "./components/overlay/index.js");
var createElement = __webpack_require__(/*! ../utils/createElement */ "./utils/createElement.js");
var UIState = __webpack_require__(/*! ./uistate */ "./services/uistate/index.js");

UIState.on(UIState.EVENTS.OVERLAY_EVENT, function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return OverlayService.onChange(value.element, value.options);
});

/**
 * Opens an overlay with a DOM-Node as contents
 * @type {Object}
 */
var OverlayService = {

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
    open: function open(container, options) {
        UIState.setOverlay({
            element: container,
            options: _extends({
                ok: false,
                save: true,
                fullscreen: false,
                onAbort: Function.prototype,
                onSave: Function.prototype
            }, options)
        });
    },
    close: function close() {
        UIState.setOverlay();
        // must destroy component for reuse
        m.render(this.getElement(), m("i"));
    },
    onChange: function onChange(container, options) {
        var _this = this;

        if (container == null) {
            var _$el = this.getElement();
            _$el.parentNode && _$el.parentNode.removeChild(_$el);
            return;
        }

        var $el = this.getElement();
        container.classList.add("overlay__item");
        m.render($el, m(Overlay, {
            container: container,
            fullscreen: options.fullscreen,
            showSave: options.save,
            titleAbort: options.ok ? "OK" : "Abbrechen",
            onSave: function onSave() {
                options.onSave();
                _this.close();
            },
            onAbort: function onAbort() {
                return _this.close();
            }, // calls onremove -> onAbort
            onremove: function onremove() {
                return options.onAbort();
            }
        }));

        document.body.appendChild($el);
    },
    getElement: function getElement() {
        var _this2 = this;

        if (this.$element == null) {
            this.$element = createElement(".ui-overlay");
            this.$element.addEventListener("click", function (e) {
                // close popup if clicked on "background"
                if (e.target === _this2.$element) {
                    _this2.close();
                }
            });
        }
        return this.$element;
    }
};

module.exports = OverlayService;

/***/ }),

/***/ "./services/SchemaService.js":
/*!***********************************!*\
  !*** ./services/SchemaService.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Core = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js").cores.JsonEditor;
var copy = __webpack_require__(/*! ./utils/copy */ "./services/utils/copy.js");
var jsl = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js");
var _getChildSchemaSelection = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js").getChildSchemaSelection;

/**
 * Manages json-schema interactions and adds caching of reoccuring json-schema requests
 *
 * @param {Object} schema       - json-schema
 * @param {Object} [data={}]    - data corresponding to json-schema
 * @param {Core} [core={}]      - instance of json-schema-library Core
 */

var SchemaService = function () {
    function SchemaService() {
        var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var core = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Core();

        _classCallCheck(this, SchemaService);

        this.core = core;
        this.setSchema(schema);
        this.setData(data);
    }

    /**
     * Update data by any missing (default) values specified in the json-schema
     * @param {Object} [data=currentData]   - update given data or use the internal stored data (via `setData(data)`)
     * @param {Object} [schema]             - specific json schema, or the internal store schema (via `setSchema(root)`)
     * @return {Any} json data with valid default data values
     */


    _createClass(SchemaService, [{
        key: "addDefaultData",
        value: function addDefaultData() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
            var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.schema;

            return this.core.getTemplate(schema, data);
        }

        /**
         * Create the template data object based on the json-schema, which fullfills the schemas structure as much as
         * possible
         * @param  {Object} schema
         * @return {Any} data corresponding to json-schema
         */

    }, {
        key: "getTemplate",
        value: function getTemplate(schema) {
            return this.core.getTemplate(schema);
        }

        /**
         * @param  {JsonPointer} pointer
         * @param  {String|Number} property
         * @return {Array} list of valid items to insert at the given position
         */

    }, {
        key: "getChildSchemaSelection",
        value: function getChildSchemaSelection(pointer, property) {
            var parentSchema = this.get(pointer);
            return _getChildSchemaSelection(this.core, parentSchema, property);
        }

        /**
         * Sets the root data. This is optional and used within internal functions to support optional _data_-parameters.
         * On every change in data, call this method with that latest state `schemaService.setData(latestData)`;
         *
         * @param {Any} data    - latest root data corresponding to stored json-schema
         */

    }, {
        key: "setData",
        value: function setData(data) {
            this.data = this.addDefaultData(data);
            this.resetCache();
        }

        /**
         * Set or change the application schema
         * @param {Object} schema
         */

    }, {
        key: "setSchema",
        value: function setSchema(schema) {
            this.core.setSchema(schema);
            this.schema = this.core.rootSchema;
            this.resetCache();
        }
    }, {
        key: "resetCache",
        value: function resetCache() {
            this.cache = {};
        }

        /**
         * Return the json-schema for the requested pointer. Resolved the pointer on the stored schema by the accompanied
         * json-data, which is required to resolve optional json-schema values.
         *
         * @param  {JsonPointer} pointer    - pointer in data
         * @param  {Any} [data]             - root data, corresponding to json-schema. This is optional, when the root-data
         *                                       is up-to-date (via setData)
         * @return {Object} json-schema for the requested pointer
         */

    }, {
        key: "get",
        value: function get(pointer, data) {
            if (data) {
                var result = jsl.getSchema(this.core, this.schema, data, pointer);
                return copy(result);
            }

            if (this.cache[pointer] === undefined) {
                var _result = jsl.getSchema(this.core, this.schema, this.data, pointer);
                if (_result.variableSchema === true) {
                    // @special case: do not cache dynamic schema object (oneOf)
                    return _result;
                }
                this.cache[pointer] = copy(_result);
            }

            return this.cache[pointer];
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.setData(null);
            this.setSchema(null);
        }
    }]);

    return SchemaService;
}();

module.exports = SchemaService;

/***/ }),

/***/ "./services/SessionService.js":
/*!************************************!*\
  !*** ./services/SessionService.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global localStorage */

/**
 * Simple session service to store and retrieve user-specific data
 * @type {Object}
 */
module.exports = {
    get: function get(key, defaultValue) {
        if (window.localStorage == null) {
            return defaultValue;
        }

        if (localStorage.getItem(key) == null) {
            this.set(key, defaultValue);
        }
        return JSON.parse(localStorage.getItem(key));
    },
    set: function set(key, value) {
        if (window.localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },
    toggle: function toggle(key) {
        var value = !this.get(key, false);
        this.set(key, value);
        return value;
    }
};

/***/ }),

/***/ "./services/State.js":
/*!***************************!*\
  !*** ./services/State.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
var mitt = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js");
var FLAG_CHANGED = "hasChanged";

var State = function () {
    function State() {
        var _this = this;

        _classCallCheck(this, State);

        this.FLAG_CHANGED = FLAG_CHANGED;

        this.reducers = {
            action: function action(state, _action) {
                return _action;
            }
        };
        this.emitter = mitt();
        this.store = redux.createStore(function () {}); // eslint-disable-line no-empty-function
        this.store.subscribe(function () {
            return _this.onChange(_this.store.getState());
        });
    }

    _createClass(State, [{
        key: "onChange",
        value: function onChange(currentState) {
            var _this2 = this;

            Object.keys(currentState).forEach(function (id) {
                var subState = currentState[id];
                if (subState[FLAG_CHANGED] != null && subState[FLAG_CHANGED] !== false) {
                    _this2.emitter.emit(id, subState);
                }
            });
        }

        // eslint-disable-next-line
        // http://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application

    }, {
        key: "register",
        value: function register(id, reducer) {
            if (this.reducers[id]) {
                throw new Error("A reducer with id " + id + " is already registered");
            }
            this.reducers[id] = reducer;
            this.store.replaceReducer(redux.combineReducers(this.reducers));
        }
    }, {
        key: "unregister",
        value: function unregister(id) {
            // @todo either remove reducers and data or make them reusable (per application id)
            // delete this.reducers[id];
            // this.store.replaceReducer(redux.combineReducers(this.reducers));
            var currentState = this.store.getState();
            delete currentState[id];
        }
    }, {
        key: "get",
        value: function get(id) {
            var currentState = this.store.getState();
            return id == null ? currentState : currentState[id];
        }
    }, {
        key: "dispatch",
        value: function dispatch() {
            var _store;

            return (_store = this.store).dispatch.apply(_store, arguments);
        }

        /**
         * Subscribe to change (all) events
         * @param  {[type]}   id       [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */

    }, {
        key: "subscribe",
        value: function subscribe(id, callback) {
            if (typeof id !== "string" || typeof callback !== "function") {
                throw new Error("Invalid arguments for state.subscribe " + arguments);
            }

            var state = this.store.getState();
            if (state[id] && state[id][FLAG_CHANGED] != null) {
                this.emitter.on(id, callback);
            } else {
                throw new Error("Could not subscribe to state " + id + ". Property " + FLAG_CHANGED + " not available");
            }
        }
    }, {
        key: "unsubscribe",
        value: function unsubscribe(id, callback) {
            if (typeof id !== "string" || typeof callback !== "function") {
                throw new Error("Invalid arguments for state.unsubscribe " + arguments);
            }

            this.emitter.off(id, callback);
        }
    }]);

    return State;
}();

State.FLAG_CHANGED = FLAG_CHANGED;

module.exports = State;

/***/ }),

/***/ "./services/ValidationService.js":
/*!***************************************!*\
  !*** ./services/ValidationService.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mitt = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js");
var Core = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js").cores.JsonEditor;
var State = __webpack_require__(/*! ./State */ "./services/State.js");
var ActionCreators = __webpack_require__(/*! ./reducers/actions */ "./services/reducers/actions.js").ActionCreators;
var errorReducer = __webpack_require__(/*! ./reducers/errorReducer */ "./services/reducers/errorReducer.js");
var Validation = __webpack_require__(/*! ./utils/Validation */ "./services/utils/Validation.js");
var BubblingCollectionObservable = __webpack_require__(/*! ./utils/BubblingCollectionObservable */ "./services/utils/BubblingCollectionObservable.js");

var EVENTS = {
    BEFORE_VALIDATION: "beforeValidation",
    AFTER_VALIDATION: "afterValidation",
    ON_ERROR: "onError"
};

/**
 * @class  ValidationService
 */

var ValidationService = function () {
    function ValidationService(state) {
        var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var core = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Core();

        _classCallCheck(this, ValidationService);

        if (!(state instanceof State)) {
            throw new Error("Given state in ValidationService must be of instance 'State'");
        }

        this.core = core;
        this.set(schema);
        this.observer = new BubblingCollectionObservable();
        this.emitter = mitt();
        this.id = "errors";
        this.state = state;
        this.state.register(this.id, errorReducer);
        this.setErrorHandler(function (error) {
            return error;
        });
        this.EVENTS = EVENTS;
    }

    _createClass(ValidationService, [{
        key: "setErrorHandler",
        value: function setErrorHandler(callback) {
            this.errorHandler = callback;
        }

        /**
         * Starts the validation, executing callback handlers and emitters on the go
         *
         * @param  {Any} data               - data to validate
         * @param  {JsonSchema} [schema]    - optional json-schema. Per default the root schema is used
         * @return {Promise} promise, resolving with list of errors when all async validations are performed
         */

    }, {
        key: "validate",
        value: function validate(data) {
            var _this = this;

            var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.schema;

            if (this.currentValidation) {
                this.currentValidation.cancel();
            }

            this.emit(EVENTS.BEFORE_VALIDATION);
            this.observer.reset();
            this.state.dispatch(ActionCreators.setErrors([]));
            this.currentValidation = new Validation(data, schema, this.errorHandler);

            return this.currentValidation.start(this.core, function (newError, currentErrors) {
                _this.state.dispatch(ActionCreators.setErrors(currentErrors));
                _this.observer.notify(newError.data.pointer, newError);
                _this.emit(EVENTS.ON_ERROR, newError);
            }, function (validationErrors) {
                _this.state.dispatch(ActionCreators.setErrors(validationErrors));
                _this.emit(EVENTS.AFTER_VALIDATION, validationErrors);
                _this.currentValidation = null;
            });
        }
    }, {
        key: "set",
        value: function set(schema) {
            this.schema = schema;
            this.core.setSchema(schema);
        }
    }, {
        key: "get",
        value: function get() {
            return this.schema;
        }
    }, {
        key: "on",
        value: function on(eventType, callback) {
            if (eventType === undefined) {
                throw new Error("Missing event type in ValidationService.on");
            }
            this.emitter.on(eventType, callback);
            return callback;
        }
    }, {
        key: "off",
        value: function off() {
            var _emitter;

            this.emitter && (_emitter = this.emitter).off.apply(_emitter, arguments);
        }
    }, {
        key: "emit",
        value: function emit(eventType) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this.emitter.emit(eventType, event);
        }
    }, {
        key: "observe",
        value: function observe(pointer, callback) {
            var bubbledEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this.observer.observe(pointer, callback, bubbledEvents);
            return callback;
        }
    }, {
        key: "removeObserver",
        value: function removeObserver(pointer, callback) {
            this.observer.removeObserver(pointer, callback);
        }
    }, {
        key: "notify",
        value: function notify(pointer) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this.observer.notify(pointer, event);
        }
    }, {
        key: "getErrorsAndWarnings",
        value: function getErrorsAndWarnings() {
            var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var withChildErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var errors = this.state.get(this.id) || [];
            if (pointer == null) {
                return errors;
            }
            // filter by pointer
            var selectError = new RegExp("^" + pointer + (withChildErrors ? "" : "$"));
            return errors.filter(function (error) {
                return selectError.test(error.data.pointer);
            });
        }
    }, {
        key: "getErrors",
        value: function getErrors() {
            var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var withChildErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return this.getErrorsAndWarnings(pointer, withChildErrors).filter(function (error) {
                return error.severity !== "warning";
            });
        }
    }, {
        key: "getWarnings",
        value: function getWarnings() {
            var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var withChildWarnings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return this.getErrorsAndWarnings(pointer, withChildWarnings).filter(function (error) {
                return error.severity === "warning";
            });
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.set(null);
            this.emitter = null;
            this.observer = null;
            this.state.unregister(this.id, errorReducer);
        }
    }]);

    return ValidationService;
}();

module.exports = ValidationService;
module.exports.EVENTS = EVENTS;

/***/ }),

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    LocationService: __webpack_require__(/*! ./LocationService */ "./services/LocationService.js"),
    OverlayService: __webpack_require__(/*! ./OverlayService */ "./services/OverlayService.js"),
    SessionService: __webpack_require__(/*! ./SessionService */ "./services/SessionService.js"),
    UIState: __webpack_require__(/*! ./uistate */ "./services/uistate/index.js")
};

/***/ }),

/***/ "./services/reducers/actions.js":
/*!**************************************!*\
  !*** ./services/reducers/actions.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint object-property-newline: 0 */
var UndoActionCreators = __webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js").ActionCreators;
var UndoActionTypes = __webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js").ActionTypes;

var ActionTypes = {
    // data
    DATA_SET: "DATA_SET",
    UNDO: UndoActionTypes.UNDO,
    REDO: UndoActionTypes.REDO,
    // validation
    ERRORS_SET: "ERRORS_SET"
};

var ActionCreators = {
    setData: function setData(pointer, newValue, prevValue) {
        var isSynched = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        return { type: ActionTypes.DATA_SET, pointer: pointer, value: newValue, prevValue: prevValue, isSynched: isSynched };
    },
    undo: function undo() {
        return UndoActionCreators.undo();
    },
    redo: function redo() {
        return UndoActionCreators.redo();
    },
    setErrors: function setErrors() {
        var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        return { type: ActionTypes.ERRORS_SET, errors: errors };
    }
};

module.exports = {
    ActionTypes: ActionTypes,
    ActionCreators: ActionCreators
};

/***/ }),

/***/ "./services/reducers/dataReducer.js":
/*!******************************************!*\
  !*** ./services/reducers/dataReducer.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undoable = __webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js").default;

/* eslint no-case-declarations: 0 */
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var copy = __webpack_require__(/*! ../utils/copy */ "./services/utils/copy.js");
var isRootPointer = __webpack_require__(/*! ../utils/isRootPointer */ "./services/utils/isRootPointer.js");
var ActionTypes = __webpack_require__(/*! ./actions */ "./services/reducers/actions.js").ActionTypes;
var redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
var ensureItemIDs = __webpack_require__(/*! ../utils/ensureItemIDs */ "./services/utils/ensureItemIDs.js");

var actions = [ActionTypes.DATA_SET, ActionTypes.UNDO, ActionTypes.REDO];
var defaultState = {
    hasChanged: false,
    action: null,
    data: null
};

function dataReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case ActionTypes.DATA_SET:
            if (isRootPointer(action.pointer)) {
                return ensureItemIDs(copy(action.value));
            }
            var newState = copy(state);
            gp.set(newState, action.pointer, copy(action.value));
            return ensureItemIDs(newState);

        default:
            return state;
    }
}

var config = {
    debug: false,
    filter: function filter(action) {
        return actions.includes(action.type);
    }
};

module.exports = redux.combineReducers({
    hasChanged: function hasChanged(state, action) {
        return actions.includes(action.type);
    },
    data: undoable(dataReducer, config)
});

/***/ }),

/***/ "./services/reducers/errorReducer.js":
/*!*******************************************!*\
  !*** ./services/reducers/errorReducer.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ActionTypes = __webpack_require__(/*! ./actions */ "./services/reducers/actions.js").ActionTypes;

module.exports = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    return action.type === ActionTypes.ERRORS_SET ? action.errors : state;
};

/***/ }),

/***/ "./services/uistate/actions.js":
/*!*************************************!*\
  !*** ./services/uistate/actions.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ActionTypes = {
    UI_PAGE_SET: "UI_PAGE_SET",
    UI_OVERLAY_SET: "UI_OVERLAY_SET",
    UI_CURRENT_SET: "UI_CURRENT_SET"
};

var ActionCreators = {
    setCurrentPage: function setCurrentPage() {
        var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#";

        return {
            type: ActionTypes.UI_PAGE_SET,
            value: pointer
        };
    },
    setCurrentPointer: function setCurrentPointer() {
        var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#";

        return {
            type: ActionTypes.UI_CURRENT_SET,
            value: pointer
        };
    },
    setOverlay: function setOverlay() {
        var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        return {
            type: ActionTypes.UI_OVERLAY_SET,
            value: content
        };
    }
};

module.exports = {
    ActionTypes: ActionTypes,
    ActionCreators: ActionCreators
};

/***/ }),

/***/ "./services/uistate/index.js":
/*!***********************************!*\
  !*** ./services/uistate/index.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mitt = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js");
var State = __webpack_require__(/*! ../State */ "./services/State.js");
var ActionCreators = __webpack_require__(/*! ./actions */ "./services/uistate/actions.js").ActionCreators;
var uiReducer = __webpack_require__(/*! ./uiReducer */ "./services/uistate/uiReducer.js");

var EVENTS = {
    OVERLAY_EVENT: "overlay",
    CURRENT_POINTER_EVENT: "current",
    CURRENT_PAGE_EVENT: "page"
};

var UIState = function () {
    function UIState() {
        _classCallCheck(this, UIState);

        this.id = "ui";
        this.state = new State();
        this.emitter = mitt();
        this.state.register(this.id, uiReducer);
        // @todo: subscribe to state-changes and diff current state?
    }

    _createClass(UIState, [{
        key: "get",
        value: function get(property) {
            return this.state.get(this.id).ui[property];
        }
    }, {
        key: "getCurrentPointer",
        value: function getCurrentPointer() {
            return this.get("currentPointer");
        }
    }, {
        key: "getCurrentPage",
        value: function getCurrentPage() {
            return this.get("currentPage");
        }
    }, {
        key: "setOverlay",
        value: function setOverlay() {
            var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var currentContent = this.get("overlay");
            if (currentContent !== content) {
                this.state.dispatch(ActionCreators.setOverlay(content));
                this.emitter.emit(EVENTS.OVERLAY_EVENT, this.get("overlay"));
            }
        }
    }, {
        key: "on",
        value: function on() {
            var _emitter;

            (_emitter = this.emitter).on.apply(_emitter, arguments);
        }
    }, {
        key: "off",
        value: function off() {
            var _emitter2;

            (_emitter2 = this.emitter).off.apply(_emitter2, arguments);
        }
    }, {
        key: "setCurrentPage",
        value: function setCurrentPage(pointer) {
            var currentPage = this.get("currentPage");
            if (currentPage !== pointer) {
                this.state.dispatch(ActionCreators.setCurrentPage(pointer));
                this.emitter.emit(EVENTS.CURRENT_PAGE_EVENT, this.get("currentPage"));
            }
        }
    }, {
        key: "setCurrentPointer",
        value: function setCurrentPointer(pointer) {
            var currentPointer = this.get("currentPointer");
            if (currentPointer !== pointer) {
                this.state.dispatch(ActionCreators.setCurrentPointer(pointer));
                this.emitter.emit(EVENTS.CURRENT_POINTER_EVENT, this.get("currentPointer"));
            }
        }
    }]);

    return UIState;
}();

var Singleton = new UIState();
Singleton.UIStateContructor = UIState;
Singleton.EVENTS = EVENTS;

module.exports = Singleton;

/***/ }),

/***/ "./services/uistate/uiReducer.js":
/*!***************************************!*\
  !*** ./services/uistate/uiReducer.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
var ActionTypes = __webpack_require__(/*! ./actions */ "./services/uistate/actions.js").ActionTypes;

var defaultState = {
    hasChanged: false,
    currentPage: "#",
    currentPointer: "#",
    overlay: false
};

function uiReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    switch (action.type) {
        case ActionTypes.UI_PAGE_SET:
            state = _extends({}, state);
            state.currentPage = action.value;
            return state;
        case ActionTypes.UI_CURRENT_SET:
            state = _extends({}, state);
            state.currentPointer = action.value;
            return state;
        case ActionTypes.UI_OVERLAY_SET:
            state = _extends({}, state);
            state.overlay = action.value;
            return state;
        default:
            return state;
    }
}

function hasChanged() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    return ActionTypes[action.type] == null ? false : action.type;
}

module.exports = redux.combineReducers({
    hasChanged: hasChanged,
    ui: uiReducer
});

/***/ }),

/***/ "./services/utils/BubblingCollectionObservable.js":
/*!********************************************************!*\
  !*** ./services/utils/BubblingCollectionObservable.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint arrow-parens: 0 */
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

/**
 * > Internal helper, mainly used in [ValidationService](#validationservice) to support the weird notification behaviour
 * of error-events.
 *
 *
 * ### Motivation
 *
 * Error-events in the validation process occur per error, because we want them to pass as quickly as
 * possible (Asynchronous errors may take a long time and available instant feedback are postponed). In the previous
 * version two events were required in every editor
 *
 * 1. observing "start validation"-events to reset the errors and
 * 2. observing "add error"-events to build up the asynchronous incoming error-list
 *
 * This is tedious and brings some overhead using the api. Thus, the observe "set error"-event, introduced hereby
 * will collect the errors and repeatedly call the observer with the current, complete list of errors
 *
 * 1. for the observable and
 * 2. any observable that includes listening to changes of child-editors
 *
 *
 * ### Usage as observer
 *
 * An observer will receive an up-to-date version of all events occuring at the location
 *
 * ```js
 *  // init
 *  observable.observe("#/pointer/to/my/location", (errors) => {
 *      // list of current errors, continously updated
 *      this.errors = errors;
 *      this.processErrors(); // or some such
 *  });
 *  ```
 *
 * or if you are interested in events occuring further down in data
 *
 * ```js
 *  // init
 *  observable.observe("#/pointer/to/my/location", (errors) => {
 *      // list of current errors at location from pointer and further down within the data structure e.g.
 *      // "#/pointer/to/my/location", "#/pointer/to/my/location/xy", "#/pointer/to/my/location/az/er", etc
 *      continously updated
 *      this.errors = errors;
 *      this.processErrors(); // or some such
 *  }, true); // <- bubble events
 *  ```
 * and remove the event listener with
 *
 * ```js
 *  observable.observe("#/pointer/to/my/location", myRegisteredCallbackFunction);
 * ```
 *
 * ### Usage as observable
 *
 * ```js
 *  // init
 *  this.observers = new BubblingCollectionObservable();
 *  // notify session
 *  this.observers.notify("#/pointer/to/location", { event });
 *  // another notification
 *  this.observers.notify("#/pointer/to/any-location", { event2 });
 *  // same target or if listening with the option `receiveChildEvents`, will receive
 *  [{ event }, { event2 }] // observable event
 *  // and reset session by
 *  this.observers.reset(); // any observers will be reset with an events receiving an empty list
 *  [] // observable event
 *  // sending another notification will notify the target with a new list of events
 *  this.observers.notify("#/pointer/to/any-location", { event3 });
 *  [{ event3 }] // observable event
 * ```
 *
 *
 */

var BubblingCollectionObservable = function () {
    function BubblingCollectionObservable() {
        _classCallCheck(this, BubblingCollectionObservable);

        this.observers = {};
        this.eventCollection = {};
        this.bubbleCollection = {};
    }

    /**
     * Observe events on the _pointer_ (`#/observe/location`). May also observe events of
     * _child-pointers_ (`#/observe/location/child/item`) with the option `receiveChildEvents` set to `true`
     *
     * @param  {JsonPointer} pointer        - location to observe
     * @param  {Function} cb                - observer
     * @param  {Boolean}  [receiveChildEvents=false]
     * @return {Function} callback cb
     */


    _createClass(BubblingCollectionObservable, [{
        key: "observe",
        value: function observe(pointer, cb) {
            var receiveChildEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this.observers[pointer] = this.observers[pointer] || [];
            if (this.observers[pointer].includes(cb) === false) {
                cb.receiveChildEvents = receiveChildEvents;
                this.observers[pointer].push(cb);
            }
            return cb;
        }

        /**
         * Remove an observer
         * @param  {JsonPointer} pointer
         * @param  {Function} cb
         */

    }, {
        key: "removeObserver",
        value: function removeObserver(pointer, cb) {
            if (this.observers[pointer] == null) {
                return;
            }
            var index = this.observers[pointer].indexOf(cb);
            if (index !== -1) {
                this.observers[pointer].splice(index, 1);
            }
        }

        /**
         * Reset all collections from the previous events, starting with a list of empty events. Any previously called
         * observers will be called again with an empty event-list `[]`.
         */

    }, {
        key: "reset",
        value: function reset() {
            var _this = this;

            // notify observers of reset by sending an empty list of events
            var map = {};
            Object.keys(this.eventCollection).concat(Object.keys(this.bubbleCollection))
            // .filter(pointer => pointer.includes(sourcePointer))
            .forEach(function (p) {
                map[p] = true;
            });
            this.eventCollection = {};
            this.bubbleCollection = {};
            Object.keys(map).forEach(function (pointer) {
                return _this._notify(pointer, pointer, []);
            });
            this.eventCollection = {};
            this.bubbleCollection = {};
        }

        /**
         * Notify observers at _pointer_. Note that the received event is a aggregated event-list []. For a first call
         * the received event will look like `[{ event }]` and the next event will be `[{ event }, { newEvent }]`, etc,
         * until `reset()` ist called by the observable.
         *
         * @param  {JsonPointer} pointer
         * @param  {Any} event
         */

    }, {
        key: "notify",
        value: function notify(pointer, event) {
            this.eventCollection[pointer] = this.eventCollection[pointer] || [];
            this.eventCollection[pointer].push(event);

            var frags = gp.split(pointer);
            while (frags.length > 0) {
                var p = gp.join(frags, true);
                this._notify(p, pointer, this.eventCollection[pointer]);
                frags.pop();
            }
            this._notify("#", pointer, this.eventCollection[pointer]);
        }
    }, {
        key: "_notify",
        value: function _notify(observerPointer, sourcePointer, event) {
            var _this2 = this;

            if (this.observers[observerPointer] == null) {
                return;
            }
            this.observers[observerPointer].forEach(function (cb) {
                if (cb.receiveChildEvents === false && observerPointer === sourcePointer) {
                    cb(event);
                    return;
                }
                if (cb.receiveChildEvents === false && observerPointer !== sourcePointer) {
                    return;
                }

                _this2.bubbleCollection[observerPointer] = _this2.bubbleCollection[observerPointer] || {};
                var map = _this2.bubbleCollection[observerPointer];
                map[sourcePointer] = event;
                var events = Object.keys(map).reduce(function (res, next) {
                    return res.concat(map[next]);
                }, []);
                cb(events);
            });
        }
    }]);

    return BubblingCollectionObservable;
}();

module.exports = BubblingCollectionObservable;

/***/ }),

/***/ "./services/utils/Validation.js":
/*!**************************************!*\
  !*** ./services/utils/Validation.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var validateAsync = __webpack_require__(/*! json-schema-library/lib/validateAsync */ "./node_modules/json-schema-library/lib/validateAsync.js");

/**
 * @class  Validation
 *
 * @param {Object|Array} data       - application json data
 * @param {Object} schema           - json-schema describing data
 * @param {Function} [errorHandler] - optional callback to modify errors
 */

var Validation = function () {
    function Validation(data, schema, errorHandler) {
        _classCallCheck(this, Validation);

        this.errors = [];
        this.data = data;
        this.schema = schema;
        this.canceled = false;
        this.errorHandler = errorHandler;
    }

    _createClass(Validation, [{
        key: "start",
        value: function start(core, onErrorCb, onDoneCb) {
            var _this = this;

            this.cbDone = onDoneCb;
            this.cbError = onErrorCb;
            return validateAsync(core, this.schema, this.data, "#", this.onError.bind(this)).then(function (errors) {
                _this.onDone(errors);
                return errors;
            }).catch(function (error) {
                return _this.onFail(error);
            });
        }
    }, {
        key: "onError",
        value: function onError(validationError) {
            if (this.canceled) {
                return;
            }
            validationError = this.errorHandler(validationError);
            this.errors.push(validationError);
            this.cbError(validationError, this.errors);
        }
    }, {
        key: "onDone",
        value: function onDone(validationErrors) {
            if (this.canceled) {
                return;
            }
            if (this.errors.length !== validationErrors.length) {
                console.error("Inconsistent validation errors. Not all errors were emitted by validateAsync()");
            }
            this.cbDone(this.errors);
        }
    }, {
        key: "onFail",
        value: function onFail(error) {
            if (this.canceled) {
                return;
            }

            console.error("Validation failed", error);
            this.cbDone(this.errors);
        }
    }, {
        key: "cancel",
        value: function cancel() {
            this.canceled = true;
        }
    }]);

    return Validation;
}();

module.exports = Validation;

/***/ }),

/***/ "./services/utils/copy.js":
/*!********************************!*\
  !*** ./services/utils/copy.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function copy(data) {
    if (data === undefined || Array.isArray(data) === false && (typeof data === "undefined" ? "undefined" : _typeof(data)) !== "object") {
        return data;
    }
    return JSON.parse(JSON.stringify(data));
};

/***/ }),

/***/ "./services/utils/diffpatch.js":
/*!*************************************!*\
  !*** ./services/utils/diffpatch.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global window */
var DiffPatcher = __webpack_require__(/*! jsondiffpatch/src/diffpatcher */ "./node_modules/jsondiffpatch/src/diffpatcher.js").DiffPatcher;
var diff_match_patch = __webpack_require__(/*! diff_match_patch */ "./node_modules/diff_match_patch/lib/diff_match_patch.js");
var options = {
    // used to match objects when diffing arrays, by default only === operator is used
    // this function is used only to when objects are not equal by ref
    objectHash: function objectHash(obj) {
        return obj._id;
    },
    arrays: {
        // default true, detect items moved inside the array (otherwise they will be registered as remove+add)
        detectMove: true,
        // default false, the value of items moved is not included in deltas
        includeValueOnMove: false
    }
};

try {
    // required in browser environments
    window.diff_match_patch = diff_match_patch;
} catch (e) {
    // loaded by default in nodejs
}

var diffpatch = new DiffPatcher(options); // jsondiffpatch.create(options);
diffpatch.options = options;

module.exports = diffpatch;

/***/ }),

/***/ "./services/utils/ensureItemIDs.js":
/*!*****************************************!*\
  !*** ./services/utils/ensureItemIDs.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getTypeOf = __webpack_require__(/*! json-schema-library/lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
var ID_PROPERTY = "_id";

function generateId(index) {
    return "" + index + Math.random() + Date.now();
}

function addMissingItemIDs(list) {
    list.forEach(function (item, index) {
        if (item[ID_PROPERTY] == null) {
            var type = getTypeOf(item);
            if (type === "object" || type === "array") {
                item[ID_PROPERTY] = ensureItemIDs.config.generateId(index);
            }
        }
    });
}

function ensureItemIDs(data) {
    var dataType = getTypeOf(data);
    if (dataType === "array") {
        ensureItemIDs.config.addMissingItemIDs(data);
        data.forEach(function (item) {
            return ensureItemIDs(item);
        });
    } else if (dataType === "object") {
        Object.keys(data).forEach(function (key) {
            return ensureItemIDs(data[key]);
        });
    }

    return data;
}

ensureItemIDs.config = {
    ID_PROPERTY: ID_PROPERTY,
    addMissingItemIDs: addMissingItemIDs,
    generateId: generateId
};

module.exports = ensureItemIDs;

/***/ }),

/***/ "./services/utils/getParentPointer.js":
/*!********************************************!*\
  !*** ./services/utils/getParentPointer.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

module.exports = function (pointer) {
    var list = gp.split(pointer);
    list.pop();
    return gp.join(list, pointer[0] === "#");
};

/***/ }),

/***/ "./services/utils/getPatchesPerPointer.js":
/*!************************************************!*\
  !*** ./services/utils/getPatchesPerPointer.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var diffpatch = __webpack_require__(/*! ./diffpatch */ "./services/utils/diffpatch.js");
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

function sortByPointer(a, b) {
    if (a.pointer < b.pointer) {
        return -1;
    } else if (a.pointer > b.pointer) {
        return 1;
    }
    return 0;
}

function findPatches(pointer, diff) {
    var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    // for a diff: { a: { '0': [ 'modifiedString' ], _t: 'a', _0: [ 'string', 0, 0 ] } }
    // return diff[a] as patch and ".../a" as pointer

    Object.keys(diff).forEach(function (key) {
        if (key === "_t") {
            return;
        }

        if (Array.isArray(diff[key])) {
            var entry = {
                pointer: pointer + "/" + key,
                patch: diff[key]
            };

            var propertyAdded = diff[key].length === 1;
            var propertyRemoved = diff[key][2] === 0;

            if (diff._t === "a") {
                entry.isArrayItem = true;
            } else if (propertyAdded || propertyRemoved) {
                entry.changedKey = true;
            }

            result.push(entry);
        } else {
            findPatches(pointer + "/" + key, diff[key], result);
        }
    });

    return result;
}

/*
    Between two objects, returns the json-pointer of the edit

    - for now, returns common pointer of multiple changes (if any)
    - returns parent pointer for any array-items or object-properties that are added or removed. this ensures a
        container, array or object, receives a notification of changed children.
*/
module.exports = function getPatchesPerPointer(previousValue, newValue) {
    var diff = diffpatch.diff(previousValue, newValue);
    if (diff == null) {
        return [];
    }

    var patches = findPatches("#", diff);
    // merge all item patches by their parent-pointer
    var map = {};
    // @todo this should be directly resolved in 'findPatches'
    patches.forEach(function (entry) {
        if (entry.isArrayItem) {
            var parent = gp.join(entry.pointer, "..");
            var key = entry.pointer.replace(parent + "/", "");
            map[parent] = map[parent] || { _t: "a" };
            map[parent][key] = entry.patch;
        } else if (entry.changedKey) {
            var _parent = gp.join(entry.pointer, "..");
            var _key = entry.pointer.replace(_parent + "/", "");
            map[_parent] = map[_parent] || {};
            map[_parent][_key] = entry.patch;
        } else {
            map[entry.pointer] = entry.patch;
        }
    });

    return Object.keys(map).map(function (pointer) {
        return { pointer: pointer, patch: map[pointer] };
    }).sort(sortByPointer);
};

/***/ }),

/***/ "./services/utils/isRootPointer.js":
/*!*****************************************!*\
  !*** ./services/utils/isRootPointer.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! gson-pointer/lib/isRoot */ "./node_modules/gson-pointer/lib/isRoot.js");

/***/ }),

/***/ "./utils/UISchema.js":
/*!***************************!*\
  !*** ./utils/UISchema.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// @TODO iterate over all schema definitions
var iterateSchema = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js").iterateSchema;
var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
var UI_PROPERTY = "editron:ui";
var populated = __webpack_require__(/*! ./populated */ "./utils/populated.js");

function isPointer(string) {
    return typeof string === "string" && /^(#?\/.+|\.?\.\/.+)/.test(string);
}

// returns a list of {title, pointer} from root-node to pointer, excluding root node
function getBreadcrumps(pointer, controller) {
    var breadcrumps = [];
    while (pointer !== "#") {
        breadcrumps.unshift({
            title: getOption(pointer, controller, "title"),
            pointer: pointer
        });
        pointer = gp.join(pointer, "..");
    }
    return breadcrumps;
}

function enumOptions(schema) {
    var options = void 0;
    if (schema[UI_PROPERTY].enum) {
        options = schema.enum.map(function (value, index) {
            return {
                title: schema[UI_PROPERTY].enum[index] || schema.enum[index],
                value: schema.enum[index]
            };
        });
    } else if (schema.options && schema.options.enum_titles) {
        // @legacy support jdorn/json-editor
        options = schema.enum.map(function (value, index) {
            return {
                title: schema.options.enum_titles[index] || schema.enum[index],
                value: schema.enum[index]
            };
        });
    } else {
        options = schema.enum;
    }
    return options;
}

/**
 * Resolves the given pointer absolute or relative in data
 *
 * @param  {String} pointer             - current base pointer for relative targets
 * @param  {Controller} controller
 * @param  {String} pointerToResolve    - relative or absolute pointer (must start with `/` or `../`)
 * @return {Mixed} target value of at #/pointer/pointerToResolve or false
 */
function resolveReference(pointer, controller, pointerToResolve) {
    if (populated(pointerToResolve) === false || isPointer(pointerToResolve) === false) {
        return null;
    }

    var targetPointer = pointerToResolve;
    if (targetPointer[0] !== "#") {
        targetPointer = gp.join(pointer, targetPointer);
    }

    var result = controller.data().get(targetPointer);
    return populated(result, result, null);
}

/**
 * Returns the resolved copy of an options object. This method is used by the controller to help setup the
 * main options object of an editor instance. It is simplified, in that it currently does  not resolve any reference
 * on the current data
 *
 * @param {String} pointer
 * @param {Controller} controller
 * @return {Object} a resolved copy of the editron:ui settings
 */
function copyOptions(pointer, controller) {
    var schema = controller.schema().get(pointer);

    var settings = _extends({
        hidden: false,
        description: schema.description
    }, schema.options, schema[UI_PROPERTY]); // @legacy options

    settings.title = getTitle(pointer, controller); // this comes last, because ensures an '*' is appended if required

    Object.keys(settings).forEach(function (option) {
        settings[option] = resolveOption(pointer, controller, settings[option]);
    });

    return settings;
}

/**
 * Ensures each schema contains a valid schema[UI_PROPERTY] object
 * @param  {Object} rootSchema
 * @return {Object} extended clone of json-schema
 */
function extendSchema(rootSchema) {
    rootSchema = JSON.parse(JSON.stringify(rootSchema));
    iterateSchema(rootSchema, function (childSchema) {
        childSchema[UI_PROPERTY] = childSchema[UI_PROPERTY] || {};
        childSchema[UI_PROPERTY] = _extends({
            hidden: false,
            title: childSchema.title || "",
            description: childSchema.description || ""
        }, childSchema.options, childSchema[UI_PROPERTY]); // @legacy options
    });

    return rootSchema;
}

/**
 * Resolves a list of pointers, where the first found value is returned. Supports simple strings as fallback.
 *  e.g. `["/data/local/title", "/data/local/subtitle", "Title"]`
 *
 * @param  {String} pointer     [description]
 * @param  {Controller} controller  [description]
 * @param  {String|Array} optionValue [description]
 * @return {Mixed} the option value
 */
function resolveOption(pointer, controller, optionValue) {
    if (Array.isArray(optionValue)) {
        for (var i = 0; i < optionValue.length; i += 1) {
            var option = optionValue[i];
            if (isPointer(option)) {
                var value = resolveReference(pointer, controller, option);
                if (populated(value)) {
                    return value;
                }
            } else if (populated(option)) {
                return option;
            }
        }
    }
    return optionValue;
}

/**
 * Returns the first defined option set in schema. Supports relative and absolute pointers in data
 *
 * @param  {String} pointer
 * @param  {Controller} controller
 * @param  {...[String]} options    - a list of option properties. The first non-empty option will be returned
 * @return {Mixed} the first non-empty option
 */
function getOption(pointer, controller) {
    var schema = controller.schema().get(pointer);
    var editronOptions = schema[UI_PROPERTY] || {};

    for (var _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        options[_key - 2] = arguments[_key];
    }

    if (options.length === 0) {
        throw new Error("Expected at least one options property to be given in getOption");
    }

    for (var i = 0; i < options.length; i += 1) {
        var option = editronOptions[options[i]];
        var resolver = isPointer(option) ? resolveReference : resolveOption;
        var value = resolver(pointer, controller, option);

        if (populated(value)) {
            return value;
        } else if (populated(schema[options[i]])) {
            return schema[options[i]];
        }
    }

    return null;
}

function getTitle(pointer, controller) {
    var schema = controller.schema().get(pointer);
    var title = getOption(pointer, controller, "title") || "";
    return schema.minLength ? title.replace(/\s*\*\s*$/, "") + " *" : title;
}

function getDefaultOption(schema, option) {
    return schema[UI_PROPERTY] ? schema[UI_PROPERTY][option] || "" : "";
}

module.exports = {
    UI_PROPERTY: UI_PROPERTY,
    getOption: getOption,
    copyOptions: copyOptions,
    extendSchema: extendSchema,
    getBreadcrumps: getBreadcrumps,
    getTitle: getTitle,
    enumOptions: enumOptions,
    getDefaultOption: getDefaultOption
};

/***/ }),

/***/ "./utils/addItem.js":
/*!**************************!*\
  !*** ./utils/addItem.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");
var createElement = __webpack_require__(/*! ./createElement */ "./utils/createElement.js");
var LocationService = __webpack_require__(/*! ../services/LocationService */ "./services/LocationService.js");
var OverlayService = __webpack_require__(/*! ../services/OverlayService */ "./services/OverlayService.js");
var SelectTileComponent = __webpack_require__(/*! ../components/overlayselecttiles */ "./components/overlayselecttiles/index.js");
var UISchema = __webpack_require__(/*! ./UISchema */ "./utils/UISchema.js");

/**
 * Request to insert an array child item at the given pointer. If multiple options are present, a dialogue is opened to
 * let the user select the appropriate type of child (oneof).
 *
 * @param {Object} dataService
 * @param {Object} schemaService
 * @param {String} pointer  - to array on which to insert the child
 * @param {Number} index    - index within array, where the child should be inserted (does not replace). Default: 0
 */
module.exports = function addItem(dataService, schemaService, pointer) {
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var list = dataService.get(pointer);
    var schema = schemaService.get(pointer);
    if (schema.type !== "array") {
        throw new Error("Can not add item to a non-array (" + pointer + ")");
    }

    var selectOptions = schemaService.getChildSchemaSelection(pointer, index);

    // single option, immediately create template data and add item to list
    if (selectOptions.length === 1) {
        addSelection(0, schemaService, dataService);
        return;
    }

    // multiple options, ask user
    var element = createElement(".overlay__item");
    var selection = selectOptions.map(function (item, oneOfIndex) {
        return {
            icon: UISchema.getDefaultOption(item, "icon"),
            title: UISchema.getDefaultOption(item, "title"),
            description: UISchema.getDefaultOption(item, "description"),
            value: oneOfIndex
        };
    });

    // create user-selection
    m.render(element, m(SelectTileComponent, {
        description: "Modulauswahl - Bitte wählen",
        value: "0",
        options: selection,
        onchange: function onchange(value) {
            var selectedIndex = parseInt(value, 10);
            addSelection(selectedIndex, schemaService, dataService);
            OverlayService.close();
            LocationService.goto(pointer + "/" + index);
        }
    }));

    // add data of selection
    function addSelection(selectedIndex) {
        var itemSchema = selectOptions[selectedIndex];
        var itemData = schemaService.getTemplate(itemSchema);
        list.splice(index, 0, itemData);
        dataService.set(pointer, list);
    }

    // and ask question
    OverlayService.open(element, { save: false });
};

/***/ }),

/***/ "./utils/array.js":
/*!************************!*\
  !*** ./utils/array.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    addItem: function addItem(pointer, controller, index) {
        controller.addItemTo(pointer, index);
    },
    removeItem: function removeItem(pointer, controller, index) {
        var nextList = controller.data().get(pointer);
        nextList.splice(index, 1);
        controller.data().set(pointer, nextList);
    },
    moveItem: function moveItem(pointer, controller, index, destinationIndex) {
        if (destinationIndex < 0) {
            return;
        }

        var list = controller.data().get(pointer);
        if (list[index] == null || list[destinationIndex] == null) {
            return;
        }

        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
        controller.data().set(pointer, list);
    },
    moveElement: function moveElement(list, index, destinationIndex) {
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
    }
};

/***/ }),

/***/ "./utils/createElement.js":
/*!********************************!*\
  !*** ./utils/createElement.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = function createElement(selector, attributes) {
    var vnode = m(selector, attributes);
    var element = document.createElement(vnode.tag);
    Object.keys(vnode.attrs).forEach(function (key) {
        if (key === "className") {
            vnode.attrs[key].split(" ").forEach(function (className) {
                return element.classList.add(className);
            });
        } else if (vnode.attrs[key] != null) {
            element.setAttribute(key, vnode.attrs[key]);
        }
    });
    return element;
};

/***/ }),

/***/ "./utils/getID.js":
/*!************************!*\
  !*** ./utils/getID.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts a json-pointer to a valid dom-id (url selection)
 * https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
 *
 * @param  {String} pointer
 * @return {String} unique id
 */
module.exports = function getID(pointer) {
  return ("" + pointer.replace(/(^[#/]*|\/+$)/, "")).replace(/\/+/g, ".");
};

/***/ }),

/***/ "./utils/i18n.js":
/*!***********************!*\
  !*** ./utils/i18n.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var render = __webpack_require__(/*! json-schema-library/lib/utils/render */ "./node_modules/json-schema-library/lib/utils/render.js");

translate.strings = {};
translateError.strings = {};

function translate(key, data) {
    if (typeof translate.strings[key] === "string") {
        return render(translate.strings[key], data);
    } else if (typeof translate.strings[key] === "function") {
        return translate.strings[key](data);
    }
    return key;
}

function translateError(controller, error) {
    if (typeof translateError.strings[error.code] === "string") {
        error.message = render(translateError.strings[error.code], error.data);
    } else if (typeof translateError.strings[error.code] === "function") {
        error.message = translateError.strings[error.code](controller, error);
    }
    return error;
}

function addLanguage(lang, keys) {
    var _keys = keys == null && Object.prototype.toString.call(lang) === "[object Object]" ? lang : keys;
    _extends(translateError.strings, _keys.errors);
    _extends(translate.strings, _keys.strings);
}

var i18n = {
    translate: translate,
    translateError: translateError,
    addLanguage: addLanguage
};

module.exports = i18n;

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    addItem: __webpack_require__(/*! ./addItem */ "./utils/addItem.js"),
    array: __webpack_require__(/*! ./array */ "./utils/array.js"),
    createElement: __webpack_require__(/*! ./createElement */ "./utils/createElement.js"),
    getID: __webpack_require__(/*! ./getID */ "./utils/getID.js"),
    i18n: __webpack_require__(/*! ./i18n */ "./utils/i18n.js"),
    isNodeContext: __webpack_require__(/*! ./isNodeContext */ "./utils/isNodeContext.js"),
    populated: __webpack_require__(/*! ./populated */ "./utils/populated.js"),
    selectEditor: __webpack_require__(/*! ./selectEditor */ "./utils/selectEditor.js"),
    UISchem: __webpack_require__(/*! ./UISchema */ "./utils/UISchema.js")
};

/***/ }),

/***/ "./utils/isNodeContext.js":
/*!********************************!*\
  !*** ./utils/isNodeContext.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isNodeContext() {
    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object") {
        if (_typeof(process.versions) === "object") {
            if (typeof process.versions.node !== "undefined") {
                return true;
            }
        }
    }
    return false;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./utils/populated.js":
/*!****************************!*\
  !*** ./utils/populated.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// returns true if the value is valid, that is: it has content
module.exports = function populated(value, returnIf) {
    var returnElse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    var isPopulated = true;

    if (value == null || value === "" || value === "#") {
        isPopulated = false;
    } else if (typeof value === "string") {
        isPopulated = value.replace(/<[^>]+>/g, "").replace(/[^A-Za-z0-9]/g, "").length > 0;
    } else if (Array.isArray(value)) {
        isPopulated = value.length > 0;
    } else if (Object.prototype.toString.call(value) === "[object Object]") {
        isPopulated = Object.keys(value).length > 0;
    }

    if (returnIf === undefined && returnElse === "") {
        return isPopulated;
    }

    return isPopulated ? returnIf : returnElse;
};

/***/ }),

/***/ "./utils/selectEditor.js":
/*!*******************************!*\
  !*** ./utils/selectEditor.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Selects an editor based on the given schema
 *
 * @param  {Array} editorViews  - List of editors with a static function 'editorOf'
 * @param  {String} pointer     - current pointer in data
 * @param  {Controller} controller
 * @param  {Object} options     - the complete and resolved (UISchema) options object (editron:ui + additions)
 * @return {Boolean|Constructor} The constructor of the chosen editor od false if no editor could be resolved
 *  or is denied
 */
function select(editorViews, pointer, controller, options) {
    // @todo export this to a configurable function (this is distributed across modules: json-schema-library)
    if (/_id$/.test(pointer)) {
        return false; // abort if it is an internal value
    }

    var schema = controller.schema().get(pointer);
    if (schema.type === "error") {
        // data-pointer could not be found in schema
        // @todo find a better solution for additional data: maybe an 'additional data'-editor
        return false;
    }

    // @ui-option hidden
    if (options.hidden === true) {
        return false;
    }

    for (var i = 0, l = editorViews.length; i < l; i += 1) {
        if (editorViews[i].editorOf(pointer, controller, options)) {
            return editorViews[i];
        }
    }

    return undefined;
}

module.exports = select;

/***/ }),

/***/ 0:
/*!****************!*\
  !*** dll main ***!
  \****************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__;

/***/ }),

/***/ "mithril":
/*!********************!*\
  !*** external "m" ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = m;

/***/ })

/******/ });
//# sourceMappingURL=editron-modules.js.map