const Functions = require('../src/index').Functions;

const fn1 = number => number + 2;
const fn2 = number => number - 1;

const fn_promisse = num =>
	new Promise(function(resolve, reject) {
		//everything ok
		if (true) {
			num = num * 2;
			resolve(num);
		} else {
			reject('failed');
		}
	});

const calc_pipe = Functions.pipe(
	fn1,
	fn2,
	fn_promisse
);

calc_pipe(4).then(number => console.log(number));
