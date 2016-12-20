var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'example'),
  entry: {
    js: ['./app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
        }
      }, {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      }, {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: process.env.NODE_ENV !== 'production'
    }),
    new ExtractTextPlugin('b-rc.min.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'example/index.html')
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8081' })
  ]
};