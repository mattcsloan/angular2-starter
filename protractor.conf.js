var SpecReporter = require('jasmine-spec-reporter');
var helpers = require('./webpack/helpers');

exports.config = {
  baseUrl: 'http://localhost:8080',

  specs: [
    helpers.root('e2e/**/*.e2e.ts')
  ],

  framework: 'jasmine',

  allScriptsTimeout: 11000,

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() { }
  },

  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  beforeLaunch: function() {
    require('ts-node').register();
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  },

  // Angular 2 configuration
  useAllAngular2AppRoots: true
};
