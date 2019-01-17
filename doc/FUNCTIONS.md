### NAVIGATION:
The documentation is separated by Helper.  

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [TRIBUTACAO-BR](TRIBUTACAO-BR.md)  / [VALIDATIONS](VALIDATIONS.md)  

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