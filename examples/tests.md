## Writing unit tests

Perhaps the best feature about Scriptin'99 is the ability to run unit tests in _real browsers_. It uses Karma as the test-runner, and you can easily install additional browsers to run tests in. To ge started, let's write a simple test for the Person module we made in modules.md.

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

Now, let's create a test in `test/unit/person.mspec.js`. Scriptin'99 knows to automatically run _any_ tests in this folder (as long as it has .mspec in the name). You also don't have to worry about loading these testing libraries as Scriptin'99 takes care of this for you:

```
var Person = require('person'); // This will automatically resolve properly for you!

describe('Person', function() {
	it('should be a function', function() {
		expect(Person).to.be.a('function');
	});
});
```

Now simply run `npm run dev` in your terminal. You should see some results and coverage information. If you only are concerned about running tests (and not the hot-reload server), simply execute `npm run test` to execute the test(s).