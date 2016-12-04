var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './app/index',
  output: {
    path: './public',
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: './public'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/, /dist/],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(eot|ttf|svg|gif|png|jpg|jpeg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
