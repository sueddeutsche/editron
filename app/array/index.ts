import Controller from "../../src/Controller";
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
                title: "item",
                type: "object",
                properties: {
                    description: {
                        title: "Extensive description",
                        type: "string",
                        format: "textarea",
                    },
                }
            }
        }
    }
};


const data = {
    list: [
        {
            description: "123"
        },
        {
            description: "abc"
        },
        {
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
