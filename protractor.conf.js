const path = require('path');
const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  baseUrl: 'http://localhost:8080',

  specs: [
    path.resolve(__dirname, './src/**/*.e2e.ts')
  ],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },

  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  chromeDriver: `./node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.24${process.platform.indexOf('win') === 0 ? '.exe' : ''}`,

  beforeLaunch: () => {
    require('ts-node').register({
      compilerOptions: {
        target: 'es5',
        module: 'commonjs'
      }
    });
  },

  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter());
    browser.ignoreSynchronization = true;
  },

  // Angular 2 configuration
  useAllAngular2AppRoots: true
};
