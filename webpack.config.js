const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require('vue-loader');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: 'development',

  entry: {
    app: './src/main.js'
  },

  devtool: '',

  devServer: {
    contentBase: './dist',
    port: 9000,
    host: '127.0.0.1',
    overlay: {
      errors: true
    },
    hot: true
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
    new cleanWebpackPlugin(['dist']),

    new VueLoaderPlugin(),

    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin()
  ],

  optimization: {
    minimize: true
  }
};

module.exports = config;
