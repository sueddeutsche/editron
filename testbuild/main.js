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

/***/ "./node_modules/@technik-sde/foxy/dist/foxy.js":
/*!*****************************************************!*\
  !*** ./node_modules/@technik-sde/foxy/dist/foxy.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t),n.d(t,"Foxy",(function(){return r})),n.d(t,"handler",(function(){return u})),n.d(t,"utils",(function(){return o}));class r{constructor(e={}){this.handlers=e.handlers||[]}addHandler(e,t=0){null==this.handlers[t]&&this.handlers.push(e),this.handlers.splice(t,0,e)}removeHandler(e){this.handlers=this.handlers.filter(t=>t!==e)}getImageURL(e){return this.get("getImageURL",e)}getImageInfo(e){return this.get("getImageInfo",e)}getVideoURL(e){return this.get("getVideoURL",e)}getVideoInfo(e){return this.get("getVideoInfo",e)}getURL(e){return this.get("getURL",e)}get(e,t){const n=this.findHandler(e,t);return null==n?Promise.reject(new Error(`There is no handler for method '${e}(${JSON.stringify(t)})'`)):n[e](t)}isSupported(e){return this.handlers.some(t=>t.use(e))}findHandler(e,t){return this.handlers.find(n=>"function"==typeof n[e]&&!0===n.use(t))}}var o={loadImageInfo:function(e,t={}){const n={src:e,image:new Image,type:"",width:0,height:0};return fetch(e,t).then(e=>e.blob()).then(e=>(n.type=e.type.replace(/^[^/]+\//,""),URL.createObjectURL(e))).then(e=>new Promise((t,r)=>{n.image.addEventListener("load",()=>t()),n.image.addEventListener("error",r),n.image.src=e})).then(()=>(n.width=n.image.naturalWidth,n.height=n.image.naturalHeight,n))},loadVideoInfo:function(e,t={}){const n={src:e,width:0,height:0,video:document.createElement("video"),duration:0,poster:""};return fetch(e,t).then(e=>e.blob()).then(e=>(n.type=e.type.replace(/^[^/]+\//,""),URL.createObjectURL(e))).then(e=>new Promise((t,r)=>{n.video.addEventListener("error",r),n.video.addEventListener("loadedmetadata",()=>{const{video:e}=n;n.width=e.videoWidth,n.height=e.videoHeight,n.duration=e.duration,n.poster=e.poster,t(n)});const o=document.createElement("source");o.setAttribute("src",e),n.video.appendChild(o)}))},isHandler:function(e){return"[object Object]"===Object.prototype.toString.call(e)&&"function"==typeof e.use}};const i=/^https:\/\/images\.unsplash\.com\/photo-\d{13}-[0-9a-f]{12}/;function s(e){const t=e.source.replace(/\?.*$/,""),n=new URLSearchParams(e.source.replace(/^.*\?/,""));return e.width&&n.set("w",e.width),e.height&&n.set("h",e.height),e.quality&&n.set("q",e.quality),e.fit&&n.set("fit",e.fit),e.auto&&n.set("auto",e.auto),`${t}?${n.toString()}`}const u={unsplash:{use:e=>i.test(e.source),getImageURL:e=>Promise.resolve(s(e)),getImageInfo:e=>o.loadImageInfo(s(e))},image:{use:e=>/^https?:\/\//.test(e.source),getImageURL:e=>Promise.resolve(e.source),getImageInfo:e=>o.loadImageInfo(e.source)},video:{use:e=>/^https?:\/\//.test(e.source),getVideoURL:e=>Promise.resolve(e.source),getVideoInfo:e=>o.loadVideoInfo(e.source)}}}])}));

/***/ }),

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
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
			delete: function _delete(key) {
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
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

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

			map.delete(ta);
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

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/diff_match_patch/lib/diff_match_patch.js":
/*!***************************************************************!*\
  !*** ./node_modules/diff_match_patch/lib/diff_match_patch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines) {
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
diff_match_patch.prototype.diff_compute = function(text1, text2, checklines) {
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
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }
  longtext = shorttext = null;  // Garbage collect.

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
            diffs.splice(pointer - count_delete - count_insert,
                         count_delete + count_insert);
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
    diffs.pop();  // Remove the dummy entry at the end.
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
diff_match_patch.prototype.diff_linesToChars = function(text1, text2) {
  var lineArray = [];  // e.g. lineArray[4] == 'Hello\n'
  var lineHash = {};   // e.g. lineHash['Hello\n'] == 4

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

      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
          (lineHash[line] !== undefined)) {
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
diff_match_patch.prototype.diff_charsToLines = function(diffs, lineArray) {
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
diff_match_patch.prototype.diff_map = function(text1, text2) {
  // Don't run for too long.
  var ms_end = (new Date()).getTime() + this.Diff_Timeout * 1000;
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
  var footstep;  // Used to track overlapping paths.
  var footsteps = {};
  var done = false;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (text1_length + text2_length) % 2;
  for (var d = 0; d < max_d; d++) {
    // Bail out if timeout reached.
    if (this.Diff_Timeout > 0 && (new Date()).getTime() > ms_end) {
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
      while (!done && x < text1_length && y < text2_length &&
             text1.charAt(x) == text2.charAt(y)) {
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
        var a = this.diff_path1(v_map1, text1.substring(0, x),
                                text2.substring(0, y));
        return a.concat(this.diff_path2(v_map2, text1.substring(x),
                                        text2.substring(y)));
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
        footstep = (text1_length - x) + ',' + (text2_length - y);
        if (!front && footsteps[footstep] !== undefined) {
          done = true;
        }
        if (front) {
          footsteps[footstep] = d;
        }
        while (!done && x < text1_length && y < text2_length &&
               text1.charAt(text1_length - x - 1) ==
               text2.charAt(text2_length - y - 1)) {
          x++;
          y++;
          footstep = (text1_length - x) + ',' + (text2_length - y);
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
          var a = this.diff_path1(v_map1, text1.substring(0, text1_length - x),
                                  text2.substring(0, text2_length - y));
          return a.concat(this.diff_path2(v_map2,
                          text1.substring(text1_length - x),
                          text2.substring(text2_length - y)));
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
diff_match_patch.prototype.diff_path1 = function(v_map, text1, text2) {
  var path = [];
  var x = text1.length;
  var y = text2.length;
  /** @type {?number} */
  var last_op = null;
  for (var d = v_map.length - 2; d >= 0; d--) {
    while (1) {
      if (v_map[d][(x - 1) + ',' + y] !== undefined) {
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
diff_match_patch.prototype.diff_path2 = function(v_map, text1, text2) {
  var path = [];
  var pathLength = 0;
  var x = text1.length;
  var y = text2.length;
  /** @type {?number} */
  var last_op = null;
  for (var d = v_map.length - 2; d >= 0; d--) {
    while (1) {
      if (v_map[d][(x - 1) + ',' + y] !== undefined) {
        x--;
        if (last_op === DIFF_DELETE) {
          path[pathLength - 1][1] += text1.charAt(text1.length - x - 1);
        } else {
          path[pathLength++] =
              [DIFF_DELETE, text1.charAt(text1.length - x - 1)];
        }
        last_op = DIFF_DELETE;
        break;
      } else if (v_map[d][x + ',' + (y - 1)] !== undefined) {
        y--;
        if (last_op === DIFF_INSERT) {
          path[pathLength - 1][1] += text2.charAt(text2.length - y - 1);
        } else {
          path[pathLength++] =
              [DIFF_INSERT, text2.charAt(text2.length - y - 1)];
        }
        last_op = DIFF_INSERT;
        break;
      } else {
        x--;
        y--;
        if (text1.charAt(text1.length - x - 1) !=
            text2.charAt(text2.length - y - 1)) {
          throw new Error('No diagonal.  Can\'t happen. (diff_path2)');
        }
        if (last_op === DIFF_EQUAL) {
          path[pathLength - 1][1] += text1.charAt(text1.length - x - 1);
        } else {
          path[pathLength++] =
              [DIFF_EQUAL, text1.charAt(text1.length - x - 1)];
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
diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
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
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
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
diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(text1.length - 1) !=
                          text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
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
diff_match_patch.prototype.diff_halfMatch = function(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 10 || shorttext.length < 1) {
    return null;  // Pointless.
  }
  var dmp = this;  // 'this' becomes 'window' in a closure.

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
      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i),
                                               shorttext.substring(j));
      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i),
                                               shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length >= longtext.length / 2) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI(longtext, shorttext,
                            Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI(longtext, shorttext,
                            Math.ceil(longtext.length / 2));
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
diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
  var changes = false;
  var equalities = [];  // Stack of indices where equalities are found.
  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
  var lastequality = null;  // Always equal to equalities[equalitiesLength-1][1]
  var pointer = 0;  // Index of current position.
  // Number of characters that changed prior to the equality.
  var length_changes1 = 0;
  // Number of characters that changed after the equality.
  var length_changes2 = 0;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {  // equality found
      equalities[equalitiesLength++] = pointer;
      length_changes1 = length_changes2;
      length_changes2 = 0;
      lastequality = diffs[pointer][1];
    } else {  // an insertion or deletion
      length_changes2 += diffs[pointer][1].length;
      if (lastequality !== null && (lastequality.length <= length_changes1) &&
          (lastequality.length <= length_changes2)) {
        // Duplicate record
        diffs.splice(equalities[equalitiesLength - 1], 0,
                     [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        // Throw away the equality we just deleted.
        equalitiesLength--;
        // Throw away the previous equality (it needs to be reevaluated).
        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_changes1 = 0;  // Reset the counters.
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
diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
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
    if (one.charAt(one.length - 1).match(punctuation) ||
        two.charAt(0).match(punctuation)) {
      score++;
      // Two points for whitespace.
      if (one.charAt(one.length - 1).match(whitespace) ||
          two.charAt(0).match(whitespace)) {
        score++;
        // Three points for line breaks.
        if (one.charAt(one.length - 1).match(linebreak) ||
            two.charAt(0).match(linebreak)) {
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
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
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
      var bestScore = diff_cleanupSemanticScore(equality1, edit) +
          diff_cleanupSemanticScore(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore(equality1, edit) +
            diff_cleanupSemanticScore(edit, equality2);
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
diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
  var changes = false;
  var equalities = [];  // Stack of indices where equalities are found.
  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
  var lastequality = '';  // Always equal to equalities[equalitiesLength-1][1]
  var pointer = 0;  // Index of current position.
  // Is there an insertion operation before the last equality.
  var pre_ins = false;
  // Is there a deletion operation before the last equality.
  var pre_del = false;
  // Is there an insertion operation after the last equality.
  var post_ins = false;
  // Is there a deletion operation after the last equality.
  var post_del = false;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {  // equality found
      if (diffs[pointer][1].length < this.Diff_EditCost &&
          (post_ins || post_del)) {
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
    } else {  // an insertion or deletion
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
      if (lastequality && ((pre_ins && pre_del && post_ins && post_del) ||
                           ((lastequality.length < this.Diff_EditCost / 2) &&
                            (pre_ins + pre_del + post_ins + post_del) == 3))) {
        // Duplicate record
        diffs.splice(equalities[equalitiesLength - 1], 0,
                     [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        equalitiesLength--;  // Throw away the equality we just deleted;
        lastequality = '';
        if (pre_ins && pre_del) {
          // No changes made which could affect previous entry, keep going.
          post_ins = post_del = true;
          equalitiesLength = 0;
        } else {
          equalitiesLength--;  // Throw away the previous equality;
          pointer = equalitiesLength > 0 ?
              equalities[equalitiesLength - 1] : -1;
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
diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
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
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = this.diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
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
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
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
diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
  var chars1 = 0;
  var chars2 = 0;
  var last_chars1 = 0;
  var last_chars2 = 0;
  var x;
  for (x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {  // Equality or deletion.
      chars1 += diffs[x][1].length;
    }
    if (diffs[x][0] !== DIFF_DELETE) {  // Equality or insertion.
      chars2 += diffs[x][1].length;
    }
    if (chars1 > loc) {  // Overshot the location.
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
diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
  var html = [];
  var i = 0;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0];    // Operation (insert, delete, equal)
    var data = diffs[x][1];  // Text of change.
    var text = data.replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/\n/g, '&para;<BR>');
    switch (op) {
      case DIFF_INSERT:
        html[x] = '<INS STYLE="background:#E6FFE6;" TITLE="i=' + i + '">' +
                text + '</INS>';
        break;
      case DIFF_DELETE:
        html[x] = '<DEL STYLE="background:#FFE6E6;" TITLE="i=' + i + '">' +
                text + '</DEL>';
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
diff_match_patch.prototype.diff_text1 = function(diffs) {
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
diff_match_patch.prototype.diff_text2 = function(diffs) {
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
diff_match_patch.prototype.diff_levenshtein = function(diffs) {
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
diff_match_patch.prototype.diff_toDelta = function(diffs) {
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
diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
  var diffs = [];
  var diffsLength = 0;  // Keeping our own length var is faster in JS.
  var pointer = 0;  // Cursor in text1
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
          throw new Error('Invalid diff operation in diff_fromDelta: ' +
                          tokens[x]);
        }
    }
  }
  if (pointer != text1.length) {
    throw new Error('Delta length (' + pointer +
        ') does not equal source text length (' + text1.length + ').');
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
diff_match_patch.prototype.match_main = function(text, pattern, loc) {
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
diff_match_patch.prototype.match_bitap = function(text, pattern, loc) {
  if (pattern.length > this.Match_MaxBits) {
    throw new Error('Pattern too long for this browser.');
  }

  // Initialise the alphabet.
  var s = this.match_alphabet(pattern);

  var dmp = this;  // 'this' becomes 'window' in a closure.

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
    return accuracy + (proximity / dmp.Match_Distance);
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
      score_threshold =
          Math.min(match_bitapScore(0, best_loc), score_threshold);
    }
  }

  // Initialise the bit arrays.
  var matchmask = 1 << (pattern.length - 1);
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
      if (d === 0) {  // First pass: exact match.
        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
      } else {  // Subsequent passes: fuzzy match.
        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch |
                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
                last_rd[j + 1];
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
diff_match_patch.prototype.match_alphabet = function(pattern) {
  var s = {};
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] = 0;
  }
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
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
diff_match_patch.prototype.patch_addContext = function(patch, text) {
  if (text.length == 0) {
    return;
  }
  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
  var padding = 0;

  // Look for the first and last matches of pattern in text.  If two different
  // matches are found, increase the pattern length.
  while (text.indexOf(pattern) != text.lastIndexOf(pattern) &&
         pattern.length < this.Match_MaxBits - this.Patch_Margin -
         this.Patch_Margin) {
    padding += this.Patch_Margin;
    pattern = text.substring(patch.start2 - padding,
                             patch.start2 + patch.length1 + padding);
  }
  // Add one chunk for good luck.
  padding += this.Patch_Margin;

  // Add the prefix.
  var prefix = text.substring(patch.start2 - padding, patch.start2);
  if (prefix) {
    patch.diffs.unshift([DIFF_EQUAL, prefix]);
  }
  // Add the suffix.
  var suffix = text.substring(patch.start2 + patch.length1,
                              patch.start2 + patch.length1 + padding);
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
diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
  var text1, diffs;
  if (typeof a == 'string' && typeof opt_b == 'string' &&
      typeof opt_c == 'undefined') {
    // Method 1: text1, text2
    // Compute diffs from text1 and text2.
    text1 = a;
    diffs = this.diff_main(text1, opt_b, true);
    if (diffs.length > 2) {
      this.diff_cleanupSemantic(diffs);
      this.diff_cleanupEfficiency(diffs);
    }
  } else if (a && typeof a == 'object' && typeof opt_b == 'undefined' &&
      typeof opt_c == 'undefined') {
    // Method 2: diffs
    // Compute text1 from diffs.
    diffs = a;
    text1 = this.diff_text1(diffs);
  } else if (typeof a == 'string' && opt_b && typeof opt_b == 'object' &&
      typeof opt_c == 'undefined') {
    // Method 3: text1, diffs
    text1 = a;
    diffs = opt_b;
  } else if (typeof a == 'string' && typeof opt_b == 'string' &&
      opt_c && typeof opt_c == 'object') {
    // Method 4: text1, text2, diffs
    // text2 is not used.
    text1 = a;
    diffs = opt_c;
  } else {
    throw new Error('Unknown call format to patch_make.');
  }

  if (diffs.length === 0) {
    return [];  // Get rid of the null case.
  }
  var patches = [];
  var patch = new patch_obj();
  var patchDiffLength = 0;  // Keeping our own length var is faster in JS.
  var char_count1 = 0;  // Number of characters into the text1 string.
  var char_count2 = 0;  // Number of characters into the text2 string.
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
        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text +
                         postpatch_text.substring(char_count2);
        break;
      case DIFF_DELETE:
        patch.length1 += diff_text.length;
        patch.diffs[patchDiffLength++] = diffs[x];
        postpatch_text = postpatch_text.substring(0, char_count2) +
                         postpatch_text.substring(char_count2 +
                             diff_text.length);
        break;
      case DIFF_EQUAL:
        if (diff_text.length <= 2 * this.Patch_Margin &&
            patchDiffLength && diffs.length != x + 1) {
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
diff_match_patch.prototype.patch_deepCopy = function(patches) {
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
diff_match_patch.prototype.patch_apply = function(patches, text) {
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
      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits),
                                  expected_loc);
      if (start_loc != -1) {
        end_loc = this.match_main(text,
            text1.substring(text1.length - this.Match_MaxBits),
            expected_loc + text1.length - this.Match_MaxBits);
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
        text = text.substring(0, start_loc) +
               this.diff_text2(patches[x].diffs) +
               text.substring(start_loc + text1.length);
      } else {
        // Imperfect match.  Run a diff to get a framework of equivalent
        // indices.
        var diffs = this.diff_main(text1, text2, false);
        if (text1.length > this.Match_MaxBits &&
            this.diff_levenshtein(diffs) / text1.length >
            this.Patch_DeleteThreshold) {
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
            if (mod[0] === DIFF_INSERT) {  // Insertion
              text = text.substring(0, start_loc + index2) + mod[1] +
                     text.substring(start_loc + index2);
            } else if (mod[0] === DIFF_DELETE) {  // Deletion
              text = text.substring(0, start_loc + index2) +
                     text.substring(start_loc + this.diff_xIndex(diffs,
                         index1 + mod[1].length));
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
diff_match_patch.prototype.patch_addPadding = function(patches) {
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
    patch.start1 -= paddingLength;  // Should be 0.
    patch.start2 -= paddingLength;  // Should be 0.
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
diff_match_patch.prototype.patch_splitMax = function(patches) {
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
        while (bigpatch.diffs.length !== 0 &&
               patch.length1 < patch_size - this.Patch_Margin) {
          var diff_type = bigpatch.diffs[0][0];
          var diff_text = bigpatch.diffs[0][1];
          if (diff_type === DIFF_INSERT) {
            // Insertions are harmless.
            patch.length2 += diff_text.length;
            start2 += diff_text.length;
            patch.diffs.push(bigpatch.diffs.shift());
            empty = false;
          } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 &&
                     patch.diffs[0][0] == DIFF_EQUAL &&
                     diff_text.length > 2 * patch_size) {
            // This is a large deletion.  Let it pass in one chunk.
            patch.length1 += diff_text.length;
            start1 += diff_text.length;
            empty = false;
            patch.diffs.push([diff_type, diff_text]);
            bigpatch.diffs.shift();
          } else {
            // Deletion or equality.  Only take as much as we can stomach.
            diff_text = diff_text.substring(0, patch_size - patch.length1 -
                                               this.Patch_Margin);
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
              bigpatch.diffs[0][1] =
                  bigpatch.diffs[0][1].substring(diff_text.length);
            }
          }
        }
        // Compute the head context for the next patch.
        precontext = this.diff_text2(patch.diffs);
        precontext =
            precontext.substring(precontext.length - this.Patch_Margin);
        // Append the end context for this patch.
        var postcontext = this.diff_text1(bigpatch.diffs)
                              .substring(0, this.Patch_Margin);
        if (postcontext !== '') {
          patch.length1 += postcontext.length;
          patch.length2 += postcontext.length;
          if (patch.diffs.length !== 0 &&
              patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
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
diff_match_patch.prototype.patch_toText = function(patches) {
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
diff_match_patch.prototype.patch_fromText = function(textline) {
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
patch_obj.prototype.toString = function() {
  var coords1, coords2;
  if (this.length1 === 0) {
    coords1 = this.start1 + ',0';
  } else if (this.length1 == 1) {
    coords1 = this.start1 + 1;
  } else {
    coords1 = (this.start1 + 1) + ',' + this.length1;
  }
  if (this.length2 === 0) {
    coords2 = this.start2 + ',0';
  } else if (this.length2 == 1) {
    coords2 = this.start2 + 1;
  } else {
    coords2 = (this.start2 + 1) + ',' + this.length2;
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

/***/ "./node_modules/gson-conform/lib/asArray.js":
/*!**************************************************!*\
  !*** ./node_modules/gson-conform/lib/asArray.js ***!
  \**************************************************/
/*! no static exports found */
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
		keys = value.map(function (value, index) { return index; });

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
	const result = run(data, split(pointer));
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
	var isURI = (typeof option === "boolean") ? option : (firstPointer && firstPointer[0] === "#");

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function removeUndefinedItems(array) {
	var i = 0;
	var skip = 0;
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


module.exports = removeUndefinedItems;


/***/ }),

/***/ "./node_modules/gson-pointer/lib/set.js":
/*!**********************************************!*\
  !*** ./node_modules/gson-pointer/lib/set.js ***!
  \**********************************************/
/*! no static exports found */
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

	var key, nextKeyIsArray, current = data;
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
	const sanitize = pointer.indexOf("#") >= 0 ? sanitizeAndDecodeProperty : sanitizeProperty;
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
/***/ (function(module, exports, __webpack_require__) {

var pointerDelete = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js").delete;
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
/***/ (function(module, exports, __webpack_require__) {

var o = __webpack_require__(/*! gson-conform */ "./node_modules/gson-conform/lib/index.js");
var common = __webpack_require__(/*! ./common */ "./node_modules/gson-query/lib/common.js");


var f = {
    queryKey: function (obj, query) {
        return function (key) {
            return valid(obj[key], query);
        };
    },
    queryRegExp: function (obj, query, regex) {
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
    }

    // @todo this must be simpler to solve
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

    var tests = query
        .replace(/(&&)/g, "§$1§")
        .replace(/(\|\|)/g, "§$1§")
        .split("§");

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
        }

        // perform filter test, exception undefined is not matched for negated non-undefined values
        value = (truthy ? (value === obj[key]) : (value !== obj[key] && (obj[key] !== undefined || key === undefined)));

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
/***/ (function(module, exports, __webpack_require__) {

exports.get = __webpack_require__(/*! ./get */ "./node_modules/gson-query/lib/get.js");
exports.run = __webpack_require__(/*! ./run */ "./node_modules/gson-query/lib/run.js");
exports.delete = __webpack_require__(/*! ./delete */ "./node_modules/gson-query/lib/delete.js");
exports.filter = __webpack_require__(/*! ./filter */ "./node_modules/gson-query/lib/filter.js");


/***/ }),

/***/ "./node_modules/gson-query/lib/run.js":
/*!********************************************!*\
  !*** ./node_modules/gson-query/lib/run.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(/*! ./filter */ "./node_modules/gson-query/lib/filter.js");
var parsePointer = __webpack_require__(/*! ./common */ "./node_modules/gson-query/lib/common.js").parsePointer;
// @note gson-pointer: only strings are valid pointer properties to join. Ensure key is a string (could be index)
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
    var steps = parsePointer(jsonPointer);
    // cleanup first and last
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
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    config: {
        strings: __webpack_require__(/*! ./lib/config/strings */ "./node_modules/json-schema-library/lib/config/strings.js")
    },
    cores: {
        Interface: __webpack_require__(/*! ./lib/cores/CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js"),
        Draft04: __webpack_require__(/*! ./lib/cores/Draft04 */ "./node_modules/json-schema-library/lib/cores/Draft04.js"), // core implementing draft04 specs
        JsonEditor: __webpack_require__(/*! ./lib/cores/JsonEditor */ "./node_modules/json-schema-library/lib/cores/JsonEditor.js") // adjusted core of draft04 to better support the json-editor
    },
    addSchema: __webpack_require__(/*! ./lib/addSchema */ "./node_modules/json-schema-library/lib/addSchema.js"), // add a schema to be references via $ref
    addValidator: __webpack_require__(/*! ./lib/addValidator */ "./node_modules/json-schema-library/lib/addValidator.js"), // add validation for keyword, format, datatype and customize errors
    compileSchema: __webpack_require__(/*! ./lib/compileSchema */ "./node_modules/json-schema-library/lib/compileSchema.js"),
    createCustomError: __webpack_require__(/*! ./lib/utils/createCustomError */ "./node_modules/json-schema-library/lib/utils/createCustomError.js"),
    createSchemaOf: __webpack_require__(/*! ./lib/createSchemaOf */ "./node_modules/json-schema-library/lib/createSchemaOf.js"), // creates a simple schema based on the given data
    each: __webpack_require__(/*! ./lib/each */ "./node_modules/json-schema-library/lib/each.js"), // iterate over data, receiving each data-entry with its schema
    eachSchema: __webpack_require__(/*! ./lib/eachSchema */ "./node_modules/json-schema-library/lib/eachSchema.js"), // iterates over a json-schemas type definitions
    getChildSchemaSelection: __webpack_require__(/*! ./lib/getChildSchemaSelection */ "./node_modules/json-schema-library/lib/getChildSchemaSelection.js"), // get available child schemas
    getSchema: __webpack_require__(/*! ./lib/getSchema */ "./node_modules/json-schema-library/lib/getSchema.js"), // get schema of datapointer
    getTemplate: __webpack_require__(/*! ./lib/getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js"), // create data which is valid to the given schema
    getTypeOf: __webpack_require__(/*! ./lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js"), // returns the javascript datatype
    isValid: __webpack_require__(/*! ./lib/isValid */ "./node_modules/json-schema-library/lib/isValid.js"), // returns a boolean if the schema is valid
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
/***/ (function(module, exports, __webpack_require__) {

const getSchema = __webpack_require__(/*! ./getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");
const Core = __webpack_require__(/*! ./cores/JsonEditor */ "./node_modules/json-schema-library/lib/cores/JsonEditor.js");
const gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");


function copy(value) {
    return JSON.parse(JSON.stringify(value));
}


class SchemaService {

    constructor(schema, data) {
        this.core = new Core(schema);
        this.schema = schema;
        this.data = data;
        this.cache = {};
    }

    updateData(data) {
        this.data = data;
        this.cache = {};
    }

    updateSchema(schema) {
        this.schema = schema;
        this.core.setSchema(schema);
        this.cache = {};
    }

    get(pointer, data) {
        if (data) { // possibly separate entry point
            const schema = getSchema(this.core, data, this.schema, pointer);
            return copy(schema);
        }

        if (pointer === "#") { // root
            return this.schema;
        }

        if (this.cache[pointer]) { // return cached result
            return this.cache[pointer];
        }

        const parentPointer = gp.join(pointer, "..");
        let parentSchema = this.cache[parentPointer];
        if (parentSchema == null) {
            // store parent (major performance improvement if its within oneof)
            parentSchema = getSchema(this.core, this.data, this.schema, parentPointer);
            if (parentSchema.variableSchema !== true) {
                this.cache[parentPointer] = copy(parentSchema);
            }
        }

        // step from parent to child
        const key = gp.split(pointer).pop();
        let schema = getSchema(this.core, gp.get(this.data, parentPointer), this.cache[parentPointer], key);
        schema = copy(schema);
        if (schema.variableSchema !== true) {
            this.cache[pointer] = schema;
        }
        return schema;
    }
}


module.exports = SchemaService;


/***/ }),

/***/ "./node_modules/json-schema-library/lib/addSchema.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/addSchema.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const remotes = __webpack_require__(/*! ../remotes */ "./node_modules/json-schema-library/remotes/index.js");
const compileSchema = __webpack_require__(/*! ./compileSchema */ "./node_modules/json-schema-library/lib/compileSchema.js");


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
/***/ (function(module, exports) {

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
        throw new Error(`Error callback 'errorCreator' must be of type function. Received ${typeof errorCreator}`);
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
        throw new Error(`Validation function expected. Received ${typeof validationFunction}`);
    }
    if (core.validateFormat[formatType] == null) {
        core.validateFormat[formatType] = validationFunction;
        return;
    }
    throw new Error(`A format '${formatType}' is already registered to validation`);
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
        throw new Error(`Validation function expected. Received ${typeof validationFunction}`);
    }
    if (core.typeKeywords[datatype] == null) {
        throw new Error(`Unknown datatype ${datatype}. Failed adding custom keyword validation.`);
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
/***/ (function(module, exports, __webpack_require__) {

const { get } = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
const splitRef = __webpack_require__(/*! ./splitRef */ "./node_modules/json-schema-library/lib/compile/splitRef.js");
const suffixes = /(#|\/)+$/g;
const getTypeOf = __webpack_require__(/*! ../getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
// const emptyValues = ["", null, "#"];

const isObject = val => (getTypeOf(val) === "object");


// 1. combined is known
// 2. base or pointer is known
// 3. base + pointer is known

module.exports = function getRef(context, rootSchema, $ref) {
    if (isObject($ref)) {
        $ref = $ref.__ref || $ref.$ref;
    }

    if ($ref == null) {
        return rootSchema;
    }

    let schema;

    // is it a known $ref?
    const $remote = $ref.replace(suffixes, "");
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
    }

    // is it a ref with host/pointer?
    const fragments = splitRef($ref);
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
        const base = fragments[0];
        $ref = fragments[1];

        if (context.remotes[base]) {
            if (context.remotes[base].getRef) {
                return context.remotes[base].getRef($ref);
            }
            // console.log("warning: uncompiled remote - context may be wrong", base);
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
/***/ (function(module, exports, __webpack_require__) {

/* eslint max-statements-per-line: ["error", { "max": 2 }] */
const eachSchema = __webpack_require__(/*! ../eachSchema */ "./node_modules/json-schema-library/lib/eachSchema.js");
const remotes = __webpack_require__(/*! ../../remotes */ "./node_modules/json-schema-library/remotes/index.js");
const joinScope = __webpack_require__(/*! ./joinScope */ "./node_modules/json-schema-library/lib/compile/joinScope.js");
const getRef = __webpack_require__(/*! ./getRef */ "./node_modules/json-schema-library/lib/compile/getRef.js");

const COMPILED = "__compiled";
const COMPILED_REF = "__ref";
const GET_REF = "getRef";
const GET_ROOT = "getRoot";
const suffixes = /(#|\/)+$/g;


function compile(rootSchema, force = false) {
    if (rootSchema[COMPILED] !== undefined) { return rootSchema; } // eslint-disable-line
    const context = { ids: {}, remotes: Object.assign({}, remotes) };
    const rootSchemaAsString = JSON.stringify(rootSchema);
    rootSchema = JSON.parse(rootSchemaAsString);
    Object.defineProperty(rootSchema, COMPILED, { enumerable: false, value: true });
    Object.defineProperty(rootSchema, GET_REF, { enumerable: false, value: getRef.bind(null, context, rootSchema) });
    // Object.defineProperty(rootSchema, "debug", { enumerable: false, value: schema => {
    //     console.log(JSON.stringify(context.ids, null, 2));
    //     console.log("remotes", Object.keys(remotes));
    //     console.log(JSON.stringify(rootSchema, null, 2));
    // } });
    if (force === false && rootSchemaAsString.includes("$ref") === false) {
        // bail early, when no $refs are defined
        return rootSchema;
    }

    const scopes = {};
    const getRoot = () => rootSchema;
    eachSchema(rootSchema, (schema, pointer) => {
        if (schema.id) { context.ids[schema.id.replace(suffixes, "")] = pointer; }

        // build up scopes and add them to $ref-resolution map
        pointer = `#${pointer}`.replace(/##+/, "#");
        const previousPointer = pointer.replace(/\/[^/]+$/, "");
        const parentPointer = pointer.replace(/\/[^/]+\/[^/]+$/, "");
        const previousScope = scopes[previousPointer] || scopes[parentPointer];
        const scope = joinScope(previousScope, schema.id);
        scopes[pointer] = scope;
        if (context.ids[scope] == null) { context.ids[scope] = pointer; }

        if (schema.$ref) {
            Object.defineProperty(schema, COMPILED_REF, { enumerable: false, value: joinScope(scope, schema.$ref) });
            // @todo currently not used:
            Object.defineProperty(schema, GET_ROOT, { enumerable: false, value: getRoot });
            // console.log("compiled ref", scope, schema.$ref, "=>", joinScope(scope, schema.$ref));
        }
    });

    // console.log(JSON.stringify(context.ids, null, 2));
    return rootSchema;
}


module.exports = compile;


/***/ }),

/***/ "./node_modules/json-schema-library/lib/compile/joinScope.js":
/*!*******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/compile/joinScope.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint max-statements-per-line: ["error", { "max": 2 }] */
const suffixes = /(#|\/)+$/;
const trailingHash = /#$/;
const isDomain = /^[^:]+:\/\/[^/]+\//;
const trailingFragments = /\/[^/]*$/;
const idAndPointer = /#.*$/;

module.exports = function joinScope(previous, id) {
    if (previous == null && id == null) { return "#"; }
    if (id == null) { return previous.replace(trailingHash, ""); }
    if (previous == null) { return id.replace(trailingHash, ""); }

    if (id[0] === "#") { return `${previous.replace(idAndPointer, "")}${id.replace(suffixes, "")}`; }
    if (isDomain.test(id)) { return id.replace(trailingHash, ""); }
    return `${previous.replace(trailingFragments, "")}/${id.replace(trailingHash, "")}`;
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/compile/splitRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/compile/splitRef.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const suffixes = /(#|\/)+$/g;
const emptyValues = ["", null, "#"];


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
    const result = $ref.split("#");
    result[0] = result[0].replace(suffixes, "");
    result[1] = `#${result[1].replace(suffixes, "")}`;
    return result;
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/compileSchema.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/compileSchema.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./compile */ "./node_modules/json-schema-library/lib/compile/index.js");


/***/ }),

/***/ "./node_modules/json-schema-library/lib/config/settings.js":
/*!*****************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/config/settings.js ***!
  \*****************************************************************/
/*! no static exports found */
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
/***/ (function(module, exports, __webpack_require__) {

const resolveRef = __webpack_require__(/*! ../resolveRef.withOverwrite */ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js");
const compileSchema = __webpack_require__(/*! ../compileSchema */ "./node_modules/json-schema-library/lib/compileSchema.js");
const resolveAnyOf = __webpack_require__(/*! ../resolveAnyOf */ "./node_modules/json-schema-library/lib/resolveAnyOf.js");
const resolveAllOf = __webpack_require__(/*! ../resolveAllOf */ "./node_modules/json-schema-library/lib/resolveAllOf.js");


/* eslint no-unused-vars: 0 no-empty-function: 0 */
module.exports = class CoreInterface {

    constructor(schema) {
        this.setSchema(schema);
    }

    get rootSchema() {
        return this.__rootSchema;
    }

    set rootSchema(rootSchema) {
        if (rootSchema == null) {
            return;
        }
        this.__rootSchema = compileSchema(rootSchema);
    }

    each(data, callback, schema = this.rootSchema, pointer = "#") {
        return new Error("function 'each' is not implemented");
    }

    validate(data, schema = this.rootSchema, pointer = "#") {
        return [new Error("function 'validate' is not implemented")];
    }

    isValid(data, schema = this.rootSchema, pointer = "#") {
        return new Error("function 'isValid' is not implemented");
    }

    resolveAnyOf(data, schema, pointer = "#") {
        return resolveAnyOf(this, data, schema, pointer);
    }

    resolveAllOf(data, schema, pointer = "#") {
        return resolveAllOf(this, data, schema, pointer);
    }

    resolveRef(schema) {
        return new Error("function 'resolveRef' is not implemented");
    }

    resolveOneOf(data, schema, pointer = "#") {
        return new Error("function 'resolveOneOf' is not implemented");
    }

    getSchema(pointer, data, schema = this.rootSchema) {
        return new Error("function 'getSchema' is not implemented");
    }

    getTemplate(data, schema = this.rootSchema) {
        return new Error("function 'getTemplate' is not implemented");
    }

    setSchema(schema) {
        this.rootSchema = schema;
    }

    step(key, schema, data, pointer = "#") {
        return new Error("function 'step' is not implemented");
    }
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/cores/Draft04.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/cores/Draft04.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CoreInterface = __webpack_require__(/*! ./CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js");
const step = __webpack_require__(/*! ../step */ "./node_modules/json-schema-library/lib/step.js");
const validate = __webpack_require__(/*! ../validate */ "./node_modules/json-schema-library/lib/validate.js");
const resolveOneOf = __webpack_require__(/*! ../resolveOneOf.strict */ "./node_modules/json-schema-library/lib/resolveOneOf.strict.js");
const resolveRef = __webpack_require__(/*! ../resolveRef.strict */ "./node_modules/json-schema-library/lib/resolveRef.strict.js");
const getTemplate = __webpack_require__(/*! ../getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js");
const getSchema = __webpack_require__(/*! ../getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");
const each = __webpack_require__(/*! ../each */ "./node_modules/json-schema-library/lib/each.js");
const compileSchema = __webpack_require__(/*! ../compileSchema */ "./node_modules/json-schema-library/lib/compileSchema.js");

const remotes = __webpack_require__(/*! ../../remotes */ "./node_modules/json-schema-library/remotes/index.js");
remotes["http://json-schema.org/draft-04/schema"] = compileSchema(__webpack_require__(/*! ../../remotes/draft04.json */ "./node_modules/json-schema-library/remotes/draft04.json"));


class Draft04Core extends CoreInterface {

    constructor(schema) {
        super(schema);
        this.typeKeywords = JSON.parse(JSON.stringify(__webpack_require__(/*! ../validation/typeKeywordMapping */ "./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js")));
        this.validateKeyword = Object.assign({}, __webpack_require__(/*! ../validation/keyword */ "./node_modules/json-schema-library/lib/validation/keyword.js"));
        this.validateType = Object.assign({}, __webpack_require__(/*! ../validation/type */ "./node_modules/json-schema-library/lib/validation/type.js"));
        this.validateFormat = Object.assign({}, __webpack_require__(/*! ../validation/format */ "./node_modules/json-schema-library/lib/validation/format.js"));
        this.errors = Object.assign({}, __webpack_require__(/*! ../validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js"));
    }

    each(data, callback, schema = this.rootSchema, pointer = "#") {
        each(this, data, callback, schema, pointer);
    }

    validate(data, schema = this.rootSchema, pointer = "#") {
        return validate(this, data, schema, pointer);
    }

    isValid(data, schema = this.rootSchema, pointer = "#") {
        return this.validate(data, schema, pointer).length === 0;
    }

    resolveOneOf(data, schema, pointer) {
        return resolveOneOf(this, data, schema, pointer);
    }

    resolveRef(schema) {
        return resolveRef(schema, this.rootSchema);
    }

    getSchema(pointer, data, schema = this.rootSchema) {
        return getSchema(this, pointer, data, schema);
    }

    getTemplate(data, schema = this.rootSchema) {
        return getTemplate(this, data, schema);
    }

    step(key, schema, data, pointer = "#") {
        return step(this, key, schema, data, pointer);
    }
}


module.exports = Draft04Core;


/***/ }),

/***/ "./node_modules/json-schema-library/lib/cores/JsonEditor.js":
/*!******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/cores/JsonEditor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const CoreInterface = __webpack_require__(/*! ./CoreInterface */ "./node_modules/json-schema-library/lib/cores/CoreInterface.js");
const step = __webpack_require__(/*! ../step */ "./node_modules/json-schema-library/lib/step.js");
const validate = __webpack_require__(/*! ../validate */ "./node_modules/json-schema-library/lib/validate.js");
const resolveOneOf = __webpack_require__(/*! ../resolveOneOf.fuzzy */ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js");
const resolveRef = __webpack_require__(/*! ../resolveRef.withOverwrite */ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js");
const getTemplate = __webpack_require__(/*! ../getTemplate */ "./node_modules/json-schema-library/lib/getTemplate.js");
const getSchema = __webpack_require__(/*! ../getSchema */ "./node_modules/json-schema-library/lib/getSchema.js");
const each = __webpack_require__(/*! ../each */ "./node_modules/json-schema-library/lib/each.js");


class JsonEditorCore extends CoreInterface {

    constructor(schema) {
        super(schema);
        this.typeKeywords = JSON.parse(JSON.stringify(__webpack_require__(/*! ../validation/typeKeywordMapping */ "./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js")));
        this.validateKeyword = Object.assign({}, __webpack_require__(/*! ../validation/keyword */ "./node_modules/json-schema-library/lib/validation/keyword.js"));
        // set properties required per default and prevent no duplicate errors.
        // This is required for fuzzy resolveOneOf
        // this.validateKeyword.properties = this.validateKeyword.propertiesRequired;
        // this.validateKeyword.required = this.validateKeyword.requiredNotEmpty;
        this.validateType = Object.assign({}, __webpack_require__(/*! ../validation/type */ "./node_modules/json-schema-library/lib/validation/type.js"));
        this.validateFormat = Object.assign({}, __webpack_require__(/*! ../validation/format */ "./node_modules/json-schema-library/lib/validation/format.js"));
        this.errors = Object.assign({}, __webpack_require__(/*! ../validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js"));
    }

    each(data, callback, schema = this.rootSchema, pointer = "#") {
        each(this, data, callback, schema, pointer);
    }

    validate(data, schema = this.rootSchema, pointer = "#") {
        return validate(this, data, schema, pointer);
    }

    isValid(data, schema = this.rootSchema, pointer = "#") {
        return this.validate(data, schema, pointer).length === 0;
    }

    resolveOneOf(data, schema, pointer) {
        return resolveOneOf(this, data, schema, pointer);
    }

    resolveRef(schema) {
        return resolveRef(schema, this.rootSchema);
    }

    getSchema(pointer, data, schema = this.rootSchema) {
        return getSchema(this, pointer, data, schema);
    }

    getTemplate(data, schema = this.rootSchema) {
        return getTemplate(this, data, schema);
    }

    step(key, schema, data, pointer = "#") {
        return step(this, key, schema, data, pointer);
    }
}


module.exports = JsonEditorCore;


/***/ }),

/***/ "./node_modules/json-schema-library/lib/createSchemaOf.js":
/*!****************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/createSchemaOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");


/**
 * Create a simple json schema for the given input data
 * @param  {Mixed} data     - data to get json schema for
 * @return {Object} schema
 */
function createSchemaOf(data) {
    const schema = {
        type: getTypeOf(data)
    };

    if (schema.type === "object") {
        schema.properties = {};
        Object.keys(data).forEach(key => (schema.properties[key] = createSchemaOf(data[key])));
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
/***/ (function(module, exports, __webpack_require__) {

const getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");


/**
 * Iterates over data, retrieving its schema
 *
 * @param  {CoreInterface} core - validator
 * @param  {Mixed} data         - the data to iterate
 * @param  {Function} callback  - will be called with (schema, data, pointer) on each item
 * @param  {Object} [schema]    - the schema matching the data. Defaults to rootSchema
 * @param  {String} [pointer]   - pointer to current data. Default to rootPointer
 */
function each(core, data, callback, schema = core.rootSchema, pointer = "#") {
    callback(schema, data, pointer);
    const dataType = getTypeOf(data);

    if (dataType === "object") {
        Object.keys(data).forEach(key => {
            const nextSchema = core.step(key, schema, data, pointer); // not save
            const next = data[key]; // save
            core.each(next, callback, nextSchema, `${pointer}/${key}`);
        });
    } else if (dataType === "array") {
        data.forEach((next, key) => {
            const nextSchema = core.step(key, schema, data, pointer);
            core.each(next, callback, nextSchema, `${pointer}/${key}`);
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
/***/ (function(module, exports, __webpack_require__) {

const gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
const getTypeDefs = __webpack_require__(/*! ./schema/getTypeDefs */ "./node_modules/json-schema-library/lib/schema/getTypeDefs.js");
const isObject = value => Object.prototype.toString.call(value) === "[object Object]";


function nextTypeDefs(schema, pointer) {
    if (this.callback(schema, pointer) === true) { // eslint-disable-line no-invalid-this
        return; // stop iteration
    }

    const defs = getTypeDefs(schema);
    // eslint-disable-next-line no-invalid-this
    defs.forEach(next => this.nextTypeDefs(next.def, gp.join(pointer, next.pointer, false)));
}


function eachDefinition(walk, schema, pointer) {
    Object.keys(schema.definitions)
        .forEach(defId => {
            if (!isObject(schema.definitions[defId])) {
                console.log(`Invalid schema in ${pointer}/definitions/${defId}`);
                return;
            }
            walk.nextTypeDefs(schema.definitions[defId], gp.join(pointer, "definitions", defId, false));
        });
}


module.exports = function eachSchema(schema, callback, pointer = "#") {
    const walk = { callback, nextTypeDefs };
    walk.nextTypeDefs(schema, pointer);

    if (schema.definitions == null) {
        return;
    }

    walk.callback = (defschema, schemaPointer) => {
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
module.exports = function getChildSchemaSelection(core, property, schema = core.rootSchema) {
    const result = core.step(property, schema, {}, "#");

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
/***/ (function(module, exports, __webpack_require__) {

const gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
const emptyObject = {};


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
function getSchema(core, pointer, data, schema = core.rootSchema) {
    const frags = gp.split(pointer);
    return _get(core, schema, frags, pointer, data);
}


function _get(core, schema, frags, pointer, data = emptyObject) {
    if (frags.length === 0) {
        return schema;
    }

    const key = frags.shift(); // step key
    schema = core.step(key, schema, data, pointer); // step schema
    if (schema && schema.type === "error") {
        return schema;
    }
    data = data[key]; // step data
    return _get(core, schema, frags, `${pointer}/${key}`, data);
}


module.exports = getSchema;


/***/ }),

/***/ "./node_modules/json-schema-library/lib/getTemplate.js":
/*!*************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/getTemplate.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint quote-props: 0, max-statements-per-line: ["error", { "max": 2 }] */
const resolveOneOfFuzzy = __webpack_require__(/*! ./resolveOneOf.fuzzy */ "./node_modules/json-schema-library/lib/resolveOneOf.fuzzy.js");
const getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
const merge = __webpack_require__(/*! ./utils/merge */ "./node_modules/json-schema-library/lib/utils/merge.js");
const copy = __webpack_require__(/*! ./utils/copy */ "./node_modules/json-schema-library/lib/utils/copy.js");
const settings = __webpack_require__(/*! ./config/settings */ "./node_modules/json-schema-library/lib/config/settings.js");


let cache;
function shouldResolveRef(schema, pointer) {
    // ensure we refactored consistently
    if (pointer == null) { throw new Error("Missing pointer"); }

    const { $ref } = schema;
    if ($ref == null) { return true; }

    const value = (cache[pointer] == null || cache[pointer][$ref] == null) ? 0 : cache[pointer][$ref];
    return value < settings.GET_TEMPLATE_RECURSION_LIMIT;
}

function resolveRef(core, schema, pointer) {
    // ensure we refactored consistently
    if (pointer == null) { throw new Error("missing pointer", pointer); }

    const { $ref } = schema;
    if ($ref == null) { return schema; }

    // @todo pointer + ref is redundant?
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
        if (typeof value === type) {
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
        return Object.assign({ pointer }, schema);
    }
    // return if reached recursion limit
    if (shouldResolveRef(schema, pointer) === false && data == null) { return false; }

    // resolve $ref and copy schema
    let templateSchema = copy(resolveRef(core, schema, pointer));

    if (Array.isArray(schema.anyOf) && schema.anyOf.length > 0) {
        // test if we may resolve
        if (shouldResolveRef(schema.anyOf[0], `${pointer}/anyOf/0`)) {
            const resolvedAnyOf = resolveRef(core, schema.anyOf[0], `${pointer}/anyOf/0`);
            templateSchema = merge(templateSchema, resolvedAnyOf);
            // add pointer return-value, if any
            templateSchema.pointer = schema.anyOf[0].$ref || templateSchema.pointer;
        }
        delete templateSchema.anyOf;
    }

    // resolve allOf
    if (Array.isArray(schema.allOf)) {
        for (let i = 0, l = schema.allOf.length; i < l; i += 1) {
            // test if we may resolve
            if (shouldResolveRef(schema.allOf[i], `${pointer}/allOf/${i}`)) {
                templateSchema = merge(templateSchema, resolveRef(core, schema.allOf[i], `${pointer}/allOf/${i}`));
                // add pointer return-value, if any
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
    if (schema == null) { throw new Error("getTemplate: missing schema for data", data); }
    if (pointer == null) { throw new Error("Missing pointer"); }

    // resolve $ref references, allOf and first anyOf definitions
    schema = createTemplateSchema(core, schema, data, pointer);
    if (schema === false) { return undefined; }
    pointer = schema.pointer;

    if (schema.oneOf) {
        // find correct schema for data
        const resolvedSchema = resolveOneOfFuzzy(core, data, schema);
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
    }

    // reset invalid type
    if (data != null && getTypeOf(data) !== schema.type) {
        data = convertValue(schema.type, data);
    }

    if (TYPE[schema.type] == null) { // eslint-disable-line no-use-before-define
        throw new Error(`Unsupported type '${schema.type} in ${JSON.stringify(schema)}'`);
    }

    const templateData = TYPE[schema.type](core, schema, data, pointer); // eslint-disable-line no-use-before-define
    return templateData;
}


const TYPE = {
    "string": (core, schema, data) => getDefault(schema, data, ""),
    "number": (core, schema, data) => getDefault(schema, data, 0),
    "integer": (core, schema, data) => getDefault(schema, data, 0),
    "boolean": (core, schema, data) => getDefault(schema, data, false),
    "object": (core, schema, data, pointer) => {
        const template = schema.default === undefined ? {} : schema.default;
        const d = {}; // do not assign data here, to keep ordering from json-schema

        if (schema.properties) {
            Object.keys(schema.properties).forEach(key => {
                const value = (data == null || data[key] == null) ? template[key] : data[key];
                d[key] = getTemplate(core, value, schema.properties[key], `${pointer}/properties/${key}`);
            });
        }

        if (data) {
            // merge any missing data (additionals) to resulting object
            Object.keys(data).forEach(key => (d[key] == null && (d[key] = data[key])));
        }

        // returns object, which is ordered by json-schema
        return d;
    },
    // build array type of items, ignores additionalItems
    "array": (core, schema, data, pointer) => {
        const template = schema.default === undefined ? [] : schema.default;
        const d = data || [];
        schema.minItems = schema.minItems || 0;

        // items are undefined
        if (schema.items == null) {
            return d;
        }

        // build defined set of items
        if (Array.isArray(schema.items)) {
            for (let i = 0, l = Math.min(schema.minItems, schema.items.length); i < l; i += 1) {
                d[i] = getTemplate(core, d[i] == null ? template[i] : d[i], schema.items[i], `${pointer}/items/${i}`);
            }
            return d;
        }

        // abort if the schema is invalid
        if (getTypeOf(schema.items) !== "object") {
            return d;
        }

        // resolve allOf and first anyOf definition
        const templateSchema = createTemplateSchema(core, schema.items, data, pointer);
        if (templateSchema === false) {
            return d;
        }
        pointer = templateSchema.pointer || pointer;

        // build oneOf
        if (templateSchema.oneOf && d.length === 0) {
            const oneOfSchema = templateSchema.oneOf[0];
            for (let i = 0; i < schema.minItems; i += 1) {
                d[i] = getTemplate(core, d[i] == null ? template[i] : d[i], oneOfSchema, `${pointer}/oneOf/0`);
            }
            return d;
        }

        if (templateSchema.oneOf && d.length > 0) {
            const itemCount = Math.max(schema.minItems, d.length);
            for (let i = 0; i < itemCount; i += 1) {
                const value = d[i] == null ? template[i] : d[i];
                const one = resolveOneOfFuzzy(core, value, templateSchema);
                if (one) {
                    d[i] = getTemplate(core, value, one, `${pointer}/oneOf/${i}`);
                } else {
                    d[i] = value;
                }
            }
            return d;
        }

        // build items-definition
        if (templateSchema.type) {
            for (let i = 0, l = Math.max(schema.minItems, d.length); i < l; i += 1) {
                d[i] = getTemplate(core, d[i] == null ? template[i] : d[i], templateSchema, `${pointer}/items`);
            }
            return d;
        }

        return d;
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


module.exports = (core, data, schema = core.rootSchema) => {
    cache = { "mi": ".." };
    return getTemplate(core, data, schema, "#");
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/getTypeOf.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/getTypeOf.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const toString = Object.prototype.toString;

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
module.exports = function isValid(core, value, schema = core.rootSchema, pointer = "#") {
    return core.validate(value, schema, pointer).length === 0;
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveAllOf.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveAllOf.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const copy = __webpack_require__(/*! ./utils/copy */ "./node_modules/json-schema-library/lib/utils/copy.js");
const merge = __webpack_require__(/*! ./utils/merge */ "./node_modules/json-schema-library/lib/utils/merge.js");
const errors = __webpack_require__(/*! ./validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js");


module.exports = function resolveAllOf(core, data, schema = core.rootSchema, pointer = "#") {
    let mergedSchema = copy(schema);
    for (let i = 0; i < schema.allOf.length; i += 1) {
        const allOfSchema = core.resolveRef(schema.allOf[i]);
        if (core.isValid(data, allOfSchema, pointer) === false) {
            return errors.allOfError({ value: data, pointer, allOf: JSON.stringify(schema.allOf) });
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
/***/ (function(module, exports, __webpack_require__) {

const copy = __webpack_require__(/*! ./utils/copy */ "./node_modules/json-schema-library/lib/utils/copy.js");
const merge = __webpack_require__(/*! ./utils/merge */ "./node_modules/json-schema-library/lib/utils/merge.js");
const errors = __webpack_require__(/*! ./validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js");


module.exports = function resolveAnyOf(core, data, schema = core.rootSchema, pointer = "#") {
    let found = false;
    let mergedSchema = copy(schema);
    for (let i = 0; i < schema.anyOf.length; i += 1) {
        const anyOfSchema = core.resolveRef(schema.anyOf[i]);
        if (core.isValid(data, schema.anyOf[i], pointer)) {
            found = true;
            mergedSchema = merge(mergedSchema, anyOfSchema);
        }
    }

    if (found === false) {
        return errors.anyOfError({ value: data, pointer, anyOf: JSON.stringify(schema.anyOf) });
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
/***/ (function(module, exports, __webpack_require__) {

const filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");
const flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");
const getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
const { DECLARATOR_ONEOF } = __webpack_require__(/*! ./config/settings */ "./node_modules/json-schema-library/lib/config/settings.js");


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

    let value = 0;
    const keys = Object.keys(one.properties);
    for (var i = 0; i < keys.length; i += 1) {
        const key = keys[i];
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
module.exports = function resolveOneOf(core, data, schema = core.rootSchema, pointer = "#") {
    // !keyword: oneOfProperty
    // an additional <DECLARATOR_ONEOF> (default `oneOfProperty`) on the schema will exactly determine the
    // oneOf value (if set in data)

    // @fixme
    // abort if no data is given an DECLARATOR_ONEOF is set (used by getChildSchemaSelection)
    // this case (data != null) should not be necessary
    if (data != null && schema[DECLARATOR_ONEOF]) {

        const errors = [];
        const oneOfProperty = schema[DECLARATOR_ONEOF];
        const oneOfValue = data[schema[DECLARATOR_ONEOF]];

        if (oneOfValue === undefined) {
            return core.errors.missingOneOfPropertyError({ property: oneOfProperty, pointer });
        }

        for (let i = 0; i < schema.oneOf.length; i += 1) {
            const one = core.resolveRef(schema.oneOf[i]);
            const oneOfPropertySchema = core.step(oneOfProperty, one, data, pointer);

            if (oneOfPropertySchema && oneOfPropertySchema.type === "error") {
                return oneOfPropertySchema;
            }

            let result = flattenArray(core.validate(oneOfValue, oneOfPropertySchema, pointer));
            result = result.filter(filter.errorOrPromise);

            if (result.length > 0) {
                errors.push(...result);
            } else {
                return schema.oneOf[i];
            }
        }

        return core.errors.oneOfPropertyError({ property: oneOfProperty, value: oneOfValue, pointer, errors });
    }

    // keyword: oneOf
    const matches = [];
    for (let i = 0; i < schema.oneOf.length; i += 1) {
        const one = core.resolveRef(schema.oneOf[i]);
        if (core.isValid(data, one, pointer)) {
            matches.push(one);
        }
    }

    if (matches.length === 1) {
        return matches[0];
    }

    // fuzzy match oneOf
    if (getTypeOf(data) === "object") {
        let schemaOfItem;
        let fuzzyGreatest = 0;

        for (let i = 0; i < schema.oneOf.length; i += 1) {
            const one = core.resolveRef(schema.oneOf[i]);
            const fuzzyValue = fuzzyObjectValue(core, one, data);

            if (fuzzyGreatest < fuzzyValue) {
                fuzzyGreatest = fuzzyValue;
                schemaOfItem = schema.oneOf[i];
            }
        }

        if (schemaOfItem === undefined) {
            return core.errors.oneOfError({ value: JSON.stringify(data), pointer, oneOf: schema.oneOf });
        }

        return schemaOfItem;
    }

    if (matches.length > 1) {
        return core.errors.multipleOneOfError({ matches, data, pointer });
    }

    return core.errors.oneOfError({ value: JSON.stringify(data), pointer, oneOf: schema.oneOf });
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveOneOf.strict.js":
/*!*********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveOneOf.strict.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");
const flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");


/**
 * Selects and returns a oneOf schema for the given data
 *
 * @param  {CoreInterface} core - validator
 * @param  {Mixed} data
 * @param  {Object} schema      - current json schema containing property oneOf
 * @param  {String} pointer     - json pointer to data
 * @return {Object|Error} oneOf schema or an error
 */
module.exports = function resolveOneOf(core, data, schema = core.rootSchema, pointer = "#") {
    const matches = [];
    const errors = [];
    for (let i = 0; i < schema.oneOf.length; i += 1) {
        const one = core.resolveRef(schema.oneOf[i]);

        let result = flattenArray(core.validate(data, one, pointer));
        result = result.filter(filter.errorOrPromise);

        if (result.length > 0) {
            errors.push(...result);
        } else {
            matches.push(one);
        }
    }

    if (matches.length === 1) {
        return matches[0];
    }
    if (matches.length > 1) {
        return core.errors.multipleOneOfError({ value: data, pointer, matches });
    }

    return core.errors.oneOfError({ value: JSON.stringify(data), pointer, oneOf: schema.oneOf, errors });
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveRef.strict.js":
/*!*******************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveRef.strict.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function resolveRef(schema, rootSchema) {
    if (schema == null || schema.$ref == null) {
        return schema;
    }

    const resolvedSchema = rootSchema.getRef(schema);
    return resolvedSchema;
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js":
/*!**************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/resolveRef.withOverwrite.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function resolveRefMerge(schema, rootSchema) {
    if (schema == null || schema.$ref == null) {
        return schema;
    }

    const resolvedSchema = rootSchema.getRef(schema);
    const mergedSchema = Object.assign({}, resolvedSchema, schema);
    delete mergedSchema.$ref;
    // @todo the following might not be safe nor incomplete
    Object.defineProperty(mergedSchema, "__ref", { enumerable: false, value: schema.__ref });
    Object.defineProperty(mergedSchema, "getRoot", { enumerable: false, value: schema.getRoot });
    return mergedSchema;
};



/***/ }),

/***/ "./node_modules/json-schema-library/lib/schema/getTypeDefs.js":
/*!********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/schema/getTypeDefs.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
const gq = __webpack_require__(/*! gson-query */ "./node_modules/gson-query/lib/index.js");
const getTypeId = __webpack_require__(/*! ./getTypeId */ "./node_modules/json-schema-library/lib/schema/getTypeId.js");
const types = __webpack_require__(/*! ./types */ "./node_modules/json-schema-library/lib/schema/types.js");
const isObject = value => Object.prototype.toString.call(value) === "[object Object]";


/**
 * Returns a list of all (direct) type definitions from the given schema
 * @param  {Object} schema
 * @return {Array} list of type definition, given as { pointer, def }
 */
module.exports = function getTypeDefs(schema) {
    const defs = [];
    const id = getTypeId(schema);
    if (id == null) {
        return defs;
    }
    const type = types[id];
    if (type.definitions == null) {
        return defs;
    }
    type.definitions.forEach(query => {
        gq.run(schema, query, (value, key, parent, pointer) => {
            if (isObject(value) && getTypeId(value)) {
                defs.push({ pointer: gp.join(gp.split(pointer), false), def: value });
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
/***/ (function(module, exports, __webpack_require__) {

const types = __webpack_require__(/*! ./types */ "./node_modules/json-schema-library/lib/schema/types.js");
const isObject = value => Object.prototype.toString.call(value) === "[object Object]";
const typeKeywords = Object.keys(types).filter(id => types[id].type === false);


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

    if (schema.enum) {
        return "enum";
    }

    if (types[schema.type]) {
        return schema.type;
    }

    const ids = typeKeywords.filter(type => schema[type]);

    if (ids.length === 1) {
        return ids[0];
    }

    if (ids.length === 0) {
        // @expensive, guess type object
        for (let i = 0, l = types.object.keywords.length; i < l; i += 1) {
            const keyword = types.object.keywords[i];
            if (schema.hasOwnProperty(keyword)) {
                return "object";
            }
        }

        // @expensive, guess type array
        for (let i = 0, l = types.array.keywords.length; i < l; i += 1) {
            const keyword = types.array.keywords[i];
            if (schema.hasOwnProperty(keyword)) {
                return "array";
            }
        }

        return undefined;
    }

    throw new Error(`Mutiple typeIds [${ids.join(", ")}] matched in ${JSON.stringify(schema)}`);
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/schema/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/schema/types.js ***!
  \**************************************************************/
/*! no static exports found */
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
        definitions: ["allOf/*", "anyOf/*", "oneOf/*", "not",
            "properties/*", "additionalProperties", "patternProperties/*", "dependencies/*"],
        validationKeywords: ["minProperties", "maxProperties", "required"],
        keywords: ["properties", "additionalProperties", "patternProperties", "dependencies", "minProperties",
            "maxProperties", "required"]
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
/***/ (function(module, exports, __webpack_require__) {

const getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
const createSchemaOf = __webpack_require__(/*! ./createSchemaOf */ "./node_modules/json-schema-library/lib/createSchemaOf.js");
const errors = __webpack_require__(/*! ./validation/errors */ "./node_modules/json-schema-library/lib/validation/errors.js");
const merge = __webpack_require__(/*! ./utils/merge */ "./node_modules/json-schema-library/lib/utils/merge.js");


const stepType = {

    array: (core, key, schema, data, pointer) => {
        const itemsType = getTypeOf(schema.items);

        if (itemsType === "object") {
            // oneOf
            if (Array.isArray(schema.items.oneOf)) {
                return core.resolveOneOf(data[key], schema.items, pointer) || false;
            }

            // anyOf
            if (Array.isArray(schema.items.anyOf)) {
                // schema of current object
                return core.resolveAnyOf(data[key], schema.items, pointer);
            }

            // allOf
            if (Array.isArray(schema.items.allOf)) {
                return core.resolveAllOf(data[key], schema.items, pointer);
            }

            // spec: ignore additionalItems, when items is schema-object
            return core.resolveRef(schema.items);
        }

        if (itemsType === "array") {
            if (schema.items[key]) {
                return core.resolveRef(schema.items[key]);
            }

            if (schema.additionalItems === false) {
                return errors.additionalItemsError({ key, value: data[key], pointer });
            }

            if (schema.additionalItems === true || schema.additionalItems === undefined) {
                return createSchemaOf(data[key]);
            }

            if (getTypeOf(schema.additionalItems) === "object") {
                return schema.additionalItems;
            }

            throw new Error(`Invalid schema ${JSON.stringify(schema, null, 4)} for ${JSON.stringify(data, null, 4)}`);
        }

        if (schema.additionalItems !== false && data[key]) {
            // @todo reevaluate: incomplete schema is created here
            // @todo support additionalItems: {schema}
            return createSchemaOf(data[key]);
        }

        return new Error(`Invalid array schema for ${key} at ${pointer}`);
    },

    object: (core, key, schema, data, pointer) => {

        if (Array.isArray(schema.oneOf)) {
            // update current schema
            const oneOfSchema = core.resolveOneOf(data, schema, pointer);
            // resolveOneOf does currently not apply merge with base schema
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

        let targetSchema;

        // step into object-properties
        if (schema.properties && schema.properties[key] !== undefined) {
            // @todo patternProperties also validate properties

            targetSchema = core.resolveRef(schema.properties[key]);
            if (targetSchema && targetSchema.type === "error") {
                return targetSchema;
            }

            // check if there is a oneOf selection, which must be resolved
            if (targetSchema && Array.isArray(targetSchema.oneOf)) {
                // @special case: this is a mix of a schema and optional definitions
                // we resolve the schema here and add the original schema to `oneOfSchema`
                let resolvedSchema = core.resolveOneOf(data[key], targetSchema, `${pointer}/${key}`);
                resolvedSchema = JSON.parse(JSON.stringify(resolvedSchema));
                resolvedSchema.variableSchema = true;
                resolvedSchema.oneOfSchema = targetSchema;
                return resolvedSchema;
            }

            // resolved schema or error
            if (targetSchema) {
                return targetSchema;
            }
        }

        // find matching property key
        if (getTypeOf(schema.patternProperties) === "object") {
            let regex;
            const patterns = Object.keys(schema.patternProperties);
            for (let i = 0, l = patterns.length; i < l; i += 1) {
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

        return errors.unknownPropertyError({ property: key, value: data, pointer });
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
function step(core, key, schema, data, pointer = "#") {
    const expectedType = schema.type || getTypeOf(data);
    if (stepType[expectedType]) {
        return stepType[expectedType](core, key, schema, data, pointer);
    }
    return new Error(`Unsupported schema type ${schema.type} for key ${key}`);
}


module.exports = step;


/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/__.js":
/*!**********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/__.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const strings = __webpack_require__(/*! ../config/strings */ "./node_modules/json-schema-library/lib/config/strings.js");
const render = __webpack_require__(/*! ./render */ "./node_modules/json-schema-library/lib/utils/render.js");

/**
 * Renders the given string as defined in __@see config/strings.js__
 * @param  {String} keyword
 * @param  {Object} data        - template data
 * @param  {String} fallback    - fallback template
 * @return {String} resultugn string
 */
module.exports = function __(keyword, data, fallback = keyword) {
    const template = strings[keyword] || fallback;
    return render(template, data);
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/copy.js":
/*!************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/copy.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = value => JSON.parse(JSON.stringify(value));


/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/createCustomError.js":
/*!*************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/createCustomError.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const __ = __webpack_require__(/*! ./__ */ "./node_modules/json-schema-library/lib/utils/__.js");

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
            name,
            code: dashCase(name),
            message: __(name, data),
            data
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
/***/ (function(module, exports) {

function isPromise(obj) {
    return obj instanceof Promise;
}

function isError(obj) {
    return obj && obj.type === "error";
}

module.exports = {
    isError,
    isPromise,
    errorOrPromise(error) {
        return isError(error) || isPromise(error);
    },
    errorsOnly(error) {
        return isError(error);
    }
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/flattenArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/flattenArray.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function flattenArray(list, result = []) {
    for (let i = 0; i < list.length; i += 1) {
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
/***/ (function(module, exports, __webpack_require__) {

const deepmerge = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
const overwriteMerge = (destinationArray, sourceArray) => sourceArray;
module.exports = (a, b) => deepmerge(a, b, { arrayMerge: overwriteMerge });


/***/ }),

/***/ "./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js":
/*!***************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js ***!
  \***************************************************************************/
/*! no static exports found */
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
    const output = [];
    let counter = 0;
    const length = string.length;
    while (counter < length) {
        const value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            const extra = string.charCodeAt(counter++);
            // eslint-disable-next-line eqeqeq
            if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
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
/***/ (function(module, exports) {

/**
 * Renders data into a string by {{variables}}.
 * Given a template string, removes all {{property}} substrings and replaces them with the property in the given data
 *
 * @param {String} template     - template string containing variables in handelbars/mustache style
 * @param {Object} data         - flat object containing properties matching variables
 * @return {String} rendered string
 */
module.exports = function render(template, data = {}) {
    return template.replace(/\{\{\w+\}\}/g, match => data[match.replace(/[{}]/g, "")]);
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/validate.js":
/*!**********************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validate.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getTypeOf = __webpack_require__(/*! ./getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
const filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");
const flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");


function getJsonSchemaType(value, expectedType) {
    let jsType = getTypeOf(value);

    if (
        jsType === "number" && (expectedType === "integer" ||
        (Array.isArray(expectedType) && expectedType.includes("integer")))
    ) {
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
module.exports = function validate(core, value, schema = core.rootSchema, pointer = "#") {
    if (schema.type === "error") {
        return [schema];
    }

    schema = core.resolveRef(schema);

    const receivedType = getJsonSchemaType(value, schema.type);
    const expectedType = schema.type || receivedType;

    if (receivedType !== expectedType && (!Array.isArray(expectedType) || !expectedType.includes(receivedType))) {
        return [core.errors.typeError({ received: receivedType, expected: expectedType, value, pointer })];
    }

    if (core.validateType[receivedType] == null) {
        return [core.errors.invalidTypeError({ receivedType, pointer })];
    }

    const errors = flattenArray(core.validateType[receivedType](core, schema, value, pointer));
    // also promises may be passed along (validateAsync)
    return errors.filter(filter.errorOrPromise);
};


/***/ }),

/***/ "./node_modules/json-schema-library/lib/validateAsync.js":
/*!***************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validateAsync.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const filter = __webpack_require__(/*! ./utils/filter */ "./node_modules/json-schema-library/lib/utils/filter.js");
const flattenArray = __webpack_require__(/*! ./utils/flattenArray */ "./node_modules/json-schema-library/lib/utils/flattenArray.js");


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
module.exports = function validateAsync(core, value, { schema = core.rootSchema, pointer = "#", onError }) {
    let errors = core.validate(value, schema, pointer);

    if (onError) {
        errors = flattenArray(errors);
        const notifyError = createErrorNotification(onError);
        for (let i = 0; i < errors.length; i += 1) {
            if (errors[i] instanceof Promise) {
                errors[i].then(notifyError);
            } else if (filter.isError(errors[i])) {
                onError(errors[i]);
            }
        }
    }

    return Promise
        .all(errors)
        .then(flattenArray)
        .then(resolvedErrors => resolvedErrors.filter(filter.errorsOnly))
        .catch(e => {
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
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-invalid-this: 0 */
const createCustomError = __webpack_require__(/*! ../utils/createCustomError */ "./node_modules/json-schema-library/lib/utils/createCustomError.js");


const errors = {
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
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable max-len */
const errors = __webpack_require__(/*! ./errors */ "./node_modules/json-schema-library/lib/validation/errors.js");
const validUrl = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");

// https://gist.github.com/marcelotmelo/b67f58a08bee6c2468f8
const isValidDateTime = new RegExp("^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\\.[0-9]+)?(([Zz])|([\\+|\\-]([01][0-9]|2[0-3]):[0-5][0-9]))$");
// https://stackoverflow.com/questions/23483855/javascript-regex-to-validate-ipv4-and-ipv6-address-no-hostnames
const isValidIPV4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
const isValidIPV6 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;


// Default JSON-Schema formats: date-time, email, hostname, ipv4, ipv6, uri, uriref
const FormatValidation = {

    "date-time": (core, schema, value, pointer) => {
        if (value === "" || isValidDateTime.test(value)) {
            if (new Date(value).toString() === "Invalid Date") {
                return errors.formatDateTimeError({ value, pointer });
            }
            return undefined;
        }
        return errors.formatDateTimeError({ value, pointer });
    },

    email: (core, schema, value, pointer) => {
        if (value === "" || value.includes("@")) {
            return undefined;
        }
        return errors.formatEmailError({ value, pointer });
    },

    hostname: (core, schema, value, pointer) => {
        if (value === "" || /\./.test(value)) {
            return undefined;
        }
        return errors.formatHostnameError({ value, pointer });
    },

    ipv4: (core, schema, value, pointer) => {
        if (value === "" || isValidIPV4.test(value)) {
            return undefined;
        }
        return errors.formatIPV4Error({ value, pointer });
    },

    ipv6: (core, schema, value, pointer) => {
        if (value === "" || isValidIPV6.test(value)) {
            return undefined;
        }
        return errors.formatIPV6Error({ value, pointer });
    },

    regex: (core, schema, value, pointer) => {
        if (typeof value === "string" && /\\Z$/.test(value) === false) {
            return undefined;
        }
        return errors.formatRegExError({ value, pointer });
    },
    uri: (core, schema, value, pointer) => {
        if (value === "" || validUrl.isUri(value)) {
            return undefined;
        }
        return errors.formatUriError({ value, pointer });
    },

    url: (core, schema, value, pointer) => {
        if (value === "" || validUrl.isWebUri(value)) {
            return undefined;
        }
        return errors.formatUrlError({ value, pointer });
    }
};


module.exports = FormatValidation;


/***/ }),

/***/ "./node_modules/json-schema-library/lib/validation/keyword.js":
/*!********************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validation/keyword.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getTypeOf = __webpack_require__(/*! ../getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js");
const ucs2decode = __webpack_require__(/*! ../utils/punycode.ucs2decode */ "./node_modules/json-schema-library/lib/utils/punycode.ucs2decode.js");
const settings = __webpack_require__(/*! ../config/settings */ "./node_modules/json-schema-library/lib/config/settings.js");
const FPP = settings.floatingPointPrecision;

// list of validation keywords: http://json-schema.org/latest/json-schema-validation.html#rfc.section.5
const KeywordValidation = {

    additionalProperties: (core, schema, value, pointer) => {
        if (schema.additionalProperties === true || schema.additionalProperties == null) {
            return undefined;
        }

        if (getTypeOf(schema.patternProperties) === "object" && schema.additionalProperties === false) {
            // this is an arrangement with patternProperties. patternProperties validate before additionalProperties:
            // https://spacetelescope.github.io/understanding-json-schema/reference/object.html#index-5
            return undefined;
        }

        const errors = [];
        let receivedProperties = Object.keys(value).filter(prop => settings.propertyBlacklist.includes(prop) === false);
        const expectedProperties = Object.keys(schema.properties || {});

        if (getTypeOf(schema.patternProperties) === "object") {
            // filter received properties by matching patternProperties
            const patterns = Object.keys(schema.patternProperties).map(pattern => new RegExp(pattern));
            receivedProperties = receivedProperties.filter(prop => {
                for (let i = 0; i < patterns.length; i += 1) {
                    if (patterns[i].test(prop)) {
                        return false; // remove
                    }
                }
                return true;
            });
        }

        // adds an error for each an unexpected property
        for (let i = 0, l = receivedProperties.length; i < l; i += 1) {
            const property = receivedProperties[i];
            if (expectedProperties.indexOf(property) === -1) {
                const isObject = typeof schema.additionalProperties === "object";

                // additionalProperties { oneOf: [] }
                if (isObject && Array.isArray(schema.additionalProperties.oneOf)) {
                    const result = core.resolveOneOf(
                        value[property], schema.additionalProperties, `${pointer}/${property}`
                    );
                    if (result.type === "error") {
                        errors.push(core.errors.additionalPropertiesError({
                            schema: schema.additionalProperties,
                            property: receivedProperties[i],
                            properties: expectedProperties,
                            pointer,
                            // pass all validation errors
                            errors: result.data.errors
                        }));

                    } else {
                        errors.push(core.validate(value[property], result, pointer));
                    }

                // additionalProperties {}
                } else if (isObject) {
                    if (core.validate(value[property], schema.additionalProperties, pointer).length !== 0) {
                        errors.push(core.errors.additionalPropertiesError({
                            schema: schema.additionalProperties,
                            property: receivedProperties[i],
                            properties: expectedProperties,
                            pointer
                        }));
                    }

                } else {
                    errors.push(core.errors.noAdditionalPropertiesError(
                        { property: receivedProperties[i], properties: expectedProperties, pointer }
                    ));
                }
            }
        }

        return errors;
    },

    allOf: (core, schema, value, pointer) => {
        if (Array.isArray(schema.allOf) === false) {
            return undefined;
        }

        const errors = [];
        schema.allOf.forEach(subSchema => {
            errors.push(core.validate(value, subSchema, pointer));
        });

        return errors;
    },

    anyOf: (core, schema, value, pointer) => {
        if (Array.isArray(schema.anyOf) === false) {
            return undefined;
        }

        for (let i = 0; i < schema.anyOf.length; i += 1) {
            if (core.isValid(value, schema.anyOf[i])) {
                return undefined;
            }
        }

        return core.errors.anyOfError({ anyOf: schema.anyOf, value, pointer });
    },

    dependencies: (core, schema, value, pointer) => {
        if (getTypeOf(schema.dependencies) !== "object") {
            return undefined;
        }

        const errors = [];
        Object.keys(value)
            .forEach(property => {
                if (schema.dependencies[property] === undefined) {
                    return;
                }

                let dependencyErrors;
                const type = getTypeOf(schema.dependencies[property]);
                if (type === "array") {
                    dependencyErrors = schema.dependencies[property]
                        .filter(dependency => value[dependency] === undefined)
                        .map(missingProperty => core.errors.missingDependencyError({ missingProperty, pointer }));
                } else if (type === "object") {
                    dependencyErrors = core.validate(value, schema.dependencies[property]);

                } else {
                    throw new Error(`Invalid dependency definition for ${pointer}/${property}. Must be list or schema`);
                }

                errors.push(...dependencyErrors);
            });

        return errors.length > 0 ? errors : undefined;
    },

    "enum": (core, schema, value, pointer) => {
        const type = getTypeOf(value);
        if (type === "object" || type === "array") {
            const valueStr = JSON.stringify(value);
            for (let i = 0; i < schema.enum.length; i += 1) {
                if (JSON.stringify(schema.enum[i]) === valueStr) {
                    return undefined;
                }
            }
        } else if (schema.enum.includes(value)) {
            return undefined;
        }
        return core.errors.enumError({ values: schema.enum, value, pointer });
    },
    format: (core, schema, value, pointer) => {
        if (core.validateFormat[schema.format]) {
            const errors = core.validateFormat[schema.format](core, schema, value, pointer);
            return errors;
        }
        // fail silently if given format is not defined
        return undefined;
    },
    items: (core, schema, value, pointer) => {
        const errors = [];
        for (var i = 0; i < value.length; i += 1) {
            const itemData = value[i];
            // @todo reevaluate: incomplete schema is created here
            const itemSchema = core.step(i, schema, value, pointer);

            if (itemSchema && itemSchema.type === "error") {
                return [itemSchema];
            }

            const itemErrors = core.validate(itemData, itemSchema, `${pointer}/${i}`);
            errors.push(...itemErrors);
        }

        return errors;
    },
    maximum: (core, schema, value, pointer) => {
        if (isNaN(schema.maximum)) {
            return undefined;
        }
        if (schema.maximum && schema.maximum < value) {
            return core.errors.maximumError({ maximum: schema.maximum, length: value, pointer });
        }
        if (schema.maximum && schema.exclusiveMaximum === true && schema.maximum === value) {
            return core.errors.maximumError({ maximum: schema.maximum, length: value, pointer });
        }
        return undefined;
    },
    maxItems: (core, schema, value, pointer) => {
        if (isNaN(schema.maxItems)) {
            return undefined;
        }
        if (schema.maxItems < value.length) {
            return core.errors.maxItemsError({ maximum: schema.maxItems, length: value.length, pointer });
        }
        return undefined;
    },
    maxLength: (core, schema, value, pointer) => {
        if (isNaN(schema.maxLength)) {
            return undefined;
        }
        const lengthOfString = ucs2decode(value).length;
        if (schema.maxLength < lengthOfString) {
            return core.errors.maxLengthError({ maxLength: schema.maxLength, length: lengthOfString, pointer });
        }
        return undefined;
    },
    maxProperties: (core, schema, value, pointer) => {
        const propertyCount = Object.keys(value).length;
        if (isNaN(schema.maxProperties) === false && schema.maxProperties < propertyCount) {
            return core.errors.maxPropertiesError({
                maxProperties: schema.maxProperties,
                length: propertyCount,
                pointer
            });
        }
        return undefined;
    },
    minLength: (core, schema, value, pointer) => {
        if (isNaN(schema.minLength)) {
            return undefined;
        }
        const lengthOfString = ucs2decode(value).length;
        if (schema.minLength > lengthOfString) {
            return core.errors.minLengthError({ minLength: schema.minLength, length: lengthOfString, pointer });
        }
        return undefined;
    },
    minimum: (core, schema, value, pointer) => {
        if (isNaN(schema.minimum)) {
            return undefined;
        }
        if (schema.minimum > value) {
            return core.errors.minimumError({ minimum: schema.minimum, length: value, pointer });
        }
        if (schema.exclusiveMinimum === true && schema.minimum === value) {
            return core.errors.minimumError({ minimum: schema.minimum, length: value, pointer });
        }
        return undefined;
    },
    minItems: (core, schema, value, pointer) => {
        if (isNaN(schema.minItems)) {
            return undefined;
        }
        if (schema.minItems > value.length) {
            return core.errors.minItemsError({ minItems: schema.minItems, length: value.length, pointer });
        }
        return undefined;
    },
    minProperties: (core, schema, value, pointer) => {
        if (isNaN(schema.minProperties)) {
            return undefined;
        }
        const propertyCount = Object.keys(value).length;
        if (schema.minProperties > propertyCount) {
            return core.errors.minPropertiesError({
                minProperties: schema.minProperties,
                length: propertyCount, pointer
            });
        }
        return undefined;
    },
    multipleOf: (core, schema, value, pointer) => {
        if (isNaN(schema.multipleOf)) {
            return undefined;
        }
        if ((value * FPP) % (schema.multipleOf * FPP) / FPP !== 0) {
            return core.errors.multipleOfError({ multipleOf: schema.multipleOf, value, pointer });
        }
        return undefined;
    },
    not: (core, schema, value, pointer) => {
        const errors = [];
        if (core.validate(value, schema.not, pointer).length === 0) {
            errors.push(core.errors.notError({ value, not: schema.not, pointer }));
        }
        return errors;
    },
    oneOf: (core, schema, value, pointer) => {
        if (Array.isArray(schema.oneOf) === false) {
            return undefined;
        }

        schema = core.resolveOneOf(value, schema, pointer);
        if (schema && schema.type === "error") {
            return schema;
        }

        return undefined;
    },
    pattern: (core, schema, value, pointer) => {
        if ((new RegExp(schema.pattern)).test(value) === false) {
            return core.errors.patternError({
                pattern: schema.pattern,
                description: schema.patternExample || schema.pattern,
                received: value, pointer
            });
        }
        return undefined;
    },
    patternProperties: (core, schema, value, pointer) => {
        const properties = schema.properties || {};
        const pp = schema.patternProperties;
        if (getTypeOf(pp) !== "object") {
            return undefined;
        }

        const errors = [];
        const keys = Object.keys(value);
        const patterns = Object.keys(pp).map(expr => ({
            regex: new RegExp(expr),
            patternSchema: pp[expr]
        }));

        keys.forEach(key => {
            let patternFound = false;

            for (let i = 0, l = patterns.length; i < l; i += 1) {
                if (patterns[i].regex.test(key)) {
                    patternFound = true;
                    const valErrors = core.validate(value[key], patterns[i].patternSchema, `${pointer}/${key}`);
                    if (valErrors && valErrors.length > 0) {
                        errors.push(...valErrors);
                    }
                }
            }

            if (properties[key]) {
                return;
            }

            if (patternFound === false && schema.additionalProperties === false) {
                // this is an arrangement with additionalProperties
                errors.push(core.errors.patternPropertiesError({
                    key, pointer, patterns: Object.keys(pp).join(",")
                }));
            }
        });

        return errors;
    },
    properties: (core, schema, value, pointer) => {
        const errors = [];
        const keys = Object.keys(schema.properties || {});
        for (var i = 0; i < keys.length; i += 1) {
            const key = keys[i];
            if (value[key] !== undefined) {
                const itemSchema = core.step(key, schema, value, pointer);
                const keyErrors = core.validate(value[key], itemSchema, `${pointer}/${key}`);
                errors.push(...keyErrors);
            }
        }
        return errors;
    },
    // @todo move to separate file: this is custom keyword validation for JsonEditor.properties keyword
    propertiesRequired: (core, schema, value, pointer) => {
        const errors = [];
        const keys = Object.keys(schema.properties || {});
        for (var i = 0; i < keys.length; i += 1) {
            const key = keys[i];
            if (value[key] === undefined) {
                errors.push(core.errors.requiredPropertyError({ key, pointer }));
            } else {
                const itemSchema = core.step(key, schema, value, pointer);
                const keyErrors = core.validate(value[key], itemSchema, `${pointer}/${key}`);
                errors.push(...keyErrors);
            }
        }
        return errors;
    },
    required: (core, schema, value, pointer) => {
        if (Array.isArray(schema.required) === false) {
            return undefined;
        }

        return schema.required.map(property => {
            if (value[property] === undefined) {
                return core.errors.requiredPropertyError({ key: property, pointer });
            }
            return undefined;
        });
    },
    // @todo move to separate file: this is custom keyword validation for JsonEditor.required keyword
    requiredNotEmpty: (core, schema, value, pointer) => {
        if (Array.isArray(schema.required) === false) {
            return undefined;
        }

        return schema.required.map(property => {
            if (value[property] == null || value[property] === "") {
                return core.errors.valueNotEmptyError({ property, pointer: `${pointer}/${property}` });
            }
            return undefined;
        });
    },
    uniqueItems: (core, schema, value, pointer) => {
        if ((Array.isArray(value) && schema.uniqueItems) === false) {
            return undefined;
        }

        const errors = [];
        const map = {};
        value.forEach((item, index) => {
            const id = JSON.stringify(item);
            const itemPointer = `${pointer}/${index}`;
            if (map[id]) {
                errors.push(core.errors.uniqueItemsError({
                    pointer,
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
/***/ (function(module, exports) {

/**
 * @todo: type is also a keyword, as is properties, items, etc
 *
 * An instance has one of six primitive types (http://json-schema.org/latest/json-schema-core.html#rfc.section.4.2)
 * or seven in case of ajv https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#type
 * 1 null, 2 boolean, 3 object, 4 array, 5 number, 6 string (7 integer)
 */
const TypeValidation = {

    array: (core, schema, value, pointer) =>
        core.typeKeywords.array
            .filter(key => schema && schema[key] != null)
            .map(key => core.validateKeyword[key](core, schema, value, pointer)),

    object: (core, schema, value, pointer) =>
        core.typeKeywords.object
            .filter(key => schema && schema[key] != null)
            .map(key => core.validateKeyword[key](core, schema, value, pointer)),

    string: (core, schema, value, pointer) =>
        core.typeKeywords.string
            .filter(key => schema && schema[key] != null)
            .map(key => core.validateKeyword[key](core, schema, value, pointer)),

    integer: (core, schema, value, pointer) =>
        core.typeKeywords.number
            .filter(key => schema && schema[key] != null)
            .map(key => core.validateKeyword[key](core, schema, value, pointer)),

    number: (core, schema, value, pointer) =>
        core.typeKeywords.number
            .filter(key => schema && schema[key] != null)
            .map(key => core.validateKeyword[key](core, schema, value, pointer)),

    "boolean": (core, schema, value, pointer) =>
        core.typeKeywords.boolean
            .filter(key => schema && schema[key] != null)
            .map(key => core.validateKeyword[key](core, schema, value, pointer)),

    "null": (core, schema, value, pointer) =>
        core.typeKeywords.null
            .filter(key => schema && schema[key] != null)
            .map(key => core.validateKeyword[key](core, schema, value, pointer))
};


module.exports = TypeValidation;


/***/ }),

/***/ "./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/json-schema-library/lib/validation/typeKeywordMapping.js ***!
  \*******************************************************************************/
/*! no static exports found */
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
    boolean: ["enum", "not"],
    object: [
        "additionalProperties", "dependencies", "enum", "format", "minProperties", "maxProperties",
        "patternProperties", "properties", "required", "not", "oneOf", "allOf", "anyOf"
    ],
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
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"http://json-schema.org/draft-04/schema#\",\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"description\":\"Core schema meta-schema\",\"definitions\":{\"schemaArray\":{\"type\":\"array\",\"minItems\":1,\"items\":{\"$ref\":\"#\"}},\"positiveInteger\":{\"type\":\"integer\",\"minimum\":0},\"positiveIntegerDefault0\":{\"allOf\":[{\"$ref\":\"#/definitions/positiveInteger\"},{\"default\":0}]},\"simpleTypes\":{\"enum\":[\"array\",\"boolean\",\"integer\",\"null\",\"number\",\"object\",\"string\"]},\"stringArray\":{\"type\":\"array\",\"items\":{\"type\":\"string\"},\"minItems\":1,\"uniqueItems\":true}},\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"format\":\"uri\"},\"$schema\":{\"type\":\"string\",\"format\":\"uri\"},\"title\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"default\":{},\"multipleOf\":{\"type\":\"number\",\"minimum\":0,\"exclusiveMinimum\":true},\"maximum\":{\"type\":\"number\"},\"exclusiveMaximum\":{\"type\":\"boolean\",\"default\":false},\"minimum\":{\"type\":\"number\"},\"exclusiveMinimum\":{\"type\":\"boolean\",\"default\":false},\"maxLength\":{\"$ref\":\"#/definitions/positiveInteger\"},\"minLength\":{\"$ref\":\"#/definitions/positiveIntegerDefault0\"},\"pattern\":{\"type\":\"string\",\"format\":\"regex\"},\"additionalItems\":{\"anyOf\":[{\"type\":\"boolean\"},{\"$ref\":\"#\"}],\"default\":{}},\"items\":{\"anyOf\":[{\"$ref\":\"#\"},{\"$ref\":\"#/definitions/schemaArray\"}],\"default\":{}},\"maxItems\":{\"$ref\":\"#/definitions/positiveInteger\"},\"minItems\":{\"$ref\":\"#/definitions/positiveIntegerDefault0\"},\"uniqueItems\":{\"type\":\"boolean\",\"default\":false},\"maxProperties\":{\"$ref\":\"#/definitions/positiveInteger\"},\"minProperties\":{\"$ref\":\"#/definitions/positiveIntegerDefault0\"},\"required\":{\"$ref\":\"#/definitions/stringArray\"},\"additionalProperties\":{\"anyOf\":[{\"type\":\"boolean\"},{\"$ref\":\"#\"}],\"default\":{}},\"definitions\":{\"type\":\"object\",\"additionalProperties\":{\"$ref\":\"#\"},\"default\":{}},\"properties\":{\"type\":\"object\",\"additionalProperties\":{\"$ref\":\"#\"},\"default\":{}},\"patternProperties\":{\"type\":\"object\",\"additionalProperties\":{\"$ref\":\"#\"},\"default\":{}},\"dependencies\":{\"type\":\"object\",\"additionalProperties\":{\"anyOf\":[{\"$ref\":\"#\"},{\"$ref\":\"#/definitions/stringArray\"}]}},\"enum\":{\"type\":\"array\",\"minItems\":1,\"uniqueItems\":true},\"type\":{\"anyOf\":[{\"$ref\":\"#/definitions/simpleTypes\"},{\"type\":\"array\",\"items\":{\"$ref\":\"#/definitions/simpleTypes\"},\"minItems\":1,\"uniqueItems\":true}]},\"allOf\":{\"$ref\":\"#/definitions/schemaArray\"},\"anyOf\":{\"$ref\":\"#/definitions/schemaArray\"},\"oneOf\":{\"$ref\":\"#/definitions/schemaArray\"},\"not\":{\"$ref\":\"#\"}},\"dependencies\":{\"exclusiveMaximum\":[\"maximum\"],\"exclusiveMinimum\":[\"minimum\"]},\"default\":{}}");

/***/ }),

/***/ "./node_modules/json-schema-library/remotes/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/json-schema-library/remotes/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    "http://json-schema.org/draft-04/schema": __webpack_require__(/*! ./draft04.json */ "./node_modules/json-schema-library/remotes/draft04.json"),

    reset() {
        Object.keys(this).forEach(key => {
            if (typeof this[key] !== "function" && key !== "http://json-schema.org/draft-04/schema") {
                delete this[key];
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
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! ./empty */ "./node_modules/jsondiffpatch/dist/empty.js")) :
	undefined;
}(this, (function (exports,chalk) { 'use strict';

chalk = chalk && chalk.hasOwnProperty('default') ? chalk['default'] : chalk;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
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











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
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













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

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
      y = void 0;

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
  var result = void 0;
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
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var diffMatchPatch = createCommonjsModule(function (module) {
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
  // When deleting a large block of text (over ~64 characters), how close do
  // the contents have to be to match the expected contents. (0.0 = perfection,
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

/** @typedef {{0: number, 1: string}} */
diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines,
    opt_deadline) {
  // Set a deadline by which time the diff must be complete.
  if (typeof opt_deadline == 'undefined') {
    if (this.Diff_Timeout <= 0) {
      opt_deadline = Number.MAX_VALUE;
    } else {
      opt_deadline = (new Date).getTime() + this.Diff_Timeout * 1000;
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
diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines,
    deadline) {
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
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
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
diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
  // Scan the text on a line-by-line basis first.
  var a = this.diff_linesToChars_(text1, text2);
  text1 = a.chars1;
  text2 = a.chars2;
  var linearray = a.lineArray;

  var diffs = this.diff_main(text1, text2, false, deadline);

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
          diffs.splice(pointer - count_delete - count_insert,
                       count_delete + count_insert);
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
  diffs.pop();  // Remove the dummy entry at the end.

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
diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
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
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Bail out if deadline is reached.
    if ((new Date()).getTime() > deadline) {
      break;
    }

    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
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
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
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
diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y,
    deadline) {
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
 * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
 *     An object containing the encoded text1, the encoded text2 and
 *     the array of unique strings.
 *     The zeroth element of the array of unique strings is intentionally blank.
 * @private
 */
diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
  var lineArray = [];  // e.g. lineArray[4] == 'Hello\n'
  var lineHash = {};   // e.g. lineHash['Hello\n'] == 4

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

      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
          (lineHash[line] !== undefined)) {
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
  return {chars1: chars1, chars2: chars2, lineArray: lineArray};
};


/**
 * Rehydrate the text in a diff from a string of line hashes to real lines of
 * text.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @param {!Array.<string>} lineArray Array of unique strings.
 * @private
 */
diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
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
diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
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
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
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
diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
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
diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
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
    if (found == 0 || text1.substring(text_length - length) ==
        text2.substring(0, length)) {
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
diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
  if (this.Diff_Timeout <= 0) {
    // Don't risk returning a non-optimal diff if we have unlimited time.
    return null;
  }
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }
  var dmp = this;  // 'this' becomes 'window' in a closure.

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
      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i),
                                               shorttext.substring(j));
      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i),
                                               shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
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
diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
  var changes = false;
  var equalities = [];  // Stack of indices where equalities are found.
  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
  /** @type {?string} */
  var lastequality = null;
  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
  var pointer = 0;  // Index of current position.
  // Number of characters that changed prior to the equality.
  var length_insertions1 = 0;
  var length_deletions1 = 0;
  // Number of characters that changed after the equality.
  var length_insertions2 = 0;
  var length_deletions2 = 0;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
      equalities[equalitiesLength++] = pointer;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastequality = diffs[pointer][1];
    } else {  // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_INSERT) {
        length_insertions2 += diffs[pointer][1].length;
      } else {
        length_deletions2 += diffs[pointer][1].length;
      }
      // Eliminate an equality that is smaller or equal to the edits on both
      // sides of it.
      if (lastequality && (lastequality.length <=
          Math.max(length_insertions1, length_deletions1)) &&
          (lastequality.length <= Math.max(length_insertions2,
                                           length_deletions2))) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0,
                     [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        // Throw away the equality we just deleted.
        equalitiesLength--;
        // Throw away the previous equality (it needs to be reevaluated).
        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0;  // Reset the counters.
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
  // e.g: <del>xxxabc</del><ins>defxxx</ins>
  //   -> <ins>def</ins>xxx<del>abc</del>
  // Only extract an overlap if it is as big as the edit ahead or behind it.
  pointer = 1;
  while (pointer < diffs.length) {
    if (diffs[pointer - 1][0] == DIFF_DELETE &&
        diffs[pointer][0] == DIFF_INSERT) {
      var deletion = diffs[pointer - 1][1];
      var insertion = diffs[pointer][1];
      var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
      var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
      if (overlap_length1 >= overlap_length2) {
        if (overlap_length1 >= deletion.length / 2 ||
            overlap_length1 >= insertion.length / 2) {
          // Overlap found.  Insert an equality and trim the surrounding edits.
          diffs.splice(pointer, 0,
              [DIFF_EQUAL, insertion.substring(0, overlap_length1)]);
          diffs[pointer - 1][1] =
              deletion.substring(0, deletion.length - overlap_length1);
          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
          pointer++;
        }
      } else {
        if (overlap_length2 >= deletion.length / 2 ||
            overlap_length2 >= insertion.length / 2) {
          // Reverse overlap found.
          // Insert an equality and swap and trim the surrounding edits.
          diffs.splice(pointer, 0,
              [DIFF_EQUAL, deletion.substring(0, overlap_length2)]);
          diffs[pointer - 1][0] = DIFF_INSERT;
          diffs[pointer - 1][1] =
              insertion.substring(0, insertion.length - overlap_length2);
          diffs[pointer + 1][0] = DIFF_DELETE;
          diffs[pointer + 1][1] =
              deletion.substring(overlap_length2);
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
diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
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
    }

    // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.
    var char1 = one.charAt(one.length - 1);
    var char2 = two.charAt(0);
    var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
    var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
    var whitespace1 = nonAlphaNumeric1 &&
        char1.match(diff_match_patch.whitespaceRegex_);
    var whitespace2 = nonAlphaNumeric2 &&
        char2.match(diff_match_patch.whitespaceRegex_);
    var lineBreak1 = whitespace1 &&
        char1.match(diff_match_patch.linebreakRegex_);
    var lineBreak2 = whitespace2 &&
        char2.match(diff_match_patch.linebreakRegex_);
    var blankLine1 = lineBreak1 &&
        one.match(diff_match_patch.blanklineEndRegex_);
    var blankLine2 = lineBreak2 &&
        two.match(diff_match_patch.blanklineStartRegex_);

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

  var pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
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
      var bestScore = diff_cleanupSemanticScore_(equality1, edit) +
          diff_cleanupSemanticScore_(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore_(equality1, edit) +
            diff_cleanupSemanticScore_(edit, equality2);
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

// Define some regex patterns for matching boundaries.
diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
diff_match_patch.whitespaceRegex_ = /\s/;
diff_match_patch.linebreakRegex_ = /[\r\n]/;
diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;

/**
 * Reduce the number of edits by eliminating operationally trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
  var changes = false;
  var equalities = [];  // Stack of indices where equalities are found.
  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
  /** @type {?string} */
  var lastequality = null;
  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
  var pointer = 0;  // Index of current position.
  // Is there an insertion operation before the last equality.
  var pre_ins = false;
  // Is there a deletion operation before the last equality.
  var pre_del = false;
  // Is there an insertion operation after the last equality.
  var post_ins = false;
  // Is there a deletion operation after the last equality.
  var post_del = false;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
      if (diffs[pointer][1].length < this.Diff_EditCost &&
          (post_ins || post_del)) {
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
    } else {  // An insertion or deletion.
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
      if (lastequality && ((pre_ins && pre_del && post_ins && post_del) ||
                           ((lastequality.length < this.Diff_EditCost / 2) &&
                            (pre_ins + pre_del + post_ins + post_del) == 3))) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0,
                     [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        equalitiesLength--;  // Throw away the equality we just deleted;
        lastequality = null;
        if (pre_ins && pre_del) {
          // No changes made which could affect previous entry, keep going.
          post_ins = post_del = true;
          equalitiesLength = 0;
        } else {
          equalitiesLength--;  // Throw away the previous equality.
          pointer = equalitiesLength > 0 ?
              equalities[equalitiesLength - 1] : -1;
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
diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
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
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = this.diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
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
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
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
diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
  var chars1 = 0;
  var chars2 = 0;
  var last_chars1 = 0;
  var last_chars2 = 0;
  var x;
  for (x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {  // Equality or deletion.
      chars1 += diffs[x][1].length;
    }
    if (diffs[x][0] !== DIFF_DELETE) {  // Equality or insertion.
      chars2 += diffs[x][1].length;
    }
    if (chars1 > loc) {  // Overshot the location.
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
diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
  var html = [];
  var pattern_amp = /&/g;
  var pattern_lt = /</g;
  var pattern_gt = />/g;
  var pattern_para = /\n/g;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0];    // Operation (insert, delete, equal)
    var data = diffs[x][1];  // Text of change.
    var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
        .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
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
diff_match_patch.prototype.diff_text1 = function(diffs) {
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
diff_match_patch.prototype.diff_text2 = function(diffs) {
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
diff_match_patch.prototype.diff_levenshtein = function(diffs) {
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
diff_match_patch.prototype.diff_toDelta = function(diffs) {
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
diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
  var diffs = [];
  var diffsLength = 0;  // Keeping our own length var is faster in JS.
  var pointer = 0;  // Cursor in text1
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
          throw new Error('Invalid diff operation in diff_fromDelta: ' +
                          tokens[x]);
        }
    }
  }
  if (pointer != text1.length) {
    throw new Error('Delta length (' + pointer +
        ') does not equal source text length (' + text1.length + ').');
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
diff_match_patch.prototype.match_main = function(text, pattern, loc) {
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
diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
  if (pattern.length > this.Match_MaxBits) {
    throw new Error('Pattern too long for this browser.');
  }

  // Initialise the alphabet.
  var s = this.match_alphabet_(pattern);

  var dmp = this;  // 'this' becomes 'window' in a closure.

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
    return accuracy + (proximity / dmp.Match_Distance);
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
      score_threshold =
          Math.min(match_bitapScore_(0, best_loc), score_threshold);
    }
  }

  // Initialise the bit arrays.
  var matchmask = 1 << (pattern.length - 1);
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
      if (d === 0) {  // First pass: exact match.
        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
      } else {  // Subsequent passes: fuzzy match.
        rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
                last_rd[j + 1];
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
diff_match_patch.prototype.match_alphabet_ = function(pattern) {
  var s = {};
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] = 0;
  }
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
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
diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
  if (text.length == 0) {
    return;
  }
  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
  var padding = 0;

  // Look for the first and last matches of pattern in text.  If two different
  // matches are found, increase the pattern length.
  while (text.indexOf(pattern) != text.lastIndexOf(pattern) &&
         pattern.length < this.Match_MaxBits - this.Patch_Margin -
         this.Patch_Margin) {
    padding += this.Patch_Margin;
    pattern = text.substring(patch.start2 - padding,
                             patch.start2 + patch.length1 + padding);
  }
  // Add one chunk for good luck.
  padding += this.Patch_Margin;

  // Add the prefix.
  var prefix = text.substring(patch.start2 - padding, patch.start2);
  if (prefix) {
    patch.diffs.unshift([DIFF_EQUAL, prefix]);
  }
  // Add the suffix.
  var suffix = text.substring(patch.start2 + patch.length1,
                              patch.start2 + patch.length1 + padding);
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
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
 */
diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
  var text1, diffs;
  if (typeof a == 'string' && typeof opt_b == 'string' &&
      typeof opt_c == 'undefined') {
    // Method 1: text1, text2
    // Compute diffs from text1 and text2.
    text1 = /** @type {string} */(a);
    diffs = this.diff_main(text1, /** @type {string} */(opt_b), true);
    if (diffs.length > 2) {
      this.diff_cleanupSemantic(diffs);
      this.diff_cleanupEfficiency(diffs);
    }
  } else if (a && typeof a == 'object' && typeof opt_b == 'undefined' &&
      typeof opt_c == 'undefined') {
    // Method 2: diffs
    // Compute text1 from diffs.
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(a);
    text1 = this.diff_text1(diffs);
  } else if (typeof a == 'string' && opt_b && typeof opt_b == 'object' &&
      typeof opt_c == 'undefined') {
    // Method 3: text1, diffs
    text1 = /** @type {string} */(a);
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_b);
  } else if (typeof a == 'string' && typeof opt_b == 'string' &&
      opt_c && typeof opt_c == 'object') {
    // Method 4: text1, text2, diffs
    // text2 is not used.
    text1 = /** @type {string} */(a);
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_c);
  } else {
    throw new Error('Unknown call format to patch_make.');
  }

  if (diffs.length === 0) {
    return [];  // Get rid of the null case.
  }
  var patches = [];
  var patch = new diff_match_patch.patch_obj();
  var patchDiffLength = 0;  // Keeping our own length var is faster in JS.
  var char_count1 = 0;  // Number of characters into the text1 string.
  var char_count2 = 0;  // Number of characters into the text2 string.
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
        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text +
                         postpatch_text.substring(char_count2);
        break;
      case DIFF_DELETE:
        patch.length1 += diff_text.length;
        patch.diffs[patchDiffLength++] = diffs[x];
        postpatch_text = postpatch_text.substring(0, char_count2) +
                         postpatch_text.substring(char_count2 +
                             diff_text.length);
        break;
      case DIFF_EQUAL:
        if (diff_text.length <= 2 * this.Patch_Margin &&
            patchDiffLength && diffs.length != x + 1) {
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
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
 */
diff_match_patch.prototype.patch_deepCopy = function(patches) {
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
diff_match_patch.prototype.patch_apply = function(patches, text) {
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
      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits),
                                  expected_loc);
      if (start_loc != -1) {
        end_loc = this.match_main(text,
            text1.substring(text1.length - this.Match_MaxBits),
            expected_loc + text1.length - this.Match_MaxBits);
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
        text = text.substring(0, start_loc) +
               this.diff_text2(patches[x].diffs) +
               text.substring(start_loc + text1.length);
      } else {
        // Imperfect match.  Run a diff to get a framework of equivalent
        // indices.
        var diffs = this.diff_main(text1, text2, false);
        if (text1.length > this.Match_MaxBits &&
            this.diff_levenshtein(diffs) / text1.length >
            this.Patch_DeleteThreshold) {
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
            if (mod[0] === DIFF_INSERT) {  // Insertion
              text = text.substring(0, start_loc + index2) + mod[1] +
                     text.substring(start_loc + index2);
            } else if (mod[0] === DIFF_DELETE) {  // Deletion
              text = text.substring(0, start_loc + index2) +
                     text.substring(start_loc + this.diff_xIndex(diffs,
                         index1 + mod[1].length));
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
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @return {string} The padding string added to each side.
 */
diff_match_patch.prototype.patch_addPadding = function(patches) {
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
    patch.start1 -= paddingLength;  // Should be 0.
    patch.start2 -= paddingLength;  // Should be 0.
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
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 */
diff_match_patch.prototype.patch_splitMax = function(patches) {
  var patch_size = this.Match_MaxBits;
  for (var x = 0; x < patches.length; x++) {
    if (patches[x].length1 <= patch_size) {
      continue;
    }
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
      while (bigpatch.diffs.length !== 0 &&
             patch.length1 < patch_size - this.Patch_Margin) {
        var diff_type = bigpatch.diffs[0][0];
        var diff_text = bigpatch.diffs[0][1];
        if (diff_type === DIFF_INSERT) {
          // Insertions are harmless.
          patch.length2 += diff_text.length;
          start2 += diff_text.length;
          patch.diffs.push(bigpatch.diffs.shift());
          empty = false;
        } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 &&
                   patch.diffs[0][0] == DIFF_EQUAL &&
                   diff_text.length > 2 * patch_size) {
          // This is a large deletion.  Let it pass in one chunk.
          patch.length1 += diff_text.length;
          start1 += diff_text.length;
          empty = false;
          patch.diffs.push([diff_type, diff_text]);
          bigpatch.diffs.shift();
        } else {
          // Deletion or equality.  Only take as much as we can stomach.
          diff_text = diff_text.substring(0,
              patch_size - patch.length1 - this.Patch_Margin);
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
            bigpatch.diffs[0][1] =
                bigpatch.diffs[0][1].substring(diff_text.length);
          }
        }
      }
      // Compute the head context for the next patch.
      precontext = this.diff_text2(patch.diffs);
      precontext =
          precontext.substring(precontext.length - this.Patch_Margin);
      // Append the end context for this patch.
      var postcontext = this.diff_text1(bigpatch.diffs)
                            .substring(0, this.Patch_Margin);
      if (postcontext !== '') {
        patch.length1 += postcontext.length;
        patch.length2 += postcontext.length;
        if (patch.diffs.length !== 0 &&
            patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
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
diff_match_patch.prototype.patch_toText = function(patches) {
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
diff_match_patch.prototype.patch_fromText = function(textline) {
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
diff_match_patch.patch_obj = function() {
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
diff_match_patch.patch_obj.prototype.toString = function() {
  var coords1, coords2;
  if (this.length1 === 0) {
    coords1 = this.start1 + ',0';
  } else if (this.length1 == 1) {
    coords1 = this.start1 + 1;
  } else {
    coords1 = (this.start1 + 1) + ',' + this.length1;
  }
  if (this.length2 === 0) {
    coords2 = this.start2 + ',0';
  } else if (this.length2 == 1) {
    coords2 = this.start2 + 1;
  } else {
    coords2 = (this.start2 + 1) + ',' + this.length2;
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


// The following export code was added by @ForbesLindesay
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
      var error = new Error('text diff_match_patch library not found');
      // eslint-disable-next-line camelcase
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
  }
  // large text, try to use a text-diff algorithm
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
  }

  // text-diff, use a text-patch algorithm
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
      lineHeader = i;

      // fix header
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
  }

  // text-diff, use a text-diff algorithm
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
      }
      // look for move destinations
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
	default: BaseFormatter
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
      context.out('</div><div class="jsondiffpatch-moved-destination">' + delta[1] + '</div>');

      // draw an SVG arrow from here to move destination
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
	default: HtmlFormatter,
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
	default: AnnotatedFormatter,
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
      context.pushCurrentOp({ op: OPERATIONS.add, value: delta[0] });
    }
  }, {
    key: 'format_modified',
    value: function format_modified(context, delta) {
      context.pushCurrentOp({ op: OPERATIONS.replace, value: delta[1] });
    }
  }, {
    key: 'format_deleted',
    value: function format_deleted(context) {
      context.pushCurrentOp({ op: OPERATIONS.remove });
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
    return { item: item, position: position };
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
	default: JSONFormatter,
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
	default: ConsoleFormatter,
	format: format$3,
	log: log$1
});



var index = Object.freeze({
	base: base,
	html: html,
	annotated: annotated,
	jsonpatch: jsonpatch,
	console: console$1
});

// use as 2nd parameter for JSON.parse to revive Date instances
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

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
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
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/*! exports provided: default */
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
  return function(arg) {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/*! exports provided: default */
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
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/button/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/button/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");


module.exports = {

    getClassNames(attrs) {
        const classNames = [];
        classNames.push(attrs.raised ? "mmf-button--raised" : "mmf-button--flat");
        classNames.push(attrs.disabled ? "is-disabled" : "is-enabled");
        if (attrs.class) {
            classNames.push(attrs.class);
        }
        return classNames.join(" ");
    },

    view(vnode) {
        const attrs = Object.assign({
            disabled: false,
            onclick: event => vnode.attrs.onclick(event)
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
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");


module.exports = {
    view({ attrs }) {
        return m("input.mmf-checkbox",
            {
                id: attrs.id,
                type: "checkbox",
                disabled: attrs.disabled === true,
                checked: attrs.value,
                onchange: e => attrs.onchange(e.target.checked),
                onfocus: attrs.onfocus,
                onblur: attrs.onblur
            }
        );
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/checkboxform/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/checkboxform/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
const Checkbox = __webpack_require__(/*! ../checkbox */ "./node_modules/mithril-material-forms/components/checkbox/index.js");
const Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");
const Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");


const defaultOptions = {
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
    view(vnode) {
        const attrs = Object.assign({}, defaultOptions, vnode.attrs);

        return m(`.mmf-form.mmf-form--checkbox.mmf-form--${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": Errors.getErrorClass(attrs.errors)
            },
            m(Checkbox,
                {
                    id: vnode.attrs.id,
                    disabled: attrs.disabled,
                    value: vnode.attrs.value,
                    onchange: vnode.attrs.onchange,
                    onfocus: vnode.attrs.onfocus,
                    onblur: vnode.attrs.onblur
                }
            ),
            m(Label, attrs),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : "",
            vnode.children
        );
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/errors/getErrorClass.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/errors/getErrorClass.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function getErrorClass(errors) {
    if (errors == null || errors.length === 0) {
        return "no-error";
    }

    for (let i = 0, l = errors.length; i < l; i += 1) {
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
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");

function isVNode(object) {
    return typeof object.tag === "string" && object.attrs != null && typeof object.attrs === "object";
}


module.exports = {

    getErrorClass: __webpack_require__(/*! ./getErrorClass */ "./node_modules/mithril-material-forms/components/errors/getErrorClass.js"),

    view(vnode) {
        if (vnode.attrs.errors == null || vnode.attrs.errors.length === 0) {
            return "";
        }

        return m("ul.mmf-form__errors",
            vnode.attrs.errors.map(error => {
                if (isVNode(error)) {
                    return m(`li.mmf-form__error.mmf-form__error--${error.attrs.severity}`, error);
                }

                if (error && typeof error === "object") {
                    if (error.severity === "warning") {
                        return m("li.mmf-form__error.mmf-form__error--warning", m.trust(error.message));
                    }
                    return m("li.mmf-form__error.mmf-form__error--error", m.trust(error.message));
                }
                return m("li.mmf-form__error.mmf-form__error--error", m.trust(error));
            })
        );
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/imagepreview/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/imagepreview/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
const RATIO_DEFAULT = [16, 9];

function isEmpty(value) {
    return value == null || value === "";
}

function getRatioStyle(ratio) {
    return `${getRatio(ratio).toFixed(2)}%`;
}

function getRatio(ratio) {
    let dim = ratio.split(":").map(parseFloat);
    dim = dim.length === 2 ? dim : RATIO_DEFAULT;
    return (100 * dim[1] / dim[0]);
}


const MetaDescription = {
    view(vnode) {
        const attrs = vnode.attrs;
        return [
            isEmpty(attrs.url) ?
                m(".mmf-preview__placeholder", attrs.placeholder) : [
                    attrs.description ? m(".mmf-preview__description", m.trust(attrs.description)) : "",
                    m(".mmf-preview__overflow-indicator")
                ],
            vnode.children
        ];
    }
};


const InlineImage = {
    view(vnode) {
        const attrs = vnode.attrs;
        return m(".mmf-preview__content",
            {
                style: isEmpty(attrs.url) ? "" : `padding-bottom: ${getRatioStyle(attrs.maxRatio)};`,
                oncreate: attrs.oncreate
            },
            isEmpty(attrs.url) ?
                m(".mmf-preview__placeholder", attrs.placeholder) : [
                    m("img", {
                        src: attrs.url,
                        onload: attrs.onload
                    }),
                    attrs.description ? m(".mmf-preview__description", m.trust(attrs.description)) : "",
                    m(".mmf-preview__overflow-indicator")
                ],
            vnode.children
        );
    }
};


const ImagePreview = {

    overflowContainer: null,

    updateRatio(maxRatio, image) {
        if (this.overflowContainer != null && image.naturalWidth) {
            const ratioMax = getRatio(maxRatio);
            const ratioImg = getRatio(`${image.naturalWidth}:${image.naturalHeight}`);

            if (ratioMax >= ratioImg) {
                this.overflowContainer.style.paddingBottom = `${ratioImg.toFixed(2)}%`;
                this.overflowContainer.classList.remove("with-overflow");
                this.hasOverflow = false;
            } else {
                this.overflowContainer.style.paddingBottom = `${ratioMax.toFixed(2)}%`;
                this.overflowContainer.classList.add("with-overflow");
                this.hasOverflow = true;
            }
        }
    },

    view(vnode) {
        const attrs = Object.assign({
            url: null,
            "class": "",
            asBackgroundImage: false,
            description: null,
            placeholder: null,
            onclick: null,
            maxRatio: "16:9",
            // "private"
            onload: event => this.updateRatio(attrs.maxRatio, event.currentTarget),
            oncreate: content => { this.overflowContainer = content.dom; }
        }, vnode.attrs);

        return m(".mmf-preview.mmf-preview--image",
            {
                "class": attrs.class + (isEmpty(attrs.url) ? "" : " with-image"),
                style: (attrs.asBackgroundImage && !isEmpty(attrs.url)) ?
                    `background-image: url(${attrs.url});` : ""
            },
            attrs.asBackgroundImage ? m(MetaDescription, attrs, vnode.children) : m(InlineImage, attrs, vnode.children)
        );
    }
};


module.exports = ImagePreview;


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/input/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/input/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");


module.exports = {
    value: null,
    hasFocus: false,

    onupdate(vnode) {
        // @prevent redraw of input
        vnode.dom.id = vnode.attrs.id; // updating the pointer dependend attributes outside of mithril
    },

    view({ attrs }) {
        let value = attrs.value;
        if (this.hasFocus && this.value != null) {
            value = this.value; // this will remove any changes applied to this data from "outside"
        }

        this.value = value;

        const inputAttributes = {
            // id: attrs.id, // if the element is pointer sensitive it will be rebuild on pointer updates, loosing focus
            type: attrs.type,
            value,
            placeholder: attrs.placeholder,
            disabled: attrs.disabled === true,
            oninput: e => (this.value = e.target.value),
            // @fixme this might trigger updates, but ensures the property is always set (on initial rendering)
            oncreate: vnode => (vnode.dom.id = attrs.id),
            onfocus: event => {
                this.hasFocus = true;
                attrs.onfocus && attrs.onfocus(event);
            },
            onblur: event => {
                this.hasFocus = false;
                attrs.onblur && attrs.onblur(event);
            }
        };

        const updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        inputAttributes[updateEvent] = () => attrs.onchange(this.value);

        return m("input.mmf-input", inputAttributes);
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/inputform/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/inputform/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
const Input = __webpack_require__(/*! ../input */ "./node_modules/mithril-material-forms/components/input/index.js");
const Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");
const sanitizeValue = __webpack_require__(/*! ./sanitizeValue */ "./node_modules/mithril-material-forms/components/inputform/sanitizeValue.js");
const Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");


const TYPES = {
    string: "text",
    integer: "number",
    number: "number"
};


module.exports = {
    oncreate(vnode) {
        this.$form = vnode.dom;
    },

    updateClasses(value) {
        const hasValue = value !== "";
        this.$form.classList.remove(hasValue ? "isEmpty" : "isNotEmpty");
        this.$form.classList.add(hasValue === false ? "isEmpty" : "isNotEmpty");
    },

    onfocus() {
        this.$form.classList.add("hasFocus");
        this.$form.classList.remove("hasNoFocus");
    },

    onblur(value) {
        this.$form.classList.add("hasNoFocus");
        this.$form.classList.remove("hasFocus");
        this.updateClasses(value);
    },

    hasFocus() {
        return this.$form && this.$form.classList.contains("hasFocus");
    },

    view(vnode) {
        const inputType = TYPES[vnode.attrs.type] || "text";
        const attrs = Object.assign({
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

        const focusClass = this.hasFocus() ? "hasFocus" : "hasNoFocus";
        const errorClass = Errors.getErrorClass(attrs.errors);
        const emptyClass = attrs.value === "" ? "isEmpty" : "isNotEmpty";

        const view = m(`.mmf-form.mmf-form--input.mmf-form--${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": `${focusClass} ${errorClass} ${emptyClass}`
            },
            m(Label, attrs),
            m(Input,
                {
                    type: inputType,
                    id: attrs.id,
                    disabled: attrs.disabled,
                    instantUpdate: attrs.instantUpdate,
                    placeholder: attrs.placeholder,
                    onchange: value => attrs.onchange(sanitizeValue(inputType, value)),
                    value: attrs.value,
                    onfocus: e => {
                        this.onfocus();
                        attrs.onfocus && attrs.onfocus(e);
                    },
                    onblur: e => {
                        this.onblur(e.target.value);
                        attrs.onblur && attrs.onblur(e);
                    }
                }
            ),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : "",
            vnode.children
        );

        return view;
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/inputform/sanitizeValue.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/inputform/sanitizeValue.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function sanitizeValue(type, value) {
    if (type === "number") {
        const intValue = parseInt(value);
        const floatValue = parseFloat(value);
        if (floatValue == value) { // eslint-disable-line
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
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");


module.exports = {
    view(vnode) {
        return m("label.mmf-label",
            {
                "for": vnode.attrs.id,
                "class": vnode.attrs.class
            },
            vnode.attrs.title
        );
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/select/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/select/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");


module.exports = {
    view(vnode) {
        return m("div.mmf-select__wrapper",
            {
                "class": vnode.attrs.disabled === true ? "is-disabled" : "is-enabled",
                oncreate: _vnode => (this.$wrapper = _vnode.dom)
            },
            m("select.mmf-select",
                {
                    id: vnode.attrs.id,
                    value: vnode.attrs.value,
                    disabled: vnode.attrs.disabled,
                    "class": vnode.attrs.class,
                    onfocus: () => {
                        this.$wrapper && this.$wrapper.classList.add("has-focus");
                        vnode.attrs.onfocus && vnode.attrs.onfocus(vnode);
                    },
                    onblur: () => {
                        this.$wrapper && this.$wrapper.classList.remove("has-focus");
                        vnode.attrs.onblur && vnode.attrs.onblur(vnode);
                    },
                    // @reminder will always be string, which must be specified in json-schema or else datatype must
                    // be passed to select-component
                    onchange: e => vnode.attrs.onchange(e.target.value)
                },
                vnode.attrs.options.map(value => {
                    const title = value.title || value;
                    // value must be a string or else is discarded
                    value = `${value.value == null ? value : value.value}`;
                    return m("option", { value }, title);
                })
            )
        );
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/selectform/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/selectform/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
const Select = __webpack_require__(/*! ../select */ "./node_modules/mithril-material-forms/components/select/index.js");
const Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");
const Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");


module.exports = {
    view(vnode) {
        const attrs = Object.assign({
            id: null,
            value: "",
            options: [{ title: "-", value: false }],
            errors: [],
            description: "",
            placeholder: "",
            onchange: Function.prototype
        }, vnode.attrs);

        return m(`.mmf-form.mmf-form--select.mmf-form--${attrs.disabled ? "disabled" : "enabled"}`,
            {
                "class": Errors.getErrorClass(attrs.errors)
            },
            m(Select, attrs),
            m(Label, Object.assign({ "class": "mmf-grow-2" }, attrs)),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : "",
            vnode.children
        );
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/textarea/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/textarea/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
const autosize = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
const raf = window.requestAnimationFrame;


module.exports = {

    textarea: null,
    focus: false,

    onupdate(vnode) {
        raf(() => autosize.update(vnode.dom));
    },

    view(vnode) {
        const attrs = Object.assign({
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

        const disabled = attrs.disabled === true;

        if (this.focus) {
            // keep current value, while input is being active this prevents
            // jumps in cursor, caused by race conditions
            // @attention - this may produce other problems
            attrs.value = this.textarea.value;
        }

        const textareaAttributes = {
            id: attrs.id,
            value: attrs.value,
            rows: attrs.rows,
            disabled,
            placeholder: attrs.placeholder,
            onblur: e => {
                this.focus = false;
                attrs.onblur && attrs.onblur(e);
            },
            onfocus: e => {
                this.focus = true;
                attrs.onfocus && attrs.onfocus(e);
            },
            onupdate: node => autosize.update(node.dom),
            oncreate: node => {
                this.textarea = node.dom;
                attrs.oncreate(node);
                autosize(node.dom);
                autosize.update(vnode.dom);
            },
            onbeforeremove: node => {
                attrs.onbeforeremove(node);
                autosize.destroy(node.dom);
            }
        };

        const updateEvent = attrs.instantUpdate === true ? "onkeyup" : "onchange";
        textareaAttributes[updateEvent] = e => attrs.onchange(e.target.value);

        return m("textarea.mmf-textarea", textareaAttributes);
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/components/textareaform/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/mithril-material-forms/components/textareaform/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const m = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
const Textarea = __webpack_require__(/*! ../textarea */ "./node_modules/mithril-material-forms/components/textarea/index.js");
const Label = __webpack_require__(/*! ../label */ "./node_modules/mithril-material-forms/components/label/index.js");
const Errors = __webpack_require__(/*! ../errors */ "./node_modules/mithril-material-forms/components/errors/index.js");


function isEmpty(value) {
    return value == null || value === "";
}

module.exports = {

    oncreate(vnode) {
        this.$form = vnode.dom;
        this.onblur(vnode.attrs.value);
    },

    onfocus() {
        this.$form.classList.remove("hasNoFocus");
        this.$form.classList.add("hasFocus");
    },

    onblur(value) {
        this.$form.classList.remove("hasFocus");
        this.$form.classList.add("hasNoFocus");
        this.updateClasses(value);
    },

    updateClasses(value) {
        const hasValue = isEmpty(value) === false;
        this.$form.classList.remove(hasValue ? "isEmpty" : "isNotEmpty");
        this.$form.classList.add(hasValue === false ? "isEmpty" : "isNotEmpty");
    },

    onupdate(vnode) {
        this.updateClasses(vnode.attrs.value);
    },

    view(vnode) {
        const attrs = Object.assign({
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

        const disabled = attrs.disabled === true;

        return m(`.mmf-form.mmf-form--textarea.mmf-form--${disabled ? "disabled" : "enabled"}`,
            {
                "class": Errors.getErrorClass(attrs.errors)
            },
            m(Label, attrs),
            m(Textarea, {
                id: attrs.id,
                value: attrs.value,
                disabled,
                instantUpdate: attrs.instantUpdate,
                placeholder: attrs.placeholder,
                rows: attrs.rows,
                // onchange: m.withAttr("value", attrs.onchange),
                onchange: attrs.onchange,
                onblur: e => {
                    this.onblur(e.target.value);
                    attrs.onblur(e);
                },
                onfocus: e => {
                    this.onfocus();
                    attrs.onfocus(e);
                }
            }),
            m(Errors, attrs),
            attrs.description ? m(".mmf-meta", attrs.description) : "",
            vnode.children
        );
    }
};


/***/ }),

/***/ "./node_modules/mithril-material-forms/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mithril-material-forms/index.js ***!
  \******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/mithril/api/mount-redraw.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/api/mount-redraw.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var rendering = false
	var pending = false

	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 0; i < subscriptions.length; i += 2) {
			try { render(subscriptions[i], Vnode(subscriptions[i + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		rendering = false
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount(element, component) expects a component, not a vnode")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			render(root, [], redraw)
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ }),

/***/ "./node_modules/mithril/api/router.js":
/*!********************************************!*\
  !*** ./node_modules/mithril/api/router.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var m = __webpack_require__(/*! ../render/hyperscript */ "./node_modules/mithril/render/hyperscript.js")
var Promise = __webpack_require__(/*! ../promise/promise */ "./node_modules/mithril/promise/promise.js")

var buildPathname = __webpack_require__(/*! ../pathname/build */ "./node_modules/mithril/pathname/build.js")
var parsePathname = __webpack_require__(/*! ../pathname/parse */ "./node_modules/mithril/pathname/parse.js")
var compileTemplate = __webpack_require__(/*! ../pathname/compileTemplate */ "./node_modules/mithril/pathname/compileTemplate.js")
var assign = __webpack_require__(/*! ../pathname/assign */ "./node_modules/mithril/pathname/assign.js")

var sentinel = {}

module.exports = function($window, mountRedraw) {
	var fireAsync

	function setPath(path, data, options) {
		path = buildPathname(path, data)
		if (fireAsync != null) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}

	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate

	var SKIP = route.SKIP = {}

	function route(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		// 0 = start
		// 1 = init
		// 2 = ready
		var state = 0

		var compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
		var p = Promise.resolve()
		var scheduled = false
		var onremove

		fireAsync = null

		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes")
			}
		}

		function resolveRoute() {
			scheduled = false
			// Consider the pathname holistically. The prefix might even be invalid,
			// but that's not our problem.
			var prefix = $window.location.hash
			if (route.prefix[0] !== "#") {
				prefix = $window.location.search + prefix
				if (route.prefix[0] !== "?") {
					prefix = $window.location.pathname + prefix
					if (prefix[0] !== "/") prefix = "/" + prefix
				}
			}
			// This seemingly useless `.concat()` speeds up the tests quite a bit,
			// since the representation is consistently a relatively poorly
			// optimized cons string.
			var path = prefix.concat()
				.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
				.slice(route.prefix.length)
			var data = parsePathname(path)

			assign(data.params, $window.history.state)

			function fail() {
				if (path === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute)
				setPath(defaultRoute, null, {replace: true})
			}

			loop(0)
			function loop(i) {
				// 0 = init
				// 1 = scheduled
				// 2 = done
				for (; i < compiled.length; i++) {
					if (compiled[i].check(data)) {
						var payload = compiled[i].component
						var matchedRoute = compiled[i].route
						var localComp = payload
						var update = lastUpdate = function(comp) {
							if (update !== lastUpdate) return
							if (comp === SKIP) return loop(i + 1)
							component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
							attrs = data.params, currentPath = path, lastUpdate = null
							currentResolver = payload.render ? payload : null
							if (state === 2) mountRedraw.redraw()
							else {
								state = 2
								mountRedraw.redraw.sync()
							}
						}
						// There's no understating how much I *wish* I could
						// use `async`/`await` here...
						if (payload.view || typeof payload === "function") {
							payload = {}
							update(localComp)
						}
						else if (payload.onmatch) {
							p.then(function () {
								return payload.onmatch(data.params, path, matchedRoute)
							}).then(update, fail)
						}
						else update("div")
						return
					}
				}
				fail()
			}
		}

		// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
		// even if neither `pushState` nor `hashchange` are supported. It's
		// cleared if `hashchange` is used, since that makes it automatically
		// async.
		fireAsync = function() {
			if (!scheduled) {
				scheduled = true
				callAsync(resolveRoute)
			}
		}

		if (typeof $window.history.pushState === "function") {
			onremove = function() {
				$window.removeEventListener("popstate", fireAsync, false)
			}
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			fireAsync = null
			onremove = function() {
				$window.removeEventListener("hashchange", resolveRoute, false)
			}
			$window.addEventListener("hashchange", resolveRoute, false)
		}

		return mountRedraw.mount(root, {
			onbeforeupdate: function() {
				state = state ? 2 : 1
				return !(!state || sentinel === currentResolver)
			},
			oncreate: resolveRoute,
			onremove: onremove,
			view: function() {
				if (!state || sentinel === currentResolver) return
				// Wrap in a fragment to preserve existing key semantics
				var vnode = [Vnode(component, attrs.key, attrs)]
				if (currentResolver) vnode = currentResolver.render(vnode[0])
				return vnode
			},
		})
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			var options = vnode.attrs.options
			// Remove these so they don't get overwritten
			var attrs = {}, onclick, href
			assign(attrs, vnode.attrs)
			// The first two are internal, but the rest are magic attributes
			// that need censored to not screw up rendering.
			attrs.selector = attrs.options = attrs.key = attrs.oninit =
			attrs.oncreate = attrs.onbeforeupdate = attrs.onupdate =
			attrs.onbeforeremove = attrs.onremove = null

			// Do this now so we can get the most current `href` and `disabled`.
			// Those attributes may also be specified in the selector, and we
			// should honor that.
			var child = m(vnode.attrs.selector || "a", attrs, vnode.children)

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want to do this on a disabled link, use
				// an `oncreate` hook to add it.
				child.attrs.onclick = null
			} else {
				onclick = child.attrs.onclick
				href = child.attrs.href
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/mithril/hyperscript.js":
/*!*********************************************!*\
  !*** ./node_modules/mithril/hyperscript.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./render/hyperscript */ "./node_modules/mithril/render/hyperscript.js")

hyperscript.trust = __webpack_require__(/*! ./render/trust */ "./node_modules/mithril/render/trust.js")
hyperscript.fragment = __webpack_require__(/*! ./render/fragment */ "./node_modules/mithril/render/fragment.js")

module.exports = hyperscript


/***/ }),

/***/ "./node_modules/mithril/index.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./hyperscript */ "./node_modules/mithril/hyperscript.js")
var request = __webpack_require__(/*! ./request */ "./node_modules/mithril/request.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.mount = mountRedraw.mount
m.route = __webpack_require__(/*! ./route */ "./node_modules/mithril/route.js")
m.render = __webpack_require__(/*! ./render */ "./node_modules/mithril/render.js")
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = __webpack_require__(/*! ./querystring/parse */ "./node_modules/mithril/querystring/parse.js")
m.buildQueryString = __webpack_require__(/*! ./querystring/build */ "./node_modules/mithril/querystring/build.js")
m.parsePathname = __webpack_require__(/*! ./pathname/parse */ "./node_modules/mithril/pathname/parse.js")
m.buildPathname = __webpack_require__(/*! ./pathname/build */ "./node_modules/mithril/pathname/build.js")
m.vnode = __webpack_require__(/*! ./render/vnode */ "./node_modules/mithril/render/vnode.js")
m.PromisePolyfill = __webpack_require__(/*! ./promise/polyfill */ "./node_modules/mithril/promise/polyfill.js")

module.exports = m


/***/ }),

/***/ "./node_modules/mithril/mount-redraw.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/mount-redraw.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var render = __webpack_require__(/*! ./render */ "./node_modules/mithril/render.js")

module.exports = __webpack_require__(/*! ./api/mount-redraw */ "./node_modules/mithril/api/mount-redraw.js")(render, requestAnimationFrame, console)


/***/ }),

/***/ "./node_modules/mithril/pathname/assign.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/pathname/assign.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign || function(target, source) {
	if(source) Object.keys(source).forEach(function(key) { target[key] = source[key] })
}


/***/ }),

/***/ "./node_modules/mithril/pathname/build.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/build.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildQueryString = __webpack_require__(/*! ../querystring/build */ "./node_modules/mithril/querystring/build.js")
var assign = __webpack_require__(/*! ./assign */ "./node_modules/mithril/pathname/assign.js")

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names *must* be separated")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),

/***/ "./node_modules/mithril/pathname/compileTemplate.js":
/*!**********************************************************!*\
  !*** ./node_modules/mithril/pathname/compileTemplate.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parsePathname = __webpack_require__(/*! ./parse */ "./node_modules/mithril/pathname/parse.js")

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),

/***/ "./node_modules/mithril/pathname/parse.js":
/*!************************************************!*\
  !*** ./node_modules/mithril/pathname/parse.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseQueryString = __webpack_require__(/*! ../querystring/parse */ "./node_modules/mithril/querystring/parse.js")

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ }),

/***/ "./node_modules/mithril/promise/polyfill.js":
/*!**************************************************!*\
  !*** ./node_modules/mithril/promise/polyfill.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/mithril/promise/promise.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/promise/promise.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var PromisePolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/mithril/promise/polyfill.js")

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") {
		global.Promise = PromisePolyfill
	} else if (!global.Promise.prototype.finally) {
		global.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = global.Promise
} else {
	module.exports = PromisePolyfill
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mithril/querystring/build.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/build.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),

/***/ "./node_modules/mithril/querystring/parse.js":
/*!***************************************************!*\
  !*** ./node_modules/mithril/querystring/parse.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ }),

/***/ "./node_modules/mithril/render.js":
/*!****************************************!*\
  !*** ./node_modules/mithril/render.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./render/render */ "./node_modules/mithril/render/render.js")(window)


/***/ }),

/***/ "./node_modules/mithril/render/fragment.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/render/fragment.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "./node_modules/mithril/render/hyperscriptVnode.js")

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),

/***/ "./node_modules/mithril/render/hyperscript.js":
/*!****************************************************!*\
  !*** ./node_modules/mithril/render/hyperscript.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "./node_modules/mithril/render/hyperscriptVnode.js")

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),

/***/ "./node_modules/mithril/render/hyperscriptVnode.js":
/*!*********************************************************!*\
  !*** ./node_modules/mithril/render/hyperscriptVnode.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),

/***/ "./node_modules/mithril/render/render.js":
/*!***********************************************!*\
  !*** ./node_modules/mithril/render/render.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function($window) {
	var $doc = $window && $window.document
	var currentRedraw

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (!maybeSetContentEditable(vnode)) {
			if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				updateNodes(element, old.children, vnode.children, hooks, null, ns)
			}
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm not exactly interested in doing that.
	function moveNodes(parent, vnode, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				for (var i = 0; i < vnode.instance.length; i++) {
					frag.appendChild(vnode.instance[i])
				}
			} else if (vnode.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode.dom)
			} else if (vnode.children.length === 1) {
				vnode = vnode.children[0]
				if (vnode != null) continue
			} else {
				for (var i = 0; i < vnode.children.length; i++) {
					var child = vnode.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var mask = 0
		var original = vnode.state
		var stateResult, attrsResult
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode, original)

		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode)
			removeChild(parent, vnode)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}

		function reallyRemove() {
			checkState(vnode, original)
			onremove(vnode)
			removeChild(parent, vnode)
		}
	}
	function removeHTML(parent, vnode) {
		for (var i = 0; i < vnode.instance.length; i++) {
			parent.removeChild(vnode.instance[i])
		}
	}
	function removeChild(parent, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				removeHTML(parent, vnode)
			} else {
				if (vnode.tag !== "[") {
					parent.removeChild(vnode.dom)
					if (!Array.isArray(vnode.children)) break
				}
				if (vnode.children.length === 1) {
					vnode = vnode.children[0]
					if (vnode != null) continue
				} else {
					for (var i = 0; i < vnode.children.length; i++) {
						var child = vnode.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns)
		}
	}
	function setAttr(vnode, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value)
			else vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (attrs != null) {
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""

		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		var prevRedraw = currentRedraw
		try {
			currentRedraw = typeof redraw === "function" ? redraw : undefined
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		} finally {
			currentRedraw = prevRedraw
		}
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
}


/***/ }),

/***/ "./node_modules/mithril/render/trust.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/trust.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/mithril/render/vnode.js")

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ "./node_modules/mithril/render/vnode.js":
/*!**********************************************!*\
  !*** ./node_modules/mithril/render/vnode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError("Vnodes must either always have keys or never have keys!")
			}
		}
		for (var i = 0; i < input.length; i++) {
			children[i] = Vnode.normalize(input[i])
		}
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ "./node_modules/mithril/request.js":
/*!*****************************************!*\
  !*** ./node_modules/mithril/request.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PromisePolyfill = __webpack_require__(/*! ./promise/promise */ "./node_modules/mithril/promise/promise.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./request/request */ "./node_modules/mithril/request/request.js")(window, PromisePolyfill, mountRedraw.redraw)


/***/ }),

/***/ "./node_modules/mithril/request/request.js":
/*!*************************************************!*\
  !*** ./node_modules/mithril/request/request.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildPathname = __webpack_require__(/*! ../pathname/build */ "./node_modules/mithril/pathname/build.js")

module.exports = function($window, Promise, oncompletion) {
	var callbackCount = 0

	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText)
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							try { message = ev.target.responseText }
							catch (e) { message = response }
							var error = new Error(message)
							error.code = ev.target.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}


/***/ }),

/***/ "./node_modules/mithril/route.js":
/*!***************************************!*\
  !*** ./node_modules/mithril/route.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./api/router */ "./node_modules/mithril/api/router.js")(window, mountRedraw)


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.js":
/*!****************************************!*\
  !*** ./node_modules/mitt/dist/mitt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function n(n){return n=n||Object.create(null),{on:function(c,e){(n[c]||(n[c]=[])).push(e)},off:function(c,e){n[c]&&n[c].splice(n[c].indexOf(e)>>>0,1)},emit:function(c,e){(n[c]||[]).slice().map(function(n){n(e)}),(n["*"]||[]).slice().map(function(n){n(c,e)})}}}module.exports=n;
//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
function defaultClearTimeout () {
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
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/redux-undo/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-undo/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.parseActions = parseActions;
exports.default = undoable;
exports.distinctState = distinctState;
exports.includeAction = includeAction;
exports.ifAction = ifAction;
exports.excludeAction = excludeAction;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyMiddleware; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindActionCreators; });
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

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
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
    var initialState = reducer(undefined, { type: _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");



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
        if (typeof observer !== 'object') {
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
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = function () {
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
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = observable, _ref2;
}

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/index.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
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

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/valid-url/index.js":
/*!*****************************************!*\
  !*** ./node_modules/valid-url/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function(module) {
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
    var splitUri = function(uri) {
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
        if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase()))  return;

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

        if (!scheme)  return;

        if(allowHttps) {
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
        
        if(query && query.length){
            out += '?' + query;
        }

        if(fragment && fragment.length){
            out += '#' + fragment;
        }
        
        return out;
    }

    function is_https_iri(value) {
        return is_http_iri(value, true);
    }

    function is_web_iri(value) {
        return (is_http_iri(value) || is_https_iri(value));
    }

})(module);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
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
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gson_pointer_1 = __importDefault(__webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"));
const json_schema_library_1 = __importDefault(__webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js"));
const addValidator_1 = __importDefault(__webpack_require__(/*! json-schema-library/lib/addValidator */ "./node_modules/json-schema-library/lib/addValidator.js"));
const DataService_1 = __importStar(__webpack_require__(/*! ./services/DataService */ "./src/services/DataService.ts"));
const SchemaService_1 = __importDefault(__webpack_require__(/*! ./services/SchemaService */ "./src/services/SchemaService.ts"));
const ValidationService_1 = __importDefault(__webpack_require__(/*! ./services/ValidationService */ "./src/services/ValidationService.ts"));
const LocationService_1 = __importDefault(__webpack_require__(/*! ./services/LocationService */ "./src/services/LocationService.ts"));
const State_1 = __importDefault(__webpack_require__(/*! ./services/State */ "./src/services/State.ts"));
const selectEditor_1 = __importDefault(__webpack_require__(/*! ./utils/selectEditor */ "./src/utils/selectEditor.ts"));
const createElement_1 = __importDefault(__webpack_require__(/*! ./utils/createElement */ "./src/utils/createElement.ts"));
const addItem_1 = __importDefault(__webpack_require__(/*! ./utils/addItem */ "./src/utils/addItem.ts"));
const UISchema_1 = __importDefault(__webpack_require__(/*! ./utils/UISchema */ "./src/utils/UISchema.ts"));
const getID_1 = __importDefault(__webpack_require__(/*! ./utils/getID */ "./src/utils/getID.ts"));
const plugin_1 = __importDefault(__webpack_require__(/*! ./plugin */ "./src/plugin/index.ts"));
const i18n_1 = __importDefault(__webpack_require__(/*! ./utils/i18n */ "./src/utils/i18n.ts"));
const createProxy_1 = __importDefault(__webpack_require__(/*! ./utils/createProxy */ "./src/utils/createProxy.ts"));
const oneofeditor_1 = __importDefault(__webpack_require__(/*! ./editors/oneofeditor */ "./src/editors/oneofeditor/index.ts"));
const arrayeditor_1 = __importDefault(__webpack_require__(/*! ./editors/arrayeditor */ "./src/editors/arrayeditor/index.ts"));
const objecteditor_1 = __importDefault(__webpack_require__(/*! ./editors/objecteditor */ "./src/editors/objecteditor/index.ts"));
const valueeditor_1 = __importDefault(__webpack_require__(/*! ./editors/valueeditor */ "./src/editors/valueeditor/index.ts"));
const { JsonEditor: Core } = json_schema_library_1.default.cores;
function isValidPointer(pointer) {
    return pointer[0] === "#";
}
/** throws an error, when given pointer is not a valid jons-pointer */
function assertValidPointer(pointer) {
    if (isValidPointer(pointer) === false) {
        throw new Error(`Invalid json(schema)-pointer: ${pointer}`);
    }
}
// removes the editor from the instances-inventory of active editors
function removeEditorFrom(instances, editor) {
    const pointer = editor.getPointer();
    if (instances[pointer]) {
        instances[pointer] = instances[pointer].filter(instance => editor !== instance);
        if (instances[pointer].length === 0) {
            delete instances[pointer];
        }
    }
}
function eachInstance(instances, cb) {
    Object.keys(instances).forEach(pointer => {
        instances[pointer].forEach(editor => cb(pointer, editor));
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
class Controller {
    constructor(schema = { type: "object" }, data = {}, options = {}) {
        this.destroyed = false;
        this.disabled = false;
        schema = UISchema_1.default.extendSchema(schema);
        this.options = {
            editors: [
                ...plugin_1.default.getEditors(),
                oneofeditor_1.default,
                arrayeditor_1.default,
                objecteditor_1.default,
                valueeditor_1.default
            ],
            ...options,
        };
        this.editors = this.options.editors;
        this.state = new State_1.default();
        this.instances = {};
        this.core = new Core();
        this._proxy = createProxy_1.default(this.options.proxy);
        plugin_1.default.getValidators().forEach(([validationType, ...validator]) => {
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
        this.schemaService = new SchemaService_1.default(schema, data, this.core);
        this.validationService = new ValidationService_1.default(this.state, schema, this.core);
        // enable i18n error-translations
        this.validationService.setErrorHandler(error => i18n_1.default.translateError(this, error));
        // merge given data with template data
        data = this.schemaService.addDefaultData(data, schema);
        this.dataService = new DataService_1.default(this.state, data);
        // start validation after data has been updated
        this.onAfterDataUpdate = this.dataService
            .on(DataService_1.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate.bind(this));
        // run initial validation
        this.validateAll();
    }
    /** reset undo history */
    resetUndoRedo() {
        this.dataService.resetUndoRedo();
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
        eachInstance(this.getInstances(), (pointer, editor) => {
            editor.setActive(!this.disabled);
        });
    }
    /** returns the editors active state */
    isActive() {
        return !this.disabled;
    }
    /**
     * Helper to create dom elements via mithril syntax
     *
     * @param  {String} selector    - a css selector describing the desired element
     * @param  {Object} attributes  - a map of dom attribute:value of the element (reminder className = class)
     * @return the resulting dom-element (not attached)
     */
    createElement(selector, attributes) {
        return createElement_1.default(selector, attributes);
    }
    /**
     * @throws
     * The only entry point to create editors.
     * Use in application and from editors to create (delegate) child editors
     *
     * @param  pointer - data pointer to editor in current state
     * @param  element - parent element of create editor. Will be appended automatically
     * @param  [options] - individual editor options
     * @return created editor-instance or undefined;
     */
    createEditor(pointer, element, options) {
        if (pointer == null || element == null) {
            throw new Error(`Missing ${pointer == null ? "pointer" : "element"} in createEditor`);
        }
        assertValidPointer(pointer);
        // merge schema["editron:ui"] object with options. options precede
        const instanceOptions = Object.assign({
            id: getID_1.default(pointer),
            pointer,
            disabled: this.disabled
        }, UISchema_1.default.copyOptions(pointer, this), options);
        // find a matching editor
        const Editor = selectEditor_1.default(this.getEditors(), pointer, this, instanceOptions);
        if (Editor === false) {
            return undefined;
        }
        if (Editor === undefined) {
            console.warn(`Could not resolve an editor for ${pointer}`, this.schema().get(pointer));
            return undefined;
        }
        // iniitialize editor and save editor in list
        // @TODO loose reference to destroyed editors
        const editor = new Editor(pointer, this, instanceOptions);
        element.appendChild(editor.toElement());
        editor.setActive(!this.disabled);
        this.addInstance(pointer, editor);
        return editor;
    }
    /**
     * Call this method, when your editor is destroyed, deregistering its instance on editron
     * @param  {Instance} editor    - editor instance to remove
     */
    removeInstance(editor) {
        // controller inserted child and removes it here again
        const $element = editor.toElement();
        if ($element.parentNode) {
            $element.parentNode.removeChild($element);
        }
        removeEditorFrom(this.instances, editor);
    }
    addInstance(pointer, editor) {
        this.instances[pointer] = this.instances[pointer] || [];
        this.instances[pointer].push(editor);
    }
    /**
     * Request to insert a child item (within the data) at the given pointer. If multiple options are present, a
     * dialogue is opened to let the user select the appropriate type of child (oneof).
     * @param {String} pointer  - to array on which to insert the child
     * @param {Number} index    - index within array, where the child should be inserted (does not replace). Default: 0
     */
    addItemTo(pointer, index = 0) {
        addItem_1.default(this.data(), this.schema(), pointer, index);
        LocationService_1.default.goto(gson_pointer_1.default.join(pointer, index, true));
    }
    /**
     * Get or update data from a pointer
     * @return {DataService} DataService instance
     */
    data() { return this.dataService; }
    /**
     * Get the json schema from a pointer or replace the schema
     * @return {SchemaService} SchemaService instance
     */
    schema() { return this.schemaService; }
    /**
     * @return {Foxy} proxy instance
     */
    proxy() { return this._proxy; }
    /**
     * Validate data based on a json-schema and register to generated error events
     *
     * - start validation
     * - get your current errors at _pointer_
     * - hook into validation to receive your errors at _pointer_
     *
     * @return {ValidationService} ValidationService instance
     */
    validator() { return this.validationService; }
    /**
     * ## Usage
     *  goto(pointer) - Jump to given json pointer. This might also load another page if the root property changes.
     *  setCurrent(pointer) - Update current pointer, but do not jump to target
     *
     * @return {Object} LocationService-Singleton
     */
    location() { return LocationService_1.default; }
    /**
     * Set the application data
     * @param {Any} data    - json data matching registered json-schema
     */
    setData(data) {
        data = this.schemaService.addDefaultData(data);
        this.data().set("#", data);
    }
    /**
     * @param {JsonPointer} [pointer="#"] - location of data to fetch. Defaults to root (all) data
     * @return {Any} data at the given location
     */
    getData(pointer = "#") {
        return this.data().get(pointer);
    }
    /**
     * @return {Array} registered editor-widgets used to edit the json-data
     */
    getEditors() { return this.editors; }
    /**
     * @return {Object} currently active editor/widget instances
     */
    getInstances() { return this.instances; }
    /**
     * @param {String} format       - value of _format_
     * @param {Function} validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addFormatValidator(format, validator) {
        addValidator_1.default.format(this.core, format, validator);
    }
    /**
     * @param {String} datatype     - JSON-Schema datatype to register attribute, e.g. "string" or "object"
     * @param {String} keyword      - custom keyword
     * @param {Function} validator  - validator function receiving (core, schema, value, pointer). Return `undefined`
     *      for a valid _value_ and an object `{type: "error", message: "err-msg", data: { pointer }}` as error. May
     *      als return a promise
     */
    addKeywordValidator(datatype, keyword, validator) {
        addValidator_1.default.keyword(this.core, datatype, keyword, validator);
    }
    /**
     * Change the new schema for the current data
     * @param {Object} schema   - a valid json-schema
     */
    setSchema(schema) {
        schema = UISchema_1.default.extendSchema(schema);
        this.validationService.set(schema);
        this.schemaService.setSchema(schema);
    }
    // update data in schema service
    update() {
        this.schemaService.setData(this.dataService.get());
    }
    /**
     * Starts validation of current data
     */
    validateAll() {
        setTimeout(() => this.destroyed !== true && this.validationService.validate(this.dataService.getDataByReference()));
    }
    /**
     * Destroy the editor, its widgets and services
     */
    destroy() {
        // delete all editors
        Object.keys(this.instances).forEach(pointer => {
            this.instances[pointer] && this.instances[pointer].forEach(instance => instance.destroy());
        });
        this.destroyed = true;
        this.instances = {};
        this.schemaService.destroy();
        this.validationService.destroy();
        this.dataService.destroy();
        this.dataService.off(DataService_1.EVENTS.AFTER_UPDATE, this.onAfterDataUpdate);
    }
    onAfterDataUpdate({ pointer }) {
        this.update();
        // @feature selective-validation
        if (pointer.includes("/")) {
            // @attention validate parent-object or array, in order to support parent-validators.
            // Any higher validators will still be ignore
            pointer = pointer.replace(/\/[^/]+$/, "");
        }
        setTimeout(() => {
            const data = this.dataService.getDataByReference();
            this.destroyed !== true && this.validationService.validate(data, pointer);
        });
    }
    changePointer(newPointer, editor) {
        removeEditorFrom(this.instances, editor);
        this.addInstance(newPointer, editor);
    }
}
exports.default = Controller;


/***/ }),

/***/ "./src/components/container/index.ts":
/*!*******************************************!*\
  !*** ./src/components/container/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHILD_CONTAINER_SELECTOR = void 0;
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const containerheader_1 = __importDefault(__webpack_require__(/*! ../containerheader */ "./src/components/containerheader/index.ts"));
const containererrors_1 = __importDefault(__webpack_require__(/*! ../containererrors */ "./src/components/containererrors/index.ts"));
const containerdescription_1 = __importDefault(__webpack_require__(/*! ../containerdescription */ "./src/components/containerdescription/index.ts"));
exports.CHILD_CONTAINER_SELECTOR = ".editron-container__children";
/**
 * @view ContainerView
 * A Container Component is used for any non-value like object or arrays. They hold other values. This group may expose
 * a group-title and errors. Any childnodes must go to the container '.jed-container__children'.
 */
exports.default = {
    getChildContainer($element) {
        const $childContainer = $element.querySelector(exports.CHILD_CONTAINER_SELECTOR);
        if ($childContainer == null) {
            throw new Error("Container-Component hast not yet been rendered");
        }
        return $childContainer;
    },
    view(vnode) {
        return [
            vnode.attrs.hideTitle === true ? null : mithril_1.default(containerheader_1.default, vnode.attrs),
            mithril_1.default(containerdescription_1.default, vnode.attrs),
            vnode.children,
            mithril_1.default(containererrors_1.default, vnode.attrs),
            mithril_1.default(exports.CHILD_CONTAINER_SELECTOR)
        ];
    }
};


/***/ }),

/***/ "./src/components/containerdescription/index.ts":
/*!******************************************************!*\
  !*** ./src/components/containerdescription/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const populated_1 = __importDefault(__webpack_require__(/*! ../../utils/populated */ "./src/utils/populated.ts"));
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
exports.default = {
    view(vnode) {
        return populated_1.default(vnode.attrs.description, mithril_1.default(".editron-container__description.mmf-meta", mithril_1.default.trust(vnode.attrs.description)));
    }
};


/***/ }),

/***/ "./src/components/containererrors/index.ts":
/*!*************************************************!*\
  !*** ./src/components/containererrors/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
exports.default = {
    view(vnode) {
        if (Array.isArray(vnode.attrs.errors) === false || vnode.attrs.errors.length === 0) {
            return null;
        }
        return mithril_1.default("ul.editron-container__errors", vnode.attrs.errors.map(error => mithril_1.default("li", { "class": `is-${error.severity || "error"}` }, error.message)));
    }
};


/***/ }),

/***/ "./src/components/containerheader/index.ts":
/*!*************************************************!*\
  !*** ./src/components/containerheader/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const getID_1 = __importDefault(__webpack_require__(/*! ../../utils/getID */ "./src/utils/getID.ts"));
const populated_1 = __importDefault(__webpack_require__(/*! ../../utils/populated */ "./src/utils/populated.ts"));
function getClass(hasAction, { title, icon, disabled }) {
    let classname = `${title ? "withTitle" : "noTitle"}`;
    classname += ` ${hasAction ? "withActions" : "noActions"}`;
    classname += ` ${icon ? "withIcon" : "noIcon"}`;
    classname += disabled ? " is-disabled" : "";
    return classname;
}
exports.default = {
    view(vnode) {
        const attrs = {
            icon: "",
            title: "",
            disabled: false,
            ...vnode.attrs
        };
        const hasAction = (attrs.onadd || attrs.ondelete || attrs.onmoveup || attrs.onmovedown) != null;
        return mithril_1.default(".editron-container__header", {
            "class": getClass(hasAction, attrs),
            name: getID_1.default(attrs.pointer)
        }, mithril_1.default(".editron-container__title", populated_1.default(vnode.attrs.icon, mithril_1.default("i.mmf-icon", attrs.icon)), (!attrs.hideTitle) && mithril_1.default("h2", attrs.title)), mithril_1.default(".editron-container__actions", attrs.onmoveup ? mithril_1.default("i.mmf-icon.mmf-icon--add", {
            onclick: attrs.onmoveup
        }, "arrow_upward") : "", attrs.onmovedown ? mithril_1.default("i.mmf-icon.mmf-icon--add", {
            onclick: attrs.onmovedown
        }, "arrow_downward") : "", attrs.onadd ? mithril_1.default("i.mmf-icon.mmf-icon--add", {
            onclick: () => attrs.onadd()
        }, "add") : "", attrs.ondelete ? mithril_1.default("i.mmf-icon.mmf-icon--delete", {
            onclick: attrs.ondelete
        }, "delete") : ""));
    }
};


/***/ }),

/***/ "./src/components/overlay/index.ts":
/*!*****************************************!*\
  !*** ./src/components/overlay/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const mithril_material_forms_1 = __importDefault(__webpack_require__(/*! mithril-material-forms */ "./node_modules/mithril-material-forms/index.js"));
const { button: Button } = mithril_material_forms_1.default;
/**
 * Content overlay
 */
exports.default = {
    view(vnode) {
        return mithril_1.default("section.ui-overlay__card", {
            "class": vnode.attrs.fullscreen ? "ui-overlay__card--fullscreen" : null
        }, vnode.attrs.header ? mithril_1.default(".ui-card__header", mithril_1.default("h1", vnode.attrs.header)) : "", mithril_1.default(".ui-card__content", {
            oncreate: (contentNode) => contentNode.dom.appendChild(vnode.attrs.container)
        }), mithril_1.default(".ui-card__footer", mithril_1.default(Button, {
            onClick: vnode.attrs.onAbort
        }, vnode.attrs.titleAbort), vnode.attrs.showSave ? mithril_1.default(Button, {
            onClick: vnode.attrs.onSave
        }, "Speichern") : ""));
    }
};


/***/ }),

/***/ "./src/components/overlayselecttiles/Tile.ts":
/*!***************************************************!*\
  !*** ./src/components/overlayselecttiles/Tile.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
exports.default = {
    view(vnode) {
        return mithril_1.default(".editron-form-box", {
            "data-value": vnode.attrs.value,
            "data-type": vnode.attrs.title.toLowerCase() // @uitest
        }, mithril_1.default(".editron-form-box__content", mithril_1.default(".editron-form-box__title", [
            vnode.attrs.icon ? mithril_1.default(".mmf-icon", vnode.attrs.icon) : "",
            vnode.attrs.title
        ]), mithril_1.default(".editron-form-box__description", vnode.attrs.description)));
    }
};


/***/ }),

/***/ "./src/components/overlayselecttiles/index.ts":
/*!****************************************************!*\
  !*** ./src/components/overlayselecttiles/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const Tile_1 = __importDefault(__webpack_require__(/*! ./Tile */ "./src/components/overlayselecttiles/Tile.ts"));
function getDataValue(node) {
    while (node.parentNode &&
        node.getAttribute("data-value") == null &&
        node.className.includes("editron-form-tiles") === false) {
        node = node.parentNode;
    }
    return node.getAttribute("data-value");
}
/**
 * @View mithril
 * Overlay content to pick options. Displayed as tiles
 * @type {Object}
 */
exports.default = {
    view(vnode) {
        const attrs = {
            value: 0,
            options: [{ title: "Keine Optionen angegeben", value: -1 }],
            onchange: Function.prototype,
            ...vnode.attrs
        };
        return mithril_1.default(".editron-form-tiles", {
            onclick: (e) => {
                const value = getDataValue(e.target);
                if (value != null) {
                    // @todo event-target being may be unexpected
                    attrs.onchange(value);
                }
            }
        }, attrs.options.map(tile => mithril_1.default(Tile_1.default, {
            active: attrs.value === tile.value,
            title: tile.title,
            icon: tile.icon,
            description: mithril_1.default.trust(tile.description),
            value: tile.value
        })));
    }
};


/***/ }),

/***/ "./src/editors/AbstractValueEditor.ts":
/*!********************************************!*\
  !*** ./src/editors/AbstractValueEditor.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const getID_1 = __importDefault(__webpack_require__(/*! ../utils/getID */ "./src/utils/getID.ts"));
const convert = {
    boolean(value) {
        if (value === "true") {
            return true;
        }
        if (value === "false") {
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
class AbstractValueEditor {
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
    constructor(pointer, controller, options) {
        this.pointer = pointer;
        this.controller = controller;
        const schema = controller.schema().get(pointer);
        options = Object.assign({
            viewModel: null,
            title: null,
            description: null,
            editorValueType: schema.enum ? "select" : schema.type,
            editorElementProperties: null
        }, options);
        // create main DOM-element for view-generation
        this.$element = controller.createElement(`.editron-value.editron-value--${options.editorValueType}`, Object.assign({
            name: getID_1.default(pointer)
        }, options.attrs));
        // use this model to generate the view. may be customized with `options.viewModel`
        this.viewModel = Object.assign({
            pointer,
            id: getID_1.default(pointer),
            title: options.title,
            description: options.description,
            value: controller.data().get(pointer),
            instantUpdate: options.instantUpdate,
            schema,
            options,
            errors: controller.validator().getErrorsAndWarnings(pointer),
            onfocus: () => controller.location().setCurrent(pointer),
            onblur: () => controller.location().blur(pointer),
            onchange: value => {
                if (convert[schema.type]) {
                    value = convert[schema.type](value);
                }
                this.setValue(value);
            }
        }, options.viewModel);
        // in order to deregister callbacks in destroy(), bind all callbacks to this class
        this.update = controller.data().observe(pointer, this.update.bind(this));
        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this));
        // this.render();
    }
    static editorOf(pointer, controller) {
        const schema = controller.schema().get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }
    getPointer() {
        return this.pointer;
    }
    updatePointer(pointer) {
        if (pointer === this.pointer) {
            return;
        }
        this.controller.changePointer(pointer, this);
        const oldPointer = this.pointer;
        this.$element.setAttribute("name", `editor-${pointer}`);
        this.pointer = pointer;
        this.viewModel.pointer = pointer;
        this.viewModel.id = getID_1.default(pointer);
        this.viewModel.onfocus = () => this.controller.location().setCurrent(pointer);
        this.controller.data().removeObserver(oldPointer, this.update);
        this.controller.validator().removeObserver(oldPointer, this.setErrors);
        this.controller.data().observe(pointer, this.update);
        this.controller.validator().observe(pointer, this.setErrors);
        this.update();
    }
    setActive(active = true) {
        this.viewModel.disabled = active === false;
        if (this.viewModel.options) {
            this.viewModel.options.disabled = this.viewModel.disabled;
        }
        this.render();
    }
    // update display value in view
    update() {
        this.viewModel.value = this.controller.data().get(this.pointer);
        this.viewModel.disabled = !this.controller.isActive();
        this.render();
    }
    // updates value in data-store
    setValue(value) {
        this.controller.data().set(this.pointer, value);
        // do not trigger rendering here. data-observer will notify change event
    }
    // adds an error to view
    setErrors(errors) {
        this.viewModel.errors = errors;
        this.render();
    }
    // update view
    render() {
        // this.$element.innerHTML = "<b>Overwrite AbstractValueEditor.render() to generate your view</b>";
        mithril_1.default.render(this.$element, mithril_1.default("b", "Overwrite AbstractValueEditor.render() to generate view"));
    }
    // return main dom element
    toElement() {
        return this.$element;
    }
    // destroy this editor
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.controller.removeInstance(this);
        // destroy this editor only once
        mithril_1.default.render(this.$element, mithril_1.default("i"));
        this.viewModel = null;
        this.controller.data().removeObserver(this.pointer, this.update);
        this.controller.validator().removeObserver(this.pointer, this.setErrors);
        this.$element = null;
    }
}
exports.default = AbstractValueEditor;


/***/ }),

/***/ "./src/editors/arrayeditor/ArrayItemEditor.ts":
/*!****************************************************!*\
  !*** ./src/editors/arrayeditor/ArrayItemEditor.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const gson_pointer_1 = __importDefault(__webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"));
const ArrayItemView_1 = __importStar(__webpack_require__(/*! ./ArrayItemView */ "./src/editors/arrayeditor/ArrayItemView.ts"));
const array_1 = __importDefault(__webpack_require__(/*! ../../utils/array */ "./src/utils/array.ts"));
class ArrayItemEditor {
    constructor(pointer, controller, options) {
        // eslint-disable-next-line max-len
        this.$element = controller.createElement(".editron-container__child.editron-container__child--array-item", options.attrs);
        this.controller = controller;
        const onadd = () => this.add();
        const onremove = () => this.remove();
        this.viewModel = {
            disabled: false,
            onadd,
            onremove,
            onmove: index => this.move(index),
            ...options
        };
        this.render();
        const $target = this.$element.querySelector(ArrayItemView_1.EditorTarget);
        this.editor = controller.createEditor(pointer, $target, {
            ondelete: onremove
        });
        this.updatePointer(pointer);
    }
    render() {
        mithril_1.default.render(this.$element, mithril_1.default(ArrayItemView_1.default, this.viewModel));
    }
    add() {
        array_1.default.addItem(this.parentPointer, this.controller, this.viewModel.index + 1);
    }
    remove() {
        array_1.default.removeItem(this.parentPointer, this.controller, this.viewModel.index);
    }
    move(to) {
        array_1.default.moveItem(this.parentPointer, this.controller, this.viewModel.index, to);
    }
    updatePointer(newPointer) {
        this.parentPointer = gson_pointer_1.default.join(newPointer, "..", true);
        this.viewModel.index = ArrayItemEditor.getIndex(newPointer);
        this.viewModel.pointer = newPointer;
        this.viewModel.length = this.controller.data().get(this.parentPointer).length;
        this.render();
        this.editor && this.editor.updatePointer(newPointer);
    }
    toElement() {
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
        this.editor && this.editor.destroy();
        this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
    }
    static getIndex(pointer) {
        const parentPointer = gson_pointer_1.default.join(pointer, "..");
        return parseInt(pointer.replace(`${parentPointer}/`, ""));
    }
}
exports.default = ArrayItemEditor;


/***/ }),

/***/ "./src/editors/arrayeditor/ArrayItemView.ts":
/*!**************************************************!*\
  !*** ./src/editors/arrayeditor/ArrayItemView.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorTarget = void 0;
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
exports.EditorTarget = ".editron-item";
exports.default = {
    view({ attrs }) {
        const { disabled = false } = attrs;
        const canRemove = attrs.minItems < attrs.length;
        const canAdd = attrs.maxItems > attrs.length;
        const showIndex = attrs.showIndex === true;
        return [
            // CONTROLS
            mithril_1.default("ul.editron-container__controls.editron-container__controls--child", {
                "class": disabled ? "is-disabled" : undefined
            }, (attrs.move === false || attrs.index === 0) ? "" : mithril_1.default("li", { onclick: () => !disabled && attrs.onmove(attrs.index - 1) }, mithril_1.default("i.mmf-icon", "arrow_upward")), (attrs.move === false || attrs.index === attrs.length - 1) ? "" : mithril_1.default("li", { onclick: () => !disabled && attrs.onmove(attrs.index + 1) }, mithril_1.default("i.mmf-icon", "arrow_downward")), (attrs.remove && attrs.onremove && canRemove) ? mithril_1.default("li", { onclick: () => !disabled && attrs.onremove(attrs.index) }, mithril_1.default("i.mmf-icon", "delete")) : "", (attrs.add && attrs.onadd && canAdd) ? mithril_1.default("li", { onclick: () => !disabled && attrs.onadd(attrs.index) }, mithril_1.default("i.mmf-icon", "add")) : ""),
            // TARGET CONTAINER FOR EDITOR
            mithril_1.default(exports.EditorTarget, {
                "data-index": `${attrs.index + 1} / ${attrs.length}`,
                "class": [
                    disabled ? "is-disabled" : "",
                    canRemove ? "has-remove-enabled" : "has-remove-disabled",
                    canAdd ? "has-add-enabled" : "has-add-disabled",
                    showIndex ? "with-index" : ""
                ].join(" ").trim()
            }),
            // ADD BUTTON
            (attrs.insert && canAdd) ? mithril_1.default(".editron-container__separator.mmf-row", mithril_1.default(".editron-container__button--add", {
                "class": disabled ? "is-disabled" : undefined,
                onclick: e => {
                    console.log("add", disabled);
                    if (!disabled) {
                        e.preventDefault();
                        attrs.onadd && attrs.onadd(attrs.index);
                    }
                }
            }, mithril_1.default("i.mmf-icon", "add_circle"))) : ""
        ];
    }
};


/***/ }),

/***/ "./src/editors/arrayeditor/index.ts":
/*!******************************************!*\
  !*** ./src/editors/arrayeditor/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayItemEditor_1 = __importDefault(__webpack_require__(/*! ./ArrayItemEditor */ "./src/editors/arrayeditor/ArrayItemEditor.ts"));
const diffpatch_1 = __importDefault(__webpack_require__(/*! ../../services/utils/diffpatch */ "./src/services/utils/diffpatch.ts"));
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const container_1 = __importStar(__webpack_require__(/*! ../../components/container */ "./src/components/container/index.ts"));
class ArrayEditor {
    constructor(pointer, controller, options) {
        // add id to element, since no other input-form is associated with this editor
        options.attrs = Object.assign({ id: options.id }, options.attrs);
        const schema = controller.schema().get(pointer);
        const data = controller.data().get(pointer);
        this.onAdd = (index = 0) => {
            if (!this.viewModel.disabled) {
                controller.addItemTo(this.pointer, index);
            }
        };
        const arrayHTMLElement = ".editron-container.editron-container--array.withAddButton";
        this.$element = controller.createElement(arrayHTMLElement, options.attrs);
        this.controller = controller;
        this.pointer = pointer;
        this.children = [];
        this.viewModel = {
            pointer,
            attrs: {},
            errors: controller.validator().getErrorsAndWarnings(pointer),
            onadd: this.onAdd,
            length: data.length,
            maxItems: schema.maxItems || Infinity,
            minItems: schema.minItems || 0,
            ...options,
            controls: {
                add: false,
                remove: true,
                move: true,
                insert: true,
                showIndex: options["array:index"] === true,
                maxItems: schema.maxItems || Infinity,
                minItems: schema.minItems || 0,
                ...options.controls
            }
        };
        this.updateView = controller.data().observe(pointer, this.updateView.bind(this));
        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this));
        this.render();
        this.$items = this.$element.querySelector(container_1.CHILD_CONTAINER_SELECTOR);
        this.rebuildChildren();
        this.updateControls();
    }
    static editorOf(pointer, controller) {
        const schema = controller.schema().get(pointer);
        return schema.type === "array";
    }
    setActive(active = true) {
        const disabled = active === false;
        this.viewModel.disabled = disabled;
        this.viewModel.controls.disabled = disabled;
        this.rebuildChildren();
        this.render();
    }
    update() {
        this.rebuildChildren();
        this.updateControls();
    }
    updatePointer(newPointer) {
        if (this.pointer === newPointer) {
            return;
        }
        this.controller.changePointer(newPointer, this);
        const previousPointer = this.pointer;
        this.pointer = newPointer;
        this.viewModel.pointer = newPointer;
        this.viewModel.attrs.id = newPointer;
        this.controller.data().removeObserver(previousPointer, this.updateView);
        this.controller.validator().removeObserver(previousPointer, this.setErrors);
        this.controller.data().observe(newPointer, this.updateView);
        this.controller.validator().observe(newPointer, this.setErrors);
        this.children.forEach((child, index) => child.updatePointer(`${newPointer}/${index}`));
        this.render();
    }
    updateView(changeEvent) {
        if (changeEvent && changeEvent.patch) {
            this.applyPatches(changeEvent.patch);
        }
        else {
            this.rebuildChildren();
        }
        this.updateControls();
    }
    applyPatches(patch) {
        // fetch a copy of the original list
        const originalChildren = this.children.slice(0);
        // and patch the current list
        diffpatch_1.default.patch(this.children, patch);
        // search for inserted children
        this.children.forEach((child, index) => {
            if (child instanceof ArrayItemEditor_1.default === false) {
                const pointer = `${this.pointer}/${index}`;
                const newChild = new ArrayItemEditor_1.default(pointer, this.controller, this.viewModel.controls);
                // @insert?
                this.children[index] = newChild;
            }
        });
        // search for removed children
        originalChildren.forEach(child => {
            if (this.children.indexOf(child) === -1) {
                child.destroy();
            }
        });
        // update view: move and inserts nodes
        const currentLocation = this.controller.location().getCurrent();
        for (let i = 0, l = this.children.length; i < l; i += 1) {
            const previousPointer = this.children[i].getPointer();
            const currentPointer = `${this.pointer}/${i}`;
            // update current location
            if (currentLocation.indexOf(previousPointer) === 0) {
                const editorLocation = currentLocation.replace(previousPointer, currentPointer);
                this.controller.location().setCurrent(editorLocation);
            }
            // update child views to match patched list
            this.children[i].updatePointer(currentPointer);
            if (this.$items.children[i] === this.children[i].toElement()) {
                // skip moving node, already in place
                continue;
            }
            else if (i + 1 < this.$items.children.length) {
                // move node to correct position
                this.$items.insertBefore(this.children[i].toElement(), this.$items.children[i + 1]);
            }
            else {
                // remaining nodes may be simply appended
                this.$items.appendChild(this.children[i].toElement());
            }
        }
    }
    rebuildChildren() {
        const data = this.controller.data().get(this.pointer);
        // delete all child editors
        this.children.forEach(editor => editor.destroy());
        this.children.length = 0;
        this.$items.innerHTML = "";
        // recreate child editors
        data.forEach((item, index) => {
            const childPointer = `${this.pointer}/${index}`;
            const childEditor = new ArrayItemEditor_1.default(childPointer, this.controller, this.viewModel.controls);
            this.$items.appendChild(childEditor.toElement());
            this.children.push(childEditor);
        });
    }
    updateControls() {
        this.viewModel.length = this.children.length;
        this.viewModel.onadd = this.viewModel.maxItems > this.children.length ? this.onAdd : false;
        this.$element.classList.toggle("has-add-disabled", this.viewModel.maxItems <= this.children.length);
        this.$element.classList.toggle("has-remove-disabled", this.viewModel.minItems >= this.children.length);
    }
    getPointer() {
        return this.pointer;
    }
    setErrors(errors) {
        this.viewModel.errors = errors;
        this.render();
    }
    render() {
        mithril_1.default.render(this.$element, mithril_1.default(container_1.default, this.viewModel));
    }
    toElement() {
        return this.$element;
    }
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.controller.removeInstance(this);
        this.viewModel = null;
        mithril_1.default.render(this.$element, mithril_1.default("i"));
        this.controller.data().removeObserver(this.pointer, this.updateView);
        this.controller.validator().removeObserver(this.pointer, this.setErrors);
        this.children.forEach(editor => editor.destroy());
    }
}
exports.default = ArrayEditor;


/***/ }),

/***/ "./src/editors/objecteditor/index.ts":
/*!*******************************************!*\
  !*** ./src/editors/objecteditor/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const textareaform_1 = __importDefault(__webpack_require__(/*! mithril-material-forms/components/textareaform */ "./node_modules/mithril-material-forms/components/textareaform/index.js"));
const OverlayService_1 = __importDefault(__webpack_require__(/*! ../../services/OverlayService */ "./src/services/OverlayService.ts"));
const container_1 = __importStar(__webpack_require__(/*! ../../components/container */ "./src/components/container/index.ts"));
function showJSON(controller, data, title) {
    const element = controller.createElement(".overlay__item.overlay__item--json");
    OverlayService_1.default.open(element, { ok: true, save: false });
    // render textarea after it is injected into dom, to correctly update textarea size
    mithril_1.default.render(element, mithril_1.default(textareaform_1.default, { title, value: JSON.stringify(data, null, 4) }));
}
class ObjectEditor {
    constructor(pointer, controller, options = {}) {
        // add id to element, since no other input-form is associated with this editor...
        // @todo ...except another editron-instance
        options.attrs = Object.assign({ id: options.id }, options.attrs);
        this.$element = controller.createElement(".editron-container.editron-container--object", options.attrs);
        this.pointer = pointer;
        this.options = options;
        this.controller = controller;
        this.childEditors = [];
        this.viewModel = {
            pointer,
            icon: options.icon,
            errors: [],
            attrs: {},
            hideTitle: options.hideTitle,
            title: options.title,
            description: options.description,
            ...options
        };
        if (options.addDelete) {
            this.viewModel.ondelete = () => controller.data().delete(pointer);
        }
        this.rebuildChildren = controller.data().observe(pointer, this.rebuildChildren.bind(this));
        this.setErrors = controller.validator().observe(pointer, this.setErrors.bind(this));
        this.setErrors(controller.validator().getErrorsAndWarnings(pointer));
        this.render();
        this.$children = this.$element.querySelector(container_1.CHILD_CONTAINER_SELECTOR);
        this.rebuildChildren();
    }
    static editorOf(pointer, controller) {
        const schema = controller.schema().get(pointer);
        return schema.type === "object";
    }
    updatePointer(pointer) {
        if (this.pointer === pointer || this.viewModel == null) {
            return;
        }
        this.controller.changePointer(pointer, this);
        const oldPointer = this.pointer;
        this.$element.id = pointer;
        const controller = this.controller;
        this.options.attrs.id = pointer;
        this.pointer = pointer;
        this.viewModel.pointer = pointer;
        if (this.options.addDelete) {
            this.viewModel.ondelete = () => controller.data().delete(pointer);
        }
        controller.data().removeObserver(oldPointer, this.rebuildChildren);
        controller.validator().removeObserver(oldPointer, this.setErrors);
        controller.data().observe(pointer, this.rebuildChildren);
        controller.validator().observe(pointer, this.setErrors);
        this.childEditors.forEach(editor => editor.updatePointer(`${this.pointer}/${editor._property}`));
        this.render();
    }
    /** de/activate this editors user-interaction */
    setActive(active = true) {
        this.viewModel.disabled = active === false;
        this.render();
    }
    update() {
        this.rebuildChildren();
    }
    rebuildChildren() {
        if (this.viewModel == null) {
            console.error(`destroyed ObjectEditor receives an update event
                - this may be invoked through oneOf-Editor`, this);
            return;
        }
        // fetch latest data
        const data = this.controller.data().get(this.pointer);
        // destroy child editor
        this.childEditors.forEach(editor => editor.destroy());
        this.childEditors.length = 0;
        // clear html
        this.$children.innerHTML = "";
        // rebuild children
        if (data) {
            Object.keys(data).forEach(property => {
                const editor = this.controller.createEditor(`${this.pointer}/${property}`, this.$children);
                if (editor) {
                    editor._property = property;
                    this.childEditors.push(editor);
                }
            });
        }
        this.render();
    }
    deleteProperty(property) {
        const data = this.controller.data().get(this.pointer);
        delete data[property];
        this.controller.data().set(this.pointer, data);
    }
    showProperty(property) {
        const propertyData = this.controller.data().get(`${this.pointer}/${property}`);
        showJSON(this.controller, propertyData, property);
    }
    setErrors(errors = []) {
        // if we receive errors here, a property may be missing (which should go to schema.getTemplate) or additional,
        // but prohibited properties exist. For the latter, add an option to show and/or delete the property. Within
        // arrays this should come per default, as the may insert in add items...
        this.viewModel.errors = errors.map(error => {
            if (error.code === "no-additional-properties-error") {
                const message = error.message;
                const property = error.data.property;
                return {
                    severity: error.type || "error",
                    message: mithril_1.default(".editron-error.editron-error--object-property", mithril_1.default("span", mithril_1.default.trust(message)), mithril_1.default("a.mmf-icon", { onclick: () => this.showProperty(property) }, "visibility"), mithril_1.default("a.mmf-icon", { onclick: () => this.deleteProperty(property) }, "clear"))
                };
            }
            return error;
        });
        this.render();
    }
    render() {
        mithril_1.default.render(this.$element, mithril_1.default(container_1.default, this.viewModel));
    }
    toElement() {
        return this.$element;
    }
    getPointer() {
        return this.pointer;
    }
    /** destroy editor, view and event-listeners */
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.controller.removeInstance(this);
        mithril_1.default.render(this.$element, mithril_1.default("i"));
        this.controller.data().removeObserver(this.pointer, this.rebuildChildren);
        this.controller.validator().removeObserver(this.pointer, this.setErrors);
        this.childEditors.forEach(editor => editor.destroy());
        this.childEditors.length = 0;
        this.$children.innerHTML = "";
        this.viewModel = null;
    }
}
exports.default = ObjectEditor;


/***/ }),

/***/ "./src/editors/oneofeditor/index.ts":
/*!******************************************!*\
  !*** ./src/editors/oneofeditor/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const gson_pointer_1 = __importDefault(__webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"));
const select_1 = __importDefault(__webpack_require__(/*! mithril-material-forms/components/select */ "./node_modules/mithril-material-forms/components/select/index.js"));
const getID_1 = __importDefault(__webpack_require__(/*! ../../utils/getID */ "./src/utils/getID.ts"));
const container_1 = __importStar(__webpack_require__(/*! ../../components/container */ "./src/components/container/index.ts"));
const UISchema_1 = __importDefault(__webpack_require__(/*! ../../utils/UISchema */ "./src/utils/UISchema.ts"));
const { UI_PROPERTY } = UISchema_1.default;
class OneOfEditor {
    constructor(pointer, controller, options) {
        const childSchema = controller.schema().get(pointer);
        // @special case. Our options lie in `schema.oneOfSchema`
        const schema = childSchema.oneOfSchema;
        const attrs = gson_pointer_1.default.get(schema, `#/${UI_PROPERTY}/attrs`);
        this.schema = schema;
        this.childSchema = childSchema;
        // ensure requried titles are set
        schema.oneOf.forEach((oneOfSchema, index) => (oneOfSchema.title = oneOfSchema.title || `${index}.`));
        this.$element = controller.createElement(".editron-container.editron-container--oneof", attrs);
        this.controller = controller;
        this.pointer = pointer;
        this.viewModel = {
            id: getID_1.default(pointer),
            pointer,
            options: schema.oneOf.map((oneOf, index) => ({ title: oneOf.title, value: index })),
            onchange: (oneOfIndex) => this.changeChild(schema.oneOf[oneOfIndex]),
            value: this.getIndexOf(childSchema),
            title: schema.title,
            description: schema.description
        };
        // use bubble=true to catch inner changes (changes are compared by a diff which may not notify parent pointer)
        this.update = controller.data().observe(pointer, this.update.bind(this), true);
        this.render();
        this.$childContainer = this.$element.querySelector(container_1.CHILD_CONTAINER_SELECTOR);
        this.rebuild();
    }
    static editorOf(pointer, controller, options) {
        const schema = controller.schema().get(pointer);
        return schema.oneOfSchema && !schema.items && !options.renderOneOf;
    }
    setActive(active = true) {
        this.viewModel.disabled = active === false;
        this.render();
    }
    changeChild(schema) {
        this.childEditor && this.childEditor.destroy();
        const data = this.controller.schema().getTemplate(schema);
        this.controller.data().set(this.pointer, data);
    }
    getIndexOf(currentSchema) {
        for (let i = 0, l = this.schema.oneOf.length; i < l; i += 1) {
            if (this.schema.oneOf[i].title === currentSchema.title) {
                return i;
            }
        }
        return 0;
    }
    updatePointer(newPointer) {
        const oldPointer = this.getPointer();
        if (oldPointer === newPointer) {
            return;
        }
        this.controller.changePointer(newPointer, this);
        this.pointer = newPointer;
        this.viewModel.id = getID_1.default(newPointer);
        this.viewModel.pointer = newPointer;
        this.$element.id = newPointer;
        this.controller.data().removeObserver(oldPointer, this.update);
        this.controller.data().observe(newPointer, this.update, true);
        if (this.childEditor) {
            this.childEditor.updatePointer(newPointer);
        }
        this.render();
    }
    update() {
        const currentSchema = this.controller.schema().get(this.pointer);
        delete currentSchema.oneOfSchema; // is recreated each time
        if (currentSchema.title === this.childSchema.title) {
            return;
        }
        this.viewModel.value = this.getIndexOf(currentSchema);
        this.childSchema = currentSchema;
        this.rebuild();
    }
    rebuild() {
        this.childEditor && this.childEditor.destroy();
        this.$childContainer.innerHTML = "";
        this.childEditor = this.controller.createEditor(this.pointer, this.$childContainer, {
            // @attention this is very important or else we create an infinite loop through selectEditor
            renderOneOf: true
        });
        this.render();
    }
    render() {
        mithril_1.default.render(this.$element, mithril_1.default(container_1.default, this.viewModel, mithril_1.default(".editron-value", mithril_1.default(select_1.default, this.viewModel))));
    }
    toElement() {
        return this.$element;
    }
    getPointer() {
        return this.pointer;
    }
    destroy() {
        if (this.viewModel == null) {
            return;
        }
        this.controller.removeInstance(this);
        this.viewModel = null;
        mithril_1.default.render(this.$element, "i");
        this.controller.data().removeObserver(this.pointer, this.update);
    }
}
exports.default = OneOfEditor;


/***/ }),

/***/ "./src/editors/valueeditor/View.ts":
/*!*****************************************!*\
  !*** ./src/editors/valueeditor/View.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const checkboxform_1 = __importDefault(__webpack_require__(/*! mithril-material-forms/components/checkboxform */ "./node_modules/mithril-material-forms/components/checkboxform/index.js"));
const selectform_1 = __importDefault(__webpack_require__(/*! mithril-material-forms/components/selectform */ "./node_modules/mithril-material-forms/components/selectform/index.js"));
const textareaform_1 = __importDefault(__webpack_require__(/*! mithril-material-forms/components/textareaform */ "./node_modules/mithril-material-forms/components/textareaform/index.js"));
const inputform_1 = __importDefault(__webpack_require__(/*! mithril-material-forms/components/inputform */ "./node_modules/mithril-material-forms/components/inputform/index.js"));
const UISchema_1 = __importDefault(__webpack_require__(/*! ../../utils/UISchema */ "./src/utils/UISchema.ts"));
const Component = {
    view({ attrs }) {
        const { schema } = attrs;
        const { options = {} } = attrs.options;
        const config = {
            type: schema.type,
            title: schema.title,
            description: schema.description,
            onblur: attrs.onblur || Function.prototype,
            onfocus: attrs.onfocus || Function.prototype,
            onchange: attrs.onchange || Function.prototype,
            ...attrs,
            ...options
        };
        if (schema.enum && schema.enum.length > 0) {
            config.options = UISchema_1.default.enumOptions(schema);
            return mithril_1.default(selectform_1.default, config);
        }
        if (schema.type === "boolean") {
            return mithril_1.default(checkboxform_1.default, config);
        }
        if (schema.type === "string" && schema.format === "html") {
            return mithril_1.default(textareaform_1.default, config);
        }
        if (schema.type === "string" && schema.format === "textarea") {
            config.rows = options["textarea:rows"] || 1;
            return mithril_1.default(textareaform_1.default, config);
        }
        return mithril_1.default(inputform_1.default, config);
    }
};
exports.default = Component;


/***/ }),

/***/ "./src/editors/valueeditor/index.ts":
/*!******************************************!*\
  !*** ./src/editors/valueeditor/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const View_1 = __importDefault(__webpack_require__(/*! ./View */ "./src/editors/valueeditor/View.ts"));
const AbstractValueEditor_1 = __importDefault(__webpack_require__(/*! ../AbstractValueEditor */ "./src/editors/AbstractValueEditor.ts"));
class ValueEditor extends AbstractValueEditor_1.default {
    static editorOf(pointer, controller) {
        const schema = controller.schema().get(pointer);
        return schema.type !== "object" && schema.type !== "array";
    }
    constructor(pointer, controller, options = {}) {
        super(pointer, controller, options);
        this.render();
    }
    render() {
        mithril_1.default.render(this.$element, mithril_1.default(View_1.default, this.viewModel));
    }
}
exports.default = ValueEditor;


/***/ }),

/***/ "./src/plugin/index.ts":
/*!*****************************!*\
  !*** ./src/plugin/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const editors = [];
const validators = [];
exports.default = {
    editor(constructor) {
        console.log(`register editor ${constructor.name}`);
        editors.push(constructor);
    },
    // format validator
    validator(keyword, value, validator) {
        validators.push(["format", value, validator]);
    },
    keywordValidator(datatype, property, validator) {
        validators.push(["keyword", datatype, property, validator]);
    },
    getEditors() {
        return editors;
    },
    getValidators() {
        return validators;
    }
};


/***/ }),

/***/ "./src/services/DataService.ts":
/*!*************************************!*\
  !*** ./src/services/DataService.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = void 0;
const gson_pointer_1 = __importDefault(__webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"));
const mitt_1 = __importDefault(__webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js"));
const diffpatch_1 = __importDefault(__webpack_require__(/*! ./utils/diffpatch */ "./src/services/utils/diffpatch.ts"));
const copy_1 = __importDefault(__webpack_require__(/*! ./utils/copy */ "./src/services/utils/copy.ts"));
const isRootPointer_1 = __importDefault(__webpack_require__(/*! ./utils/isRootPointer */ "./src/services/utils/isRootPointer.ts"));
const dataReducer_1 = __importDefault(__webpack_require__(/*! ./reducers/dataReducer */ "./src/services/reducers/dataReducer.ts"));
const actions_1 = __webpack_require__(/*! ./reducers/actions */ "./src/services/reducers/actions.ts");
const getParentPointer_1 = __importDefault(__webpack_require__(/*! ./utils/getParentPointer */ "./src/services/utils/getParentPointer.ts"));
const getTypeOf_1 = __importDefault(__webpack_require__(/*! json-schema-library/lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js"));
const getPatchesPerPointer_1 = __importDefault(__webpack_require__(/*! ./utils/getPatchesPerPointer */ "./src/services/utils/getPatchesPerPointer.ts"));
const State_1 = __importDefault(__webpack_require__(/*! ./State */ "./src/services/State.ts"));
const DEBUG = false;
exports.EVENTS = {
    /** called before starting data update */
    BEFORE_UPDATE: "beforeUpdate",
    /** called after data udpate was performed */
    AFTER_UPDATE: "afterUpdate",
    FINAL_UPDATE: "finalUpdate"
};
/**
 * Read and modify form data and notify observers
 *
 * @param {State} state     - current state/store of application
 * @param {Any} data        - current application data (form)
 */
class DataService {
    constructor(state, data) {
        if (!(state instanceof State_1.default)) {
            throw new Error("Given state in DataService must be of instance 'State'");
        }
        this.observers = {};
        this.emitter = mitt_1.default();
        this.EVENTS = exports.EVENTS;
        this.id = "data";
        this.state = state;
        this.state.register(this.id, dataReducer_1.default);
        let lastUpdate = {};
        // improved version - supporting multiple patches
        this.onStateChanged = () => {
            const current = this.state.get(this.id);
            const patches = getPatchesPerPointer_1.default(lastUpdate, current.data.present);
            if (patches.length === 0) {
                DEBUG && console.info("DataService abort update event -- nothing changed");
                return;
            }
            DEBUG && console.log("Patch locations", patches.map(delta => delta.pointer));
            for (let i = 0, l = patches.length; i < l; i += 1) {
                const eventLocation = patches[i].pointer;
                const parentData = this.getDataByReference(eventLocation);
                const parentDataType = getTypeOf_1.default(parentData);
                this.emit(exports.EVENTS.AFTER_UPDATE, eventLocation, { type: parentDataType, patch: patches[i].patch });
                this.bubbleObservers(eventLocation, { type: parentDataType, patch: patches[i].patch });
            }
            this.emitter.emit(exports.EVENTS.FINAL_UPDATE, patches);
            lastUpdate = current.data.present;
        };
        this.state.subscribe(this.id, this.onStateChanged);
        if (data !== undefined) {
            this.set("#", data);
            this.resetUndoRedo();
        }
    }
    resetUndoRedo() {
        this.state.get(this.id).data.past.length = 0;
    }
    destroy() {
        this.state.unsubscribe(this.id, this.onStateChanged);
        this.state.unregister(this.id);
    }
    /**
     * Get a copy of current data from the requested _json-pointer_
     * @param {JsonPointer} [pointer="#"]  - data to fetch. Defaults to _root_
     * @returns {Any} data, associated with _pointer_
     */
    get(pointer = "#") {
        const value = this.getDataByReference(pointer);
        return copy_1.default(value);
    }
    getDataByReference(pointer = "#") {
        // eslint-disable-next-line no-invalid-this
        return gson_pointer_1.default.get(this.state.get(this.id).data.present, pointer);
    }
    /**
     * Change data at the given _pointer_
     * @param {JsonPointer}  pointer    - data location to modify
     * @param {Any}  value              - new value at pointer
     * @param {Boolean} [isSynched]
     */
    set(pointer, value, isSynched = false) {
        if (this.isValid(pointer) === false) {
            throw new Error(`Pointer ${pointer} does not exist in data`);
        }
        const currentValue = this.getDataByReference(pointer);
        if (diffpatch_1.default.diff(currentValue, value) == null) {
            DEBUG && console.info("DataService abort update -- value not changed");
            return;
        }
        this.emit(exports.EVENTS.BEFORE_UPDATE, pointer, { action: actions_1.ActionTypes.DATA_SET, isSynched });
        this.state.dispatch(actions_1.ActionCreators.setData(pointer, value, currentValue, isSynched));
        if (pointer === "#" && isSynched === false) {
            // do not add root changes to undo
            this.state.get(this.id).data.past.pop();
        }
    }
    /**
     * Delete data at the given _pointer_
     * @param  {JsonPointer} pointer    - data location to delete
     */
    delete(pointer) {
        if (isRootPointer_1.default(pointer)) {
            throw new Error("Can not remove root data via delete. Use set(\"#/\", {}) instead.");
        }
        const key = pointer.split("/").pop();
        const parentPointer = getParentPointer_1.default(pointer);
        const data = this.get(parentPointer);
        gson_pointer_1.default.delete(data, key);
        this.set(parentPointer, data);
    }
    undoCount() {
        return this.state.get(this.id).data.past.length;
    }
    redoCount() {
        return this.state.get(this.id).data.future.length;
    }
    undo() {
        this.emit(exports.EVENTS.BEFORE_UPDATE, "#", { action: actions_1.ActionTypes.UNDO });
        this.state.dispatch(actions_1.ActionCreators.undo());
    }
    redo() {
        this.emit(exports.EVENTS.BEFORE_UPDATE, "#", { action: actions_1.ActionTypes.REDO });
        this.state.dispatch(actions_1.ActionCreators.redo());
    }
    on(eventType, callback) {
        if (eventType === undefined) {
            throw new Error("Missing event type in DataService.on");
        }
        this.emitter.on(eventType, callback);
        return callback;
    }
    off(...args) {
        this.emitter.off(...args);
    }
    emit(eventType, pointer, data) {
        this.emitter.emit(eventType, createEventObject(pointer, data));
    }
    observe(pointer, callback, bubbleEvents = false) {
        callback.bubbleEvents = bubbleEvents;
        this.observers[pointer] = this.observers[pointer] || [];
        this.observers[pointer].push(callback);
        return callback;
    }
    removeObserver(pointer, callback) {
        if (this.observers[pointer] && this.observers[pointer].length > 0) {
            this.observers[pointer] = this.observers[pointer].filter(cb => cb !== callback);
        }
    }
    notify(pointer, event) {
        if (this.observers[pointer] == null || this.observers[pointer].length === 0) {
            return;
        }
        const observers = this.observers[pointer];
        for (let i = 0, l = observers.length; i < l; i += 1) {
            if (observers[i].bubbleEvents === true || event.pointer === pointer) {
                observers[i](event);
            }
        }
    }
    bubbleObservers(pointer, data) {
        const eventObject = createEventObject(pointer, data);
        const frags = gson_pointer_1.default.split(pointer);
        while (frags.length) {
            this.notify(gson_pointer_1.default.join(frags, true), eventObject);
            frags.length -= 1;
        }
        this.notify("#", eventObject);
    }
    isValid(pointer) {
        return isRootPointer_1.default(pointer) || gson_pointer_1.default.get(this.getDataByReference(), pointer) !== undefined;
    }
}
exports.default = DataService;
function createEventObject(pointer, data) {
    const parentPointer = getParentPointer_1.default(pointer);
    return Object.assign(data, {
        pointer,
        parentPointer
    });
}


/***/ }),

/***/ "./src/services/LocationService.ts":
/*!*****************************************!*\
  !*** ./src/services/LocationService.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mitt_1 = __importDefault(__webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js"));
const gson_pointer_1 = __importDefault(__webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"));
const uistate_1 = __importDefault(__webpack_require__(/*! ./uistate */ "./src/services/uistate/index.ts"));
const getID_1 = __importDefault(__webpack_require__(/*! ../utils/getID */ "./src/utils/getID.ts"));
const DELAY = 25;
const emitter = mitt_1.default();
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
const LocationService = {
    PAGE_EVENT: "page",
    TARGET_EVENT: "target",
    // update page and target pointer
    goto(targetPointer) {
        const path = gson_pointer_1.default.split(targetPointer);
        if (path.length === 0 || (path.length === 1 && path[0] === "")) {
            return;
        }
        const nextPage = path[0];
        const currentPage = uistate_1.default.getCurrentPage();
        if (currentPage !== nextPage) {
            uistate_1.default.setCurrentPage(gson_pointer_1.default.join(nextPage, true));
        }
        uistate_1.default.setCurrentPointer(gson_pointer_1.default.join(targetPointer, true));
        this.focus();
    },
    // set target pointer
    setCurrent(pointer) {
        if (pointer !== this.getCurrent()) {
            uistate_1.default.setCurrentPointer(pointer);
            emitter.emit("focus", pointer);
        }
    },
    getCurrent() {
        return uistate_1.default.getCurrentPointer();
    },
    // focus target pointer
    focus() {
        clearTimeout(this.timeout);
        const pointer = uistate_1.default.getCurrentPointer();
        const id = getID_1.default(pointer);
        const targetElement = document.getElementById(id);
        // console.log(`pointer ${pointer} - id ${id}`, targetElement);
        if (targetElement == null) {
            // console.log(`Location:focus - target ${pointer} (id ${id}) not found`);
            return;
        }
        // const targetPosition = targetElement.getBoundingClientRect().top
        this.timeout = setTimeout(() => {
            // try scrolling to header-row in container (low height) to have a more robust scroll target position
            let scrollTarget = targetElement.querySelector(".editron-container > .editron-container__header");
            scrollTarget = (scrollTarget == null || scrollTarget.offsetParent === null) ? targetElement : scrollTarget;
            scrollTarget.scrollIntoView();
            // @todo only fire focus event?
            targetElement.dispatchEvent(new Event("focus"));
            targetElement.focus && targetElement.focus();
        }, DELAY);
    },
    blur(pointer) {
        if (uistate_1.default.getCurrentPointer() !== pointer) {
            return;
        }
        uistate_1.default.setCurrentPointer("");
        emitter.emit("blur", pointer);
    },
    // @ts-ignore
    on: (...args) => emitter.on(...args),
    // @ts-ignore
    off: (...args) => emitter.off(...args)
};
// @ts-ignore
uistate_1.default.on(uistate_1.default.EVENTS.CURRENT_PAGE_EVENT, pointer => emitter.emit(LocationService.PAGE_EVENT, pointer));
// @ts-ignore
uistate_1.default.on(uistate_1.default.EVENTS.CURRENT_POINTER_EVENT, pointer => emitter.emit(LocationService.TARGET_EVENT, pointer));
exports.default = LocationService;


/***/ }),

/***/ "./src/services/OverlayService.ts":
/*!****************************************!*\
  !*** ./src/services/OverlayService.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint no-use-before-define: 0 */
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const overlay_1 = __importDefault(__webpack_require__(/*! ../components/overlay */ "./src/components/overlay/index.ts"));
const createElement_1 = __importDefault(__webpack_require__(/*! ../utils/createElement */ "./src/utils/createElement.ts"));
const uistate_1 = __importDefault(__webpack_require__(/*! ./uistate */ "./src/services/uistate/index.ts"));
// @ts-ignore
uistate_1.default.on(uistate_1.default.EVENTS.OVERLAY_EVENT, (value = {}) => OverlayService.onChange(value.element, value.options));
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
        // @ts-ignore
        uistate_1.default.setOverlay({
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
        uistate_1.default.setOverlay();
        // must destroy component for reuse
        mithril_1.default.render(this.getElement(), mithril_1.default("i"));
    },
    onChange(container, options) {
        if (container == null) {
            const $el = this.getElement();
            $el.parentNode && $el.parentNode.removeChild($el);
            return;
        }
        const $el = this.getElement();
        container.classList.add("overlay__item");
        mithril_1.default.render($el, mithril_1.default(overlay_1.default, {
            container,
            fullscreen: options.fullscreen,
            showSave: options.save,
            titleAbort: options.ok ? "OK" : "Abbrechen",
            onSave: () => {
                options.onSave();
                this.close();
            },
            onAbort: () => this.close(),
            onremove: () => options.onAbort()
        }));
        document.body.appendChild($el);
    },
    getElement() {
        if (this.$element == null) {
            this.$element = createElement_1.default(".ui-overlay");
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
exports.default = OverlayService;


/***/ }),

/***/ "./src/services/SchemaService.ts":
/*!***************************************!*\
  !*** ./src/services/SchemaService.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const copy_1 = __importDefault(__webpack_require__(/*! ./utils/copy */ "./src/services/utils/copy.ts"));
const json_schema_library_1 = __importDefault(__webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js"));
const json_schema_library_2 = __importDefault(__webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js"));
const { getChildSchemaSelection } = json_schema_library_1.default;
const { JsonEditor: Core } = json_schema_library_1.default.cores;
/**
 * Manages json-schema interactions and adds caching of reoccuring json-schema requests
 *
 * @param schema       - json-schema
 * @param [data={}]    - data corresponding to json-schema
 * @param [core={}]      - instance of json-schema-library Core
 */
class SchemaService {
    constructor(schema = { type: "object" }, data = {}, core = new Core()) {
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
     * @param  schema
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
     *
     * @param {Any} data    - latest root data corresponding to stored json-schema
     */
    setData(data) {
        this.data = this.addDefaultData(data);
        this.resetCache();
    }
    /**
     * Set or change the application schema
     * @param {Object} schema
     */
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
            const result = json_schema_library_2.default.getSchema(this.core, pointer, data, this.schema);
            return copy_1.default(result);
        }
        if (this.cache[pointer] === undefined) {
            const result = json_schema_library_2.default.getSchema(this.core, pointer, this.data, this.schema);
            if (result.variableSchema === true) {
                // @special case: do not cache dynamic schema object (oneOf)
                return result;
            }
            this.cache[pointer] = copy_1.default(result);
        }
        return this.cache[pointer];
    }
    destroy() {
        this.setData(null);
        this.setSchema(null);
    }
}
exports.default = SchemaService;


/***/ }),

/***/ "./src/services/State.ts":
/*!*******************************!*\
  !*** ./src/services/State.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
const mitt_1 = __importDefault(__webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js"));
const FLAG_CHANGED = "hasChanged";
class State {
    constructor() {
        this.FLAG_CHANGED = FLAG_CHANGED;
        this.FLAG_CHANGED = FLAG_CHANGED;
        this.reducers = {
            action: (state, action) => action
        };
        this.emitter = mitt_1.default();
        this.store = redux_1.createStore(() => { }); // eslint-disable-line @typescript-eslint/no-empty-function
        this.store.subscribe(() => this.onChange(this.store.getState()));
    }
    onChange(currentState) {
        Object
            .keys(currentState)
            .forEach(id => {
            const subState = currentState[id];
            if (subState[FLAG_CHANGED] != null && subState[FLAG_CHANGED] !== false) {
                this.emitter.emit(id, subState);
            }
        });
    }
    // eslint-disable-next-line
    // http://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
    register(id, reducer) {
        if (this.reducers[id]) {
            throw new Error(`A reducer with id ${id} is already registered`);
        }
        this.reducers[id] = reducer;
        this.store.replaceReducer(redux_1.combineReducers(this.reducers));
    }
    unregister(id) {
        // @todo either remove reducers and data or make them reusable (per application id)
        // delete this.reducers[id];
        // this.store.replaceReducer(redux.combineReducers(this.reducers));
        const currentState = this.store.getState();
        delete currentState[id];
    }
    get(id) {
        const currentState = this.store.getState();
        return id == null ? currentState : currentState[id];
    }
    dispatch(...args) {
        return this.store.dispatch(...args);
    }
    /**
     * Subscribe to change (all) events
     * @param  {[type]}   id       [description]
     * @param  {Function} callback [description]
     */
    subscribe(id, callback) {
        if (typeof id !== "string" || typeof callback !== "function") {
            throw new Error(`Invalid arguments for state.subscribe ${arguments}`);
        }
        const state = this.store.getState();
        if (state[id] && state[id][FLAG_CHANGED] != null) {
            this.emitter.on(id, callback);
        }
        else {
            throw new Error(`Could not subscribe to state ${id}. Property ${FLAG_CHANGED} not available`);
        }
    }
    unsubscribe(id, callback) {
        if (typeof id !== "string" || typeof callback !== "function") {
            throw new Error(`Invalid arguments for state.unsubscribe ${arguments}`);
        }
        this.emitter.off(id, callback);
    }
}
exports.default = State;


/***/ }),

/***/ "./src/services/ValidationService.ts":
/*!*******************************************!*\
  !*** ./src/services/ValidationService.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = void 0;
const actions_1 = __webpack_require__(/*! ./reducers/actions */ "./src/services/reducers/actions.ts");
const BubblingCollectionObservable_1 = __importDefault(__webpack_require__(/*! ./utils/BubblingCollectionObservable */ "./src/services/utils/BubblingCollectionObservable.ts"));
const errorReducer_1 = __importDefault(__webpack_require__(/*! ./reducers/errorReducer */ "./src/services/reducers/errorReducer.ts"));
const json_schema_library_1 = __importDefault(__webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js"));
const mitt_1 = __importDefault(__webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js"));
const State_1 = __importDefault(__webpack_require__(/*! ./State */ "./src/services/State.ts"));
const Validation_1 = __importDefault(__webpack_require__(/*! ./utils/Validation */ "./src/services/utils/Validation.ts"));
const { JsonEditor: Core } = json_schema_library_1.default.cores;
exports.EVENTS = {
    BEFORE_VALIDATION: "beforeValidation",
    AFTER_VALIDATION: "afterValidation",
    ON_ERROR: "onError"
};
/**
 * @class  ValidationService
 */
class ValidationService {
    constructor(state, schema = { type: "object" }, core = new Core()) {
        if (!(state instanceof State_1.default)) {
            throw new Error("Given state in ValidationService must be of instance 'State'");
        }
        this.core = core;
        this.set(schema);
        this.observer = new BubblingCollectionObservable_1.default();
        this.emitter = mitt_1.default();
        this.id = "errors";
        this.state = state;
        this.state.register(this.id, errorReducer_1.default);
        this.setErrorHandler(error => error);
        this.EVENTS = exports.EVENTS;
    }
    setErrorHandler(callback) {
        this.errorHandler = callback;
    }
    /**
     * Starts the validation, executing callback handlers and emitters on the go
     *
     * @param  {Any} data               - data to validate
     * @param  {JsonPointer} [pointer]  - optional location. Per default all data is validated
     * @return {Promise} promise, resolving with list of errors when all async validations are performed
     */
    validate(data, pointer = "#") {
        if (this.currentValidation) {
            this.currentValidation.cancel();
        }
        this.emit(exports.EVENTS.BEFORE_VALIDATION);
        // @feature selective-validation
        this.observer.clearEvents(pointer);
        // reset stored list of events
        let remainingErrors = [];
        if (pointer !== "#") {
            // the following filtering is a duplicate from BubblingCollectionObservable.clearEvents
            remainingErrors = this.state.get(this.id)
                .filter(e => e.data.pointer == null || e.data.pointer.startsWith(pointer) === false);
        }
        this.state.dispatch(actions_1.ActionCreators.setErrors(remainingErrors));
        this.currentValidation = new Validation_1.default(data, pointer, this.errorHandler);
        return this.currentValidation.start(this.core, (newError, currentErrors) => {
            // @feature selective-validation
            const completeListOfErrors = remainingErrors.concat(currentErrors);
            this.state.dispatch(actions_1.ActionCreators.setErrors(completeListOfErrors));
            this.observer.notify(newError.data.pointer, newError);
            this.emit(exports.EVENTS.ON_ERROR, newError);
        }, validationErrors => {
            // @feature selective-validation
            const completeListOfErrors = remainingErrors.concat(validationErrors);
            this.state.dispatch(actions_1.ActionCreators.setErrors(completeListOfErrors));
            this.emit(exports.EVENTS.AFTER_VALIDATION, completeListOfErrors);
            this.currentValidation = null;
        });
    }
    set(schema) {
        this.core.setSchema(schema);
        this.schema = this.core.getSchema();
    }
    get() {
        return this.schema;
    }
    on(eventType, callback) {
        if (eventType === undefined) {
            throw new Error("Missing event type in ValidationService.on");
        }
        this.emitter.on(eventType, callback);
        return callback;
    }
    off(...args) {
        this.emitter && this.emitter.off(...args);
    }
    emit(eventType, event = {}) {
        this.emitter.emit(eventType, event);
    }
    observe(pointer, callback, bubbledEvents = false) {
        this.observer.observe(pointer, callback, bubbledEvents);
        return callback;
    }
    removeObserver(pointer, callback) {
        this.observer.removeObserver(pointer, callback);
    }
    notify(pointer, event = {}) {
        this.observer.notify(pointer, event);
    }
    getErrorsAndWarnings(pointer, withChildErrors = false) {
        const errors = this.state.get(this.id) || [];
        if (pointer == null) {
            return errors;
        }
        // filter by pointer
        const selectError = new RegExp(`^${pointer}${withChildErrors ? "" : "$"}`);
        return errors.filter(error => selectError.test(error.data.pointer));
    }
    getErrors(pointer, withChildErrors = false) {
        return this.getErrorsAndWarnings(pointer, withChildErrors).filter(error => error.severity !== "warning");
    }
    getWarnings(pointer, withChildWarnings = false) {
        return this.getErrorsAndWarnings(pointer, withChildWarnings).filter(error => error.severity === "warning");
    }
    destroy() {
        this.set(null);
        this.emitter = null;
        this.observer = null;
        this.state.unregister(this.id, errorReducer_1.default);
    }
}
exports.default = ValidationService;


/***/ }),

/***/ "./src/services/reducers/actions.ts":
/*!******************************************!*\
  !*** ./src/services/reducers/actions.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionCreators = exports.ActionTypes = void 0;
/* eslint object-property-newline: 0 */
const UndoActionCreators = __webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js").ActionCreators;
const UndoActionTypes = __webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js").ActionTypes;
exports.ActionTypes = {
    // data
    DATA_SET: "DATA_SET",
    UNDO: UndoActionTypes.UNDO,
    REDO: UndoActionTypes.REDO,
    // validation
    ERRORS_SET: "ERRORS_SET"
};
exports.ActionCreators = {
    setData(pointer, newValue, prevValue, isSynched = false) {
        return { type: exports.ActionTypes.DATA_SET, pointer, value: newValue, prevValue, isSynched };
    },
    undo() {
        return UndoActionCreators.undo();
    },
    redo() {
        return UndoActionCreators.redo();
    },
    setErrors(errors = []) {
        return { type: exports.ActionTypes.ERRORS_SET, errors };
    }
};


/***/ }),

/***/ "./src/services/reducers/dataReducer.ts":
/*!**********************************************!*\
  !*** ./src/services/reducers/dataReducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint no-case-declarations: 0 */
const copy_1 = __importDefault(__webpack_require__(/*! ../utils/copy */ "./src/services/utils/copy.ts"));
const ensureItemIDs_1 = __importDefault(__webpack_require__(/*! ../utils/ensureItemIDs */ "./src/services/utils/ensureItemIDs.ts"));
const gson_pointer_1 = __importDefault(__webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"));
const isRootPointer_1 = __importDefault(__webpack_require__(/*! ../utils/isRootPointer */ "./src/services/utils/isRootPointer.ts"));
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
const actions_1 = __webpack_require__(/*! ./actions */ "./src/services/reducers/actions.ts");
const redux_undo_1 = __importDefault(__webpack_require__(/*! redux-undo */ "./node_modules/redux-undo/lib/index.js"));
const actions = [actions_1.ActionTypes.DATA_SET, actions_1.ActionTypes.UNDO, actions_1.ActionTypes.REDO];
const defaultState = {
    hasChanged: false,
    action: null,
    data: null
};
function dataReducer(state = defaultState, action) {
    switch (action.type) {
        case actions_1.ActionTypes.DATA_SET:
            if (isRootPointer_1.default(action.pointer)) {
                return ensureItemIDs_1.default(copy_1.default(action.value));
            }
            const newState = copy_1.default(state);
            gson_pointer_1.default.set(newState, action.pointer, copy_1.default(action.value));
            return ensureItemIDs_1.default(newState);
        default:
            return state;
    }
}
const config = {
    debug: false,
    filter: (action) => actions.includes(action.type)
};
exports.default = redux_1.combineReducers({
    hasChanged: (state, action) => actions.includes(action.type),
    data: redux_undo_1.default(dataReducer, config)
});


/***/ }),

/***/ "./src/services/reducers/errorReducer.ts":
/*!***********************************************!*\
  !*** ./src/services/reducers/errorReducer.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes = __webpack_require__(/*! ./actions */ "./src/services/reducers/actions.ts").ActionTypes;
exports.default = (state = [], action) => {
    return action.type === ActionTypes.ERRORS_SET ? action.errors : state;
};


/***/ }),

/***/ "./src/services/uistate/actions.ts":
/*!*****************************************!*\
  !*** ./src/services/uistate/actions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionCreators = exports.ActionTypes = void 0;
exports.ActionTypes = {
    UI_PAGE_SET: "UI_PAGE_SET",
    UI_OVERLAY_SET: "UI_OVERLAY_SET",
    UI_CURRENT_SET: "UI_CURRENT_SET"
};
exports.ActionCreators = {
    setCurrentPage(pointer = "#") {
        return {
            type: exports.ActionTypes.UI_PAGE_SET,
            value: pointer
        };
    },
    setCurrentPointer(pointer = "#") {
        return {
            type: exports.ActionTypes.UI_CURRENT_SET,
            value: pointer
        };
    },
    setOverlay(content = false) {
        return {
            type: exports.ActionTypes.UI_OVERLAY_SET,
            value: content
        };
    }
};


/***/ }),

/***/ "./src/services/uistate/index.ts":
/*!***************************************!*\
  !*** ./src/services/uistate/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = void 0;
const mitt_1 = __importDefault(__webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.js"));
const State_1 = __importDefault(__webpack_require__(/*! ../State */ "./src/services/State.ts"));
const actions_1 = __webpack_require__(/*! ./actions */ "./src/services/uistate/actions.ts");
const uiReducer_1 = __importDefault(__webpack_require__(/*! ./uiReducer */ "./src/services/uistate/uiReducer.ts"));
exports.EVENTS = {
    OVERLAY_EVENT: "overlay",
    CURRENT_POINTER_EVENT: "current",
    CURRENT_PAGE_EVENT: "page"
};
class UIState {
    constructor() {
        this.id = "ui";
        this.state = new State_1.default();
        this.emitter = mitt_1.default();
        this.state.register(this.id, uiReducer_1.default);
        // @todo: subscribe to state-changes and diff current state?
    }
    get(property) {
        return this.state.get(this.id).ui[property];
    }
    getCurrentPointer() {
        return this.get("currentPointer");
    }
    getCurrentPage() {
        return this.get("currentPage");
    }
    setOverlay(content = false) {
        const currentContent = this.get("overlay");
        if (currentContent !== content) {
            this.state.dispatch(actions_1.ActionCreators.setOverlay(content));
            this.emitter.emit(exports.EVENTS.OVERLAY_EVENT, this.get("overlay"));
        }
    }
    on(...args) { this.emitter.on(...args); }
    off(...args) { this.emitter.off(...args); }
    setCurrentPage(pointer) {
        const currentPage = this.get("currentPage");
        if (currentPage !== pointer) {
            this.state.dispatch(actions_1.ActionCreators.setCurrentPage(pointer));
            this.emitter.emit(exports.EVENTS.CURRENT_PAGE_EVENT, this.get("currentPage"));
        }
    }
    setCurrentPointer(pointer) {
        const currentPointer = this.get("currentPointer");
        if (currentPointer !== pointer) {
            this.state.dispatch(actions_1.ActionCreators.setCurrentPointer(pointer));
            this.emitter.emit(exports.EVENTS.CURRENT_POINTER_EVENT, this.get("currentPointer"));
        }
    }
}
const Singleton = new UIState();
Singleton.UIStateContructor = UIState;
Singleton.EVENTS = exports.EVENTS;
exports.default = Singleton;


/***/ }),

/***/ "./src/services/uistate/uiReducer.ts":
/*!*******************************************!*\
  !*** ./src/services/uistate/uiReducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
const ActionTypes = __webpack_require__(/*! ./actions */ "./src/services/uistate/actions.ts").ActionTypes;
const defaultState = {
    hasChanged: false,
    currentPage: "#",
    currentPointer: "#",
    overlay: false
};
function uiReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.UI_PAGE_SET:
            state = Object.assign({}, state);
            state.currentPage = action.value;
            return state;
        case ActionTypes.UI_CURRENT_SET:
            state = Object.assign({}, state);
            state.currentPointer = action.value;
            return state;
        case ActionTypes.UI_OVERLAY_SET:
            state = Object.assign({}, state);
            state.overlay = action.value;
            return state;
        default:
            return state;
    }
}
function hasChanged(state = false, action) {
    return ActionTypes[action.type] == null ? false : action.type;
}
exports.default = redux.combineReducers({
    hasChanged,
    ui: uiReducer
});


/***/ }),

/***/ "./src/services/utils/BubblingCollectionObservable.ts":
/*!************************************************************!*\
  !*** ./src/services/utils/BubblingCollectionObservable.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint arrow-parens: 0 */
const gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
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
     * @param cb - observer
     * @param [receiveChildEvents=false]
     */
    observe(pointer, cb, receiveChildEvents = false) {
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
    removeObserver(pointer, cb) {
        if (this.observers[pointer] == null) {
            return;
        }
        const index = this.observers[pointer].indexOf(cb);
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
        const frags = gp.split(pointer);
        while (frags.length > 0) {
            const p = gp.join(frags, true);
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
    notify(pointer, event) {
        this.eventCollection[pointer] = this.eventCollection[pointer] || [];
        this.eventCollection[pointer].push(event);
        this._notifyAll(pointer, this.eventCollection[pointer]);
    }
    _notify(observerPointer, sourcePointer, event) {
        if (this.observers[observerPointer] == null) {
            return;
        }
        this.observers[observerPointer].forEach(cb => {
            if (cb.receiveChildEvents === false && observerPointer === sourcePointer) {
                cb(event);
                return;
            }
            if (cb.receiveChildEvents === false && observerPointer !== sourcePointer) {
                return;
            }
            this.bubbleCollection[observerPointer] = this.bubbleCollection[observerPointer] || {};
            const map = this.bubbleCollection[observerPointer];
            map[sourcePointer] = event;
            const events = Object.keys(map).reduce((res, next) => res.concat(map[next]), []);
            cb(events);
        });
    }
}
exports.default = BubblingCollectionObservable;


/***/ }),

/***/ "./src/services/utils/Validation.ts":
/*!******************************************!*\
  !*** ./src/services/utils/Validation.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
const validateAsync = __webpack_require__(/*! json-schema-library/lib/validateAsync */ "./node_modules/json-schema-library/lib/validateAsync.js");
/**
 * @class  Validation
 *
 * @param {Object|Array} data       - application json data
 * @param {Object} schema           - json-schema describing data
 * @param {Function} [errorHandler] - optional callback to modify errors
 */
class Validation {
    constructor(data, pointer, errorHandler) {
        this.errors = [];
        this.data = data;
        this.pointer = pointer;
        this.canceled = false;
        this.errorHandler = errorHandler;
    }
    start(core, onErrorCb, onDoneCb) {
        this.cbDone = onDoneCb;
        this.cbError = onErrorCb;
        // @feature selective-validation
        const pointer = this.pointer;
        let data = this.data;
        let schema = core.getSchema();
        if (pointer !== "#") {
            schema = core.getSchema(pointer, data);
            data = gp.get(data, pointer);
        }
        // console.log("validate", pointer, data, JSON.stringify(schema, null, 2));
        // validateAsync(core, value, { schema = core.rootSchema, pointer = "#", onError })
        return validateAsync(core, data, { schema, pointer, onError: this.onError.bind(this) })
            .then(errors => {
            this.onDone(errors);
            return errors;
        })
            .catch(error => this.onFail(error));
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
    cancel() {
        this.canceled = true;
    }
}
exports.default = Validation;


/***/ }),

/***/ "./src/services/utils/copy.ts":
/*!************************************!*\
  !*** ./src/services/utils/copy.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function copy(data) {
    if (data === undefined || (Array.isArray(data) === false && typeof data !== "object")) {
        return data;
    }
    return JSON.parse(JSON.stringify(data));
}
exports.default = copy;


/***/ }),

/***/ "./src/services/utils/diffpatch.ts":
/*!*****************************************!*\
  !*** ./src/services/utils/diffpatch.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DiffPatcher = __webpack_require__(/*! jsondiffpatch */ "./node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js").DiffPatcher;
const diffMatchPatch = __webpack_require__(/*! diff_match_patch */ "./node_modules/diff_match_patch/lib/diff_match_patch.js");
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
try {
    // required in browser environments
    window["diff_match_patch"] = diffMatchPatch;
}
catch (e) {
    // loaded by default in nodejs
}
const diffpatch = new DiffPatcher(options); // jsondiffpatch.create(options);
diffpatch.options = options;
exports.default = diffpatch;


/***/ }),

/***/ "./src/services/utils/ensureItemIDs.ts":
/*!*********************************************!*\
  !*** ./src/services/utils/ensureItemIDs.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTypeOf_1 = __importDefault(__webpack_require__(/*! json-schema-library/lib/getTypeOf */ "./node_modules/json-schema-library/lib/getTypeOf.js"));
const ID_PROPERTY = "_id";
function generateId(index) {
    return `${index}${Math.random()}${Date.now()}`;
}
function addMissingItemIDs(list) {
    list.forEach((item, index) => {
        if (item[ID_PROPERTY] == null) {
            const type = getTypeOf_1.default(item);
            if (type === "object" || type === "array") {
                item[ID_PROPERTY] = ensureItemIDs.config.generateId(index);
            }
        }
    });
}
function ensureItemIDs(data) {
    const dataType = getTypeOf_1.default(data);
    if (dataType === "array") {
        ensureItemIDs.config.addMissingItemIDs(data);
        data.forEach((item) => ensureItemIDs(item));
    }
    else if (dataType === "object") {
        Object.keys(data).forEach((key) => ensureItemIDs(data[key]));
    }
    return data;
}
ensureItemIDs.config = {
    ID_PROPERTY,
    addMissingItemIDs,
    generateId
};
exports.default = ensureItemIDs;


/***/ }),

/***/ "./src/services/utils/getParentPointer.ts":
/*!************************************************!*\
  !*** ./src/services/utils/getParentPointer.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gson_pointer_1 = __importDefault(__webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"));
exports.default = (pointer) => {
    const list = gson_pointer_1.default.split(pointer);
    list.pop();
    return gson_pointer_1.default.join(list, pointer[0] === "#");
};


/***/ }),

/***/ "./src/services/utils/getPatchesPerPointer.ts":
/*!****************************************************!*\
  !*** ./src/services/utils/getPatchesPerPointer.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diffpatch_1 = __importDefault(__webpack_require__(/*! ./diffpatch */ "./src/services/utils/diffpatch.ts"));
const gson_pointer_1 = __importDefault(__webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js"));
function sortByPointer(a, b) {
    if (a.pointer < b.pointer) {
        return -1;
    }
    else if (a.pointer > b.pointer) {
        return 1;
    }
    return 0;
}
function findPatches(pointer, diff, result = []) {
    // for a diff: { a: { '0': [ 'modifiedString' ], _t: 'a', _0: [ 'string', 0, 0 ] } }
    // return diff[a] as patch and ".../a" as pointer
    Object.keys(diff).forEach((key) => {
        if (key === "_t") {
            return;
        }
        if (Array.isArray(diff[key])) {
            const entry = {
                pointer: `${pointer}/${key}`,
                patch: diff[key],
                isArrayItem: false,
                changedKey: false
            };
            const propertyAdded = diff[key].length === 1;
            const propertyRemoved = diff[key][2] === 0;
            if (diff._t === "a") {
                entry.isArrayItem = true;
            }
            else if (propertyAdded || propertyRemoved) {
                entry.changedKey = true;
            }
            result.push(entry);
        }
        else {
            findPatches(`${pointer}/${key}`, diff[key], result);
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
function getPatchesPerPointer(previousValue, newValue) {
    const diff = diffpatch_1.default.diff(previousValue, newValue);
    if (diff == null) {
        return [];
    }
    const patches = findPatches("#", diff);
    // merge all item patches by their parent-pointer
    const map = {};
    // @todo this should be directly resolved in 'findPatches'
    patches.forEach((entry) => {
        if (entry.isArrayItem) {
            const parent = gson_pointer_1.default.join(entry.pointer, "..");
            const key = entry.pointer.replace(`${parent}/`, "");
            map[parent] = map[parent] || { _t: "a" };
            map[parent][key] = entry.patch;
        }
        else if (entry.changedKey) {
            const parent = gson_pointer_1.default.join(entry.pointer, "..");
            const key = entry.pointer.replace(`${parent}/`, "");
            map[parent] = map[parent] || {};
            map[parent][key] = entry.patch;
        }
        else {
            map[entry.pointer] = entry.patch;
        }
    });
    return Object.keys(map)
        .map((pointer) => ({ pointer, patch: map[pointer] }))
        .sort(sortByPointer);
}
exports.default = getPatchesPerPointer;
;


/***/ }),

/***/ "./src/services/utils/isRootPointer.ts":
/*!*********************************************!*\
  !*** ./src/services/utils/isRootPointer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isRoot_1 = __importDefault(__webpack_require__(/*! gson-pointer/lib/isRoot */ "./node_modules/gson-pointer/lib/isRoot.js"));
exports.default = isRoot_1.default;


/***/ }),

/***/ "./src/utils/UISchema.ts":
/*!*******************************!*\
  !*** ./src/utils/UISchema.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { eachSchema } = __webpack_require__(/*! json-schema-library */ "./node_modules/json-schema-library/index.js");
const gp = __webpack_require__(/*! gson-pointer */ "./node_modules/gson-pointer/index.js");
const UI_PROPERTY = "editron:ui";
const populated = __webpack_require__(/*! ./populated */ "./src/utils/populated.ts");
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
        pointer = gp.join(pointer, "..");
    }
    return breadcrumps;
}
function enumOptions(schema) {
    let options;
    if (schema[UI_PROPERTY].enum) {
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
    let targetPointer = pointerToResolve;
    if (targetPointer[0] !== "#") {
        targetPointer = gp.join(pointer, targetPointer);
    }
    const result = controller.data().get(targetPointer);
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
    const schema = controller.schema().get(pointer);
    const settings = Object.assign({
        hidden: false,
        description: schema.description
    }, schema.options, schema[UI_PROPERTY]); // @legacy options
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
 * @param  {Object} rootSchema
 * @return {Object} extended clone of json-schema
 */
function extendSchema(rootSchema) {
    rootSchema = JSON.parse(JSON.stringify(rootSchema));
    eachSchema(rootSchema, childSchema => {
        childSchema[UI_PROPERTY] = childSchema[UI_PROPERTY] || {};
        childSchema[UI_PROPERTY] = Object.assign({
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
        for (let i = 0; i < optionValue.length; i += 1) {
            const option = optionValue[i];
            if (isPointer(option)) {
                const value = resolveReference(pointer, controller, option);
                if (populated(value)) {
                    return value;
                }
            }
            else if (populated(option)) {
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
function getOption(pointer, controller, ...options) {
    const schema = controller.schema().get(pointer);
    const editronOptions = schema[UI_PROPERTY] || {};
    if (options.length === 0) {
        throw new Error("Expected at least one options property to be given in getOption");
    }
    for (let i = 0; i < options.length; i += 1) {
        const option = editronOptions[options[i]];
        const resolver = isPointer(option) ? resolveReference : resolveOption;
        const value = resolver(pointer, controller, option);
        if (populated(value)) {
            return value;
        }
        else if (populated(schema[options[i]])) {
            return schema[options[i]];
        }
    }
    return null;
}
function getTitle(pointer, controller) {
    const schema = controller.schema().get(pointer);
    const title = getOption(pointer, controller, "title") || "";
    return schema.minLength ? `${title.replace(/\s*\*\s*$/, "")} *` : title;
}
function getDefaultOption(schema, option) {
    return schema[UI_PROPERTY] ? (schema[UI_PROPERTY][option] || "") : "";
}
exports.default = {
    UI_PROPERTY,
    getOption,
    copyOptions,
    extendSchema,
    getBreadcrumps,
    getTitle,
    enumOptions,
    getDefaultOption
};


/***/ }),

/***/ "./src/utils/addItem.ts":
/*!******************************!*\
  !*** ./src/utils/addItem.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
const createElement_1 = __importDefault(__webpack_require__(/*! ./createElement */ "./src/utils/createElement.ts"));
const LocationService_1 = __importDefault(__webpack_require__(/*! ../services/LocationService */ "./src/services/LocationService.ts"));
const OverlayService_1 = __importDefault(__webpack_require__(/*! ../services/OverlayService */ "./src/services/OverlayService.ts"));
const overlayselecttiles_1 = __importDefault(__webpack_require__(/*! ../components/overlayselecttiles */ "./src/components/overlayselecttiles/index.ts"));
const UISchema_1 = __importDefault(__webpack_require__(/*! ./UISchema */ "./src/utils/UISchema.ts"));
/**
 * Request to insert an array child item at the given pointer. If multiple options are present, a dialogue is opened to
 * let the user select the appropriate type of child (oneof).
 *
 * @param {Object} dataService
 * @param {Object} schemaService
 * @param {String} pointer  - to array on which to insert the child
 * @param {Number} index    - index within array, where the child should be inserted (does not replace). Default: 0
 */
function addItem(dataService, schemaService, pointer, index = 0) {
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
    const element = createElement_1.default(".overlay__item");
    const selection = selectOptions.map((item, oneOfIndex) => ({
        icon: UISchema_1.default.getDefaultOption(item, "icon"),
        title: UISchema_1.default.getDefaultOption(item, "title"),
        description: UISchema_1.default.getDefaultOption(item, "description"),
        value: oneOfIndex
    }));
    // create user-selection
    mithril_1.default.render(element, mithril_1.default(overlayselecttiles_1.default, {
        // description: "Modulauswahl - Bitte wählen",
        value: 0,
        options: selection,
        onchange: (value) => {
            const selectedIndex = parseInt(value, 10);
            addSelection(selectedIndex, schemaService, dataService);
            OverlayService_1.default.close();
            LocationService_1.default.goto(`${pointer}/${index}`);
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
    OverlayService_1.default.open(element, { save: false });
}
exports.default = addItem;


/***/ }),

/***/ "./src/utils/array.ts":
/*!****************************!*\
  !*** ./src/utils/array.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    addItem(pointer, controller, index) {
        controller.addItemTo(pointer, index);
    },
    removeItem(pointer, controller, index) {
        const nextList = controller.data().get(pointer);
        nextList.splice(index, 1);
        controller.data().set(pointer, nextList);
    },
    moveItem(pointer, controller, index, destinationIndex) {
        if (destinationIndex < 0) {
            return;
        }
        const list = controller.data().get(pointer);
        if (list[index] == null || list[destinationIndex] == null) {
            return;
        }
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
        controller.data().set(pointer, list);
    },
    moveElement(list, index, destinationIndex) {
        list.splice(destinationIndex, 0, list.splice(index, 1)[0]);
    }
};


/***/ }),

/***/ "./src/utils/createElement.ts":
/*!************************************!*\
  !*** ./src/utils/createElement.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = __importDefault(__webpack_require__(/*! mithril */ "./node_modules/mithril/index.js"));
function createElement(selector, attributes) {
    const vnode = mithril_1.default(selector, attributes);
    const element = document.createElement(vnode.tag);
    Object.keys(vnode.attrs).forEach((key) => {
        if (key === "className") {
            vnode.attrs[key].split(" ").forEach((className) => element.classList.add(className));
        }
        else if (vnode.attrs[key] != null) {
            element.setAttribute(key, vnode.attrs[key]);
        }
    });
    return element;
}
exports.default = createElement;
;


/***/ }),

/***/ "./src/utils/createProxy.ts":
/*!**********************************!*\
  !*** ./src/utils/createProxy.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { Foxy, handler } = __webpack_require__(/*! @technik-sde/foxy */ "./node_modules/@technik-sde/foxy/dist/foxy.js");
const defaultOptions = {
    handlers: [
        handler.unsplash,
        handler.image,
        handler.video
    ]
};
function createProxy(options = {}) {
    if (options.constructor.name === "Foxy") {
        return options;
    }
    const o = { ...defaultOptions, ...options };
    if (Array.isArray(o.handlers)) {
        return new Foxy(o);
    }
    throw new Error(`Failed initializing proxy from: ${JSON.stringify(options)}`);
}
exports.default = createProxy;


/***/ }),

/***/ "./src/utils/getID.ts":
/*!****************************!*\
  !*** ./src/utils/getID.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a json-pointer to a valid dom-id (url selection)
 * https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
 */
function getID(pointer) {
    return `${pointer.replace(/(^[#/]*|\/+$)/, "")}`.replace(/\/+/g, ".");
}
exports.default = getID;
;


/***/ }),

/***/ "./src/utils/i18n.ts":
/*!***************************!*\
  !*** ./src/utils/i18n.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const render = __webpack_require__(/*! json-schema-library/lib/utils/render */ "./node_modules/json-schema-library/lib/utils/render.js");
translate.strings = {};
translateError.strings = {};
function translate(key, data) {
    if (typeof translate.strings[key] === "string") {
        return render(translate.strings[key], data);
    }
    else if (typeof translate.strings[key] === "function") {
        return translate.strings[key](data);
    }
    return key;
}
function translateError(controller, error) {
    if (typeof translateError.strings[error.code] === "string") {
        error.message = render(translateError.strings[error.code], error.data);
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
const i18n = {
    translate,
    translateError,
    addLanguage
};
exports.default = i18n;


/***/ }),

/***/ "./src/utils/populated.ts":
/*!********************************!*\
  !*** ./src/utils/populated.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// returns true if the value is valid, that is: it has content
function populated(value, returnIf, returnElse = "") {
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
    if (returnIf === undefined && returnElse === "") {
        return isPopulated;
    }
    return isPopulated ? returnIf : returnElse;
}
exports.default = populated;


/***/ }),

