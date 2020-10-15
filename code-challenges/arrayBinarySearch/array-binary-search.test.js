'use strict';
describe('Testing if function can find the given numbers index', () => {
  it('should return the index of the number given, unless that number is not within the given array tehn return -1', () => {
    let testArray = [4, 8, 15, 16, 23, 42];

    function binarySearch(array, num) {
      var firstIndex = 0,
        lastIndex = array.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

      while (array[middleIndex] !== num && firstIndex < lastIndex) {
        if (num < array[middleIndex]) {
          lastIndex = middleIndex - 1;
        }
        else if (num > array[middleIndex]) {
          firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
      }

      return (array[middleIndex] !== num) ? -1 : middleIndex;
    }
    binarySearch(testArray, 15);

    expect(binarySearch(testArray, 15)).toStrictEqual(2);
  })
});