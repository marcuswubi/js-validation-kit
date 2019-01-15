const Validations = {
	is_empty: value => value === '' || value === undefined || value === null,
	is_empty_trimed: val => {
		if (typeof val === 'string') return val.trim() === '';
		return true;
	},
};

module.exports = Validations;
