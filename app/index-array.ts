import Controller from "../src/Controller";
import SortableArrayEditor from "../src/editors/sortablearrayeditor";
import "./index-array.scss";


const schema = {
    type: "object",
    properties: {
        content: {
            title: "content",
            type: "array",
            minLength: 1,
            "editron:ui": {
                sortable: false
            },
            items: {
                type: "object",
                title: "Gruppe",
                "editron:ui": {
                    attrs: {
                        "widget-type": "group"
                    }
                },
                properties: {
                    title: { type: "string" },
                    content: {
                        title: "Module",
                        type: "array",
                        "editron:ui": {
                            sortableGroup: "group",
                            sortable: true
                        },
                        items: {
                            onOfProperty: "type",
                            oneOf: [
                                {
                                    title: "embed",
                                    $ref: "#/definitions/embed"
                                },
                                {
                                    title: "teaser",
                                    $ref: "#/definitions/teaser"
                                }
                            ]
                        }
                    }
                }
            }
        }
    },
    definitions: {
        embed: {
            type: "object",
            title: "Embed",
            "editron:ui": {
                attrs: {
                    "widget-type": "module"
                }
            },
            properties: {
                type: { type: "string", default: "embed", pattern: "^embed$", "editron:ui": { hidden: true } },
                title: { type: "string" }
            }
        },
        teaser: {
            type: "object",
            title: "Teaser",
            "editron:ui": {
                attrs: {
                    "widget-type": "module"
                }
            },
            properties: {
                type: { type: "string", default: "teaser", pattern: "^teaser", "editron:ui": { hidden: true } },
                title: { type: "string" }
            }
        }
    }
};

const data = {
    content: [
        {
            title: "erste",
            content: [
                { type: "embed", title:"first embed" }
            ]
        },
        {
            title: "",
            content: []
        }
    ]
};

const $editor = document.querySelector(".editor") as HTMLElement;
const editron = new Controller(schema, data);
editron.editors.unshift(SortableArrayEditor);
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;
