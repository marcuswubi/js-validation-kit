/* globals describe, it */
const assert = require('assert');
const { Numbers } = require('../src/index');

describe('Numbers', () => {
  describe('TO STRING', () => {
    const value = 2;
    const expected = '2';
    it(`'${value}' must return um dado do tipo string: '${expected}' `, () => {
      assert.equal(Numbers.toString(value), expected);
      assert.equal(typeof Numbers.toString(value), 'string');
    });
  });
  describe('IS INT', () => {
    const value = 42;
    const expected = true;
    it(`'${value}' must return '${expected}' para o teste de inteiro`, () => {
      assert.equal(Numbers.isInt(value), expected);
    });
  });
  describe('IS INT', () => {
    const value = -42;
    const expected = true;
    it(`'${value}' must return '${expected}' para o teste de inteiro`, () => {
      assert.equal(Numbers.isInt(value), expected);
    });
  });
  describe('IS INT', () => {
    const value = 42.5;
    const expected = false;
    it(`'${value}' must return '${expected}' para o teste de inteiro`, () => {
      assert.equal(Numbers.isInt(value), expected);
    });
  });
  describe('IS FLOAT', () => {
    const value = 42.5;
    const expected = true;
    it(`'${value}' must return '${expected}' para o teste de float`, () => {
      assert.equal(Numbers.isFloat(value), expected);
    });
  });
  describe('IS FLOAT', () => {
    const value = 42;
    const expected = false;
    it(`'${value}' must return '${expected}' para o teste de float`, () => {
      assert.equal(Numbers.isFloat(value), expected);
    });
  });
  describe('IS FLOAT', () => {
    const value = -42;
    const expected = false;
    it(`'${value}' must return '${expected}' para o teste de float`, () => {
      assert.equal(Numbers.isFloat(value), expected);
    });
  });
  describe('IS POSITIVE', () => {
    const value = 42;
    const expected = true;
    it(`'${value}' must return '${expected}' para o teste de número positivo`, () => {
      assert.equal(Numbers.isPositive(value), expected);
    });
  });
  describe('IS POSITIVE', () => {
    const value = -42;
    const expected = false;
    it(`'${value}' must return '${expected}' para o teste de número positivo`, () => {
      assert.equal(Numbers.isPositive(value), expected);
    });
  });
  describe('IS NEGATIVE', () => {
    const value = -42;
    const expected = true;
    it(`'${value}' must return '${expected}' para o teste de número negativo`, () => {
      assert.equal(Numbers.isNegative(value), expected);
    });
  });
  describe('IS NEGATIVE', () => {
    const value = 42;
    const expected = false;
    it(`'${value}' must return '${expected}' para o teste de número negativo`, () => {
      assert.equal(Numbers.isNegative(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 1;
    const expected = 'um';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 223;
    const expected = 'duzentos e vinte e três';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 61;
    const expected = 'sessenta e um';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 6546785;
    const expected = 'seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 687;
    const expected = 'seiscentos e oitenta e sete';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 1785.5;
    const expected = 'um mil setecentos e oitenta e cinco vírgula cinco';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 0;
    const expected = 'zero';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 0.345;
    const expected = 'zero vírgula trezentos e quarenta e cinco';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 14;
    const expected = 'quatorze';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 4536;
    const expected = 'quatro mil quinhentos e trinta e seis';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT', () => {
    const value = 425642368575263200000;
    const expected = 'quatrocentos e vinte e cinco quintilhões seiscentos e quarenta e dois quatrilhões trezentos e sessenta e oito trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos mil';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 1;
    const expected = 'um porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 223;
    const expected = 'duzentos e vinte e três porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 61;
    const expected = 'sessenta e um porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 6546785;
    const expected = 'seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 687;
    const expected = 'seiscentos e oitenta e sete porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 1785.5;
    const expected = 'um mil setecentos e oitenta e cinco vírgula cinco porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 0;
    const expected = 'zero porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 0.345;
    const expected = 'zero vírgula trezentos e quarenta e cinco porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 14;
    const expected = 'quatorze porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 4536;
    const expected = 'quatro mil quinhentos e trinta e seis porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });
  describe('NUMBER TO WORD PT - % PORCENTAGEM', () => {
    const value = 425642368575263200000;
    const expected = 'quatrocentos e vinte e cinco quintilhões seiscentos e quarenta e dois quatrilhões trezentos e sessenta e oito trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos mil porcento';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'porcentagem'), expected);
    });
  });

  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 1;
    const expected = 'um real';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 223;
    const expected = 'duzentos e vinte e três reais';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 61;
    const expected = 'sessenta e um reais';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 6546785;
    const expected = 'seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco reais';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 687;
    const expected = 'seiscentos e oitenta e sete reais';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 1785.5;
    const expected = 'um mil setecentos e oitenta e cinco reais e cinquenta centavos';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 0;
    const expected = '';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 0.345;
    const expected = 'trinta e quatro centavos';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 14;
    const expected = 'quatorze reais';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 4536;
    const expected = 'quatro mil quinhentos e trinta e seis reais';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
  describe('NUMBER TO WORD PT - MONETARIO', () => {
    const value = 425642368575263200000;
    const expected = 'quatrocentos e vinte e cinco quintilhões seiscentos e quarenta e dois quatrilhões trezentos e sessenta e oito trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos mil reais';
    it(`'${value}' must return '${expected}'`, () => {
      assert.equal(Numbers.to_word_pt(value, 'monetario'), expected);
    });
  });
});
