const baseConfig = require('./webpack.base.config.js');
const path = require('path');
// const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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

  // new BundleAnalyzerPlugin({
  //   analyzerPort: 8899
  // }),

  new PrerenderSpaPlugin({
    staticDir: path.resolve(__dirname, '../dist'),
    routes: ['', '/home', '/about', '/home/edit', '/home/preview'],
    render: new Renderer({
      renderAfterTime: 20000,
      headless: true,
      renderAfterDocumentEvent: 'render-event'
    })
  })
  ]

});

module.exports = config;
