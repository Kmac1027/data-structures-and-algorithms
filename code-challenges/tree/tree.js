'use strict';

let array = [];

class Node {
  constructor(value) {
    this.root = value,
      this.left = null,
      this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }
  preOrder(root) {
    let currentNode = root;
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
}

class BinarySearchTree extends Tree {
  constructor(root) {
    super(root);
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      traverseBST(this.root, newNode, this.preOrder);
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
          traverseBST(currentNode.left, newNode);
        }
      }

      if (newNode.value > currentNode.value) {
        console.log('greater than');
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
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


module.exports = { Node: Node, Tree: Tree, BinarySearchTree: BinarySearchTree }