'use strict';
let t = require('./tree-max.js');

describe('Tree testing', () => {
  it('should find the max value in a tree ', () => {
    let tree = new t.Tree();

    const Node1 = new t.Node(10);
    const Node2 = new t.Node(20);
    const Node3 = new t.Node(30);
    const Node4 = new t.Node(25);

    tree.root = Node1;
    tree.root.left = Node2;
    tree.root.right = Node3;
    tree.root.right.left = Node4;

    expect(tree.findMaximumValue()).toStrictEqual(30);
  });
});