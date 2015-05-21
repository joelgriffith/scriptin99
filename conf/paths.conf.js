var path = require('path');

module.exports = {
    JS_OUTPUT:      path.resolve('build/bundle.js'),
    JS_ENTRY_POINT: path.resolve('src/index.js'),
    TEST_DIRECTORY: path.resolve('test'),
    COV_DIRECTORY:  path.resolve('build/coverage')
};