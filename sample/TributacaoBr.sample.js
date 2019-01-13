const { TributacaoBr } = require("../src/index");
const color = "\x1b[36m%s\x1b[0m";

//CPF
const cpf = TributacaoBr.gen_cpf();
console.log(color, "CPF GENERATOR =", cpf);
console.log(color, "IS CPF =", cpf, TributacaoBr.is_cpf(cpf));
console.log(
  color,
  "IS FEDERAL NUMBER =",
  cpf,
  TributacaoBr.is_federal_number(cpf)
);

//CNPJ
console.log("\n");
const cnpj = TributacaoBr.gen_cnpj();
console.log(color, "CNPJ GENERATOR =", cnpj);
console.log(color, "IS CNPJ =", cnpj, TributacaoBr.is_cnpj(cnpj));
console.log(
  color,
  "IS FEDERAL NUMBER =",
  cnpj,
  TributacaoBr.is_federal_number(cnpj)
);
