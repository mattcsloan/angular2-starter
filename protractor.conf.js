var path = require('path');
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  baseUrl: 'http://localhost:8080',

  specs: [
    path.resolve(__dirname, './e2e/**/*.e2e.ts')
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
    require('ts-node').register({
      project: 'e2e'
    });
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  },

  // Angular 2 configuration
  useAllAngular2AppRoots: true
};
