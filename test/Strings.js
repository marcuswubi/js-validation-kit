const assert = require('assert');
const { Strings } = require('../src/index');

describe('Strings', function() {
	describe('É STRING', function() {
		it("'STRING DEMO' must be a 'string'", function() {
			assert.equal(Strings.is_string('STRING DEMO'), true);
		});
	});
	describe('STRING TAMANHO', function() {
		it("'STRING DEMO' must has size '11' characters", function() {
			assert.equal(Strings.string_size('STRING DEMO'), 11);
		});
	});
	describe('STRING MAIOR QUE', function() {
		it("'STRING DEMO' should bigger than '8' characters", function() {
			assert.equal(Strings.is_more_than('STRING DEMO', 8), true);
		});
	});
	describe('STRING MAIOR OU IGUAL A', function() {
		it("'STRING DEMO' should not bigger than '11' characters", function() {
			assert.equal(Strings.is_more_or_equal_than('STRING DEMO', 11), true);
		});
	});
	describe('STRING MENOR QUE', function() {
		it("'STRING DEMO' should not less than '8' characters", function() {
			assert.equal(Strings.is_less_than('STRING DEMO', 8), false);
		});
	});
	describe('STRING MENOR OU IGUAL A', function() {
		it("'STRING DEMO' shoud less than '11' characters", function() {
			assert.equal(Strings.is_less_or_equal_than('STRING DEMO', 11), true);
		});
	});
	describe('STRING CAPITALIZE', function() {
		it("'STRING DEMO' when use 'capitalize' must return 'String demo'", function() {
			assert.equal(Strings.capitalize('STRING DEMO'), 'String demo');
		});
	});
	describe('STRING UPPERCASE', function() {
		it("'string demo' when use 'uppercase' must return 'STRING DEMO'", function() {
			assert.equal(Strings.uppercase('string demo'), 'STRING DEMO');
		});
	});
	describe('STRING LOWERCASE', function() {
		it("'STRING DEMO' when use 'lowercase' must return 'string demo'", function() {
			assert.equal(Strings.lowercase('STRING DEMO'), 'string demo');
		});
	});
	describe('STARTS WITH', function() {
		it("'banana' must starts with 'bana'", function() {
			assert.equal(Strings.starts_with('banana', 'bana'), true);
		});
	});
	describe('ENDS WITH', function() {
		it("'banana' must ends with 'anana'", function() {
			assert.equal(Strings.ends_with('banana', 'anana'), true);
		});
	});
	describe('REMOVE CHARACTERS FROM BEGIN', function() {
		it("'# BANANA' ao remover 2 characters from begin must return 'BANANA'", function() {
			assert.equal(Strings.remove_char_left('* BANANA', 2), 'BANANA');
		});
	});
	describe('REMOVE CHARACTERS FROM END', function() {
		it("'BANANA;' whem remove 1 characters from end, must return 'BANANA'", function() {
			assert.equal(Strings.remove_char_right('BANANA;', 1), 'BANANA');
		});
	});
	describe('ADD CHARACTERS TO BEGIN', function() {
		const value = '.234890',
			expected = '00000.234890',
			modifier_1 = 5,
			modifier_2 = '0';

		it(`'${value}' when add '${modifier_1}' '${modifier_2}' at starts must return '${expected}'`, function() {
			assert.equal(Strings.str_pad_left(value, modifier_1, modifier_2), expected);
		});
	});
	describe('ADD CHARACTERS TO END', function() {
		const value = '20',
			expected = '20% about',
			modifier_1 = 1,
			modifier_2 = '% about';

		it(`'${value}' when add '${modifier_1}' '${modifier_2}' at ends must return '${expected}'`, function() {
			assert.equal(Strings.str_pad_right(value, modifier_1, modifier_2), expected);
		});
	});
	describe('ADD CHARACTERS TO BOTH, START and END', function() {
		const value = 'Nome do Autor',
			expected = '(Nome do Autor)',
			modifier_1 = 1,
			modifier_2 = '(',
			modifier_3 = ')';

		it(`'${value}' when add '${modifier_1}' '${modifier_2}' at ends must return '${expected}'`, function() {
			assert.equal(Strings.str_pad_both(value, modifier_1, modifier_2, modifier_3), expected);
		});
	});
	describe('PLURALIZE', function() {
		const value = 'qualquer',
			expected = 'quaisquer';

		it(`'${value}' when pluralize '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.pluralize_pt(value), expected);
		});
	});
	describe('PLURALIZE', function() {
		const value = 'cidadão',
			expected = 'cidadões';

		it(`'${value}' when pluralize '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.pluralize_pt(value), expected);
		});
	});
	describe('PLURALIZE', function() {
		const value = 'qualquer',
			expected = 'quaisquer';

		it(`'${value}' when pluralize '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.pluralize_pt(value), expected);
		});
	});
	describe('SINGULATE', function() {
		const value = 'canetas',
			expected = 'caneta';

		it(`'${value}' when singulate '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.singulate_pt(value), expected);
		});
	});
	describe('SINGULATE', function() {
		const value = 'pessoas',
			expected = 'pessoa';

		it(`'${value}' when singulate '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.singulate_pt(value), expected);
		});
	});
	describe('SINGULATE', function() {
		const value = 'cidadões',
			expected = 'cidadão';

		it(`'${value}' when singulate '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.singulate_pt(value), expected);
		});
	});
	describe('SINGULATE', function() {
		const value = 'quaisquer',
			expected = 'qualquer';

		it(`'${value}' when singulate '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.singulate_pt(value), expected);
		});
	});
	describe('REMOVE ACCENTS', function() {
		const value = 'ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž',
			expected = 'rRAAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';

		it(`'${value}' when remove accents '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_non_acents(value), expected);
		});
	});
	describe('REMOVE ACCENTS', function() {
		const value = 'O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.',
			expected = 'O CORACAO E DOCE COMO BANANA CARAMELIZADA COM ACUCAR.';

		it(`'${value}' when remove accents '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_non_acents(value), expected);
		});
	});
	describe('REMOVE ACCENTS', function() {
		const value = 'O coração é doce como banana caramelizada com açucar.',
			expected = 'O coracao e doce como banana caramelizada com acucar.';

		it(`'${value}' when remove accents '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_non_acents(value), expected);
		});
	});
	describe('CONVERT IN URL VALUE', function() {
		const value = 'Marcus Vinícius Mendes Gonçalves',
			expected = 'marcus_vinicius_mendes_goncalves';

		it(`'${value}' when convert to 'url' '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_url(value), expected);
		});
	});
	describe('CONVERT IN URL VALUE', function() {
		const value = 'O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.',
			expected = 'o_coracao_e_doce_como_banana_caramelizada_com_acucar';

		it(`'${value}' when convert to 'url' '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_url(value), expected);
		});
	});
	describe('STRING TO INTEGER', function() {
		const value = '47-segundos',
			expected = 47;

		it(`'${value}' when convert to 'inteiro' '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_integer(value), expected);
		});
	});
	describe('STRING TO INTEGER', function() {
		const value = '2cachorros5patos',
			expected = 25;

		it(`'${value}' when convert to 'inteiro' '${value}' must return '${expected}'`, function() {
			assert.equal(Strings.to_integer(value), expected);
		});
	});
});
