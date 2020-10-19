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
}
describe('Testing the functions for single linked lists', () => {
  test('test insert, it should insert a new node at the head of the list', () => {
    let purple = new LinkedList();
    purple.insert('a');
    expect(purple.head.value).toStrictEqual('a');
  });
  test('test includes for a value within the nodes of our linked list', () => {
    let purple = new LinkedList();
    purple.insert('a');
    purple.insert('b');
    purple.insert('c');
    expect(purple.includes('b')).toStrictEqual(true);
    expect(purple.includes('x')).toStrictEqual(false);
  });
  test('test toString to output the values of our linked list', () => {
    let purple = new LinkedList();
    purple.insert('a');
    purple.insert('b');
    purple.insert('c');
    expect(purple.toString()).toStrictEqual('{ c } -> { b } -> { a } -> NULL');
  });
});