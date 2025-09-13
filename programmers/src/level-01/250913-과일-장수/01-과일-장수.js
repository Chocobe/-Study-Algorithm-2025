/**
 * 문제: _과일 장수_
 * 
 * 난이도: _Level 1_
 * 
 * 성공여부: _성공_
 * 
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/135808
 * 
 * @param { number } k
 * @param { number } m
 * @param { number[] } score
 * @returns { number }
 */
export function solution(k, m, score) {
  score.sort((a, b) => b - a);

  const numOfBoxes = Math.floor(score.length / m);
  const minPrices = Array(numOfBoxes).fill(Infinity);

  for (let i = 0; i < numOfBoxes * m; i++) {
    const minPricesIndex = Math.floor(i / m);
    minPrices[minPricesIndex] = Math.min(minPrices[minPricesIndex], score[i]);
  }

  return minPrices.reduce((result, price) => {
    return result + price * m;
  }, 0);
};
