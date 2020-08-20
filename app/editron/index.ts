import Controller from "../../src/Controller";
import DelegationPlugin from "../../src/plugin/delegationplugin";
import RemoteDataPlugin from "../../src/plugin/remotedataplugin";

import "./index.scss";
import "./index.html";


const schema = {
    title: "An object with collapsable property",
    type: "object",
    properties: {
        title: { type: "string", title: "Title", minLength: 1, "editron:ui": { instantUpdate: true } },
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
                oneOfProperty: "type",
                oneOf: [
                    {
                        description: "Eine Gruppe dient als Sammlung von themennahen Teasern",
                        $ref: "#/definitions/inline"
                    },
                    {
                        description: "Eine Gruppe dient als Sammlung von themennahen Teasern",
                        $ref: "#/definitions/external"
                    }
                ]
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
        inline: {
            title: "Inline",
            type: "object",
            properties: {
                type: {
                    type: "string",
                    default: "inline",
                    pattern: "^inline$",
                    "editron:ui": {
                        hidden: true
                    }
                },
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
                        delegate: {
                            delegateTo: "overlay"
                        }
                    },
                    properties: {
                        layout: {
                            title: "Layout",
                            type: "string",
                            enum: ["default", "small", "large"],
                        },
                        visible: {
                            title: "Anzeigen",
                            type: "boolean"
                        }
                    }
                }
            }
        },
        external: {
            title: "Extern",
            type: "object",
            properties: {
                type: {
                    type: "string",
                    default: "external",
                    pattern: "^external$",
                    "editron:ui": {
                        hidden: true
                    }
                },
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
                        delegate: true
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
    list: [{ type: "inline" }, { type: "external" }]
};

const $editor = document.querySelector(".editor") as HTMLElement;
const editron = new Controller(schema, data, {
    plugins: [
        new RemoteDataPlugin(),
        new DelegationPlugin({
            onDelegation: (event) => {
                console.log("delegation", event);
                const dom = document.querySelector(".sidepanel");
                dom.appendChild(event.editor.getElement());
            }
        })
    ]
});
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;
