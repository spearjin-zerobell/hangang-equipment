const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  module: {
    ...module,
    rules: [
      ...module.rules,
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              [
                '@babel/preset-env',
                {
                  targets: 'current',
                  corejs: 3,
                  useBuiltIns: 'usage',
                },
              ],
            ],
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
    ],
  },
});
