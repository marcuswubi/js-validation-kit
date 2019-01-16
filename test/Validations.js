const assert = require('assert');
const { Validations } = require('../src/index');

describe('Validations', function() {
	describe('IS TYPE', function() {
		const value = 'marcus',
			expected = true;
		it(`'must validate if type of '${value}' is string`, function() {
			assert.equal(Validations.is_type('string', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = 1,
			expected = true;
		it(`'must validate if type of '${value}' is number`, function() {
			assert.equal(Validations.is_type('number', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = 1.5,
			expected = true;
		it(`'must validate if type of '${value}' is number`, function() {
			assert.equal(Validations.is_type('number', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = '1',
			expected = false;
		it(`'must validate if type of '${value}' não is number`, function() {
			assert.equal(Validations.is_type('number', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = true,
			expected = true;
		it(`'must validate if type of '${value}' is boolean`, function() {
			assert.equal(Validations.is_type('boolean', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = false,
			expected = true;
		it(`'must validate if type of '${value}' is boolean`, function() {
			assert.equal(Validations.is_type('boolean', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = () => {},
			expected = true;
		it(`'must validate if type of '${value}' is function`, function() {
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
		it(`'must validate if type of '${value}' is promise`, function() {
			assert.equal(Validations.is_type('promisse', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = {},
			expected = true;
		it(`'must validate if type of '${value}' is object`, function() {
			assert.equal(Validations.is_type('object', value), expected);
		});
	});
	describe('IS TYPE', function() {
		const value = [],
			expected = true;
		it(`'must validate if type of '[${value.join(', ')}]' is array`, function() {
			assert.equal(Validations.is_type('array', value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = 'acelera.framework',
			expected = false;
		it(`'must validate if '${value}' is not empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = ' marcus',
			expected = false;
		it(`'must validate if '${value}' is not empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = 0,
			expected = false;
		it(`'must validate if '${value}' is not empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = 1,
			expected = false;
		it(`'must validate if '${value}' is not empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = 0.25,
			expected = false;
		it(`'must validate if '${value}' is not empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = true,
			expected = false;
		it(`'must validate if '${value}' is not empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = false,
			expected = false;
		it(`'must validate if '${value}' is not empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = undefined,
			expected = true;
		it(`'must validate if '${value}' is empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = '',
			expected = true;
		it(`'must validate if '${value}' is empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY', function() {
		const value = null,
			expected = true;
		it(`'must validate if '${value}' is empty`, function() {
			assert.equal(Validations.is_empty(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = '        ',
			expected = true;
		it(`'must validate if '${value}' is empty trimed`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = ' ',
			expected = true;
		it(`'must validate if '${value}' is empty trimed`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = '',
			expected = true;
		it(`'must validate if '${value}' is empty trimed`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = 'acelera.framework',
			expected = false;
		it(`'must validate if '${value}' is not empty trimed`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = ' marcus',
			expected = false;
		it(`'must validate if '${value}' is not empty trimed`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = undefined,
			expected = true;
		it(`'must validate if '${value}' is empty trimed`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
	describe('IS EMPTY TRIMED', function() {
		const value = null,
			expected = true;
		it(`'must validate if '${value}' is empty trimed`, function() {
			assert.equal(Validations.is_empty_trimed(value), expected);
		});
	});
});
