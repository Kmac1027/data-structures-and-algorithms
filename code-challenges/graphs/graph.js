'use strict'

// class Node {
//   constructor(value) {
//     this.value = value;
//   }
// }

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addNode(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  getNodes() {
    if (this.adjacentList === {}) {
      return null
    } else {
      return this.adjacentList;
    }
  }

  getNeighbors() {

  }
  size() {

  }
}

module.exports = Graph;