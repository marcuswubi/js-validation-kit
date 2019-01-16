const assert = require('assert');
const Ids = require('../src/index').Ids;

describe('Ids', function() {
	describe('GEN MONGO ID', function() {
		const value = Ids.gen_mongo_id();
		it(`'must generate mongo_id: '${value}' and can't be empty`, function() {
			assert.notEqual(value, undefined);
		});
	});
	describe('IS MONGO ID', function() {
		const value = 'cTNRRsYAgGxRziJ78',
			expected = true;
		it(`'must validate if '${value}' is a mongo _id`, function() {
			assert.equal(Ids.is_mongo_id(value), expected);
		});
	});
	describe('IS MONGO ID', function() {
		const value = 1,
			expected = false;
		it(`'must validate if '${value}' is a mongo _id`, function() {
			assert.equal(Ids.is_mongo_id(value), expected);
		});
	});
	describe('IS MONGO ID', function() {
		const value = 'dasdasdas',
			expected = false;
		it(`'must validate if '${value}' is a mongo _id`, function() {
			assert.equal(Ids.is_mongo_id(value), expected);
		});
	});
});
