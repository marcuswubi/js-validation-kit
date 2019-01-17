|MENU||||||
|---  |---  |---  |---  |---  |---  |
| [HOME](https://github.com/maviniciuus/js-helpers/blob/master/README.md) | [DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md)| [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md) | [FUNCTIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/FUNCTIONS.md) | [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md) | [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md) | 
| [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md) | [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md) | [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md) | | | |

### NUMBERS:

#### *INT PARA STRING*

`Numbers.to_integer('47-segundos')`  
**Result:** 47

`Numbers.to_integer('2cachorros5patos')`  
**Result:** 25

#### *INTEIRO POR EXTENSO*

##### *NORMAL*

`Numbers.integer_to_word_pt(1);`  
**Result:** um

`Numbers.integer_to_word_pt(223);`  
**Result:** duzentos e vinte e três

`Numbers.integer_to_word_pt(61);`  
**Result:** sessenta e um

`Numbers.integer_to_word_pt(6546785);`  
**Result:** seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco

`Numbers.integer_to_word_pt(687);`  
**Result:** seiscentos e oitenta e sete

`Numbers.integer_to_word_pt(1785.5);`  
**Result:** um mil setecentos e oitenta e cinco vírgula cinco

`Numbers.integer_to_word_pt(0);`  
**Result:** zero

`Numbers.integer_to_word_pt(0.345);`  
**Result:** zero vírgula trezentos e quarenta e cinco

`Numbers.integer_to_word_pt(14);`  
**Result:** quatorze

`Numbers.integer_to_word_pt(4536);`  
**Result:** quatro mil quinhentos e trinta e seis

`Numbers.integer_to_word_pt(425642368575263241234);`  
**Result:** quatrocentos e vinte e cinco quintilhões seiscentos e quarenta e dois quatrilhões trezentos e sessenta e oito trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos mil

##### *PORCENTAGEM*

`Numbers.integer_to_word_pt(1, 'porcentagem');`  
**Result:** um porcento

`Numbers.integer_to_word_pt(223, 'porcentagem');`  
**Result:** duzentos e vinte e três porcento

`Numbers.integer_to_word_pt(61, 'porcentagem');`  
**Result:** sessenta e um porcento

`Numbers.integer_to_word_pt(6546785, 'porcentagem');`  
**Result:** seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco porcento

`Numbers.integer_to_word_pt(687, 'porcentagem');`  
**Result:** seiscentos e oitenta e sete porcento

`Numbers.integer_to_word_pt(1785.5, 'porcentagem');`  
**Result:** um mil setecentos e oitenta e cinco vírgula cinco porcento

`Numbers.integer_to_word_pt(0, 'porcentagem');`  
**Result:** zero porcento

`Numbers.integer_to_word_pt(0.345, 'porcentagem');`  
**Result:** zero vírgula trezentos e quarenta e cinco porcento

`Numbers.integer_to_word_pt(14, 'porcentagem');`  
**Result:** quatorze porcento

`Numbers.integer_to_word_pt(4536, 'porcentagem');`  
**Result:** quatro mil quinhentos e trinta e seis porcento

`Numbers.integer_to_word_pt(4265263241234, 'porcentagem');`  
**Result:** quatro trilhões duzentos e sessenta e cinco bilhões duzentos e sessenta e três milhões duzentos e quarenta e um mil duzentos e trinta e quatro porcento

##### *MONETARIO*

`Numbers.integer_to_word_pt(1, 'monetario');`  
**Result:** um real

`Numbers.integer_to_word_pt(223, 'monetario');`  
**Result:** duzentos e vinte e três reais

`Numbers.integer_to_word_pt(61, 'monetario');`  
**Result:** sessenta e um reais

`Numbers.integer_to_word_pt(6546785, 'monetario');`  
**Result:** seis milhões quinhentos e quarenta e seis mil setecentos e oitenta e cinco reais

`Numbers.integer_to_word_pt(687, 'monetario');`  
**Result:** seiscentos e oitenta e sete reais

`Numbers.integer_to_word_pt(1785.5, 'monetario');`  
**Result:** um mil setecentos e oitenta e cinco reais e cinquenta centavos

`Numbers.integer_to_word_pt(0, 'monetario');`  
**Result:** zero

`Numbers.integer_to_word_pt(0.345, 'monetario');`  
**Result:** trinta e quatro centavos

`Numbers.integer_to_word_pt(14, 'monetario');`  
**Result:** quatorze reais

`Numbers.integer_to_word_pt(4536, 'monetario');`  
**Result:** quatro mil quinhentos e trinta e seis reais

`Numbers.integer_to_word_pt(468321321575263241234, 'monetario');`  
**Result:** quatrocentos e sessenta e oito quintilhões trezentos e vinte e um quatrilhões trezentos e vinte e um trilhões quinhentos e setenta e cinco bilhões duzentos e sessenta e três milhões e duzentos e quarenta mil reais
