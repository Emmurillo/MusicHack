module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../www/lib/ionic/js/ionic.bundle.min.js',
      '../www/lib/angular-ui-router/release/angular-ui-router.min.js',
      '../www/lib/angular-mocks/angular-mocks.js'
      '../www/app/app.js',
      '../www/app/*.js',

      '../www/app/login/module.js',
      '../www/app/login/*.js',

      '**/*.spec.js'
    ],
    preprocessors: {
      '../www/app/login/controller.js': ['coverage']
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
