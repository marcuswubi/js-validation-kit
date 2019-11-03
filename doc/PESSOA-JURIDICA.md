### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue! 

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [PESSOA-CEI](PESSOA-CEI.md)  / [PESSOA-FISICA](PESSOA-FISICA.md)  / [PESSOA-JURIDICA](PESSOA-JURIDICA.md)  / [VALIDATIONS](VALIDATIONS.md)  

### PESSOA-JURIDICA
ATTENTION! For security reasons, the actual value of cpf / cnpj has been changed to XXX. It is a library for development and testing purposes only.

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
