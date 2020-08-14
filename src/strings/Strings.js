const snake = require('to-snake-case');

const Strings = {
  stringSize: (str) => str.length,
  isString: (value) => typeof value === 'string' || value instanceof String,
  isLessThan: (value, length) => value.length < length,
  isMoreThan: (value, length) => value.length > length,
  isLessOrEqualThan: (value, length) => value.length <= length,
  isMoreOrEqualThan: (value, length) => value.length >= length,
  lowercase: (str) => (str ? str.toLowerCase() : str),
  uppercase: (str) => (str ? str.toUpperCase() : str),
  capitalize: (s) => s.toLowerCase().replace(/^\w/, c => c.toUpperCase()),
  snakeize: (s) => snake(s),
  pluralizeExceptionsPt: () => ({
    cidadão: 'cidadões',
    mão: 'mãos',
    qualquer: 'quaisquer',
    Cidadão: 'Cidadões',
    Mão: 'Mãos',
    Qualquer: 'Quaisquer',
    CIDADÃO: 'CIDADÕES',
    MÃO: 'MÃOS',
    QUALQUER: 'QUAISQUER',
  }),
  pluralizeRulesPt: () => ({
    ão: 'ões',
    ao: 'oes',
    ês: 'eses',
    es: 'eses',
    m: 'ns',
    l: 'is',
    r: 'res',
    us: 'i',
    x: 'xes',
    z: 'zes',
    ÃO: 'ÕES',
    AO: 'OES',
    ÊS: 'ESES',
    ES: 'ESES',
    M: 'NS',
    L: 'IS',
    R: 'RES',
    US: 'I',
    X: 'XES',
    Z: 'ZES',
  }),
  pluralizePt: (string) => {
    // dont need to pluralize
    if (/(s|ões|eses|ns|is|res|xes|zes|ãos|S|ÕES|ESES|NS|IS|RES|XES|ZES|ÃOS)$/.test(string)) {
      return string;
    }

    // belong to any exceptions?
    if (Object.keys(Strings.pluralizeExceptionsPt()).indexOf(string) !== -1) {
      return Strings.pluralizeExceptionsPt()[string];
    }

    // does not belong to any exception. But have any rules?
    let ruleCaseResult = '';
    Object.keys(Strings.pluralizeRulesPt()).map((rule) => {
      const regex = new RegExp(`${rule}$`);
      if (regex.test(string)) {
        ruleCaseResult = string.replace(
          regex,
          Strings.pluralizeRulesPt()[rule],
        );
      }

      return undefined;
    });
    if (ruleCaseResult) return ruleCaseResult;

    // does not belong to any exceptions nor rules
    return `${string}s`;
  },
  singulateExceptionsPt: () => ({
    cidadões: 'cidadão',
    mãos: 'mão',
    quaisquer: 'qualquer',
    Cidadões: 'Cidadão',
    Mãos: 'Mão',
    Quaisquer: 'Qualquer',
    CIDADÕES: 'CIDADÃO',
    MÃOS: 'MÃO',
    QUAISQUER: 'QUALQUER',
  }),
  singulateRulesPt: () => ({
    ões: 'ão',
    oes: 'ao',
    eses: 'ês',
    ns: 'm',
    is: 'l',
    res: 'r',
    i: 'us',
    xes: 'x',
    zes: 'z',
    ÕES: 'ÃO',
    OES: 'AO',
    ESES: 'ÊS',
    NS: 'M',
    IS: 'L',
    RES: 'R',
    I: 'US',
    XES: 'X',
    ZES: 'Z',
  }),
  singulatePt: (string = '') => {
    // belong to any exceptions?
    if (Object.keys(Strings.singulateExceptionsPt()).indexOf(string) !== -1) {
      // eslint-disable-next-line max-len
      // console.log('singulatePt=> has exception: ', string, Strings.singulateExceptionsPt()[string]);
      return Strings.singulateExceptionsPt()[string];
    }

    // does not belong to any exception. But have any rules?
    let ruleCaseResult = '';
    Object.keys(Strings.singulateRulesPt()).map((rule) => {
      const regex = new RegExp(`${rule}$`);
      if (regex.test(string)) {
        ruleCaseResult = string.replace(
          regex,
          Strings.singulateRulesPt()[rule],
        );
      }
    });
    if (ruleCaseResult) return ruleCaseResult;

    // remove s from end
    if (Strings.endsWith(string, 's')) return Strings.removeCharRight(string, 1);

    // does not belong to any exceptions or rules and does not end with s
    return string;
  },
  startsWith: (string, start) => string.substr(0, start.length) === start,
  endsWith: (string, end) => string.substr(-end.length) === end,
  removeCharLeft: (string, quant) => string.substring(quant, string.length),
  removeCharRight: (string, quant) => string.substring(0, string.length - quant),
  toInteger: (string) => string.replace(/[^0-9]+/gi, ''),
  toAlphaNumeric: (string) => string.replace(/[^a-z0-9]+/gi, ''),
  strPadLeft: (string, padSize, char) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < padSize; i++) {
      // eslint-disable-next-line no-param-reassign
      string = `${char}${string}`;
    }
    return string;
  },
  strPadRight: (string, padSize, char) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < padSize; i++) {
      // eslint-disable-next-line no-param-reassign
      string = `${string}${char}`;
    }
    return string;
  },
  strPadBoth: (string, padSize, firstChar, secondChar) => Strings.strPadRight(
    Strings.strPadLeft(string, padSize, firstChar),
    padSize,
    secondChar,
  ),
  toUrl: (name) => Strings.toNonAcents(name)
    .trim()
    .split(' ')
    .join('_')
    .replace(new RegExp('\\s', 'g'), '') // "branco" - espaço, quebra de linha, tabs etc.; o mesmo que [ \t\n\r\f\v]
    .replace(new RegExp('\\W', 'g'), '') // "não-alfanumérico" - o complemento de \w
    .replace(/[^a-z0-9]/gi, '_')
    .toLowerCase(),
  toNonAcents: (string) => {
    if (!string) return '';

    const accents = 'ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽžªº';
    const accentsOut = 'rRAAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZzao';

    return string
      .split('')
      .map((letter) => {
        const accentIndex = accents.indexOf(letter);
        return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
      })
      .join('');
  },
};

module.exports = Strings;
