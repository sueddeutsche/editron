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

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var createProxy = __webpack_require__(/*! ./utils/createProxy */ "./utils/createProxy.js");

function isValidPointer(pointer) {
  return pointer[0] === "#";
}

function assertValidPointer(pointer) {
  if (isValidPointer(pointer) === false) {
    throw new Error("Invalid json(schema)-pointer: ".concat(pointer));
  }
} // removes the editor from the instances-inventory of active editors


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

function eachInstance(instances, cb) {
  Object.keys(instances).forEach(function (pointer) {
    instances[pointer].forEach(function (editor) {
      return cb(pointer, editor);
    });
  });
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


var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    var _this = this;

    var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Controller);

    schema = UISchema.extendSchema(schema);
    this.options = _extends({
      editors: [].concat(_toConsumableArray(plugin.getEditors()), [__webpack_require__(/*! ./editors/oneofeditor */ "./editors/oneofeditor/index.js"), __webpack_require__(/*! ./editors/arrayeditor */ "./editors/arrayeditor/index.js"), __webpack_require__(/*! ./editors/objecteditor */ "./editors/objecteditor/index.js"), __webpack_require__(/*! ./editors/valueeditor */ "./editors/valueeditor/index.js")])
    }, options);
    this.disabled = false;
    this.editors = this.options.editors;
    this.state = new State();
    this.instances = {};
    this.core = new Core();
    this._proxy = createProxy(this.options.proxy);
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

        throw new Error("Unknown validation type '".concat(validationType, "'"));
      } catch (e) {
        console.log("Error:", e.message);
      }

      return false;
    });
    this.schemaService = new SchemaService(schema, data, this.core);
    this.validationService = new ValidationService(this.state, schema, this.core); // enable i18n error-translations

    this.validationService.setErrorHandler(function (error) {
      return i18n.translateError(_this, error);
    }); // merge given data with template data

    data = this.schemaService.addDefaultData(data, schema);
    this.dataService = new DataService(this.state, data); // start validation after data has been updated

    this.onAfterDataUpdate = this.dataService.on(DataService.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate.bind(this)); // run initial validation

    this.validateAll();
  }

  _createClass(Controller, [{
    key: "resetUndoRedo",
    value: function resetUndoRedo() {
      this.dataService.resetUndoRedo();
    }
  }, {
    key: "setActive",
    value: function setActive() {
      var _this2 = this;

      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var disabled = active === false;

      if (this.disabled === disabled) {
        return;
      }

      this.disabled = disabled;
      eachInstance(this.getInstances(), function (pointer, editor) {
        editor.setActive(!_this2.disabled);
      });
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return !this.disabled;
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
        throw new Error("Missing ".concat(pointer == null ? "pointer" : "element", " in createEditor"));
      }

      assertValidPointer(pointer); // merge schema["editron:ui"] object with options. options precede

      var instanceOptions = _extends({
        id: getID(pointer),
        pointer: pointer,
        disabled: this.disabled
      }, UISchema.copyOptions(pointer, this), options); // find a matching editor


      var Editor = selectEditor(this.getEditors(), pointer, this, instanceOptions);

      if (Editor === false) {
        return undefined;
      }

      if (Editor === undefined) {
        console.warn("Could not resolve an editor for ".concat(pointer), this.schema().get(pointer));
        return undefined;
      } // iniitialize editor and save editor in list
      // @TODO loose reference to destroyed editors


      var editor = new Editor(pointer, this, instanceOptions);
      element.appendChild(editor.toElement());
      editor.setActive(!this.disabled);
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
      LocationService["goto"](gp.join(pointer, index, true));
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
     * @return {Foxy} proxy instance
     */

  }, {
    key: "proxy",
    value: function proxy() {
      return this._proxy;
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
    } // update data in schema service

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
      var _this3 = this;

      setTimeout(function () {
        return _this3.destroyed !== true && _this3.validationService.validate(_this3.dataService.getDataByReference());
      });
    }
    /**
     * Destroy the editor, its widgets and services
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this4 = this;

      // delete all editors
      Object.keys(this.instances).forEach(function (pointer) {
        _this4.instances[pointer] && _this4.instances[pointer].forEach(function (instance) {
          return instance.destroy();
        });
      });
      this.destroyed = true;
      this.instances = {};
      this.schemaService.destroy();
      this.validationService.destroy();
      this.dataService.destroy();
      this.dataService.off(DataService.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate);
    }
  }, {
    key: "onAfterDataUpdate",
    value: function onAfterDataUpdate(_ref3) {
      var _this5 = this;

      var pointer = _ref3.pointer;
      this.update(); // @feature selective-validation

      if (pointer.includes("/")) {
        // @attention validate parent-object or array, in order to support parent-validators.
        // Any higher validators will still be ignore
        pointer = pointer.replace(/\/[^/]+$/, "");
      }

      setTimeout(function () {
        var data = _this5.dataService.getDataByReference();

        _this5.destroyed !== true && _this5.validationService.validate(data, pointer);
      });
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

var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
  view: function view(vnode) {
    if (Array.isArray(vnode.attrs.errors) === false || vnode.attrs.errors.length === 0) {
      return null;
    }

    return m("ul.editron-container__errors", vnode.attrs.errors.map(function (error) {
      return m("li", {
        "class": "is-".concat(error.severity || "error")
      }, error.message);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var m = __webpack_require__(/*! mithril */ "mithril");

var getID = __webpack_require__(/*! ../../utils/getID */ "./utils/getID.js");

var populated = __webpack_require__(/*! ../../utils/populated */ "./utils/populated.js");

function getClass(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      hasAction = _ref.hasAction,
      disabled = _ref.disabled;
  var classname = "".concat(title ? "withTitle" : "noTitle");
  classname += " ".concat(hasAction ? "withActions" : "noActions");
  classname += " ".concat(icon ? "withIcon" : "noIcon");
  classname += disabled ? " is-disabled" : "";
  return classname;
}

module.exports = {
  view: function view(vnode) {
    var attrs = _extends({
      pointer: "",
      icon: "",
      title: "",
      disabled: false // onadd
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      options: [{
        title: "Keine Optionen angegeben",
        value: false
      }],
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
        description: m.trust(tile.description),
        // allow html
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
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


var AbstractEditor =
/*#__PURE__*/
function () {
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
    this.dom = this.controller.createElement(".editron-container.editron-container--".concat(getTypeClass(this.getSchema())), options.attrs);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var AbstractValueEditor =
/*#__PURE__*/
function () {
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
      editorValueType: schema["enum"] ? "select" : schema.type,
      editorElementProperties: null
    }, options); // create main DOM-element for view-generation

    this.$element = controller.createElement(".editron-value.editron-value--".concat(options.editorValueType), _extends({
      name: getId(pointer)
    }, options.attrs)); // use this model to generate the view. may be customized with `options.viewModel`

    this.viewModel = _extends({
      pointer: pointer,
      id: getId(pointer),
      title: options.title,
      description: options.description,
      value: controller.data().get(pointer),
      instantUpdate: options.instantUpdate,
      schema: schema,
      options: options,
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
    }, options.viewModel); // in order to deregister callbacks in destroy(), bind all callbacks to this class

    this.update = controller.data().observe(pointer, this.update.bind(this));
    this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this)); // this.render();
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
      this.$element.setAttribute("name", "editor-".concat(pointer));
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
  }, {
    key: "setActive",
    value: function setActive() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.viewModel.disabled = active === false;

      if (this.viewModel.options) {
        this.viewModel.options.disabled = this.viewModel.disabled;
      }

      this.render();
    } // update display value in view

  }, {
    key: "update",
    value: function update() {
      this.viewModel.value = this.controller.data().get(this.pointer);
      this.viewModel.disabled = !this.controller.isActive();
      this.render();
    } // updates value in data-store

  }, {
    key: "setValue",
    value: function setValue(value) {
      this.controller.data().set(this.pointer, value); // do not trigger rendering here. data-observer will notify change event
    } // adds an error to view

  }, {
    key: "setErrors",
    value: function setErrors(errors) {
      this.viewModel.errors = errors;
      this.render();
    } // update view

  }, {
    key: "render",
    value: function render() {
      // this.$element.innerHTML = "<b>Overwrite AbstractValueEditor.render() to generate your view</b>";
      m.render(this.$element, m("b", "Overwrite AbstractValueEditor.render() to generate view"));
    } // return main dom element

  }, {
    key: "toElement",
    value: function toElement() {
      return this.$element;
    } // destroy this editor

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.viewModel) {
        this.controller.removeInstance(this); // destroy this editor only once

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var m = __webpack_require__(/*! mithril */ "mithril");

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

var ArrayItemView = __webpack_require__(/*! ./ArrayItemView */ "./editors/arrayeditor/ArrayItemView.js");

var arrayUtils = __webpack_require__(/*! ../../utils/array */ "./utils/array.js");

var ArrayItemEditor =
/*#__PURE__*/
function () {
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
      disabled: false,
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
      return parseInt(pointer.replace("".concat(parentPointer, "/"), ""));
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

var m = __webpack_require__(/*! mithril */ "mithril");

var ArrayItemView = {
  editorTarget: ".editron-item",
  view: function view(_ref) {
    var attrs = _ref.attrs;
    var _attrs$disabled = attrs.disabled,
        disabled = _attrs$disabled === void 0 ? false : _attrs$disabled;
    var canRemove = attrs.minItems < attrs.length;
    var canAdd = attrs.maxItems > attrs.length;
    var showIndex = attrs.showIndex === true;
    return [// CONTROLS
    m("ul.editron-container__controls.editron-container__controls--child", {
      "class": disabled ? "is-disabled" : undefined
    }, attrs.move === false || attrs.index === 0 ? "" : m("li", {
      onclick: function onclick() {
        return !disabled && attrs.onmove(attrs.index - 1);
      }
    }, m("i.mmf-icon", "arrow_upward")), attrs.move === false || attrs.index === attrs.length - 1 ? "" : m("li", {
      onclick: function onclick() {
        return !disabled && attrs.onmove(attrs.index + 1);
      }
    }, m("i.mmf-icon", "arrow_downward")), attrs.remove && attrs.ondelete && canRemove ? m("li", {
      onclick: function onclick() {
        return !disabled && attrs.ondelete(attrs.index);
      }
    }, m("i.mmf-icon", "delete")) : "", attrs.add && attrs.onadd && canAdd ? m("li", {
      onclick: function onclick() {
        return !disabled && attrs.onadd(attrs.index);
      }
    }, m("i.mmf-icon", "add")) : ""), // TARGET CONTAINER FOR EDITOR
    m(this.editorTarget, {
      "data-index": "".concat(attrs.index + 1, " / ").concat(attrs.length),
      "class": [disabled ? "is-disabled" : "", canRemove ? "has-remove-enabled" : "has-remove-disabled", canAdd ? "has-add-enabled" : "has-add-disabled", showIndex ? "with-index" : ""].join(" ").trim()
    }), // ADD BUTTON
    attrs.insert && canAdd ? m(".editron-container__separator.mmf-row", m(".editron-container__button--add", {
      "class": disabled ? "is-disabled" : undefined,
      onclick: function onclick(e) {
        console.log("add", disabled);

        if (!disabled) {
          e.preventDefault();
          attrs.onadd && attrs.onadd(attrs.index);
        }
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var m = __webpack_require__(/*! mithril */ "mithril");

var ArrayItemEditor = __webpack_require__(/*! ./ArrayItemEditor */ "./editors/arrayeditor/ArrayItemEditor.js");

var diffpatch = __webpack_require__(/*! ../../services/utils/diffpatch */ "./services/utils/diffpatch.js");

var View = __webpack_require__(/*! ../../components/container */ "./components/container/index.js");

var ArrayEditor =
/*#__PURE__*/
function () {
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
    options.attrs = _extends({
      id: options.id
    }, options.attrs);
    var schema = controller.schema().get(pointer);
    var data = controller.data().get(pointer);

    this.onAdd = function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!_this.viewModel.disabled) {
        controller.addItemTo(_this.pointer, index);
      }
    };

    var arrayHTMLElement = ".editron-container.editron-container--array.withAddButton";
    this.$element = controller.createElement(arrayHTMLElement, options.attrs);
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
    key: "setActive",
    value: function setActive() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var disabled = active === false;
      this.viewModel.disabled = disabled;
      this.viewModel.controls.disabled = disabled;
      this.rebuildChildren();
      this.render();
    }
  }, {
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
        return child.updatePointer("".concat(newPointer, "/").concat(index));
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
      var originalChildren = this.children.slice(0); // and patch the current list

      diffpatch.patch(this.children, patch); // search for inserted children

      this.children.forEach(function (child, index) {
        if (child instanceof ArrayItemEditor === false) {
          var pointer = "".concat(_this2.pointer, "/").concat(index);
          var newChild = new ArrayItemEditor(pointer, _this2.controller, _this2.viewModel.controls); // @insert?

          _this2.children[index] = newChild;
        }
      }); // search for removed children

      originalChildren.forEach(function (child) {
        if (_this2.children.indexOf(child) === -1) {
          child.destroy();
        }
      }); // update view: move and inserts nodes

      var currentLocation = this.controller.location().getCurrent();

      for (var i = 0, l = this.children.length; i < l; i += 1) {
        var previousPointer = this.children[i].getPointer();
        var currentPointer = "".concat(this.pointer, "/").concat(i); // update current location

        if (currentLocation.indexOf(previousPointer) === 0) {
          var editorLocation = currentLocation.replace(previousPointer, currentPointer);
          this.controller.location().setCurrent(editorLocation);
        } // update child views to match patched list


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

      var data = this.controller.data().get(this.pointer); // delete all child editors

      this.children.forEach(function (editor) {
        return editor.destroy();
      });
      this.children.length = 0;
      this.$items.innerHTML = ""; // recreate child editors

      data.forEach(function (item, index) {
        var childPointer = "".concat(_this3.pointer, "/").concat(index);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var m = __webpack_require__(/*! mithril */ "mithril");

var TextareaForm = __webpack_require__(/*! mithril-material-forms/components/textareaform */ "./node_modules/mithril-material-forms/components/textareaform/index.js");

var OverlayService = __webpack_require__(/*! ../../services/OverlayService */ "./services/OverlayService.js");

var View = __webpack_require__(/*! ../../components/container */ "./components/container/index.js");

function showJSON(controller, data, title) {
  var element = controller.createElement(".overlay__item.overlay__item--json");
  OverlayService.open(element, {
    ok: true,
    save: false
  }); // render textarea after it is injected into dom, to correctly update textarea size

  m.render(element, m(TextareaForm, {
    title: title,
    value: JSON.stringify(data, null, 4)
  }));
}

var ObjectEditor =
/*#__PURE__*/
function () {
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
    options.attrs = _extends({
      id: options.id
    }, options.attrs);
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
        return controller.data()["delete"](pointer);
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
          return controller.data()["delete"](pointer);
        };
      }

      controller.data().removeObserver(oldPointer, this.rebuildChildren);
      controller.validator().removeObserver(oldPointer, this.setErrors);
      controller.data().observe(pointer, this.rebuildChildren);
      controller.validator().observe(pointer, this.setErrors);
      this.childEditors.forEach(function (editor) {
        editor.updatePointer("".concat(_this.pointer, "/").concat(editor._property));
      });
      this.render();
    }
  }, {
    key: "setActive",
    value: function setActive() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.viewModel.disabled = active === false;
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
        console.error("destroyed ObjectEditor receives an update event\n                - this may be invoked through oneOf-Editor", this);
        return;
      } // fetch latest data


      var data = this.controller.data().get(this.pointer); // destroy child editor

      this.childEditors.forEach(function (editor) {
        return editor.destroy();
      });
      this.childEditors.length = 0; // clear html

      this.$children.innerHTML = ""; // rebuild children

      if (data) {
        Object.keys(data).forEach(function (property) {
          var editor = _this2.controller.createEditor("".concat(_this2.pointer, "/").concat(property), _this2.$children);

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
      var data = this.controller.data().get(this.pointer);
      delete data[property];
      this.controller.data().set(this.pointer, data);
    }
  }, {
    key: "showProperty",
    value: function showProperty(property) {
      var propertyData = this.controller.data().get("".concat(this.pointer, "/").concat(property));
      showJSON(this.controller, propertyData, property);
    }
  }, {
    key: "setErrors",
    value: function setErrors() {
      var _this3 = this;

      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // if we receive errors here, a property may be missing (which should go to schema.getTemplate) or additional,
      // but prohibited properties exist. For the latter, add an option to show and/or delete the property. Within
      // arrays this should come per default, as the may insert in add items...
      this.viewModel.errors = errors.map(function (error) {
        if (error.code === "no-additional-properties-error") {
          var message = error.message;
          var property = error.data.property;
          return {
            severity: error.type || "error",
            message: m(".editron-error.editron-error--object-property", m("span", m.trust(message)), m("a.mmf-icon", {
              onclick: function onclick() {
                return _this3.showProperty(property);
              }
            }, "visibility"), m("a.mmf-icon", {
              onclick: function onclick() {
                return _this3.deleteProperty(property);
              }
            }, "clear"))
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var m = __webpack_require__(/*! mithril */ "mithril");

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

var Select = __webpack_require__(/*! mithril-material-forms/components/select */ "./node_modules/mithril-material-forms/components/select/index.js");

var getId = __webpack_require__(/*! ../../utils/getID */ "./utils/getID.js");

var View = __webpack_require__(/*! ../../components/container */ "./components/container/index.js");

var UI_PROPERTY = __webpack_require__(/*! ../../utils/UISchema */ "./utils/UISchema.js").UI_PROPERTY;

var OneOfEditor =
/*#__PURE__*/
function () {
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

    var childSchema = controller.schema().get(pointer); // @special case. Our options lie in `schema.oneOfSchema`

    var schema = childSchema.oneOfSchema;
    var attrs = gp.get(schema, "#/".concat(UI_PROPERTY, "/attrs"));
    this.schema = schema;
    this.childSchema = childSchema; // ensure requried titles are set

    schema.oneOf.forEach(function (oneOfSchema, index) {
      return oneOfSchema.title = oneOfSchema.title || "".concat(index, ".");
    });
    this.$element = controller.createElement(".editron-container.editron-container--oneof", attrs);
    this.controller = controller;
    this.pointer = pointer;
    this.viewModel = {
      id: getId(pointer),
      pointer: pointer,
      options: schema.oneOf.map(function (oneOf, index) {
        return {
          title: oneOf.title,
          value: index
        };
      }),
      onchange: function onchange(oneOfIndex) {
        _this.changeChild(schema.oneOf[oneOfIndex]);
      },
      value: this.getIndexOf(childSchema),
      title: schema.title,
      description: schema.description
    }; // use bubble=true to catch inner changes (changes are compared by a diff which may not notify parent pointer)

    this.update = controller.data().observe(pointer, this.update.bind(this), true);
    this.render();
    this.$childContainer = this.$element.querySelector(View.childContainerSelector);
    this.rebuild();
  }

  _createClass(OneOfEditor, [{
    key: "setActive",
    value: function setActive() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.viewModel.disabled = active === false;
      this.render();
    }
  }, {
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var m = __webpack_require__(/*! mithril */ "mithril");

var CheckboxForm = __webpack_require__(/*! mithril-material-forms/components/checkboxform */ "./node_modules/mithril-material-forms/components/checkboxform/index.js");

var SelectForm = __webpack_require__(/*! mithril-material-forms/components/selectform */ "./node_modules/mithril-material-forms/components/selectform/index.js");

var TextareaForm = __webpack_require__(/*! mithril-material-forms/components/textareaform */ "./node_modules/mithril-material-forms/components/textareaform/index.js");

var InputForm = __webpack_require__(/*! mithril-material-forms/components/inputform */ "./node_modules/mithril-material-forms/components/inputform/index.js");

var UISchema = __webpack_require__(/*! ../../utils/UISchema */ "./utils/UISchema.js");

function chooseInput(attrs) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var schema = attrs.schema;

  var config = _extends({
    type: schema.type,
    title: schema.title,
    description: schema.description,
    onblur: attrs.onblur || Function.prototype,
    onfocus: attrs.onfocus || Function.prototype,
    onchange: attrs.onchange || Function.prototype
  }, attrs, options);

  if (schema["enum"] && schema["enum"].length > 0) {
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
    config.rows = options["textarea:rows"] || 1;
    return m(TextareaForm, config);
  }

  return m(InputForm, config);
}

module.exports = {
  view: function view(vnode) {
    return chooseInput(vnode.attrs, vnode.attrs.options);
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var m = __webpack_require__(/*! mithril */ "mithril");

var View = __webpack_require__(/*! ./View */ "./editors/valueeditor/View.js");

var AbstractValueEditor = __webpack_require__(/*! ../AbstractValueEditor */ "./editors/AbstractValueEditor.js");

var ValueEditor =
/*#__PURE__*/
function (_AbstractValueEditor) {
  _inherits(ValueEditor, _AbstractValueEditor);

  _createClass(ValueEditor, null, [{
    key: "editorOf",
    value: function editorOf(pointer, controller) {
      var schema = controller.schema().get(pointer);
      return schema.type !== "object" && schema.type !== "array";
    }
  }]);

  function ValueEditor(pointer, controller) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ValueEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValueEditor).call(this, pointer, controller, options));

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

/***/ "./node_modules/@technik-sde/foxy/dist/foxy.js":
/*!*****************************************************!*\
  !*** ./node_modules/@technik-sde/foxy/dist/foxy.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "Foxy", function () {
      return r;
    }), n.d(t, "handler", function () {
      return u;
    }), n.d(t, "utils", function () {
      return o;
    });

    var r =
    /*#__PURE__*/
    function () {
      function r() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, r);

        this.handlers = e.handlers || [];
      }

      _createClass(r, [{
        key: "addHandler",
        value: function addHandler(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          null == this.handlers[t] && this.handlers.push(e), this.handlers.splice(t, 0, e);
        }
      }, {
        key: "removeHandler",
        value: function removeHandler(e) {
          this.handlers = this.handlers.filter(function (t) {
            return t !== e;
          });
        }
      }, {
        key: "getImageURL",
        value: function getImageURL(e) {
          return this.get("getImageURL", e);
        }
      }, {
        key: "getImageInfo",
        value: function getImageInfo(e) {
          return this.get("getImageInfo", e);
        }
      }, {
        key: "getVideoURL",
        value: function getVideoURL(e) {
          return this.get("getVideoURL", e);
        }
      }, {
        key: "getVideoInfo",
        value: function getVideoInfo(e) {
          return this.get("getVideoInfo", e);
        }
      }, {
        key: "getURL",
        value: function getURL(e) {
          return this.get("getURL", e);
        }
      }, {
        key: "get",
        value: function get(e, t) {
          var n = this.findHandler(e, t);
          return null == n ? Promise.reject(new Error("There is no handler for method '".concat(e, "(").concat(JSON.stringify(t), ")'"))) : n[e](t);
        }
      }, {
        key: "isSupported",
        value: function isSupported(e) {
          return this.handlers.some(function (t) {
            return t.use(e);
          });
        }
      }, {
        key: "findHandler",
        value: function findHandler(e, t) {
          return this.handlers.find(function (n) {
            return "function" == typeof n[e] && !0 === n.use(t);
          });
        }
      }]);

      return r;
    }();

    var o = {
      loadImageInfo: function loadImageInfo(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = {
          src: e,
          image: new Image(),
          type: "",
          width: 0,
          height: 0
        };
        return fetch(e, t).then(function (e) {
          return e.blob();
        }).then(function (e) {
          return n.type = e.type.replace(/^[^/]+\//, ""), URL.createObjectURL(e);
        }).then(function (e) {
          return new Promise(function (t, r) {
            n.image.addEventListener("load", function () {
              return t();
            }), n.image.addEventListener("error", r), n.image.src = e;
          });
        }).then(function () {
          return n.width = n.image.naturalWidth, n.height = n.image.naturalHeight, n;
        });
      },
      loadVideoInfo: function loadVideoInfo(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = {
          src: e,
          width: 0,
          height: 0,
          video: document.createElement("video"),
          duration: 0,
          poster: ""
        };
        return fetch(e, t).then(function (e) {
          return e.blob();
        }).then(function (e) {
          return n.type = e.type.replace(/^[^/]+\//, ""), URL.createObjectURL(e);
        }).then(function (e) {
          return new Promise(function (t, r) {
            n.video.addEventListener("error", r), n.video.addEventListener("loadedmetadata", function () {
              var e = n.video;
              n.width = e.videoWidth, n.height = e.videoHeight, n.duration = e.duration, n.poster = e.poster, t(n);
            });
            var o = document.createElement("source");
            o.setAttribute("src", e), n.video.appendChild(o);
          });
        });
      },
      isHandler: function isHandler(e) {
        return "[object Object]" === Object.prototype.toString.call(e) && "function" == typeof e.use;
      }
    };
    var i = /^https:\/\/images\.unsplash\.com\/photo-\d{13}-[0-9a-f]{12}/;

    function s(e) {
      var t = e.source.replace(/\?.*$/, ""),
          n = new URLSearchParams(e.source.replace(/^.*\?/, ""));
      return e.width && n.set("w", e.width), e.height && n.set("h", e.height), e.quality && n.set("q", e.quality), e.fit && n.set("fit", e.fit), e.auto && n.set("auto", e.auto), "".concat(t, "?").concat(n.toString());
    }

    var u = {
      unsplash: {
        use: function use(e) {
          return i.test(e.source);
        },
        getImageURL: function getImageURL(e) {
          return Promise.resolve(s(e));
        },
        getImageInfo: function getImageInfo(e) {
          return o.loadImageInfo(s(e));
        }
      },
      image: {
        use: function use(e) {
          return /^https?:\/\//.test(e.source);
        },
        getImageURL: function getImageURL(e) {
          return Promise.resolve(e.source);
        },
        getImageInfo: function getImageInfo(e) {
          return o.loadImageInfo(e.source);
        }
      },
      video: {
        use: function use(e) {
          return /^https?:\/\//.test(e.source);
        },
        getVideoURL: function getVideoURL(e) {
          return Promise.resolve(e.source);
        },
        getVideoInfo: function getVideoInfo(e) {
          return o.loadVideoInfo(e.source);
        }
      }
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module, exports) {
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
      "delete": function _delete(key) {
        var index = keys.indexOf(key);

        if (index > -1) {
          keys.splice(index, 1);
          values.splice(index, 1);
        }
      }
    };
  }();

  var createEvent = function createEvent(name) {
    return new Event(name, {
      bubbles: true
    });
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
    var clientWidth = null;
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
      } // Fix when a textarea is not on document body and heightOffset is Not a Number


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
        ta.style.width = '0px'; // Force reflow:

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
      if (ta.scrollHeight === 0) {
        // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
        return;
      }

      var overflows = getParentOverflows(ta);
      var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

      ta.style.height = '';
      ta.style.height = ta.scrollHeight + heightOffset + 'px'; // used to check if an update is actually necessary on window.resize

      clientWidth = ta.clientWidth; // prevents scroll-position jumping

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
      var computed = window.getComputedStyle(ta, null); // Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box

      var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight; // The actual height not matching the style height (set via the resize method) indicates that 
      // the max-height has been exceeded, in which case the overflow should be allowed.

      if (actualHeight < styleHeight) {
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
        } catch (err) {// Firefox will throw an error on dispatchEvent for a detached element
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
      map["delete"](ta);
    }.bind(ta, {
      height: ta.style.height,
      resize: ta.style.resize,
      overflowY: ta.style.overflowY,
      overflowX: ta.style.overflowX,
      wordWrap: ta.style.wordWrap
    });

    ta.addEventListener('autosize:destroy', destroy, false); // IE9 does not fire onpropertychange or oninput for deletions,
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

  var autosize = null; // Do nothing in Node.js environment and IE8 (or lower)

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

  exports["default"] = autosize;
  module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && _typeof(value) === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol["for"];
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol["for"]('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

/***/ }),

/***/ "./node_modules/diff_match_patch/lib/diff_match_patch.js":
/*!***************************************************************!*\
  !*** ./node_modules/diff_match_patch/lib/diff_match_patch.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  this.Diff_Timeout = 1.0; // Cost of an empty edit operation in terms of edit characters.

  this.Diff_EditCost = 4; // The size beyond which the double-ended diff activates.
  // Double-ending is twice as fast, but less accurate.

  this.Diff_DualThreshold = 32; // At what point is no match declared (0.0 = perfection, 1.0 = very loose).

  this.Match_Threshold = 0.5; // How far to search for a match (0 = exact location, 1000+ = broad match).
  // A match this many characters away from the expected location will add
  // 1.0 to the score (0.0 is a perfect match).

  this.Match_Distance = 1000; // When deleting a large block of text (over ~64 characters), how close does
  // the contents have to match the expected contents. (0.0 = perfection,
  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
  // end points of a delete need to match.

  this.Patch_DeleteThreshold = 0.5; // Chunk size for context length.

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
  } // How many bits in a number?


  this.Match_MaxBits = getMaxBits();
} //  DIFF FUNCTIONS

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
  } // Check for equality (speedup).


  if (text1 == text2) {
    return [[DIFF_EQUAL, text1]];
  }

  if (typeof opt_checklines == 'undefined') {
    opt_checklines = true;
  }

  var checklines = opt_checklines; // Trim off common prefix (speedup).

  var commonlength = this.diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength); // Trim off common suffix (speedup).

  commonlength = this.diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength); // Compute the diff on the middle block.

  var diffs = this.diff_compute(text1, text2, checklines); // Restore the prefix and suffix.

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
    diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]]; // Swap insertions for deletions if diff is reversed.

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
    var mid_common = hm[4]; // Send both pairs off for separate processing.

    var diffs_a = this.diff_main(text1_a, text2_a, checklines);
    var diffs_b = this.diff_main(text1_b, text2_b, checklines); // Merge the results.

    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  } // Perform a real diff.


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
    this.diff_charsToLines(diffs, linearray); // Eliminate freak matches (e.g. blank lines)

    this.diff_cleanupSemantic(diffs); // Rediff any replacement blocks, this time character-by-character.
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
    var chars = ''; // Walk the text, pulling out a substring for each line.
    // text.split('\n') would would temporarily double our memory footprint.
    // Modifying text would create many large strings to garbage collect.

    var lineStart = 0;
    var lineEnd = -1; // Keeping our own length variable is faster than looking it up.

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
  var ms_end = new Date().getTime() + this.Diff_Timeout * 1000; // Cache the text lengths to prevent multiple calls.

  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = text1_length + text2_length - 1;
  var doubleEnd = this.Diff_DualThreshold * 2 < max_d; // JavaScript efficiency note: (x << 32) + y doesn't work since numbers are
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
  var done = false; // If the total number of characters is odd, then the front path will collide
  // with the reverse path.

  var front = (text1_length + text2_length) % 2;

  for (var d = 0; d < max_d; d++) {
    // Bail out if timeout reached.
    if (this.Diff_Timeout > 0 && new Date().getTime() > ms_end) {
      return null;
    } // Walk the front path one step.


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
  } // Number of diffs equals number of characters, no commonality at all.


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
  } // Binary search.
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
  } // Binary search.
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
  } // First check if the second quarter is the seed for a half-match.


  var hm1 = diff_halfMatchI(longtext, shorttext, Math.ceil(longtext.length / 4)); // Check again based on the third quarter.

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
  } // A half-match was found, sort out the return data.


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

  var length_changes1 = 0; // Number of characters that changed after the equality.

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
        diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]); // Change second copy to insert.

        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT; // Throw away the equality we just deleted.

        equalitiesLength--; // Throw away the previous equality (it needs to be reevaluated).

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
    } // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.


    var score = 0; // One point for non-alphanumeric.

    if (one.charAt(one.length - 1).match(punctuation) || two.charAt(0).match(punctuation)) {
      score++; // Two points for whitespace.

      if (one.charAt(one.length - 1).match(whitespace) || two.charAt(0).match(whitespace)) {
        score++; // Three points for line breaks.

        if (one.charAt(one.length - 1).match(linebreak) || two.charAt(0).match(linebreak)) {
          score++; // Four points for blank lines.

          if (one.match(blanklineEnd) || two.match(blanklineStart)) {
            score++;
          }
        }
      }
    }

    return score;
  }

  var pointer = 1; // Intentionally ignore the first and last element (don't need checking).

  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      var equality1 = diffs[pointer - 1][1];
      var edit = diffs[pointer][1];
      var equality2 = diffs[pointer + 1][1]; // First, shift the edit as far left as possible.

      var commonOffset = this.diff_commonSuffix(equality1, edit);

      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      } // Second, step character by character right, looking for the best fit.


      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore = diff_cleanupSemanticScore(equality1, edit) + diff_cleanupSemanticScore(edit, equality2);

      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore(equality1, edit) + diff_cleanupSemanticScore(edit, equality2); // The >= encourages trailing rather than leading whitespace on edits.

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

  var pre_ins = false; // Is there a deletion operation before the last equality.

  var pre_del = false; // Is there an insertion operation after the last equality.

  var post_ins = false; // Is there a deletion operation after the last equality.

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
        diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]); // Change second copy to insert.

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
            } // Factor out any common suffixies.


            commonlength = this.diff_commonSuffix(text_insert, text_delete);

            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length - commonlength);
              text_delete = text_delete.substring(0, text_delete.length - commonlength);
            }
          } // Delete the offending records and add the merged ones.


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
  } // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC


  var changes = false;
  pointer = 1; // Intentionally ignore the first and last element (don't need checking).

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
  } // If shifts were made, the diff needs reordering and another shift sweep.


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
  } // Was the location was deleted?


  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
    return last_chars2;
  } // Add the remaining character length.


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
  } // Opera doesn't know how to encode char 0.


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

      case '-': // Fall through.

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
}; //  MATCH FUNCTIONS

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
  } // Initialise the alphabet.


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
  } // Highest score beyond which we give up.


  var score_threshold = this.Match_Threshold; // Is there a nearby exact match? (speedup)

  var best_loc = text.indexOf(pattern, loc);

  if (best_loc != -1) {
    score_threshold = Math.min(match_bitapScore(0, best_loc), score_threshold); // What about in the other direction? (speedup)

    best_loc = text.lastIndexOf(pattern, loc + pattern.length);

    if (best_loc != -1) {
      score_threshold = Math.min(match_bitapScore(0, best_loc), score_threshold);
    }
  } // Initialise the bit arrays.


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
    } // Use the result from this iteration as the maximum for the next.


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
        var score = match_bitapScore(d, j - 1); // This match will almost certainly be better than any existing match.
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
    } // No hope for a (better) match at greater error levels.


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
}; //  PATCH FUNCTIONS

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
  var padding = 0; // Look for the first and last matches of pattern in text.  If two different
  // matches are found, increase the pattern length.

  while (text.indexOf(pattern) != text.lastIndexOf(pattern) && pattern.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin) {
    padding += this.Patch_Margin;
    pattern = text.substring(patch.start2 - padding, patch.start2 + patch.length1 + padding);
  } // Add one chunk for good luck.


  padding += this.Patch_Margin; // Add the prefix.

  var prefix = text.substring(patch.start2 - padding, patch.start2);

  if (prefix) {
    patch.diffs.unshift([DIFF_EQUAL, prefix]);
  } // Add the suffix.


  var suffix = text.substring(patch.start2 + patch.length1, patch.start2 + patch.length1 + padding);

  if (suffix) {
    patch.diffs.push([DIFF_EQUAL, suffix]);
  } // Roll back the start points.


  patch.start1 -= prefix.length;
  patch.start2 -= prefix.length; // Extend the lengths.

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
  } else if (a && _typeof(a) == 'object' && typeof opt_b == 'undefined' && typeof opt_c == 'undefined') {
    // Method 2: diffs
    // Compute text1 from diffs.
    diffs = a;
    text1 = this.diff_text1(diffs);
  } else if (typeof a == 'string' && opt_b && _typeof(opt_b) == 'object' && typeof opt_c == 'undefined') {
    // Method 3: text1, diffs
    text1 = a;
    diffs = opt_b;
  } else if (typeof a == 'string' && typeof opt_b == 'string' && opt_c && _typeof(opt_c) == 'object') {
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
            patchDiffLength = 0; // Unlike Unidiff, our patch lists have a rolling context.
            // http://code.google.com/p/google-diff-match-patch/wiki/Unidiff
            // Update prepatch text & pos to reflect the application of the
            // just completed patch.

            prepatch_text = postpatch_text;
            char_count1 = char_count2;
          }
        }

        break;
    } // Update the current character count.


    if (diff_type !== DIFF_INSERT) {
      char_count1 += diff_text.length;
    }

    if (diff_type !== DIFF_DELETE) {
      char_count2 += diff_text.length;
    }
  } // Pick up the leftover patch if not empty.


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
  } // Deep copy the patches so that no changes are made to originals.


  patches = this.patch_deepCopy(patches);
  var nullPadding = this.patch_addPadding(patches);
  text = nullPadding + text + nullPadding;
  this.patch_splitMax(patches); // delta keeps track of the offset between the expected and actual location
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
      results[x] = false; // Subtract the delta for this failed patch from subsequent patches.

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
  } // Strip the padding off.


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
  } // Bump all the patches forward.


  for (var x = 0; x < patches.length; x++) {
    patches[x].start1 += paddingLength;
    patches[x].start2 += paddingLength;
  } // Add some padding on start of first diff.


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
  } // Add some padding on end of last diff.


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
      var bigpatch = patches[x]; // Remove the big old patch.

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
        } // Compute the head context for the next patch.


        precontext = this.diff_text2(patch.diffs);
        precontext = precontext.substring(precontext.length - this.Patch_Margin); // Append the end context for this patch.

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
  } // Opera doesn't know how to decode char 0.


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
      } else if (sign === '') {// Blank line?  Whatever.
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
  var op; // Escape the body of the patch with %xx notation.

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
  } // Opera doesn't know how to encode char 0.


  return text.join('').replace(/\x00/g, '%00').replace(/%20/g, ' ');
}; // Export these global variables so that they survive Google's JS compiler.

/*changed by lfborjas: changed `window` for `exports` to make it suitable for the node.js module conventions*/


exports['diff_match_patch'] = diff_match_patch;
exports['patch_obj'] = patch_obj;
exports['DIFF_DELETE'] = DIFF_DELETE;
exports['DIFF_INSERT'] = DIFF_INSERT;
exports['DIFF_EQUAL'] = DIFF_EQUAL;

/***/ }),

/***/ "./node_modules/gson-conform/lib/asArray.js":
/*!**************************************************!*\
  !*** ./node_modules/gson-conform/lib/asArray.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Converts an object to an array
 *
 * @param  {Mixed} value to convert to array
 * @return {Array} to array converted input
 */

function asArray(value) {
  if (Array.isArray(value)) {
    return value; // prevent duplication
  } else if (Object.prototype.toString.call(value) === "[object Object]") {
    return Object.keys(value).map(function (key) {
      return value[key];
    });
  } else {
    return [];
  }
}

module.exports = asArray;

/***/ }),

/***/ "./node_modules/gson-conform/lib/forEach.js":
/*!**************************************************!*\
  !*** ./node_modules/gson-conform/lib/forEach.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Iterates over object or array, passing each key, value and parentObject to the callback
 *
 * @param  {Object|Array} value	to iterate
 * @param  {Function} callback	receiving key on given input value
 */

function forEach(object, callback) {
  var keys;

  if (Array.isArray(object)) {
    object.forEach(callback);
  } else if (Object.prototype.toString.call(object) === "[object Object]") {
    Object.keys(object).forEach(function (key) {
      callback(object[key], key, object);
    });
  }
}

module.exports = forEach;

/***/ }),

/***/ "./node_modules/gson-conform/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/gson-conform/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.values = __webpack_require__(/*! ./values */ "./node_modules/gson-conform/lib/values.js");
exports.asArray = __webpack_require__(/*! ./asArray */ "./node_modules/gson-conform/lib/asArray.js");
exports.forEach = __webpack_require__(/*! ./forEach */ "./node_modules/gson-conform/lib/forEach.js");
exports.keyOf = __webpack_require__(/*! ./keyOf */ "./node_modules/gson-conform/lib/keyOf.js");
exports.keys = __webpack_require__(/*! ./keys */ "./node_modules/gson-conform/lib/keys.js");

/***/ }),

/***/ "./node_modules/gson-conform/lib/keyOf.js":
/*!************************************************!*\
  !*** ./node_modules/gson-conform/lib/keyOf.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__(/*! ./forEach */ "./node_modules/gson-conform/lib/forEach.js");
/**
 * Returns the key of the value
 *
 * @param  {Object|Array} data	to scan
 * @param  {Mixed} value 		to search
 * @return {String|Number} key of (last) found result or null
 */


function keyOf(data, value) {
  var resultKey = null;
  forEach(data, function (itemValue, itemKey) {
    if (value === itemValue) {
      resultKey = itemKey;
    }
  });
  return resultKey;
}

module.exports = keyOf;

/***/ }),

/***/ "./node_modules/gson-conform/lib/keys.js":
/*!***********************************************!*\
  !*** ./node_modules/gson-conform/lib/keys.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Returns all keys of the given input data
 *
 * @param  {Mixed} value
 * @return {Array} containing keys of given value
 */

function keys(value) {
  var keys;

  if (Array.isArray(value)) {
    keys = value.map(function (value, index) {
      return index;
    });
  } else if (Object.prototype.toString.call(value) === "[object Object]") {
    return Object.keys(value);
  } else {
    keys = [];
  }

  return keys;
}

module.exports = keys;

/***/ }),

/***/ "./node_modules/gson-conform/lib/values.js":
/*!*************************************************!*\
  !*** ./node_modules/gson-conform/lib/values.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Returns all values of the given input data
 * @param  {Mixed} value input data
 * @return {Array} array of input data's values
 */

function values(value) {
  var values;

  if (Array.isArray(value)) {
    // []
    values = value;
  } else if (Object.prototype.toString.call(value) === "[object Object]") {
    // {}
    values = Object.keys(value).map(function (key) {
      return value[key];
    });
  } else if (value != null) {
    // *
    values = [value];
  } else {
    values = [];
  }

  return values;
}

module.exports = values;

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
exports["delete"] = __webpack_require__(/*! ./lib/delete */ "./node_modules/gson-pointer/lib/delete.js");
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
/***/ (function(module, exports) {

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
  } // determine type of pointer


  var option = arguments[arguments.length - 1];
  var isURI = typeof option === "boolean" ? option : firstPointer && firstPointer[0] === "#";

  for (var i = 0, l = arguments.length; i < l; i += 1) {
    result.push.apply(result, split(arguments[i]));
  } // build final list of properties


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

/***/ "./node_modules/gson-query/lib/common.js":
/*!***********************************************!*\
  !*** ./node_modules/gson-query/lib/common.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var rIsRegExp = /^\{.*\}$/;
/**
 * Removes root prefix of pointer
 *
 * @param  {String} pointer
 * @return {String} simple pointer path
 */

function stripPointerPrefix(pointer) {
  pointer = pointer.toString();
  return pointer.replace(/[#/]*/, "");
}

function convertToRegExp(pointerPartial) {
  return new RegExp(pointerPartial.replace(/^\{|\}$/g, ""));
}

function splitRegExp(pointer) {
  pointer = pointer.replace(/^\{|\/\{/g, "§{");
  pointer = pointer.replace(/\}\/|\}$/g, "}§");
  return pointer.split("§");
}
/**
 * Can not be used in conjuction with filters...
 * REMOVE stripPointer...
 *
 * @param  {String} pointer
 * @return {Array}
 */


function parsePointer(pointer) {
  var partials;
  var current;
  var result;
  pointer = stripPointerPrefix(pointer);

  if (pointer.indexOf("{") === -1) {
    return pointer.split("/");
  }

  result = [];
  partials = splitRegExp(pointer);

  while ((current = partials.shift()) != null) {
    if (current === "") {
      continue;
    }

    if (rIsRegExp.test(current)) {
      result.push(current);
    } else {
      result.push.apply(result, current.split("/"));
    }
  }

  return result;
}

exports.rIsRegExp = rIsRegExp;
exports.convertToRegExp = convertToRegExp;
exports.splitRegExp = splitRegExp;
exports.parsePointer = parsePointer;

/***/ }),

/***/ "./node_modules/gson-query/lib/delete.js":
/*!***********************************************!*\
  !*** ./node_modules/gson-query/lib/delete.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var pointerDelete = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js")["delete"];

var removeUndefinedItems = __webpack_require__(/*! gson-pointer/lib/removeUndefinedItems */ "./node_modules/gson-pointer/lib/removeUndefinedItems.js");

var queryGet = __webpack_require__(/*! ./get */ "./node_modules/gson-query/lib/get.js");

var POINTER = 3;
var PARENT = 2;

function queryDelete(obj, jsonPointer) {
  var matches = queryGet(obj, jsonPointer, queryGet.ALL);
  matches.forEach(function (match) {
    pointerDelete(obj, match[POINTER], true);
  });
  matches.forEach(function (match) {
    if (Array.isArray(match[PARENT])) {
      removeUndefinedItems(match[PARENT]);
    }
  });
  return obj;
}

module.exports = queryDelete;

/***/ }),

