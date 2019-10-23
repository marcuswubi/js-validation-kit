/* globals describe, it */
const assert = require('assert');
const { PessoaJuridica } = require('../src/index');

describe('PessoaJurídica', () => {
  describe('GERADOR CNPJ', () => {
    const cnpj = PessoaJuridica.genCnpj();
    it(`deve gerar um cnpj: '${cnpj}' válido com 18 caracteres`, () => {
      assert.notEqual(cnpj, undefined);
      assert.equal(cnpj.length, 18);
    });
  });
  describe('DEVE SER UM CNPJ VALIDO', () => {
    const value = '18.808.665/7705-40';
    const expected = true;

    it(`'${value}' validar o 'cnpj' '${value}' must return '${expected}'`, () => {
      assert.equal(PessoaJuridica.isCnpj(value), expected);
    });
  });
  describe('DEVE MASCARAR UM CNPJ', () => {
    const value = '18808665770540';
    const expected = '18.808.665/7705-40';

    it(`'${value}' deve adicionar mascara ao 'cnpj': '${value}' e retornar '${expected}'`, () => {
      assert.equal(PessoaJuridica.maskCnpj(value), expected);
    });
  });
  describe('DEVE REMOVER A MASCARA DE UM CNPJ', () => {
    const value = '18.808.665/7705-40';
    const expected = '18808665770540';

    it(`'${value}' deve remover a mascara do 'cnpj': '${value}' e retornar '${expected}'`, () => {
      assert.equal(PessoaJuridica.unmaskCnpj(value), expected);
    });
  });
});
