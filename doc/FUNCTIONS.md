### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue! 

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [PESSOA-CEI](PESSOA-CEI.md)  / [PESSOA-FISICA](PESSOA-FISICA.md)  / [PESSOA-JURIDICA](PESSOA-JURIDICA.md)  / [VALIDATIONS](VALIDATIONS.md)  

### IDS

#### *IS FUNCTION*

`Functions.isFunction(()=>{})`  
**Result:** true

`Functions.isFunction(new Promise(function(resolve, reject) {
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

`Validations.isPromise(new Promise(function(resolve, reject) {
  //everything ok
  if (true) {
    num = num * 2;
    resolve(num);
  } else {
    reject("failed");
  }
});)`  
**Result:** true

`Validations.isPromise(()=>{})`  
**Result:** false  

#### *IS CALLABLE*

`Functions.isCallable(()=>{})`  
**Result:** true

`Functions.isCallable(new Promise(function(resolve, reject) {
  //everything ok
  if (true) {
    num = num * 2;
    resolve(num);
  } else {
    reject("failed");
  }
}))`  
**Result:** false  
