/*
 * @Author: json
 * @Date: 2021-07-12 08:04:14
 * @LastEditTime: 2021-07-12 08:21:22
 * @LastEditors: json
 * @Description: dev
 * @FilePath: /webpack/builder-webpack/lib/webpack.dev.js
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')
const devConfig = {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './public',
    stats: 'errors-only',
    open: true,
    hot: true,
  },
}

module.exports = merge(baseConfig, devConfig)