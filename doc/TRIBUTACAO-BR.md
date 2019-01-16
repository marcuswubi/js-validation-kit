### MENU:
[DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md) *-* [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md) *-* [FUNCTIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/FUNCTIONS.md) *-* [IDS](https://github.com/maviniciuus/js-helpers/blob/master/doc/IDS.md) *-* [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md) *-* [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md) / [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md) *-* [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md) *-* [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md)

### TRIBUTACAO-BR
ATENÇÃO! Por razões de segurança, o valor real do cpf/cnpj foi trocado por XXX. É uma biblioteca para fins de desenvolvimento e testes apenas.

#### CPF

##### *- GERADOR DE CPF (fins de desenvolvimento e testes)*

`TributacaoBr.gen_cpf()`  
**Resultado**: Ex.: 000.504.XXX-95  

##### *- DEVE SER UM CPF VÁLIDO*

`TributacaoBr.is_cpf("000.504.XXX-95")`  
**Resultado**: true  
  
##### *- ADICIONA MÁSCARA AO CPF*

`TributacaoBr.mask_cpf("000504XXX95")`  
**Resultado**: Ex.: 000.504.XXX-95  

##### *- REMOVE MÁSCARA DE CPF*

`TributacaoBr.unmask_cpf("000.504.XXX-95")`  
**Resultado**: Ex.: 000504XXX95  

#### CNPJ

##### *- GERADOR DE CNPJ (fins de desenvolvimento e testes)*

`TributacaoBr.gen_cnpj()`  
**Resultado**: Ex.: 18.XXX.665/7705-40  

##### *- DEVE SER UM CNPJ VÁLIDO*

`TributacaoBr.is_cnpj("18.XXX.665/7705-40")`  
**Resultado**: true  

##### *- ADICIONA MÁSCARA AO CNPJ*

`TributacaoBr.mask_cnpj("18XXX665770540")`  
**Resultado**: Ex.: 18.XXX.665/7705-40  

##### *- REMOVE MÁSCARA DE CNPJ*

`TributacaoBr.unmask_cnpj("18.XXX.665/7705-40")`  
**Resultado**: Ex.: 18XXX665770540  

#### INSCRIÇÃO FEDERAL

##### *- DEVE SER UMA INSCRIÇÃO FEDERAL VÁLIDA*

`TributacaoBr.is_federal_number("000.504.XXX-95")`  
**Resultado**: true

`TributacaoBr.is_federal_number("18.XXX.665/7705-40")`  
**Resultado**: true  

##### *- ADICIONA MÁSCARA A INSCRIÇÃO FEDERAL *

`TributacaoBr.mask_federal_number("000504XXX95")`  
**Resultado**: Ex.: 000.504.XXX-95 

`TributacaoBr.mask_federal_number("18XXX665770540")`  
**Resultado**: Ex.: 18.XXX.665/7705-40  

##### *- REMOVE MÁSCARA DE UMA INSCRIÇÃO FEDERAL *

`TributacaoBr.unmask_federal_number("000.504.XXX-95")`  
**Resultado**: Ex.: 000504XXX95  

`TributacaoBr.unmask_federal_number("18.XXX.665/7705-40")`  
**Resultado**: Ex.: 18XXX665770540  

