module.exports = function(config){
  var customlaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '35'
    }
  };

  config.set({
    basepath: '',
    sauceLabs: {
      testName: "Notify"
    },
    frameworks: ['mocha'],
    captureTimeout: 120000,
    customLaunchers: customlaunchers,
    browsers: Object.keys(customlaunchers),
    files: [
      'notify.js',
      'test.js',                      
    ],
    reporters: ['saucelabs'],
    singleRun: true
  })
}
