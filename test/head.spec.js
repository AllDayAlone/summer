const assert = require('assert');
const head = require('../src/head');

function test() {
  
  // success
  assert.equal(head([1, 2, 3, 4]), 1);
  assert.equal(head(['lol', 'kek']), 'lol');

  // bad arguments
  assert.equal(head([]), 'Value is not valid');
  assert.equal(head(null), 'Value is not valid');
  assert.equal(head('pffff'), 'Value is not valid');
  assert.equal(head(126), 'Value is not valid');

  console.log('Success!');
}

test();
