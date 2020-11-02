'use strict';
let tree = require('./tree.js');

describe('Testing to make sure stack and queue are working', () => {
  test('Can successfully push onto a stack', () => {
    let testNode = new ll.Stack;
    testNode.push(5);
    expect(testNode.top.value).toStrictEqual(5);
  });
});