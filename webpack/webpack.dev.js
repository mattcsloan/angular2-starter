const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = 8080;

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: `http://localhost:${port}/`,
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
    port: port
  }
};