/***/ "./node_modules/gson-query/lib/filter.js":
/*!***********************************************!*\
  !*** ./node_modules/gson-query/lib/filter.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var o = __webpack_require__(/*! gson-conform */ "./node_modules/gson-conform/lib/index.js");

var common = __webpack_require__(/*! ./common */ "./node_modules/gson-query/lib/common.js");

var f = {
  queryKey: function queryKey(obj, query) {
    return function (key) {
      return valid(obj[key], query);
    };
  },
  queryRegExp: function queryRegExp(obj, query, regex) {
    return function (key) {
      return regex.test(key) ? valid(obj[key], query) : false;
    };
  }
};
var MAP = {
  "false": false,
  "true": true,
  "null": null
};
/**
 * Filter properties by query: select|if:property
 *
 * @param  {Object|Array} obj
 * @param  {String} query key:value pairs separated by &
 * @return {Array} values matching the given query
 */

function filterValues(obj, query) {
  return filterKeys(obj, query).map(function (key) {
    return obj[key];
  });
}

var selectCurly = /(\{[^}]*\})/g;
var selectPlaceholder = /§§§\d+§§§/g;

function splitQuery(value) {
  // nothing to escape
  if (value.indexOf("?") === -1 || value.indexOf("{") === -1) {
    return value.split("?", 2);
  } // @todo this must be simpler to solve


  var map = {};
  var temp = value.replace(selectCurly, function replace(match, group, index) {
    var id = "§§§" + index + "§§§";
    map[id] = match;
    return id;
  });
  var result = temp.split("?", 2);

  for (var i = 0; i < result.length; i += 1) {
    result[i] = result[i].replace(selectPlaceholder, function revertReplacement(match) {
      return map[match];
    });
  }

  return result;
}
/**
 * Filter properties by query: select|if:property
 *
 * @param  {Object|Array} obj
 * @param  {String} query key:value pairs separated by &
 * @return {Array} object keys matching the given query
 */


function filterKeys(obj, query) {
  if (obj && query) {
    var matches = splitQuery(query);
    var propertyQuery = matches[0];
    var filterQuery = matches[1];
    var keys;
    var regex;

    if (propertyQuery === "*" || propertyQuery === "**") {
      keys = o.keys(obj);
      return keys.filter(f.queryKey(obj, filterQuery));
    } else if (common.rIsRegExp.test(propertyQuery)) {
      keys = o.keys(obj);
      regex = common.convertToRegExp(propertyQuery);
      return keys.filter(f.queryRegExp(obj, filterQuery, regex));
    } else if (obj[propertyQuery] && valid(obj[propertyQuery], filterQuery)) {
      return [propertyQuery];
    }
  }

  return [];
}
/**
 * Returns true if the query matches. Query: key:value&key:value
 * @param  {Object|Array} obj
 * @param  {String} query key:value pairs separated by &
 * @return {Boolean} if query matched object
 */


function valid(obj, query) {
  if (!query) {
    return true;
  }

  if (!obj) {
    return false;
  }

  var key;
  var value;
  var isValid = true;
  var truthy;
  var tests = query.replace(/(&&)/g, "§$1§").replace(/(\|\|)/g, "§$1§").split("§");
  var or = false;

  for (var i = 0, l = tests.length; i < l; i += 2) {
    if (tests[i].indexOf(":!") > -1) {
      truthy = false;
      value = tests[i].split(":!");
    } else if (tests[i].indexOf(":") === -1) {
      truthy = false;
      value = [tests[i], undefined];
    } else {
      truthy = true;
      value = tests[i].split(":");
    }

    key = value[0];
    value = value[1];

    if (value === "undefined") {
      value = undefined; // undefined is unmappable
    } else {
      value = MAP[value] === undefined ? value : MAP[value];
    } // perform filter test, exception undefined is not matched for negated non-undefined values


    value = truthy ? value === obj[key] : value !== obj[key] && (obj[key] !== undefined || key === undefined);

    if (or) {
      isValid = isValid || value;
    } else {
      isValid = isValid && value;
    }

    or = tests[i + 1] === "||";
  }

  return isValid;
}

exports.values = filterValues;
exports.keys = filterKeys;
exports.valid = valid;

/***/ }),

/***/ "./node_modules/gson-query/lib/get.js":
/*!********************************************!*\
  !*** ./node_modules/gson-query/lib/get.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-unused-vars: 0 */
var query = __webpack_require__(/*! ./run */ "./node_modules/gson-query/lib/run.js");
/**
 * Returns the query results as an array or object, depending on its callback
 *
 * ## return type
 *
 * - get.ALL = 'all' returns all arguments of query callback [value, key, parent, pointer]
 * - get.POINTER = 'pointer' returns only the json pointers to the targets
 * - get.VALUE = 'value' Default. Returns only the matched value
 * - get.MAP = Returns an object with all available pointers and their data, like { pointer: value }
 *
 * @param  {Mixed} obj
 * @param  {Pointer} jsonPointer
 * @param  {String} type			- type of return value. Defaults to "value"
 * @return {Array|Object} containing result in specified format
 */


function queryGet(obj, jsonPointer, type) {
  var matches = type === queryGet.MAP ? {} : [];
  var cb = getCbFactory(type, matches);
  query(obj, jsonPointer, cb);
  return matches;
}

queryGet.ALL = "all";
queryGet.MAP = "map";
queryGet.POINTER = "pointer";
queryGet.VALUE = "value";

function getCbFactory(type, matches) {
  if (typeof type === "function") {
    return function cb(value, key, obj, pointer) {
      matches.push(type(obj[key], key, obj, pointer));
    };
  }

  switch (type) {
    case queryGet.ALL:
      return function cbGetAll(value, key, obj, pointer) {
        matches.push([obj[key], key, obj, pointer]);
      };

    case queryGet.MAP:
      return function cbGetMap(value, key, obj, pointer) {
        matches[pointer] = value;
      };

    case queryGet.POINTER:
      return function cbGetPointer(value, key, obj, pointer) {
        matches.push(pointer);
      };

    case queryGet.VALUE:
      return function cbGetValue(value, key, obj, pointer) {
        matches.push(value);
      };

    default:
      return function cbGetValue(value, key, obj, pointer) {
        matches.push(value);
      };
  }
}

module.exports = queryGet;

/***/ }),

/***/ "./node_modules/gson-query/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/gson-query/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports.get = __webpack_require__(/*! ./get */ "./node_modules/gson-query/lib/get.js");
exports.run = __webpack_require__(/*! ./run */ "./node_modules/gson-query/lib/run.js");
exports["delete"] = __webpack_require__(/*! ./delete */ "./node_modules/gson-query/lib/delete.js");
exports.filter = __webpack_require__(/*! ./filter */ "./node_modules/gson-query/lib/filter.js");

/***/ }),

/***/ "./node_modules/gson-query/lib/run.js":
/*!********************************************!*\
  !*** ./node_modules/gson-query/lib/run.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(/*! ./filter */ "./node_modules/gson-query/lib/filter.js");

var parsePointer = __webpack_require__(/*! ./common */ "./node_modules/gson-query/lib/common.js").parsePointer; // @note gson-pointer: only strings are valid pointer properties to join. Ensure key is a string (could be index)


var join = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js").join;
/**
 * callback for each match of json-glob-pointer
 *
 * @param  {Any} obj
 * @param  {String} jsonPointer - function (value, key, parentObject, pointerToValue)
 * @param  {Function} cb
 */


function queryRun(obj, jsonPointer, cb) {
  // get steps into obj
  var steps = parsePointer(jsonPointer); // cleanup first and last

  if (steps[0] === "") {
    // @todo due to pointer cleanup, this is probably never called
    steps.shift();
  }

  if (steps[steps.length - 1] === "") {
    steps.length -= 1;
  }

  _query(obj, steps, cb, "#");
}

function cbPassAll(obj, cb, pointer) {
  return function (key) {
    cb(obj[key], key, obj, join(pointer, String(key)));
  };
}

function _query(obj, steps, cb, pointer) {
  var matches;
  var query = steps.shift();

  if (steps.length === 0) {
    // get keys matching the query and call back
    matches = filter.keys(obj, query);
    matches.forEach(cbPassAll(obj, cb, pointer));
  } else if (/^\*\*/.test(query)) {
    // run next query on current object
    _query(obj, steps.slice(0), cb, pointer);
  } else {
    matches = filter.keys(obj, query);
    matches.forEach(function (key) {
      _query(obj[key], steps.slice(0), cb, join(pointer, String(key)));
    });
  }

  if (/^\*\*/.test(query)) {
    // match this query (**) again
    steps.unshift(query);
    matches = filter.keys(obj, query);
    matches.forEach(function (key) {
      _query(obj[key], steps.slice(0), cb, join(pointer, String(key)));
    });
  }
}

module.exports = queryRun;

/***/ }),

/***/ "./node_modules/json-schema-library/index.js":
/*!***************************************************!*\
  !*** ./node_modules/json-schema-library/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  config: {
    strings: __webpack_require__(/*! ./lib/config/strings */ "./node_modules/json-schema-library/lib/config/strings.js")
  },
  cores: {
    Interface: __webpack_require__(/*! ./lib/cores/CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js"),
    Draft04: __webpack_require__(/*! ./lib/cores/Draft04 */ "./node_modules/json-schema-library/lib/cores/Draft04.js"),
    // core implementing draft04 specs
    JsonEditor: __webpack_require__(/*! ./lib/cores/JsonEditor */ "./node_modules/json-schema-library/lib/cores/JsonEditor.js") // adjusted core of draft04 to better support the json-editor

  },
  addSchema: __webpack_require__(/*! ./lib/addSchema */ "./node_modules/json-schema-library/lib/addSchema.js"),
  // add a schema to be references via $ref
  addValidator: __webpack_require__(/*! ./lib/addValidator */ "./node_modules/json-schema-library/lib/addValidator.js"),
  // add validation for keyword, format, datatype and customize errors
  compileSchema: __webpack_require__(/*! ./lib/compileSchema */ "./node_modules/json-schema-library/lib/compileSchema.js"),
  createCustomError: __webpack_require__(/*! ./lib/utils/createCustomError */ "./node_modules/json-schema-library/lib/utils/createCustomError.js"),
  createSchemaOf: __webpack_require__(/*! ./lib/createSchemaOf */ "./node_modules/json-schema-library/lib/createSchemaOf.js"),
  // creates a simple schema based on the given data
  each: __webpack_require__(/*! ./lib/each */ "./node_modules/json-schema-library/lib/each.js"),
  // iterate over data, receiving each data-entry with its schema
  eachSchema: __webpack_require__(/*! ./lib/eachSchema */ "./node_modules/json-schema-library/lib/eachSchema.js"),
  // iterates over a json-schemas type definitions
  getChildSchemaSelection: __webpack_require__(/*! ./lib/getChildSchemaSelection */ "./node_modules/json-schema-library/lib/getChildSchemaSelection.js"),
  // get available child schemas
  getSchema: __webpack_require__(/*! ./lib/getSchema */ "./node_modules/json-schema-library/lib/getSchema.js"),
  // get schema of datapointer
  getTemplate: __webpack_require__(/*! ./lib/getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js"),
  // create data which is valid to the given schema
  getTypeOf: __webpack_require__(/*! ./lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js"),
  // returns the javascript datatype
  isValid: __webpack_require__(/*! ./lib/isValid */ "./node_modules/json-schema-library/lib/isValid.js"),
  // returns a boolean if the schema is valid
  SchemaService: __webpack_require__(/*! ./lib/SchemaService */ "./node_modules/json-schema-library/lib/SchemaService.js"),
  step: __webpack_require__(/*! ./lib/step */ "./node_modules/json-schema-library/lib/step.js"),
  // steps into a json-schema, returning the matching child-schema
  validate: __webpack_require__(/*! ./lib/validate */ "./node_modules/json-schema-library/lib/validate.js"),
  // validates data by a schema
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getSchema = __webpack_require__(/*! ./getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");

var Core = __webpack_require__(/*! ./cores/JsonEditor */ "./node_modules/json-schema-library/lib/cores/JsonEditor.js");

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

function copy(value) {
  return JSON.parse(JSON.stringify(value));
}

