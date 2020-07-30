import Controller from "../../src/Controller";
import DelegationPlugin from "../../src/plugin/delegationplugin";

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

            "editron:ui": {
                collapsed: true
            },
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
            // title: "list",
            type: "array",
            items: {
                // title: "item",
                // "editron:ui": {
                //     delegate: "sidebar"
                // },
                description: "Eine Gruppe dient als Sammlung von themennahen Teasern",
                $ref: "#/definitions/object"
            }
        },
        simple: {
            type: "array",
            items: {
                type: "string",
                description: "simple title"
            }
        }
    },
    definitions: {
        object: {
            title: "Gruppe",
            type: "object",
            "editron:ui": {
                delegate: "sidebar"
            },
            properties: {
                title: {
                    title: "Titel",
                    type: "string"
                },
                description: {
                    title: "Teaser",
                    type: "string",
                    format: "textarea"
                },
                details: {
                    type: "object",
                    "editron:ui": {
                        collapse: true
                    },
                    properties: {
                        layout: {
                            title: "Layout",
                            type: "string",
                            enum: ["default", "small", "large"],
                        },
                        visible: {
                            title: "Anzeigen",
                            type: "boolean",
                            default: true
                        }
                    }
                }
            }
        }
    }
};


const data = {
    list: [{}, {}]
};

const $editor = document.querySelector(".editor") as HTMLElement;
const editron = new Controller(schema, data, {
    plugins: [
        new DelegationPlugin({
            onDelegation: (event) => {
                const dom = document.querySelector(".sidepanel");
                dom.appendChild(event.editor.toElement());
            }
        })
    ]
});
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;
