const npe = require("numero-por-extenso");

const Strings = {
  string_size: str => str.length,
  is_string: value => typeof value === "string" || value instanceof String,
  is_less_than: (value, length) => value.length < length,
  is_more_than: (value, length) => value.length > length,
  is_less_or_equal_than: (value, length) => value.length <= length,
  is_more_or_equal_than: (value, length) => value.length >= length,
  lowercase: str => (str ? str.toLowerCase() : str),
  uppercase: str => (str ? str.toUpperCase() : str),
  capitalize: s => s.toLowerCase().replace(/^\w/, c => c.toUpperCase()),
  pluralize_exceptions_pt: () => {
    return {
      cidadão: "cidadões",
      mão: "mãos",
      qualquer: "quaisquer"
    };
  },
  pluralize_rules_pt: () => {
    return {
      ão: "ões",
      ao: "oes",
      ês: "eses",
      es: "eses",
      m: "ns",
      l: "is",
      r: "res",
      us: "i",
      x: "xes",
      z: "zes"
    };
  },
  pluralize_pt: string => {
    string = string.toLowerCase();

    // dont need to pluralize
    if (/(s|ões|eses|ns|is|res|xes|zes|ãos)$/.test(string)) {
      return string;
    }

    // belong to any exceptions?
    if (Object.keys(Strings.pluralize_exceptions_pt()).indexOf(string) !== -1) {
      return Strings.pluralize_exceptions_pt()[string];
    }

    // does not belong to any exception. But have any rules?
    let ruleCaseResult = "";
    Object.keys(Strings.pluralize_rules_pt()).map(function(rule) {
      const regex = new RegExp(rule + "$");
      if (regex.test(string)) {
        ruleCaseResult = string.replace(
          regex,
          Strings.pluralize_rules_pt()[rule]
        );
      }
    });
    if (ruleCaseResult) return ruleCaseResult;

    // does not belong to any exceptions nor rules
    return string + "s";
  },
  singulate_exceptions_pt: function() {
    return {
      cidadões: "cidadão",
      mãos: "mão",
      quaisquer: "qualquer"
    };
  },
  singulate_rules_pt: function() {
    return {
      ões: "ão",
      oes: "ao",
      eses: "ês",
      ns: "m",
      is: "l",
      res: "r",
      i: "us",
      xes: "x",
      zes: "z"
    };
  },
  singulate_pt: (string = "") => {
    string = string.toLowerCase();

    // belong to any exceptions?
    if (Object.keys(Strings.singulate_exceptions_pt()).indexOf(string) !== -1) {
      // console.log('singulate_pt=> has exception: ', string, Strings.singulate_exceptions_pt()[string]);
      return Strings.singulate_exceptions_pt()[string];
    }

    // does not belong to any exception. But have any rules?
    let ruleCaseResult = "";
    Object.keys(Strings.singulate_rules_pt()).map(function(rule) {
      const regex = new RegExp(rule + "$");
      if (regex.test(string)) {
        ruleCaseResult = string.replace(
          regex,
          Strings.singulate_rules_pt()[rule]
        );
      }
    });
    if (ruleCaseResult) return ruleCaseResult;

    // remove s from end
    if (Strings.ends_with(string, "s"))
      return Strings.remove_char_right(string, 1);

    // does not belong to any exceptions or rules and does not end with s
    return string;
  },
  starts_with: (string, start) => string.substr(0, start.length) === start,
  ends_with: (string, end) => string.substr(-end.length) === end,
  remove_char_left: (string, quant) => string.substring(quant, string.length),
  remove_char_right: (string, quant) =>
    string.substring(0, string.length - quant),
  to_integer: string => string.replace(/[^0-9]+/gi, ""),
  to_alpha_numeric: string => string.replace(/[^a-z0-9]+/gi, ""),
  str_pad_left: (string, padSize, char) => {
    for (let i = 0; i < padSize; i++) {
      string = `${char}${string}`;
    }
    return string;
  },
  str_pad_right: (string, padSize, char) => {
    for (let i = 0; i < padSize; i++) {
      string = `${string}${char}`;
    }
    return string;
  },
  to_url: name => {
    return Strings.to_non_acents(name)
      .trim()
      .split(" ")
      .join("_")
      .replace(new RegExp("\\s", "g"), "") // "branco" - espaço, quebra de linha, tabs etc.; o mesmo que [ \t\n\r\f\v]
      .replace(new RegExp("\\W", "g"), "") // "não-alfanumérico" - o complemento de \w
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase();
  },
  to_non_acents: string => {
    if (!string) return "";

    const accents =
      "ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
    const accentsOut =
      "rRAAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";

    return string
      .split("")
      .map(letter => {
        const accentIndex = accents.indexOf(letter);
        return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
      })
      .join("");
  }
};

module.exports = Strings;
