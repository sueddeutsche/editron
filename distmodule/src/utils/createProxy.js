import { Foxy, handler } from "@technik-sde/foxy";
const defaultOptions = {
    handlers: [
        handler.unsplash,
        handler.image,
        handler.video
    ]
};
export default function createProxy(options = {}) {
    if (options.constructor.name === "Foxy") {
        return options;
    }
    const o = { ...defaultOptions, ...options };
    if (Array.isArray(o.handlers)) {
        return new Foxy(o);
    }
    throw new Error(`Failed initializing proxy from: ${JSON.stringify(options)}`);
}
