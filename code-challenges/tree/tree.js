'use strict';

array = [];

class Node (root) {
  this.root = root,
  this.left = null,
  this.right = null
}

class Tree {
  constructor() {
    new Node
  }
  preOrder(root) {
    let currentNode = root; // our beginning node
    // process Current First, than the left, than the right
    // processing of the node
    if (currentNode) {
      array.push(currentNode.value);
    }
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.preOrder(currentNode.left);
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.preOrder(currentNode.right);
    }
    return;
  }
  postOrder(root) {
    let currentNode = root; // our beginning node
    // process left first, than the right, than the current
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.postOrder(currentNode.left);
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.postOrder(currentNode.right);
    }
    // processing of the node
    if (currentNode) {
      array.push(currentNode.value);
    }
    return;
  }
  inOrder(root) {
    let currentNode = root; // our beginning node
    // process left First than the currentNod, than the right
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.inOrder(currentNode.left);
    }
    // processing of the node
    if (currentNode) {
      array.push(currentNode.value);
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.inOrder(currentNode.right);
    }
    return;
  }
}


module.exports = {Node: Node, Tree: Tree}