const TributacaoBr = require('../tributacao_br/TributacaoBr.js');

const PessoaFisica = {
  genCpf: (formated = true) => TributacaoBr.genCpf(formated),
  isCpf: (cpf) => TributacaoBr.isCpf(cpf),
  unmaskCpf: (cpf) => TributacaoBr.unmaskCpj(cpf),
  maskCpf: (unmaskedCpf) => TributacaoBr.maskCpj(unmaskedCpf),
};

module.exports = PessoaFisica;
