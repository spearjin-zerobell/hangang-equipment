require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');
const __ROOT = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [['postcss-preset-env', 'autoprefixer']],
    },
  },
};

const cssLoader = { loader: 'css-loader', options: { sourceMap: true, importLoaders: 2 } };

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', { ...cssLoader, options: { ...cssLoader.options, importLoaders: 1 } }, postCssLoader],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module.s[ac]ss$/i,
        use: ['style-loader', cssLoader, postCssLoader, { loader: 'sass-loader', options: { sourceMap: true } }],
      },
      {
        test: /\.module.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            ...cssLoader,
            options: {
              ...cssLoader.options,
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:3]',
              },
            },
          },
          postCssLoader,
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
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '한강설비',
      template: 'src/index.html',
      favicon: './favicon.png',
      kakaoAPIKey: process.env.kakaoAPIKey,
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin(),
  ],
};
