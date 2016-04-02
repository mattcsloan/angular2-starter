var path = require('path');

module.exports = {
  entry: {
    app: './src/index',
    vendor: [
      'es5-shim',
      'es6-shim',
      'es6-promise',
      'angular2/bundles/angular2-polyfills',
      'rxjs',
      'angular2/bootstrap',
      'angular2/platform/browser',
      'angular2/platform/common_dom',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public/assets/',
    filename: '[name].js'
  },

  devServer: {
    contentBase: 'public',
    host: 'localhost',
    port: 8080
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  }
};
