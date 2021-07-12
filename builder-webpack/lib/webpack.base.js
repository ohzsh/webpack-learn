/*
 * @Author: json
 * @Date: 2021-07-12 08:03:38
 * @LastEditTime: 2021-07-12 08:12:17
 * @LastEditors: json
 * @Description: webpack 公共配置
 * @FilePath: /webpack/builder-webpack/lib/webpack.base.js
 */
const path = require('path');
const MiniCssExtiactPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { glob } = require('glob');

/**
 * 设置多页面打包
 */
const setMPA = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, '/src/pages/*/index.js'));

  Object.keys(entryFiles).forEach((index) => {
    const entryFile = entryFiles[index];
    const pageName = entryFile.match(/src\/pages\/(.*)\/index\.js/)[1];
    entry[pageName] = entryFile;
    HtmlWebpackPlugins.push(new HtmlWebpackPlugin({
      template: path.join(`${__dirname}/src/pages/${pageName}/index.html`),
      filename: `${pageName}.html`,
      chunks: ['vendors', pageName],
      inject: true,
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
    }));
  });
  return { entry, HtmlWebpackPlugins };
};

const { entry, HtmlWebpackPlugins } = setMPA();

module.exports = {
  entry,
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /.css$/,
        use: [
          MiniCssExtiactPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /.less$/,
        use: [
          MiniCssExtiactPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ],
      },
      // {
      //   test: /.(png|svg|jpg|gif|jpeg)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      {
        test: /.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'img/[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtiactPlugin({
      filename: 'css/[name]_[contenthash:8].css',
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    ...HtmlWebpackPlugins,
  ],
};
