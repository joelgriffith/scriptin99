var webpackConfig = require('./webpack.conf'),
    pathConfig = require('./paths.conf'),
    sauceConfig = require('./sauce.conf'),
    testFilesGlob = pathConfig.TEST_DIRECTORY + '/**/*.mspec.js';

// Tool our code for coverage
webpackConfig.module.postLoaders = [{
    test: /\.js$/,
    exclude: /(node_modules)|(.mspec.js$)/,
    loader: 'istanbul-instrumenter'
}];

// Source map it for easier debugging
webpackConfig.devtool = '#inline-source-map';

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',

        // SAUCE LABS
        sauceLabs: sauceConfig.sauceLabs,

        // SAUCE LABS BROWSERS
        customLaunchers: sauceConfig.customLaunchers,

        // Load the ES5 shim so we can run tests in older browsers
        // and make mocha/expect/sinon globally available
        frameworks: ['es5-shim', 'mocha', 'expect', 'sinon'],


        // list of files / patterns to load in the browser
        files: [
            testFilesGlob
        ],

        // Bug in Karma and IE6
        transports: ['jsonp-polling'],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.mspec.js': ['webpack']
        },

        // WebPack Related
        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage', 'notify'],

        // optionally, configure the reporter
        coverageReporter: {
            reporters: [
                { type: 'html', dir: pathConfig.COV_DIRECTORY },
                { type: 'text', dir: pathConfig.COV_DIRECTORY }
            ]
        },

        // Optional Settings
        notifyReporter: {
            reportEachFailure: true,
            reportSuccess: false
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // NOTE: these get defined again in gulpfile.js for the gulp tasks
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
