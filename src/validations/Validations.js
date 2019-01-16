const Validations = {
	is_type: (type, arg) => {
		if (type === 'array' && Array.isArray(arg)) return true;
		if (type === 'promisse' && typeof arg.then === 'function') return true;
		return typeof arg === type;
	},
	is_empty: value => value === '' || value === undefined || value === null,
	is_empty_trimed: val => {
		if (typeof val === 'string') return val.trim() === '';
		return true;
	},
};

module.exports = Validations;
