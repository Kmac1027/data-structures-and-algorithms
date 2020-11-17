'use strict';

let mergeSort = require('./merge-sort.js')

describe('should merge-sort an array', () => {
  test('should take the given array and sort it with the merge-sort function', () => {
    let unsorted = [12, 1, 3, 7, 6, 15]
    let sort = mergeSort(unsorted)
    console.log(sort)
    expect(sort).toStrictEqual([1, 3, 6, 7, 12, 15]);
  });
});