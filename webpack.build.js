const path = require("path");
const webpack = require("webpack");
const PRODUCTION = process.env.NODE_ENV === "production";
const TARGET_FOLDER = PRODUCTION ? "dist" : "build";


const config = {
    entry: {
        "editron-core": path.join(__dirname, "editron-core.js")
    },
    output: {
        filename: "[name].js",
        library: ["editronCore"],
        path: path.resolve(__dirname, TARGET_FOLDER)
    },

    context: __dirname,
    target: "web",
    devtool: PRODUCTION ? false : "source-map",

    externals: {
        mithril: "m"
    },

    resolve: {
        modules: [".", "node_modules"],
        alias: {
            mitt: path.resolve("./node_modules/mitt/dist/mitt.js"),
            "medium-editor-styles": path.resolve("./node_modules/medium-editor/dist/css/medium-editor.min.css"),
            "medium-editor-theme": path.resolve("./node_modules/medium-editor/dist/css/themes/flat.min.css")
        }
    },

    module: {
        rules: [
            {
                test: /.*.js$/,
                loader: require.resolve("babel-loader"),
                include: [
                    path.resolve(__dirname, "app"),
                    path.resolve(__dirname, "lib"),
                    /json-.*\//, /mithril-.*\//, /editron-.*\//
                ],
                options: {
                    presets: [require.resolve("babel-preset-es2015")],
                    plugins: [
                        require.resolve("babel-plugin-transform-object-assign"),
                        require.resolve("babel-plugin-transform-object-rest-spread") // redux-undo
                    ],
                    babelrc: false,
                    cacheDirectory: true
                }
            },
            {
                loaders: [
                    "file-loader?name=index.html",
                    "extract-loader",
                    "html-loader"
                ],
                include: [path.join(__dirname, "test", "support", "local-setup.html")]
            },
            {
                loaders: "json-loader",
                test: /\.json$/
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({ DEBUG: !PRODUCTION }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(path.join(__dirname, TARGET_FOLDER, "manifest.json")),
            sourceType: "var"
        })
    ].concat(PRODUCTION ? [
        new (require("uglifyjs-webpack-plugin"))({
            sourceMap: false,
            compress: { drop_console: true }
        })
    ] : [])
};


module.exports = config;
