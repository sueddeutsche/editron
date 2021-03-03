import Controller from "../../src/Editron";
import SortablePlugin from "../../src/plugin/sortableplugin";
import "./index.scss";
import "./index.html";
const schema = {
    title: "An object with collapsable property",
    type: "object",
    properties: {
        list: {
            title: "Array-Tests:",
            type: "array",
            "editron:ui": {
                sortable: {}
            },
            items: {
                oneOfProperty: "type",
                oneOf: [
                    {
                        title: "ONE",
                        type: "object",
                        properties: {
                            type: {
                                "editron:ui": {
                                    hidden: true
                                },
                                type: "string",
                                pattern: "^item1$",
                                default: "item1"
                            },
                            description: {
                                type: "array",
                                minLength: 1,
                                items: {
                                    type: "string"
                                }
                            },
                        }
                    },
                    {
                        title: "TWO",
                        type: "object",
                        properties: {
                            type: {
                                "editron:ui": {
                                    hidden: true
                                },
                                type: "string",
                                pattern: "^item2$",
                                default: "item2"
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
            type: "item2",
            description: "Hans"
        },
        {
            type: "item1",
            description: ["123", "abc", "def"]
        },
        {
            type: "item1",
            description: ["123", "abc", "def"]
        },
        {
            type: "item1",
            description: ["123", "abc", "def"]
        },
        {
            type: "item2",
            description: "Hans"
        },
        {
            type: "item2",
            description: "Hans"
        },
        {
            type: "item2",
            description: "Hans"
        },
        {
            type: "item2",
            description: "Hans"
        },
        {
            type: "item2",
            description: "Hans"
        },
        {
            type: "item2",
            description: "Hans"
        },
        {
            type: "item2",
            description: "Hans"
        },
        {
            type: "item1",
            description: ["abc", "1234"]
        },
        {
            type: "item2",
            description: "Hans"
        }
    ]
};
const $editor = document.querySelector(".editor");
const editron = new Controller(schema, data, {
    plugins: [
        new SortablePlugin()
    ]
});
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;
