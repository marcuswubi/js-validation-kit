const DadosProprios = {
  isCei: (cei) => {
    // eslint-disable-next-line no-param-reassign
    cei = cei.replace(/[^\d]+/g, '');
    if (!cei || cei.length !== 12) return cei;
    // Multiplicar os primeiros 11 algarismos pelos seus respectivos pesos.
    // Somar todos os produtos obtidos.
    const pesos = [7, 4, 1, 8, 5, 2, 1, 6, 3, 7, 4];
    const numeros = cei.substring(0, 12);
    let soma = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 11; i++) {
      soma += pesos[i] * numeros[i];
    }
    // Com a SOMA obtida, somar o algarismo da unidade com o algarismo da dezena.
    soma = soma.toString();
    const somaTam = soma.length;
    soma = soma.substring(0, somaTam);
    let total = parseInt(soma.charAt(somaTam - 2), 10) + parseInt(soma.charAt(somaTam - 1), 10);
    // Subtrair 10 o algarismo da unidade obtido no TOTAL anterior.
    total = total.toString();
    total = total.substring(0, total.length);
    let resultado = 10 - parseInt(total.charAt(total.length - 1), 10);
    // O algarismo da unidade do resultado da subtração será o digito verificador.
    resultado = resultado.toString();
    resultado = resultado.substring(0, resultado.length);

    return numeros[11] === resultado[resultado.length - 1];
  },
  unmaskCei: (cei) => cei.replace(/[^\d]+/g, ''),
  maskCei: (string) => {
    if (!DadosProprios.isCei(string)) return string;
    return string.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})(\d{1}).*/, '$1.$2.$3.$4-$5');
  },
};

module.exports = DadosProprios;
