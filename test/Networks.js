const assert = require("assert");
const { Networks } = require("../src/index");

describe("Networks", function() {
  describe("IS DOMAIN", function() {
    const value = "https://acelera.cloud",
      expected = true;
    it(`'deve validar se '${value}' é um domínio`, function() {
      assert.equal(Networks.is_domain(value), expected);
    });
  });
  describe("IS URL", function() {
    const value = "https://acelera.cloud/contato",
      expected = true;
    it(`'deve validar se '${value}' é um domínio`, function() {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe("IS URL", function() {
    const value = "https://acelera.cloud/contato?prop1=teste&prop2=teste",
      expected = true;
    it(`'deve validar se '${value}' é um domínio`, function() {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe("IS DOMAIN", function() {
    const value = "http://acelera.cloud",
      expected = true;
    it(`'deve validar se '${value}' é um domínio`, function() {
      assert.equal(Networks.is_domain(value), expected);
    });
  });
  describe("IS URL", function() {
    const value = "http://acelera.cloud/contato",
      expected = true;
    it(`'deve validar se '${value}' é uma url`, function() {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe("IS URL", function() {
    const value = "http://acelera.cloud/contato?prop1=teste&prop2=teste",
      expected = true;
    it(`'deve validar se '${value}' é uma url`, function() {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe("IS DOMAIN", function() {
    const value = "acelera.cloud",
      expected = true;
    it(`'deve validar se '${value}' é um domínio`, function() {
      assert.equal(Networks.is_domain(value), expected);
    });
  });
  describe("IS URL", function() {
    const value = "acelera.cloud/contato",
      expected = true;
    it(`'deve validar se '${value}' é uma url`, function() {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe("IS URL", function() {
    const value = "acelera.cloud/contato?prop1=teste&prop2=teste",
      expected = true;
    it(`'deve validar se '${value}' é uma url`, function() {
      assert.equal(Networks.is_url(value), expected);
    });
  });
});
