'use strict';

let bracket = require('./multi-bracket-validation.js')


describe('Check to see if brackets are ballenced', () => {
  test('is balenced', () => {
    expect(bracket.multiBracketValidation('()')).toStrictEqual(true);
  });
  test('is not balenced', () => {
    expect(bracket.multiBracketValidation('(}')).toStrictEqual(false);
  });
});