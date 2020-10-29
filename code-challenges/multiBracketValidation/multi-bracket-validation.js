'use strict'

function multiBracketValidation(input) {
  let brackets = '{}[]()';
  let stack = [];
  for (let i of input) {
    let bracketsIndex = brackets.indexOf(i)
    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
    //return true ? true : false
  }
  return stack.length === 0;
}

module.exports = {multiBracketValidation: multiBracketValidation}