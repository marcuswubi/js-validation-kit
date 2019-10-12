const Validations = {
  isType: (type, arg) => {
    if (type === 'array' && Array.isArray(arg)) return true;
    if (type === 'promisse' && typeof arg.then === 'function') return true;
    return typeof arg === type;
  },
  isEmpty: (value) => value === '' || value === undefined || value === null,
  isEmptyTrimed: (val) => {
    if (typeof val === 'string') return val.trim() === '';
    return true;
  },
};

module.exports = Validations;
