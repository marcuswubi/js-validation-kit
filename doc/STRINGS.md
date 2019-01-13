### STRINGS:

#### - _CAPITALIZE_

`Strings.capitalize('string lowercase virou capitalize');`  
**Resultado**: String lowercase virou capitalize

#### - _UPPERCASE_

`Strings.uppercase('string lowercase virou uppercase');`  
**Resultado**: STRING LOWERCASE VIROU UPPERCASE

#### - _LOWERCASE_

`Strings.lowercase('STRING UPPERCASE VIROU LOWERCASE');`  
**Resultado**: string uppercase virou lowercase

#### - _STRING COMEÇA COM_

`Strings.starts_with('banana', 'bana');`  
**Resultado**: true

#### - STRING TERMINA COM

`Strings.ends_with('banana', ana');`  
**Resultado**: true

#### - REMOVE CARÁCTERES DO INÍCIO

`Strings.remove_char_left('remover 1 caracter do inicio', 1);`  
**Resultado**: emover 1 caracter do inicio

#### - REMOVE CARÁCTERES DO FINAL

`Strings.remove_char_right('remover 3 caracteres do final', 3);`  
**Resultado**: remover 3 caracteres do fi

#### - CONCATENA CARÁCTERES NO INÍCIO

`Strings.str_pad_left('.234890', 5, '0')`  
**Resultado**: 00000.234890

`Strings.str_pad_left('.234890', 5, 'X')`  
**Resultado**: XXXXX.234890

`Strings.str_pad_left('.234890', 5, '-')`  
**Resultado**: -----.234890

`Strings.remove_char_left('remover 1 caracter do inicio', 1);`  
**Resultado**: emover 1 caracter do inicio

#### - CONCATENA CARÁCTERES NO FINAL

`Strings.str_pad_right('522', 5, '0')`  
**Resultado**: 52200000

`Strings.str_pad_right('522', 4, 'X')`  
**Resultado**: 522XXXX

`Strings.str_pad_right('522', 3, '-')`  
**Resultado**: 522---

#### - PLURAL PT-BR

`Strings.pluralize_pt('caneta');`  
**Resultado**: canetas

`Strings.pluralize_pt('pessoa');`  
**Resultado**: pessoas

`Strings.pluralize_pt('qualquer');`  
**Resultado**: quaisquer

`Strings.pluralize_pt('mão');`  
**Resultado**: mãos

`Strings.pluralize_pt('cidade');`  
**Resultado**: cidades

`Strings.pluralize_pt('cidadão');`  
**Resultado**: cidadões

#### - SINGULAR PT-BR

`Strings.singulate_pt('canetas');`  
**Resultado**: caneta

`Strings.singulate_pt('pessoas');`  
**Resultado**: pessoa

`Strings.singulate_pt('quaisquer');`  
**Resultado**: qualquer

`Strings.singulate_pt('mãos');`  
**Resultado**: mão

`Strings.singulate_pt('cidades');`  
**Resultado**: cidade

`Strings.singulate_pt('cidadões');`  
**Resultado**: cidadão

#### - REMOVE OS ACENTOS

`Strings.to_non_acents('ŕŔÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž')`  
**Resultado**: rRAAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz

`Strings.to_non_acents('O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.')`  
**Resultado**: O CORACAO E DOCE COMO BANANA CARAMELIZADA COM ACUCAR.

`Strings.to_non_acents('O coração é doce como banana caramelizada com açucar.')`  
**Resultado**: O coracao e doce como banana caramelizada com acucar.

#### - CONVERTER EM UMA URL

`Strings.to_url('Marcus Vinícius Mendes Gonçalves')`  
**Resultado**: marcus_vinicius_mendes_goncalves

`Strings.to_url('O CORAÇÃO É DOCE COMO BANANA CARAMELIZADA COM AÇUCAR.')`  
**Resultado**: o_coracao_e_doce_como_banana_caramelizada_com_acucar
