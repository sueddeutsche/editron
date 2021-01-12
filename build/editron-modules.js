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

/***/ "./editron.scss":
/*!**********************!*\
  !*** ./editron.scss ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "editron.css";

/***/ }),

/***/ "./editron.ts":
/*!********************!*\
  !*** ./editron.ts ***!
  \********************/
/*! exports provided: default, components, utils, AbstractEditor, AbstractValueEditor, ArrayEditor, ObjectEditor, OneOfEditor, ValueEditor, AutocompleteEditor, DataService, LocationService, SchemaService, ValidationService, OverlayService, SessionService, plugin, DelegationPlugin, RemoteDataPlugin, SelectionPlugin, SortablePlugin, SyncPlugin */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Controller */ "./src/Controller.ts");
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components */ "./src/components/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _src_components__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/utils */ "./src/utils/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _src_utils__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _src_editors_AbstractEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/editors/AbstractEditor */ "./src/editors/AbstractEditor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractEditor", function() { return _src_editors_AbstractEditor__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_editors_AbstractValueEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/editors/AbstractValueEditor */ "./src/editors/AbstractValueEditor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractValueEditor", function() { return _src_editors_AbstractValueEditor__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_editors_arrayeditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/editors/arrayeditor */ "./src/editors/arrayeditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayEditor", function() { return _src_editors_arrayeditor__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_editors_objecteditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/editors/objecteditor */ "./src/editors/objecteditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectEditor", function() { return _src_editors_objecteditor__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_editors_oneofeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/editors/oneofeditor */ "./src/editors/oneofeditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneOfEditor", function() { return _src_editors_oneofeditor__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_editors_valueeditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/editors/valueeditor */ "./src/editors/valueeditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueEditor", function() { return _src_editors_valueeditor__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_editors_autocompleteeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/editors/autocompleteeditor */ "./src/editors/autocompleteeditor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteEditor", function() { return _src_editors_autocompleteeditor__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_services_dataservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/services/dataservice */ "./src/services/dataservice/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _src_services_dataservice__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_services_LocationService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/services/LocationService */ "./src/services/LocationService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return _src_services_LocationService__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_services_SchemaService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/services/SchemaService */ "./src/services/SchemaService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaService", function() { return _src_services_SchemaService__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_services_ValidationService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/services/ValidationService */ "./src/services/ValidationService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return _src_services_ValidationService__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_services_OverlayService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/services/OverlayService */ "./src/services/OverlayService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayService", function() { return _src_services_OverlayService__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_services_SessionService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/services/SessionService */ "./src/services/SessionService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return _src_services_SessionService__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_plugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/plugin */ "./src/plugin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return _src_plugin__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_plugin_delegationplugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/plugin/delegationplugin */ "./src/plugin/delegationplugin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelegationPlugin", function() { return _src_plugin_delegationplugin__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _src_plugin_remotedataplugin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/plugin/remotedataplugin */ "./src/plugin/remotedataplugin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteDataPlugin", function() { return _src_plugin_remotedataplugin__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _src_plugin_selectionplugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/plugin/selectionplugin */ "./src/plugin/selectionplugin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionPlugin", function() { return _src_plugin_selectionplugin__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _src_plugin_sortableplugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/plugin/sortableplugin */ "./src/plugin/sortableplugin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortablePlugin", function() { return _src_plugin_sortableplugin__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _src_plugin_syncplugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/plugin/syncplugin */ "./src/plugin/syncplugin/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncPlugin", function() { return _src_plugin_syncplugin__WEBPACK_IMPORTED_MODULE_21__["default"]; });

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

/* harmony default export */ __webpack_exports__["default"] = (_src_Controller__WEBPACK_IMPORTED_MODULE_0__["default"]);




// editors







// services






// plugins








/***/ }),

/***/ "./node_modules/@rematch/core/dist/umd/rematch.js":
/*!********************************************************!*\
  !*** ./node_modules/@rematch/core/dist/umd/rematch.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e) {
  "use strict";

  var _l = function l() {
    return (_l = Object.assign || function (e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        for (var o in t = arguments[r]) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }

      return e;
    }).apply(this, arguments);
  };

  function o(e, a, c, u) {
    return new (c = c || Promise)(function (r, t) {
      function n(e) {
        try {
          i(u.next(e));
        } catch (e) {
          t(e);
        }
      }

      function o(e) {
        try {
          i(u["throw"](e));
        } catch (e) {
          t(e);
        }
      }

      function i(e) {
        var t;
        e.done ? r(e.value) : ((t = e.value) instanceof c ? t : new c(function (e) {
          e(t);
        })).then(n, o);
      }

      i((u = u.apply(e, a || [])).next());
    });
  }

  function i(r, n) {
    var o,
        i,
        a,
        e,
        c = {
      label: 0,
      sent: function sent() {
        if (1 & a[0]) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    };
    return e = {
      next: t(0),
      "throw": t(1),
      "return": t(2)
    }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
      return this;
    }), e;

    function t(t) {
      return function (e) {
        return function (t) {
          if (o) throw new TypeError("Generator is already executing.");

          for (; c;) {
            try {
              if (o = 1, i && (a = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((a = i["return"]) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;

              switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                case 0:
                case 1:
                  a = t;
                  break;

                case 4:
                  return c.label++, {
                    value: t[1],
                    done: !1
                  };

                case 5:
                  c.label++, i = t[1], t = [0];
                  continue;

                case 7:
                  t = c.ops.pop(), c.trys.pop();
                  continue;

                default:
                  if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                    c = 0;
                    continue;
                  }

                  if (3 === t[0] && (!a || a[0] < t[1] && t[1] < a[3])) {
                    c.label = t[1];
                    break;
                  }

                  if (6 === t[0] && c.label < a[1]) {
                    c.label = a[1], a = t;
                    break;
                  }

                  if (a && c.label < a[2]) {
                    c.label = a[2], c.ops.push(t);
                    break;
                  }

                  a[2] && c.ops.pop(), c.trys.pop();
                  continue;
              }

              t = n.call(r, c);
            } catch (e) {
              t = [6, e], i = 0;
            } finally {
              o = a = 0;
            }
          }

          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }([t, e]);
      };
    }
  }

  function h() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++) {
      e += arguments[t].length;
    }

    var n = Array(e),
        o = 0;

    for (t = 0; t < r; t++) {
      for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) {
        n[o] = i[a];
      }
    }

    return n;
  }

  function a(e) {}

  var t,
      r = {
    exposed: {
      storeDispatch: function storeDispatch(e, t) {
        console.warn("Warning: store not yet loaded");
      },
      storeGetState: function storeGetState() {
        console.warn("Warning: store not yet loaded");
      },
      dispatch: function dispatch(e) {
        return this.storeDispatch(e);
      },
      createDispatcher: function createDispatcher(r, n) {
        var e = this;
        return function (payload, meta) {
          return o(e, void 0, Promise, function () {
            var t;
            return i(this, function (e) {
              return t = {
                type: r + "/" + n
              }, void 0 !== payload && (t.payload = payload), void 0 !== meta && (t.meta = meta), [2, this.dispatch(t)];
            });
          });
        };
      }
    },
    onStoreCreated: function onStoreCreated(e) {
      return this.storeDispatch = e.dispatch, this.storeGetState = e.getState, {
        dispatch: this.dispatch
      };
    },
    onModel: function onModel(e) {
      if (this.dispatch[e.name] = {}, e.reducers) for (var t = 0, r = Object.keys(e.reducers); t < r.length; t++) {
        var n = r[t];
        this.validate([[!!n.match(/\/.+\//), "Invalid reducer name (" + e.name + "/" + n + ")"], ["function" != typeof e.reducers[n], "Invalid reducer (" + e.name + "/" + n + "). Must be a function"]]), this.dispatch[e.name][n] = this.createDispatcher.call(this, e.name, n);
      }
    }
  },
      n = {
    exposed: {
      effects: {}
    },
    onModel: function onModel(e) {
      if (e.effects) for (var t = "function" == typeof e.effects ? e.effects(this.dispatch) : e.effects, r = 0, n = Object.keys(t); r < n.length; r++) {
        var o = n[r];
        this.validate([[!!o.match(/\//), "Invalid effect name (" + e.name + "/" + o + ")"], ["function" != typeof t[o], "Invalid effect (" + e.name + "/" + o + "). Must be a function"]]), this.effects[e.name + "/" + o] = t[o].bind(this.dispatch[e.name]), this.dispatch[e.name][o] = this.createDispatcher.call(this, e.name, o), this.dispatch[e.name][o].isEffect = !0;
      }
    },
    middleware: function middleware(n) {
      var e = this;
      return function (r) {
        return function (t) {
          return o(e, void 0, void 0, function () {
            return i(this, function (e) {
              switch (e.label) {
                case 0:
                  return t.type in this.effects ? [4, r(t)] : [3, 2];

                case 1:
                  return e.sent(), [2, this.effects[t.type](t.payload, n.getState(), t.meta)];

                case 2:
                  return [2, r(t)];
              }
            });
          });
        };
      };
    }
  };
  t = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global :  true ? module : undefined;

  function c() {
    return Math.random().toString(36).substring(7).split("").join(".");
  }

  var u,
      s,
      p = ("function" == typeof (s = t.Symbol) ? s.observable ? u = s.observable : (u = s("observable"), s.observable = u) : u = "@@observable", u),
      y = {
    INIT: "@@redux/INIT" + c(),
    REPLACE: "@@redux/REPLACE" + c(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + c();
    }
  };

  function b(e, t, r) {
    var n;
    if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");

    if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
      if ("function" != typeof r) throw Error("Expected the enhancer to be a function.");
      return r(b)(e, t);
    }

    if ("function" != typeof e) throw Error("Expected the reducer to be a function.");
    var o = e,
        i = t,
        a = [],
        c = a,
        u = !1;

    function s() {
      c === a && (c = a.slice());
    }

    function d() {
      if (u) throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
      return i;
    }

    function f(t) {
      if ("function" != typeof t) throw Error("Expected the listener to be a function.");
      if (u) throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
      var r = !0;
      return s(), c.push(t), function () {
        if (r) {
          if (u) throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
          r = !1, s();
          var e = c.indexOf(t);
          c.splice(e, 1), a = null;
        }
      };
    }

    function l(e) {
      if (!function (e) {
        if ("object" == _typeof(e) && null !== e) {
          for (var t = e; null !== Object.getPrototypeOf(t);) {
            t = Object.getPrototypeOf(t);
          }

          return Object.getPrototypeOf(e) === t;
        }
      }(e)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === e.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (u) throw Error("Reducers may not dispatch actions.");

      try {
        u = !0, i = o(i, e);
      } finally {
        u = !1;
      }

      for (var t = a = c, r = 0; r < t.length; r++) {
        (0, t[r])();
      }

      return e;
    }

    return l({
      type: y.INIT
    }), (n = {
      dispatch: l,
      subscribe: f,
      getState: d,
      replaceReducer: function replaceReducer(e) {
        if ("function" != typeof e) throw Error("Expected the nextReducer to be a function.");
        o = e, l({
          type: y.REPLACE
        });
      }
    })[p] = function () {
      var e,
          r = f;
      return (e = {
        subscribe: function subscribe(e) {
          if ("object" != _typeof(e) || null === e) throw new TypeError("Expected the observer to be an object.");

          function t() {
            e.next && e.next(d());
          }

          return t(), {
            unsubscribe: r(t)
          };
        }
      })[p] = function () {
        return this;
      }, e;
    }, n;
  }

  function v(e) {
    for (var t = Object.keys(e), f = {}, r = 0; r < t.length; r++) {
      var n = t[r];
      "function" == typeof e[n] && (f[n] = e[n]);
    }

    var l,
        o,
        h = Object.keys(f);

    try {
      Object.keys(o = f).forEach(function (e) {
        var t = o[e];
        if (void 0 === t(void 0, {
          type: y.INIT
        })) throw Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
        if (void 0 === t(void 0, {
          type: y.PROBE_UNKNOWN_ACTION()
        })) throw Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + y.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
      });
    } catch (e) {
      l = e;
    }

    return function (e, t) {
      if (void 0 === e && (e = {}), l) throw l;

      for (var r, n, o = !1, i = {}, a = 0; a < h.length; a++) {
        var c = h[a],
            u = e[c],
            s = (0, f[c])(u, t);

        if (void 0 === s) {
          var d = "Given " + ((n = (r = t) && r.type) && 'action "' + n + '"' || "an action") + ', reducer "' + c + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
          throw Error(d);
        }

        i[c] = s, o = o || s !== u;
      }

      return (o = o || h.length !== Object.keys(e).length) ? i : e;
    };
  }

  function d(e, t) {
    return function () {
      return t(e.apply(this, arguments));
    };
  }

  function f(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), e && (r = r.filter(function (e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
  }

  function m(o) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2 ? f(i, !0).forEach(function (e) {
        var t, r, n;
        n = i[r = e], r in (t = o) ? Object.defineProperty(t, r, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[r] = n;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : f(i).forEach(function (e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
      });
    }

    return o;
  }

  function g() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
      t[r] = arguments[r];
    }

    return 0 === t.length ? function (e) {
      return e;
    } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
      return function () {
        return e(t.apply(void 0, arguments));
      };
    });
  }

  function w() {
    for (var e = arguments.length, i = Array(e), t = 0; t < e; t++) {
      i[t] = arguments[t];
    }

    return function (o) {
      return function () {
        var e = o.apply(void 0, arguments),
            t = function t() {
          throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
        },
            r = {
          getState: e.getState,
          dispatch: function dispatch() {
            return t.apply(void 0, arguments);
          }
        },
            n = i.map(function (e) {
          return e(r);
        });

        return m({}, e, {
          dispatch: t = g.apply(void 0, n)(e.dispatch)
        });
      };
    };
  }

  function O(e) {
    void 0 === e && (e = {});

    var t = e.disabled,
        r = function (e, t) {
      var r = {};

      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && !~t.indexOf(n) && (r[n] = e[n]);
      }

      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;

        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) {
          !~t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        }
      }

      return r;
    }(e, ["disabled"]);

    return !t && "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(r) : g;
  }

  var x = Object.freeze({
    __proto__: null,
    __DO_NOT_USE__ActionTypes: y,
    applyMiddleware: w,
    bindActionCreators: function bindActionCreators(e, t) {
      if ("function" == typeof e) return d(e, t);
      if ("object" != _typeof(e) || null === e) throw Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : _typeof(e)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      var r = {};

      for (var n in e) {
        var o = e[n];
        "function" == typeof o && (r[n] = d(o, t));
      }

      return r;
    },
    combineReducers: v,
    compose: g,
    createStore: b
  });

  function E(e) {
    var u = this,
        t = e.redux,
        r = e.models,
        n = t.combineReducers || v,
        o = t.createStore || b,
        i = void 0 !== t.initialState ? t.initialState : {};
    this.reducers = t.reducers, this.mergeReducers = function (e) {
      return void 0 === e && (e = {}), u.reducers = _l(_l({}, u.reducers), e), Object.keys(u.reducers).length ? n(u.reducers) : function (e) {
        return e;
      };
    }, this.createModelReducer = function (r) {
      for (var n = r.baseReducer, o = {}, e = 0, t = Object.keys(r.reducers || {}); e < t.length; e++) {
        var i = t[e],
            a = ~i.indexOf("/") ? i : r.name + "/" + i;
        o[a] = r.reducers[i];
      }

      function c(e, t) {
        return void 0 === e && (e = r.state), "function" == typeof o[t.type] ? o[t.type](e, t.payload, t.meta) : e;
      }

      u.reducers[r.name] = n ? function (e, t) {
        return c(n(e, t), t);
      } : c;
    };

    for (var a = 0, c = r; a < c.length; a++) {
      this.createModelReducer(c[a]);
    }

    this.createRootReducer = function (r) {
      void 0 === r && (r = {});
      var n = u.mergeReducers();
      return Object.keys(r).length ? function (e, t) {
        return n(r[t.type] ? (0, r[t.type])(e, t) : e, t);
      } : n;
    };

    var s = this.createRootReducer(t.rootReducers),
        d = w.apply(x, t.middlewares),
        f = O(t.devtoolOptions).apply(void 0, h(t.enhancers, [d]));
    return this.store = o(s, i, f), this;
  }

  var j = [r, n],
      S = (R.prototype.forEachPlugin = function (e, t) {
    for (var r = 0, n = this.plugins; r < n.length; r++) {
      var o = n[r];
      o[e] && t(o[e]);
    }
  }, R.prototype.getModels = function (t) {
    return Object.keys(t).map(function (e) {
      return _l(_l({
        name: e
      }, t[e]), {
        reducers: t[e].reducers || {}
      });
    });
  }, R.prototype.addModel = function (t) {
    this.forEachPlugin("onModel", function (e) {
      return e(t);
    });
  }, R.prototype.init = function () {
    var t = this;
    this.models = this.getModels(this.config.models);

    for (var e = 0, r = this.models; e < r.length; e++) {
      this.addModel(r[e]);
    }

    var n = E.call(this, {
      redux: this.config.redux,
      models: this.models
    }),
        o = _l(_l({
      name: this.config.name
    }, n.store), {
      model: function model(e) {
        t.addModel(e), n.mergeReducers(n.createModelReducer(e)), n.store.replaceReducer(n.createRootReducer(t.config.redux.rootReducers)), n.store.dispatch({
          type: "@@redux/REPLACE "
        });
      }
    });

    return this.forEachPlugin("onStoreCreated", function (e) {
      var t = e(o);
      t && Object.keys(t || {}).forEach(function (e) {
        o[e] = t[e];
      });
    }), o;
  }, R);

  function R(e) {
    var t = this;
    this.plugins = [], this.config = e, this.pluginFactory = {
      config: e,
      validate: a,
      create: function create(e) {
        e.onInit && e.onInit.call(this);
        var t = {};
        if (e.exposed) for (var r = 0, n = Object.keys(e.exposed); r < n.length; r++) {
          var o = n[r];
          this[o] = "function" == typeof e.exposed[o] ? e.exposed[o].bind(this) : Object.create(e.exposed[o]);
        }

        for (var i = 0, a = ["onModel", "middleware", "onStoreCreated"]; i < a.length; i++) {
          var c = a[i];
          e[c] && (t[c] = e[c].bind(this));
        }

        return t;
      }
    };

    for (var r = 0, n = j.concat(this.config.plugins); r < n.length; r++) {
      this.plugins.push(this.pluginFactory.create(n[r]));
    }

    this.forEachPlugin("middleware", function (e) {
      t.config.redux.middlewares.push(e);
    });
  }

  function P(e) {
    console.warn(e);
  }

  function _(e, t) {
    return t ? _l(_l({}, t), e || {}) : e || {};
  }

  function I(e) {
    void 0 === e && (e = {});
    var t = e.name || "" + k;
    k += 1;

    var r = function (e) {
      for (var t = _l(_l({
        name: e.name,
        models: {},
        plugins: []
      }, e), {
        redux: _l(_l({
          reducers: {},
          rootReducers: {},
          enhancers: [],
          middlewares: []
        }, e.redux), {
          devtoolOptions: _l({
            name: e.name
          }, e.redux && e.redux.devtoolOptions ? e.redux.devtoolOptions : {})
        })
      }), r = 0, n = t.plugins; r < n.length; r++) {
        var o = n[r];

        if (o.config) {
          var i = _(t.models, o.config.models);

          t.models = i, t.plugins = h(t.plugins, o.config.plugins || []), o.config.redux && (t.redux.initialState = _(t.redux.initialState, o.config.redux.initialState), t.redux.reducers = _(t.redux.reducers, o.config.redux.reducers), t.redux.rootReducers = _(t.redux.rootReducers, o.config.redux.reducers), t.redux.enhancers = h(t.redux.enhancers, o.config.redux.enhancers || []), t.redux.middlewares = h(t.redux.middlewares, o.config.redux.middlewares || []), t.redux.combineReducers = t.redux.combineReducers || o.config.redux.combineReducers, t.redux.createStore = t.redux.createStore || o.config.redux.createStore);
        }
      }

      return t;
    }(_l(_l({}, e), {
      name: t
    }));

    return new S(r).init();
  }

  var k = 0,
      N = {
    init: I
  };
  e.createModel = function (e) {
    return e;
  }, e["default"] = N, e.dispatch = function () {
    P("global dispatch has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.dispatch.");
  }, e.getState = function () {
    P("global getState has been removed in @rematch/core 1.0.0-beta.3.\n\tSee https://github.com/rematch/rematch/blob/master/CHANGELOG.md#100-beta3---2018-06-23 for details.\n\tFor a quick fix, import and use store.getState.");
  }, e.init = I, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@technik-sde/foxy/distmodule/Foxy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@technik-sde/foxy/distmodule/Foxy.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Foxy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Foxy = /*#__PURE__*/function () {
  function Foxy() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Foxy);

    this.handlers = options.handlers || [];
  }

  _createClass(Foxy, [{
    key: "addHandler",
    value: function addHandler(handler) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.handlers[index] == null) {
        this.handlers.push(handler);
      }

      this.handlers.splice(index, 0, handler);
    }
  }, {
    key: "removeHandler",
    value: function removeHandler(handler) {
      this.handlers = this.handlers.filter(function (h) {
        return h !== handler;
      });
    }
  }, {
    key: "getImageURL",
    value: function getImageURL(request) {
      return this.get("getImageURL", request);
    }
  }, {
    key: "getImageInfo",
    value: function getImageInfo(request) {
      return this.get("getImageInfo", request);
    }
  }, {
    key: "getVideoURL",
    value: function getVideoURL(request) {
      return this.get("getVideoURL", request);
    }
  }, {
    key: "getVideoInfo",
    value: function getVideoInfo(request) {
      return this.get("getVideoInfo", request);
    }
  }, {
    key: "getURL",
    value: function getURL(request) {
      return this.get("getURL", request);
    }
  }, {
    key: "getJSON",
    value: function getJSON(request) {
      return this.get("getJSON", request);
    }
  }, {
    key: "get",
    value: function get(methodName, request) {
      var handler = this.findHandler(methodName, request);

      if (handler == null) {
        return Promise.reject(new Error("There is no handler for method '".concat(methodName, "(").concat(JSON.stringify(request), ")'")));
      }

      return handler[methodName](request);
    }
  }, {
    key: "isSupported",
    value: function isSupported(request) {
      return this.handlers.some(function (handler) {
        return handler.use(request);
      });
    }
  }, {
    key: "findHandler",
    value: function findHandler(methodName, request) {
      return this.handlers.find(function (handler) {
        return typeof handler[methodName] === "function" && handler.use(request) === true;
      });
    }
  }]);

  return Foxy;
}();



/***/ }),

/***/ "./node_modules/@technik-sde/foxy/distmodule/handler/imageHandler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@technik-sde/foxy/distmodule/handler/imageHandler.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@technik-sde/foxy/distmodule/utils.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  use: function use(request) {
    return /^https?:\/\//.test(request.source);
  },
  getImageURL: function getImageURL(request) {
    return Promise.resolve(request.source);
  },
  getImageInfo: function getImageInfo(request) {
    return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].loadImageInfo(request.source);
  }
});

/***/ }),

/***/ "./node_modules/@technik-sde/foxy/distmodule/handler/unsplash.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@technik-sde/foxy/distmodule/handler/unsplash.js ***!
  \***********************************************************************/
/*! exports provided: parseURL, getURL, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseURL", function() { return parseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURL", function() { return getURL; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@technik-sde/foxy/distmodule/utils.js");
 // https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60

var isUnsplashImage = /^https:\/\/images\.unsplash\.com\/photo-\d{13}-[0-9a-f]{12}/;
function parseURL(url) {
  var result = {};
  var params = new URLSearchParams(url.replace(/^.*\?/, ""));
  if (params.has("w")) result.width = parseInt(params.get("w"));
  if (params.has("h")) result.height = parseInt(params.get("h"));
  if (params.has("fit")) result.fit = params.get("fit");
  if (params.has("q")) result.quality = parseInt(params.get("q"));
  if (params.has("auto")) result.auto = params.get("auto");
  return result;
}
function getURL(request) {
  var baseURL = request.source.replace(/\?.*$/, "");
  var params = new URLSearchParams(request.source.replace(/^.*\?/, ""));
  if (request.width) params.set("w", request.width);
  if (request.height) params.set("h", request.height);
  if (request.quality) params.set("q", request.quality);
  if (request.fit) params.set("fit", request.fit);
  if (request.auto) params.set("auto", request.auto);
  return "".concat(baseURL, "?").concat(params.toString());
}
/* harmony default export */ __webpack_exports__["default"] = ({
  use: function use(request) {
    return isUnsplashImage.test(request.source);
  },
  getImageURL: function getImageURL(request) {
    return Promise.resolve(getURL(request));
  },
  getImageInfo: function getImageInfo(request) {
    return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].loadImageInfo(getURL(request));
  }
});

/***/ }),

/***/ "./node_modules/@technik-sde/foxy/distmodule/handler/videoHandler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@technik-sde/foxy/distmodule/handler/videoHandler.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@technik-sde/foxy/distmodule/utils.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  use: function use(request) {
    return /^https?:\/\//.test(request.source);
  },
  getVideoURL: function getVideoURL(request) {
    return Promise.resolve(request.source);
  },
  getVideoInfo: function getVideoInfo(request) {
    return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].loadVideoInfo(request.source);
  }
});

/***/ }),

/***/ "./node_modules/@technik-sde/foxy/distmodule/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@technik-sde/foxy/distmodule/index.js ***!
  \************************************************************/
/*! exports provided: Foxy, handler, utils, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var _Foxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Foxy */ "./node_modules/@technik-sde/foxy/distmodule/Foxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Foxy", function() { return _Foxy__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@technik-sde/foxy/distmodule/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _handler_unsplash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler/unsplash */ "./node_modules/@technik-sde/foxy/distmodule/handler/unsplash.js");
/* harmony import */ var _handler_imageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handler/imageHandler */ "./node_modules/@technik-sde/foxy/distmodule/handler/imageHandler.js");
/* harmony import */ var _handler_videoHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handler/videoHandler */ "./node_modules/@technik-sde/foxy/distmodule/handler/videoHandler.js");





