const Regexs = require("./../regexs/Regexs");

const Locations = {
  is_cep: cep => {
    return Regexs.match_regexp(
      Locations.mask_cep(Locations.unmask_cep(cep)),
      /\d{2}\.\d{3}-\d{3}/
    );
  },
  unmask_cep: cep => cep.replace(/[^\d]+/g, ""),
  mask_cep: cep => {
    return cep.replace(/^(\d{2})(\d{3})(\d{3}).*/, "$1.$2-$3");
  },
  is_uf: uf =>
    [
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
    ].indexOf(uf.toUpperCase()) !== -1
};

module.exports = Locations;
