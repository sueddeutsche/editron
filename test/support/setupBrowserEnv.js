const o = require("ospec");
const jsdom = require("jsdom");

const dom = new jsdom.JSDOM("", {
    // So we can get `requestAnimationFrame`
    pretendToBeVisual: true
});

// Fill in the globals Mithril needs to operate. Also, the first two are often
// useful to have just in tests.
// @ts-ignore
global.window = dom.window;
// @ts-ignore
global.document = dom.window.document;
// @ts-ignore
global.requestAnimationFrame = dom.window.requestAnimationFrame;

// Require Mithril to make sure it loads properly.
require("mithril");

// And now, make sure JSDOM ends when the tests end.
o.after(() => dom.window.close());
