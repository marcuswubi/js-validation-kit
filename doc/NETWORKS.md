### NAVIGATION:
The documentation is separated by Helper. Still in doubt? Is there anything missing in the documentation? Open an issue!  

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [TRIBUTACAO-BR](TRIBUTACAO-BR.md)  / [VALIDATIONS](VALIDATIONS.md)  

### NETWORKS

#### *IS DOMAIN*

`Networks.isDomain("https://google.com")`  
**Result:** true  

`Networks.isDomain("http://google.com")`  
**Result:** true  

`Networks.isDomain("google.com")`  
**Result:** true  


#### *IS URL*

`Networks.is_url("http://google.com/contato")`  
**Result:** true  

`Networks.is_url("http://google.com/contato?prop1=teste&prop2=teste")`  
**Result:** true 

`Networks.is_url("https://google.com/contato")`  
**Result:** true  

`Networks.is_url("https://google.com/contato?prop1=teste&prop2=teste")`  
**Result:** true  

`Networks.is_url("google.com/contato")`  
**Result:** false  

`Networks.is_url("google.com/contato?prop1=teste&prop2=teste")`  
**Result:** false  


#### *IS EMAIL WITH TLD*

`Networks.isEmailWithTld("marcus@google.com.br")`  
**Result:** true  

`Networks.isEmailWithTld("marcus@google.com")`  
**Result:** true  

`Networks.isEmailWithTld("marcus@google.com")`  
**Result:** true  

`Networks.isEmailWithTld("marcus@acelera")`  
**Result:** true  

`Networks.isEmailWithTld("marcus@localhost")`  
**Result:** true  

`Networks.isEmailWithTld("marcus@10.0.0.1")`  
**Result:** true  

`Networks.isEmailWithTld("marcus@0")`  
**Result:** true  

#### *IS EMAIL WITHOUT TLD*

`Networks.isEmail("marcus@google.com.br")`  
**Result:** true  

`Networks.isEmail("marcus@google.com")`  
**Result:** true  

`Networks.isEmail("marcus@google.com")`  
**Result:** true  

`Networks.isEmail("marcus@acelera")`  
**Result:** true  

`Networks.isEmail("marcus@localhost")`  
**Result:** true  

`Networks.isEmail("marcus@10.0.0.1")`  
**Result:** true  

`Networks.isEmail("marcus@0")`  
**Result:** true  


#### *IS IP*

`Networks.isIp("localhost")`  
**Result:** true  

`Networks.isIp("192.168.0.1")`  
**Result:** true  

`Networks.isIpv4("10.0.0.1")`  
**Result:** true  

`Networks.isIpv4("255.255.255.0")`  
**Result:** true  

`Networks.isIpv6("2001:0DB8:AD1F:25E2:CADE:CAFE:F0CA:84C1")`  
**Result:** true  
