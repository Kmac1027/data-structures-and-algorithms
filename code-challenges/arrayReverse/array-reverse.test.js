'use strict'

describe('Testing to see if array will reverse', () => {
  it('should reverse an array that is passed into the function', () => {
    let array = [1, 2, 3, 4, 5, 6];

    function reverseArrayFunction(array) {
      let reverseArray = [];
      for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
      }
      return reverseArray
    }

    expect(reverseArrayFunction(array)).toStrictEqual([6, 5, 4, 3, 2, 1]);
  })
})
