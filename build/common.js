const path = require('path');
const webpack = require('webpack');
const TsImportPlugin = require('ts-import-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('../project.config');

const env = process.env.APP_ENV;
const mode = process.env.NODE_ENV;

const { outputDir, publicPath } = config;

module.exports = {
  mode,
  entry: {
    vendor: ['react', 'react-dom', 'mobx', 'mobx-react'],
    bundle: './src/index.tsx',
  },
  output: {
    path: outputDir,
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              /**
               * replace babel-plugin-import by ts plugin
               */
              getCustomTransformers: () => ({
                before: [TsImportPlugin({
                  libraryName: 'antd',
                  libraryDirectory: 'lib',
                  style: 'css',
                })],
              }),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    alias: {
      '@assets': path.resolve('src', 'assets'),
      '@components': path.resolve('src', 'components'),
      '@models': path.resolve('src', 'models'),
      '@pages': path.resolve('src', 'pages'),
      '@routes': path.resolve('src', 'routes'),
      '@styles': path.resolve('src', 'styles'),
    },
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(), 
      new OptimizeCssAssetsPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendors: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'initial',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify(env),
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};