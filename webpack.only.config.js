const path = require("path");

module.exports = {
  entry: "./async-iter-helpers.js",
  output: {
    filename: "bundle-min-only.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  optimization: {
    minimize: true,
  },
  target: "node0.10",
  module: {
    rules: [],
  },
  stats: {
    loggingDebug: ["swc-loader"]
  },
};
