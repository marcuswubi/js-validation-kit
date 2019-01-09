const npe = require('numero-por-extenso');

const Strings = {
	lowercase: str => (str ? str.toLowerCase() : str),
	uppercase: str => (str ? str.toUpperCase() : str),
	capitalize: str => (str ? str.replace(/^\w/, c => c.toUpperCase()) : str),
	pluralize_exceptions_pt: () => {
		return {
			cidadão: 'cidadões',
			mão: 'mãos',
			qualquer: 'quaisquer',
		};
	},
	pluralize_rules_pt: () => {
		return {
			ão: 'ões',
			ao: 'oes',
			ês: 'eses',
			es: 'eses',
			m: 'ns',
			l: 'is',
			r: 'res',
			us: 'i',
			x: 'xes',
			z: 'zes',
		};
	},
	pluralize_pt: string => {
		string = string.toLowerCase();

		// dont need to pluralize
		if (/(s|ões|eses|ns|is|res|xes|zes|ãos)$/.test(string)) {
			return string;
		}

		// belong to any exceptions?
		if (Object.keys(Strings.pluralize_exceptions_pt()).indexOf(string) !== -1) {
			return Strings.pluralize_exceptions_pt()[string];
		}

		// does not belong to any exception. But have any rules?
		let ruleCaseResult = '';
		Object.keys(Strings.pluralize_rules_pt()).map(function(rule) {
			const regex = new RegExp(rule + '$');
			if (regex.test(string)) {
				ruleCaseResult = string.replace(regex, Strings.pluralize_rules_pt()[rule]);
			}
		});
		if (ruleCaseResult) return ruleCaseResult;

		// does not belong to any exceptions nor rules
		return string + 's';
	},
	singulate_exceptions_pt: function() {
		return {
			cidadões: 'cidadão',
			mãos: 'mão',
			quaisquer: 'qualquer',
		};
	},
	singulate_rules_pt: function() {
		return {
			ões: 'ão',
			oes: 'ao',
			eses: 'ês',
			ns: 'm',
			is: 'l',
			res: 'r',
			i: 'us',
			xes: 'x',
			zes: 'z',
		};
	},
	singulate_pt: (string = '') => {
		string = string.toLowerCase();

		// belong to any exceptions?
		if (Object.keys(Strings.singulate_exceptions_pt()).indexOf(string) !== -1) {
			// console.log('singulate_pt=> has exception: ', string, Strings.singulate_exceptions_pt()[string]);
			return Strings.singulate_exceptions_pt()[string];
		}

		// does not belong to any exception. But have any rules?
		let ruleCaseResult = '';
		Object.keys(Strings.singulate_rules_pt()).map(function(rule) {
			const regex = new RegExp(rule + '$');
			if (regex.test(string)) {
				ruleCaseResult = string.replace(regex, Strings.singulate_rules_pt()[rule]);
			}
		});
		if (ruleCaseResult) return ruleCaseResult;

		// remove s from end
		if (Strings.ends_with(string, 's')) return Strings.remove_char_right(string, 1);

		// does not belong to any exceptions or rules and does not end with s
		return string;
	},
	starts_with: (string, start) => string.substr(0, start.length) === start,
	ends_with: (string, end) => string.substr(-end.length) === end,
	remove_char_left: (string, quant) => string.substring(quant, string.length),
	remove_char_right: (string, quant) => string.substring(0, string.length - quant),
	//normal, monetario, porcentagem
	integer_to_word_pt: (integer, formatAs = 'normal') => npe.porExtenso(integer, formatAs),
};

module.exports = Strings;
