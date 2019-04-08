const path = require("path");
const config = require("./webpack.build");

config.entry["index.html"] = path.join(__dirname, "test", "support", "local-setup.html");
config.plugins = [];

module.exports = config;
