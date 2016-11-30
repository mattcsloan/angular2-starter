const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              sourceMap: false,
              inlineSourceMap: true,
              forkChecker: true,
              useCache: true,
              module: 'commonjs'
            }
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.ts$/,
        enforce: 'post',
        use: 'istanbul-instrumenter-loader',
        include: path.resolve(__dirname, '../src'),
        exclude: [/\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'null-loader'
      },
      {
        test: /\.s?css$/,
        use: 'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      path.resolve(__dirname, '../src')
    )
  ]
};
