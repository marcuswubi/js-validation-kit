var regEx = require("../lib/Regex");

const Validations = {
  isset: value => value !== null && value !== undefined && value !== "",
  isEmpty: value => value === "" || value === undefined || value == null,
  isEmptyTrimed: value => value.trim() === "",
  isMongoID: value => Validations.matchRegexp(value, regEx.Id),
  isCep: value => Validations.matchRegexp(value, /\d{2}\.\d{3}-\d{3}/),
  isUf: value => {
    const uf = value;
    const allUf = [
      "SC",
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "EX",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO"
    ];

    let ufValida = false;

    if (uf.length === 2) {
      let upperUf = uf.toUpperCase();
      if (allUf.indexOf(upperUf) !== -1) {
        ufValida = true;
      }
    }

    return ufValida;
  }
};

module.exports = Validations;
