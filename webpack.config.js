const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.tsx'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
  },
  module: {
    rules: [
      {
        test:/\.ts(x?)$/,
        use: ['awesome-typescript-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};