var SchemaService =
/*#__PURE__*/
function () {
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
      this.core.setSchema(schema);
      this.cache = {};
    }
  }, {
    key: "get",
    value: function get(pointer, data) {
      if (data) {
        // possibly separate entry point
        var _schema = getSchema(this.core, data, this.schema, pointer);

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
        parentSchema = getSchema(this.core, this.data, this.schema, parentPointer);

        if (parentSchema.variableSchema !== true) {
          this.cache[parentPointer] = copy(parentSchema);
        }
      } // step from parent to child


      var key = gp.split(pointer).pop();
      var schema = getSchema(this.core, gp.get(this.data, parentPointer), this.cache[parentPointer], key);
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

var remotes = __webpack_require__(/*! ../remotes */ "./node_modules/json-schema-library/remotes/index.js");

var compileSchema = __webpack_require__(/*! ./compileSchema */ "./node_modules/json-schema-library/lib/compileSchema.js");

module.exports = function addSchema(url, schema) {
  schema.id = schema.id || url;
  remotes[url] = compileSchema(schema);
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/addValidator.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/addValidator.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    throw new Error("Error callback 'errorCreator' must be of type function. Received ".concat(_typeof(errorCreator)));
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
    throw new Error("Validation function expected. Received ".concat(_typeof(validationFunction)));
  }

  if (core.validateFormat[formatType] == null) {
    core.validateFormat[formatType] = validationFunction;
    return;
  }

  throw new Error("A format '".concat(formatType, "' is already registered to validation"));
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
    throw new Error("Validation function expected. Received ".concat(_typeof(validationFunction)));
  }

  if (core.typeKeywords[datatype] == null) {
    throw new Error("Unknown datatype ".concat(datatype, ". Failed adding custom keyword validation."));
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

/***/ "./node_modules/json-schema-library/lib/compile/getRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/compile/getRef.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"),
    get = _require.get;

var splitRef = __webpack_require__(/*! ./splitRef */ "./node_modules/json-schema-library/lib/compile/splitRef.js");

var suffixes = /(#|\/)+$/g;

var getTypeOf = __webpack_require__(/*! ../getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js"); // const emptyValues = ["", null, "#"];


var isObject = function isObject(val) {
  return getTypeOf(val) === "object";
}; // 1. combined is known
// 2. base or pointer is known
// 3. base + pointer is known


module.exports = function getRef(context, rootSchema, $ref) {
  if (isObject($ref)) {
    $ref = $ref.__ref || $ref.$ref;
  }

  if ($ref == null) {
    return rootSchema;
  }

  var schema; // is it a known $ref?

  var $remote = $ref.replace(suffixes, "");

  if (context.remotes[$remote]) {
    schema = context.remotes[$remote];

    if (schema && schema.$ref) {
      return getRef(context, rootSchema, schema.$ref);
    }

    return schema;
  }

  if (context.ids[$ref]) {
    schema = get(rootSchema, context.ids[$ref]);

    if (schema && schema.$ref) {
      return getRef(context, rootSchema, schema.$ref);
    }

    return schema;
  } // is it a ref with host/pointer?


  var fragments = splitRef($ref);

  if (fragments.length === 0) {
    return rootSchema;
  }

  if (fragments.length === 1) {
    $ref = fragments[0];

    if (context.remotes[$ref]) {
      schema = context.remotes[$ref];
      return getRef(context, rootSchema, schema.$ref);
    }

    if (context.ids[$ref]) {
      schema = get(rootSchema, context.ids[$ref]);

      if (schema && schema.$ref) {
        return getRef(context, rootSchema, schema.$ref);
      }

      return schema;
    }
  }

  if (fragments.length === 2) {
    var base = fragments[0];
    $ref = fragments[1];

    if (context.remotes[base]) {
      if (context.remotes[base].getRef) {
        return context.remotes[base].getRef($ref);
      } // console.log("warning: uncompiled remote - context may be wrong", base);


      return getRef(context, context.remotes[base], $ref);
    }

    if (context.ids[base]) {
      return getRef(context, get(rootSchema, context.ids[base]), $ref);
    }
  }

  schema = get(rootSchema, context.ids[$ref] || $ref);

  if (schema && schema.$ref) {
    return getRef(context, rootSchema, schema.$ref);
  }

  return schema;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/compile/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/compile/index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint max-statements-per-line: ["error", { "max": 2 }] */
var eachSchema = __webpack_require__(/*! ../eachSchema */ "./node_modules/json-schema-library/lib/eachSchema.js");

var remotes = __webpack_require__(/*! ../../remotes */ "./node_modules/json-schema-library/remotes/index.js");

var joinScope = __webpack_require__(/*! ./joinScope */ "./node_modules/json-schema-library/lib/compile/joinScope.js");

var getRef = __webpack_require__(/*! ./getRef */ "./node_modules/json-schema-library/lib/compile/getRef.js");

var COMPILED = "__compiled";
var COMPILED_REF = "__ref";
var GET_REF = "getRef";
var GET_ROOT = "getRoot";
var suffixes = /(#|\/)+$/g;

function compile(rootSchema) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (rootSchema[COMPILED] !== undefined) {
    return rootSchema;
  } // eslint-disable-line


  var context = {
    ids: {},
    remotes: _extends({}, remotes)
  };
  var rootSchemaAsString = JSON.stringify(rootSchema);
  rootSchema = JSON.parse(rootSchemaAsString);
  Object.defineProperty(rootSchema, COMPILED, {
    enumerable: false,
    value: true
  });
  Object.defineProperty(rootSchema, GET_REF, {
    enumerable: false,
    value: getRef.bind(null, context, rootSchema)
  }); // Object.defineProperty(rootSchema, "debug", { enumerable: false, value: schema => {
  //     console.log(JSON.stringify(context.ids, null, 2));
  //     console.log("remotes", Object.keys(remotes));
  //     console.log(JSON.stringify(rootSchema, null, 2));
  // } });

  if (force === false && rootSchemaAsString.includes("$ref") === false) {
    // bail early, when no $refs are defined
    return rootSchema;
  }

  var scopes = {};

  var getRoot = function getRoot() {
    return rootSchema;
  };

  eachSchema(rootSchema, function (schema, pointer) {
    if (schema.id) {
      context.ids[schema.id.replace(suffixes, "")] = pointer;
    } // build up scopes and add them to $ref-resolution map


    pointer = "#".concat(pointer).replace(/##+/, "#");
    var previousPointer = pointer.replace(/\/[^/]+$/, "");
    var parentPointer = pointer.replace(/\/[^/]+\/[^/]+$/, "");
    var previousScope = scopes[previousPointer] || scopes[parentPointer];
    var scope = joinScope(previousScope, schema.id);
    scopes[pointer] = scope;

    if (context.ids[scope] == null) {
      context.ids[scope] = pointer;
    }

    if (schema.$ref) {
      Object.defineProperty(schema, COMPILED_REF, {
        enumerable: false,
        value: joinScope(scope, schema.$ref)
      }); // @todo currently not used:

      Object.defineProperty(schema, GET_ROOT, {
        enumerable: false,
        value: getRoot
      }); // console.log("compiled ref", scope, schema.$ref, "=>", joinScope(scope, schema.$ref));
    }
  }); // console.log(JSON.stringify(context.ids, null, 2));

  return rootSchema;
}

module.exports = compile;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/compile/joinScope.js":
/*!*******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/compile/joinScope.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* eslint max-statements-per-line: ["error", { "max": 2 }] */
var suffixes = /(#|\/)+$/;
var trailingHash = /#$/;
var isDomain = /^[^:]+:\/\/[^/]+\//;
var trailingFragments = /\/[^/]*$/;
var idAndPointer = /#.*$/;

module.exports = function joinScope(previous, id) {
  if (previous == null && id == null) {
    return "#";
  }

  if (id == null) {
    return previous.replace(trailingHash, "");
  }

  if (previous == null) {
    return id.replace(trailingHash, "");
  }

  if (id[0] === "#") {
    return "".concat(previous.replace(idAndPointer, "")).concat(id.replace(suffixes, ""));
  }

  if (isDomain.test(id)) {
    return id.replace(trailingHash, "");
  }

  return "".concat(previous.replace(trailingFragments, ""), "/").concat(id.replace(trailingHash, ""));
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/compile/splitRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/compile/splitRef.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var suffixes = /(#|\/)+$/g;
var emptyValues = ["", null, "#"];

module.exports = function splitRef($ref) {
  if (emptyValues.includes($ref)) {
    return [];
  }

  $ref = $ref.replace(suffixes, "");

  if ($ref.indexOf("#") === -1) {
    return [$ref.replace(suffixes, "")];
  }

  if ($ref.indexOf("#") === 0) {
    return [$ref.replace(suffixes, "")];
  }

  var result = $ref.split("#");
  result[0] = result[0].replace(suffixes, "");
  result[1] = "#".concat(result[1].replace(suffixes, ""));
  return result;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/compileSchema.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/compileSchema.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./compile */ "./node_modules/json-schema-library/lib/compile/index.js");

/***/ }),

/***/ "./node_modules/json-schema-library/lib/config/settings.js":
/*!*****************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/config/settings.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
  DECLARATOR_ONEOF: "oneOfProperty",
  GET_TEMPLATE_RECURSION_LIMIT: 1,
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
/***/ (function(module, exports) {

/* eslint max-len: 0 */
module.exports = {
  // validation errors
  AdditionalItemsError: "Array at `{{pointer}}` may not have an additional item `{{key}}`",
  AdditionalPropertiesError: "Additional property `{{property}}` on `{{pointer}}` does not match schema `{{schema}}`",
  AnyOfError: "Value `{{value}}` at `{{pointer}}` does not match any schema of `{{anyOf}}`",
  AllOfError: "Value `{{value}}` at `{{pointer}}` does not match schema of `{{allOf}}`",
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var resolveRef = __webpack_require__(/*! ../resolveRef.withOverwrite */ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js");

var compileSchema = __webpack_require__(/*! ../compileSchema */ "./node_modules/json-schema-library/lib/compileSchema.js");

var _resolveAnyOf = __webpack_require__(/*! ../resolveAnyOf */ "./node_modules/json-schema-library/lib/resolveAnyOf.js");

var _resolveAllOf = __webpack_require__(/*! ../resolveAllOf */ "./node_modules/json-schema-library/lib/resolveAllOf.js");
/* eslint no-unused-vars: 0 no-empty-function: 0 */


module.exports =
/*#__PURE__*/
function () {
  function CoreInterface(schema) {
    _classCallCheck(this, CoreInterface);

    this.setSchema(schema);
  }

  _createClass(CoreInterface, [{
    key: "each",
    value: function each(data, callback) {
      var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.rootSchema;
      var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
      return new Error("function 'each' is not implemented");
    }
  }, {
    key: "validate",
    value: function validate(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return [new Error("function 'validate' is not implemented")];
    }
  }, {
    key: "isValid",
    value: function isValid(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return new Error("function 'isValid' is not implemented");
    }
  }, {
    key: "resolveAnyOf",
    value: function resolveAnyOf(data, schema) {
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return _resolveAnyOf(this, data, schema, pointer);
    }
  }, {
    key: "resolveAllOf",
    value: function resolveAllOf(data, schema) {
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return _resolveAllOf(this, data, schema, pointer);
    }
  }, {
    key: "resolveRef",
    value: function resolveRef(schema) {
      return new Error("function 'resolveRef' is not implemented");
    }
  }, {
    key: "resolveOneOf",
    value: function resolveOneOf(data, schema) {
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return new Error("function 'resolveOneOf' is not implemented");
    }
  }, {
    key: "getSchema",
    value: function getSchema(pointer, data) {
      var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.rootSchema;
      return new Error("function 'getSchema' is not implemented");
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      return new Error("function 'getTemplate' is not implemented");
    }
  }, {
    key: "setSchema",
    value: function setSchema(schema) {
      this.rootSchema = schema;
    }
  }, {
    key: "step",
    value: function step(key, schema, data) {
      var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
      return new Error("function 'step' is not implemented");
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

      this.__rootSchema = compileSchema(rootSchema);
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CoreInterface = __webpack_require__(/*! ./CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js");

var _step = __webpack_require__(/*! ../step */ "./node_modules/json-schema-library/lib/step.js");

var _validate = __webpack_require__(/*! ../validate */ "./node_modules/json-schema-library/lib/validate.js");

var _resolveOneOf = __webpack_require__(/*! ../resolveOneOf.strict */ "./node_modules/json-schema-library/lib/resolveOneOf.strict.js");

var _resolveRef = __webpack_require__(/*! ../resolveRef.strict */ "./node_modules/json-schema-library/lib/resolveRef.strict.js");

var _getTemplate = __webpack_require__(/*! ../getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js");

var _getSchema = __webpack_require__(/*! ../getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");

var _each = __webpack_require__(/*! ../each */ "./node_modules/json-schema-library/lib/each.js");

var compileSchema = __webpack_require__(/*! ../compileSchema */ "./node_modules/json-schema-library/lib/compileSchema.js");

var remotes = __webpack_require__(/*! ../../remotes */ "./node_modules/json-schema-library/remotes/index.js");

remotes["http://json-schema.org/draft-04/schema"] = compileSchema(__webpack_require__(/*! ../../remotes/draft04.json */ "./node_modules/json-schema-library/remotes/draft04.json"));

var Draft04Core =
/*#__PURE__*/
function (_CoreInterface) {
  _inherits(Draft04Core, _CoreInterface);

  function Draft04Core(schema) {
    var _this;

    _classCallCheck(this, Draft04Core);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Draft04Core).call(this, schema));
    _this.typeKeywords = JSON.parse(JSON.stringify(__webpack_require__(/*! ../validation/typeKeywordMapping */ "./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js")));
    _this.validateKeyword = _extends({}, __webpack_require__(/*! ../validation/keyword */ "./node_modules/json-schema-library/lib/validation/keyword.js"));
    _this.validateType = _extends({}, __webpack_require__(/*! ../validation/type */ "./node_modules/json-schema-library/lib/validation/type.js"));
    _this.validateFormat = _extends({}, __webpack_require__(/*! ../validation/format */ "./node_modules/json-schema-library/lib/validation/format.js"));
    _this.errors = _extends({}, __webpack_require__(/*! ../validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js"));
    return _this;
  }

  _createClass(Draft04Core, [{
    key: "each",
    value: function each(data, callback) {
      var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.rootSchema;
      var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

      _each(this, data, callback, schema, pointer);
    }
  }, {
    key: "validate",
    value: function validate(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return _validate(this, data, schema, pointer);
    }
  }, {
    key: "isValid",
    value: function isValid(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return this.validate(data, schema, pointer).length === 0;
    }
  }, {
    key: "resolveOneOf",
    value: function resolveOneOf(data, schema, pointer) {
      return _resolveOneOf(this, data, schema, pointer);
    }
  }, {
    key: "resolveRef",
    value: function resolveRef(schema) {
      return _resolveRef(schema, this.rootSchema);
    }
  }, {
    key: "getSchema",
    value: function getSchema(pointer, data) {
      var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.rootSchema;
      return _getSchema(this, pointer, data, schema);
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      return _getTemplate(this, data, schema);
    }
  }, {
    key: "step",
    value: function step(key, schema, data) {
      var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
      return _step(this, key, schema, data, pointer);
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CoreInterface = __webpack_require__(/*! ./CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js");

var _step = __webpack_require__(/*! ../step */ "./node_modules/json-schema-library/lib/step.js");

var _validate = __webpack_require__(/*! ../validate */ "./node_modules/json-schema-library/lib/validate.js");

var _resolveOneOf = __webpack_require__(/*! ../resolveOneOf.fuzzy */ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js");

var _resolveRef = __webpack_require__(/*! ../resolveRef.withOverwrite */ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js");

var _getTemplate = __webpack_require__(/*! ../getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js");

var _getSchema = __webpack_require__(/*! ../getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");

var _each = __webpack_require__(/*! ../each */ "./node_modules/json-schema-library/lib/each.js");

var JsonEditorCore =
/*#__PURE__*/
function (_CoreInterface) {
  _inherits(JsonEditorCore, _CoreInterface);

  function JsonEditorCore(schema) {
    var _this;

    _classCallCheck(this, JsonEditorCore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JsonEditorCore).call(this, schema));
    _this.typeKeywords = JSON.parse(JSON.stringify(__webpack_require__(/*! ../validation/typeKeywordMapping */ "./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js")));
    _this.validateKeyword = _extends({}, __webpack_require__(/*! ../validation/keyword */ "./node_modules/json-schema-library/lib/validation/keyword.js")); // set properties required per default and prevent no duplicate errors.
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
    value: function each(data, callback) {
      var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.rootSchema;
      var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

      _each(this, data, callback, schema, pointer);
    }
  }, {
    key: "validate",
    value: function validate(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return _validate(this, data, schema, pointer);
    }
  }, {
    key: "isValid",
    value: function isValid(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
      return this.validate(data, schema, pointer).length === 0;
    }
  }, {
    key: "resolveOneOf",
    value: function resolveOneOf(data, schema, pointer) {
      return _resolveOneOf(this, data, schema, pointer);
    }
  }, {
    key: "resolveRef",
    value: function resolveRef(schema) {
      return _resolveRef(schema, this.rootSchema);
    }
  }, {
    key: "getSchema",
    value: function getSchema(pointer, data) {
      var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.rootSchema;
      return _getSchema(this, pointer, data, schema);
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(data) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootSchema;
      return _getTemplate(this, data, schema);
    }
  }, {
    key: "step",
    value: function step(key, schema, data) {
      var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
      return _step(this, key, schema, data, pointer);
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
      return schema.properties[key] = createSchemaOf(data[key]);
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

var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
/**
 * Iterates over data, retrieving its schema
 *
 * @param  {CoreInterface} core - validator
 * @param  {Mixed} data         - the data to iterate
 * @param  {Function} callback  - will be called with (schema, data, pointer) on each item
 * @param  {Object} [schema]    - the schema matching the data. Defaults to rootSchema
 * @param  {String} [pointer]   - pointer to current data. Default to rootPointer
 */


function each(core, data, callback) {
  var schema = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : core.rootSchema;
  var pointer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#";
  callback(schema, data, pointer);
  var dataType = getTypeOf(data);

  if (dataType === "object") {
    Object.keys(data).forEach(function (key) {
      var nextSchema = core.step(key, schema, data, pointer); // not save

      var next = data[key]; // save

      core.each(next, callback, nextSchema, "".concat(pointer, "/").concat(key));
    });
  } else if (dataType === "array") {
    data.forEach(function (next, key) {
      var nextSchema = core.step(key, schema, data, pointer);
      core.each(next, callback, nextSchema, "".concat(pointer, "/").concat(key));
    });
  }
}

module.exports = each;

/***/ }),

/***/ "./node_modules/json-schema-library/lib/eachSchema.js":
/*!************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/eachSchema.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

var getTypeDefs = __webpack_require__(/*! ./schema/getTypeDefs */ "./node_modules/json-schema-library/lib/schema/getTypeDefs.js");

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
};

function nextTypeDefs(schema, pointer) {
  var _this = this;

  if (this.callback(schema, pointer) === true) {
    // eslint-disable-line no-invalid-this
    return; // stop iteration
  }

  var defs = getTypeDefs(schema); // eslint-disable-next-line no-invalid-this

  defs.forEach(function (next) {
    return _this.nextTypeDefs(next.def, gp.join(pointer, next.pointer, false));
  });
}

function eachDefinition(walk, schema, pointer) {
  Object.keys(schema.definitions).forEach(function (defId) {
    if (!isObject(schema.definitions[defId])) {
      console.log("Invalid schema in ".concat(pointer, "/definitions/").concat(defId));
      return;
    }

    walk.nextTypeDefs(schema.definitions[defId], gp.join(pointer, "definitions", defId, false));
  });
}

module.exports = function eachSchema(schema, callback) {
  var pointer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#";
  var walk = {
    callback: callback,
    nextTypeDefs: nextTypeDefs
  };
  walk.nextTypeDefs(schema, pointer);

  if (schema.definitions == null) {
    return;
  }

  walk.callback = function (defschema, schemaPointer) {
    callback(defschema, schemaPointer);

    if (defschema.definitions != null) {
      eachDefinition(walk, defschema, schemaPointer);
    }
  };

  eachDefinition(walk, schema, pointer);
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/getChildSchemaSelection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/getChildSchemaSelection.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Returns a list of possible child-schemas for the given property key. In case of a oneOf selection, multiple schemas
 * could be added at the given property (e.g. item-index), thus an array of options is returned. In all other cases
 * a list with a single item will be returned
 *
 * @param  {Core} core          - core to use
 * @param  {String} property    - parent schema of following property
 * @param  {Object} [schema]    - parent schema of following property
 * @return {Object}
 */
module.exports = function getChildSchemaSelection(core, property) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : core.rootSchema;
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

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

var emptyObject = {};
/**
 * Returns the json-schema of a data-json-pointer.
 *
 *  Notes
 *      - Uses core.step to walk through data and schema
 *
 * @param  {CoreInterface} core
 * @param  {String} pointer     - json pointer in data to get the json schema for
 * @param  {Mixed} [data]       - the data object, which includes the json pointers value. This is optional, as
 *                                 long as no oneOf, anyOf, etc statement is part of the pointers schema
 * @param  {Object} [schema]    - the json schema to iterate. Defaults to core.rootSchema
 * @return {Object|Error} json schema object of the json-pointer or an error
 */

function getSchema(core, pointer, data) {
  var schema = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : core.rootSchema;
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

  return _get(core, schema, frags, "".concat(pointer, "/").concat(key), data);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint quote-props: 0, max-statements-per-line: ["error", { "max": 2 }] */
var resolveOneOfFuzzy = __webpack_require__(/*! ./resolveOneOf.fuzzy */ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js");

var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

var merge = __webpack_require__(/*! ./utils/merge */ "./node_modules/json-schema-library/lib/utils/merge.js");

var copy = __webpack_require__(/*! ./utils/copy */ "./node_modules/json-schema-library/lib/utils/copy.js");

var settings = __webpack_require__(/*! ./config/settings */ "./node_modules/json-schema-library/lib/config/settings.js");

var cache;

function shouldResolveRef(schema, pointer) {
  // ensure we refactored consistently
  if (pointer == null) {
    throw new Error("Missing pointer");
  }

  var $ref = schema.$ref;

  if ($ref == null) {
    return true;
  }

  var value = cache[pointer] == null || cache[pointer][$ref] == null ? 0 : cache[pointer][$ref];
  return value < settings.GET_TEMPLATE_RECURSION_LIMIT;
}

function resolveRef(core, schema, pointer) {
  // ensure we refactored consistently
  if (pointer == null) {
    throw new Error("missing pointer", pointer);
  }

  var $ref = schema.$ref;

  if ($ref == null) {
    return schema;
  } // @todo pointer + ref is redundant?


  cache[pointer] = cache[pointer] || {};
  cache[pointer][$ref] = cache[pointer][$ref] || 0;
  cache[pointer][$ref] += 1;
  return core.resolveRef(schema);
}

function convertValue(type, value) {
  if (type === "string") {
    return JSON.stringify(value);
  } else if (typeof value !== "string") {
    return null;
  }

  try {
    value = JSON.parse(value);

    if (_typeof(value) === type) {
      return value;
    }
  } catch (e) {} // eslint-disable-line no-empty


  return null;
}
/**
 * Resolves $ref, allOf and anyOf schema-options, returning a combined json-schema.
 * Also returns a pointer-property on schema, that must be used as current pointer.
 * @param  {Core} core
 * @param  {JSONSchema} schema
 * @param  {any} data
 * @param  {JSONPointer} pointer
 * @return {JSONSchem} resolved json-schema or input-schema
 */


function createTemplateSchema(core, schema, data, pointer) {
  // invalid schema
  if (getTypeOf(schema) !== "object") {
    return _extends({
      pointer: pointer
    }, schema);
  } // return if reached recursion limit


  if (shouldResolveRef(schema, pointer) === false && data == null) {
    return false;
  } // resolve $ref and copy schema


  var templateSchema = copy(resolveRef(core, schema, pointer));

  if (Array.isArray(schema.anyOf) && schema.anyOf.length > 0) {
    // test if we may resolve
    if (shouldResolveRef(schema.anyOf[0], "".concat(pointer, "/anyOf/0"))) {
      var resolvedAnyOf = resolveRef(core, schema.anyOf[0], "".concat(pointer, "/anyOf/0"));
      templateSchema = merge(templateSchema, resolvedAnyOf); // add pointer return-value, if any

      templateSchema.pointer = schema.anyOf[0].$ref || templateSchema.pointer;
    }

    delete templateSchema.anyOf;
  } // resolve allOf


  if (Array.isArray(schema.allOf)) {
    for (var i = 0, l = schema.allOf.length; i < l; i += 1) {
      // test if we may resolve
      if (shouldResolveRef(schema.allOf[i], "".concat(pointer, "/allOf/").concat(i))) {
        templateSchema = merge(templateSchema, resolveRef(core, schema.allOf[i], "".concat(pointer, "/allOf/").concat(i))); // add pointer return-value, if any

        templateSchema.pointer = schema.allOf[i].$ref || templateSchema.pointer;
      }
    }

    delete templateSchema.allOf;
  }

  templateSchema.pointer = templateSchema.pointer || schema.$ref || pointer;
  return templateSchema;
}
/**
 * Create data object matching the given schema
 *
 * @param  {CoreInterface} core     - json schema core
 * @param  {Mixed} [data]           - optional template data
 * @param  {Object} [schema]        - json schema, defaults to rootSchema
 * @return {Mixed} created template data
 */


function getTemplate(core, data, schema, pointer) {
  if (schema == null) {
    throw new Error("getTemplate: missing schema for data", data);
  }

  if (pointer == null) {
    throw new Error("Missing pointer");
  } // resolve $ref references, allOf and first anyOf definitions


  schema = createTemplateSchema(core, schema, data, pointer);

  if (schema === false) {
    return undefined;
  }

  pointer = schema.pointer;

  if (schema.oneOf) {
    // find correct schema for data
    var resolvedSchema = resolveOneOfFuzzy(core, data, schema);

    if (data == null && resolvedSchema.type === "error") {
      schema = schema.oneOf[0];
    } else if (resolvedSchema.type === "error") {
      // @todo - check: do not return schema, but either input-data or undefined (clearing wrong data)
      return data;
    } else {
      schema = resolvedSchema;
    }
  }

  if (schema.type == null) {
    return undefined;
  } // reset invalid type


  if (data != null && getTypeOf(data) !== schema.type) {
    data = convertValue(schema.type, data);
  }

  if (TYPE[schema.type] == null) {
    // eslint-disable-line no-use-before-define
    throw new Error("Unsupported type '".concat(schema.type, " in ").concat(JSON.stringify(schema), "'"));
  }

  var templateData = TYPE[schema.type](core, schema, data, pointer); // eslint-disable-line no-use-before-define

  return templateData;
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
  "object": function object(core, schema, data, pointer) {
    var template = schema["default"] === undefined ? {} : schema["default"];
    var d = {}; // do not assign data here, to keep ordering from json-schema

    if (schema.properties) {
      Object.keys(schema.properties).forEach(function (key) {
        var value = data == null || data[key] == null ? template[key] : data[key];
        d[key] = getTemplate(core, value, schema.properties[key], "".concat(pointer, "/properties/").concat(key));
      });
    }

    if (data) {
      // merge any missing data (additionals) to resulting object
      Object.keys(data).forEach(function (key) {
        return d[key] == null && (d[key] = data[key]);
      });
    } // returns object, which is ordered by json-schema


    return d;
  },
  // build array type of items, ignores additionalItems
  "array": function array(core, schema, data, pointer) {
    var template = schema["default"] === undefined ? [] : schema["default"];
    var d = data || [];
    schema.minItems = schema.minItems || 0; // items are undefined

    if (schema.items == null) {
      return d;
    } // build defined set of items


    if (Array.isArray(schema.items)) {
      for (var i = 0, l = Math.min(schema.minItems, schema.items.length); i < l; i += 1) {
        d[i] = getTemplate(core, d[i] == null ? template[i] : d[i], schema.items[i], "".concat(pointer, "/items/").concat(i));
      }

      return d;
    } // abort if the schema is invalid


    if (getTypeOf(schema.items) !== "object") {
      return d;
    } // resolve allOf and first anyOf definition


    var templateSchema = createTemplateSchema(core, schema.items, data, pointer);

    if (templateSchema === false) {
      return d;
    }

    pointer = templateSchema.pointer || pointer; // build oneOf

    if (templateSchema.oneOf && d.length === 0) {
      var oneOfSchema = templateSchema.oneOf[0];

      for (var _i = 0; _i < schema.minItems; _i += 1) {
        d[_i] = getTemplate(core, d[_i] == null ? template[_i] : d[_i], oneOfSchema, "".concat(pointer, "/oneOf/0"));
      }

      return d;
    }

    if (templateSchema.oneOf && d.length > 0) {
      var itemCount = Math.max(schema.minItems, d.length);

      for (var _i2 = 0; _i2 < itemCount; _i2 += 1) {
        var value = d[_i2] == null ? template[_i2] : d[_i2];
        var one = resolveOneOfFuzzy(core, value, templateSchema);

        if (one) {
          d[_i2] = getTemplate(core, value, one, "".concat(pointer, "/oneOf/").concat(_i2));
        } else {
          d[_i2] = value;
        }
      }

      return d;
    } // build items-definition


    if (templateSchema.type) {
      for (var _i3 = 0, _l = Math.max(schema.minItems, d.length); _i3 < _l; _i3 += 1) {
        d[_i3] = getTemplate(core, d[_i3] == null ? template[_i3] : d[_i3], templateSchema, "".concat(pointer, "/items"));
      }

      return d;
    }

    return d;
  }
};

function getDefault(schema, templateValue, initValue) {
  if (templateValue != null) {
    return templateValue;
  } else if (schema["default"] === undefined && Array.isArray(schema["enum"])) {
    return schema["enum"][0];
  } else if (schema["default"] === undefined) {
    return initValue;
  }

  return schema["default"];
}

module.exports = function (core, data) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : core.rootSchema;
  cache = {
    "mi": ".."
  };
  return getTemplate(core, data, schema, "#");
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/getTypeOf.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/getTypeOf.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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
/***/ (function(module, exports) {

/**
 * Test if the data is valid according to the given schema
 *
 * @param  {CoreInterface} core - validator
 * @param  {Mixed} value        - value to validate
 * @param  {Schema} [schema]    - json schema
 * @param  {String} [pointer]   - json pointer pointing to value
 * @return {Boolean} if schema does match given value
 */
module.exports = function isValid(core, value) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : core.rootSchema;
  var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
  return core.validate(value, schema, pointer).length === 0;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveAllOf.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveAllOf.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var copy = __webpack_require__(/*! ./utils/copy */ "./node_modules/json-schema-library/lib/utils/copy.js");

var merge = __webpack_require__(/*! ./utils/merge */ "./node_modules/json-schema-library/lib/utils/merge.js");

var errors = __webpack_require__(/*! ./validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js");

module.exports = function resolveAllOf(core, data) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : core.rootSchema;
  var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
  var mergedSchema = copy(schema);

  for (var i = 0; i < schema.allOf.length; i += 1) {
    var allOfSchema = core.resolveRef(schema.allOf[i]);

    if (core.isValid(data, allOfSchema, pointer) === false) {
      return errors.allOfError({
        value: data,
        pointer: pointer,
        allOf: JSON.stringify(schema.allOf)
      });
    }

    mergedSchema = merge(mergedSchema, allOfSchema);
  }

  delete mergedSchema.allOf;
  return mergedSchema;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveAnyOf.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveAnyOf.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var copy = __webpack_require__(/*! ./utils/copy */ "./node_modules/json-schema-library/lib/utils/copy.js");

var merge = __webpack_require__(/*! ./utils/merge */ "./node_modules/json-schema-library/lib/utils/merge.js");

var errors = __webpack_require__(/*! ./validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js");

module.exports = function resolveAnyOf(core, data) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : core.rootSchema;
  var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
  var found = false;
  var mergedSchema = copy(schema);

  for (var i = 0; i < schema.anyOf.length; i += 1) {
    var anyOfSchema = core.resolveRef(schema.anyOf[i]);

    if (core.isValid(data, schema.anyOf[i], pointer)) {
      found = true;
      mergedSchema = merge(mergedSchema, anyOfSchema);
    }
  }

  if (found === false) {
    return errors.anyOfError({
      value: data,
      pointer: pointer,
      anyOf: JSON.stringify(schema.anyOf)
    });
  }

  delete mergedSchema.anyOf;
  return mergedSchema;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js":
/*!********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");

var flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");

var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

var _require = __webpack_require__(/*! ./config/settings */ "./node_modules/json-schema-library/lib/config/settings.js"),
    DECLARATOR_ONEOF = _require.DECLARATOR_ONEOF;
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

    if (data[key] != null && core.isValid(data[key], one.properties[key], pointer)) {
      value += 1;
    }
  }

  return value;
}
/**
 * Selects and returns a oneOf schema for the given data
 *
 * @param  {CoreInterface} core
 * @param  {Mixed} data
 * @param  {Object} schema      - current json schema containing property oneOf
 * @param  {String} pointer     - json pointer to data
 * @return {Object|Error} oneOf schema or an error
 */


module.exports = function resolveOneOf(core, data) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : core.rootSchema;
  var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

  // !keyword: oneOfProperty
  // an additional <DECLARATOR_ONEOF> (default `oneOfProperty`) on the schema will exactly determine the
  // oneOf value (if set in data)
  // @fixme
  // abort if no data is given an DECLARATOR_ONEOF is set (used by getChildSchemaSelection)
  // this case (data != null) should not be necessary
  if (data != null && schema[DECLARATOR_ONEOF]) {
    var errors = [];
    var oneOfProperty = schema[DECLARATOR_ONEOF];
    var oneOfValue = data[schema[DECLARATOR_ONEOF]];

    if (oneOfValue === undefined) {
      return core.errors.missingOneOfPropertyError({
        property: oneOfProperty,
        pointer: pointer
      });
    }

    for (var i = 0; i < schema.oneOf.length; i += 1) {
      var one = core.resolveRef(schema.oneOf[i]);
      var oneOfPropertySchema = core.step(oneOfProperty, one, data, pointer);

      if (oneOfPropertySchema && oneOfPropertySchema.type === "error") {
        return oneOfPropertySchema;
      }

      var result = flattenArray(core.validate(oneOfValue, oneOfPropertySchema, pointer));
      result = result.filter(filter.errorOrPromise);

      if (result.length > 0) {
        errors.push.apply(errors, _toConsumableArray(result));
      } else {
        return schema.oneOf[i];
      }
    }

    return core.errors.oneOfPropertyError({
      property: oneOfProperty,
      value: oneOfValue,
      pointer: pointer,
      errors: errors
    });
  } // keyword: oneOf


  var matches = [];

  for (var _i = 0; _i < schema.oneOf.length; _i += 1) {
    var _one = core.resolveRef(schema.oneOf[_i]);

    if (core.isValid(data, _one, pointer)) {
      matches.push(_one);
    }
  }

  if (matches.length === 1) {
    return matches[0];
  } // fuzzy match oneOf


  if (getTypeOf(data) === "object") {
    var schemaOfItem;
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
      return core.errors.oneOfError({
        value: JSON.stringify(data),
        pointer: pointer,
        oneOf: schema.oneOf
      });
    }

    return schemaOfItem;
  }

  if (matches.length > 1) {
    return core.errors.multipleOneOfError({
      matches: matches,
      data: data,
      pointer: pointer
    });
  }

  return core.errors.oneOfError({
    value: JSON.stringify(data),
    pointer: pointer,
    oneOf: schema.oneOf
  });
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveOneOf.strict.js":
/*!*********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveOneOf.strict.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");

var flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");
/**
 * Selects and returns a oneOf schema for the given data
 *
 * @param  {CoreInterface} core - validator
 * @param  {Mixed} data
 * @param  {Object} schema      - current json schema containing property oneOf
 * @param  {String} pointer     - json pointer to data
 * @return {Object|Error} oneOf schema or an error
 */


module.exports = function resolveOneOf(core, data) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : core.rootSchema;
  var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";
  var matches = [];
  var errors = [];

  for (var i = 0; i < schema.oneOf.length; i += 1) {
    var one = core.resolveRef(schema.oneOf[i]);
    var result = flattenArray(core.validate(data, one, pointer));
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
    return core.errors.multipleOneOfError({
      value: data,
      pointer: pointer,
      matches: matches
    });
  }

  return core.errors.oneOfError({
    value: JSON.stringify(data),
    pointer: pointer,
    oneOf: schema.oneOf,
    errors: errors
  });
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveRef.strict.js":
/*!*******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveRef.strict.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function resolveRef(schema, rootSchema) {
  if (schema == null || schema.$ref == null) {
    return schema;
  }

  var resolvedSchema = rootSchema.getRef(schema);
  return resolvedSchema;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js":
/*!**************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

module.exports = function resolveRefMerge(schema, rootSchema) {
  if (schema == null || schema.$ref == null) {
    return schema;
  }

  var resolvedSchema = rootSchema.getRef(schema);

  var mergedSchema = _extends({}, resolvedSchema, schema);

  delete mergedSchema.$ref; // @todo the following might not be safe nor incomplete

  Object.defineProperty(mergedSchema, "__ref", {
    enumerable: false,
    value: schema.__ref
  });
  Object.defineProperty(mergedSchema, "getRoot", {
    enumerable: false,
    value: schema.getRoot
  });
  return mergedSchema;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/schema/getTypeDefs.js":
/*!********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/schema/getTypeDefs.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

var gq = __webpack_require__(/*! gson-query */ "./node_modules/gson-query/lib/index.js");

var getTypeId = __webpack_require__(/*! ./getTypeId */ "./node_modules/json-schema-library/lib/schema/getTypeId.js");

var types = __webpack_require__(/*! ./types */ "./node_modules/json-schema-library/lib/schema/types.js");

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
};
/**
 * Returns a list of all (direct) type definitions from the given schema
 * @param  {Object} schema
 * @return {Array} list of type definition, given as { pointer, def }
 */


module.exports = function getTypeDefs(schema) {
  var defs = [];
  var id = getTypeId(schema);

  if (id == null) {
    return defs;
  }

  var type = types[id];

  if (type.definitions == null) {
    return defs;
  }

  type.definitions.forEach(function (query) {
    gq.run(schema, query, function (value, key, parent, pointer) {
      if (isObject(value) && getTypeId(value)) {
        defs.push({
          pointer: gp.join(gp.split(pointer), false),
          def: value
        });
      }
    });
  });
  return defs;
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/schema/getTypeId.js":
/*!******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/schema/getTypeId.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var types = __webpack_require__(/*! ./types */ "./node_modules/json-schema-library/lib/schema/types.js");

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
};

var typeKeywords = Object.keys(types).filter(function (id) {
  return types[id].type === false;
});
/**
 * @throws Error    on multiple matches (invalid schema)
 *
 * Returns the type id of a schema object
 * @param  {Object} schema
 * @return {undefined|string} type id, if found
 */

module.exports = function getTypeId(schema) {
  if (isObject(schema) === false) {
    return undefined;
  }

  if (schema["enum"]) {
    return "enum";
  }

  if (types[schema.type]) {
    return schema.type;
  }

  var ids = typeKeywords.filter(function (type) {
    return schema[type];
  });

  if (ids.length === 1) {
    return ids[0];
  }

  if (ids.length === 0) {
    // @expensive, guess type object
    for (var i = 0, l = types.object.keywords.length; i < l; i += 1) {
      var keyword = types.object.keywords[i];

      if (schema.hasOwnProperty(keyword)) {
        return "object";
      }
    } // @expensive, guess type array


    for (var _i = 0, _l = types.array.keywords.length; _i < _l; _i += 1) {
      var _keyword = types.array.keywords[_i];

      if (schema.hasOwnProperty(_keyword)) {
        return "array";
      }
    }

    return undefined;
  }

  throw new Error("Mutiple typeIds [".concat(ids.join(", "), "] matched in ").concat(JSON.stringify(schema)));
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/schema/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/schema/types.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
  $ref: {
    type: false
  },
  allOf: {
    type: false,
    definitions: ["allOf/*"]
  },
  anyOf: {
    type: false,
    definitions: ["anyOf/*"]
  },
  array: {
    type: true,
    // ignore additionalItems:TypeDef, when items:TypeDef
    definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not", "items", "items/*", "additionalItems"],
    validationKeywords: ["minItems", "maxItems", "uniqueItems"],
    keywords: ["items", "additionalItems", "minItems", "maxItems", "uniqueItems"]
  },
  "boolean": {
    type: true
  },
  "enum": {
    type: false
  },
  integer: {
    type: true,
    definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not"],
    validationKeywords: ["minimum", "maximum", "multipleOf"]
  },
  not: {
    type: false,
    definitions: ["not"]
  },
  number: {
    type: true,
    definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not"],
    validationKeywords: ["minimum", "maximum", "multipleOf"]
  },
  "null": {
    type: true
  },
  object: {
    type: true,
    // patternProperties also validate properties
    // dependencies:(string, TypeDef) extend current TypeDef
    // additional Properties validate only remaining properties (after properties & pattern)
    definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not", "properties/*", "additionalProperties", "patternProperties/*", "dependencies/*"],
    validationKeywords: ["minProperties", "maxProperties", "required"],
    keywords: ["properties", "additionalProperties", "patternProperties", "dependencies", "minProperties", "maxProperties", "required"]
  },
  oneOf: {
    type: false,
    definitions: ["oneOf/*"]
  },
  string: {
    type: true,
    definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not"],
    validationKeywords: ["minLength", "maxLength", "pattern"]
  }
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/step.js":
/*!******************************************************!*\
  !*** ./node_modules/json-schema-library/lib/step.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

var createSchemaOf = __webpack_require__(/*! ./createSchemaOf */ "./node_modules/json-schema-library/lib/createSchemaOf.js");

var errors = __webpack_require__(/*! ./validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js");

var merge = __webpack_require__(/*! ./utils/merge */ "./node_modules/json-schema-library/lib/utils/merge.js");

var stepType = {
  array: function array(core, key, schema, data, pointer) {
    var itemsType = getTypeOf(schema.items);

    if (itemsType === "object") {
      // oneOf
      if (Array.isArray(schema.items.oneOf)) {
        return core.resolveOneOf(data[key], schema.items, pointer) || false;
      } // anyOf


      if (Array.isArray(schema.items.anyOf)) {
        // schema of current object
        return core.resolveAnyOf(data[key], schema.items, pointer);
      } // allOf


      if (Array.isArray(schema.items.allOf)) {
        return core.resolveAllOf(data[key], schema.items, pointer);
      } // spec: ignore additionalItems, when items is schema-object


      return core.resolveRef(schema.items);
    }

    if (itemsType === "array") {
      if (schema.items[key]) {
        return core.resolveRef(schema.items[key]);
      }

      if (schema.additionalItems === false) {
        return errors.additionalItemsError({
          key: key,
          value: data[key],
          pointer: pointer
        });
      }

      if (schema.additionalItems === true || schema.additionalItems === undefined) {
        return createSchemaOf(data[key]);
      }

      if (getTypeOf(schema.additionalItems) === "object") {
        return schema.additionalItems;
      }

      throw new Error("Invalid schema ".concat(JSON.stringify(schema, null, 4), " for ").concat(JSON.stringify(data, null, 4)));
    }

    if (schema.additionalItems !== false && data[key]) {
      // @todo reevaluate: incomplete schema is created here
      // @todo support additionalItems: {schema}
      return createSchemaOf(data[key]);
    }

    return new Error("Invalid array schema for ".concat(key, " at ").concat(pointer));
  },
  object: function object(core, key, schema, data, pointer) {
    if (Array.isArray(schema.oneOf)) {
      // update current schema
      var oneOfSchema = core.resolveOneOf(data, schema, pointer); // resolveOneOf does currently not apply merge with base schema

      schema = merge(schema, oneOfSchema);

      if (schema && schema.type === "error") {
        return schema;
      }
    }

    if (Array.isArray(schema.anyOf)) {
      // update current schema
      schema = core.resolveAnyOf(data, schema, pointer);

      if (schema && schema.type === "error") {
        return schema;
      }
    }

    if (Array.isArray(schema.allOf)) {
      // update current schema
      schema = core.resolveAllOf(data, schema, pointer);

      if (schema && schema.type === "error") {
        return schema;
      }
    }

    var targetSchema; // step into object-properties

    if (schema.properties && schema.properties[key] !== undefined) {
      // @todo patternProperties also validate properties
      targetSchema = core.resolveRef(schema.properties[key]);

      if (targetSchema && targetSchema.type === "error") {
        return targetSchema;
      } // check if there is a oneOf selection, which must be resolved


      if (targetSchema && Array.isArray(targetSchema.oneOf)) {
        // @special case: this is a mix of a schema and optional definitions
        // we resolve the schema here and add the original schema to `oneOfSchema`
        var resolvedSchema = core.resolveOneOf(data[key], targetSchema, "".concat(pointer, "/").concat(key));
        resolvedSchema = JSON.parse(JSON.stringify(resolvedSchema));
        resolvedSchema.variableSchema = true;
        resolvedSchema.oneOfSchema = targetSchema;
        return resolvedSchema;
      } // resolved schema or error


      if (targetSchema) {
        return targetSchema;
      }
    } // find matching property key


    if (getTypeOf(schema.patternProperties) === "object") {
      var regex;
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
    }

    if (schema.additionalProperties === true) {
      return createSchemaOf(data);
    }

    return errors.unknownPropertyError({
      property: key,
      value: data,
      pointer: pointer
    });
  }
};
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

function step(core, key, schema, data) {
  var pointer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#";
  var expectedType = schema.type || getTypeOf(data);

  if (stepType[expectedType]) {
    return stepType[expectedType](core, key, schema, data, pointer);
  }

  return new Error("Unsupported schema type ".concat(schema.type, " for key ").concat(key));
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

/***/ "./node_modules/json-schema-library/lib/utils/copy.js":
/*!************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/copy.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (value) {
  return JSON.parse(JSON.stringify(value));
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/createCustomError.js":
/*!*************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/createCustomError.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

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
  }; // function CustomError(data) {
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
/***/ (function(module, exports) {

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
/***/ (function(module, exports) {

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

/***/ "./node_modules/json-schema-library/lib/utils/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/merge.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var deepmerge = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");

var overwriteMerge = function overwriteMerge(destinationArray, sourceArray) {
  return sourceArray;
};

module.exports = function (a, b) {
  return deepmerge(a, b, {
    arrayMerge: overwriteMerge
  });
};

/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js":
/*!***************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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
      var extra = string.charCodeAt(counter++); // eslint-disable-next-line eqeqeq

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

/***/ "./node_modules/json-schema-library/lib/utils/render.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/render.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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
 * @param  {Mixed} value        - value to validate
 * @param  {Schema} [schema]     - json schema, defaults to rootSchema
 * @param  {String} [pointer]   - json pointer pointing to value (used for error-messages only)
 * @return {Array} list of errors or empty
 */


module.exports = function validate(core, value) {
  var schema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : core.rootSchema;
  var pointer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#";

  if (schema.type === "error") {
    return [schema];
  }

  schema = core.resolveRef(schema);
  var receivedType = getJsonSchemaType(value, schema.type);
  var expectedType = schema.type || receivedType;

  if (receivedType !== expectedType && (!Array.isArray(expectedType) || !expectedType.includes(receivedType))) {
    return [core.errors.typeError({
      received: receivedType,
      expected: expectedType,
      value: value,
      pointer: pointer
    })];
  }

  if (core.validateType[receivedType] == null) {
    return [core.errors.invalidTypeError({
      receivedType: receivedType,
      pointer: pointer
    })];
  }

  var errors = flattenArray(core.validateType[receivedType](core, schema, value, pointer)); // also promises may be passed along (validateAsync)

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
 * @async
 * Validate data by a json schema
 *
 * @param  {CoreInterface} core         - validator
 * @param  {Mixed} value                - value to validate
 * @param  {Object} options
 * @param  {Schema} options.schema      - json schema to use, defaults to core.rootSchema
 * @param  {String} options.pointer     - json pointer pointing to current value. Used in error reports
 * @param  {Function} options.onError   - will be called for each error as soon as it is resolved
 * @return {Promise<Array>} list of errors or empty
 */


module.exports = function validateAsync(core, value, _ref) {
  var _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? core.rootSchema : _ref$schema,
      _ref$pointer = _ref.pointer,
      pointer = _ref$pointer === void 0 ? "#" : _ref$pointer,
      onError = _ref.onError;
  var errors = core.validate(value, schema, pointer);

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
  })["catch"](function (e) {
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

/* eslint no-invalid-this: 0 */
var createCustomError = __webpack_require__(/*! ../utils/createCustomError */ "./node_modules/json-schema-library/lib/utils/createCustomError.js");

var errors = {
  additionalItemsError: createCustomError("AdditionalItemsError"),
  additionalPropertiesError: createCustomError("AdditionalPropertiesError"),
  anyOfError: createCustomError("AnyOfError"),
  allOfError: createCustomError("AllOfError"),
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

/* eslint-disable max-len */
var errors = __webpack_require__(/*! ./errors */ "./node_modules/json-schema-library/lib/validation/errors.js");

var validUrl = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js"); // https://gist.github.com/marcelotmelo/b67f58a08bee6c2468f8


var isValidDateTime = new RegExp("^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\\.[0-9]+)?(([Zz])|([\\+|\\-]([01][0-9]|2[0-3]):[0-5][0-9]))$"); // https://stackoverflow.com/questions/23483855/javascript-regex-to-validate-ipv4-and-ipv6-address-no-hostnames

var isValidIPV4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
var isValidIPV6 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/; // Default JSON-Schema formats: date-time, email, hostname, ipv4, ipv6, uri, uriref

var FormatValidation = {
  "date-time": function dateTime(core, schema, value, pointer) {
    if (value === "" || isValidDateTime.test(value)) {
      if (new Date(value).toString() === "Invalid Date") {
        return errors.formatDateTimeError({
          value: value,
          pointer: pointer
        });
      }

      return undefined;
    }

    return errors.formatDateTimeError({
      value: value,
      pointer: pointer
    });
  },
  email: function email(core, schema, value, pointer) {
    if (value === "" || value.includes("@")) {
      return undefined;
    }

    return errors.formatEmailError({
      value: value,
      pointer: pointer
    });
  },
  hostname: function hostname(core, schema, value, pointer) {
    if (value === "" || /\./.test(value)) {
      return undefined;
    }

    return errors.formatHostnameError({
      value: value,
      pointer: pointer
    });
  },
  ipv4: function ipv4(core, schema, value, pointer) {
    if (value === "" || isValidIPV4.test(value)) {
      return undefined;
    }

    return errors.formatIPV4Error({
      value: value,
      pointer: pointer
    });
  },
  ipv6: function ipv6(core, schema, value, pointer) {
    if (value === "" || isValidIPV6.test(value)) {
      return undefined;
    }

    return errors.formatIPV6Error({
      value: value,
      pointer: pointer
    });
  },
  regex: function regex(core, schema, value, pointer) {
    if (typeof value === "string" && /\\Z$/.test(value) === false) {
      return undefined;
    }

    return errors.formatRegExError({
      value: value,
      pointer: pointer
    });
  },
  uri: function uri(core, schema, value, pointer) {
    if (value === "" || validUrl.isUri(value)) {
      return undefined;
    }

    return errors.formatUriError({
      value: value,
      pointer: pointer
    });
  },
  url: function url(core, schema, value, pointer) {
    if (value === "" || validUrl.isWebUri(value)) {
      return undefined;
    }

    return errors.formatUrlError({
      value: value,
      pointer: pointer
    });
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getTypeOf = __webpack_require__(/*! ../getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

var ucs2decode = __webpack_require__(/*! ../utils/punycode.ucs2decode */ "./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js");

var settings = __webpack_require__(/*! ../config/settings */ "./node_modules/json-schema-library/lib/config/settings.js");

var FPP = settings.floatingPointPrecision; // list of validation keywords: http://json-schema.org/latest/json-schema-validation.html#rfc.section.5

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
    } // adds an error for each an unexpected property


    for (var i = 0, l = receivedProperties.length; i < l; i += 1) {
      var property = receivedProperties[i];

      if (expectedProperties.indexOf(property) === -1) {
        var isObject = _typeof(schema.additionalProperties) === "object"; // additionalProperties { oneOf: [] }

        if (isObject && Array.isArray(schema.additionalProperties.oneOf)) {
          var result = core.resolveOneOf(value[property], schema.additionalProperties, "".concat(pointer, "/").concat(property));

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
            errors.push(core.validate(value[property], result, pointer));
          } // additionalProperties {}

        } else if (isObject) {
          if (core.validate(value[property], schema.additionalProperties, pointer).length !== 0) {
            errors.push(core.errors.additionalPropertiesError({
              schema: schema.additionalProperties,
              property: receivedProperties[i],
              properties: expectedProperties,
              pointer: pointer
            }));
          }
        } else {
          errors.push(core.errors.noAdditionalPropertiesError({
            property: receivedProperties[i],
            properties: expectedProperties,
            pointer: pointer
          }));
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
      errors.push(core.validate(value, subSchema, pointer));
    });
    return errors;
  },
  anyOf: function anyOf(core, schema, value, pointer) {
    if (Array.isArray(schema.anyOf) === false) {
      return undefined;
    }

    for (var i = 0; i < schema.anyOf.length; i += 1) {
      if (core.isValid(value, schema.anyOf[i])) {
        return undefined;
      }
    }

    return core.errors.anyOfError({
      anyOf: schema.anyOf,
      value: value,
      pointer: pointer
    });
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

      var dependencyErrors;
      var type = getTypeOf(schema.dependencies[property]);

      if (type === "array") {
        dependencyErrors = schema.dependencies[property].filter(function (dependency) {
          return value[dependency] === undefined;
        }).map(function (missingProperty) {
          return core.errors.missingDependencyError({
            missingProperty: missingProperty,
            pointer: pointer
          });
        });
      } else if (type === "object") {
        dependencyErrors = core.validate(value, schema.dependencies[property]);
      } else {
        throw new Error("Invalid dependency definition for ".concat(pointer, "/").concat(property, ". Must be list or schema"));
      }

      errors.push.apply(errors, _toConsumableArray(dependencyErrors));
    });
    return errors.length > 0 ? errors : undefined;
  },
  "enum": function _enum(core, schema, value, pointer) {
    var type = getTypeOf(value);

    if (type === "object" || type === "array") {
      var valueStr = JSON.stringify(value);

      for (var i = 0; i < schema["enum"].length; i += 1) {
        if (JSON.stringify(schema["enum"][i]) === valueStr) {
          return undefined;
        }
      }
    } else if (schema["enum"].includes(value)) {
      return undefined;
    }

    return core.errors.enumError({
      values: schema["enum"],
      value: value,
      pointer: pointer
    });
  },
  format: function format(core, schema, value, pointer) {
    if (core.validateFormat[schema.format]) {
      var errors = core.validateFormat[schema.format](core, schema, value, pointer);
      return errors;
    } // fail silently if given format is not defined


    return undefined;
  },
  items: function items(core, schema, value, pointer) {
    var errors = [];

    for (var i = 0; i < value.length; i += 1) {
      var itemData = value[i]; // @todo reevaluate: incomplete schema is created here

      var itemSchema = core.step(i, schema, value, pointer);

      if (itemSchema && itemSchema.type === "error") {
        return [itemSchema];
      }

      var itemErrors = core.validate(itemData, itemSchema, "".concat(pointer, "/").concat(i));
      errors.push.apply(errors, _toConsumableArray(itemErrors));
    }

    return errors;
  },
  maximum: function maximum(core, schema, value, pointer) {
    if (isNaN(schema.maximum)) {
      return undefined;
    }

    if (schema.maximum && schema.maximum < value) {
      return core.errors.maximumError({
        maximum: schema.maximum,
        length: value,
        pointer: pointer
      });
    }

    if (schema.maximum && schema.exclusiveMaximum === true && schema.maximum === value) {
      return core.errors.maximumError({
        maximum: schema.maximum,
        length: value,
        pointer: pointer
      });
    }

    return undefined;
  },
  maxItems: function maxItems(core, schema, value, pointer) {
    if (isNaN(schema.maxItems)) {
      return undefined;
    }

    if (schema.maxItems < value.length) {
      return core.errors.maxItemsError({
        maximum: schema.maxItems,
        length: value.length,
        pointer: pointer
      });
    }

    return undefined;
  },
  maxLength: function maxLength(core, schema, value, pointer) {
    if (isNaN(schema.maxLength)) {
      return undefined;
    }

    var lengthOfString = ucs2decode(value).length;

    if (schema.maxLength < lengthOfString) {
      return core.errors.maxLengthError({
        maxLength: schema.maxLength,
        length: lengthOfString,
        pointer: pointer
      });
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
      return core.errors.minLengthError({
        minLength: schema.minLength,
        length: lengthOfString,
        pointer: pointer
      });
    }

    return undefined;
  },
  minimum: function minimum(core, schema, value, pointer) {
    if (isNaN(schema.minimum)) {
      return undefined;
    }

    if (schema.minimum > value) {
      return core.errors.minimumError({
        minimum: schema.minimum,
        length: value,
        pointer: pointer
      });
    }

    if (schema.exclusiveMinimum === true && schema.minimum === value) {
      return core.errors.minimumError({
        minimum: schema.minimum,
        length: value,
        pointer: pointer
      });
    }

    return undefined;
  },
  minItems: function minItems(core, schema, value, pointer) {
    if (isNaN(schema.minItems)) {
      return undefined;
    }

    if (schema.minItems > value.length) {
      return core.errors.minItemsError({
        minItems: schema.minItems,
        length: value.length,
        pointer: pointer
      });
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
        length: propertyCount,
        pointer: pointer
      });
    }

    return undefined;
  },
  multipleOf: function multipleOf(core, schema, value, pointer) {
    if (isNaN(schema.multipleOf)) {
      return undefined;
    }

    if (value * FPP % (schema.multipleOf * FPP) / FPP !== 0) {
      return core.errors.multipleOfError({
        multipleOf: schema.multipleOf,
        value: value,
        pointer: pointer
      });
    }

    return undefined;
  },
  not: function not(core, schema, value, pointer) {
    var errors = [];

    if (core.validate(value, schema.not, pointer).length === 0) {
      errors.push(core.errors.notError({
        value: value,
        not: schema.not,
        pointer: pointer
      }));
    }

    return errors;
  },
  oneOf: function oneOf(core, schema, value, pointer) {
    if (Array.isArray(schema.oneOf) === false) {
      return undefined;
    }

    schema = core.resolveOneOf(value, schema, pointer);

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
        received: value,
        pointer: pointer
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
          var valErrors = core.validate(value[key], patterns[i].patternSchema, "".concat(pointer, "/").concat(key));

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
          key: key,
          pointer: pointer,
          patterns: Object.keys(pp).join(",")
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
        var keyErrors = core.validate(value[key], itemSchema, "".concat(pointer, "/").concat(key));
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
        errors.push(core.errors.requiredPropertyError({
          key: key,
          pointer: pointer
        }));
      } else {
        var itemSchema = core.step(key, schema, value, pointer);
        var keyErrors = core.validate(value[key], itemSchema, "".concat(pointer, "/").concat(key));
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
        return core.errors.requiredPropertyError({
          key: property,
          pointer: pointer
        });
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
        return core.errors.valueNotEmptyError({
          property: property,
          pointer: "".concat(pointer, "/").concat(property)
        });
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
      var itemPointer = "".concat(pointer, "/").concat(index);

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
/***/ (function(module, exports) {

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
    return core.typeKeywords["boolean"].filter(function (key) {
      return schema && schema[key] != null;
    }).map(function (key) {
      return core.validateKeyword[key](core, schema, value, pointer);
    });
  },
  "null": function _null(core, schema, value, pointer) {
    return core.typeKeywords["null"].filter(function (key) {
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
/***/ (function(module, exports) {

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
  "boolean": ["enum", "not"],
  object: ["additionalProperties", "dependencies", "enum", "format", "minProperties", "maxProperties", "patternProperties", "properties", "required", "not", "oneOf", "allOf", "anyOf"],
  string: ["enum", "format", "maxLength", "minLength", "pattern", "not", "oneOf", "allOf", "anyOf"],
  number: ["enum", "format", "maximum", "minimum", "multipleOf", "not", "oneOf", "allOf", "anyOf"],
  "null": ["enum", "format", "not", "oneOf", "allOf", "anyOf"]
};

/***/ }),

/***/ "./node_modules/json-schema-library/remotes/draft04.json":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/remotes/draft04.json ***!
  \***************************************************************/
/*! exports provided: id, $schema, description, definitions, type, properties, dependencies, default */
/*! all exports used */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"http://json-schema.org/draft-04/schema#\",\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"description\":\"Core schema meta-schema\",\"definitions\":{\"schemaArray\":{\"type\":\"array\",\"minItems\":1,\"items\":{\"$ref\":\"#\"}},\"positiveInteger\":{\"type\":\"integer\",\"minimum\":0},\"positiveIntegerDefault0\":{\"allOf\":[{\"$ref\":\"#/definitions/positiveInteger\"},{\"default\":0}]},\"simpleTypes\":{\"enum\":[\"array\",\"boolean\",\"integer\",\"null\",\"number\",\"object\",\"string\"]},\"stringArray\":{\"type\":\"array\",\"items\":{\"type\":\"string\"},\"minItems\":1,\"uniqueItems\":true}},\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"format\":\"uri\"},\"$schema\":{\"type\":\"string\",\"format\":\"uri\"},\"title\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"default\":{},\"multipleOf\":{\"type\":\"number\",\"minimum\":0,\"exclusiveMinimum\":true},\"maximum\":{\"type\":\"number\"},\"exclusiveMaximum\":{\"type\":\"boolean\",\"default\":false},\"minimum\":{\"type\":\"number\"},\"exclusiveMinimum\":{\"type\":\"boolean\",\"default\":false},\"maxLength\":{\"$ref\":\"#/definitions/positiveInteger\"},\"minLength\":{\"$ref\":\"#/definitions/positiveIntegerDefault0\"},\"pattern\":{\"type\":\"string\",\"format\":\"regex\"},\"additionalItems\":{\"anyOf\":[{\"type\":\"boolean\"},{\"$ref\":\"#\"}],\"default\":{}},\"items\":{\"anyOf\":[{\"$ref\":\"#\"},{\"$ref\":\"#/definitions/schemaArray\"}],\"default\":{}},\"maxItems\":{\"$ref\":\"#/definitions/positiveInteger\"},\"minItems\":{\"$ref\":\"#/definitions/positiveIntegerDefault0\"},\"uniqueItems\":{\"type\":\"boolean\",\"default\":false},\"maxProperties\":{\"$ref\":\"#/definitions/positiveInteger\"},\"minProperties\":{\"$ref\":\"#/definitions/positiveIntegerDefault0\"},\"required\":{\"$ref\":\"#/definitions/stringArray\"},\"additionalProperties\":{\"anyOf\":[{\"type\":\"boolean\"},{\"$ref\":\"#\"}],\"default\":{}},\"definitions\":{\"type\":\"object\",\"additionalProperties\":{\"$ref\":\"#\"},\"default\":{}},\"properties\":{\"type\":\"object\",\"additionalProperties\":{\"$ref\":\"#\"},\"default\":{}},\"patternProperties\":{\"type\":\"object\",\"additionalProperties\":{\"$ref\":\"#\"},\"default\":{}},\"dependencies\":{\"type\":\"object\",\"additionalProperties\":{\"anyOf\":[{\"$ref\":\"#\"},{\"$ref\":\"#/definitions/stringArray\"}]}},\"enum\":{\"type\":\"array\",\"minItems\":1,\"uniqueItems\":true},\"type\":{\"anyOf\":[{\"$ref\":\"#/definitions/simpleTypes\"},{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/simpleTypes\"},\"minItems\":1,\"uniqueItems\":true}]},\"allOf\":{\"$ref\":\"#/definitions/schemaArray\"},\"anyOf\":{\"$ref\":\"#/definitions/schemaArray\"},\"oneOf\":{\"$ref\":\"#/definitions/schemaArray\"},\"not\":{\"$ref\":\"#\"}},\"dependencies\":{\"exclusiveMaximum\":[\"maximum\"],\"exclusiveMinimum\":[\"minimum\"]},\"default\":{}}");

/***/ }),

/***/ "./node_modules/json-schema-library/remotes/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/remotes/index.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/jsondiffpatch/dist/empty.js":
/*!**************************************************!*\
  !*** ./node_modules/jsondiffpatch/dist/empty.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! ./empty */ "./node_modules/jsondiffpatch/dist/empty.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./empty */ "./node_modules/jsondiffpatch/dist/empty.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports, chalk) {
  'use strict';

  chalk = chalk && chalk.hasOwnProperty('default') ? chalk['default'] : chalk;

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + _typeof2(superClass));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (_typeof2(call) === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var Processor = function () {
    function Processor(options) {
      classCallCheck(this, Processor);
      this.selfOptions = options || {};
      this.pipes = {};
    }

    createClass(Processor, [{
      key: 'options',
      value: function options(_options) {
        if (_options) {
          this.selfOptions = _options;
        }

        return this.selfOptions;
      }
    }, {
      key: 'pipe',
      value: function pipe(name, pipeArg) {
        var pipe = pipeArg;

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
      }
    }, {
      key: 'process',
      value: function process(input, pipe) {
        var context = input;
        context.options = this.options();
        var nextPipe = pipe || input.pipe || 'default';
        var lastPipe = void 0;
        var lastContext = void 0;

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
      }
    }]);
    return Processor;
  }();

  var Pipe = function () {
    function Pipe(name) {
      classCallCheck(this, Pipe);
      this.name = name;
      this.filters = [];
    }

    createClass(Pipe, [{
      key: 'process',
      value: function process(input) {
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
      }
    }, {
      key: 'log',
      value: function log(msg) {
        console.log('[jsondiffpatch] ' + this.name + ' pipe, ' + msg);
      }
    }, {
      key: 'append',
      value: function append() {
        var _filters;

        (_filters = this.filters).push.apply(_filters, arguments);

        return this;
      }
    }, {
      key: 'prepend',
      value: function prepend() {
        var _filters2;

        (_filters2 = this.filters).unshift.apply(_filters2, arguments);

        return this;
      }
    }, {
      key: 'indexOf',
      value: function indexOf(filterName) {
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
      }
    }, {
      key: 'list',
      value: function list() {
        return this.filters.map(function (f) {
          return f.filterName;
        });
      }
    }, {
      key: 'after',
      value: function after(filterName) {
        var index = this.indexOf(filterName);
        var params = Array.prototype.slice.call(arguments, 1);

        if (!params.length) {
          throw new Error('a filter is required');
        }

        params.unshift(index + 1, 0);
        Array.prototype.splice.apply(this.filters, params);
        return this;
      }
    }, {
      key: 'before',
      value: function before(filterName) {
        var index = this.indexOf(filterName);
        var params = Array.prototype.slice.call(arguments, 1);

        if (!params.length) {
          throw new Error('a filter is required');
        }

        params.unshift(index, 0);
        Array.prototype.splice.apply(this.filters, params);
        return this;
      }
    }, {
      key: 'replace',
      value: function replace(filterName) {
        var index = this.indexOf(filterName);
        var params = Array.prototype.slice.call(arguments, 1);

        if (!params.length) {
          throw new Error('a filter is required');
        }

        params.unshift(index, 1);
        Array.prototype.splice.apply(this.filters, params);
        return this;
      }
    }, {
      key: 'remove',
      value: function remove(filterName) {
        var index = this.indexOf(filterName);
        this.filters.splice(index, 1);
        return this;
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.filters.length = 0;
        return this;
      }
    }, {
      key: 'shouldHaveResult',
      value: function shouldHaveResult(should) {
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
      }
    }]);
    return Pipe;
  }();

  var Context = function () {
    function Context() {
      classCallCheck(this, Context);
    }

    createClass(Context, [{
      key: 'setResult',
      value: function setResult(result) {
        this.result = result;
        this.hasResult = true;
        return this;
      }
    }, {
      key: 'exit',
      value: function exit() {
        this.exiting = true;
        return this;
      }
    }, {
      key: 'switchTo',
      value: function switchTo(next, pipe) {
        if (typeof next === 'string' || next instanceof Pipe) {
          this.nextPipe = next;
        } else {
          this.next = next;

          if (pipe) {
            this.nextPipe = pipe;
          }
        }

        return this;
      }
    }, {
      key: 'push',
      value: function push(child, name) {
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
      }
    }]);
    return Context;
  }();

  var isArray = typeof Array.isArray === 'function' ? Array.isArray : function (a) {
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

  var DiffContext = function (_Context) {
    inherits(DiffContext, _Context);

    function DiffContext(left, right) {
      classCallCheck(this, DiffContext);

      var _this = possibleConstructorReturn(this, (DiffContext.__proto__ || Object.getPrototypeOf(DiffContext)).call(this));

      _this.left = left;
      _this.right = right;
      _this.pipe = 'diff';
      return _this;
    }

    createClass(DiffContext, [{
      key: 'setResult',
      value: function setResult(result) {
        if (this.options.cloneDiffValues && (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
          var clone$$1 = typeof this.options.cloneDiffValues === 'function' ? this.options.cloneDiffValues : clone;

          if (_typeof(result[0]) === 'object') {
            result[0] = clone$$1(result[0]);
          }

          if (_typeof(result[1]) === 'object') {
            result[1] = clone$$1(result[1]);
          }
        }

        return Context.prototype.setResult.apply(this, arguments);
      }
    }]);
    return DiffContext;
  }(Context);

  var PatchContext = function (_Context) {
    inherits(PatchContext, _Context);

    function PatchContext(left, delta) {
      classCallCheck(this, PatchContext);

      var _this = possibleConstructorReturn(this, (PatchContext.__proto__ || Object.getPrototypeOf(PatchContext)).call(this));

      _this.left = left;
      _this.delta = delta;
      _this.pipe = 'patch';
      return _this;
    }

    return PatchContext;
  }(Context);

  var ReverseContext = function (_Context) {
    inherits(ReverseContext, _Context);

    function ReverseContext(delta) {
      classCallCheck(this, ReverseContext);

      var _this = possibleConstructorReturn(this, (ReverseContext.__proto__ || Object.getPrototypeOf(ReverseContext)).call(this));

      _this.delta = delta;
      _this.pipe = 'reverse';
      return _this;
    }

    return ReverseContext;
  }(Context);

  var isArray$1 = typeof Array.isArray === 'function' ? Array.isArray : function (a) {
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
      context.leftIsArray = isArray$1(context.left);
    }

    if (context.rightType === 'object') {
      context.rightIsArray = isArray$1(context.right);
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
      }
    }
  };

  diffFilter.filterName = 'trivial';

  var patchFilter = function trivialMatchesPatchFilter(context) {
    if (typeof context.delta === 'undefined') {
      context.setResult(context.left).exit();
      return;
    }

    context.nested = !isArray$1(context.delta);

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
    }
  };

  patchFilter.filterName = 'trivial';

  var reverseFilter = function trivialReferseFilter(context) {
    if (typeof context.delta === 'undefined') {
      context.setResult(context.delta).exit();
      return;
    }

    context.nested = !isArray$1(context.delta);

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
    }
  };

  reverseFilter.filterName = 'trivial';

  function collectChildrenDiffFilter(context) {
    if (!context || !context.children) {
      return;
    }

    var length = context.children.length;
    var child = void 0;
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
  }

  collectChildrenDiffFilter.filterName = 'collectChildren';

  function objectsDiffFilter(context) {
    if (context.leftIsArray || context.leftType !== 'object') {
      return;
    }

    var name = void 0;
    var child = void 0;
    var propertyFilter = context.options.propertyFilter;

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
  }

  objectsDiffFilter.filterName = 'objects';

  var patchFilter$1 = function nestedPatchFilter(context) {
    if (!context.nested) {
      return;
    }

    if (context.delta._t) {
      return;
    }

    var name = void 0;
    var child = void 0;

    for (name in context.delta) {
      child = new PatchContext(context.left[name], context.delta[name]);
      context.push(child, name);
    }

    context.exit();
  };

  patchFilter$1.filterName = 'objects';

  var collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
    if (!context || !context.children) {
      return;
    }

    if (context.delta._t) {
      return;
    }

    var length = context.children.length;
    var child = void 0;

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

  var reverseFilter$1 = function nestedReverseFilter(context) {
    if (!context.nested) {
      return;
    }

    if (context.delta._t) {
      return;
    }

    var name = void 0;
    var child = void 0;

    for (name in context.delta) {
      child = new ReverseContext(context.delta[name]);
      context.push(child, name);
    }

    context.exit();
  };

  reverseFilter$1.filterName = 'objects';

  function collectChildrenReverseFilter(context) {
    if (!context || !context.children) {
      return;
    }

    if (context.delta._t) {
      return;
    }

    var length = context.children.length;
    var child = void 0;
    var delta = {};

    for (var index = 0; index < length; index++) {
      child = context.children[index];

      if (delta[child.childName] !== child.result) {
        delta[child.childName] = child.result;
      }
    }

    context.setResult(delta).exit();
  }

  collectChildrenReverseFilter.filterName = 'collectChildren';
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
    var x = void 0,
        y = void 0; // initialize empty matrix of len1+1 x len2+1

    var matrix = [len1 + 1];

    for (x = 0; x < len1 + 1; x++) {
      matrix[x] = [len2 + 1];

      for (y = 0; y < len2 + 1; y++) {
        matrix[x][y] = 0;
      }
    }

    matrix.match = match; // save sequence lengths for each coordinate

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

  var get$1 = function get(array1, array2, match, context) {
    var innerContext = context || {};
    var matrix = lengthMatrix(array1, array2, match || defaultMatch, innerContext);
    var result = backtrack(matrix, array1, array2, array1.length, array2.length, innerContext);

    if (typeof array1 === 'string' && typeof array2 === 'string') {
      result.sequence = result.sequence.join('');
    }

    return result;
  };

  var lcs = {
    get: get$1
  };
  var ARRAY_MOVE = 3;
  var isArray$2 = typeof Array.isArray === 'function' ? Array.isArray : function (a) {
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

    var hash1 = void 0;
    var hash2 = void 0;

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

  var diffFilter$1 = function arraysDiffFilter(context) {
    if (!context.leftIsArray) {
      return;
    }

    var matchContext = {
      objectHash: context.options && context.options.objectHash,
      matchByPosition: context.options && context.options.matchByPosition
    };
    var commonHead = 0;
    var commonTail = 0;
    var index = void 0;
    var index1 = void 0;
    var index2 = void 0;
    var array1 = context.left;
    var array2 = context.right;
    var len1 = array1.length;
    var len2 = array2.length;
    var child = void 0;

    if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== 'boolean') {
      matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
    } // separate common head


    while (commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)) {
      index = commonHead;
      child = new DiffContext(context.left[index], context.right[index]);
      context.push(child, index);
      commonHead++;
    } // separate common tail


    while (commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)) {
      index1 = len1 - 1 - commonTail;
      index2 = len2 - 1 - commonTail;
      child = new DiffContext(context.left[index1], context.right[index2]);
      context.push(child, index2);
      commonTail++;
    }

    var result = void 0;

    if (commonHead + commonTail === len1) {
      if (len1 === len2) {
        // arrays are identical
        context.setResult(undefined).exit();
        return;
      } // trivial case, a block (1 or more consecutive items) was added


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
    } // reset hash cache


    delete matchContext.hashCache1;
    delete matchContext.hashCache2; // diff is not trivial, find the LCS (Longest Common Subsequence)

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

  diffFilter$1.filterName = 'arrays';
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

  var patchFilter$2 = function nestedPatchFilter(context) {
    if (!context.nested) {
      return;
    }

    if (context.delta._t !== 'a') {
      return;
    }

    var index = void 0;
    var index1 = void 0;
    var delta = context.delta;
    var array = context.left; // first, separate removals, insertions and modifications

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
            throw new Error('only removal or move can be applied at original array indices,' + (' invalid diff type: ' + delta[index][2]));
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
    } // remove items, in reverse order to avoid sawing our own floor


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
    } // insert items, in reverse order to avoid moving our own floor


    toInsert = toInsert.sort(compare.numericallyBy('index'));
    var toInsertLength = toInsert.length;

    for (index = 0; index < toInsertLength; index++) {
      var insertion = toInsert[index];
      array.splice(insertion.index, 0, insertion.value);
    } // apply modifications


    var toModifyLength = toModify.length;
    var child = void 0;

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

  patchFilter$2.filterName = 'arrays';

  var collectChildrenPatchFilter$1 = function collectChildrenPatchFilter(context) {
    if (!context || !context.children) {
      return;
    }

    if (context.delta._t !== 'a') {
      return;
    }

    var length = context.children.length;
    var child = void 0;

    for (var index = 0; index < length; index++) {
      child = context.children[index];
      context.left[child.childName] = child.result;
    }

    context.setResult(context.left).exit();
  };

  collectChildrenPatchFilter$1.filterName = 'arraysCollectChildren';

  var reverseFilter$2 = function arraysReverseFilter(context) {
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

    var name = void 0;
    var child = void 0;

    for (name in context.delta) {
      if (name === '_t') {
        continue;
      }

      child = new ReverseContext(context.delta[name]);
      context.push(child, name);
    }

    context.exit();
  };

  reverseFilter$2.filterName = 'arrays';

  var reverseArrayDeltaIndex = function reverseArrayDeltaIndex(delta, index, itemDelta) {
    if (typeof index === 'string' && index[0] === '_') {
      return parseInt(index.substr(1), 10);
    } else if (isArray$2(itemDelta) && itemDelta[2] === 0) {
      return '_' + index;
    }

    var reverseIndex = +index;

    for (var deltaIndex in delta) {
      var deltaItem = delta[deltaIndex];

      if (isArray$2(deltaItem)) {
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

  function collectChildrenReverseFilter$1(context) {
    if (!context || !context.children) {
      return;
    }

    if (context.delta._t !== 'a') {
      return;
    }

    var length = context.children.length;
    var child = void 0;
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
  }

  collectChildrenReverseFilter$1.filterName = 'arraysCollectChildren';

  var diffFilter$2 = function datesDiffFilter(context) {
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

  diffFilter$2.filterName = 'dates';

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var diffMatchPatch = createCommonjsModule(function (module) {
    function diff_match_patch() {
      // Defaults.
      // Redefine these in your program to override the defaults.
      // Number of seconds to map a diff before giving up (0 for infinity).
      this.Diff_Timeout = 1.0; // Cost of an empty edit operation in terms of edit characters.

      this.Diff_EditCost = 4; // At what point is no match declared (0.0 = perfection, 1.0 = very loose).

      this.Match_Threshold = 0.5; // How far to search for a match (0 = exact location, 1000+ = broad match).
      // A match this many characters away from the expected location will add
      // 1.0 to the score (0.0 is a perfect match).

      this.Match_Distance = 1000; // When deleting a large block of text (over ~64 characters), how close do
      // the contents have to be to match the expected contents. (0.0 = perfection,
      // 1.0 = very loose).  Note that Match_Threshold controls how closely the
      // end points of a delete need to match.

      this.Patch_DeleteThreshold = 0.5; // Chunk size for context length.

      this.Patch_Margin = 4; // The number of bits in an int.

      this.Match_MaxBits = 32;
    } //  DIFF FUNCTIONS

    /**
     * The data structure representing a diff is an array of tuples:
     * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
     * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
     */


    var DIFF_DELETE = -1;
    var DIFF_INSERT = 1;
    var DIFF_EQUAL = 0;
    /** @typedef {{0: number, 1: string}} */

    diff_match_patch.prototype.diff_main = function (text1, text2, opt_checklines, opt_deadline) {
      // Set a deadline by which time the diff must be complete.
      if (typeof opt_deadline == 'undefined') {
        if (this.Diff_Timeout <= 0) {
          opt_deadline = Number.MAX_VALUE;
        } else {
          opt_deadline = new Date().getTime() + this.Diff_Timeout * 1000;
        }
      }

      var deadline = opt_deadline; // Check for null inputs.

      if (text1 == null || text2 == null) {
        throw new Error('Null input. (diff_main)');
      } // Check for equality (speedup).


      if (text1 == text2) {
        if (text1) {
          return [[DIFF_EQUAL, text1]];
        }

        return [];
      }

      if (typeof opt_checklines == 'undefined') {
        opt_checklines = true;
      }

      var checklines = opt_checklines; // Trim off common prefix (speedup).

      var commonlength = this.diff_commonPrefix(text1, text2);
      var commonprefix = text1.substring(0, commonlength);
      text1 = text1.substring(commonlength);
      text2 = text2.substring(commonlength); // Trim off common suffix (speedup).

      commonlength = this.diff_commonSuffix(text1, text2);
      var commonsuffix = text1.substring(text1.length - commonlength);
      text1 = text1.substring(0, text1.length - commonlength);
      text2 = text2.substring(0, text2.length - commonlength); // Compute the diff on the middle block.

      var diffs = this.diff_compute_(text1, text2, checklines, deadline); // Restore the prefix and suffix.

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
        diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]]; // Swap insertions for deletions if diff is reversed.

        if (text1.length > text2.length) {
          diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        }

        return diffs;
      }

      if (shorttext.length == 1) {
        // Single character string.
        // After the previous speedup, the character can't be an equality.
        return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
      } // Check to see if the problem can be split in two.


      var hm = this.diff_halfMatch_(text1, text2);

      if (hm) {
        // A half-match was found, sort out the return data.
        var text1_a = hm[0];
        var text1_b = hm[1];
        var text2_a = hm[2];
        var text2_b = hm[3];
        var mid_common = hm[4]; // Send both pairs off for separate processing.

        var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
        var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline); // Merge the results.

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
      text1 = a.chars1;
      text2 = a.chars2;
      var linearray = a.lineArray;
      var diffs = this.diff_main(text1, text2, false, deadline); // Convert the diff back to original text.

      this.diff_charsToLines_(diffs, linearray); // Eliminate freak matches (e.g. blank lines)

      this.diff_cleanupSemantic(diffs); // Rediff any replacement blocks, this time character-by-character.
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
              diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert);
              pointer = pointer - count_delete - count_insert;
              var a = this.diff_main(text_delete, text_insert, false, deadline);

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
      var v2 = new Array(v_length); // Setting all elements to -1 is faster in Chrome & Firefox than mixing
      // integers and undefined.

      for (var x = 0; x < v_length; x++) {
        v1[x] = -1;
        v2[x] = -1;
      }

      v1[v_offset + 1] = 0;
      v2[v_offset + 1] = 0;
      var delta = text1_length - text2_length; // If the total number of characters is odd, then the front path will collide
      // with the reverse path.

      var front = delta % 2 != 0; // Offsets for start and end of k loop.
      // Prevents mapping of space beyond the grid.

      var k1start = 0;
      var k1end = 0;
      var k2start = 0;
      var k2end = 0;

      for (var d = 0; d < max_d; d++) {
        // Bail out if deadline is reached.
        if (new Date().getTime() > deadline) {
          break;
        } // Walk the front path one step.


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
        } // Walk the reverse path one step.


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
              var y1 = v_offset + x1 - k1_offset; // Mirror x2 onto top-left coordinate system.

              x2 = text1_length - x2;

              if (x1 >= x2) {
                // Overlap detected.
                return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
              }
            }
          }
        }
      } // Diff took too long and hit the deadline or
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
      var text2b = text2.substring(y); // Compute both diffs serially.

      var diffs = this.diff_main(text1a, text2a, false, deadline);
      var diffsb = this.diff_main(text1b, text2b, false, deadline);
      return diffs.concat(diffsb);
    };
    /**
     * Split two texts into an array of strings.  Reduce the texts to a string of
     * hashes where each Unicode character represents one line.
     * @param {string} text1 First string.
     * @param {string} text2 Second string.
     * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
     *     An object containing the encoded text1, the encoded text2 and
     *     the array of unique strings.
     *     The zeroth element of the array of unique strings is intentionally blank.
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
        var chars = ''; // Walk the text, pulling out a substring for each line.
        // text.split('\n') would would temporarily double our memory footprint.
        // Modifying text would create many large strings to garbage collect.

        var lineStart = 0;
        var lineEnd = -1; // Keeping our own length variable is faster than looking it up.

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
      return {
        chars1: chars1,
        chars2: chars2,
        lineArray: lineArray
      };
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
      } // Binary search.
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
      } // Binary search.
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
      var text2_length = text2.length; // Eliminate the null case.

      if (text1_length == 0 || text2_length == 0) {
        return 0;
      } // Truncate the longer string.


      if (text1_length > text2_length) {
        text1 = text1.substring(text1_length - text2_length);
      } else if (text1_length < text2_length) {
        text2 = text2.substring(0, text1_length);
      }

      var text_length = Math.min(text1_length, text2_length); // Quick check for the worst case.

      if (text1 == text2) {
        return text_length;
      } // Start by looking for a single character match
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
      } // First check if the second quarter is the seed for a half-match.


      var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4)); // Check again based on the third quarter.

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
      } // A half-match was found, sort out the return data.


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

      var lastequality = null; // Always equal to diffs[equalities[equalitiesLength - 1]][1]

      var pointer = 0; // Index of current position.
      // Number of characters that changed prior to the equality.

      var length_insertions1 = 0;
      var length_deletions1 = 0; // Number of characters that changed after the equality.

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
          lastequality = diffs[pointer][1];
        } else {
          // An insertion or deletion.
          if (diffs[pointer][0] == DIFF_INSERT) {
            length_insertions2 += diffs[pointer][1].length;
          } else {
            length_deletions2 += diffs[pointer][1].length;
          } // Eliminate an equality that is smaller or equal to the edits on both
          // sides of it.


          if (lastequality && lastequality.length <= Math.max(length_insertions1, length_deletions1) && lastequality.length <= Math.max(length_insertions2, length_deletions2)) {
            // Duplicate record.
            diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]); // Change second copy to insert.

            diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT; // Throw away the equality we just deleted.

            equalitiesLength--; // Throw away the previous equality (it needs to be reevaluated).

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
      } // Normalize the diff.


      if (changes) {
        this.diff_cleanupMerge(diffs);
      }

      this.diff_cleanupSemanticLossless(diffs); // Find any overlaps between deletions and insertions.
      // e.g: <del>abcxxx</del><ins>xxxdef</ins>
      //   -> <del>abc</del>xxx<ins>def</ins>
      // e.g: <del>xxxabc</del><ins>defxxx</ins>
      //   -> <ins>def</ins>xxx<del>abc</del>
      // Only extract an overlap if it is as big as the edit ahead or behind it.

      pointer = 1;

      while (pointer < diffs.length) {
        if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
          var deletion = diffs[pointer - 1][1];
          var insertion = diffs[pointer][1];
          var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
          var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);

          if (overlap_length1 >= overlap_length2) {
            if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
              // Overlap found.  Insert an equality and trim the surrounding edits.
              diffs.splice(pointer, 0, [DIFF_EQUAL, insertion.substring(0, overlap_length1)]);
              diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
              diffs[pointer + 1][1] = insertion.substring(overlap_length1);
              pointer++;
            }
          } else {
            if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
              // Reverse overlap found.
              // Insert an equality and swap and trim the surrounding edits.
              diffs.splice(pointer, 0, [DIFF_EQUAL, deletion.substring(0, overlap_length2)]);
              diffs[pointer - 1][0] = DIFF_INSERT;
              diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
              diffs[pointer + 1][0] = DIFF_DELETE;
              diffs[pointer + 1][1] = deletion.substring(overlap_length2);
              pointer++;
            }
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
      /**
       * Given two strings, compute a score representing whether the internal
       * boundary falls on logical boundaries.
       * Scores range from 6 (best) to 0 (worst).
       * Closure, but does not reference any external variables.
       * @param {string} one First string.
       * @param {string} two Second string.
       * @return {number} The score.
       * @private
       */
      function diff_cleanupSemanticScore_(one, two) {
        if (!one || !two) {
          // Edges are the best.
          return 6;
        } // Each port of this function behaves slightly differently due to
        // subtle differences in each language's definition of things like
        // 'whitespace'.  Since this function's purpose is largely cosmetic,
        // the choice has been made to use each language's native features
        // rather than force total conformity.


        var char1 = one.charAt(one.length - 1);
        var char2 = two.charAt(0);
        var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
        var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
        var whitespace1 = nonAlphaNumeric1 && char1.match(diff_match_patch.whitespaceRegex_);
        var whitespace2 = nonAlphaNumeric2 && char2.match(diff_match_patch.whitespaceRegex_);
        var lineBreak1 = whitespace1 && char1.match(diff_match_patch.linebreakRegex_);
        var lineBreak2 = whitespace2 && char2.match(diff_match_patch.linebreakRegex_);
        var blankLine1 = lineBreak1 && one.match(diff_match_patch.blanklineEndRegex_);
        var blankLine2 = lineBreak2 && two.match(diff_match_patch.blanklineStartRegex_);

        if (blankLine1 || blankLine2) {
          // Five points for blank lines.
          return 5;
        } else if (lineBreak1 || lineBreak2) {
          // Four points for line breaks.
          return 4;
        } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
          // Three points for end of sentences.
          return 3;
        } else if (whitespace1 || whitespace2) {
          // Two points for whitespace.
          return 2;
        } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
          // One point for non-alphanumeric.
          return 1;
        }

        return 0;
      }

      var pointer = 1; // Intentionally ignore the first and last element (don't need checking).

      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
          // This is a single edit surrounded by equalities.
          var equality1 = diffs[pointer - 1][1];
          var edit = diffs[pointer][1];
          var equality2 = diffs[pointer + 1][1]; // First, shift the edit as far left as possible.

          var commonOffset = this.diff_commonSuffix(equality1, edit);

          if (commonOffset) {
            var commonString = edit.substring(edit.length - commonOffset);
            equality1 = equality1.substring(0, equality1.length - commonOffset);
            edit = commonString + edit.substring(0, edit.length - commonOffset);
            equality2 = commonString + equality2;
          } // Second, step character by character right, looking for the best fit.


          var bestEquality1 = equality1;
          var bestEdit = edit;
          var bestEquality2 = equality2;
          var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);

          while (edit.charAt(0) === equality2.charAt(0)) {
            equality1 += edit.charAt(0);
            edit = edit.substring(1) + equality2.charAt(0);
            equality2 = equality2.substring(1);
            var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2); // The >= encourages trailing rather than leading whitespace on edits.

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
    }; // Define some regex patterns for matching boundaries.


    diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
    diff_match_patch.whitespaceRegex_ = /\s/;
    diff_match_patch.linebreakRegex_ = /[\r\n]/;
    diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
    diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;
    /**
     * Reduce the number of edits by eliminating operationally trivial equalities.
     * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
     */

    diff_match_patch.prototype.diff_cleanupEfficiency = function (diffs) {
      var changes = false;
      var equalities = []; // Stack of indices where equalities are found.

      var equalitiesLength = 0; // Keeping our own length var is faster in JS.

      /** @type {?string} */

      var lastequality = null; // Always equal to diffs[equalities[equalitiesLength - 1]][1]

      var pointer = 0; // Index of current position.
      // Is there an insertion operation before the last equality.

      var pre_ins = false; // Is there a deletion operation before the last equality.

      var pre_del = false; // Is there an insertion operation after the last equality.

      var post_ins = false; // Is there a deletion operation after the last equality.

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
            lastequality = null;
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
            diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]); // Change second copy to insert.

            diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
            equalitiesLength--; // Throw away the equality we just deleted;

            lastequality = null;

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
                } // Factor out any common suffixies.


                commonlength = this.diff_commonSuffix(text_insert, text_delete);

                if (commonlength !== 0) {
                  diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                  text_insert = text_insert.substring(0, text_insert.length - commonlength);
                  text_delete = text_delete.substring(0, text_delete.length - commonlength);
                }
              } // Delete the offending records and add the merged ones.


              if (count_delete === 0) {
                diffs.splice(pointer - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
              } else if (count_insert === 0) {
                diffs.splice(pointer - count_delete, count_delete + count_insert, [DIFF_DELETE, text_delete]);
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
      } // Second pass: look for single edits surrounded on both sides by equalities
      // which can be shifted sideways to eliminate an equality.
      // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC


      var changes = false;
      pointer = 1; // Intentionally ignore the first and last element (don't need checking).

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
      } // If shifts were made, the diff needs reordering and another shift sweep.


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
      } // Was the location was deleted?


      if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
        return last_chars2;
      } // Add the remaining character length.


      return last_chars2 + (loc - last_chars1);
    };
    /**
     * Convert a diff array into a pretty HTML report.
     * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
     * @return {string} HTML representation.
     */


    diff_match_patch.prototype.diff_prettyHtml = function (diffs) {
      var html = [];
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

          case '-': // Fall through.

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
    }; //  MATCH FUNCTIONS

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
      } // Initialise the alphabet.


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
      } // Highest score beyond which we give up.


      var score_threshold = this.Match_Threshold; // Is there a nearby exact match? (speedup)

      var best_loc = text.indexOf(pattern, loc);

      if (best_loc != -1) {
        score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold); // What about in the other direction? (speedup)

        best_loc = text.lastIndexOf(pattern, loc + pattern.length);

        if (best_loc != -1) {
          score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
        }
      } // Initialise the bit arrays.


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
        } // Use the result from this iteration as the maximum for the next.


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
            var score = match_bitapScore_(d, j - 1); // This match will almost certainly be better than any existing match.
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
        } // No hope for a (better) match at greater error levels.


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
    }; //  PATCH FUNCTIONS

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
      var padding = 0; // Look for the first and last matches of pattern in text.  If two different
      // matches are found, increase the pattern length.

      while (text.indexOf(pattern) != text.lastIndexOf(pattern) && pattern.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin) {
        padding += this.Patch_Margin;
        pattern = text.substring(patch.start2 - padding, patch.start2 + patch.length1 + padding);
      } // Add one chunk for good luck.


      padding += this.Patch_Margin; // Add the prefix.

      var prefix = text.substring(patch.start2 - padding, patch.start2);

      if (prefix) {
        patch.diffs.unshift([DIFF_EQUAL, prefix]);
      } // Add the suffix.


      var suffix = text.substring(patch.start2 + patch.length1, patch.start2 + patch.length1 + padding);

      if (suffix) {
        patch.diffs.push([DIFF_EQUAL, suffix]);
      } // Roll back the start points.


      patch.start1 -= prefix.length;
      patch.start2 -= prefix.length; // Extend the lengths.

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
     * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
     */


    diff_match_patch.prototype.patch_make = function (a, opt_b, opt_c) {
      var text1, diffs;

      if (typeof a == 'string' && typeof opt_b == 'string' && typeof opt_c == 'undefined') {
        // Method 1: text1, text2
        // Compute diffs from text1 and text2.
        text1 =
        /** @type {string} */
        a;
        diffs = this.diff_main(text1,
        /** @type {string} */
        opt_b, true);

        if (diffs.length > 2) {
          this.diff_cleanupSemantic(diffs);
          this.diff_cleanupEfficiency(diffs);
        }
      } else if (a && _typeof2(a) == 'object' && typeof opt_b == 'undefined' && typeof opt_c == 'undefined') {
        // Method 2: diffs
        // Compute text1 from diffs.
        diffs =
        /** @type {!Array.<!diff_match_patch.Diff>} */
        a;
        text1 = this.diff_text1(diffs);
      } else if (typeof a == 'string' && opt_b && _typeof2(opt_b) == 'object' && typeof opt_c == 'undefined') {
        // Method 3: text1, diffs
        text1 =
        /** @type {string} */
        a;
        diffs =
        /** @type {!Array.<!diff_match_patch.Diff>} */
        opt_b;
      } else if (typeof a == 'string' && typeof opt_b == 'string' && opt_c && _typeof2(opt_c) == 'object') {
        // Method 4: text1, text2, diffs
        // text2 is not used.
        text1 =
        /** @type {string} */
        a;
        diffs =
        /** @type {!Array.<!diff_match_patch.Diff>} */
        opt_c;
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
                patchDiffLength = 0; // Unlike Unidiff, our patch lists have a rolling context.
                // http://code.google.com/p/google-diff-match-patch/wiki/Unidiff
                // Update prepatch text & pos to reflect the application of the
                // just completed patch.

                prepatch_text = postpatch_text;
                char_count1 = char_count2;
              }
            }

            break;
        } // Update the current character count.


        if (diff_type !== DIFF_INSERT) {
          char_count1 += diff_text.length;
        }

        if (diff_type !== DIFF_DELETE) {
          char_count2 += diff_text.length;
        }
      } // Pick up the leftover patch if not empty.


      if (patchDiffLength) {
        this.patch_addContext_(patch, prepatch_text);
        patches.push(patch);
      }

      return patches;
    };
    /**
     * Given an array of patches, return another array that is identical.
     * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
     * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
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
     * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
     * @param {string} text Old text.
     * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
     *      new text and an array of boolean values.
     */


    diff_match_patch.prototype.patch_apply = function (patches, text) {
      if (patches.length == 0) {
        return [text, []];
      } // Deep copy the patches so that no changes are made to originals.


      patches = this.patch_deepCopy(patches);
      var nullPadding = this.patch_addPadding(patches);
      text = nullPadding + text + nullPadding;
      this.patch_splitMax(patches); // delta keeps track of the offset between the expected and actual location
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
          results[x] = false; // Subtract the delta for this failed patch from subsequent patches.

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
      } // Strip the padding off.


      text = text.substring(nullPadding.length, text.length - nullPadding.length);
      return [text, results];
    };
    /**
     * Add some padding on text start and end so that edges can match something.
     * Intended to be called only from within patch_apply.
     * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
     * @return {string} The padding string added to each side.
     */


    diff_match_patch.prototype.patch_addPadding = function (patches) {
      var paddingLength = this.Patch_Margin;
      var nullPadding = '';

      for (var x = 1; x <= paddingLength; x++) {
        nullPadding += String.fromCharCode(x);
      } // Bump all the patches forward.


      for (var x = 0; x < patches.length; x++) {
        patches[x].start1 += paddingLength;
        patches[x].start2 += paddingLength;
      } // Add some padding on start of first diff.


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
      } // Add some padding on end of last diff.


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
     * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
     */


    diff_match_patch.prototype.patch_splitMax = function (patches) {
      var patch_size = this.Match_MaxBits;

      for (var x = 0; x < patches.length; x++) {
        if (patches[x].length1 <= patch_size) {
          continue;
        }

        var bigpatch = patches[x]; // Remove the big old patch.

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
          } // Compute the head context for the next patch.


          precontext = this.diff_text2(patch.diffs);
          precontext = precontext.substring(precontext.length - this.Patch_Margin); // Append the end context for this patch.

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
    };
    /**
     * Take a list of patches and return a textual representation.
     * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
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
     * Parse a textual representation of patches and return a list of Patch objects.
     * @param {string} textline Text representation of patches.
     * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
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
          } else if (sign === '') {// Blank line?  Whatever.
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
      var op; // Escape the body of the patch with %xx notation.

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
    }; // The following export code was added by @ForbesLindesay


    module.exports = diff_match_patch;
    module.exports['diff_match_patch'] = diff_match_patch;
    module.exports['DIFF_DELETE'] = DIFF_DELETE;
    module.exports['DIFF_INSERT'] = DIFF_INSERT;
    module.exports['DIFF_EQUAL'] = DIFF_EQUAL;
  });
  /* global diff_match_patch */

  var TEXT_DIFF = 2;
  var DEFAULT_MIN_LENGTH = 60;
  var cachedDiffPatch = null;

  var getDiffMatchPatch = function getDiffMatchPatch(required) {
    /* jshint camelcase: false */
    if (!cachedDiffPatch) {
      var instance = void 0;
      /* eslint-disable camelcase, new-cap */

      if (typeof diff_match_patch !== 'undefined') {
        // already loaded, probably a browser
        instance = typeof diff_match_patch === 'function' ? new diff_match_patch() : new diff_match_patch.diff_match_patch();
      } else if (diffMatchPatch) {
        try {
          instance = diffMatchPatch && new diffMatchPatch();
        } catch (err) {
          instance = null;
        }
      }
      /* eslint-enable camelcase, new-cap */


      if (!instance) {
        if (!required) {
          return null;
        }

        var error = new Error('text diff_match_patch library not found'); // eslint-disable-next-line camelcase

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
              var _error = new Error('text patch failed');

              _error.textPatchFailed = true;
            }
          }

          return results[0];
        }
      };
    }

    return cachedDiffPatch;
  };

  var diffFilter$3 = function textsDiffFilter(context) {
    if (context.leftType !== 'string') {
      return;
    }

    var minLength = context.options && context.options.textDiff && context.options.textDiff.minLength || DEFAULT_MIN_LENGTH;

    if (context.left.length < minLength || context.right.length < minLength) {
      context.setResult([context.left, context.right]).exit();
      return;
    } // large text, try to use a text-diff algorithm


    var diffMatchPatch$$1 = getDiffMatchPatch();

    if (!diffMatchPatch$$1) {
      // diff-match-patch library not available,
      // fallback to regular string replace
      context.setResult([context.left, context.right]).exit();
      return;
    }

    var diff = diffMatchPatch$$1.diff;
    context.setResult([diff(context.left, context.right), 0, TEXT_DIFF]).exit();
  };

  diffFilter$3.filterName = 'texts';

  var patchFilter$3 = function textsPatchFilter(context) {
    if (context.nested) {
      return;
    }

    if (context.delta[2] !== TEXT_DIFF) {
      return;
    } // text-diff, use a text-patch algorithm


    var patch = getDiffMatchPatch(true).patch;
    context.setResult(patch(context.left, context.delta[0])).exit();
  };

  patchFilter$3.filterName = 'texts';

  var textDeltaReverse = function textDeltaReverse(delta) {
    var i = void 0;
    var l = void 0;
    var lines = void 0;
    var line = void 0;
    var lineTmp = void 0;
    var header = null;
    var headerRegex = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
    var lineHeader = void 0;
    lines = delta.split('\n');

    for (i = 0, l = lines.length; i < l; i++) {
      line = lines[i];
      var lineStart = line.slice(0, 1);

      if (lineStart === '@') {
        header = headerRegex.exec(line);
        lineHeader = i; // fix header

        lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
      } else if (lineStart === '+') {
        lines[i] = '-' + lines[i].slice(1);

        if (lines[i - 1].slice(0, 1) === '+') {
          // swap lines to keep default order (-+)
          lineTmp = lines[i];
          lines[i] = lines[i - 1];
          lines[i - 1] = lineTmp;
        }
      } else if (lineStart === '-') {
        lines[i] = '+' + lines[i].slice(1);
      }
    }

    return lines.join('\n');
  };

  var reverseFilter$3 = function textsReverseFilter(context) {
    if (context.nested) {
      return;
    }

    if (context.delta[2] !== TEXT_DIFF) {
      return;
    } // text-diff, use a text-diff algorithm


    context.setResult([textDeltaReverse(context.delta[0]), 0, TEXT_DIFF]).exit();
  };

  reverseFilter$3.filterName = 'texts';

  var DiffPatcher = function () {
    function DiffPatcher(options) {
      classCallCheck(this, DiffPatcher);
      this.processor = new Processor(options);
      this.processor.pipe(new Pipe('diff').append(collectChildrenDiffFilter, diffFilter, diffFilter$2, diffFilter$3, objectsDiffFilter, diffFilter$1).shouldHaveResult());
      this.processor.pipe(new Pipe('patch').append(collectChildrenPatchFilter, collectChildrenPatchFilter$1, patchFilter, patchFilter$3, patchFilter$1, patchFilter$2).shouldHaveResult());
      this.processor.pipe(new Pipe('reverse').append(collectChildrenReverseFilter, collectChildrenReverseFilter$1, reverseFilter, reverseFilter$3, reverseFilter$1, reverseFilter$2).shouldHaveResult());
    }

    createClass(DiffPatcher, [{
      key: 'options',
      value: function options() {
        var _processor;

        return (_processor = this.processor).options.apply(_processor, arguments);
      }
    }, {
      key: 'diff',
      value: function diff(left, right) {
        return this.processor.process(new DiffContext(left, right));
      }
    }, {
      key: 'patch',
      value: function patch(left, delta) {
        return this.processor.process(new PatchContext(left, delta));
      }
    }, {
      key: 'reverse',
      value: function reverse(delta) {
        return this.processor.process(new ReverseContext(delta));
      }
    }, {
      key: 'unpatch',
      value: function unpatch(right, delta) {
        return this.patch(right, this.reverse(delta));
      }
    }, {
      key: 'clone',
      value: function clone$$1(value) {
        return clone(value);
      }
    }]);
    return DiffPatcher;
  }();

  var isArray$3 = typeof Array.isArray === 'function' ? Array.isArray : function (a) {
    return a instanceof Array;
  };
  var getObjectKeys = typeof Object.keys === 'function' ? function (obj) {
    return Object.keys(obj);
  } : function (obj) {
    var names = [];

    for (var property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        names.push(property);
      }
    }

    return names;
  };

  var trimUnderscore = function trimUnderscore(str) {
    if (str.substr(0, 1) === '_') {
      return str.slice(1);
    }

    return str;
  };

  var arrayKeyToSortNumber = function arrayKeyToSortNumber(key) {
    if (key === '_t') {
      return -1;
    } else {
      if (key.substr(0, 1) === '_') {
        return parseInt(key.slice(1), 10);
      } else {
        return parseInt(key, 10) + 0.1;
      }
    }
  };

  var arrayKeyComparer = function arrayKeyComparer(key1, key2) {
    return arrayKeyToSortNumber(key1) - arrayKeyToSortNumber(key2);
  };

  var BaseFormatter = function () {
    function BaseFormatter() {
      classCallCheck(this, BaseFormatter);
    }

    createClass(BaseFormatter, [{
      key: 'format',
      value: function format(delta, left) {
        var context = {};
        this.prepareContext(context);
        this.recurse(context, delta, left);
        return this.finalize(context);
      }
    }, {
      key: 'prepareContext',
      value: function prepareContext(context) {
        context.buffer = [];

        context.out = function () {
          var _buffer;

          (_buffer = this.buffer).push.apply(_buffer, arguments);
        };
      }
    }, {
      key: 'typeFormattterNotFound',
      value: function typeFormattterNotFound(context, deltaType) {
        throw new Error('cannot format delta type: ' + deltaType);
      }
    }, {
      key: 'typeFormattterErrorFormatter',
      value: function typeFormattterErrorFormatter(context, err) {
        return err.toString();
      }
    }, {
      key: 'finalize',
      value: function finalize(_ref) {
        var buffer = _ref.buffer;

        if (isArray$3(buffer)) {
          return buffer.join('');
        }
      }
    }, {
      key: 'recurse',
      value: function recurse(context, delta, left, key, leftKey, movedFrom, isLast) {
        var useMoveOriginHere = delta && movedFrom;
        var leftValue = useMoveOriginHere ? movedFrom.value : left;

        if (typeof delta === 'undefined' && typeof key === 'undefined') {
          return undefined;
        }

        var type = this.getDeltaType(delta, movedFrom);
        var nodeType = type === 'node' ? delta._t === 'a' ? 'array' : 'object' : '';

        if (typeof key !== 'undefined') {
          this.nodeBegin(context, key, leftKey, type, nodeType, isLast);
        } else {
          this.rootBegin(context, type, nodeType);
        }

        var typeFormattter = void 0;

        try {
          typeFormattter = this['format_' + type] || this.typeFormattterNotFound(context, type);
          typeFormattter.call(this, context, delta, leftValue, key, leftKey, movedFrom);
        } catch (err) {
          this.typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom);

          if (typeof console !== 'undefined' && console.error) {
            console.error(err.stack);
          }
        }

        if (typeof key !== 'undefined') {
          this.nodeEnd(context, key, leftKey, type, nodeType, isLast);
        } else {
          this.rootEnd(context, type, nodeType);
        }
      }
    }, {
      key: 'formatDeltaChildren',
      value: function formatDeltaChildren(context, delta, left) {
        var self = this;
        this.forEachDeltaKey(delta, left, function (key, leftKey, movedFrom, isLast) {
          self.recurse(context, delta[key], left ? left[leftKey] : undefined, key, leftKey, movedFrom, isLast);
        });
      }
    }, {
      key: 'forEachDeltaKey',
      value: function forEachDeltaKey(delta, left, fn) {
        var keys = getObjectKeys(delta);
        var arrayKeys = delta._t === 'a';
        var moveDestinations = {};
        var name = void 0;

        if (typeof left !== 'undefined') {
          for (name in left) {
            if (Object.prototype.hasOwnProperty.call(left, name)) {
              if (typeof delta[name] === 'undefined' && (!arrayKeys || typeof delta['_' + name] === 'undefined')) {
                keys.push(name);
              }
            }
          }
        } // look for move destinations


        for (name in delta) {
          if (Object.prototype.hasOwnProperty.call(delta, name)) {
            var value = delta[name];

            if (isArray$3(value) && value[2] === 3) {
              moveDestinations[value[1].toString()] = {
                key: name,
                value: left && left[parseInt(name.substr(1))]
              };

              if (this.includeMoveDestinations !== false) {
                if (typeof left === 'undefined' && typeof delta[value[1]] === 'undefined') {
                  keys.push(value[1].toString());
                }
              }
            }
          }
        }

        if (arrayKeys) {
          keys.sort(arrayKeyComparer);
        } else {
          keys.sort();
        }

        for (var index = 0, length = keys.length; index < length; index++) {
          var key = keys[index];

          if (arrayKeys && key === '_t') {
            continue;
          }

          var leftKey = arrayKeys ? typeof key === 'number' ? key : parseInt(trimUnderscore(key), 10) : key;
          var isLast = index === length - 1;
          fn(key, leftKey, moveDestinations[leftKey], isLast);
        }
      }
    }, {
      key: 'getDeltaType',
      value: function getDeltaType(delta, movedFrom) {
        if (typeof delta === 'undefined') {
          if (typeof movedFrom !== 'undefined') {
            return 'movedestination';
          }

          return 'unchanged';
        }

        if (isArray$3(delta)) {
          if (delta.length === 1) {
            return 'added';
          }

          if (delta.length === 2) {
            return 'modified';
          }

          if (delta.length === 3 && delta[2] === 0) {
            return 'deleted';
          }

          if (delta.length === 3 && delta[2] === 2) {
            return 'textdiff';
          }

          if (delta.length === 3 && delta[2] === 3) {
            return 'moved';
          }
        } else if ((typeof delta === 'undefined' ? 'undefined' : _typeof(delta)) === 'object') {
          return 'node';
        }

        return 'unknown';
      }
    }, {
      key: 'parseTextDiff',
      value: function parseTextDiff(value) {
        var output = [];
        var lines = value.split('\n@@ ');

        for (var i = 0, l = lines.length; i < l; i++) {
          var line = lines[i];
          var lineOutput = {
            pieces: []
          };
          var location = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(line).slice(1);
          lineOutput.location = {
            line: location[0],
            chr: location[1]
          };
          var pieces = line.split('\n').slice(1);

          for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
            var piece = pieces[pieceIndex];

            if (!piece.length) {
              continue;
            }

            var pieceOutput = {
              type: 'context'
            };

            if (piece.substr(0, 1) === '+') {
              pieceOutput.type = 'added';
            } else if (piece.substr(0, 1) === '-') {
              pieceOutput.type = 'deleted';
            }

            pieceOutput.text = piece.slice(1);
            lineOutput.pieces.push(pieceOutput);
          }

          output.push(lineOutput);
        }

        return output;
      }
    }]);
    return BaseFormatter;
  }();

  var base = Object.freeze({
    "default": BaseFormatter
  });

  var HtmlFormatter = function (_BaseFormatter) {
    inherits(HtmlFormatter, _BaseFormatter);

    function HtmlFormatter() {
      classCallCheck(this, HtmlFormatter);
      return possibleConstructorReturn(this, (HtmlFormatter.__proto__ || Object.getPrototypeOf(HtmlFormatter)).apply(this, arguments));
    }

    createClass(HtmlFormatter, [{
      key: 'typeFormattterErrorFormatter',
      value: function typeFormattterErrorFormatter(context, err) {
        context.out('<pre class="jsondiffpatch-error">' + err + '</pre>');
      }
    }, {
      key: 'formatValue',
      value: function formatValue(context, value) {
        context.out('<pre>' + htmlEscape(JSON.stringify(value, null, 2)) + '</pre>');
      }
    }, {
      key: 'formatTextDiffString',
      value: function formatTextDiffString(context, value) {
        var lines = this.parseTextDiff(value);
        context.out('<ul class="jsondiffpatch-textdiff">');

        for (var i = 0, l = lines.length; i < l; i++) {
          var line = lines[i];
          context.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + line.location.line + '</span><span class="jsondiffpatch-textdiff-char">' + line.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">'));
          var pieces = line.pieces;

          for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
            /* global decodeURI */
            var piece = pieces[pieceIndex];
            context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' + htmlEscape(decodeURI(piece.text)) + '</span>');
          }

          context.out('</div></li>');
        }

        context.out('</ul>');
      }
    }, {
      key: 'rootBegin',
      value: function rootBegin(context, type, nodeType) {
        var nodeClass = 'jsondiffpatch-' + type + (nodeType ? ' jsondiffpatch-child-node-type-' + nodeType : '');
        context.out('<div class="jsondiffpatch-delta ' + nodeClass + '">');
      }
    }, {
      key: 'rootEnd',
      value: function rootEnd(context) {
        context.out('</div>' + (context.hasArrows ? '<script type="text/javascript">setTimeout(' + (adjustArrows.toString() + ',10);</script>') : ''));
      }
    }, {
      key: 'nodeBegin',
      value: function nodeBegin(context, key, leftKey, type, nodeType) {
        var nodeClass = 'jsondiffpatch-' + type + (nodeType ? ' jsondiffpatch-child-node-type-' + nodeType : '');
        context.out('<li class="' + nodeClass + '" data-key="' + leftKey + '">' + ('<div class="jsondiffpatch-property-name">' + leftKey + '</div>'));
      }
    }, {
      key: 'nodeEnd',
      value: function nodeEnd(context) {
        context.out('</li>');
      }
      /* jshint camelcase: false */

      /* eslint-disable camelcase */

    }, {
      key: 'format_unchanged',
      value: function format_unchanged(context, delta, left) {
        if (typeof left === 'undefined') {
          return;
        }

        context.out('<div class="jsondiffpatch-value">');
        this.formatValue(context, left);
        context.out('</div>');
      }
    }, {
      key: 'format_movedestination',
      value: function format_movedestination(context, delta, left) {
        if (typeof left === 'undefined') {
          return;
        }

        context.out('<div class="jsondiffpatch-value">');
        this.formatValue(context, left);
        context.out('</div>');
      }
    }, {
      key: 'format_node',
      value: function format_node(context, delta, left) {
        // recurse
        var nodeType = delta._t === 'a' ? 'array' : 'object';
        context.out('<ul class="jsondiffpatch-node jsondiffpatch-node-type-' + nodeType + '">');
        this.formatDeltaChildren(context, delta, left);
        context.out('</ul>');
      }
    }, {
      key: 'format_added',
      value: function format_added(context, delta) {
        context.out('<div class="jsondiffpatch-value">');
        this.formatValue(context, delta[0]);
        context.out('</div>');
      }
    }, {
      key: 'format_modified',
      value: function format_modified(context, delta) {
        context.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">');
        this.formatValue(context, delta[0]);
        context.out('</div>' + '<div class="jsondiffpatch-value jsondiffpatch-right-value">');
        this.formatValue(context, delta[1]);
        context.out('</div>');
      }
    }, {
      key: 'format_deleted',
      value: function format_deleted(context, delta) {
        context.out('<div class="jsondiffpatch-value">');
        this.formatValue(context, delta[0]);
        context.out('</div>');
      }
    }, {
      key: 'format_moved',
      value: function format_moved(context, delta) {
        context.out('<div class="jsondiffpatch-value">');
        this.formatValue(context, delta[0]);
        context.out('</div><div class="jsondiffpatch-moved-destination">' + delta[1] + '</div>'); // draw an SVG arrow from here to move destination

        context.out(
        /* jshint multistr: true */
        '<div class="jsondiffpatch-arrow" ' + 'style="position: relative; left: -34px;">\n          <svg width="30" height="60" ' + 'style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; ' + 'stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>');
        context.hasArrows = true;
      }
    }, {
      key: 'format_textdiff',
      value: function format_textdiff(context, delta) {
        context.out('<div class="jsondiffpatch-value">');
        this.formatTextDiffString(context, delta[0]);
        context.out('</div>');
      }
    }]);
    return HtmlFormatter;
  }(BaseFormatter);

  function htmlEscape(text) {
    var html = text;
    var replacements = [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/'/g, '&apos;'], [/"/g, '&quot;']];

    for (var i = 0; i < replacements.length; i++) {
      html = html.replace(replacements[i][0], replacements[i][1]);
    }

    return html;
  }

  var adjustArrows = function jsondiffpatchHtmlFormatterAdjustArrows(nodeArg) {
    var node = nodeArg || document;

    var getElementText = function getElementText(_ref) {
      var textContent = _ref.textContent,
          innerText = _ref.innerText;
      return textContent || innerText;
    };

    var eachByQuery = function eachByQuery(el, query, fn) {
      var elems = el.querySelectorAll(query);

      for (var i = 0, l = elems.length; i < l; i++) {
        fn(elems[i]);
      }
    };

    var eachChildren = function eachChildren(_ref2, fn) {
      var children = _ref2.children;

      for (var i = 0, l = children.length; i < l; i++) {
        fn(children[i], i);
      }
    };

    eachByQuery(node, '.jsondiffpatch-arrow', function (_ref3) {
      var parentNode = _ref3.parentNode,
          children = _ref3.children,
          style = _ref3.style;
      var arrowParent = parentNode;
      var svg = children[0];
      var path = svg.children[1];
      svg.style.display = 'none';
      var destination = getElementText(arrowParent.querySelector('.jsondiffpatch-moved-destination'));
      var container = arrowParent.parentNode;
      var destinationElem = void 0;
      eachChildren(container, function (child) {
        if (child.getAttribute('data-key') === destination) {
          destinationElem = child;
        }
      });

      if (!destinationElem) {
        return;
      }

      try {
        var distance = destinationElem.offsetTop - arrowParent.offsetTop;
        svg.setAttribute('height', Math.abs(distance) + 6);
        style.top = -8 + (distance > 0 ? 0 : distance) + 'px';
        var curve = distance > 0 ? 'M30,0 Q-10,' + Math.round(distance / 2) + ' 26,' + (distance - 4) : 'M30,' + -distance + ' Q-10,' + Math.round(-distance / 2) + ' 26,4';
        path.setAttribute('d', curve);
        svg.style.display = '';
      } catch (err) {}
    });
  };
  /* jshint camelcase: true */

  /* eslint-enable camelcase */


  var showUnchanged = function showUnchanged(show, node, delay) {
    var el = node || document.body;
    var prefix = 'jsondiffpatch-unchanged-';
    var classes = {
      showing: prefix + 'showing',
      hiding: prefix + 'hiding',
      visible: prefix + 'visible',
      hidden: prefix + 'hidden'
    };
    var list = el.classList;

    if (!list) {
      return;
    }

    if (!delay) {
      list.remove(classes.showing);
      list.remove(classes.hiding);
      list.remove(classes.visible);
      list.remove(classes.hidden);

      if (show === false) {
        list.add(classes.hidden);
      }

      return;
    }

    if (show === false) {
      list.remove(classes.showing);
      list.add(classes.visible);
      setTimeout(function () {
        list.add(classes.hiding);
      }, 10);
    } else {
      list.remove(classes.hiding);
      list.add(classes.showing);
      list.remove(classes.hidden);
    }

    var intervalId = setInterval(function () {
      adjustArrows(el);
    }, 100);
    setTimeout(function () {
      list.remove(classes.showing);
      list.remove(classes.hiding);

      if (show === false) {
        list.add(classes.hidden);
        list.remove(classes.visible);
      } else {
        list.add(classes.visible);
        list.remove(classes.hidden);
      }

      setTimeout(function () {
        list.remove(classes.visible);
        clearInterval(intervalId);
      }, delay + 400);
    }, delay);
  };

  var hideUnchanged = function hideUnchanged(node, delay) {
    return showUnchanged(false, node, delay);
  };

  var defaultInstance = void 0;

  function format(delta, left) {
    if (!defaultInstance) {
      defaultInstance = new HtmlFormatter();
    }

    return defaultInstance.format(delta, left);
  }

  var html = Object.freeze({
    showUnchanged: showUnchanged,
    hideUnchanged: hideUnchanged,
    "default": HtmlFormatter,
    format: format
  });

  var AnnotatedFormatter = function (_BaseFormatter) {
    inherits(AnnotatedFormatter, _BaseFormatter);

    function AnnotatedFormatter() {
      classCallCheck(this, AnnotatedFormatter);

      var _this = possibleConstructorReturn(this, (AnnotatedFormatter.__proto__ || Object.getPrototypeOf(AnnotatedFormatter)).call(this));

      _this.includeMoveDestinations = false;
      return _this;
    }

    createClass(AnnotatedFormatter, [{
      key: 'prepareContext',
      value: function prepareContext(context) {
        get(AnnotatedFormatter.prototype.__proto__ || Object.getPrototypeOf(AnnotatedFormatter.prototype), 'prepareContext', this).call(this, context);

        context.indent = function (levels) {
          this.indentLevel = (this.indentLevel || 0) + (typeof levels === 'undefined' ? 1 : levels);
          this.indentPad = new Array(this.indentLevel + 1).join('&nbsp;&nbsp;');
        };

        context.row = function (json, htmlNote) {
          context.out('<tr><td style="white-space: nowrap;">' + '<pre class="jsondiffpatch-annotated-indent"' + ' style="display: inline-block">');
          context.out(context.indentPad);
          context.out('</pre><pre style="display: inline-block">');
          context.out(json);
          context.out('</pre></td><td class="jsondiffpatch-delta-note"><div>');
          context.out(htmlNote);
          context.out('</div></td></tr>');
        };
      }
    }, {
      key: 'typeFormattterErrorFormatter',
      value: function typeFormattterErrorFormatter(context, err) {
        context.row('', '<pre class="jsondiffpatch-error">' + err + '</pre>');
      }
    }, {
      key: 'formatTextDiffString',
      value: function formatTextDiffString(context, value) {
        var lines = this.parseTextDiff(value);
        context.out('<ul class="jsondiffpatch-textdiff">');

        for (var i = 0, l = lines.length; i < l; i++) {
          var line = lines[i];
          context.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + line.location.line + '</span><span class="jsondiffpatch-textdiff-char">' + line.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">'));
          var pieces = line.pieces;

          for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
            var piece = pieces[pieceIndex];
            context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' + piece.text + '</span>');
          }

          context.out('</div></li>');
        }

        context.out('</ul>');
      }
    }, {
      key: 'rootBegin',
      value: function rootBegin(context, type, nodeType) {
        context.out('<table class="jsondiffpatch-annotated-delta">');

        if (type === 'node') {
          context.row('{');
          context.indent();
        }

        if (nodeType === 'array') {
          context.row('"_t": "a",', 'Array delta (member names indicate array indices)');
        }
      }
    }, {
      key: 'rootEnd',
      value: function rootEnd(context, type) {
        if (type === 'node') {
          context.indent(-1);
          context.row('}');
        }

        context.out('</table>');
      }
    }, {
      key: 'nodeBegin',
      value: function nodeBegin(context, key, leftKey, type, nodeType) {
        context.row('&quot;' + key + '&quot;: {');

        if (type === 'node') {
          context.indent();
        }

        if (nodeType === 'array') {
          context.row('"_t": "a",', 'Array delta (member names indicate array indices)');
        }
      }
    }, {
      key: 'nodeEnd',
      value: function nodeEnd(context, key, leftKey, type, nodeType, isLast) {
        if (type === 'node') {
          context.indent(-1);
        }

        context.row('}' + (isLast ? '' : ','));
      }
      /* jshint camelcase: false */

      /* eslint-disable camelcase */

    }, {
      key: 'format_unchanged',
      value: function format_unchanged() {}
    }, {
      key: 'format_movedestination',
      value: function format_movedestination() {}
    }, {
      key: 'format_node',
      value: function format_node(context, delta, left) {
        // recurse
        this.formatDeltaChildren(context, delta, left);
      }
    }]);
    return AnnotatedFormatter;
  }(BaseFormatter);
  /* eslint-enable camelcase */


  var wrapPropertyName = function wrapPropertyName(name) {
    return '<pre style="display:inline-block">&quot;' + name + '&quot;</pre>';
  };

  var deltaAnnotations = {
    added: function added(delta, left, key, leftKey) {
      var formatLegend = ' <pre>([newValue])</pre>';

      if (typeof leftKey === 'undefined') {
        return 'new value' + formatLegend;
      }

      if (typeof leftKey === 'number') {
        return 'insert at index ' + leftKey + formatLegend;
      }

      return 'add property ' + wrapPropertyName(leftKey) + formatLegend;
    },
    modified: function modified(delta, left, key, leftKey) {
      var formatLegend = ' <pre>([previousValue, newValue])</pre>';

      if (typeof leftKey === 'undefined') {
        return 'modify value' + formatLegend;
      }

      if (typeof leftKey === 'number') {
        return 'modify at index ' + leftKey + formatLegend;
      }

      return 'modify property ' + wrapPropertyName(leftKey) + formatLegend;
    },
    deleted: function deleted(delta, left, key, leftKey) {
      var formatLegend = ' <pre>([previousValue, 0, 0])</pre>';

      if (typeof leftKey === 'undefined') {
        return 'delete value' + formatLegend;
      }

      if (typeof leftKey === 'number') {
        return 'remove index ' + leftKey + formatLegend;
      }

      return 'delete property ' + wrapPropertyName(leftKey) + formatLegend;
    },
    moved: function moved(delta, left, key, leftKey) {
      return 'move from <span title="(position to remove at original state)">' + ('index ' + leftKey + '</span> to <span title="(position to insert at final') + (' state)">index ' + delta[1] + '</span>');
    },
    textdiff: function textdiff(delta, left, key, leftKey) {
      var location = typeof leftKey === 'undefined' ? '' : typeof leftKey === 'number' ? ' at index ' + leftKey : ' at property ' + wrapPropertyName(leftKey);
      return 'text diff' + location + ', format is <a href="https://code.google.com/' + 'p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>';
    }
  };

  var formatAnyChange = function formatAnyChange(context, delta) {
    var deltaType = this.getDeltaType(delta);
    var annotator = deltaAnnotations[deltaType];
    var htmlNote = annotator && annotator.apply(annotator, Array.prototype.slice.call(arguments, 1));
    var json = JSON.stringify(delta, null, 2);

    if (deltaType === 'textdiff') {
      // split text diffs lines
      json = json.split('\\n').join('\\n"+\n   "');
    }

    context.indent();
    context.row(json, htmlNote);
    context.indent(-1);
  };
  /* eslint-disable camelcase */


  AnnotatedFormatter.prototype.format_added = formatAnyChange;
  AnnotatedFormatter.prototype.format_modified = formatAnyChange;
  AnnotatedFormatter.prototype.format_deleted = formatAnyChange;
  AnnotatedFormatter.prototype.format_moved = formatAnyChange;
  AnnotatedFormatter.prototype.format_textdiff = formatAnyChange;
  var defaultInstance$1 = void 0;

  function format$1(delta, left) {
    if (!defaultInstance$1) {
      defaultInstance$1 = new AnnotatedFormatter();
    }

    return defaultInstance$1.format(delta, left);
  }

  var annotated = Object.freeze({
    "default": AnnotatedFormatter,
    format: format$1
  });
  var OPERATIONS = {
    add: 'add',
    remove: 'remove',
    replace: 'replace',
    move: 'move'
  };

  var JSONFormatter = function (_BaseFormatter) {
    inherits(JSONFormatter, _BaseFormatter);

    function JSONFormatter() {
      classCallCheck(this, JSONFormatter);

      var _this = possibleConstructorReturn(this, (JSONFormatter.__proto__ || Object.getPrototypeOf(JSONFormatter)).call(this));

      _this.includeMoveDestinations = true;
      return _this;
    }

    createClass(JSONFormatter, [{
      key: 'prepareContext',
      value: function prepareContext(context) {
        get(JSONFormatter.prototype.__proto__ || Object.getPrototypeOf(JSONFormatter.prototype), 'prepareContext', this).call(this, context);
        context.result = [];
        context.path = [];

        context.pushCurrentOp = function (obj) {
          var op = obj.op,
              value = obj.value;
          var val = {
            op: op,
            path: this.currentPath()
          };

          if (typeof value !== 'undefined') {
            val.value = value;
          }

          this.result.push(val);
        };

        context.pushMoveOp = function (to) {
          var from = this.currentPath();
          this.result.push({
            op: OPERATIONS.move,
            from: from,
            path: this.toPath(to)
          });
        };

        context.currentPath = function () {
          return '/' + this.path.join('/');
        };

        context.toPath = function (toPath) {
          var to = this.path.slice();
          to[to.length - 1] = toPath;
          return '/' + to.join('/');
        };
      }
    }, {
      key: 'typeFormattterErrorFormatter',
      value: function typeFormattterErrorFormatter(context, err) {
        context.out('[ERROR] ' + err);
      }
    }, {
      key: 'rootBegin',
      value: function rootBegin() {}
    }, {
      key: 'rootEnd',
      value: function rootEnd() {}
    }, {
      key: 'nodeBegin',
      value: function nodeBegin(_ref, key, leftKey) {
        var path = _ref.path;
        path.push(leftKey);
      }
    }, {
      key: 'nodeEnd',
      value: function nodeEnd(_ref2) {
        var path = _ref2.path;
        path.pop();
      }
      /* jshint camelcase: false */

      /* eslint-disable camelcase */

    }, {
      key: 'format_unchanged',
      value: function format_unchanged() {}
    }, {
      key: 'format_movedestination',
      value: function format_movedestination() {}
    }, {
      key: 'format_node',
      value: function format_node(context, delta, left) {
        this.formatDeltaChildren(context, delta, left);
      }
    }, {
      key: 'format_added',
      value: function format_added(context, delta) {
        context.pushCurrentOp({
          op: OPERATIONS.add,
          value: delta[0]
        });
      }
    }, {
      key: 'format_modified',
      value: function format_modified(context, delta) {
        context.pushCurrentOp({
          op: OPERATIONS.replace,
          value: delta[1]
        });
      }
    }, {
      key: 'format_deleted',
      value: function format_deleted(context) {
        context.pushCurrentOp({
          op: OPERATIONS.remove
        });
      }
    }, {
      key: 'format_moved',
      value: function format_moved(context, delta) {
        var to = delta[1];
        context.pushMoveOp(to);
      }
    }, {
      key: 'format_textdiff',
      value: function format_textdiff() {
        throw new Error('Not implemented');
      }
    }, {
      key: 'format',
      value: function format(delta, left) {
        var context = {};
        this.prepareContext(context);
        this.recurse(context, delta, left);
        return context.result;
      }
    }]);
    return JSONFormatter;
  }(BaseFormatter);

  var last = function last(arr) {
    return arr[arr.length - 1];
  };

  var sortBy = function sortBy(arr, pred) {
    arr.sort(pred);
    return arr;
  };

  var compareByIndexDesc = function compareByIndexDesc(indexA, indexB) {
    var lastA = parseInt(indexA, 10);
    var lastB = parseInt(indexB, 10);

    if (!(isNaN(lastA) || isNaN(lastB))) {
      return lastB - lastA;
    } else {
      return 0;
    }
  };

  var opsByDescendingOrder = function opsByDescendingOrder(removeOps) {
    return sortBy(removeOps, function (a, b) {
      var splitA = a.path.split('/');
      var splitB = b.path.split('/');

      if (splitA.length !== splitB.length) {
        return splitA.length - splitB.length;
      } else {
        return compareByIndexDesc(last(splitA), last(splitB));
      }
    });
  };

  var partitionOps = function partitionOps(arr, fns) {
    var initArr = Array(fns.length + 1).fill().map(function () {
      return [];
    });
    return arr.map(function (item) {
      var position = fns.map(function (fn) {
        return fn(item);
      }).indexOf(true);

      if (position < 0) {
        position = fns.length;
      }

      return {
        item: item,
        position: position
      };
    }).reduce(function (acc, item) {
      acc[item.position].push(item.item);
      return acc;
    }, initArr);
  };

  var isMoveOp = function isMoveOp(_ref3) {
    var op = _ref3.op;
    return op === 'move';
  };

  var isRemoveOp = function isRemoveOp(_ref4) {
    var op = _ref4.op;
    return op === 'remove';
  };

  var reorderOps = function reorderOps(diff) {
    var _partitionOps = partitionOps(diff, [isMoveOp, isRemoveOp]),
        _partitionOps2 = slicedToArray(_partitionOps, 3),
        moveOps = _partitionOps2[0],
        removedOps = _partitionOps2[1],
        restOps = _partitionOps2[2];

    var removeOpsReverse = opsByDescendingOrder(removedOps);
    return [].concat(toConsumableArray(removeOpsReverse), toConsumableArray(moveOps), toConsumableArray(restOps));
  };

  var defaultInstance$2 = void 0;

  var format$2 = function format(delta, left) {
    if (!defaultInstance$2) {
      defaultInstance$2 = new JSONFormatter();
    }

    return reorderOps(defaultInstance$2.format(delta, left));
  };

  var log = function log(delta, left) {
    console.log(format$2(delta, left));
  };

  var jsonpatch = Object.freeze({
    "default": JSONFormatter,
    partitionOps: partitionOps,
    format: format$2,
    log: log
  });

  function chalkColor(name) {
    return chalk && chalk[name] || function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args;
    };
  }

  var colors = {
    added: chalkColor('green'),
    deleted: chalkColor('red'),
    movedestination: chalkColor('gray'),
    moved: chalkColor('yellow'),
    unchanged: chalkColor('gray'),
    error: chalkColor('white.bgRed'),
    textDiffLine: chalkColor('gray')
  };

  var ConsoleFormatter = function (_BaseFormatter) {
    inherits(ConsoleFormatter, _BaseFormatter);

    function ConsoleFormatter() {
      classCallCheck(this, ConsoleFormatter);

      var _this = possibleConstructorReturn(this, (ConsoleFormatter.__proto__ || Object.getPrototypeOf(ConsoleFormatter)).call(this));

      _this.includeMoveDestinations = false;
      return _this;
    }

    createClass(ConsoleFormatter, [{
      key: 'prepareContext',
      value: function prepareContext(context) {
        get(ConsoleFormatter.prototype.__proto__ || Object.getPrototypeOf(ConsoleFormatter.prototype), 'prepareContext', this).call(this, context);

        context.indent = function (levels) {
          this.indentLevel = (this.indentLevel || 0) + (typeof levels === 'undefined' ? 1 : levels);
          this.indentPad = new Array(this.indentLevel + 1).join('  ');
          this.outLine();
        };

        context.outLine = function () {
          this.buffer.push('\n' + (this.indentPad || ''));
        };

        context.out = function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          for (var i = 0, l = args.length; i < l; i++) {
            var lines = args[i].split('\n');
            var text = lines.join('\n' + (this.indentPad || ''));

            if (this.color && this.color[0]) {
              text = this.color[0](text);
            }

            this.buffer.push(text);
          }
        };

        context.pushColor = function (color) {
          this.color = this.color || [];
          this.color.unshift(color);
        };

        context.popColor = function () {
          this.color = this.color || [];
          this.color.shift();
        };
      }
    }, {
      key: 'typeFormattterErrorFormatter',
      value: function typeFormattterErrorFormatter(context, err) {
        context.pushColor(colors.error);
        context.out('[ERROR]' + err);
        context.popColor();
      }
    }, {
      key: 'formatValue',
      value: function formatValue(context, value) {
        context.out(JSON.stringify(value, null, 2));
      }
    }, {
      key: 'formatTextDiffString',
      value: function formatTextDiffString(context, value) {
        var lines = this.parseTextDiff(value);
        context.indent();

        for (var i = 0, l = lines.length; i < l; i++) {
          var line = lines[i];
          context.pushColor(colors.textDiffLine);
          context.out(line.location.line + ',' + line.location.chr + ' ');
          context.popColor();
          var pieces = line.pieces;

          for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
            var piece = pieces[pieceIndex];
            context.pushColor(colors[piece.type]);
            context.out(piece.text);
            context.popColor();
          }

          if (i < l - 1) {
            context.outLine();
          }
        }

        context.indent(-1);
      }
    }, {
      key: 'rootBegin',
      value: function rootBegin(context, type, nodeType) {
        context.pushColor(colors[type]);

        if (type === 'node') {
          context.out(nodeType === 'array' ? '[' : '{');
          context.indent();
        }
      }
    }, {
      key: 'rootEnd',
      value: function rootEnd(context, type, nodeType) {
        if (type === 'node') {
          context.indent(-1);
          context.out(nodeType === 'array' ? ']' : '}');
        }

        context.popColor();
      }
    }, {
      key: 'nodeBegin',
      value: function nodeBegin(context, key, leftKey, type, nodeType) {
        context.pushColor(colors[type]);
        context.out(leftKey + ': ');

        if (type === 'node') {
          context.out(nodeType === 'array' ? '[' : '{');
          context.indent();
        }
      }
    }, {
      key: 'nodeEnd',
      value: function nodeEnd(context, key, leftKey, type, nodeType, isLast) {
        if (type === 'node') {
          context.indent(-1);
          context.out(nodeType === 'array' ? ']' : '}' + (isLast ? '' : ','));
        }

        if (!isLast) {
          context.outLine();
        }

        context.popColor();
      }
      /* jshint camelcase: false */

      /* eslint-disable camelcase */

    }, {
      key: 'format_unchanged',
      value: function format_unchanged(context, delta, left) {
        if (typeof left === 'undefined') {
          return;
        }

        this.formatValue(context, left);
      }
    }, {
      key: 'format_movedestination',
      value: function format_movedestination(context, delta, left) {
        if (typeof left === 'undefined') {
          return;
        }

        this.formatValue(context, left);
      }
    }, {
      key: 'format_node',
      value: function format_node(context, delta, left) {
        // recurse
        this.formatDeltaChildren(context, delta, left);
      }
    }, {
      key: 'format_added',
      value: function format_added(context, delta) {
        this.formatValue(context, delta[0]);
      }
    }, {
      key: 'format_modified',
      value: function format_modified(context, delta) {
        context.pushColor(colors.deleted);
        this.formatValue(context, delta[0]);
        context.popColor();
        context.out(' => ');
        context.pushColor(colors.added);
        this.formatValue(context, delta[1]);
        context.popColor();
      }
    }, {
      key: 'format_deleted',
      value: function format_deleted(context, delta) {
        this.formatValue(context, delta[0]);
      }
    }, {
      key: 'format_moved',
      value: function format_moved(context, delta) {
        context.out('==> ' + delta[1]);
      }
    }, {
      key: 'format_textdiff',
      value: function format_textdiff(context, delta) {
        this.formatTextDiffString(context, delta[0]);
      }
    }]);
    return ConsoleFormatter;
  }(BaseFormatter);

  var defaultInstance$3 = void 0;

  var format$3 = function format(delta, left) {
    if (!defaultInstance$3) {
      defaultInstance$3 = new ConsoleFormatter();
    }

    return defaultInstance$3.format(delta, left);
  };

  function log$1(delta, left) {
    console.log(format$3(delta, left));
  }

  var console$1 = Object.freeze({
    "default": ConsoleFormatter,
    format: format$3,
    log: log$1
  });
  var index = Object.freeze({
    base: base,
    html: html,
    annotated: annotated,
    jsonpatch: jsonpatch,
    console: console$1
  }); // use as 2nd parameter for JSON.parse to revive Date instances

  function dateReviver(key, value) {
    var parts = void 0;

    if (typeof value === 'string') {
      // eslint-disable-next-line max-len
      parts = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(value);

      if (parts) {
        return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4], +parts[5], +parts[6], +(parts[7] || 0)));
      }
    }

    return value;
  }

  function create(options) {
    return new DiffPatcher(options);
  }

  var defaultInstance$4 = void 0;

  function diff() {
    if (!defaultInstance$4) {
      defaultInstance$4 = new DiffPatcher();
    }

    return defaultInstance$4.diff.apply(defaultInstance$4, arguments);
  }

  function patch() {
    if (!defaultInstance$4) {
      defaultInstance$4 = new DiffPatcher();
    }

    return defaultInstance$4.patch.apply(defaultInstance$4, arguments);
  }

  function unpatch() {
    if (!defaultInstance$4) {
      defaultInstance$4 = new DiffPatcher();
    }

    return defaultInstance$4.unpatch.apply(defaultInstance$4, arguments);
  }

  function reverse() {
    if (!defaultInstance$4) {
      defaultInstance$4 = new DiffPatcher();
    }

    return defaultInstance$4.reverse.apply(defaultInstance$4, arguments);
  }

  function clone$1() {
    if (!defaultInstance$4) {
      defaultInstance$4 = new DiffPatcher();
    }

    return defaultInstance$4.clone.apply(defaultInstance$4, arguments);
  }

  exports.DiffPatcher = DiffPatcher;
  exports.formatters = index;
  exports.console = console$1;
  exports.create = create;
  exports.dateReviver = dateReviver;
  exports.diff = diff;
  exports.patch = patch;
  exports.unpatch = unpatch;
  exports.reverse = reverse;
  exports.clone = clone$1;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

