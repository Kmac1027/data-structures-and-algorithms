'use strict';

let array = [];

class Node {
  constructor(value) {
    this.value = value,
      this.left = null,
      this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }
  preOrder(root) {
    console.log(root)
    let currentNode = root;
    console.log(currentNode)
    if (currentNode) {
      array.push(currentNode.value);
    }
    if (currentNode.left) {
      this.preOrder(currentNode.left);
    }
    if (currentNode.right) {
      this.preOrder(currentNode.right);
    }
    return;
  }
  postOrder(root) {
    let currentNode = root;
    if (currentNode.left) {
      this.postOrder(currentNode.left);
    }
    if (currentNode.right) {
      this.postOrder(currentNode.right);
    }
    if (currentNode) {
      array.push(currentNode.value);
    }
    return;
  }
  inOrder(root) {
    let currentNode = root;
    if (currentNode.left) {
      this.inOrder(currentNode.left);
    }
    if (currentNode) {
      array.push(currentNode.value);
    }
    if (currentNode.right) {
      this.inOrder(currentNode.right);
    }
    return;
  }
  findMaximumValue() {
    let max = 0
    this.inOrder(this.root);
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i]
      }
    } return max
  }
}

class BinarySearchTree extends Tree {
  constructor(root) {
    super(root);
  }
  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      console.log('the tree is empty, I am adding the root');
    } else {
      console.log('the tree is not empty, I am traversing');
      traverseBST(this.root, newNode);
    }
    function traverseBST(root, newNode) {
      let currentNode = root;
      console.log('traversing');
      if (newNode.value < currentNode.value) {
        console.log('less than');
        if (currentNode.left === null) {
          console.log('its null');
          currentNode.left = newNode;
          console.log(currentNode.left.value);
        } else {
          console.log('it is less than but not null');
          traverseBST(currentNode.left, newNode);
        }
      }
      if (newNode.value > currentNode.value) {
        console.log('greater than');
        if (currentNode.right === null) {
          console.log('its null');
          currentNode.right = newNode;
          console.log(currentNode.right.value);
        } else {
          console.log('it is greater than but not null');
          traverseBST(currentNode.right, newNode);
        }
      }
      console.log('I am all done');
      return;
    }
  }
  contains(root, value) {
    function traverseBST(root, value) {
      let currentNode = root;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          return false;
        } else {
          this.traverseBST(currentNode.left, value);
        }
      }
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          return false;
        } else {
          this.traverseBST(currentNode.right, value);
        }
      }
      if (value === currentNode.value) {
        return true;
      }
      return;
    }
    traverseBST(root, value);
  }
}
// const tree = new Tree();

// const Node1 = new Node(1);
// const Node2 = new Node(2);
// const Node3 = new Node(3);
// const Node4 = new Node(4);

// tree.root = Node1;
// tree.root.left = Node2;
// tree.root.right = Node3;
// tree.root.right.left = Node4;

// //console.log(tree.root);
// tree.preOrder(tree.root);
// console.log(array);

module.exports = { Node: Node, Tree: Tree, BinarySearchTree: BinarySearchTree }