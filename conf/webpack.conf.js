var RewirePlugin = require('rewire-webpack'),
    path = require('path'),
    pathConfig = require('./paths.conf');

module.exports = {
    entry: [
        pathConfig.JS_ENTRY_POINT
    ],
    output: {
        path: path.dirname(pathConfig.JS_OUTPUT),
        filename: path.basename(pathConfig.JS_OUTPUT)
    },
    resolve: {
        modulesDirectories: ['src', 'node_modules']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json'
        }]
    },
    plugins: [
        new RewirePlugin()
    ]
};
