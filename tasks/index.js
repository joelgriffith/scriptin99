var normalizedPath = require('path').join(__dirname);

module.exports = function(gulp) {
    require('fs').readdirSync(normalizedPath).forEach(function(file) {
        if (file !== 'index.js') require('./' + file)(gulp);
    });

    gulp.task('dev', 'Continuously run tests and dev server.', ['bundle-server', 'test-tdd']);
    gulp.task('build', 'Run unit-tests and build the scripts.', ['test', 'bundle']);
};