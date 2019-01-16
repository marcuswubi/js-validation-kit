const Regex = require('../regexs/Regexs');
const RgxPresets = require('../regexs/RgxPresets');

const Ids = {
	gen_mongo_id: () => {
		const ts = ((new Date().getTime() / 1000) | 0).toString(16);
		return (
			ts +
			'xxxxxxxxxxxxxxxx'
				.replace(/[x]/g, function() {
					return ((Math.random() * 16) | 0).toString(16);
				})
				.toLowerCase()
		);
	},
	is_mongo_id: _id => Regex.match_regexp(_id, RgxPresets.Id),
};

module.exports = Ids;
