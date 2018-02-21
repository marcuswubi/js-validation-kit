// this domain regex matches all domains that have at least one .
// sadly IPv4 Adresses will be caught too but technically those are valid domains
// this expression is extracted from the original RFC 5322 mail expression
// a modification enforces that the tld consists only of characters
const rxDomain = '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z](?:[a-z-]*[a-z])?';
// this domain regex matches everythign that could be a domain in intranet
// that means "localhost" is a valid domain
const rxNameDomain = '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\\.|$))+';
// strict IPv4 expression which allows 0-255 per oktett
const rxIPv4 = '(?:(?:[0-1]?\\d{1,2}|2[0-4]\\d|25[0-5])(?:\\.|$)){4}';
// strict IPv6 expression which allows (and validates) all shortcuts
const rxIPv6 = '(?:(?:[\\dA-Fa-f]{1,4}(?::|$)){8}' // full adress
    + '|(?=(?:[^:\\s]|:[^:\\s])*::(?:[^:\\s]|:[^:\\s])*$)' // or min/max one '::'
    + '[\\dA-Fa-f]{0,4}(?:::?(?:[\\dA-Fa-f]{1,4}|$)){1,6})'; // and short adress
// this allows domains (also localhost etc) and ip adresses
const rxWeakDomain = '(?:' + [rxNameDomain, rxIPv4, rxIPv6].join('|') + ')';

