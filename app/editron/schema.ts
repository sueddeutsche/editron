export default {
    title: "editron form variations and templates",
    type: "object",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero volo in virtute vim esse quam maximam.",
    "editron:ui": {
    },
    properties: {
        title: {
            type: "string", title: "Title", minLength: 1, "editron:ui": { instantUpdate: true }
        },
        intro: {
            "editron:ui": {
                title: "select intro type"
            },
            oneOfProperty: "type",
            oneOf: [
                {
                    type: "object",
                    title: "Intro A",
                    properties: {
                        type: {
                            type: "string",
                            default: "intro-a",
                            pattern: "^intro-a$",
                            "editron:ui": { hidden: true }
                        },
                        title: {
                            type: "string",
                            minLength: 1
                        }
                    }
                },
                {
                    type: "object",
                    title: "Intro B",
                    properties: {
                        type: {
                            type: "string",
                            default: "intro-b",
                            pattern: "^intro-b$",
                            "editron:ui": { hidden: true }
                        },
                        title: {
                            type: "string"
                        },
                        description: {
                            type: "string",
                            format: "textarea"
                        }
                    }
                },
            ]
        },
        visible: {
            type: "boolean", title: "Visibility", default: true
        },
        details: {
            title: "Details",
            type: "object",

            "editron:ui": {
                attrs: {
                    class: "as-card"
                },
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
            title: "list with mixed objects",
            type: "array",
            "editron:ui": {
                icon: "list",
                attrs: {
                    class: "as-card"
                },
                sortable: {
                    group: "teaser",
                    handle: ".ed-header"
                },
                array: {
                    addTitle: "Neue Gruppe",
                    insert: true,
                    insertTitle: "Neue Gruppe einfügen",
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
            title: "simple list nested in another list",
            type: "object",
            "editron:ui": {
                icon: "list"
            },
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
                    minLength: 1,
                    items: {
                        type: "object",
                        properties: {
                            option: {
                                type: "string",
                                "editron:ui": {
                                    theme: "the-material"
                                },
                                enum: ["opinion", "exclusive", "news"]
                            },
                            title: {
                                type: "string",
                                "editron:ui": {
                                    theme: "the-material"
                                }
                            },
                            content: {
                                type: "string",
                                format: "textarea",
                                "editron:ui": {
                                    theme: "the-material"
                                }
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
