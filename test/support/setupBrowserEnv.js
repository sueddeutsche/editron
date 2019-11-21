const browserEnv = require("browser-env");
browserEnv(["window", "document", "Element", "HTMLElement", "navigator", "getComputedStyle"]);
// requestAnimationFrame etc
// global.window = require("mithril/test-utils/browserMock.js")();
// global.document = window.document;
global.requestAnimationFrame = window.setImmediate;
