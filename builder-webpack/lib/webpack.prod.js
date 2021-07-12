/*
 * @Author: json
 * @Date: 2021-07-12 08:04:35
 * @LastEditTime: 2021-07-12 08:21:14
 * @LastEditors: json
 * @Description: prod
 * @FilePath: /webpack/builder-webpack/lib/webpack.prod.js
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  // 拆分公共模块
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /(react|react-dom)/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
