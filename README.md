# angular2-starter

This project is a scaffold to start new Angular 2 projects powered by Webpack. There are quite a few good examples out there but I wanted to make one that fit my specific needs and used my favorite tools. The webpack build process in this project is based on the awesome guide on the official Angular 2 documentation site [here](https://angular.io/docs/ts/latest/guide/webpack.html). The app itself is intentionally very simple, basically a rudimentary API browser for [SWAPI](http://swapi.co/).

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

This will generate a minified assets in the dist directory and serve them up using http-server.

## Tests
```
npm test
```

This will execute unit tests powered by Karma and Jasmine.

## Tools & Features
* Build powered by Webpack
* Linting with tslint (enhanced with Codelyzer) and sass-lint
* Unit testing with Karma and Jasmine
* SASS + postcss-cssnext for CSS preprocessing
* Updated for latest Angular 2 release (rc.1) and utilizing rxjs
* Angular 2 Material

## Roadmap
* E2E testing support via Protractor
* Support for @angular/router whenever it stabilizes
* More Material UI components
* Code coverage via Istanbul
* Hot module reloading

Also plans to create branches with support for Angular Universal, ngrx, angular-fire, etc.

## Other Examples
In addition to the official documentation, these other projects are great resources to see alternative webpack setups for Angular 2.
* [angular2-webpack](https://github.com/preboot/angular2-webpack)
* [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)
