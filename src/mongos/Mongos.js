const Regex = require("./../regexs/Regexs");
const RgxPresets = require("./../regexs/RgxPresets");

const Mongos = {
  is_mongo_id: _id => Regex.matchRegexp(_id, RgxPresets.Id)
};

module.exports = Mongos;
