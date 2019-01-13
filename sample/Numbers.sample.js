const { Numbers } = require("../src/index");
const color = "\x1b[36m%s\x1b[0m";

//number utils
console.log("\n");
console.log(color, "TO STRING =", 1, Numbers.to_string(1));
console.log(color, "IS INT =", 1, Numbers.is_int(1));
console.log(color, "IS INT =", 1.25, Numbers.is_int(1.25));
console.log(color, "IS FLOAT =", 1, Numbers.is_float(1));
console.log(color, "IS FLOAT =", 1.25, Numbers.is_float(1.25));
console.log(color, "IS POSITIVE =", 1, Numbers.is_positive(1));
console.log(color, "IS POSITIVE =", -11, Numbers.is_positive(-11));
console.log(color, "IS NEGATIVE =", 1, Numbers.is_negative(1));
console.log(color, "IS NEGATIVE =", -11, Numbers.is_negative(-11));

//number to string
console.log("\n");
console.log(color, "NUMBER TO STRING - NORMAL =", 1, Numbers.to_word_pt(1));
console.log(color, "NUMBER TO STRING - NORMAL =", 223, Numbers.to_word_pt(223));
console.log(color, "NUMBER TO STRING - NORMAL =", 61, Numbers.to_word_pt(61));
console.log(
  color,
  "NUMBER TO STRING - NORMAL =",
  6546785,
  Numbers.to_word_pt(6546785)
);
console.log(color, "NUMBER TO STRING - NORMAL =", 687, Numbers.to_word_pt(687));
console.log(
  color,
  "NUMBER TO STRING - NORMAL =",
  1785.5,
  Numbers.to_word_pt(1785.5)
);
console.log(color, "NUMBER TO STRING - NORMAL =", 0, Numbers.to_word_pt(0));
console.log(
  color,
  "NUMBER TO STRING - NORMAL =",
  0.345,
  Numbers.to_word_pt(0.345)
);
console.log(color, "NUMBER TO STRING - NORMAL =", 14, Numbers.to_word_pt(14));
console.log(
  color,
  "NUMBER TO STRING - NORMAL =",
  4536,
  Numbers.to_word_pt(4536)
);
console.log(
  color,
  "NUMBER TO STRING - NORMAL=",
  425642368575263241234,
  Numbers.to_word_pt(425642368575263241234)
);
console.log("\n");
console.log(
  color,
  "NUMBER TO STRING - % =",
  1,
  Numbers.to_word_pt(1, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  223,
  Numbers.to_word_pt(223, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  61,
  Numbers.to_word_pt(61, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  6546785,
  Numbers.to_word_pt(6546785, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  687,
  Numbers.to_word_pt(687, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  1785.5,
  Numbers.to_word_pt(1785.5, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  0,
  Numbers.to_word_pt(0, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  0.345,
  Numbers.to_word_pt(0.345, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  14,
  Numbers.to_word_pt(14, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  4536,
  Numbers.to_word_pt(4536, "porcentagem")
);
console.log(
  color,
  "NUMBER TO STRING - % =",
  4265263241234,
  Numbers.to_word_pt(4265263241234, "porcentagem")
);
console.log("\n");
console.log(
  color,
  "NUMBER TO STRING - $ =",
  1,
  Numbers.to_word_pt(1, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  223,
  Numbers.to_word_pt(223, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  61,
  Numbers.to_word_pt(61, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  6546785,
  Numbers.to_word_pt(6546785, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  687,
  Numbers.to_word_pt(687, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  1785.5,
  Numbers.to_word_pt(1785.5, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  0,
  Numbers.to_word_pt(0, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  0.345,
  Numbers.to_word_pt(0.345, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  14,
  Numbers.to_word_pt(14, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  4536,
  Numbers.to_word_pt(4536, "monetario")
);
console.log(
  color,
  "NUMBER TO STRING - $ =",
  4256423683213215752,
  Numbers.to_word_pt(4683213215752, "monetario")
);
