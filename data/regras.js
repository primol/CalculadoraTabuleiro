// Cada regra vale para um intervalo de cinco dias.
export const regrasPadrao = Array.from({ length: 6 }, (_, index) => {
  const inicio = index * 5 + 1;
  const fim = inicio + 4;
  return {
    inicio,
    fim,
    torrer: 100 + inicio * 10,
    perk: 200 + inicio * 20,
    terreno: 300 + inicio * 25,
  };
});

const STORAGE_KEY = 'regras_jogo_cartas';

export const getRegras = () => {
  const salvas = localStorage.getItem(STORAGE_KEY);
  if (salvas) {
    try {
      const regrasSalvas = JSON.parse(salvas);
      if (regrasSalvas.length && regrasSalvas[0].inicio !== undefined) {
        return regrasSalvas;
      }
    } catch (e) {
      console.error('Erro ao ler regras do localStorage', e);
    }
  }
  return regrasPadrao;
};

export const saveRegras = (novasRegras) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(novasRegras));
};