var handler = {
  unsplash: _handler_unsplash__WEBPACK_IMPORTED_MODULE_2__["default"],
  image: _handler_imageHandler__WEBPACK_IMPORTED_MODULE_3__["default"],
  video: _handler_videoHandler__WEBPACK_IMPORTED_MODULE_4__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (_Foxy__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/@technik-sde/foxy/distmodule/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/@technik-sde/foxy/distmodule/utils.js ***!
  \************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isHandler(handler) {
  return Object.prototype.toString.call(handler) === "[object Object]" && typeof handler.use === "function";
}

function loadImageInfo(url) {
  var fetchOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var result = {
    src: url,
    image: new Image(),
    type: "",
    width: 0,
    height: 0
  };
  return fetch(url, fetchOptions).then(function (response) {
    return response.blob();
  }).then(function (imageBlob) {
    result.type = imageBlob.type.replace(/^[^/]+\//, "");
    return URL.createObjectURL(imageBlob);
  }).then(function (imageSrc) {
    return new Promise(function (resolve, reject) {
      result.image.addEventListener("load", function () {
        return resolve();
      });
      result.image.addEventListener("error", reject);
      result.image.src = imageSrc;
    });
  }).then(function () {
    result.width = result.image.naturalWidth;
    result.height = result.image.naturalHeight;
    return result;
  });
}

function loadVideoInfo(url) {
  var fetchOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var result = {
    src: url,
    width: 0,
    height: 0,
    video: document.createElement("video"),
    duration: 0,
    poster: ""
  };
  return fetch(url, fetchOptions).then(function (response) {
    return response.blob();
  }).then(function (imageBlob) {
    result.type = imageBlob.type.replace(/^[^/]+\//, "");
    return URL.createObjectURL(imageBlob);
  }).then(function (imageSrc) {
    var onVideoLoaded = new Promise(function (resolve, reject) {
      result.video.addEventListener("error", reject);
      result.video.addEventListener("loadedmetadata", function () {
        var video = result.video;
        result.width = video.videoWidth;
        result.height = video.videoHeight;
        result.duration = video.duration;
        result.poster = video.poster;
        resolve(result);
      });
      var source = document.createElement("source");
      source.setAttribute("src", imageSrc);
      result.video.appendChild(source);
    });
    return onVideoLoaded;
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  loadImageInfo: loadImageInfo,
  loadVideoInfo: loadVideoInfo,
  isHandler: isHandler
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

/***/ "./node_modules/gson-pointer/dist/gsonPointer.js":
/*!*******************************************************!*\
  !*** ./node_modules/gson-pointer/dist/gsonPointer.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function () {
    "use strict";

    var e = {
      431: function _(e, t, n) {
        function r(e) {
          return "#" === e || "" === e || Array.isArray(e) && 0 === e.length || !1;
        }

        n.r(t), n.d(t, {
          "default": function _default() {
            return S;
          },
          get: function get() {
            return p;
          },
          isRoot: function isRoot() {
            return r;
          },
          join: function join() {
            return O;
          },
          remove: function remove() {
            return b;
          },
          removeUndefinedItems: function removeUndefinedItems() {
            return v;
          },
          set: function set() {
            return y;
          },
          split: function split() {
            return c;
          }
        });
        var o = /~1/g,
            i = /~0/g,
            u = /\/+/g,
            l = /(^[#/]*|\/+$)/g;

        function f(e) {
          return e.replace(o, "/").replace(i, "~");
        }

        function s(e) {
          return f(decodeURIComponent(e));
        }

        function c(e) {
          if (null == e || "string" != typeof e || r(e)) return Array.isArray(e) ? e : [];
          var t = e.indexOf("#") >= 0 ? s : f,
              n = (e = (e = e.replace(u, "/")).replace(l, "")).split("/");

          for (var _e = 0, _r = n.length; _e < _r; _e += 1) {
            n[_e] = t(n[_e]);
          }

          return n;
        }

        function p(e, t, n) {
          if (null == t || null == e) return n;
          if (r(t)) return e;
          var o = a(e, c(t));
          return void 0 === o ? n : o;
        }

        function a(e, t) {
          var n = t.shift();
          if (void 0 !== e) return void 0 !== n ? a(e[n], t) : e;
        }

        var d = /^\[.*\]$/,
            g = /^\[(.+)\]$/;

        function y(e, t, n) {
          if (null == t) return e;
          var r = c(t);
          if (0 === r.length) return e;
          null == e && (e = d.test(r[0]) ? [] : {});
          var o,
              i,
              u = e;

          for (; r.length > 1;) {
            o = r.shift(), i = d.test(r[0]), u = m(u, o, i);
          }

          return o = r.pop(), h(u, o, n), e;
        }

        function h(e, t, n) {
          var r;
          var o = t.match(g);
          "[]" === t && Array.isArray(e) ? e.push(n) : o ? (r = o.pop(), e[r] = n) : e[t] = n;
        }

        function m(e, t, n) {
          if (null != e[t]) return e[t];
          var r = n ? [] : {};
          return h(e, t, r), r;
        }

        function v(e) {
          var t = 0,
              n = 0;

          for (; t + n < e.length;) {
            void 0 === e[t + n] && (n += 1), e[t] = e[t + n], t += 1;
          }

          return e.length = e.length - n, e;
        }

        function b(e, t, n) {
          var r = c(t),
              o = r.pop(),
              i = p(e, r);
          return i && delete i[o], Array.isArray(i) && !0 !== n && v(i), e;
        }

        var j = /\/+/g,
            A = /~/g,
            x = /\//g;

        function P(e, t) {
          if (0 === e.length) return t ? "#" : "";

          for (var _n = 0, _r2 = e.length; _n < _r2; _n += 1) {
            e[_n] = e[_n].replace(A, "~0").replace(x, "~1"), t && (e[_n] = encodeURIComponent(e[_n]));
          }

          return ((t ? "#/" : "/") + e.join("/")).replace(j, "/");
        }

        function O(e) {
          for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            t[_key - 1] = arguments[_key];
          }

          var n = [];
          if (Array.isArray(e)) return P(e, !0 === arguments[1]);
          var r = arguments[arguments.length - 1],
              o = "boolean" == typeof r ? r : e && "#" === e[0];

          for (var _e2 = 0, _t = arguments.length; _e2 < _t; _e2 += 1) {
            n.push.apply(n, c(arguments[_e2]));
          }

          var i = [];

          for (var _e3 = 0, _t2 = n.length; _e3 < _t2; _e3 += 1) {
            if (".." === n[_e3]) {
              if (0 === i.length) return o ? "#" : "";
              i.pop();
            } else i.push(n[_e3]);
          }

          return P(i, o);
        }

        var S = {
          get: p,
          set: y,
          remove: b,
          join: O,
          split: c,
          isRoot: r,
          removeUndefinedItems: v
        };
      }
    },
        t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        exports: {}
      };
      return e[r](o, o.exports, n), o.exports;
    }

    return n.d = function (e, t) {
      for (var r in t) {
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
          enumerable: !0,
          get: t[r]
        });
      }
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n(431);
  }();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/gson-pointer/lib/removeUndefinedItems.ts":
/*!***************************************************************!*\
  !*** ./node_modules/gson-pointer/lib/removeUndefinedItems.ts ***!
  \***************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeUndefinedItems; });
/**
 * Removes all `undefined` values within an array without creating additional
 * arrays
 */
function removeUndefinedItems(array) {
    let i = 0;
    let skip = 0;
    while ((i + skip) < array.length) {
        if (array[i + skip] === undefined) {
            skip += 1;
        }
        array[i] = array[i + skip];
        i += 1;
    }
    array.length = array.length - skip;
    return array;
}


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

var pointerDelete = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js")["delete"];

var removeUndefinedItems = __webpack_require__(/*! gson-pointer/lib/removeUndefinedItems */ "./node_modules/gson-pointer/lib/removeUndefinedItems.ts");

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


var join = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js").join;
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

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");

function copy(value) {
  return JSON.parse(JSON.stringify(value));
}

var SchemaService = /*#__PURE__*/function () {
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

var _require = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js"),
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
  MissingOneOfPropertyError: "Value at `{{pointer}}` property: `{{property}}`",
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


module.exports = /*#__PURE__*/function () {
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

var Draft04Core = /*#__PURE__*/function (_CoreInterface) {
  _inherits(Draft04Core, _CoreInterface);

  var _super = _createSuper(Draft04Core);

  function Draft04Core(schema) {
    var _this;

    _classCallCheck(this, Draft04Core);

    _this = _super.call(this, schema);
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CoreInterface = __webpack_require__(/*! ./CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js");

var _step = __webpack_require__(/*! ../step */ "./node_modules/json-schema-library/lib/step.js");

var _validate = __webpack_require__(/*! ../validate */ "./node_modules/json-schema-library/lib/validate.js");

var _resolveOneOf = __webpack_require__(/*! ../resolveOneOf.fuzzy */ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js");

var _resolveRef = __webpack_require__(/*! ../resolveRef.withOverwrite */ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js");

var _getTemplate = __webpack_require__(/*! ../getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js");

var _getSchema = __webpack_require__(/*! ../getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");

var _each = __webpack_require__(/*! ../each */ "./node_modules/json-schema-library/lib/each.js");

var JsonEditorCore = /*#__PURE__*/function (_CoreInterface) {
  _inherits(JsonEditorCore, _CoreInterface);

  var _super = _createSuper(JsonEditorCore);

  function JsonEditorCore(schema) {
    var _this;

    _classCallCheck(this, JsonEditorCore);

    _this = _super.call(this, schema);
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

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");

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
      return result.data.oneOf.map(function (item) {
        return core.resolveRef(item);
      });
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

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
        return one; // return resolved schema
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

/***/ "./node_modules/mithril-material-forms/distmodule/components/button/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/button/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  getClassNames: function getClassNames(attrs) {
    var _a;

    var classNames = ["mmf-button", (_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"], attrs.raised ? "mmf-button--raised" : "mmf-button--flat", attrs.disabled ? "is-disabled" : "is-enabled"];

    if (attrs["class"]) {
      classNames.push(attrs["class"]);
    }

    return classNames.join(" ");
  },
  view: function view(vnode) {
    var attrs = _objectSpread(_objectSpread({}, vnode.attrs), {}, {
      theme: undefined,
      "class": this.getClassNames(vnode.attrs)
    });

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("button", attrs, vnode.children);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/buttonform/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/buttonform/index.js ***!
  \***************************************************************************************/
/*! exports provided: defaultFormOptions, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFormOptions", function() { return defaultFormOptions; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./node_modules/mithril-material-forms/distmodule/components/button/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var defaultFormOptions = {
  theme: _types__WEBPACK_IMPORTED_MODULE_0__["THEME_DEFAULT"],
  errors: [],
  description: ""
};
/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(vnode) {
    var attrs = _objectSpread(_objectSpread({}, defaultFormOptions), vnode.attrs);

    return mithril__WEBPACK_IMPORTED_MODULE_4___default()(".mmf-form.mmf-form--button.is-".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": "".concat(Object(_errors__WEBPACK_IMPORTED_MODULE_2__["getErrorClass"])(attrs.errors), " ").concat(attrs.theme)
    }, mithril__WEBPACK_IMPORTED_MODULE_4___default()(_label__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, attrs)), mithril__WEBPACK_IMPORTED_MODULE_4___default()(_button__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, attrs), vnode.children), mithril__WEBPACK_IMPORTED_MODULE_4___default()(_errors__WEBPACK_IMPORTED_MODULE_2__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_4___default()(".mmf-meta", attrs.description));
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/checkbox/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/checkbox/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.mmf-checkbox", {
      "data-id": attrs.id,
      type: "checkbox",
      "class": attrs.theme || _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"],
      disabled: attrs.disabled === true,
      checked: attrs.value,
      onchange: function onchange(e) {
        return attrs.onchange(e.target.checked);
      },
      onfocus: attrs.onfocus,
      onblur: attrs.onblur
    });
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/checkboxform/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/checkboxform/index.js ***!
  \*****************************************************************************************/
/*! exports provided: defaultOptions, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../checkbox */ "./node_modules/mithril-material-forms/distmodule/components/checkbox/index.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var defaultOptions = {
  id: null,
  title: "",
  disabled: false,
  theme: "the-default",
  value: "",
  errors: [],
  description: "",
  placeholder: "",
  onchange: Function.prototype
};
/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(vnode) {
    var attrs = _objectSpread(_objectSpread({}, defaultOptions), vnode.attrs);

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-form.mmf-form--checkbox.is-".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": "".concat(Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors), " ").concat(attrs.theme)
    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, attrs), {}, {
      invertOrder: attrs.invertOrder !== true
    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: vnode.attrs.id,
      disabled: attrs.disabled,
      theme: attrs.theme,
      value: vnode.attrs.value,
      onchange: vnode.attrs.onchange,
      onfocus: vnode.attrs.onfocus,
      onblur: vnode.attrs.onblur
    })), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/errors/getErrorClass.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/errors/getErrorClass.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getErrorClass; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isVNode(object) {
  return typeof object.tag === "string" && object.attrs != null && _typeof(object.attrs) === "object";
}
/**
 * returns class for existing errors, warnings or no-error
 */


function getErrorClass(errors) {
  if (errors == null || errors.length === 0) {
    return "no-error";
  }

  for (var i = 0, l = errors.length; i < l; i += 1) {
    var error = errors[i];

    if (isVNode(error) || typeof error === "string") {
      return "has-error";
    } else if (error && error.severity !== "warning") {
      return "has-error";
    }
  }

  return "has-warning";
}

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/errors/index.js ***!
  \***********************************************************************************/
/*! exports provided: getErrorClass, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getErrorClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getErrorClass */ "./node_modules/mithril-material-forms/distmodule/components/errors/getErrorClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getErrorClass", function() { return _getErrorClass__WEBPACK_IMPORTED_MODULE_1__["default"]; });

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function isVNode(object) {
  return typeof object.tag === "string" && object.attrs != null && _typeof(object.attrs) === "object";
}

function isError(object) {
  return object && object.message;
}


/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(vnode) {
    var errors = vnode.attrs.errors;

    if (errors == null || errors.length === 0) {
      return "";
    }

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.mmf-form__errors", errors.map(function (error) {
      if (isVNode(error)) {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-form__error.mmf-form__error--".concat(error.attrs.severity), error);
      }

      if (isError(error)) {
        if (error.severity === "warning") {
          return mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-form__error.mmf-form__error--warning", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(error.message));
        }

        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-form__error.mmf-form__error--error", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(error.message));
      }

      return mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-form__error.mmf-form__error--error", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(error));
    }));
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/imagepreview/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/imagepreview/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isEmpty */ "./node_modules/mithril-material-forms/distmodule/components/isEmpty.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RATIO_DEFAULT = [16, 9];
/** returns ratio as css-property */

var getRatioStyleProperty = function getRatioStyleProperty(ratio) {
  return "padding-bottom: ".concat(getRatio(ratio).toFixed(2), "%;");
};

function getRatio(ratio) {
  var dim = ratio.split(":").map(parseFloat);
  dim = dim.length === 2 ? dim : RATIO_DEFAULT;
  return 100 * dim[1] / dim[0];
}

var MetaDescription = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    return [Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__placeholder", attrs.placeholder) : [attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__description", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(attrs.description)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__overflow-indicator")], vnode.children];
  }
};
var InlineImage = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__content", {
      style: !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) && getRatioStyleProperty(attrs.maxRatio),
      oncreate: attrs.oncreate
    }, Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__placeholder", attrs.placeholder) : [mithril__WEBPACK_IMPORTED_MODULE_0___default()("img", {
      src: attrs.url,
      onload: attrs.onload
    }), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__description", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(attrs.description)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview__overflow-indicator")], vnode.children);
  }
};
var ImagePreview = {
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

    var attrs = _objectSpread({
      url: null,
      "class": "",
      asBackgroundImage: false,
      description: null,
      placeholder: null,
      onclick: null,
      maxRatio: "16:9",
      // "private"
      onload: function onload(event) {
        return _this.updateRatio(vnode.attrs.maxRatio, event.currentTarget);
      },
      oncreate: function oncreate(content) {
        _this.overflowContainer = content.dom;
      }
    }, vnode.attrs);

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-preview.mmf-preview--image", {
      "class": attrs["class"] + (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) ? "" : " with-image"),
      style: attrs.asBackgroundImage && !Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.url) && "background-image: url(".concat(attrs.url, ");")
    }, attrs.asBackgroundImage ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(MetaDescription, attrs, vnode.children) : mithril__WEBPACK_IMPORTED_MODULE_0___default()(InlineImage, attrs, vnode.children));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ImagePreview);

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/input/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/input/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  value: null,
  hasFocus: false,
  view: function view(_ref) {
    var _this = this;

    var attrs = _ref.attrs;

    var _a, _b, _c;

    var value = attrs.value;

    if (this.hasFocus && this.value != null) {
      // this will remove any changes applied to this data from "outside"
      value = this.value;
    }

    this.value = value;
    var inputAttributes = {
      // id: if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
      "data-id": attrs.id,
      "class": "".concat((_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"], " ").concat((_b = attrs["class"]) !== null && _b !== void 0 ? _b : ""),
      disabled: attrs.disabled,
      placeholder: attrs.placeholder,
      type: (_c = attrs.type) !== null && _c !== void 0 ? _c : "text",
      value: value,
      oninput: function oninput(e) {
        return _this.value = e.target.value;
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

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.mmf-input", inputAttributes);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/inputform/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/inputform/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input */ "./node_modules/mithril-material-forms/distmodule/components/input/index.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony import */ var _sanitizeValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sanitizeValue */ "./node_modules/mithril-material-forms/distmodule/components/inputform/sanitizeValue.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var TYPES = {
  string: "text",
  integer: "number",
  number: "number"
};
var InputForm = {
  oncreate: function oncreate(vnode) {
    this.$form = vnode.dom;
  },
  updateClasses: function updateClasses(value) {
    var hasValue = value !== "";
    this.$form.classList.remove(hasValue ? "is-empty" : "not-empty");
    this.$form.classList.add(hasValue === false ? "is-empty" : "not-empty");
  },
  onfocus: function onfocus() {
    this.$form.classList.add("has-focus");
    this.$form.classList.remove("no-focus");
  },
  onblur: function onblur(value) {
    this.$form.classList.add("no-focus");
    this.$form.classList.remove("has-focus");
    this.updateClasses(value);
  },
  hasFocus: function hasFocus() {
    return this.$form && this.$form.classList.contains("has-focus");
  },
  view: function view(vnode) {
    var _this = this;

    var _a;

    var inputType = TYPES[vnode.attrs.type] || vnode.attrs.type || "text";

    var attrs = _objectSpread({
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

    var focusClass = this.hasFocus() ? "has-focus" : "no-focus";
    var errorClass = Object(_errors__WEBPACK_IMPORTED_MODULE_4__["getErrorClass"])(attrs.errors);
    var emptyClass = attrs.value === "" ? "is-empty" : "not-empty";
    var view = mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-form.mmf-form--input.is-".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": "".concat(focusClass, " ").concat(errorClass, " ").concat(emptyClass, " ").concat((_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_5__["THEME_DEFAULT"])
    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], attrs, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: inputType,
      id: attrs.id,
      disabled: attrs.disabled,
      theme: attrs.theme,
      instantUpdate: attrs.instantUpdate,
      placeholder: attrs.placeholder,
      onchange: function onchange(value) {
        return attrs.onchange(Object(_sanitizeValue__WEBPACK_IMPORTED_MODULE_3__["default"])(inputType, value));
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
    })), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_4__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
    return view;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (InputForm);

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/inputform/sanitizeValue.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/inputform/sanitizeValue.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sanitizeValue; });
function sanitizeValue(type, value) {
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
}

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/isEmpty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/isEmpty.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
/** returns true, if value is undefined or an empty string */
function isEmpty(value) {
  return value == null || value === "";
}

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/label/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/label/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(vnode) {
    var _vnode$attrs = vnode.attrs,
        invertOrder = _vnode$attrs.invertOrder,
        title = _vnode$attrs.title,
        classNames = _vnode$attrs["class"];

    if (invertOrder === true) {
      return mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.order--label-last", {
        "class": classNames
      }, vnode.children, title && mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.mmf-label", title));
    }

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.order--label-first", {
      "class": classNames
    }, title && mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.mmf-label", title), vnode.children);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/list/getParentByClassname.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/list/getParentByClassname.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** helper to retrieve correct (targetClass) target-element of an event.target */
function getParentByClassname(current, targetClass) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

  if (current === parent) {
    return undefined;
  } else if (current.classList.contains(targetClass)) {
    return current;
  }

  return getParentByClassname(current.parentNode, targetClass, parent);
}

/* harmony default export */ __webpack_exports__["default"] = (getParentByClassname);

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/list/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/list/index.js ***!
  \*********************************************************************************/
/*! exports provided: displayRenderer, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayRenderer", function() { return displayRenderer; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getParentByClassname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentByClassname */ "./node_modules/mithril-material-forms/distmodule/components/list/getParentByClassname.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");



/** default render function for item content rendering */

function displayRenderer(item, attrs) {
  return mithril__WEBPACK_IMPORTED_MODULE_0___default()("span", item[attrs.valueProp]);
}
/**
 * standard list component with additional item hover-, highlight- and selection-support
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(_ref) {
    var attrs = _ref.attrs;

    var _a;

    var items = attrs.items,
        _attrs$valueProp = attrs.valueProp,
        valueProp = _attrs$valueProp === void 0 ? "value" : _attrs$valueProp,
        selectedIndex = attrs.selectedIndex,
        onSelect = attrs.onSelect,
        onHover = attrs.onHover,
        displayRenderer = attrs.displayRenderer;

    if (items.length === 0 || items.length === 1 && items[0][valueProp] === "") {
      return mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment({}, "");
    }

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.mmf-list", {
      "class": (_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_2__["THEME_DEFAULT"],
      onmousedown: onSelect ? function (event) {
        var target = Object(_getParentByClassname__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target, "mmf-list__item");

        if (!target) {
          return;
        }

        var index = items.findIndex(function (item) {
          return item[valueProp] === target.dataset.value;
        });

        if (index >= 0) {
          onSelect(index);
        }
      } : null
    }, items.map(function (item, index) {
      return mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.mmf-list__item", {
        "data-value": item[valueProp],
        "class": "".concat(item["class"] ? item["class"] : "", " ").concat(index === selectedIndex ? "is-selected" : ""),
        onmouseenter: onHover ? function (event) {
          var target = event.target;
          var index = items.findIndex(function (item) {
            return item[valueProp] === target.dataset.value;
          });

          if (index >= 0) {
            onHover(index);
          }
        } : null
      }, displayRenderer(item, attrs));
    }));
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/popover/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/popover/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * places a panel to the specified dom-element
 *
 * **usage**
 *
 * ```js
 *    // render popover with contents and store popover-instance for controls
 *    m.render(dom, m(Popover, {
 *       onmount: popover => (this.popover = popover)
 *     },
 *     // and render contents
 *     m(Contents))
 *   );
 *   // later, update contents in popover
 *   this.popover.render(m(Contents, {}))
 *   // place and show popover at target dom element
 *   this.popover.show(targetElement)
 *   // hide popover
 *   this.popover.hide()
 * ```
 */

var Popover = {
  oncreate: function oncreate(vnode) {
    vnode.attrs.onmount(vnode.state);
  },
  onremove: function onremove() {
    var container = document.body;

    if (container.contains(this.dom)) {
      mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, null);
      container.removeChild(this.dom);
    }
  },
  hide: function hide() {
    this.dom.classList.add("is-hidden");
    this.dom.classList.remove("is-visible");
  },
  render: function render(content) {
    mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, content);
  },
  show: function show(targetElement) {
    this.dom.classList.add("is-visible");
    this.dom.classList.remove("is-hidden");
    var bound = targetElement.getBoundingClientRect();
    this.dom.style.setProperty("--target-width", "".concat(bound.width, "px"));
    this.placeBelow(targetElement, bound);
  },
  placeAbove: function placeAbove(targetElement) {
    var bound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : targetElement.getBoundingClientRect();

    if (targetElement.offsetParent === document.body) {
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      this.dom.style.top = "unset";
      this.dom.style.left = "".concat(bound.left + scrollX, "px");
      this.dom.style.bottom = "".concat(document.body.scrollHeight - scrollY - bound.bottom + bound.height, "px");
      return;
    }

    var offset = targetElement.offsetParent.getBoundingClientRect();
    this.dom.style.top = "unset";
    this.dom.style.left = "".concat(bound.left - offset.left, "px");
    this.dom.style.bottom = "".concat(offset.bottom - bound.bottom + bound.height, "px");
  },
  placeBelow: function placeBelow(targetElement) {
    var bound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : targetElement.getBoundingClientRect();

    if (targetElement.offsetParent === document.body) {
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      this.dom.style.left = "".concat(bound.left + scrollX, "px");
      this.dom.style.top = "".concat(bound.top + scrollY + bound.height, "px");
      return;
    }

    var offset = targetElement.offsetParent.getBoundingClientRect();
    this.dom.style.left = "".concat(bound.left - offset.left, "px");
    this.dom.style.top = "".concat(bound.top - offset.top + bound.height, "px");
  },
  view: function view(vnode) {
    var _this = this;

    var _a, _b;

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-popover.is-hidden", _objectSpread(_objectSpread({}, vnode.attrs), {}, {
      "class": "".concat((_a = vnode.attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"], " ").concat((_b = vnode.attrs["class"]) !== null && _b !== void 0 ? _b : "").trim(),
      oncreate: function oncreate(_ref) {
        var dom = _ref.dom;
        return _this.dom = dom;
      }
    }), vnode.children);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/querylist/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/querylist/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list */ "./node_modules/mithril-material-forms/distmodule/components/list/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popover */ "./node_modules/mithril-material-forms/distmodule/components/popover/index.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./node_modules/mithril-material-forms/distmodule/components/querylist/search.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var raf = window.requestAnimationFrame;

var isListOfItems = function isListOfItems(suggestions) {
  return Array.isArray(suggestions);
};

var isGetFunction = function isGetFunction(suggestions) {
  return typeof suggestions === "function";
};

/* harmony default export */ __webpack_exports__["default"] = ({
  hasFocus: false,
  currentIndex: 0,
  showCurrentInput: false,
  valueProp: "name",
  displayRenderer: _list__WEBPACK_IMPORTED_MODULE_0__["displayRenderer"],
  resizeTimer: null,
  updateFilter: function updateFilter() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$list$unshift;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getSuggestions(_this.value);

            case 2:
              _this.list = _context.sent;

              if (_this.showCurrentInput) {
                _this.list.unshift((_this$list$unshift = {}, _defineProperty(_this$list$unshift, _this.valueProp, _this.value), _defineProperty(_this$list$unshift, "class", "is-value"), _this$list$unshift));
              }

              _this.updateCompletions();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  oncreate: function oncreate(_ref) {
    var _this2 = this;

    var attrs = _ref.attrs;
    var suggestions = attrs.suggestions;

    if (isListOfItems(suggestions)) {
      this.getSuggestions = function (value) {
        return Object(_search__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestions, value, 10, attrs.searchProp || _this2.valueProp);
      };
    } else if (isGetFunction(suggestions)) {
      this.getSuggestions = suggestions;
    } else {
      this.getSuggestions = function () {
        return Promise.resolve([]);
      };
    }
  },
  updateCompletions: function updateCompletions() {
    var _this3 = this;

    this.currentIndex = this.currentIndex < 0 ? 0 : Math.min(this.list.length - 1, this.currentIndex);
    this.popover.render(mithril__WEBPACK_IMPORTED_MODULE_1___default()(_list__WEBPACK_IMPORTED_MODULE_0__["default"], {
      items: this.list,
      theme: this.theme,
      valueProp: this.valueProp,
      selectedIndex: this.currentIndex,
      displayRenderer: this.displayRenderer,
      onSelect: function onSelect(index) {
        var value = _this3.list[index][_this3.valueProp];
        _this3.value = value;
        _this3.input.value = value;
      },
      onHover: function onHover(index) {
        _this3.currentIndex = index;

        _this3.updateCompletions();
      }
    }));
  },
  updateSelection: function updateSelection(e) {
    var key = e.key; // goto previous suggestion in list

    if (key === "ArrowUp") {
      e.stopPropagation();
      e.preventDefault();

      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
        this.updateCompletions();
      } // goto next suggestion in list

    } else if (key === "ArrowDown") {
      e.stopPropagation();
      e.preventDefault();

      if (this.currentIndex < this.list.length - 1) {
        this.currentIndex += 1;
        this.updateCompletions();
      } // get selected suggestion, insert it into input and leave input field

    } else if (key === "Enter") {
      var value = this.list[this.currentIndex][this.valueProp];
      this.value = value;
      this.input.value = value;
      this.input.blur(); // blur input, close panel (consistent with mouse selection)
    }
  },
  view: function view(_ref2) {
    var _this4 = this;

    var attrs = _ref2.attrs;

    var _a;

    var value = attrs.value;

    if (this.hasFocus && this.value != null) {
      // this will remove any changes applied to this data from "outside"
      value = this.value;
    }

    this.value = value;
    var valueProp = attrs.valueProp,
        displayRenderer = attrs.displayRenderer,
        showCurrentInput = attrs.showCurrentInput,
        theme = attrs.theme;
    this.valueProp = valueProp !== null && valueProp !== void 0 ? valueProp : this.valueProp;
    this.displayRenderer = displayRenderer !== null && displayRenderer !== void 0 ? displayRenderer : this.displayRenderer;
    this.showCurrentInput = showCurrentInput === true;
    this.theme = theme !== null && theme !== void 0 ? theme : _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"];
    var inputAttributes = {
      "data-id": attrs.id,
      "class": "".concat(this.theme, " ").concat((_a = attrs["class"]) !== null && _a !== void 0 ? _a : ""),
      disabled: attrs.disabled,
      placeholder: attrs.placeholder,
      type: "text",
      value: value,
      oncreate: function oncreate(_ref3) {
        var dom = _ref3.dom;
        return _this4.input = dom;
      },
      oninput: function oninput(e) {
        return _this4.value = e.target.value;
      },
      onfocus: function () {
        var _onfocus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
          var _a;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this4.hasFocus = true;
                  attrs.onfocus && attrs.onfocus(event);
                  _context2.next = 4;
                  return _this4.updateFilter();

                case 4:
                  (_a = _this4.popover) === null || _a === void 0 ? void 0 : _a.show(_this4.input);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function onfocus(_x) {
          return _onfocus.apply(this, arguments);
        }

        return onfocus;
      }(),
      onblur: function onblur(event) {
        _this4.hasFocus = false;
        attrs.onblur && attrs.onblur(event);
        raf(function () {
          var _a;

          return (_a = _this4.popover) === null || _a === void 0 ? void 0 : _a.hide();
        }); // delay closing of popover to prevent race conditions
      },
      onkeydown: function onkeydown(event) {
        return _this4.updateSelection(event);
      },
      onchange: function onchange() {
        return attrs.onchange(_this4.value);
      },
      onkeyup: function () {
        var _onkeyup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
          var ignoreKeys;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this4.updateFilter();

                case 2:
                  ignoreKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Enter"];

                  if (attrs.instantUpdate && !ignoreKeys.includes(event.key)) {
                    attrs.onchange(_this4.value);
                  }

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function onkeyup(_x2) {
          return _onkeyup.apply(this, arguments);
        }

        return onkeyup;
      }()
    };
    return [mithril__WEBPACK_IMPORTED_MODULE_1___default()("input.mmf-input", inputAttributes), mithril__WEBPACK_IMPORTED_MODULE_1___default()(_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onmount: function onmount(panel) {
        return _this4.popover = panel;
      },
      theme: attrs.theme
    })];
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/querylist/search.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/querylist/search.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return search; });
var DEFAULT_LIMIT = 12;
/**
 * @todo Consider using an word based search approach. Possibly using an
 * existing implementation, e.g. https://github.com/mattyork/fuzzy/tree/master/lib
 * and using `fuzzy.match` only
 *
 * @param  haystack
 * @param  needle
 * @param  limit    - result-limit
 * @return results
 */

