/* globals describe, it */
const assert = require('assert');
const { Ids } = require('../src/index');

describe('Ids', () => {
  describe('GEN MONGO ID', () => {
    const value = Ids.genMongoId();
    it(`'must generate mongo_id: '${value}' and can't be empty`, () => {
      assert.notEqual(value, undefined);
    });
  });
  describe('IS MONGO ID', () => {
    const value = 'cTNRRsYAgGxRziJ78';
    const expected = true;
    it(`'must validate if '${value}' is a mongo _id`, () => {
      assert.equal(Ids.isMongoId(value), expected);
    });
  });
  describe('IS MONGO ID', () => {
    const value = 1;
    const expected = false;
    it(`'must validate if '${value}' is a mongo _id`, () => {
      assert.equal(Ids.isMongoId(value), expected);
    });
  });
  describe('IS MONGO ID', () => {
    const value = 'dasdasdas';
    const expected = false;
    it(`'must validate if '${value}' is a mongo _id`, () => {
      assert.equal(Ids.isMongoId(value), expected);
    });
  });
});