/***/ "./src/utils/selectEditor.ts":
/*!***********************************!*\
  !*** ./src/utils/selectEditor.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
    const schema = controller.schema().get(pointer);
    if (schema.type === "error") {
        // data-pointer could not be found in schema
        // @todo find a better solution for additional data: maybe an 'additional data'-editor
        return false;
    }
    // @ui-option hidden
    if (options.hidden === true) {
        return false;
    }
    for (let i = 0, l = editorViews.length; i < l; i += 1) {
        if (editorViews[i].editorOf(pointer, controller, options)) {
            return editorViews[i];
        }
    }
    return undefined;
}
exports.default = select;


/***/ }),

/***/ "./test/controller/Controller.test.ts":
/*!********************************************!*\
  !*** ./test/controller/Controller.test.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
const Controller_1 = __importDefault(__webpack_require__(/*! ../../src/Controller */ "./src/Controller.ts"));
describe("Controller", () => {
    it("should be able to instantiate editron", () => {
        const editron = new Controller_1.default({
            type: "object",
            properties: {
                title: {
                    type: "string",
                    default: "default-title"
                }
            }
        });
        assert_1.strict.ok(editron.data().get("#/title") === "default-title");
    });
    describe("dataService", () => {
        let controller;
        beforeEach(() => {
            const schema = {
                type: "object",
                properties: {
                    list: {
                        type: "array",
                        items: {
                            type: "object", properties: { title: { type: "string" } }
                        }
                    }
                }
            };
            const data = { list: [{ title: "first" }, { title: "second" }, { title: "third" }] };
            controller = new Controller_1.default(schema, data);
        });
        it("should have independent data services", () => {
            const controller2 = new Controller_1.default(controller.schema().get(), controller.data().get());
            controller2.data().set("#/list/0", { title: "new" });
            assert_1.strict.equal(controller.data().get("#/list/0/title"), "first", "controllers should not share same data");
            assert_1.strict.equal(controller2.data().get("#/list/0/title"), "new", "controllers should not share same data");
        });
    });
});


