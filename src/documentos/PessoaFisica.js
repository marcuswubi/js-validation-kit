const { CPF } = require('cpf_cnpj');

const PessoaFisica = {
  gencpf: (formated = true) => CPF.generate(formated),
  isCpf: (cpf) => CPF.isValid(cpf),
  unmaskCpf: (cpf) => cpf.replace(/[^\d]+/g, ''),
  maskCpf: (string) => {
    if (!PessoaFisica.isCpf(string)) return string;
    return string.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
  },
};

module.exports = PessoaFisica;
