/* globals describe, it */
const assert = require('assert');
const { Validations } = require('../src/index');

describe('Validations', () => {
  describe('IS TYPE', () => {
    const value = 'marcus';
    const expected = true;
    it(`'must validate if type of '${value}' is string`, () => {
      assert.equal(Validations.isType('string', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = 1;
    const expected = true;
    it(`'must validate if type of '${value}' is number`, () => {
      assert.equal(Validations.isType('number', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = 1.5;
    const expected = true;
    it(`'must validate if type of '${value}' is number`, () => {
      assert.equal(Validations.isType('number', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = '1';
    const expected = false;
    it(`'must validate if type of '${value}' não is number`, () => {
      assert.equal(Validations.isType('number', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = true;
    const expected = true;
    it(`'must validate if type of '${value}' is boolean`, () => {
      assert.equal(Validations.isType('boolean', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = false;
    const expected = true;
    it(`'must validate if type of '${value}' is boolean`, () => {
      assert.equal(Validations.isType('boolean', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = () => {};
    const expected = true;
    it(`'must validate if type of '${value}' is function`, () => {
      assert.equal(Validations.isType('function', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = new Promise((resolve, reject) => {
      // everything ok
      if (true) {
        resolve('Stuff worked!');
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('It broke');
      }
    });
    const expected = true;
    it(`'must validate if type of '${value}' is promise`, () => {
      assert.equal(Validations.isType('promisse', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = {};
    const expected = true;
    it(`'must validate if type of '${value}' is object`, () => {
      assert.equal(Validations.isType('object', value), expected);
    });
  });
  describe('IS TYPE', () => {
    const value = [];
    const expected = true;
    it(`'must validate if type of '[${value.join(', ')}]' is array`, () => {
      assert.equal(Validations.isType('array', value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = 'acelera.framework';
    const expected = false;
    it(`'must validate if '${value}' is not empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = ' marcus';
    const expected = false;
    it(`'must validate if '${value}' is not empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = 0;
    const expected = false;
    it(`'must validate if '${value}' is not empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = 1;
    const expected = false;
    it(`'must validate if '${value}' is not empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = 0.25;
    const expected = false;
    it(`'must validate if '${value}' is not empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = true;
    const expected = false;
    it(`'must validate if '${value}' is not empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = false;
    const expected = false;
    it(`'must validate if '${value}' is not empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = undefined;
    const expected = true;
    it(`'must validate if '${value}' is empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = '';
    const expected = true;
    it(`'must validate if '${value}' is empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY', () => {
    const value = null;
    const expected = true;
    it(`'must validate if '${value}' is empty`, () => {
      assert.equal(Validations.isEmpty(value), expected);
    });
  });
  describe('IS EMPTY TRIMED', () => {
    const value = '        ';
    const expected = true;
    it(`'must validate if '${value}' is empty trimed`, () => {
      assert.equal(Validations.isEmptyTrimed(value), expected);
    });
  });
  describe('IS EMPTY TRIMED', () => {
    const value = ' ';
    const expected = true;
    it(`'must validate if '${value}' is empty trimed`, () => {
      assert.equal(Validations.isEmptyTrimed(value), expected);
    });
  });
  describe('IS EMPTY TRIMED', () => {
    const value = '';
    const expected = true;
    it(`'must validate if '${value}' is empty trimed`, () => {
      assert.equal(Validations.isEmptyTrimed(value), expected);
    });
  });
  describe('IS EMPTY TRIMED', () => {
    const value = 'acelera.framework';
    const expected = false;
    it(`'must validate if '${value}' is not empty trimed`, () => {
      assert.equal(Validations.isEmptyTrimed(value), expected);
    });
  });
  describe('IS EMPTY TRIMED', () => {
    const value = ' marcus';
    const expected = false;
    it(`'must validate if '${value}' is not empty trimed`, () => {
      assert.equal(Validations.isEmptyTrimed(value), expected);
    });
  });
  describe('IS EMPTY TRIMED', () => {
    const value = undefined;
    const expected = true;
    it(`'must validate if '${value}' is empty trimed`, () => {
      assert.equal(Validations.isEmptyTrimed(value), expected);
    });
  });
  describe('IS EMPTY TRIMED', () => {
    const value = null;
    const expected = true;
    it(`'must validate if '${value}' is empty trimed`, () => {
      assert.equal(Validations.isEmptyTrimed(value), expected);
    });
  });
});
