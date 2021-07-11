const path = require('path');
const MiniCssExtiactPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(`${__dirname}/dist`),
    filename: '[name]_[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
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
      filename: '[name]_[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(`${__dirname}/src/index.html`),
      filename: 'index.html',
      chunks: ['app'],
      inject: true,
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(`${__dirname}/src/search.html`),
      filename: 'search.html',
      chunks: ['search'],
      inject: true,
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
      },
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],

  devServer: {
    contentBase: './public',
    stats: 'errors-only',
    open: true,
    hot: true,
  },
};
