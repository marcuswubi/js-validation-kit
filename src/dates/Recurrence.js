const Recurrence = {
  recur: (
    startDate,
    duration,
    billFirstMonth = false,
    maturity_day = 15,
    billing_day = 5,
    skipWeekend = true,
  ) => {
    // create dates until arrive duration
    const recorrencias = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < duration; i++) {
      const maturity = new Date(startDate);
      maturity.setUTCDate(maturity_day);
      // treatment to consider the first possible date as valid for bill
      let addMesVencimento = i + 1;
      // eslint-disable-next-line no-plusplus
      if (billFirstMonth) addMesVencimento--;
      maturity.setUTCMonth(maturity.getUTCMonth() + addMesVencimento);
      // valid if you block bill on weekends
      const day = maturity.getDay();
      if (skipWeekend && day === 6) maturity.setUTCDate(maturity.getDate() + 2);
      if (skipWeekend && day === 0) maturity.setUTCDate(maturity.getDate() + 1);

      const competence = new Date(startDate);
      competence.setUTCMonth(competence.getUTCMonth() + i);
      competence.setUTCDate(1);

      const billingAt = new Date(startDate);
      billingAt.setUTCMonth(billingAt.getUTCMonth() + addMesVencimento);
      billingAt.setUTCDate(billing_day);

      recorrencias.push({
        competence,
        billingAt,
        maturity,
      });
    }

    return recorrencias;
  },
};
module.exports = Recurrence;
