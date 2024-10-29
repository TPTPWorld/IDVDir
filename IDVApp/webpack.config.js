const path = require("path");

module.exports = {
  entry: "./js/helpers.js",
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".mjs"],
    fallback: {
      fs: false,
      module: false,
      net: false,
    },
  },
  mode: "development",
};
