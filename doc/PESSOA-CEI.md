### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue! 

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [PESSOA-CEI](PESSOA-CEI.md)  / [PESSOA-FISICA](PESSOA-FISICA.md)  / [PESSOA-JURIDICA](PESSOA-JURIDICA.md)  / [VALIDATIONS](VALIDATIONS.md)  

### PESSOA-CEI
ATTENTION! For security reasons, the actual value of cpf / cnpj has been changed to XXX. It is a library for development and testing purposes only.

##### *DEVE SER UM CEI VÁLIDO*

`TributacaoBr.isCei("22.XXX.71784/80")`  
**Result:** true  

##### *ADICIONA MÁSCARA AO CEI*

`TributacaoBr.maskCei("22XXX7178480")`  
**Result:** Ex.: 22.XXX.71784/80  

##### *REMOVE MÁSCARA DE CEI*

`TributacaoBr.unmaskCei("22.XXX.71784/80")`  
**Result:** Ex.: 22XXX7178480  
