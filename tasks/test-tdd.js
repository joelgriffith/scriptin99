var karma = require('karma').server,
    path = require('path');

module.exports = function(gulp) {
    var helpInfo = 'Continuously run your tests as you develop.';

    gulp.task('test-tdd', helpInfo, function() {
        karma.start({
            configFile: path.resolve('conf/karma.conf.js'),
            singleRun: false
        });
    });
};