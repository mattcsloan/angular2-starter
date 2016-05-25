var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssNext = require('postcss-cssnext');
var helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    app: './src/main'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.s?css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss?sourceMap?sass?sourceMap')
      },
      {
        test: /\.s?css$/,
        include: helpers.root('src', 'app'),
        loaders: ['to-string', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  postcss: function() {
    return [
      cssNext
    ];
  }
};
