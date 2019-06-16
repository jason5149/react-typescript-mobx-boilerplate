const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforceBuildPatterns: ['dist'],
    }),
    new MinCssExtractPlugin({
      filename: 'css/style.[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
};
