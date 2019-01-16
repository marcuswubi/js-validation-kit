const assert = require('assert');
const { Functions } = require('../src/index');

describe('Functions', function() {
	describe('IS MONGO ID', function() {
		const value = 'cTNRRsYAgGxRziJ78',
			expected = true;
		it(`'deve validar se '${value}' é um mongo _id`, function() {
			assert.equal(Functions.is_mongo_id(value), expected);
		});
	});
});
