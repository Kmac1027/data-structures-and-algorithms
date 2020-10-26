'use strict';

let ll = require('./stacks-and-queues.js');

describe('Testing to make sure stack and queue are working', () => {
  test('Can successfully push onto a stack', () => {
    let testNode = new ll.Stack;
    testNode.push(5);
    expect(testNode.top.value).toStrictEqual(5);
  });
  test('Can successfully push multiple values onto a stack', () => {
    let testNode = new ll.Stack;
    testNode.push(5);
    testNode.push(10);
    testNode.push(15);
    expect(testNode.top.value).toStrictEqual(15);
  });
  test('Can successfully pop off the stack', () => {
    let testNode = new ll.Stack;
    testNode.push(5);
    testNode.push(10);
    testNode.push(15);
    testNode.pop();
    testNode.pop();
    testNode.pop();
    expect(testNode.top).toStrictEqual(null);
  });
  test('Can successfully empty a stack after multiple pops', () => {
    let testNode = new ll.Stack;
    testNode.push(5);
    testNode.pop();
    expect(testNode.top).toStrictEqual(null);
  });
  test('Can successfully peek the next item on the stack', () => {
    let testNode = new ll.Stack;
    testNode.push(5);
    testNode.peek();
    expect(testNode.top.value).toStrictEqual(5);
  });
  test('Can successfully instantiate an empty stack', () => {
    let testNode = new ll.Stack;
    expect(testNode.isEmpty()).toStrictEqual(true);
  });
  // test('Calling pop or peek on empty stack raises exception', () => {
  //   expect(testNode.top).toStrictEqual(undefined);
  // });
  ///// Queue testing
  test('Can successfully enqueue into a queue', () => {
    let testNode = new ll.Queue;
    testNode.enqueue(5);
    expect(testNode.front.value).toStrictEqual(5);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    let testNode = new ll.Queue;
    testNode.enqueue(5);
    testNode.enqueue(10);
    testNode.enqueue(15);
    expect(testNode.rear.value).toStrictEqual(15);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    let testNode = new ll.Queue;
    testNode.enqueue(5);
    testNode.dequeue(5);
    expect(testNode.front).toStrictEqual(null);
  });
  test('Can successfully peek into a queue, seeing the expected value', () => {
    let testNode = new ll.Queue;
    testNode.enqueue(5);
    expect(testNode.peek()).toStrictEqual(5);
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    let testNode = new ll.Queue;
    testNode.enqueue(5);
    testNode.enqueue(10);
    testNode.enqueue(15);
    testNode.dequeue();
    testNode.dequeue();
    testNode.dequeue();
    expect(testNode.front).toStrictEqual(null);
  });
  test('Can successfully instantiate an empty queue', () => {
    let testNode = new ll.Queue;
    expect(testNode.isEmpty()).toStrictEqual(true);
  });
  // test('Calling dequeue or peek on empty queue raises exception', () => {
  //   let testNode = new ll.Queue;
  //   expect(testNode.isEmpty()).toStrictEqual(undefined);
  // });
});
