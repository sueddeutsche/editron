import { Foxy, Options, handler } from "@technik-sde/foxy";


const defaultOptions = {
    handlers: [
        handler.unsplash,
        handler.image,
        handler.video
    ]
};


export default function createProxy(options: Options|Foxy = {}): Foxy {
    if (options.constructor.name === "Foxy") {
        return options as Foxy;
    }

    const o = { ...defaultOptions, ...options };

    if (Array.isArray(o.handlers)) {
        return new Foxy(o);
    }

    throw new Error(`Failed initializing proxy from: ${JSON.stringify(options)}`);
}
