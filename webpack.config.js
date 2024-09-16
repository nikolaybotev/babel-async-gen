const path = require("path");

module.exports = {
  entry: "./async-iter-helpers.js", // Entry point
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "production", // Set the mode to development
  optimization: {
    minimize: true, // Disable minification
  },
  target: "node0.10",
  module: {
    rules: [
      {
        test: /\.c?js$/, // Apply this rule to .js files
        exclude: /node_modules\/(?!streams)/,
        use: {
          loader: "babel-loader", // Use Babel loader
        },
      },
    ],
  },
  stats: {
    loggingDebug: ["babel-loader"]
  },
};
