/* globals describe, it */
const assert = require('assert');
const { Dates } = require('../src/index');

describe('Dates', () => {
  describe('FORMAT DATE', () => {
    it('\'new Date(2001, 3, 21)\' when use \'formatDate\' must return \'21/03/2001\'', () => {
      assert.equal(Dates.formatDate(new Date(2001, 2, 21), 'DD/MM/YYYY'), '21/03/2001');
    });
    it('\'new Date(2005, 4, 15)\' when use \'formatDate\' must return \'15/05/2005\'', () => {
      assert.equal(Dates.formatDate(new Date(2005, 4, 15), 'DD/MM/YYYY'), '15/05/2005');
    });
    it('\'new Date(1990, 2, 9)\' when use \'formatDate\' must return \'09/03/1990\'', () => {
      assert.equal(Dates.formatDate(new Date(1990, 2, 9), 'DD/MM/YYYY'), '09/03/1990');
    });
  });
  describe('MILLI TO DAYS', () => {
    it('\'6541\' when use \'milliToDays\' must return \'0.00007570601851851852\'', () => {
      assert.equal(Dates.milliToDays(6541), 0.00007570601851851852);
    });
    it('\'31296541\' when use \'milliToDays\' must return \'0.3622284837962963\'', () => {
      assert.equal(Dates.milliToDays(31296541), 0.3622284837962963);
    });
    it('\'3129654131296541\' when use \'milliToDays\' must return \'36222848.74185812\'', () => {
      assert.equal(Dates.milliToDays(3129654131296541), 36222848.74185812);
    });
  });
  describe('MILLI TO MONTHS', () => {
    it('\'6541\' when use \'milliToMonths\' must return \'0.0000024873124628766427\'', () => {
      assert.equal(Dates.milliToMonths(6541), 0.0000024873124628766427);
    });
    it('\'31296541\' when use \'milliToMonths\' must return \'0.011900974847000433\'', () => {
      assert.equal(Dates.milliToMonths(31296541), 0.011900974847000433);
    });
    it('\'3129654131296541\' when use \'milliToMonths\' must return \'1190097.4966010181\'', () => {
      assert.equal(Dates.milliToMonths(3129654131296541), 1190097.4966010181);
    });
  });
  describe('DIFF DAYS', () => {
    it('\'09/03/1990 e 09/11/1990\' when use \'diffDays\' must return \'0.0000024873124628766427\'', () => {
      assert.equal(Dates.diffDays(new Date(1990, 2, 9), new Date(1990, 10, 9)), 245);
    });
    it('\'10/03/1990 e 09/11/1990\' when use \'diffDays\' must return \'0.0000024873124628766427\'', () => {
      assert.equal(Dates.diffDays(new Date(1990, 2, 10), new Date(1990, 10, 9)), 244);
    });
  });
  describe('DIFF MONTHS', () => {
    it('\'09/04/1990 e 09/11/1990 utc=true\' when use \'diffMonths\' must return \'0.0000024873124628766427\'', () => {
      assert.equal(Dates.diffMonths(new Date(1990, 3, 9), new Date(1990, 10, 9)), 7);
    });
    it('\'09/04/1990 e 09/11/1990 utc=true\' when use \'diffMonths\' must return \'0.0000024873124628766427\'', () => {
      assert.equal(Dates.diffMonths(new Date(1990, 3, 9), new Date(1990, 10, 9)), 7);
    });
    it('\'09/04/1990 e 09/11/1990 utc=true\' when use \'diffMonths\' must return \'0.0000024873124628766427\'', () => {
      assert.equal(Dates.diffMonths(new Date(1990, 3, 9), new Date(1990, 10, 9)), 7);
    });
  });
  describe('DAYS IN MONTH', () => {
    it('\'year 1990 month 2\' when use \'daysInMonth\' must return \'4\'', () => {
      assert.equal(Dates.daysInMonth(1990, 2), 31);
    });
    it('\'year 2005 month 5\' when use \'daysInMonth\' must return \'4\'', () => {
      assert.equal(Dates.daysInMonth(2005, 5), 30);
    });
    it('\'year 2013 month 9\' when use \'daysInMonth\' must return \'4\'', () => {
      assert.equal(Dates.daysInMonth(2013, 9), 31);
    });
    it('\'year 2019 month 1\' when use \'daysInMonth\' must return \'4\'', () => {
      assert.equal(Dates.daysInMonth(2019, 1), 28);
    });
  });
  describe('DAYS IN YEAR', () => {
    it('\'year 1990\' when use \'daysInYear\' must return \'365\'', () => {
      assert.equal(Dates.daysInYear(1990), 365);
    });
    it('\'year 2005\' when use \'daysInYear\' must return \'365\'', () => {
      assert.equal(Dates.daysInYear(2005), 365);
    });
    it('\'year 2008\' when use \'daysInYear\' must return \'366\'', () => {
      assert.equal(Dates.daysInYear(2008), 366);
    });
    it('\'year 2012\' when use \'daysInYear\' must return \'366\'', () => {
      assert.equal(Dates.daysInYear(2012), 366);
    });
    it('\'year 2013\' when use \'daysInYear\' must return \'365\'', () => {
      assert.equal(Dates.daysInYear(2013), 365);
    });
    it('\'year 2019\' when use \'daysInYear\' must return \'365\'', () => {
      assert.equal(Dates.daysInYear(2019), 365);
    });
  });
  describe('REMOVE MINUTES', () => {
    it('\'1\' when use \'removeMinutes\' must return \'0.0000024873124628766427\'', () => {
      assert.equal(Dates.formatDate(Dates.removeMinutes(new Date(1990, 2, 9, 12, 22, 30), 1), 'mm'), '21');
    });
  });
  describe('REMOVE MONTHS', () => {
    it('\'1\' when use \'removeMonths\' must return \'02\'', () => {
      assert.equal(Dates.formatDate(Dates.removeMonths(new Date(1990, 2, 9), 1), 'MM'), '02');
    });
  });
  describe('ADD MONTHS', () => {
    it('\'new Date(1990, 2, 9) e 1\' when use \'addMonths\' must return \'04\'', () => {
      assert.equal(Dates.formatDate(Dates.addMonths(new Date(1990, 2, 9), 1), 'MM'), '04');
    });
  });
  describe('DATE TO MONTH DAY', () => {
    it('\'1\' when use \'dateToMonthDay\' must return \'09/03\'', () => {
      assert.equal(Dates.dateToMonthDay(new Date(1990, 2, 9), 1), '09/03');
    });
  });
  describe('MINUTES TO HOUR MINUTE', () => {
    it('\'1990\' when use \'addMonths\' must return \'33:10\'', () => {
      assert.equal(Dates.minutesToHourMinute(1990), '33:10');
    });
    it('\'340\' when use \'addMonths\' must return \'5:40\'', () => {
      assert.equal(Dates.minutesToHourMinute(340), '5:40');
    });
    it('\'420\' when use \'addMonths\' must return \'7:00\'', () => {
      assert.equal(Dates.minutesToHourMinute(420), '7:00');
    });
  });
  describe('HOUR MINUTE TO MINUTES', () => {
    it('\'00:10\' when use \'hourMinuteToMinutes\' must return \'10\'', () => {
      assert.equal(Dates.hourMinuteToMinutes('00:10'), '10');
    });
    it('\'03:31\' when use \'hourMinuteToMinutes\' must return \'211\'', () => {
      assert.equal(Dates.hourMinuteToMinutes('03:31'), '211');
    });
  });
  describe('MASK HOUR MINUTES', () => {
    it('\'1500\' when use \'maskHourMinutes\' must return \'15:00\'', () => {
      assert.equal(Dates.maskHourMinutes('1500'), '15:00');
    });
  });
  describe('MASK MONTH YEAR PT', () => {
    it('\'1990-07\' when use \'maskMonthYearPt\' must return \'07/1990\'', () => {
      assert.equal(Dates.maskMonthYearPt('1990-07'), '07/1990');
    });
    it('\'2019-03\' when use \'maskMonthYearPt\' must return \'03/2019\'', () => {
      assert.equal(Dates.maskMonthYearPt('2019-03'), '03/2019');
    });
  });
  describe('YEAR MONTH TO MONTH INPUT', () => {
    it('\'new Date(2019, 3)\' when use \'yearMonthToMonthInput\' must return \'2019-04\'', () => {
      assert.equal(Dates.yearMonthToMonthInput(new Date(2019, 3)), '2019-04');
    });
  });
  describe('DAY NUMBER TODAY WEEK', () => {
    it('\'3\' when use \'dayNumberToDayWeek\' must return \'Quarta\'', () => {
      assert.equal(Dates.dayNumberToDayWeek(3), 'Quarta');
    });
    it('\'2\' when use \'dayNumberToDayWeek\' must return \'Terça\'', () => {
      assert.equal(Dates.dayNumberToDayWeek(2), 'Terça');
    });
    it('\'5\' when use \'dayNumberToDayWeek\' must return \'Sexta\'', () => {
      assert.equal(Dates.dayNumberToDayWeek(5), 'Sexta');
    });
  });
  describe('MONTH NUMBER TO MONTH STRING', () => {
    it('\'1\' when use \'monthNumberToMonthString\' must return \'Fevereiro\'', () => {
      assert.equal(Dates.monthNumberToMonthString(1), 'Fevereiro');
    });
    it('\'5\' when use \'monthNumberToMonthString\' must return \'Junho\'', () => {
      assert.equal(Dates.monthNumberToMonthString(5), 'Junho');
    });
    it('\'8\' when use \'monthNumberToMonthString\' must return \'Fevereiro\'', () => {
      assert.equal(Dates.monthNumberToMonthString(8), 'Setembro');
    });
  });
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
});
