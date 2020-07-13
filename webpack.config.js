/* eslint-env node */
const path = require("path");
const webpack = require("webpack");
const PRODUCTION = process.env.NODE_ENV === "production";
const TARGET_FOLDER = PRODUCTION ? "dist" : "build";


const editronModulesConfig = {
    mode: PRODUCTION ? "production" : "development",
    entry: [
        path.join(__dirname, "editron"),
        path.join(__dirname, "editron.scss"),
        path.resolve("./node_modules/mithril-material-forms"),
        path.resolve("./node_modules/json-schema-library"),
        path.resolve("./node_modules/gson-pointer"),
        path.resolve("./node_modules/mitt"),
        path.resolve("./node_modules/jsondiffpatch"),
        path.resolve("./node_modules/diff_match_patch")
    ],
    output: {
        filename: "editron-modules.js",
        library: ["editronModules"],
        path: path.resolve(__dirname, TARGET_FOLDER)
    },

    context: __dirname,
    target: "web",
    devtool: PRODUCTION ? false : "source-map",

    externals: {
        mithril: "m"
    },

    resolve: {
        symlinks: false,
        extensions: [".tsx", ".ts", ".js"],
        modules: [".", "node_modules"],
        alias: {
            editron: path.resolve("./node_modules/editron"),
            mitt: path.resolve("./node_modules/mitt/dist/mitt.js"),
            "medium-editor-styles": path.resolve("./node_modules/medium-editor/dist/css/medium-editor.min.css"),
            "medium-editor-theme": path.resolve("./node_modules/medium-editor/dist/css/themes/flat.min.css"),
            // ensure dependencies are unique (not bundled multiple times)
            "json-schema-library": path.resolve("./node_modules/json-schema-library"),
            "gson-pointer": path.resolve("./node_modules/gson-pointer"),
            "mithril-material-forms": path.resolve("./node_modules/mithril-material-forms")
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: path.resolve(__dirname, "tsconfig.json"),
                        compilerOptions: {
                            sourceMap: !PRODUCTION
                        }
                    }
                }
            },
            {
                test: /.*.js$/,
                loader: require.resolve("babel-loader"),
                include: [
                    path.resolve(__dirname, "app"),
                    path.resolve(__dirname, "lib"),
                    /json-.*\//, /mithril-.*\//, /editron.*\//
                ],
                options: {
                    presets: [require.resolve("@babel/preset-env")],
                    plugins: [
                        require.resolve("@babel/plugin-transform-object-assign"),
                        require.resolve("@babel/plugin-proposal-object-rest-spread") // redux-undo
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
            },
            {
                loaders: [
                    "file-loader?name=index.html",
                    "extract-loader",
                    "html-loader"
                ],
                include: [path.join(__dirname, "app", "index.html")]
            }
        ]
    },

    optimization: {
        minimizer: [].concat(PRODUCTION ? [
            new (require("uglifyjs-webpack-plugin"))({
                sourceMap: false,
                uglifyOptions: {
                    compress: { drop_console: true }
                }
            })
        ] : [])
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({ DEBUG: !PRODUCTION }),
        new webpack.DllPlugin({
            name: "editronModules",
            path: path.join(__dirname, TARGET_FOLDER, "manifest.json")
        })
    ]
};


module.exports = editronModulesConfig;
