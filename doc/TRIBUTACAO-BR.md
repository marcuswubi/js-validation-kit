### NAVIGATION:
The documentation is separated by Helper.  

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [TRIBUTACAO-BR](TRIBUTACAO-BR.md)  / [VALIDATIONS](VALIDATIONS.md)  

### TRIBUTACAO-BR
ATTENTION! For security reasons, the actual value of cpf / cnpj has been changed to XXX. It is a library for development and testing purposes only.

#### CPF

##### *GERADOR DE CPF (fins de desenvolvimento e testes)*

`TributacaoBr.gen_cpf()`  
**Result:** Ex.: 000.504.XXX-95  

##### *DEVE SER UM CPF VÁLIDO*

`TributacaoBr.is_cpf("000.504.XXX-95")`  
**Result:** true  
  
##### *ADICIONA MÁSCARA AO CPF*

`TributacaoBr.mask_cpf("000504XXX95")`  
**Result:** Ex.: 000.504.XXX-95  

##### *REMOVE MÁSCARA DE CPF*

`TributacaoBr.unmask_cpf("000.504.XXX-95")`  
**Result:** Ex.: 000504XXX95  

#### CNPJ

##### *GERADOR DE CNPJ (fins de desenvolvimento e testes)*

`TributacaoBr.gen_cnpj()`  
**Result:** Ex.: 18.XXX.665/7705-40  

##### *DEVE SER UM CNPJ VÁLIDO*

`TributacaoBr.is_cnpj("18.XXX.665/7705-40")`  
**Result:** true  

##### *ADICIONA MÁSCARA AO CNPJ*

`TributacaoBr.mask_cnpj("18XXX665770540")`  
**Result:** Ex.: 18.XXX.665/7705-40  

##### *REMOVE MÁSCARA DE CNPJ*

`TributacaoBr.unmask_cnpj("18.XXX.665/7705-40")`  
**Result:** Ex.: 18XXX665770540  

#### INSCRIÇÃO FEDERAL

##### *DEVE SER UMA INSCRIÇÃO FEDERAL VÁLIDA*

`TributacaoBr.is_federal_number("000.504.XXX-95")`  
**Result:** true

`TributacaoBr.is_federal_number("18.XXX.665/7705-40")`  
**Result:** true  

##### *ADICIONA MÁSCARA A INSCRIÇÃO FEDERAL *

`TributacaoBr.mask_federal_number("000504XXX95")`  
**Result:** Ex.: 000.504.XXX-95 

`TributacaoBr.mask_federal_number("18XXX665770540")`  
**Result:** Ex.: 18.XXX.665/7705-40  

##### *REMOVE MÁSCARA DE UMA INSCRIÇÃO FEDERAL *

`TributacaoBr.unmask_federal_number("000.504.XXX-95")`  
**Result:** Ex.: 000504XXX95  

`TributacaoBr.unmask_federal_number("18.XXX.665/7705-40")`  
**Result:** Ex.: 18XXX665770540  

