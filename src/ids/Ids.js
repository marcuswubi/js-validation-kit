const Regex = require('../regexs/Regexs');
const RgxPresets = require('../regexs/RgxPresets');

const Ids = {
  genMongoId: () => {
    // eslint-disable-next-line no-bitwise
    const ts = ((new Date().getTime() / 1000) | 0).toString(16);
    return (
      ts + 'xxxxxxxxxxxxxxxx'
        .replace(/[x]/g, () => {
          // eslint-disable-next-line no-bitwise
          return ((Math.random() * 16) | 0).toString(16);
        })
        .toLowerCase()
    );
  },
  isMongoId: (_id) => Regex.matchRegexp(_id, RgxPresets.Id),
};

module.exports = Ids;