/** Built-in value references. */

var _Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;
/* harmony default export */ __webpack_exports__["default"] = (_Symbol);

/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");



/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;
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

  return symToStringTag && symToStringTag in Object(value) ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);

/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");

/** Built-in value references. */

var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);
/* harmony default export */ __webpack_exports__["default"] = (getPrototype);

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");

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

var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;
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

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);

/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (objectToString);

/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (overArg);

/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  return value != null && _typeof(value) == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);

/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



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
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }

  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/button/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/button/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
  getClassNames: function getClassNames(attrs) {
    var classNames = [];
    classNames.push(attrs.raised ? "mmf-button--raised" : "mmf-button--flat");
    classNames.push(attrs.disabled ? "is-disabled" : "is-enabled");

    if (attrs["class"]) {
      classNames.push(attrs["class"]);
    }

    return classNames.join(" ");
  },
  view: function view(vnode) {
    var attrs = _extends({
      disabled: false,
      onclick: function onclick(event) {
        return vnode.attrs.onclick(event);
      }
    }, vnode.attrs);

    attrs["class"] = this.getClassNames(vnode.attrs);
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

var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return m("input.mmf-checkbox", {
      id: attrs.id,
      type: "checkbox",
      disabled: attrs.disabled === true,
      checked: attrs.value,
      onchange: function onchange(e) {
        return attrs.onchange(e.target.checked);
      },
      onfocus: attrs.onfocus,
      onblur: attrs.onblur
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var m = __webpack_require__(/*! mithril */ "mithril");

var Checkbox = __webpack_require__(/*! ../checkbox */ "./node_modules/mithril-material-forms/components/checkbox/index.js");

var Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");

var Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");

var defaultOptions = {
  id: null,
  title: "",
  disabled: false,
  value: "",
  errors: [],
  description: "",
  placeholder: "",
  onchange: Function.prototype
};
module.exports = {
  view: function view(vnode) {
    var attrs = _extends({}, defaultOptions, vnode.attrs);

    return m(".mmf-form.mmf-form--checkbox.mmf-form--".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": Errors.getErrorClass(attrs.errors)
    }, m(Checkbox, {
      id: vnode.attrs.id,
      disabled: attrs.disabled,
      value: vnode.attrs.value,
      onchange: vnode.attrs.onchange,
      onfocus: vnode.attrs.onfocus,
      onblur: vnode.attrs.onblur
    }), m(Label, attrs), m(Errors, attrs), attrs.description ? m(".mmf-meta", attrs.description) : "", vnode.children);
  }
};

/***/ }),

