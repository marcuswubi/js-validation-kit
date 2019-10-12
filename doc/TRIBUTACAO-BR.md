### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue! 

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [TRIBUTACAO-BR](TRIBUTACAO-BR.md)  / [VALIDATIONS](VALIDATIONS.md)  

### TRIBUTACAO-BR
ATTENTION! For security reasons, the actual value of cpf / cnpj has been changed to XXX. It is a library for development and testing purposes only.

#### CPF

##### *GERADOR DE CPF (fins de desenvolvimento e testes)*

`TributacaoBr.genCpf()`  
**Result:** Ex.: 000.504.XXX-95  

##### *DEVE SER UM CPF VÁLIDO*

`TributacaoBr.isCpf("000.504.XXX-95")`  
**Result:** true  
  
##### *ADICIONA MÁSCARA AO CPF*

`TributacaoBr.maskCpj("000504XXX95")`  
**Result:** Ex.: 000.504.XXX-95  

##### *REMOVE MÁSCARA DE CPF*

`TributacaoBr.unmaskCpj("000.504.XXX-95")`  
**Result:** Ex.: 000504XXX95  

#### CNPJ

##### *GERADOR DE CNPJ (fins de desenvolvimento e testes)*

`TributacaoBr.genCnpj()`  
**Result:** Ex.: 18.XXX.665/7705-40  

##### *DEVE SER UM CNPJ VÁLIDO*

`TributacaoBr.isCnpj("18.XXX.665/7705-40")`  
**Result:** true  

##### *ADICIONA MÁSCARA AO CNPJ*

`TributacaoBr.maskCnpj("18XXX665770540")`  
**Result:** Ex.: 18.XXX.665/7705-40  

##### *REMOVE MÁSCARA DE CNPJ*

`TributacaoBr.unmaskCnpj("18.XXX.665/7705-40")`  
**Result:** Ex.: 18XXX665770540  

#### INSCRIÇÃO FEDERAL

##### *DEVE SER UMA INSCRIÇÃO FEDERAL VÁLIDA*

`TributacaoBr.isFederalNumber("000.504.XXX-95")`  
**Result:** true

`TributacaoBr.isFederalNumber("18.XXX.665/7705-40")`  
**Result:** true  

##### *ADICIONA MÁSCARA A INSCRIÇÃO FEDERAL *

`TributacaoBr.maskFederalNumber("000504XXX95")`  
**Result:** Ex.: 000.504.XXX-95 

`TributacaoBr.maskFederalNumber("18XXX665770540")`  
**Result:** Ex.: 18.XXX.665/7705-40  

##### *REMOVE MÁSCARA DE UMA INSCRIÇÃO FEDERAL *

`TributacaoBr.unmaskFederalNumber("000.504.XXX-95")`  
**Result:** Ex.: 000504XXX95  

`TributacaoBr.unmaskFederalNumber("18.XXX.665/7705-40")`  
**Result:** Ex.: 18XXX665770540  

