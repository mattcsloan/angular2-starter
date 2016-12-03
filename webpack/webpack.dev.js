const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = 8080;

module.exports = {
  entry: {
    polyfills: './src/polyfills',
    vendor: './src/vendor',
    app: [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './src/main.hmr'
    ]
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    // @todo: use style loader for HMR
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    port
  }
};
