# angular2-starter
[![Build Status](https://travis-ci.org/ecozoic/angular2-starter.svg?branch=master)](https://travis-ci.org/ecozoic/angular2-starter)

This project is a scaffold to start new Angular 2 projects powered by Webpack. There are quite a few good examples out there but I wanted to make one that fit my specific needs and used my favorite tools. The webpack build process in this project is based on the awesome guide on the official Angular 2 documentation site [here](https://angular.io/docs/ts/latest/guide/webpack.html).

## Installation
```
git clone https://github.com/ecozoic/angular2-starter
cd angular2-starter
npm install
```

## Development
```
npm start
```

This will start up a webpack-dev-server with live reloading.

## Production
```
npm run build
npm run serve
```

This will generate minified assets in the dist directory and serve them up using a simple Koa server.

## Tests
```
npm test
```

This will execute unit tests powered by Karma and Jasmine, as well as produce Istanbul coverage reports in the coverage directory.

To run Protractor e2e tests, ensure the app is running with either ```npm start``` or ```npm run serve``` and then run:
```
npm run e2e
```

## Tools & Features
* Build powered by Webpack, Babel, and TypeScript 2
* Linting with tslint + codelyzer, and sass-lint
* Unit testing with Karma and Jasmine
* Test coverage reporting via Istanbul
* E2E testing with Protractor
* SASS + postcss-cssnext for CSS preprocessing
* Autogenerated documentation via typedoc

## Roadmap
* Webpack 2 + tree-shaking
* HMR
* Docker/Heroku support
* Authentication via Firebase/angularfire2
* Lazy routing
* AOT compilation
* Angular Material
* ngrx
* Universal rendering

## Other Examples
In addition to the official documentation, these other projects are great resources to see alternative webpack setups for Angular 2.
* [angular2-webpack](https://github.com/preboot/angular2-webpack)
* [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)
* [angular-webpack2-starter](https://github.com/qdouble/angular-webpack2-starter)

## Known Issues
* typedefs for protractor have issues so using triple-slash reference to manually reference when using ts-node to run e2e tests: https://github.com/TypeStrong/ts-node/issues/168
* Can't upgrade to istanbul-instrumenter-loader@1.0.0 because karma-coverage needs an update to support new Istanbul API: https://github.com/karma-runner/karma-coverage/issues/245
* E2E tests are compiled via ts-node and do not run through babel (so no async/await, etc.). Might try to use ts-babel-node in the future
* Using webpack's OccurenceOrderPlugin is causing runtime errors when doing a production build. Temporarily disabled.