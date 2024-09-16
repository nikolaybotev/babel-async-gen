const path = require('path');

module.exports = {
    entry: './async-iter-helpers.js', // Entry point
    output: {
        filename: 'bundle.js', // Output bundle file
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'production', // Set the mode to development
    optimization: {
      minimize: false, // Disable minification
    },
    module: {
      rules: [
          {
              test: /\.c?js$/, // Apply this rule to .js files
              exclude: /node_modules\/(?!streams)/, // Exclude the node_modules directory
              use: {
                  loader: 'babel-loader', // Use Babel loader
              },
          },
      ],
  },
};
