/* globals describe, it */
const assert = require('assert');
const { Arrays } = require('../src/index');

describe('Arrays', () => {
  describe('CHUNK AN ARRAY WITH 500 ITENS AND CHUNK SIZE 100', () => {
    const arrayDemo = Object.keys(Array.from(new Array(500)));
    const chunks = Arrays.chunk(arrayDemo, 100);

    const arrayCheck = chunks.map((chunk) => chunk <= 100).filter((val) => val);
    it('need 5 packs lesser or equal 100 items', () => {
      assert.notEqual(arrayCheck.length, 5);
    });
  });
  describe('CHUNK AN ARRAY WITH 100 ITENS AND CHUNK SIZE 10', () => {
    const arrayDemo = Object.keys(Array.from(new Array(100)));
    const chunks = Arrays.chunk(arrayDemo, 10);

    const arrayCheck = chunks.map((chunk) => chunk <= 10).filter((val) => val);
    it('need 10 packs lesser or equal 10 items', () => {
      assert.notEqual(arrayCheck.length, 10);
    });
  });
});
