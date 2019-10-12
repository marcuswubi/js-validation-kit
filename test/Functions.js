/* globals describe, it */
const assert = require('assert');
const { Functions } = require('../src/index');
const promise = require('../samples/promise');

describe('Functions', () => {
  describe('IS FUNCTION', () => {
    const value = () => {};
    const expected = true;
    it(`'must validate if '${value}' is a function`, () => {
      assert.equal(Functions.isFunction(value), expected);
    });
  });
  describe('IS FUNCTION', () => {
    const value = {};
    const expected = false;
    it(`'must validate if '${value}' is not a function`, () => {
      assert.equal(Functions.isFunction(value), expected);
    });
  });
  describe('IS FUNCTION', () => {
    const value = promise;
    const expected = false;
    it(`'must validate if '${value}' is not a function`, () => {
      assert.equal(Functions.isFunction(value), expected);
    });
  });
  describe('IS FUNCTION', () => {
    const value = [];
    const expected = false;
    it(`'must validate if '${value}' is not a function`, () => {
      assert.equal(Functions.isFunction(value), expected);
    });
  });
  describe('IS PROMISE', () => {
    const value = () => {};
    const expected = false;
    it(`'must validate if '${value}' is not a promise`, () => {
      assert.equal(Functions.isPromise(value), expected);
    });
  });
  describe('IS PROMISE', () => {
    const value = promise;
    const expected = true;
    it(`'must validate if '${value}' is a promise`, () => {
      assert.equal(Functions.isPromise(value), expected);
    });
  });
  describe('IS PROMISE', () => {
    const value = {};
    const expected = false;
    it(`'must validate if '${value}' is not a promise`, () => {
      assert.equal(Functions.isPromise(value), expected);
    });
  });
  describe('IS PROMISE', () => {
    const value = [];
    const expected = false;
    it(`'must validate if '${value}' is not a promise`, () => {
      assert.equal(Functions.isPromise(value), expected);
    });
  });
});
