'use strict';

let ll = require('./queueWithStacks.js');

describe('Testing to make the queue has stacks', () => {
  test('Can successfully push a node to the stack  and then add the stack into the queue', () => {
    // let testNode = new ll.Stack;
    // testNode.push(5)
    let PseudoQueue = new ll.PseudoQueue();
    PseudoQueue.enqueue(5);
    expect(PseudoQueue.front.top.value).toStrictEqual(5);
  });
});