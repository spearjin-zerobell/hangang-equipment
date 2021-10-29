require('dotenv').config();
const path = require('path');
const __ROOT = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
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
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__ROOT, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '한강설비',
      template: 'src/index.html',
    }),
  ],
};
