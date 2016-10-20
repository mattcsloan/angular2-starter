const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const SassLintPlugin = require('sasslint-webpack-plugin');
const cssNext = require('postcss-cssnext');

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
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['babel', 'awesome-typescript']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.ico$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.s?css$/,
        exclude: path.resolve(__dirname, '../src/app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss?sourceMap!sass?sourceMap')
      },
      {
        test: /\.s?css$/,
        include: path.resolve(__dirname, '../src/app'),
        loaders: ['to-string', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap']
      }
    ]
  },

  plugins: [
    new SassLintPlugin({
      glob: 'src/**/*.s?(a|c)ss'
    }),
    new ForkCheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],

  postcss: () => {
    return [
      cssNext
    ];
  }
};
