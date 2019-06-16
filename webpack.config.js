const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const common = require('./build/common');
const dev = require('./build/dev');
const pro = require('./build/pro');
const config = require('./project.config');

const SMP = new SpeedMeasurePlugin();

const env = process.env.APP_ENV;

module.exports = () => {
  let result;

  if (env == 'dev') {
    const options = {
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
      devServer: {
        hot: true,
        port: 8080,
        proxy: config.proxy,
        inline: true,
        compress: true,
        contentBase: path.resolve('dist'),
        historyApiFallback: true,
      },
      devtool: '#source-map',
    };

    result = Merge(common, dev, options);
  } else if (env === 'pro') {
    result = Merge(common, pro);
  }

  return SMP.wrap(result);
};
