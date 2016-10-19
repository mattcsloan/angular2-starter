# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org).

## Unreleased
### Changed
- Updated package.json engine configuration to Node 6.9.0 and npm 3.10.8
- Updated several dependencies to latest versions (ts-node, webpack-merge, postcss-loader)

## [0.7.1] - 2016-10-13
### Changed
- Updated Angular to 2.1.0
- Added APP_BASE_HREF to providers for test module

## [0.7.0] - 2016-10-13
### Added
- Added Babel transpilation step to Webpack build
- Added regenerator-runtime to handle async/await polyfills

### Changed
- Changed TypeScript compilation to target ES2015
- Changed ts-node settings in protractor.conf.js to explicitly target ES5/commonjs
- Updated README

### Removed
- Removed @types/core-js dependency

## [0.6.1] - 2016-10-13
### Changed
- Reverted back to Angular 2.0.2 because of issues running Karma tests (No base href)

## [0.6.0] - 2016-10-13
### Changed
- Use @types for type definitions
- Moved e2e tests into src folder
- Upgrade Typescript to 2.0.3
- Upgrade Angular to 2.1.0
- Update versions of type definitions

### Removed
- Removed typings dependency

## [0.5.3] - 2016-10-12
### Removed
- Removed http-server dependency
- Removed http-server references in README

### Added
- Added simple Koa static server
- Added favicon

### Changed
- Changed webpack, karma, and protractor configs to use ES6 syntax

## [0.5.2] - 2016-10-12
### Removed
- Removed SWAPI components, models, and services
- Removed SWAPI references in README
- Removed mkdirp dependency

### Changed
- Changed codelyzer tslint prefix to "my" instead of "sw"
- Updated to Angular 2.0.2
- Updated several dependencies to latest versions

## [0.5.1] - 2016-10-03
### Fixed
- Fixed issue with sass-loader webpack setup

## [0.5.0] - 2016-10-02
### Added
- Added linting to webpack build (tslint, sasslint)
- Added Angular forms module
- Added PageNotFound component to handle 404s while routing

### Changed
- Updated to Angular 2.0.1
- Updated dependencies to latest versions
- Replaced deprecated Angular router w/ router 3.0.1
- Refactored bootstrapping to use ngModules
- Updated unit tests to use TestBeds
- Replaced es6-shim/reflect-metadata with core-js

### Removed
- Removed Angular Material (at least for now)
- Removed Webpack helpers.js
- Removed angular2-in-memory-webapi and webpack-validation dependencies

### Fixed
- Properly added tsconfig.json for e2e tests project

## [0.4.0] - 2016-08-20
### Changed
- Updated Angular 2 to RC.5
- Updated other dependencies (Angular 2 Material, Protractor, Karma, etc.)
- Updated Node/NPM versions to 6.4.0/3.10.3
- Updated README

## [0.3.1] - 2016-06-18
### Added
- Webpack config validation via webpack-validator
- Added awesome-typescript-loader's ForkChecker plugin to webpack plugins

### Changed
- Updated many dependencies to latest versions
- Updated readme roadmap

## [0.3.0] - 2016-06-10
### Added
- Code coverage of Typescript files using Istanbul

## [0.2.0] - 2016-06-09
### Added
- Typedoc support
- Protractor Support

### Changed
- Karma now uses Chrome instead of PhantomJS

## [0.1.0] - 2016-06-09
### Added
- Initial release
- Added change log
- Updated readme
