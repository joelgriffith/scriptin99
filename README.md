![Scriptin' 99](https://raw.githubusercontent.com/joelgriffith/scriptin99/master/images/scriptinlogo.png)

`curl raw.githubusercontent.com/joelgriffith/scriptin99/master/latest.tar.gz | tar -xf- -C ./ && npm i`

Build JavaScript that runs in any JavaScript environment. Run tests in every browser. Use the latest tools and technologies (like [rewire](https://github.com/jhnns/rewire)). All of this in a simple, succint command-line interface.

# Features

<img src="https://raw.githubusercontent.com/joelgriffith/scriptin99/master/images/mycomputer.png" width="70" height="70" alt="Run in Any Browser" style="float: left; padding-right: 20px; padding-bottom: 20px;"/>

#### Run Tests on any browser
Use karma loaders to easily start any browser, or just visit the test URL.

***

<img src="https://raw.githubusercontent.com/joelgriffith/scriptin99/master/images/internet.jpg" width="70" height="70" alt="SauceLabs" style="float: left; padding-right: 20px; padding-bottom: 20px;"/>

#### Integrate with cloud-based testing platforms
Use just about any cloud-based testing platforms to run tests everywhere.

***

<img src="https://raw.githubusercontent.com/joelgriffith/scriptin99/master/images/flyingscreen.png" width="70" height="70" alt="Notifications" style="float: left; padding-right: 20px; padding-bottom: 20px;"/>

#### Notifications
Get notifications when your tests begin to fail, and easily achieve TDD nirvanna.

***

<img src="https://raw.githubusercontent.com/joelgriffith/scriptin99/master/images/blocksfalling.png" width="70" height="70" alt="Dependency Injection" style="float: left; padding-right: 20px; padding-bottom: 20px;"/>

#### Dependency Injection
Use fancy-pants things like dependency-injection to easily mock your testing.

***

<img src="https://raw.githubusercontent.com/joelgriffith/scriptin99/master/images/star.png" width="70" height="70" alt="Coverage" style="float: left; padding-right: 20px; padding-bottom: 20px;"/>

#### See how you're doing
See how well you're covered with code-coverage via Istanbul.

# Installation

- Install [node.js](https://nodejs.org/)
- `mkdir myproject && cd myproject`
- `curl raw.githubusercontent.com/joelgriffith/scriptin99/master/latest.tar.gz | tar -xf- -C ./ && npm i`

# Commands

- `npm run dev`

Start a development server (to bundle your code, watch for changes, and run [Karma](http://karma-runner.github.io/0.12/index.html)). Out of the box, this will watch for changes in `src` and in `test/**/*.mspec` for both bundling and testing, respectively.

- `npm run build`

Bundles up your JavaScript and runs all unit tests once. No watches or continuous integration servers are started.

- `npm run test`

Run your unit-tests once and exit. No watches or continuous integration servers are started.

- `npm run help`

Prints out all the options available in Scripting99.
