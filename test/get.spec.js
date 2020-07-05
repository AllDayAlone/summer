const assert = require('assert');
const get = require('../src/get');

function test() {
  const user = { name: 'Pasha', age: 20 };

  // success
  assert.equal(get(user, 'name'), 'Pasha');
  assert.equal(get(user, 'age'), 20);

  // bad arguments
  assert.equal(get(null, 'name'), undefined);
  assert.equal(get(user, null), undefined);

  // default value
  assert.equal(get(user, 'gender', 'unknown'), 'unknown');

  console.log('Success!');
}

test();
