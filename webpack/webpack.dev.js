const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    port: 8080
  }
};
