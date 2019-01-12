const CPF = require('cpf_cnpj').CPF;
const CNPJ = require('cpf_cnpj').CNPJ;

const TributacaoBr = {
	gen_cpf: (formatted = true) => {
		return CPF.generate(formatted);
	},
	gen_cnpj: (formatted = true) => {
		return CNPJ.generate(formatted);
	},
	mask_cnpj: string => {
		if (!is_cnpj(string)) return string;
		return string.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');
	},
	unmask_cnpj: cnpj => cnpj.replace(/[^\d]+/g, ''),
	mask_cpf: string => {
		if (!is_cpf(string)) return string;
		return string.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
	},
	unmask_cpf: cpf => cpf.replace(/[^\d]+/g, ''),
	mask_cei: string => {
		if (!is_cei(string)) return string;
		return string.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})(\d{1}).*/, '$1.$2.$3.$4-$5');
	},
	unmask_cei: cei => cei.replace(/[^\d]+/g, ''),
	mask_PIS: string => {
		if (!validatePIS(string)) return string;
		return string.replace(/[^\d]+/g, '').replace(/^(\d{3})(\d{5})(\d{2})(\d{1}).*/, '$1.$2.$3-$4');
	},
	mask_titulo_eleitor: string => {
		if (!string) return string;
		return string.replace(/[^\d]+/g, '').replace(/^(\d{10})(\d{2}).*/, '$1/$2');
	},
	mask_federal_number: value => {
		value = value.replace(/[^\d]+/g, '');
		if (!value || !value.length) return value;

		switch (value.length) {
			case 14:
				return TributacaoBr.mask_cnpj(value);
			case 11:
				return TributacaoBr.mask_cpf(value);
			case 14:
				return TributacaoBr.mask_cei(value);
			default:
				return value;
		}
	},
	is_federal_number: value => {
		value = value.replace(/[^\d]+/g, '');
		if (!value) return false;

		if (value.length === 14) return TributacaoBr.is_cnpj(value);
		if (value.length === 12) return TributacaoBr.is_cei(value);
		if (value.length === 11) return TributacaoBr.is_cpf(value);

		return false;
	},
	is_cpf: cpf => {
		return CPF.isValid(cpf);
	},
	is_cnpj: cnpj => {
		return CNPJ.isValid(cnpj);
	},
	is_cei: cei => {
		cei = cei.replace(/[^\d]+/g, '');
		if (!cei || cei.length !== 12) return cei;

		// Multiplicar os primeiros 11 algarismos pelos seus respectivos pesos.
		// Somar todos os produtos obtidos.
		const pesos = [7, 4, 1, 8, 5, 2, 1, 6, 3, 7, 4];
		const numeros = cei.substring(0, 12);
		let soma = 0;
		for (let i = 0; i < 11; i++) {
			soma = soma + pesos[i] * numeros[i];
		}
		// Com a SOMA obtida, somar o algarismo da unidade com o algarismo da dezena.
		soma = soma.toString();
		const somaTam = soma.length;
		soma = soma.substring(0, somaTam);
		let total = parseInt(soma.charAt(somaTam - 2)) + parseInt(soma.charAt(somaTam - 1));
		// Subtrair 10 o algarismo da unidade obtido no TOTAL anterior.
		total = total.toString();
		total = total.substring(0, total.length);
		let resultado = 10 - parseInt(total.charAt(total.length - 1));
		// O algarismo da unidade do resultado da subtração será o digito verificador.
		resultado = resultado.toString();
		resultado = resultado.substring(0, resultado.length);

		return numeros[11] === resultado[resultado.length - 1];
	},
};

module.exports = TributacaoBr;
