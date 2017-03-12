const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader'
        }]
      },
    ],
  },
  entry: {
    app: './serverEntry.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  target: "node"
};
