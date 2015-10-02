module.exports = function(config){
  var customlaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '35'
    },
    sl_chrome_osx: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'OS X 10.11',
      version: '44.0'
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
