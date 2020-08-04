import Controller from "../../src/Controller";
import "./index.scss";
import "./index.html";
import SortablePlugin from "../../src/plugin/sortableplugin";


const schema = {
    type: "object",
    properties: {
        groups: {
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
                            oneOfProperty: "type",
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
                title: { type: "string", minLength: 1 }
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
                type: { type: "string", default: "teaser", pattern: "^teaser$", "editron:ui": { hidden: true } },
                title: { type: "string", minLength: 1 }
            }
        }
    }
};

const data = {
    groups: [
        {
            title: "Gruppe",
            content: [
                {
                    type: "embed",
                    title: "first embed"
                }
            ]
        }
    ]
};

const $editor = document.querySelector(".editor") as HTMLElement;
const editron = new Controller(schema, data, {
    plugins: [
        new SortablePlugin({})
    ]
});
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;


import m from "mithril";
import Sortable, { SortableEvent } from 'sortablejs';
const $sidebar = <HTMLElement>document.querySelector(".sidebar");
m.render($sidebar, [
    m(".module.module--teaser", { "data-content": `{ "type": "teaser", "title": "MIMIMI" }` }, "Teaser"),
    m(".module.module--embed", { "data-content": `{ "type": "embed", "title": "MIMIMI" }` }, "Embed"),
    m(".module.module--invalid", "Invalid" )
]);

const sortable = new Sortable($sidebar, {
    group: {
        name: "group",
        pull: () => "clone",
        put: false
    },
    sort: false
})
