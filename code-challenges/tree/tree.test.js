'use strict';
let t = require('./tree.js');

describe('Tree testing', () => {
  it('should successfully instantiate an empty tree ', () => {
    let tree = new t.Tree();

    expect(tree.root).toStrictEqual(null);
  });
  it('should successfully instantiate a tree with a single root node', () => {
    let tree = new t.BinarySearchTree ();
    tree.add(1);


    expect(tree.root.root).toStrictEqual(1);
   });
  it('should successfully add a left child and right child to a single root node', () => {
    let tree = new t.BinarySearchTree ();
    tree.add(2);
    tree.add(3)
    tree.add(1)
    expect(tree).toStrictEqual(1);
  });
//   it('successfully return a collection from a preorder traversal', () => {
//     ///

//     ///
//     expect().toStrictEqual();
//   });
//   it('should successfully return a collection from an inorder traversal', () => {
//     ///

//     ///
//     expect().toStrictEqual();
//   });
//   it('should successfully return a collection from a postorder traversal', () => {
//     ///

//     ///
//     expect().toStrictEqual();
//   });
 });