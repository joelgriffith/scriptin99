![Scriptin' 99](https://raw.githubusercontent.com/joelgriffith/scriptin99/master/images/scriptinlogo.png)

`curl https://raw.githubusercontent.com/joelgriffith/scriptin99/master/latest.tar.gz | tar -xf- -C ./ && npm i`

Build JavaScript that runs in any JavaScript environment. Run tests in every browser. Use the latest tools and technologies (like [rewire](https://github.com/jhnns/rewire)). All of this in a simple, succint command-line interface.

# Features

#### Run Tests on any browser
Test in any browser you want to. IE6+, Android 2+, and even non-standard browsers. Use karma loaders to easily start any browser, or just visit the test URL.

***

#### Integrate with cloud-based testing platforms
Scriptin'99 plays well with just about any 3rd party testing service. Browserstack and SauceLabs both intergrate nicely.
 
***

#### Notifications
Using your os-level notification system, Scriptin'99 will automatically tell you when your test begin to fail.

***

#### Dependency Injection
Scriptin'99 allows you to dynamically inject modules under any `var` name you can think of ($ much?). It even let's you mock your modules dependencies in tests, letting you limit your testing area.

***

#### See how you're doing
Comes out-of-the-box with Istanbul pre-installed. Get valuable metrics on where your code isn't covered, and see how you can improve.

# Installation

- Install [node.js](https://nodejs.org/)
- `mkdir myproject && cd myproject`
- `curl raw.githubusercontent.com/joelgriffith/scriptin99/master/latest.tar.gz | tar -xf- -C ./`
- `npm i`

# Commands

- `npm run dev`

Start a development server (to bundle your code, watch for changes, and run [Karma](http://karma-runner.github.io/0.12/index.html)). Out of the box, this will watch for changes in `src` and in `test/**/*.mspec` for both bundling and testing, respectively.

- `npm run build`

Bundles up your JavaScript and runs all unit tests once. No watches or continuous integration servers are started.

- `npm run test`

Run your unit-tests once and exit. No watches or continuous integration servers are started.

- `npm run help`

Prints out all the options available in Scripting99.
