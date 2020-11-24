const buildConfig = require("./webpack.config");
const path = require("path");
const ROOT = __dirname;
const WebpackShellPlugin = require("webpack-shell-plugin-next");
const glob = require("glob");

const IN_WATCH_MODE = process.argv.find(arg => arg === "--watch" || arg === "-w") != null;


const config = {

    entry: glob.sync("./test/**/*.test.ts"),

    mode: "development",
    context: ROOT,
    target: "web",
    devtool: "source-map",
    output: {
        filename: "[name].js",
        path: path.resolve(ROOT, "testbuild")
    },

    resolve: buildConfig.resolve,

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        // @todo can not be taken from webpack.config.js
                        configFile: path.resolve(ROOT, "./test/tsconfig.json")
                    }
                }
            },
            {
                test: /index\.scss$/,
                use: [
                    "file-loader?name=main.css",
                    "extract-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMaps: true,
                            includePaths: [
                                path.join(ROOT, "node_modules")
                            ]
                        }
                    }
                ]
            },
            {
                test: /index\.html$/,
                use: [
                    "file-loader?name=index.html",
                    "extract-loader",
                    {
                        loader: "html-loader",
                        options: {
                            interpolate: true,
                            root: encodeURIComponent(ROOT),
                            attrs: ["img:src", "source:srcset", "img:data-src", "video:poster"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /index\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMaps: true,
                            includePaths: [
                                path.join(ROOT, "node_modules")
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff\d?$|\.ttf$|\.eot|\.otf|\.wav$|\.mp3$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1000,
                            name: "[name]-[sha256:hash:hex:16].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new WebpackShellPlugin({
            // --exit is required until a fix for non-closed jsdom is found:
            // `dom.window.close()`
            dev: false,
            swallowError: IN_WATCH_MODE,
            onBuildExit: {
                // eslint-disable-next-line max-len
                scripts: ["mocha --exit --require source-map-support/register --require ./test/mocha.setup.js testbuild/main.js"]
            }
        })
    ],

    devServer: {
        port: 8071,
        disableHostCheck: true,
        host: "0.0.0.0"
    }
};


module.exports = config;
