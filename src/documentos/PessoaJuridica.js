const TributacaoBr = require('./../tributacao_br/TributacaoBr');

const PessoaJuridica = {
  genCnpj: (formated = true) => TributacaoBr.genCnpj(formated),
  isCnpj: (cnpj) => TributacaoBr.isCnpj(cnpj),
  unmaskCnpj: (cnpj) => TributacaoBr.unmaskCnpj(cnpj),
  maskCnpj: (unmaskedCnpj) => TributacaoBr.unmaskCnpj(unmaskedCnpj),
};

module.exports = PessoaJuridica;
