const TributacaoBr = require('../tributacaobr/TributacaoBr');

const PessoaCei = {
  isCei: (cei) => TributacaoBr.isCei(cei, false),
  unmaskCei: (cei) => TributacaoBr.unmaskCei(cei, false),
  maskCei: (unmaskedCei) => TributacaoBr.maskCei(unmaskedCei, false),
};

module.exports = PessoaCei;
