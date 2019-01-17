### MENU:
[HOME](https://github.com/maviniciuus/js-helpers/blob/master/README.md) *-* [DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md) *-* [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md) *-* [FUNCTIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/FUNCTIONS.md) *-* [IDS](https://github.com/maviniciuus/js-helpers/blob/master/doc/IDS.md) *-* [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md) *-* [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md) *-* [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md) *-* [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md) *-* [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md)

### IDS

#### *IS FUNCTION*

`Functions.is_function(()=>{})`  
**Result:** true

`Functions.is_function(new Promise(function(resolve, reject) {
  //everything ok
  if (true) {
    num = num * 2;
    resolve(num);
  } else {
    reject("failed");
  }
}))`  
**Result:** false  

#### *IS PROMISE*

`Validations.is_promise(new Promise(function(resolve, reject) {
  //everything ok
  if (true) {
    num = num * 2;
    resolve(num);
  } else {
    reject("failed");
  }
});)`  
**Result:** true

`Validations.is_promise(()=>{})`  
**Result:** false  

#### *IS CALLABLE*

`Functions.is_callable(()=>{})`  
**Result:** true

`Functions.is_callable(new Promise(function(resolve, reject) {
  //everything ok
  if (true) {
    num = num * 2;
    resolve(num);
  } else {
    reject("failed");
  }
}))`  
**Result:** false  