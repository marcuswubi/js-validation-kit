const Functions = {
	is_function: fn => fn && typeof fn === 'function',
	is_promisse: fn => fn && fn.then && typeof fn.then === 'function',
	is_callable: callable => is_function(callable) && is_promisse(callable),
	pipe: (...fns) => data =>
		fns.reduce((acc, fn) => {
			if (typeof acc.then === 'function') {
				return acc.then(fn);
			} else {
				return fn(acc);
			}
		}, data),
};

module.exports = Functions;
