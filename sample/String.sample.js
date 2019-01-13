const { Strings } = require("../src/index");
const color = "\x1b[36m%s\x1b[0m";

//validationsstring_size
console.log(
  color,
  "STRING SIZE =",
  "STRING DEMO",
  Strings.string_size("STRING DEMO")
);
console.log(
  color,
  "IS STRING =",
  "STRING DEMO",
  Strings.is_string("STRING DEMO")
);
console.log(
  color,
  "IS MORE =",
  "STRING DEMO",
  8,
  Strings.is_more_than("STRING DEMO", 8)
);
console.log(
  color,
  "IS MORE =",
  "STRING DEMO",
  11,
  Strings.is_more_than("STRING DEMO", 11)
);
console.log(
  color,
  "IS MORE OR EQUAL =",
  "STRING DEMO",
  11,
  Strings.is_more_or_equal_than("STRING DEMO", 11)
);
console.log(
  color,
  "IS LESS =",
  "STRING DEMO",
  8,
  Strings.is_less_than("STRING DEMO", 8)
);
console.log(
  color,
  "IS LESS =",
  "STRING DEMO",
  11,
  Strings.is_less_than("STRING DEMO", 11)
);
console.log(
  color,
  "IS LESS OR EQUAL =",
  "STRING DEMO",
  11,
  Strings.is_less_or_equal_than("STRING DEMO", 11)
);

//case convert
console.log("\n");
console.log(
  color,
  "CAPITALIZE =",
  Strings.capitalize("string minuscula virou capitalize")
);
console.log(
  color,
  "UPPERCASE =",
  Strings.uppercase("string minuscula virou uppercase")
);
console.log(
  color,
  "LOWERCASE =",
  Strings.lowercase("STRING MAIUSCULA VIROU MINUSCULA")
);

//starts and end with
console.log("\n");
console.log(
  color,
  "START-WITH =",
  "banana",
  "bana",
  Strings.starts_with("banana", "bana")
);
console.log(
  color,
  "END-WITH =",
  "banana",
  "anana",
  Strings.ends_with("banana", "anana")
);

//remove characters
console.log("\n");
console.log(
  color,
  "REMOVE-FROM-LEFT =",
  Strings.remove_char_left("remover 1 caracter do inicio", 1)
);
console.log(
  color,
  "REMOVE-FROM-RIGHT =",
  Strings.remove_char_right("remover 3 caracteres do final", 3)
);

//concatena caracteres
console.log("\n");
console.log(color, "STR-PAD-LEFT =", Strings.str_pad_left(".234890", 5, "0"));
console.log(color, "STR-PAD-LEFT =", Strings.str_pad_left(".234890", 5, "X"));
console.log(color, "STR-PAD-LEFT =", Strings.str_pad_left(".234890", 5, "-"));
console.log(color, "STR-PAD-RIGHT =", Strings.str_pad_right("522", 5, "0"));
console.log(color, "STR-PAD-RIGHT =", Strings.str_pad_right("522", 5, "X"));
console.log(color, "STR-PAD-RIGHT =", Strings.str_pad_right("522", 5, "-"));

//pluralize
console.log("\n");
console.log(color, "PLURALIZE-pt =", "caneta", Strings.pluralize_pt("caneta"));
console.log(color, "PLURALIZE-pt =", "pessoa", Strings.pluralize_pt("pessoa"));
console.log(
  color,
  "PLURALIZE-pt =",
  "qualquer",
  Strings.pluralize_pt("qualquer")
);
console.log(color, "PLURALIZE-pt =", "mão", Strings.pluralize_pt("mão"));
console.log(color, "PLURALIZE-pt =", "cidade", Strings.pluralize_pt("cidade"));
console.log(
  color,
  "PLURALIZE-pt =",
  "cidadão",
  Strings.pluralize_pt("cidadão")
);

//singulate
console.log("\n");
console.log(
  color,
  "SINGULATE-pt =",
  "canetas",
  Strings.singulate_pt("canetas")
);
console.log(
  color,
  "SINGULATE-pt =",
  "pessoas",
  Strings.singulate_pt("pessoas")
);
console.log(
  color,
  "SINGULATE-pt =",
  "quaisquer",
  Strings.singulate_pt("quaisquer")
);
console.log(color, "SINGULATE-pt =", "mãos", Strings.singulate_pt("mãos"));
console.log(
  color,
  "SINGULATE-pt =",
  "cidades",
  Strings.singulate_pt("cidades")
);
console.log(
  color,
  "SINGULATE-pt =",
  "cidadões",
  Strings.singulate_pt("cidadões")
);

//remove os acentos
console.log("\n");
console.log(
  color,
  "TO NON ACENTS =",
  "ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž",
  Strings.to_non_acents(
    "ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž"
  )
);
console.log(
  color,
  "TO NON ACENTS =",
  "O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.",
  Strings.to_non_acents("O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.")
);
console.log(
  color,
  "TO NON ACENTS =",
  "O coração é doce como banana caramelizada com açucar.",
  Strings.to_non_acents(
    "O Amor do coração é doce como banana caramelizada com açucar."
  )
);

//tratamento para url
console.log("\n");
console.log(
  color,
  "TO URL =",
  "Marcus Vinícius Mendes Gonçalves",
  Strings.to_url("Marcus Vinícius Mendes Gonçalves")
);
console.log(
  color,
  "TO URL =",
  "O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.",
  Strings.to_url("O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.")
);

//string to int
console.log("\n");
console.log(
  color,
  "STRING TO INT =",
  "47-segundos",
  Strings.to_integer("47-segundos")
);
console.log(
  color,
  "STRING TO INT =",
  "2cachorros5patos",
  Strings.to_integer("2cachorros5patos")
);
