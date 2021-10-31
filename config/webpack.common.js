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
        use: ['style-loader', { loader: 'css-loader', options: { sourceMap: true } }],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.module.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:3]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
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
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        generator: {
          filename: 'static/images/[hash][ext][query]',
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
