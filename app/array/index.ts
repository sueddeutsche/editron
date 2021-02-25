import Controller from "../../src/Editron";
import SortablePlugin from "../../src/plugin/sortableplugin";

import "./index.scss";
import "./index.html";


const schema = {
    title: "An object with collapsable property",
    type: "object",
    properties: {
        title: { type: "string", title: "Title", minLength: 1 },
        details: {
            title: "Details",
            type: "object",
            properties: {
                description: {
                    title: "Extensive description",
                    type: "string",
                    format: "textarea",
                },
                layout: {
                    title: "Layout",
                    type: "string",
                    enum: ["default", "small", "large"],
                }
            }
        },
        list: {
            title: "list",
            type: "array",
            "editron:ui": {
                sortable: {}
            },
            items: {
                oneOfProperty: "type",
                oneOf: [
                    {
                        title: "long",
                        type: "object",
                        properties: {
                            type: {
                                "editron:ui": {
                                    hidden: true
                                },
                                type: "string",
                                pattern: "^long$",
                                default: "long"
                            },
                            description: {
                                title: "Extensive description",
                                type: "string",
                                format: "textarea",
                            },
                        }
                    },
                    {
                        title: "short",
                        type: "object",
                        properties: {
                            type: {
                                "editron:ui": {
                                    hidden: true
                                },
                                type: "string",
                                pattern: "^short$",
                                default: "short"
                            },
                            description: {
                                title: "description one-liner ",
                                type: "string",
                                minLength: 1
                            },
                        }
                    }
                ]
            }
        }
    }
};


const data = {
    list: [
        {
            type: "short",
            description: "123"
        },
        {
            type: "long",
            description: "abc"
        },
        {
            type: "short",
            description: "Hans"
        }
    ]
};

const $editor = document.querySelector(".editor") as HTMLElement;
const editron = new Controller(schema, data, {
    plugins: [
        new SortablePlugin()
    ]
});
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;
