'use strict'
/// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// THIS CODE WAS TAKEN FROM STACK OVERFLOW
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// i could not figure it out and had to look up a solution

function treeIntersection(interval, tree) {
  var currentNode = tree.root;
  var intersection = {};
  var intersections = []; //array to return multiple objects
  while (currentNode) {

    console.log("Searching...", currentNode);
    if (currentNode.list.length > 0) {
      for (var i = 0; i < currentNode.list.length; i++) {
        if (interval[0] < currentNode.list[i].interval[1] && currentNode.list[i].interval[0] < interval[1]) {
          intersection.interval = currentNode.list[i].interval;
          intersection.id = currentNode.list[i].id;
          //---DELETE---tree.remove(currentNode.list[i].interval, currentNode.list[i].id); no need to remove
          intersections.push(intersection); //add the newly found intersection to the returned array
          intersection = {}; //prepare the variable for next find
        }
      }
    }
    if (interval[0] < currentNode.interval[1] && currentNode.interval[0] < interval[1]) {
      console.log("INTERSECTION: " + interval, currentNode.interval);
      intersection.interval = currentNode.interval;
      intersection.id = currentNode.id;
      //again no need to remove
      intersections.push(intersection);
      intersection = {};
    }
    if (!currentNode.left) {
      console.log("NO NODE TO LEFT, GO RIGHT");
      if (!currentNode.right) {
        console.log("NO MORE NODES");
        return intersections;
      }
      console.log(currentNode.right);
      currentNode = currentNode.right;
    }
    else if (currentNode.left.max < interval[0]) {
      console.log("LEFT MAX: " + currentNode.left.max + " < " + interval[0] + " GO RIGHT");
      currentNode = currentNode.right;
    }
    else {
      console.log("INTERVAL MAY BE TO LEFT, GO LEFT");
      currentNode = currentNode.left;
    }
  }

  const Node1 = new Node(1);
  const Node2 = new Node(20);
  const Node3 = new Node(30);
  const Node4 = new Node(25);

  tree.root = Node1;
  tree.root.left = Node2;
  tree.root.right = Node3;
  tree.root.right.left = Node4;


  module.exports = treeIntersection