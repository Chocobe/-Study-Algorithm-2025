/**
 * @param { number } k
 * @param { number[] } score
 * @returns { number[] }
 */
export function solution(k, score) {
  const hall = [];
  const results = [];

  score.forEach(s => {
    hall.push(s);
    hall.sort((a, b) => b - a).splice(k);

    results.push(hall[hall.length - 1]);
  });

  return results;
};
