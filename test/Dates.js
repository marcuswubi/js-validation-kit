const assert = require("assert");
const { Dates } = require("../src/index");

describe("Dates", function() {
  describe("DATE", function() {
    const value = "",
      expected = false;
    it(`'deve validar se '${value}'`, function() {
      assert.equal(Dates.is_empty(value), expected);
    });
  });
});
