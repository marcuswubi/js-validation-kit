const TributacaoBr = require('../tributacaobr/TributacaoBr.js');

const PessoaFisica = {
  genCpf: (formated = true) => TributacaoBr.genCpf(formated, false),
  isCpf: (cpf) => TributacaoBr.isCpf(cpf, false),
  unmaskCpf: (cpf) => TributacaoBr.unmaskCpj(cpf, false),
  maskCpf: (unmaskedCpf) => TributacaoBr.maskCpj(unmaskedCpf, false),
  maskPIS: (string) => {
    if (!TributacaoBr.validatePIS(string)) return string;
    return string
      .replace(/[^\d]+/g, '')
      .replace(/^(\d{3})(\d{5})(\d{2})(\d{1}).*/, '$1.$2.$3-$4');
  },
  maskTituloEleitor: (string) => {
    if (!string) return string;
    return string.replace(/[^\d]+/g, '').replace(/^(\d{10})(\d{2}).*/, '$1/$2');
  },
};

module.exports = PessoaFisica;
