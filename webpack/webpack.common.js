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
    extensions: ['.ts', '.js']
  },

  module: {
    // https://github.com/AngularClass/angular2-webpack-starter/issues/993
    exprContextCritical: false,

    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          {
            loader: 'awesome-typescript-loader',
            options: {
              forkChecker: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader',
        options: {
          minimize: false
        }
      },
      // TODO: file loader doesn't seem to work w/ options object
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
          loader: 'css-loader!postcss-loader!sass-loader'
        })
      },
      {
        test: /\.s?css$/,
        include: path.resolve(__dirname, '../src/app'),
        use: [
          'to-string-loader',
          'css-loader',
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
    // TODO: better way to do this w/o loaderoptionsplugin?
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => {
          return [
            cssNext
          ];
        }
      }
    })
  ]
};
