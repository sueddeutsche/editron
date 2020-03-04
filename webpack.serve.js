/* eslint-env node */
const path = require("path");
const config = require("./webpack.build");

config.plugins = []; // reset
config.entry["index.html"] = path.join(__dirname, "test", "support", "local-setup.html");
config.entry["editron.css"] = path.join(__dirname, "editron.scss");
config.module.rules.push({
    test: [/wysiwyg-editor.scss/, /editron.scss$/],
    use: [
        "file-loader?name=[name].css",
        "extract-loader",
        "css-loader",
        {
            loader: "sass-loader",
            options: {
                sassOptions: {
                    includePaths: [path.join(__dirname, "node_modules")]
                }
            }
        }
    ]
});

module.exports = config;
