const Recurrence = {
	recur: (
		start_date,
		duration,
		bill_first_month = false,
		maturity_day = 15,
		billing_day = 5,
		skip_weekend = true
	) => {
		//create dates until arrive duration
		const recorrencias = [];
		for (let i = 0; i < duration; i++) {
			const maturity = new Date(start_date);
			maturity.setUTCDate(maturity_day);
			//Tratamento para considerar a primeira data como valida pra cobrança ou não
			let addMesVencimento = i + 1;
			if (bill_first_month) addMesVencimento--;
			maturity.setUTCMonth(maturity.getUTCMonth() + addMesVencimento);
			//Valida se bloqueia finais de semana e se o dia é sabado ou domingo
			const day = maturity.getDay();
			if (skip_weekend && day === 6) maturity.setUTCDate(maturity.getDate() + 2);
			if (skip_weekend && day === 0) maturity.setUTCDate(maturity.getDate() + 1);

			const competence = new Date(start_date);
			competence.setUTCMonth(competence.getUTCMonth() + i);
			competence.setUTCDate(1);

			const billing_at = new Date(start_date);
			billing_at.setUTCMonth(billing_at.getUTCMonth() + addMesVencimento);
			billing_at.setUTCDate(billing_day);

			recorrencias.push({
				competence,
				billing_at,
				maturity,
			});
		}

		return recorrencias;
	},
};
module.exports = Recurrence;
