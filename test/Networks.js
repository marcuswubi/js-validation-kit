const assert = require('assert');
const { Networks } = require('../src/index');

describe('Networks', function() {
	describe('IS DOMAIN', function() {
		const value = 'https://acelera.cloud',
			expected = true;
		it(`'must validate if '${value}' is a domain`, function() {
			assert.equal(Networks.is_domain(value), expected);
		});
	});
	describe('IS URL', function() {
		const value = 'https://acelera.cloud/contato',
			expected = true;
		it(`'must validate if '${value}' is a domain`, function() {
			assert.equal(Networks.is_url(value), expected);
		});
	});
	describe('IS URL', function() {
		const value = 'https://acelera.cloud/contato?prop1=teste&prop2=teste',
			expected = true;
		it(`'must validate if '${value}' is a domain`, function() {
			assert.equal(Networks.is_url(value), expected);
		});
	});
	describe('IS DOMAIN', function() {
		const value = 'http://acelera.cloud',
			expected = true;
		it(`'must validate if '${value}' is a domain`, function() {
			assert.equal(Networks.is_domain(value), expected);
		});
	});
	describe('IS URL', function() {
		const value = 'http://acelera.cloud/contato',
			expected = true;
		it(`'must validate if '${value}' is a url`, function() {
			assert.equal(Networks.is_url(value), expected);
		});
	});
	describe('IS URL', function() {
		const value = 'http://acelera.cloud/contato?prop1=teste&prop2=teste',
			expected = true;
		it(`'must validate if '${value}' is a url`, function() {
			assert.equal(Networks.is_url(value), expected);
		});
	});
	describe('IS DOMAIN', function() {
		const value = 'acelera.cloud',
			expected = true;
		it(`'must validate if '${value}' is a domain`, function() {
			assert.equal(Networks.is_domain(value), expected);
		});
	});
	describe('IS URL', function() {
		const value = 'acelera.cloud/contato',
			expected = false;
		it(`'must validate if '${value}' is a url`, function() {
			assert.equal(Networks.is_url(value), expected);
		});
	});
	describe('IS URL', function() {
		const value = 'acelera.cloud/contato?prop1=teste&prop2=teste',
			expected = false;
		it(`'must validate if '${value}' is a url`, function() {
			assert.equal(Networks.is_url(value), expected);
		});
	});
	describe('IS EMAIL WITH TLD', function() {
		const value = 'marcus@aceleracloud.com.br',
			expected = true;
		it(`'must validate if '${value}' is a email address with TLD`, function() {
			assert.equal(Networks.is_email_with_tld(value), expected);
		});
	});
	describe('IS EMAIL WITH TLD', function() {
		const value = 'marcus@aceleracloud.com',
			expected = true;
		it(`'must validate if '${value}' is a email address with TLD`, function() {
			assert.equal(Networks.is_email_with_tld(value), expected);
		});
	});
	describe('IS EMAIL WITH TLD', function() {
		const value = 'marcus@acelera.cloud',
			expected = true;
		it(`'must validate if '${value}' is a email address with TLD`, function() {
			assert.equal(Networks.is_email_with_tld(value), expected);
		});
	});
	describe('IS EMAIL WITH TLD', function() {
		const value = 'marcus@acelera',
			expected = false;
		it(`'must validate if '${value}' is not a email address with TLD`, function() {
			assert.equal(Networks.is_email_with_tld(value), expected);
		});
	});
	describe('IS EMAIL WITH TLD', function() {
		const value = 'marcus@localhost',
			expected = false;
		it(`'must validate if '${value}' is not a email address with TLD`, function() {
			assert.equal(Networks.is_email_with_tld(value), expected);
		});
	});
	describe('IS EMAIL WITH TLD', function() {
		const value = 'marcus@10.0.0.1',
			expected = false;
		it(`'must validate if '${value}' is not a email address with TLD`, function() {
			assert.equal(Networks.is_email_with_tld(value), expected);
		});
	});
	describe('IS EMAIL WITH TLD', function() {
		const value = 'marcus@0',
			expected = false;
		it(`'must validate if '${value}' is not a email address with TLD`, function() {
			assert.equal(Networks.is_email_with_tld(value), expected);
		});
	});
	describe('IS EMAIL WITHOUT TLD', function() {
		const value = 'marcus@aceleracloud.com.br',
			expected = true;
		it(`'must validate if '${value}' is a email address without TLD`, function() {
			assert.equal(Networks.is_email(value), expected);
		});
	});
	describe('IS EMAIL WITHOUT TLD', function() {
		const value = 'marcus@aceleracloud.com',
			expected = true;
		it(`'must validate if '${value}' is a email address without TLD`, function() {
			assert.equal(Networks.is_email(value), expected);
		});
	});
	describe('IS EMAIL WITHOUT TLD', function() {
		const value = 'marcus@acelera.cloud',
			expected = true;
		it(`'must validate if '${value}' is a email address without TLD`, function() {
			assert.equal(Networks.is_email(value), expected);
		});
	});
	describe('IS EMAIL WITHOUT TLD', function() {
		const value = 'marcus@acelera',
			expected = true;
		it(`'must validate if '${value}' is a email address without TLD`, function() {
			assert.equal(Networks.is_email(value), expected);
		});
	});
	describe('IS EMAIL WITHOUT TLD', function() {
		const value = 'marcus@localhost',
			expected = true;
		it(`'must validate if '${value}' is a email address without TLD`, function() {
			assert.equal(Networks.is_email(value), expected);
		});
	});
	describe('IS EMAIL WITHOUT TLD', function() {
		const value = 'marcus@10.0.0.1',
			expected = true;
		it(`'must validate if '${value}' is a email address without TLD`, function() {
			assert.equal(Networks.is_email(value), expected);
		});
	});
	describe('IS EMAIL WITHOUT TLD', function() {
		const value = 'marcus@0',
			expected = true;
		it(`'must validate if '${value}' is a email address without TLD`, function() {
			assert.equal(Networks.is_email(value), expected);
		});
	});
	describe('IS IP', function() {
		const value = 'localhost',
			expected = false;
		it(`'must validate if '${value}' is not a IP`, function() {
			assert.equal(Networks.is_ip(value), expected);
		});
	});
	describe('IS IP', function() {
		const value = '192.168.0.1',
			expected = true;
		it(`'must validate if '${value}' is IP`, function() {
			assert.equal(Networks.is_ip(value), expected);
		});
	});
	describe('IS IPV4', function() {
		const value = '10.0.0.1',
			expected = true;
		it(`'must validate if '${value}' is IPV4`, function() {
			assert.equal(Networks.is_ipv4(value), expected);
		});
	});
	describe('IS IPV4', function() {
		const value = '255.255.255.0',
			expected = true;
		it(`'must validate if '${value}' is IPV4`, function() {
			assert.equal(Networks.is_ipv4(value), expected);
		});
	});
	describe('IS IPV6', function() {
		const value = '2001:0DB8:AD1F:25E2:CADE:CAFE:F0CA:84C1',
			expected = true;
		it(`'must validate if '${value}' is IPV6`, function() {
			assert.equal(Networks.is_ipv6(value), expected);
		});
	});
});
