module.exports = function(config){
  config.set({
    basePath: "",
    frameworks: ['mocha'],
    files: [
      'notify.js',
      'test.js',                      
    ]
  })
}
