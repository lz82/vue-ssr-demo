const baseConfig = require('./webpack.base.config.js');
const path = require('path');
// const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const config = WebpackMerge(baseConfig, {
  mode: 'production',

  // devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js'
  },

  module: {
    rules: [{
      test: /\.less$/,
      use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'less-loader'
      ]
    }]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },

  plugins: [
  new MiniCssExtractPlugin(),

  new PrerenderSpaPlugin({
    staticDir: path.resolve(__dirname, '../dist')
  })
  ]

});

module.exports = config;
