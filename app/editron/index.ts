import Controller from "../../src/Controller";
import DelegationPlugin from "../../src/plugin/delegationplugin";
import SortablePlugin from "../../src/plugin/sortableplugin";
import RemoteDataPlugin from "../../src/plugin/remotedataplugin";
import MinimapEditor from "../../src/editors/minimapeditor";

import "./index.scss";
import "./index.html";


const schema = {
    title: "An object with collapsable property",
    type: "object",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero volo in virtute vim esse quam maximam.",
    "editron:ui": {
        // attrs: {
        //     class: "as-card"
        // }
    },
    properties: {
        title: { type: "string", title: "Title", minLength: 1, "editron:ui": { instantUpdate: true } },
        visible: { type: "boolean", title: "Visibility", default: true },
        details: {
            title: "Details",
            type: "object",

            "editron:ui": {
                object: {
                    collapsed: true
                }
            },
            properties: {
                description: {
                    title: "Extensive description",
                    description: "textarea with some explain text",
                    type: "string",
                    format: "textarea",
                },
                layout: {
                    title: "Layout",
                    type: "string",
                    "editron:ui": {
                        invertOrder: true
                    },
                    enum: ["default", "small", "large"],
                }
            }
        },
        list: {
            // title: "list",
            type: "array",
            "editron:ui": {
                icon: "list",
                sortable: {
                    group: "teaser",
                    handle: ".ed-header"
                },
                array: {
                    insert: true
                },
                passActions: true
            },
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
            title: "simple list",
            type: "array",
            "editron:ui": {
                array: {
                    showIndex: true
                }
            },
            items: {
                type: "string",
                description: "simple string"
            }
        }
    },
    definitions: {
        inline: {
            title: "Inline",
            type: "object",
            "editron:ui": {
                icon: "home",
                object: {
                    collapsed: true
                },
                attrs: {
                    class: "as-card"
                }
            },
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
            "editron:ui": {
                icon: "extension",
                attrs: {
                    class: "as-card"
                }
            },
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

const editron = new Controller(schema, data, {
    plugins: [
        new SortablePlugin(),
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
editron.editors.unshift(MinimapEditor);
editron.createEditor("#", document.querySelector(".editor"));
editron.createEditor("#", document.querySelector(".minimap"), {
    minimap: {
        use: true
        // filter: ["#/groups", "#/groups/*/content", "#/groups/*/content/title"]
    }
});
// @ts-ignore
window.controller = editron;
