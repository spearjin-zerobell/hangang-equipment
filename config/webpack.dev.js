const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const __ROOT = process.cwd();

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: process.env.PORT,
    hot: true,
    static: {
      directory: path.resolve(__ROOT, 'public'),
    },
    liveReload: true,
    client: { overlay: false },
    host: '0.0.0.0',
  },
});
