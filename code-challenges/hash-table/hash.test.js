'use strict';

let HashTable = require('./hash.js')

describe('Testing Hash Table', () => {
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let testTable = new HashTable(20);
    testTable.insert('Kevin', 'McNeil');

    expect(testTable.search('Kevin')).toStrictEqual('McNeil');
  });
  test('Retrieving based on a key returns the value stored', () => {
    let testTable = new HashTable(1024);
    testTable.insert('Kevin', 'McNeil')

    expect(testTable.search('Kevin')).toStrictEqual('McNeil');
  });
  test('Successfully returns null  for a key that does not exist in the hashtable', () => {
    let testTable = new HashTable(1024);
    testTable.insert('Kevin', 'McNeil');

    expect(testTable.search('michael')).toStrictEqual(null);
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