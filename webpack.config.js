const path = require("path");
const webpack = require("webpack");
const PRODUCTION = process.env.NODE_ENV === "production";


const config = {
    entry: {
        editron: path.join(__dirname, "index.js"),
        styles: path.join(__dirname, "styles.js")
    },
    output: {
        filename: "[name].js",
        library: ["editron"],
        path: path.resolve(__dirname, PRODUCTION ? "dist" : "build")
    },

    context: __dirname,
    target: "web",
    devtool: PRODUCTION ? false : "source-map",

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
                test: /.*\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                loader: "url-loader",
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff\d?$|\.ttf$|\.eot|\.otf|\.wav$|\.mp3$/
            },
            {
                test: [/wysiwyg-editor.scss/, /core.scss$/],
                use: [
                    "file-loader?name=[name].css",
                    "extract-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [path.join(__dirname, "node_modules")]
                        }
                    }
                ]
            },
            {
                loaders: [
                    "file-loader?name=index.html",
                    "extract-loader",
                    "html-loader"
                ],
                include: [path.join(__dirname, "app", "index.html")]
            },
            {
                loaders: "json-loader",
                test: /\.json$/
            }
        ]
    },

    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 8080
    },

    plugins: [
        new webpack.DefinePlugin({
            DEBUG: true
        })
    ].concat(PRODUCTION ? [
        new (require("uglifyjs-webpack-plugin"))({
            sourceMap: false,
            compress: { drop_console: true }
        })
    ] : [])
};


module.exports = config;
