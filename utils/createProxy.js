const { Foxy, handler } = require("@technik-sde/foxy");


const defaultOptions = {
    handlers: [
        handler.unsplash,
        handler.image,
        handler.video
    ]
};

module.exports = function createProxy(options) {
    if (options instanceof Foxy) {
        return options;
    }

    const o = { ...defaultOptions, ...options };

    if (Array.isArray(o.handlers)) {
        return new Foxy(o);
    }

    throw new Error(`Failed initializing proxy from: ${JSON.stringify(options)}`);
};