const regEx = {
    // We use the RegExp suggested by W3C in http://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    // This is probably the same logic used by most browsers when type=email, which is our goal. It is
    // a very permissive expression. Some apps may wish to be more strict and can write their own RegExp.
    Email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    // Like Email but requires the TLD (.com, etc)
    EmailWithTLD: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[A-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?$/,

    Domain: new RegExp('^' + rxDomain + '$'),
    WeakDomain: new RegExp('^' + rxWeakDomain + '$'),

    IP: new RegExp('^(?:' + rxIPv4 + '|' + rxIPv6 + ')$'),
    IPv4: new RegExp('^' + rxIPv4 + '$'),
    IPv6: new RegExp('^' + rxIPv6 + '$'),
    // URL RegEx from https://gist.github.com/dperini/729294
    // http://mathiasbynens.be/demo/url-regex
    Url: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,
    // unique id from the random package also used by minimongo
    // character list: https://github.com/meteor/meteor/blob/release/0.8.0/packages/random/random.js#L88
    // string length: https://github.com/meteor/meteor/blob/release/0.8.0/packages/random/random.js#L143
    Id: /^[23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz]{17}$/,
    // allows for a 5 digit zip code followed by a whitespace or dash and then 4 more digits
    // matches 11111 and 11111-1111 and 11111 1111
    ZipCode: /^\d{5}(?:[-\s]\d{4})?$/,
    // taken from Google's libphonenumber library
    // https://github.com/googlei18n/libphonenumber/blob/master/javascript/i18n/phonenumbers/phonenumberutil.js
    // reference the VALID_PHONE_NUMBER_PATTERN key
    // allows for common phone number symbols including + () and -
    Phone: /^[0-9０-９٠-٩۰-۹]{2}$|^[+＋]*(?:[-x‐-―−ー－-／  ­​⁠　()（）［］.\[\]/~⁓∼～*]*[0-9０-９٠-٩۰-۹]){3,}[-x‐-―−ー－-／  ­​⁠　()（）［］.\[\]/~⁓∼～0-9０-９٠-٩۰-۹]*(?:;ext=([0-9０-９٠-٩۰-۹]{1,7})|[  \t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\.．]?[  \t,-]*([0-9０-９٠-٩۰-۹]{1,7})#?|[- ]+([0-9０-９٠-٩۰-۹]{1,5})#)?$/i // eslint-disable-line no-irregular-whitespace
};

const Validations = {
    /**
     * @param value
     * @param regexp
     * @returns {boolean|*}
     */
    matchRegexp: (value, regexp) => {
        const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
        return (!Validations.isset(value) || Validations.isEmpty(value) || validationRegexp.test(value));
    },

    /**
     * @param value
     * @returns {boolean}
     */
    isset: value => {
        return value !== null && value !== undefined;
    },

    /**
     * @param value
     * @returns {boolean}
     */
    isEmpty: value => {
        return value === '' || value === undefined || value == null;
    },

    /**
     * @param value
     * @returns {boolean}
     */
    isEmptyTrimed: value => {
        if (typeof value === 'string') {
            return value.trim() === '';
        }
        return true;
    },

    /**
     * @param value
     * @returns {*}
     */
    isUrl: value => Validations.matchRegexp(value, regEx.Url),

    /**
     *
     * @param value
     * @returns {*}
     */
    isDomain: value => Validations.matchRegexp(value, regEx.Domain),

    /**
     *
     * @param value
     * @returns {*}
     */
    isWeakDomain: value => Validations.matchRegexp(value, regEx.WeakDomain),

    /**
     * @param value
     * @returns {*}
     */
    isEmail: value => Validations.matchRegexp(value, regEx.Email),


    /**
     * @param value
     * @returns {*}
     */
    isEmailWithTLD: value => Validations.matchRegexp(value, regEx.EmailWithTLD),

    /**
     * @param value
     * @returns {*}
     */
    isIP: value => Validations.matchRegexp(value, regEx.IP),

    /**
     * @param value
     * @returns {*}
     */
    isIPv4: value => Validations.matchRegexp(value, regEx.IPv4),

    /**
     * @param value
     * @returns {*}
     */
    isIPv6: value => Validations.matchRegexp(value, regEx.IPv6),

    /**
     * @param value
     * @returns {boolean}
     */
    required: value => !Validations.isEmpty(value),

    /**
     * @param value
     * @returns {boolean}
     */
    trim: value => !Validations.isEmptyTrimed(value),

    /**
     * @param value
     * @returns {*}
     */
    isNumber: value => Validations.matchRegexp(value, /^-?[0-9]\d*(\d+)?$/i),

    /**
     * @param value
     * @returns {*}
     */
    isFloat: value => Validations.matchRegexp(value, /^(?:[1-9]\d*|0)?(?:\.\d+)?$/i),

    /**
     * @param value
     * @returns {*}
     */
    isPositive: (value) => {
        if (Validations.isset(value)) {
            return (Validations.isNumber(value) || Validations.isFloat(value)) && value >= 0;
        }
        return true;
    },

    /**
     * @param value
     * @param max
     * @returns {boolean|*}
     */
    maxNumber: (value, max) => !Validations.isset(value) || Validations.isEmpty(value) || parseInt(value, 10) <= parseInt(max, 10),

    /**
     * @param value
     * @param min
     * @returns {boolean|*}
     */
    minNumber: (value, min) => !Validations.isset(value) || Validations.isEmpty(value) || parseInt(value, 10) >= parseInt(min, 10),

    /**
     * @param value
     * @returns {boolean}
     */
    isString: value => !Validations.isEmpty(value) || typeof value === 'string' || value instanceof String,

    /**
     * @param value
     * @param length
     * @returns {*|boolean}
     */
    minStringLength: (value, length) => Validations.isString(value) || value.length >= length,

    /**
     * @param value
     * @param length
     * @returns {*|boolean}
     */
    maxStringLength: (value, length) => Validations.isString(value) || value.length <= length,

    /**
     * @param value
     * @returns {*}
     */
    isMongoID: value => Validations.matchRegexp(value, regEx.Id),

    /**
     * @param value
     * @returns {*}
     */
    isCep: value => Validations.matchRegexp(value, /\d{2}\.\d{3}-\d{3}/),

    /**
     * @param value
     * @returns {*}
     */
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

    /**
     * @param cpf
     * @returns {boolean}
     */
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

    /**
     * @param cnpj
     * @returns {boolean}
     */
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

    /**
     * @param cei
     * @returns {boolean}
     */
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
