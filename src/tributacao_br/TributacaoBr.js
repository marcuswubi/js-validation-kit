const TributacaoBr = {
	mask_federal_number: value => {
		value = value.replace(/[^\d]+/g, '');
		if (!value || !value.length) return value;

		switch (value.length) {
			case 14:
				return formatAsCNPJ(value);
			case 11:
				return formatAsCPF(value);
			case 14:
				return formatAsCEI(value);
			default:
				return value;
		}
	},
	mask_cnpj: string => {
		if (!validateFederalNumber(string)) return string;
		return string.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');
	},
	mask_cpf: string => {
		if (!validateFederalNumber(string)) return string;
		return string.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
	},
	mask_cei: string => {
		if (!validateFederalNumber(string)) return string;
		return string.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})(\d{1}).*/, '$1.$2.$3.$4-$5');
	},
	mask_PIS: string => {
		if (!validatePIS(string)) return string;
		return string.replace(/[^\d]+/g, '').replace(/^(\d{3})(\d{5})(\d{2})(\d{1}).*/, '$1.$2.$3-$4');
	},
	mask_titulo_eleitor: string => {
		if (!string) return string;
		return string.replace(/[^\d]+/g, '').replace(/^(\d{10})(\d{2}).*/, '$1/$2');
	},
	is_federal_number: value => {
		value = value.replace(/[^\d]+/g, '');
		if (!value) return value;

		switch (value.length) {
			case 14:
				return validateCNPJ(value);
			case 12:
				return validateCEI(value);
			case 11:
				return validateCPF(value);
			default:
				return false;
		}
	},
	is_cpf: cpf => {
		cpf = cpf.replace(/[^\d]+/g, '');
		if (!cpf || !cpf.length) return false;

		if (
			cpf === '00000000000' ||
			cpf === '11111111111' ||
			cpf === '22222222222' ||
			cpf === '33333333333' ||
			cpf === '44444444444' ||
			cpf === '55555555555' ||
			cpf === '66666666666' ||
			cpf === '77777777777' ||
			cpf === '88888888888' ||
			cpf === '99999999999'
		)
			return false;

		let soma = 0;
		let resto;

		for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
		resto = (soma * 10) % 11;

		if (resto === 10 || resto === 11) resto = 0;
		if (resto !== parseInt(cpf.substring(9, 10))) return false;

		soma = 0;
		for (i = 1; i <= 10; i++) soma = soma + parseInt(value.substring(i - 1, i)) * (12 - i);
		resto = (soma * 10) % 11;

		if (resto === 10 || resto === 11) resto = 0;
		return resto === parseInt(cpf.substring(10, 11));
	},
	is_cnpj: cnpj => {
		cnpj = cnpj.replace(/[^\d]+/g, '');
		if (!cnpj || cnpj.length !== 14) return false;

		if (
			cnpj === '00000000000000' ||
			cnpj === '11111111111111' ||
			cnpj === '22222222222222' ||
			cnpj === '33333333333333' ||
			cnpj === '44444444444444' ||
			cnpj === '55555555555555' ||
			cnpj === '66666666666666' ||
			cnpj === '77777777777777' ||
			cnpj === '88888888888888' ||
			cnpj === '99999999999999'
		)
			return false;

		// Valida DVs
		tamanho = cnpj.length - 2;
		numeros = cnpj.substring(0, tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado !== digitos.charAt(0)) return false;

		tamanho = tamanho + 1;
		numeros = cnpj.substring(0, tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2) pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		return resultado === digitos.charAt(1);
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
