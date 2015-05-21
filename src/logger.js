/**
 *  Logger
 *  Example of exporting CommonJS style.
 *
 *  Required in `src/index.js`, and tested in `/test/units/logger.mspec.js`
 */
function logger(message) {
    return console.log(message);
}

module.exports = logger;