function search(haystack, needle) {
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LIMIT;
  var prop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "value";
  var matches = [];
  var lowerCaseNeedle = needle.toLowerCase();

  if (needle === "") {
    return Promise.resolve(matches);
  }

  function byPosition(a, b) {
    var aIndex = a[prop].toLowerCase().indexOf(lowerCaseNeedle);
    var bIndex = b[prop].toLowerCase().indexOf(lowerCaseNeedle);

    if (aIndex === bIndex) {
      return a[prop].length - b[prop].length; // shortest string
    }

    return aIndex - bIndex;
  }

  var regStartsWith = new RegExp("^".concat(needle.replace(" ", ".*")), "i");

  for (var i = 0, l = haystack.length; i < l; i += 1) {
    if (regStartsWith.test(haystack[i][prop])) {
      matches.push(haystack[i]);

      if (matches.length >= limit) {
        break;
      }
    }
  }

  var regContains = new RegExp(needle.replace(" ", ".*"), "i");

  if (matches.length >= limit) {
    return Promise.resolve(matches.sort(byPosition));
  }

  for (var _i = 0, _l = haystack.length; _i < _l; _i += 1) {
    if (regContains.test(haystack[_i][prop]) && matches.indexOf(haystack[_i]) === -1) {
      matches.push(haystack[_i]);

      if (matches.length >= limit) {
        break;
      }
    }
  }

  return Promise.resolve(matches.sort(byPosition));
}

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/querylistform/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/querylistform/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _querylist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../querylist */ "./node_modules/mithril-material-forms/distmodule/components/querylist/index.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = ({
  oncreate: function oncreate(vnode) {
    this.$form = vnode.dom;
  },
  updateClasses: function updateClasses(value) {
    var hasValue = value !== "";
    this.$form.classList.remove(hasValue ? "is-empty" : "not-empty");
    this.$form.classList.add(hasValue === false ? "is-empty" : "not-empty");
  },
  onfocus: function onfocus() {
    this.$form.classList.add("has-focus");
    this.$form.classList.remove("no-focus");
  },
  onblur: function onblur(value) {
    this.$form.classList.add("no-focus");
    this.$form.classList.remove("has-focus");
    this.updateClasses(value);
  },
  hasFocus: function hasFocus() {
    return this.$form && this.$form.classList.contains("has-focus");
  },
  view: function view(vnode) {
    var _this = this;

    var _a;

    var attrs = _objectSpread({
      id: null,
      value: "",
      errors: [],
      invertOrder: false,
      description: "",
      onblur: Function.prototype,
      onfocus: Function.prototype,
      onchange: Function.prototype
    }, vnode.attrs);

    var focusClass = this.hasFocus() ? "has-focus" : "no-focus";
    var errorClass = Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors);
    var emptyClass = attrs.value === "" ? "is-empty" : "not-empty";
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-form.mmf-form--query-list.is-".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": "".concat(focusClass, " ").concat(errorClass, " ").concat(emptyClass, " ").concat((_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"])
    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, attrs), {}, {
      invertOrder: attrs.invertOrder
    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_querylist__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, attrs), {}, {
      onfocus: function onfocus(e) {
        _this.onfocus();

        attrs.onfocus && attrs.onfocus(e);
      },
      onblur: function onblur(e) {
        _this.onblur(e.target.value);

        attrs.onblur && attrs.onblur(e);
      }
    }))), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/radiobuttons/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/radiobuttons/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./node_modules/mithril-material-forms/distmodule/components/button/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  oncreate: function oncreate(vnode) {
    this.buttons = Array.from(vnode.dom.querySelectorAll("button")).map(function (dom) {
      return {
        value: dom.value,
        dom: dom
      };
    });
  },
  view: function view(vnode) {
    var _this = this;

    var _vnode$attrs = vnode.attrs,
        value = _vnode$attrs.value,
        options = _vnode$attrs.options,
        disabled = _vnode$attrs.disabled,
        theme = _vnode$attrs.theme;
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-radio-btn-container", {
      disabled: disabled,
      "class": theme || "",
      oncreate: function oncreate(_vnode) {
        return _this.$container = _vnode.dom;
      }
    }, options.map(function (option) {
      var icon = option.icon ? mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.mmf-icon", {
        value: option.value
      }, option.icon) : undefined;
      var label = mithril__WEBPACK_IMPORTED_MODULE_0___default()("span", {
        "class": "mmf-radio-label"
      }, option.title || option.value);
      var attrs = {
        theme: theme,
        disabled: disabled ? disabled : option.disabled || false,
        title: option.title || option.value,
        "class": "".concat(option.value === value ? "selected" : "", " mmf-radio-btn"),
        value: option.value,
        // track button element and value
        onclick: function onclick() {
          if (disabled || option.disabled) return;

          _this.buttons.forEach(function (button) {
            return button.dom.classList.toggle("selected", button.value === option.value);
          });

          vnode.attrs.onchange(option.value);
        }
      };
      return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_button__WEBPACK_IMPORTED_MODULE_1__["default"], attrs, icon, label);
    }));
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/radiobuttonsform/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/radiobuttonsform/index.js ***!
  \*********************************************************************************************/
/*! exports provided: defaultFormOptions, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFormOptions", function() { return defaultFormOptions; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radiobuttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../radiobuttons */ "./node_modules/mithril-material-forms/distmodule/components/radiobuttons/index.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var defaultFormOptions = {
  theme: _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"],
  errors: [],
  description: ""
};
/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(vnode) {
    var attrs = _objectSpread(_objectSpread({}, defaultFormOptions), vnode.attrs);

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-form.mmf-form--radio-buttons.is-".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": "".concat(Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors), " ").concat(attrs.theme)
    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, attrs)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_radiobuttons__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, attrs)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/select/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/select/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


var isOptionValue = function isOptionValue(option) {
  return option && option.value !== undefined;
};

var transformOptions = function transformOptions(options) {
  return options.map(function (option) {
    return typeof option === "string" ? {
      value: option
    } : option;
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(vnode) {
    var _this = this;

    var attrs = vnode.attrs;
    var _vnode$attrs$theme = vnode.attrs.theme,
        theme = _vnode$attrs$theme === void 0 ? "the-default" : _vnode$attrs$theme;
    var options = transformOptions(attrs.options);
    var option = options.find(function (o) {
      return o.value === attrs.value;
    });
    var activeClass = attrs.disabled === true ? "is-disabled" : "is-enabled";
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-select__wrapper", {
      "class": "".concat(theme, " ").concat(activeClass, " ").concat((option === null || option === void 0 ? void 0 : option.color) ? "with-color" : ""),
      oncreate: function oncreate(_vnode) {
        return _this.$wrapper = _vnode.dom;
      }
    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.select-icon", {
      style: "background-color: ".concat(option === null || option === void 0 ? void 0 : option.color),
      oncreate: function oncreate(_vnode) {
        return _this.$icon = _vnode.dom;
      }
    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()("select.mmf-select", {
      "data-id": attrs.id,
      value: attrs.value,
      disabled: attrs.disabled,
      "class": attrs["class"],
      onfocus: function onfocus() {
        _this.$wrapper && _this.$wrapper.classList.add("has-focus");
        attrs.onfocus && attrs.onfocus(vnode);
      },
      onblur: function onblur() {
        _this.$wrapper && _this.$wrapper.classList.remove("has-focus");
        attrs.onblur && attrs.onblur(vnode);
      },
      onchange: function onchange(e) {
        var option = options === null || options === void 0 ? void 0 : options.find(function (o) {
          return o.value === e.target.value;
        });

        _this.$wrapper.classList.toggle("with-color", (option === null || option === void 0 ? void 0 : option.color) != null);

        _this.$icon.style.setProperty("background-color", option === null || option === void 0 ? void 0 : option.color);

        if (attrs.onchange) attrs.onchange(e.target.value);
      }
    }, attrs.options.map(function (value) {
      if (isOptionValue(value)) {
        // value must be a string or else is discarded
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option", {
          value: "".concat(value.value)
        }, value.title || value.value);
      }

      return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option", {
        value: "".concat(value)
      }, value);
    })));
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/selectform/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/selectform/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select */ "./node_modules/mithril-material-forms/distmodule/components/select/index.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(vnode) {
    var _a;

    var attrs = _objectSpread({
      id: null,
      value: "",
      options: [{
        title: "-",
        value: false
      }],
      errors: [],
      invertOrder: false,
      description: ""
    }, vnode.attrs);

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-form.mmf-form--select.is-".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": "".concat((_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_4__["THEME_DEFAULT"], " ").concat(Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors))
    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({
      "class": "mmf-grow-2"
    }, attrs), {}, {
      invertOrder: attrs.invertOrder
    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_select__WEBPACK_IMPORTED_MODULE_1__["default"], attrs)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/switch/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/switch/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.mmf-switch", {
      "data-id": attrs.id,
      type: "checkbox",
      "class": attrs.theme || _types__WEBPACK_IMPORTED_MODULE_1__["THEME_DEFAULT"],
      disabled: attrs.disabled === true,
      checked: attrs.value,
      onchange: function onchange(e) {
        return attrs.onchange(e.target.checked);
      },
      onfocus: attrs.onfocus,
      onblur: attrs.onblur
    });
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/switchform/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/switchform/index.js ***!
  \***************************************************************************************/
/*! exports provided: defaultOptions, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch */ "./node_modules/mithril-material-forms/distmodule/components/switch/index.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var defaultOptions = {
  id: null,
  title: "",
  disabled: false,
  theme: "the-default",
  value: "",
  errors: [],
  description: "",
  onchange: Function.prototype
};
/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(vnode) {
    var attrs = _objectSpread(_objectSpread({}, defaultOptions), vnode.attrs);

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-form.mmf-form--switch.is-".concat(attrs.disabled ? "disabled" : "enabled"), {
      "class": "".concat(Object(_errors__WEBPACK_IMPORTED_MODULE_3__["getErrorClass"])(attrs.errors), " ").concat(attrs.theme)
    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, attrs), {}, {
      invertOrder: attrs.invertOrder !== true
    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: vnode.attrs.id,
      disabled: attrs.disabled,
      theme: attrs.theme,
      value: vnode.attrs.value,
      onchange: vnode.attrs.onchange,
      onfocus: vnode.attrs.onfocus,
      onblur: vnode.attrs.onblur
    })), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_3__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-meta", attrs.description), vnode.children);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/textarea/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/textarea/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosize */ "./node_modules/mithril-material-forms/node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./node_modules/mithril-material-forms/distmodule/components/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var raf = window.requestAnimationFrame;
var emptyFunction = Function.prototype;
/* harmony default export */ __webpack_exports__["default"] = ({
  "boolean": false,
  onupdate: function onupdate(vnode) {
    raf(function () {
      return autosize__WEBPACK_IMPORTED_MODULE_1___default.a.update(vnode.dom);
    });
  },
  view: function view(vnode) {
    var _this = this;

    var _a, _b;

    var attrs = _objectSpread({
      value: "",
      rows: 1,
      placeholder: "",
      disabled: false,
      instantUpdate: false,
      onblur: emptyFunction,
      onfocus: emptyFunction,
      onchange: emptyFunction,
      oncreate: emptyFunction,
      onbeforeremove: emptyFunction
    }, vnode.attrs);

    var disabled = attrs.disabled === true;

    if (this.focus) {
      // keep current value, while input is being active this prevents
      // jumps in cursor, caused by race conditions
      // @attention - this may produce other problems
      attrs.value = this.textarea.value;
    }

    var textareaAttributes = {
      "data-id": attrs.id,
      value: attrs.value,
      "class": "".concat((_a = attrs.theme) !== null && _a !== void 0 ? _a : _types__WEBPACK_IMPORTED_MODULE_2__["THEME_DEFAULT"], " ").concat((_b = attrs["class"]) !== null && _b !== void 0 ? _b : ""),
      rows: attrs.rows,
      disabled: disabled,
      placeholder: attrs.placeholder,
      onblur: function onblur(e) {
        _this.focus = false;
        attrs.onblur && attrs.onblur(e);
      },
      onfocus: function onfocus(e) {
        _this.focus = true;
        attrs.onfocus && attrs.onfocus(e);
      },
      onupdate: function onupdate(node) {
        return autosize__WEBPACK_IMPORTED_MODULE_1___default.a.update(node.dom);
      },
      oncreate: function oncreate(node) {
        _this.textarea = node.dom;
        attrs.oncreate(node);
        autosize__WEBPACK_IMPORTED_MODULE_1___default()(node.dom);
        autosize__WEBPACK_IMPORTED_MODULE_1___default.a.update(node.dom);
      },
      onbeforeremove: function onbeforeremove(node) {
        attrs.onbeforeremove(node);
        autosize__WEBPACK_IMPORTED_MODULE_1___default.a.destroy(node.dom);
      }
    };
    var updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";

    textareaAttributes[updateEvent] = function (e) {
      return attrs.onchange(e.target.value);
    };

    return mithril__WEBPACK_IMPORTED_MODULE_0___default()("textarea.mmf-textarea", textareaAttributes);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/textareaform/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/textareaform/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isEmpty */ "./node_modules/mithril-material-forms/distmodule/components/isEmpty.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../textarea */ "./node_modules/mithril-material-forms/distmodule/components/textarea/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






/* harmony default export */ __webpack_exports__["default"] = ({
  oncreate: function oncreate(vnode) {
    this.$form = vnode.dom;
    this.onblur(vnode.attrs.value);
  },
  onfocus: function onfocus() {
    this.$form.classList.remove("no-focus");
    this.$form.classList.add("has-focus");
  },
  onblur: function onblur(value) {
    this.$form.classList.remove("has-focus");
    this.$form.classList.add("no-focus");
    this.updateClasses(value);
  },
  updateClasses: function updateClasses(value) {
    var hasValue = Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(value) === false;
    this.$form.classList.remove(hasValue ? "is-empty" : "not-empty");
    this.$form.classList.add(hasValue === false ? "is-empty" : "not-empty");
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
      theme: "the-default",
      instantUpdate: false,
      onblur: Function.prototype,
      onfocus: Function.prototype,
      onchange: Function.prototype
    }, vnode.attrs);

    var disabled = attrs.disabled === true;
    return mithril__WEBPACK_IMPORTED_MODULE_3___default()(".mmf-form.mmf-form--textarea.is-".concat(disabled ? "disabled" : "enabled"), {
      "class": "".concat(attrs.theme, " ").concat(Object(_errors__WEBPACK_IMPORTED_MODULE_0__["getErrorClass"])(attrs.errors))
    }, mithril__WEBPACK_IMPORTED_MODULE_3___default()(_label__WEBPACK_IMPORTED_MODULE_2__["default"], attrs, mithril__WEBPACK_IMPORTED_MODULE_3___default()(_textarea__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: attrs.id,
      value: attrs.value,
      disabled: disabled,
      theme: attrs.theme,
      instantUpdate: attrs.instantUpdate,
      placeholder: attrs.placeholder,
      rows: attrs.rows,
      onchange: attrs.onchange,
      onblur: function onblur(e) {
        _this.onblur(e.target.value);

        attrs.onblur(e);
      },
      onfocus: function onfocus(e) {
        _this.onfocus();

        attrs.onfocus(e);
      }
    })), mithril__WEBPACK_IMPORTED_MODULE_3___default()(_errors__WEBPACK_IMPORTED_MODULE_0__["default"], attrs), attrs.description && mithril__WEBPACK_IMPORTED_MODULE_3___default()(".mmf-meta", attrs.description), vnode.children);
  }
});

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/components/types.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/components/types.js ***!
  \****************************************************************************/
/*! exports provided: THEME_DEFAULT */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_DEFAULT", function() { return THEME_DEFAULT; });
var THEME_DEFAULT = "the-default";

/***/ }),

/***/ "./node_modules/mithril-material-forms/distmodule/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mithril-material-forms/distmodule/index.js ***!
  \*****************************************************************/
/*! exports provided: Button, ButtonForm, Checkbox, CheckboxForm, Errors, getErrorClass, ImagePreview, Input, InputForm, Label, QueryList, QueryListForm, RadioButtons, RadioButtonsForm, Select, SelectForm, Switch, SwitchForm, Textarea, TextareaForm */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button */ "./node_modules/mithril-material-forms/distmodule/components/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_buttonform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/buttonform */ "./node_modules/mithril-material-forms/distmodule/components/buttonform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonForm", function() { return _components_buttonform__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkbox */ "./node_modules/mithril-material-forms/distmodule/components/checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_checkboxform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkboxform */ "./node_modules/mithril-material-forms/distmodule/components/checkboxform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxForm", function() { return _components_checkboxform__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/errors */ "./node_modules/mithril-material-forms/distmodule/components/errors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _components_errors__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getErrorClass", function() { return _components_errors__WEBPACK_IMPORTED_MODULE_4__["getErrorClass"]; });

/* harmony import */ var _components_imagepreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/imagepreview */ "./node_modules/mithril-material-forms/distmodule/components/imagepreview/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return _components_imagepreview__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/input */ "./node_modules/mithril-material-forms/distmodule/components/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _components_input__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_inputform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inputform */ "./node_modules/mithril-material-forms/distmodule/components/inputform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputForm", function() { return _components_inputform__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/label */ "./node_modules/mithril-material-forms/distmodule/components/label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _components_label__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_querylist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/querylist */ "./node_modules/mithril-material-forms/distmodule/components/querylist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryList", function() { return _components_querylist__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _components_querylistform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/querylistform */ "./node_modules/mithril-material-forms/distmodule/components/querylistform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryListForm", function() { return _components_querylistform__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _components_radiobuttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/radiobuttons */ "./node_modules/mithril-material-forms/distmodule/components/radiobuttons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtons", function() { return _components_radiobuttons__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _components_radiobuttonsform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/radiobuttonsform */ "./node_modules/mithril-material-forms/distmodule/components/radiobuttonsform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsForm", function() { return _components_radiobuttonsform__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/select */ "./node_modules/mithril-material-forms/distmodule/components/select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _components_select__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _components_selectform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/selectform */ "./node_modules/mithril-material-forms/distmodule/components/selectform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectForm", function() { return _components_selectform__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/switch */ "./node_modules/mithril-material-forms/distmodule/components/switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _components_switch__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _components_switchform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/switchform */ "./node_modules/mithril-material-forms/distmodule/components/switchform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchForm", function() { return _components_switchform__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/textarea */ "./node_modules/mithril-material-forms/distmodule/components/textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _components_textarea__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _components_textareaform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/textareaform */ "./node_modules/mithril-material-forms/distmodule/components/textareaform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaForm", function() { return _components_textareaform__WEBPACK_IMPORTED_MODULE_18__["default"]; });





















/***/ }),

/***/ "./node_modules/mithril-material-forms/node_modules/autosize/dist/autosize.js":
/*!************************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/node_modules/autosize/dist/autosize.js ***!
  \************************************************************************************/
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

/***/ "./node_modules/nanoevents/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanoevents/index.js ***!
  \******************************************/
/*! exports provided: createNanoEvents */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNanoEvents", function() { return createNanoEvents; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var createNanoEvents = function createNanoEvents() {
  return {
    events: {},
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _iterator = _createForOfIteratorHelper(this.events[event] || []),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          i.apply(void 0, args);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    on: function on(event, cb) {
      var _this = this;

      ;
      (this.events[event] = this.events[event] || []).push(cb);
      return function () {
        return _this.events[event] = _this.events[event].filter(function (i) {
          return i !== cb;
        });
      };
    }
  };
};



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

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/*! exports provided: default, MultiDrag, Sortable, Swap */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;
var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent; // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)

      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
/* harmony default export */ __webpack_exports__["default"] = (Sortable);


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

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createElement */ "./src/utils/createElement.ts");
/* harmony import */ var _utils_addItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/addItem */ "./src/utils/addItem.ts");
/* harmony import */ var json_schema_library_lib_addValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-schema-library/lib/addValidator */ "./node_modules/json-schema-library/lib/addValidator.js");
/* harmony import */ var json_schema_library_lib_addValidator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_schema_library_lib_addValidator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_createProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createProxy */ "./src/utils/createProxy.ts");
/* harmony import */ var _services_dataservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/dataservice */ "./src/services/dataservice/index.ts");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/i18n */ "./src/utils/i18n.ts");
/* harmony import */ var _services_InstanceService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/InstanceService */ "./src/services/InstanceService.ts");
/* harmony import */ var json_schema_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js");
/* harmony import */ var json_schema_library__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(json_schema_library__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_LocationService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/LocationService */ "./src/services/LocationService.ts");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugin */ "./src/plugin/index.ts");
/* harmony import */ var _services_SchemaService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/SchemaService */ "./src/services/SchemaService.ts");
/* harmony import */ var _utils_selectEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/selectEditor */ "./src/utils/selectEditor.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/global */ "./src/store/global.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var _utils_UISchema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/UISchema */ "./src/utils/UISchema.ts");
/* harmony import */ var _services_ValidationService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/ValidationService */ "./src/services/ValidationService.ts");
/* harmony import */ var _editors_oneofeditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editors/oneofeditor */ "./src/editors/oneofeditor/index.ts");
/* harmony import */ var _editors_arrayeditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editors/arrayeditor */ "./src/editors/arrayeditor/index.ts");
/* harmony import */ var _editors_objecteditor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editors/objecteditor */ "./src/editors/objecteditor/index.ts");
/* harmony import */ var _editors_valueeditor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editors/valueeditor */ "./src/editors/valueeditor/index.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _proxy;





















const { JsonEditor: Core } = json_schema_library__WEBPACK_IMPORTED_MODULE_8___default.a.cores;
/**
 * Main component to build editors. Each editor should receive the controller, which carries all required services
 * for editor initialization
 *
 * # Usage
 *
 * Instantiate the controller
 *
 * ```js
 * import Controller from "editron";
 * // jsonSchema = { type: "object", required: ["title"], properties: { title: { type: "string" } } }
 * const editron = new Controller(jsonSchema);
 * ```
 *
 * or, using all parameters
 *
 * ```js
 *  import Controller from "editron";
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
 */
class Controller {
    /**
     * Create a new editron instance, which will be used to create ui-forms for specific
     * data-points via `controller.createEditor(pointer, dom);`
     *
     * @param [schema] - json schema describing required data/form template
     * @param [data] - initial data for given json-schema
     * @param [options] - configuration options
     * @param [options.editors] - list of editron-editors/widgets to use. Order defines editor to use
     *      (based on editorOf-method)
     * @param [options.plugins] - list of editron-plugins to use
     */
    constructor(schema = { type: "object" }, data = {}, options = {}) {
        var _a, _b;
        /** internal helper. Set to `true`, if editron has been destroyed */
        this.destroyed = false;
        /** active state of editor */
        this.disabled = false;
        /** list of editor-widgets to generate form for this instance */
        this.editors = [];
        /** list of active plugins for this instance */
        this.plugins = [];
        /** editron proxy instance */
        _proxy.set(this, void 0);
        schema = _utils_UISchema__WEBPACK_IMPORTED_MODULE_15__["default"].extendSchema(schema);
        this.options = {
            editors: [],
            addDefaultEditors: true,
            ...options
        };
        if (this.options.addDefaultEditors) {
            this.registerEditor(_editors_oneofeditor__WEBPACK_IMPORTED_MODULE_17__["default"], _editors_arrayeditor__WEBPACK_IMPORTED_MODULE_18__["default"], _editors_objecteditor__WEBPACK_IMPORTED_MODULE_19__["default"], _editors_valueeditor__WEBPACK_IMPORTED_MODULE_20__["default"]);
        }
        this.registerEditor(..._plugin__WEBPACK_IMPORTED_MODULE_10__["default"].getEditors());
        if (Array.isArray(this.options.editors)) {
            this.registerEditor(...this.options.editors);
        }
        this.store = new _store__WEBPACK_IMPORTED_MODULE_14__["default"]();
        this.core = new Core();
        __classPrivateFieldSet(this, _proxy, Object(_utils_createProxy__WEBPACK_IMPORTED_MODULE_3__["default"])(this.options.proxy));
        // add strings and functions for translation
        if ((_a = this.options.i18n) === null || _a === void 0 ? void 0 : _a.strings) {
            Object.assign(_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"].strings, this.options.i18n.strings);
        }
        if ((_b = this.options.i18n) === null || _b === void 0 ? void 0 : _b.errors) {
            Object.assign(_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["translateError"].strings, this.options.i18n.errors);
        }
        _plugin__WEBPACK_IMPORTED_MODULE_10__["default"].getValidators().forEach(([validationType, ...validator]) => {
            try {
                if (validationType === "format") {
                    // @ts-ignore
                    return this.addFormatValidator(...validator);
                }
                else if (validationType === "keyword") {
                    // @ts-ignore
                    return this.addKeywordValidator(...validator);
                }
                throw new Error(`Unknown validation type '${validationType}'`);
            }
            catch (e) {
                console.log("Error:", e.message);
            }
            return false;
        });
        this.services = {
            instances: new _services_InstanceService__WEBPACK_IMPORTED_MODULE_7__["default"](this),
            location: new _services_LocationService__WEBPACK_IMPORTED_MODULE_9__["default"](this.options.locationService),
            data: new _services_dataservice__WEBPACK_IMPORTED_MODULE_4__["default"](this.store),
            schema: new _services_SchemaService__WEBPACK_IMPORTED_MODULE_11__["default"](schema, data, this.core),
            validation: new _services_ValidationService__WEBPACK_IMPORTED_MODULE_16__["default"](this.store, schema, this.core)
        };
        this.service("data").watch(event => {
            switch (event.type) {
                // update container will be called before any editor change-notification this gives us time,
                // to manage update-pointer and destory events of known editors
                case "data:update:container":
                    this.services.instances.updateContainer(event.value.pointer, this, event.value.changes);
                    break;
                // sync latest data and start validation
                case "data:update:after": {
                    let { pointer } = event.value;
                    this.service("schema").setData(this.service("data").get());
                    // @feature selective-validation
                    if (pointer.includes("/")) {
                        // @attention validate parent-object or array, in order to support parent-validators.
                        // any higher validators will still be ignore
                        pointer = pointer.replace(/\/[^/]+$/, "");
                    }
                    setTimeout(() => {
                        const data = this.service("data").getDataByReference();
                        this.destroyed !== true && this.service("validation").validate(data, pointer);
                    });
                    break;
                }
                case "data:update:done":
                    setTimeout(() => this.notifyPlugins("onModifiedData", event.value));
                    break;
            }
        });
        // merge given data with template data and set initial data
        this.setData(data);
        this.resetUndoRedo();
        // enable i18n error-translations
        this.service("validation").setErrorHandler(error => Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["translateError"])(this, error));
        // run initial validation
        this.validateAll();
        // @lifecycle hook initialize on controller ready
        if (Array.isArray(options.plugins)) {
            this.plugins = options.plugins.map(plugin => plugin.initialize(this));
        }
    }
    service(serviceName) {
        return this.services[serviceName];
    }
    getPlugin(pluginId) {
        return this.plugins.find(plugin => plugin.id === pluginId);
    }
    notifyPlugins(method, ...args) {
        this.plugins.forEach(plugin => {
            if (plugin[method]) {
                plugin[method](...args);
            }
        });
    }
    /**
     * @param format - value of _format_
     * @param validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addFormatValidator(format, validator) {
        json_schema_library_lib_addValidator__WEBPACK_IMPORTED_MODULE_2___default.a.format(this.core, format, validator);
    }
    /**
     * @param datatype - JSON-Schema datatype to register attribute, e.g. "string" or "object"
     * @param keyword - custom keyword
     * @param validator - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addKeywordValidator(datatype, keyword, validator) {
        json_schema_library_lib_addValidator__WEBPACK_IMPORTED_MODULE_2___default.a.keyword(this.core, datatype, keyword, validator);
    }
    /** reset undo history */
    resetUndoRedo() {
        this.service("data").resetUndoRedo();
    }
    /**
     * enable or disable the editor input-interaction
     * @param active if false, deactivates editor
     */
    setActive(active = true) {
        const disabled = active === false;
        if (this.disabled === disabled) {
            return;
        }
        this.disabled = disabled;
        this.service("instances").setActive(!this.disabled);
    }
    /** returns the editors active state */
    isActive() {
        return !this.disabled;
    }
    /**
     * Helper to create dom elements via mithril syntax
     * @param selector - a css selector describing the desired element
     * @param attributes - a map of dom attribute:value of the element (reminder className = class)
     * @returns the resulting dom-element (not attached)
     */
    createElement(selector, attributes) {
        return Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(selector, attributes);
    }
    /**
     * Add additional editors to available editors for json-schema rendering.
     * Note, that order is important. First editor to register, will be
     * selected first. Registered editors will be added to start of list.
     * @param editors one or many editors to add to start of editor-list
     */
    registerEditor(...editors) {
        this.editors = [...editors, ...this.editors];
    }
    /**
     * @throws
     * The only entry point to create editors.
     * Use in application and from editors to create (delegate) child editors
     *
     * @param pointer - data pointer to editor in current state
     * @param element - parent element of create editor. Will be appended automatically
     * @param [options] - individual editor options
     * @returns created editor-instance or undefined;
     */
    createEditor(pointer, element, options) {
        assertValidPointer(pointer);
        if (element == null) {
            throw new Error(`Missing ${pointer == null ? "pointer" : "element"} in createEditor`);
        }
        // merge schema["editron:ui"] object with options. options precede
        const instanceOptions = {
            pointer,
            disabled: this.disabled,
            ..._utils_UISchema__WEBPACK_IMPORTED_MODULE_15__["default"].copyOptions(pointer, this),
            ...options
        };
        instanceOptions.attrs = {
            // "data-title": instanceOptions.title,
            ...instanceOptions.attrs
        };
        // find a matching editor
        const EditorConstructor = Object(_utils_selectEditor__WEBPACK_IMPORTED_MODULE_12__["default"])(this.editors, pointer, this, instanceOptions);
        if (EditorConstructor === false) {
            return undefined;
        }
        if (EditorConstructor === undefined) {
            this.options.log && console.warn(`Could not resolve an editor for ${pointer}`, this.service("schema").get(pointer));
            return undefined;
        }
        // @lifecycle hook to modify options
        this.plugins.filter(plugin => plugin.onEditorOptions)
            .forEach(plugin => plugin.onEditorOptions(pointer, instanceOptions));
        // iniitialize editor and notify instance manager
        const editor = new EditorConstructor(pointer, this, instanceOptions);
        const dom = editor.getElement();
        element.appendChild(dom);
        this.services.instances.add(editor);
        editor.update({ type: "active", value: !instanceOptions.disabled });
        // @lifecycle hook create widget
        this.plugins.filter(plugin => plugin.onCreateEditor)
            .forEach(plugin => plugin.onCreateEditor(pointer, editor, instanceOptions));
        return editor;
    }
    /**
     * Call this method, to destroy your editors, deregistering its instance on editron
     * @param editor - editor instance to remove
     */
    destroyEditor(editor) {
        var _a;
        if (!editor) {
            return;
        }
        // @lifecycle hook destroy widget
        this.plugins.filter(plugin => plugin.onDestroyEditor)
            .forEach(plugin => plugin.onDestroyEditor(editor.getPointer(), editor));
        this.services.instances.remove(editor);
        // controller inserted child and removes it here again
        const $element = editor.getElement();
        (_a = $element === null || $element === void 0 ? void 0 : $element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild($element);
        editor.destroy();
    }
    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param pointer - to array on which to insert the child
     * @param index - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer, index = 0) {
        Object(_utils_addItem__WEBPACK_IMPORTED_MODULE_1__["default"])(this.service("data"), this.service("schema"), this.services.location, pointer, index);
        // @todo this might be a wrong falsy check within gson-pointer
        this.services.location.focusInputElement(gson_pointer__WEBPACK_IMPORTED_MODULE_5___default.a.join(pointer, `${index}`, true));
    }
    /**
     * @returns proxy instance
     */
    proxy() { return __classPrivateFieldGet(this, _proxy); }
    /**
     * Set the application data
     * @param data - json data matching registered json-schema
     */
    setData(data, options) {
        data = this.service("schema").addDefaultData(data);
        this.service("data").set("#", data, options);
    }
    /**
     * @param [pointer="#"] - location of data to fetch. Defaults to root (all) data
     * @returns data at the given location
     */
    getData(pointer = "#") {
        return this.service("data").get(pointer);
    }
    /**
     * Change the new schema for the current data
     * @param schema   - a valid json-schema
     */
    setSchema(schema) {
        schema = _utils_UISchema__WEBPACK_IMPORTED_MODULE_15__["default"].extendSchema(schema);
        this.service("validation").set(schema);
        this.service("schema").setSchema(schema);
    }
    getSchema(pointer) {
        return this.service("schema").get(pointer);
    }
    /** @debug return editron and global-state */
    getStates() {
        return [this.store.getState(), Object(_store_global__WEBPACK_IMPORTED_MODULE_13__["getState"])()];
    }
    /** returns the parent editor */
    getParentEditor(editor) {
        let node = editor.getElement();
        while (node.parentNode !== null && node.parentNode !== document.body) {
            node = node.parentNode;
            if (node.dataset.point) {
                return this.service("instances").editorFromElement(node);
            }
        }
    }
    /** returns the root editor of the editor tree */
    getRootEditor(editor) {
        let node = editor.getElement();
        let root = node;
        while (node.parentNode !== null && node.parentNode !== document.body) {
            node = node.parentNode;
            if (node.dataset.point) {
                root = node;
            }
        }
        return this.service("instances").editorFromElement(root);
    }
    /** start validation of current data */
    validateAll() {
        setTimeout(() => this.destroyed !== true && this.service("validation").validate(this.service("data").getDataByReference()));
    }
    /** Destroy the editor, its widgets and services */
    destroy() {
        if (this.destroyed === true) {
            return;
        }
        this.destroyed = true;
        Object.keys(this.services).forEach(id => this.services[id].destroy());
    }
}
_proxy = new WeakMap();
/** throws an error, when given pointer is not a valid jons-pointer */
function assertValidPointer(pointer) {
    if (pointer == null || pointer[0] !== "#") {
        throw new Error(`Invalid json(schema)-pointer: ${pointer}`);
    }
}


