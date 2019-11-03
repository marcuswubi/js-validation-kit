### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue! 

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [PESSOA-CEI](PESSOA-CEI.md)  / [PESSOA-FISICA](PESSOA-FISICA.md)  / [PESSOA-JURIDICA](PESSOA-JURIDICA.md)  / [VALIDATIONS](VALIDATIONS.md)  

### PESSOA-FISICA
ATTENTION! For security reasons, the actual value of cpf / cnpj has been changed to XXX. It is a library for development and testing purposes only.

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
