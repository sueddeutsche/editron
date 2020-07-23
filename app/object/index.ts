import Controller from "../../src/Controller";
import "./index.scss";
import "./index.html";


const schema = {
    title: "An object with collapsable property",
    type: "object",
    properties: {
        title: { type: "string", title: "Title" },
        details: {
            title: "Details",
            type: "object",
            "editron:ui": {
                collapse: true
            },
            properties: {
                description: {
                    title: "Extensive description",
                    type: "string",
                    format: "textarea"
                },
                layout: {
                    title: "Layout",
                    type: "string",
                    enum: ["default", "small", "large"]
                }
            }
        }
    }
};


const data = {
    groups: [
        {
            title: "erste",
            content: [
                {
                    type: "embed", title:"first embed"
                }
            ]
        },
        {
            title: "zweite",
            content: [
                {
                    type: "embed", title:"MIMIMI"
                },
                {
                    type: "teaser", title:"tease"
                }
            ]
        }
    ]
};


const $editor = document.querySelector(".editor") as HTMLElement;
const editron = new Controller(schema, data);
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;