/***/ }),

/***/ "./src/components/actions/index.ts":
/*!*****************************************!*\
  !*** ./src/components/actions/index.ts ***!
  \*****************************************/
/*! exports provided: renderAction */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAction", function() { return renderAction; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/distmodule/index.js");


function renderAction(action) {
    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        class: action.classNames,
        disabled: action.disabled(),
        onclick: () => action.action()
    }, mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.mmf-icon", action.icon), action.title && mithril__WEBPACK_IMPORTED_MODULE_0___default()("span", action.title));
}


/***/ }),

/***/ "./src/components/container/index.ts":
/*!*******************************************!*\
  !*** ./src/components/container/index.ts ***!
  \*******************************************/
/*! exports provided: CHILD_CONTAINER_SELECTOR, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHILD_CONTAINER_SELECTOR", function() { return CHILD_CONTAINER_SELECTOR; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ "./src/components/header/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors */ "./src/components/errors/index.ts");
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../description */ "./src/components/description/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/components/actions/index.ts");





const CHILD_CONTAINER_SELECTOR = ".ed-children";
/**
 * @view ContainerView
 * A Container Component is used for any non-value like object or arrays. They hold other values. This group may expose
 * a group-title and errors. Any childnodes must go to the container '.jed-container__children'.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    getChildContainer($element) {
        const $childContainer = $element.querySelector(CHILD_CONTAINER_SELECTOR);
        if ($childContainer == null) {
            throw new Error("Container-Component hast not yet been rendered");
        }
        return $childContainer;
    },
    view(vnode) {
        const { hideTitle, insertAction } = vnode.attrs;
        return [
            hideTitle === true ? null : mithril__WEBPACK_IMPORTED_MODULE_0___default()(_header__WEBPACK_IMPORTED_MODULE_1__["default"], vnode.attrs),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(_description__WEBPACK_IMPORTED_MODULE_3__["default"], vnode.attrs),
            vnode.children,
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(_errors__WEBPACK_IMPORTED_MODULE_2__["default"], vnode.attrs),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(CHILD_CONTAINER_SELECTOR),
            insertAction && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-separator.mmf-row", Object(_actions__WEBPACK_IMPORTED_MODULE_4__["renderAction"])(insertAction)),
        ];
    }
});


/***/ }),

/***/ "./src/components/description/index.ts":
/*!*********************************************!*\
  !*** ./src/components/description/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_populated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/populated */ "./src/utils/populated.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        return Object(_utils_populated__WEBPACK_IMPORTED_MODULE_1__["default"])(vnode.attrs.description, mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-description.mmf-meta", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(vnode.attrs.description)));
    }
});


/***/ }),

/***/ "./src/components/errors/index.ts":
/*!****************************************!*\
  !*** ./src/components/errors/index.ts ***!
  \****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        if (Array.isArray(vnode.attrs.errors) === false || vnode.attrs.errors.length === 0) {
            return null;
        }
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.ed-errors", vnode.attrs.errors.map(error => mithril__WEBPACK_IMPORTED_MODULE_0___default()("li", { "class": `is-${error.severity || "error"}` }, error.message)));
    }
});


/***/ }),

/***/ "./src/components/header/index.ts":
/*!****************************************!*\
  !*** ./src/components/header/index.ts ***!
  \****************************************/
/*! exports provided: CHILD_CONTAINER_SELECTOR, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHILD_CONTAINER_SELECTOR", function() { return CHILD_CONTAINER_SELECTOR; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_populated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/populated */ "./src/utils/populated.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/components/actions/index.ts");



const CHILD_CONTAINER_SELECTOR = ".ed-header__children";
function getClass(hasAction, { title, icon, disabled }) {
    let classname = `${title !== "" ? "with-title" : "no-title"}`;
    classname += ` ${hasAction ? "with-actions" : "no-actions"}`;
    classname += ` ${icon !== "" ? "with-icon" : "no-icon"}`;
    classname += disabled ? " is-disabled" : "";
    return classname;
}
/* harmony default export */ __webpack_exports__["default"] = ({
    getChildContainer($element) {
        const $childContainer = $element.querySelector(CHILD_CONTAINER_SELECTOR);
        if ($childContainer == null) {
            throw new Error("Container-Component hast not yet been rendered");
        }
        return $childContainer;
    },
    view(vnode) {
        if (vnode.attrs.hideHeader) {
            return;
        }
        const attrs = {
            icon: "",
            title: "",
            disabled: false,
            ...vnode.attrs
        };
        const { actions } = attrs;
        const hasAction = (actions === null || actions === void 0 ? void 0 : actions.length) > 0;
        const withTitle = hasAction || attrs.title !== "" || attrs.icon !== "";
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-header", {
            "class": getClass(hasAction, attrs)
        }, withTitle && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-header__title", Object(_utils_populated__WEBPACK_IMPORTED_MODULE_1__["default"])(vnode.attrs.icon, mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.mmf-icon", attrs.icon)), (!attrs.hideTitle) && mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", attrs.title), vnode.children), vnode.attrs.headerContent && mithril__WEBPACK_IMPORTED_MODULE_0___default()(CHILD_CONTAINER_SELECTOR), (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-header__actions", actions.map(action => Object(_actions__WEBPACK_IMPORTED_MODULE_2__["renderAction"])(action))));
    }
});


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Container, ContainerDescription, ContainerErrors, ContainerHeader, Overlay, OverlaySelectTiles */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/components/container/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description */ "./src/components/description/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerDescription", function() { return _description__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./src/components/errors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerErrors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/components/header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerHeader", function() { return _header__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay */ "./src/components/overlay/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _overlay__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _overlayselecttiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlayselecttiles */ "./src/components/overlayselecttiles/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlaySelectTiles", function() { return _overlayselecttiles__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/components/overlay/index.ts":
/*!*****************************************!*\
  !*** ./src/components/overlay/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/distmodule/index.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/i18n */ "./src/utils/i18n.ts");
/* harmony import */ var _utils_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/isEmpty */ "./src/utils/isEmpty.ts");




/**
 * Content overlay
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const { header, container, fullscreen, abortButton, onAbort, onSave, confirmButton } = vnode.attrs;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("section.ed-overlay__card", {
            "class": fullscreen ? "ed-overlay__card--fullscreen" : null
        }, !Object(_utils_isEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(header) && mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-card__header", mithril__WEBPACK_IMPORTED_MODULE_0___default()("h1", header)), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-card__content", {
            oncreate: contentNode => contentNode.dom.appendChild(container)
        }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-card__footer", abortButton && mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["Button"], { onclick: onAbort }, Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])(abortButton)), confirmButton && mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["Button"], { onclick: onSave, raised: true }, Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_2__["translate"])(confirmButton))));
    }
});


/***/ }),

/***/ "./src/components/overlayselecttiles/Tile.ts":
/*!***************************************************!*\
  !*** ./src/components/overlayselecttiles/Tile.ts ***!
  \***************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-form-box", {
            "data-value": vnode.attrs.value,
            "data-type": vnode.attrs.title.toLowerCase() // @uitest
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-form-box__content", mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-form-box__title", [
            vnode.attrs.icon ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mmf-icon", vnode.attrs.icon) : "",
            vnode.attrs.title
        ]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-form-box__description", vnode.attrs.description)));
    }
});


/***/ }),

/***/ "./src/components/overlayselecttiles/index.ts":
/*!****************************************************!*\
  !*** ./src/components/overlayselecttiles/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ "./src/components/overlayselecttiles/Tile.ts");


const CLASSNAME = "ed-overlay-tiles";
const noop = (value) => { }; // eslint-disable-line
function getDataValue(node) {
    while (node.parentNode &&
        node.getAttribute("data-value") == null &&
        node.className.includes(CLASSNAME) === false) {
        node = node.parentNode;
    }
    return node.getAttribute("data-value");
}
/**
 * Overlay content to pick options. Displayed as tiles
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    view(vnode) {
        const attrs = {
            value: 0,
            options: [{ title: "Keine Optionen angegeben", value: -1 }],
            onchange: noop,
            ...vnode.attrs
        };
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.${CLASSNAME}`, {
            onclick: (e) => {
                const value = getDataValue(e.target);
                if (value != null) {
                    // @todo event-target being may be unexpected
                    attrs.onchange(value);
                }
            }
        }, attrs.options.map(tile => mithril__WEBPACK_IMPORTED_MODULE_0___default()(_Tile__WEBPACK_IMPORTED_MODULE_1__["default"], {
            active: attrs.value === tile.value,
            title: tile.title,
            icon: tile.icon,
            description: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(tile.description),
            value: tile.value
        })));
    }
});


/***/ }),

/***/ "./src/editors/AbstractEditor.ts":
/*!***************************************!*\
  !*** ./src/editors/AbstractEditor.ts ***!
  \***************************************/
/*! exports provided: getTypeClass, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeClass", function() { return getTypeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractEditor; });
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
 *      2. an `update(event)`-method to respond to changes
 *
 * Convenience methods are
 *
 *      - `getData()` to fetch the associated data of the current _pointer_
 *      - `setData(newValue)` to update the associated data of the current _pointer_
 *      - `getSchema()` returning the json-schema of the current _pointer_
 *      - `getErrors()` returning a list of current errors
 *      - `getElement()` gives you the root dom-node for this editor (aka render target)
 *      - `focus()` and `blur()` to manage the selection state of the current input (requires correct placement of _id_)
 *
 * @param pointer - pointer referencing the current data and schema
 * @param controller - editron controller instance
 * @param options - resolved options object
 */
class AbstractEditor {
    constructor(pointer, controller, options) {
        this.pointer = pointer;
        this.controller = controller;
        this.options = options;
        const schema = this.getSchema();
        this.dom = this.controller
            .createElement(`.ed-${getTypeClass(schema)}`, options.attrs);
        if (schema.format) {
            this.dom.classList.add(`ed-${getTypeClass(schema)}--${schema.format}`);
        }
    }
    static editorOf(pointer, controller, options) {
        throw new Error("Missing editorOf-method in custom editor");
    }
    update(event) {
        throw new Error("Missing implementation of method 'update' in custom editor");
    }
    getData() {
        return this.controller.service("data").get(this.pointer);
    }
    setData(data) {
        return this.controller.service("data").set(this.pointer, data);
    }
    getErrors() {
        return this.controller.service("validation").getErrorsAndWarnings(this.pointer);
    }
    getSchema() {
        return this.controller.service("schema").get(this.pointer);
    }
    getPointer() {
        return this.pointer;
    }
    getElement() {
        return this.dom;
    }
    focus() {
        this.controller.service("location").setCurrent(this.pointer);
    }
    blur() {
        this.controller.service("location").blur(this.pointer);
    }
    destroy() {
        throw new Error("Missing implementation of method 'destroy' in custom editor");
    }
}


/***/ }),

/***/ "./src/editors/AbstractValueEditor.ts":
/*!********************************************!*\
  !*** ./src/editors/AbstractValueEditor.ts ***!
  \********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractValueEditor; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

const convert = {
    boolean(value) {
        if (value === "true") {
            return true;
        }
        else if (value === "false") {
            return false;
        }
        return value;
    },
    integer(value) {
        const converted = parseInt(value);
        if (isNaN(converted) === false) {
            return converted;
        }
        return value;
    },
    number(value) {
        const converted = parseFloat(value);
        if (isNaN(converted) === false) {
            return converted;
        }
        return value;
    }
};
/**
 * Convenience class, which registers required events and base methods for value-editors (not object, array)
 */
class AbstractValueEditor {
    /**
     * options
     *    - editorValueType:String - custom type of editor value (added as classname)
     *    - editorElementProperties:Object - add custom properties to main DOM-element
     *    - viewModel:Object - viewModel which extends base viewmodel
     *
     * @param pointer - json pointer to value
     * @param controller - json editor controller
     * @param options
     */
    constructor(pointer, controller, options) {
        this.notifyNestedChanges = false;
        this.controller = controller;
        this.options = options;
        this.pointer = pointer;
        this.notifyNestedChanges = options.notifyNestedChanges || this.notifyNestedChanges;
        const schema = controller.service("schema").get(pointer);
        options = {
            viewModel: null,
            title: null,
            description: null,
            editorValueType: schema.enum ? schema.format === "radio" ? schema.format : "select" : schema.type,
            editorElementProperties: null,
            ...options
        };
        // create main DOM-element for view-generation
        this.dom = controller.createElement(`.ed-value.ed-value--${options.editorValueType}`, { ...options.attrs });
        if (schema.format) {
            this.dom.classList.add(`.ed-${options.editorValueType}--${schema.type}`);
        }
        // use this model to generate the view. may be customized with `options.viewModel`
        this.viewModel = {
            pointer,
            title: options.title,
            description: options.description,
            value: controller.service("data").get(pointer),
            instantUpdate: options.instantUpdate,
            schema,
            options,
            errors: controller.service("validation").getErrorsAndWarnings(pointer),
            theme: schema.theme,
            onfocus: () => controller.service("location").setCurrent(pointer),
            onblur: () => controller.service("location").blur(pointer),
            onchange: value => this.setValue(convert[schema.type] ? convert[schema.type](value) : value),
            ...options.viewModel
        };
    }
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }
    update(event) {
        if (this.viewModel == null) {
            console.log("%c abort update VALUE", "background: yellow;", event);
            return;
        }
        switch (event.type) {
            case "pointer": {
                const pointer = event.value;
                // this.dom.setAttribute("name", `editor-${pointer}`);
                this.viewModel.pointer = pointer;
                this.viewModel.onfocus = () => this.controller.service("location").setCurrent(pointer);
                break;
            }
            case "data:update":
                this.viewModel.value = this.controller.service("data").get(this.getPointer());
                this.viewModel.disabled = !this.controller.isActive();
                break;
            case "validation:errors":
                this.viewModel.errors = event.value;
                break;
            case "active":
                this.viewModel.disabled = event.value === false;
                if (this.viewModel.options) {
                    this.viewModel.options.disabled = this.viewModel.disabled;
                }
                break;
            default:
                console.log("unknown event type", event);
        }
        this.render();
    }
    focus() {
        this.controller.service("location").setCurrent(this.pointer);
    }
    blur() {
        this.controller.service("location").blur(this.pointer);
    }
    // do not trigger rendering here. data-observer will notify change event
    setValue(value) {
        this.controller.service("data").set(this.pointer, value);
    }
    getValue() {
        return this.controller.service("data").get(this.pointer);
    }
    // update view
    render() {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", "Overwrite AbstractValueEditor.render() to generate view"));
    }
    getPointer() {
        return this.pointer;
    }
    // return main dom element
    getElement() {
        return this.dom;
    }
    // destroy this editor
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        // destroy this editor only once
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()("i"));
        this.viewModel = null;
        this.dom = null;
    }
}


/***/ }),

/***/ "./src/editors/arrayeditor/ArrayItem.ts":
/*!**********************************************!*\
  !*** ./src/editors/arrayeditor/ArrayItem.ts ***!
  \**********************************************/
/*! exports provided: EditorTarget, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorTarget", function() { return EditorTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArrayItemEditor; });
/* harmony import */ var _components_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/actions */ "./src/components/actions/index.ts");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/array */ "./src/utils/array.ts");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_4__);





const ActionsView = {
    view(vnode) {
        const { disabled, actions } = vnode.attrs;
        return mithril__WEBPACK_IMPORTED_MODULE_4___default()(".ed-actions", {
            class: disabled ? "is-disabled" : "is-enabled"
        }, mithril__WEBPACK_IMPORTED_MODULE_4___default()("i.mmf-icon.interactive", "more_vert"), mithril__WEBPACK_IMPORTED_MODULE_4___default()("ul", actions === null || actions === void 0 ? void 0 : actions.map(action => mithril__WEBPACK_IMPORTED_MODULE_4___default()("li", Object(_components_actions__WEBPACK_IMPORTED_MODULE_0__["renderAction"])(action)))));
    }
};
const EditorTarget = ".ed-item";
class ArrayItemEditor {
    constructor(pointer, controller, options) {
        // eslint-disable-next-line max-len
        this.$element = controller.createElement(".ed-child", options.attrs);
        this.controller = controller;
        this.passActions = (options === null || options === void 0 ? void 0 : options.passActions) === true;
        this.viewModel = {
            ...options,
            insert: undefined,
            pointer,
            length: options.length,
            index: ArrayItemEditor.getIndex(pointer),
            actions: this.createActions(options)
        };
        if (options === null || options === void 0 ? void 0 : options.insert) {
            this.viewModel.insert = {
                icon: "add",
                title: options.insertTitle,
                disabled: () => options.disabled,
                action: this.add.bind(this)
            };
        }
        this.updatePointer(pointer);
        this.render();
        const editorOptions = {
            hideTitle: options.header === true
        };
        if (this.passActions) {
            editorOptions.actions = this.viewModel.actions;
        }
        const $target = this.$element.querySelector(EditorTarget);
        this.editor = controller.createEditor(pointer, $target, editorOptions);
    }
    createActions(controls) {
        const actions = [];
        const { move, remove, clone, add, minItems, maxItems, moveUpTitle, moveDownTitle, removeTitle, cloneTitle, addTitle } = controls;
        if (move) {
            actions.push({
                icon: "arrow_upward",
                title: moveUpTitle,
                disabled: () => this.index === 0,
                action: () => this.move(this.index - 1)
            });
            actions.push({
                icon: "arrow_downward",
                title: moveDownTitle,
                disabled: () => this.index >= this.getLength() - 1,
                action: () => this.move(this.index + 1)
            });
        }
        if (remove) {
            actions.push({
                icon: "delete",
                title: removeTitle,
                disabled: () => this.getLength() <= minItems,
                action: () => this.remove()
            });
        }
        if (clone) {
            actions.push({
                icon: "content_copy",
                title: cloneTitle,
                disabled: () => this.getLength() >= maxItems,
                action: () => this.clone()
            });
        }
        if (add) {
            actions.push({
                icon: "add",
                title: addTitle,
                disabled: () => this.getLength() >= maxItems,
                action: () => this.add()
            });
        }
        return actions;
    }
    add() {
        _utils_array__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(this.parentPointer, this.controller, this.index);
    }
    clone() {
        _utils_array__WEBPACK_IMPORTED_MODULE_1__["default"].cloneItem(this.parentPointer, this.controller, this.index);
    }
    remove() {
        _utils_array__WEBPACK_IMPORTED_MODULE_1__["default"].removeItem(this.parentPointer, this.controller, this.index);
    }
    move(to) {
        _utils_array__WEBPACK_IMPORTED_MODULE_1__["default"].moveItem(this.parentPointer, this.controller, this.index, to);
    }
    getLength() {
        const list = this.controller.service("data").get(this.parentPointer);
        if (Array.isArray(list)) {
            return list.length;
        }
        console.warn(`Invalid array at ${this.parentPointer} for element ${this.index}`);
        return 0;
    }
    disable(isDisabled = false) {
        if (this.viewModel.disabled !== isDisabled) {
            this.viewModel.disabled = isDisabled;
            this.render();
        }
    }
    updatePointer(newPointer) {
        var _a;
        this.index = ArrayItemEditor.getIndex(newPointer);
        this.parentPointer = gson_pointer__WEBPACK_IMPORTED_MODULE_2___default.a.join(newPointer, "..", true);
        this.viewModel.index = ArrayItemEditor.getIndex(newPointer);
        this.viewModel.pointer = newPointer;
        this.viewModel.length = this.getLength();
        this.render();
        // @todo improve missing update of passed header actions
        // @ts-ignore
        this.passActions && ((_a = this.editor) === null || _a === void 0 ? void 0 : _a.render) && this.editor.render();
    }
    getElement() {
        return this.$element;
    }
    getPointer() {
        return this.viewModel.pointer;
    }
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.viewModel = null;
        this.controller.destroyEditor(this.editor);
        this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
    }
    render() {
        const { showIndex, title, length, disabled, insert, header, actions } = this.viewModel;
        mithril__WEBPACK_IMPORTED_MODULE_4___default.a.render(this.$element, [
            mithril__WEBPACK_IMPORTED_MODULE_4___default()(".ed-separator.mmf-row", insert && Object(_components_actions__WEBPACK_IMPORTED_MODULE_0__["renderAction"])(insert)),
            // @todo consider to remove this option
            // optional array-item header (replacing child-header)
            header && mithril__WEBPACK_IMPORTED_MODULE_4___default()(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], { title: title, actions }),
            // actions besides child-editor
            mithril__WEBPACK_IMPORTED_MODULE_4___default()(ActionsView, { disabled, actions }),
            // TARGET CONTAINER FOR EDITOR
            mithril__WEBPACK_IMPORTED_MODULE_4___default()(EditorTarget, {
                "data-index": `${this.index + 1} / ${length}`,
                "class": [
                    disabled ? "is-disabled" : "",
                    showIndex ? "with-index" : ""
                ].join(" ").trim()
            })
        ]);
    }
    static getIndex(pointer) {
        const parentPointer = gson_pointer__WEBPACK_IMPORTED_MODULE_2___default.a.join(pointer, "..");
        return parseInt(pointer.replace(`${parentPointer}/`, ""));
    }
}


/***/ }),

/***/ "./src/editors/arrayeditor/index.ts":
/*!******************************************!*\
  !*** ./src/editors/arrayeditor/index.ts ***!
  \******************************************/
/*! exports provided: defaultOptions, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArrayEditor; });
/* harmony import */ var _ArrayItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayItem */ "./src/editors/arrayeditor/ArrayItem.ts");
/* harmony import */ var _services_utils_diffpatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utils/diffpatch */ "./src/services/utils/diffpatch.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.ts");
/* harmony import */ var _AbstractEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AbstractEditor */ "./src/editors/AbstractEditor.ts");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/array */ "./src/utils/array.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/i18n */ "./src/utils/i18n.ts");







