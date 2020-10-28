'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class AnimalShelter {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(value) {
    if (value !== 'dog' && value !== 'cat') {
      return null
    } else {
      while (this.front.top) {
        let inTransit = this.front.pop();
        this.rear.push(inTransit);
      }
      this.front.push(value);
      while (this.rear.top) {
        let inTransit = this.rear.pop();
        this.front.push(inTransit);
      }
    }
  }
  dequeue(value) {
    if (value !== 'dog' && value !== 'cat') {
      return null
    } else if (value === 'dog' && this.front.value === 'dog'){
      this.front.pop;
    } else if (value === 'cat' && this.front.value === 'cat'){
      this.front.pop;
    }
  }
}
class Stack {
  constructor() {
    this.top = null
  }
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.top.value
    }
  }
}

module.exports = { Stack: Stack, Node: Node, AnimalShelter: AnimalShelter };