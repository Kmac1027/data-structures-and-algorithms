'use strict';

let repeat = require('./repeated-word.js');

describe('will return the first word in a string that is repeated ', () => {
  test('returns the first repeated word', () => {
    let ans = repeat('it was the best of times, it was the worst of times')

    expect(ans).toStrictEqual('it');
  });
});