declare const _default: {
    title: string;
    type: string;
    description: string;
    "editron:ui": {};
    properties: {
        title: {
            type: string;
            title: string;
            minLength: number;
            "editron:ui": {
                instantUpdate: boolean;
            };
        };
        teaser: {
            type: string;
            title: string;
            format: string;
        };
        active: {
            type: string;
            title: string;
            format: string;
            default: boolean;
        };
        autocomplete: {
            title: string;
            type: string;
            format: string;
            "editron:ui": {
                autocomplete: {
                    valueProp: string;
                    suggestions: {
                        name: string;
                        code: string;
                    }[];
                };
            };
        };
        intro: {
            "editron:ui": {
                attrs: {
                    class: string;
                };
                title: string;
            };
            oneOfProperty: string;
            oneOf: ({
                type: string;
                title: string;
                "editron:ui": {
                    headerContent: string;
                };
                properties: {
                    type: {
                        type: string;
                        default: string;
                        pattern: string;
                        "editron:ui": {
                            hidden: boolean;
                        };
                    };
                    title: {
                        type: string;
                        minLength: number;
                    };
                    description?: undefined;
                };
            } | {
                type: string;
                title: string;
                properties: {
                    type: {
                        type: string;
                        default: string;
                        pattern: string;
                        "editron:ui": {
                            hidden: boolean;
                        };
                    };
                    title: {
                        type: string;
                        minLength?: undefined;
                    };
                    description: {
                        type: string;
                        format: string;
                    };
                };
                "editron:ui"?: undefined;
            })[];
        };
        visible: {
            type: string;
            title: string;
            default: boolean;
        };
        details: {
            title: string;
            type: string;
            "editron:ui": {
                object: {
                    collapsed: boolean;
                };
            };
            properties: {
                description: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                };
                layout: {
                    title: string;
                    type: string;
                    "editron:ui": {
                        invertOrder: boolean;
                    };
                    enum: string[];
                };
            };
        };
        list: {
            title: string;
            type: string;
            "editron:ui": {
                icon: string;
                attrs: {
                    class: string;
                };
                sortable: {
                    group: string;
                    handle: string;
                };
                array: {
                    addTitle: string;
                    insert: boolean;
                    insertTitle: string;
                };
                overlay: {
                    header: string;
                };
            };
            items: {
                oneOfProperty: string;
                oneOf: {
                    description: string;
                    $ref: string;
                }[];
            };
        };
        simple: {
            title: string;
            type: string;
            "editron:ui": {
                array: {
                    showIndex: boolean;
                    addTitle: string;
                };
            };
            items: {
                type: string;
                description: string;
            };
        };
    };
    definitions: {
        list: {
            title: string;
            type: string;
            "editron:ui": {
                icon: string;
                attrs: {
                    class: string;
                };
            };
            properties: {
                type: {
                    type: string;
                    default: string;
                    pattern: string;
                    "editron:ui": {
                        hidden: boolean;
                    };
                };
                list: {
                    type: string;
                    minLength: number;
                    items: {
                        type: string;
                        "editron:ui": {
                            attrs: {
                                class: string;
                            };
                        };
                        properties: {
                            option: {
                                type: string;
                                "editron:ui": {
                                    theme: string;
                                };
                                enum: string[];
                            };
                            title: {
                                type: string;
                                title: string;
                                "editron:ui": {
                                    theme: string;
                                };
                            };
                            content: {
                                type: string;
                                title: string;
                                format: string;
                                "editron:ui": {
                                    theme: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        inline: {
            title: string;
            type: string;
            "editron:ui": {
                icon: string;
                object: {
                    collapsed: boolean;
                };
                attrs: {
                    class: string;
                };
            };
            properties: {
                type: {
                    type: string;
                    default: string;
                    pattern: string;
                    "editron:ui": {
                        hidden: boolean;
                    };
                };
                title: {
                    title: string;
                    type: string;
                };
                description: {
                    title: string;
                    type: string;
                    format: string;
                };
                details: {
                    type: string;
                    "editron:ui": {
                        delegate: {
                            delegateTo: string;
                        };
                    };
                    properties: {
                        layout: {
                            title: string;
                            type: string;
                            enum: string[];
                        };
                        visible: {
                            title: string;
                            type: string;
                        };
                    };
                };
            };
        };
        external: {
            title: string;
            type: string;
            "editron:ui": {
                icon: string;
                attrs: {
                    class: string;
                };
            };
            properties: {
                type: {
                    type: string;
                    default: string;
                    pattern: string;
                    "editron:ui": {
                        hidden: boolean;
                    };
                };
                title: {
                    title: string;
                    type: string;
                };
                description: {
                    title: string;
                    type: string;
                    format: string;
                };
                details: {
                    type: string;
                    "editron:ui": {
                        delegate: boolean;
                    };
                    properties: {
                        layout: {
                            title: string;
                            type: string;
                            enum: string[];
                        };
                        visible: {
                            title: string;
                            type: string;
                            default: boolean;
                        };
                    };
                };
            };
        };
    };
};
export default _default;
