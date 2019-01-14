const assert = require("assert");
const { Validations } = require("../src/index");

describe("Validations", function() {
  describe("IS EMPTY", function() {
    const value = "acelera.cloud",
      expected = false;
    it(`'deve validar se '${value}' não esta vazio`, function() {
      assert.equal(Validations.is_empty(value), expected);
    });
  });
  describe("IS EMPTY", function() {
    const value = "",
      expected = true;
    it(`'deve validar se '${value}' esta vazio`, function() {
      assert.equal(Validations.is_empty(value), expected);
    });
  });
  describe("IS EMPTY TRIMED", function() {
    const value = "acelera.cloud",
      expected = false;
    it(`'deve validar se '${value}' não esta vazio`, function() {
      assert.equal(Validations.is_empty_trimed(value), expected);
    });
  });
  describe("IS EMPTY TRIMED", function() {
    const value = " ",
      expected = true;
    it(`'deve validar se '${value}' esta vazio`, function() {
      assert.equal(Validations.is_empty_trimed(value), expected);
    });
  });
});
