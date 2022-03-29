export const sortByName = (list) => {
  return [...list].sort((a, b) => (a.titulo > b.titulo ? 1 : -1));
};

const sortAllCriteria = (list) =>
  [...list].sort((a, b) =>
    a.nota > b.nota
      ? -1
      : a.nota === b.nota
      ? a.ano > b.ano
        ? -1
        : a.ano === b.ano
        ? -1
        : 1
      : 1
  );

export const sortGames = (list) => {
  const orderedByTitle = sortByName(list);
  let semiFinals = [];
  let finals = [];
  for (let i = 0; i < orderedByTitle.length / 2; i++) {
    const games = [
      orderedByTitle[i],
      orderedByTitle[orderedByTitle.length - (i + 1)],
    ];
    const results = sortAllCriteria(games);
    semiFinals.push(results[0]);
  }
  if (orderedByTitle.length === 4) {
    return sortAllCriteria(semiFinals);
  } else {
    for (let i = 0; i <= semiFinals.length / 2; i += 2) {
      const games = [semiFinals[i], semiFinals[i + 1]];
      const results = sortAllCriteria(games);
      finals.push(results[0]);
    }
    return sortAllCriteria(finals);
  }
};
