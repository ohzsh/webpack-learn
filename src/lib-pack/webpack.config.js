// 使用 TerserPlugin 压缩插件
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // production 默认会对所有代码压缩 这里默认全部不压缩 主动控制test-library.min 压缩
  mode: 'none',
  main: 'index.js',
  entry: {
    'test-library': './src/index.js',
    'test-library.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'test-library',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
};
