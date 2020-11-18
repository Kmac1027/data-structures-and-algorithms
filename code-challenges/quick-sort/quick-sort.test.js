'use strict';

let sort = require('./quick-sort.js')

describe('should quick-sort an array', () => {
  test('should take the given array and sort it with the quick-sort function', () => {
    let unsorted = [12, 1, 3, 7, 6, 15];
    let quickSort = sort(unsorted, 0, unsorted.length -1);
    console.log(quickSort)
    expect(quickSort).toStrictEqual([1, 3, 6, 7, 12, 15]);
  });
});
