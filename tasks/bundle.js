var clone = require('clone'),
    webpack = require('webpack'),
    gutil = require('gulp-util'),
    webpackConf = require('../conf/webpack.conf');

module.exports = function(gulp) {
    var helpInfo = 'Builds all files once.';

    gulp.task('bundle', helpInfo, function(done) {
        var conf = clone(webpackConf);
        conf.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
        conf.output.filename = 'bundle.mins.js';

        webpack(conf, function(err, stats) {
            if (err) throw new gutil.PluginError('webpack', err);

            gutil.log('[webpack]', stats.toString({
                colors: true
            }));

            done();
        });
    });

};