const defaultOptions = {
    add: true,
    addTitle: "add",
    clone: true,
    insert: false,
    insertTitle: "insert",
    move: true,
    remove: true,
    showIndex: false,
    header: false,
    passActions: false,
};
class ArrayEditor extends _AbstractEditor__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(pointer, controller, options) {
        var _a, _b;
        super(pointer, controller, options);
        this.children = [];
        this.dom.classList.add("with-insert-button");
        const schema = this.getSchema();
        this.childOptions = {
            ...defaultOptions,
            moveUpTitle: Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])("array:button:moveup"),
            moveDownTitle: Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])("array:button:movedown"),
            removeTitle: Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])("array:button:remove"),
            cloneTitle: Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_6__["translate"])("array:button:clone"),
            ...options,
            attrs: undefined,
            ...options === null || options === void 0 ? void 0 : options.array,
            length: this.getLength(),
            disabled: false,
            maxItems: schema.maxItems || Infinity,
            minItems: schema.minItems || 0
        };
        this.viewModel = {
            attrs: {},
            disabled: options.disabled === true,
            errors: controller.service("validation").getErrorsAndWarnings(pointer),
            pointer,
            actions: (_a = options.actions) !== null && _a !== void 0 ? _a : [],
            insertAction: {
                icon: "add",
                title: this.childOptions.addTitle,
                disabled: () => this.getLength() < schema.maxItems,
                action: () => _utils_array__WEBPACK_IMPORTED_MODULE_5__["default"].addItem(this.pointer, this.controller, this.getLength())
            },
            ...options
        };
        if (((_b = options.array) === null || _b === void 0 ? void 0 : _b.collapsed) != null) {
            let collapsed = options.array.collapsed === true;
            this.dom.classList.add("is-collapsible");
            this.dom.classList.toggle("is-collapsed", collapsed);
            const collapsedIcon = "visibility_off"; // "keyboard_arrow_right";
            const collapseIcon = "visibility"; // "keyboard_arrow_down"
            const collapseAction = {
                icon: collapsed ? collapsedIcon : collapseIcon,
                classNames: "ed-action--collapse",
                disabled: () => this.viewModel.disabled,
                action: () => {
                    collapsed = !collapsed;
                    collapseAction.icon = collapsed ? collapsedIcon : collapseIcon,
                        this.dom.classList.toggle("is-collapsed", collapsed);
                    this.render(); // redraw container, to update header collapse-icon
                }
            };
            this.viewModel.actions.push(collapseAction);
        }
        this.render();
        this.$items = this.dom.querySelector(_components_container__WEBPACK_IMPORTED_MODULE_3__["CHILD_CONTAINER_SELECTOR"]);
        this.rebuildChildren();
    }
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "array";
    }
    createArrayItem(index) {
        return new _ArrayItem__WEBPACK_IMPORTED_MODULE_0__["default"](`${this.pointer}/${index}`, this.controller, {
            title: `${index}`,
            ...this.childOptions
        });
    }
    getLength() {
        return this.getData().length;
    }
    update(event) {
        if (this.viewModel == null) {
            console.log("%c abort update ARRAY", "background: yellow;", event);
            return;
        }
        switch (event.type) {
            case "data:update":
                this.applyPatches(event.value.patch);
                this.childOptions.length = this.getLength();
                break;
            case "validation:errors":
                this.viewModel.errors = event.value;
                break;
            case "pointer":
                this.viewModel.pointer = event.value;
                this.children.forEach((child, index) => child.updatePointer(`${event.value}/${index}`));
                break;
            case "active": {
                const disabled = event.value === false;
                this.childOptions.disabled = disabled;
                this.children.forEach(child => child.disable(disabled));
                break;
            }
        }
        this.render();
    }
    applyPatches(patch) {
        const { pointer, controller, children, $items } = this;
        // fetch a copy of the original list
        const originalChildren = Array.from(children);
        // and patch the current list
        _services_utils_diffpatch__WEBPACK_IMPORTED_MODULE_1__["default"].patch(children, patch);
        // search for inserted children
        children.forEach((child, index) => {
            if (child instanceof _ArrayItem__WEBPACK_IMPORTED_MODULE_0__["default"] === false) {
                const newChild = this.createArrayItem(index);
                children[index] = newChild;
            }
        });
        // search for removed children (item wrappers)
        originalChildren.forEach(child => {
            if (children.indexOf(child) === -1) {
                child.destroy();
            }
        });
        // update view: move and inserts nodes
        const currentLocation = controller.service("location").getCurrent();
        const changePointer = {};
        for (let i = 0, l = children.length; i < l; i += 1) {
            const previousPointer = children[i].getPointer();
            const currentPointer = `${pointer}/${i}`;
            // update current location
            if (currentLocation.indexOf(previousPointer) === 0) {
                const editorLocation = currentLocation.replace(previousPointer, currentPointer);
                controller.service("location").setCurrent(editorLocation);
            }
            // update child views to match patched list
            if (previousPointer !== currentPointer) {
                changePointer[previousPointer] = currentPointer;
            }
            // this updates the array-item wrapper
            children[i].updatePointer(currentPointer);
            if ($items.children[i] === children[i].getElement()) {
                // skip moving node, already in place
                continue;
            }
            else if (i + 1 < $items.children.length) {
                // move node to correct position
                $items.insertBefore(children[i].getElement(), $items.children[i + 1]);
            }
            else {
                // remaining nodes may be simply appended
                $items.appendChild(children[i].getElement());
            }
        }
    }
    rebuildChildren() {
        const { children, $items } = this;
        const data = this.getData();
        children.forEach((editor) => editor.destroy());
        children.length = 0;
        $items.innerHTML = "";
        // recreate child editors
        data.forEach((item, index) => {
            const childEditor = this.createArrayItem(index);
            $items.appendChild(childEditor.getElement());
            children.push(childEditor);
        });
    }
    render() {
        mithril__WEBPACK_IMPORTED_MODULE_2___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_2___default()(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], this.viewModel));
    }
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.children.forEach((editor) => editor.destroy());
        this.viewModel = null;
        mithril__WEBPACK_IMPORTED_MODULE_2___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_2___default()("i"));
    }
}


/***/ }),

/***/ "./src/editors/autocompleteeditor/index.ts":
/*!*************************************************!*\
  !*** ./src/editors/autocompleteeditor/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteEditor; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/distmodule/index.js");
/* harmony import */ var _AbstractEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AbstractEditor */ "./src/editors/AbstractEditor.ts");



class AutocompleteEditor extends _AbstractEditor__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        this.childEditors = [];
        this.render();
    }
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.format === "autocomplete" && schema.type === "string";
    }
    update() {
        console.log("Update was executed");
    }
    render() {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["QueryListForm"]));
    }
    destroy() {
        console.log('DESTROY WAS EXECTUED');
    }
}


/***/ }),

/***/ "./src/editors/objecteditor/index.ts":
/*!*******************************************!*\
  !*** ./src/editors/objecteditor/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectEditor; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/distmodule/index.js");
/* harmony import */ var _services_OverlayService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/OverlayService */ "./src/services/OverlayService.ts");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.ts");
/* harmony import */ var _AbstractEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AbstractEditor */ "./src/editors/AbstractEditor.ts");






function showJSON(controller, data, title) {
    const element = controller.createElement(".overlay__item.overlay__item--json");
    _services_OverlayService__WEBPACK_IMPORTED_MODULE_2__["default"].open(element, { confirmButton: "ok" });
    // render textarea after it is injected into dom, to correctly update textarea size
    mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(element, mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["TextareaForm"], { title, value: JSON.stringify(data, null, 4) }));
}
class ObjectEditor extends _AbstractEditor__WEBPACK_IMPORTED_MODULE_5__["default"] {
    constructor(pointer, controller, options) {
        var _a, _b;
        super(pointer, controller, options);
        this.childEditors = [];
        this.viewModel = {
            pointer,
            errors: [],
            ...options,
            attrs: options.attrs || {},
            actions: [...options.actions || []]
        };
        if ((_a = options.object) === null || _a === void 0 ? void 0 : _a.delete) {
            this.viewModel.actions.push({
                icon: "delete",
                classNames: "ed-action--delete",
                disabled: () => this.viewModel.disabled,
                action: this.deleteObject.bind(this)
            });
        }
        this.childOptions = {};
        if (options.theme) {
            this.childOptions.theme = options.theme;
        }
        if (((_b = options.object) === null || _b === void 0 ? void 0 : _b.collapsed) != null) {
            this.dom.classList.add("is-collapsible");
            this.dom.classList.toggle("is-collapsed", this.viewModel.collapsed === true);
            const collapsedIcon = "visibility_off"; // "keyboard_arrow_right";
            const collapseIcon = "visibility"; // "keyboard_arrow_down"
            const action = {
                icon: this.viewModel.collapsed ? collapsedIcon : collapseIcon,
                classNames: "ed-action--collapse",
                disabled: () => this.viewModel.disabled,
                action: () => {
                    this.viewModel.collapsed = !this.viewModel.collapsed;
                    action.icon = this.viewModel.collapsed ? collapsedIcon : collapseIcon,
                        this.dom.classList.toggle("is-collapsed", this.viewModel.collapsed === true);
                    this.render(); // redraw container, to update header collapse-icon
                }
            };
            this.viewModel.actions.push(action);
        }
        this.render();
        this.$children = this.dom.querySelector(_components_container__WEBPACK_IMPORTED_MODULE_3__["CHILD_CONTAINER_SELECTOR"]);
        this.$headerChildren = this.dom.querySelector(_components_header__WEBPACK_IMPORTED_MODULE_4__["CHILD_CONTAINER_SELECTOR"]);
        this.update({ type: "data:update", value: null });
    }
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type === "object";
    }
    update(event) {
        if (this.viewModel == null) {
            console.log("%c abort update OBJECT", "background: yellow;", event);
            return;
        }
        switch (event.type) {
            case "data:update": {
                const { pointer, controller, childEditors, $headerChildren, $children } = this;
                const { headerContent } = this.viewModel;
                const data = this.getData();
                childEditors.forEach(editor => controller.destroyEditor(editor));
                childEditors.length = 0;
                $children.innerHTML = "";
                if (data == null) {
                    break;
                }
                // rebuild children
                Object.keys(data)
                    .forEach(property => {
                    const childPointer = `${pointer}/${property}`;
                    const targetContainer = property === headerContent ? $headerChildren : $children;
                    childEditors.push(controller.createEditor(childPointer, targetContainer, this.childOptions));
                });
                break;
            }
            // if we receive errors here, a property may be missing (which should go to schema.getTemplate)
            // or additional, but prohibited properties exist. For the latter, add an option to show and/or
            // delete the property
            case "validation:errors": {
                this.viewModel.errors = event.value.map(error => {
                    if (error.code !== "no-additional-properties-error") {
                        return error;
                    }
                    const message = error.message;
                    const property = error.data.property;
                    return {
                        severity: error.type || "error",
                        message: mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-error.ed-error--object-property", mithril__WEBPACK_IMPORTED_MODULE_0___default()("span", mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(message)), mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.mmf-icon.interactive", { onclick: () => this.showProperty(property) }, "visibility"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.mmf-icon.interactive", { onclick: () => this.deleteProperty(property) }, "clear"))
                    };
                });
                break;
            }
            case "pointer":
                this.viewModel.pointer = event.value;
                break;
            case "active":
                /** de/activate this editors user-interaction */
                this.viewModel.disabled = !event.value;
                break;
        }
        this.render();
    }
    /** deletes this object from data */
    deleteObject() {
        this.controller.service("data").delete(this.pointer);
    }
    /** deletes a property from this object */
    deleteProperty(property) {
        this.controller.service("data").delete(`${this.pointer}/${property}`);
    }
    /** displays the properties json-value */
    showProperty(property) {
        const propertyData = this.controller.service("data").get(`${this.pointer}/${property}`);
        showJSON(this.controller, propertyData, property);
    }
    render() {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], this.viewModel));
    }
    /** destroy editor, view and event-listeners */
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()("i"));
        this.childEditors.forEach(ed => this.controller.destroyEditor(ed));
        this.childEditors.length = 0;
        this.$children.innerHTML = "";
        this.viewModel = null;
    }
}


/***/ }),

/***/ "./src/editors/oneofeditor/index.ts":
/*!******************************************!*\
  !*** ./src/editors/oneofeditor/index.ts ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OneOfEditor; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/distmodule/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.ts");
/* harmony import */ var _AbstractEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AbstractEditor */ "./src/editors/AbstractEditor.ts");
/* harmony import */ var _utils_UISchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/UISchema */ "./src/utils/UISchema.ts");





class OneOfEditor extends _AbstractEditor__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        /** catch inner changes (changes are compared by a diff which may not notify parent pointer) */
        this.notifyNestedChanges = true;
        this.dom.classList.add(`ed-${Object(_AbstractEditor__WEBPACK_IMPORTED_MODULE_3__["getTypeClass"])(this.getSchema())}--oneof`);
        const childSchema = this.getSchema();
        // @special case. Our options lie in `schema.oneOfSchema`
        const schema = childSchema.oneOfSchema;
        // ensure requried titles are set
        schema.oneOf.forEach((oneOfSchema, index) => (oneOfSchema.title = oneOfSchema.title || `${index}.`));
        const oneOfOptions = Object(_utils_UISchema__WEBPACK_IMPORTED_MODULE_4__["getEditronOptions"])(schema) || {};
        console.log("options", oneOfOptions);
        this.schema = schema;
        this.childSchema = childSchema;
        this.viewModel = {
            pointer,
            title: schema.title,
            description: schema.description
        };
        this.selectModel = {
            ...oneOfOptions,
            id: pointer,
            description: undefined,
            options: schema.oneOf.map((oneOf, index) => ({ title: oneOf.title, value: index })),
            onchange: (oneOfIndex) => this.changeChild(schema.oneOf[oneOfIndex]),
            value: this.getIndexOf(childSchema),
        };
        this.render();
        this.$childContainer = this.dom.querySelector(_components_container__WEBPACK_IMPORTED_MODULE_2__["CHILD_CONTAINER_SELECTOR"]);
        this.rebuild();
        this.render();
    }
    static editorOf(pointer, controller, options) {
        const schema = controller.service("schema").get(pointer);
        return schema.oneOfSchema && !schema.items && !options.renderOneOf;
    }
    changeChild(schema) {
        this.controller.destroyEditor(this.childEditor);
        const data = this.controller.service("schema").getTemplate(schema);
        this.controller.service("data").set(this.pointer, data);
    }
    getIndexOf(currentSchema) {
        for (let i = 0, l = this.schema.oneOf.length; i < l; i += 1) {
            if (this.schema.oneOf[i].title === currentSchema.title) {
                return i;
            }
        }
        return 0;
    }
    update(event) {
        switch (event.type) {
            case "data:update": {
                const currentSchema = this.getSchema();
                delete currentSchema.oneOfSchema; // is recreated each time
                if (currentSchema.title === this.childSchema.title) {
                    return;
                }
                this.selectModel.value = this.getIndexOf(currentSchema);
                this.childSchema = currentSchema;
                this.rebuild();
                break;
            }
            case "pointer":
                this.viewModel.pointer = event.value;
                this.selectModel.id = event.value;
                break;
            case "active":
                this.viewModel.disabled = event.value === false;
                this.selectModel.disabled = event.value === false;
                break;
        }
        this.render();
    }
    rebuild() {
        this.controller.destroyEditor(this.childEditor);
        this.$childContainer.innerHTML = "";
        this.childEditor = this.controller.createEditor(this.pointer, this.$childContainer, {
            // @attention this is very important or else we create an infinite loop through selectEditor
            renderOneOf: true
        });
    }
    render() {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_components_container__WEBPACK_IMPORTED_MODULE_2__["default"], this.viewModel, mithril__WEBPACK_IMPORTED_MODULE_0___default()(".ed-value.ed-value--oneof", mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["SelectForm"], this.selectModel))));
    }
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.viewModel = null;
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, "i");
        this.controller.destroyEditor(this.childEditor);
        this.controller.service("data").removeObserver(this.pointer, this.update);
    }
}


/***/ }),

/***/ "./src/editors/valueeditor/View.ts":
/*!*****************************************!*\
  !*** ./src/editors/valueeditor/View.ts ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/distmodule/index.js");
/* harmony import */ var _utils_UISchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/UISchema */ "./src/utils/UISchema.ts");



const TYPES = {
    string: "text",
    integer: "number",
    number: "number"
};
function getInputType(schema) {
    return TYPES[schema.type] || "text";
}
const Component = {
    view(vnode) {
        const { schema, options = {}, onblur, onfocus, onchange, errors, value, pointer } = vnode.attrs;
        if (schema.enum && schema.enum.length > 0 && schema.format === "radio") {
            const radioBtnsModel = {
                value,
                title: options.title,
                errors,
                description: options.description,
                disabled: options.disabled,
                theme: options.theme,
                options: _utils_UISchema__WEBPACK_IMPORTED_MODULE_2__["default"].enumOptions(schema),
                onchange
            };
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["RadioButtonsForm"], radioBtnsModel);
        }
        if (schema.enum && schema.enum.length > 0) {
            const selectFormModel = {
                id: pointer,
                title: options.title,
                description: options.description,
                disabled: options.disabled,
                theme: options.theme,
                errors,
                invertOrder: options.invertOrder,
                value,
                options: _utils_UISchema__WEBPACK_IMPORTED_MODULE_2__["default"].enumOptions(schema),
                onchange,
                onblur,
                onfocus
            };
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["SelectForm"], selectFormModel, vnode.children);
        }
        if (schema.type === "boolean" && schema.format === "switch") {
            const switchModel = {
                id: pointer,
                title: options.title,
                description: options.description,
                disabled: options.disabled,
                theme: options.theme,
                errors,
                value,
                onchange,
                onblur,
                onfocus
            };
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["SwitchForm"], switchModel, vnode.children);
        }
        if (schema.type === "boolean") {
            const checkBoxModel = {
                id: pointer,
                title: options.title,
                description: options.description,
                disabled: options.disabled,
                theme: options.theme,
                errors,
                value,
                onchange,
                onblur,
                onfocus
            };
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxForm"], checkBoxModel, vnode.children);
        }
        if (schema.type === "string" && schema.format === "html") {
            const textareaModel = {
                id: pointer,
                title: options.title,
                description: options.description,
                placeholder: options.placeholder,
                disabled: options.disabled,
                theme: options.theme,
                errors,
                value,
                onchange,
                onblur,
                onfocus
            };
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["TextareaForm"], textareaModel, vnode.children);
        }
        if (schema.type === "string" && schema.format === "textarea") {
            const textareaModel = {
                id: pointer,
                title: options.title,
                description: options.description,
                placeholder: options.placeholder,
                disabled: options.disabled,
                theme: options.theme,
                errors,
                rows: options["textarea:rows"] || 1,
                value,
                onchange,
                onblur,
                onfocus
            };
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["TextareaForm"], textareaModel, vnode.children);
        }
        const inputModel = {
            id: pointer,
            title: options.title,
            description: options.description,
            placeholder: options.placeholder,
            disabled: options.disabled,
            theme: options.theme,
            errors,
            instantUpdate: options.instantUpdate,
            type: getInputType(schema),
            value,
            onchange,
            onblur,
            onfocus
        };
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_1__["InputForm"], inputModel, vnode.children);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (Component);


/***/ }),

/***/ "./src/editors/valueeditor/index.ts":
/*!******************************************!*\
  !*** ./src/editors/valueeditor/index.ts ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValueEditor; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/editors/valueeditor/View.ts");
/* harmony import */ var _AbstractValueEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AbstractValueEditor */ "./src/editors/AbstractValueEditor.ts");



class ValueEditor extends _AbstractValueEditor__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static editorOf(pointer, controller) {
        const schema = controller.service("schema").get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }
    constructor(pointer, controller, options) {
        super(pointer, controller, options);
        this.render();
    }
    render() {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_View__WEBPACK_IMPORTED_MODULE_1__["default"], this.viewModel));
    }
}


/***/ }),

/***/ "./src/plugin/delegationplugin/index.ts":
/*!**********************************************!*\
  !*** ./src/plugin/delegationplugin/index.ts ***!
  \**********************************************/
/*! exports provided: DelegationTarget, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelegationTarget", function() { return DelegationTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DelegationPlugin; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editors_AbstractEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../editors/AbstractEditor */ "./src/editors/AbstractEditor.ts");
/* harmony import */ var mithril_material_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/distmodule/index.js");
/* harmony import */ var _services_OverlayService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/OverlayService */ "./src/services/OverlayService.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/i18n */ "./src/utils/i18n.ts");





