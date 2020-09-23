'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named sayHello, that sends the message 'Hello from the back-end' when a user hits the `/hello` route.
------------------------------------------------------------------------------------------------ */

// Express sever here
const createServer = () => {
  const express=require('express');
  const app=express();
  app.get('/hello', sayHello);

  var server = app.listen(3301, function () {
    var port = server.address().port;
    console.log('Example app listening at port', port);
  });
  return server;
};


function sayHello(request, response){
  try {
    response.status(200).send('Hello from the back-end');
  }
  catch (error) {
    response.status(404).send('Error');
  }
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.
For example, oddValues([1,2,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

const oddValues = (arr) => {
  return arr.filter(int => int % 2 !== 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named filterStringsWithVowels that, given an array of strings as input, uses filter to return an array with only words that contain vowels.
The callback function to filter should include or utilize a regular expression pattern.
For example, filterStringsWithVowels('gregor','hound','xyz') returns ['gregor', 'hound'].
------------------------------------------------------------------------------------------------ */


const filterStringsWithVowels = (arr) => {
  let regex = /[aeiou]/gi;
  return arr.filter(word => word.match(regex));
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.
For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
------------------------------------------------------------------------------------------------ */

const notInFirstArray = (forbiddenValues, arr) => {
  return arr.filter(element => !forbiddenValues.includes(element));
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal
Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the `charCodeAt` method on the original array element.
Read the MDN documentation on String.charCodeAt() if necessary.
For example: charCode(['h','i']) returns [104, 105].
------------------------------------------------------------------------------------------------ */

const charCode = (arr) => {
  return arr.map(el => el.charCodeAt(0));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal
Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
------------------------------------------------------------------------------------------------ */

const evenOdd = (arr) => {
  return arr.map(el => {
    if ((typeof el) !== 'number') {
      return 'N/A';
    }
    if (el % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Use the snorlaxAbilities data, below, for this challenge.
Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.
Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */

const snorlaxAbilities = {
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractAbilities = (arr) => {
  return arr.map(value => value.ability.name);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Use the snorlaxStats data, below, for this challenge.
Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.
The total should be the sum of the effort and the baseStat.
Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */

const snorlaxStats = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStats = (arr) => {
  return arr.map(statObj => statObj = {
    name: statObj.stat.name,
    total: statObj.effort + statObj.baseStat
  });
};


/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-07.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should add tea to the list', () => {
    addTea();
    expect($('li:nth-child(6)').text()).toStrictEqual('tea');
  })
});

describe('Testing challenge 2', () => {
  test('It should return two raised to the power of the integer', () => {
    expect(forLoopTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(forLoopTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(forLoopTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 3', () => {
  test('It should return two raised to the power of the integer', () => {
    expect(forEachTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(forEachTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(forEachTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return two raised to the power of the integer', () => {
    expect(mapTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(mapTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });

  test('It should return decimals if the integer is negative', () => {
    expect(mapTwoToThe([-1, -2, -3])).toStrictEqual([0.5, 0.25, 0.125]);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array containing the character code for each letter', () => {
    expect(charCode(['C', 'o', 'd', 'e', '3', '0', '1'])).toStrictEqual([ 67, 111, 100, 101, 51, 48, 49 ]);
    expect(charCode(['C', 'o', 'd', 'e', '3', '0', '1']).length).toStrictEqual(7);
  });
});

describe('Testing challenge 6', () => {
  test('It should return an array containing the keys from an object', () => {
    expect(evenOdd([5, 8, 2, 6, 9, 13, 542, 541])).toStrictEqual([ 'odd', 'even', 'even', 'even', 'odd', 'odd', 'even', 'odd' ]);
    expect(evenOdd([5, 8, 2, 6, 9, 13, 542, 541]).length).toStrictEqual(8);
  });

  test('It should work with all odd numbers', () => {
    expect(evenOdd([1, 3, 5, 7, 9])).toStrictEqual([ 'odd', 'odd', 'odd', 'odd', 'odd' ]);
    expect(evenOdd([1, 3, 5, 7, 9]).length).toStrictEqual(5);
  });

  test('It should work with all even numbers', () => {
    expect(evenOdd([2, 4, 6, 8, 10])).toStrictEqual([ 'even', 'even', 'even', 'even', 'even' ]);
    expect(evenOdd([2, 4, 6, 8, 10]).length).toStrictEqual(5);
  });

  test('It should return the string "N/A" if a non-number is included in the array', () => {
    expect(evenOdd([5, 8, 2, 'hi'])).toStrictEqual([ 'odd', 'even', 'even', 'N/A' ]);
    expect(evenOdd([5, 8, 2, 'hi']).length).toStrictEqual(4);
  });
});

describe('Testing challenge 7', () => {
  test('It should return an array containing only the ability names', () => {
    expect(extractAbilities(snorlaxAbilities.abilities)).toStrictEqual(['gluttony', 'cute charm', 'immunity']);
    expect(extractAbilities(snorlaxAbilities.abilities).length).toStrictEqual(3);
  });
});

describe('Testing challenge 8', () => {
  test('It should return an array containing objects with name and total values', () => {
    expect(extractStats(snorlaxStats.stats)).toStrictEqual([
      { name: 'speed', total: 35, },
      { name: 'special-defense', total: 112, },
      { name: 'special-attack', total: 74, },
    ]);
    expect(extractStats(snorlaxStats.stats).length).toStrictEqual(3);
  });
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
};