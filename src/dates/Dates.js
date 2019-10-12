const moment = require('moment');

const Dates = {
  formatDate: (date, pattern) => moment(date).format(pattern),
  milliToDays: (milliseconds) => milliseconds / 24 / 60 / 60 / 1000,
  milli_to_months: (milliseconds) => {
    const monthMilli = 2629746000; // gregorian calendar
    return milliseconds / monthMilli;
  },
  // eslint-disable-next-line max-len
  date_to_utc: (date) => new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0, 0),
  days_between: (firstDate, secondDate, utc) => {
    if (!utc) return Dates.to_days(secondDate - firstDate);
    return Dates.to_days(Dates.date_to_utc(secondDate) - Dates.date_to_utc(firstDate));
  },
  months_between: (firstDate, secondDate, utc) => {
    if (!utc) return Dates.milli_to_months(firstDate - secondDate);
    return Dates.milli_to_months(Dates.toUTC(firstDate) - Dates.toUTC(secondDate));
  },
  // eslint-disable-next-line max-len
  daysInMonth: (year, month) => Dates.milliToDays(Date.UTC(year, month + 1, 1) - Date.UTC(year, month, 1)),
  daysInYear: (year) => Dates.milliToDays(Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)),
  removeMinutes: (date, minutes) => new Date(date.getTime() - minutes * 60000),
  dateToMonthDay: (date) => `${(`0${date.getDate()}`).substr(-2)}/${(`0${date.getMonth() + 1}`).substr(-2)}`,
  minutesToHourMinute: (minutes) => {
    if (!minutes || typeof minutes !== 'number') return undefined;

    let hours = 0;
    let modMinutes = minutes;

    for (let i = 60; i <= minutes; i += 60) {
      hours += 1;
      modMinutes -= 60;
    }
    modMinutes = (`0${modMinutes}`).substr(-2);

    return `${hours}:${modMinutes}`;
  },
  hourMinuteToMinutes: (timeString) => {
    if (timeString && typeof timeString === 'string') {
      // Split "12:34" by ":", [0] = hours and [1] = minutes.
      const timeArray = timeString.split(':');
      return parseInt(timeArray[1], 10) + parseInt(timeArray[0], 10) * 60;
    }
  },
  maskHourMinutes: (val) => val.replace(/(\d{2})(\d)/, '$1:$2'),
  // Transform: "hh:mm" -> Float (hours).
  hourMinuteToFloat: (timeString) => {
    if (timeString && typeof timeString === 'string') return undefined;
    const minutes = Dates.transformTimeStringToMinutes(timeString);
    return minutes && minutes / 60;
  },
  // Transform: "YYYY-MM" -> "MM/YYYY".
  maskMonthYearPt: (string) => {
    if (!string || typeof string !== 'string' || string.length !== 7) return undefined;
    return `${string.substr(5, 2)}/${string.substr(0, 4)}`;
  },
  // Transform: Date -> "YYYY-MM"
  yearMonthToMonthInput: (date) => `${date.getFullYear()}-${(`0${date.getMonth() + 1}`).substr(-2)}`,
  dayNumberToDayWeek: (dayNumber, short) => {
    let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    if (short === true) weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    return weekDays[dayNumber];
  },
  monthNumberToMonthString: (monthNumber) => [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ][monthNumber],
  diffDays: (d1, d2) => {
    const timeDiff = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  },
  diffMonths: (d1, d2) => {
    const timeDiff = Math.abs(d2.getTime() - d1.getTime());
    const diffDias = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return Math.floor(diffDias / 30);
  },
  addMonths: (date, meses) => {
    date.setUTCMonth(date.getUTCMonth() + meses);
    return date;
  },
  removeMonths: (date, meses) => {
    date.setUTCMonth(date.getUTCMonth() + meses);
    return date;
  },
};

module.exports = Dates;
