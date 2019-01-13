const Validations = {
  is_set: value => value !== null && value !== undefined && value !== "",
  is_empty: value => value === "" || value === undefined || value == null,
  is_empty_trimed: value => value.trim() === "",
  is_url: value => Validations.matchRegexp(value, regEx.Url),
  is_domain: value => Validations.matchRegexp(value, regEx.Domain),
  is_weak_domain: value => Validations.matchRegexp(value, regEx.WeakDomain),
  is_email: value => Validations.matchRegexp(value, regEx.Email),
  is_email_with_TLD: value =>
    Validations.matchRegexp(value, regEx.EmailWithTLD),
  is_IP: value => Validations.matchRegexp(value, regEx.IP),
  is_IPv4: value => Validations.matchRegexp(value, regEx.IPv4),
  is_IPv6: value => Validations.matchRegexp(value, regEx.IPv6),

  isMongoID: value => Validations.matchRegexp(value, regEx.Id),
  isCep: value => Validations.matchRegexp(value, /\d{2}\.\d{3}-\d{3}/),
  isUf: value => {
    const uf = value;
    const allUf = [
      "SC",
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "EX",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO"
    ];

    let ufValida = false;

    if (uf.length === 2) {
      let upperUf = uf.toUpperCase();
      if (allUf.indexOf(upperUf) !== -1) {
        ufValida = true;
      }
    }

    return ufValida;
  }
};

module.exports = Validations;
