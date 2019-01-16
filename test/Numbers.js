const assert = require('assert');
const { Numbers } = require('../src/index');

describe('Numbers', function() {
	describe('TO STRING', function() {
		const value = 2,
			expected = '2';
		it(`'${value}' must return um dado do tipo string: '${expected}' `, function() {
			assert.equal(Numbers.to_string(value), expected);
			assert.equal(typeof Numbers.to_string(value), 'string');
		});
	});
	describe('IS INT', function() {
		const value = 42,
			expected = true;
		it(`'${value}' must return '${expected}' para o teste de inteiro`, function() {
			assert.equal(Numbers.is_int(value), expected);
		});
	});
	describe('IS INT', function() {
		const value = -42,
			expected = true;
		it(`'${value}' must return '${expected}' para o teste de inteiro`, function() {
			assert.equal(Numbers.is_int(value), expected);
		});
	});
	describe('IS INT', function() {
		const value = 42.5,
			expected = false;
		it(`'${value}' must return '${expected}' para o teste de inteiro`, function() {
			assert.equal(Numbers.is_int(value), expected);
		});
	});
	describe('IS FLOAT', function() {
		const value = 42.5,
			expected = true;
		it(`'${value}' must return '${expected}' para o teste de float`, function() {
			assert.equal(Numbers.is_float(value), expected);
		});
	});
	describe('IS FLOAT', function() {
		const value = 42,
			expected = false;
		it(`'${value}' must return '${expected}' para o teste de float`, function() {
			assert.equal(Numbers.is_float(value), expected);
		});
	});
	describe('IS FLOAT', function() {
		const value = -42,
			expected = false;
		it(`'${value}' must return '${expected}' para o teste de float`, function() {
			assert.equal(Numbers.is_float(value), expected);
		});
	});
	describe('IS POSITIVE', function() {
		const value = 42,
			expected = true;
		it(`'${value}' must return '${expected}' para o teste de número positivo`, function() {
			assert.equal(Numbers.is_positive(value), expected);
		});
	});
	describe('IS POSITIVE', function() {
		const value = -42,
			expected = false;
		it(`'${value}' must return '${expected}' para o teste de número positivo`, function() {
			assert.equal(Numbers.is_positive(value), expected);
		});
	});
	describe('IS NEGATIVE', function() {
		const value = -42,
			expected = true;
		it(`'${value}' must return '${expected}' para o teste de número negativo`, function() {
			assert.equal(Numbers.is_negative(value), expected);
		});
	});
	describe('IS NEGATIVE', function() {
		const value = 42,
			expected = false;
		it(`'${value}' must return '${expected}' para o teste de número negativo`, function() {
			assert.equal(Numbers.is_negative(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 1,
			expected = 'um';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 223,
			expected = 'duzentos e vinte e três';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 61,
			expected = 'sessenta e um';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 6546785,
			expected = 'seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 687,
			expected = 'seiscentos e oitenta e sete';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 1785.5,
			expected = 'um mil setecentos e oitenta e cinco vírgula cinco';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 0,
			expected = 'zero';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 0.345,
			expected = 'zero vírgula trezentos e quarenta e cinco';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 14,
			expected = 'quatorze';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 4536,
			expected = 'quatro mil quinhentos e trinta e seis';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT', function() {
		const value = 425642368575263200000,
			expected =
				'quatrocentos e vinte e cinco quintilhões seiscentos e quarenta e dois quatrilhões trezentos e sessenta e oito trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos mil';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 1,
			expected = 'um porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 223,
			expected = 'duzentos e vinte e três porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 61,
			expected = 'sessenta e um porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 6546785,
			expected = 'seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 687,
			expected = 'seiscentos e oitenta e sete porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 1785.5,
			expected = 'um mil setecentos e oitenta e cinco vírgula cinco porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 0,
			expected = 'zero porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 0.345,
			expected = 'zero vírgula trezentos e quarenta e cinco porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 14,
			expected = 'quatorze porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 4536,
			expected = 'quatro mil quinhentos e trinta e seis porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});
	describe('NUMBER TO WORD PT - % PORCENTAGEM', function() {
		const value = 425642368575263200000,
			expected =
				'quatrocentos e vinte e cinco quintilhões seiscentos e quarenta e dois quatrilhões trezentos e sessenta e oito trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos mil porcento';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
		});
	});

	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 1,
			expected = 'um real';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 223,
			expected = 'duzentos e vinte e três reais';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 61,
			expected = 'sessenta e um reais';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 6546785,
			expected = 'seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco reais';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 687,
			expected = 'seiscentos e oitenta e sete reais';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 1785.5,
			expected = 'um mil setecentos e oitenta e cinco reais e cinquenta centavos';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 0,
			expected = '';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 0.345,
			expected = 'trinta e quatro centavos';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 14,
			expected = 'quatorze reais';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 4536,
			expected = 'quatro mil quinhentos e trinta e seis reais';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
	describe('NUMBER TO WORD PT - MONETARIO', function() {
		const value = 425642368575263200000,
			expected =
				'quatrocentos e vinte e cinco quintilhões seiscentos e quarenta e dois quatrilhões trezentos e sessenta e oito trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos mil reais';
		it(`'${value}' must return '${expected}'`, function() {
			assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
		});
	});
});
