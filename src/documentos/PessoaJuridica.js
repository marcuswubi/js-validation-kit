const TributacaoBr = require('../tributacaobr/TributacaoBr');

const PessoaJuridica = {
  genCnpj: (formated = true) => TributacaoBr.genCnpj(formated),
  isCnpj: TributacaoBr.isCnpj,
  unmaskCnpj: TributacaoBr.unmaskCnpj,
  maskCnpj: TributacaoBr.maskCnpj,
};

module.exports = PessoaJuridica;
