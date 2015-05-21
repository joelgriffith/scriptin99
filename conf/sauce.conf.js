module.exports = {
    sauceLabs: {
        username: 'your-username-here',
        accessKey: 'your-access-key-here',
        startConnect: true,
        testName: 'Scriptin\'99'
    },
    customLaunchers: {
        Ie6: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows XP',
            version: '6'
        },
        Ie7: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows XP',
            version: '7'
        },
        Ie8: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '8'
        },
        Ie9: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '9'
        },
        Ie10: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '10'
        },
        Ie11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 7',
            version: '11'
        },
        Android44: {
            base: 'SauceLabs',
            browserName: 'android',
            platform: 'linux',
            version: '4.4'
        },
        Android43: {
            base: 'SauceLabs',
            browserName: 'android',
            platform: 'linux',
            version: '4.3'
        },
        Android42: {
            base: 'SauceLabs',
            browserName: 'android',
            platform: 'linux',
            version: '4.2'
        },
        Android41: {
            base: 'SauceLabs',
            browserName: 'android',
            platform: 'linux',
            version: '4.1'
        },
        Android40: {
            base: 'SauceLabs',
            browserName: 'android',
            platform: 'linux',
            version: '4.0'
        },
        Ios8: {
            base: 'SauceLabs',
            browserName: 'iphone',
            platform: 'OS X 10.10',
            version: '8.0'
        },
        Ios7: {
            base: 'SauceLabs',
            browserName: 'iphone',
            platform: 'OS X 10.9',
            version: '7.0'
        },
        Ios6: {
            base: 'SauceLabs',
            browserName: 'iphone',
            platform: 'OS X 10.8',
            version: '6.0'
        },
        Ios5: {
            base: 'SauceLabs',
            browserName: 'iphone',
            platform: 'OS X 10.6',
            version: '5.0'
        },
        Ios4: {
            base: 'SauceLabs',
            browserName: 'iphone',
            platform: 'OS X 10.6',
            version: '4.3'
        },
        Firefox3: {
            base: 'SauceLabs',
            browserName: 'firefox',
            platform: 'Windows XP',
            version: '3.5'
        }
    }
};