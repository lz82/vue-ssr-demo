const baseConfig = require('./webpack.base.config.js');

const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = WebpackMerge(baseConfig, {
  mode: 'development',

  devServer: {
    // contentBase: './dist',
    port: 9000,
    host: '127.0.0.1',
    overlay: {
      errors: true
    },
    hot: true
  },

  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'less-loader']
    }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(), // 把css文件单独打包

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin() // 开启HRM，热更新
  ]
});

module.exports = config;
