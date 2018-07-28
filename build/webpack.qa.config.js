const baseConfig = require('./webpack.base.config.js');

const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log('---------', process.env.NODE_ENV);
const config = WebpackMerge(baseConfig, {
  mode: 'production',

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

  plugins: [
    new MiniCssExtractPlugin()
  ]

});

module.exports = config;