/***/ }),

/***/ "./test/controller/addValidator.test.ts":
/*!**********************************************!*\
  !*** ./test/controller/addValidator.test.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint max-len: 0 */
const assert_1 = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
const Controller_1 = __importDefault(__webpack_require__(/*! ../../src/Controller */ "./src/Controller.ts"));
describe("Controller", () => {
    let controller;
    beforeEach(() => {
        const schema = {
            type: "object",
            properties: {
                customFormat: {
                    format: "custom-format",
                    type: "string"
                },
                customAttribute: {
                    custom: "custom-attribute",
                    type: "string"
                }
            }
        };
        const data = { customFormat: "custom-fornat-value" };
        controller = new Controller_1.default(schema, data);
    });
    it("should register validator for format", () => {
        controller.addFormatValidator("custom-format", (core, schema, value, pointer) => {
            if (value === "custom-format-error") {
                return { type: "error", code: "custom-format-error", data: { pointer } };
            }
            return undefined;
        });
        return controller.validator()
            .validate({ customFormat: "custom-format-error" })
            .then(result => {
            assert_1.strict.equal(result.length, 1);
            assert_1.strict.equal(result[0].type, "error");
            assert_1.strict.equal(result[0].code, "custom-format-error");
        });
    });
    it("should register validator for attribute", () => {
        controller.addKeywordValidator("string", "custom", (core, schema, value, pointer) => {
            if (value === "custom-attribute-error") {
                return { type: "error", code: "custom-attribute-error", data: { pointer } };
            }
            return undefined;
        });
        return controller.validator()
            .validate({ customAttribute: "custom-attribute-error" })
            .then(result => {
            assert_1.strict.equal(result.length, 1);
            assert_1.strict.equal(result[0].type, "error");
            assert_1.strict.equal(result[0].code, "custom-attribute-error");
        });
    });
});


