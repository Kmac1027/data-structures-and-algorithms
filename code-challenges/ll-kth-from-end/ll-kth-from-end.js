'use strict';

//Mob programed with Michael, Spencer, and Sara

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }
  insert(value) {
    if (this.isEmpty() === true) {
      let newNode = new Node(value);
      this.head = newNode;
    } else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  includes(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return true;
      } else {
        current = current.next;
      } if (current.next === null) {
        return false;
      }
    }
  }
  toString() {
    let valString = '';
    let current = this.head;
    while (current) {
      valString += `{ ${current.value} } -> `;
      current = current.next;
    }
    valString += 'NULL';
    return valString;
  }
  append(value) {
    let current = this.head;
    while (current) {
      if (current !== null) {
        current = current.next
      } else {
        current.next = new Node(value);
        break;
      }
    }
  }
  insertBefore(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.next.value !== value) {
        current = current.next;
      } else {
        let newNode = new Node(newValue);
        newNode.next = newNode;
        current.next = newNode;
        break;
      }
    }
  }
  insertAfter(value, newValue) {
    let current = this.head;
    while (current) {
      if (current.value !== value) {
        current = current.next;
      } else {
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
    }
  }
  kthFromEnd(k) {
    let current = this.head;
    let index = 0;
    while (current) {
      index = index + 1;
      current = current.next;
    } if (k > index) {
      return 'bloop'
    }
    let countdown = index - k - 1;
    current = this.head;
    for (let i = 0; i < countdown; i++) {
     current = current.next;
    } 
      return current.value;
  }
}
module.exports = { LinkedList: LinkedList, Node: Node }