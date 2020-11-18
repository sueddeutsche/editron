// import { Options } from "../../src/editors/objecteditor"
export default {
    type: "object",
    "editron:ui": {
        object: {
            collapsed: true
        }
    },
    properties: {
        title: {
            title: "Demotitel",
            description: "Test string",
            type: "string",
            minLength: 1,
            "editron:ui": {
                title: "Override"
            }
        },
        list: {
            type: "array",
            items: {
                oneOf: [
                    {
                        title: "Eintrag",
                        type: "string"
                    },
                    {
                        title: "Zahl",
                        type: "number"
                    }
                ]
            }
        }
    }
};
