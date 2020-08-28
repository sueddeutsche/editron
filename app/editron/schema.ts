export default {
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
                    insert: true,
                    passActions: true
                },
                overlay: {
                    header: "Pick your item"
                }
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
                    },
                    {
                        description: "test nested lists",
                        $ref: "#/definitions/list"
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
        list: {
            title: "nested list",
            type: "object",
            properties: {
                type: {
                    type: "string",
                    default: "nestedlist",
                    pattern: "^nestedlist$",
                    "editron:ui": {
                        hidden: true
                    }
                },
                list: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            option: {
                                type: "string",
                                enum: ["opinion", "exclusive", "news"]
                            },
                            title: {
                                type: "string"
                            },
                            content: {
                                type: "string",
                                format: "textarea"
                            }
                        }
                    }
                }
            }
        },
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
