'use strict';

let obj = require('./ll-kth-from-end.js')


describe('Testing the functions for single linked lists', () => {
  test('test insert, it should insert a new node at the head of the list', () => {
    let purple = new obj.LinkedList();
    purple.insert('a');
    expect(purple.head.value).toStrictEqual('a');
  });
  test('test includes for a value within the nodes of our linked list', () => {
    let purple = new obj.LinkedList();
    purple.insert('a');
    purple.insert('b');
    purple.insert('c');
    expect(purple.includes('b')).toStrictEqual(true);
    expect(purple.includes('x')).toStrictEqual(false);
  });
  test('test toString to output the values of our linked list', () => {
    let purple = new obj.LinkedList();
    purple.insert('a');
    purple.insert('b');
    purple.insert('c');
    expect(purple.toString()).toStrictEqual('{ c } -> { b } -> { a } -> NULL');
  });
  test('testing for value from kth value', () => {
    let purple = new obj.LinkedList();
    purple.insert('a');
    purple.insert('b');
    purple.insert('c');
    purple.insert('d');
    purple.insert('e');
    purple.insert('f');
    expect(purple.kthFromEnd(3)).toStrictEqual('d');
  });
});
