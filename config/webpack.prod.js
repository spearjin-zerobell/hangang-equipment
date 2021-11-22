const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const __ROOT = process.cwd();

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__ROOT, 'dist'),
  },
});
