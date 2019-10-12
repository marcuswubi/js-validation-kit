const npe = require('numero-por-extenso');

const Numbers = {
  isInt: (n) => Number(n) === n && n % 1 === 0,
  isFloat: (n) => Number(n) === n && n % 1 !== 0,
  isPositive: (val) => (Numbers.isInt(val) || Numbers.isFloat(val)) && val >= 0,
  isNegative: (val) => (Numbers.isInt(val) || Numbers.isFloat(val)) && val < 0,
  maxNumber: (val, max) => parseInt(val, 10) <= parseInt(max, 10),
  minNumber: (val, min) => parseInt(val, 10) >= parseInt(min, 10),
  toString: (number) => String(number),
  // normal, monetario, porcentagem
  to_word_pt: (int, format = 'normal') => npe.porExtenso(int, format),
};

module.exports = Numbers;
