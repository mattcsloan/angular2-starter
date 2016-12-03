const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    app: './src/main'
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        htmlLoader: {
          minimize: false
        }
      }
    })
  ]
};