/***/ "./node_modules/mithril-material-forms/components/errors/getErrorClass.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/errors/getErrorClass.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        return m("li.mmf-form__error.mmf-form__error--".concat(error.attrs.severity), error);
      }

      if (error && _typeof(error) === "object") {
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var m = __webpack_require__(/*! mithril */ "mithril");

var RATIO_DEFAULT = [16, 9];

function isEmpty(value) {
  return value == null || value === "";
}

function getRatioStyle(ratio) {
  return "".concat(getRatio(ratio).toFixed(2), "%");
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
      style: isEmpty(attrs.url) ? "" : "padding-bottom: ".concat(getRatioStyle(attrs.maxRatio), ";"),
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
      var ratioImg = getRatio("".concat(image.naturalWidth, ":").concat(image.naturalHeight));

      if (ratioMax >= ratioImg) {
        this.overflowContainer.style.paddingBottom = "".concat(ratioImg.toFixed(2), "%");
        this.overflowContainer.classList.remove("with-overflow");
        this.hasOverflow = false;
      } else {
        this.overflowContainer.style.paddingBottom = "".concat(ratioMax.toFixed(2), "%");
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
      "class": attrs["class"] + (isEmpty(attrs.url) ? "" : " with-image"),
      style: attrs.asBackgroundImage && !isEmpty(attrs.url) ? "background-image: url(".concat(attrs.url, ");") : ""
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

    if (this.hasFocus && this.value != null) {
      value = this.value; // this will remove any changes applied to this data from "outside"
    }

    this.value = value;
    var inputAttributes = {
      // id: attrs.id, // if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
      type: attrs.type,
      value: value,
      placeholder: attrs.placeholder,
      disabled: attrs.disabled === true,
      oninput: function oninput(e) {
        return _this.value = e.target.value;
      },
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
      return attrs.onchange(_this.value);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    var view = m(".mmf-form.mmf-form--input.mmf-form--".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": "".concat(focusClass, " ").concat(errorClass, " ").concat(emptyClass)
    }, m(Label, attrs), m(Input, {
      type: inputType,
      id: attrs.id,
      disabled: attrs.disabled,
      instantUpdate: attrs.instantUpdate,
      placeholder: attrs.placeholder,
      onchange: function onchange(value) {
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
    }), m(Errors, attrs), attrs.description ? m(".mmf-meta", attrs.description) : "", vnode.children);
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
/***/ (function(module, exports) {

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

var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
  view: function view(vnode) {
    return m("label.mmf-label", {
      "for": vnode.attrs.id,
      "class": vnode.attrs["class"]
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

var m = __webpack_require__(/*! mithril */ "mithril");

module.exports = {
  view: function view(vnode) {
    var _this = this;

    return m("div.mmf-select__wrapper", {
      "class": vnode.attrs.disabled === true ? "is-disabled" : "is-enabled",
      oncreate: function oncreate(_vnode) {
        return _this.$wrapper = _vnode.dom;
      }
    }, m("select.mmf-select", {
      id: vnode.attrs.id,
      value: vnode.attrs.value,
      disabled: vnode.attrs.disabled,
      "class": vnode.attrs["class"],
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
      onchange: function onchange(e) {
        return vnode.attrs.onchange(e.target.value);
      }
    }, vnode.attrs.options.map(function (value) {
      var title = value.title || value; // value must be a string or else is discarded

      value = "".concat(value.value == null ? value : value.value);
      return m("option", {
        value: value
      }, title);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var m = __webpack_require__(/*! mithril */ "mithril");

var Select = __webpack_require__(/*! ../select */ "./node_modules/mithril-material-forms/components/select/index.js");

var Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");

var Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");

module.exports = {
  view: function view(vnode) {
    var attrs = _extends({
      id: null,
      value: "",
      options: [{
        title: "-",
        value: false
      }],
      errors: [],
      description: "",
      placeholder: "",
      onchange: Function.prototype
    }, vnode.attrs);

    return m(".mmf-form.mmf-form--select.mmf-form--".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": Errors.getErrorClass(attrs.errors)
    }, m(Select, attrs), m(Label, _extends({
      "class": "mmf-grow-2"
    }, attrs)), m(Errors, attrs), attrs.description ? m(".mmf-meta", attrs.description) : "", vnode.children);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var m = __webpack_require__(/*! mithril */ "mithril");

var autosize = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");

var raf = window.requestAnimationFrame;
module.exports = {
  textarea: null,
  focus: false,
  onupdate: function onupdate(vnode) {
    raf(function () {
      return autosize.update(vnode.dom);
    });
  },
  view: function view(vnode) {
    var _this = this;

    var attrs = _extends({
      id: null,
      value: "",
      rows: 1,
      placeholder: "",
      disabled: false,
      instantUpdate: false,
      onblur: Function.prototype,
      onfocus: Function.prototype,
      onchange: Function.prototype,
      oncreate: Function.prototype,
      onbeforeremove: Function.prototype
    }, vnode.attrs);

    var disabled = attrs.disabled === true;

    if (this.focus) {
      // keep current value, while input is being active this prevents
      // jumps in cursor, caused by race conditions
      // @attention - this may produce other problems
      attrs.value = this.textarea.value;
    }

    var textareaAttributes = {
      id: attrs.id,
      value: attrs.value,
      rows: attrs.rows,
      disabled: disabled,
      placeholder: attrs.placeholder,
      onblur: function onblur() {
        _this.focus = false;
        attrs.onblur && attrs.onblur();
      },
      onfocus: function onfocus() {
        _this.focus = true;
        attrs.onfocus && attrs.onfocus();
      },
      onupdate: function onupdate(node) {
        return autosize.update(node.dom);
      },
      oncreate: function oncreate(node) {
        _this.textarea = node.dom;
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

    textareaAttributes[updateEvent] = function (e) {
      return attrs.onchange(e.target.value);
    };

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      disabled: false,
      description: "",
      placeholder: "",
      rows: 1,
      instantUpdate: false,
      onblur: Function.prototype,
      onfocus: Function.prototype,
      onchange: Function.prototype
    }, vnode.attrs);

    var disabled = attrs.disabled === true;
    return m(".mmf-form.mmf-form--textarea.mmf-form--".concat(disabled ? "disabled" : "enabled"), {
      "class": Errors.getErrorClass(attrs.errors)
    }, m(Label, attrs), m(Textarea, {
      id: attrs.id,
      value: attrs.value,
      disabled: disabled,
      instantUpdate: attrs.instantUpdate,
      placeholder: attrs.placeholder,
      rows: attrs.rows,
      // onchange: m.withAttr("value", attrs.onchange),
      onchange: attrs.onchange,
      onblur: function onblur(e) {
        _this.onblur(e.target.value);

        attrs.onblur(e);
      },
      onfocus: function onfocus(e) {
        _this.onfocus();

        attrs.onfocus(e);
      }
    }), m(Errors, attrs), attrs.description ? m(".mmf-meta", attrs.description) : "", vnode.children);
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
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (mitt);

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.js":
/*!****************************************!*\
  !*** ./node_modules/mitt/dist/mitt.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function n(n) {
  return n = n || Object.create(null), {
    on: function on(c, e) {
      (n[c] || (n[c] = [])).push(e);
    },
    off: function off(c, e) {
      n[c] && n[c].splice(n[c].indexOf(e) >>> 0, 1);
    },
    emit: function emit(c, e) {
      (n[c] || []).slice().map(function (n) {
        n(e);
      }), (n["*"] || []).slice().map(function (n) {
        n(c, e);
      });
    }
  };
}

module.exports = n;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
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
  } // if setTimeout wasn't available but was latter defined


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
  } // if clearTimeout wasn't available but was latter defined


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
}; // v8 likes predictible objects


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
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.parseActions = parseActions;
exports["default"] = undoable;
exports.distinctState = distinctState;
exports.includeAction = includeAction;
exports.ifAction = ifAction;
exports.excludeAction = excludeAction;

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
} // debug output


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

      console.log('received', {
        state: state,
        action: action
      });
    } else {
      debug.apply(undefined, args);
    }
  }
}

function debugEnd() {
  if (__DEBUG__) {
    return console.groupEnd && console.groupEnd();
  }
} // /debug output
// action types


var ActionTypes = exports.ActionTypes = {
  UNDO: '@@redux-undo/UNDO',
  REDO: '@@redux-undo/REDO',
  JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
  JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST'
}; // /action types
// action creators to change the state

var ActionCreators = exports.ActionCreators = {
  undo: function undo() {
    return {
      type: ActionTypes.UNDO
    };
  },
  redo: function redo() {
    return {
      type: ActionTypes.REDO
    };
  },
  jumpToFuture: function jumpToFuture(index) {
    return {
      type: ActionTypes.JUMP_TO_FUTURE,
      index: index
    };
  },
  jumpToPast: function jumpToPast(index) {
    return {
      type: ActionTypes.JUMP_TO_PAST,
      index: index
    };
  }
}; // /action creators
// length: get length of history

function length(history) {
  var past = history.past;
  var future = history.future;
  return past.length + 1 + future.length;
} // /length
// insert: insert `state` into history, which means adding the current state
//         into `past`, setting the new `state` as `present` and erasing
//         the `future`.


function insert(history, state, limit) {
  debug('insert', {
    state: state,
    history: history,
    free: limit - length(history)
  });
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
} // /insert
// undo: go back to the previous point in history


function undo(history) {
  debug('undo', {
    history: history
  });
  var past = history.past;
  var present = history.present;
  var future = history.future;
  if (past.length <= 0) return history;
  return {
    past: past.slice(0, past.length - 1),
    // remove last element from past
    present: past[past.length - 1],
    // set element as new present
    future: [present].concat(_toConsumableArray(future))
  };
} // /undo
// redo: go to the next point in history


function redo(history) {
  debug('redo', {
    history: history
  });
  var past = history.past;
  var present = history.present;
  var future = history.future;
  if (future.length <= 0) return history;
  return {
    future: future.slice(1, future.length),
    // remove element from future
    present: future[0],
    // set element as new present
    past: [].concat(_toConsumableArray(past), [present // old present state is in the past now
    ])
  };
} // /redo
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
} // /jumpToFuture
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
} // /jumpToPast
// wrapState: for backwards compatibility to 0.4


function wrapState(state) {
  return _extends({}, state, {
    history: state
  });
} // /wrapState
// updateState


function updateState(state, history) {
  return wrapState(_extends({}, state, history));
} // /updateState
// createHistory


function createHistory(state) {
  return {
    past: [],
    present: state,
    future: []
  };
} // /createHistory
// parseActions


function parseActions(rawActions) {
  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (Array.isArray(rawActions)) {
    return rawActions;
  } else if (typeof rawActions === 'string') {
    return [rawActions];
  }

  return defaultValue;
} // /parseActions
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
        debug('after insert', {
          history: updatedHistory,
          free: config.limit - length(updatedHistory)
        });
        debugEnd();
        return wrapState(_extends({}, state, updatedHistory));
    }
  };
} // /redux-undo
// distinctState helper


function distinctState() {
  return function (action, currentState, previousState) {
    return currentState !== previousState;
  };
} // /distinctState
// includeAction helper


function includeAction(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) >= 0;
  };
} // /includeAction
// deprecated ifAction helper


function ifAction(rawActions) {
  console.error('Deprecation Warning: Please change `ifAction` to `includeAction`');
  return includeAction(rawActions);
} // /ifAction
// excludeAction helper


function excludeAction() {
  var rawActions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) < 0;
  };
} // /excludeAction

/***/ }),

/***/ "./node_modules/redux/es/applyMiddleware.js":
/*!**************************************************!*\
  !*** ./node_modules/redux/es/applyMiddleware.js ***!
  \**************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyMiddleware; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js");
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
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
      _dispatch = _compose__WEBPACK_IMPORTED_MODULE_0__["default"].apply(undefined, chain)(store.dispatch);
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
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindActionCreators; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  if (_typeof(actionCreators) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
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
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineReducers; });
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ "./node_modules/redux/es/createStore.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/warning */ "./node_modules/redux/es/utils/warning.js");




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(inputState)) {
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
    var initialState = reducer(undefined, {
      type: _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');

    if (typeof reducer(undefined, {
      type: type
    }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
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
        Object(_utils_warning__WEBPACK_IMPORTED_MODULE_2__["default"])('No reducer provided for key "' + key + '"');
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
        Object(_utils_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(warningMessage);
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
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
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
/*! exports provided: ActionTypes, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

var ActionTypes = {
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

};
function createStore(reducer, preloadedState, enhancer) {
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
    if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(action)) {
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
    dispatch({
      type: ActionTypes.INIT
    });
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
        if (_typeof(observer) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = observable, _ref2;
}

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/index.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore */ "./node_modules/redux/es/createStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _createStore__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineReducers */ "./node_modules/redux/es/combineReducers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return _combineReducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindActionCreators */ "./node_modules/redux/es/bindActionCreators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyMiddleware */ "./node_modules/redux/es/applyMiddleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/warning */ "./node_modules/redux/es/utils/warning.js");






/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(_utils_warning__WEBPACK_IMPORTED_MODULE_5__["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),

/***/ "./node_modules/redux/es/utils/warning.js":
/*!************************************************!*\
  !*** ./node_modules/redux/es/utils/warning.js ***!
  \************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
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
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
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
}
;

/***/ }),

/***/ "./node_modules/valid-url/index.js":
/*!*****************************************!*\
  !*** ./node_modules/valid-url/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (module) {
  'use strict';

  module.exports.is_uri = is_iri;
  module.exports.is_http_uri = is_http_iri;
  module.exports.is_https_uri = is_https_iri;
  module.exports.is_web_uri = is_web_iri; // Create aliases

  module.exports.isUri = is_iri;
  module.exports.isHttpUri = is_http_iri;
  module.exports.isHttpsUri = is_https_iri;
  module.exports.isWebUri = is_web_iri; // private function
  // internal URI spitter method - direct from RFC 3986

  var splitUri = function splitUri(uri) {
    var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    return splitted;
  };

  function is_iri(value) {
    if (!value) {
      return;
    } // check for illegal characters


    if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return; // check for hex escapes that aren't complete

    if (/%[^0-9a-f]/i.test(value)) return;
    if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;
    var splitted = [];
    var scheme = '';
    var authority = '';
    var path = '';
    var query = '';
    var fragment = '';
    var out = ''; // from RFC 3986

    splitted = splitUri(value);
    scheme = splitted[1];
    authority = splitted[2];
    path = splitted[3];
    query = splitted[4];
    fragment = splitted[5]; // scheme and path are required, though the path can be empty

    if (!(scheme && scheme.length && path.length >= 0)) return; // if authority is present, the path must be empty or begin with a /

    if (authority && authority.length) {
      if (!(path.length === 0 || /^\//.test(path))) return;
    } else {
      // if authority is not present, the path must not start with //
      if (/^\/\//.test(path)) return;
    } // scheme must begin with a letter, then consist of letters, digits, +, ., or -


    if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) return; // re-assemble the URL per section 5.3 in RFC 3986

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
    var out = ''; // from RFC 3986

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
    } // fully-qualified URIs must have an authority section that is
    // a valid host


    if (!authority) {
      return;
    } // enable port component


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
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

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
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

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
/***/ (function(module, exports) {

var editors = [];
var validators = [];
module.exports = {
  editor: function editor(constructor) {
    console.log("register editor ".concat(constructor.name));
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  AFTER_UPDATE: "afterUpdate",
  FINAL_UPDATE: "finalUpdate"
};
/**
 * Read and modify form data and notify observers
 *
 * @param {State} state     - current state/store of application
 * @param {Any} data        - current application data (form)
 */

var DataService =
/*#__PURE__*/
function () {
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
    var lastUpdate = {}; // improved version - supporting multiple patches

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

        _this.emit(EVENTS.AFTER_UPDATE, eventLocation, {
          type: parentDataType,
          patch: patches[i].patch
        });

        _this.bubbleObservers(eventLocation, {
          type: parentDataType,
          patch: patches[i].patch
        });
      }

      _this.emitter.emit(EVENTS.FINAL_UPDATE, patches);

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
        throw new Error("Pointer ".concat(pointer, " does not exist in data"));
      }

      var currentValue = this.getDataByReference(pointer);

      if (diffpatch.diff(currentValue, value) == null) {
        DEBUG && console.info("DataService abort update -- value not changed");
        return;
      }

      this.emit(EVENTS.BEFORE_UPDATE, pointer, {
        action: ActionTypes.DATA_SET,
        isSynched: isSynched
      });
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
      gp["delete"](data, key);
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
      this.emit(EVENTS.BEFORE_UPDATE, "#", {
        action: ActionTypes.UNDO
      });
      this.state.dispatch(ActionCreators.undo());
    }
  }, {
    key: "redo",
    value: function redo() {
      this.emit(EVENTS.BEFORE_UPDATE, "#", {
        action: ActionTypes.REDO
      });
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
      var _this$emitter;

      (_this$emitter = this.emitter).off.apply(_this$emitter, arguments);
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
  "goto": function goto(targetPointer) {
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
    var targetElement = document.getElementById(id); // console.log(`pointer ${pointer} - id ${id}`, targetElement);

    if (targetElement == null) {
      // console.log(`Location:focus - target ${pointer} (id ${id}) not found`);
      return;
    } // const targetPosition = targetElement.getBoundingClientRect().top


    this.timeout = setTimeout(function () {
      // try scrolling to header-row in container (low height) to have a more robust scroll target position
      var scrollTarget = targetElement.querySelector(".editron-container > .editron-container__header");
      scrollTarget = scrollTarget == null || scrollTarget.offsetParent === null ? targetElement : scrollTarget;
      scrollTarget.scrollIntoView(); // @todo only fire focus event?

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    UIState.setOverlay(); // must destroy component for reuse

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
      },
      // calls onremove -> onAbort
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


var SchemaService =
/*#__PURE__*/
function () {
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
      return this.core.getTemplate(data, schema);
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
      return this.core.getTemplate(undefined, schema);
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
      return _getChildSchemaSelection(this.core, property, parentSchema);
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
      this.schema = this.core.getSchema();
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
        var result = jsl.getSchema(this.core, pointer, data, this.schema);
        return copy(result);
      }

      if (this.cache[pointer] === undefined) {
        var _result = jsl.getSchema(this.core, pointer, this.data, this.schema);

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
/***/ (function(module, exports) {

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

    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return defaultValue;
    }
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var mitt = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js");

var FLAG_CHANGED = "hasChanged";

var State =
/*#__PURE__*/
function () {
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
    this.store = redux.createStore(function () {}); // eslint-disable-line @typescript-eslint/no-empty-function

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
    } // eslint-disable-next-line
    // http://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application

  }, {
    key: "register",
    value: function register(id, reducer) {
      if (this.reducers[id]) {
        throw new Error("A reducer with id ".concat(id, " is already registered"));
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
      var _this$store;

      return (_this$store = this.store).dispatch.apply(_this$store, arguments);
    }
    /**
     * Subscribe to change (all) events
     * @param  {[type]}   id       [description]
     * @param  {Function} callback [description]
     */

  }, {
    key: "subscribe",
    value: function subscribe(id, callback) {
      if (typeof id !== "string" || typeof callback !== "function") {
        throw new Error("Invalid arguments for state.subscribe ".concat(arguments));
      }

      var state = this.store.getState();

      if (state[id] && state[id][FLAG_CHANGED] != null) {
        this.emitter.on(id, callback);
      } else {
        throw new Error("Could not subscribe to state ".concat(id, ". Property ").concat(FLAG_CHANGED, " not available"));
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id, callback) {
      if (typeof id !== "string" || typeof callback !== "function") {
        throw new Error("Invalid arguments for state.unsubscribe ".concat(arguments));
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var ValidationService =
/*#__PURE__*/
function () {
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
     * @param  {JsonPointer} [pointer]  - optional location. Per default all data is validated
     * @return {Promise} promise, resolving with list of errors when all async validations are performed
     */

  }, {
    key: "validate",
    value: function validate(data) {
      var _this = this;

      var pointer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";

      if (this.currentValidation) {
        this.currentValidation.cancel();
      }

      this.emit(EVENTS.BEFORE_VALIDATION); // @feature selective-validation

      this.observer.clearEvents(pointer); // reset stored list of events

      var remainingErrors = [];

      if (pointer !== "#") {
        // the following filtering is a duplicate from BubblingCollectionObservable.clearEvents
        remainingErrors = this.state.get(this.id).filter(function (e) {
          return e.data.pointer == null || e.data.pointer.startsWith(pointer) === false;
        });
      }

      this.state.dispatch(ActionCreators.setErrors(remainingErrors));
      this.currentValidation = new Validation(data, pointer, this.errorHandler);
      return this.currentValidation.start(this.core, function (newError, currentErrors) {
        // @feature selective-validation
        var completeListOfErrors = remainingErrors.concat(currentErrors);

        _this.state.dispatch(ActionCreators.setErrors(completeListOfErrors));

        _this.observer.notify(newError.data.pointer, newError);

        _this.emit(EVENTS.ON_ERROR, newError);
      }, function (validationErrors) {
        // @feature selective-validation
        var completeListOfErrors = remainingErrors.concat(validationErrors);

        _this.state.dispatch(ActionCreators.setErrors(completeListOfErrors));

        _this.emit(EVENTS.AFTER_VALIDATION, completeListOfErrors);

        _this.currentValidation = null;
      });
    }
  }, {
    key: "set",
    value: function set(schema) {
      this.core.setSchema(schema);
      this.schema = this.core.getSchema();
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
      var _this$emitter;

      this.emitter && (_this$emitter = this.emitter).off.apply(_this$emitter, arguments);
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
      } // filter by pointer


      var selectError = new RegExp("^".concat(pointer).concat(withChildErrors ? "" : "$"));
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
    return {
      type: ActionTypes.DATA_SET,
      pointer: pointer,
      value: newValue,
      prevValue: prevValue,
      isSynched: isSynched
    };
  },
  undo: function undo() {
    return UndoActionCreators.undo();
  },
  redo: function redo() {
    return UndoActionCreators.redo();
  },
  setErrors: function setErrors() {
    var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return {
      type: ActionTypes.ERRORS_SET,
      errors: errors
    };
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

var undoable = __webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js")["default"];
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
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

var ActionTypes = __webpack_require__(/*! ./actions */ "./services/reducers/actions.js").ActionTypes;

module.exports = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return action.type === ActionTypes.ERRORS_SET ? action.errors : state;
};

/***/ }),

/***/ "./services/uistate/actions.js":
/*!*************************************!*\
  !*** ./services/uistate/actions.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mitt = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js");

var State = __webpack_require__(/*! ../State */ "./services/State.js");

var ActionCreators = __webpack_require__(/*! ./actions */ "./services/uistate/actions.js").ActionCreators;

var uiReducer = __webpack_require__(/*! ./uiReducer */ "./services/uistate/uiReducer.js");

var EVENTS = {
  OVERLAY_EVENT: "overlay",
  CURRENT_POINTER_EVENT: "current",
  CURRENT_PAGE_EVENT: "page"
};

var UIState =
/*#__PURE__*/
function () {
  function UIState() {
    _classCallCheck(this, UIState);

    this.id = "ui";
    this.state = new State();
    this.emitter = mitt();
    this.state.register(this.id, uiReducer); // @todo: subscribe to state-changes and diff current state?
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
      var _this$emitter;

      (_this$emitter = this.emitter).on.apply(_this$emitter, arguments);
    }
  }, {
    key: "off",
    value: function off() {
      var _this$emitter2;

      (_this$emitter2 = this.emitter).off.apply(_this$emitter2, arguments);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // eslint-disable-line @typescript-eslint/no-unused-vars
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


var BubblingCollectionObservable =
/*#__PURE__*/
function () {
  function BubblingCollectionObservable() {
    _classCallCheck(this, BubblingCollectionObservable);

    this.observers = {};
    this.eventCollection = {};
    this.bubbleCollection = {};
  }
  /**
   * Observe events on the _pointer_ (`#/observe/location`). May also observe
   * events of _child-pointers_ (`#/observe/location/child/item`) with the
   * option `receiveChildEvents` set to `true`
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
     * @todo this might become obsolete by clearEvents
     *
     * Reset all collections from the previous events, starting with a list of
     * empty events. Any previously called observers will be called again with
     * an empty event-list `[]`.
     */

  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      // notify observers of reset by sending an empty list of events
      var map = {};
      Object.keys(this.eventCollection).concat(Object.keys(this.bubbleCollection)) // .filter(pointer => pointer.includes(sourcePointer))
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
     * Clears all events at a given pointer and notifies all listeners with
     * their changed list of events
     *
     * @param  {JsonPointer} pointer
     * @param  {boolean} [clearChildren=true]    if false, children of `pointer` will not be reset
     */

  }, {
    key: "clearEvents",
    value: function clearEvents(pointer) {
      var _this2 = this;

      var clearChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var changed = false;

      if (clearChildren) {
        Object.keys(this.eventCollection).forEach(function (target) {
          if (!(target.startsWith(pointer) && target !== pointer)) {
            return;
          }

          if (_this2.eventCollection[target].length > 0) {
            changed = true;
            _this2.eventCollection[target].length = 0;
            _this2.bubbleCollection[target] = {}; // reset bubble collection

            _this2._notify(target, target, _this2.eventCollection[target]);
          }
        });
      }

      var collection = this.eventCollection[pointer];

      if (Array.isArray(collection) && collection.length > 0) {
        changed = true;
        collection.length = 0;
        this.bubbleCollection[pointer] = {}; // reset bubble collection
      }

      if (changed) {
        // clear target and notify parents
        this._notifyAll(pointer, collection);
      }
    }
    /**
     * Notifies all listeners of `pointer` (bubble notification)
     *
     * @param  {JsonPointer} pointer
     * @param  {Array} eventCollection    - array of events at target `pointer`
     */

  }, {
    key: "_notifyAll",
    value: function _notifyAll(pointer, eventCollection) {
      var frags = gp.split(pointer);

      while (frags.length > 0) {
        var p = gp.join(frags, true);

        this._notify(p, pointer, eventCollection);

        frags.pop();
      }

      this._notify("#", pointer, eventCollection);
    }
    /**
     * Notify observers at _pointer_. Note that the received event is a
     * aggregated event-list []. For a first call the received event will look
     * like `[{ event }]` and the next event will be `[{ event }, { newEvent }]`,
     * etc, until `reset()` ist called by the observable.
     *
     * @param  {JsonPointer} pointer
     * @param  {Any} event
     */

  }, {
    key: "notify",
    value: function notify(pointer, event) {
      this.eventCollection[pointer] = this.eventCollection[pointer] || [];
      this.eventCollection[pointer].push(event);

      this._notifyAll(pointer, this.eventCollection[pointer]);
    }
  }, {
    key: "_notify",
    value: function _notify(observerPointer, sourcePointer, event) {
      var _this3 = this;

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

        _this3.bubbleCollection[observerPointer] = _this3.bubbleCollection[observerPointer] || {};
        var map = _this3.bubbleCollection[observerPointer];
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

var validateAsync = __webpack_require__(/*! json-schema-library/lib/validateAsync */ "./node_modules/json-schema-library/lib/validateAsync.js");
/**
 * @class  Validation
 *
 * @param {Object|Array} data       - application json data
 * @param {Object} schema           - json-schema describing data
 * @param {Function} [errorHandler] - optional callback to modify errors
 */


var Validation =
/*#__PURE__*/
function () {
  function Validation(data, pointer, errorHandler) {
    _classCallCheck(this, Validation);

    this.errors = [];
    this.data = data;
    this.pointer = pointer;
    this.canceled = false;
    this.errorHandler = errorHandler;
  }

  _createClass(Validation, [{
    key: "start",
    value: function start(core, onErrorCb, onDoneCb) {
      var _this = this;

      this.cbDone = onDoneCb;
      this.cbError = onErrorCb; // @feature selective-validation

      var pointer = this.pointer;
      var data = this.data;
      var schema = core.getSchema();

      if (pointer !== "#") {
        schema = core.getSchema(pointer, data);
        data = gp.get(data, pointer);
      } // console.log("validate", pointer, data, JSON.stringify(schema, null, 2));
      // validateAsync(core, value, { schema = core.rootSchema, pointer = "#", onError })


      return validateAsync(core, data, {
        schema: schema,
        pointer: pointer,
        onError: this.onError.bind(this)
      }).then(function (errors) {
        _this.onDone(errors);

        return errors;
      })["catch"](function (error) {
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
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function copy(data) {
  if (data === undefined || Array.isArray(data) === false && _typeof(data) !== "object") {
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

var DiffPatcher = __webpack_require__(/*! jsondiffpatch */ "./node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js").DiffPatcher;

var diffMatchPatch = __webpack_require__(/*! diff_match_patch */ "./node_modules/diff_match_patch/lib/diff_match_patch.js");

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
  window["diff_match_patch"] = diffMatchPatch;
} catch (e) {// loaded by default in nodejs
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

var getTypeOf = __webpack_require__(/*! json-schema-library/lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");

var ID_PROPERTY = "_id";

function generateId(index) {
  return "".concat(index).concat(Math.random()).concat(Date.now());
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
        pointer: "".concat(pointer, "/").concat(key),
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
      findPatches("".concat(pointer, "/").concat(key), diff[key], result);
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

  var patches = findPatches("#", diff); // merge all item patches by their parent-pointer

  var map = {}; // @todo this should be directly resolved in 'findPatches'

  patches.forEach(function (entry) {
    if (entry.isArrayItem) {
      var parent = gp.join(entry.pointer, "..");
      var key = entry.pointer.replace("".concat(parent, "/"), "");
      map[parent] = map[parent] || {
        _t: "a"
      };
      map[parent][key] = entry.patch;
    } else if (entry.changedKey) {
      var _parent = gp.join(entry.pointer, "..");

      var _key = entry.pointer.replace("".concat(_parent, "/"), "");

      map[_parent] = map[_parent] || {};
      map[_parent][_key] = entry.patch;
    } else {
      map[entry.pointer] = entry.patch;
    }
  });
  return Object.keys(map).map(function (pointer) {
    return {
      pointer: pointer,
      patch: map[pointer]
    };
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

module.exports = __webpack_require__(/*! gson-pointer/lib/isRoot */ "./node_modules/gson-pointer/lib/isRoot.js");

/***/ }),

/***/ "./utils/UISchema.js":
/*!***************************!*\
  !*** ./utils/UISchema.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _require = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js"),
    eachSchema = _require.eachSchema;

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");

var UI_PROPERTY = "editron:ui";

var populated = __webpack_require__(/*! ./populated */ "./utils/populated.js");

function isPointer(string) {
  return typeof string === "string" && /^(#?\/.+|\.?\.\/.+)/.test(string);
} // returns a list of {title, pointer} from root-node to pointer, excluding root node


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
  var options;

  if (schema[UI_PROPERTY]["enum"]) {
    options = schema["enum"].map(function (value, index) {
      return {
        title: schema[UI_PROPERTY]["enum"][index] || schema["enum"][index],
        value: schema["enum"][index]
      };
    });
  } else if (schema.options && schema.options.enum_titles) {
    // @legacy support jdorn/json-editor
    options = schema["enum"].map(function (value, index) {
      return {
        title: schema.options.enum_titles[index] || schema["enum"][index],
        value: schema["enum"][index]
      };
    });
  } else {
    options = schema["enum"];
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
  eachSchema(rootSchema, function (childSchema) {
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

  for (var _len = arguments.length, options = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
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
  return schema.minLength ? "".concat(title.replace(/\s*\*\s*$/, ""), " *") : title;
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
    throw new Error("Can not add item to a non-array (".concat(pointer, ")"));
  }

  var selectOptions = schemaService.getChildSchemaSelection(pointer, index); // single option, immediately create template data and add item to list

  if (selectOptions.length === 1) {
    addSelection(0, schemaService, dataService);
    return;
  } // multiple options, ask user


  var element = createElement(".overlay__item");
  var selection = selectOptions.map(function (item, oneOfIndex) {
    return {
      icon: UISchema.getDefaultOption(item, "icon"),
      title: UISchema.getDefaultOption(item, "title"),
      description: UISchema.getDefaultOption(item, "description"),
      value: oneOfIndex
    };
  }); // create user-selection

  m.render(element, m(SelectTileComponent, {
    description: "Modulauswahl - Bitte wählen",
    value: "0",
    options: selection,
    onchange: function onchange(value) {
      var selectedIndex = parseInt(value, 10);
      addSelection(selectedIndex, schemaService, dataService);
      OverlayService.close();
      LocationService["goto"]("".concat(pointer, "/").concat(index));
    }
  })); // add data of selection

  function addSelection(selectedIndex) {
    var itemSchema = selectOptions[selectedIndex];
    var itemData = schemaService.getTemplate(itemSchema);
    list.splice(index, 0, itemData);
    dataService.set(pointer, list);
  } // and ask question


  OverlayService.open(element, {
    save: false
  });
};

/***/ }),

/***/ "./utils/array.js":
/*!************************!*\
  !*** ./utils/array.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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

/***/ "./utils/createProxy.js":
/*!******************************!*\
  !*** ./utils/createProxy.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! @technik-sde/foxy */ "./node_modules/@technik-sde/foxy/dist/foxy.js"),
    Foxy = _require.Foxy,
    handler = _require.handler;

var defaultOptions = {
  handlers: [handler.unsplash, handler.image, handler.video]
};

module.exports = function createProxy() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (options.constructor.name === "Foxy") {
    return options;
  }

  var o = _objectSpread({}, defaultOptions, {}, options);

  if (Array.isArray(o.handlers)) {
    return new Foxy(o);
  }

  throw new Error("Failed initializing proxy from: ".concat(JSON.stringify(options)));
};

/***/ }),

/***/ "./utils/getID.js":
/*!************************!*\
  !*** ./utils/getID.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Converts a json-pointer to a valid dom-id (url selection)
 * https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
 *
 * @param  {String} pointer
 * @return {String} unique id
 */
module.exports = function getID(pointer) {
  return "".concat(pointer.replace(/(^[#/]*|\/+$)/, "")).replace(/\/+/g, ".");
};

/***/ }),

/***/ "./utils/i18n.js":
/*!***********************!*\
  !*** ./utils/i18n.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

module.exports = {
  addItem: __webpack_require__(/*! ./addItem */ "./utils/addItem.js"),
  array: __webpack_require__(/*! ./array */ "./utils/array.js"),
  createElement: __webpack_require__(/*! ./createElement */ "./utils/createElement.js"),
  getID: __webpack_require__(/*! ./getID */ "./utils/getID.js"),
  i18n: __webpack_require__(/*! ./i18n */ "./utils/i18n.js"),
  isNodeContext: __webpack_require__(/*! ./isNodeContext */ "./utils/isNodeContext.js"),
  populated: __webpack_require__(/*! ./populated */ "./utils/populated.js"),
  selection: __webpack_require__(/*! ./selection */ "./utils/selection.js"),
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

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global process */
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
/***/ (function(module, exports) {

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
/***/ (function(module, exports) {

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
  } // @ui-option hidden


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

/***/ "./utils/selection.js":
/*!****************************!*\
  !*** ./utils/selection.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getID = __webpack_require__(/*! ./getID */ "./utils/getID.js");
/**
 * Return true, if the given element may blur in the requested direction
 * @param  {HTMLElement} element
 * @param  {"up"|"down"|"left"|"right"} direction
 * @return {Boolean} may blur
 */


function mayBlur(element, direction) {
  var dir = direction === "down" || direction === "right" ? 1 : -1;

  if (element.mayBlur) {
    return element.mayBlur(direction);
  }

  if (element.tagName === "INPUT" && element.type === "number") {
    // there is no selection-indicator for numbers, so we cannot determine
    // if the motion is within the input-field. Must use input.type=text
    // for this to work
    return false;
  }

  if (element.tagName === "INPUT" && element.type === "checkbox") {
    return true;
  }

  if (element.tagName === "SELECT") {
    return false;
  }

  if (element.tagName === "INPUT") {
    if (direction === "up" || direction === "down") {
      return true;
    }

    if (direction === "left" && element.selectionStart === 0) {
      return true;
    }

    if (direction === "right" && element.value.length === element.selectionEnd) {
      return true;
    }

    return false;
  }

  if (element.tagName === "TEXTAREA") {
    if (element.value === "") {
      return true;
    } else if (dir === -1 && element.selectionStart === 0) {
      return true;
    } else if (dir === 1 && element.value.length === element.selectionEnd) {
      return true;
    }

    return false;
  }

  return true;
}
/**
 * Return the current active element or false
 * @param  {Controller} controller
 * @param  {HTMLElement} parent
 * @return {HTMLElement|false}
 */


function getActiveInput(controller) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var currentPointer = controller.location().getCurrent();
  var currentId = "#".concat(getID(currentPointer));

  if (currentId === "#") {
    console.log("abort empty selection", currentPointer, "active element", document.activeElement);
    return false;
  }

  var activeInput = parent.querySelector(currentId);

  if (activeInput == null) {
    return false;
  }

  if (activeInput !== document.activeElement) {
    console.log("selection: active input is not the same as current editor", activeInput, document.activeElement);
  }

  return activeInput;
}

function getAvailableInputs(parent) {
  return _toConsumableArray(parent.querySelectorAll("input,textarea,select"));
}
/**
 * Return the next input-element or false
 * @param  {Controller} controller
 * @param  {"up"|"down"|"left"|"right"} direction
 * @param  {HTMLElement} options.parent
 * @return {HTMLElement|false}
 */


function getNextInput(controller) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "down";

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$parent = _ref.parent,
      parent = _ref$parent === void 0 ? document : _ref$parent;

  var activeElement = getActiveInput(controller, parent);
  var allElements = getAvailableInputs(parent);
  var dir = direction === "down" || direction === "right" ? 1 : -1;
  var currentIndex = allElements.indexOf(activeElement);

  if (currentIndex === -1) {
    return false;
  }

  var nextElement = allElements[currentIndex + dir];

  if (nextElement && nextElement.focus) {
    return nextElement;
  }

  return false;
}
/**
 * move the focus from current element to next visible input-element
 * inputs being (textarea, input and select with an id-attribute containing a json-pointer-id)
 *
 * @param  {Controller}  controller
 * @param  {"up"|"down"|"left"|"right"} direction
 * @param  {Object} options
 * @param  {Boolean} options.force    ignores movement restrictions (e.g. navigation in textarea)
 * @param  {HTMLElement} options.parent    scan only in given parentNode
 * @returns {Boolean} true - if there was a new target was found or the move prevented
 */


function focusNextInput(controller) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "down";
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$force = options.force,
      force = _options$force === void 0 ? false : _options$force,
      _options$parent = options.parent,
      parent = _options$parent === void 0 ? document : _options$parent;
  var activeElement = getActiveInput(controller, parent);

  if (force === false && mayBlur(activeElement, direction) === false) {
    // console.log("prevent blur of", activeElement);
    return true;
  }

  var nextElement = getNextInput(controller, direction, options);

  if (nextElement) {
    nextElement.focus();
    return true;
  }

  return false;
}

module.exports = {
  focusNextInput: focusNextInput,
  getNextInput: getNextInput,
  getAvailableInputs: getAvailableInputs,
  getActiveInput: getActiveInput,
  mayBlur: mayBlur
};

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