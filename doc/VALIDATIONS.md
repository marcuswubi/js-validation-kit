## DOCUMENTAÇÃO:

-   [DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md)
-   [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md)
-   [MONGOS](https://github.com/maviniciuus/js-helpers/blob/master/doc/MONGOS.md)
-   [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md)
-   [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md)
-   [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md)
-   [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md)
-   [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md)

### VALIDATIONS

#### *- IS TYPE*

`Validations.is_type('string', "marcus")`  
**Resultado**: true

`Validations.is_type('number', 1)`  
**Resultado**: true  

`Validations.is_type('number', '1')`  
**Resultado**: false  

#### *- IS EMPTY*

`Validations.is_empty("marcus")`  
**Resultado**: false  

`Validations.is_empty('acelera.framework')`  
**Resultado**: false  

`Validations.is_empty(' marcus')`  
**Resultado**: false  

`Validations.is_empty(0)`  
**Resultado**: false  

`Validations.is_empty(1)`  
**Resultado**: false  

`Validations.is_empty(0.25)`  
**Resultado**: false  

`Validations.is_empty(true)`  
**Resultado**: false  

`Validations.is_empty(false)`  
**Resultado**: false  

`Validations.is_empty(undefined)`  
**Resultado**: true  

`Validations.is_empty('')`  
**Resultado**: true  

`Validations.is_empty(null)`  
**Resultado**: true  


#### *- IS EMPTY TRIMED*

`Validations.is_empty_trimed()`  
**Resultado**: Ex.: 000.504.XXX-95  

`Validations.is_empty_trimed('        ')`  
**Resultado**: false  

`Validations.is_empty_trimed(' ')`  
**Resultado**: false  

`Validations.is_empty_trimed('')`  
**Resultado**: true  

`Validations.is_empty_trimed('acelera.framework')`  
**Resultado**: false  

`Validations.is_empty_trimed(' marcus')`  
**Resultado**: false  

`Validations.is_empty_trimed(undefined)`  
**Resultado**: true    

`Validations.is_empty_trimed(null)`  
**Resultado**: true  
