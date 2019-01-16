const assert = require('assert');
const { Strings } = require('../src/index');

describe('Strings', function() {
	describe('É STRING', function() {
		it("'STRING DEMO' deve ser uma 'string'", function() {
			assert.equal(Strings.is_string('STRING DEMO'), true);
		});
	});
	describe('STRING TAMANHO', function() {
		it("'STRING DEMO' deve ter o tamanho de '11' caracteres", function() {
			assert.equal(Strings.string_size('STRING DEMO'), 11);
		});
	});
	describe('STRING MAIOR QUE', function() {
		it("'STRING DEMO' deve ser maior que '8' caracteres", function() {
			assert.equal(Strings.is_more_than('STRING DEMO', 8), true);
		});
	});
	describe('STRING MAIOR OU IGUAL A', function() {
		it("'STRING DEMO' deve ser maior ou ter o tamanho de '11' caracteres", function() {
			assert.equal(Strings.is_more_or_equal_than('STRING DEMO', 11), true);
		});
	});
	describe('STRING MENOR QUE', function() {
		it("'STRING DEMO' não deve ser menor que '8' caracteres", function() {
			assert.equal(Strings.is_less_than('STRING DEMO', 8), false);
		});
	});
	describe('STRING MENOR OU IGUAL A', function() {
		it("'STRING DEMO' deve ser menor ou ter o tamanho de '11' caracteres", function() {
			assert.equal(Strings.is_less_or_equal_than('STRING DEMO', 11), true);
		});
	});
	describe('STRING CAPITALIZE', function() {
		it("'STRING DEMO' ao usar 'capitalize' must return 'String demo'", function() {
			assert.equal(Strings.capitalize('STRING DEMO'), 'String demo');
		});
	});
	describe('STRING UPPERCASE', function() {
		it("'string demo' ao usar 'uppercase' must return 'STRING DEMO'", function() {
			assert.equal(Strings.uppercase('string demo'), 'STRING DEMO');
		});
	});
	describe('STRING LOWERCASE', function() {
		it("'STRING DEMO' ao usar 'lowercase' must return 'string demo'", function() {
			assert.equal(Strings.lowercase('STRING DEMO'), 'string demo');
		});
	});
	describe('INICIA COM', function() {
		it("'banana' deve ter o inicio igual á 'bana'", function() {
			assert.equal(Strings.starts_with('banana', 'bana'), true);
		});
	});
	describe('TERMINA COM', function() {
		it("'banana' deve ter o final igual á 'anana'", function() {
			assert.equal(Strings.ends_with('banana', 'anana'), true);
		});
	});
	describe('REMOVER CARACTERES DO INICIO', function() {
		it("'# BANANA' ao remover 2 caracteres do inicio must return 'BANANA'", function() {
			assert.equal(Strings.remove_char_left('* BANANA', 2), 'BANANA');
		});
	});
	describe('REMOVER CARACTERES DO FINAL', function() {
		it("'BANANA;' ao remover 1 caracteres do final must return 'BANANA'", function() {
			assert.equal(Strings.remove_char_right('BANANA;', 1), 'BANANA');
		});
	});
	describe('ADICIONAR CARACTERES NO INICIO', function() {
		const value = '.234890',
			expected = '00000.234890',
			modifier_1 = 5,
			modifier_2 = '0';

		it(`'${value}' ao adicionar '${modifier_1}' '${modifier_2}' no inicio must return '${expected}'`, function() {
			assert.equal(Strings.str_pad_left(value, modifier_1, modifier_2), expected);
		});
	});
	describe('ADICIONAR CARACTERES NO FINAL', function() {
		const value = '20',
			expected = '20% aproximadamente',
			modifier_1 = 1,
			modifier_2 = '% aproximadamente';

		it(`'${value}' ao adicionar '${modifier_1}' '${modifier_2}' no final must return '${expected}'`, function() {
			assert.equal(Strings.str_pad_right(value, modifier_1, modifier_2), expected);
		});
	});
	describe('ADICIONAR CARACTERES EM AMBOS', function() {
		const value = 'Nome do Autor',
			expected = '(Nome do Autor)',
			modifier_1 = 1,
			modifier_2 = '(',
			modifier_3 = ')';

		it(`'${value}' ao adicionar '${modifier_1}' '${modifier_2}' no final must return '${expected}'`, function() {
			assert.equal(Strings.str_pad_both(value, modifier_1, modifier_2, modifier_3), expected);
		});
	});
	describe('PLURALIZAR', function() {
		const value = 'qualquer',
			expected = 'quaisquer';

		it(`'${value}' ao pluralizar '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.pluralize_pt(value), expected);
		});
	});
	describe('PLURALIZAR', function() {
		const value = 'cidadão',
			expected = 'cidadões';

		it(`'${value}' ao pluralizar '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.pluralize_pt(value), expected);
		});
	});
	describe('PLURALIZAR', function() {
		const value = 'qualquer',
			expected = 'quaisquer';

		it(`'${value}' ao pluralizar '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.pluralize_pt(value), expected);
		});
	});
	describe('SINGULARIZAR', function() {
		const value = 'canetas',
			expected = 'caneta';

		it(`'${value}' ao singularizar '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.singulate_pt(value), expected);
		});
	});
	describe('SINGULARIZAR', function() {
		const value = 'pessoas',
			expected = 'pessoa';

		it(`'${value}' ao singularizar '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.singulate_pt(value), expected);
		});
	});
	describe('SINGULARIZAR', function() {
		const value = 'cidadões',
			expected = 'cidadão';

		it(`'${value}' ao singularizar '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.singulate_pt(value), expected);
		});
	});
	describe('SINGULARIZAR', function() {
		const value = 'quaisquer',
			expected = 'qualquer';

		it(`'${value}' ao singularizar '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.singulate_pt(value), expected);
		});
	});
	describe('REMOVER ACENTOS', function() {
		const value = 'ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž',
			expected = 'rRAAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';

		it(`'${value}' ao remover acentos '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_non_acents(value), expected);
		});
	});
	describe('REMOVER ACENTOS', function() {
		const value = 'O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.',
			expected = 'O CORACAO E DOCE COMO BANANA CARAMELIZADA COM ACUCAR.';

		it(`'${value}' ao remover acentos '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_non_acents(value), expected);
		});
	});
	describe('REMOVER ACENTOS', function() {
		const value = 'O coração é doce como banana caramelizada com açucar.',
			expected = 'O coracao e doce como banana caramelizada com acucar.';

		it(`'${value}' ao remover acentos '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_non_acents(value), expected);
		});
	});
	describe('CONVERTER EM VALOR PARA URL', function() {
		const value = 'Marcus Vinícius Mendes Gonçalves',
			expected = 'marcus_vinicius_mendes_goncalves';

		it(`'${value}' ao converter em 'url' '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_url(value), expected);
		});
	});
	describe('CONVERTER EM VALOR PARA URL', function() {
		const value = 'O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.',
			expected = 'o_coracao_e_doce_como_banana_caramelizada_com_acucar';

		it(`'${value}' ao converter em 'url' '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_url(value), expected);
		});
	});
	describe('STRING PARA INTEIRO', function() {
		const value = '47-segundos',
			expected = 47;

		it(`'${value}' ao converter em 'inteiro' '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_integer(value), expected);
		});
	});
	describe('STRING PARA INTEIRO', function() {
		const value = '2cachorros5patos',
			expected = 25;

		it(`'${value}' ao converter em 'inteiro' '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_integer(value), expected);
		});
	});
});
