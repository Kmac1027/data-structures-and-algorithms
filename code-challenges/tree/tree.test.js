'use strict';

let obj = require('./tree.js');


describe('testing the functionality of the Binary Trees', () => {
  test('It can sucessfully instantiate an empty tree', () => {
    let testTree = new obj.BinarySearchTree();
    expect(testTree.root).toStrictEqual(null);
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    let testTree = new obj.BinarySearchTree(new obj.Node(5));
    expect(testTree.root.value).toStrictEqual(5);
  });

  test('Can successfully add a left child and right child to a single root node', () => {
    let testNode = new obj.Node(5, new obj.Node(4), new obj.Node(6));

    expect(testNode.left.value).toStrictEqual(4);
    expect(testNode.right.value).toStrictEqual(6);
  });
  test('Can successfully return a collection from a preorder traversal', () => {
    let testNode = new obj.Node(5, new obj.Node(4), new obj.Node(6));
    let testTree = new obj.BinaryTree(testNode);
    expect(testTree.preOrder(testTree.root)).toStrictEqual([5, 4, 6]);
  });
  test('Can successfully return a collection from an inorder traversal', () => {
    let testNode = new obj.Node(5, new obj.Node(4), new obj.Node(6));
    let testTree = new obj.BinaryTree(testNode);
    expect(testTree.inOrder(testTree.root)).toStrictEqual([4, 5, 6]);
  });
  test('Can successfully return a collection from a postorder traversal', () => {
    let testNode = new obj.Node(5, new obj.Node(4), new obj.Node(6));
    let testTree = new obj.BinaryTree(testNode);
    expect(testTree.postOrder(testTree.root)).toStrictEqual([4, 6, 5]);
  });
});



// 'use strict';
// let t = require('./tree.js');

// describe('Tree testing', () => {
//   it('should successfully instantiate an empty tree ', () => {
//     let tree = new t.Tree();

//     expect(tree.root).toStrictEqual(null);
//   });
//   it('should successfully instantiate a tree with a single root node', () => {
//     let tree = new t.BinarySearchTree ();
//     tree.add(1);


//     expect(tree.root.root).toStrictEqual(1);
//    });
//   it('should successfully add a left child and right child to a single root node', () => {
//     let tree = new t.BinarySearchTree ();
//     tree.add(2);
//     tree.add(3)
//     tree.add(1)
//     expect(tree).toStrictEqual(1);
//   });
// //   it('successfully return a collection from a preorder traversal', () => {
// //     ///

// //     ///
// //     expect().toStrictEqual();
// //   });
// //   it('should successfully return a collection from an inorder traversal', () => {
// //     ///

// //     ///
// //     expect().toStrictEqual();
// //   });
// //   it('should successfully return a collection from a postorder traversal', () => {
// //     ///

// //     ///
// //     expect().toStrictEqual();
// //   });
//  });