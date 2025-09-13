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
  let total = 0;

  for (let i = m - 1; i < score.length; i += m) {
    total += score[i] * m;
  }

  return total;
};
