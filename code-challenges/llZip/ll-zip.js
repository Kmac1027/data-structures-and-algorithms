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

function zipLists(ll1, ll2) {
  let newList = new LinkedList();
  let current1 = ll1.head;
  let length1 = 0;
  while(current1) {
    length1 += 1;
    current1 = current1.next;
  }
  let current2 = ll2.head;
  let length2 = 0;
  while(current2) {
    length2 += 1;
    current2 = current2.next;
  }
  ll1.current = ll1.head;
  ll2.current = ll2.head;
  if (length1 >= length2) {
    newList.head = ll1.head;
    newList.current = newList.head;
    ll1.current = ll1.current.next;
    while (ll1.current) {
      if (ll2.current) {
        newList.insertAfter(newList.current.value, ll2.current.value);
        ll2.current = ll2.current.next;
        newList.current = newList.current.next;
      }
      if (ll1.current) {
        newList.insertAfter(newList.current.value, ll1.current.value);
        ll1.current = ll1.current.next;
        newList.current = newList.current.next;
      }
    }
  } else {
    newList.head = ll2.head;
    newList.current = newList.head;
    ll2.current = ll2.current.next;
    while (ll2.current) {
      if (ll1.current) {
        newList.insertAfter(newList.current.value, ll1.current.value);
        ll1.current = ll1.current.next;
        newList.current = newList.current.next;
      }
      if (ll2.current) {
        newList.insertAfter(newList.current.value, ll2.current.value);
        ll2.current = ll2.current.next;
        newList.current = newList.current.next;
      }
    }
  }
  return newList.head.value;
}
module.exports = {zipLists: zipLists, Node: Node, LinkedList: LinkedList};