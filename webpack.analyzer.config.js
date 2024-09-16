const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require("./webpack.config.js");

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  ...baseConfig
}