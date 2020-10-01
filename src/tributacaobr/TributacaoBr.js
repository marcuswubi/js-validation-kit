const CPF = require('@fnando/cpf/commonjs');
const CNPJ = require('@fnando/cnpj/commonjs');

const TributacaoBr = {
  genCpf: (formatted = true) => CPF.generate(formatted),
  isCpf: (cpf) => CPF.isValid(cpf),
  unmaskCpj: (cpf) => cpf.replace(/[^\d]+/g, ''),
  maskCpj: (string) => {
    if (!TributacaoBr.isCpf(string)) return string;
    return string.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
  },
  genCnpj: (formatted = true) => CNPJ.generate(formatted),
  isCnpj: (cnpj) => CNPJ.isValid(cnpj),
  unmaskCnpj: (cnpj) => cnpj.replace(/[^\d]+/g, ''),
  maskCnpj: (string) => {
    if (!TributacaoBr.isCnpj(string)) return string;
    return string.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
      '$1.$2.$3/$4-$5',
    );
  },
  isCei: (cei) => {
    // eslint-disable-next-line no-param-reassign
    cei = cei.replace(/[^\d]+/g, '');
    if (!cei || cei.length !== 12) return cei;

    // Multiplicar os primeiros 11 algarismos pelos seus respectivos pesos.
    // Somar todos os produtos obtidos.
    const pesos = [7, 4, 1, 8, 5, 2, 1, 6, 3, 7, 4];
    const numeros = cei.substring(0, 12);
    let soma = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 11; i++) {
      soma += pesos[i] * numeros[i];
    }
    // Com a SOMA obtida, somar o algarismo da unidade com o algarismo da dezena.
    soma = soma.toString();
    const somaTam = soma.length;
    soma = soma.substring(0, somaTam);
    let total = parseInt(soma.charAt(somaTam - 2), 10) + parseInt(soma.charAt(somaTam - 1), 10);
    // Subtrair 10 o algarismo da unidade obtido no TOTAL anterior.
    total = total.toString();
    total = total.substring(0, total.length);
    let resultado = 10 - parseInt(total.charAt(total.length - 1), 10);
    // O algarismo da unidade do resultado da subtração será o digito verificador.
    resultado = resultado.toString();
    resultado = resultado.substring(0, resultado.length);

    return numeros[11] === resultado[resultado.length - 1];
  },
  unmaskCei: (cei) => cei.replace(/[^\d]+/g, ''),
  maskCei: (string) => {
    if (!TributacaoBr.isCei(string)) return string;
    return string.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{3})(\d{1}).*/,
      '$1.$2.$3.$4-$5',
    );
  },
  isFederalNumber: (value) => {
    // eslint-disable-next-line no-param-reassign
    value = value.replace(/[^\d]+/g, '');
    if (!value) return false;

    if (value.length === 14) return TributacaoBr.isCnpj(value);
    if (value.length === 12) return TributacaoBr.isCei(value);
    if (value.length === 11) return TributacaoBr.isCpf(value);

    return false;
  },
  unmaskFederalNumber: (federalNumber) => federalNumber.replace(/[^\d]+/g, ''),
  maskFederalNumber: (value) => {
    // eslint-disable-next-line no-param-reassign
    value = value.replace(/[^\d]+/g, '');
    if (!value || !value.length) return value;

    switch (value.length) {
      case 14:
        return TributacaoBr.maskCnpj(value);
      case 11:
        return TributacaoBr.maskCpj(value);
      case 12:
        return TributacaoBr.maskCei(value);
      default:
        return value;
    }
  },
  calcChaveModulo11: (chave, retornarResto = false, multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9]) => {
    let i = 0;
    const chave43 = chave.substring(0, chave.length-3);
    const resto = chave43.split('').reduceRight((anterior, atual) => {
      if (i > multiplicadores.length - 1) i = 0;
      return (multiplicadores[i++] * parseInt(atual, 10)) + anterior;
    }, 0) % 11;

    return retornarResto ? resto : (11 - resto >= 10 ? 0 : 11 - resto);
  }
};

module.exports = TributacaoBr;
