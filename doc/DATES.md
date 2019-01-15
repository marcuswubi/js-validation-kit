## DOCUMENTAÇÃO:

-   [DATES](https://github.com/maviniciuus/js-helpers/blob/master/doc/DATES.md)
-   [LOCATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/LOCATIONS.md)
-   [MONGOS](https://github.com/maviniciuus/js-helpers/blob/master/doc/MONGOS.md)
-   [NETWORKS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NETWORKS.md)
-   [NUMBERS](https://github.com/maviniciuus/js-helpers/blob/master/doc/NUMBERS.md)
-   [STRINGS](https://github.com/maviniciuus/js-helpers/blob/master/doc/STRINGS.md)
-   [TRIBUTACAO-BR](https://github.com/maviniciuus/js-helpers/blob/master/doc/TRIBUTACAO-BR.md)
-   [VALIDATIONS](https://github.com/maviniciuus/js-helpers/blob/master/doc/VALIDATIONS.md)

### DATES

#### * - Format*

|   	                          | Token             | Output                                      |
|---	                          |---          	    |---                            	            |
| **Month**                     | M            	    | 1 2 ... 11 12                               |
|    	                          | Mo             	  | 1st 2nd ... 11th 12th                       |
|   	                          | MM          	    | 01 02 ... 11 12                             |
|   	                          | MMM         	    | Jan Feb ... Nov Dec                         |
|   	                          | MMMM        	    | January February ... November December      |
| **Quarter**                   | Q            	    | 1 2 3 4                                     |
|    	                          | Qo             	  | 1st 2nd 3rd 4th                             |
| **Day of Month**              | D          	      | 1 2 ... 30 31                               |
|   	                          | Do          	    | 1st 2nd ... 30th 31st                       |
|   	                          | DD          	    | 01 02 ... 30 31                             |
| **Day of Year**               | DDD          	    | 1 2 ... 364 365                             |
|   	                          | DDDo        	    | 1st 2nd ... 364th 365th                     |
|   	                          | DDDD          	  | 001 002 ... 364 365                         |
| **Day of Week**               | d          	      | 0 1 ... 5 6                                 |
|   	                          | do        	      | 0th 1st ... 5th 6th                         |
|   	                          | dd          	    | Su Mo ... Fr Sa                             |
|   	                          | ddd         	    | Sun Mon ... Fri Sat                         |
|   	                          | dddd         	    | Sunday Monday ... Friday Saturday           |
| **Day of Week (Locale)**      | e          	      | 0 1 ... 5 6                                 |
| **Day of Week (ISO)**         | E          	      | 1 2 ... 6 7                                 |
| **Week of Year (ISO)**        | w          	      | 1 2 ... 52 53                               |

<table class="table table-striped table-bordered">
    <tr>
      <td></td>
      <td>wo</td>
      <td>1st 2nd ... 52nd 53rd</td>
    </tr>
    <tr>
      <td></td>
      <td>ww</td>
      <td>01 02 ... 52 53</td>
    </tr>
    <tr>
      <td><b>Week of Year (ISO)</b></td>
      <td>W</td>
      <td>1 2 ... 52 53</td>
    </tr>
    <tr>
      <td></td>
      <td>Wo</td>
      <td>1st 2nd ... 52nd 53rd</td>
    </tr>
    <tr>
      <td></td>
      <td>WW</td>
      <td>01 02 ... 52 53</td>
    </tr>
    <tr>
      <td><b>Year</b></td>
      <td>YY</td>
      <td>70 71 ... 29 30</td>
    </tr>
    <tr>
      <td></td>
      <td>YYYY</td>
      <td>1970 1971 ... 2029 2030</td>
    </tr>
      <tr>
      <td></td>
      <td>Y</td>
      <td>1970 1971 ... 9999 +10000 +10001
        <br>
        <b>Note:</b> This complies with the ISO 8601 standard for dates past the year 9999
      </td>
    </tr>
    <tr>
      <td><b>Week Year</b></td>
      <td>gg</td>
      <td>70 71 ... 29 30</td>
    </tr>
    <tr>
      <td></td>
      <td>gggg</td>
      <td>1970 1971 ... 2029 2030</td>
    </tr>
    <tr>
      <td><b>Week Year (ISO)</b></td>
      <td>GG</td>
      <td>70 71 ... 29 30</td>
    </tr>
    <tr>
      <td></td>
      <td>GGGG</td>
      <td>1970 1971 ... 2029 2030</td>
    </tr>
    <tr>
      <td><b>AM/PM</b></td>
      <td>A</td>
      <td>AM PM</td>
    </tr>
    <tr>
      <td></td>
      <td>a</td>
      <td>am pm</td>
    </tr>
    <tr>
      <td><b>Hour</b></td>
      <td>H</td>
      <td>0 1 ... 22 23</td>
    </tr>
    <tr>
      <td></td>
      <td>HH</td>
      <td>00 01 ... 22 23</td>
    </tr>
    <tr>
      <td></td>
      <td>h</td>
      <td>1 2 ... 11 12</td>
    </tr>
    <tr>
      <td></td>
      <td>hh</td>
      <td>01 02 ... 11 12</td>
    </tr>
    <tr>
      <td></td>
      <td>k</td>
      <td>1 2 ... 23 24</td>
    </tr>
    <tr>
      <td></td>
      <td>kk</td>
      <td>01 02 ... 23 24</td>
    </tr>
    <tr>
      <td><b>Minute</b></td>
      <td>m</td>
      <td>0 1 ... 58 59</td>
    </tr>
    <tr>
      <td></td>
      <td>mm</td>
      <td>00 01 ... 58 59</td>
    </tr>
    <tr>
      <td><b>Second</b></td>
      <td>s</td>
      <td>0 1 ... 58 59</td>
    </tr>
    <tr>
      <td></td>
      <td>ss</td>
      <td>00 01 ... 58 59</td>
    </tr>
    <tr>
      <td><b>Fractional Second</b></td>
      <td>S</td>
      <td>0 1 ... 8 9</td>
    </tr>
    <tr>
      <td></td>
      <td>SS</td>
      <td>00 01 ... 98 99</td>
    </tr>
    <tr>
      <td></td>
      <td>SSS</td>
      <td>000 001 ... 998 999</td>
    </tr>
    <tr>
      <td></td>
      <td>SSSS ... SSSSSSSSS</td>
      <td>000[0..] 001[0..] ... 998[0..] 999[0..]</td>
    </tr>
    <tr>
      <td><b>Time Zone</b></td>
      <td>z or zz</td>
      <td>
        EST CST ... MST PST
        <br>
        <b>Note:</b> as of <b>1.6.0</b>, the z/zz format tokens have been deprecated from plain moment objects. <a href="https://github.com/moment/moment/issues/162">Read more about it here.</a>
        However, they <em>do</em> work if you are using a specific time zone with the moment-timezone addon.
      </td>
    </tr>
    <tr>
      <td></td>
      <td>Z</td>
      <td>-07:00 -06:00 ... +06:00 +07:00</td>
    </tr>
    <tr>
      <td></td>
      <td>ZZ</td>
      <td>
        -0700 -0600 ... +0600 +0700
      </td>
    </tr>
    <tr>
      <td><b>Unix Timestamp</b></td>
      <td>X</td>
      <td>1360013296</td>
    </tr>
    <tr>
      <td><b>Unix Millisecond Timestamp</b></td>
      <td>x</td>
      <td>1360013296123</td>
    </tr>
  </tbody>
</table>