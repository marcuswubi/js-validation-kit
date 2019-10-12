### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue! 

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [TRIBUTACAO-BR](TRIBUTACAO-BR.md)  / [VALIDATIONS](VALIDATIONS.md)  

### VALIDATIONS

#### *IS TYPE*

`Validations.isType('string', "marcus")`  
**Result:** true

`Validations.isType('number', 1)`  
**Result:** true  

`Validations.isType('number', '1')`  
**Result:** false  

#### *IS EMPTY*

`Validations.isEmpty("marcus")`  
**Result:** false  

`Validations.isEmpty('acelera.framework')`  
**Result:** false  

`Validations.isEmpty(' marcus')`  
**Result:** false  

`Validations.isEmpty(0)`  
**Result:** false  

`Validations.isEmpty(1)`  
**Result:** false  

`Validations.isEmpty(0.25)`  
**Result:** false  

`Validations.isEmpty(true)`  
**Result:** false  

`Validations.isEmpty(false)`  
**Result:** false  

`Validations.isEmpty(undefined)`  
**Result:** true  

`Validations.isEmpty('')`  
**Result:** true  

`Validations.isEmpty(null)`  
**Result:** true  


#### *IS EMPTY TRIMED*

`Validations.isEmptyTrimed()`  
**Result:** Ex.: 000.504.XXX-95  

`Validations.isEmptyTrimed('        ')`  
**Result:** false  

`Validations.isEmptyTrimed(' ')`  
**Result:** false  

`Validations.isEmptyTrimed('')`  
**Result:** true  

`Validations.isEmptyTrimed('acelera.framework')`  
**Result:** false  

`Validations.isEmptyTrimed(' marcus')`  
**Result:** false  

`Validations.isEmptyTrimed(undefined)`  
**Result:** true    

`Validations.isEmptyTrimed(null)`  
**Result:** true  
