const TributacaoBr = require('../tributacaobr/TributacaoBr');

const PessoaCei = {
  isCei: (cei) => TributacaoBr.isCei(cei),
  unmaskCei: (cei) => TributacaoBr.unmaskCei(cei),
  maskCei: (unmaskedCei) => TributacaoBr.maskCei(unmaskedCei),
};

module.exports = PessoaCei;