class AbstractDelegationEditor extends _editors_AbstractEditor__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(pointer, controller, options) {
        options.isDelegated = true;
        super(pointer, controller, options);
        this.render();
    }
    static editorOf(pointer, controller, options) {
        return options.delegate != null && options.isDelegated !== true;
    }
    update(event) {
        console.log("update delegation pliugin", event);
    }
    delegate(pointer, options) {
        throw new Error("notify has not been implemented in 'DelegationEditor'");
    }
    render() {
        var _a;
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.editron-delegate.editron-delegate--${this.getSchema().type}`, mithril__WEBPACK_IMPORTED_MODULE_0___default()(mithril_material_forms__WEBPACK_IMPORTED_MODULE_2__["Button"], { onclick: () => this.delegate(this.pointer, this.options) }, Object(_utils_i18n__WEBPACK_IMPORTED_MODULE_4__["translate"])(((_a = this.options.delegate) === null || _a === void 0 ? void 0 : _a.buttonText) || "open"))));
    }
    destroy() {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.dom, mithril__WEBPACK_IMPORTED_MODULE_0___default()("o"));
    }
}
var DelegationTarget;
(function (DelegationTarget) {
    DelegationTarget["Overlay"] = "overlay";
})(DelegationTarget || (DelegationTarget = {}));
class DelegationPlugin {
    constructor(options = {}) {
        this.id = "delegation-plugin";
        this.onDelegation = options.onDelegation || this.onDelegation;
        this.dom = document.createElement("div");
    }
    initialize(controller) {
        this.controller = controller;
        class DelegationEditor extends AbstractDelegationEditor {
        }
        DelegationEditor.prototype.delegate = this.delegate.bind(this);
        this.controller.editors.unshift(DelegationEditor);
        return this;
    }
    delegateToOverlay(editor) {
        return _services_OverlayService__WEBPACK_IMPORTED_MODULE_3__["default"]
            .open(editor.getElement(), { abortButton: false })
            .then(() => this.controller.destroyEditor(editor));
    }
    delegate(pointer, options) {
        var _a;
        if (this.current) {
            this.controller.destroyEditor(this.current);
        }
        this.current = this.controller.createEditor(pointer, this.dom, { isDelegated: true });
        if (((_a = options === null || options === void 0 ? void 0 : options.delegate) === null || _a === void 0 ? void 0 : _a.delegateTo) === DelegationTarget.Overlay) {
            this.delegateToOverlay(this.current);
            return;
        }
        if (this.onDelegation) {
            this.onDelegation({
                controller: this.controller,
                pointer,
                editor: this.current
            });
        }
    }
}


/***/ }),

/***/ "./src/plugin/index.ts":
/*!*****************************!*\
  !*** ./src/plugin/index.ts ***!
  \*****************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const editors = [];
const validators = [];
/* harmony default export */ __webpack_exports__["default"] = ({
    /** register an editor (widget) to use in editron-controller */
    editor(constructor) {
        console.log(`register editor ${constructor.name}`);
        editors.push(constructor);
    },
    /**
     * add a custom json-schema format-validator for a specific format value
     * @param _ - unused...
     * @param value - value of property format for this validator (must be unique formatType)
     * @param validator - (format) validation function
     */
    validator(_, value, validator) {
        validators.push(["format", value, validator]);
    },
    /**
     * add a custom keyword-validator for a new keyword
     * @param datatype - datatype, to register keyword
     * @param keywordName - name of the keyword (like oneOf, format, etc)
     * @param validator - (keyword) validation function
     */
    keywordValidator(datatype, keywordName, validator) {
        validators.push(["keyword", datatype, keywordName, validator]);
    },
    /** returns all registered plugin-editors */
    getEditors() {
        return editors;
    },
    /** returns all validation function */
    getValidators() {
        return validators;
    }
});


/***/ }),

/***/ "./src/plugin/remotedataplugin/index.ts":
/*!**********************************************!*\
  !*** ./src/plugin/remotedataplugin/index.ts ***!
  \**********************************************/
/*! exports provided: defaultOptions, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoteDataPlugin; });
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-schema-library/lib/utils/render */ "./node_modules/json-schema-library/lib/utils/render.js");
/* harmony import */ var json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/isEmpty */ "./src/utils/isEmpty.ts");
/* harmony import */ var _utils_UISchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/UISchema */ "./src/utils/UISchema.ts");




const defaultOptions = {
    overwrite: false,
    proxyMethod: "json",
    addToHistory: false
};
class RemoteDataPlugin {
    constructor() {
        this.id = "remote-data-plugin";
        this.remotes = {};
    }
    initialize(controller) {
        this.controller = controller;
        // root pointer is not tracked, run initially to grab config on root
        this.onModifiedData([{ type: "add", pointer: "#" }]);
        return this;
    }
    onModifiedData(changes) {
        changes.forEach(change => {
            if (change.type === "add") {
                const schema = this.controller.service("schema").get(change.pointer);
                const options = Object(_utils_UISchema__WEBPACK_IMPORTED_MODULE_3__["getEditronOptions"])(schema);
                if (options === null || options === void 0 ? void 0 : options.remoteData) {
                    this.createLink(change.pointer, options === null || options === void 0 ? void 0 : options.remoteData);
                }
            }
            else if (change.type === "delete" && this.remotes[change.pointer]) {
                this.destroyLink(change.pointer);
            }
        });
    }
    createLink(pointer, options) {
        // validate options
        const remote = { ...defaultOptions, ...options };
        if (remote.requestParam == null || typeof remote.requestParam !== "string") {
            console.warn(`editron remote-data-plugin: Expected option 'requestParam' to be a string. Given: ${remote.requestParam}`);
            return;
        }
        if (remote.requestParamValues == null || typeof remote.requestParamValues !== "string") {
            console.warn(`editron remote-data-plugin: Expected option 'requestParamValues' to be a string. Given: ${remote.requestParamValues}`);
            return;
        }
        if (remote.responseMapping == null || typeof remote.responseMapping !== "object") {
            console.warn(`editron remote-data-plugin: Expected option 'responseMapping' to be an object. Given: ${remote.responseMapping}`);
            return;
        }
        const { controller } = this;
        const sourcePointer = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(pointer, remote.requestParamValues);
        const observer = async () => this.setRemoteData(pointer, remote);
        controller.service("data").observe(sourcePointer, observer, true);
        // @todo sometimes the pointer does not exist (timing issues?)
        this.setRemoteData(pointer, remote);
        this.remotes[pointer] = {
            options: remote,
            removeObserver: () => {
                controller.service("data").removeObserver(sourcePointer, observer);
            }
        };
    }
    destroyLink(pointer) {
        if (this.remotes[pointer]) {
            this.remotes[pointer].removeObserver();
            this.remotes[pointer] = null;
        }
    }
    async setRemoteData(pointer, remote) {
        const { controller } = this;
        const currentData = controller.service("data").getDataByReference();
        // source of data for url values
        const sourcePointer = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(pointer, remote.requestParamValues);
        let sourceData = controller.service("data").get(sourcePointer);
        if (sourceData == null || sourceData === "") {
            return;
        }
        if (typeof sourceData !== "object") {
            sourceData = { [sourcePointer.split("/").pop()]: sourceData };
        }
        // build request-url from 'url' and sourceData-properties and fetch data
        const remoteUrl = json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_1___default()(remote.requestParam, sourceData);
        const json = await controller.proxy().get(remote.proxyMethod, ({ source: remoteUrl }));
        Object.keys(remote.responseMapping)
            .forEach(key => {
            const targetPointer = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(pointer, remote.responseMapping[key]);
            const currentValue = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.get(currentData, targetPointer);
            if (remote.overwrite !== true && !Object(_utils_isEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(currentValue)) {
                return;
            }
            const targetValue = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.get(json, key);
            try {
                controller.service("data").set(targetPointer, targetValue, { addToHistory: remote.addToHistory });
            }
            catch (error) {
                console.warn(`@todo`, error);
            }
        });
    }
}


/***/ }),

/***/ "./src/plugin/selectionplugin/index.ts":
/*!*********************************************!*\
  !*** ./src/plugin/selectionplugin/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectionPlugin; });
class SelectionPlugin {
    constructor(options) {
        this.id = "selection-plugin";
        // this.onDelegation = options.onDelegation;
        this.dom = document.createElement("div");
        this.onSelect = options.onSelect;
        this.onDeselect = options.onDeselect;
    }
    initialize(controller) {
        this.controller = controller;
        document.body.addEventListener("click", () => this.deselect());
        return this;
    }
    deselect() {
        if (this.currentSelection) {
            const editor = this.currentSelection;
            editor.getElement().classList.remove("selected");
            this.onDeselect({ pointer: editor.getPointer(), editor, options: editor.__selectionPlugin.options });
            this.currentSelection = null;
        }
    }
    select(event, editor) {
        event.stopPropagation();
        if (this.currentSelection === editor) {
            return;
        }
        this.deselect();
        this.currentSelection = editor;
        this.currentSelection.getElement().classList.add("selected");
        // console.log("add class to ", this.currentSelection.getElement());
        this.onSelect({ pointer: editor.getPointer(), editor, options: editor.__selectionPlugin.options });
    }
    onCreateEditor(pointer, editor, options) {
        if (options && options.selectable) {
            editor.__selectionPlugin = {
                options,
                select: event => this.select(event, editor)
            };
            editor.getElement().addEventListener("click", editor.__selectionPlugin.select);
        }
    }
    onDestroyEditor(pointer, editor) {
        if (editor.__selectionPlugin) {
            editor.getElement().removeEventListener("click", editor.__selectionPlugin.select);
            editor.__selectionPlugin = undefined;
            if (this.currentSelection === editor) {
                this.currentSelection = null;
            }
        }
    }
}


/***/ }),

/***/ "./src/plugin/sortableplugin/index.ts":
/*!********************************************!*\
  !*** ./src/plugin/sortableplugin/index.ts ***!
  \********************************************/
/*! exports provided: Sortable, onAddSortable, onEndSortable, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddSortable", function() { return onAddSortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onEndSortable", function() { return onEndSortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortablePlugin; });
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.ts");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return sortablejs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/array */ "./src/utils/array.ts");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_3__);





function onAddSortable(pointer, controller, event) {
    let action = "moved";
    const { from, newIndex, item } = event;
    const schema = controller.service("schema").get(pointer);
    // always remove node - we create it from data
    item.parentNode.removeChild(item);
    if (from.dataset.parent == null) {
        console.log("Add -- create new child from data-property");
        let data;
        try {
            data = JSON.parse(item.dataset.content);
            // for convinience, add missing data
            data = controller.service("schema").core.getTemplate([data], schema)[0];
            action = "created";
        }
        catch (e) {
            console.log("abort - drag element requires attribute 'data-content' with a valid json-string");
            return;
        }
        const toList = controller.service("data").get(pointer);
        toList.splice(newIndex, 0, data);
        controller.service("data").set(pointer, toList);
    }
    return action;
}
function onEndSortable(pointer, controller, event) {
    // const element = event.item;  // dragged HTMLElement
    const { to, from, oldIndex, newIndex } = event;
    if (to === from && oldIndex === newIndex) {
        console.log("drag had no effect");
        return;
    }
    const toPointer = to.dataset.parent;
    const fromPointer = from.dataset.parent;
    // if container or pointer (different editors) are the same, its a move within a list
    if (to === from || (toPointer != null && toPointer === fromPointer)) {
        if (oldIndex === newIndex && to !== from) {
            // item is dragged to the same position, but to another editor. now, the dragged element is removeChild
            // from original list. We readd it here, to fix this
            from.insertBefore(event.item, from.childNodes[oldIndex]);
            return;
        }
        _utils_array__WEBPACK_IMPORTED_MODULE_2__["default"].moveItem(pointer, controller, oldIndex, newIndex);
        return;
    }
    if (to !== from) {
        if (toPointer == null) {
            console.log("undefined `toPointer` on", to);
            return;
        }
        if (fromPointer == null) {
            console.log("undefined `fromPointer` on", from);
            return;
        }
        const toList = controller.service("data").get(toPointer);
        const fromList = controller.service("data").get(fromPointer);
        toList.splice(newIndex, 0, fromList[oldIndex]);
        fromList.splice(oldIndex, 1);
        // join data to make one change request (for undo)
        const rootData = controller.service("data").get();
        gson_pointer__WEBPACK_IMPORTED_MODULE_3___default.a.set(rootData, fromPointer, fromList);
        gson_pointer__WEBPACK_IMPORTED_MODULE_3___default.a.set(rootData, toPointer, toList);
        controller.service("data").set("#", rootData);
    }
}
class SortablePlugin {
    constructor(options = {}) {
        this.id = "sortable-plugin";
        this.options = options;
    }
    initialize(controller) {
        this.controller = controller;
        return this;
    }
    onCreateEditor(pointer, editor, options) {
        var _a, _b;
        const sortableOptions = options === null || options === void 0 ? void 0 : options.sortable;
        if (sortableOptions == null) {
            return;
        }
        const { controller } = this;
        if (((_a = controller.getSchema(pointer)) === null || _a === void 0 ? void 0 : _a.type) !== "array") {
            return;
        }
        const $children = editor.getElement().querySelector(_components_container__WEBPACK_IMPORTED_MODULE_0__["CHILD_CONTAINER_SELECTOR"]);
        if ($children == null) {
            console.log(`sortable plugin - children-container with '${_components_container__WEBPACK_IMPORTED_MODULE_0__["CHILD_CONTAINER_SELECTOR"]}' not found`);
            return;
        }
        // track pointer of child-parent for later retrieval in SortableEvents
        $children.dataset.parent = pointer;
        let hasMoved;
        const sortable = new sortablejs__WEBPACK_IMPORTED_MODULE_1__["default"]($children, {
            group: (_b = sortableOptions.group) !== null && _b !== void 0 ? _b : pointer,
            handle: sortableOptions.handle,
            // onChoose: () => { console.log("choose"); },
            onStart: () => (hasMoved = true),
            onUnchoose: event => {
                const { to, from, oldIndex, newIndex } = event;
                if (hasMoved === false && to === from && newIndex == null) {
                    controller.service("location").setCurrent(`${pointer}/${oldIndex}`);
                }
                hasMoved = false;
            },
            onAdd: (event) => {
                var _a;
                const action = onAddSortable(pointer, controller, event);
                if (action === "created" && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.onAdd)) {
                    requestAnimationFrame(() => this.options.onAdd({ pointer, controller, event }));
                }
            },
            onEnd: (event) => onEndSortable(pointer, controller, event)
        });
        editor.__sortablePlugin = {
            options: sortableOptions,
            $children,
            sortable
        };
    }
    onChangePointer(oldPointer, newPointer, editor) {
        if (editor.__sortablePlugin) {
            const options = editor.__sortablePlugin.options;
            this.onDestroyEditor(oldPointer, editor);
            this.onCreateEditor(newPointer, editor, { sortable: options });
        }
    }
    onDestroyEditor(pointer, editor) {
        if (editor.__sortablePlugin) {
            editor.__sortablePlugin.sortable.destroy();
            editor.__sortablePlugin.$children.dataset.parent = null;
            editor.__sortablePlugin = undefined;
        }
    }
}


/***/ }),

/***/ "./src/plugin/syncplugin/index.ts":
/*!****************************************!*\
  !*** ./src/plugin/syncplugin/index.ts ***!
  \****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SyncPlugin; });
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/isEmpty */ "./src/utils/isEmpty.ts");
/* harmony import */ var _utils_UISchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/UISchema */ "./src/utils/UISchema.ts");



class SyncPlugin {
    constructor() {
        this.id = "sync-plugin";
        this.hooks = {};
    }
    initialize(controller) {
        this.controller = controller;
        // root pointer is not tracked, run initially to grab config on root
        this.onModifiedData([{ type: "add", pointer: "#" }]);
        return this;
    }
    copyData(pointer, syncOptions, previous) {
        const { mappingFromTo: mapping, addToHistory } = syncOptions;
        const { controller } = this;
        const from = Object.keys(mapping);
        const data = controller.getData();
        from
            .forEach(key => {
            // select data
            const fromPointer = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(pointer, key);
            const fromValue = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, fromPointer);
            // update data
            const toPointer = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(pointer, mapping[key]);
            const toValue = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, toPointer);
            if (previous[fromPointer] !== toValue && !Object(_utils_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(toValue)) {
                // console.log("abort sync -- previous", fromPointer, previous, "value:", previous[fromPointer], "current:", toValue);
                return;
            }
            // @todo write test. currently untested - but required. Combination of sync-plugin?
            previous[fromPointer] = fromValue;
            gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.set(data, toPointer, fromValue);
        });
        // write data
        controller.setData(data, { addToHistory });
    }
    onModifiedData(changes) {
        changes.forEach(change => {
            if (change.type === "add") {
                const schema = this.controller.service("schema").get(change.pointer);
                const options = Object(_utils_UISchema__WEBPACK_IMPORTED_MODULE_2__["getEditronOptions"])(schema);
                if (options === null || options === void 0 ? void 0 : options.sync) {
                    this.startSync(change.pointer, options.sync);
                }
            }
            else if (change.type === "delete" && this.hooks[change.pointer]) {
                this.stopSync(change.pointer);
            }
        });
    }
    startSync(pointer, options) {
        if (options == null) {
            return;
        }
        // validate options
        if (options.mappingFromTo == null || typeof options.mappingFromTo !== "object") {
            console.warn(`editron sync-plugin: expected property 'mappingFromTo' in sync-plugin options. Given: ${options.mappingFromTo}`);
            return;
        }
        // @todo listen to change pointer updates
        const { controller } = this;
        const sourcePointers = Object.keys(options.mappingFromTo).map(source => gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(pointer, source));
        // initialize
        const previousData = {};
        const data = controller.getData();
        const observers = [];
        sourcePointers
            .forEach(sourcePointer => {
            // store current data-value
            previousData[sourcePointer] = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, sourcePointer);
            // listen to changes for sync
            const observer = () => this.copyData(pointer, options, previousData);
            controller.service("data").observe(sourcePointer, observer, true);
            observers.push([sourcePointer, observer]);
        });
        // initial sync
        this.copyData(pointer, options, previousData);
        this.hooks[pointer] = {
            removeObservers: () => observers.forEach(([pointer, observer]) => controller.service("data").removeObserver(pointer, observer)),
            options
        };
    }
    stopSync(pointer) {
        var _a;
        (_a = this.hooks[pointer]) === null || _a === void 0 ? void 0 : _a.removeObservers();
        this.hooks[pointer] = undefined;
    }
}


/***/ }),

/***/ "./src/services/InstanceService.ts":
/*!*****************************************!*\
  !*** ./src/services/InstanceService.ts ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstanceService; });
/* harmony import */ var _dataservice_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataservice/change */ "./src/services/dataservice/change.ts");

/**
 * manages editor instance events -
 * tracks and notifies instances over their lifetime on changes
 */
class InstanceService {
    constructor(controller) {
        /** active editor instances */
        this.instances = [];
        this.controller = controller;
    }
    add(editor) {
        const pointer = editor.getPointer();
        editor.getElement().setAttribute("data-point", pointer);
        editor.update = editor.update.bind(editor);
        editor.pointer = pointer;
        this.controller.service("data").observe(pointer, editor.update, editor.notifyNestedChanges);
        this.controller.service("validation").observe(pointer, editor.update, editor.notifyNestedErrors);
        this.instances.push(editor);
    }
    findFrom(parentPointer) {
        return this.instances.filter(editor => editor.getPointer().startsWith(parentPointer));
    }
    editorFromElement(dom) {
        return this.instances.find(editor => editor.dom === dom);
    }
    find(test) {
        return this.instances.filter(test);
    }
    remove(editor) {
        this.controller.service("data").removeObserver(editor.pointer, editor.update);
        this.controller.service("validation").removeObserver(editor.pointer, editor.update);
        this.instances = this.instances.filter(ed => ed !== editor);
    }
    /**
     *  move or delete properties/items before upcoming editor updates
     *  - changes pointers and observers and
     *  - notifies editors
     */
    updateContainer(pointer, controller, changes) {
        const changePointers = [];
        for (let i = 0, l = changes.length; i < l; i += 1) {
            const change = changes[i];
            // we have to collect editors up front or patch-sequences get mangled
            // between update and not yet udpated editor
            if (Object(_dataservice_change__WEBPACK_IMPORTED_MODULE_0__["isMoveChange"])(change)) {
                changePointers.push({
                    ...change,
                    editors: this.findFrom(change.pointer)
                });
                // destroy editor instances
            }
            else if (Object(_dataservice_change__WEBPACK_IMPORTED_MODULE_0__["isDeleteChange"])(change)) {
                this.findFrom(change.pointer).forEach(ed => controller.destroyEditor(ed));
            }
        }
        // change pointer of instances
        changePointers.forEach(change => {
            const { pointer: prevPtr, to: nextPtr, editors } = change;
            editors.forEach((instance) => {
                const oldPointer = instance.pointer;
                const newPointer = instance.getPointer().replace(prevPtr, nextPtr);
                this.controller.service("data")
                    .removeObserver(instance.pointer, instance.update)
                    .observe(newPointer, instance.update, instance.notifyNestedChanges);
                this.controller.service("validation")
                    .removeObserver(instance.pointer, instance.update)
                    .observe(newPointer, instance.update, instance.notifyNestedChanges);
                instance.pointer = newPointer;
                instance.update({ type: "pointer", value: newPointer });
                instance.pointer = newPointer;
                instance.getElement().setAttribute("data-point", newPointer);
                controller.plugins.forEach(plugin => {
                    if (plugin.onChangePointer) {
                        plugin.onChangePointer(oldPointer, newPointer, instance);
                    }
                });
            });
        });
    }
    /** change all editors active-state */
    setActive(active) {
        this.instances.forEach(ed => ed.update({ type: "active", value: active }));
    }
    destroy() {
        this.instances.forEach(instance => instance.destroy());
        this.instances.length = 0;
    }
    /**
     * @debug
     * @returns currently active editor/widget instances sorted by pointer
     */
    getInstancesPerPointer() {
        const map = {};
        this.instances.forEach(editor => {
            const pointer = editor.getPointer();
            map[pointer] = map[pointer] || [];
            if (map[pointer].includes(editor) === false) {
                map[pointer].push(editor);
            }
            else {
                console.log("multiple instances on", editor.getPointer(), editor);
            }
        });
        return map;
    }
}


/***/ }),

/***/ "./src/services/LocationService.ts":
/*!*****************************************!*\
  !*** ./src/services/LocationService.ts ***!
  \*****************************************/
/*! exports provided: defaultOptions, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocationService; });
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/global */ "./src/store/global.ts");
/* harmony import */ var _utils_getScrollParent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getScrollParent */ "./src/services/utils/getScrollParent.ts");

const DELAY = 25;


function getViewportHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
const defaultOptions = {
    rootElement: document.body,
    scrollTopOffset: 0,
    pagePattern: "(^#?/[^/]+)"
};
function isWindow(dom) {
    return dom === window;
}
function scrollIntoView(targetElement, scrollTopOffset = 0) {
    const scrollContainer = Object(_utils_getScrollParent__WEBPACK_IMPORTED_MODULE_2__["default"])(targetElement);
    const bound = targetElement.getBoundingClientRect();
    if (isWindow(scrollContainer)) {
        const viewportHeight = getViewportHeight();
        if (bound.top < scrollTopOffset || bound.bottom > viewportHeight) {
            window.scrollTo(0, bound.top + scrollTopOffset);
        }
        // else { console.log("skip scrolling - already in viewport", viewportHeight, bound.top); }
        return;
    }
    // scroll target element to top of scroll container
    const parentBound = scrollContainer.getBoundingClientRect();
    // distance from parent-container -> element, aka scroll distance
    const offsetInParent = bound.y - parentBound.y;
    const scrollDistance = scrollContainer.scrollTop;
    // we want to scroll element to top of parent-bound
    const scrollPosition = scrollDistance + offsetInParent - scrollTopOffset;
    scrollContainer.scrollTo(0, scrollPosition);
}
class LocationService {
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
     */
    constructor(options = {}) {
        this.PAGE_EVENT = "page";
        this.TARGET_EVENT = "target";
        this.watcher = [];
        this.options = { ...defaultOptions, ...options };
        this.setCurrent("");
        Object(_store_global__WEBPACK_IMPORTED_MODULE_1__["watch"])(event => {
            if (event.type === "global" && event.value.modelId === "ui") {
                const { changes } = event.value;
                if (changes.currentPage) {
                    this.notifyWatcher({ type: "location:page", value: changes.currentPage });
                }
                if (changes.currentPointer) {
                    this.notifyWatcher({ type: "location:target", value: changes.currentPointer });
                }
            }
        });
    }
    // update page and target pointer
    goto(targetPointer, rootElement = this.options.rootElement) {
        const matches = targetPointer.match(new RegExp(this.options.pagePattern));
        if (!matches) {
            return;
        }
        const nextPage = matches.pop();
        const { currentPage } = Object(_store_global__WEBPACK_IMPORTED_MODULE_1__["getState"])().ui;
        if (currentPage !== nextPage) {
            _store_global__WEBPACK_IMPORTED_MODULE_1__["dispatch"].ui.setCurrentPage(gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(nextPage, true));
        }
        _store_global__WEBPACK_IMPORTED_MODULE_1__["dispatch"].ui.setCurrentPointer(gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(targetPointer, true));
        this.focus(rootElement);
    }
    /** set target pointer */
    setCurrent(pointer) {
        if (pointer !== this.getCurrent()) {
            _store_global__WEBPACK_IMPORTED_MODULE_1__["dispatch"].ui.setCurrentPointer(pointer);
            this.notifyWatcher({ type: "focus", value: pointer });
        }
    }
    getCurrent() {
        return Object(_store_global__WEBPACK_IMPORTED_MODULE_1__["getState"])().ui.currentPointer;
    }
    /** trigger focus in input element. Will be ignored, if this is no input element */
    focusInputElement(pointer, rootElement = this.options.rootElement) {
        const targetInput = rootElement.querySelector(`[data-id="${pointer}"]`);
        if (targetInput) {
            targetInput.dispatchEvent(new Event("focus"));
            targetInput.focus && targetInput.focus();
        }
    }
    /** focus target pointer */
    focus(rootElement = this.options.rootElement) {
        clearTimeout(this.timeout);
        const pointer = Object(_store_global__WEBPACK_IMPORTED_MODULE_1__["getState"])().ui.currentPointer;
        const targetElement = rootElement.querySelector(`[data-point="${pointer}"]`);
        if (targetElement == null) {
            console.log(`Location:focus - target ${pointer} not found`);
            return;
        }
        this.timeout = setTimeout(() => {
            const { scrollTopOffset } = this.options;
            scrollIntoView(targetElement, scrollTopOffset);
            this.focusInputElement(pointer, rootElement);
            this.timeout = null;
        }, DELAY);
    }
    blur(pointer) {
        if (Object(_store_global__WEBPACK_IMPORTED_MODULE_1__["getState"])().ui.currentPointer !== pointer) {
            return;
        }
        _store_global__WEBPACK_IMPORTED_MODULE_1__["dispatch"].ui.setCurrentPage("");
        this.notifyWatcher({ type: "blur", value: pointer });
    }
    watch(watcher) {
        if (this.watcher.includes(watcher) === false) {
            this.watcher.push(watcher);
        }
        return this;
    }
    notifyWatcher(event) {
        this.watcher.forEach(w => w(event));
        return this;
    }
    removeWatcher(watcher) {
        this.watcher = this.watcher.filter(w => w !== watcher);
        return this;
    }
    destroy() {
        clearTimeout(this.timeout);
        this.watcher.length = 0;
    }
}


/***/ }),

/***/ "./src/services/OverlayService.ts":
/*!****************************************!*\
  !*** ./src/services/OverlayService.ts ***!
  \****************************************/
/*! exports provided: defaultOptions, OverlayAction, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayAction", function() { return OverlayAction; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/overlay */ "./src/components/overlay/index.ts");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createElement */ "./src/utils/createElement.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/global */ "./src/store/global.ts");
/* eslint no-use-before-define: 0 */




const defaultOptions = {
    abortButton: "cancel",
    confirmButton: "ok",
    fullscreen: false,
    onSave: () => OverlayService.close(OverlayAction.Confirm),
    onAbort: () => OverlayService.close(OverlayAction.Abort)
};
var OverlayAction;
(function (OverlayAction) {
    OverlayAction[OverlayAction["Abort"] = 0] = "Abort";
    OverlayAction[OverlayAction["Close"] = 1] = "Close";
    OverlayAction[OverlayAction["Confirm"] = 2] = "Confirm";
})(OverlayAction || (OverlayAction = {}));
/**
 * Opens an overlay with a DOM-Node as contents
 */
const OverlayService = {
    /** root overlay container */
    $element: undefined,
    /** Promise.resolve of current overlay */
    resolve: undefined,
    /** Opens the overlay, showing the given `container` as content */
    open(dialog, options) {
        OverlayService.removePanel();
        const $el = OverlayService.getElement();
        dialog.classList.add("ed-overlay__item");
        OverlayService.render(dialog, { ...defaultOptions, ...options });
        document.body.appendChild($el);
        _store_global__WEBPACK_IMPORTED_MODULE_3__["dispatch"].ui.showOverlay(true);
        return new Promise(resolve => (OverlayService.resolve = resolve));
    },
    /** close current dialog and overlay */
    close(action = OverlayAction.Close) {
        OverlayService.removePanel(action);
        OverlayService.removeOverlay();
    },
    /** helper: close current active dialog but keep overlay visible */
    removePanel(action = OverlayAction.Close) {
        if (OverlayService.resolve) {
            OverlayService.resolve(action);
            OverlayService.resolve = undefined;
            // must destroy component for reuse
            mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(OverlayService.getElement(), mithril__WEBPACK_IMPORTED_MODULE_0___default()("i"));
        }
    },
    /** remove overlay container from dom */
    removeOverlay() {
        _store_global__WEBPACK_IMPORTED_MODULE_3__["dispatch"].ui.showOverlay(false);
        const $el = OverlayService.getElement();
        $el.parentNode && $el.parentNode.removeChild($el);
    },
    getElement() {
        if (OverlayService.$element == null) {
            OverlayService.$element = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])(".ed-overlay");
            // close popup if clicked on "background"
            OverlayService.$element.addEventListener("click", (e) => {
                if (e.target === OverlayService.$element) {
                    OverlayService.close();
                }
            });
        }
        return OverlayService.$element;
    },
    render($dialog, options) {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(OverlayService.getElement(), mithril__WEBPACK_IMPORTED_MODULE_0___default()(_components_overlay__WEBPACK_IMPORTED_MODULE_1__["default"], {
            container: $dialog,
            onremove: () => OverlayService.close(),
            ...options
        }));
    }
};
Object(_store_global__WEBPACK_IMPORTED_MODULE_3__["watch"])(event => {
    var _a, _b;
    if (((_b = (_a = event.value) === null || _a === void 0 ? void 0 : _a.changes) === null || _b === void 0 ? void 0 : _b.overlayIsVisible) === false) {
        OverlayService.close();
    }
});
/* harmony default export */ __webpack_exports__["default"] = (OverlayService);


/***/ }),

/***/ "./src/services/SchemaService.ts":
/*!***************************************!*\
  !*** ./src/services/SchemaService.ts ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SchemaService; });
/* harmony import */ var _utils_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/copy */ "./src/services/utils/copy.ts");
/* harmony import */ var json_schema_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js");
/* harmony import */ var json_schema_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_schema_library__WEBPACK_IMPORTED_MODULE_1__);



const { getChildSchemaSelection } = json_schema_library__WEBPACK_IMPORTED_MODULE_1___default.a;
const { JsonEditor: Core } = json_schema_library__WEBPACK_IMPORTED_MODULE_1___default.a.cores;
class SchemaService {
    /**
     * Manages json-schema interactions and adds caching of reoccuring json-schema requests
     * @param schema - json-schema
     * @param [data] - data corresponding to json-schema
     * @param [core] - instance of json-schema-library Core
     */
    constructor(schema = { type: "object" }, data = {}, core = new Core()) {
        /** cache for resolved json-pointer */
        this.cache = {};
        this.core = core;
        this.setSchema(schema);
        this.setData(data);
    }
    /**
     * Update data by any missing (default) values specified in the json-schema
     * @param [data=currentData]   - update given data or use the internal stored data (via `setData(data)`)
     * @param [schema]             - specific json schema, or the internal store schema (via `setSchema(root)`)
     * @return json data with valid default data values
     */
    addDefaultData(data = this.data, schema = this.schema) {
        return this.core.getTemplate(data, schema);
    }
    /**
     * Create the template data object based on the json-schema, which fullfills the schemas structure as much as
     * possible
     * @return data corresponding to json-schema
     */
    getTemplate(schema) {
        return this.core.getTemplate(undefined, schema);
    }
    /**
     * @return list of valid items to insert at the given position
     */
    getChildSchemaSelection(pointer, property) {
        const parentSchema = this.get(pointer);
        return getChildSchemaSelection(this.core, property, parentSchema);
    }
    /**
     * Sets the root data. This is optional and used within internal functions to support optional _data_-parameters.
     * On every change in data, call this method with that latest state `schemaService.setData(latestData)`;
     * @param data - latest root data corresponding to stored json-schema
     */
    setData(data) {
        this.data = this.addDefaultData(data);
        this.resetCache();
    }
    /** Set or change the application schema */
    setSchema(schema) {
        this.core.setSchema(schema);
        this.schema = this.core.getSchema();
        this.resetCache();
    }
    resetCache() {
        this.cache = {};
    }
    /**
     * Return the json-schema for the requested pointer. Resolved the pointer on the stored schema by the accompanied
     * json-data, which is required to resolve optional json-schema values.
     *
     * @param pointer - pointer in data
     * @param [data] - root data, corresponding to json-schema.
     *     This is optional, when the root-data is up-to-date (via setData)
     * @return json-schema for the requested pointer
     */
    get(pointer, data) {
        if (data) {
            const result = json_schema_library__WEBPACK_IMPORTED_MODULE_1___default.a.getSchema(this.core, pointer, data, this.schema);
            return Object(_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(result);
        }
        if (this.cache[pointer] === undefined) {
            const result = json_schema_library__WEBPACK_IMPORTED_MODULE_1___default.a.getSchema(this.core, pointer, this.data, this.schema);
            if (result.variableSchema === true) {
                // @special case: do not cache dynamic schema object (oneOf)
                return result;
            }
            this.cache[pointer] = Object(_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(result);
        }
        return this.cache[pointer];
    }
    destroy() {
        this.setData(null);
        this.setSchema(null);
    }
}


/***/ }),

/***/ "./src/services/SessionService.ts":
/*!****************************************!*\
  !*** ./src/services/SessionService.ts ***!
  \****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Simple session service to store and retrieve user-specific data */
/* harmony default export */ __webpack_exports__["default"] = ({
    get(key, defaultValue) {
        if (window.localStorage == null) {
            return defaultValue;
        }
        if (localStorage.getItem(key) == null) {
            this.set(key, defaultValue);
        }
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (error) {
            return defaultValue;
        }
    },
    set(key, value) {
        if (window.localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },
    toggle(key) {
        const value = !this.get(key, false);
        this.set(key, value);
        return value;
    }
});


/***/ }),

/***/ "./src/services/ValidationService.ts":
/*!*******************************************!*\
  !*** ./src/services/ValidationService.ts ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidationService; });
/* harmony import */ var _utils_BubblingCollectionObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/BubblingCollectionObservable */ "./src/services/utils/BubblingCollectionObservable.ts");
/* harmony import */ var json_schema_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js");
/* harmony import */ var json_schema_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_schema_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _utils_Validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Validation */ "./src/services/utils/Validation.ts");




const ID = "errors";
const { JsonEditor: Core } = json_schema_library__WEBPACK_IMPORTED_MODULE_1___default.a.cores;
class ValidationService {
    constructor(store, schema = { type: "object" }, core = new Core()) {
        this.observer = new _utils_BubblingCollectionObservable__WEBPACK_IMPORTED_MODULE_0__["default"]();
        /** list of active watchers on update-lifecycle events */
        this.watcher = [];
        if (!(store instanceof _store__WEBPACK_IMPORTED_MODULE_2__["default"])) {
            throw new Error("Given state in ValidationService must be of instance 'State'");
        }
        this.core = core;
        this.set(schema);
        this.store = store;
        this.setErrorHandler(error => error);
    }
    /** sets a custom error handler to map errors */
    setErrorHandler(callback) {
        this.errorHandler = callback;
    }
    /**
     * Starts the validation, executing callback handlers and emitters on the go
     * @param data               - data to validate
     * @param [pointer]  - optional location. Per default all data is validated
     * @return promise, resolving with list of errors when all async validations are performed
     */
    validate(data, pointer = "#") {
        if (this.currentValidation) {
            this.currentValidation.cancel();
        }
        // @feature selective-validation
        this.observer.clearEvents(pointer);
        // reset stored list of events
        let remainingErrors = [];
        if (pointer !== "#") {
            // the following filtering is a duplicate from BubblingCollectionObservable.clearEvents
            remainingErrors = this.store.get(ID)
                .filter(e => e.data.pointer == null || e.data.pointer.startsWith(pointer) === false);
        }
        this.store.dispatch.errors.set(remainingErrors);
        // this.store.dispatch(ActionCreators.setErrors(remainingErrors));
        this.currentValidation = new _utils_Validation__WEBPACK_IMPORTED_MODULE_3__["default"](data, pointer, this.errorHandler);
        return this.currentValidation.start(this.core, (newError, currentErrors) => {
            // @feature selective-validation
            const completeListOfErrors = remainingErrors.concat(currentErrors);
            this.store.dispatch.errors.set(completeListOfErrors);
            this.observer.notify(newError.data.pointer, newError);
        }, validationErrors => {
            // @feature selective-validation
            const completeListOfErrors = remainingErrors.concat(validationErrors);
            this.store.dispatch.errors.set(completeListOfErrors);
            this.currentValidation = null;
            this.notifyWatcher({ type: "validation:done", value: completeListOfErrors });
        });
    }
    /** set or change the json-schema for data validation */
    set(schema) {
        this.core.setSchema(schema);
        this.schema = this.core.getSchema();
    }
    /** returns the current json-schema */
    get() {
        return this.schema;
    }
    observe(pointer, observer, bubbledEvents = false) {
        this.observer.observe(pointer, observer, bubbledEvents);
        return observer;
    }
    removeObserver(pointer, observer) {
        this.observer.removeObserver(pointer, observer);
        return this;
    }
    notify(pointer, event) {
        this.observer.notify(pointer, event);
    }
    notifyWatcher(event) {
        this.watcher.forEach(watcher => watcher(event));
    }
    /** watch DataService lifecycle events */
    watch(callback) {
        if (this.watcher.includes(callback) === false) {
            this.watcher.push(callback);
        }
        return callback;
    }
    unwatch(callback) {
        this.watcher = this.watcher.filter(w => w !== callback);
        return callback;
    }
    /** returns all validation errors and warnings */
    getErrorsAndWarnings(pointer, withChildErrors = false) {
        const errors = this.store.get(ID);
        if (pointer == null) {
            return errors;
        }
        // filter by pointer
        const selectError = new RegExp(`^${pointer}${withChildErrors ? "" : "$"}`);
        return errors.filter(error => selectError.test(error.data.pointer));
    }
    /** returns all validation errors only */
    getErrors(pointer, withChildErrors = false) {
        return this.getErrorsAndWarnings(pointer, withChildErrors).filter(error => error.severity !== "warning");
    }
    /** returns all validation warnings only */
    getWarnings(pointer, withChildWarnings = false) {
        return this.getErrorsAndWarnings(pointer, withChildWarnings).filter(error => error.severity === "warning");
    }
    destroy() {
        this.set(null);
        this.observer = null;
    }
}


/***/ }),

/***/ "./src/services/dataservice/change.ts":
/*!********************************************!*\
  !*** ./src/services/dataservice/change.ts ***!
  \********************************************/
/*! exports provided: isAddChange, isDeleteChange, isMoveChange, isValueChange, sortChanges, changesWithChildPointers, changesFromPatchResult, getArrayChangeList, getObjectChangeList */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAddChange", function() { return isAddChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDeleteChange", function() { return isDeleteChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoveChange", function() { return isMoveChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueChange", function() { return isValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortChanges", function() { return sortChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changesWithChildPointers", function() { return changesWithChildPointers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changesFromPatchResult", function() { return changesFromPatchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayChangeList", function() { return getArrayChangeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectChangeList", function() { return getObjectChangeList; });
/* harmony import */ var _utils_diffpatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/diffpatch */ "./src/services/utils/diffpatch.ts");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_UISchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/UISchema */ "./src/utils/UISchema.ts");
/* harmony import */ var _pointersOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pointersOf */ "./src/services/dataservice/pointersOf.ts");




const isAddChange = (change) => (change === null || change === void 0 ? void 0 : change.type) === "add";
const isDeleteChange = (change) => (change === null || change === void 0 ? void 0 : change.type) === "delete";
const isMoveChange = (change) => (change === null || change === void 0 ? void 0 : change.type) === "move";
const isValueChange = (change) => (change === null || change === void 0 ? void 0 : change.type) === "update";
/** sort changes to be processable in order */
function sortChanges(a, b) {
    if (a.type === b.type) {
        // longest pointer first (outer to inner)
        return b.pointer.length - a.pointer.length;
    }
    // delete first
    if (a.type === "delete") {
        return -1;
    }
    else if (b.type === "delete") {
        return 1;
    }
    // move next
    if (a.type === "move") {
        return -1;
    }
    else if (b.type === "move") {
        return 1;
    }
    // at last add
    if (a.type === "add") {
        return -1;
    }
    else if (b.type === "add") {
        return 1;
    }
    throw new Error(`Uncaught comparisson ${a.type}:${b.type}`);
}
function changesWithChildPointers(changes, previousData, currentData) {
    // build a list of changes for all pointers that have been modified.
    // Also converts move-change types to add & delete for a simpler api
    const changeStream = [];
    changes.forEach((change) => {
        if (change.type === "add") {
            Object(_pointersOf__WEBPACK_IMPORTED_MODULE_3__["default"])(gson_pointer__WEBPACK_IMPORTED_MODULE_1___default.a.get(currentData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "add", pointer });
            });
        }
        else if (change.type === "delete") {
            Object(_pointersOf__WEBPACK_IMPORTED_MODULE_3__["default"])(gson_pointer__WEBPACK_IMPORTED_MODULE_1___default.a.get(previousData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "delete", pointer });
            });
        }
        else if (change.type === "move") {
            Object(_pointersOf__WEBPACK_IMPORTED_MODULE_3__["default"])(gson_pointer__WEBPACK_IMPORTED_MODULE_1___default.a.get(previousData, change.pointer), change.pointer).forEach(pointer => {
                changeStream.push({ type: "delete", pointer, to: pointer.replace(change.pointer, change.to) });
            });
            Object(_pointersOf__WEBPACK_IMPORTED_MODULE_3__["default"])(gson_pointer__WEBPACK_IMPORTED_MODULE_1___default.a.get(currentData, change.to), change.to).forEach(pointer => {
                changeStream.push({ type: "add", pointer, from: pointer.replace(change.to, change.pointer) });
            });
        }
        else {
            // value change
            changeStream.push(change);
        }
    });
    changeStream.sort(sortChanges);
    return changeStream;
}
function changesFromPatchResult(patchResult, parentDataType, originalData) {
    if (parentDataType === "array") {
        return getArrayChangeList(patchResult, originalData);
    }
    else if (parentDataType === "object") {
        return getObjectChangeList(patchResult);
    }
    else if (Array.isArray(patchResult.patch)) {
        return [{ type: "update", pointer: patchResult.pointer }];
    }
    throw new Error(`Unknown patchResult: ${JSON.stringify(patchResult)}`);
}
/** converts a patch to a list of simple changes for add, delete and move operations */
function getArrayChangeList(patchResult, originalData) {
    const changeList = [];
    const eventLocation = patchResult.pointer;
    let originalArray = gson_pointer__WEBPACK_IMPORTED_MODULE_1___default.a.get(originalData, eventLocation);
    if (Array.isArray(originalArray) === false) {
        return changeList;
    }
    originalArray = originalArray.map((_, index) => `${eventLocation}/${index}`);
    const changedArray = _utils_diffpatch__WEBPACK_IMPORTED_MODULE_0__["default"].patch(Array.from(originalArray), patchResult.patch);
    // retrieve deleted items
    for (let i = 0, l = originalArray.length; i < l; i += 1) {
        if (changedArray.includes(originalArray[i]) === false) {
            const change = { type: "delete", pointer: originalArray[i] };
            changeList.push(change);
        }
    }
    // identify added and movement items
    for (let i = 0, l = changedArray.length; i < l; i += 1) {
        let change;
        const ptrOrData = changedArray[i];
        const ptrChanged = ptrOrData !== `${eventLocation}/${i}`;
        if (ptrChanged === false) {
            continue;
        }
        if (Object(_utils_UISchema__WEBPACK_IMPORTED_MODULE_2__["isPointer"])(ptrOrData)) {
            change = { type: "move", pointer: ptrOrData, to: `${eventLocation}/${i}` };
        }
        else {
            change = { type: "add", pointer: `${eventLocation}/${i}` };
        }
        changeList.push(change);
    }
    return changeList;
}
/** converts a patch to a list of simple changes for add, delete and move operations */
function getObjectChangeList(patchResult) {
    const changeList = [];
    const { pointer } = patchResult;
    const properties = Object.keys(patchResult.patch);
    for (let i = 0, l = properties.length; i < l; i += 1) {
        const property = properties[i];
        const change = patchResult.patch[property];
        if (change.length === 1) {
            changeList.push({ type: "add", pointer: `${pointer}/${property}` });
        }
        else if (change[2] === 0) {
            changeList.push({ type: "delete", pointer: `${pointer}/${property}` });
        }
        else if (change[2] === 3) {
            console.log("object property movement", patchResult);
            throw new Error(`Property movement currently unsupported (${JSON.stringify(change)})`);
        }
        // changed value
        // else if (change.length === 2) { console.log("change", `${patch.pointer}/${property}`); }
    }
    return changeList;
}


/***/ }),

/***/ "./src/services/dataservice/index.ts":
/*!*******************************************!*\
  !*** ./src/services/dataservice/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataService; });
/* harmony import */ var _utils_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/copy */ "./src/services/utils/copy.ts");
/* harmony import */ var _utils_diffpatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/diffpatch */ "./src/services/utils/diffpatch.ts");
/* harmony import */ var _utils_createDiff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createDiff */ "./src/services/utils/createDiff.ts");
/* harmony import */ var json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json-schema-library/lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
/* harmony import */ var json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_isRootPointer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/isRootPointer */ "./src/services/utils/isRootPointer.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var _change__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change */ "./src/services/dataservice/change.ts");








const ID = "data";
class DataService {
    /**
     * Read and modify form data and notify observers
     * @param state - current state/store of application
     * @param data - current application data (form)
     */
    constructor(store, data) {
        /** current observers on json-pointer changes */
        this.observers = {};
        /** internal value to track previous data */
        this.lastUpdate = {};
        /** list of active watchers on update-lifecycle events */
        this.watcher = [];
        if (!(store instanceof _store__WEBPACK_IMPORTED_MODULE_6__["default"])) {
            throw new Error("Given state in DataService must be of instance 'State'");
        }
        this.store = store;
        this.onStateChanged = this.onStateChanged.bind(this);
        this.store.subscribe(ID, this.onStateChanged);
        if (data !== undefined) {
            this.set("#", data);
            this.resetUndoRedo();
        }
    }
    // improved version - supporting multiple patches
    onStateChanged() {
        const { present: data } = this.store.get(ID);
        const patches = Object(_utils_createDiff__WEBPACK_IMPORTED_MODULE_2__["default"])(this.lastUpdate, data);
        if (patches.length === 0) {
            return;
        }
        const allChanges = [];
        // @todo simplify event-arguments: we have patches, changes and simplechanges
        for (let i = 0, l = patches.length; i < l; i += 1) {
            const eventLocation = patches[i].pointer;
            const parentData = this.getDataByReference(eventLocation);
            const parentDataType = json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_3___default()(parentData);
            // build simple patch-information and notify about changes in pointer for move-instance support
            // this is a major performance improvement for array-item movements
            const changes = Object(_change__WEBPACK_IMPORTED_MODULE_7__["changesFromPatchResult"])(patches[i], parentDataType, this.lastUpdate);
            if (parentDataType === "array" || parentDataType === "object") {
                this.notifyWatcher({ type: "data:update:container", value: { pointer: eventLocation, changes } });
            }
            // collect all changes fo change-stream
            allChanges.push(...changes);
            const payload = { pointer: eventLocation, patch: patches[i].patch };
            this.notifyWatcher({ type: "data:update:after", value: payload });
            this.bubbleObservers(eventLocation, { type: "data:update", value: payload });
        }
        const changeStream = Object(_change__WEBPACK_IMPORTED_MODULE_7__["changesWithChildPointers"])(allChanges, this.lastUpdate, data);
        this.notifyWatcher({ type: "data:update:done", value: changeStream });
        this.lastUpdate = data;
    }
    /** clear undo/redo stack */
    resetUndoRedo() {
        var _a;
        this.store.dispatch.data.clearHistory();
        (_a = this.store.previousState) === null || _a === void 0 ? void 0 : _a.errors.pop();
    }
    /**
     * Get a copy of current data from the requested `pointer`
     * @param [pointer] - data to fetch. Defaults to _root_
     * @returns data, associated with `pointer`
     */
    get(pointer = "#") {
        const value = this.getDataByReference(pointer);
        return Object(_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    }
    /** returns a reference to data from the requested `pointer` (cheaper)
     * @param [pointer="#"] - data to fetch. Defaults to _root_
     * @returns data, associated with `pointer`
     */
    getDataByReference(pointer = "#") {
        const state = this.store.store.getState();
        return gson_pointer__WEBPACK_IMPORTED_MODULE_4___default.a.get(state.data.present, pointer);
    }
    /**
     * Change data at the given `pointer`
     * @param pointer - data location to modify
     * @param value - new value at pointer
     * @param [options]
     */
    set(pointer, value, options) {
        if (this.isValid(pointer) === false) {
            throw new Error(`Pointer ${pointer} does not exist in data`);
        }
        const currentValue = this.getDataByReference(pointer);
        if (_utils_diffpatch__WEBPACK_IMPORTED_MODULE_1__["default"].diff(currentValue, value) == null) {
            return;
        }
        if (pointer === "#") {
            // do not add root changes to undo (for sync, skip this)
            options = { ...options, addToHistory: false };
        }
        this.notifyWatcher({ type: "data:update:before", value: { pointer, action: "data" } });
        // this.store.dispatch(ActionCreators.setData(pointer, value, currentValue, isSynched));
        this.store.dispatch.data.set({ pointer, value, addToHistory: options === null || options === void 0 ? void 0 : options.addToHistory });
    }
    /**
     * Delete data at the given `pointer`
     * @param pointer - data location to delete
     */
    delete(pointer) {
        if (Object(_utils_isRootPointer__WEBPACK_IMPORTED_MODULE_5__["default"])(pointer)) {
            throw new Error("Can not remove root data via delete. Use set(\"#/\", {}) instead.");
        }
        const frags = gson_pointer__WEBPACK_IMPORTED_MODULE_4___default.a.split(pointer);
        const key = frags.pop();
        const parentPointer = gson_pointer__WEBPACK_IMPORTED_MODULE_4___default.a.join(frags);
        const data = this.get(parentPointer);
        gson_pointer__WEBPACK_IMPORTED_MODULE_4___default.a.remove(data, key);
        this.set(parentPointer, data);
    }
    /** get valid undo count */
    undoCount() {
        return this.store.get(ID).past.length;
    }
    /** get valid redo count */
    redoCount() {
        return this.store.get(ID).future.length;
    }
    /** undo last change */
    undo() {
        this.notifyWatcher({ type: "data:update:before", value: { pointer: "#", action: "undo" } });
        this.store.dispatch.data.undo();
        // this.store.dispatch(ActionCreators.undo());
    }
    /** redo last undo */
    redo() {
        this.notifyWatcher({ type: "data:update:before", value: { pointer: "#", action: "redo" } });
        // this.store.dispatch(ActionCreators.redo());
        this.store.dispatch.data.redo();
    }
    notifyWatcher(event) {
        this.watcher.forEach(watcher => watcher(event));
    }
    /** watch DataService lifecycle events */
    watch(callback) {
        if (this.watcher.includes(callback) === false) {
            this.watcher.push(callback);
        }
        return callback;
    }
    removeWatcher(callback) {
        this.watcher = this.watcher.filter(watcher => watcher !== callback);
    }
    /**
     * observes changes in data at the specified json-pointer
     * @param pointer - json-pointer to watch
     * @param callback - called on a change
     * @param bubbleEvents - set to true to receive notifications changes in children of pointer
     * @returns callback
     */
    observe(pointer, callback, bubbleEvents = false) {
        callback.bubbleEvents = bubbleEvents;
        this.observers[pointer] = this.observers[pointer] || [];
        this.observers[pointer].push(callback);
        return callback;
    }
    /** stop an observer from watching changes on pointer */
    removeObserver(pointer, callback) {
        if (this.observers[pointer] && this.observers[pointer].length > 0) {
            this.observers[pointer] = this.observers[pointer].filter(cb => cb !== callback);
        }
        return this;
    }
    /** send an event to all json-pointer observers */
    notify(pointer, event) {
        if (this.observers[pointer] == null || this.observers[pointer].length === 0) {
            return;
        }
        const observers = this.observers[pointer];
        for (let i = 0, l = observers.length; i < l; i += 1) {
            if (observers[i].bubbleEvents === true || event.value.pointer === pointer) {
                observers[i](event);
            }
        }
    }
    bubbleObservers(pointer, event) {
        const frags = gson_pointer__WEBPACK_IMPORTED_MODULE_4___default.a.split(pointer);
        while (frags.length) {
            this.notify(gson_pointer__WEBPACK_IMPORTED_MODULE_4___default.a.join(frags, true), event);
            frags.length -= 1;
        }
        this.notify("#", event);
    }
    /** Test the pointer for existing data */
    isValid(pointer) {
        return Object(_utils_isRootPointer__WEBPACK_IMPORTED_MODULE_5__["default"])(pointer) || gson_pointer__WEBPACK_IMPORTED_MODULE_4___default.a.get(this.getDataByReference(), pointer) !== undefined;
    }
    /** destroy service */
    destroy() {
        this.store.unsubscribe(ID, this.onStateChanged);
    }
}


/***/ }),

/***/ "./src/services/dataservice/pointersOf.ts":
/*!************************************************!*\
  !*** ./src/services/dataservice/pointersOf.ts ***!
  \************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pointersOf; });
/**
 * converts input data to a list of pointers for all objects, array and values
 *
 * usage example
 *
 * ```js
 * const value = data.list[0];
 * const pointers = pointersOf(value, "#/list/0");
 * // or const pointers = pointersOf(gp.get(data, "#/list/0), "#/list/0");
 * ```
 *
 * @param data
 * @param [pointer] root pointer of data
 */
function pointersOf(data, pointer = "#", result = []) {
    if (data == null) {
        return result;
    }
    result.push(pointer);
    if (Array.isArray(data)) {
        data.forEach((value, index) => {
            pointersOf(value, `${pointer}/${index}`, result);
        });
    }
    else if (typeof data === "object") {
        Object.keys(data).forEach(property => property !== "_id" && pointersOf(data[property], `${pointer}/${property}`, result));
    }
    return result;
}


/***/ }),

/***/ "./src/services/utils/BubblingCollectionObservable.ts":
/*!************************************************************!*\
  !*** ./src/services/utils/BubblingCollectionObservable.ts ***!
  \************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_0__);
/* eslint arrow-parens: 0 */

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
class BubblingCollectionObservable {
    constructor() {
        this.observers = {};
        this.eventCollection = {};
        this.bubbleCollection = {};
    }
    /**
     * Observe events on the _pointer_ (`#/observe/location`). May also observe
     * events of _child-pointers_ (`#/observe/location/child/item`) with the
     * option `receiveChildEvents` set to `true`
     *
     * @param pointer - location to observe
     * @param observer - observer
     * @param [receiveChildEvents=false]
     */
    observe(pointer, observer, receiveChildEvents = false) {
        this.observers[pointer] = this.observers[pointer] || [];
        if (this.observers[pointer].includes(observer) === false) {
            observer.receiveChildEvents = receiveChildEvents;
            this.observers[pointer].push(observer);
        }
        return observer;
    }
    /**
     * Remove an observer
     * @param  {JsonPointer} pointer
     * @param  {Function} observer
     */
    removeObserver(pointer, observer) {
        if (this.observers[pointer] == null) {
            return;
        }
        const index = this.observers[pointer].indexOf(observer);
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
    reset() {
        // notify observers of reset by sending an empty list of events
        const map = {};
        Object.keys(this.eventCollection).concat(Object.keys(this.bubbleCollection))
            // .filter(pointer => pointer.includes(sourcePointer))
            .forEach(p => { map[p] = true; });
        this.eventCollection = {};
        this.bubbleCollection = {};
        Object.keys(map).forEach(pointer => this._notify(pointer, pointer, []));
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
    clearEvents(pointer, clearChildren = true) {
        let changed = false;
        if (clearChildren) {
            Object.keys(this.eventCollection).forEach(target => {
                if (!(target.startsWith(pointer) && target !== pointer)) {
                    return;
                }
                if (this.eventCollection[target].length > 0) {
                    changed = true;
                    this.eventCollection[target].length = 0;
                    this.bubbleCollection[target] = {}; // reset bubble collection
                    this._notify(target, target, this.eventCollection[target]);
                }
            });
        }
        const collection = this.eventCollection[pointer];
        if ((Array.isArray(collection) && collection.length > 0)) {
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
     * @param pointer
     * @param eventCollection    - array of events at target `pointer`
     */
    _notifyAll(pointer, eventCollection) {
        const frags = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.split(pointer);
        while (frags.length > 0) {
            const p = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(frags, true);
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
     */
    notify(pointer, event) {
        this.eventCollection[pointer] = this.eventCollection[pointer] || [];
        this.eventCollection[pointer].push(event);
        this._notifyAll(pointer, this.eventCollection[pointer]);
    }
    _notify(observerPointer, sourcePointer, errors = []) {
        if (this.observers[observerPointer] == null) {
            return;
        }
        this.observers[observerPointer].forEach(observer => {
            if (observer.receiveChildEvents === false && observerPointer === sourcePointer) {
                observer({ type: "validation:errors", value: errors });
                return;
            }
            if (observer.receiveChildEvents === false && observerPointer !== sourcePointer) {
                return;
            }
            this.bubbleCollection[observerPointer] = this.bubbleCollection[observerPointer] || {};
            const map = this.bubbleCollection[observerPointer];
            map[sourcePointer] = errors;
            const combinedErrors = Object.keys(map).reduce((res, next) => res.concat(map[next]), []);
            observer({ type: "validation:errors", value: combinedErrors });
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (BubblingCollectionObservable);


/***/ }),

/***/ "./src/services/utils/Validation.ts":
/*!******************************************!*\
  !*** ./src/services/utils/Validation.ts ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validation; });
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var json_schema_library_lib_validateAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-schema-library/lib/validateAsync */ "./node_modules/json-schema-library/lib/validateAsync.js");
/* harmony import */ var json_schema_library_lib_validateAsync__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_schema_library_lib_validateAsync__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @param data - application json data
 * @param schema - json-schema describing data
 * @param [errorHandler] - optional callback to modify errors
 */
class Validation {
    constructor(data, pointer, errorHandler) {
        /** if validation has been canceled and thus, is obsolete */
        this.canceled = false;
        this.errors = [];
        this.data = data;
        this.pointer = pointer;
        this.errorHandler = errorHandler;
    }
    /**
     * start validation of data
     * @param core - json-schema-library core, containing json-schema
     * @param onErrorCb - called for error notification while validation is running
     * @param onDoneCb - called on a finished validation with a list of validation errors
     */
    start(core, onErrorCb, onDoneCb) {
        this.cbDone = onDoneCb;
        this.cbError = onErrorCb;
        // @feature selective-validation
        const pointer = this.pointer;
        let data = this.data;
        let schema = core.getSchema();
        if (pointer !== "#") {
            schema = core.getSchema(pointer, data);
            data = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, pointer);
        }
        return json_schema_library_lib_validateAsync__WEBPACK_IMPORTED_MODULE_1___default()(core, data, { schema, pointer, onError: this.onError.bind(this) })
            .then(errors => {
            this.onDone(errors);
            return errors;
        })
            .catch(error => {
            this.onFail(error);
            return [];
        });
    }
    onError(validationError) {
        if (this.canceled) {
            return;
        }
        validationError = this.errorHandler(validationError);
        this.errors.push(validationError);
        this.cbError(validationError, this.errors);
    }
    onDone(validationErrors) {
        if (this.canceled) {
            return;
        }
        if (this.errors.length !== validationErrors.length) {
            console.error("Inconsistent validation errors. Not all errors were emitted by validateAsync()");
        }
        this.cbDone(this.errors);
    }
    onFail(error) {
        if (this.canceled) {
            return;
        }
        console.error("Validation failed", error);
        this.cbDone(this.errors);
    }
    /** cancel validation - preventing notification of running validation results */
    cancel() {
        this.canceled = true;
    }
}


/***/ }),

/***/ "./src/services/utils/copy.ts":
/*!************************************!*\
  !*** ./src/services/utils/copy.ts ***!
  \************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return copy; });
function copy(data) {
    if (data === undefined || (Array.isArray(data) === false && typeof data !== "object")) {
        return data;
    }
    return JSON.parse(JSON.stringify(data));
}


/***/ }),

/***/ "./src/services/utils/createDiff.ts":
/*!******************************************!*\
  !*** ./src/services/utils/createDiff.ts ***!
  \******************************************/
/*! exports provided: diffToPatches, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffToPatches", function() { return diffToPatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDiff; });
/* harmony import */ var _diffpatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffpatch */ "./src/services/utils/diffpatch.ts");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_1__);


