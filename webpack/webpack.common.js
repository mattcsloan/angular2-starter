const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const SassLintPlugin = require('sasslint-webpack-plugin');
const cssNext = require('postcss-cssnext');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              forkChecker: true,
              useCache: true
            }
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.ico$/,
        use: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.s?css$/,
        exclude: path.resolve(__dirname, '../src/app'),
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?importLoaders=2!postcss-loader!sass-loader'
        })
      },
      {
        test: /\.s?css$/,
        include: path.resolve(__dirname, '../src/app'),
        use: [
          'to-string-loader',
          'css-loader?importLoaders=2',
          'postcss-loader',
          'sass-loader'
        ]
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
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      path.resolve(__dirname, '../src')
    )
  ]
};
