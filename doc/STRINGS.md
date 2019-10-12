### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue! 

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [TRIBUTACAO-BR](TRIBUTACAO-BR.md)  / [VALIDATIONS](VALIDATIONS.md)  

### STRINGS:

#### *CAPITALIZE*

`Strings.capitalize('string lowercase virou capitalize');`  
**Result:** String lowercase virou capitalize

#### *UPPERCASE*

`Strings.uppercase('string lowercase virou uppercase');`  
**Result:** STRING LOWERCASE VIROU UPPERCASE

#### *LOWERCASE*

`Strings.lowercase('STRING UPPERCASE VIROU LOWERCASE');`  
**Result:** string uppercase virou lowercase

#### *STRING COMEÇA COM*

`Strings.startsWith('banana', 'bana');`  
**Result:** true

#### *STRING TERMINA COM*

`Strings.endsWith('banana', ana');`  
**Result:** true

#### *REMOVE CARÁCTERES DO INÍCIO*

`Strings.removeCharLeft('remover 1 caracter do inicio', 1);`  
**Result:** emover 1 caracter do inicio

#### *REMOVE CARÁCTERES DO FINAL*

`Strings.removeCharRight('remover 3 caracteres do final', 3);`  
**Result:** remover 3 caracteres do fi

#### *CONCATENA CARÁCTERES NO INÍCIO*

`Strings.strPadLeft('.234890', 5, '0')`  
**Result:** 00000.234890

`Strings.strPadLeft('.234890', 5, 'X')`  
**Result:** XXXXX.234890

`Strings.strPadLeft('.234890', 5, '-')`  
**Result:** -----.234890

`Strings.removeCharLeft('remover 1 caracter do inicio', 1);`  
**Result:** emover 1 caracter do inicio

#### *CONCATENA CARÁCTERES NO FINAL*

`Strings.strPadRight('522', 5, '0')`  
**Result:** 52200000

`Strings.strPadRight('522', 4, 'X')`  
**Result:** 522XXXX

`Strings.strPadRight('522', 3, '-')`  
**Result:** 522---

#### *PLURAL PT-BR*

`Strings.pluralizePt('caneta');`  
**Result:** canetas

`Strings.pluralizePt('pessoa');`  
**Result:** pessoas

`Strings.pluralizePt('qualquer');`  
**Result:** quaisquer

`Strings.pluralizePt('mão');`  
**Result:** mãos

`Strings.pluralizePt('cidade');`  
**Result:** cidades

`Strings.pluralizePt('cidadão');`  
**Result:** cidadões

#### *SINGULAR PT-BR*

`Strings.singulatePt('canetas');`  
**Result:** caneta

`Strings.singulatePt('pessoas');`  
**Result:** pessoa

`Strings.singulatePt('quaisquer');`  
**Result:** qualquer

`Strings.singulatePt('mãos');`  
**Result:** mão

`Strings.singulatePt('cidades');`  
**Result:** cidade

`Strings.singulatePt('cidadões');`  
**Result:** cidadão

#### *REMOVE OS ACENTOS*

`Strings.toNonAcents('ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž')`  
**Result:** rRAAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz

`Strings.toNonAcents('O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.')`  
**Result:** O CORACAO E DOCE COMO BANANA CARAMELIZADA COM ACUCAR.

`Strings.toNonAcents('O coração é doce como banana caramelizada com açucar.')`  
**Result:** O coracao e doce como banana caramelizada com acucar.

#### *CONVERTER EM UMA URL*

`Strings.toUrl('Marcus Vinícius Mendes Gonçalves')`  
**Result:** marcus_vinicius_mendes_goncalves

`Strings.toUrl('O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.')`  
**Result:** o_coracao_e_doce_como_banana_caramelizada_com_acucar
