/* globals describe, it */
const assert = require('assert');
const { Strings } = require('../src/index');

describe('Strings', () => {
  describe('É STRING', () => {
    it('\'STRING DEMO\' must be a \'string\'', () => {
      assert.equal(Strings.isString('STRING DEMO'), true);
    });
  });
  describe('STRING TAMANHO', () => {
    it('\'STRING DEMO\' must has size \'11\' characters', () => {
      assert.equal(Strings.stringSize('STRING DEMO'), 11);
    });
  });
  describe('STRING MAIOR QUE', () => {
    it('\'STRING DEMO\' should bigger than \'8\' characters', () => {
      assert.equal(Strings.isMoreThan('STRING DEMO', 8), true);
    });
  });
  describe('STRING MAIOR OU IGUAL A', () => {
    it('\'STRING DEMO\' should not bigger than \'11\' characters', () => {
      assert.equal(Strings.isMoreOrEqualThan('STRING DEMO', 11), true);
    });
  });
  describe('STRING MENOR QUE', () => {
    it('\'STRING DEMO\' should not less than \'8\' characters', () => {
      assert.equal(Strings.isLessThan('STRING DEMO', 8), false);
    });
  });
  describe('STRING MENOR OU IGUAL A', () => {
    it('\'STRING DEMO\' shoud less than \'11\' characters', () => {
      assert.equal(Strings.isLessOrEqualThan('STRING DEMO', 11), true);
    });
  });
  describe('STRING CAPITALIZE', () => {
    it('\'STRING DEMO\' when use \'capitalize\' must return \'String demo\'', () => {
      assert.equal(Strings.capitalize('STRING DEMO'), 'String demo');
    });
  });
  describe('STRING UPPERCASE', () => {
    it('\'string demo\' when use \'uppercase\' must return \'STRING DEMO\'', () => {
      assert.equal(Strings.uppercase('string demo'), 'STRING DEMO');
    });
  });
  describe('STRING LOWERCASE', () => {
    it('\'STRING DEMO\' when use \'lowercase\' must return \'string demo\'', () => {
      assert.equal(Strings.lowercase('STRING DEMO'), 'string demo');
    });
  });
  describe('STRING SNAKE CASE', () => {
    it('\'STRING DEMO\' when use \'snakeize\' must return \'string_demo\'', () => {
      assert.equal(Strings.snakeize('STRING DEMO'), 'string_demo');
    });
  });
  describe('STRING SNAKE CASE', () => {
    it('\'stringDemo\' when use \'snakeize\' must return \'string_demo\'', () => {
      assert.equal(Strings.snakeize('stringDemo'), 'string_demo');
    });
  });
  describe('STRING SNAKE CASE', () => {
    it('\'StringDemo\' when use \'snakeize\' must return \'string_demo\'', () => {
      assert.equal(Strings.snakeize('StringDemo'), 'string_demo');
    });
  });
  describe('STARTS WITH', () => {
    it('\'banana\' must starts with \'bana\'', () => {
      assert.equal(Strings.startsWith('banana', 'bana'), true);
    });
  });
  describe('ENDS WITH', () => {
    it('\'banana\' must ends with \'anana\'', () => {
      assert.equal(Strings.endsWith('banana', 'anana'), true);
    });
  });
  describe('REMOVE CHARACTERS FROM BEGIN', () => {
    it('\'# BANANA\' ao remover 2 characters from begin must return \'BANANA\'', () => {
      assert.equal(Strings.removeCharLeft('* BANANA', 2), 'BANANA');
    });
  });
  describe('REMOVE CHARACTERS FROM END', () => {
    it('\'BANANA;\' whem remove 1 characters from end, must return \'BANANA\'', () => {
      assert.equal(Strings.removeCharRight('BANANA;', 1), 'BANANA');
    });
  });
  describe('ADD CHARACTERS TO BEGIN', () => {
    const value = '.234890';
    const expected = '00000.234890';
    const firstModifier = 5;
    const secondModifier = '0';

    it(`'${value}' when add '${firstModifier}' '${secondModifier}' at starts must return '${expected}'`, () => {
      assert.equal(Strings.strPadLeft(value, firstModifier, secondModifier), expected);
    });
  });
  describe('ADD CHARACTERS TO END', () => {
    const value = '20';
    const expected = '20% about';
    const firstModifier = 1;
    const secondModifier = '% about';

    it(`'${value}' when add '${firstModifier}' '${secondModifier}' at ends must return '${expected}'`, () => {
      assert.equal(Strings.strPadRight(value, firstModifier, secondModifier), expected);
    });
  });
  describe('ADD CHARACTERS TO BOTH, START and END', () => {
    const value = 'Nome do Autor';
    const expected = '(Nome do Autor)';
    const firstModifier = 1;
    const secondModifier = '(';
    const thirdModifier = ')';

    it(`'${value}' when add '${firstModifier}' '${secondModifier}' at ends must return '${expected}'`, () => {
      // eslint-disable-next-line max-len
      assert.equal(Strings.strPadBoth(value, firstModifier, secondModifier, thirdModifier), expected);
    });
  });
  describe('PLURALIZE', () => {
    const value = 'qualquer';
    const expected = 'quaisquer';

    it(`'${value}' when pluralize '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.pluralizePt(value), expected);
    });
  });
  describe('PLURALIZE', () => {
    const value = 'cidadão';
    const expected = 'cidadões';

    it(`'${value}' when pluralize '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.pluralizePt(value), expected);
    });
  });
  describe('PLURALIZE', () => {
    const value = 'qualquer';
    const expected = 'quaisquer';

    it(`'${value}' when pluralize '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.pluralizePt(value), expected);
    });
  });
  describe('SINGULATE', () => {
    const value = 'canetas';
    const expected = 'caneta';

    it(`'${value}' when singulate '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.singulatePt(value), expected);
    });
  });
  describe('SINGULATE', () => {
    const value = 'pessoas';
    const expected = 'pessoa';

    it(`'${value}' when singulate '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.singulatePt(value), expected);
    });
  });
  describe('SINGULATE', () => {
    const value = 'cidadões';
    const expected = 'cidadão';

    it(`'${value}' when singulate '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.singulatePt(value), expected);
    });
  });
  describe('SINGULATE', () => {
    const value = 'quaisquer';
    const expected = 'qualquer';

    it(`'${value}' when singulate '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.singulatePt(value), expected);
    });
  });
  describe('REMOVE ACCENTS', () => {
    const value = 'ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    const expected = 'rRAAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';

    it(`'${value}' when remove accents '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.toNonAcents(value), expected);
    });
  });
  describe('REMOVE ACCENTS', () => {
    const value = 'O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.';
    const expected = 'O CORACAO E DOCE COMO BANANA CARAMELIZADA COM ACUCAR.';

    it(`'${value}' when remove accents '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.toNonAcents(value), expected);
    });
  });
  describe('REMOVE ACCENTS', () => {
    const value = 'O coração é doce como banana caramelizada com açucar.';
    const expected = 'O coracao e doce como banana caramelizada com acucar.';

    it(`'${value}' when remove accents '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.toNonAcents(value), expected);
    });
  });
  describe('CONVERT IN URL VALUE', () => {
    const value = 'Marcus Vinícius Mendes Gonçalves';
    const expected = 'marcus_vinicius_mendes_goncalves';

    it(`'${value}' when convert to 'url' '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.toUrl(value), expected);
    });
  });
  describe('CONVERT IN URL VALUE', () => {
    const value = 'O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.';
    const expected = 'o_coracao_e_doce_como_banana_caramelizada_com_acucar';

    it(`'${value}' when convert to 'url' '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.toUrl(value), expected);
    });
  });
  describe('STRING TO INTEGER', () => {
    const value = '47-segundos';
    const expected = 47;

    it(`'${value}' when convert to 'inteiro' '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.toInteger(value), expected);
    });
  });
  describe('STRING TO INTEGER', () => {
    const value = '2cachorros5patos';
    const expected = 25;

    it(`'${value}' when convert to 'inteiro' '${value}' must return '${expected}'`, () => {
      assert.equal(Strings.toInteger(value), expected);
    });
  });
});
