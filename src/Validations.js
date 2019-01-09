var regEx = require('./lib/Regex');

const Validations = {
    matchRegexp: (value, regexp) => {
        const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
        return (!Validations.isset(value) || Validations.isEmpty(value) || validationRegexp.test(value));
    },
    isset: value => value !== null && value !== undefined && value !== "",
    isEmpty: value => value === '' || value === undefined || value == null,
    isEmptyTrimed: value => value.trim() === '',
    isUrl: value => Validations.matchRegexp(value, regEx.Url),
    isDomain: value => Validations.matchRegexp(value, regEx.Domain),
    isWeakDomain: value => Validations.matchRegexp(value, regEx.WeakDomain),
    isEmail: value => Validations.matchRegexp(value, regEx.Email),
    isEmailWithTLD: value => Validations.matchRegexp(value, regEx.EmailWithTLD),
    isIP: value => Validations.matchRegexp(value, regEx.IP),
    isIPv4: value => Validations.matchRegexp(value, regEx.IPv4),
    isIPv6: value => Validations.matchRegexp(value, regEx.IPv6),
    isNumber: value => Validations.matchRegexp(value, /^-?[0-9]\d*(\d+)?$/i),
    isFloat: value => Validations.matchRegexp(value, /^(?:[1-9]\d*|0)?(?:\.\d+)?$/i),
    isPositive: (value) => (Validations.isNumber(value) || Validations.isFloat(value)) && value >= 0,
    maxNumber: (value, max) => !Validations.isset(value) || Validations.isEmpty(value) || parseInt(value, 10) <= parseInt(max, 10),
    minNumber: (value, min) => !Validations.isset(value) || Validations.isEmpty(value) || parseInt(value, 10) >= parseInt(min, 10),
    isString: value => !Validations.isEmpty(value) || typeof value === 'string' || value instanceof String,
    minStringLength: (value, length) => Validations.isString(value) || value.length >= length,
    maxStringLength: (value, length) => Validations.isString(value) || value.length <= length,
    isMongoID: value => Validations.matchRegexp(value, regEx.Id),
    isCep: value => Validations.matchRegexp(value, /\d{2}\.\d{3}-\d{3}/),
    isUf: value => {
        const uf = value;
        const allUf = [
            'SC',
            'AC',
            'AL',
            'AP',
            'AM',
            'BA',
            'CE',
            'DF',
            'ES',
            'EX',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG',
            'PA',
            'PB',
            'PR',
            'PE',
            'PI',
            'RJ',
            'RN',
            'RS',
            'RO',
            'RR',
            'SC',
            'SP',
            'SE',
            'TO',
        ];

        let ufValida = false;

        if (uf.length === 2) {
            let upperUf = uf.toUpperCase();
            if (allUf.indexOf(upperUf) !== -1) {
                ufValida = true;
            }
        }

        return ufValida;
    },
    isCpf: cpf => {
        let soma = 0;
        let resto;

        if (cpf === '00000000000') return false;
        for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;

        soma = 0;
        for (i = 1; i <= 10; i++) soma = soma + parseInt(value.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) resto = 0;
        return resto === parseInt(cpf.substring(10, 11));
    },
    isCnpj: cnpj => {
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj === '') return false;

        if (cnpj.length !== 14)
            return false;

        // Remove common cnpj
        if (cnpj === "00000000000000" ||
            cnpj === "11111111111111" ||
            cnpj === "22222222222222" ||
            cnpj === "33333333333333" ||
            cnpj === "44444444444444" ||
            cnpj === "55555555555555" ||
            cnpj === "66666666666666" ||
            cnpj === "77777777777777" ||
            cnpj === "88888888888888" ||
            cnpj === "99999999999999")
            return false;

        // Valida DVs
        tamanho = cnpj.length - 2;
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        return resultado === digitos.charAt(1);
    },
    validateCEI = function (cei) {
        if (!cei) {
            return false;
        }
        cei = cei.replace(/[^\d]+/g, '');
         // Formato CEI (12 digitos): EE.NNN.NNNNN-AD
         // EE - Número
         // NNNNNNNN - Número
         // A - Atividade
         // D - Dígito Verificador
        if (cei.length === 12) {
            // Multiplicar os primeiros 11 algarismos pelos seus respectivos pesos.
            // Somar todos os produtos obtidos.
            let pesos = [7, 4, 1, 8, 5, 2, 1, 6, 3, 7, 4];
            let numeros = cei.substring(0, 12);
            let soma = 0;
            for (let i = 0; i < 11; i++) {
                soma = soma + (pesos[i] * numeros[i]);
            }
            // Com a SOMA obtida, somar o algarismo da unidade com o algarismo da dezena.
            soma = soma.toString();
            let somaTam = soma.length;
            soma = soma.substring(0, somaTam);
            let total = parseInt(soma.charAt(somaTam - 2)) + parseInt(soma.charAt(somaTam - 1));
            // Subtrair 10 o algarismo da unidade obtido no TOTAL anterior.
            total = total.toString();
            total = total.substring(0, total.length);
            let resultado = 10 - parseInt(total.charAt(total.length - 1));
            // O algarismo da unidade do resultado da subtração será o digito verificador.
            resultado = resultado.toString();
            resultado = resultado.substring(0, resultado.length);
            
            if (numeros[11] === resultado[resultado.length - 1]) {
                return true;
            }
            
            return false;
        } else {
            return false;
        }
    },
};

module.exports = Validations;