/***/ }),

/***/ "./test/services/State.test.ts":
/*!*************************************!*\
  !*** ./test/services/State.test.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint object-property-newline: 0, max-nested-callbacks: 0 */
const assert_1 = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
const State_1 = __importDefault(__webpack_require__(/*! ../../src/services/State */ "./src/services/State.ts"));
describe("State", () => {
    let state;
    beforeEach(() => (state = new State_1.default()));
    it("should dispatch action", () => {
        let calledAction;
        function reducer(_state = {}, action) {
            calledAction = action;
            return _state;
        }
        state.register("data", reducer);
        state.dispatch({ type: "DUMMY_ACTION", value: 14 });
        assert_1.strict.deepEqual(calledAction, { type: "DUMMY_ACTION", value: 14 });
    });
    it("should register multiple reducers", () => {
        const calledActions = [];
        const action = { type: "DUMMY_ACTION", value: 14 };
        state.register("A", (_state = {}, _action) => {
            _action.type === "DUMMY_ACTION" && calledActions.push(_action);
            return _state;
        });
        state.register("B", (_state = {}, _action) => {
            _action.type === "DUMMY_ACTION" && calledActions.push(_action);
            return _state;
        });
        state.dispatch(action);
        assert_1.strict.deepEqual(calledActions, [action, action]);
    });
    it("should register reducers on separate entry points", () => {
        const calledActions = [];
        const action = { type: "DUMMY_ACTION", value: 14 };
        state.register("A", (_, _action) => {
            action.type === "DUMMY_ACTION" && calledActions.push(_action);
            return { id: "A" };
        });
        state.register("B", (_, _action) => {
            action.type === "DUMMY_ACTION" && calledActions.push(_action);
            return { id: "B" };
        });
        state.dispatch(action);
        const currentState = state.get();
        assert_1.strict.deepEqual(currentState.A, { id: "A" });
        assert_1.strict.deepEqual(currentState.B, { id: "B" });
    });
    it("should return state of given reducer", () => {
        state.register("A", () => ({ id: "A" }));
        const stateA = state.get("A");
        assert_1.strict.deepEqual(stateA, { id: "A" });
    });
});


/***/ }),

/***/ 0:
/*!***********************************************************************************************************************!*\
  !*** multi ./test/controller/addValidator.test.ts ./test/controller/Controller.test.ts ./test/services/State.test.ts ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./test/controller/addValidator.test.ts */"./test/controller/addValidator.test.ts");
__webpack_require__(/*! ./test/controller/Controller.test.ts */"./test/controller/Controller.test.ts");
module.exports = __webpack_require__(/*! ./test/services/State.test.ts */"./test/services/State.test.ts");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map