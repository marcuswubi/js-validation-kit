|MENU||||||
|---  |---  |---  |---  |---  |---  |
| [HOME](https://github.com/maviniciuus/js-helpers/blob/master/README.md) | [DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md)| [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md) | [FUNCTIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/FUNCTIONS.md) | [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md) | [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md) | 
| [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md) | [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md) | [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md) | | | |

### LOCATIONS

#### *IS CEP*

`Locations.is_cep('89.888-777')`  
**Result:** true  

`Locations.is_cep('89888777')`  
**Result:** true  

#### *MASK CEP*

`Locations.mask_cep('89888777')`  
**Result:** 89.888-777

#### *UMASK CEP*

`Locations.unmask_cep('89.888-777')`  
**Result:** 89888777

#### *IS UF*

`Locations.is_uf('SC')`  
**Result:** true

`Locations.is_uf('DD')`  
**Result:** false

