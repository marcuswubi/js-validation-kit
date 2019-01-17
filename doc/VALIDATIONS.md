|MENU||||||
|---  |---  |---  |---  |---  |---  |
| [HOME](https://github.com/maviniciuus/js-helpers/blob/master/README.md) | [DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md)| [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md) | [FUNCTIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/FUNCTIONS.md) | [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md) | [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md) | 
| [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md) | [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md) | [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md) | | | |

### VALIDATIONS

#### *IS TYPE*

`Validations.is_type('string', "marcus")`  
**Result:** true

`Validations.is_type('number', 1)`  
**Result:** true  

`Validations.is_type('number', '1')`  
**Result:** false  

#### *IS EMPTY*

`Validations.is_empty("marcus")`  
**Result:** false  

`Validations.is_empty('acelera.framework')`  
**Result:** false  

`Validations.is_empty(' marcus')`  
**Result:** false  

`Validations.is_empty(0)`  
**Result:** false  

`Validations.is_empty(1)`  
**Result:** false  

`Validations.is_empty(0.25)`  
**Result:** false  

`Validations.is_empty(true)`  
**Result:** false  

`Validations.is_empty(false)`  
**Result:** false  

`Validations.is_empty(undefined)`  
**Result:** true  

`Validations.is_empty('')`  
**Result:** true  

`Validations.is_empty(null)`  
**Result:** true  


#### *IS EMPTY TRIMED*

`Validations.is_empty_trimed()`  
**Result:** Ex.: 000.504.XXX-95  

`Validations.is_empty_trimed('        ')`  
**Result:** false  

`Validations.is_empty_trimed(' ')`  
**Result:** false  

`Validations.is_empty_trimed('')`  
**Result:** true  

`Validations.is_empty_trimed('acelera.framework')`  
**Result:** false  

`Validations.is_empty_trimed(' marcus')`  
**Result:** false  

`Validations.is_empty_trimed(undefined)`  
**Result:** true    

`Validations.is_empty_trimed(null)`  
**Result:** true  
