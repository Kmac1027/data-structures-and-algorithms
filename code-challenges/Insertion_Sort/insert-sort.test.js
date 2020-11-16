'use strict'

let sort = require('./insert-sort.js')

describe('sorting an array', () => {
  test('should sort the array smallest to largest', () => {
    let arr = [3, 2, 1];
    sort(arr)
    expect(arr).toStrictEqual([1, 2, 3])
  });
});