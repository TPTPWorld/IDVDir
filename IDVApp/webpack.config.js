
const path = require("path");

module.exports = {
    entry: "./helpers.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    mode: "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"],
        fallback: {
          fs: false,
          module: false,
          net: false,
        },
    },
}