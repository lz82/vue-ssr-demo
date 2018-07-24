const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
  entry: {
    // app: './src/main.js'
    app: path.resolve(__dirname, '../src/main.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
    {
      test: /\.js$/,
      use: 'babel-loader',
      include: [path.resolve(__dirname, 'src')],
      exclude: [path.resolve(__dirname, 'node_modules')]
    },
    {
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.(jpg|png|jpeg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10,
            name: '[name].min.[ext]'
          }
        },
        'file-loader'
      ]
    }]
  },

  plugins: [
    new cleanWebpackPlugin(['dist']), // 清理打包目录

    new VueLoaderPlugin(), // vue-loader 配套

    new HtmlWebpackPlugin() // html
  ]
};

module.exports = config;
