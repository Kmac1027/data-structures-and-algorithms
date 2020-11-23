'use strict'

// function repeatWord(str) {
//   let array = [];
//   let strArr = str.split(' ');
//   for (let i = 0; i < strArr.length; i++) {
//     array.push(strArr[i]);
//     if (array.includes(strArr[i])) {
//       return (strArr[i]);
//     }
//   }
// }

let reg = /\w+/g

const hash = (key, size) => {
  let hashedKey = 0
  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i)
  }
  return hashedKey % size
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }
  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }
  search(key) {
    let idx = hash(key, this.size);
    if (this.buckets[idx].get(key)) {
      return this.buckets[idx].get(key)
    } else {
      return null
    }
  }
}

function repeat(str) {
  let key = str.match(reg)
  let add = new HashTable(key.length)
  for (let i = 0; i < key.length; i++) {
    if (add.search(key[i]) === key[i]) {
      console.log(i, key[i]);
      return key[i]
    } else {
      add.insert(key[i], key[i])
    }
  }
}


module.exports = repeat;