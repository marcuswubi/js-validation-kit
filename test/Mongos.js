const assert = require("assert");
const { Mongos } = require("../src/index");

describe("Mongos", function() {
  describe("GEN MONGO ID", function() {
    const value = Mongos.gen_mongo_id();
    it(`'deve gerar um  se '${value}' não está vazio`, function() {
      assert.notEqual(value, undefined);
    });
  });
  describe("IS MONGO ID", function() {
    const value = "5c3c08f0dc9d6576ec885aff",
      expected = true;
    it(`'deve validar se '${value}' é um mongo _id`, function() {
      assert.equal(Mongos.is_mongo_id(value), expected);
    });
  });
  describe("IS MONGO ID", function() {
    const value = 1,
      expected = false;
    it(`'deve validar se '${value}' é um mongo _id`, function() {
      assert.equal(Mongos.is_mongo_id(value), expected);
    });
  });
  describe("IS MONGO ID", function() {
    const value = "dasdasdas",
      expected = false;
    it(`'deve validar se '${value}' é um mongo _id`, function() {
      assert.equal(Mongos.is_mongo_id(value), expected);
    });
  });
});
