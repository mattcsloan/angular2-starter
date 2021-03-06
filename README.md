# angular2-starter
[![Build Status](https://travis-ci.org/ecozoic/angular2-starter.svg?branch=master)](https://travis-ci.org/ecozoic/angular2-starter) [![Dependency Status](https://david-dm.org/ecozoic/angular2-starter.svg)](https://david-dm.org/ecozoic/angular2-starter) [![devDependency Status](https://david-dm.org/ecozoic/angular2-starter/dev-status.png)](https://david-dm.org/ecozoic/angular2-starter?type=dev)

This project is a scaffold to start new Angular2+rxjs projects powered by Webpack.

## Installation
```
git clone https://github.com/ecozoic/angular2-starter
cd angular2-starter
yarn
```

## Development
```
yarn start
```

This will start up a webpack-dev-server with live reloading and @ngrx/store-devtools.

## Production
```
yarn build
yarn serve
```

This will generate minified assets in the dist directory and serve them up using a simple Koa server.

## Tests
```
yarn test
```

This will execute unit tests powered by Karma and Jasmine, as well as produce Istanbul coverage reports in the coverage directory.

To run Protractor e2e tests, ensure the app is running with either ```yarn start``` or ```yarn serve``` and then run:
```
yarn e2e
```

## Documentation
```
yarn docs
```

This will generate typedoc documentation.


## Tools & Features
* Build powered by Webpack 2 and TypeScript 2
* Optimized production build with UglifyJS + tree-shaking
* Linting with tslint + codelyzer, and sass-lint
* Unit tests with Karma, Jasmine, and Istanbul coverage reports
* E2E testing with Protractor
* SASS + cssnext for CSS preprocessing
* Autogenerated documentation via typedoc

## Roadmap
* Angular Material
* AngularFire
* ngrx/router-store

## Other Examples
* [Official docs](https://angular.io/docs/ts/latest/guide/webpack.html)
* [angular2-webpack](https://github.com/preboot/angular2-webpack)
* [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)
* [angular-webpack2-starter](https://github.com/qdouble/angular-webpack2-starter)

## Known Issues
* Can't upgrade to istanbul-instrumenter-loader@1.0.0 until karma-coverage supports new Istanbul API: https://github.com/karma-runner/karma-coverage/issues/245
* Can't upgrade to tslint@4.0.1 until codelyzer gets updated