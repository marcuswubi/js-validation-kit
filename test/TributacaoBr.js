const assert = require("assert");
const { TributacaoBr } = require("../src/index");

describe("TributacaoBr", function() {
  describe("GERADOR CPF", function() {
    const cpf = TributacaoBr.gen_cpf();
    it(`deve gerar um cpf: '${cpf}' `, function() {
      assert.notEqual(cpf, undefined);
    });
  });
  describe("DEVE SER UM CPF VALIDO", function() {
    const value = "000.504.631-95",
      expected = true;

    it(`'${value}' validar o 'cpf' '${value}' deve retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.is_cpf(value), expected);
    });
  });
  describe("DEVE MASCARAR UM CPF", function() {
    const value = "00050463195",
      expected = "000.504.631-95";

    it(`'${value}' deve adicionar mascara ao 'cpf': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.mask_cpf(value), expected);
    });
  });
  describe("DEVE REMOVER A MASCARA DE UM CPF", function() {
    const value = "000.504.631-95",
      expected = "00050463195";

    it(`'${value}' deve remover a mascara do 'cpf': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.unmask_cpf(value), expected);
    });
  });

  describe("GERADOR CNPJ", function() {
    const cnpj = TributacaoBr.gen_cpf();
    it(`deve gerar um cnpj: '${cnpj}' `, function() {
      assert.notEqual(cnpj, undefined);
    });
  });
  describe("DEVE SER UM CNPJ VALIDO", function() {
    const value = "18.808.665/7705-40",
      expected = true;

    it(`'${value}' validar o 'cnpj' '${value}' deve retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.is_cnpj(value), expected);
    });
  });
  describe("DEVE MASCARAR UM CNPJ", function() {
    const value = "18808665770540",
      expected = "18.808.665/7705-40";

    it(`'${value}' deve adicionar mascara ao 'cnpj': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.mask_cnpj(value), expected);
    });
  });
  describe("DEVE REMOVER A MASCARA DE UM CNPJ", function() {
    const value = "18.808.665/7705-40",
      expected = "18808665770540";

    it(`'${value}' deve remover a mascara do 'cnpj': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.unmask_cnpj(value), expected);
    });
  });

  describe("DEVE SER UMA INSCRIÇÃO FEDERAL VALIDA", function() {
    const value = "000.504.631-95",
      expected = true;

    it(`'${value}' validar a 'inscrição federal:' '${value}' deve retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.is_federal_number(value), expected);
    });
  });
  describe("DEVE SER UMA INSCRIÇÃO FEDERAL VALIDA", function() {
    const value = "18.808.665/7705-40",
      expected = true;

    it(`'${value}' validar a 'inscrição federal:' '${value}' deve retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.is_federal_number(value), expected);
    });
  });
  describe("DEVE MASCARAR A INSCRIÇÃO FEDERAL", function() {
    const value = "00050463195",
      expected = "000.504.631-95";

    it(`'${value}' deve adicionar mascara a 'inscrição federal': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.mask_federal_number(value), expected);
    });
  });
  describe("DEVE MASCARAR A INSCRIÇÃO FEDERAL", function() {
    const value = "18808665770540",
      expected = "18.808.665/7705-40";

    it(`'${value}' deve adicionar mascara ao 'inscrição federal': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.mask_federal_number(value), expected);
    });
  });
  describe("DEVE REMOVER A MASCARA DA INSCRIÇÃO FEDERAL", function() {
    const value = "000.504.631-95",
      expected = "00050463195";

    it(`'${value}' deve remover a mascara da 'inscrição federal': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.unmask_federal_number(value), expected);
    });
  });
  describe("DEVE REMOVER A MASCARA DA INSCRIÇÃO FEDERAL", function() {
    const value = "18.808.665/7705-40",
      expected = "18808665770540";

    it(`'${value}' deve remover a mascara da 'inscrição federal': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.unmask_federal_number(value), expected);
    });
  });
});
