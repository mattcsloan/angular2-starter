require('ts-node/register');
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

  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter());
    browser.ignoreSynchronization = true;
  },

  // Angular 2 configuration
  useAllAngular2AppRoots: true
};
