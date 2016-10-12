const path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript?sourceMap=false&inlineSourceMap=true'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.s?css$/,
        loader: 'raw'
      }
    ],

    postLoaders: [
      {
        test: /\.ts$/,
        loader: 'istanbul-instrumenter-loader',
        include: path.resolve(__dirname, '../src'),
        exclude: [/\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/]
      }
    ]
  }
};
