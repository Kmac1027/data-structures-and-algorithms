'use strict';
let t = require('./fizzbuzz-tree.js');

describe('Tree testing', () => {
  it('fizz buzz challenge', () => {
    let tree = new t.Tree();

    const Node1 = new t.Node(1);
    const Node2 = new t.Node(20);
    const Node3 = new t.Node(30);
    const Node4 = new t.Node(25);

    tree.root = Node1;
    tree.root.left = Node2;
    tree.root.right = Node3;
    tree.root.right.left = Node4;

    expect(tree.fizzBuzzTree()).toStrictEqual([ 'Buzz', '1', 'Buzz', 'FizzBuzz' ]);
  });
});