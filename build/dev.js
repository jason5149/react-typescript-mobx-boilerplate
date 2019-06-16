const path = require('path');
const MinCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
		path: path.join(__dirname, '../dist'),
		filename: 'js/[name].js',
  },
  plugins: [
    new MinCssExtractPlugin({
      filename: 'css/style.css',
      chunkFilename: '[id].css',
    }),
  ],
};
