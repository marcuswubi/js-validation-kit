### MENU:
[DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md) *-* [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md) *-* [FUNCTIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/FUNCTIONS.md) *-* [IDS](https://github.com/maviniciuus/js-helpers/blob/master/doc/IDS.md) *-* [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md) *-* [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md) *-* [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md) *-* [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md) *-* [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md)

### LOCATIONS

#### *- IS CEP*

`Locations.is_cep('89.888-777')`  
**Resultado**: true  

`Locations.is_cep('89888777')`  
**Resultado**: true  

#### *- MASK CEP*

`Locations.mask_cep('89888777')`  
**Resultado**: 89.888-777

#### *- UMASK CEP*

`Locations.unmask_cep('89.888-777')`  
**Resultado**: 89888777

#### *- IS UF*

`Locations.is_uf('SC')`  
**Resultado**: true

`Locations.is_uf('DD')`  
**Resultado**: false

