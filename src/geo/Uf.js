const ufs = [
  {
    ibge: 11,
    nome: 'Rondônia',
    sigla: 'RO',
  },
  {
    ibge: 12,
    nome: 'Acre',
    sigla: 'AC',
  },
  {
    ibge: 13,
    nome: 'Amazonas',
    sigla: 'AM',
  },
  {
    ibge: 14,
    nome: 'Roraima',
    sigla: 'RR',
  },
  {
    ibge: 15,
    nome: 'Pará',
    sigla: 'PA',
  },
  {
    ibge: 16,
    nome: 'Amapá',
    sigla: 'AP',
  },
  {
    ibge: 17,
    nome: 'Tocantins',
    sigla: 'TO',
  },
  {
    ibge: 21,
    nome: 'Maranhão',
    sigla: 'MA',
  },
  {
    ibge: 22,
    nome: 'Piauí',
    sigla: 'PI',
  },
  {
    ibge: 23,
    nome: 'Ceará',
    sigla: 'CE',
  },
  {
    ibge: 24,
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
  },
  {
    ibge: 25,
    nome: 'Paraíba',
    sigla: 'PB',
  },
  {
    ibge: 26,
    nome: 'Pernambuco',
    sigla: 'PE',
  },
  {
    ibge: 27,
    nome: 'Alagoas',
    sigla: 'AL',
  },
  {
    ibge: 28,
    nome: 'Sergipe',
    sigla: 'SE',
  },
  {
    ibge: 29,
    nome: 'Bahia',
    sigla: 'BA',
  },
  {
    ibge: 31,
    nome: 'Minas Gerais',
    sigla: 'MG',
  },
  {
    ibge: 32,
    nome: 'Espírito Santo',
    sigla: 'ES',
  },
  {
    ibge: 33,
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
  },
  {
    ibge: 35,
    nome: 'São Paulo',
    sigla: 'SP',
  },
  {
    ibge: 41,
    nome: 'Paraná',
    sigla: 'PR',
  },
  {
    ibge: 42,
    nome: 'Santa Catarina',
    sigla: 'SC',
  },
  {
    ibge: 43,
    nome: 'Rio Grande do Sul',
    sigla: 'RS',
  },
  {
    ibge: 50,
    nome: 'Mato Grosso do Sul',
    sigla: 'MS',
  },
  {
    ibge: 51,
    nome: 'Mato Grosso',
    sigla: 'MT',
  },
  {
    ibge: 52,
    nome: 'Goiás',
    sigla: 'GO',
  },
  {
    ibge: 53,
    nome: 'Distrito Federal',
    sigla: 'DF',
  },
];

const UF = {
  ufs,
  ufsIbge: ufs.map((uf) => uf.ibge),
  ufsNome: ufs.map((uf) => uf.nome),
  ufsSigla: ufs.map((uf) => uf.sigla),
};

export default UF;
