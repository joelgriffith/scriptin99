var clone = require('clone'),
    webpack = require('webpack'),
    gutil = require('gulp-util'),
    open = require('open'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConf = require('../conf/webpack.conf');

module.exports = function(gulp) {
    var helpInfo = 'Sets up a continuous build and a hot-load server.',
        url = 'http://localhost:8080/webpack-dev-server/demo.html';

    gulp.task('bundle-server', helpInfo, function() {
        var conf = clone(webpackConf);
        conf.plugins.push(new webpack.HotModuleReplacementPlugin());
        conf.entry.push('webpack/hot/dev-server');
        conf.devtool = '#inline-source-map';

        var server = new WebpackDevServer(webpack(conf), {
            hot: true,
            inline: true,
            noInfo: true,
            quiet: true,
            stats: { colors: true }
        });

        server.listen(8080, "localhost", function() {
            open(url);
        });

        gutil.log('Dev Server URL:', gutil.colors.green(url));
    });
};