/** sort by longest pointer first (from tree leaves to root node) */
function sortByPointer(a, b) {
    if (a.pointer < b.pointer) {
        return -1;
    }
    else if (a.pointer > b.pointer) {
        return 1;
    }
    return 0;
}
function isChange(value) {
    return Array.isArray(value);
}
/** converts the diff tree result to a flat list of patches */
function deltaToChangeList(pointer, diff, result = []) {
    // run through each property and search for a patch
    const properties = Object.keys(diff);
    const isArrayItem = diff["_t"] === "a";
    properties.forEach(property => {
        // skip array flag
        if (property === "_t") {
            return;
        }
        const change = diff[property];
        if (!isChange(change)) {
            // step into path and search for patches
            // @note this could also be a removed array-item ("_<index>": value)
            // findPatches(`${pointer}/${property.replace(/^_/, "")}`, value, result);
            deltaToChangeList(`${pointer}/${property}`, change, result);
            return;
        }
        // add the patch to list
        const propertyAdded = diff[property].length === 1;
        const propertyRemoved = diff[property][2] === 0;
        const entry = {
            pointer: `${pointer}/${property}`,
            change,
            isArrayItem,
            changedProperty: !isArrayItem && (propertyAdded || propertyRemoved)
        };
        result.push(entry);
    });
    return result;
}
/**
 * returns a list of changes from the passed diffpatch-delta
 * Changes on object-properties (add, remove, rename) or array-items (add,
 * remove, move) are grouped by their parent object or array.
 */
function diffToPatches(diff) {
    const map = {};
    const changes = deltaToChangeList("#", diff);
    // merge all item patches by their parent-pointer
    changes.forEach(entry => {
        const { pointer, change, isArrayItem, changedProperty } = entry;
        if (isArrayItem) {
            const parent = gson_pointer__WEBPACK_IMPORTED_MODULE_1___default.a.join(pointer, "..");
            const key = pointer.replace(`${parent}/`, "");
            map[parent] = map[parent] || { _t: "a" };
            map[parent][key] = change;
            return;
        }
        if (changedProperty) {
            const parent = gson_pointer__WEBPACK_IMPORTED_MODULE_1___default.a.join(pointer, "..");
            const key = pointer.replace(`${parent}/`, "");
            map[parent] = map[parent] || {};
            map[parent][key] = change;
            return;
        }
        map[entry.pointer] = change;
    });
    return Object.keys(map)
        .map(pointer => ({ pointer, patch: map[pointer] }))
        .sort(sortByPointer);
}
/**
 * creates a diff between given data-versions and returns a list of changes.
 * Changes on object-properties (add, remove, rename) or array-items (add,
 * remove, move) are grouped by their parent object or array.
 */
function createDiff(previousValue, newValue) {
    const diff = _diffpatch__WEBPACK_IMPORTED_MODULE_0__["default"].diff(previousValue, newValue);
    return diff == null ? [] : diffToPatches(diff);
}


/***/ }),

/***/ "./src/services/utils/diffpatch.ts":
/*!*****************************************!*\
  !*** ./src/services/utils/diffpatch.ts ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsondiffpatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsondiffpatch */ "./node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js");
/* harmony import */ var jsondiffpatch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsondiffpatch__WEBPACK_IMPORTED_MODULE_0__);

const options = {
    // used to match objects when diffing arrays, by default only === operator is used
    // this function is used only to when objects are not equal by ref
    objectHash: obj => obj._id,
    arrays: {
        // default true, detect items moved inside the array (otherwise they will be registered as remove+add)
        detectMove: true,
        // default false, the value of items moved is not included in deltas
        includeValueOnMove: false
    }
};
const diffpatch = new jsondiffpatch__WEBPACK_IMPORTED_MODULE_0__["DiffPatcher"](options); // jsondiffpatch.create(options);
// @ts-ignore
diffpatch.options = options;
/* harmony default export */ __webpack_exports__["default"] = (diffpatch);


/***/ }),

/***/ "./src/services/utils/ensureItemIDs.ts":
/*!*********************************************!*\
  !*** ./src/services/utils/ensureItemIDs.ts ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-schema-library/lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
/* harmony import */ var json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_0__);

const ID_PROPERTY = "_id";
function generateId(index) {
    return `${index}${Math.random()}${Date.now()}`;
}
function addMissingItemIDs(list) {
    list.forEach((item, index) => {
        if (item[ID_PROPERTY] == null) {
            const type = json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_0___default()(item);
            if (type === "object" || type === "array") {
                item[ID_PROPERTY] = ensureItemIDs.config.generateId(index);
            }
        }
    });
}
function ensureItemIDs(data) {
    if (Array.isArray(data)) {
        ensureItemIDs.config.addMissingItemIDs(data);
        data.forEach(item => ensureItemIDs(item));
    }
    else if (json_schema_library_lib_getTypeOf__WEBPACK_IMPORTED_MODULE_0___default()(data) === "object") {
        Object.keys(data).forEach((key) => ensureItemIDs(data[key]));
    }
    return data;
}
ensureItemIDs.config = {
    ID_PROPERTY,
    addMissingItemIDs,
    generateId
};
/* harmony default export */ __webpack_exports__["default"] = (ensureItemIDs);


