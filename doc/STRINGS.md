### MENU:
[DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md) *-* [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md) *-* [FUNCTIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/FUNCTIONS.md) *-* [IDS](https://github.com/maviniciuus/js-helpers/blob/master/doc/IDS.md) *-* [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md) *-* [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md) *-* [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md) *-* [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md) *-* [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md)

### STRINGS:

#### *- CAPITALIZE*

`Strings.capitalize('string lowercase virou capitalize');`  
**Result:** String lowercase virou capitalize

#### *- UPPERCASE*

`Strings.uppercase('string lowercase virou uppercase');`  
**Result:** STRING LOWERCASE VIROU UPPERCASE

#### *- LOWERCASE*

`Strings.lowercase('STRING UPPERCASE VIROU LOWERCASE');`  
**Result:** string uppercase virou lowercase

#### *- STRING COMEÇA COM*

`Strings.starts_with('banana', 'bana');`  
**Result:** true

#### *- STRING TERMINA COM*

`Strings.ends_with('banana', ana');`  
**Result:** true

#### *- REMOVE CARÁCTERES DO INÍCIO*

`Strings.remove_char_left('remover 1 caracter do inicio', 1);`  
**Result:** emover 1 caracter do inicio

#### *- REMOVE CARÁCTERES DO FINAL*

`Strings.remove_char_right('remover 3 caracteres do final', 3);`  
**Result:** remover 3 caracteres do fi

#### *- CONCATENA CARÁCTERES NO INÍCIO*

`Strings.str_pad_left('.234890', 5, '0')`  
**Result:** 00000.234890

`Strings.str_pad_left('.234890', 5, 'X')`  
**Result:** XXXXX.234890

`Strings.str_pad_left('.234890', 5, '-')`  
**Result:** -----.234890

`Strings.remove_char_left('remover 1 caracter do inicio', 1);`  
**Result:** emover 1 caracter do inicio

#### *- CONCATENA CARÁCTERES NO FINAL*

`Strings.str_pad_right('522', 5, '0')`  
**Result:** 52200000

`Strings.str_pad_right('522', 4, 'X')`  
**Result:** 522XXXX

`Strings.str_pad_right('522', 3, '-')`  
**Result:** 522---

#### *- PLURAL PT-BR*

`Strings.pluralize_pt('caneta');`  
**Result:** canetas

`Strings.pluralize_pt('pessoa');`  
**Result:** pessoas

`Strings.pluralize_pt('qualquer');`  
**Result:** quaisquer

`Strings.pluralize_pt('mão');`  
**Result:** mãos

`Strings.pluralize_pt('cidade');`  
**Result:** cidades

`Strings.pluralize_pt('cidadão');`  
**Result:** cidadões

#### *- SINGULAR PT-BR*

`Strings.singulate_pt('canetas');`  
**Result:** caneta

`Strings.singulate_pt('pessoas');`  
**Result:** pessoa

`Strings.singulate_pt('quaisquer');`  
**Result:** qualquer

`Strings.singulate_pt('mãos');`  
**Result:** mão

`Strings.singulate_pt('cidades');`  
**Result:** cidade

`Strings.singulate_pt('cidadões');`  
**Result:** cidadão

#### *- REMOVE OS ACENTOS*

`Strings.to_non_acents('ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž')`  
**Result:** rRAAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz

`Strings.to_non_acents('O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.')`  
**Result:** O CORACAO E DOCE COMO BANANA CARAMELIZADA COM ACUCAR.

`Strings.to_non_acents('O coração é doce como banana caramelizada com açucar.')`  
**Result:** O coracao e doce como banana caramelizada com acucar.

#### *- CONVERTER EM UMA URL*

`Strings.to_url('Marcus Vinícius Mendes Gonçalves')`  
**Result:** marcus_vinicius_mendes_goncalves

`Strings.to_url('O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.')`  
**Result:** o_coracao_e_doce_como_banana_caramelizada_com_acucar
