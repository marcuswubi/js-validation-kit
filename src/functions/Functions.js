const Functions = {
  is_function: fn => typeof fn === "function",
  is_promise: fn => typeof fn.then === "function",
  is_callable: callable => is_function(callable) && is_promise(callable),
  pipe: (...fns) => data =>
    fns.reduce((acc, fn) => {
      if (typeof acc.then === "function") {
        return acc.then(fn);
      } else {
        return fn(acc);
      }
    }, data)
};

module.exports = Functions;
