const Functions = {
  isFunction: (fn) => typeof fn === 'function',
  isPromise: (fn) => typeof fn.then === 'function',
  isCallable: (callable) => Functions.isFunction(callable) && Functions.isPromise(callable),
  pipe: (...fns) => (data) => fns.reduce((acc, fn) => {
    if (typeof acc.then === 'function') {
      return acc.then(fn);
    } else {
      return fn(acc);
    }
  }, data),
};

module.exports = Functions;
