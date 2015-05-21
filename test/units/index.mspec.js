var logger = require('logger'),
    consoleSpy = sinon.spy(console, 'log');

describe('Logger', function () {
    it('should log messages!', function() {
        var message = 'hello world!';

        logger(message);

        expect(consoleSpy.getCall(0).args[0]).to.equal(message);
    });
});