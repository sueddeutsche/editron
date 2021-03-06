/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");
const webpack = require("webpack");
const PRODUCTION = process.env.NODE_ENV === "production";
const TARGET_FOLDER = PRODUCTION ? "dist" : "build";
function createConfig(jsFilename, scssFilename, projectRoot = process.cwd()) {
    return {
        mode: PRODUCTION ? "production" : "development",
        entry: [
            path.join(projectRoot, jsFilename),
            path.join(projectRoot, scssFilename)
        ],
        output: {
            filename: jsFilename,
            path: path.resolve(projectRoot, TARGET_FOLDER)
        },
        target: "web",
        context: projectRoot,
        devtool: PRODUCTION ? false : "source-map",
        externals: {
            mithril: "m"
        },
        resolve: {
            symlinks: false,
            modules: [".", "node_modules"],
            alias: {
                "mithril-material-forms": "editron/node_modules/mithril-material-forms",
                "json-schema-library": "editron/node_modules/json-schema-library",
                "gson-pointer": "editron/node_modules/gson-pointer",
                nanoevents: "editron/node_modules/nanoevents"
            }
        },
        module: {
            rules: [
                {
                    test: /.*.js$/,
                    loader: require.resolve("babel-loader"),
                    include: [
                        path.resolve(projectRoot, "app"),
                        path.resolve(projectRoot, "lib"),
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
                    loaders: [
                        require.resolve("style-loader"),
                        require.resolve("css-loader")
                    ]
                },
                {
                    test: [new RegExp(scssFilename)],
                    use: [
                        `${require.resolve("file-loader")}?name=[name].css`,
                        require.resolve("extract-loader"),
                        require.resolve("css-loader"),
                        {
                            loader: require.resolve("sass-loader"),
                            options: {
                                includePaths: [path.join(projectRoot, "node_modules")]
                            }
                        }
                    ]
                }
            ]
        },
        devServer: {
            disableHostCheck: true,
            host: "0.0.0.0",
            port: 8080
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
            new webpack.DllReferencePlugin({
                context: path.join(projectRoot, "node_modules", "editron"),
                manifest: require(path.join(__dirname, "..", TARGET_FOLDER, "/manifest.json")),
                sourceType: "var"
            }),
            new webpack.DefinePlugin({
                DEBUG: !PRODUCTION
            })
        ]
    };
}
module.exports = {
    createConfig
};
