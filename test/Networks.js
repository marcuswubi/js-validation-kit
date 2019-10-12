/* globals describe, it */
const assert = require('assert');
const { Networks } = require('../src/index');

describe('Networks', () => {
  describe('IS DOMAIN', () => {
    const value = 'https://acelera.cloud';
    const expected = true;
    it(`'must validate if '${value}' is a domain`, () => {
      assert.equal(Networks.isDomain(value), expected);
    });
  });
  describe('IS URL', () => {
    const value = 'https://acelera.cloud/contato';
    const expected = true;
    it(`'must validate if '${value}' is a domain`, () => {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe('IS URL', () => {
    const value = 'https://acelera.cloud/contato?prop1=teste&prop2=teste';
    const expected = true;
    it(`'must validate if '${value}' is a domain`, () => {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe('IS DOMAIN', () => {
    const value = 'http://acelera.cloud';
    const expected = true;
    it(`'must validate if '${value}' is a domain`, () => {
      assert.equal(Networks.isDomain(value), expected);
    });
  });
  describe('IS URL', () => {
    const value = 'http://acelera.cloud/contato';
    const expected = true;
    it(`'must validate if '${value}' is a url`, () => {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe('IS URL', () => {
    const value = 'http://acelera.cloud/contato?prop1=teste&prop2=teste';
    const expected = true;
    it(`'must validate if '${value}' is a url`, () => {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe('IS DOMAIN', () => {
    const value = 'acelera.cloud';
    const expected = true;
    it(`'must validate if '${value}' is a domain`, () => {
      assert.equal(Networks.isDomain(value), expected);
    });
  });
  describe('IS URL', () => {
    const value = 'acelera.cloud/contato';
    const expected = false;
    it(`'must validate if '${value}' is a url`, () => {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe('IS URL', () => {
    const value = 'acelera.cloud/contato?prop1=teste&prop2=teste';
    const expected = false;
    it(`'must validate if '${value}' is a url`, () => {
      assert.equal(Networks.is_url(value), expected);
    });
  });
  describe('IS EMAIL WITH TLD', () => {
    const value = 'marcus@aceleracloud.com.br';
    const expected = true;
    it(`'must validate if '${value}' is a email address with TLD`, () => {
      assert.equal(Networks.isEmailWithTld(value), expected);
    });
  });
  describe('IS EMAIL WITH TLD', () => {
    const value = 'marcus@aceleracloud.com';
    const expected = true;
    it(`'must validate if '${value}' is a email address with TLD`, () => {
      assert.equal(Networks.isEmailWithTld(value), expected);
    });
  });
  describe('IS EMAIL WITH TLD', () => {
    const value = 'marcus@acelera.cloud';
    const expected = true;
    it(`'must validate if '${value}' is a email address with TLD`, () => {
      assert.equal(Networks.isEmailWithTld(value), expected);
    });
  });
  describe('IS EMAIL WITH TLD', () => {
    const value = 'marcus@acelera';
    const expected = false;
    it(`'must validate if '${value}' is not a email address with TLD`, () => {
      assert.equal(Networks.isEmailWithTld(value), expected);
    });
  });
  describe('IS EMAIL WITH TLD', () => {
    const value = 'marcus@localhost';
    const expected = false;
    it(`'must validate if '${value}' is not a email address with TLD`, () => {
      assert.equal(Networks.isEmailWithTld(value), expected);
    });
  });
  describe('IS EMAIL WITH TLD', () => {
    const value = 'marcus@10.0.0.1';
    const expected = false;
    it(`'must validate if '${value}' is not a email address with TLD`, () => {
      assert.equal(Networks.isEmailWithTld(value), expected);
    });
  });
  describe('IS EMAIL WITH TLD', () => {
    const value = 'marcus@0';
    const expected = false;
    it(`'must validate if '${value}' is not a email address with TLD`, () => {
      assert.equal(Networks.isEmailWithTld(value), expected);
    });
  });
  describe('IS EMAIL WITHOUT TLD', () => {
    const value = 'marcus@aceleracloud.com.br';
    const expected = true;
    it(`'must validate if '${value}' is a email address without TLD`, () => {
      assert.equal(Networks.isEmail(value), expected);
    });
  });
  describe('IS EMAIL WITHOUT TLD', () => {
    const value = 'marcus@aceleracloud.com';
    const expected = true;
    it(`'must validate if '${value}' is a email address without TLD`, () => {
      assert.equal(Networks.isEmail(value), expected);
    });
  });
  describe('IS EMAIL WITHOUT TLD', () => {
    const value = 'marcus@acelera.cloud';
    const expected = true;
    it(`'must validate if '${value}' is a email address without TLD`, () => {
      assert.equal(Networks.isEmail(value), expected);
    });
  });
  describe('IS EMAIL WITHOUT TLD', () => {
    const value = 'marcus@acelera';
    const expected = true;
    it(`'must validate if '${value}' is a email address without TLD`, () => {
      assert.equal(Networks.isEmail(value), expected);
    });
  });
  describe('IS EMAIL WITHOUT TLD', () => {
    const value = 'marcus@localhost';
    const expected = true;
    it(`'must validate if '${value}' is a email address without TLD`, () => {
      assert.equal(Networks.isEmail(value), expected);
    });
  });
  describe('IS EMAIL WITHOUT TLD', () => {
    const value = 'marcus@10.0.0.1';
    const expected = true;
    it(`'must validate if '${value}' is a email address without TLD`, () => {
      assert.equal(Networks.isEmail(value), expected);
    });
  });
  describe('IS EMAIL WITHOUT TLD', () => {
    const value = 'marcus@0';
    const expected = true;
    it(`'must validate if '${value}' is a email address without TLD`, () => {
      assert.equal(Networks.isEmail(value), expected);
    });
  });
  describe('IS IP', () => {
    const value = 'localhost';
    const expected = false;
    it(`'must validate if '${value}' is not a IP`, () => {
      assert.equal(Networks.isIp(value), expected);
    });
  });
  describe('IS IP', () => {
    const value = '192.168.0.1';
    const expected = true;
    it(`'must validate if '${value}' is IP`, () => {
      assert.equal(Networks.isIp(value), expected);
    });
  });
  describe('IS IPV4', () => {
    const value = '10.0.0.1';
    const expected = true;
    it(`'must validate if '${value}' is IPV4`, () => {
      assert.equal(Networks.isIpv4(value), expected);
    });
  });
  describe('IS IPV4', () => {
    const value = '255.255.255.0';
    const expected = true;
    it(`'must validate if '${value}' is IPV4`, () => {
      assert.equal(Networks.isIpv4(value), expected);
    });
  });
  describe('IS IPV6', () => {
    const value = '2001:0DB8:AD1F:25E2:CADE:CAFE:F0CA:84C1';
    const expected = true;
    it(`'must validate if '${value}' is IPV6`, () => {
      assert.equal(Networks.isIpv6(value), expected);
    });
  });
});
