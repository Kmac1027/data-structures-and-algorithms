'use strict';

describe('Add a number to an existing array ', () => {
  test('should take in an array and add a number to the middle of the array', () =>{

    let array = [2,4,6,8]
    
    function insertShiftArray(array, add){
    array.splice(2,0,add)
    }
    
    return insertShiftArray(array, 5);

    expect(insertShiftArrayarray).toStrictEqual([2,4,5,6,8]);
  })
})
