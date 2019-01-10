var Strings = require('../src/index');
var color = '\x1b[36m%s\x1b[0m';

//case convert
console.log(color, 'CAPITALIZE =', Strings.capitalize('string minuscula virou capitalize'));
console.log(color, 'UPPERCASE =', Strings.uppercase('string minuscula virou uppercase'));
console.log(color, 'LOWERCASE =', Strings.lowercase('STRING MAIUSCULA VIROU MINUSCULA'));

//starts and end with
console.log('\n');
console.log(color, 'START-WITH =', 'banana', 'bana', Strings.starts_with('banana', 'bana'));
console.log(color, 'END-WITH =', 'banana', 'anana', Strings.ends_with('banana', 'anana'));

//remove characters
console.log('\n');
console.log(color, 'REMOVE-FROM-LEFT =', Strings.remove_char_left('remover 1 caracter do inicio', 1));
console.log(color, 'REMOVE-FROM-RIGHT =', Strings.remove_char_right('remover 3 caracteres do final', 3));

//concatena caracteres
console.log('\n');
console.log(color, 'STR-PAD-LEFT =', Strings.str_pad_left('.234890', 5, '0'));
console.log(color, 'STR-PAD-LEFT =', Strings.str_pad_left('.234890', 5, 'X'));
console.log(color, 'STR-PAD-LEFT =', Strings.str_pad_left('.234890', 5, '-'));
console.log(color, 'STR-PAD-RIGHT =', Strings.str_pad_right('522', 5, '0'));
console.log(color, 'STR-PAD-RIGHT =', Strings.str_pad_right('522', 5, 'X'));
console.log(color, 'STR-PAD-RIGHT =', Strings.str_pad_right('522', 5, '-'));

//pluralize
console.log('\n');
console.log(color, 'PLURALIZE-pt =', 'caneta', Strings.pluralize_pt('caneta'));
console.log(color, 'PLURALIZE-pt =', 'pessoa', Strings.pluralize_pt('pessoa'));
console.log(color, 'PLURALIZE-pt =', 'qualquer', Strings.pluralize_pt('qualquer'));
console.log(color, 'PLURALIZE-pt =', 'mão', Strings.pluralize_pt('mão'));
console.log(color, 'PLURALIZE-pt =', 'cidade', Strings.pluralize_pt('cidade'));
console.log(color, 'PLURALIZE-pt =', 'cidadão', Strings.pluralize_pt('cidadão'));

//singulate
console.log('\n');
console.log(color, 'SINGULATE-pt =', 'canetas', Strings.singulate_pt('canetas'));
console.log(color, 'SINGULATE-pt =', 'pessoas', Strings.singulate_pt('pessoas'));
console.log(color, 'SINGULATE-pt =', 'quaisquer', Strings.singulate_pt('quaisquer'));
console.log(color, 'SINGULATE-pt =', 'mãos', Strings.singulate_pt('mãos'));
console.log(color, 'SINGULATE-pt =', 'cidades', Strings.singulate_pt('cidades'));
console.log(color, 'SINGULATE-pt =', 'cidadões', Strings.singulate_pt('cidadões'));

//remove os acentos
console.log('\n');
console.log(
	color,
	'TO NON ACENTS =',
	'ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž',
	Strings.to_non_acents('ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž')
);
console.log(
	color,
	'TO NON ACENTS =',
	'O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.',
	Strings.to_non_acents('O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.')
);
console.log(
	color,
	'TO NON ACENTS =',
	'O coração é doce como banana caramelizada com açucar.',
	Strings.to_non_acents('O Amor do coração é doce como banana caramelizada com açucar.')
);

//tratamento para url
console.log('\n');
console.log(color, 'TO URL =', 'Marcus Vinícius Mendes Gonçalves', Strings.to_url('Marcus Vinícius Mendes Gonçalves'));
console.log(
	color,
	'TO URL =',
	'O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.',
	Strings.to_url('O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.')
);

//string to int
console.log('\n');
console.log(color, 'STRING TO INT =', '47-segundos', Strings.to_integer('47-segundos'));
console.log(color, 'STRING TO INT =', '2cachorros5patos', Strings.to_integer('2cachorros5patos'));

//int to string
console.log('\n');
console.log(color, 'INT TO STRING - NORMAL =', 1, Strings.integer_to_word_pt(1));
console.log(color, 'INT TO STRING - NORMAL =', 223, Strings.integer_to_word_pt(223));
console.log(color, 'INT TO STRING - NORMAL =', 61, Strings.integer_to_word_pt(61));
console.log(color, 'INT TO STRING - NORMAL =', 6546785, Strings.integer_to_word_pt(6546785));
console.log(color, 'INT TO STRING - NORMAL =', 687, Strings.integer_to_word_pt(687));
console.log(color, 'INT TO STRING - NORMAL =', 1785.5, Strings.integer_to_word_pt(1785.5));
console.log(color, 'INT TO STRING - NORMAL =', 0, Strings.integer_to_word_pt(0));
console.log(color, 'INT TO STRING - NORMAL =', 0.345, Strings.integer_to_word_pt(0.345));
console.log(color, 'INT TO STRING - NORMAL =', 14, Strings.integer_to_word_pt(14));
console.log(color, 'INT TO STRING - NORMAL =', 4536, Strings.integer_to_word_pt(4536));
console.log(color, 'INT TO STRING - NORMAL=', 425642368575263241234, Strings.integer_to_word_pt(425642368575263241234));
console.log('\n');
console.log(color, 'INT TO STRING - % =', 1, Strings.integer_to_word_pt(1, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 223, Strings.integer_to_word_pt(223, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 61, Strings.integer_to_word_pt(61, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 6546785, Strings.integer_to_word_pt(6546785, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 687, Strings.integer_to_word_pt(687, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 1785.5, Strings.integer_to_word_pt(1785.5, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 0, Strings.integer_to_word_pt(0, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 0.345, Strings.integer_to_word_pt(0.345, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 14, Strings.integer_to_word_pt(14, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 4536, Strings.integer_to_word_pt(4536, 'porcentagem'));
console.log(color, 'INT TO STRING - % =', 4265263241234, Strings.integer_to_word_pt(4265263241234, 'porcentagem'));
console.log('\n');
console.log(color, 'INT TO STRING - $ =', 1, Strings.integer_to_word_pt(1, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 223, Strings.integer_to_word_pt(223, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 61, Strings.integer_to_word_pt(61, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 6546785, Strings.integer_to_word_pt(6546785, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 687, Strings.integer_to_word_pt(687, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 1785.5, Strings.integer_to_word_pt(1785.5, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 0, Strings.integer_to_word_pt(0, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 0.345, Strings.integer_to_word_pt(0.345, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 14, Strings.integer_to_word_pt(14, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 4536, Strings.integer_to_word_pt(4536, 'monetario'));
console.log(color, 'INT TO STRING - $ =', 4256423683213215752, Strings.integer_to_word_pt(4683213215752, 'monetario'));
