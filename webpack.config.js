'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].bundle.js'),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: false
  }),
  new SassLintPlugin({
    glob: 'src/**/*.scss',
  })
];

const devPlugins = [];

const prodPlugins = [
  new webpack.optimize.OccurrenceOrderPlugin(true),
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    compress: {
      warnings: false
    }
  })
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

const entries = {
  app: ['./src/index'],
  vendor: [
    'es5-shim',
    'es6-shim',
    'es6-promise',
    'angular2/bundles/angular2-polyfills',
    'angular2/bootstrap',
    'angular2/platform/browser',
    'angular2/platform/common_dom',
    'angular2/core',
    'angular2/router',
    'angular2/http'
  ]
};

if (process.env.NODE_ENV === 'development') {
  for (let entry in entries) {
    entries[entry].unshift('webpack-dev-server/client?http://localhost:8080/');
  }
}

module.exports = {
  entry: entries,

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    host: 'localhost',
    port: 8080
  },

  devtool: 'source-map',

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['tslint']
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['ts']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['to-string', 'css', 'postcss', 'sass']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ['raw']
      }
    ]
  },

  plugins: plugins,

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  postcss: function() {
    return [
      require('postcss-cssnext')
    ];
  }
};
