'use strict';

let HashTable = require('./hash.js')

describe('Testing Hash Table', () => {
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let testTable = new HashTable(1024);
    testTable.set('Kevin', 'McNeil')

    expect(testTable.contains('Kevin')).toStrictEqual(true);
  });
  test('Retrieving based on a key returns the value stored', () => {
    let testTable = new HashTable(1024);
    testTable.set('Kevin', 'McNeil')

    expect(testTable.hash('Kevin')).toStrictEqual(639);
  });
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let testTable = new HashTable(1024);
    testTable.set('Kevin', 'McNeil');

    expect(testTable.contains('michael')).toStrictEqual(null);
  });
  // test('Successfully handle a collision within the hashtable', () => {


  //   expect(purple.head.value).toStrictEqual('a');
  // });
  // test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {


  //   expect(purple.head.value).toStrictEqual('a');
  // });
  // test('Successfully hash a key to an in-range value', () => {


  //   expect(purple.head.value).toStrictEqual('a');
  // });
});