const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const __ROOT = process.cwd();

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__ROOT, 'dist'),
  },
});
