'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size)
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }
    this.buckets[index].add({ [key]: value })
  }

  get() {

  }

  contains(key) {
    let index = this.hash(key);
    let buckets = this.buckets[index];
    let current = buckets.head;
    while (current) {
      if (current.value[key]) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  hash(key) {
    let sum = 0
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }
    return (sum * 299) % this.size
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode
      return
    }
    let current = this.head;

    while (current) {
      if (current.next === null) {
        current.next = newNode;
      }
    }
  }
  // values() {

  // }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
module.exports = HashTable;