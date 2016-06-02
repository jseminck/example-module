var myFunction = require("./");
var test = require("tape");

test('my function', function (assert) {
    assert.plan(1);
    assert.strictEqual(myFunction(), 'Hello World !');
});