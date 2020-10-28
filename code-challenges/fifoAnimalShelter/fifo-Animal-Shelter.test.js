'use strict';

let ll = require('./fifo-Animal-Shelter.js');

describe('Testing to add dogs and cats to animal shelter', () => {
  test('Can successfully ad a dog', () => {

    let an = new ll.AnimalShelter();
    an.enqueue('dog');
    expect(an.front.top.value).toStrictEqual('dog');
  });
  test('Can successfully ad a cat', () => {

    let an = new ll.AnimalShelter();
    an.enqueue('cat');
    expect(an.front.top.value).toStrictEqual('cat');
  });
  test('Can successfully return null', () => {

    let an = new ll.AnimalShelter();
    an.enqueue('horse');
    expect(an.front.top).toStrictEqual(null);
  });
});