const Dates = {
	milli_to_days: milliseconds => milliseconds / 24 / 60 / 60 / 1000,
	milli_to_months: milliseconds => {
		const month_milli = 2629746000; //gregorian calendar
		return milliseconds / month_milli;
	},
	date_to_utc: date => {
		return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0, 0);
	},
	days_between: (date_1, date_2, utc) => {
		if (!utc) return Dates.to_days(date_2 - date_1);
		return Dates.to_days(Dates.date_to_utc(date_2) - Dates.date_to_utc(date_1));
	},
	months_between: (date_1, date_2, utc) => {
		if (!utc) return Dates.milli_to_months(date_1 - date_2);
		return Dates.milli_to_months(Dates.toUTC(date_1) - Dates.toUTC(date_2));
	},
	days_in_month: (year, month) => {
		return Dates.milli_to_days(Date.UTC(year, month + 1, 1) - Date.UTC(year, month, 1));
	},
	days_in_year: year => {
		return Dates.milli_to_days(Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1));
	},
	remove_minutes: (date, minutes) => {
		return new Date(date.getTime() - minutes * 60000);
	},
	date_to_month_day: date => {
		return ('0' + date.getDate()).substr(-2) + '/' + ('0' + (date.getMonth() + 1)).substr(-2);
	},
	minutes_to_hour_minute: minutes => {
		if (minutes && typeof minutes === 'number') {
			let hours = 0;
			let modMinutes = minutes;

			for (let i = 60; i <= minutes; i = i + 60) {
				hours++;
				modMinutes = modMinutes - 60;
			}
			modMinutes = ('0' + modMinutes).substr(-2);

			return hours + ':' + modMinutes;
		}
	},
	hour_minute_to_minutes: time_string => {
		if (time_string && typeof time_string === 'string') {
			// Split "12:34" by ":", [0] = hours and [1] = minutes.
			const time_array = time_string.split(':');
			return parseInt(time_array[1]) + parseInt(time_array[0]) * 60;
		}
	},
	mask_hour_minutes: val => val.replace(/(\d{2})(\d)/, '$1:$2'),
	//Transform: "hh:mm" -> Float (hours).
	hour_minute_to_float: time_string => {
		if (time_string && typeof time_string === 'string') {
			let minutes = transformTimeStringToMinutes(time_string);
			return minutes && minutes / 60;
		}
	},
	// Transform: "YYYY-MM" -> "MM/YYYY".
	mask_month_year_pt: string => {
		if (string && typeof string === 'string' && string.length === 7) {
			return string.substr(5, 2) + '/' + string.substr(0, 4);
		}
	},
	// Transform: Date -> "YYYY-MM"
	year_month_to_month_input: date => date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).substr(-2),
	day_number_to_day_week: (day_number, short) => {
		let week_days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
		if (short === true) week_days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

		return week_days[day_number];
	},
	month_number_to_month_string: month_number => {
		return [
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
		][month_number];
	},
	diff_dias: (d1, d2) => {
		const timeDiff = Math.abs(d2.getTime() - d1.getTime());
		return Math.ceil(timeDiff / (1000 * 3600 * 24));
	},
	diff_meses: (d1, d2) => {
		const timeDiff = Math.abs(d2.getTime() - d1.getTime());
		const diffDias = Math.ceil(timeDiff / (1000 * 3600 * 24));

		return Math.floor(diffDias / 30);
	},
	add_meses: (date, meses) => {
		date.setUTCMonth(date.getUTCMonth() + meses);
		return date;
	},
	del_meses: (date, meses) => {
		date.setUTCMonth(date.getUTCMonth() + meses);
		return date;
	},
};

module.exports = Dates;
