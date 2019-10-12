### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue! 

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [TRIBUTACAO-BR](TRIBUTACAO-BR.md)  / [VALIDATIONS](VALIDATIONS.md)  

### LOCATIONS

#### *IS CEP*

`Locations.isCep('89.888-777')`  
**Result:** true  

`Locations.isCep('89888777')`  
**Result:** true  

#### *MASK CEP*

`Locations.maskCep('89888777')`  
**Result:** 89.888-777

#### *UMASK CEP*

`Locations.unmaskCep('89.888-777')`  
**Result:** 89888777

#### *IS UF*

`Locations.isUf('SC')`  
**Result:** true

`Locations.isUf('DD')`  
**Result:** false

