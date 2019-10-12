/* globals describe, it */
const assert = require('assert');
const { TributacaoBr } = require('../src/index');

describe('TributacaoBr', () => {
  describe('GERADOR CPF', () => {
    const cpf = TributacaoBr.genCpf();
    it(`deve gerar um cpf: '${cpf}' `, () => {
      assert.notEqual(cpf, undefined);
    });
  });
  describe('GERADOR CPF', () => {
    const cpf = TributacaoBr.genCpf();
    it(`deve gerar um cpf: '${cpf} com 14 caracteres' `, () => {
      assert.equal(cpf.length, 14);
    });
  });
  describe('DEVE SER UM CPF VALIDO', () => {
    const value = TributacaoBr.genCpf();
    const expected = true;

    it(`'${value}' validar o 'cpf' '${value}' must return '${expected}'`, () => {
      assert.equal(TributacaoBr.isCpf(value), expected);
    });
  });
  describe('DEVE MASCARAR UM CPF', () => {
    const value = '00050463195';
    const expected = '000.504.631-95';

    it(`'${value}' deve adicionar mascara ao 'cpf': '${value}' e retornar '${expected}'`, () => {
      assert.equal(TributacaoBr.maskCpj(value), expected);
    });
  });
  describe('DEVE REMOVER A MASCARA DE UM CPF', () => {
    const value = '000.504.631-95';
    const expected = '00050463195';

    it(`'${value}' deve remover a mascara do 'cpf': '${value}' e retornar '${expected}'`, () => {
      assert.equal(TributacaoBr.unmaskCpj(value), expected);
    });
  });

  describe('GERADOR CNPJ', () => {
    const cnpj = TributacaoBr.genCnpj();
    it(`deve gerar um cnpj: '${cnpj}' válido com 18 caracteres`, () => {
      assert.notEqual(cnpj, undefined);
      assert.equal(cnpj.length, 18);
    });
  });
  describe('DEVE SER UM CNPJ VALIDO', () => {
    const value = '18.808.665/7705-40';
    const expected = true;

    it(`'${value}' validar o 'cnpj' '${value}' must return '${expected}'`, () => {
      assert.equal(TributacaoBr.isCnpj(value), expected);
    });
  });
  describe('DEVE MASCARAR UM CNPJ', () => {
    const value = '18808665770540';
    const expected = '18.808.665/7705-40';

    it(`'${value}' deve adicionar mascara ao 'cnpj': '${value}' e retornar '${expected}'`, () => {
      assert.equal(TributacaoBr.maskCnpj(value), expected);
    });
  });
  describe('DEVE REMOVER A MASCARA DE UM CNPJ', () => {
    const value = '18.808.665/7705-40';
    const expected = '18808665770540';

    it(`'${value}' deve remover a mascara do 'cnpj': '${value}' e retornar '${expected}'`, () => {
      assert.equal(TributacaoBr.unmaskCnpj(value), expected);
    });
  });

  describe('DEVE SER UMA INSCRIÇÃO FEDERAL VALIDA - CPF', () => {
    const value = '000.504.631-95';
    const expected = true;

    it(`'${value}' validar a 'inscrição federal:' '${value}' must return '${expected}'`, () => {
      assert.equal(TributacaoBr.isFederalNumber(value), expected);
    });
  });
  describe('DEVE SER UMA INSCRIÇÃO FEDERAL VALIDA - CNPJ', () => {
    const value = '18.808.665/7705-40';
    const expected = true;

    it(`'${value}' validar a 'inscrição federal:' '${value}' must return '${expected}'`, () => {
      assert.equal(TributacaoBr.isFederalNumber(value), expected);
    });
  });
  describe('DEVE MASCARAR A INSCRIÇÃO FEDERAL - CPF', () => {
    const value = '00050463195';
    const expected = '000.504.631-95';

    it(`'${value}' deve adicionar mascara a 'inscrição federal': '${value}' e retornar '${expected}'`, () => {
      assert.equal(TributacaoBr.maskFederalNumber(value), expected);
    });
  });
  describe('DEVE MASCARAR A INSCRIÇÃO FEDERAL - CNPJ', () => {
    const value = '18808665770540';
    const expected = '18.808.665/7705-40';

    it(`'${value}' deve adicionar mascara ao 'inscrição federal': '${value}' e retornar '${expected}'`, () => {
      assert.equal(TributacaoBr.maskFederalNumber(value), expected);
    });
  });
  describe('DEVE REMOVER A MASCARA DA INSCRIÇÃO FEDERAL - CPF', () => {
    const value = '000.504.631-95';
    const expected = '00050463195';

    it(`'${value}' deve remover a mascara da 'inscrição federal': '${value}' e retornar '${expected}'`, () => {
      assert.equal(TributacaoBr.unmaskFederalNumber(value), expected);
    });
  });
  describe('DEVE REMOVER A MASCARA DA INSCRIÇÃO FEDERAL - CNPJ', () => {
    const value = '18.808.665/7705-40';
    const expected = '18808665770540';

    it(`'${value}' deve remover a mascara da 'inscrição federal': '${value}' e retornar '${expected}'`, () => {
      assert.equal(TributacaoBr.unmaskFederalNumber(value), expected);
    });
  });
});
