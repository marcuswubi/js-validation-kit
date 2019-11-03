/* globals describe, it */
const assert = require('assert');
const { Dates } = require('../src/index');

describe('Dates', () => {
  describe('SECONDS TO UPTIME', () => {
    it('\'72\' when use \'secondsToUptime\' must return \'0 hora, 1 minuto e 12 segundos\'', () => {
      assert.equal(Dates.secondsToUptime(72), '0 hora, 1 minuto e 12 segundos');
    });
    it('\'132\' when use \'secondsToUptime\' must return \'0 hora, 2 minutos e 12 segundos\'', () => {
      assert.equal(Dates.secondsToUptime(132), '0 hora, 2 minutos e 12 segundos');
    });
    it('\'157\' when use \'secondsToUptime\' must return \'0 hora, 20 minutos e 57 segundos\'', () => {
      assert.equal(Dates.secondsToUptime(1257), '0 hora, 20 minutos e 57 segundos');
    });
    it('\'3247678\' when use \'secondsToUptime\' must return \'902 horas, 7 minutos e 58 segundos\'', () => {
      assert.equal(Dates.secondsToUptime(3247678), '902 horas, 7 minutos e 58 segundos');
    });
    it('\'132897312893\' when use \'secondsToUptime\' must return \'36915920 horas, 14 minutos e 53 segundos\'', () => {
      assert.equal(Dates.secondsToUptime(132897312893), '36915920 horas, 14 minutos e 53 segundos');
    });
  });
  // describe("DATE", function() {
  //   const value = "",
  //     expected = false;
  //   it(`'must validate if '${value}'`, function() {
  //     assert.equal(Dates.isEmpty(value), expected);
  //   });
  // });
});
