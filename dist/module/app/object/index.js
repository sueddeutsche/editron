import Controller from "../../src/Editron";
import RemoteDataPlugin from "../../src/plugin/remotedataplugin";
import SyncPlugin from "../../src/plugin/syncplugin";
import "./index.scss";
import "./index.html";
const schema = {
    title: "An object with collapsable property",
    type: "object",
    properties: {
        title: {
            type: "string",
            title: "Title",
            minLength: 1,
            "editron:ui": {
                sync: {
                    fromTo: {
                        "../overwrite/title": ""
                    }
                }
            }
        },
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
                    format: "textarea"
                },
                layout: {
                    "editron:ui": {
                        attrs: {
                            invertOrder: true
                        }
                    },
                    title: "Layout",
                    type: "string",
                    enum: ["default", "small", "large"]
                }
            }
        },
        overwrite: {
            title: "Overwrite",
            type: "object",
            "editron:ui": {
                sync: {
                    fromTo: {
                        "../remote/title": "title",
                        "../remote/teaser": "teaser"
                    }
                }
            },
            properties: {
                referenceId: {
                    title: "ID",
                    type: "string",
                    enum: ["", "animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"],
                    default: ""
                },
                title: {
                    title: "Titel",
                    type: "string",
                    "editron:ui": {
                        instantUpdate: true
                    }
                },
                teaser: {
                    title: "Teaser",
                    type: "string",
                    format: "textarea"
                }
            }
        },
        remote: {
            title: "Remote",
            type: "object",
            "editron:ui": {
                remoteData: {
                    source: "../overwrite/referenceId",
                    url: "https://api.chucknorris.io/jokes/random?category={{referenceId}}",
                    overwrite: true,
                    set: {
                        "url": "title",
                        "value": "teaser"
                    }
                }
            },
            properties: {
                title: {
                    type: "string",
                    title: "Titel",
                    "editron:ui": {
                        disabled: true
                    }
                },
                teaser: {
                    type: "string",
                    title: "Teaser",
                    format: "textarea",
                    "editron:ui": {
                        disabled: true
                    }
                }
            }
        }
    }
};
const data = {};
const $editor = document.querySelector(".editor");
const editron = new Controller(schema, data, {
    proxy: {
        handlers: [
            {
                use: (config) => {
                    var _a;
                    // console.log("use?", config);
                    return ((_a = config.source) === null || _a === void 0 ? void 0 : _a.includes("api.chucknorris.io")) === true;
                },
                json({ source }) {
                    // console.log("fetch json", source);
                    return fetch(source, {
                        headers: {
                            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
                        }
                    }).then(response => response.json());
                }
            }
        ],
    },
    plugins: [
        new RemoteDataPlugin(),
        new SyncPlugin()
    ]
});
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;
