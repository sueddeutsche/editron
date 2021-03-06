/* eslint-env node */
const path = require("path");
const webpack = require("webpack");
const PRODUCTION = process.env.NODE_ENV === "production";
const TARGET_FOLDER = PRODUCTION ? "dist" : "build";
const TerserPlugin = require("terser-webpack-plugin");


const config = {
    mode: PRODUCTION ? "production" : "development",
    entry: {
        editron: path.join(__dirname, "editron.ts")
    },
    output: {
        filename: "[name].js",
        library: ["editron"],
        path: path.resolve(__dirname, TARGET_FOLDER)
    },

    context: __dirname,
    target: "web",
    devtool: PRODUCTION ? false : "source-map",

    externals: {
        mithril: "m"
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [".", "node_modules"],
        alias: {
            nanoevents: path.resolve("./node_modules/nanoevents/index.js"),
            "medium-editor-styles": path.resolve("./node_modules/medium-editor/dist/css/medium-editor.min.css"),
            "medium-editor-theme": path.resolve("./node_modules/medium-editor/dist/css/themes/flat.min.css"),
            "json-schema-library": path.resolve("./node_modules/json-schema-library")
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
                    /json-.*\//, /editron.*\//
                ],
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: 'usage',
                                corejs: 3
                            }
                        ]
                    ],
                    plugins: [
                        "@babel/plugin-transform-runtime",
                        "@babel/plugin-transform-object-assign",
                        "@babel/plugin-proposal-object-rest-spread"
                    ]
                }
            },
            {
                test: /.*.html$/,
                loaders: [
                    "file-loader?name=index.html",
                    "extract-loader",
                    "html-loader"
                ],
                // include: [path.join(__dirname, "test", "support", "local-setup.html")]
            }
        ]
    },

    optimization: {
        minimizer: [].concat(PRODUCTION ? [
            new TerserPlugin()
            // new (require("uglifyjs-webpack-plugin"))({
            //     sourceMap: false,
            //     uglifyOptions: {
            //         compress: { drop_console: true } // eslint-disable-line @typescript-eslint/camelcase
            //     }
            // })
        ] : [])
    },

    plugins: [
        new webpack.DefinePlugin({ DEBUG: !PRODUCTION }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(path.join(__dirname, TARGET_FOLDER, "manifest.json")),
            sourceType: "var"
        })
    ]
};


module.exports = config;
