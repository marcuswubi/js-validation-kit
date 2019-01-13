const assert = require("assert");
const { Strings } = require("../src/index");

describe("Strings", function() {
  describe("É STRING", function() {
    it("'STRING DEMO' deve ser uma 'string'", function() {
      assert.equal(Strings.is_string("STRING DEMO"), true);
    });
  });
  describe("STRING TAMANHO", function() {
    it("'STRING DEMO' deve ter o tamanho de '11' caracteres", function() {
      assert.equal(Strings.string_size("STRING DEMO"), 11);
    });
  });
  describe("STRING MAIOR QUE", function() {
    it("'STRING DEMO' deve ser maior que '8' caracteres", function() {
      assert.equal(Strings.is_more_than("STRING DEMO", 8), true);
    });
  });
  describe("STRING MAIOR OU IGUAL A", function() {
    it("'STRING DEMO' deve ser maior ou ter o tamanho de '11' caracteres", function() {
      assert.equal(Strings.is_more_or_equal_than("STRING DEMO", 11), true);
    });
  });
  describe("STRING MENOR QUE", function() {
    it("'STRING DEMO' não deve ser menor que '8' caracteres", function() {
      assert.equal(Strings.is_less_than("STRING DEMO", 8), false);
    });
  });
  describe("STRING MENOR OU IGUAL A", function() {
    it("'STRING DEMO' deve ser menor ou ter o tamanho de '11' caracteres", function() {
      assert.equal(Strings.is_less_or_equal_than("STRING DEMO", 11), true);
    });
  });
  describe("STRING CAPITALIZE", function() {
    it("'STRING DEMO' ao usar 'capitalize' deve retornar 'String demo'", function() {
      assert.equal(Strings.capitalize("STRING DEMO"), "String demo");
    });
  });
  describe("STRING UPPERCASE", function() {
    it("'string demo' ao usar 'uppercase' deve retornar 'STRING DEMO'", function() {
      assert.equal(Strings.uppercase("string demo"), "STRING DEMO");
    });
  });
  describe("STRING LOWERCASE", function() {
    it("'STRING DEMO' ao usar 'lowercase' deve retornar 'string demo'", function() {
      assert.equal(Strings.lowercase("STRING DEMO"), "string demo");
    });
  });
  describe("INICIA COM", function() {
    it("'banana' deve ter o inicio igual á 'bana'", function() {
      assert.equal(Strings.starts_with("banana", "bana"), true);
    });
  });
  describe("TERMINA COM", function() {
    it("'banana' deve ter o final igual á 'anana'", function() {
      assert.equal(Strings.ends_with("banana", "anana"), true);
    });
  });
  describe("REMOVER CARACTERES DO INICIO", function() {
    it("'# BANANA' ao remover 2 caracteres do inicio deve retornar 'BANANA'", function() {
      assert.equal(Strings.remove_char_left("* BANANA", 2), "BANANA");
    });
  });
  describe("REMOVER CARACTERES DO FINAL", function() {
    it("'BANANA;' ao remover 1 caracteres do final deve retornar 'BANANA'", function() {
      assert.equal(Strings.remove_char_right("BANANA;", 1), "BANANA");
    });
  });
});

// //concatena caracteres
// console.log("\n");
// console.log(color, "STR-PAD-LEFT =", Strings.str_pad_left(".234890", 5, "0"));
// console.log(color, "STR-PAD-LEFT =", Strings.str_pad_left(".234890", 5, "X"));
// console.log(color, "STR-PAD-LEFT =", Strings.str_pad_left(".234890", 5, "-"));
// console.log(color, "STR-PAD-RIGHT =", Strings.str_pad_right("522", 5, "0"));
// console.log(color, "STR-PAD-RIGHT =", Strings.str_pad_right("522", 5, "X"));
// console.log(color, "STR-PAD-RIGHT =", Strings.str_pad_right("522", 5, "-"));

// //pluralize
// console.log("\n");
// console.log(color, "PLURALIZE-pt =", "caneta", Strings.pluralize_pt("caneta"));
// console.log(color, "PLURALIZE-pt =", "pessoa", Strings.pluralize_pt("pessoa"));
// console.log(
//   color,
//   "PLURALIZE-pt =",
//   "qualquer",
//   Strings.pluralize_pt("qualquer")
// );
// console.log(color, "PLURALIZE-pt =", "mão", Strings.pluralize_pt("mão"));
// console.log(color, "PLURALIZE-pt =", "cidade", Strings.pluralize_pt("cidade"));
// console.log(
//   color,
//   "PLURALIZE-pt =",
//   "cidadão",
//   Strings.pluralize_pt("cidadão")
// );

// //singulate
// console.log("\n");
// console.log(
//   color,
//   "SINGULATE-pt =",
//   "canetas",
//   Strings.singulate_pt("canetas")
// );
// console.log(
//   color,
//   "SINGULATE-pt =",
//   "pessoas",
//   Strings.singulate_pt("pessoas")
// );
// console.log(
//   color,
//   "SINGULATE-pt =",
//   "quaisquer",
//   Strings.singulate_pt("quaisquer")
// );
// console.log(color, "SINGULATE-pt =", "mãos", Strings.singulate_pt("mãos"));
// console.log(
//   color,
//   "SINGULATE-pt =",
//   "cidades",
//   Strings.singulate_pt("cidades")
// );
// console.log(
//   color,
//   "SINGULATE-pt =",
//   "cidadões",
//   Strings.singulate_pt("cidadões")
// );

// //remove os acentos
// console.log("\n");
// console.log(
//   color,
//   "TO NON ACENTS =",
//   "ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž",
//   Strings.to_non_acents(
//     "ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž"
//   )
// );
// console.log(
//   color,
//   "TO NON ACENTS =",
//   "O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.",
//   Strings.to_non_acents("O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.")
// );
// console.log(
//   color,
//   "TO NON ACENTS =",
//   "O coração é doce como banana caramelizada com açucar.",
//   Strings.to_non_acents(
//     "O Amor do coração é doce como banana caramelizada com açucar."
//   )
// );

// //tratamento para url
// console.log("\n");
// console.log(
//   color,
//   "TO URL =",
//   "Marcus Vinícius Mendes Gonçalves",
//   Strings.to_url("Marcus Vinícius Mendes Gonçalves")
// );
// console.log(
//   color,
//   "TO URL =",
//   "O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.",
//   Strings.to_url("O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.")
// );

// //string to int
// console.log("\n");
// console.log(
//   color,
//   "STRING TO INT =",
//   "47-segundos",
//   Strings.to_integer("47-segundos")
// );
// console.log(
//   color,
//   "STRING TO INT =",
//   "2cachorros5patos",
//   Strings.to_integer("2cachorros5patos")
// );
