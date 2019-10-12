const Regexs = {
  matchRegexp: (value, rgx) => {
    const validationRegexp = rgx instanceof RegExp ? rgx : new RegExp(rgx);
    return validationRegexp.test(value);
  },
};

module.exports = Regexs;
