## Writing a module:

By default, Scriptin'99 looks for an entry-point to your application at `src/index.js`. It will then look at all the `require`s from there and bundle your script up for usage in a web-browser. This bundling happens _before_ the script is delivered to your browser.

Let's create a person module and use it in the entry `src/index.js` file.

Create a `Person` module in `src/person.js`:

```
function Person(name) {
	this.name = name;
}

Person.prototype.sayName = function() {
	console.log('My name is', this.name);
}

module.exports = Person;
```

In our `src/index.js` file, we'll use this file:

```
var Person = require('./person'); // Load the external file

var joel = new Person('Joel');

joel.sayName(); // Logs `My Name is Joel`
```

Once all that is done, in your terminal simply run:

`npm run dev`

Your default web-browser will open up, and you'll see the script run inside the console. This command also does a "hot-reload", which will automatically reload the browser anytime you make changes!

