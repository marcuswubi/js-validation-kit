const { TributacaoBr } = require('../src/index');
const color = '\x1b[36m%s\x1b[0m';

//CNPJ
console.log(color, 'CAPITALIZE =', TributacaoBr.is_cnpj('string minuscula virou capitalize'));
console.log(color, 'UPPERCASE =', TributacaoBr.uppercase('string minuscula virou uppercase'));
console.log(color, 'LOWERCASE =', TributacaoBr.lowercase('STRING MAIUSCULA VIROU MINUSCULA'));
