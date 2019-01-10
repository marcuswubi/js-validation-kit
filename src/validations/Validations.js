var regEx = require('../lib/Regex');

const Validations = {
	matchRegexp: (value, regexp) => {
		const validationRegexp = regexp instanceof RegExp ? regexp : new RegExp(regexp);
		return !Validations.isset(value) || Validations.isEmpty(value) || validationRegexp.test(value);
	},
	isset: value => value !== null && value !== undefined && value !== '',
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
	isPositive: value => (Validations.isNumber(value) || Validations.isFloat(value)) && value >= 0,
	maxNumber: (value, max) =>
		!Validations.isset(value) || Validations.isEmpty(value) || parseInt(value, 10) <= parseInt(max, 10),
	minNumber: (value, min) =>
		!Validations.isset(value) || Validations.isEmpty(value) || parseInt(value, 10) >= parseInt(min, 10),
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
};

module.exports = Validations;
