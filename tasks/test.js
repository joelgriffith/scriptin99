var karma = require('karma').server,
    path = require('path');

module.exports = function(gulp) {
    var helpInfo = 'Runs all tests once and outputs results.';

    gulp.task('test', helpInfo, function(done) {
        karma.start({
            configFile: path.resolve('conf/karma.conf.js'),
            singleRun: true
        }, done);
    });
};