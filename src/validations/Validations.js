const Validations = {
  is_empty: value => value === "" || value === undefined || value == null,
  is_empty_trimed: value => value.trim() === ""
};

module.exports = Validations;
