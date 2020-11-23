'use strict'

function repeatWord(str) {
  let array = [];
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    array.push(strArr[i]);
    if (array.includes(strArr[i])) {
      return (strArr[i]);
    }
  }
}

module.exports = repeatWord;