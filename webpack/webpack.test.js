const path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    // https://github.com/AngularClass/angular2-webpack-starter/issues/993
    exprContextCritical: false,

    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              sourceMap: false,
              inlineSourceMap: true,
              forkChecker: true
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
  }
};
