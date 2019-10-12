/* globals describe, it */
const assert = require('assert');
const { Locations } = require('../src/index');

describe('Locations', () => {
  describe('IS CEP', () => {
    const value = '89.888-777';
    const expected = true;
    it(`'must validate if '${value}' é um CEP`, () => {
      assert.equal(Locations.isCep(value), expected);
    });
  });
  describe('IS CEP', () => {
    const value = '89888777';
    const expected = true;
    it(`'must validate if '${value}' é um CEP`, () => {
      assert.equal(Locations.isCep(value), expected);
    });
  });
  describe('IS UF', () => {
    const value = 'SC';
    const expected = true;
    it(`'must validate if '${value}' is a UF`, () => {
      assert.equal(Locations.isUf(value), expected);
    });
  });
  describe('IS UF', () => {
    const value = 'DD';
    const expected = false;
    it(`'must validate if '${value}' is not a UF`, () => {
      assert.equal(Locations.isUf(value), expected);
    });
  });
});
