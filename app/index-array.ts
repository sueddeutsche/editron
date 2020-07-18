import Controller from "../src/Controller";
// import "./index-array.scss";

const schema = {
    type: "object",
    properties: {
        content: {
            title: "content",
            type: "array",
            items: {
                onOfProperty: "type",
                oneOf: [
                    { $ref: "#/definitions/embed", title: "embed" },
                    { $ref: "#/definitions/teaser", title: "teaser" },
                    {
                        type: "object",
                        title: "Gruppe",
                        properties: {
                            type: { type: "string", default: "group", pattern: "^group", "editron:ui": { hidden: true } },
                            title: { type: "string" },
                            content: {
                                title: "Module",
                                type: "array",
                                items: {
                                    onOfProperty: "type",
                                    oneOf: [
                                        { $ref: "#/definitions/embed", title: "embed" },
                                        { $ref: "#/definitions/teaser", title: "teaser" }
                                    ]
                                }
                            }
                        }
                    }
                ]
            }
        }
    },
    definitions: {
        embed: {
            type: "object",
            title: "Embed",
            properties: {
                type: { type: "string", default: "embed", pattern: "^embed$", "editron:ui": { hidden: true } },
                title: { type: "string" }
            }
        },
        teaser: {
            type: "object",
            title: "Teaser",
            properties: {
                type: { type: "string", default: "teaser", pattern: "^teaser", "editron:ui": { hidden: true } },
                title: { type: "string" }
            }
        }
    }
};

const $editor = document.querySelector(".editor") as HTMLElement;
const editron = new Controller(schema, {});
editron.createEditor("#", $editor);
