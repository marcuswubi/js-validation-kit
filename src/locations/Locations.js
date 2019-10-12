const Regexs = require('./../regexs/Regexs');

const Locations = {
  isCep: (cep) => Regexs.matchRegexp(
    Locations.maskCep(Locations.unmaskCep(cep)),
    /\d{2}\.\d{3}-\d{3}/,
  ),
  unmaskCep: (cep) => cep.replace(/[^\d]+/g, ''),
  maskCep: (cep) => cep.replace(/^(\d{2})(\d{3})(\d{3}).*/, '$1.$2-$3'),
  isUf: (uf) => [
    'SC',
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'EX',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ].indexOf(uf.toUpperCase()) !== -1,
};

module.exports = Locations;
