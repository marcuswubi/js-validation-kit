const assert = require('assert');
const { Locations } = require('../src/index');

describe('Locations', function() {
	describe('IS CEP', function() {
		const value = '89.888-777',
			expected = true;
		it(`'must validate if '${value}' é um CEP`, function() {
			assert.equal(Locations.is_cep(value), expected);
		});
	});
	describe('IS CEP', function() {
		const value = '89888777',
			expected = true;
		it(`'must validate if '${value}' é um CEP`, function() {
			assert.equal(Locations.is_cep(value), expected);
		});
	});
	describe('IS UF', function() {
		const value = 'SC',
			expected = true;
		it(`'must validate if '${value}' is a UF`, function() {
			assert.equal(Locations.is_uf(value), expected);
		});
	});
	describe('IS UF', function() {
		const value = 'DD',
			expected = false;
		it(`'must validate if '${value}' is not a UF`, function() {
			assert.equal(Locations.is_uf(value), expected);
		});
	});
});
