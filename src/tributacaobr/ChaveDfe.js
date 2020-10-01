import UF from '../geo/Uf';
import TributacaoBr from './TributacaoBr';

const String = require('../strings/Strings');

// https://nstecnologia.com.br/blog/digito-verificador-da-chave-de-acesso/
// https://gist.github.com/renatoargh/5589104

// Composição da Chave:
// Código da UF + Data da emissão + CNPJ do Emitente + Modelo +
// Série + Número da NFe + Código Numérico + Dígito Verificador.
const ChaveDfe = {
  /**
   * @param chave
   * @param retornarResto
   * @param multiplicadores
   * @returns {number}
   * @private
   */
  calculaModulo11: (chave, retornarResto = false, multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9]) => {
    let i = 0;
    const chave43 = chave.length === 44 ? String.removeCharRight(chave, 1) : chave;
    const resto = chave43
      .split('')
      .reduceRight((anterior, atual) => {
        if (i > multiplicadores.length - 1) i = 0;
        return (multiplicadores[i + 1] * parseInt(atual, 10)) + anterior;
      }, 0) % 11;

    const digitoVerificador = (11 - resto >= 10 ? 0 : 11 - resto);
    return retornarResto ? resto : digitoVerificador;
  },
  /**
   * @param chave
   * @returns {boolean}
   * @private
   */
  validaDigitoVerificador: (chave) => {
    const digitoVerificadorFornecido = String.removeCharLeft(chave, 43);
    const digitoVerificadorCalculado = this.calculaModulo11(chave);

    return digitoVerificadorFornecido === digitoVerificadorCalculado;
  },
  /**
   * @param chave
   * @returns {boolean}
   */
  extractFromChave: (chave) => {
    if (chave.length !== 44) return false;
    if (this.validaDigitoVerificador(chave)) return false;

    const uf = chave.substring(0, 2);

    const ano = chave.substring(2, 4);
    const mes = chave.substring(4, 6);
    const mesAno = `${mes}/${ano}`;
    const dataEmissao = new Date(ano, mes);

    const cnpj = chave.substring(6, 20);
    const x = cnpj
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    const cnpjMasked = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');

    return {
      uf,
      ano,
      mes,
      mesAno,
      dataEmissao,
      cnpj,
      cnpjMasked,
    };
  },
  /**
   * @param chave
   * @returns {boolean}
   */
  chaveError: (chave) => {
    if (chave.length !== 44) return `Tamanho da Chave inválido [${chave.length}], chave falsa.`;

    if (this.validaDigitoVerificador(chave)) return 'Digito verificador inválido, chave falsa.';

    const uf = chave.substring(0, 2);
    if (!UF.ufsIbge.includes(uf)) return 'UF inválida, chave falsa.';

    const ano = chave.substring(2, 4);
    const mes = chave.substring(4, 6);
    const dataEmissaoInvalida = Number.isNaN(new Date(ano, mes).getTime());
    if (dataEmissaoInvalida) return 'Data Emissão inválida, chave falsa.';

    const cnpj = chave.substring(6, 20);
    if (!TributacaoBr.isFederalNumber(cnpj)) return `CNPJ inválido, chave falsa. [${cnpj}]`;

    return false;
  },
};

export default ChaveDfe;
