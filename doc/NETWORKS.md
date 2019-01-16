### MENU:
[DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md) *-* [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md) *-* [FUNCTIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/FUNCTIONS.md) *-* [IDS](https://github.com/maviniciuus/js-helpers/blob/master/doc/IDS.md) *-* [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md) *-* [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md) / [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md) *-* [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md) *-* [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md)

### NETWORKS

#### *- IS DOMAIN*

`Networks.is_domain("https://acelera.cloud")`  
**Resultado:** true  

`Networks.is_domain("http://acelera.cloud")`  
**Resultado:** true  

`Networks.is_domain("acelera.cloud")`  
**Resultado:** true  


#### *- IS URL*

`Networks.is_url("http://acelera.cloud/contato")`  
**Resultado:** true  

`Networks.is_url("http://acelera.cloud/contato?prop1=teste&prop2=teste")`  
**Resultado:** true 

`Networks.is_url("https://acelera.cloud/contato")`  
**Resultado:** true  

`Networks.is_url("https://acelera.cloud/contato?prop1=teste&prop2=teste")`  
**Resultado:** true  

`Networks.is_url("acelera.cloud/contato")`  
**Resultado:** false  

`Networks.is_url("acelera.cloud/contato?prop1=teste&prop2=teste")`  
**Resultado:** false  


#### *- IS EMAIL WITH TLD*

`Networks.is_email_with_tld("marcus@aceleracloud.com.br")`  
**Resultado:** true  

`Networks.is_email_with_tld("marcus@aceleracloud.com")`  
**Resultado:** true  

`Networks.is_email_with_tld("marcus@acelera.cloud")`  
**Resultado:** true  

`Networks.is_email_with_tld("marcus@acelera")`  
**Resultado:** true  

`Networks.is_email_with_tld("marcus@localhost")`  
**Resultado:** true  

`Networks.is_email_with_tld("marcus@10.0.0.1")`  
**Resultado:** true  

`Networks.is_email_with_tld("marcus@0")`  
**Resultado:** true  

#### *- IS EMAIL WITHOUT TLD*

`Networks.is_email("marcus@aceleracloud.com.br")`  
**Resultado:** true  

`Networks.is_email("marcus@aceleracloud.com")`  
**Resultado:** true  

`Networks.is_email("marcus@acelera.cloud")`  
**Resultado:** true  

`Networks.is_email("marcus@acelera")`  
**Resultado:** true  

`Networks.is_email("marcus@localhost")`  
**Resultado:** true  

`Networks.is_email("marcus@10.0.0.1")`  
**Resultado:** true  

`Networks.is_email("marcus@0")`  
**Resultado:** true  


#### *- IS IP*

`Networks.is_ip("localhost")`  
**Resultado:** true  

`Networks.is_ip("192.168.0.1")`  
**Resultado:** true  

`Networks.is_ipv4("10.0.0.1")`  
**Resultado:** true  

`Networks.is_ipv4("255.255.255.0")`  
**Resultado:** true  

`Networks.is_ipv6("2001:0DB8:AD1F:25E2:CADE:CAFE:F0CA:84C1")`  
**Resultado:** true  
