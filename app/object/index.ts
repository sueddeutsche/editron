import Controller from "../../src/Controller";
import RemoteDataPlugin from "../../src/plugin/remotedataplugin";
import "./index.scss";
import "./index.html";


const schema = {
    title: "An object with collapsable property",
    type: "object",
    properties: {
        title: { type: "string", title: "Title", minLength: 1 },
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
                // @todo: must exclude source-values from watch...
                // -> triggers loop: load -> set -> changed -> load again -> random changes thing -> set -> changed ...
                // watch singular fields => support mulitple fields

                remoteData: {
                    url: "https://api.chucknorris.io/jokes/random?category={{referenceId}}",
                    source: "referenceId",
                    set: {
                        // "url": "title",
                        "value": "teaser"
                    }
                }
            },
            properties: {
                referenceId: {
                    title: "ID",
                    type: "string",
                    enum: ["", "animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"],
                    default: ""
                },
                title: {
                    title: "Titel",
                    type: "string"
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
                    set: {
                        "url": "title",
                        "value": "teaser"
                    }
                }
            },
            properties: {
                title: {
                    type: "string",
                    title: "Titel"
                },
                teaser: {
                    type: "string",
                    title: "Teaser",
                    format: "textarea"
                }
            }
        }
    }
};


const data = {};

const $editor = document.querySelector(".editor") as HTMLElement;
const editron = new Controller(schema, data, {
    proxy: {
        handlers: [
            {
                use: (config) => {
                    // console.log("use?", config);
                    return config.source?.includes("api.chucknorris.io") === true;
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
        new RemoteDataPlugin({})
    ]
});
editron.createEditor("#", $editor);
// @ts-ignore
window.controller = editron;
