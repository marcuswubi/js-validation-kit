/* globals describe, it */
const assert = require('assert');
const { PessoaFisica } = require('../src/index');

describe('PessoaFisica', () => {
  describe('GERADOR CPF', () => {
    const cpf = PessoaFisica.genCpf();
    it(`deve gerar um cpf: '${cpf}' `, () => {
      assert.notEqual(cpf, undefined);
    });
  });
  describe('GERADOR CPF', () => {
    const cpf = PessoaFisica.genCpf();
    it(`deve gerar um cpf: '${cpf} com 14 caracteres' `, () => {
      assert.equal(cpf.length, 14);
    });
  });
  describe('DEVE SER UM CPF VALIDO', () => {
    const value = PessoaFisica.genCpf();
    const expected = true;

    it(`'${value}' validar o 'cpf' '${value}' must return '${expected}'`, () => {
      assert.equal(PessoaFisica.isCpf(value), expected);
    });
  });
  describe('DEVE MASCARAR UM CPF', () => {
    const value = '00050463195';
    const expected = '000.504.631-95';

    it(`'${value}' deve adicionar mascara ao 'cpf': '${value}' e retornar '${expected}'`, () => {
      assert.equal(PessoaFisica.maskCpf(value), expected);
    });
  });
  describe('DEVE REMOVER A MASCARA DE UM CPF', () => {
    const value = '000.504.631-95';
    const expected = '00050463195';

    it(`'${value}' deve remover a mascara do 'cpf': '${value}' e retornar '${expected}'`, () => {
      assert.equal(PessoaFisica.unmaskCpf(value), expected);
    });
  });
});
