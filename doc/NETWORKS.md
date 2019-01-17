### NAVIGATION:
The documentation is separated by Helper.  

[HOME](../README.md) / [DATES](DATES.md)  / [LOCATIONS](LOCATIONS.md)  / [FUNCTIONS](FUNCTIONS.md)  / [NETWORKS](NETWORKS.md)  / [NUMBERS](NUMBERS.md)  / [STRINGS](STRINGS.md)  / [TRIBUTACAO-BR](TRIBUTACAO-BR.md)  / [VALIDATIONS](VALIDATIONS.md)  

### NETWORKS

#### *IS DOMAIN*

`Networks.is_domain("https://google.com")`  
**Result:** true  

`Networks.is_domain("http://google.com")`  
**Result:** true  

`Networks.is_domain("google.com")`  
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

`Networks.is_email_with_tld("marcus@google.com.br")`  
**Result:** true  

`Networks.is_email_with_tld("marcus@google.com")`  
**Result:** true  

`Networks.is_email_with_tld("marcus@google.com")`  
**Result:** true  

`Networks.is_email_with_tld("marcus@acelera")`  
**Result:** true  

`Networks.is_email_with_tld("marcus@localhost")`  
**Result:** true  

`Networks.is_email_with_tld("marcus@10.0.0.1")`  
**Result:** true  

`Networks.is_email_with_tld("marcus@0")`  
**Result:** true  

#### *IS EMAIL WITHOUT TLD*

`Networks.is_email("marcus@google.com.br")`  
**Result:** true  

`Networks.is_email("marcus@google.com")`  
**Result:** true  

`Networks.is_email("marcus@google.com")`  
**Result:** true  

`Networks.is_email("marcus@acelera")`  
**Result:** true  

`Networks.is_email("marcus@localhost")`  
**Result:** true  

`Networks.is_email("marcus@10.0.0.1")`  
**Result:** true  

`Networks.is_email("marcus@0")`  
**Result:** true  


#### *IS IP*

`Networks.is_ip("localhost")`  
**Result:** true  

`Networks.is_ip("192.168.0.1")`  
**Result:** true  

`Networks.is_ipv4("10.0.0.1")`  
**Result:** true  

`Networks.is_ipv4("255.255.255.0")`  
**Result:** true  

`Networks.is_ipv6("2001:0DB8:AD1F:25E2:CADE:CAFE:F0CA:84C1")`  
**Result:** true  
