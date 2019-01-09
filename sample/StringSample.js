var Strings = require('../src/index');

//case convert
console.log('\x1b[36m%s\x1b[0m', 'CAPITALIZE =', Strings.capitalize('string minuscula virou capitalize'));
console.log('\x1b[36m%s\x1b[0m', 'UPPERCASE =', Strings.uppercase('string minuscula virou uppercase'));
console.log('\x1b[36m%s\x1b[0m', 'LOWERCASE =', Strings.lowercase('STRING MAIUSCULA VIROU MINUSCULA'));

//starts and end with
console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'START-WITH =', 'banana', 'bana', Strings.starts_with('banana', 'bana'));
console.log('\x1b[36m%s\x1b[0m', 'END-WITH =', 'banana', 'anana', Strings.ends_with('banana', 'anana'));

//remove characters
console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'REMOVE-FROM-LEFT =', Strings.remove_char_left('remover 1 caracter do inicio', 1));
console.log('\x1b[36m%s\x1b[0m', 'REMOVE-FROM-RIGHT =', Strings.remove_char_right('remover 3 caracteres do final', 3));

//pluralize
console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'PLURALIZE-pt =', 'caneta', Strings.pluralize_pt('caneta'));
console.log('\x1b[36m%s\x1b[0m', 'PLURALIZE-pt =', 'pessoa', Strings.pluralize_pt('pessoa'));
console.log('\x1b[36m%s\x1b[0m', 'PLURALIZE-pt =', 'qualquer', Strings.pluralize_pt('qualquer'));
console.log('\x1b[36m%s\x1b[0m', 'PLURALIZE-pt =', 'mão', Strings.pluralize_pt('mão'));
console.log('\x1b[36m%s\x1b[0m', 'PLURALIZE-pt =', 'cidade', Strings.pluralize_pt('cidade'));
console.log('\x1b[36m%s\x1b[0m', 'PLURALIZE-pt =', 'cidadão', Strings.pluralize_pt('cidadão'));

//singulate
console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'SINGULATE-pt =', 'canetas', Strings.singulate_pt('canetas'));
console.log('\x1b[36m%s\x1b[0m', 'SINGULATE-pt =', 'pessoas', Strings.singulate_pt('pessoas'));
console.log('\x1b[36m%s\x1b[0m', 'SINGULATE-pt =', 'quaisquer', Strings.singulate_pt('quaisquer'));
console.log('\x1b[36m%s\x1b[0m', 'SINGULATE-pt =', 'mãos', Strings.singulate_pt('mãos'));
console.log('\x1b[36m%s\x1b[0m', 'SINGULATE-pt =', 'cidades', Strings.singulate_pt('cidades'));
console.log('\x1b[36m%s\x1b[0m', 'SINGULATE-pt =', 'cidadões', Strings.singulate_pt('cidadões'));

//int to string
console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 1, Strings.integer_to_word_pt(1));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 223, Strings.integer_to_word_pt(223));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 61, Strings.integer_to_word_pt(61));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 6546785, Strings.integer_to_word_pt(6546785));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 687, Strings.integer_to_word_pt(687));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 1785.5, Strings.integer_to_word_pt(1785.5));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 0, Strings.integer_to_word_pt(0));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 0.345, Strings.integer_to_word_pt(0.345));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 14, Strings.integer_to_word_pt(14));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - NORMAL =', 4536, Strings.integer_to_word_pt(4536));
console.log(
	'\x1b[36m%s\x1b[0m',
	'INT TO STRING - NORMAL=',
	425642368575263241234,
	Strings.integer_to_word_pt(425642368575263241234)
);
console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 1, Strings.integer_to_word_pt(1, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 223, Strings.integer_to_word_pt(223, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 61, Strings.integer_to_word_pt(61, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 6546785, Strings.integer_to_word_pt(6546785, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 687, Strings.integer_to_word_pt(687, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 1785.5, Strings.integer_to_word_pt(1785.5, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 0, Strings.integer_to_word_pt(0, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 0.345, Strings.integer_to_word_pt(0.345, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 14, Strings.integer_to_word_pt(14, 'porcentagem'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - % =', 4536, Strings.integer_to_word_pt(4536, 'porcentagem'));
console.log(
	'\x1b[36m%s\x1b[0m',
	'INT TO STRING - % =',
	4265263241234,
	Strings.integer_to_word_pt(4265263241234, 'porcentagem')
);
console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 1, Strings.integer_to_word_pt(1, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 223, Strings.integer_to_word_pt(223, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 61, Strings.integer_to_word_pt(61, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 6546785, Strings.integer_to_word_pt(6546785, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 687, Strings.integer_to_word_pt(687, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 1785.5, Strings.integer_to_word_pt(1785.5, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 0, Strings.integer_to_word_pt(0, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 0.345, Strings.integer_to_word_pt(0.345, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 14, Strings.integer_to_word_pt(14, 'monetario'));
console.log('\x1b[36m%s\x1b[0m', 'INT TO STRING - $ =', 4536, Strings.integer_to_word_pt(4536, 'monetario'));
console.log(
	'\x1b[36m%s\x1b[0m',
	'INT TO STRING - $ =',
	425642368321321575263241234,
	Strings.integer_to_word_pt(468321321575263241234, 'monetario')
);