/***/ }),

/***/ "./src/services/utils/getScrollParent.ts":
/*!***********************************************!*\
  !*** ./src/services/utils/getScrollParent.ts ***!
  \***********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
function isScrollable(dom) {
    const hasScrollableContent = dom.scrollHeight > dom.clientHeight;
    const overflowYStyle = window.getComputedStyle(dom).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;
    return hasScrollableContent && !isOverflowHidden;
}
function getScrollParent(dom) {
    if (!dom || dom === document.body) {
        return window;
    }
    if (isScrollable(dom)) {
        return dom;
    }
    return getScrollParent(dom.parentNode);
}


/***/ }),

/***/ "./src/services/utils/isRootPointer.ts":
/*!*********************************************!*\
  !*** ./src/services/utils/isRootPointer.ts ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (gson_pointer__WEBPACK_IMPORTED_MODULE_0__["isRoot"]);


/***/ }),

/***/ "./src/store/global.ts":
/*!*****************************!*\
  !*** ./src/store/global.ts ***!
  \*****************************/
/*! exports provided: dispatch, getState, watch, removeWatcher */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWatcher", function() { return removeWatcher; });
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rematch/core */ "./node_modules/@rematch/core/dist/umd/rematch.js");
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/ui */ "./src/store/models/ui.ts");
/* harmony import */ var _services_utils_diffpatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utils/diffpatch */ "./src/services/utils/diffpatch.ts");



const store = Object(_rematch_core__WEBPACK_IMPORTED_MODULE_0__["init"])({ models: { ui: _models_ui__WEBPACK_IMPORTED_MODULE_1__["default"] } });
/** rematch-redux dispatch */
const dispatch = store.dispatch;
/** rematch-redux getState */
const getState = store.getState; // eslint-disable-line prefer-destructuring
let watchers = [];
function notifyWatcher(event) {
    watchers.forEach(w => w(event));
}
/** watch global changes, like ui */
function watch(watcher) {
    watchers.push(watcher);
    return watcher;
}
/** stop watching global changes, like ui */
function removeWatcher(watcher) {
    watchers = watchers.filter(w => w !== watcher);
}
const initialState = store.getState();
const modelIds = Object.keys(initialState);
const previousModels = {};
modelIds.forEach(modelId => { previousModels[modelId] = JSON.stringify(initialState[modelId]); });
store.subscribe(() => {
    const state = store.getState();
    modelIds.forEach(modelId => {
        const stateString = JSON.stringify(state[modelId]);
        if (stateString === previousModels[modelId]) {
            return;
        }
        const diff = _services_utils_diffpatch__WEBPACK_IMPORTED_MODULE_2__["default"].diff(JSON.parse(previousModels[modelId]), state[modelId]);
        if (diff == null) {
            return;
        }
        previousModels[modelId] = stateString;
        const changes = {};
        Object.keys(diff).map(property => changes[property] = state[modelId][property]);
        notifyWatcher({ type: "global", value: { modelId, changes } });
    });
});


/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoevents */ "./node_modules/nanoevents/index.js");
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rematch/core */ "./node_modules/@rematch/core/dist/umd/rematch.js");
/* harmony import */ var _rematch_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rematch_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_models_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/models/data */ "./src/store/models/data.ts");
/* harmony import */ var _store_models_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/models/errors */ "./src/store/models/errors.ts");




const models = { data: _store_models_data__WEBPACK_IMPORTED_MODULE_2__["default"], errors: _store_models_errors__WEBPACK_IMPORTED_MODULE_3__["default"] };
class Store {
    constructor() {
        this.emitter = Object(nanoevents__WEBPACK_IMPORTED_MODULE_0__["createNanoEvents"])();
        this.store = Object(_rematch_core__WEBPACK_IMPORTED_MODULE_1__["init"])({ models });
        this.dispatch = this.store.dispatch;
        this.getState = this.store.getState;
        this.store.subscribe(() => this.onChange(this.store.getState()));
    }
    onChange(currentState) {
        if (currentState === this.previousState) {
            return;
        }
        Object
            .keys(currentState)
            .forEach(id => {
            var _a;
            const subState = currentState[id];
            if (((_a = this.previousState) === null || _a === void 0 ? void 0 : _a[id]) !== subState) {
                this.emitter.emit(id, subState);
            }
        });
        this.previousState = currentState;
    }
    get(id) {
        return this.store.getState()[id];
    }
    /** Subscribe to changes */
    subscribe(id, callback) {
        this.emitter.on(id, callback);
    }
    unsubscribe(id, callback) {
        var _a, _b;
        this.emitter.events[id] = (_b = (_a = this.emitter.events[id]) === null || _a === void 0 ? void 0 : _a.filter(func => func !== callback)) !== null && _b !== void 0 ? _b : [];
    }
}


/***/ }),

/***/ "./src/store/models/data.ts":
/*!**********************************!*\
  !*** ./src/store/models/data.ts ***!
  \**********************************/
/*! exports provided: initialState, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _services_utils_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/utils/copy */ "./src/services/utils/copy.ts");
/* harmony import */ var _services_utils_ensureItemIDs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utils/ensureItemIDs */ "./src/services/utils/ensureItemIDs.ts");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_utils_isRootPointer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/isRootPointer */ "./src/services/utils/isRootPointer.ts");




const initialState = {
    undoSize: 50,
    past: [],
    present: null,
    future: []
};
/* harmony default export */ __webpack_exports__["default"] = ({
    state: initialState,
    reducers: {
        clearHistory(state) {
            return { ...state, past: [], future: [] };
        },
        removeLastUndo(state) {
            const past = Array.from(state.past);
            past.pop();
            return { ...state, past };
        },
        undo(state) {
            if (state.past.length === 0) {
                return state;
            }
            const newState = Object(_services_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
            newState.future.push(newState.present);
            newState.present = newState.past.pop();
            return newState;
        },
        redo(state) {
            if (state.future.length === 0) {
                return state;
            }
            const newState = Object(_services_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
            newState.past.push(newState.present);
            newState.present = newState.future.pop();
            return newState;
        },
        set(state, action) {
            const { pointer = "#" } = action;
            const value = Object(_services_utils_ensureItemIDs__WEBPACK_IMPORTED_MODULE_1__["default"])(action.value);
            const newState = Object(_services_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(state);
            if (action.addToHistory !== false && newState.present != null) {
                newState.past.push(Object(_services_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(newState.present));
                newState.future.length = 0;
                while (newState.past.length > state.undoSize) {
                    newState.past.shift();
                }
            }
            if (Object(_services_utils_isRootPointer__WEBPACK_IMPORTED_MODULE_3__["default"])(pointer)) {
                newState.present = Object(_services_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
                return newState;
            }
            gson_pointer__WEBPACK_IMPORTED_MODULE_2___default.a.set(newState.present, pointer, Object(_services_utils_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(value));
            return newState;
        }
    }
});


/***/ }),

/***/ "./src/store/models/errors.ts":
/*!************************************!*\
  !*** ./src/store/models/errors.ts ***!
  \************************************/
/*! exports provided: initialState, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = [];
/* harmony default export */ __webpack_exports__["default"] = ({
    state: initialState,
    reducers: {
        set(state, errors = []) {
            return errors;
        }
    }
});


/***/ }),

/***/ "./src/store/models/ui.ts":
/*!********************************!*\
  !*** ./src/store/models/ui.ts ***!
  \********************************/
/*! exports provided: initialState, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    currentPointer: "",
    currentPage: "",
    /** true, if the overlay is currently visible */
    overlayIsVisible: false
};
/* harmony default export */ __webpack_exports__["default"] = ({
    state: initialState,
    reducers: {
        setCurrentPage(state, pointer) {
            return { ...state, currentPage: pointer };
        },
        setCurrentPointer(state, pointer) {
            return { ...state, currentPointer: pointer };
        },
        showOverlay(state, overlayIsVisible) {
            return { ...state, overlayIsVisible };
        }
    }
});


/***/ }),

/***/ "./src/utils/UISchema.ts":
/*!*******************************!*\
  !*** ./src/utils/UISchema.ts ***!
  \*******************************/
/*! exports provided: EDITRON_OPTION_PROPERTY, getEditronOptions, isPointer, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITRON_OPTION_PROPERTY", function() { return EDITRON_OPTION_PROPERTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditronOptions", function() { return getEditronOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointer", function() { return isPointer; });
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/dist/gsonPointer.js");
/* harmony import */ var gson_pointer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gson_pointer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _populated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populated */ "./src/utils/populated.ts");
/* harmony import */ var json_schema_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js");
/* harmony import */ var json_schema_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_schema_library__WEBPACK_IMPORTED_MODULE_2__);



const { eachSchema } = json_schema_library__WEBPACK_IMPORTED_MODULE_2___default.a;
const UI_PROPERTY = "editron:ui";
/** property on a schema-definition, containing editron-options */
const EDITRON_OPTION_PROPERTY = "editron:ui";
function getEditronOptions(schema) {
    return schema[EDITRON_OPTION_PROPERTY];
}
function isPointer(string) {
    return typeof string === "string" && /^(#?\/.+|\.?\.\/.+)/.test(string);
}
// returns a list of {title, pointer} from root-node to pointer, excluding root node
function getBreadcrumps(pointer, controller) {
    const breadcrumps = [];
    while (pointer !== "#") {
        breadcrumps.unshift({
            title: getOption(pointer, controller, "title"),
            pointer
        });
        pointer = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(pointer, "..");
    }
    return breadcrumps;
}
function enumOptions(schema) {
    var _a;
    let options;
    if ((_a = schema === null || schema === void 0 ? void 0 : schema[UI_PROPERTY]) === null || _a === void 0 ? void 0 : _a.enum) {
        options = schema.enum.map((value, index) => ({
            title: schema[UI_PROPERTY].enum[index] || schema.enum[index],
            value: schema.enum[index]
        }));
    }
    else if (schema.options && schema.options.enum_titles) {
        // @legacy support jdorn/json-editor
        options = schema.enum.map((value, index) => ({
            title: schema.options.enum_titles[index] || schema.enum[index],
            value: schema.enum[index]
        }));
    }
    else {
        options = schema.enum;
    }
    return options;
}
/**
 * Resolves the given pointer absolute or relative in data
 * @param pointer - current base pointer for relative targets
 * @param controller
 * @param pointerToResolve - relative or absolute pointer (must start with `/` or `../`)
 * @return target value of at #/pointer/pointerToResolve or false
 */
function resolveReference(pointer, controller, pointerToResolve) {
    if (Object(_populated__WEBPACK_IMPORTED_MODULE_1__["default"])(pointerToResolve) === false || isPointer(pointerToResolve) === false) {
        return null;
    }
    let targetPointer = pointerToResolve;
    if (targetPointer[0] !== "#") {
        targetPointer = gson_pointer__WEBPACK_IMPORTED_MODULE_0___default.a.join(pointer, targetPointer);
    }
    const result = controller.service("data").get(targetPointer);
    return Object(_populated__WEBPACK_IMPORTED_MODULE_1__["default"])(result, result, null);
}
/**
 * Returns the resolved copy of an options object. This method is used by the controller to help setup the
 * main options object of an editor instance. It is simplified, in that it currently does  not resolve any reference
 * on the current data
 * @return a resolved copy of the editron:ui settings
 */
function copyOptions(pointer, controller) {
    const schema = controller.service("schema").get(pointer);
    const settings = {
        hidden: false,
        description: schema.description,
        ...schema.options,
        ...schema[UI_PROPERTY]
    };
    settings.title = getTitle(pointer, controller); // this comes last, because ensures an '*' is appended if required
    Object
        .keys(settings)
        .forEach(option => {
        settings[option] = resolveOption(pointer, controller, settings[option]);
    });
    return settings;
}
/**
 * Ensures each schema contains a valid schema[UI_PROPERTY] object
 * @param rootSchema
 * @return extended clone of json-schema
 */
function extendSchema(rootSchema) {
    rootSchema = JSON.parse(JSON.stringify(rootSchema));
    eachSchema(rootSchema, childSchema => {
        if (childSchema.$ref && childSchema[UI_PROPERTY] == null) {
            // do not add default options for references - json-schema-library
            // merges on root elements only (which is acceptable)
            return;
        }
        childSchema[UI_PROPERTY] = {
            hidden: false,
            title: childSchema.title || "",
            description: childSchema.description || "",
            ...childSchema.options,
            ...childSchema[UI_PROPERTY]
        };
    });
    return rootSchema;
}
/**
 * Resolves a list of pointers, where the first found value is returned. Supports simple strings as fallback.
 *  e.g. `["/data/local/title", "/data/local/subtitle", "Title"]`
 *
 * @return the option value
 */
function resolveOption(pointer, controller, optionValue) {
    if (Array.isArray(optionValue)) {
        for (let i = 0; i < optionValue.length; i += 1) {
            const option = optionValue[i];
            if (isPointer(option)) {
                const value = resolveReference(pointer, controller, option);
                if (Object(_populated__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
                    return value;
                }
            }
            else if (Object(_populated__WEBPACK_IMPORTED_MODULE_1__["default"])(option)) {
                return option;
            }
        }
    }
    return optionValue;
}
/**
 * Returns the first defined option set in schema. Supports relative and absolute pointers in data
 *
 * @param pointer
 * @param controller
 * @param options - a list of option properties. The first non-empty option will be returned
 * @return the first non-empty option
 */
function getOption(pointer, controller, ...options) {
    if (options.length === 0) {
        throw new Error("Expected at least one options property to be given in getOption");
    }
    const schema = controller.service("schema").get(pointer);
    const editronOptions = schema[UI_PROPERTY] || {};
    for (let i = 0; i < options.length; i += 1) {
        const option = editronOptions[options[i]];
        const resolver = isPointer(option) ? resolveReference : resolveOption;
        const value = resolver(pointer, controller, option);
        if (Object(_populated__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
            return value;
        }
        else if (Object(_populated__WEBPACK_IMPORTED_MODULE_1__["default"])(schema[options[i]])) {
            return schema[options[i]];
        }
    }
    return null;
}
function getTitle(pointer, controller) {
    const schema = controller.service("schema").get(pointer);
    const title = getOption(pointer, controller, "title") || "";
    return schema.minLength && title ? `${title.replace(/\s*\*\s*$/, "")} *` : title;
}
function getDefaultOption(schema, option) {
    return schema[UI_PROPERTY] ? (schema[UI_PROPERTY][option] || "") : "";
}
/* harmony default export */ __webpack_exports__["default"] = ({
    UI_PROPERTY,
    getOption,
    copyOptions,
    extendSchema,
    getBreadcrumps,
    getTitle,
    enumOptions,
    getDefaultOption
});


/***/ }),

/***/ "./src/utils/addItem.ts":
/*!******************************!*\
  !*** ./src/utils/addItem.ts ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/utils/createElement.ts");
/* harmony import */ var _services_OverlayService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/OverlayService */ "./src/services/OverlayService.ts");
/* harmony import */ var _components_overlayselecttiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/overlayselecttiles */ "./src/components/overlayselecttiles/index.ts");
/* harmony import */ var _UISchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UISchema */ "./src/utils/UISchema.ts");





/**
 * Request to insert an array child item at the given pointer. If multiple options are present, a dialogue is opened to
 * let the user select the appropriate type of child (oneof).
 * @param dataService
 * @param schemaService
 * @param pointer - to array on which to insert the child
 * @param index - index within array, where the child should be inserted (does not replace). Default: 0
 */
function addItem(dataService, schemaService, locationService, pointer, index = 0) {
    const list = dataService.get(pointer);
    const schema = schemaService.get(pointer);
    if (schema.type !== "array") {
        throw new Error(`Can not add item to a non-array (${pointer})`);
    }
    const selectOptions = schemaService.getChildSchemaSelection(pointer, index);
    // single option, immediately create template data and add item to list
    if (selectOptions.length === 1) {
        addSelection(0, schemaService, dataService);
        return;
    }
    // multiple options, ask user
    const element = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(".overlay__item");
    const selection = selectOptions.map((item, oneOfIndex) => ({
        icon: _UISchema__WEBPACK_IMPORTED_MODULE_4__["default"].getDefaultOption(item, "icon"),
        title: _UISchema__WEBPACK_IMPORTED_MODULE_4__["default"].getDefaultOption(item, "title"),
        description: _UISchema__WEBPACK_IMPORTED_MODULE_4__["default"].getDefaultOption(item, "description"),
        value: oneOfIndex
    }));
    // fetch overlay options
    const options = Object(_UISchema__WEBPACK_IMPORTED_MODULE_4__["getEditronOptions"])(schemaService.get(pointer));
    const overlayOptions = {
        header: "",
        ...options === null || options === void 0 ? void 0 : options.overlay
    };
    // create user-selection
    mithril__WEBPACK_IMPORTED_MODULE_0___default.a.render(element, mithril__WEBPACK_IMPORTED_MODULE_0___default()(_components_overlayselecttiles__WEBPACK_IMPORTED_MODULE_3__["default"], {
        // description: "Modulauswahl - Bitte wählen",
        value: 0,
        options: selection,
        onchange: (value) => {
            const selectedIndex = parseInt(value, 10);
            addSelection(selectedIndex, schemaService, dataService);
            _services_OverlayService__WEBPACK_IMPORTED_MODULE_2__["default"].close();
            locationService.goto(`${pointer}/${index}`);
        }
    }));
    // add data of selection
    function addSelection(selectedIndex, schemaService, dataService) {
        const itemSchema = selectOptions[selectedIndex];
        const itemData = schemaService.getTemplate(itemSchema);
        list.splice(index, 0, itemData);
        dataService.set(pointer, list);
    }
    // and ask question
    _services_OverlayService__WEBPACK_IMPORTED_MODULE_2__["default"].open(element, {
        header: overlayOptions.header,
        confirmButton: false
    });
    // .then(action => { console.log("dialog closed", action); });
}
/* harmony default export */ __webpack_exports__["default"] = (addItem);


/***/ }),

/***/ "./src/utils/array.ts":
/*!****************************!*\
  !*** ./src/utils/array.ts ***!
  \****************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    addItem(pointer, controller, index) {
        controller.addItemTo(pointer, index);
    },
    removeItem(pointer, controller, index) {
        const nextList = controller.service("data").get(pointer);
        nextList.splice(index, 1);
        controller.service("data").set(pointer, nextList);
    },
    cloneItem(pointer, controller, index) {
        const nextList = controller.service("data").get(pointer);
        const item = nextList[index];
        // copy value without control variables
        const clone = JSON.stringify(item, (key, value) => key !== "_id" ? value : undefined);
        nextList.splice(index, 0, JSON.parse(clone));
        controller.service("data").set(pointer, nextList);
    },
    moveItem(pointer, controller, index, destinationIndex) {
        if (destinationIndex < 0) {
            return;
        }
        const list = controller.service("data").get(pointer);
        if (list[index] == null || list[destinationIndex] == null) {
            return;
        }
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
        controller.service("data").set(pointer, list);
    },
    moveElement(list, index, destinationIndex) {
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
    }
});


/***/ }),

/***/ "./src/utils/createElement.ts":
/*!************************************!*\
  !*** ./src/utils/createElement.ts ***!
  \************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "mithril");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

function createElement(selector, attributes) {
    const vnode = mithril__WEBPACK_IMPORTED_MODULE_0___default()(selector, attributes);
    const element = document.createElement(vnode.tag);
    Object.keys(vnode.attrs).forEach((key) => {
        if (key === "className") {
            vnode.attrs[key].split(" ").forEach((className) => element.classList.add(className));
        }
        else if (vnode.attrs[key] != null && vnode.attrs[key] !== "") {
            element.setAttribute(key, vnode.attrs[key]);
        }
    });
    return element;
}


/***/ }),

/***/ "./src/utils/createProxy.ts":
/*!**********************************!*\
  !*** ./src/utils/createProxy.ts ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createProxy; });
/* harmony import */ var _technik_sde_foxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @technik-sde/foxy */ "./node_modules/@technik-sde/foxy/distmodule/index.js");

const defaultOptions = {
    handlers: [
        _technik_sde_foxy__WEBPACK_IMPORTED_MODULE_0__["handler"].unsplash,
        _technik_sde_foxy__WEBPACK_IMPORTED_MODULE_0__["handler"].image,
        _technik_sde_foxy__WEBPACK_IMPORTED_MODULE_0__["handler"].video
    ]
};
function createProxy(options = {}) {
    if (options.constructor.name === "Foxy") {
        return options;
    }
    const o = { ...defaultOptions, ...options };
    if (Array.isArray(o.handlers)) {
        return new _technik_sde_foxy__WEBPACK_IMPORTED_MODULE_0__["Foxy"](o);
    }
    throw new Error(`Failed initializing proxy from: ${JSON.stringify(options)}`);
}


/***/ }),

/***/ "./src/utils/i18n.ts":
/*!***************************!*\
  !*** ./src/utils/i18n.ts ***!
  \***************************/
/*! exports provided: translate, translateError, addLanguage */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateError", function() { return translateError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLanguage", function() { return addLanguage; });
/* harmony import */ var json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-schema-library/lib/utils/render */ "./node_modules/json-schema-library/lib/utils/render.js");
/* harmony import */ var json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_0__);

translate.strings = {
    "array:button:moveup": "move up",
    "array:button:movedown": "move down",
    "array:button:remove": "remove",
    "array:button:clone": "duplicate"
};
translateError.strings = {};
function translate(key, data) {
    if (typeof translate.strings[key] === "string") {
        return data == null ? translate.strings[key] : json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_0___default()(translate.strings[key], data);
    }
    else if (typeof translate.strings[key] === "function") {
        return translate.strings[key](data);
    }
    return key;
}
function translateError(controller, error) {
    if (typeof translateError.strings[error.code] === "string") {
        error.message = error.data == null ?
            translateError.strings[error.code] : json_schema_library_lib_utils_render__WEBPACK_IMPORTED_MODULE_0___default()(translateError.strings[error.code], error.data);
    }
    else if (typeof translateError.strings[error.code] === "function") {
        error.message = translateError.strings[error.code](controller, error);
    }
    return error;
}
function addLanguage(lang, keys) {
    const _keys = (keys == null && Object.prototype.toString.call(lang) === "[object Object]") ? lang : keys;
    Object.assign(translateError.strings, _keys.errors);
    Object.assign(translate.strings, _keys.strings);
}


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: i18n, addItem, array, createElement, isNodeContext, populated, selection, selectEditor, UISchem */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ "./src/utils/i18n.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _addItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItem */ "./src/utils/addItem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return _addItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./src/utils/array.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array", function() { return _array__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createElement */ "./src/utils/createElement.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _createElement__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _isNodeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isNodeContext */ "./src/utils/isNodeContext.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNodeContext", function() { return _isNodeContext__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _populated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./populated */ "./src/utils/populated.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "populated", function() { return _populated__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ "./src/utils/selection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _selectEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectEditor */ "./src/utils/selectEditor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectEditor", function() { return _selectEditor__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _UISchema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UISchema */ "./src/utils/UISchema.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UISchem", function() { return _UISchema__WEBPACK_IMPORTED_MODULE_8__["default"]; });













/***/ }),

/***/ "./src/utils/isEmpty.ts":
/*!******************************!*\
  !*** ./src/utils/isEmpty.ts ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
function isEmpty(value) {
    return value == null || value === "" ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (Array.isArray(value) && value.length === 0);
}


/***/ }),

/***/ "./src/utils/isNodeContext.ts":
/*!************************************!*\
  !*** ./src/utils/isNodeContext.ts ***!
  \************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNodeContext; });
/* global process */
function isNodeContext() {
    if (typeof process === "object") {
        if (typeof process.versions === "object") {
            if (typeof process.versions.node !== "undefined") {
                return true;
            }
        }
    }
    return false;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/utils/populated.ts":
/*!********************************!*\
  !*** ./src/utils/populated.ts ***!
  \********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return populated; });
// returns true if the value is valid, that is: it has content
function populated(value, returnIf, returnElse) {
    let isPopulated = true;
    if (value == null || value === "" || value === "#") {
        isPopulated = false;
    }
    else if (typeof value === "string") {
        isPopulated = value.replace(/<[^>]+>/g, "").replace(/[^A-Za-z0-9]/g, "").length > 0;
    }
    else if (Array.isArray(value)) {
        isPopulated = value.length > 0;
    }
    else if (Object.prototype.toString.call(value) === "[object Object]") {
        isPopulated = Object.keys(value).length > 0;
    }
    if (returnIf === undefined && returnElse === undefined) {
        return isPopulated;
    }
    return isPopulated ? returnIf : returnElse;
}


/***/ }),

/***/ "./src/utils/selectEditor.ts":
/*!***********************************!*\
  !*** ./src/utils/selectEditor.ts ***!
  \***********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Selects an editor based on the given schema
 *
 * @param editorViews - List of editors with a static function 'editorOf'
 * @param pointer - current pointer in data
 * @param controller
 * @param options - the complete and resolved (UISchema) options object (editron:ui + additions)
 * @return The constructor of the chosen editor od false if no editor could be resolved
 *  or is denied
 */
function select(editors, pointer, controller, options) {
    // @todo export this to a configurable function (this is distributed across modules: json-schema-library)
    if (/_id$/.test(pointer)) {
        return false; // abort if it is an internal value
    }
    const schema = controller.service("schema").get(pointer);
    if (schema.type === "error") {
        // data-pointer could not be found in schema
        // @todo find a better solution for additional data: maybe an 'additional data'-editor
        return false;
    }
    // @ui-option hidden
    if (options.hidden === true) {
        return false;
    }
    for (let i = 0, l = editors.length; i < l; i += 1) {
        if (editors[i].editorOf(pointer, controller, options)) {
            return editors[i];
        }
    }
    return undefined;
}
/* harmony default export */ __webpack_exports__["default"] = (select);


/***/ }),

/***/ "./src/utils/selection.ts":
/*!********************************!*\
  !*** ./src/utils/selection.ts ***!
  \********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isBlurable = (element) => (typeof element.mayBlur === "function");
/** returns true if one may trigger blur on the element via cursor movement **/
function mayBlur(element, direction) {
    const dir = (direction === "down" || direction === "right") ? 1 : -1;
    if (isBlurable(element)) {
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
        const input = element;
        if (direction === "up" || direction === "down") {
            return true;
        }
        if (direction === "left" && input.selectionStart === 0) {
            return true;
        }
        if (direction === "right" && input.value.length === input.selectionEnd) {
            return true;
        }
        return false;
    }
    if (element.tagName === "TEXTAREA") {
        const input = element;
        if (element.value === "") {
            return true;
        }
        else if (dir === -1 && input.selectionStart === 0) {
            return true;
        }
        else if (dir === 1 && input.value.length === input.selectionEnd) {
            return true;
        }
        return false;
    }
    return true;
}
/** returns the current active (editron) input element or false */
function getActiveInput(controller, parent = document.body) {
    const currentPointer = controller.service("location").getCurrent();
    if (currentPointer === "#") {
        console.log("abort empty selection", currentPointer, "active element", document.activeElement);
        return false;
    }
    const activeInput = parent.querySelector(`[data-id="${currentPointer}"]`);
    if (activeInput == null) {
        return false;
    }
    if (activeInput !== document.activeElement) {
        console.log("selection: active input is not the same as current editor", activeInput, document.activeElement);
    }
    return activeInput;
}
/** returns a list of available editron input-elements (including textaras, select) */
function getAvailableInputs(parent) {
    return Array.from(parent.querySelectorAll("input,textarea,select"));
}
/** returns the next input element in direction or false if it is last/first */
function getNextInput(controller, direction = "down", { parent = document.body } = {}) {
    const activeElement = getActiveInput(controller, parent);
    if (activeElement === false) {
        return false;
    }
    const allElements = getAvailableInputs(parent);
    const dir = (direction === "down" || direction === "right") ? 1 : -1;
    const currentIndex = allElements.indexOf(activeElement);
    if (currentIndex === -1) {
        return false;
    }
    const nextElement = allElements[currentIndex + dir];
    if (nextElement && nextElement.focus) {
        return nextElement;
    }
    return false;
}
/**
 * move the focus from current element to next visible input-element
 * inputs being (textarea, input and select with an id-attribute containing a json-pointer-id)
 * @returns true - if there was a new target was found or the move prevented
 */
function focusNextInput(controller, direction = "down", options = {}) {
    const { force = false, parent = document.body } = options;
    const activeElement = getActiveInput(controller, parent);
    if (activeElement === false) {
        return false;
    }
    if (force === false && mayBlur(activeElement, direction) === false) {
        // console.log("prevent blur of", activeElement);
        return true;
    }
    const nextElement = getNextInput(controller, direction, options);
    if (nextElement) {
        nextElement.focus();
        return true;
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = ({
    focusNextInput,
    getNextInput,
    getAvailableInputs,
    getActiveInput,
    mayBlur
});


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