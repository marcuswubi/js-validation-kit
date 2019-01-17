const Functions = require("../src/index").Functions;

const fn_add = number => number + 2;
const fn_subtract = number => number - 1;
const fn_promise = require("../samples/fn_promise");

const calc_pipe = Functions.pipe(
  fn_add,
  fn_subtract,
  fn_promise
);

calc_pipe(4).then(number => console.log(number));
