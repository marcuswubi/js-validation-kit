## DOCUMENTAÇÃO:

-   [DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md)
-   [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md)
-   [MONGOS](https://github.com/maviniciuus/js-helpers/blob/master/doc/MONGOS.md)
-   [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md)
-   [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md)
-   [REGEXS](https://github.com/maviniciuus/js-helpers/blob/master/doc/REGEXS.md)
-   [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md)
-   [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md)
-   [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md)

### TRIBUTACAO-BR

#### *- GERADOR DE CPF (fins de desenvolvimento e testes)*

`TributacaoBr.gen_cpf()`  
**Resultado**: Ex.: 000.504.631-95  

#### *- ADICIONA MÁSCARA AO CPF*

`TributacaoBr.mask_cpf("00050463195")`  
**Resultado**: Ex.: 000.504.631-95  

#### *- REMOVE MÁSCARA DE CPF*

`TributacaoBr.unmask_cpf("000.504.631-95")`  
**Resultado**: Ex.: 00050463195  

#### *- GERADOR DE CNPJ (fins de desenvolvimento e testes)*

`TributacaoBr.gen_cnpj()`  
**Resultado**: Ex.: 18.808.665/7705-40  

#### *- ADICIONA MÁSCARA AO CNPJ*

`TributacaoBr.mask_cnpj("18808665770540")`  
**Resultado**: Ex.: 18.808.665/7705-40  

#### *- REMOVE MÁSCARA DE CNPJ*

`TributacaoBr.unmask_cnpj("18.808.665/7705-40")`  
**Resultado**: Ex.: 18808665770540  


  describe("GERADOR CNPJ", function() {
    const cnpj = TributacaoBr.();
    it(`deve gerar um cnpj: '${cnpj}' válido com 18 caracteres`, function() {
      assert.notEqual(cnpj, undefined);
      assert.equal(cnpj.length, 18);
    });
  });
  describe("DEVE SER UM CNPJ VALIDO", function() {
    const value = "",
      expected = true;

    it(`'${value}' validar o 'cnpj' '${value}' deve retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.is_cnpj(value), expected);
    });
  });
  describe("DEVE MASCARAR UM CNPJ", function() {
    const value = "18808665770540",
      expected = "18.808.665/7705-40";

    it(`'${value}' deve adicionar mascara ao 'cnpj': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.(value), expected);
    });
  });
  describe("DEVE REMOVER A MASCARA DE UM CNPJ", function() {
    const value = "18.808.665/7705-40",
      expected = "18808665770540";

    it(`'${value}' deve remover a mascara do 'cnpj': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.unmask_cnpj(value), expected);
    });
  });

  describe("DEVE SER UMA INSCRIÇÃO FEDERAL VALIDA - CPF", function() {
    const value = "000.504.631-95",
      expected = true;

    it(`'${value}' validar a 'inscrição federal:' '${value}' deve retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.is_federal_number(value), expected);
    });
  });
  describe("DEVE SER UMA INSCRIÇÃO FEDERAL VALIDA - CNPJ", function() {
    const value = "18.808.665/7705-40",
      expected = true;

    it(`'${value}' validar a 'inscrição federal:' '${value}' deve retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.is_federal_number(value), expected);
    });
  });
  describe("DEVE MASCARAR A INSCRIÇÃO FEDERAL - CPF", function() {
    const value = "00050463195",
      expected = "000.504.631-95";

    it(`'${value}' deve adicionar mascara a 'inscrição federal': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.mask_federal_number(value), expected);
    });
  });
  describe("DEVE MASCARAR A INSCRIÇÃO FEDERAL - CNPJ", function() {
    const value = "18808665770540",
      expected = "18.808.665/7705-40";

    it(`'${value}' deve adicionar mascara ao 'inscrição federal': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.mask_federal_number(value), expected);
    });
  });
  describe("DEVE REMOVER A MASCARA DA INSCRIÇÃO FEDERAL - CPF", function() {
    const value = "000.504.631-95",
      expected = "00050463195";

    it(`'${value}' deve remover a mascara da 'inscrição federal': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.unmask_federal_number(value), expected);
    });
  });
  describe("DEVE REMOVER A MASCARA DA INSCRIÇÃO FEDERAL - CNPJ", function() {
    const value = "18.808.665/7705-40",
      expected = "18808665770540";

    it(`'${value}' deve remover a mascara da 'inscrição federal': '${value}' e retornar '${expected}'`, function() {
      assert.equal(TributacaoBr.unmask_federal_number(value), expected);
    });
  });
