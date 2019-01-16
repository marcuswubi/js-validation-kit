const assert = require('assert');
const { Validations } = require('../src/index');

describe('Validations', function() {
	describe('IS TYPE', function() {
		const value = 'marcus',
			expected = true;
		it(`'deve validar se o tipo de '${value}' é string`, function() {
			assert.equal(Validations.is_type('string', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = 1,
			expected = true;
		it(`'deve validar se o tipo de '${value}' é number`, function() {
			assert.equal(Validations.is_type('number', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = 1.5,
			expected = true;
		it(`'deve validar se o tipo de '${value}' é number`, function() {
			assert.equal(Validations.is_type('number', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = '1',
			expected = false;
		it(`'deve validar se o tipo de '${value}' não é number`, function() {
			assert.equal(Validations.is_type('number', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = true,
			expected = true;
		it(`'deve validar se o tipo de '${value}' é boolean`, function() {
			assert.equal(Validations.is_type('boolean', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = false,
			expected = true;
		it(`'deve validar se o tipo de '${value}' é boolean`, function() {
			assert.equal(Validations.is_type('boolean', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = () => {},
			expected = true;
		it(`'deve validar se o tipo de '${value}' é function`, function() {
			assert.equal(Validations.is_type('function', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = new Promise(function(resolve, reject) {
				// everything ok
				if (true) {
					resolve('Stuff worked!');
				} else {
					reject('It broke');
				}
			}),
			expected = true;
		it(`'deve validar se o tipo de '${value}' é promisse`, function() {
			assert.equal(Validations.is_type('promisse', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = {},
			expected = true;
		it(`'deve validar se o tipo de '${value}' é object`, function() {
			assert.equal(Validations.is_type('object', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = [],
			expected = true;
		it(`'deve validar se o tipo de '[${value.join(', ')}]' é array`, function() {
			assert.equal(Validations.is_type('array', value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = 'acelera.framework',
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = ' marcus',
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = 0,
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = 1,
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = 0.25,
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = true,
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = false,
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = undefined,
			expected = true;
		it(`'deve validar se '${value}' esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = '',
			expected = true;
		it(`'deve validar se '${value}' esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = null,
			expected = true;
		it(`'deve validar se '${value}' esta vazio`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = '        ',
			expected = true;
		it(`'deve validar se '${value}' esta vazio`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = ' ',
			expected = true;
		it(`'deve validar se '${value}' esta vazio`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = '',
			expected = true;
		it(`'deve validar se '${value}' esta vazio`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = 'acelera.framework',
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = ' marcus',
			expected = false;
		it(`'deve validar se '${value}' não esta vazio`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = undefined,
			expected = true;
		it(`'deve validar se '${value}' esta vazio`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = null,
			expected = true;
		it(`'deve validar se '${value}' esta vazio`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
});
