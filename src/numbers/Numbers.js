const npe = require("numero-por-extenso");
const Regexs = require("./../regexs/Regexs");

const Numbers = {
  is_int: val => Regexs.match_regexp(val, /^-?[0-9]\d*(\d+)?$/i),
  is_float: val => Regexs.match_regexp(val, /^(?:[1-9]\d*|0)?(?:\.\d+)?$/i),
  is_positive: val =>
    (Numbers.is_int(val) || Numbers.is_float(val)) && val >= 0,
  is_negative: val => (Numbers.is_int(val) || Numbers.is_float(val)) && val < 0,
  max_number: (val, max) => parseInt(val, 10) <= parseInt(max, 10),
  min_number: (val, min) => parseInt(val, 10) >= parseInt(min, 10),
  to_string: number => String(number),
  //normal, monetario, porcentagem
  to_word_pt: (int, format = "normal") => npe.porExtenso(int, format)
};

module.exports = Numbers;
